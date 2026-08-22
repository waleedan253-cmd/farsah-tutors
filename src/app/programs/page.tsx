import type { Metadata } from "next";
import PageHero from "@/components/common/Pagehero";
import ProgramGrid from "@/app/programs/Programsgrid";
import CTASection from "@/components/common/Ctasection";

export const metadata: Metadata = {
  title: "Programs & Subjects",
  description:
    "Explore FARSAH Tutors' programs across Mathematics, English, Science, Computer Science, Languages, Test Preparation, Academic Support, and Professional Skills.",
  alternates: { canonical: "/programs" },
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="Programs Designed Around Every Learner"
        description="Browse subjects and levels to find the right fit — filter by category or level to narrow your search."
      />
      <ProgramGrid />
      <CTASection
        title="Not sure which program fits?"
        description="Talk to our AI Assistant or reach out directly and we'll help you choose."
        primaryLabel="Ask AI Assistant"
        primaryHref="/ai-assistant"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </>
  );
}
