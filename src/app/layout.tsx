import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "CasuallyAI — Building things with AI, one experiment at a time",
    template: "%s | CasuallyAI",
  },
  description:
    "Honest comparisons, real experiments, and the unfiltered truth about building with Claude, ChatGPT, and Gemini.",
  openGraph: {
    title: "CasuallyAI",
    description:
      "Honest comparisons, real experiments, and the unfiltered truth about building with Claude, ChatGPT, and Gemini.",
    url: "https://casuallyai.co",
    siteName: "CasuallyAI",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CasuallyAI",
    description:
      "Honest comparisons, real experiments, and the unfiltered truth about building with Claude, ChatGPT, and Gemini.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;0,8..60,600;0,8..60,700;1,8..60,400&family=DM+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[var(--bg)] text-[var(--text)] font-serif antialiased">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
