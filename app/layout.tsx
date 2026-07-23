import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
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
  },
  twitter: {
    card: "summary_large_image",
    title: "BitumenCalcPro — Free Bitumen & Asphalt Calculator",
    description: "Free online bitumen and aggregate calculator for civil engineers and paving contractors.",
    creator: "@bitumencalcpro",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-teal-600 to-orange-500 text-slate-800 flex flex-col selection:bg-teal-500/30">
        <Navbar/>
      <main className="flex-grow">
          {children}
      </main>
      <Footer />
      </body>
    </html>
  );
}
