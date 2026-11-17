import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/bn__guides__wedding-invitation-website-bangla.json";

const pageTitle = "Online Wedding Invitation Website বানানোর নিয়ম: বিয়ের Digital…";
const pageDescription = "বিয়ের online invitation website-এ অনুষ্ঠানসূচি, তারিখ, venue, যাতায়াতের তথ্য ও guest instructions কীভাবে সাজাবেন—সম্পূর্ণ guide।";
const imageUrl = "https://guide.wishly.bd/assets/editorial/online-wedding-invitation-checklist.webp";

export const metadata: Metadata = {
  title: pageTitle, description: pageDescription,
  keywords: ["online wedding invitation website", "বিয়ের ডিজিটাল দাওয়াত", "বিয়ের online invitation", "digital wedding card", "wedding invitation link"],
  alternates: { canonical: "/bn/guides/wedding-invitation-website-bangla/", languages: { en: "https://guide.wishly.bd/guides/wedding-invitation-website/", bn: "https://guide.wishly.bd/bn/guides/wedding-invitation-website-bangla/", "x-default": "https://guide.wishly.bd/guides/wedding-invitation-website/" } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-17", modifiedTime: "2026-11-17", authors: ["https://guide.wishly.bd/about/"], title: pageTitle, description: pageDescription, url: "/bn/guides/wedding-invitation-website-bangla/", siteName: "Wishly Guide", locale: "bn_BD", images: [{ url: imageUrl, width: 1200, height: 630, alt: "Online wedding invitation website design with celebration details" }] },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: [imageUrl] },
  authors: [{ name: "Wishly Guide", url: "https://guide.wishly.bd/about/" }]
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
