import { getAllArticles, formatDate } from "@/lib/articles";
import { ArticleCard } from "@/components/article-card";

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <div className="max-w-[1080px] mx-auto px-8 pt-32 pb-20">
      <header className="mb-12">
        <h1 className="text-[clamp(32px,4vw,48px)] font-bold tracking-tight mb-3">
          Articles
        </h1>
        <p className="text-lg text-[var(--text-muted)] max-w-[560px]">
          Every build, comparison, and experiment — documented honestly.
        </p>
      </header>

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
          First article coming soon.
        </p>
      )}
    </div>
  );
}
