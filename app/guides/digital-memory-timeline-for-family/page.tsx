import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__digital-memory-timeline-for-family.json";

const pageTitle = "Create a Digital Memory Timeline for Your Family";
const pageDescription = "Turn family photographs, dates and stories into a clear digital memory timeline. Learn how to organise memories, write captions and share respectfully.";
export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["digital memory timeline", "family memory website", "online family memory book", "digital family scrapbook", "family photo timeline"],
  alternates: { canonical: "/guides/digital-memory-timeline-for-family/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-07", modifiedTime: "2026-11-07", authors: ["https://guide.wishly.bd/authors/ra-fahim/"], title: pageTitle, description: pageDescription, url: "/guides/digital-memory-timeline-for-family/", siteName: "Wishly Guide", locale: "en_US", images: [{ url: "https://guide.wishly.bd/assets/editorial/digital-memory-book-website.webp", width: 1200, height: 630, alt: "A digital family memory book layout with photos and personal stories" }] },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: ["https://guide.wishly.bd/assets/editorial/digital-memory-book-website.webp"] }
};
export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
