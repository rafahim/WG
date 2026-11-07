import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__how-to-reconnect-with-an-old-friend-after-losing-touch.json";

export const metadata: Metadata = {
  title: "How to Reconnect With an Old Friend After Losing Touch",
  description: "Learn how to reach out to an old friend, what to say after a long silence and how to rebuild a friendship without pressure or unrealistic expectations.",
  keywords: ["how to reconnect with an old friend", "what to say to an old friend after a long time", "how to reach out to an old friend", "reconnect with a friend after years", "message to an old friend"],
  alternates: { canonical: "/guides/how-to-reconnect-with-an-old-friend-after-losing-touch/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-07", modifiedTime: "2026-11-07", authors: ["https://guide.wishly.bd/authors/ra-fahim/"], title: "How to Reconnect With an Old Friend After Losing Touch", description: "Learn how to reach out to an old friend, what to say after a long silence and how to rebuild a friendship without pressure or unrealistic expectations.", url: "/guides/how-to-reconnect-with-an-old-friend-after-losing-touch/", siteName: "Wishly Guide", locale: "en_US", images: [{ url: "https://guide.wishly.bd/assets/editorial/best-friend-forever.webp", width: 960, height: 600, alt: "A friendship-themed keepsake representing memories shared with an old friend" }] },
  twitter: { card: "summary_large_image", title: "How to Reconnect With an Old Friend After Losing Touch", description: "Learn how to reach out to an old friend, what to say after a long silence and how to rebuild a friendship without pressure or unrealistic expectations.", images: ["https://guide.wishly.bd/assets/editorial/best-friend-forever.webp"] }
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
