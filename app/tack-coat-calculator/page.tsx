// app/tack-coat-calculator/page.tsx
import Script from "next/script";
import Link from "next/link";
import type { Metadata } from "next";
import TackCoatCalculator from "./TackCoatCalculator";
import { Droplets, Info, ArrowRight, CheckCircle2, HelpCircle, Zap, BookOpen, ChevronRight, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Tack Coat Calculator — Bitumen Application Rate | BitumenCalcPro",
  description: "Calculate tack coat bitumen quantity for any pavement area. Enter area and application rate to get kg, litres, and total emulsion including dilution.",
  keywords: ["tack coat calculator", "bitumen tack coat", "tack coat application rate", "bitumen emulsion calculator", "tack coat kg per m2"],
  alternates: { canonical: "https://bitumencalcpro.com/tack-coat-calculator/" },
  openGraph: {
    title: "Tack Coat Calculator — Bitumen Application Rate | BitumenCalcPro",
    description: "Calculate tack coat bitumen quantity for any pavement area. Free, metric and imperial.",
    url: "https://bitumencalcpro.com/tack-coat-calculator/",
    siteName: "BitumenCalcPro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tack Coat Calculator — Bitumen Application Rate | BitumenCalcPro",
    description: "Calculate tack coat bitumen quantity for any pavement area.",
  },
};

const RATE_TABLE = [
  { surface: "Milled asphalt (fresh mill)", rate: "0.20\u20130.30 kg/m\u00b2", imperial: "0.04\u20130.06 gal/yd\u00b2" },
  { surface: "Existing asphalt (weathered)", rate: "0.25\u20130.40 kg/m\u00b2", imperial: "0.05\u20130.08 gal/yd\u00b2" },
  { surface: "Portland cement concrete", rate: "0.35\u20130.55 kg/m\u00b2", imperial: "0.07\u20130.11 gal/yd\u00b2" },
  { surface: "Granular base (prime coat)", rate: "0.50\u20131.20 kg/m\u00b2", imperial: "0.10\u20130.24 gal/yd\u00b2" },
];

const FAQ_DATA = [
  { q: "What is a tack coat?", a: "A tack coat (also called a bond coat) is a thin application of bitumen emulsion sprayed onto an existing pavement surface before laying a new asphalt layer. It bonds the layers together and prevents slippage under traffic." },
  { q: "What application rate should I use?", a: "Application rates vary by surface type and project specification. Typical ranges: milled asphalt 0.20\u20130.30 kg/m\u00b2, weathered asphalt 0.25\u20130.40 kg/m\u00b2, PCC slab 0.35\u20130.55 kg/m\u00b2. Always confirm with your project specification document." },
  { q: "What is dilution and why does it matter?", a: "Tack coat emulsions are often diluted with water (e.g., 1:1 or 50%) to improve sprayability and coverage. The calculator shows both net bitumen and total emulsion (bitumen + water) so you can order the correct amount." },
  { q: "What density should I use for bitumen?", a: "Hot bitumen binder density is approximately 1.01\u20131.03 kg/L. The calculator defaults to 1.01 kg/L. Adjust based on your emulsion grade and supplier data sheet." },
  { q: "Is tack coat needed between every layer?", a: "Yes. A tack coat should be applied between all bound pavement layers \u2014 between the base course and binder course, and between the binder course and wearing course. Skipping it risks layer delamination under traffic." },
];

const RELATED_TOOLS = [
  { name: "Asphalt Tonnage Calculator", href: "/asphalt-tonnage-calculator/", desc: "Calculate HMA weight for any layer.", color: "from-orange-500/20 to-orange-600/10", border: "border-orange-500/30" },
  { name: "Asphalt Driveway Cost Calculator", href: "/asphalt-driveway-cost-calculator/", desc: "Estimate total driveway project cost.", color: "from-violet-500/20 to-violet-600/10", border: "border-violet-500/30" },
  { name: "Asphalt Millings Calculator", href: "/asphalt-millings-calculator/", desc: "RAP / millings quantity estimator.", color: "from-amber-500/20 to-amber-600/10", border: "border-amber-500/30" },
  { name: "Bitumen Tank Volume Calculator", href: "/bitumen-tank-volume-calculator/", desc: "Tank capacity and bitumen weight.", color: "from-blue-500/20 to-blue-600/10", border: "border-blue-500/30" },
];

export default function TackCoatPage() {
  const schema = {
    "@context": "https://schema.org", "@type": "WebApplication",
    name: "Tack Coat Calculator",
    url: "https://bitumencalcpro.com/tack-coat-calculator/",
    description: "Calculate bitumen tack coat quantity. Enter area and application rate to get kg, litres, and total emulsion.",
    applicationCategory: "BusinessApplication", isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    author: { "@type": "Organization", name: "BitumenCalcPro" },
  };
  const faqSchema = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: FAQ_DATA.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <>
      <Script id="schema-tack-app" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script id="schema-tack-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <div className="relative pt-20 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 to-blue-600/10 pointer-events-none" />
        <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-teal-500/10 blur-[100px] pointer-events-none blur-orb" />
        <div className="absolute -bottom-32 -right-32 w-[480px] h-[480px] rounded-full bg-blue-500/10 blur-[100px] pointer-events-none blur-orb" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-white/50 text-sm mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-white/80">Tack Coat Calculator</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-500/30 text-teal-100 px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-[0_0_15px_rgba(20,184,166,0.2)]">
            <Droplets size={16} />Bond Coat Estimator
          </div>
          <h1 className="hero-heading text-4xl sm:text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight drop-shadow-2xl">
            <span className="bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">Tack Coat</span>{" "}
            <span className="text-white">Calculator</span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-medium max-w-3xl mb-10 leading-relaxed drop-shadow-md">
            Calculate bitumen tack coat quantity in kg and litres for any pavement area. Supports metric and imperial units, dilution ratios, and multiple surface types.
          </p>
          <div className="flex flex-wrap gap-3 mb-10">
            {["Metric & Imperial", "Dilution Support", "Multiple Surfaces", "Free Forever"].map((b) => (
              <span key={b} className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 text-white/80 text-xs font-semibold px-3 py-1.5 rounded-full">
                <CheckCircle2 size={13} className="text-teal-400" />{b}
              </span>
            ))}
          </div>
          <TackCoatCalculator />
        </div>
      </div>

      {/* WHAT IS */}
      <section className="py-24 relative bg-black/10 border-y border-white/5">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500/20 to-transparent border-l-4 border-teal-400 text-white px-4 py-2 rounded-r-lg text-sm font-bold mb-6">
              <Info size={16} className="text-teal-400" />Overview
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight">What Is a Tack Coat?</h2>
          </div>
          <p className="text-white/80 leading-relaxed mb-5 font-medium text-lg text-center max-w-4xl mx-auto">
            A tack coat (bond coat) is a light spray of bitumen emulsion applied to an existing pavement surface before placing a new asphalt overlay. It creates adhesion between pavement layers and prevents the new layer from sliding or delaminating under traffic loads.
          </p>
          <div className="mt-8 bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-2xl p-6 flex gap-4 max-w-4xl mx-auto">
            <AlertTriangle className="text-amber-400 flex-shrink-0 mt-0.5" size={20} />
            <p className="text-white/70 text-sm leading-relaxed">
              <strong className="text-white">Specification note:</strong> Application rates in this calculator are typical planning values. Always confirm the required rate with your project specification or road authority before ordering.
            </p>
          </div>
        </div>
      </section>

      {/* RATE TABLE */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-teal-500/5 blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-500/30 text-teal-100 px-5 py-2 rounded-full text-sm font-bold mb-6">
              <Droplets size={16} />Reference Rates
            </div>
            <h2 className="text-4xl font-black text-white mb-4">Typical Tack Coat Application Rates by Surface</h2>
          </div>
          <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl max-w-4xl mx-auto">
            <div className="p-6 md:p-8 bg-black/40 border-b border-white/5">
              <h2 className="text-xl font-bold text-white">Typical Residual Bitumen Rates (planning estimates only)</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-white">
                <thead className="bg-white/5">
                  <tr>
                    <th className="p-5 font-bold uppercase text-xs text-white/50 border-b border-white/10">Surface Type</th>
                    <th className="p-5 font-bold uppercase text-xs text-white/50 border-b border-white/10">Metric Rate</th>
                    <th className="p-5 font-bold uppercase text-xs text-white/50 border-b border-white/10">Imperial Rate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {RATE_TABLE.map((row) => (
                    <tr key={row.surface} className="hover:bg-white/5 transition-colors">
                      <td className="p-5 font-semibold text-teal-300">{row.surface}</td>
                      <td className="p-5 font-mono text-sm text-white">{row.rate}</td>
                      <td className="p-5 font-mono text-sm text-white/70">{row.imperial}</td>
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
                  <span className="w-7 h-7 rounded-lg bg-teal-500/20 border border-teal-500/30 text-teal-300 flex items-center justify-center text-sm font-black flex-shrink-0 mt-0.5">Q</span>
                  {faq.q}
                </h3>
                <p className="text-white/70 leading-relaxed pl-10">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED */}
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
              <Link key={tool.href} href={tool.href} className={`bg-gradient-to-br ${tool.color} border ${tool.border} rounded-2xl p-6 group hover:-translate-y-1 transition-all duration-300 hover:shadow-xl`}>
                <BookOpen size={22} className="text-white/60 mb-4 group-hover:text-white transition-colors" />
                <h3 className="text-white font-bold mb-2 leading-snug">{tool.name}</h3>
                <p className="text-white/60 text-sm mb-4">{tool.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-white/70 group-hover:text-white transition-colors">Try it <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
