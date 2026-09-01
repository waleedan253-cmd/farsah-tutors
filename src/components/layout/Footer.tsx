"use client";
import Link from "next/link";
import Image from "next/image";
import {
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
} from "@ant-design/icons";
import {
  footerNavItems,
  legalNavItems,
  siteConfig,
  socialLinks,
} from "@/data/site";
import styles from "./Footer.module.css";

const iconMap: Record<string, React.ReactNode> = {
  facebook: <FacebookFilled />,
  instagram: <InstagramFilled />,
  linkedin: <LinkedinFilled />,
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brandCol}>
          <Image
            src="/icons.png"
            alt={`${siteConfig.name} logo`}
            width={160}
            height={36}
            className={styles.logo}
          />
          <p className={styles.tagline}>{siteConfig.tagline}</p>
        </div>

        {/* You likely want your footerNavItems / legalNavItems columns here too,
            since the grid is set up for 3 columns (1.4fr 1fr 1fr) */}

        <div className={styles.socialCol}>
          <p className={styles.colTitle}>Social Contacts</p>
          <div className={styles.social}>
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className={styles.socialIcon}
              >
                {iconMap[link.icon]}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
