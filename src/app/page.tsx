import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import TrustSection from "@/components/home/Trustsection";
import StatsSection from "@/components/home/Statssection";
import InternationalSection from "@/components/home/Internationalsection";
import CTASection from "@/components/common/Ctasection";

// Server Component: owns metadata + section order only. Actual antd-based
// UI lives in components/home/* (each "use client" per the pattern
// established in Step 3), keeping this route statically prerenderable.
export const metadata: Metadata = {
  title: "Personalized Tutoring & Academic Support",
  description:
    "Discover FARSAH Tutors — personalized, international tutoring across Mathematics, English, Science, Languages, and more. Explore programs and connect with expert tutors.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <br />
      <TrustSection />
      <StatsSection />
      <InternationalSection />
      <CTASection
        title="Ready to start learning with FARSAH?"
        description="Tell us your goals and we'll help you find the right program and tutor."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        secondaryLabel="Ask AI Assistant"
        secondaryHref="/ai-assistant"
      />
    </>
  );
}
