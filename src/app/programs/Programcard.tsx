"use client";

import Image from "next/image";
import { Card, Tag } from "antd";
import type { Program } from "@/types";
import styles from "./programCard.module.css";

interface ProgramCardProps {
  program: Program;
}

/**
 * Ant `Card` presents one program: image, category/level tags, short
 * description, and up to three learning outcomes. Reused by the Programs
 * page grid — no individual program detail route exists per Section 15.
 */
export default function ProgramCard({ program }: ProgramCardProps) {
  return (
    <Card
      className={styles.card}
      cover={
        <div className={styles.imageWrap}>
          <Image
            src={program.image}
            alt={`${program.title} tutoring program`}
            fill
            className={styles.image}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      }
    >
      <div className={styles.tags}>
        <Tag className={styles.tag}>{program.category}</Tag>
        <Tag className={styles.tagOutline}>{program.level}</Tag>
      </div>
      <h3 className={styles.title}>{program.title}</h3>
      <p className={styles.desc}>{program.description}</p>
      <ul className={styles.outcomes}>
        {program.learningOutcomes.slice(0, 3).map((outcome) => (
          <li key={outcome}>{outcome}</li>
        ))}
      </ul>
    </Card>
  );
}
