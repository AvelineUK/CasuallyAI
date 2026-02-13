"use client";

import { useState } from "react";

export function NewsletterForm({ centered = false }: { centered?: boolean }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <p className="font-sans text-sm text-[var(--accent)]">
        You&apos;re in. Watch your inbox.
      </p>
    );
  }

  return (
    <div className={centered ? "text-center" : ""}>
      <form
        onSubmit={handleSubmit}
        className={`flex gap-2.5 max-w-[440px] ${centered ? "mx-auto" : ""}`}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className="flex-1 px-4 py-3 bg-[var(--surface)] border border-[var(--border)] rounded-lg text-[var(--text)] text-[15px] font-sans outline-none transition-[border-color] duration-200 focus:border-[var(--accent)] placeholder:text-[var(--text-faint)]"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="px-6 py-3 bg-[var(--accent)] text-white border-none rounded-lg text-[15px] font-sans font-semibold cursor-pointer whitespace-nowrap transition-[background] duration-200 hover:bg-[var(--accent-hover)] disabled:opacity-60"
        >
          {status === "loading" ? "..." : "Subscribe"}
        </button>
      </form>
      {status === "error" && (
        <p className="font-sans text-sm text-red-500 mt-2">
          Something went wrong. Try again?
        </p>
      )}
      <p className="font-sans text-xs text-[var(--text-faint)] mt-2.5">
        No spam. Unsubscribe anytime.
      </p>
    </div>
  );
}
