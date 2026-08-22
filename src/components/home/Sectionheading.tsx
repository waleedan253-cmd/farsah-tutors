"use client";

import { Typography } from "antd";
import styles from "./Sectionheading.module.css";

const { Title, Paragraph } = Typography;

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

/**
 * Shared heading block (eyebrow + title + optional supporting copy) so
 * every section across the ten pages gets the same type hierarchy
 * (Section 9) instead of each page re-styling its own headings.
 * `light` flips text color for use on the navy/gradient sections.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`${styles.wrap} ${align === "center" ? styles.center : ""} ${
        light ? styles.light : ""
      }`}
    >
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      <Title level={2} className={styles.title}>
        {title}
      </Title>
      {description && (
        <Paragraph className={styles.description}>{description}</Paragraph>
      )}
    </div>
  );
}
