"use client";

import Image from "next/image";
import SectionHeading from "@/components/home/Sectionheading";
import styles from "./Internationalsection.module.css";

/**
 * Section 20: communicates cross-border reach through a clean split
 * layout rather than a decorative world map. The image carries the
 * "international" idea visually; the copy stays specific, not generic
 * "we're everywhere" marketing language.
 */
export default function InternationalSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.visual}>
          <Image
            src="/trust.png"
            alt="Students connecting with tutors across different countries"
            width={440}
            height={360}
            className={styles.img}
          />
        </div>
        <div className={styles.copy}>
          <SectionHeading
            eyebrow="Global Reach"
            title="Quality Education Without Borders"
            align="left"
          />
          <p className={styles.text}>
            Distance and time zones shouldn&apos;t limit access to a good tutor.
            FARSAH Tutors brings qualified educators to students wherever they
            are, with sessions structured around each learner&apos;s own
            schedule and language.
          </p>
          <p className={styles.text}>
            Whether preparing for exams, catching up on coursework, or building
            confidence in a new subject, students connect with the right tutor
            without being limited by geography.
          </p>
        </div>
      </div>
    </section>
  );
}
