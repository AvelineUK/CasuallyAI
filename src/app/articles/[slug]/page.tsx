import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getArticleBySlug,
  getAllSlugs,
  formatDate,
} from "@/lib/articles";
import { NewsletterForm } from "@/components/newsletter-form";
import { ArrowRightIcon } from "@/components/icons";

// Generate static paths for all articles
export function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Generate metadata for each article
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) return { title: "Article not found" };

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="max-w-[1080px] mx-auto px-8 pt-32 pb-20">
      {/* Article header */}
      <header className="max-w-[720px] mx-auto mb-12">
        <div className="flex items-center gap-3 mb-5">
          <span className="font-sans text-xs font-semibold uppercase tracking-wider text-[var(--tag-text)] bg-[var(--tag-bg)] px-2.5 py-0.5 rounded">
            {article.tag}
          </span>
          <span className="font-sans text-[13px] text-[var(--text-faint)]">
            {formatDate(article.date)}
          </span>
          <span className="font-sans text-[13px] text-[var(--text-faint)]">
            &middot;
          </span>
          <span className="font-sans text-[13px] text-[var(--text-faint)]">
            {article.readTime}
          </span>
        </div>

        <h1 className="text-[clamp(32px,4.5vw,48px)] font-bold leading-tight tracking-tight mb-5">
          {article.title}
        </h1>

        <p className="text-xl leading-relaxed text-[var(--text-muted)]">
          {article.excerpt}
        </p>
      </header>

      <div className="max-w-[720px] mx-auto border-t border-[var(--border)] mb-12" />

      {/* Article body — rendered from markdown */}
      <div
        className="prose-casual max-w-[720px] mx-auto"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />

      {/* Article footer */}
      <div className="max-w-[720px] mx-auto mt-16">
        <div className="border-t border-[var(--border)] pt-12">
          <h3 className="text-2xl font-bold tracking-tight mb-2">
            Enjoyed this?
          </h3>
          <p className="text-[var(--text-muted)] font-sans mb-6">
            Get the next experiment straight to your inbox.
          </p>
          <NewsletterForm />
        </div>

        <div className="mt-12">
          <Link
            href="/articles"
            className="font-sans text-sm font-medium text-[var(--accent)] no-underline flex items-center gap-1.5 hover:text-[var(--accent-hover)] transition-colors duration-200"
          >
            <span className="rotate-180 inline-flex">
              <ArrowRightIcon />
            </span>
            Back to all articles
          </Link>
        </div>
      </div>
    </article>
  );
}
