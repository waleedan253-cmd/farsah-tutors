import type { Metadata } from "next";
import PageHero from "@/components/common/Pagehero";
import AIChat from "@/components/ai-assistant/Aichat";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "AI Assistant",
  description:
    "Ask the FARSAH Tutors AI Assistant about programs, subjects, tutors, and how to get started with personalized tutoring.",
  alternates: { canonical: "/ai-assistant" },
};

export default function AIAssistantPage() {
  return (
    <>
      <PageHero
        eyebrow="AI Assistant"
        title="Ask FARSAH Anything About Learning"
        description="Get quick, helpful answers about programs, subjects, and how FARSAH Tutors works."
      />
      <section className={styles.section}>
        <AIChat />
      </section>
    </>
  );
}
