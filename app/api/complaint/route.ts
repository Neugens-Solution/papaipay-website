import { NextResponse } from "next/server";

import type { FormSubmission } from "../../../lib/form-submission";
import {
  assertGoogleSheetsConfig,
  saveGoogleSheetsSubmission,
} from "../../../lib/google-sheets";
import { assertMondayConfig, createMondayItem } from "../../../lib/monday";

export const runtime = "nodejs";

type ComplaintPayload = {
  fullName?: unknown;
  email?: unknown;
  phone?: unknown;
  category?: unknown;
  message?: unknown;
  website?: unknown;
};

const limits = {
  fullName: 120,
  email: 160,
  phone: 40,
  category: 80,
  message: 3000,
};

const fieldLabels = {
  fullName: "Full name",
  email: "Email",
  phone: "Phone",
  category: "Complaint category",
  message: "Message",
};

function textValue(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function safeErrorMessage(error: unknown) {
  return error instanceof Error ? error.message : "Unknown error";
}

function complaintSource(request: Request) {
  const fallback = "Complaint widget";
  const referer = request.headers.get("referer");
  if (!referer) return fallback;

  try {
    const requestUrl = new URL(request.url);
    const refererUrl = new URL(referer);
    if (requestUrl.origin !== refererUrl.origin) return fallback;

    const path = refererUrl.pathname.slice(0, 180);
    return path && path !== "/" ? `${fallback}: ${path}` : fallback;
  } catch {
    return fallback;
  }
}

function validatePayload(payload: ComplaintPayload) {
  if (textValue(payload.website))
    return { ok: true as const, spam: true as const };

  const complaint = {
    fullName: textValue(payload.fullName),
    email: textValue(payload.email),
    phone: textValue(payload.phone),
    category: textValue(payload.category),
    message: textValue(payload.message),
  };

  for (const [field, label] of Object.entries(fieldLabels)) {
    const key = field as keyof typeof complaint;
    if (!complaint[key])
      return { ok: false as const, error: `${label} is required.` };
    if (complaint[key].length > limits[key])
      return { ok: false as const, error: `${label} is too long.` };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(complaint.email))
    return { ok: false as const, error: "Please enter a valid email address." };
  if (complaint.message.length < 10)
    return {
      ok: false as const,
      error: "Message must be at least 10 characters.",
    };

  return { ok: true as const, spam: false as const, complaint };
}

export async function POST(request: Request) {
  let payload: ComplaintPayload;
  try {
    payload = (await request.json()) as ComplaintPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON payload." },
      { status: 400 },
    );
  }

  const validation = validatePayload(payload);
  if (!validation.ok)
    return NextResponse.json(
      { ok: false, error: validation.error },
      { status: 400 },
    );
  if (validation.spam) return NextResponse.json({ ok: true });

  if (!assertGoogleSheetsConfig()) {
    console.error("Google Sheets complaint configuration is incomplete or invalid.");
    return NextResponse.json(
      { ok: false, error: "Unable to send complaint right now." },
      { status: 500 },
    );
  }

  const submission: FormSubmission = {
    submissionId: crypto.randomUUID(),
    formType: "Complaint",
    source: complaintSource(request),
    name: validation.complaint.fullName,
    email: validation.complaint.email,
    phone: validation.complaint.phone,
    enquiryType: validation.complaint.category,
    message: validation.complaint.message,
    details: {},
  };

  try {
    await saveGoogleSheetsSubmission(submission);
  } catch (error) {
    console.error(
      "Primary Google Sheets complaint submission failed.",
      safeErrorMessage(error),
    );
    return NextResponse.json(
      { ok: false, error: "Unable to send complaint right now." },
      { status: 502 },
    );
  }

  if (!assertMondayConfig()) {
    console.error("Monday.com secondary complaint configuration is incomplete.");
  } else {
    try {
      await createMondayItem(submission);
    } catch (error) {
      console.error(
        "Monday.com secondary complaint submission failed.",
        safeErrorMessage(error),
      );
    }
  }

  return NextResponse.json({ ok: true });
}
