import type { Metadata } from "next";
import AntdProvider from "@/components/common/AntdProvider";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloatButton from "@/components/common/WhatsAppFloatButton";
import "./globals.css";

// NOTE: next/font/google requires reaching fonts.googleapis.com at build
// time. In environments with normal internet access, swap this back to
// `Plus_Jakarta_Sans`/`Inter` from "next/font/google" for self-hosted,
// zero-layout-shift fonts. Font family names are already declared in
// globals.css (--font-display / --font-body) with system-font fallbacks,
// so this file only needs to stop importing next/font/google.

export const metadata: Metadata = {
  metadataBase: new URL("https://www.farsahtutors.com"),
  title: {
    default: "FARSAH Tutors — Personalized Learning, Exceptional Tutors",
    template: "%s | FARSAH Tutors",
  },
  description:
    "FARSAH Tutors is an international education brand offering personalized tutoring and academic support across subjects, levels, and countries.",
  openGraph: {
    type: "website",
    siteName: "FARSAH Tutors",
    title: "FARSAH Tutors — Personalized Learning, Exceptional Tutors",
    description:
      "Personalized tutoring and academic support from qualified, international tutors.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AntdProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppFloatButton />
        </AntdProvider>
      </body>
    </html>
  );
}
