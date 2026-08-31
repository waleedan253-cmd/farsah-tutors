"use client";

import { Row, Col } from "antd";
import { testimonials } from "@/data/testimonials";
import TestimonialCard from "./Testimonialcard";
import styles from "./Testimonialsgrid.module.css";

/**
 * Simple responsive grid over the static `testimonials` array. No
 * pagination or filtering — matches the "don't over-engineer" rule for
 * a small, static content set (Section 37).
 */
export default function TestimonialsGrid() {
  return (
    <div className={styles.wrap}>
      <Row gutter={[24, 24]}>
        {testimonials.map((testimonial) => (
          <Col key={testimonial.id} xs={24} sm={12} lg={8}>
            <TestimonialCard testimonial={testimonial} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
