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
  AlertTriangle,
  Scale,
  Ruler,
  TrendingUp,
  FileText,
  Lightbulb,
  ShieldAlert,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Asphalt Tonnage Calculator | Sq Ft or Sq M to Tons",
  description:
    "Calculate how many tons of asphalt you need from area and thickness. Free tool for driveways, parking lots and roads, in US tons or metric tonnes.",
  keywords: [
    "asphalt tonnage calculator",
    "sq ft to tons of asphalt",
    "sq m to tonnes asphalt",
    "asphalt weight calculator",
    "how many tons of asphalt do I need",
    "asphalt quantity estimator",
    "HMA tonnage formula",
    "pavement tons calculator",
  ],
  alternates: { canonical: "https://bitumencalcpro.com/asphalt-tonnage-calculator/" },
  openGraph: {
    title: "Asphalt Tonnage Calculator | Sq Ft or Sq M to Tons",
    description:
      "Calculate how many tons of asphalt you need from area and thickness. Free tool for driveways, parking lots and roads, in US tons or metric tonnes.",
    url: "https://bitumencalcpro.com/asphalt-tonnage-calculator/",
    siteName: "BitumenCalcPro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asphalt Tonnage Calculator | Sq Ft or Sq M to Tons",
    description:
      "Calculate how many tons of asphalt you need from area and thickness. Free tool for driveways, parking lots and roads, in US tons or metric tonnes.",
  },
};

const FAQ_DATA = [
  {
    q: "How many tons of asphalt do I need per square foot?",
    a: "At 145 lb/ft³, each inch of thickness needs about 0.006 tons per square foot. Two inches needs about 0.012 tons, roughly 12 tons per 1,000 ft².",
  },
  {
    q: "How many square feet does 1 ton of asphalt cover?",
    a: "About 83 ft² at 2 inches, 55 ft² at 3 inches and 41 ft² at 4 inches. Thicker layers cover less area.",
  },
  {
    q: "How many tons are in a cubic yard of asphalt?",
    a: "About 1.96 tons of compacted asphalt at 145 lb/ft³.",
  },
  {
    q: "How do I convert square yards to tons of asphalt?",
    a: "Multiply the area in square yards by the thickness in inches, then by 110 lb, and divide by 2,000. The square foot formula is more precise.",
  },
  {
    q: "What density should I use for asphalt?",
    a: "145 lb/ft³ (about 2,320 kg/m³) is a common planning value. Your supplier's mix design has the exact number.",
  },
  {
    q: "How thick should an asphalt driveway be?",
    a: "Many residential driveways use 2 to 3 inches compacted over a prepared base. Heavier traffic needs more, so confirm with your contractor.",
  },
  {
    q: "Does the result include gravel base?",
    a: "No. The result covers asphalt only. Base stone is a separate material with its own density.",
  },
  {
    q: "How accurate is the result?",
    a: "It is an estimate. Accuracy depends on your measurements, the density you enter and the thickness actually laid.",
  },
];

const RELATED_TOOLS = [
  {
    name: "Bitumen Calculator",
    href: "/",
    desc: "Calculate binder weight, volume in litres, and asphalt mix proportions.",
    color: "from-teal-500/20 to-teal-600/10",
    border: "border-teal-500/30",
  },
  {
    name: "Driveway Cost Calculator",
    href: "/asphalt-driveway-cost-calculator/",
    desc: "Turn tonnage into a comprehensive driveway budget estimate.",
    color: "from-orange-500/20 to-orange-600/10",
    border: "border-orange-500/30",
  },
  {
    name: "Tack Coat Calculator",
    href: "/tack-coat-calculator/",
    desc: "Calculate sprayed emulsion volume (gallons/liters) under each lift.",
    color: "from-blue-500/20 to-blue-600/10",
    border: "border-blue-500/30",
  },
  {
    name: "Asphalt Millings Calculator",
    href: "/asphalt-millings-calculator/",
    desc: "Estimate recycled asphalt (RAP) volume, weight, and compaction.",
    color: "from-violet-500/20 to-violet-600/10",
    border: "border-violet-500/30",
  },
];

export default function AsphaltTonnagePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Asphalt Tonnage Calculator",
    url: "https://bitumencalcpro.com/asphalt-tonnage-calculator/",
    description:
      "Calculate how many tons of asphalt you need from area and thickness. Free tool for driveways, parking lots and roads, in US tons or metric tonnes.",
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
      <Script
        id="schema-tonnage-app"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Script
        id="schema-tonnage-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO SECTION */}
      <div className="relative pt-20 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-teal-600/10 pointer-events-none" />
        <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-orange-500/10 blur-[100px] pointer-events-none blur-orb" />
        <div className="absolute -bottom-32 -right-32 w-[480px] h-[480px] rounded-full bg-teal-500/20 blur-[100px] pointer-events-none blur-orb" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-white/50 text-sm mb-8">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight size={14} />
            <span className="text-white/80">Asphalt Tonnage Calculator</span>
          </nav>

          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 text-orange-100 px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-[0_0_15px_rgba(249,115,22,0.2)]">
            <Calculator size={16} />
            Tonnage Estimator
          </div>

          <h1 className="hero-heading text-4xl sm:text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight drop-shadow-2xl">
            <span className="bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
              Asphalt Tonnage
            </span>{" "}
            <span className="text-white">Calculator</span>
          </h1>

          <p className="text-white/90 text-lg md:text-xl font-medium max-w-3xl mb-8 leading-relaxed drop-shadow-md">
            Order 10% too little asphalt and the crew leaves a strip of the driveway unpaved. Order 10% too much and you pay for tons nobody can use, because hot mix can't be stored for next week.
          </p>

          <p className="text-white/80 text-base md:text-lg max-w-3xl mb-10 leading-relaxed">
            This asphalt tonnage calculator gives you the weight of asphalt a job needs from its area, thickness and density. It works in feet, yards or metres and returns US tons or metric tonnes. Below the tool you'll find the formulas, worked examples, ready-made charts and the mistakes behind most ordering errors.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            {["Imperial & Metric", "Instant Results", "100% Pocket-Calculator Verified", "Free Forever"].map((b) => (
              <span
                key={b}
                className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 text-white/80 text-xs font-semibold px-3.5 py-1.5 rounded-full"
              >
                <CheckCircle2 size={13} className="text-teal-400" />
                {b}
              </span>
            ))}
          </div>

          {/* CALCULATOR WIDGET */}
          <AsphaltTonnageCalculator />
        </div>
      </div>

      {/* VERIFIED NOTE BANNER */}
      <section className="py-6 bg-teal-500/10 border-y border-teal-500/20">
        <div className="max-w-5xl mx-auto px-6 text-center text-teal-200 text-sm md:text-base font-semibold flex items-center justify-center gap-3">
          <CheckCircle2 size={20} className="text-teal-400 flex-shrink-0" />
          <span>Every number on this page can be checked with a standard pocket calculator.</span>
        </div>
      </section>

      {/* HOW TO USE SECTION */}
      <section className="py-20 relative bg-black/10 border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-transparent border-l-4 border-orange-400 text-white px-4 py-2 rounded-r-lg text-sm font-bold mb-4">
              <Lightbulb size={16} className="text-orange-400" />
              Step-By-Step Guide
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight drop-shadow-lg">
              How to Use the Asphalt Tonnage Calculator
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-6 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-500/20 border border-orange-500/40 text-orange-300 flex items-center justify-center font-black text-lg flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Measure the Area</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Enter the length and width of the paved area. If you already know the total square footage or square meters, type it in directly.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-6 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-500/20 border border-orange-500/40 text-orange-300 flex items-center justify-center font-black text-lg flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Enter Layer Thickness</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Enter the thickness of the finished, compacted asphalt layer, in whatever unit you measured (inches or millimeters).
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-6 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-500/20 border border-orange-500/40 text-orange-300 flex items-center justify-center font-black text-lg flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Check & Adjust Mix Density</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    The default density is <strong>145 lb/ft³</strong> (about 2,320 kg/m³), a common planning value for compacted hot mix asphalt. Replace it with your asphalt plant supplier's number if available.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-6 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-500/20 border border-orange-500/40 text-orange-300 flex items-center justify-center font-black text-lg flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Select Units & Read Tonnage</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Pick US tons or metric tonnes and instantly read the total weight needed. Add a 5–10% allowance for waste and compaction variations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-black/40 border border-white/10 rounded-2xl p-5 text-white/80 text-sm flex items-start gap-3">
            <Info size={20} className="text-teal-400 flex-shrink-0 mt-0.5" />
            <p>
              <strong>Working on more than one layer?</strong> Run the tool once per layer and add the results together. Layers often have different thicknesses and sometimes different mix densities (e.g., base course vs. wearing surface course).
            </p>
          </div>
        </div>
      </section>

      {/* FORMULA & CONSTANTS SECTION */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-orange-500/5 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 text-orange-100 px-5 py-2 rounded-full text-sm font-bold mb-4 shadow-[0_0_15px_rgba(249,115,22,0.2)]">
              <BarChart3 size={16} />
              Mathematical Standard
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 drop-shadow-xl">
              The Asphalt Tonnage Formula
            </h2>
            <p className="text-white/80 text-lg max-w-3xl mx-auto leading-relaxed">
              The calculation has three core steps: find the total volume, convert volume into total weight, then convert weight to US tons or metric tonnes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* US UNITS */}
            <div className="bg-gradient-to-b from-white/10 to-transparent border border-white/10 rounded-3xl p-8 shadow-2xl">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 text-white rounded-2xl flex items-center justify-center mb-6 font-black text-lg shadow-lg">
                US
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">US Customary Units (Short Tons)</h3>
              <div className="bg-black/50 rounded-xl p-5 border border-orange-500/30 font-mono text-sm text-orange-300 shadow-inner mb-4">
                Tons = Area (ft²) × Thickness (ft) × Density (lb/ft³) ÷ 2,000
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-3">
                <strong>Crucial Step:</strong> Convert thickness before multiplying. Divide inches by 12 to get feet (e.g., 2 in ÷ 12 = 0.1667 ft).
              </p>
              <p className="text-xs text-orange-200/70 bg-orange-500/10 p-3 rounded-lg border border-orange-500/20">
                Skipping unit conversion yields results 12 times too high!
              </p>
            </div>

            {/* METRIC UNITS */}
            <div className="bg-gradient-to-b from-white/10 to-transparent border border-white/10 rounded-3xl p-8 shadow-2xl">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-emerald-600 text-white rounded-2xl flex items-center justify-center mb-6 font-black text-lg shadow-lg">
                SI
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Metric System (Tonnes)</h3>
              <div className="bg-black/50 rounded-xl p-5 border border-teal-500/30 font-mono text-sm text-teal-300 shadow-inner mb-4">
                Tonnes = Area (m²) × Thickness (m) × Density (kg/m³) ÷ 1,000
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-3">
                <strong>Crucial Step:</strong> Convert thickness before multiplying. Divide millimeters by 1,000 to get meters (e.g., 50 mm ÷ 1,000 = 0.05 m).
              </p>
              <p className="text-xs text-teal-200/70 bg-teal-500/10 p-3 rounded-lg border border-teal-500/20">
                Skipping unit conversion yields results 1,000 times too high!
              </p>
            </div>
          </div>

          {/* SITE CONSTANTS TABLE */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl max-w-4xl mx-auto">
            <div className="p-6 md:p-8 bg-black/40 border-b border-white/5 flex items-center gap-3">
              <Scale className="text-orange-400" size={26} />
              <div>
                <h3 className="text-2xl font-bold text-white">Handy Field Constants (At 145 lb/ft³)</h3>
                <p className="text-white/60 text-sm">Use these fast multipliers for quick mental math on site.</p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-white">
                <thead className="bg-white/5">
                  <tr>
                    <th className="p-4 md:p-5 font-bold uppercase tracking-wider text-xs md:text-sm border-b border-white/10 text-white/50">
                      Quantity / Specification
                    </th>
                    <th className="p-4 md:p-5 font-bold uppercase tracking-wider text-xs md:text-sm border-b border-white/10 text-white/50">
                      Weight / Volume Value
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-sm md:text-base">
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-4 md:p-5 font-semibold text-white/90">1 inch of asphalt, per ft²</td>
                    <td className="p-4 md:p-5 font-mono text-orange-300">12.08 lb</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-4 md:p-5 font-semibold text-white/90">1 inch of asphalt, per yd²</td>
                    <td className="p-4 md:p-5 font-mono text-orange-300">108.75 lb (most estimators round to 110 lb)</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-4 md:p-5 font-semibold text-white/90">2 inches of asphalt, per ft²</td>
                    <td className="p-4 md:p-5 font-mono text-orange-300">24.2 lb</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-4 md:p-5 font-semibold text-white/90">1 yd³ of compacted asphalt</td>
                    <td className="p-4 md:p-5 font-mono text-orange-300">about 1.96 tons</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-4 md:p-5 font-semibold text-white/90">1 m² at 50 mm thickness (2,350 kg/m³)</td>
                    <td className="p-4 md:p-5 font-mono text-teal-300">117.5 kg</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* WORKED EXAMPLES SECTION */}
      <section className="py-24 bg-black/10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-500/30 text-teal-100 px-5 py-2 rounded-full text-sm font-bold mb-4">
              <FileText size={16} />
              Real-World Scenarios
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 drop-shadow-xl">
              Worked Calculation Examples
            </h2>
            <p className="text-white/80 text-lg max-w-3xl mx-auto leading-relaxed">
              Step-by-step mathematical breakdowns of common paving jobs, from simple driveways to commercial parking lots and multi-lift highways.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* EXAMPLE 1 */}
            <div className="bg-gradient-to-b from-white/10 to-transparent border border-white/10 rounded-2xl p-6 shadow-xl flex flex-col justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20 mb-3 inline-block">
                  Example 1
                </span>
                <h3 className="text-xl font-bold text-white mb-3">Residential Driveway (2 in)</h3>
                <p className="text-white/70 text-sm mb-4">
                  A standard driveway measuring <strong>12 ft × 50 ft</strong>, paved <strong>2 inches thick</strong> at 145 lb/ft³.
                </p>
                <ul className="space-y-2 text-xs font-mono text-white/80 bg-black/40 p-4 rounded-xl border border-white/5 mb-4">
                  <li>Area = 12 × 50 = 600 ft²</li>
                  <li>Volume = 600 × (2 ÷ 12) = 100 ft³</li>
                  <li>Weight = 100 × 145 = 14,500 lb</li>
                  <li className="text-orange-300 font-bold">Tons = 14,500 ÷ 2,000 = 7.25 tons</li>
                </ul>
              </div>
              <p className="text-xs text-teal-300 font-semibold bg-teal-500/10 p-2.5 rounded-lg border border-teal-500/20">
                Order Recommendation: <strong>7.61 tons</strong> (with 5% waste allowance).
              </p>
            </div>

            {/* EXAMPLE 2 */}
            <div className="bg-gradient-to-b from-white/10 to-transparent border border-white/10 rounded-2xl p-6 shadow-xl flex flex-col justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20 mb-3 inline-block">
                  Example 2
                </span>
                <h3 className="text-xl font-bold text-white mb-3">Driveway with Turnaround (3 in)</h3>
                <p className="text-white/70 text-sm mb-4">
                  A <strong>10 ft × 40 ft</strong> main strip plus a <strong>20 ft × 20 ft</strong> turnaround pad, paved <strong>3 inches thick</strong>.
                </p>
                <ul className="space-y-2 text-xs font-mono text-white/80 bg-black/40 p-4 rounded-xl border border-white/5 mb-4">
                  <li>Total Area = 400 + 400 = 800 ft²</li>
                  <li>Volume = 800 × 0.25 ft = 200 ft³</li>
                  <li>Weight = 200 × 145 = 29,000 lb</li>
                  <li className="text-orange-300 font-bold">Tons = 29,000 ÷ 2,000 = 14.5 tons</li>
                </ul>
              </div>
              <p className="text-xs text-teal-300 font-semibold bg-teal-500/10 p-2.5 rounded-lg border border-teal-500/20">
                Order Recommendation: <strong>15.2 tons</strong> (with 5% waste allowance).
              </p>
            </div>

            {/* EXAMPLE 3 */}
            <div className="bg-gradient-to-b from-white/10 to-transparent border border-white/10 rounded-2xl p-6 shadow-xl flex flex-col justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20 mb-3 inline-block">
                  Example 3
                </span>
                <h3 className="text-xl font-bold text-white mb-3">Commercial Parking Lot (3 in)</h3>
                <p className="text-white/70 text-sm mb-4">
                  A parking area measuring <strong>60 ft × 120 ft</strong> paved <strong>3 inches thick</strong>.
                </p>
                <ul className="space-y-2 text-xs font-mono text-white/80 bg-black/40 p-4 rounded-xl border border-white/5 mb-4">
                  <li>Area = 60 × 120 = 7,200 ft²</li>
                  <li>Volume = 7,200 × 0.25 ft = 1,800 ft³</li>
                  <li>Weight = 1,800 × 145 = 261,000 lb</li>
                  <li className="text-orange-300 font-bold">Tons = 261,000 ÷ 2,000 = 130.5 tons</li>
                </ul>
              </div>
              <p className="text-xs text-teal-300 font-semibold bg-teal-500/10 p-2.5 rounded-lg border border-teal-500/20">
                Order Recommendation: <strong>137 tons</strong> (ask supplier about truck load sizes).
              </p>
            </div>

            {/* EXAMPLE 4 */}
            <div className="bg-gradient-to-b from-white/10 to-transparent border border-white/10 rounded-2xl p-6 shadow-xl flex flex-col justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-teal-400 bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/20 mb-3 inline-block">
                  Example 4
                </span>
                <h3 className="text-xl font-bold text-white mb-3">Metric Car Park (50 mm)</h3>
                <p className="text-white/70 text-sm mb-4">
                  An area of <strong>200 m²</strong> with a mix density of <strong>2,350 kg/m³</strong> at <strong>50 mm thickness</strong>.
                </p>
                <ul className="space-y-2 text-xs font-mono text-white/80 bg-black/40 p-4 rounded-xl border border-white/5 mb-4">
                  <li>Volume = 200 × 0.05 m = 10 m³</li>
                  <li>Weight = 10 × 2,350 = 23,500 kg</li>
                  <li className="text-teal-300 font-bold">Result = 23.5 tonnes (25.9 US tons)</li>
                </ul>
              </div>
              <p className="text-xs text-teal-300 font-semibold bg-teal-500/10 p-2.5 rounded-lg border border-teal-500/20">
                Order Recommendation: <strong>24.7 tonnes</strong> (with 5% allowance).
              </p>
            </div>

            {/* EXAMPLE 5 */}
            <div className="bg-gradient-to-b from-white/10 to-transparent border border-white/10 rounded-2xl p-6 shadow-xl flex flex-col justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20 mb-3 inline-block">
                  Example 5
                </span>
                <h3 className="text-xl font-bold text-white mb-3">Square Yards Quick Calculation</h3>
                <p className="text-white/70 text-sm mb-4">
                  An area measured in square yards: <strong>100 yd²</strong> at <strong>3 inches thick</strong>.
                </p>
                <ul className="space-y-2 text-xs font-mono text-white/80 bg-black/40 p-4 rounded-xl border border-white/5 mb-4">
                  <li>Shortcut: 100 × 3 × 110 lb = 33,000 lb</li>
                  <li>Shortcut Tons = 33,000 ÷ 2,000 = 16.5 tons</li>
                  <li className="text-orange-300 font-bold">Exact (at 145 lb/ft³) = 16.3 tons</li>
                </ul>
              </div>
              <p className="text-xs text-teal-300 font-semibold bg-teal-500/10 p-2.5 rounded-lg border border-teal-500/20">
                The 110 lb shortcut runs slightly high, which is perfect for a quick initial field estimate.
              </p>
            </div>

            {/* EXAMPLE 6 */}
            <div className="bg-gradient-to-b from-white/10 to-transparent border border-white/10 rounded-2xl p-6 shadow-xl flex flex-col justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20 mb-3 inline-block">
                  Example 6
                </span>
                <h3 className="text-xl font-bold text-white mb-3">Two-Layer Pavement Course</h3>
                <p className="text-white/70 text-sm mb-4">
                  A <strong>10,000 ft²</strong> road getting a <strong>3 in binder course</strong> and a <strong>1.5 in surface course</strong>.
                </p>
                <ul className="space-y-2 text-xs font-mono text-white/80 bg-black/40 p-4 rounded-xl border border-white/5 mb-4">
                  <li>Binder = 10,000 × 0.25 × 145 ÷ 2,000 = 181.25 t</li>
                  <li>Surface = 10,000 × 0.125 × 145 ÷ 2,000 = 90.63 t</li>
                  <li className="text-orange-300 font-bold">Total Asphalt = 271.88 tons</li>
                </ul>
              </div>
              <p className="text-xs text-teal-300 font-semibold bg-teal-500/10 p-2.5 rounded-lg border border-teal-500/20">
                Calculate each lift separately to account for potential mix density differences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ODD-SHAPED AREAS SECTION */}
      <section className="py-20 bg-black/20 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 text-orange-100 px-4 py-2 rounded-full text-sm font-bold mb-4">
              <Ruler size={16} />
              Geometry & Area Estimation
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight drop-shadow-lg">
              How to Measure Odd-Shaped Areas
            </h2>
            <p className="text-white/80 text-base md:text-lg max-w-3xl mt-4 leading-relaxed">
              Real job sites rarely feature perfect rectangles. Split complex paving sites into simple geometric shapes, compute each individual area, and sum them together.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            <div className="bg-white/5 border border-white/10 p-5 rounded-2xl text-center">
              <h4 className="text-orange-300 font-bold text-lg mb-1">Rectangle</h4>
              <p className="font-mono text-white text-sm">length × width</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-5 rounded-2xl text-center">
              <h4 className="text-orange-300 font-bold text-lg mb-1">Triangle</h4>
              <p className="font-mono text-white text-sm">½ × base × height</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-5 rounded-2xl text-center">
              <h4 className="text-orange-300 font-bold text-lg mb-1">Circle</h4>
              <p className="font-mono text-white text-sm">π × radius² (3.1416)</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-5 rounded-2xl text-center">
              <h4 className="text-orange-300 font-bold text-lg mb-1">Trapezoid</h4>
              <p className="font-mono text-white text-sm">½ × (side a + b) × height</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <CheckCircle2 size={20} className="text-teal-400" />
              Worked Example: Circular Turnaround
            </h3>
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              Take a circular cul-de-sac turnaround with a <strong>30 ft diameter</strong>. The radius is 15 ft:
            </p>
            <div className="bg-black/40 p-4 rounded-xl border border-white/5 font-mono text-xs md:text-sm text-teal-300 space-y-1 mb-4">
              <p>Area = 3.1416 × (15)² = 3.1416 × 225 = 706.86 ft²</p>
              <p>Volume (at 2 in thick) = 706.86 × (2 ÷ 12) = 117.81 ft³</p>
              <p>Weight = 117.81 × 145 lb/ft³ = 17,082.4 lb</p>
              <p className="text-orange-300 font-bold">Total Tonnage = 17,082.4 ÷ 2,000 = 8.54 US tons</p>
            </div>
            <p className="text-white/70 text-xs md:text-sm">
              <strong>Measurement Rule:</strong> Measure the paved surface only. Leave out concrete curbs, planting beds, and unpaved islands. On long roads or irregular paths, measure width at multiple points and take the average.
            </p>
          </div>
        </div>
      </section>

      {/* TONNAGE CHARTS SECTION */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 text-orange-100 px-5 py-2 rounded-full text-sm font-bold mb-4">
              <Layers size={16} />
              Quick Coverage Tables
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 drop-shadow-xl">
              Asphalt Tonnage Reference Charts
            </h2>
            <p className="text-white/80 text-lg max-w-3xl mx-auto leading-relaxed">
              Use these standard reference tables to quickly estimate coverage rates for imperial and metric projects.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* US CHART */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
              <div className="p-6 bg-black/40 border-b border-white/5 flex items-center justify-between">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-orange-400" />
                  US Customary Units (145 lb/ft³)
                </h3>
                <span className="text-xs font-mono text-white/50">Tons & ft²</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-white text-sm">
                  <thead className="bg-white/5">
                    <tr>
                      <th className="p-4 font-bold uppercase text-xs text-white/50 border-b border-white/10">Thickness</th>
                      <th className="p-4 font-bold uppercase text-xs text-white/50 border-b border-white/10">Tons per 1,000 ft²</th>
                      <th className="p-4 font-bold uppercase text-xs text-white/50 border-b border-white/10">Coverage per 1 Ton</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 font-mono">
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="p-4 text-orange-300 font-bold">1.5 in</td>
                      <td className="p-4 text-white">9.06 tons</td>
                      <td className="p-4 text-teal-300">about 110 ft²</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="p-4 text-orange-300 font-bold">2.0 in</td>
                      <td className="p-4 text-white">12.08 tons</td>
                      <td className="p-4 text-teal-300">about 83 ft²</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="p-4 text-orange-300 font-bold">2.5 in</td>
                      <td className="p-4 text-white">15.10 tons</td>
                      <td className="p-4 text-teal-300">about 66 ft²</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="p-4 text-orange-300 font-bold">3.0 in</td>
                      <td className="p-4 text-white">18.13 tons</td>
                      <td className="p-4 text-teal-300">about 55 ft²</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="p-4 text-orange-300 font-bold">4.0 in</td>
                      <td className="p-4 text-white">24.17 tons</td>
                      <td className="p-4 text-teal-300">about 41 ft²</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="p-4 text-orange-300 font-bold">6.0 in</td>
                      <td className="p-4 text-white">36.25 tons</td>
                      <td className="p-4 text-teal-300">about 28 ft²</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* METRIC CHART */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
              <div className="p-6 bg-black/40 border-b border-white/5 flex items-center justify-between">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-teal-400" />
                  Metric Units (2,350 kg/m³)
                </h3>
                <span className="text-xs font-mono text-white/50">Tonnes & m²</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-white text-sm">
                  <thead className="bg-white/5">
                    <tr>
                      <th className="p-4 font-bold uppercase text-xs text-white/50 border-b border-white/10">Thickness</th>
                      <th className="p-4 font-bold uppercase text-xs text-white/50 border-b border-white/10">Tonnes per 100 m²</th>
                      <th className="p-4 font-bold uppercase text-xs text-white/50 border-b border-white/10">Coverage per 1 Tonne</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 font-mono">
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="p-4 text-teal-300 font-bold">30 mm</td>
                      <td className="p-4 text-white">7.05 tonnes</td>
                      <td className="p-4 text-orange-300">about 14.2 m²</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="p-4 text-teal-300 font-bold">40 mm</td>
                      <td className="p-4 text-white">9.40 tonnes</td>
                      <td className="p-4 text-orange-300">about 10.6 m²</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="p-4 text-teal-300 font-bold">50 mm</td>
                      <td className="p-4 text-white">11.75 tonnes</td>
                      <td className="p-4 text-orange-300">about 8.5 m²</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="p-4 text-teal-300 font-bold">75 mm</td>
                      <td className="p-4 text-white">17.63 tonnes</td>
                      <td className="p-4 text-orange-300">about 5.7 m²</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="p-4 text-teal-300 font-bold">100 mm</td>
                      <td className="p-4 text-white">23.50 tonnes</td>
                      <td className="p-4 text-orange-300">about 4.3 m²</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center text-xs text-white/60">
            * Note: If your mix density differs from 145 lb/ft³ (or 2,350 kg/m³), scale the table result proportionally. For example, a mix at 140 lb/ft³ weighs ~3.4% less than the values shown.
          </div>
        </div>
      </section>

      {/* WHAT CHANGES THE TONNAGE SECTION */}
      <section className="py-24 bg-black/10 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-transparent border-l-4 border-orange-400 text-white px-4 py-2 rounded-r-lg text-sm font-bold mb-4">
              <TrendingUp size={16} className="text-orange-400" />
              Key Physical Variables
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight drop-shadow-lg">
              What Changes the Asphalt Tonnage?
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-orange-400" />
                1. Layer Thickness
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Weight rises in direct linear proportion to layer thickness. Doubling the thickness exactly doubles the tonnage. Small depth errors compound quickly: a nominal 2-inch layer that averages 2.25 inches across an uneven site uses <strong>12.5% more asphalt</strong> than planned. Residential driveways commonly get 2 to 3 inches over a compacted aggregate base, whereas high-load commercial parking lots require 4 to 6 inches across multiple lifts. Check our{" "}
                <Link href="/blog" className="text-teal-300 font-bold hover:underline">
                  asphalt layer thickness guide
                </Link>{" "}
                for structural layer recommendations.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-orange-400" />
                2. Mix Density & Aggregate Type
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Compacted hot mix asphalt typically ranges between <strong>140 and 150 lb/ft³</strong> (2,240 to 2,400 kg/m³). Dense basalt or granite aggregates create a heavier mix than soft limestone or porous aggregates. Open-graded friction courses (OGFC) contain higher air voids and weigh less per cubic foot. At 140 lb/ft³, the 7.25-ton driveway in Example 1 drops to 7.0 tons; at 150 lb/ft³, it rises to 7.5 tons.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-orange-400" />
                3. Base Condition & Subgrade Uniformity
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                A dipped, rutted, or uneven gravel base consumes significantly more hot mix to achieve a smooth, level surface. Crowns, cross-slopes, and drainage swales also subtly alter overall material requirements compared to flat planar calculations.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-orange-400" />
                4. Compaction & Lift Constraints
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Asphalt is placed loose by the paver screed and rolled down to final density. Compaction reduces volume, but total mass stays identical. This calculator relies on final <strong>compacted thickness</strong>, ensuring you order the net weight required for the finished pavement. Note that thin lifts have physical limits: a standard guideline specifies lift thickness should be at least 2 to 3 times the Maximum Nominal Aggregate Size (NMAS).
              </p>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-orange-400" />
                5. Edges, Aprons & Tie-Ins
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Thickened edge keys, entrance aprons, garage tie-ins, and bevels add unaccounted area and depth. Ensure these transition zones are included in your total square footage measurement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ORDER ALLOWANCE & UNITS SECTION */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* WASTAGE ALLOWANCE */}
            <div className="bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/20 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="text-orange-400" size={24} />
                <h3 className="text-xl font-bold text-white">How Much Extra to Order?</h3>
              </div>
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                Experienced paving contractors typically add a <strong>5% to 10% allowance</strong> for edge trimming, hand-work aprons, uneven subgrades, and small transport cooling losses.
              </p>
              <p className="text-white/70 text-xs leading-relaxed">
                Asphalt plants sell hot mix by the ton, usually with a minimum truckload payload (e.g., 15–20 tons per dump truck). Because hot mix cools quickly in transit, delivery schedules must match your crew's laydown rate. For minor patch repairs under 1,000 lb, bagged cold-patch asphalt may be more practical than a hot mix plant batch.
              </p>
            </div>

            {/* TONS VS TONNES */}
            <div className="bg-gradient-to-br from-teal-500/10 to-transparent border border-teal-500/20 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Scale className="text-teal-400" size={24} />
                <h3 className="text-xl font-bold text-white">Tons vs. Metric Tonnes</h3>
              </div>
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                A <strong>US Short Ton</strong> equals 2,000 lb (~907.18 kg). A <strong>Metric Tonne</strong> equals 1,000 kg (~2,204.62 lb).
              </p>
              <p className="text-white/70 text-xs leading-relaxed">
                One metric tonne equals <strong>1.1023 US tons</strong>—a 10% difference! Always verify which unit your asphalt supplier or plant quotation uses. Confusing metric tonnes with US short tons when ordering will leave your crew 10% short on material on site!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CROSS LINKING SUITE SECTION */}
      <section className="py-20 bg-black/20 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-500/30 text-teal-100 px-4 py-2 rounded-full text-sm font-bold mb-4">
            <Zap size={16} />
            Complete BitumenCalcPro Engineering Suite
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
            From Tonnage to Bitumen, Tack Coat, and Total Project Cost
          </h2>
          <p className="text-white/80 text-base md:text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
            Asphalt mix consists of mineral aggregate plus liquid bitumen binder. At a typical 5.5% binder content, 12.08 tons of HMA per 1,000 ft² contains approximately <strong>0.66 tons of pure bitumen</strong>. Connect your tonnage calculations across our specialized civil engineering tools:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            <Link
              href="/"
              className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-teal-400/40 transition-all group"
            >
              <h4 className="text-white font-bold text-base mb-1 group-hover:text-teal-300 flex items-center justify-between">
                Bitumen Calculator
                <ArrowRight size={14} />
              </h4>
              <p className="text-white/60 text-xs">Determine exact liquid binder weight, volume in litres, and aggregate proportions.</p>
            </Link>

            <Link
              href="/tack-coat-calculator/"
              className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-teal-400/40 transition-all group"
            >
              <h4 className="text-white font-bold text-base mb-1 group-hover:text-teal-300 flex items-center justify-between">
                Tack Coat Calculator
                <ArrowRight size={14} />
              </h4>
              <p className="text-white/60 text-xs">Calculate sprayed emulsion application volume under every pavement lift.</p>
            </Link>

            <Link
              href="/asphalt-driveway-cost-calculator/"
              className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-teal-400/40 transition-all group"
            >
              <h4 className="text-white font-bold text-base mb-1 group-hover:text-teal-300 flex items-center justify-between">
                Driveway Cost Calculator
                <ArrowRight size={14} />
              </h4>
              <p className="text-white/60 text-xs">Convert calculated tonnage into complete material, labor, and sub-base cost budgets.</p>
            </Link>

            <Link
              href="/asphalt-millings-calculator/"
              className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-teal-400/40 transition-all group"
            >
              <h4 className="text-white font-bold text-base mb-1 group-hover:text-teal-300 flex items-center justify-between">
                Millings Calculator
                <ArrowRight size={14} />
              </h4>
              <p className="text-white/60 text-xs">Estimate recycled asphalt (RAP) tonnage, compaction, and cost savings.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* COMMON MISTAKES SECTION */}
      <section className="py-24 bg-black/10 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/30 text-red-200 px-4 py-2 rounded-full text-sm font-bold mb-4">
              <ShieldAlert size={16} className="text-red-400" />
              Pitfalls to Avoid
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight drop-shadow-lg">
              Common Ordering Mistakes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6 flex items-start gap-4">
              <span className="w-8 h-8 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center font-black flex-shrink-0">
                ✕
              </span>
              <div>
                <h4 className="text-white font-bold text-base mb-1">Skipping Thickness Unit Conversion</h4>
                <p className="text-white/70 text-xs leading-relaxed">
                  Inches must be converted to feet (÷ 12) and millimeters to meters (÷ 1,000). Multiplying area by raw inches yields 12x excessive tonnage!
                </p>
              </div>
            </div>

            <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6 flex items-start gap-4">
              <span className="w-8 h-8 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center font-black flex-shrink-0">
                ✕
              </span>
              <div>
                <h4 className="text-white font-bold text-base mb-1">Confusing Binder Density with Mix Density</h4>
                <p className="text-white/70 text-xs leading-relaxed">
                  Bitumen binder density is ~64.3 lb/ft³ (~1,030 kg/m³), whereas compacted hot mix is ~145 lb/ft³ (~2,350 kg/m³). Using binder density returns less than half the true weight!
                </p>
              </div>
            </div>

            <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6 flex items-start gap-4">
              <span className="w-8 h-8 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center font-black flex-shrink-0">
                ✕
              </span>
              <div>
                <h4 className="text-white font-bold text-base mb-1">Rounding Thickness Down</h4>
                <p className="text-white/70 text-xs leading-relaxed">
                  Estimating 2.0 inches instead of 2.5 inches reduces material ordered by 20%, resulting in a severe shortage on site.
                </p>
              </div>
            </div>

            <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6 flex items-start gap-4">
              <span className="w-8 h-8 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center font-black flex-shrink-0">
                ✕
              </span>
              <div>
                <h4 className="text-white font-bold text-base mb-1">Including Unpaved Island Areas</h4>
                <p className="text-white/70 text-xs leading-relaxed">
                  Failing to subtract concrete curbs, interior planters, and unpaved islands adds unused tons to your order.
                </p>
              </div>
            </div>

            <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6 flex items-start gap-4">
              <span className="w-8 h-8 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center font-black flex-shrink-0">
                ✕
              </span>
              <div>
                <h4 className="text-white font-bold text-base mb-1">Mixing Measurement Units</h4>
                <p className="text-white/70 text-xs leading-relaxed">
                  Combining feet for length/width with inches for thickness without converting creates mathematical errors unless converted consistently.
                </p>
              </div>
            </div>

            <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6 flex items-start gap-4">
              <span className="w-8 h-8 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center font-black flex-shrink-0">
                ✕
              </span>
              <div>
                <h4 className="text-white font-bold text-base mb-1">Misreading Short Tons as Metric Tonnes</h4>
                <p className="text-white/70 text-xs leading-relaxed">
                  A 100-tonne quote equals 110.2 US tons. Reading tonnes as short tons causes a 10% material shortage during placement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 bg-black/20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-violet-500/20 border border-violet-500/30 text-violet-100 px-5 py-2 rounded-full text-sm font-bold mb-4">
              <HelpCircle size={16} />
              Frequently Asked Questions
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 drop-shadow-xl">
              Asphalt Tonnage FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {FAQ_DATA.map((faq, i) => (
              <div
                key={i}
                className="bg-gradient-to-b from-white/8 to-transparent border border-white/10 rounded-2xl p-6 hover:border-white/25 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                  <span className="w-7 h-7 rounded-lg bg-orange-500/20 border border-orange-500/30 text-orange-300 flex items-center justify-center text-sm font-black flex-shrink-0 mt-0.5">
                    Q
                  </span>
                  {faq.q}
                </h3>
                <p className="text-white/70 leading-relaxed pl-10 text-sm md:text-base">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONCLUSION & DISCLAIMER SECTION */}
      <section className="py-20 relative overflow-hidden bg-black/40 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Conclusion</h2>
          <p className="text-white/80 text-base md:text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
            An asphalt tonnage calculator gives you an accurate planning number in seconds. Measure the paved area carefully, use the compacted layer thickness, confirm the mix density with your asphalt supplier, and include a small allowance for site variations. Always verify whether your supplier's quote is in US short tons or metric tonnes before placing your order.
          </p>

          <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-xs text-white/50 max-w-2xl mx-auto">
            <strong>Disclaimer:</strong> Results provided by this calculator are estimates for project planning and budgeting purposes only. Actual job requirements depend on compaction, subgrade grade variations, and plant mix specs. Always confirm exact material quantities with a qualified paving contractor or asphalt supplier prior to ordering.
          </div>
        </div>
      </section>

      {/* RELATED TOOLS NAV GRID */}
      <section className="py-24 relative overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-500/30 text-teal-100 px-5 py-2 rounded-full text-sm font-bold mb-4">
              <Zap size={16} />
              More Engineering Calculators
            </div>
            <h2 className="text-4xl font-black text-white mb-4">Explore Related Tools</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {RELATED_TOOLS.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className={`bg-gradient-to-br ${tool.color} border ${tool.border} rounded-2xl p-6 group hover:-translate-y-1 transition-all duration-300 hover:shadow-xl`}
              >
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
