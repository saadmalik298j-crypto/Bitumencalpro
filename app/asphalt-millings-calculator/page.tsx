// app/asphalt-millings-calculator/page.tsx
import Script from "next/script";
import Link from "next/link";
import type { Metadata } from "next";
import MillingsCalculator from "./MillingsCalculator";
import { Layers, Info, ArrowRight, CheckCircle2, HelpCircle, Zap, BookOpen, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Asphalt Millings Calculator — RAP Quantity Estimator | BitumenCalcPro",
  description: "Calculate asphalt millings (RAP) quantity in tons, tonnes, and cubic yards. Enter area, depth, and density to estimate recycled asphalt needed for driveways, bases, and shoulders.",
  keywords: ["asphalt millings calculator", "RAP calculator", "recycled asphalt pavement calculator", "asphalt millings tons", "how much asphalt millings do I need"],
  alternates: { canonical: "https://bitumencalcpro.com/asphalt-millings-calculator/" },
  openGraph: {
    title: "Asphalt Millings Calculator — RAP Quantity Estimator | BitumenCalcPro",
    description: "Calculate asphalt millings (RAP) quantity in tons and cubic yards. Free estimator.",
    url: "https://bitumencalcpro.com/asphalt-millings-calculator/",
    siteName: "BitumenCalcPro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asphalt Millings Calculator — RAP Quantity Estimator | BitumenCalcPro",
    description: "Calculate asphalt millings (RAP) quantity in tons and cubic yards.",
  },
};

const RAP_USES = [
  { title: "Driveways", desc: "Compacted RAP makes a cost-effective driveway base or surface. It self-bonds under heat and traffic, producing a dense, stable surface over time.", icon: "🏠" },
  { title: "Road Base", desc: "Milled RAP is widely used as a flexible base course under new asphalt overlays. AASHTO M323 permits RAP content up to 50% in base layers.", icon: "🛣️" },
  { title: "Shoulders", desc: "Unpaved road shoulders can be stabilised with RAP to reduce erosion, dust, and maintenance costs while providing good structural support.", icon: "🏗️" },
  { title: "Parking Areas", desc: "Millings are a popular budget option for low-traffic parking areas. They compact well and can be re-heated and reused, reducing waste.", icon: "🚗" },
];

const FAQ_DATA = [
  { q: "What are asphalt millings (RAP)?", a: "Asphalt millings, also called recycled asphalt pavement (RAP), are the granular material produced when old asphalt pavement is milled or ground up during road rehabilitation. They contain residual bitumen binder that re-activates under compaction and heat, giving RAP good binding properties." },
  { q: "What density should I use for RAP?", a: "Loose RAP density typically ranges from 1,600 to 2,000 kg/m\u00b3 (100\u2013125 lb/ft\u00b3) depending on gradation and moisture. The calculator defaults to 1,800 kg/m\u00b3, which is a widely used planning value. Adjust based on your supplier data." },
  { q: "How deep should asphalt millings be for a driveway?", a: "For a residential driveway, 3\u20134 inches (75\u2013100 mm) of compacted millings is the standard depth. For parking areas and light industrial uses, 4\u20136 inches (100\u2013150 mm) is recommended. For road base, follow project specifications." },
  { q: "Are asphalt millings as good as new asphalt?", a: "RAP performs well for driveways, parking lots, and bases, but is not equivalent to fresh HMA for high-traffic road surfaces. New asphalt with fresh bitumen provides better structural strength, smoothness, and durability under heavy traffic." },
  { q: "How do I convert cubic yards of millings to tons?", a: "Multiply cubic yards by the bulk density in tons/yd\u00b3. For RAP at 1,800 kg/m\u00b3: 1,800 / 1,000 x 0.7646 = 1.376 tons/yd\u00b3. Or use the calculator above." },
];

const RELATED_TOOLS = [
  { name: "Asphalt Tonnage Calculator", href: "/asphalt-tonnage-calculator/", desc: "New HMA tonnage for any area.", color: "from-orange-500/20 to-orange-600/10", border: "border-orange-500/30" },
  { name: "Asphalt Driveway Cost Calculator", href: "/asphalt-driveway-cost-calculator/", desc: "Estimate driveway project cost.", color: "from-teal-500/20 to-teal-600/10", border: "border-teal-500/30" },
  { name: "Tack Coat Calculator", href: "/tack-coat-calculator/", desc: "Bitumen bond coat quantity.", color: "from-blue-500/20 to-blue-600/10", border: "border-blue-500/30" },
  { name: "Bitumen Tank Volume Calculator", href: "/bitumen-tank-volume-calculator/", desc: "Tank capacity and bitumen weight.", color: "from-amber-500/20 to-amber-600/10", border: "border-amber-500/30" },
];

export default function MillingsPage() {
  const schema = {
    "@context": "https://schema.org", "@type": "WebApplication",
    name: "Asphalt Millings Calculator",
    url: "https://bitumencalcpro.com/asphalt-millings-calculator/",
    description: "Calculate asphalt millings (RAP) quantity in tons and cubic yards.",
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
      <Script id="schema-millings-app" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script id="schema-millings-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <div className="relative pt-20 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-teal-600/10 pointer-events-none" />
        <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-violet-500/10 blur-[100px] pointer-events-none blur-orb" />
        <div className="absolute -bottom-32 -right-32 w-[480px] h-[480px] rounded-full bg-teal-500/10 blur-[100px] pointer-events-none blur-orb" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-white/50 text-sm mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-white/80">Asphalt Millings Calculator</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-violet-500/20 border border-violet-500/30 text-violet-100 px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
            <Layers size={16} />RAP Estimator
          </div>
          <h1 className="hero-heading text-4xl sm:text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight drop-shadow-2xl">
            <span className="bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent">Asphalt Millings</span>{" "}
            <span className="text-white">Calculator</span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-medium max-w-3xl mb-10 leading-relaxed drop-shadow-md">
            Calculate how many tons and cubic yards of recycled asphalt pavement (RAP) you need for driveways, base layers, and shoulders. Supports imperial and metric.
          </p>
          <div className="flex flex-wrap gap-3 mb-10">
            {["Imperial & Metric", "Tons & Cubic Yards", "Editable Density", "Free Forever"].map((b) => (
              <span key={b} className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 text-white/80 text-xs font-semibold px-3 py-1.5 rounded-full">
                <CheckCircle2 size={13} className="text-teal-400" />{b}
              </span>
            ))}
          </div>
          <MillingsCalculator />
        </div>
      </div>

      {/* USES OF RAP */}
      <section className="py-24 relative bg-black/10 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500/20 to-transparent border-l-4 border-violet-400 text-white px-4 py-2 rounded-r-lg text-sm font-bold mb-6">
              <Info size={16} className="text-violet-400" />Guide
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight">Common Uses for Asphalt Millings</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {RAP_USES.map((u) => (
              <div key={u.title} className="bg-gradient-to-b from-violet-500/15 to-transparent border border-violet-500/20 rounded-3xl p-6 hover:-translate-y-1 transition-all duration-300">
                <span className="text-3xl mb-4 block">{u.icon}</span>
                <h3 className="text-white font-bold text-lg mb-3">{u.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMULA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-violet-500/5 blur-[120px] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-violet-500/20 border border-violet-500/30 text-violet-100 px-5 py-2 rounded-full text-sm font-bold mb-6">
              <Layers size={16} />Formula
            </div>
            <h2 className="text-4xl font-black text-white mb-4">How to Calculate Millings Quantity</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-b from-white/10 to-transparent border border-white/10 rounded-3xl p-8 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-4">Volume</h3>
              <div className="bg-black/40 rounded-xl p-4 font-mono text-sm text-violet-300 mb-3">
                Volume (m\u00b3) = Area (m\u00b2) x Depth (m)
              </div>
              <p className="text-white/60 text-sm">Convert depth: e.g. 100 mm = 0.10 m</p>
            </div>
            <div className="bg-gradient-to-b from-white/10 to-transparent border border-white/10 rounded-3xl p-8 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-4">Weight</h3>
              <div className="bg-black/40 rounded-xl p-4 font-mono text-sm text-teal-300 mb-3">
                tonnes = Volume (m\u00b3) x Density (kg/m\u00b3) / 1,000
              </div>
              <p className="text-white/60 text-sm">Example: 30 m\u00b3 x 1,800 / 1,000 = 54 tonnes</p>
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
                  <span className="w-7 h-7 rounded-lg bg-violet-500/20 border border-violet-500/30 text-violet-300 flex items-center justify-center text-sm font-black flex-shrink-0 mt-0.5">Q</span>
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
