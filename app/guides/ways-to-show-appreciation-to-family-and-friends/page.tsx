import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__ways-to-show-appreciation-to-family-and-friends.json";

export const metadata: Metadata = {
  title: "Ways to Show Appreciation to Friends & Family",
  description: "Explore meaningful ways to show appreciation to family and friends through gratitude messages, thoughtful gestures, shared memories and digital thank-you pages.",
  keywords: ["ways to show appreciation to family and friends", "thank you message ideas", "how to show gratitude to friends", "personal appreciation website"],
  alternates: { canonical: "/guides/ways-to-show-appreciation-to-family-and-friends/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-07", modifiedTime: "2026-11-07", authors: ["https://guide.wishly.bd/authors/ra-fahim/"], title: "Ways to Show Appreciation to Friends & Family", description: "Explore meaningful ways to show appreciation to family and friends through gratitude messages, thoughtful gestures, shared memories and digital thank-you pages.", url: "/guides/ways-to-show-appreciation-to-family-and-friends/", siteName: "Wishly Guide", locale: "en_US", images: [{ url: "https://guide.wishly.bd/assets/editorial/gratitude-note-template.webp", width: 960, height: 600, alt: "Wishly A Note of Gratitude template preview" }] },
  twitter: { card: "summary_large_image", title: "Ways to Show Appreciation to Friends & Family", description: "Explore meaningful ways to show appreciation to family and friends through gratitude messages, thoughtful gestures, shared memories and digital thank-you pages.", images: ["https://guide.wishly.bd/assets/editorial/gratitude-note-template.webp"] }
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
