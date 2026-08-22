import Image from "next/image";
import styles from "./StorySection.module.css";

/**
 * Server component (plain HTML/CSS, no antd) telling FARSAH's mission
 * in the brand's own voice — active, specific, student-first language
 * rather than generic "we are a leading company" copy.
 */
export default function StorySection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.visual}>
          <Image
            src="/about.png"
            alt="Tutor guiding a student through a lesson"
            width={440}
            height={360}
            className={styles.img}
          />
        </div>
        <div className={styles.copy}>
          <span className={styles.eyebrow}>Our Mission</span>
          <h2 className={styles.title}>Education Shaped Around the Learner</h2>
          <p className={styles.text}>
            FARSAH Tutors exists to make quality tutoring accessible, personal,
            and effective. We connect students with tutors who don&apos;t just
            teach a subject — they take the time to understand how each student
            learns best.
          </p>
          <p className={styles.text}>
            From foundational subjects to test preparation and professional
            skills, every program is built around the same idea: real progress
            comes from support that adapts to the student, not the other way
            around.
          </p>
        </div>
      </div>
    </section>
  );
}
