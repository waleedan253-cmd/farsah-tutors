"use client";

import Link from "next/link";
import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import styles from "./CTASection.module.css";

interface CTASectionProps {
  title: string;
  description?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

/**
 * One reusable closing-banner CTA (Section 26) so every page ends with
 * the same clear next action instead of each page inventing its own
 * closing block. Props keep copy/links page-specific while the visual
 * treatment (navy-to-blue gradient) stays consistent site-wide.
 */
export default function CTASection({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CTASectionProps) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>{title}</h2>
        {description && <p className={styles.desc}>{description}</p>}
        <div className={styles.actions}>
          <Link href={primaryHref}>
            <Button type="primary" size="large" icon={<ArrowRightOutlined />}>
              {primaryLabel}
            </Button>
          </Link>
          {secondaryLabel && secondaryHref && (
            <Link href={secondaryHref}>
              <Button size="large" className={styles.secondaryBtn}>
                {secondaryLabel}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
