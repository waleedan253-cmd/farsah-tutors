import type { Metadata } from "next";
import PageHero from "@/components/common/Pagehero";
import ContactForm from "@/components/contact/Contactform";
import ContactInfo from "@/components/contact/Contactinfo";
import styles from "./Page.module.css";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with FARSAH Tutors — send a message, email us directly, or chat on WhatsApp to get started.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Start the Conversation"
        description="Have a question or ready to get started? Reach out and we'll help you find the right fit."
      />
      <section className={styles.section}>
        <div className={styles.grid}>
          <ContactForm />
          <ContactInfo />
        </div>
      </section>
    </>
  );
}
