import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/topics__special-occasions.json";
export const metadata: Metadata = { title: "Special Occasions | Wishly Guide", description: "Personal ideas for birthdays, anniversaries and other moments that deserve a little extra care.", alternates: { canonical: "/topics/special-occasions/" }, openGraph: { type: "website", title: "Special Occasions | Wishly Guide", description: "Personal ideas for birthdays, anniversaries and other moments that deserve a little extra care.", url: "/topics/special-occasions/", siteName: "Wishly Guide", images: ["https://guide.wishly.bd/assets/og-wishly-guide.png"] }, robots: { index: true, follow: true } };
export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
