import Link from "next/link";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  tag: string;
  date: string;
  readTime: string;
  slug: string;
  showBorder?: boolean;
}

export function ArticleCard({
  title,
  excerpt,
  tag,
  date,
  readTime,
  slug,
  showBorder = true,
}: ArticleCardProps) {
  return (
    <article
      className={`py-8 ${showBorder ? "border-t border-[var(--border-subtle)]" : ""}`}
    >
      <Link href={`/articles/${slug}`} className="block no-underline group">
        <div className="grid grid-cols-[1fr_auto] gap-10 items-start">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-sans text-xs font-semibold uppercase tracking-wider text-[var(--tag-text)] bg-[var(--tag-bg)] px-2.5 py-0.5 rounded">
                {tag}
              </span>
              <span className="font-sans text-[13px] text-[var(--text-faint)]">
                {date}
              </span>
            </div>
            <h3 className="text-[22px] font-semibold leading-snug tracking-tight mb-2 text-[var(--text)] group-hover:text-[var(--accent)] transition-colors duration-200">
              {title}
            </h3>
            <p className="text-base leading-relaxed text-[var(--text-muted)] max-w-[600px]">
              {excerpt}
            </p>
          </div>
          <div className="font-sans text-[13px] text-[var(--text-faint)] whitespace-nowrap pt-8">
            {readTime}
          </div>
        </div>
      </Link>
    </article>
  );
}
