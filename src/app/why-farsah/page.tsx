import type { Metadata } from "next";
import PageHero from "@/components/common/Pagehero";
import ValuePropsGrid from "@/components/why-farsah/Valuepropsgrid";
import CTASection from "@/components/common/Ctasection";

export const metadata: Metadata = {
  title: "Why FARSAH",
  description:
    "See what sets FARSAH Tutors apart — personalized learning, expert tutors, flexible scheduling, and a genuinely student-focused approach.",
  alternates: { canonical: "/why-farsah" },
};

export default function WhyFarsahPage() {
  return (
    <>
      <PageHero
        eyebrow="Why FARSAH"
        title="What Makes FARSAH Tutors Different"
        description="Six reasons students and parents choose FARSAH Tutors for personalized, results-driven academic support."
      />
      <ValuePropsGrid />
      <CTASection
        title="See the difference for yourself"
        description="Explore our programs or connect with a tutor to get started."
        primaryLabel="Explore Programs"
        primaryHref="/programs"
        secondaryLabel="Meet Our Tutors"
        secondaryHref="/tutors"
      />
    </>
  );
}
