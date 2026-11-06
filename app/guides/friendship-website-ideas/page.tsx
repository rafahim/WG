import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__friendship-website-ideas.json";

export const metadata: Metadata = {
  title: "Friendship Website Ideas | Wishly Guide",
  description: "Discover thoughtful friendship website ideas, from shared photo timelines and inside jokes to thank-you notes and a personal page you can share with one link.",
  alternates: { canonical: "/guides/friendship-website-ideas/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { type: "article", title: "Friendship Website Ideas | Wishly Guide", description: "Discover thoughtful friendship website ideas, from shared photo timelines and inside jokes to thank-you notes and a personal page you can share with one link.", url: "/guides/friendship-website-ideas/", siteName: "Wishly Guide", locale: "en_US", images: [{ url: "https://guide.wishly.bd/assets/og-wishly-guide.png", width: 1200, height: 630, alt: "Wishly Guide — practical inspiration for meaningful moments" }] },
  twitter: { card: "summary_large_image", title: "Friendship Website Ideas | Wishly Guide", description: "Discover thoughtful friendship website ideas, from shared photo timelines and inside jokes to thank-you notes and a personal page you can share with one link.", images: ["https://guide.wishly.bd/assets/og-wishly-guide.png"] }
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
