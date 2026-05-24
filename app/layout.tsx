import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "LinguaSlang — Real Slang. Real Culture. Real Translation.",
  description:
    "Translate phrases the way locals actually say them. LinguaSlang delivers culturally accurate translations with regional slang, tone adaptation, pronunciation guides, and cultural context for 12 languages.",
  keywords: [
    "slang translator", "cultural translation", "regional dialect translator",
    "how locals say it", "slang dictionary", "informal translation",
    "Japanese slang", "Spanish slang", "Arabic dialect", "French slang",
    "multilingual", "pronunciation guide", "cultural context",
  ],
  // ── Ownership & Copyright ──────────────────────────────────────────
  authors: [{ name: "LinguaSlang" }],
  creator: "LinguaSlang",
  publisher: "LinguaSlang",
  metadataBase: new URL("https://linguaslang.com"),
  alternates: {
    canonical: "/",
  },
  // ── Open Graph ────────────────────────────────────────────────────
  openGraph: {
    title: "LinguaSlang — Real Slang. Real Culture. Real Translation.",
    description:
      "Translate phrases the way locals actually say them — with slang, cultural context, and pronunciation guides.",
    type: "website",
    url: "https://linguaslang.com",
    siteName: "LinguaSlang",
  },
  // ── Twitter / X ───────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "LinguaSlang — Real Slang. Real Culture. Real Translation.",
    description:
      "Translate phrases the way locals actually say them — with slang, cultural context, and pronunciation guides.",
  },
  // ── Robots ────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* ── Google AdSense ──────────────────────────────────────── */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9445214382103388"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        {/* ── Copyright & Ownership Meta Tags ─────────────────────── */}
        <meta name="copyright" content="© 2025 LinguaSlang. All rights reserved." />
        <meta name="author" content="LinguaSlang" />
        <meta name="owner" content="LinguaSlang" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        {/* ── Canonical (prevents duplicate content penalties) ─────── */}
        <link rel="canonical" href="https://linguaslang.com/" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
