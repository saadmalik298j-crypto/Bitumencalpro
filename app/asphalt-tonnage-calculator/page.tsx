// app/asphalt-tonnage-calculator/page.tsx
import Script from "next/script";
import Link from "next/link";
import type { Metadata } from "next";
import AsphaltTonnageCalculator from "./AsphaltTonnageCalculator";
import {
  Calculator,
  Info,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  Layers,
  Zap,
  BarChart3,
  BookOpen,
  ChevronRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Asphalt Tonnage Calculator — Free Tool | BitumenCalcPro",
  description:
    "Calculate asphalt tonnage instantly. Enter area, thickness and density to get tons or metric tonnes. Supports imperial & metric. Free, accurate, no sign-up.",
  keywords: [
    "asphalt tonnage calculator",
    "asphalt weight calculator",
    "how many tons of asphalt do I need",
    "asphalt quantity estimator",
    "HMA tonnage",
    "pavement tons calculator",
  ],
  alternates: { canonical: "https://bitumencalcpro.com/asphalt-tonnage-calculator/" },
  openGraph: {
    title: "Asphalt Tonnage Calculator — Free Tool | BitumenCalcPro",
    description:
      "Calculate asphalt tonnage instantly. Enter area, thickness and density to get tons or metric tonnes.",
    url: "https://bitumencalcpro.com/asphalt-tonnage-calculator/",
    siteName: "BitumenCalcPro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asphalt Tonnage Calculator — Free Tool | BitumenCalcPro",
    description:
      "Calculate asphalt tonnage instantly. Enter area, thickness and density to get tons or metric tonnes.",
  },
};

const QUICK_TABLE = [
  { thickness: "1.5 in (38 mm)", tons: "9.1" },
  { thickness: "2 in (51 mm)", tons: "12.1" },
  { thickness: "3 in (76 mm)", tons: "18.1" },
  { thickness: "4 in (102 mm)", tons: "24.2" },
];

const FAQ_DATA = [
  {
    q: "How many tons of asphalt do I need per square foot?",
    a: "At 2 inches thick and a density of 145 lb/ft\u00b3, you need approximately 0.0121 tons per square foot. Multiply your area in ft\u00b2 by 0.0121 to get a quick estimate.",
  },
  {
    q: "What density should I use for asphalt?",
    a: "Dense-graded HMA typically compacts to 140\u2013150 lb/ft\u00b3 (2,240\u20132,400 kg/m\u00b3). The most common planning value is 145 lb/ft\u00b3 (2,320 kg/m\u00b3). Confirm with your supplier.",
  },
  {
    q: "What is the formula for asphalt tonnage?",
    a: "US tons = Area (ft\u00b2) x Thickness (ft) x Density (lb/ft\u00b3) / 2,000. Metric tonnes = Area (m\u00b2) x Thickness (m) x Density (kg/m\u00b3) / 1,000.",
  },
  {
    q: "Should I add a wastage allowance?",
    a: "Yes. A 5\u201310% allowance is standard for driveways and parking lots. For large highway paving, 3\u20135% is typical.",
  },
  {
    q: "What is the difference between a short ton and a metric tonne?",
    a: "A US short ton = 2,000 lb \u2248 907 kg. A metric tonne = 1,000 kg \u2248 2,205 lb. The calculator shows both.",
  },
];

const RELATED_TOOLS = [
  {
    name: "Asphalt Driveway Cost Calculator",
    href: "/asphalt-driveway-cost-calculator/",
    desc: "Turn tonnage into a budget estimate.",
    color: "from-orange-500/20 to-orange-600/10",
    border: "border-orange-500/30",
  },
  {
    name: "Tack Coat Calculator",
    href: "/tack-coat-calculator/",
    desc: "Estimate bitumen tack coat for any surface.",
    color: "from-teal-500/20 to-teal-600/10",
    border: "border-teal-500/30",
  },
  {
    name: "Asphalt Millings Calculator",
    href: "/asphalt-millings-calculator/",
    desc: "Calculate RAP / millings quantities.",
    color: "from-violet-500/20 to-violet-600/10",
    border: "border-violet-500/30",
  },
  {
    name: "Bitumen Tank Volume Calculator",
    href: "/bitumen-tank-volume-calculator/",
    desc: "Find tank capacity and bitumen weight.",
    color: "from-blue-500/20 to-blue-600/10",
    border: "border-blue-500/30",
  },
];

export default function AsphaltTonnagePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Asphalt Tonnage Calculator",
    url: "https://bitumencalcpro.com/asphalt-tonnage-calculator/",
    description: "Free asphalt tonnage calculator.",
    applicationCategory: "BusinessApplication",
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    author: { "@type": "Organization", name: "BitumenCalcPro" },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_DATA.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <Script id="schema-tonnage-app" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script id="schema-tonnage-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <div className="relative pt-20 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-teal-600/10 pointer-events-none" />
        <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-orange-500/10 blur-[100px] pointer-events-none blur-orb" />
        <div className="absolute -bottom-32 -right-32 w-[480px] h-[480px] rounded-full bg-teal-500/20 blur-[100px] pointer-events-none blur-orb" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-white/50 text-sm mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-white/80">Asphalt Tonnage Calculator</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 text-orange-100 px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-[0_0_15px_rgba(249,115,22,0.2)]">
            <Calculator size={16} />
            Tonnage Estimator
          </div>
          <h1 className="hero-heading text-4xl sm:text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight drop-shadow-2xl">
            <span className="bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">Asphalt Tonnage</span>{" "}
            <span className="text-white">Calculator</span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-medium max-w-3xl mb-10 leading-relaxed drop-shadow-md">
            Enter your area, thickness, and mix density to instantly calculate how many tons of asphalt you need.
          </p>
          <div className="flex flex-wrap gap-3 mb-10">
            {["Imperial & Metric", "Instant Results", "No Sign-Up", "Free Forever"].map((b) => (
              <span key={b} className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 text-white/80 text-xs font-semibold px-3 py-1.5 rounded-full">
                <CheckCircle2 size={13} className="text-teal-400" />{b}
              </span>
            ))}
          </div>
          <AsphaltTonnageCalculator />
        </div>
      </div>

      {/* WHAT IS */}
      <section className="py-24 relative bg-black/10 border-y border-white/5">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500/20 to-transparent border-l-4 border-teal-400 text-white px-4 py-2 rounded-r-lg text-sm font-bold mb-6">
              <Info size={16} className="text-teal-400" />Overview
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight drop-shadow-lg">What Is an Asphalt Tonnage Calculator?</h2>
          </div>
          <p className="text-white/80 leading-relaxed mb-5 font-medium text-lg text-center max-w-4xl mx-auto">
            An asphalt tonnage calculator helps contractors, homeowners, and engineers estimate the weight of hot mix asphalt (HMA) needed for a paving project. Asphalt is sold and transported by the ton, so knowing your tonnage is essential for accurate ordering and budgeting.
          </p>
          <p className="text-white/70 leading-relaxed text-center max-w-4xl mx-auto">
            The calculator multiplies your project area by the compacted thickness and the mix density, then converts the result into US short tons or metric tonnes. A wastage allowance can be added to account for edge trimming, uneven subgrade, and transport loss.
          </p>
        </div>
      </section>

      {/* FORMULA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-orange-500/5 blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 text-orange-100 px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-[0_0_15px_rgba(249,115,22,0.2)]">
              <BarChart3 size={16} />Formula & Method
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 drop-shadow-xl">How to Calculate Asphalt Tonnage</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-b from-white/10 to-transparent border border-white/10 rounded-3xl p-8 shadow-2xl group hover:border-white/30 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-red-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <span className="font-black text-lg">US</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Imperial (US Short Tons)</h3>
              <div className="bg-black/40 rounded-xl p-4 border border-white/5 font-mono text-sm text-orange-300 shadow-inner mb-4">
                tons = Area (ft\u00b2) x Thickness (ft) x Density (lb/ft\u00b3) / 2,000
              </div>
              <div className="bg-black/30 rounded-xl p-4 border border-white/5 text-sm">
                <p className="text-white/50 text-xs uppercase tracking-wider mb-2">Example</p>
                <p className="text-green-300 font-mono">1,000 ft\u00b2 x 0.1667 ft x 145 / 2,000 = 12.08 tons</p>
              </div>
            </div>
            <div className="bg-gradient-to-b from-white/10 to-transparent border border-white/10 rounded-3xl p-8 shadow-2xl group hover:border-white/30 transition-all duration-300 hover:-translate-y-1 mt-0 lg:mt-12">
              <div className="w-14 h-14 bg-gradient-to-br from-teal-400 to-emerald-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <span className="font-black text-lg">SI</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Metric (Tonnes)</h3>
              <div className="bg-black/40 rounded-xl p-4 border border-white/5 font-mono text-sm text-teal-300 shadow-inner mb-4">
                tonnes = Area (m\u00b2) x Thickness (m) x Density (kg/m\u00b3) / 1,000
              </div>
              <div className="bg-black/30 rounded-xl p-4 border border-white/5 text-sm">
                <p className="text-white/50 text-xs uppercase tracking-wider mb-2">Example</p>
                <p className="text-green-300 font-mono">93 m\u00b2 x 0.051 m x 2,320 kg/m\u00b3 / 1,000 = 11.01 t</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl max-w-3xl mx-auto">
            <div className="p-6 md:p-8 bg-black/40 border-b border-white/5">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <Layers className="text-orange-400" size={26} />Quick Reference: Tons per 1,000 ft\u00b2 at 145 lb/ft\u00b3
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-white">
                <thead className="bg-white/5">
                  <tr>
                    <th className="p-5 font-bold uppercase tracking-wider text-sm border-b border-white/10 text-white/50">Thickness</th>
                    <th className="p-5 font-bold uppercase tracking-wider text-sm border-b border-white/10 text-white/50">Tons / 1,000 ft\u00b2</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {QUICK_TABLE.map((row) => (
                    <tr key={row.thickness} className="hover:bg-white/5 transition-colors">
                      <td className="p-5 font-semibold text-orange-300">{row.thickness}</td>
                      <td className="p-5 font-mono text-white">{row.tons} tons</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-black/10 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-violet-500/20 border border-violet-500/30 text-violet-100 px-5 py-2 rounded-full text-sm font-bold mb-6">
              <HelpCircle size={16} />FAQ
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 drop-shadow-xl">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {FAQ_DATA.map((faq, i) => (
              <div key={i} className="bg-gradient-to-b from-white/8 to-transparent border border-white/10 rounded-2xl p-6 hover:border-white/25 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                  <span className="w-7 h-7 rounded-lg bg-orange-500/20 border border-orange-500/30 text-orange-300 flex items-center justify-center text-sm font-black flex-shrink-0 mt-0.5">Q</span>
                  {faq.q}
                </h3>
                <p className="text-white/70 leading-relaxed pl-10">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED TOOLS */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-500/30 text-teal-100 px-5 py-2 rounded-full text-sm font-bold mb-6">
              <Zap size={16} />More Tools
            </div>
            <h2 className="text-4xl font-black text-white mb-4">Related Calculators</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {RELATED_TOOLS.map((tool) => (
              <Link key={tool.href} href={tool.href}
                className={`bg-gradient-to-br ${tool.color} border ${tool.border} rounded-2xl p-6 group hover:-translate-y-1 transition-all duration-300 hover:shadow-xl`}>
                <BookOpen size={22} className="text-white/60 mb-4 group-hover:text-white transition-colors" />
                <h3 className="text-white font-bold mb-2 leading-snug">{tool.name}</h3>
                <p className="text-white/60 text-sm mb-4">{tool.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-white/70 group-hover:text-white transition-colors">
                  Try it <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
