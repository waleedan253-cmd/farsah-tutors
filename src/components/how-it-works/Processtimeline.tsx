"use client";

import { processSteps } from "@/data/site";
import styles from "./processtimeline.module.css";

/**
 * Section 17: a connected four-step design rather than Ant's default
 * `Steps` component, since Steps is built for wizards/progress-tracking
 * UI (implies "step 2 is incomplete") — this is a static explanation of
 * a process, so a custom connected-card layout reads more accurately.
 * Internal CSS draws the connecting line; each step is numbered 01–04.
 */
export default function ProcessTimeline() {
  return (
    <div className={styles.wrap}>
      <div className={styles.line} aria-hidden="true" />
      <ol className={styles.list}>
        {processSteps.map((step) => (
          <li key={step.id} className={styles.step}>
            <span className={styles.number}>{step.number}</span>
            <div className={styles.content}>
              <h3 className={styles.title}>{step.title}</h3>
              <p className={styles.desc}>{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
