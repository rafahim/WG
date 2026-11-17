import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__birthday-website-for-sister.json";

export const metadata: Metadata = {
  title: "Birthday Website for Your Sister: Ideas, Messages and a Step-by-Step Plan",
  description: "Make a birthday website for your sister with childhood photos, funny memories, a personal letter and thoughtful design ideas.",
  keywords: ["birthday website for sister", "sister birthday website ideas", "birthday surprise for sister online", "happy birthday sister website", "birthday page for sister"],
  alternates: { canonical: "/guides/birthday-website-for-sister/", languages: { en: "https://guide.wishly.bd/guides/birthday-website-for-sister/", bn: "https://guide.wishly.bd/bn/guides/boner-birthday-website/", "x-default": "https://guide.wishly.bd/guides/birthday-website-for-sister/" } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-17", modifiedTime: "2026-11-17", authors: ["https://guide.wishly.bd/authors/ra-fahim/"], title: "Birthday Website for Your Sister: Ideas, Messages and a Step-by-Step Plan", description: "Make a birthday website for your sister with childhood photos, funny memories, a personal letter and thoughtful design ideas.", url: "/guides/birthday-website-for-sister/", siteName: "Wishly Guide", locale: "en_US", images: [{ url: "https://guide.wishly.bd/assets/editorial/birthday-wish-website-preview.webp", width: 1200, height: 630, alt: "A personal birthday page idea for a sister with photos and a heartfelt message" }] },
  twitter: { card: "summary_large_image", title: "Birthday Website for Your Sister: Ideas, Messages and a Step-by-Step Plan", description: "Make a birthday website for your sister with childhood photos, funny memories, a personal letter and thoughtful design ideas.", images: ["https://guide.wishly.bd/assets/editorial/birthday-wish-website-preview.webp"] }
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
