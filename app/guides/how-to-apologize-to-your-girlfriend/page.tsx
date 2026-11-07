import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__how-to-apologize-to-your-girlfriend.json";

export const metadata: Metadata = {
  title: "How to Apologize to Your Girlfriend | Wishly",
  description: "Learn how to say sorry to your girlfriend, take responsibility, avoid common apology mistakes and make a realistic plan to repair trust.",
  keywords: ["how to apologize to your girlfriend", "sorry message for girlfriend", "how to say sorry to girlfriend after hurting her", "sincere apology letter to girlfriend"],
  alternates: { canonical: "/guides/how-to-apologize-to-your-girlfriend/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-07", modifiedTime: "2026-11-07", authors: ["https://guide.wishly.bd/authors/ra-fahim/"], title: "How to Apologize to Your Girlfriend | Wishly", description: "Learn how to say sorry to your girlfriend, take responsibility, avoid common apology mistakes and make a realistic plan to repair trust.", url: "/guides/how-to-apologize-to-your-girlfriend/", siteName: "Wishly Guide", locale: "en_US", images: [{ url: "https://guide.wishly.bd/assets/editorial/sorry-letter-template.webp", width: 960, height: 600, alt: "Wishly Sorry Letter apology template preview" }] },
  twitter: { card: "summary_large_image", title: "How to Apologize to Your Girlfriend | Wishly", description: "Learn how to say sorry to your girlfriend, take responsibility, avoid common apology mistakes and make a realistic plan to repair trust.", images: ["https://guide.wishly.bd/assets/editorial/sorry-letter-template.webp"] }
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
