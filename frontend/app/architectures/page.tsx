"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../../components/LanguageProvider";

type Architecture = {
  slug: string;
  title: string;
  summary: string;
  type: string;
  tags: string[];
  problem: string;
  solution: string;
  components: string[];
  tradeoffs: string[];
  artifacts: {
    diagramUrl?: string;
    pdfUrl?: string;
    externalUrl?: string;
    embedUrl?: string;
  };
};

export default function ArchitecturesPage() {
  const { t } = useLanguage();
  const items = t.architectures.items as Architecture[];
  const techLogos = [
    "/media/Python_logo.png",
    "/media/AWS_Logo.png",
    "/media/Google-Cloud-Logo.png",
    "/media/Microsoft_Azure_Logo.png",
    "/media/Snowflake_Logo.png",
    "/media/langchain_logo.png",
  ];
  const [query, setQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string>("all");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  const tags = useMemo(() => {
    const set = new Set<string>();
    items.forEach((item) => item.tags.forEach((tag) => set.add(tag)));
    return Array.from(set).sort();
  }, [items]);

  const types = useMemo(() => {
    const set = new Set<string>();
    items.forEach((item) => set.add(item.type));
    return Array.from(set).sort();
  }, [items]);

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesTag = selectedTag === "all" || item.tags.includes(selectedTag);
      const matchesType = selectedType === "all" || item.type === selectedType;
      const q = query.trim().toLowerCase();
      const matchesQuery =
        q.length === 0 ||
        item.title.toLowerCase().includes(q) ||
        item.summary.toLowerCase().includes(q);
      return matchesTag && matchesType && matchesQuery;
    });
  }, [items, query, selectedTag, selectedType]);

  const activeItem = useMemo(() => {
    return items.find((item) => item.slug === activeSlug) ?? null;
  }, [items, activeSlug]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveSlug(null);
      }
    }
    if (activeSlug) {
      window.addEventListener("keydown", onKeyDown);
      return () => window.removeEventListener("keydown", onKeyDown);
    }
  }, [activeSlug]);

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <header className="max-w-2xl space-y-4">
        <p className="text-xs uppercase tracking-[0.32em] text-muted">
          {t.architectures.title}
        </p>
        <h1 className="text-3xl font-semibold">{t.architectures.title}</h1>
        <p className="text-base text-muted">{t.architectures.intro}</p>
      </header>

      <section className="mt-8 space-y-4 rounded-3xl border border-border bg-[color:var(--surface)] p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-1 items-center gap-3">
            <span className="text-xs uppercase tracking-[0.2em] text-muted">
              {t.architectures.filters.searchPlaceholder}
            </span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={t.architectures.filters.searchPlaceholder}
              className="h-10 w-full rounded-xl border border-border bg-[color:var(--background)] px-3 text-sm text-foreground"
            />
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs uppercase tracking-[0.2em] text-muted">
              {t.architectures.filters.typeLabel}
            </span>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setSelectedType("all")}
                className={`rounded-full border px-3 py-1 text-xs ${
                  selectedType === "all"
                    ? "border-[color:var(--accent)] text-[color:var(--accent)]"
                    : "border-border text-muted"
                }`}
              >
                {t.architectures.filters.allTypes}
              </button>
              {types.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() =>
                    setSelectedType((current) =>
                      current === type ? "all" : type
                    )
                  }
                  className={`rounded-full border px-3 py-1 text-xs ${
                    selectedType === type
                      ? "border-[color:var(--accent)] text-[color:var(--accent)]"
                      : "border-border text-muted"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <span className="text-xs uppercase tracking-[0.2em] text-muted">
            {t.architectures.filters.tagLabel}
          </span>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setSelectedTag("all")}
              className={`rounded-full border px-3 py-1 text-xs ${
                selectedTag === "all"
                  ? "border-[color:var(--accent)] text-[color:var(--accent)]"
                  : "border-border text-muted"
              }`}
            >
              {t.architectures.filters.allTags}
            </button>
            {tags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() =>
                  setSelectedTag((current) =>
                    current === tag ? "all" : tag
                  )
                }
                className={`rounded-full border px-3 py-1 text-xs ${
                  selectedTag === tag
                    ? "border-[color:var(--accent)] text-[color:var(--accent)]"
                    : "border-border text-muted"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-2">
        {filteredItems.map((architecture) => (
          <button
            key={architecture.slug}
            type="button"
            onClick={() => setActiveSlug(architecture.slug)}
            className="text-left"
          >
            <article className="rounded-3xl border border-border bg-[color:var(--surface)] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold">{architecture.title}</h2>
                  <p className="mt-2 text-sm text-muted">
                    {architecture.summary}
                  </p>
                </div>
                <span className="rounded-full border border-border px-3 py-1 text-xs text-muted">
                  {architecture.type}
                </span>
              </div>

              <div
                className="mt-5 flex h-36 flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-border bg-[color:var(--background)] text-sm text-muted"
                aria-hidden="true"
              >
                <span>{t.architectures.labels.diagram}</span>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  {techLogos.map((logo) => (
                    <Image
                      key={logo}
                      src={logo}
                      alt=""
                      width={60}
                      height={24}
                      className="h-4 w-auto opacity-40 grayscale"
                    />
                  ))}
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2 text-xs text-muted">
                {architecture.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </button>
        ))}
      </section>

      {activeItem ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-6"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveSlug(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-border bg-[color:var(--surface)] p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted">
                  {t.architectures.labels.type}
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  {activeItem.title}
                </h2>
                <p className="mt-2 text-sm text-muted">
                  {activeItem.summary}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveSlug(null)}
                className="rounded-full border border-border px-3 py-1 text-xs text-muted"
              >
                {t.architectures.actions.close}
              </button>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="space-y-1 text-sm text-muted">
                <p className="text-xs uppercase tracking-[0.2em] text-foreground">
                  {t.architectures.labels.problem}
                </p>
                <p>{activeItem.problem}</p>
              </div>
              <div className="space-y-1 text-sm text-muted">
                <p className="text-xs uppercase tracking-[0.2em] text-foreground">
                  {t.architectures.labels.solution}
                </p>
                <p>{activeItem.solution}</p>
              </div>
            </div>

            <div className="mt-6 space-y-4 text-sm text-muted">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.2em] text-foreground">
                  {t.architectures.labels.components}
                </p>
                <div className="flex flex-wrap gap-2 text-xs text-muted">
                  {activeItem.components.map((component) => (
                    <span
                      key={component}
                      className="rounded-full border border-border px-3 py-1"
                    >
                      {component}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.2em] text-foreground">
                  {t.architectures.labels.tradeoffs}
                </p>
                <ul className="space-y-2">
                  {activeItem.tradeoffs.map((tradeoff) => (
                    <li key={tradeoff} className="flex gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--accent)]/70" />
                      <span>{tradeoff}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <p className="text-xs uppercase tracking-[0.2em] text-foreground">
                {t.architectures.labels.artifacts}
              </p>
              <div className="flex flex-wrap gap-3 text-sm">
                {activeItem.artifacts.diagramUrl ? (
                  <a
                    href={activeItem.artifacts.diagramUrl}
                    className="inline-flex items-center justify-center rounded-xl border border-border px-4 py-2 text-sm font-semibold text-foreground transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
                  >
                    {t.architectures.actions.viewDiagram}
                  </a>
                ) : null}
                {activeItem.artifacts.pdfUrl ? (
                  <a
                    href={activeItem.artifacts.pdfUrl}
                    className="inline-flex items-center justify-center rounded-xl border border-border px-4 py-2 text-sm font-semibold text-foreground transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
                  >
                    {t.architectures.actions.openPdf}
                  </a>
                ) : null}
                {activeItem.artifacts.externalUrl ? (
                  <a
                    href={activeItem.artifacts.externalUrl}
                    className="inline-flex items-center justify-center rounded-xl border border-border px-4 py-2 text-sm font-semibold text-foreground transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
                  >
                    {t.architectures.actions.externalLink}
                  </a>
                ) : null}
                {activeItem.artifacts.embedUrl ? (
                  <a
                    href={activeItem.artifacts.embedUrl}
                    className="inline-flex items-center justify-center rounded-xl border border-border px-4 py-2 text-sm font-semibold text-foreground transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
                  >
                    {t.architectures.actions.openEmbed}
                  </a>
                ) : null}
              </div>

              {activeItem.artifacts.embedUrl ? (
                <div
                  className="mt-4 flex h-48 items-center justify-center rounded-2xl border border-dashed border-border bg-[color:var(--background)] text-sm text-muted"
                  aria-hidden="true"
                >
                  {t.architectures.labels.diagram}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}

      <section className="mt-12 rounded-3xl border border-border bg-[color:var(--surface)] p-6">
        <h2 className="text-2xl font-semibold">{t.architectures.cta.heading}</h2>
        <p className="mt-3 text-base text-muted">{t.architectures.cta.text}</p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm">
          <Link
            href="/chat"
            className="inline-flex items-center justify-center rounded-xl bg-[color:var(--accent)] px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--accent-foreground)]"
          >
            {t.architectures.cta.primary}
          </Link>
        </div>
      </section>
    </main>
  );
}
