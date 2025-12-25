"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";
import styles from "./ChatButton.module.css";

export default function ChatButton() {
  const { t } = useLanguage();

  return (
    <Link
      href="/chat"
      className={styles.button}
      style={{
        ["--button-label" as string]: `"${t.nav.chat}"`,
        ["--button-hover" as string]: `"${t.chat.title}"`,
      }}
      aria-label={t.nav.chat}
    >
      <span className={styles.label}>{t.nav.chat}</span>
    </Link>
  );
}
