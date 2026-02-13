import { NewsletterForm } from "@/components/newsletter-form";

export default function AboutPage() {
  return (
    <div className="max-w-[1080px] mx-auto px-8 pt-32 pb-20">
      <div className="max-w-[640px]">
        <h1 className="text-[clamp(32px,4vw,48px)] font-bold tracking-tight mb-8">
          About
        </h1>

        <div className="prose-casual">
          <p>
            I&apos;m not an engineer, a data scientist, or a machine learning
            researcher. I&apos;m a person who uses AI every single day to build
            things I couldn&apos;t build before — and writes about what actually
            happens when I do.
          </p>

          <p>
            For the past two years, I&apos;ve been using Claude, ChatGPT, and
            Gemini daily. I&apos;ve built websites, written scripts in Python,
            JavaScript, and TypeScript, and done things I never thought I&apos;d
            be able to do. It started as curiosity. Then it became a hobby. Now
            it&apos;s this.
          </p>

          <p>
            <strong>CasuallyAI</strong> is where I document it all — honestly.
            Every comparison is a real test. Every build log is a real project.
            When something doesn&apos;t work, I&apos;ll tell you. When an AI
            surprises me, I&apos;ll tell you that too.
          </p>

          <h2>What you&apos;ll find here</h2>

          <p>
            <strong>Build logs</strong> where I take the same project brief to
            multiple AI models and document what happens. <strong>Experiments</strong>{" "}
            that test the boundaries of what these tools can do.{" "}
            <strong>Comparisons</strong> that go beyond benchmarks and into the
            messy reality of actually using these models for real work. And
            occasionally, something completely ridiculous just to see what
            happens.
          </p>

          <p>
            If you&apos;re an engineer looking for technical deep dives into
            transformer architectures, this probably isn&apos;t for you. If
            you&apos;re someone who uses AI — or wants to — and wants to know
            what it&apos;s actually like to build things with it, welcome. Pull
            up a chair.
          </p>
        </div>

        <div className="border-t border-[var(--border)] mt-16 pt-12">
          <h3 className="text-2xl font-bold tracking-tight mb-2">
            Stay in the loop
          </h3>
          <p className="text-[var(--text-muted)] font-sans mb-6">
            New experiments, every week.
          </p>
          <NewsletterForm />
        </div>
      </div>
    </div>
  );
}
