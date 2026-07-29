import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "BitumenCalcPro — Free Bitumen & Asphalt Calculator",
    template: "%s",
  },
  description:
    "Free online bitumen and aggregate calculator for civil engineers and paving contractors. Fast, accurate estimates for Dense Graded HMA, SMA, OGFC, and Polymer Modified mixes.",
  keywords: [
    "bitumen calculator",
    "asphalt calculator",
    "HMA calculator",
    "pavement calculator",
    "bitumen content",
    "aggregate calculator",
    "civil engineering tools",
  ],
  authors: [{ name: "BitumenCalcPro" }],
  creator: "BitumenCalcPro",
  publisher: "BitumenCalcPro",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL("https://bitumencalcpro.com"),
  openGraph: {
    siteName: "BitumenCalcPro",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/bitumen-calculator-og-image.png",
        width: 1200,
        height: 630,
        alt: "BitumenCalcPro — Free Bitumen & Asphalt Calculator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BitumenCalcPro — Free Bitumen & Asphalt Calculator",
    description: "Free online bitumen and aggregate calculator for civil engineers and paving contractors.",
    creator: "@bitumencalcpro",
    images: ["/bitumen-calculator-og-image.png"],
  },
  icons: { icon: '/favicon.ico' },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen bg-gradient-to-br from-teal-600 to-orange-500 text-slate-800 flex flex-col selection:bg-teal-500/30">
        <Navbar />
        <main className="flex-grow">
          {children}
          <SpeedInsights />

        </main>
        <Footer />
      </body>
    </html>
  );
}
