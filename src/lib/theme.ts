import type { ThemeConfig } from "antd";

/**
 * FARSAH Tutors — Ant Design theme tokens.
 * Single source of truth so every Ant component (Button, Card, Input,
 * Menu, Drawer, Collapse, Tag, Rate, Form, Typography, Statistic)
 * inherits the brand palette instead of Ant's defaults.gg
 */
export const farsahColors = {
  navy: "#073B73",
  blue: "#087CC1",
  cyan: "#12A8E5",
  gold: "#E7AA20",
  white: "#FFFFFF",
  softBg: "#F5F8FC",
  textPrimary: "#172B3A",
  textSecondary: "#66788A",
} as const;

export const fontFamily =
  "'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

export const farsahTheme: ThemeConfig = {
  token: {
    colorPrimary: farsahColors.blue,
    colorLink: farsahColors.blue,
    colorLinkHover: farsahColors.cyan,
    colorText: farsahColors.textPrimary,
    colorTextSecondary: farsahColors.textSecondary,
    colorTextHeading: farsahColors.navy,
    colorBgLayout: farsahColors.softBg,
    colorBgContainer: farsahColors.white,
    borderRadius: 12,
    fontFamily,
    fontSize: 16,
  },
  components: {
    Button: {
      colorPrimary: farsahColors.blue,
      algorithm: true,
      borderRadius: 12,
      controlHeight: 44,
      fontWeight: 600,
    },
    Card: {
      borderRadiusLG: 16,
      colorBorderSecondary: "#E7EEF5",
      boxShadowTertiary: "0 8px 24px rgba(7, 59, 115, 0.06)",
    },
    Input: {
      borderRadius: 10,
      controlHeight: 44,
      colorBorder: "#D9E4EE",
    },
    Menu: {
      itemColor: farsahColors.textPrimary,
      itemHoverColor: farsahColors.blue,
      itemSelectedColor: farsahColors.blue,
      horizontalItemSelectedColor: farsahColors.blue,
      itemBg: "transparent",
      colorBgContainer: "transparent",
    },
    Drawer: {
      colorBgElevated: farsahColors.white,
    },
    Collapse: {
      borderRadiusLG: 12,
      colorBorder: "#E7EEF5",
      headerBg: farsahColors.white,
    },
    Tag: {
      borderRadiusSM: 8,
      defaultBg: farsahColors.softBg,
      defaultColor: farsahColors.navy,
    },
    Rate: {
      colorFillContent: farsahColors.gold,
    },
    Form: {
      labelColor: farsahColors.textPrimary,
      labelFontSize: 14,
    },
    Typography: {
      titleMarginBottom: "0.4em",
      titleMarginTop: 0,
    },
    Statistic: {
      titleFontSize: 14,
      contentFontSize: 32,
    },
  },
};
