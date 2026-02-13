import Link from "next/link";
import { getAllArticles, formatDate } from "@/lib/articles";
import { ArticleCard } from "@/components/article-card";
import { NewsletterForm } from "@/components/newsletter-form";
import { ChevronRightIcon } from "@/components/icons";

export default function Home() {
  const articles = getAllArticles().slice(0, 5);

  return (
    <>
      {/* Hero */}
      <header className="max-w-[1080px] mx-auto px-8 pt-36 pb-20">
        <div className="max-w-[720px]">
          <p className="font-sans text-[13px] font-semibold uppercase tracking-widest text-[var(--accent)] mb-5">
            Building things with AI, one experiment at a time
          </p>
          <h1 className="text-[clamp(36px,5vw,56px)] font-bold leading-[1.1] tracking-tight mb-6">
            I&apos;m not an engineer.
            <br />
            <span className="text-[var(--text-muted)]">
              I just build things with AI
            </span>
            <br />
            and write about what happens.
          </h1>
          <p className="text-lg leading-relaxed text-[var(--text-muted)] max-w-[560px] mb-9">
            Honest comparisons, real experiments, and the unfiltered truth about
            building with Claude, ChatGPT, and Gemini. No hype, no jargon, no
            pretending to be an expert.
          </p>
          <NewsletterForm />
        </div>
      </header>

      {/* Divider */}
      <div className="max-w-[1080px] mx-auto px-8">
        <div className="border-t border-[var(--border)]" />
      </div>

      {/* Latest Articles */}
      <section className="max-w-[1080px] mx-auto px-8 pt-16 pb-10">
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="font-sans text-sm font-semibold uppercase tracking-widest text-[var(--text-faint)]">
            Latest
          </h2>
          <Link
            href="/articles"
            className="font-sans text-sm font-medium text-[var(--accent)] no-underline flex items-center gap-1 hover:text-[var(--accent-hover)] transition-colors duration-200"
          >
            All articles <ChevronRightIcon />
          </Link>
        </div>

        <div>
          {articles.map((article, i) => (
            <ArticleCard
              key={article.slug}
              title={article.title}
              excerpt={article.excerpt}
              tag={article.tag}
              date={formatDate(article.date)}
              readTime={article.readTime}
              slug={article.slug}
              showBorder={i !== 0}
            />
          ))}
        </div>

        {articles.length === 0 && (
          <p className="text-[var(--text-muted)] font-sans py-12 text-center">
            First article coming soon. Subscribe to get notified.
          </p>
        )}
      </section>

      {/* Divider */}
      <div className="max-w-[1080px] mx-auto px-8">
        <div className="border-t border-[var(--border)]" />
      </div>

      {/* Bottom CTA */}
      <section className="max-w-[1080px] mx-auto px-8 pt-16 pb-20 text-center">
        <h2 className="text-[clamp(24px,3.5vw,36px)] font-bold tracking-tight mb-3">
          Don&apos;t miss the next experiment.
        </h2>
        <p className="text-base text-[var(--text-muted)] font-sans mb-7">
          Real builds, honest results.
        </p>
        <NewsletterForm centered />
      </section>
    </>
  );
}
