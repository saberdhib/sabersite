"use client";

import Image from "next/image";
import { useLanguage } from "../../components/LanguageProvider";

export default function ProjectsPage() {
  const { t } = useLanguage();
  const projectLogos: Record<string, string> = {
    "agent-breakout": "/media/breakoutIA.jpeg",
    "mlops-chestxray": "/media/IASante.png",
    sabersite: "/media/dashboard.png",
  };

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <header className="max-w-2xl space-y-4">
        <p className="text-xs uppercase tracking-[0.32em] text-muted">
          {t.projects.title}
        </p>
        <h1 className="text-3xl font-semibold">{t.projects.title}</h1>
        <p className="text-base text-muted">{t.projects.intro}</p>
      </header>

      <section className="mt-10 grid gap-6 lg:grid-cols-2">
        {t.projects.items.map((project) => (
          <article
            key={project.name}
            className="rounded-3xl border border-border bg-[color:var(--surface)] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold">{project.name}</h2>
                <p className="mt-2 text-sm text-muted">
                  {project.description}
                </p>
              </div>
              <div
                className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-border bg-[color:var(--background)]"
                aria-hidden="true"
              >
                <Image
                  src={projectLogos[project.name] ?? "/media/dashboard.png"}
                  alt=""
                  width={48}
                  height={48}
                  className="h-8 w-8 object-contain opacity-70 grayscale"
                />
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2 text-xs text-muted">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-6 space-y-4 text-sm text-muted">
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-[0.2em] text-foreground">
                  {t.projects.labels.problem}
                </p>
                <p>{project.problem}</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-[0.2em] text-foreground">
                  {t.projects.labels.solution}
                </p>
                <p>{project.solution}</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-[0.2em] text-foreground">
                  {t.projects.labels.tech}
                </p>
                <p>{project.tech}</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-[0.2em] text-foreground">
                  {t.projects.labels.impact}
                </p>
                <p>{project.impact}</p>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
