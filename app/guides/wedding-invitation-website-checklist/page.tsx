import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__wedding-invitation-website-checklist.json";

export const metadata: Metadata = {
  title: "Wedding Invitation Website Checklist | Wishly",
  description: "Use this wedding invitation website checklist to organize the date, venue, schedule, travel notes, dress code, contact details and guest information.",
  alternates: { canonical: "/guides/wedding-invitation-website-checklist/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-07", modifiedTime: "2026-11-07", authors: ["https://guide.wishly.bd/about/"], title: "Wedding Invitation Website Checklist | Wishly", description: "Use this wedding invitation website checklist to organize the date, venue, schedule, travel notes, dress code, contact details and guest information.", url: "/guides/wedding-invitation-website-checklist/", siteName: "Wishly Guide", locale: "en_US", images: [{ url: "https://guide.wishly.bd/assets/editorial/online-wedding-invitation-checklist.webp", width: 1200, height: 630, alt: "An elegant wedding story website visual for an online invitation checklist" }] },
  twitter: { card: "summary_large_image", title: "Wedding Invitation Website Checklist | Wishly", description: "Use this wedding invitation website checklist to organize the date, venue, schedule, travel notes, dress code, contact details and guest information.", images: ["https://guide.wishly.bd/assets/editorial/online-wedding-invitation-checklist.webp"] },
  authors: [{ name: "Wishly Guide", url: "https://guide.wishly.bd/about/" }]
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
