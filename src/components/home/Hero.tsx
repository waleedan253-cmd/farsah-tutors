"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "antd";
import { ArrowRightOutlined, MessageOutlined } from "@ant-design/icons";
import styles from "./Hero.module.css";

/**
 * Hero opens the site with the brand's navy-to-blue gradient (Section 12)
 * and a single clear thesis: personalized tutoring, better results.
 * Three CTAs map to the three journeys a visitor takes — enquire directly,
 * browse programs, or talk to the AI Assistant — rather than one generic
 * button, so each visitor intent has a direct path.
 */
export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <h1 className={styles.headline}>
            Personalized Learning. Exceptional Tutors. Better Results.
          </h1>
          <p className={styles.subcopy}>
            FARSAH Tutors connects students worldwide with qualified educators
            for tutoring and academic support built around each learner&apos;s
            goals, pace, and schedule.
          </p>
          <div className={styles.ctaRow}>
            <Link href="/contact">
              <Button type="primary" size="large" icon={<ArrowRightOutlined />}>
                Contact Us
              </Button>
            </Link>
            <Link href="/programs">
              <Button size="large" className={styles.secondaryBtn}>
                Explore Programs
              </Button>
            </Link>
          </div>
        </div>

        <div className={styles.visual}>
          <Image
            src="/herosection.png"
            alt="Students learning online with FARSAH tutors"
            width={480}
            height={420}
            priority
            className={styles.visualImg}
          />
        </div>
      </div>
    </section>
  );
}
