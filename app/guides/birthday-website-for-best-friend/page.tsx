import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__birthday-website-for-best-friend.json";

const pageTitle = "How to Make a Birthday Website for Your Best Friend";
const pageDescription = "A practical guide to a best-friend birthday website: funny memories, friendship milestones, group photos, heartfelt notes and a shareable Wishly page.";
const imageUrl = "https://guide.wishly.bd/assets/editorial/best-friend-forever.webp";

export const metadata: Metadata = {
  title: pageTitle, description: pageDescription,
  keywords: ["birthday website for best friend", "best friend birthday website", "birthday website ideas for friends", "friendship birthday surprise online", "Wishly best friend"],
  alternates: { canonical: "/guides/birthday-website-for-best-friend/", languages: { en: "https://guide.wishly.bd/guides/birthday-website-for-best-friend/", bn: "https://guide.wishly.bd/bn/guides/best-friend-birthday-website-bangla/", "x-default": "https://guide.wishly.bd/guides/birthday-website-for-best-friend/" } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-17", modifiedTime: "2026-11-17", authors: ["https://guide.wishly.bd/about/"], title: pageTitle, description: pageDescription, url: "/guides/birthday-website-for-best-friend/", siteName: "Wishly Guide", locale: "en_US", images: [{ url: imageUrl, width: 1200, height: 630, alt: "Best-friend birthday website inspiration with friendship memories and photos" }] },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: [imageUrl] },
  authors: [{ name: "Wishly Guide", url: "https://guide.wishly.bd/about/" }]
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
