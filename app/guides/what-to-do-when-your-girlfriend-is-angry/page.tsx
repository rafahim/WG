import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__what-to-do-when-your-girlfriend-is-angry.json";

export const metadata: Metadata = {
  title: "When Your Girlfriend Is Angry: What to Do",
  description: "A respectful guide to responding when your girlfriend is angry: pause, listen, take responsibility and talk about the issue without manipulation or blame.",
  keywords: ["what to do when your girlfriend is angry", "how to calm girlfriend when angry", "girlfriend is mad at me what should I do", "how to resolve relationship conflict"],
  alternates: { canonical: "/guides/what-to-do-when-your-girlfriend-is-angry/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "article", title: "When Your Girlfriend Is Angry: What to Do", description: "A respectful guide to responding when your girlfriend is angry: pause, listen, take responsibility and talk about the issue without manipulation or blame.", url: "/guides/what-to-do-when-your-girlfriend-is-angry/", siteName: "Wishly Guide", locale: "en_US", images: [{ url: "https://guide.wishly.bd/assets/editorial/premium-apology-template.webp", width: 960, height: 600, alt: "Wishly Premium Sorry apology template preview" }] },
  twitter: { card: "summary_large_image", title: "When Your Girlfriend Is Angry: What to Do", description: "A respectful guide to responding when your girlfriend is angry: pause, listen, take responsibility and talk about the issue without manipulation or blame.", images: ["https://guide.wishly.bd/assets/editorial/premium-apology-template.webp"] }
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
