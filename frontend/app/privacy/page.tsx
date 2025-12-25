"use client";

import { useLanguage } from "../../components/LanguageProvider";

export default function PrivacyPage() {
  const { t } = useLanguage();

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.32em] text-muted">
          {t.privacy.title}
        </p>
        <h1 className="text-3xl font-semibold">{t.privacy.title}</h1>
        <p className="text-base text-muted">{t.privacy.intro}</p>
      </header>

      <section className="mt-10 space-y-6 rounded-3xl border border-border bg-[color:var(--surface)] p-6">
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Privacy principles</h2>
          <p className="text-sm text-muted">{t.privacy.sections.principles}</p>
        </div>
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Use of AI systems</h2>
          <p className="text-sm text-muted">{t.privacy.sections.aiUse}</p>
        </div>
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Knowledge base usage</h2>
          <p className="text-sm text-muted">{t.privacy.sections.knowledgeBase}</p>
        </div>
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Responsible AI stance</h2>
          <p className="text-sm text-muted">{t.privacy.sections.responsible}</p>
        </div>
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Future evolution</h2>
          <p className="text-sm text-muted">{t.privacy.sections.future}</p>
        </div>
      </section>
    </main>
  );
}
