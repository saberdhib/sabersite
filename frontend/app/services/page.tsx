"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../../components/LanguageProvider";

export default function ServicePage() {
  const { t } = useLanguage();
  const techLogos = [
    "/media/AWS_Logo.png",
    "/media/Google-Cloud-Logo.png",
    "/media/Microsoft_Azure_Logo.png",
    "/media/Snowflake_Logo.png",
    "/media/powerbi_logo.png",
    "/media/Tableau-Logo.png",
  ];

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <header className="max-w-2xl space-y-4">
        <p className="text-xs uppercase tracking-[0.32em] text-muted">
          {t.services.title}
        </p>
        <h1 className="text-3xl font-semibold">{t.services.title}</h1>
        <p className="text-base text-muted">{t.services.intro}</p>
      </header>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        {t.services.engagements.map((engagement) => (
          <article
            key={engagement.title}
            className="rounded-3xl border border-border bg-[color:var(--surface)] p-6"
          >
            <h2 className="text-xl font-semibold">{engagement.title}</h2>
            <p className="mt-3 text-sm text-muted">{engagement.description}</p>
            <div className="mt-5">
              <p className="text-xs uppercase tracking-[0.2em] text-muted">
                {t.services.labels.outcomes}
              </p>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                {engagement.outcomes.map((outcome) => (
                  <li key={outcome} className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--accent)]/70" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3 opacity-60 grayscale">
              {techLogos.map((logo) => (
                <Image
                  key={logo}
                  src={logo}
                  alt=""
                  width={64}
                  height={28}
                  className="h-4 w-auto"
                />
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="mt-12 rounded-3xl border border-border bg-[color:var(--surface)] p-6">
        <h2 className="text-2xl font-semibold">{t.services.who.heading}</h2>
        <p className="mt-3 text-base text-muted">{t.services.who.text}</p>
      </section>

      <section className="mt-12 rounded-3xl border border-border bg-[color:var(--surface)] p-6">
        <h2 className="text-2xl font-semibold">{t.services.cta.heading}</h2>
        <p className="mt-3 text-base text-muted">{t.services.cta.text}</p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm">
          <Link
            href="/chat"
            className="inline-flex items-center justify-center rounded-xl bg-[color:var(--accent)] px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--accent-foreground)]"
          >
            {t.services.cta.primary}
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl border border-border px-5 py-2 text-sm font-semibold text-foreground"
          >
            {t.services.cta.secondary}
          </Link>
        </div>
      </section>
    </main>
  );
}
