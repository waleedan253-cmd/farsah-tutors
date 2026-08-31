"use client";

import Image from "next/image";
import { Card, Tag } from "antd";
import { SafetyCertificateOutlined } from "@ant-design/icons";
import type { Tutor } from "@/types";
import styles from "./TutorCard.module.css";

interface TutorCardProps {
  tutor: Tutor;
}

/**
 * Displays one tutor's photo, subject, credentials, languages, and a
 * short bio via Ant `Card`. No individual tutor profile route exists —
 * this card is the complete presentation per Section 16.
 */
export default function TutorCard({ tutor }: TutorCardProps) {
  return (
    <Card
      className={styles.card}
      cover={
        <div className={styles.imageWrap}>
          <Image
            src={tutor.image}
            alt={`Photo of ${tutor.name}, ${tutor.subject} tutor`}
            fill
            className={styles.image}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      }
    >
      <Tag className={styles.subjectTag}>{tutor.subject}</Tag>
      <h3 className={styles.name}>{tutor.name}</h3>

      <div className={styles.metaRow}>
        <SafetyCertificateOutlined className={styles.metaIcon} />
        <span>{tutor.qualification}</span>
      </div>
      <div className={styles.metaRow}>
        <span className={styles.experience}>{tutor.experience}</span>
      </div>

      <div className={styles.languages}>
        {tutor.languages.map((lang) => (
          <span key={lang} className={styles.langChip}>
            {lang}
          </span>
        ))}
      </div>

      <p className={styles.bio}>{tutor.bio}</p>
    </Card>
  );
}
