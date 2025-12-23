"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  const isDark = resolvedTheme === "dark";

  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 border-b border-border bg-background">
      <Link href="/" className="font-bold text-lg tracking-tight">
        Saber Dhib
      </Link>

      <div className="flex items-center gap-6">
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/architectures">Architectures</Link>

        <button
          type="button"
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition hover:bg-[color:var(--surface)]"
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          title={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDark ? (
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="currentColor"
            >
              <path d="M21 14.5A8.5 8.5 0 0 1 9.5 3a1 1 0 0 0-1.08 1.42A6.5 6.5 0 1 0 20.58 15.6 1 1 0 0 0 21 14.5z" />
            </svg>
          ) : (
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="currentColor"
            >
              <path d="M12 4a1 1 0 0 1 1 1v1.25a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1zm0 12.75a1 1 0 0 1 1 1V19a1 1 0 1 1-2 0v-1.25a1 1 0 0 1 1-1zM6.1 6.1a1 1 0 0 1 1.4 0l.9.9a1 1 0 1 1-1.4 1.4l-.9-.9a1 1 0 0 1 0-1.4zm8.5 8.5a1 1 0 0 1 1.4 0l.9.9a1 1 0 1 1-1.4 1.4l-.9-.9a1 1 0 0 1 0-1.4zM4 12a1 1 0 0 1 1-1h1.25a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1zm12.75-1a1 1 0 1 1 0 2H18a1 1 0 1 1 0-2h-1.25zM6.1 17.9a1 1 0 0 1 1.4-1.4l.9.9a1 1 0 1 1-1.4 1.4l-.9-.9zm8.5-8.5a1 1 0 0 1 1.4-1.4l.9.9a1 1 0 1 1-1.4 1.4l-.9-.9zM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8z" />
            </svg>
          )}
        </button>

        <Link
          href="/chat"
          className="rounded-md px-4 py-2 border border-border bg-[color:var(--surface)] font-semibold text-foreground transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
        >
          Discutons
        </Link>
      </div>
    </nav>
  );
}
