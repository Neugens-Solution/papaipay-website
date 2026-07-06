import { NextResponse } from "next/server";

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

  if (!assertMondayConfig()) {
    console.error("Monday.com complaint configuration is incomplete.");
    return NextResponse.json(
      { ok: false, error: "Unable to send complaint right now." },
      { status: 500 },
    );
  }

  try {
    await createMondayItem({
      formType: "Complaint",
      source: "Complaint widget",
      name: validation.complaint.fullName,
      email: validation.complaint.email,
      phone: validation.complaint.phone,
      enquiryType: validation.complaint.category,
      message: validation.complaint.message,
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Complaint Monday.com submission failed.", error);
    return NextResponse.json(
      { ok: false, error: "Unable to send complaint right now." },
      { status: 502 },
    );
  }
}
