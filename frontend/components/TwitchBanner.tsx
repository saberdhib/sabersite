"use client";

import { useLanguage } from "./LanguageProvider";

export default function TwitchBanner() {
  const { t } = useLanguage();

  return (
    <section className="rounded-3xl border border-border bg-[color:var(--surface)] p-6">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_1fr]">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.32em] text-muted">
            {t.social.twitch.eyebrow}
          </p>
          <h2 className="text-3xl font-semibold">{t.social.twitch.title}</h2>
          <p className="text-base text-muted">{t.social.twitch.description}</p>

          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-muted">
              <span className="h-2 w-2 rounded-full bg-[color:var(--accent)]/70" />
              {t.social.twitch.status}
            </span>
            <a
              href="https://www.twitch.tv/hanoutiier"
              className="inline-flex items-center justify-center rounded-xl bg-[color:var(--accent)] px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--accent-foreground)]"
            >
              {t.social.twitch.cta}
            </a>
          </div>

          <p className="text-sm text-muted">{t.social.twitch.quote}</p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border bg-[color:var(--background)]">
          <div className="aspect-video w-full">
            <iframe
              title={t.social.twitch.iframeTitle}
              src="https://player.twitch.tv/?channel=hanoutiier&parent=localhost"
              height="100%"
              width="100%"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
