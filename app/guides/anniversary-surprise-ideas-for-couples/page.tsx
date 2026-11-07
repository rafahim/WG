import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__anniversary-surprise-ideas-for-couples.json";

export const metadata: Metadata = {
  title: "Anniversary Surprise Ideas for Couples",
  description: "Plan a meaningful anniversary surprise with memory timelines, personal letters, shared experiences and digital anniversary websites.",
  keywords: ["anniversary surprise ideas for couples", "romantic anniversary ideas", "unique anniversary surprise for girlfriend", "anniversary website ideas"],
  alternates: { canonical: "/guides/anniversary-surprise-ideas-for-couples/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-07", modifiedTime: "2026-11-07", authors: ["https://guide.wishly.bd/authors/ra-fahim/"], title: "Anniversary Surprise Ideas for Couples", description: "Plan a meaningful anniversary surprise with memory timelines, personal letters, shared experiences and digital anniversary websites.", url: "/guides/anniversary-surprise-ideas-for-couples/", siteName: "Wishly Guide", locale: "en_US", images: [{ url: "https://guide.wishly.bd/assets/editorial/anniversary-forever-template.webp", width: 960, height: 600, alt: "Wishly A Little Forever anniversary template preview" }] },
  twitter: { card: "summary_large_image", title: "Anniversary Surprise Ideas for Couples", description: "Plan a meaningful anniversary surprise with memory timelines, personal letters, shared experiences and digital anniversary websites.", images: ["https://guide.wishly.bd/assets/editorial/anniversary-forever-template.webp"] }
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
