import type { Metadata } from "next";
import PageHero from "@/components/common/Pagehero";
import ProcessTimeline from "@/components/how-it-works/Processtimeline";
import CTASection from "@/components/common/Ctasection";
import styles from "./Page.module.css";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "See how FARSAH Tutors takes students from sharing their goals to achieving real academic progress, in four simple steps.",
  alternates: { canonical: "/how-it-works" },
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How It Works"
        title="From First Conversation to Real Progress"
        description="A simple, four-step process designed to get students learning quickly, with the right support in place."
      />
      <section className={styles.timelineSection}>
        <ProcessTimeline />
      </section>
      <CTASection
        title="Ready to take the first step?"
        description="Tell us your goals and we'll help you get started right away."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        secondaryLabel="Explore Programs"
        secondaryHref="/programs"
      />
    </>
  );
}
