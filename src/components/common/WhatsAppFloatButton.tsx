"use client";

import { WhatsAppOutlined } from "@ant-design/icons";
import { siteConfig } from "@/data/site";
import styles from "./WhatsAppFloatButton.module.css";

export default function WhatsAppFloatButton() {
  const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber}`;

  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.button}
      aria-label="Chat with FARSAH Tutors on WhatsApp"
    >
      <WhatsAppOutlined />
    </a>
  );
}
