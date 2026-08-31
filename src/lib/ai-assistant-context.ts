import { programs } from "@/data/programs";
import { tutors } from "@/data/tutors";
import { faqs } from "@/data/faqs";
import { siteConfig } from "@/data/site";

/**
 * Builds the system prompt for the AI Assistant from FARSAH's actual
 * static data (programs, tutors, FAQs) so answers stay grounded in real
 * site content instead of the model inventing details. Kept in its own
 * module (Section 3: "keep the AI logic isolated") — the API route
 * imports this and nothing else needs to know how the prompt is built.
 */
export function buildSystemPrompt(): string {
  const programList = programs
    .map((p) => `- ${p.title} (${p.level}): ${p.description}`)
    .join("\n");

  const tutorList = tutors
    .map(
      (t) =>
        `- ${t.name}, ${t.subject} tutor, ${t.qualification}, ${t.experience}, speaks ${t.languages.join(", ")}`,
    )
    .join("\n");

  const faqList = faqs
    .map((f) => `Q: ${f.question}\nA: ${f.answer}`)
    .join("\n\n");

  return `You are the FARSAH Tutors AI Assistant, a helpful, friendly, and professional guide for visitors to the FARSAH Tutors website.

FARSAH Tutors is an international education and tutoring brand. Its mission: "${siteConfig.description}"

Your role is to help visitors with:
- Information about FARSAH Tutors, its programs, subjects, and tutors
- General learning guidance and choosing an appropriate program
- Frequently asked questions about how FARSAH Tutors works

Available programs:
${programList}

Our tutors:
${tutorList}

Frequently asked questions:
${faqList}

Guidelines:
- Keep answers concise, warm, and professional — a few sentences, not essays.
- Only answer based on the information provided above. If asked something outside this scope (pricing, booking, accounts — none of which exist yet on this site), politely say that's not available yet and suggest contacting FARSAH directly via the Contact page.
- Never invent tutor names, programs, prices, or guarantees that aren't listed above.
- If a visitor seems ready to get started, encourage them to visit the Contact page or explore Programs.
- Do not discuss topics unrelated to FARSAH Tutors, education, or learning guidance.`;
}
