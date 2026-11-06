import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__wedding-invitation-website.json";

export const metadata: Metadata = {
  title: "Wedding Invitation Website Guide",
  description: "Create a useful online wedding invitation with names, dates, time zones, venue details, event schedule, RSVP information and mobile-friendly design.",
  alternates: {
    canonical: "/guides/wedding-invitation-website/",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: {
    type: "article",
    title: "Wedding Invitation Website Guide",
    description: "Create a useful online wedding invitation with names, dates, time zones, venue details, event schedule, RSVP information and mobile-friendly design.",
    url: "/guides/wedding-invitation-website/",
    siteName: "Wishly Guide",
    locale: "en_US",
    images: [{ url: "https://guide.wishly.bd/assets/og-wishly-guide.png", width: 1200, height: 630, alt: "Wishly Guide — thoughtful ideas and practical tutorials for personal wish websites" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Wedding Invitation Website Guide",
    description: "Create a useful online wedding invitation with names, dates, time zones, venue details, event schedule, RSVP information and mobile-friendly design.",
    images: ["https://guide.wishly.bd/assets/og-wishly-guide.png"]
  }
};

export default function Page() {
  return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />;
}
