"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 border-b">
      <Link href="/" className="font-bold text-lg">
        Saber Dhib
      </Link>

      <div className="flex items-center gap-6">
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/architectures">Architectures</Link>

        <button
          onClick={() =>
            setTheme(theme === "dark" ? "light" : "dark")
          }
          className="text-sm opacity-80 hover:opacity-100"
        >
          {theme === "dark" ? "Light" : "Dark"}
        </button>

        <Link
          href="/contact"
          className="rounded-md px-4 py-2 border font-semibold"
        >
          Discutons
        </Link>
      </div>
    </nav>
  );
}
