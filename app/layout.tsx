import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
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
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
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


};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen text-slate-800 flex flex-col selection:bg-teal-500/30">
        {/* Fixed background layer — GPU composited, never repaints on scroll */}
        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-teal-600 to-orange-500" />
        <Navbar />
        <main className="flex-grow">
          {children}
          <SpeedInsights />

        </main>
        <Footer />
        <Script
          id="microsoft-clarity"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "xykb693xn9");`,
          }}
        />
      </body>
    </html>
  );
}
