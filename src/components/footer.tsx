import Link from "next/link";
import { RssIcon } from "./icons";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border-subtle)] py-8">
      <div className="max-w-[1080px] mx-auto px-8 flex justify-between items-center font-sans text-[13px] text-[var(--text-faint)]">
        <span>
          Casually<span className="text-[var(--accent)]">AI</span>
          {" "}&middot; {new Date().getFullYear()}
        </span>
        <div className="flex items-center gap-5">
          <Link
            href="/rss.xml"
            className="text-[var(--text-faint)] no-underline hover:text-[var(--text-muted)] transition-colors duration-200 flex items-center gap-1.5"
          >
            <RssIcon size={14} />
            RSS
          </Link>
          <a
            href="https://twitter.com/casuallyai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-faint)] no-underline hover:text-[var(--text-muted)] transition-colors duration-200"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
