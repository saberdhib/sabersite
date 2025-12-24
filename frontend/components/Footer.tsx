"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full border-t border-border mt-24 px-8 py-10 text-sm text-muted">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Saber Dhib</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/legal">{t.footer.legal}</Link>
          <Link href="/privacy">{t.footer.privacy}</Link>
          <Link href="/contact">{t.footer.contact}</Link>
        </div>
      </div>
    </footer>
  );
}
