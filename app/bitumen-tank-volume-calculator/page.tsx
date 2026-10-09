// app/bitumen-tank-volume-calculator/page.tsx
import Script from "next/script";
import Link from "next/link";
import type { Metadata } from "next";
import TankVolumeCalculator from "./TankVolumeCalculator";
import { FlaskConical, Info, ArrowRight, CheckCircle2, HelpCircle, Zap, BookOpen, ChevronRight, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Bitumen Tank Volume Calculator — Capacity & Weight | BitumenCalcPro",
  description: "Calculate bitumen storage tank volume (m\u00b3 and litres) and bitumen weight (tonnes) for horizontal cylindrical tanks. Free tool for engineers, contractors, and plant operators.",
  keywords: ["bitumen tank volume calculator", "bitumen storage tank capacity", "horizontal cylinder tank volume", "bitumen tank size calculator", "tank volume calculator"],
  alternates: { canonical: "https://bitumencalcpro.com/bitumen-tank-volume-calculator/" },
  openGraph: {
    title: "Bitumen Tank Volume Calculator — Capacity & Weight | BitumenCalcPro",
    description: "Calculate bitumen tank volume and bitumen weight. Free tool for horizontal cylindrical tanks.",
    url: "https://bitumencalcpro.com/bitumen-tank-volume-calculator/",
    siteName: "BitumenCalcPro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bitumen Tank Volume Calculator — Capacity & Weight | BitumenCalcPro",
    description: "Calculate bitumen tank volume and bitumen weight for horizontal cylindrical tanks.",
  },
};

const TANK_FACTS = [
  { title: "Standard Density", value: "~1,030 kg/m\u00b3", desc: "Hot bitumen binder at 150\u2013180\u00b0C. Adjust for grade and temperature." },
  { title: "Typical Tank Size", value: "10\u201350 m\u00b3", desc: "Road paving spray trucks. Large plant tanks can exceed 100 m\u00b3." },
  { title: "Full Tank Formula", value: "V = \u03c0 r\u00b2 L", desc: "Horizontal cylinder: \u03c0 x (D/2)\u00b2 x Length (all in metres)." },
  { title: "Partial Fill Note", value: "Segment formula", desc: "Partial fill uses a circular segment calculation. The toggle above handles this." },
];

const FAQ_DATA = [
  { q: "What is the formula for a horizontal cylindrical tank volume?", a: "Full tank: V = \u03c0 x r\u00b2 x L, where r = radius (D/2) in metres and L = tank length in metres. Result is in cubic metres. Example: D = 2 m, L = 6 m \u2192 r = 1 m, V = \u03c0 x 1\u00b2 x 6 = 18.85 m\u00b3." },
  { q: "What density should I use for bitumen?", a: "Hot bitumen (at typical spray temperatures of 150\u2013180\u00b0C) has a density of approximately 1,020\u20131,040 kg/m\u00b3. The calculator defaults to 1,030 kg/m\u00b3. At ambient temperature, bitumen density is slightly higher (~1,050\u20131,060 kg/m\u00b3). Use your supplier\u2019s data sheet for the exact value." },
  { q: "Does this calculator handle partial fill?", a: "Yes. Enable the partial fill toggle and enter the fill percentage. The calculator uses a proportional volume calculation based on the percentage of the full cylinder volume." },
  { q: "How do I convert litres to tonnes of bitumen?", a: "tonnes = litres x density (kg/m\u00b3) / 1,000,000. Or use the calculator above which does this automatically. Example: 18,850 litres x 1,030 / 1,000,000 = 19.42 tonnes." },
  { q: "What size bitumen tank do I need for a road project?", a: "Tank sizing depends on daily consumption and delivery frequency. A typical spray paver for a medium road project uses 5\u201315 tonnes per day. Plant storage tanks are sized for 1\u20133 days of buffer supply. Always consult a process engineer for plant design." },
];

const RELATED_TOOLS = [
  { name: "Asphalt Tonnage Calculator", href: "/asphalt-tonnage-calculator/", desc: "HMA weight for any paving area.", color: "from-orange-500/20 to-orange-600/10", border: "border-orange-500/30" },
  { name: "Tack Coat Calculator", href: "/tack-coat-calculator/", desc: "Bitumen tack coat quantity.", color: "from-teal-500/20 to-teal-600/10", border: "border-teal-500/30" },
  { name: "Asphalt Driveway Cost Calculator", href: "/asphalt-driveway-cost-calculator/", desc: "Estimate driveway project cost.", color: "from-violet-500/20 to-violet-600/10", border: "border-violet-500/30" },
  { name: "Asphalt Millings Calculator", href: "/asphalt-millings-calculator/", desc: "RAP / millings quantity estimator.", color: "from-amber-500/20 to-amber-600/10", border: "border-amber-500/30" },
];

export default function TankVolumePage() {
  const schema = {
    "@context": "https://schema.org", "@type": "WebApplication",
    name: "Bitumen Tank Volume Calculator",
    url: "https://bitumencalcpro.com/bitumen-tank-volume-calculator/",
    description: "Calculate bitumen storage tank volume and bitumen weight for horizontal cylindrical tanks.",
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
      <Script id="schema-tank-app" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script id="schema-tank-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <div className="relative pt-20 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-teal-600/10 pointer-events-none" />
        <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-blue-500/10 blur-[100px] pointer-events-none blur-orb" />
        <div className="absolute -bottom-32 -right-32 w-[480px] h-[480px] rounded-full bg-teal-500/20 blur-[100px] pointer-events-none blur-orb" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-white/50 text-sm mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-white/80">Bitumen Tank Volume Calculator</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 text-blue-100 px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
            <FlaskConical size={16} />Tank Capacity Tool
          </div>
          <h1 className="hero-heading text-4xl sm:text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight drop-shadow-2xl">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Bitumen Tank</span>{" "}
            <span className="text-white">Volume Calculator</span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-medium max-w-3xl mb-10 leading-relaxed drop-shadow-md">
            Calculate the volume (m\u00b3 and litres) and bitumen weight (tonnes) of a horizontal cylindrical tank. Includes partial fill support.
          </p>
          <div className="flex flex-wrap gap-3 mb-10">
            {["Horizontal Cylinder", "Partial Fill Support", "Litres & Tonnes", "Free Forever"].map((b) => (
              <span key={b} className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 text-white/80 text-xs font-semibold px-3 py-1.5 rounded-full">
                <CheckCircle2 size={13} className="text-teal-400" />{b}
              </span>
            ))}
          </div>
          <TankVolumeCalculator />
        </div>
      </div>

      {/* KEY FACTS */}
      <section className="py-24 relative bg-black/10 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-transparent border-l-4 border-blue-400 text-white px-4 py-2 rounded-r-lg text-sm font-bold mb-6">
              <Info size={16} className="text-blue-400" />Reference
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight">Key Facts for Bitumen Tank Calculations</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TANK_FACTS.map((f) => (
              <div key={f.title} className="bg-gradient-to-b from-blue-500/15 to-transparent border border-blue-500/20 rounded-3xl p-6 hover:-translate-y-1 transition-all duration-300">
                <p className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-2">{f.title}</p>
                <p className="text-3xl font-black text-white mb-3">{f.value}</p>
                <p className="text-white/60 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMULA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 text-blue-100 px-5 py-2 rounded-full text-sm font-bold mb-6">
              <FlaskConical size={16} />Formula
            </div>
            <h2 className="text-4xl font-black text-white mb-4">Horizontal Cylinder Tank Formula</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-b from-white/10 to-transparent border border-white/10 rounded-3xl p-8 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-4">Full Tank Volume</h3>
              <div className="bg-black/40 rounded-xl p-4 font-mono text-sm text-blue-300 mb-4">
                V = \u03c0 \u00d7 r\u00b2 \u00d7 L
              </div>
              <p className="text-white/60 text-sm mb-3">where r = D/2 (radius), L = tank length, all in metres. V is in m\u00b3.</p>
              <div className="bg-black/30 rounded-xl p-4 border border-white/5 text-sm">
                <p className="text-white/50 text-xs uppercase tracking-wider mb-2">Example</p>
                <p className="text-green-300 font-mono">D=2m, L=6m \u2192 V = \u03c0 \u00d7 1\u00b2 \u00d7 6 = 18.85 m\u00b3</p>
              </div>
            </div>
            <div className="bg-gradient-to-b from-white/10 to-transparent border border-white/10 rounded-3xl p-8 shadow-2xl mt-0 md:mt-12">
              <h3 className="text-xl font-bold text-white mb-4">Bitumen Weight</h3>
              <div className="bg-black/40 rounded-xl p-4 font-mono text-sm text-teal-300 mb-4">
                weight (kg) = V (m\u00b3) \u00d7 density (kg/m\u00b3)
              </div>
              <p className="text-white/60 text-sm mb-3">Divide by 1,000 for tonnes. Divide by 907.185 for US tons.</p>
              <div className="bg-black/30 rounded-xl p-4 border border-white/5 text-sm">
                <p className="text-white/50 text-xs uppercase tracking-wider mb-2">Example</p>
                <p className="text-green-300 font-mono">18.85 m\u00b3 \u00d7 1,030 = 19,416 kg = 19.42 tonnes</p>
              </div>
            </div>
          </div>
          <div className="mt-8 bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-2xl p-6 flex gap-4">
            <AlertTriangle className="text-amber-400 flex-shrink-0 mt-0.5" size={20} />
            <p className="text-white/70 text-sm leading-relaxed">
              <strong className="text-white">Design note:</strong> This calculator is for planning and estimation only. For formal tank design, structural loading, and safety calculations, consult a qualified process or mechanical engineer.
            </p>
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
                  <span className="w-7 h-7 rounded-lg bg-blue-500/20 border border-blue-500/30 text-blue-300 flex items-center justify-center text-sm font-black flex-shrink-0 mt-0.5">Q</span>
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
