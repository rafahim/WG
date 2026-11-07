import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__how-to-write-a-sympathy-message.json";

export const metadata: Metadata = {
  title: "How to Write a Sympathy Message: Examples & Guidance",
  description: "Learn how to write a thoughtful sympathy or condolence message. Find simple wording, examples and guidance on what to avoid when someone is grieving.",
  keywords: ["how to write a sympathy message", "condolence message examples", "what to write in a sympathy card", "short condolence messages", "how to express sympathy"],
  alternates: { canonical: "/guides/how-to-write-a-sympathy-message/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-07", modifiedTime: "2026-11-07", authors: ["https://guide.wishly.bd/authors/ra-fahim/"], title: "How to Write a Sympathy Message: Examples & Guidance", description: "Learn how to write a thoughtful sympathy or condolence message. Find simple wording, examples and guidance on what to avoid when someone is grieving.", url: "/guides/how-to-write-a-sympathy-message/", siteName: "Wishly Guide", locale: "en_US", images: [{ url: "https://guide.wishly.bd/assets/editorial/a-note-of-gratitude.webp", width: 960, height: 600, alt: "A simple handwritten note and flowers representing a thoughtful message of support" }] },
  twitter: { card: "summary_large_image", title: "How to Write a Sympathy Message: Examples & Guidance", description: "Learn how to write a thoughtful sympathy or condolence message. Find simple wording, examples and guidance on what to avoid when someone is grieving.", images: ["https://guide.wishly.bd/assets/editorial/a-note-of-gratitude.webp"] }
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
