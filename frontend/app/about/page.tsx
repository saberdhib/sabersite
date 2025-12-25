"use client";

import Image from "next/image";
import { useLanguage } from "../../components/LanguageProvider";

const sectionIds = [
  "about",
  "journey",
  "what-i-do",
  "expertise",
  "domains",
  "certifications",
  "languages",
  "vision",
  "cta",
];

export default function AboutPage() {
  const { t } = useLanguage();
  const journeyLogos = [
    "/media/Dauphine_logo.png",
    "/media/MinesParis.png",
    "/media/Logo_GL_events.png",
    "/media/ESCP_LOGO.png",
  ];
  const dashboardCards = [
    {
      label: t.about.expertise.heading,
      value: t.about.expertise.items.length,
    },
    {
      label: t.about.domains.heading,
      value: t.about.domains.items.length,
    },
    {
      label: t.about.languages.heading,
      value: t.about.languages.items.length,
    },
    {
      label: t.about.whatIDo.heading,
      value: t.about.whatIDo.items.length,
    },
  ];

  const expertiseGroups = [
    {
      title: t.about.expertise.items[0],
      items: [t.about.expertise.items[3], t.about.expertise.items[2]],
    },
    {
      title: t.about.expertise.items[1],
      items: [
        t.about.expertise.items[6],
        t.about.expertise.items[10],
      ],
    },
    {
      title: t.about.expertise.items[9],
      items: [t.about.expertise.items[7], t.about.expertise.items[8]],
    },
    {
      title: t.about.expertise.items[4],
      items: [t.about.expertise.items[5]],
    },
  ];

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-12 lg:grid-cols-[240px_1fr]">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <p className="text-xs uppercase tracking-[0.28em] text-muted">
            {t.about.title}
          </p>
          <nav className="mt-6 space-y-2 text-sm">
            {t.about.toc.map((label, index) => (
              <a
                key={sectionIds[index]}
                href={`#${sectionIds[index]}`}
                className="block text-muted transition hover:text-foreground"
              >
                {label}
              </a>
            ))}
          </nav>
        </aside>

        <div className="space-y-16">
          <section id="about" className="space-y-4">
            <h1 className="text-3xl font-semibold">{t.about.introduction.heading}</h1>
            {t.about.introduction.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-base text-muted">
                {paragraph}
              </p>
            ))}
            <div className="mt-8 rounded-3xl border border-border bg-[color:var(--surface)] p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                {dashboardCards.map((card) => (
                  <div
                    key={card.label}
                    className="rounded-2xl border border-border bg-[color:var(--background)] p-4"
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-muted">
                      {card.label}
                    </p>
                    <p className="mt-3 text-3xl font-semibold text-foreground">
                      {card.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="journey" className="space-y-4">
            <h2 className="text-2xl font-semibold">{t.about.journey.heading}</h2>
            <div className="relative space-y-4">
              <div className="absolute left-5 top-2 h-full w-px bg-border" />
              {t.about.journey.paragraphs.map((paragraph, index) => (
                <div
                  key={paragraph}
                  className="relative ml-8 rounded-2xl border border-border bg-[color:var(--surface)] p-5"
                >
                  <span className="absolute -left-8 top-6 flex h-4 w-4 items-center justify-center rounded-full bg-[color:var(--accent)]/80" />
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-[color:var(--background)] text-xs font-semibold text-muted">
                      {index + 1}
                    </div>
                      <div className="space-y-3">
                        <p className="text-base text-muted">{paragraph}</p>
                        <div
                          className="flex h-24 items-center justify-center rounded-xl border border-border bg-[color:var(--background)]"
                          aria-hidden="true"
                        >
                          <Image
                            src={journeyLogos[index] ?? "/media/ESCP_LOGO.png"}
                            alt=""
                            width={140}
                            height={56}
                            className="h-10 w-auto opacity-70 grayscale"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </section>

          <section id="what-i-do" className="space-y-4">
            <h2 className="text-2xl font-semibold">{t.about.whatIDo.heading}</h2>
            <p className="text-base text-muted">{t.about.whatIDo.intro}</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {t.about.whatIDo.items.map((item, index) => (
                <div
                  key={item}
                  className="relative rounded-2xl border border-border bg-[color:var(--surface)] p-4"
                >
                  <span className="text-xs uppercase tracking-[0.2em] text-muted">
                    {index + 1}
                  </span>
                  <p className="mt-2 text-base text-muted">{item}</p>
                  {index < t.about.whatIDo.items.length - 1 ? (
                    <span className="absolute -bottom-3 left-1/2 h-6 w-px -translate-x-1/2 bg-border sm:hidden" />
                  ) : null}
                </div>
              ))}
            </div>
            <div
              className="rounded-2xl border border-border bg-[color:var(--background)] p-6"
              aria-hidden="true"
            />
          </section>

          <section id="expertise" className="space-y-4">
            <h2 className="text-2xl font-semibold">{t.about.expertise.heading}</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {expertiseGroups.map((group) => (
                <div
                  key={group.title}
                  className="rounded-2xl border border-border bg-[color:var(--surface)] p-5"
                >
                  <p className="text-sm font-semibold text-foreground">
                    {group.title}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2 text-sm text-muted">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-border px-3 py-1"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="domains" className="space-y-4">
            <h2 className="text-2xl font-semibold">{t.about.domains.heading}</h2>
            <div className="flex flex-wrap gap-2 text-sm text-muted">
              {t.about.domains.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border px-3 py-1"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>

          <section id="certifications" className="space-y-4">
            <h2 className="text-2xl font-semibold">
              {t.about.certifications.heading}
            </h2>
            <ul className="space-y-2 text-base text-muted">
              {t.about.certifications.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--accent)]/80" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section id="languages" className="space-y-4">
            <h2 className="text-2xl font-semibold">{t.about.languages.heading}</h2>
            <div className="flex flex-wrap gap-2 text-sm text-muted">
              {t.about.languages.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border px-3 py-1"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>

          <section id="vision" className="space-y-4">
            <h2 className="text-2xl font-semibold">{t.about.vision.heading}</h2>
            {t.about.vision.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-base text-muted">
                {paragraph}
              </p>
            ))}
            <div className="flex items-center justify-center rounded-2xl border border-border bg-[color:var(--background)] p-6">
              <Image
                src="/media/Saberpic.jpeg"
                alt=""
                width={180}
                height={180}
                className="h-24 w-24 rounded-full object-cover opacity-70 grayscale"
              />
            </div>
          </section>

          <section
            id="cta"
            className="space-y-4 rounded-3xl border border-border bg-[color:var(--surface)] p-6"
          >
            <h2 className="text-2xl font-semibold">{t.about.cta.heading}</h2>
            <p className="text-base text-muted">{t.about.cta.text}</p>
            <div className="flex flex-wrap gap-3 text-sm">
              <a
                href="/chat"
                className="inline-flex items-center justify-center rounded-xl bg-[color:var(--accent)] px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--accent-foreground)]"
              >
                {t.about.cta.primary}
              </a>
              <a
                href="/projects"
                className="inline-flex items-center justify-center rounded-xl border border-border px-5 py-2 text-sm font-semibold text-foreground"
              >
                {t.about.cta.secondary}
              </a>
              <a
                href="/architectures"
                className="inline-flex items-center justify-center rounded-xl border border-border px-5 py-2 text-sm font-semibold text-foreground"
              >
                {t.about.cta.tertiary}
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
