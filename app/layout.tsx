import type { Metadata, Viewport } from "next";
import Script from "next/script";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://guide.wishly.bd"),
  title: { default: "Wishly Guide | Ideas for Every Meaningful Moment", template: "%s" },
  description: "Find birthday website ideas, proposal and anniversary inspiration, wedding invitations and personal message guides. Create and share a page with Wishly.",
  applicationName: "Wishly Guide",
  creator: "Wishly",
  publisher: "Wishly",
  icons: { icon: "/favicon.svg", apple: "/assets/logo-mark-512.png" },
  manifest: "/site.webmanifest",
  referrer: "strict-origin-when-cross-origin",
  openGraph: {
    type: "website",
    siteName: "Wishly Guide",
    title: "Wishly Guide | Ideas for Every Meaningful Moment",
    description: "Practical inspiration and clear tutorials for personal birthday, proposal, anniversary and wedding websites.",
    url: "/",
    locale: "en_US",
    images: [{ url: "/assets/og-wishly-guide.png", width: 1200, height: 630, alt: "Wishly Guide — ideas, tutorials and inspiration" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Wishly Guide | Ideas for Every Meaningful Moment",
    description: "Practical inspiration and clear tutorials for personal birthday, proposal, anniversary and wedding websites.",
    images: ["/assets/og-wishly-guide.png"]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#07070b"
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className="no-js">
      <head>
        <link rel="preload" href="/assets/fonts/inter-latin-wght-normal.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/assets/fonts/fraunces-latin-400-italic.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="stylesheet" href="/assets/styles.css" />
        <link rel="stylesheet" href="/assets/publisher.css" />
        <link rel="stylesheet" href="/assets/wishly-main-theme.css" />
        <link rel="stylesheet" href="/assets/wishly-main-home.css" />
        <Script id="google-adsense" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9101632317352495" crossOrigin="anonymous" strategy="beforeInteractive" />
      </head>
      <body>
        {children}
        <Script src="/assets/ads-config.js" strategy="beforeInteractive" />
        <Script src="/assets/ads.js" strategy="afterInteractive" />
        <Script src="/assets/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
