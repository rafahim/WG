import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__what-to-write-in-an-apology-letter.json";

export const metadata: Metadata = {
  title: "What to Write in an Apology Letter",
  description: "Learn what to write in an apology letter to a partner, friend or family member, with a structure for accountability, empathy and meaningful repair.",
  keywords: ["what to write in an apology letter", "how to write a sincere apology letter", "apology letter to girlfriend", "sorry letter to someone you hurt"],
  alternates: { canonical: "/guides/what-to-write-in-an-apology-letter/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "article", title: "What to Write in an Apology Letter", description: "Learn what to write in an apology letter to a partner, friend or family member, with a structure for accountability, empathy and meaningful repair.", url: "/guides/what-to-write-in-an-apology-letter/", siteName: "Wishly Guide", locale: "en_US", images: [{ url: "https://guide.wishly.bd/assets/editorial/sorry-letter-template.webp", width: 960, height: 600, alt: "Wishly Sorry Letter template preview for an apology message" }] },
  twitter: { card: "summary_large_image", title: "What to Write in an Apology Letter", description: "Learn what to write in an apology letter to a partner, friend or family member, with a structure for accountability, empathy and meaningful repair.", images: ["https://guide.wishly.bd/assets/editorial/sorry-letter-template.webp"] }
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
