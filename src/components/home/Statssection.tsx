"use client";

import { Row, Col, Statistic } from "antd";
import { statistics } from "@/data/site";
import styles from "./Statssection.module.css";

/**
 * Ant `Statistic` renders each figure with consistent number/label
 * hierarchy (Section 14). Values are explicit placeholders sourced from
 * data/site.ts — never invented inline — so they're easy to replace
 * with verified numbers in one place later.
 */
export default function StatsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <Row gutter={[32, 32]} justify="center">
          {statistics.map((stat) => (
            <Col key={stat.id} xs={12} sm={8} md={24 / statistics.length}>
              <Statistic
                title={stat.label}
                value={stat.value}
                className={styles.stat}
              />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}
