"use client";

import { Row, Col } from "antd";
import { tutors } from "@/data/tutors";
import TutorCard from "./TutorCard";
import styles from "./TutorsGrid.module.css";

/**
 * Simple responsive grid over the static `tutors` array — no filtering
 * UI here per the "do not over-engineer" scope rule (Section 37); the
 * Programs page already demonstrates the filtering pattern where it's
 * genuinely useful (many more programs than tutors).
 */
export default function TutorsGrid() {
  return (
    <div className={styles.wrap}>
      <Row gutter={[24, 24]}>
        {tutors.map((tutor) => (
          <Col key={tutor.id} xs={24} sm={12} lg={8}>
            <TutorCard tutor={tutor} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
