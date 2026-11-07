import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__first-anniversary-wishes-for-couples.json";

export const metadata: Metadata = {
  title: "First Anniversary Wishes for Couples: 30 Message Ideas",
  description: "Find first anniversary wishes for a partner or couple, with message ideas and a simple structure for a personal one-year note.",
  keywords: ["first anniversary wishes for couples", "first anniversary message for girlfriend", "first anniversary wishes for boyfriend", "one year anniversary message ideas", "happy first anniversary message"],
  alternates: { canonical: "/guides/first-anniversary-wishes-for-couples/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-07", modifiedTime: "2026-11-07", authors: ["https://guide.wishly.bd/authors/ra-fahim/"], title: "First Anniversary Wishes for Couples: 30 Message Ideas", description: "Find first anniversary wishes for a partner or couple, with examples to make a one-year message personal.", url: "/guides/first-anniversary-wishes-for-couples/", siteName: "Wishly Guide", locale: "en_US", images: [{ url: "https://guide.wishly.bd/assets/editorial/anniversary-forever-template.webp", width: 960, height: 600, alt: "An elegant anniversary page design with a personal message and romantic details" }] },
  twitter: { card: "summary_large_image", title: "First Anniversary Wishes for Couples: 30 Message Ideas", description: "Find first anniversary wishes for a partner or couple, with examples to make a one-year message personal.", images: ["https://guide.wishly.bd/assets/editorial/anniversary-forever-template.webp"] }
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
