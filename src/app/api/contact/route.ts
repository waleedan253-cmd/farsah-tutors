import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidPayload(body: unknown): body is ContactPayload {
  if (typeof body !== "object" || body === null) return false;
  const b = body as Record<string, unknown>;
  return (
    typeof b.name === "string" &&
    b.name.trim().length > 0 &&
    typeof b.email === "string" &&
    EMAIL_RE.test(b.email) &&
    typeof b.message === "string" &&
    b.message.trim().length > 0
  );
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * POST /api/contact
 * Server-side only route: validates the submitted form (name, email,
 * message), then emails a notification via Resend to the FARSAH inbox.
 * `RESEND_API_KEY` and `CONTACT_TO_EMAIL` live in .env.local and are
 * never sent to the browser. Errors are logged server-side but returned
 * to the client as a generic message (Section 32/33).
 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  if (!isValidPayload(body)) {
    return NextResponse.json(
      {
        success: false,
        error: "Please fill in all required fields correctly.",
      },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL ?? "FARSAH Tutors <onboarding@resend.dev>";

  if (!apiKey || !toEmail) {
    console.error(
      "[api/contact] Missing RESEND_API_KEY or CONTACT_TO_EMAIL env vars.",
    );
    return NextResponse.json(
      {
        success: false,
        error: "Message could not be sent right now. Please try again later.",
      },
      { status: 500 },
    );
  }

  const { name, email, message } = body;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `New enquiry from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
      `,
    });

    if (error) {
      console.error("[api/contact] Resend error:", error);
      return NextResponse.json(
        {
          success: false,
          error: "Message could not be sent right now. Please try again later.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[api/contact] Unexpected error:", err);
    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong. Please try again later.",
      },
      { status: 500 },
    );
  }
}
