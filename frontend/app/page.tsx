"use client";

import Link from "next/link";
import { useLanguage } from "../components/LanguageProvider";

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen">
      <section className="relative mx-auto max-w-6xl px-6 py-12">
        <div className="glow-surface" aria-hidden="true" />
        <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-muted">
              {t.home.eyebrow}
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
              {t.home.headline}
            </h1>
            <p className="mt-5 text-lg text-muted">
              {t.home.subheadline}
            </p>

            <div className="mt-5 flex flex-wrap gap-3 text-sm">
              <span className="rounded-full border border-border px-4 py-1 text-muted">
                {t.home.chips[0]}
              </span>
              <span className="rounded-full border border-border px-4 py-1 text-muted">
                {t.home.chips[1]}
              </span>
              <span className="rounded-full border border-border px-4 py-1 text-muted">
                {t.home.chips[2]}
              </span>
            </div>

            <div className="mt-7 flex items-center gap-4">
              <Link
                href="/chat"
                className="inline-flex items-center justify-center rounded-2xl bg-[color:var(--accent)] px-7 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--accent-foreground)] shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                {t.home.ctaPrimary}
              </Link>
              <Link
                href="/projects"
                className="text-sm font-semibold text-foreground hover:text-[color:var(--accent)]"
              >
                {t.home.ctaSecondary}
              </Link>
            </div>
          </div>

          <div className="group rounded-3xl border border-border bg-[color:var(--surface)] p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
            <div className="rounded-2xl border border-border bg-[color:var(--background)] p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-muted">
                    {t.chat.title}
                  </p>
                  <p className="mt-2 text-lg font-semibold">
                    {t.home.previewTitle}
                  </p>
                </div>
                <div className="flex gap-1">
                  <span className="h-2 w-2 rounded-full bg-[color:var(--accent)]/60" />
                  <span className="h-2 w-2 rounded-full bg-[color:var(--accent)]/40" />
                  <span className="h-2 w-2 rounded-full bg-[color:var(--accent)]/20" />
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-border bg-transparent p-4">
                <p className="text-sm text-muted">
                  {t.home.previewQuestion}
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[color:var(--accent)]/80 animate-pulse" />
                  <span
                    className="h-2 w-2 rounded-full bg-[color:var(--accent)]/60 animate-pulse"
                    style={{ animationDelay: "150ms" }}
                  />
                  <span
                    className="h-2 w-2 rounded-full bg-[color:var(--accent)]/40 animate-pulse"
                    style={{ animationDelay: "300ms" }}
                  />
                  <span className="text-xs text-muted transition group-hover:text-foreground">
                    {t.home.previewStatus}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-border bg-[color:var(--background)] p-6">
              <p className="text-xs uppercase tracking-[0.28em] text-muted">
                {t.home.focusTitle}
              </p>
              <svg
                viewBox="0 0 320 180"
                className="mt-4 h-40 w-full text-[color:var(--accent)]"
                fill="none"
              >
                <path
                  d="M30 140L110 60L190 120L290 40"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.6"
                />
                <circle cx="30" cy="140" r="6" fill="currentColor" />
                <circle cx="110" cy="60" r="6" fill="currentColor" />
                <circle cx="190" cy="120" r="6" fill="currentColor" />
                <circle cx="290" cy="40" r="6" fill="currentColor" />
                <path
                  d="M30 140H110M110 60H190M190 120H290"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  opacity="0.25"
                />
              </svg>
              <p className="mt-2 text-sm text-muted">
                {t.home.focusDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-10">
        <div className="marquee">
          <div className="marquee__track" aria-hidden="true">
            <span className="marquee__item">AI</span>
            <span className="marquee__item">GenAI</span>
            <span className="marquee__item">Data science</span>
            <span className="marquee__item">Data engineering</span>
            <span className="marquee__item">Data platforms</span>
            <span className="marquee__item">DWH</span>
            <span className="marquee__item">RAG systems</span>
            <span className="marquee__item">MLOps</span>
            <span className="marquee__item">Architecture</span>
            <span className="marquee__item">Strategy</span>
            <span className="marquee__item">Business impact</span>
            <span className="marquee__item">Delivery</span>
            <span className="marquee__item">Courses</span>
            <span className="marquee__item">Acculturation</span>
            <span className="marquee__item">AI</span>
            <span className="marquee__item">GenAI</span>
            <span className="marquee__item">Data science</span>
            <span className="marquee__item">Data engineering</span>
            <span className="marquee__item">Data platforms</span>
            <span className="marquee__item">DWH</span>
            <span className="marquee__item">RAG systems</span>
            <span className="marquee__item">MLOps</span>
            <span className="marquee__item">Architecture</span>
            <span className="marquee__item">Strategy</span>
            <span className="marquee__item">Business impact</span>
            <span className="marquee__item">Delivery</span>
            <span className="marquee__item">Courses</span>
            <span className="marquee__item">Acculturation</span>
          </div>
        </div>
      </section>
    </main>
  );
}
