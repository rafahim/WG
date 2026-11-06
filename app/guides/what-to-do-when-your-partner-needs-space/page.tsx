import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__what-to-do-when-your-partner-needs-space.json";

export const metadata: Metadata = {
  title: "When Your Partner Needs Space: What to Do",
  description: "Understand how to respond when your partner asks for space, agree on communication, manage uncertainty and reconnect without pressure.",
  keywords: ["what to do when your partner needs space", "girlfriend needs space what should I do", "how to give partner space in relationship", "respecting space in a relationship"],
  alternates: { canonical: "/guides/what-to-do-when-your-partner-needs-space/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "article", title: "When Your Partner Needs Space: What to Do", description: "Understand how to respond when your partner asks for space, agree on communication, manage uncertainty and reconnect without pressure.", url: "/guides/what-to-do-when-your-partner-needs-space/", siteName: "Wishly Guide", locale: "en_US", images: [{ url: "https://guide.wishly.bd/assets/editorial/miss-you-letter-template.webp", width: 960, height: 600, alt: "Wishly Miss You Letter template preview" }] },
  twitter: { card: "summary_large_image", title: "When Your Partner Needs Space: What to Do", description: "Understand how to respond when your partner asks for space, agree on communication, manage uncertainty and reconnect without pressure.", images: ["https://guide.wishly.bd/assets/editorial/miss-you-letter-template.webp"] }
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
