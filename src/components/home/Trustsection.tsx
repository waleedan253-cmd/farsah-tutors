"use client";

import { Row, Col, Card } from "antd";
import {
  SafetyCertificateOutlined,
  UserOutlined,
  ClockCircleOutlined,
  SmileOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { trustPoints } from "@/data/site";
import styles from "./Trustsection.module.css";

const iconMap: Record<string, React.ReactNode> = {
  "safety-certificate": <SafetyCertificateOutlined />,
  user: <UserOutlined />,
  "clock-circle": <ClockCircleOutlined />,
  smile: <SmileOutlined />,
  global: <GlobalOutlined />,
};

/**
 * Five short credibility points render as an Ant `Card` grid directly
 * under the hero (Section 13), establishing trust before any deeper
 * content. Icons + one line each keep it scannable rather than dense.
 */
export default function TrustSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <Row gutter={[24, 24]}>
          {trustPoints.map((point) => (
            <Col key={point.id} xs={24} sm={12} lg={24 / trustPoints.length}>
              <Card className={styles.card} variant="borderless">
                <div className={styles.icon}>{iconMap[point.icon]}</div>
                <h3 className={styles.title}>{point.title}</h3>
                <p className={styles.desc}>{point.description}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}
