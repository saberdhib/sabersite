"use client";

import { useLanguage } from "../../../components/LanguageProvider";

export default function KnowledgeReflectionsPage() {
  const { t } = useLanguage();
  const page = t.knowledge.pages.reflections;

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.32em] text-muted">
          {page.title}
        </p>
        <h1 className="text-3xl font-semibold">{page.title}</h1>
        <p className="text-base text-muted">{page.intro}</p>
      </header>

      <section className="mt-10 rounded-3xl border border-border bg-[color:var(--surface)] p-6">
        <p className="text-xs uppercase tracking-[0.2em] text-muted">
          {t.knowledge.labels.example}
        </p>
        <h2 className="mt-3 text-xl font-semibold">{page.exampleTitle}</h2>
        <p className="mt-2 text-sm text-muted">{page.exampleDescription}</p>
        <p className="mt-6 text-sm text-muted">{t.knowledge.labels.comingSoon}</p>
      </section>
    </main>
  );
}
