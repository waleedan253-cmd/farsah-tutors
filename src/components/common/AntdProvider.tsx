"use client";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import { farsahTheme } from "@/lib/theme";
import type { PropsWithChildren } from "react";

/**
 * AntdRegistry collects Ant Design's CSS-in-JS output on the server so
 * styles arrive in the initial HTML (no flash of unstyled content).
 * ConfigProvider then applies the FARSAH theme tokens to every Ant
 * component used across the static pages, keeping styling centralized.
 */
export default function AntdProvider({ children }: PropsWithChildren) {
  return (
    <AntdRegistry>
      <ConfigProvider theme={farsahTheme}>{children}</ConfigProvider>
    </AntdRegistry>
  );
}
