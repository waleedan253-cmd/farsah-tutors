"use client";

import {
  MailOutlined,
  PhoneOutlined,
  ClockCircleOutlined,
  EnvironmentOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import { siteConfig } from "@/data/site";
import styles from "./contactinfo.module.css";

/**
 * Server component (plain HTML) listing official contact channels.
 * Email is the primary channel (matches the brand's international/
 * premium positioning); WhatsApp is offered as a secondary "quick
 * chat" option via a direct wa.me link — no API key or backend needed,
 * it simply opens a chat with FARSAH's WhatsApp number.
 */
export default function ContactInfo() {
  const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber}`;

  return (
    <div className={styles.wrap}>
      <h2 className={styles.title}>Get in Touch</h2>
      <p className={styles.intro}>
        Reach out with any question about programs, tutors, or getting started —
        we typically respond within one business day.
      </p>

      <ul className={styles.list}>
        <li className={styles.item}>
          <span className={styles.icon}>
            <MailOutlined />
          </span>
          <div>
            <div className={styles.label}>Email</div>
            <a href={`mailto:${siteConfig.email}`} className={styles.value}>
              {siteConfig.email}
            </a>
          </div>
        </li>

        <li className={styles.item}>
          <span className={styles.icon}>
            <PhoneOutlined />
          </span>
          <div>
            <div className={styles.label}>Phone</div>
            <a href={`tel:${siteConfig.phone}`} className={styles.value}>
              {siteConfig.phone}
            </a>
          </div>
        </li>

        <li className={styles.item}>
          <span className={styles.icon}>
            <WhatsAppOutlined />
          </span>
          <div>
            <div className={styles.label}>WhatsApp</div>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.value}
            >
              Chat with us directly
            </a>
          </div>
        </li>

        <li className={styles.item}>
          <span className={styles.icon}>
            <ClockCircleOutlined />
          </span>
          <div>
            <div className={styles.label}>Business Hours</div>
            <span className={styles.value}>{siteConfig.hours}</span>
          </div>
        </li>

        <li className={styles.item}>
          <span className={styles.icon}>
            <EnvironmentOutlined />
          </span>
          <div>
            <div className={styles.label}>Location</div>
            <span className={styles.value}>{siteConfig.address}</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
