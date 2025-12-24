"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../../components/LanguageProvider";
import TwitchBanner from "../../components/TwitchBanner";

export default function SocialPage() {
  const { t } = useLanguage();
  const logoMap: Record<string, string> = {
    LinkedIn: "/media/Linkedin-Logo.png",
    YouTube: "/media/YouTube_logo.png",
    Twitch: "/media/Twitch_logo.png",
    "Instagram / TikTok": "/media/Instagram_logo.png",
    "X / Twitter": "/media/X-Logo.png",
  };

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <TwitchBanner />

      <header className="mt-10 max-w-2xl space-y-4">
        <p className="text-xs uppercase tracking-[0.32em] text-muted">
          {t.social.title}
        </p>
        <h1 className="text-3xl font-semibold">{t.social.title}</h1>
        <p className="text-base text-muted">{t.social.intro}</p>
      </header>

      <section className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {t.social.platforms.map((platform) => (
          <article
            key={platform.name}
            className="rounded-3xl border border-border bg-[color:var(--surface)] p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold">{platform.name}</h2>
                <p className="mt-2 text-sm text-muted">
                  {platform.description}
                </p>
              </div>
              <div
                className="h-12 w-12 rounded-2xl border border-border bg-[color:var(--background)]"
                aria-hidden="true"
              />
            </div>

            <div
              className="mt-5 flex h-32 items-center justify-center rounded-2xl border border-border bg-[color:var(--background)]"
              aria-hidden="true"
            >
              <Image
                src={logoMap[platform.name] ?? "/media/Linkedin-Logo.png"}
                alt=""
                width={140}
                height={56}
                className="h-10 w-auto opacity-70 grayscale"
              />
            </div>

            <div className="mt-5">
              <a
                href={platform.url}
                className="inline-flex items-center justify-center rounded-xl border border-border px-4 py-2 text-sm font-semibold text-foreground transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
              >
                {platform.action}
              </a>
            </div>
          </article>
        ))}
      </section>

      <section className="mt-12 rounded-3xl border border-border bg-[color:var(--surface)] p-6">
        <h2 className="text-2xl font-semibold">{t.social.cta.heading}</h2>
        <p className="mt-3 text-base text-muted">{t.social.cta.text}</p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm">
          <Link
            href="/chat"
            className="inline-flex items-center justify-center rounded-xl bg-[color:var(--accent)] px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--accent-foreground)]"
          >
            {t.social.cta.primary}
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl border border-border px-5 py-2 text-sm font-semibold text-foreground"
          >
            {t.social.cta.secondary}
          </Link>
        </div>
      </section>
    </main>
  );
}
