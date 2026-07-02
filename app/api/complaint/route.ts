import { NextResponse } from "next/server";
import net from "node:net";
import tls from "node:tls";

export const runtime = "nodejs";

type ComplaintPayload = {
  fullName?: unknown;
  email?: unknown;
  phone?: unknown;
  category?: unknown;
  message?: unknown;
  website?: unknown;
};

type Complaint = {
  fullName: string;
  email: string;
  phone: string;
  category: string;
  message: string;
};

type SmtpConfig = {
  host: string;
  port: number;
  user: string;
  pass: string;
  secure: boolean;
  from: string;
  to: string;
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
  if (textValue(payload.website)) {
    return { ok: true as const, spam: true as const };
  }

  const complaint = {
    fullName: textValue(payload.fullName),
    email: textValue(payload.email),
    phone: textValue(payload.phone),
    category: textValue(payload.category),
    message: textValue(payload.message),
  };

  for (const [field, label] of Object.entries(fieldLabels)) {
    const key = field as keyof typeof complaint;
    if (!complaint[key]) {
      return { ok: false as const, error: `${label} is required.` };
    }
    if (complaint[key].length > limits[key]) {
      return { ok: false as const, error: `${label} is too long.` };
    }
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(complaint.email)) {
    return { ok: false as const, error: "Please enter a valid email address." };
  }

  if (complaint.message.length < 10) {
    return { ok: false as const, error: "Message must be at least 10 characters." };
  }

  return { ok: true as const, spam: false as const, complaint };
}

function getSmtpConfig(): SmtpConfig {
  const port = Number(process.env.SMTP_PORT || "587");
  const secureValue = process.env.SMTP_SECURE?.toLowerCase();

  return {
    host: process.env.SMTP_HOST || "",
    port,
    user: process.env.SMTP_USER || "",
    pass: process.env.SMTP_PASS || "",
    secure: secureValue === "true" || port === 465,
    from: process.env.COMPLAINT_FROM_EMAIL || "",
    to: process.env.COMPLAINT_TO_EMAIL || "",
  };
}

function assertSmtpConfig(config: SmtpConfig) {
  return Boolean(config.host && config.port && config.user && config.pass && config.from && config.to);
}

function escapeHeader(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildEmail(complaint: Complaint, config: SmtpConfig) {
  const subject = `Papaipay complaint: ${complaint.category}`;
  const text = [
    "New complaint submitted from the Papaipay corporate website.",
    "",
    `Full name: ${complaint.fullName}`,
    `Email: ${complaint.email}`,
    `Phone: ${complaint.phone}`,
    `Category: ${complaint.category}`,
    "",
    "Message:",
    complaint.message,
  ].join("\n");
  const html = `
    <h2>New complaint submitted from the Papaipay corporate website</h2>
    <p><strong>Full name:</strong> ${escapeHtml(complaint.fullName)}</p>
    <p><strong>Email:</strong> ${escapeHtml(complaint.email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(complaint.phone)}</p>
    <p><strong>Category:</strong> ${escapeHtml(complaint.category)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(complaint.message).replace(/\n/g, "<br />")}</p>
  `;
  const boundary = `papaipay-${Date.now().toString(36)}`;

  return [
    `From: ${escapeHeader(config.from)}`,
    `To: ${escapeHeader(config.to)}`,
    `Reply-To: ${escapeHeader(complaint.email)}`,
    `Subject: ${escapeHeader(subject)}`,
    "MIME-Version: 1.0",
    `Content-Type: multipart/alternative; boundary="${boundary}"`,
    "",
    `--${boundary}`,
    "Content-Type: text/plain; charset=UTF-8",
    "Content-Transfer-Encoding: 8bit",
    "",
    text,
    `--${boundary}`,
    "Content-Type: text/html; charset=UTF-8",
    "Content-Transfer-Encoding: 8bit",
    "",
    html,
    `--${boundary}--`,
    "",
  ].join("\r\n");
}

async function sendSmtp(message: string, config: SmtpConfig) {
  let socket: net.Socket | tls.TLSSocket = config.secure
    ? tls.connect(config.port, config.host, { servername: config.host })
    : net.connect(config.port, config.host);

  let buffer = "";

  const waitFor = (expected: number[]) => new Promise<string>((resolve, reject) => {
    const timeout = setTimeout(() => reject(new Error("SMTP command timed out")), 15000);
    const onData = (chunk: Buffer) => {
      buffer += chunk.toString("utf8");
      const lines = buffer.split(/\r?\n/).filter(Boolean);
      const last = lines.at(-1);
      if (!last || /^\d{3}-/.test(last)) return;
      const code = Number(last.slice(0, 3));
      if (!expected.includes(code)) {
        cleanup();
        reject(new Error(`Unexpected SMTP response: ${code}`));
        return;
      }
      const response = buffer;
      buffer = "";
      cleanup();
      resolve(response);
    };
    const onError = (error: Error) => {
      cleanup();
      reject(error);
    };
    const cleanup = () => {
      clearTimeout(timeout);
      socket.off("data", onData);
      socket.off("error", onError);
    };
    socket.on("data", onData);
    socket.on("error", onError);
  });

  const command = async (line: string, expected: number[]) => {
    socket.write(`${line}\r\n`);
    return waitFor(expected);
  };

  await waitFor([220]);
  await command(`EHLO ${config.host}`, [250]);

  if (!config.secure) {
    await command("STARTTLS", [220]);
    socket.removeAllListeners("data");
    socket = tls.connect({ socket, servername: config.host });
    await new Promise<void>((resolve, reject) => {
      socket.once("secureConnect", resolve);
      socket.once("error", reject);
    });
    buffer = "";
    await command(`EHLO ${config.host}`, [250]);
  }

  await command(`AUTH PLAIN ${Buffer.from(`\0${config.user}\0${config.pass}`).toString("base64")}`, [235]);
  await command(`MAIL FROM:<${config.from}>`, [250]);
  await command(`RCPT TO:<${config.to}>`, [250, 251]);
  await command("DATA", [354]);
  await command(`${message}\r\n.`, [250]);
  await command("QUIT", [221]);
  socket.end();
}

export async function POST(request: Request) {
  let payload: ComplaintPayload;

  try {
    payload = (await request.json()) as ComplaintPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON payload." }, { status: 400 });
  }

  const validation = validatePayload(payload);
  if (!validation.ok) {
    return NextResponse.json({ ok: false, error: validation.error }, { status: 400 });
  }

  if (validation.spam) {
    return NextResponse.json({ ok: true });
  }

  const config = getSmtpConfig();
  if (!assertSmtpConfig(config)) {
    console.error("Complaint email configuration is incomplete.");
    return NextResponse.json({ ok: false, error: "Complaint service is not configured." }, { status: 500 });
  }

  try {
    await sendSmtp(buildEmail(validation.complaint, config), config);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Complaint email delivery failed.", error);
    return NextResponse.json({ ok: false, error: "Unable to send complaint right now." }, { status: 502 });
  }
}
