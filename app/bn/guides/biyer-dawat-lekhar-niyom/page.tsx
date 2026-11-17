import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/bn__guides__biyer-dawat-lekhar-niyom.json";

export const metadata: Metadata = {
  title: "বিয়ের দাওয়াতের লেখা: Formal ও Casual Wedding Invitation নমুনা",
  description: "বাংলা ও English wedding invitation wording, পরিবারের পক্ষ থেকে দাওয়াত, couple-hosted message এবং digital invitation-এর প্রয়োজনীয় তথ্যের guide।",
  keywords: ["বিয়ের দাওয়াতের লেখা", "wedding invitation wording bangla", "বিয়ের invitation message", "বিয়ের কার্ডে কী লিখতে হয়", "digital wedding invitation text"],
  alternates: { canonical: "/bn/guides/biyer-dawat-lekhar-niyom/", languages: { en: "https://guide.wishly.bd/guides/wedding-invitation-wording-examples/", bn: "https://guide.wishly.bd/bn/guides/biyer-dawat-lekhar-niyom/", "x-default": "https://guide.wishly.bd/guides/wedding-invitation-wording-examples/" } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-17", modifiedTime: "2026-11-17", authors: ["https://guide.wishly.bd/authors/ra-fahim/"], title: "বিয়ের দাওয়াতের লেখা: Formal ও Casual Wedding Invitation নমুনা", description: "বাংলা ও English wedding invitation wording, পরিবারের পক্ষ থেকে দাওয়াত, couple-hosted message এবং digital invitation-এর প্রয়োজনীয় তথ্যের guide।", url: "/bn/guides/biyer-dawat-lekhar-niyom/", siteName: "Wishly Guide", locale: "bn_BD", images: [{ url: "https://guide.wishly.bd/assets/editorial/online-wedding-invitation-checklist.webp", width: 1200, height: 630, alt: "বিয়ের ডিজিটাল দাওয়াতের তারিখ, venue ও RSVP সাজানোর checklist" }] },
  twitter: { card: "summary_large_image", title: "বিয়ের দাওয়াতের লেখা: Formal ও Casual Wedding Invitation নমুনা", description: "বাংলা ও English wedding invitation wording, পরিবারের পক্ষ থেকে দাওয়াত, couple-hosted message এবং digital invitation-এর প্রয়োজনীয় তথ্যের guide।", images: ["https://guide.wishly.bd/assets/editorial/online-wedding-invitation-checklist.webp"] }
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
