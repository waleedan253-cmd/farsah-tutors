import type { Metadata } from "next";
import PageHero from "@/components/common/Pagehero";
import TestimonialsGrid from "@/components/testimonials/Testimonialsgrid";
import CTASection from "@/components/common/Ctasection";

export const metadata: Metadata = {
  title: "Student Success",
  description:
    "Read what students and parents say about their experience learning with FARSAH Tutors.",
  alternates: { canonical: "/student-success" },
};

export default function StudentSuccessPage() {
  return (
    <>
      <PageHero
        eyebrow="Student Success"
        title="Real Progress, Told by Real Students"
        description="Feedback from students and parents on their experience with FARSAH Tutors."
      />
      <TestimonialsGrid />
      <CTASection
        title="Ready to start your own progress story?"
        description="Get in touch and we'll help you find the right tutor to begin."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        secondaryLabel="Explore Programs"
        secondaryHref="/programs"
      />
    </>
  );
}
