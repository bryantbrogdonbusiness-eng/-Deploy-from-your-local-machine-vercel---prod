import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "LinguaSlang — Translate Tone, Not Just Words",
  description:
    "Get regional dialect, slang, and cultural tone — not just literal translations. How people actually talk.",
  keywords: [
    "translator",
    "slang translator",
    "dialect",
    "multilingual",
    "regional language",
    "tone translator",
    "cultural translation",
  ],
  metadataBase: new URL("https://linguaslang.com"),
  openGraph: {
    title: "LinguaSlang — Translate Tone, Not Just Words",
    description:
      "Regional dialect, slang & cultural tone — not just literal translations.",
    url: "https://linguaslang.com",
    siteName: "LinguaSlang",
    type: "website",
  },
};

const ADSENSE_ID = "ca-pub-9445214382103388";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense — activates automatically once account is approved */}
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_ID}`}
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  );
}
