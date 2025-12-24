"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageProvider";
import ThemeSwitch from "./ThemeSwitch";
import ChatButton from "./ChatButton";

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  const isEnglish = language === "en";

  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 border-b border-border bg-background">
      <Link href="/" className="flex items-center gap-3 font-bold text-lg tracking-tight">
        <Image
          src="/media/saberDhib.jpg"
          alt="Saber Dhib"
          width={28}
          height={28}
          className="h-7 w-7 rounded-full object-cover"
          priority
        />
        Saber Dhib
      </Link>

      <div className="flex items-center gap-6">
        <Link href="/about">{t.nav.about}</Link>
        <Link href="/services">{t.nav.services}</Link>
        <Link href="/projects">{t.nav.projects}</Link>
        <Link href="/architectures">{t.nav.architectures}</Link>
        <Link href="/knowledge">{t.nav.knowledge}</Link>
        <Link href="/events">{t.nav.events}</Link>
        <Link href="/social">{t.nav.social}</Link>
        <Link href="/contact">{t.nav.contact}</Link>

        <ThemeSwitch />

        <button
          type="button"
          onClick={() => setLanguage(isEnglish ? "fr" : "en")}
          className="inline-flex h-9 items-center gap-1 rounded-full border border-border px-3 text-xs font-semibold uppercase tracking-[0.2em] text-foreground transition hover:bg-[color:var(--surface)]"
          aria-label={isEnglish ? "Switch to French" : "Switch to English"}
          title={isEnglish ? "Switch to French" : "Switch to English"}
        >
          <span className={isEnglish ? "text-foreground" : "text-muted"}>
            EN
          </span>
          <span className="text-muted">/</span>
          <span className={!isEnglish ? "text-foreground" : "text-muted"}>
            FR
          </span>
        </button>

        <ChatButton />
      </div>
    </nav>
  );
}
