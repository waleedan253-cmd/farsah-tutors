import type { Metadata } from "next";
import AntdProvider from "@/components/common/AntdProvider";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloatButton from "@/components/common/WhatsAppFloatButton";
import AIChat from "@/components/common/Aichat";
import "./globals.css";

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
          <AIChat />
          <WhatsAppFloatButton />
        </AntdProvider>
      </body>
    </html>
  );
}
