import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border mt-24 px-8 py-8 text-sm text-muted">
      <div className="flex justify-between items-center">
        <p>© {new Date().getFullYear()} Saber Dhib</p>
        <div className="flex gap-4">
          <Link href="/legal">Legal</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
