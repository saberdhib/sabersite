"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import styles from "./ThemeSwitch.module.css";

export default function ThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <div className={styles.switch}>
      <div className={styles.control}>
        <input
          id="theme-switch"
          className={styles.checkbox}
          type="checkbox"
          role="switch"
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          checked={isDark}
          onChange={() => setTheme(isDark ? "light" : "dark")}
        />
        <label className={styles.track} htmlFor="theme-switch">
          <span className={styles.thumb} />
        </label>
      </div>
    </div>
  );
}
