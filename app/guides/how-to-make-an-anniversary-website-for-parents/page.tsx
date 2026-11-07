import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__how-to-make-an-anniversary-website-for-parents.json";

const pageTitle = "Anniversary Website Ideas for Parents";
const pageDescription = "Create a thoughtful anniversary website for your parents with family memories, photographs, a message of appreciation and a simple timeline of their journey.";
export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["anniversary website for parents", "parents anniversary website ideas", "digital anniversary gift for parents", "wedding anniversary website for parents", "family anniversary surprise"],
  alternates: { canonical: "/guides/how-to-make-an-anniversary-website-for-parents/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-07", modifiedTime: "2026-11-07", authors: ["https://guide.wishly.bd/authors/ra-fahim/"], title: pageTitle, description: pageDescription, url: "/guides/how-to-make-an-anniversary-website-for-parents/", siteName: "Wishly Guide", locale: "en_US", images: [{ url: "https://guide.wishly.bd/assets/editorial/anniversary-surprise-website.webp", width: 1200, height: 630, alt: "An anniversary website design representing a family celebration and shared memories" }] },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: ["https://guide.wishly.bd/assets/editorial/anniversary-surprise-website.webp"] }
};
export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
