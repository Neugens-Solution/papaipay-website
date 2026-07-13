import { NextResponse } from "next/server";

import type { FormSubmission } from "../../../lib/form-submission";
import {
  assertGoogleSheetsConfig,
  saveGoogleSheetsSubmission,
} from "../../../lib/google-sheets";
import { assertMondayConfig, createMondayItem } from "../../../lib/monday";

export const runtime = "nodejs";

type Payload = Partial<
  Omit<FormSubmission, "submissionId" | "details">
> & {
  details?: unknown;
  website?: unknown;
};

type ValidatedSubmission = Omit<FormSubmission, "submissionId">;

const limits = {
  formType: 80,
  source: 200,
  name: 120,
  email: 160,
  phone: 40,
  company: 160,
  enquiryType: 120,
  message: 3000,
};

function text(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function safeErrorMessage(error: unknown) {
  return error instanceof Error ? error.message : "Unknown error";
}

function validate(payload: Payload) {
  if (text(payload.website)) return { ok: true as const, spam: true as const };

  const submission: ValidatedSubmission = {
    formType: text(payload.formType),
    source: text(payload.source),
    name: text(payload.name),
    email: text(payload.email),
    phone: text(payload.phone),
    company: text(payload.company),
    enquiryType: text(payload.enquiryType),
    message: text(payload.message),
    details:
      typeof payload.details === "object" && payload.details
        ? Object.fromEntries(
            Object.entries(payload.details).map(([key, value]) => [
              key,
              text(value),
            ]),
          )
        : {},
  };

  if (!submission.formType)
    return { ok: false as const, error: "Form type is required." };
  if (!submission.source)
    return { ok: false as const, error: "Source page is required." };
  if (!submission.name)
    return { ok: false as const, error: "Name is required." };
  if (!submission.email)
    return { ok: false as const, error: "Email is required." };
  if (!submission.phone)
    return { ok: false as const, error: "Phone number is required." };

  for (const [field, max] of Object.entries(limits)) {
    const value = submission[field as keyof ValidatedSubmission];
    if (typeof value === "string" && value.length > max)
      return { ok: false as const, error: `${field} is too long.` };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(submission.email || ""))
    return { ok: false as const, error: "Please enter a valid email address." };
  if (submission.message && submission.message.length < 3)
    return { ok: false as const, error: "Message is too short." };

  return { ok: true as const, spam: false as const, submission };
}

export async function POST(request: Request) {
  let payload: Payload;
  try {
    payload = (await request.json()) as Payload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON payload." },
      { status: 400 },
    );
  }

  const validation = validate(payload);
  if (!validation.ok)
    return NextResponse.json(
      { ok: false, error: validation.error },
      { status: 400 },
    );
  if (validation.spam) return NextResponse.json({ ok: true });

  if (!assertGoogleSheetsConfig()) {
    console.error("Google Sheets form configuration is incomplete or invalid.");
    return NextResponse.json(
      { ok: false, error: "Unable to submit the form right now." },
      { status: 500 },
    );
  }

  const submission: FormSubmission = {
    ...validation.submission,
    submissionId: crypto.randomUUID(),
  };

  try {
    await saveGoogleSheetsSubmission(submission);
  } catch (error) {
    console.error(
      "Primary Google Sheets form submission failed.",
      safeErrorMessage(error),
    );
    return NextResponse.json(
      { ok: false, error: "Unable to submit the form right now." },
      { status: 502 },
    );
  }

  if (!assertMondayConfig()) {
    console.error("Monday.com secondary form configuration is incomplete.");
  } else {
    try {
      await createMondayItem(submission);
    } catch (error) {
      console.error(
        "Monday.com secondary form submission failed.",
        safeErrorMessage(error),
      );
    }
  }

  return NextResponse.json({ ok: true });
}
