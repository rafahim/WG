import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__thank-you-website-guide.json";

export const metadata: Metadata = {
  title: "Thank-You Website Ideas | Wishly Guide",
  description: "Plan a thoughtful thank-you website for a friend, teacher, parent, mentor or team with specific memories, photos and a message that feels genuine.",
  alternates: { canonical: "/guides/thank-you-website-guide/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { type: "article", title: "Thank-You Website Ideas | Wishly Guide", description: "Plan a thoughtful thank-you website for a friend, teacher, parent, mentor or team with specific memories, photos and a message that feels genuine.", url: "/guides/thank-you-website-guide/", siteName: "Wishly Guide", locale: "en_US", images: [{ url: "https://guide.wishly.bd/assets/og-wishly-guide.png", width: 1200, height: 630, alt: "Wishly Guide — practical inspiration for meaningful moments" }] },
  twitter: { card: "summary_large_image", title: "Thank-You Website Ideas | Wishly Guide", description: "Plan a thoughtful thank-you website for a friend, teacher, parent, mentor or team with specific memories, photos and a message that feels genuine.", images: ["https://guide.wishly.bd/assets/og-wishly-guide.png"] }
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
