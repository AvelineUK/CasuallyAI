export default function DemosPage() {
  // TODO: This could pull from Sanity or be a static list you maintain
  const demos = [
    {
      title: "Portfolio Site — Claude",
      project: "Three AIs, One Portfolio",
      description:
        "The portfolio site Claude built from a single brief. Clean, responsive, and surprisingly opinionated.",
      url: "#",
      model: "Claude",
    },
    {
      title: "Portfolio Site — ChatGPT",
      project: "Three AIs, One Portfolio",
      description:
        "ChatGPT's take on the same brief. A different approach entirely.",
      url: "#",
      model: "ChatGPT",
    },
    {
      title: "Portfolio Site — Gemini",
      project: "Three AIs, One Portfolio",
      description: "What Gemini produced. Make of it what you will.",
      url: "#",
      model: "Gemini",
    },
  ];

  return (
    <div className="max-w-[1080px] mx-auto px-8 pt-32 pb-20">
      <header className="mb-12">
        <h1 className="text-[clamp(32px,4vw,48px)] font-bold tracking-tight mb-3">
          Demos
        </h1>
        <p className="text-lg text-[var(--text-muted)] max-w-[560px]">
          Every project I build with AI, available to click around and judge for
          yourself.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {demos.map((demo) => (
          <a
            key={demo.title}
            href={demo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block no-underline group border border-[var(--border)] rounded-lg p-6 transition-[border-color,background] duration-200 hover:border-[var(--accent)] hover:bg-[var(--surface)]"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="font-sans text-xs font-semibold uppercase tracking-wider text-[var(--tag-text)] bg-[var(--tag-bg)] px-2.5 py-0.5 rounded">
                {demo.model}
              </span>
              <span className="font-sans text-[13px] text-[var(--text-faint)]">
                {demo.project}
              </span>
            </div>
            <h3 className="text-lg font-semibold tracking-tight mb-1.5 text-[var(--text)] group-hover:text-[var(--accent)] transition-colors duration-200">
              {demo.title}
            </h3>
            <p className="text-sm leading-relaxed text-[var(--text-muted)]">
              {demo.description}
            </p>
          </a>
        ))}
      </div>

      {demos.length <= 3 && (
        <div className="mt-16 text-center">
          <p className="text-[var(--text-faint)] font-sans text-sm">
            More demos coming with each new article. This will fill up fast.
          </p>
        </div>
      )}
    </div>
  );
}
