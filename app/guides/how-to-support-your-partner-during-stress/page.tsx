import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__how-to-support-your-partner-during-stress.json";

export const metadata: Metadata = {
  title: "How to Support a Stressed Partner",
  description: "Learn how to support a stressed partner by listening, asking what help is wanted, sharing practical tasks and respecting boundaries.",
  keywords: ["how to support your partner during stress", "how to help a stressed girlfriend", "support partner through difficult time", "emotional support in relationship"],
  alternates: { canonical: "/guides/how-to-support-your-partner-during-stress/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-07", modifiedTime: "2026-11-07", authors: ["https://guide.wishly.bd/authors/ra-fahim/"], title: "How to Support a Stressed Partner", description: "Learn how to support a stressed partner by listening, asking what help is wanted, sharing practical tasks and respecting boundaries.", url: "/guides/how-to-support-your-partner-during-stress/", siteName: "Wishly Guide", locale: "en_US", images: [{ url: "https://guide.wishly.bd/assets/editorial/a-note-of-gratitude.webp", width: 960, height: 600, alt: "Wishly A Note of Gratitude thank-you template preview" }] },
  twitter: { card: "summary_large_image", title: "How to Support a Stressed Partner", description: "Learn how to support a stressed partner by listening, asking what help is wanted, sharing practical tasks and respecting boundaries.", images: ["https://guide.wishly.bd/assets/editorial/a-note-of-gratitude.webp"] }
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
