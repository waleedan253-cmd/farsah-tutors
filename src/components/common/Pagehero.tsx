import styles from "./pageHero.module.css";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

/**
 * Compact navy banner reused across every inner page (About, Programs,
 * Tutors, How It Works, Why FARSAH, Student Success, FAQ, Contact) so
 * visitors get a consistent, branded page opener without re-implementing
 * the homepage's larger Hero. Server component — plain HTML, no antd —
 * so it never forces a client boundary on the pages that use it.
 */
export default function PageHero({
  eyebrow,
  title,
  description,
}: PageHeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
        <h1 className={styles.title}>{title}</h1>
        {description && <p className={styles.description}>{description}</p>}
      </div>
    </section>
  );
}
