import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__birthday-ideas-for-someone-who-doesnt-like-attention.json";

export const metadata: Metadata = {
  title: "Birthday Ideas for Someone Who Does Not Like Attention",
  description: "Plan a thoughtful, low-pressure birthday for someone who dislikes being the centre of attention, with quiet celebrations, private messages and personal ideas.",
  keywords: ["birthday ideas for someone who doesnt like attention", "quiet birthday ideas", "low key birthday celebration ideas", "birthday surprise for an introvert", "private birthday celebration ideas"],
  alternates: { canonical: "/guides/birthday-ideas-for-someone-who-doesnt-like-attention/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-07", modifiedTime: "2026-11-07", authors: ["https://guide.wishly.bd/authors/ra-fahim/"], title: "Birthday Ideas for Someone Who Does Not Like Attention", description: "Plan a thoughtful, low-pressure birthday for someone who dislikes being the centre of attention, with quiet celebrations, private messages and personal ideas.", url: "/guides/birthday-ideas-for-someone-who-doesnt-like-attention/", siteName: "Wishly Guide", locale: "en_US", images: [{ url: "https://guide.wishly.bd/assets/editorial/birthday-magic-template.webp", width: 960, height: 600, alt: "A softly styled birthday design representing a calm, personal celebration" }] },
  twitter: { card: "summary_large_image", title: "Birthday Ideas for Someone Who Does Not Like Attention", description: "Plan a thoughtful, low-pressure birthday for someone who dislikes being the centre of attention, with quiet celebrations, private messages and personal ideas.", images: ["https://guide.wishly.bd/assets/editorial/birthday-magic-template.webp"] }
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
