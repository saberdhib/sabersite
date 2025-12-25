"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../../components/LanguageProvider";

export default function KnowledgePage() {
  const { t } = useLanguage();
  const techLogos = [
    "/media/Python_logo.png",
    "/media/Google-Cloud-Logo.png",
    "/media/AWS_Logo.png",
  ];

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <header className="max-w-2xl space-y-4">
        <p className="text-xs uppercase tracking-[0.32em] text-muted">
          {t.knowledge.title}
        </p>
        <h1 className="text-3xl font-semibold">{t.knowledge.title}</h1>
        <p className="text-base text-muted">{t.knowledge.intro}</p>
      </header>

      <section className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {t.knowledge.categories.map((category) => (
          <article
            key={category.slug}
            className="rounded-3xl border border-border bg-[color:var(--surface)] p-6"
          >
            <h2 className="text-xl font-semibold">{category.title}</h2>
            <p className="mt-2 text-sm text-muted">{category.description}</p>
            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-muted">
              {t.knowledge.labels.audience}
            </p>
            <p className="mt-2 text-sm text-muted">{category.audience}</p>
            <div className="mt-5">
              <Link
                href={`/knowledge/${category.slug}`}
                className="inline-flex items-center justify-center rounded-xl border border-border px-4 py-2 text-sm font-semibold text-foreground transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
              >
                {category.cta}
              </Link>
            </div>
            <div className="mt-5 flex items-center gap-3 opacity-60 grayscale">
              {techLogos.map((logo) => (
                <Image
                  key={logo}
                  src={logo}
                  alt=""
                  width={60}
                  height={24}
                  className="h-4 w-auto"
                />
              ))}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
