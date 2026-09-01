import { NextResponse } from "next/server";
import Groq from "groq-sdk";
import { buildSystemPrompt } from "@/lib/ai-assistant-context";

export const runtime = "nodejs";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

const MAX_MESSAGE_LENGTH = 1000;
const MAX_HISTORY = 12;

function isValidHistory(value: unknown): value is ChatMessage[] {
  if (!Array.isArray(value)) return false;
  if (value.length > MAX_HISTORY) return false;
  return value.every(
    (item) =>
      typeof item === "object" &&
      item !== null &&
      (item.role === "user" || item.role === "assistant") &&
      typeof item.content === "string" &&
      item.content.length > 0 &&
      item.content.length <= MAX_MESSAGE_LENGTH,
  );
}

/**
 * POST /api/ai-assistant
 * The only backend-powered feature on the site (Section 3). Validates
 * the request, forwards conversation history + a grounded system prompt
 * to Groq's free-tier chat completions API, and returns the reply.
 * GROQ_API_KEY lives in .env.local — server-side only, never sent to
 * the browser. Errors are logged but never exposed to the client raw.
 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request." },
      { status: 400 },
    );
  }

  const { messages } = (body ?? {}) as { messages?: unknown };

  if (!isValidHistory(messages) || messages.length === 0) {
    return NextResponse.json(
      { success: false, error: "Please send a valid message." },
      { status: 400 },
    );
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    console.error("[api/ai-assistant] Missing GROQ_API_KEY env var.");
    return NextResponse.json(
      { success: false, error: "AI Assistant is temporarily unavailable." },
      { status: 500 },
    );
  }

  try {
    const groq = new Groq({ apiKey });

    const completion = await groq.chat.completions.create({
      model: "openai/gpt-oss-120b",
      messages: [{ role: "system", content: buildSystemPrompt() }, ...messages],
      temperature: 0.4,
      max_tokens: 500,
    });

    const reply = completion.choices[0]?.message?.content?.trim();

    if (!reply) {
      return NextResponse.json(
        {
          success: false,
          error: "AI Assistant couldn't generate a response. Please try again.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true, reply });
  } catch (err) {
    console.error("[api/ai-assistant] Groq error:", err);
    return NextResponse.json(
      {
        success: false,
        error:
          "AI Assistant is temporarily unavailable. Please try again shortly.",
      },
      { status: 502 },
    );
  }
}
