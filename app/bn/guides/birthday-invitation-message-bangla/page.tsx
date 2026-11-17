import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/bn__guides__birthday-invitation-message-bangla.json";

export const metadata: Metadata = {
  title: "Birthday Invitation Message: জন্মদিনের দাওয়াতের লেখা ও নমুনা",
  description: "শিশু, বড়দের birthday party, family dinner এবং online celebration-এর জন্য বাংলা ও English invitation message-এর নমুনা ও checklist।",
  keywords: ["জন্মদিনের দাওয়াতের লেখা", "birthday invitation message bangla", "জন্মদিনের invitation", "birthday party invitation wording", "অনলাইন জন্মদিনের দাওয়াত"],
  alternates: { canonical: "/bn/guides/birthday-invitation-message-bangla/", languages: { en: "https://guide.wishly.bd/guides/birthday-invitation-wording-examples/", bn: "https://guide.wishly.bd/bn/guides/birthday-invitation-message-bangla/", "x-default": "https://guide.wishly.bd/guides/birthday-invitation-wording-examples/" } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-17", modifiedTime: "2026-11-17", authors: ["https://guide.wishly.bd/authors/ra-fahim/"], title: "Birthday Invitation Message: জন্মদিনের দাওয়াতের লেখা ও নমুনা", description: "শিশু, বড়দের birthday party, family dinner এবং online celebration-এর জন্য বাংলা ও English invitation message-এর নমুনা ও checklist।", url: "/bn/guides/birthday-invitation-message-bangla/", siteName: "Wishly Guide", locale: "bn_BD", images: [{ url: "https://guide.wishly.bd/assets/editorial/online-wedding-invitation-checklist.webp", width: 1200, height: 630, alt: "জন্মদিনের digital invitation-এ event details ও সুন্দর message সাজানোর ধারণা" }] },
  twitter: { card: "summary_large_image", title: "Birthday Invitation Message: জন্মদিনের দাওয়াতের লেখা ও নমুনা", description: "শিশু, বড়দের birthday party, family dinner এবং online celebration-এর জন্য বাংলা ও English invitation message-এর নমুনা ও checklist।", images: ["https://guide.wishly.bd/assets/editorial/online-wedding-invitation-checklist.webp"] }
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
