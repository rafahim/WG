import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__how-to-make-your-girlfriend-smile-over-text.json";

export const metadata: Metadata = {
  title: "How to Make Your Girlfriend Smile Over Text | Wishly Guide",
  description: "Learn how to make your girlfriend smile over text with personal, playful and supportive messages that sound natural, respect her mood and avoid pressure.",
  keywords: ["how to make your girlfriend smile over text", "sweet messages for girlfriend", "romantic text messages for her", "cute things to text your girlfriend", "thoughtful messages for girlfriend"],
  alternates: { canonical: "/guides/how-to-make-your-girlfriend-smile-over-text/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-07", modifiedTime: "2026-11-07", authors: ["https://guide.wishly.bd/authors/ra-fahim/"], title: "How to Make Your Girlfriend Smile Over Text | Wishly Guide", description: "Learn how to make your girlfriend smile over text with personal, playful and supportive messages that sound natural, respect her mood and avoid pressure.", url: "/guides/how-to-make-your-girlfriend-smile-over-text/", siteName: "Wishly Guide", locale: "en_US", images: [{ url: "https://guide.wishly.bd/assets/editorial/midnight-love-template.webp", width: 960, height: 600, alt: "A romantic digital letter design illustrating a thoughtful message to a partner" }] },
  twitter: { card: "summary_large_image", title: "How to Make Your Girlfriend Smile Over Text | Wishly Guide", description: "Learn how to make your girlfriend smile over text with personal, playful and supportive messages that sound natural, respect her mood and avoid pressure.", images: ["https://guide.wishly.bd/assets/editorial/midnight-love-template.webp"] }
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
