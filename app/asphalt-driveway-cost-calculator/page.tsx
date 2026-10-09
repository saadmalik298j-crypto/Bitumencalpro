// app/asphalt-driveway-cost-calculator/page.tsx
import Script from "next/script";
import Link from "next/link";
import type { Metadata } from "next";
import DrivewayCostCalculator from "./DrivewayCostCalculator";
import { Calculator, Info, ArrowRight, CheckCircle2, HelpCircle, DollarSign, Zap, BookOpen, ChevronRight, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Asphalt Driveway Cost Calculator — Free Estimator | BitumenCalcPro",
  description: "Estimate asphalt driveway costs instantly. Enter dimensions, thickness, and your local price per ton to get a total budget including base prep and delivery.",
  keywords: ["asphalt driveway cost calculator", "driveway paving cost estimator", "how much does asphalt driveway cost", "asphalt cost per ton", "paving cost calculator"],
  alternates: { canonical: "https://bitumencalcpro.com/asphalt-driveway-cost-calculator/" },
  openGraph: {
    title: "Asphalt Driveway Cost Calculator — Free Estimator | BitumenCalcPro",
    description: "Estimate asphalt driveway costs instantly. Enter your local price per ton for an accurate budget.",
    url: "https://bitumencalcpro.com/asphalt-driveway-cost-calculator/",
    siteName: "BitumenCalcPro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asphalt Driveway Cost Calculator — Free Estimator | BitumenCalcPro",
    description: "Estimate asphalt driveway costs instantly. Enter your local price per ton for an accurate budget.",
  },
};

const COST_FACTORS = [
  { title: "Material Cost", desc: "Tonnage x price per ton — the largest variable. Get a current quote from your local asphalt plant.", color: "from-orange-500/20", border: "border-orange-500/30", icon: "💰" },
  { title: "Base Preparation", desc: "Grading, excavation, and compacting the sub-base. Adds $1–$3/ft\u00b2 depending on existing conditions.", color: "from-teal-500/20", border: "border-teal-500/30", icon: "🏗️" },
  { title: "Delivery & Haul", desc: "Hot mix must arrive and be placed before it cools. Distance from the plant affects delivery cost.", color: "from-violet-500/20", border: "border-violet-500/30", icon: "🚛" },
  { title: "Labour & Finishing", desc: "Rolling, compacting, and edge sealing. Varies by contractor and region.", color: "from-blue-500/20", border: "border-blue-500/30", icon: "👷" },
];

const FAQ_DATA = [
  { q: "How much does an asphalt driveway cost?", a: "Asphalt driveway costs vary widely by region. Material costs depend on your local asphalt plant price (typically $80\u2013$200/ton). Total installed cost — including base prep, labour, and delivery — commonly ranges from $3 to $10 per square foot. Always get multiple contractor quotes." },
  { q: "Why doesn't the calculator have a default price per ton?", a: "Asphalt prices fluctuate with oil prices and vary significantly by location and season. Hard-coding a price would give misleading estimates. Enter the current price from your local supplier for an accurate result." },
  { q: "What thickness should a residential driveway be?", a: "A standard residential asphalt driveway is 2\u20133 inches of compacted HMA over a 4\u20136 inch compacted gravel base. High-traffic or heavy-vehicle driveways should use 3\u20134 inches of asphalt." },
  { q: "How much wastage should I add?", a: "For driveways, 8\u201310% wastage is a safe allowance. This covers edge trimming, uneven subgrade, and any material that cools during placement." },
  { q: "Does this calculator include labour costs?", a: "No. This calculator estimates material costs (asphalt tonnage x price per ton) plus optional base prep and delivery line items you enter. Labour rates vary by contractor and are best obtained from a local quote." },
];

const RELATED_TOOLS = [
  { name: "Asphalt Tonnage Calculator", href: "/asphalt-tonnage-calculator/", desc: "Calculate weight first, then cost.", color: "from-orange-500/20 to-orange-600/10", border: "border-orange-500/30" },
  { name: "Tack Coat Calculator", href: "/tack-coat-calculator/", desc: "Estimate bitumen tack coat quantity.", color: "from-teal-500/20 to-teal-600/10", border: "border-teal-500/30" },
  { name: "Asphalt Millings Calculator", href: "/asphalt-millings-calculator/", desc: "Budget option with RAP millings.", color: "from-violet-500/20 to-violet-600/10", border: "border-violet-500/30" },
  { name: "Bitumen Tank Volume Calculator", href: "/bitumen-tank-volume-calculator/", desc: "Tank capacity and bitumen weight.", color: "from-blue-500/20 to-blue-600/10", border: "border-blue-500/30" },
];

export default function DrivewayCostPage() {
  const schema = {
    "@context": "https://schema.org", "@type": "WebApplication",
    name: "Asphalt Driveway Cost Calculator",
    url: "https://bitumencalcpro.com/asphalt-driveway-cost-calculator/",
    description: "Estimate asphalt driveway costs. Enter dimensions, thickness, and price per ton.",
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
      <Script id="schema-driveway-app" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script id="schema-driveway-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <div className="relative pt-20 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-violet-600/10 pointer-events-none" />
        <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-orange-500/10 blur-[100px] pointer-events-none blur-orb" />
        <div className="absolute -bottom-32 -right-32 w-[480px] h-[480px] rounded-full bg-violet-500/10 blur-[100px] pointer-events-none blur-orb" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-white/50 text-sm mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-white/80">Asphalt Driveway Cost Calculator</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 text-orange-100 px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-[0_0_15px_rgba(249,115,22,0.2)]">
            <DollarSign size={16} />Cost Estimator
          </div>
          <h1 className="hero-heading text-4xl sm:text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight drop-shadow-2xl">
            <span className="bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">Asphalt Driveway</span>{" "}
            <span className="text-white">Cost Calculator</span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-medium max-w-3xl mb-10 leading-relaxed drop-shadow-md">
            Enter your driveway dimensions and your local price per ton to estimate material cost, total project budget, and asphalt tonnage needed — all in seconds.
          </p>
          <div className="flex flex-wrap gap-3 mb-10">
            {["Your Local Price", "No Hard-Coded Rates", "Includes Extras", "Free Forever"].map((b) => (
              <span key={b} className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 text-white/80 text-xs font-semibold px-3 py-1.5 rounded-full">
                <CheckCircle2 size={13} className="text-teal-400" />{b}
              </span>
            ))}
          </div>
          <DrivewayCostCalculator />
        </div>
      </div>

      {/* WHAT AFFECTS COST */}
      <section className="py-24 relative bg-black/10 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500/20 to-transparent border-l-4 border-teal-400 text-white px-4 py-2 rounded-r-lg text-sm font-bold mb-6">
              <Info size={16} className="text-teal-400" />Breakdown
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight drop-shadow-lg">What Affects Asphalt Driveway Cost?</h2>
            <p className="text-white/70 max-w-3xl mx-auto text-lg">Four key cost components drive the final price of any asphalt driveway project.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COST_FACTORS.map((f) => (
              <div key={f.title} className={`bg-gradient-to-b ${f.color} to-transparent border ${f.border} rounded-3xl p-6 hover:-translate-y-1 transition-all duration-300`}>
                <span className="text-3xl mb-4 block">{f.icon}</span>
                <h3 className="text-white font-bold text-lg mb-3">{f.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMULA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-orange-500/5 blur-[120px] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 text-orange-100 px-5 py-2 rounded-full text-sm font-bold mb-6">
              <Calculator size={16} />Formula
            </div>
            <h2 className="text-4xl font-black text-white mb-4">How the Cost Is Calculated</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-b from-white/10 to-transparent border border-white/10 rounded-3xl p-8 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-4">Step 1: Tonnage</h3>
              <div className="bg-black/40 rounded-xl p-4 font-mono text-sm text-orange-300 mb-3">
                tons = Area (ft\u00b2) x Thickness (ft) x Density (lb/ft\u00b3) / 2,000
              </div>
              <p className="text-white/60 text-sm">Then multiply by (1 + wastage%) to get order quantity.</p>
            </div>
            <div className="bg-gradient-to-b from-white/10 to-transparent border border-white/10 rounded-3xl p-8 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-4">Step 2: Cost</h3>
              <div className="bg-black/40 rounded-xl p-4 font-mono text-sm text-teal-300 mb-3">
                cost = tons x price_per_ton + base_prep + delivery
              </div>
              <p className="text-white/60 text-sm">Example: 12.08 tons x $100/ton = $1,208 material cost (price is a placeholder only).</p>
            </div>
          </div>
          <div className="mt-8 bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-2xl p-6 flex gap-4">
            <AlertTriangle className="text-amber-400 flex-shrink-0 mt-0.5" size={20} />
            <p className="text-white/70 text-sm leading-relaxed">
              <strong className="text-white">Price disclaimer:</strong> Asphalt prices are not hard-coded in this calculator because they vary significantly by region, season, and oil prices. Always use a current quote from your local asphalt plant or contractor.
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
                  <span className="w-7 h-7 rounded-lg bg-orange-500/20 border border-orange-500/30 text-orange-300 flex items-center justify-center text-sm font-black flex-shrink-0 mt-0.5">Q</span>
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
