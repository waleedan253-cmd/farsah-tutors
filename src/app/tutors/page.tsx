import type { Metadata } from "next";
import PageHero from "@/components/common/Pagehero";
import TutorsGrid from "@/components/tutors/TutorsGrid";
import CTASection from "@/components/common/Ctasection";

export const metadata: Metadata = {
  title: "Meet Our Tutors",
  description:
    "Meet FARSAH Tutors' qualified educators — subject experts across Mathematics, English, Science, Computer Science, Languages, and Test Preparation.",
  alternates: { canonical: "/tutors" },
};

export default function TutorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Tutors"
        title="Meet the Educators Behind FARSAH"
        description="Qualified, experienced tutors focused on helping every student make real progress."
      />
      <TutorsGrid />
      <CTASection
        title="Ready to find your tutor?"
        description="Tell us your subject and goals and we'll help match you with the right educator."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        secondaryLabel="Explore Programs"
        secondaryHref="/programs"
      />
    </>
  );
}
