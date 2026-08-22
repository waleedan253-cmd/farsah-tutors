import type { Metadata } from "next";
import PageHero from "@/components/common/Pagehero";
import StorySection from "@/app/about/Storysection";
import ValuesSection from "@/app/about/Valuessection";
import CTASection from "@/components/common/Ctasection";

// Server Component: metadata + section order only, matching the pattern
// from Home — antd-based UI (ValuesSection, CTASection) stays client-side
// in their own files so this route remains statically prerenderable.
export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about FARSAH Tutors' mission to make personalized, international tutoring accessible to students everywhere.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About FARSAH Tutors"
        title="Learning Built Around the Student"
        description="FARSAH Tutors is an international education brand connecting students with qualified tutors for personalized academic support."
      />
      <StorySection />
      <ValuesSection />
      <CTASection
        title="Want to know more about how we work?"
        description="See how FARSAH Tutors takes students from first conversation to real progress."
        primaryLabel="How It Works"
        primaryHref="/how-it-works"
        secondaryLabel="Meet Our Tutors"
        secondaryHref="/tutors"
      />
    </>
  );
}
