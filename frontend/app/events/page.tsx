"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../../components/LanguageProvider";

export default function EventsPage() {
  const { t } = useLanguage();

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <header className="max-w-2xl space-y-4">
        <p className="text-xs uppercase tracking-[0.32em] text-muted">
          {t.events.title}
        </p>
        <h1 className="text-3xl font-semibold">{t.events.title}</h1>
        <p className="text-base text-muted">{t.events.intro}</p>
      </header>

      <section className="mt-10">
        <div className="relative space-y-6">
          <div className="absolute left-5 top-2 h-full w-px bg-border" />
          {t.events.items.map((event) => (
            <article
              key={`${event.year}-${event.name}`}
              className="relative ml-8 rounded-2xl border border-border bg-[color:var(--surface)] p-6"
            >
              <span className="absolute -left-8 top-8 flex h-4 w-4 items-center justify-center rounded-full bg-[color:var(--accent)]/80" />
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted">
                    {event.year}
                  </p>
                  <h2 className="text-xl font-semibold">{event.name}</h2>
                  <p className="text-sm text-muted">{event.context}</p>
                </div>
                <div
                  className="flex h-20 w-full items-center justify-center rounded-2xl border border-border bg-[color:var(--background)] md:h-24 md:w-40"
                  aria-hidden="true"
                >
                  <Image
                    src="/media/HANOUTIER.jpeg"
                    alt=""
                    width={120}
                    height={80}
                    className="h-12 w-auto rounded-full object-cover opacity-70 grayscale"
                  />
                </div>
              </div>

              <div className="mt-4 grid gap-3 text-sm text-muted md:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-foreground">
                    {t.events.labels.role}
                  </p>
                  <p className="mt-1">{event.role}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-foreground">
                    {t.events.labels.topic}
                  </p>
                  <p className="mt-1">{event.topic}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-foreground">
                    {t.events.labels.location}
                  </p>
                  <p className="mt-1">{event.location}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-3xl border border-border bg-[color:var(--surface)] p-6">
        <h2 className="text-2xl font-semibold">{t.events.cta.heading}</h2>
        <p className="mt-3 text-base text-muted">{t.events.cta.text}</p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm">
          <Link
            href="/chat"
            className="inline-flex items-center justify-center rounded-xl bg-[color:var(--accent)] px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--accent-foreground)]"
          >
            {t.events.cta.primary}
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl border border-border px-5 py-2 text-sm font-semibold text-foreground"
          >
            {t.events.cta.secondary}
          </Link>
        </div>
      </section>
    </main>
  );
}
