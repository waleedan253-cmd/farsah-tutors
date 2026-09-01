"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Drawer, Button } from "antd";
import { mobileNavItems, siteConfig } from "@/data/site";
import styles from "./MobileMenu.module.css";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

/**
 * Ant `Drawer` slides in the full mobile nav (all pages + AI Assistant),
 * keeping the mobile header itself to just logo + hamburger per spec.
 * Closing on route change/backdrop click is handled by Drawer natively,
 * and every link closes the drawer on click for a touch-friendly flow.
 */
export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <Drawer
      title={
        <Image
          src="/icons.png"
          alt={`${siteConfig.name} logo`}
          width={140}
          height={32}
        />
      }
      placement="right"
      onClose={onClose}
      open={open}
      width={300}
      aria-label="Mobile navigation"
    >
      <nav className={styles.list} aria-label="Mobile primary">
        {mobileNavItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className={`${styles.link} ${
              pathname === item.href ? styles.active : ""
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <Link href="/contact" onClick={onClose} className={styles.ctaWrap}>
        <Button type="primary" block>
          Contact Us
        </Button>
      </Link>
    </Drawer>
  );
}
