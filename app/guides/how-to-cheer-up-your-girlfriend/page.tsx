import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__how-to-cheer-up-your-girlfriend.json";

export const metadata: Metadata = {
  title: "How to Cheer Up Your Girlfriend | Wishly",
  description: "Learn supportive ways to comfort your girlfriend when she feels sad, stressed or overwhelmed\u2014without dismissing her feelings or forcing positivity.",
  keywords: ["how to cheer up your girlfriend", "how to comfort your girlfriend when she is sad", "what to say when girlfriend is upset", "how to support girlfriend on a bad day"],
  alternates: { canonical: "/guides/how-to-cheer-up-your-girlfriend/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "article", title: "How to Cheer Up Your Girlfriend | Wishly", description: "Learn supportive ways to comfort your girlfriend when she feels sad, stressed or overwhelmed\u2014without dismissing her feelings or forcing positivity.", url: "/guides/how-to-cheer-up-your-girlfriend/", siteName: "Wishly Guide", locale: "en_US", images: [{ url: "https://guide.wishly.bd/assets/editorial/miss-you-template.webp", width: 960, height: 600, alt: "Wishly Miss You personal message template preview" }] },
  twitter: { card: "summary_large_image", title: "How to Cheer Up Your Girlfriend | Wishly", description: "Learn supportive ways to comfort your girlfriend when she feels sad, stressed or overwhelmed\u2014without dismissing her feelings or forcing positivity.", images: ["https://guide.wishly.bd/assets/editorial/miss-you-template.webp"] }
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
