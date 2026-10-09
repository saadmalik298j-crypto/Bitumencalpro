// app/asphalt-millings-calculator/page.tsx
import Script from "next/script";
import Link from "next/link";
import type { Metadata } from "next";
import MillingsCalculator from "./MillingsCalculator";
import {
  Layers,
  ChevronRight,
  CheckCircle2,
  HelpCircle,
  BarChart3,
  Scale,
  Ruler,
  TrendingUp,
  FileText,
  Lightbulb,
  ShieldAlert,
  Zap,
  BookOpen,
  ArrowRight,
  Info,
  Calendar,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Asphalt Millings Calculator | RAP Tons and Cubic Yards",
  description:
    "Free asphalt millings calculator. Enter area, depth and density to get tons and cubic yards of RAP for driveways, parking areas, bases and shoulders.",
  keywords: [
    "asphalt millings calculator",
    "RAP tons calculator",
    "recycled asphalt pavement calculator",
    "asphalt millings cubic yards",
    "how many tons of asphalt millings do I need",
    "RAP density calculator",
    "crushed asphalt calculator",
  ],
  alternates: { canonical: "https://bitumencalcpro.com/asphalt-millings-calculator/" },
  openGraph: {
    title: "Asphalt Millings Calculator | RAP Tons and Cubic Yards",
    description:
      "Free asphalt millings calculator. Enter area, depth and density to get tons and cubic yards of RAP for driveways, parking areas, bases and shoulders.",
    url: "https://bitumencalcpro.com/asphalt-millings-calculator/",
    siteName: "BitumenCalcPro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asphalt Millings Calculator | RAP Tons and Cubic Yards",
    description:
      "Free asphalt millings calculator. Enter area, depth and density to get tons and cubic yards of RAP for driveways, parking areas, bases and shoulders.",
  },
};

const FAQ_DATA = [
  {
    q: "How many tons of millings do I need for a driveway?",
    a: "A 12 ft × 50 ft driveway at 4 inches compacted needs about 11.2 tons at 1,800 kg/m³.",
  },
  {
    q: "How many square feet does 1 ton of millings cover?",
    a: "About 53 ft² at 4 inches compacted, 71 ft² at 3 inches and 107 ft² at 2 inches.",
  },
  {
    q: "How do I convert cubic yards of millings to tons?",
    a: "Multiply cubic yards by about 1.52 short tons per cubic yard at 1,800 kg/m³. That equals 1.38 metric tonnes per cubic yard.",
  },
  {
    q: "What density should I use for RAP?",
    a: "FHWA guidance gives 1,600 to 2,000 kg/m³ (100 to 125 lb/ft³) for compacted RAP. The calculator defaults to 1,800 kg/m³. Use your supplier's number if you have one.",
  },
  {
    q: "How deep should millings be for a driveway?",
    a: "Many suppliers recommend 3 to 4 inches compacted over a solid base. Heavier use needs more.",
  },
  {
    q: "How much loose material do I need for a 4-inch compacted layer?",
    a: "Supplier guidance often suggests spreading about 1.3 to 1.5 times the finished depth, so about 5.3 to 6 inches. Confirm with your supplier.",
  },
  {
    q: "What are asphalt millings made of?",
    a: "About 93% to 97% aggregate and 3% to 7% old asphalt binder by weight.",
  },
  {
    q: "Are millings as good as new asphalt?",
    a: "RAP suits driveways, light parking, bases and shoulders. New asphalt performs better on high-traffic surfaces.",
  },
];

export default function MillingsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Asphalt Millings Calculator",
    url: "https://bitumencalcpro.com/asphalt-millings-calculator/",
    description:
      "Free asphalt millings calculator. Enter area, depth and density to get tons and cubic yards of RAP for driveways, parking areas, bases and shoulders.",
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
        id="schema-millings-app"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Script
        id="schema-millings-faq"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO SECTION */}
      <div className="relative pt-16 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-slate-900/40 to-purple-600/10 pointer-events-none" />
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-violet-500/15 blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-purple-500/20 blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-white/50 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight size={14} />
            <span className="text-white/80">Asphalt Millings Calculator</span>
          </nav>

          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500/25 to-purple-500/15 border border-violet-500/40 text-violet-200 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-5 shadow-[0_0_20px_rgba(139,92,246,0.25)]">
            <Layers size={16} className="text-violet-400" />
            Recycled Asphalt Pavement (RAP) Estimator
          </div>

          <h1 className="hero-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-4 leading-tight">
            <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-indigo-200 bg-clip-text text-transparent">
              Asphalt Millings
            </span>{" "}
            <span className="text-white">Calculator</span>
          </h1>

          {/* CATCHY SUBTITLE */}
          <p className="text-white/90 text-lg md:text-xl font-medium max-w-3xl mb-8 leading-relaxed drop-shadow">
            Calculate exact tons, metric tonnes, and cubic yards of recycled asphalt pavement (RAP) for driveways, bases, and shoulders. Instant math in imperial & metric with custom RAP density support.
          </p>

          <div className="flex flex-wrap gap-2.5 mb-10">
            {[
              "Imperial & Metric",
              "US Tons & Cubic Yards",
              "Compacted & Loose Estimates",
              "100% Free Tool",
            ].map((b) => (
              <span
                key={b}
                className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 text-white/90 text-xs font-semibold px-3.5 py-1.5 rounded-full shadow-sm"
              >
                <CheckCircle2 size={13} className="text-teal-400" />
                {b}
              </span>
            ))}
          </div>

          {/* CALCULATOR WIDGET */}
          <div className="bg-slate-900 border border-white/15 rounded-3xl p-2 sm:p-4 shadow-2xl shadow-violet-950/20">
            <MillingsCalculator />
          </div>
        </div>
      </div>

      {/* ARTICLE CONTENT */}
      <article className="py-16 text-white/90 leading-relaxed">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 space-y-14 text-base sm:text-lg">
          {/* INTRO PARAGRAPHS */}
          <div className="space-y-5 bg-slate-800/60 border border-white/15 p-6 sm:p-8 rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/10 rounded-full blur-2xl pointer-events-none" />
          
            <p>
              A 4-inch layer of millings on a 600 ft² driveway weighs about 11.2 tons. Order 8 and the surface is thin in places. Order 14 and 3 tons sit in the yard.
            </p>
            <p>
              This asphalt millings calculator turns area, depth and density into tons or tonnes and cubic yards of recycled asphalt pavement (RAP). It works in feet and inches or in metres and millimetres. You can enter length and width, or type the area if you already know it.
            </p>
            <div className="flex items-center gap-3 bg-violet-500/15 border-l-4 border-violet-400 p-4 rounded-r-xl text-violet-200 font-semibold text-sm sm:text-base">
              <CheckCircle2 size={20} className="text-violet-400 flex-shrink-0" />
              <span>The formulas are below, so you can check any result by hand.</span>
            </div>
          </div>

          {/* WHAT ARE ASPHALT MILLINGS */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="w-10 h-10 rounded-xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center text-violet-400 font-bold">
                <Info size={20} />
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white">
                What Are Asphalt Millings?
              </h2>
            </div>
            <p>
              Asphalt millings are the material left when a milling machine grinds old asphalt off a road, parking lot or driveway. The trade calls it RAP, short for reclaimed asphalt pavement. Other names are recycled asphalt and crushed asphalt.
            </p>
            <p>
              RAP is roughly 93% to 97% aggregate and 3% to 7% old asphalt binder by weight. Particles run from about 0.3 to 1.5 inches (10 to 40 mm). RAP is free draining and not frost susceptible, and agencies use it in bases, shoulders and new asphalt mixes. Stockpiles often hold 5% to 8% moisture by weight, which matters when you order by the ton.
            </p>
          </section>

          {/* HOW TO USE */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="w-10 h-10 rounded-xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center text-violet-400 font-bold">
                <Lightbulb size={20} />
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white">
                How to Use the Asphalt Millings Calculator
              </h2>
            </div>
            <ul className="space-y-3.5 list-none pl-0">
              {[
                "Choose Imperial (feet and inches) or Metric (metres and millimetres).",
                "Choose Length × Width, or choose Enter Area Directly if you know the area.",
                "Enter the depth of the finished, compacted layer.",
                "Check the RAP density. The default is 1,800 kg/m³ (about 112.4 lb/ft³).",
                "Click Calculate Millings to get tons or tonnes and cubic yards.",
              ].map((step, idx) => (
                <li key={idx} className="flex items-start gap-3 bg-white/5 border border-white/10 p-4 rounded-xl">
                  <span className="w-7 h-7 rounded-lg bg-violet-500/20 text-violet-300 font-black text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="text-white/80">{step}</span>
                </li>
              ))}
            </ul>
            <div className="bg-slate-900/80 border border-white/10 p-5 rounded-2xl text-sm text-white/70 flex items-start gap-3 shadow-inner">
              <Zap size={18} className="text-teal-400 flex-shrink-0 mt-0.5" />
              <p>
                For an irregular area, split it into rectangles, run each one and add the results. For two layers, run the tool once per layer.
              </p>
            </div>
          </section>

          {/* FORMULAS */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="w-10 h-10 rounded-xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center text-violet-400 font-bold">
                <BarChart3 size={20} />
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white">
                Asphalt Millings Formulas
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-900/90 p-6 rounded-2xl border border-violet-500/30 shadow-xl space-y-3">
                <h3 className="text-lg font-bold text-violet-300">Imperial Units</h3>
                <div className="font-mono text-sm text-white bg-black/50 p-4 rounded-xl border border-white/10 space-y-1">
                  <p>Volume (ft³) = Area (ft²) × Depth (in) ÷ 12</p>
                  <p>Cubic yards = Volume (ft³) ÷ 27</p>
                  <p>Tons = Volume (ft³) × Density (lb/ft³) ÷ 2,000</p>
                </div>
              </div>

              <div className="bg-slate-900/90 p-6 rounded-2xl border border-teal-500/30 shadow-xl space-y-3">
                <h3 className="text-lg font-bold text-teal-300">Metric Units</h3>
                <div className="font-mono text-sm text-white bg-black/50 p-4 rounded-xl border border-white/10 space-y-1">
                  <p>Volume (m³) = Area (m²) × Depth (m)</p>
                  <p>Tonnes = Volume (m³) × Density (kg/m³) ÷ 1,000</p>
                </div>
                <p className="text-xs text-white/60">Convert depth before multiplying: millimetres ÷ 1,000 gives metres.</p>
              </div>
            </div>

            {/* Constants Table */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-white">Constants & Conversions</h3>
              <div className="overflow-x-auto bg-slate-900/80 border border-white/15 rounded-2xl shadow-xl">
                <table className="w-full text-left text-sm font-mono">
                  <thead className="bg-white/10 text-white font-sans">
                    <tr>
                      <th className="p-3.5 border-b border-white/10">Conversion</th>
                      <th className="p-3.5 border-b border-white/10">Value</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-white/80">
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="p-3.5 text-violet-300">1 yd³</td>
                      <td className="p-3.5">0.7646 m³</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="p-3.5 text-violet-300">1 short ton</td>
                      <td className="p-3.5">907.185 kg</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="p-3.5 text-violet-300">1 tonne</td>
                      <td className="p-3.5">1.1023 short tons</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="p-3.5 text-violet-300">lb/ft³ × 16.0185</td>
                      <td className="p-3.5">kg/m³</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-sm text-teal-300 font-semibold bg-teal-500/10 p-4 rounded-xl border border-teal-500/20">
              At 1,800 kg/m³, one inch of depth over 1,000 ft² weighs about 4.68 tons and fills about 3.09 yd³.
            </p>
          </section>

          {/* WHICH DENSITY SHOULD YOU USE */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="w-10 h-10 rounded-xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center text-violet-400 font-bold">
                <Scale size={20} />
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white">
                Which Density Should You Use?
              </h2>
            </div>
            <p>
              Published values depend on the source and the RAP material:
            </p>
            <ul className="space-y-2 list-disc pl-6 text-white/80">
              <li>
                <a
                  href="https://highways.dot.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-300 underline inline-flex items-center gap-1 hover:text-white font-semibold"
                >
                  FHWA Guidance <ExternalLink size={13} />
                </a>{" "}
                gives a compacted unit weight of 1,600 to 2,000 kg/m³ (100 to 125 lb/ft³), and notes that finer-crushed RAP compacts denser.
              </li>
              <li>
                A{" "}
                <a
                  href="https://www.nyc.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-300 underline inline-flex items-center gap-1 hover:text-white font-semibold"
                >
                  New York City DOT Fact Sheet <ExternalLink size={13} />
                </a>{" "}
                lists milled RAP at 120 to 140 lb/ft³.
              </li>
              <li>
                The calculator default of 1,800 kg/m³ sits squarely inside the FHWA range. Ask your supplier for a number when you can.
              </li>
            </ul>

            {/* Density comparison table */}
            <div className="overflow-x-auto bg-slate-900/80 border border-white/15 rounded-2xl shadow-xl">
              <table className="w-full text-left text-sm">
                <thead className="bg-white/10 text-white">
                  <tr>
                    <th className="p-3.5 border-b border-white/10">Density Level</th>
                    <th className="p-3.5 border-b border-white/10">kg/m³</th>
                    <th className="p-3.5 border-b border-white/10">lb/ft³</th>
                    <th className="p-3.5 border-b border-white/10">Short tons per yd³</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 text-white/80 font-mono">
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-3.5 font-bold text-white">Low</td>
                    <td className="p-3.5 text-violet-300">1,600</td>
                    <td className="p-3.5">99.9</td>
                    <td className="p-3.5">1.35</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-3.5 font-bold text-white">Default</td>
                    <td className="p-3.5 text-violet-300">1,800</td>
                    <td className="p-3.5">112.4</td>
                    <td className="p-3.5">1.52</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-3.5 font-bold text-white">High</td>
                    <td className="p-3.5 text-violet-300">2,000</td>
                    <td className="p-3.5">124.9</td>
                    <td className="p-3.5">1.69</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-white/70">
              Moisture changes the weight on the scale. At 8% moisture, a ton of delivered RAP holds about 0.92 tons of dry material. If your supplier sells by weight, ask whether the density they quote is wet or dry.
            </p>
          </section>

          {/* COMPACTED DEPTH VS LOOSE DEPTH */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="w-10 h-10 rounded-xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center text-violet-400 font-bold">
                <Ruler size={20} />
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white">
                Compacted Depth vs Loose Depth
              </h2>
            </div>
            <p>
              Weight stays the same before and after compaction. Volume changes. A layer spread loose shrinks when you roll it.
            </p>
            <p>
              The calculator estimates the weight and volume of the finished, compacted layer. Use the depth you want after rolling.
            </p>
            <p className="bg-slate-900/80 p-5 rounded-2xl border border-white/10 text-white/80">
              For spreading, supplier guidance often suggests about 1.3 to 1.5 times the finished depth. A 4-inch compacted layer then needs about 5.3 to 6 inches spread loose. Confirm the figure with your supplier, because gradation, moisture and equipment all change it. Cubic yards of loose material delivered will exceed the compacted cubic yards the calculator shows.
            </p>
          </section>

          {/* WORKED EXAMPLES */}
          <section className="space-y-8">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="w-10 h-10 rounded-xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center text-violet-400 font-bold">
                <FileText size={20} />
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white">
                Worked Examples
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* EXAMPLE 1 */}
              <div className="bg-slate-900/60 border border-white/15 p-6 rounded-2xl space-y-3 hover:border-violet-500/40 transition-all shadow-xl">
                <span className="text-xs font-mono bg-violet-500/20 text-violet-300 px-2.5 py-1 rounded-md font-bold">Example 1</span>
                <h3 className="text-xl font-bold text-white">Driveway, 4 inches compacted</h3>
                <p className="text-sm text-white/80">The driveway is 12 ft × 50 ft. Density is 1,800 kg/m³.</p>
                <div className="font-mono text-xs sm:text-sm text-white/70 space-y-1 bg-black/50 p-4 rounded-xl border border-white/5">
                  <p>Area: 600 ft²</p>
                  <p>Volume: 600 × (4 ÷ 12) = 200 ft³, or 7.41 yd³</p>
                  <p>Weight: 200 × 112.4 = 22,474 lb</p>
                  <p className="text-violet-300 font-bold">Result: 11.24 tons (10.19 tonnes)</p>
                </div>
                <p className="text-xs text-white/70">Spread about 5.3 to 6 inches loose to reach 4 inches compacted.</p>
              </div>

              {/* EXAMPLE 2 */}
              <div className="bg-slate-900/60 border border-white/15 p-6 rounded-2xl space-y-3 hover:border-violet-500/40 transition-all shadow-xl">
                <span className="text-xs font-mono bg-violet-500/20 text-violet-300 px-2.5 py-1 rounded-md font-bold">Example 2</span>
                <h3 className="text-xl font-bold text-white">Driveway with a parking pad</h3>
                <p className="text-sm text-white/80">A strip is 10 ft × 100 ft. A pad is 30 ft × 30 ft. Depth is 4 inches compacted.</p>
                <div className="font-mono text-xs sm:text-sm text-white/70 space-y-1 bg-black/50 p-4 rounded-xl border border-white/5">
                  <p>Area: 1,000 + 900 = 1,900 ft²</p>
                  <p>Volume: 1,900 × (4 ÷ 12) = 633.3 ft³, or 23.46 yd³</p>
                  <p className="text-violet-300 font-bold">Result: 35.59 tons</p>
                </div>
              </div>

              {/* EXAMPLE 3 */}
              <div className="bg-slate-900/60 border border-white/15 p-6 rounded-2xl space-y-3 hover:border-violet-500/40 transition-all shadow-xl">
                <span className="text-xs font-mono bg-violet-500/20 text-violet-300 px-2.5 py-1 rounded-md font-bold">Example 3</span>
                <h3 className="text-xl font-bold text-white">Metric parking area</h3>
                <p className="text-sm text-white/80">The area is 200 m². Depth is 100 mm. Density is 1,800 kg/m³.</p>
                <div className="font-mono text-xs sm:text-sm text-white/70 space-y-1 bg-black/50 p-4 rounded-xl border border-white/5">
                  <p>Volume: 200 × 0.10 = 20 m³, or 26.16 yd³</p>
                  <p className="text-violet-300 font-bold">Result: 36 tonnes (about 39.7 short tons)</p>
                </div>
              </div>

              {/* EXAMPLE 4 */}
              <div className="bg-slate-900/60 border border-white/15 p-6 rounded-2xl space-y-3 hover:border-violet-500/40 transition-all shadow-xl">
                <span className="text-xs font-mono bg-violet-500/20 text-violet-300 px-2.5 py-1 rounded-md font-bold">Example 4</span>
                <h3 className="text-xl font-bold text-white">Road shoulder</h3>
                <p className="text-sm text-white/80">A 2 km shoulder is 1.5 m wide and 150 mm deep.</p>
                <div className="font-mono text-xs sm:text-sm text-white/70 space-y-1 bg-black/50 p-4 rounded-xl border border-white/5">
                  <p>Area: 2,000 × 1.5 = 3,000 m²</p>
                  <p>Volume: 3,000 × 0.15 = 450 m³</p>
                  <p className="text-violet-300 font-bold">Result: 810 tonnes</p>
                </div>
              </div>

              {/* EXAMPLE 5 */}
              <div className="bg-slate-900/60 border border-white/15 p-6 rounded-2xl space-y-3 hover:border-violet-500/40 transition-all shadow-xl">
                <span className="text-xs font-mono bg-violet-500/20 text-violet-300 px-2.5 py-1 rounded-md font-bold">Example 5</span>
                <h3 className="text-xl font-bold text-white">Density changes the order</h3>
                <p className="text-sm text-white/80">Take the driveway from Example 1 (200 ft³ of compacted millings):</p>
                <div className="font-mono text-xs sm:text-sm text-white/70 space-y-1 bg-black/50 p-4 rounded-xl border border-white/5">
                  <p>1,600 kg/m³: 9.99 tons</p>
                  <p>1,800 kg/m³: 11.24 tons</p>
                  <p>2,000 kg/m³: 12.49 tons</p>
                </div>
                <p className="text-xs text-white/70">The spread is about 11% either way. A supplier&apos;s density figure removes that uncertainty.</p>
              </div>

              {/* EXAMPLE 6 */}
              <div className="bg-slate-900/60 border border-white/15 p-6 rounded-2xl space-y-3 hover:border-violet-500/40 transition-all shadow-xl">
                <span className="text-xs font-mono bg-violet-500/20 text-violet-300 px-2.5 py-1 rounded-md font-bold">Example 6</span>
                <h3 className="text-xl font-bold text-white">Cubic yards to tons</h3>
                <p className="text-sm text-white/80">An order of 10 yd³ at 1,800 kg/m³ weighs 10 × 1.52 = 15.2 short tons. The same order at 1,600 kg/m³ weighs 13.5 tons.</p>
              </div>
            </div>
          </section>

          {/* ASPHALT MILLINGS CHARTS */}
          <section className="space-y-8">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="w-10 h-10 rounded-xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center text-violet-400 font-bold">
                <BarChart3 size={20} />
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white">
                Asphalt Millings Charts
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* US CHART */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-violet-300">US units (1,800 kg/m³, 112.4 lb/ft³)</h3>
                <div className="overflow-x-auto bg-slate-900/80 border border-white/15 rounded-2xl shadow-xl">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-white/10 text-white">
                      <tr>
                        <th className="p-3.5 border-b border-white/10">Compacted depth</th>
                        <th className="p-3.5 border-b border-white/10">Tons / 1,000 ft²</th>
                        <th className="p-3.5 border-b border-white/10">yd³ / 1,000 ft²</th>
                        <th className="p-3.5 border-b border-white/10">Area / 1 ton</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10 text-white/80 font-mono">
                      <tr className="hover:bg-white/5 transition-colors">
                        <td className="p-3.5 text-white font-bold">2 in</td>
                        <td className="p-3.5 text-violet-300">9.36</td>
                        <td className="p-3.5">6.17</td>
                        <td className="p-3.5">about 107 ft²</td>
                      </tr>
                      <tr className="hover:bg-white/5 transition-colors">
                        <td className="p-3.5 text-white font-bold">3 in</td>
                        <td className="p-3.5 text-violet-300">14.05</td>
                        <td className="p-3.5">9.26</td>
                        <td className="p-3.5">about 71 ft²</td>
                      </tr>
                      <tr className="hover:bg-white/5 transition-colors">
                        <td className="p-3.5 text-white font-bold">4 in</td>
                        <td className="p-3.5 text-violet-300">18.73</td>
                        <td className="p-3.5">12.35</td>
                        <td className="p-3.5">about 53 ft²</td>
                      </tr>
                      <tr className="hover:bg-white/5 transition-colors">
                        <td className="p-3.5 text-white font-bold">6 in</td>
                        <td className="p-3.5 text-violet-300">28.09</td>
                        <td className="p-3.5">18.52</td>
                        <td className="p-3.5">about 36 ft²</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* METRIC CHART */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-violet-300">Metric units (1,800 kg/m³)</h3>
                <div className="overflow-x-auto bg-slate-900/80 border border-white/15 rounded-2xl shadow-xl">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-white/10 text-white">
                      <tr>
                        <th className="p-3.5 border-b border-white/10">Compacted depth</th>
                        <th className="p-3.5 border-b border-white/10">Tonnes / 100 m²</th>
                        <th className="p-3.5 border-b border-white/10">Area / 1 tonne</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10 text-white/80 font-mono">
                      <tr className="hover:bg-white/5 transition-colors">
                        <td className="p-3.5 text-white font-bold">50 mm</td>
                        <td className="p-3.5 text-violet-300">9.0</td>
                        <td className="p-3.5">about 11.1 m²</td>
                      </tr>
                      <tr className="hover:bg-white/5 transition-colors">
                        <td className="p-3.5 text-white font-bold">75 mm</td>
                        <td className="p-3.5 text-violet-300">13.5</td>
                        <td className="p-3.5">about 7.4 m²</td>
                      </tr>
                      <tr className="hover:bg-white/5 transition-colors">
                        <td className="p-3.5 text-white font-bold">100 mm</td>
                        <td className="p-3.5 text-violet-300">18.0</td>
                        <td className="p-3.5">about 5.6 m²</td>
                      </tr>
                      <tr className="hover:bg-white/5 transition-colors">
                        <td className="p-3.5 text-white font-bold">150 mm</td>
                        <td className="p-3.5 text-violet-300">27.0</td>
                        <td className="p-3.5">about 3.7 m²</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <p className="text-sm text-white/70">
              For a different density, scale the result. A 1,600 kg/m³ material weighs about 11% less than these figures.
            </p>
          </section>

          {/* COMMON USES AND DEPTHS */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="w-10 h-10 rounded-xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center text-violet-400 font-bold">
                <TrendingUp size={20} />
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white">
                Common Uses and Depths
              </h2>
            </div>
            <div className="space-y-4">
              {[
                { title: "Driveways.", text: "Many suppliers commonly recommend 3 to 4 inches compacted over a solid base. Compaction is what holds the surface together, so plan for a roller or plate compactor." },
                { title: "Parking areas.", text: "Light-duty parking commonly uses 4 inches or more. Heavier use needs more depth." },
                { title: "Road base and sub-base.", text: "RAP appears in base courses and sub-bases, often blended with natural aggregate. Follow the project specification for depth and blend." },
                { title: "Shoulders and farm roads.", text: "RAP reduces dust and erosion on unpaved shoulders and access tracks." },
                { title: "Fill and grading.", text: "Agencies report uses such as ramps, backfill and trench work. Some agencies advise caution near water and drainage, so check local rules." },
              ].map((use, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                  <p>
                    <strong className="text-violet-300">{use.title}</strong> {use.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* WHAT CHANGES THE QUANTITY */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-4xl font-black text-white border-b border-white/10 pb-3">
              What Changes the Quantity
            </h2>
            <ul className="space-y-3 list-disc pl-6 text-white/80">
              <li><strong>Depth.</strong> Weight rises in direct proportion to depth. A 4-inch layer that averages 4.5 inches uses 12.5% more material.</li>
              <li><strong>Density.</strong> Gradation, binder content and moisture all move it. See the density table above.</li>
              <li><strong>Moisture.</strong> Wet RAP weighs more per cubic foot, and a ton of it contains less dry material.</li>
              <li><strong>Base condition.</strong> Low spots and ruts take extra material to reach the planned depth.</li>
              <li><strong>Edges.</strong> Add width where you taper at the edge or tie into a street.</li>
              <li><strong>Waste.</strong> Allow a margin for uneven ground and spillage. Your supplier or contractor can tell you what is normal.</li>
            </ul>
          </section>

          {/* MILLINGS VS NEW ASPHALT */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="w-10 h-10 rounded-xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center text-violet-400 font-bold">
                <Zap size={20} />
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white">
                Millings vs New Asphalt
              </h2>
            </div>
            <p>
              RAP works well on driveways, light parking areas, bases and shoulders. New hot mix asphalt uses fresh binder and a controlled gradation, which gives better strength and smoothness under heavy traffic. For new asphalt weights, use the{" "}
              <Link href="/asphalt-tonnage-calculator" className="text-teal-300 underline font-semibold">
                asphalt tonnage calculator
              </Link>
              .
            </p>
            <p>
              The old binder in RAP is not counted as new binder in a mix design. To work out binder in new asphalt, use the{" "}
              <Link href="/" className="text-teal-300 underline font-semibold">
                bitumen calculator
              </Link>
              . If you want to bond a new layer over milled pavement, the{" "}
              <Link href="/tack-coat-calculator" className="text-teal-300 underline font-semibold">
                tack coat calculator
              </Link>{" "}
              gives the emulsion quantity. For budgets, see the{" "}
              <Link href="/asphalt-driveway-cost-calculator" className="text-teal-300 underline font-semibold">
                asphalt driveway cost calculator
              </Link>
              .
            </p>
          </section>

          {/* COMMON MISTAKES */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="w-10 h-10 rounded-xl bg-red-500/20 border border-red-500/30 flex items-center justify-center text-red-400 font-bold">
                <ShieldAlert size={20} />
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white">
                Common Mistakes
              </h2>
            </div>
            <ul className="space-y-3.5 list-none pl-0">
              {[
                { title: "Entering the loose depth.", text: "The calculator expects the finished, compacted depth." },
                { title: "Entering lb/ft³ without unit check.", text: "The field uses kg/m³. Typing 112 yields results 16 times too low (our tool auto-detects values under 300 to protect you)." },
                { title: "Mixing tons and tonnes.", text: "One tonne is 1.1023 US tons, a 10% gap." },
                { title: "Skipping moisture.", text: "Ask whether your supplier's density is wet or dry." },
                { title: "Measuring only the main strip.", text: "Include pads, aprons and turnarounds." },
                { title: "Ordering by cubic yard without checking the basis.", text: "Loose and compacted cubic yards differ by 30% or more." },
              ].map((m, idx) => (
                <li key={idx} className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">✕</span>
                  <p className="text-sm sm:text-base">
                    <strong className="text-white">{m.title}</strong> {m.text}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          {/* FAQS */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="w-10 h-10 rounded-xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center text-violet-400 font-bold">
                <HelpCircle size={20} />
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-4">
              {FAQ_DATA.map((faq, i) => (
                <div key={i} className="bg-slate-900/80 border border-white/15 p-6 rounded-2xl space-y-2 hover:border-white/30 transition-colors">
                  <h3 className="font-bold text-white text-lg flex items-center gap-2">
                    <span className="text-violet-400 font-mono">Q:</span> {faq.q}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed pl-6">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CONCLUSION & DISCLAIMER */}
          <section className="space-y-4 pt-6 border-t border-white/10">
            <h2 className="text-2xl sm:text-4xl font-black text-white">Conclusion</h2>
            <p>
              An asphalt millings calculator gives you a planning weight in seconds. Enter the compacted depth, check the density with your supplier and allow for moisture and edges. Then confirm whether your quote is in tons, tonnes or loose cubic yards before you order.
            </p>
            <p className="text-sm italic text-white/60 bg-black/50 p-4 rounded-xl border border-white/10">
              Results are estimates for planning only. Confirm quantities and depths with your supplier or contractor.
            </p>
          </section>
        </div>
      </article>
    </>
  );
}
