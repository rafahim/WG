import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__cute-things-to-say-to-your-girlfriend.json";

export const metadata: Metadata = {
  title: "Cute Things to Say to Your Girlfriend",
  description: "Find thoughtful things to say to your girlfriend for everyday appreciation, reassurance, long-distance moments and special occasions.",
  keywords: ["cute things to say to your girlfriend", "sweet things to tell your girlfriend", "romantic messages for girlfriend", "what to text your girlfriend to make her smile"],
  alternates: { canonical: "/guides/cute-things-to-say-to-your-girlfriend/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-07", modifiedTime: "2026-11-07", authors: ["https://guide.wishly.bd/authors/ra-fahim/"], title: "Cute Things to Say to Your Girlfriend", description: "Find thoughtful things to say to your girlfriend for everyday appreciation, reassurance, long-distance moments and special occasions\u2014without sounding generic.", url: "/guides/cute-things-to-say-to-your-girlfriend/", siteName: "Wishly Guide", locale: "en_US", images: [{ url: "https://guide.wishly.bd/assets/editorial/love-letter-template.webp", width: 960, height: 600, alt: "Wishly Love Letter romantic letter template preview" }] },
  twitter: { card: "summary_large_image", title: "Cute Things to Say to Your Girlfriend", description: "Find thoughtful things to say to your girlfriend for everyday appreciation, reassurance, long-distance moments and special occasions\u2014without sounding generic.", images: ["https://guide.wishly.bd/assets/editorial/love-letter-template.webp"] }
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
