import type { Metadata } from "next";
import PageHero from "@/components/common/Pagehero";
import FAQAccordion from "@/components/faq/Faqaccordion";
import CTASection from "@/components/common/Ctasection";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions from students, parents, and tutors about FARSAH Tutors' programs and how learning works.",
  alternates: { canonical: "/faq" },
};

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        description="Answers organized by who's asking  students, parents, and beyond."
      />
      <FAQAccordion />
      <CTASection
        title="Still have questions?"
        description="Reach out directly or ask our AI Assistant for an instant answer."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        secondaryLabel="Ask AI Assistant"
        secondaryHref="/ai-assistant"
      />
    </>
  );
}
