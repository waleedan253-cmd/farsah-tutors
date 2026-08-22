"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { primaryNavItems, siteConfig } from "@/data/site";
import MobileMenu from "./MobileMenu";
import styles from "./Navbar.module.css";

/**
 * Desktop navbar: logo left, primary nav center, AI Assistant + Contact
 * CTA right. Ant `Menu` drives the horizontal nav so active-state and
 * theming come from the shared ConfigProvider, not hardcoded styles.
 * A scroll listener toggles a subtle elevated/condensed state so the
 * bar reads as premium rather than a flat static strip.
 * Below 1024px the primary nav collapses into MobileMenu (Ant Drawer).
 */
export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menuItems = primaryNavItems.map((item) => ({
    key: item.href,
    label: <Link href={item.href}>{item.label}</Link>,
  }));

  const selectedKey =
    primaryNavItems.find((item) => item.href === pathname)?.href ?? "";

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <Link
          href="/"
          className={styles.logoLink}
          aria-label={`${siteConfig.name} — Home`}
        >
          <Image
            src="/icon.png"
            alt={`${siteConfig.name} logo`}
            width={44}
            height={44}
            priority
            className={styles.logoImg}
          />
        </Link>

        <nav className={styles.desktopNav} aria-label="Primary">
          <Menu
            mode="horizontal"
            selectedKeys={[selectedKey]}
            items={menuItems}
            className={styles.menu}
            disabledOverflow
          />
        </nav>

        <div className={styles.actions}>
          <Link href="/ai-assistant" className={styles.aiLink}>
            AI Assistant
          </Link>
          <Link href="/contact">
            <Button type="primary">Contact Us</Button>
          </Link>
        </div>

        <button
          type="button"
          className={styles.hamburger}
          aria-label="Open menu"
          aria-expanded={drawerOpen}
          onClick={() => setDrawerOpen(true)}
        >
          <MenuOutlined />
        </button>
      </div>

      <MobileMenu open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </header>
  );
}
