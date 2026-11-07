import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/topics__personal-messages-and-ai.json";
export const metadata: Metadata = {
  title: "Messages & AI Writing Guides | Wishly Guide",
  description: "Explore practical guides for writing love letters, birthday messages and personal notes with responsible AI assistance.",
  alternates: { canonical: "/topics/personal-messages-and-ai/" },
  openGraph: {
    type: "website",
    title: "Messages & AI Writing Guides | Wishly Guide",
    description: "Practical guides for writing personal messages with or without AI assistance.",
    url: "/topics/personal-messages-and-ai/",
    siteName: "Wishly Guide",
    locale: "en_US",
    images: [{ url: "https://guide.wishly.bd/assets/og-wishly-guide.png", width: 1200, height: 630, alt: "Wishly Guide personal message and AI writing topics" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Messages & AI Writing Guides | Wishly Guide",
    description: "Practical guides for writing personal messages with or without AI assistance.",
    images: ["https://guide.wishly.bd/assets/og-wishly-guide.png"]
  },
  robots: { index: true, follow: true }
};
export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
