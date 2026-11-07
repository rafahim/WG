import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__how-to-make-your-best-friend-feel-special.json";

export const metadata: Metadata = {
  title: "Make Your Best Friend Feel Special",
  description: "Find meaningful ways to appreciate your best friend with shared memories, small gestures, birthday surprises and personal thank-you messages.",
  keywords: ["how to make your best friend feel special", "best friend surprise ideas", "things to do for your best friend", "thank you message for best friend"],
  alternates: { canonical: "/guides/how-to-make-your-best-friend-feel-special/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-07", modifiedTime: "2026-11-07", authors: ["https://guide.wishly.bd/authors/ra-fahim/"], title: "Make Your Best Friend Feel Special", description: "Find meaningful ways to appreciate your best friend with shared memories, small gestures, birthday surprises and personal thank-you messages.", url: "/guides/how-to-make-your-best-friend-feel-special/", siteName: "Wishly Guide", locale: "en_US", images: [{ url: "https://guide.wishly.bd/assets/editorial/best-friend-forever.webp", width: 960, height: 600, alt: "Wishly Best Friend Forever friendship template preview" }] },
  twitter: { card: "summary_large_image", title: "Make Your Best Friend Feel Special", description: "Find meaningful ways to appreciate your best friend with shared memories, small gestures, birthday surprises and personal thank-you messages.", images: ["https://guide.wishly.bd/assets/editorial/best-friend-forever.webp"] }
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
