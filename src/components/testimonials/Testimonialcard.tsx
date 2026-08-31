"use client";

import { Card, Rate, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import type { Testimonial } from "@/types";
import styles from "./Testimonialcard.module.css";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

/**
 * Static presentation only — Ant `Rate` is rendered `disabled` (read-only
 * display of an existing rating, not an input) since Section 19 forbids
 * any review-submission capability. No form, no state, no API call.
 */
export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className={styles.card} variant="borderless">
      <Rate
        disabled
        defaultValue={testimonial.rating}
        className={styles.rate}
      />
      <p className={styles.message}>&ldquo;{testimonial.message}&rdquo;</p>
      <div className={styles.person}>
        <Avatar
          size={44}
          src={testimonial.image}
          icon={!testimonial.image && <UserOutlined />}
          className={styles.avatar}
        />
        <div>
          <div className={styles.name}>{testimonial.name}</div>
          <div className={styles.meta}>
            {testimonial.role} · {testimonial.country}
          </div>
        </div>
      </div>
    </Card>
  );
}
