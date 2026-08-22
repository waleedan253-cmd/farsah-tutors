"use client";

import { useMemo, useState } from "react";
import { Row, Col, Select, Empty } from "antd";
import { programs, programCategories, programLevels } from "@/data/programs";
import ProgramCard from "./Programcard";
import styles from "./programsGrid.module.css";

/**
 * Client-side only filtering (Section 15: "No database is required") —
 * two Ant `Select` controls narrow the static `programs` array by
 * category and level. Filtering happens entirely in the browser against
 * data already shipped with the page, so no extra network request runs.
 */
export default function ProgramsGrid() {
  const [category, setCategory] = useState("All");
  const [level, setLevel] = useState("All");

  const filtered = useMemo(() => {
    return programs.filter((program) => {
      const matchesCategory =
        category === "All" || program.category === category;
      const matchesLevel = level === "All" || program.level === level;
      return matchesCategory && matchesLevel;
    });
  }, [category, level]);

  return (
    <div className={styles.wrap}>
      <div className={styles.filters}>
        <Select
          value={category}
          onChange={setCategory}
          options={programCategories.map((c) => ({ value: c, label: c }))}
          className={styles.select}
          aria-label="Filter by subject"
        />
        <Select
          value={level}
          onChange={setLevel}
          options={programLevels.map((l) => ({ value: l, label: l }))}
          className={styles.select}
          aria-label="Filter by level"
        />
      </div>

      {filtered.length > 0 ? (
        <Row gutter={[24, 24]}>
          {filtered.map((program) => (
            <Col key={program.id} xs={24} sm={12} lg={8}>
              <ProgramCard program={program} />
            </Col>
          ))}
        </Row>
      ) : (
        <Empty description="No programs match these filters." />
      )}
    </div>
  );
}
