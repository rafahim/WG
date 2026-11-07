import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__good-luck-messages-for-a-friend.json";

export const metadata: Metadata = {
  title: "Good Luck Messages for a Friend: 25 Thoughtful Examples",
  description: "Find good-luck messages for a friend before an exam, interview, performance or new beginning.",
  keywords: ["good luck messages for a friend", "good luck wishes for friend", "good luck message before exam", "good luck message for interview", "encouraging words for a friend"],
  alternates: { canonical: "/guides/good-luck-messages-for-a-friend/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-07", modifiedTime: "2026-11-07", authors: ["https://guide.wishly.bd/authors/ra-fahim/"], title: "Good Luck Messages for a Friend: 25 Thoughtful Examples", description: "Find good-luck messages for a friend before an exam, interview, performance or new beginning.", url: "/guides/good-luck-messages-for-a-friend/", siteName: "Wishly Guide", locale: "en_US", images: [{ url: "https://guide.wishly.bd/assets/editorial/thank-you-template.webp", width: 960, height: 600, alt: "A warm digital note design representing encouragement and support for a friend" }] },
  twitter: { card: "summary_large_image", title: "Good Luck Messages for a Friend: 25 Thoughtful Examples", description: "Find good-luck messages for a friend before an exam, interview, performance or new beginning.", images: ["https://guide.wishly.bd/assets/editorial/thank-you-template.webp"] }
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
