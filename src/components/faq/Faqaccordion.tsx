"use client";

import { Collapse } from "antd";
import { faqs } from "@/data/faqs";
import type { FaqCategory } from "@/types";
import styles from "./faqaccordion.module.css";

const categoryOrder: FaqCategory[] = [
  "Students",
  "Parents",
  "Programs",
  "Tutors",
  "Learning",
  "General",
];

/**
 * Groups the static `faqs` array by category (Section 21) and renders
 * one Ant `Collapse` per category so visitors can scan by audience
 * (Students, Parents, etc.) rather than a single long undifferentiated
 * list. `accordion` mode keeps one question open at a time per group.
 */
export default function FAQAccordion() {
  return (
    <div className={styles.wrap}>
      {categoryOrder.map((category) => {
        const items = faqs
          .filter((faq) => faq.category === category)
          .map((faq) => ({
            key: faq.id,
            label: faq.question,
            children: <p className={styles.answer}>{faq.answer}</p>,
          }));

        if (items.length === 0) return null;

        return (
          <div key={category} className={styles.group}>
            <h2 className={styles.categoryTitle}>{category}</h2>
            <Collapse
              accordion
              items={items}
              className={styles.collapse}
              expandIconPosition="end"
            />
          </div>
        );
      })}
    </div>
  );
}
