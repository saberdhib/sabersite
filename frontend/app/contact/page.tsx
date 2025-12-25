"use client";

import Link from "next/link";
import { useLanguage } from "../../components/LanguageProvider";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <header className="max-w-2xl space-y-4">
        <p className="text-xs uppercase tracking-[0.32em] text-muted">
          {t.contact.title}
        </p>
        <h1 className="text-3xl font-semibold">{t.contact.title}</h1>
        <p className="text-base text-muted">{t.contact.intro}</p>
      </header>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        {t.contact.methods.map((method) => (
          <article
            key={method.name}
            className="rounded-3xl border border-border bg-[color:var(--surface)] p-6"
          >
            <h2 className="text-xl font-semibold">{method.name}</h2>
            <p className="mt-2 text-sm text-muted">{method.use}</p>
            <div className="mt-5">
              <Link
                href={method.href}
                className="inline-flex items-center justify-center rounded-xl border border-border px-4 py-2 text-sm font-semibold text-foreground transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
              >
                {method.action}
              </Link>
            </div>
          </article>
        ))}
      </section>

      <section className="mt-12 rounded-3xl border border-border bg-[color:var(--surface)] p-6">
        <h2 className="text-2xl font-semibold">{t.contact.expect.heading}</h2>
        <ul className="mt-4 space-y-2 text-sm text-muted">
          {t.contact.expect.items.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--accent)]/70" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 rounded-3xl border border-border bg-[color:var(--surface)] p-6">
        <h2 className="text-2xl font-semibold">{t.contact.cta.heading}</h2>
        <p className="mt-3 text-base text-muted">{t.contact.cta.text}</p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm">
          <Link
            href="/chat"
            className="inline-flex items-center justify-center rounded-xl bg-[color:var(--accent)] px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--accent-foreground)]"
          >
            {t.contact.cta.primary}
          </Link>
        </div>
      </section>
    </main>
  );
}
