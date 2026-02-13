import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--nav-bg)] backdrop-blur-md border-b border-[var(--border-subtle)]">
      <div className="max-w-[1080px] mx-auto px-8 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-sans font-semibold text-lg tracking-tight text-[var(--text)] no-underline"
        >
          Casually<span className="text-[var(--accent)]">AI</span>
        </Link>

        <div className="flex items-center gap-8 font-sans text-sm font-medium">
          <Link
            href="/articles"
            className="text-[var(--text-muted)] no-underline transition-colors duration-200 hover:text-[var(--text)]"
          >
            Articles
          </Link>
          <Link
            href="/demos"
            className="text-[var(--text-muted)] no-underline transition-colors duration-200 hover:text-[var(--text)]"
          >
            Demos
          </Link>
          <Link
            href="/about"
            className="text-[var(--text-muted)] no-underline transition-colors duration-200 hover:text-[var(--text)]"
          >
            About
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
