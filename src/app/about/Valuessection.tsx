"use client";

import { Tag } from "antd";
import SectionHeading from "@/components/home/Sectionheading";
import styles from "./ValuesSection.module.css";

const traits = [
  "Professional",
  "Academic",
  "Trustworthy",
  "Modern",
  "International",
  "Premium",
  "Friendly",
  "Human-Centered",
  "Results-Oriented",
];

/**
 * Renders the brand personality (Section 6) as Ant `Tag` chips rather
 * than a paragraph list — quick to scan and visually distinct from the
 * Story section's prose above it, without introducing a new heavy layout.
 */
export default function ValuesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <SectionHeading
          eyebrow="What We Stand For"
          title="Our Brand Personality"
          description="The qualities that guide how FARSAH Tutors works with every student and tutor."
        />
        <div className={styles.tags}>
          {traits.map((trait) => (
            <Tag key={trait} className={styles.tag}>
              {trait}
            </Tag>
          ))}
        </div>
      </div>
    </section>
  );
}
