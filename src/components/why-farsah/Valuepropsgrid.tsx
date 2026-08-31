"use client";

import { Row, Col, Card } from "antd";
import {
  UserOutlined,
  SafetyCertificateOutlined,
  ClockCircleOutlined,
  SmileOutlined,
  GlobalOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import { valueProps } from "@/data/site";
import styles from "./Valuepropsgrid.module.css";

const iconMap: Record<string, React.ReactNode> = {
  user: <UserOutlined />,
  "safety-certificate": <SafetyCertificateOutlined />,
  "clock-circle": <ClockCircleOutlined />,
  smile: <SmileOutlined />,
  global: <GlobalOutlined />,
  heart: <HeartOutlined />,
};

/**
 * Six value props (Section 18) as a 3-column Ant `Card` grid — the same
 * card-with-icon pattern as the homepage TrustSection, kept as a
 * separate component since this page needs the full six, not five, and
 * uses a larger card treatment suited to a dedicated page rather than a
 * homepage strip.
 */
export default function ValuePropsGrid() {
  return (
    <div className={styles.wrap}>
      <Row gutter={[24, 24]}>
        {valueProps.map((prop) => (
          <Col key={prop.id} xs={24} sm={12} lg={8}>
            <Card className={styles.card} variant="borderless">
              <div className={styles.icon}>{iconMap[prop.icon]}</div>
              <h3 className={styles.title}>{prop.title}</h3>
              <p className={styles.desc}>{prop.description}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
