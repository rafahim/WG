import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__personal-website-without-coding.json";

export const metadata: Metadata = {
  title: "Make a Personal Website Without Coding",
  description: "A no-code personal website guide covering purpose, templates, content, design, mobile preview and sharing.",
  alternates: { canonical: "/guides/personal-website-without-coding/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-07", modifiedTime: "2026-11-07", authors: ["https://guide.wishly.bd/about/"], title: "Make a Personal Website Without Coding", description: "A no-code personal website guide covering purpose, templates, content, design, mobile preview and sharing.", url: "/guides/personal-website-without-coding/", siteName: "Wishly Guide", locale: "en_US", images: [{ url: "https://guide.wishly.bd/assets/og-wishly-guide.png", width: 1200, height: 630, alt: "Wishly Guide — practical inspiration for meaningful moments" }] },
  twitter: { card: "summary_large_image", title: "Make a Personal Website Without Coding", description: "A no-code personal website guide covering purpose, templates, content, design, mobile preview and sharing.", images: ["https://guide.wishly.bd/assets/og-wishly-guide.png"] }
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
