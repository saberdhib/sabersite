"use client";

import { useLanguage } from "../../components/LanguageProvider";

export default function ChatPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-[70vh] px-6 py-16">
      <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-[color:var(--surface)] p-8 shadow-sm">
        <div className="mb-6">
          <p className="text-sm uppercase tracking-[0.2em] text-muted">
            {t.chat.title}
          </p>
          <h1 className="mt-2 text-3xl font-semibold">
            {t.chat.subtitle}
          </h1>
          <p className="mt-3 text-sm text-muted">{t.chat.description}</p>
        </div>
        <div className="space-y-4">
          <textarea
            className="h-32 w-full resize-none rounded-xl border border-border bg-transparent p-4 text-sm text-muted"
            placeholder={t.chat.placeholder}
            disabled
          />
          <button
            type="button"
            className="w-full rounded-xl border border-border bg-[color:var(--accent)] px-4 py-3 text-sm font-semibold text-[color:var(--accent-foreground)] opacity-60"
            disabled
          >
            {t.chat.button}
          </button>
        </div>
      </div>
    </main>
  );
}
