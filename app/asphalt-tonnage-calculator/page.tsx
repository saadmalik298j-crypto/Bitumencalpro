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
} from "lucide-react";

export const metadata: Metadata = {
  title: "Asphalt Tonnage Calculator | Sq Ft or Sq M to Tons",
  description:
    "Calculate how many tons of asphalt you need from area and thickness. Free tool for driveways, parking lots and roads, in US tons or metric tonnes.",
  keywords: [
    "asphalt tonnage calculator",
    "asphalt weight calculator",
    "how many tons of asphalt do I need",
    "asphalt quantity estimator",
    "HMA tonnage",
    "pavement tons calculator",
    "sq ft to tons of asphalt",
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
    description: "Calculate how many tons of asphalt you need from area and thickness.",
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

      {/* HERO SECTION */}
      <div className="relative pt-20 pb-20 overflow-hidden">
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

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6 leading-tight">
            Asphalt Tonnage Calculator <br />
            <span className="bg-gradient-to-r from-orange-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
              Sq Ft or Sq M to Tons
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-white/80 max-w-3xl leading-relaxed mb-6">
            Calculate how many tons of asphalt you need from area and thickness. Free tool for driveways, parking lots and roads, in US tons or metric tonnes.
          </p>

          <div className="bg-slate-900/60 border border-orange-500/30 rounded-2xl p-5 max-w-3xl text-slate-300 text-base leading-relaxed space-y-3 shadow-lg">
            <p>
              Order 10% too little asphalt and the crew leaves a strip of the driveway unpaved. Order 10% too much and you pay for tons nobody can use, because hot mix can't be stored for next week.
            </p>
            <p>
              This asphalt tonnage calculator gives you the weight of asphalt a job needs from its area, thickness and density. It works in feet, yards or metres and returns US tons or metric tonnes. Below the tool you'll find the formulas, worked examples, ready-made charts and the mistakes behind most ordering errors.
            </p>
            <p className="font-semibold text-teal-300">
              Every number on this page can be checked with a pocket calculator.
            </p>
          </div>
        </div>
      </div>

      {/* CALCULATOR WIDGET */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 mb-20">
        <AsphaltTonnageCalculator />
      </div>

      {/* DETAILED GUIDANCE & RICH CONTENT */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-16 text-slate-200">

        {/* HOW TO USE */}
        <section className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 shadow-xl space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
            <Info className="text-orange-400" size={28} />
            How to Use the Asphalt Tonnage Calculator
          </h2>
          <ol className="space-y-4 list-decimal list-inside text-slate-300 leading-relaxed">
            <li><strong>Enter dimensions:</strong> Enter the length and width of the paved area. If you already know the area, type it in directly.</li>
            <li><strong>Enter thickness:</strong> Enter the thickness of the finished, compacted layer, in whatever unit you measured.</li>
            <li><strong>Check density:</strong> Check the density. The default is 145 lb/ft³ (about 2,320 kg/m³), a common planning value for compacted hot mix asphalt. Replace it with your supplier's number if you have one.</li>
            <li><strong>Read results:</strong> Pick tons or tonnes and read the total weight.</li>
          </ol>
          <div className="bg-slate-800/80 border-l-4 border-teal-400 p-4 rounded-r-xl text-sm text-slate-300">
            <strong>Working on more than one layer?</strong> Run the tool once per layer and add the results. Layers often have different thicknesses and sometimes different densities.
          </div>
        </section>

        {/* FORMULAS */}
        <section className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 shadow-xl space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
            <Zap className="text-teal-400" size={28} />
            The Asphalt Tonnage Formula
          </h2>
          <p className="text-slate-300 leading-relaxed">
            The calculation has three steps: find the volume, convert it to weight, then convert the weight to tons or tonnes.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 space-y-3">
              <h3 className="text-lg font-bold text-orange-300">US Imperial Formula</h3>
              <div className="bg-slate-950/80 font-mono text-sm p-4 rounded-xl text-orange-200 border border-slate-800">
                Tons = Area (ft²) × Thickness (ft) × Density (lb/ft³) ÷ 2,000
              </div>
              <p className="text-xs text-slate-400">Convert thickness to feet first (inches ÷ 12).</p>
            </div>

            <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 space-y-3">
              <h3 className="text-lg font-bold text-teal-300">Metric Formula</h3>
              <div className="bg-slate-950/80 font-mono text-sm p-4 rounded-xl text-teal-200 border border-slate-800">
                Tonnes = Area (m²) × Thickness (m) × Density (kg/m³) ÷ 1,000
              </div>
              <p className="text-xs text-slate-400">Convert thickness to metres first (mm ÷ 1,000).</p>
            </div>
          </div>

          <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-4 text-amber-200 text-sm flex items-start gap-3">
            <AlertTriangle className="shrink-0 mt-0.5" size={20} />
            <p>
              <strong>Critical Step:</strong> Convert thickness before you multiply. Divide inches by 12 to get feet. Divide millimetres by 1,000 to get metres. Skipping this step gives results that are 12 or 1,000 times too high.
            </p>
          </div>

          <h3 className="text-xl font-bold text-white pt-4">Site Constants at 145 lb/ft³</h3>
          <p className="text-slate-300 text-sm">At 145 lb/ft³, a few constants save time on site:</p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-800/60 text-slate-300">
                  <th className="p-3 font-semibold">Quantity</th>
                  <th className="p-3 font-semibold">Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                <tr><td className="p-3">1 inch of asphalt, per ft²</td><td className="p-3 font-mono text-teal-300">12.08 lb</td></tr>
                <tr><td className="p-3">1 inch of asphalt, per yd²</td><td className="p-3 font-mono text-teal-300">108.75 lb (most estimators round to 110)</td></tr>
                <tr><td className="p-3">2 inches of asphalt, per ft²</td><td className="p-3 font-mono text-teal-300">24.2 lb</td></tr>
                <tr><td className="p-3">1 yd³ of compacted asphalt</td><td className="p-3 font-mono text-teal-300">about 1.96 tons</td></tr>
                <tr><td className="p-3">1 m² at 50 mm (2,350 kg/m³)</td><td className="p-3 font-mono text-teal-300">117.5 kg</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* WORKED EXAMPLES */}
        <section className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 shadow-xl space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
            <BookOpen className="text-orange-400" size={28} />
            Worked Examples
          </h2>

          <div className="grid gap-6">
            <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-6 space-y-2">
              <h3 className="text-lg font-bold text-white">Example 1: Driveway, 2 inches</h3>
              <p className="text-slate-300 text-sm">A driveway is 12 ft × 50 ft, 2 in thick, at 145 lb/ft³.</p>
              <ul className="text-sm text-slate-300 space-y-1 font-mono pt-2">
                <li>Area: 12 × 50 = 600 ft²</li>
                <li>Volume: 600 × (2 ÷ 12) = 100 ft³</li>
                <li>Weight: 100 × 145 = 14,500 lb</li>
                <li className="text-teal-300 font-bold">Tons: 14,500 ÷ 2,000 = 7.25 tons (Order ~7.61 tons with 5% extra)</li>
              </ul>
            </div>

            <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-6 space-y-2">
              <h3 className="text-lg font-bold text-white">Example 2: Driveway with a Turnaround, 3 inches</h3>
              <p className="text-slate-300 text-sm">A strip measures 10 ft × 40 ft. A turnaround pad measures 20 ft × 20 ft.</p>
              <ul className="text-sm text-slate-300 space-y-1 font-mono pt-2">
                <li>Area: 400 + 400 = 800 ft²</li>
                <li>Volume: 800 × 0.25 = 200 ft³</li>
                <li>Weight: 200 × 145 = 29,000 lb</li>
                <li className="text-teal-300 font-bold">Tons: 14.5 tons (or ~15.2 tons with 5% extra)</li>
              </ul>
            </div>

            <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-6 space-y-2">
              <h3 className="text-lg font-bold text-white">Example 3: Parking Lot, 3 inches</h3>
              <p className="text-slate-300 text-sm">The lot is 60 ft × 120 ft.</p>
              <ul className="text-sm text-slate-300 space-y-1 font-mono pt-2">
                <li>Area: 7,200 ft²</li>
                <li>Volume: 7,200 × 0.25 = 1,800 ft³</li>
                <li>Weight: 1,800 × 145 = 261,000 lb</li>
                <li className="text-teal-300 font-bold">Tons: 130.5 tons (or ~137 tons with 5% extra)</li>
              </ul>
              <p className="text-xs text-slate-400 pt-2 italic">Ask your supplier about truck capacity before you settle on the final number, since loads come in fixed sizes.</p>
            </div>

            <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-6 space-y-2">
              <h3 className="text-lg font-bold text-white">Example 4: Metric Car Park, 50 mm</h3>
              <p className="text-slate-300 text-sm">The area is 200 m² and density is 2,350 kg/m³.</p>
              <ul className="text-sm text-slate-300 space-y-1 font-mono pt-2">
                <li>Volume: 200 × 0.05 = 10 m³</li>
                <li>Weight: 10 × 2,350 = 23,500 kg</li>
                <li className="text-teal-300 font-bold">Result: 23.5 tonnes (about 25.9 US tons)</li>
              </ul>
            </div>

            <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-6 space-y-2">
              <h3 className="text-lg font-bold text-white">Example 5: Square Yards Shortcut</h3>
              <p className="text-slate-300 text-sm">An area is 100 yd² at 3 in thick.</p>
              <ul className="text-sm text-slate-300 space-y-1 font-mono pt-2">
                <li>100 × 3 × 110 lb = 33,000 lb</li>
                <li className="text-teal-300 font-bold">Result: about 16.5 tons</li>
              </ul>
              <p className="text-xs text-slate-400 pt-2">The exact figure at 145 lb/ft³ is 16.3 tons. The shortcut runs slightly high, which is fine for a first estimate.</p>
            </div>

            <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-6 space-y-2">
              <h3 className="text-lg font-bold text-white">Example 6: Two Layers (Binder + Wearing)</h3>
              <p className="text-slate-300 text-sm">A 10,000 ft² road section gets a 3 in binder course and a 1.5 in surface course.</p>
              <ul className="text-sm text-slate-300 space-y-1 font-mono pt-2">
                <li>Binder: 10,000 × 0.25 × 145 ÷ 2,000 = 181.25 tons</li>
                <li>Surface: 10,000 × 0.125 × 145 ÷ 2,000 = 90.63 tons</li>
                <li className="text-teal-300 font-bold">Total: about 271.9 tons</li>
              </ul>
            </div>
          </div>
        </section>

        {/* HOW TO MEASURE ODD-SHAPED AREAS */}
        <section className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 shadow-xl space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
            <Layers className="text-teal-400" size={28} />
            How to Measure Odd-Shaped Areas
          </h2>
          <p className="text-slate-300 leading-relaxed">
            Split the surface into simple shapes, find each area, and add them together.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            <div className="bg-slate-800/70 p-4 rounded-xl border border-slate-700">
              <strong className="text-white">Rectangle:</strong> length × width
            </div>
            <div className="bg-slate-800/70 p-4 rounded-xl border border-slate-700">
              <strong className="text-white">Triangle:</strong> ½ × base × height
            </div>
            <div className="bg-slate-800/70 p-4 rounded-xl border border-slate-700">
              <strong className="text-white">Circle:</strong> π × radius² (use 3.1416)
            </div>
            <div className="bg-slate-800/70 p-4 rounded-xl border border-slate-700">
              <strong className="text-white">Trapezoid:</strong> ½ × (side a + side b) × height
            </div>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed">
            <strong>Example:</strong> Take a circular turnaround with a 30 ft diameter. The radius is 15 ft, so the area is 3.1416 × 225 = 706.9 ft². At 2 in thick, the volume is 117.8 ft³. Multiply by 145 and you get 17,082 lb, or 8.54 tons.
          </p>
          <p className="text-slate-400 text-xs italic">
            Measure the paved surface only. Leave out curbs, planting beds and any strip that stays unpaved. On a long road, measure the width at several points and use the average.
          </p>
        </section>

        {/* TONNAGE CHARTS */}
        <section className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 shadow-xl space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
            <BarChart3 className="text-orange-400" size={28} />
            Asphalt Tonnage Charts
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-orange-300 mb-3">US Units (145 lb/ft³)</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-slate-800 bg-slate-800/60 text-slate-300">
                      <th className="p-3 font-semibold">Thickness</th>
                      <th className="p-3 font-semibold">Tons per 1,000 ft²</th>
                      <th className="p-3 font-semibold">Area covered by 1 ton</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 text-slate-300">
                    <tr><td className="p-3">1.5 in</td><td className="p-3 font-mono">9.06</td><td className="p-3 text-teal-300">about 110 ft²</td></tr>
                    <tr><td className="p-3">2 in</td><td className="p-3 font-mono">12.08</td><td className="p-3 text-teal-300">about 83 ft²</td></tr>
                    <tr><td className="p-3">2.5 in</td><td className="p-3 font-mono">15.10</td><td className="p-3 text-teal-300">about 66 ft²</td></tr>
                    <tr><td className="p-3">3 in</td><td className="p-3 font-mono">18.13</td><td className="p-3 text-teal-300">about 55 ft²</td></tr>
                    <tr><td className="p-3">4 in</td><td className="p-3 font-mono">24.17</td><td className="p-3 text-teal-300">about 41 ft²</td></tr>
                    <tr><td className="p-3">6 in</td><td className="p-3 font-mono">36.25</td><td className="p-3 text-teal-300">about 28 ft²</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-teal-300 mb-3">Metric Units (2,350 kg/m³)</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-slate-800 bg-slate-800/60 text-slate-300">
                      <th className="p-3 font-semibold">Thickness</th>
                      <th className="p-3 font-semibold">Tonnes per 100 m²</th>
                      <th className="p-3 font-semibold">Area covered by 1 tonne</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 text-slate-300">
                    <tr><td className="p-3">30 mm</td><td className="p-3 font-mono">7.05</td><td className="p-3 text-teal-300">about 14.2 m²</td></tr>
                    <tr><td className="p-3">40 mm</td><td className="p-3 font-mono">9.40</td><td className="p-3 text-teal-300">about 10.6 m²</td></tr>
                    <tr><td className="p-3">50 mm</td><td className="p-3 font-mono">11.75</td><td className="p-3 text-teal-300">about 8.5 m²</td></tr>
                    <tr><td className="p-3">75 mm</td><td className="p-3 font-mono">17.63</td><td className="p-3 text-teal-300">about 5.7 m²</td></tr>
                    <tr><td className="p-3">100 mm</td><td className="p-3 font-mono">23.50</td><td className="p-3 text-teal-300">about 4.3 m²</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-xs text-slate-400 italic">
              If your density differs from the table, scale the result. A mix at 140 lb/ft³ weighs about 3.4% less than the 145 lb/ft³ figures shown.
            </p>
          </div>
        </section>

        {/* WHAT CHANGES THE TONNAGE */}
        <section className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 shadow-xl space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
            <Layers className="text-orange-400" size={28} />
            What Changes the Tonnage
          </h2>
          <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
            <p>
              <strong className="text-white">Thickness:</strong> Weight rises in direct proportion to thickness. Doubling the thickness doubles the tonnage. Small errors add up: a 2-inch layer that averages 2.25 inches uses 12.5% more asphalt than planned. Residential driveways commonly get 2 to 3 inches over a compacted base. Parking lots and roads often need more. Your contractor or local specification sets the real figure, and our <Link href="/blog" className="text-teal-300 hover:underline font-semibold">asphalt layer thickness guide</Link> lists typical depths.
            </p>
            <p>
              <strong className="text-white">Density:</strong> Compacted hot mix commonly falls between 140 and 150 lb/ft³ (about 2,240 to 2,400 kg/m³). Heavier stone gives a heavier mix. Open-graded mixes have more air voids and weigh less. At 140 lb/ft³ the 7.25-ton driveway from Example 1 drops to 7.0 tons. At 150 lb/ft³ it rises to 7.5 tons.
            </p>
            <p>
              <strong className="text-white">Base condition:</strong> A dipped, rutted or patchy base takes extra material to reach the planned thickness. Crowns and drainage slopes can shift the quantity a little compared with a flat calculation.
            </p>
            <p>
              <strong className="text-white">Compaction:</strong> Asphalt is placed loose and rolled down. Compaction shrinks the volume of the mix, and the weight stays the same. This calculator uses compacted thickness, so the result is the weight needed for the finished layer. Thin layers also have practical limits. A commonly cited guideline is a thickness of at least 2 to 3 times the largest stone size in the mix. Your supplier can confirm the right mix for the depth you plan.
            </p>
            <p>
              <strong className="text-white">Edges and transitions:</strong> Thickened edges, aprons and tie-ins to existing pavement add area and depth. Include them in your measurements.
            </p>
          </div>
        </section>

        {/* HOW MUCH EXTRA & TONS VS TONNES */}
        <div className="grid md:grid-cols-2 gap-8">
          <section className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 shadow-xl space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">How Much Extra to Order</h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Many contractors add about 5% for edges, uneven spots and small losses. A rough base can push that higher.
            </p>
            <p className="text-slate-300 text-sm leading-relaxed">
              Plants sell hot mix by the ton, often with a minimum load. Hot mix also cools on the way to site, so deliveries should match what the crew can lay. For very small repairs, cold patch sold by the bag may suit better than a hot mix load. Your supplier or paving contractor can tell you what is normal for your site.
            </p>
          </section>

          <section className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 shadow-xl space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">Tons vs Tonnes</h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              A US ton is 2,000 lb, about 907 kg. A metric tonne is 1,000 kg. One tonne equals 1.1023 US tons, so 100 tonnes is about 110.2 tons, a 10% gap.
            </p>
            <p className="text-amber-200 text-sm leading-relaxed bg-amber-500/10 p-3 rounded-xl border border-amber-500/20">
              Confirm which unit your quote uses before you order. A quote in tonnes read as tons leaves you 10% short.
            </p>
          </section>
        </div>

        {/* FROM TONNAGE TO BITUMEN, TACK COAT AND COST */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-900/90 border border-teal-500/30 rounded-3xl p-8 shadow-xl space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
            <Zap className="text-teal-400" size={28} />
            From Tonnage to Bitumen, Tack Coat and Cost
          </h2>
          <p className="text-slate-300 leading-relaxed">
            Asphalt mix is aggregate plus bitumen binder. At 5.5% binder, the 12.08 tons per 1,000 ft² at 2 inches contains about 0.66 tons of bitumen.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/" className="bg-slate-800/80 hover:bg-slate-800 border border-teal-500/30 p-4 rounded-2xl flex items-center justify-between group transition-all">
              <div>
                <p className="text-white font-bold group-hover:text-teal-300 transition-colors">Bitumen Calculator</p>
                <p className="text-xs text-slate-400">Get binder weight, litres, and order quantity</p>
              </div>
              <ArrowRight className="text-teal-400 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>

            <Link href="/tack-coat-calculator/" className="bg-slate-800/80 hover:bg-slate-800 border border-teal-500/30 p-4 rounded-2xl flex items-center justify-between group transition-all">
              <div>
                <p className="text-white font-bold group-hover:text-teal-300 transition-colors">Tack Coat Calculator</p>
                <p className="text-xs text-slate-400">Cover sprayed emulsion layer under each lift</p>
              </div>
              <ArrowRight className="text-teal-400 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>

            <Link href="/asphalt-driveway-cost-calculator/" className="bg-slate-800/80 hover:bg-slate-800 border border-teal-500/30 p-4 rounded-2xl flex items-center justify-between group transition-all">
              <div>
                <p className="text-white font-bold group-hover:text-teal-300 transition-colors">Driveway Cost Calculator</p>
                <p className="text-xs text-slate-400">Turn tonnage into a full project budget</p>
              </div>
              <ArrowRight className="text-teal-400 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>

            <Link href="/asphalt-millings-calculator/" className="bg-slate-800/80 hover:bg-slate-800 border border-teal-500/30 p-4 rounded-2xl flex items-center justify-between group transition-all">
              <div>
                <p className="text-white font-bold group-hover:text-teal-300 transition-colors">Millings Calculator</p>
                <p className="text-xs text-slate-400">Calculate weight math for recycled RAP material</p>
              </div>
              <ArrowRight className="text-teal-400 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </div>
        </section>

        {/* COMMON MISTAKES */}
        <section className="bg-slate-900/50 border border-red-500/20 rounded-3xl p-8 shadow-xl space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
            <AlertTriangle className="text-red-400" size={28} />
            Common Mistakes
          </h2>
          <ul className="space-y-3 text-slate-300 text-sm list-disc list-inside leading-relaxed">
            <li><strong>Skipping the thickness conversion:</strong> Inches must become feet (÷ 12), and millimetres must become metres (÷ 1,000).</li>
            <li><strong>Using binder density instead of mix density:</strong> Bitumen is about 1,030 kg/m³ and mix is about 2,350 kg/m³. The wrong choice returns less than half the true weight.</li>
            <li><strong>Rounding thickness down:</strong> Using 2 inches instead of 2.5 inches takes 20% off the order.</li>
            <li><strong>Counting unpaved areas:</strong> Curbs, beds and gaps add tons you never lay.</li>
            <li><strong>Mixing units mid-formula:</strong> Feet for length with inches for thickness gives nonsense unless you convert.</li>
            <li><strong>Reading tonnes as tons:</strong> The 10% difference becomes a shortage on site.</li>
          </ul>
        </section>

        {/* FAQS */}
        <section className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 shadow-xl space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
            <HelpCircle className="text-orange-400" size={28} />
            Frequently Asked Questions
          </h2>
          <div className="grid gap-6">
            {FAQ_DATA.map((faq, idx) => (
              <div key={idx} className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-6 space-y-2">
                <h3 className="text-lg font-bold text-white flex items-start gap-2">
                  <span className="text-orange-400 font-mono">Q.</span> {faq.q}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CONCLUSION & DISCLAIMER */}
        <section className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 shadow-xl space-y-4 text-center">
          <h2 className="text-2xl font-bold text-white">Conclusion</h2>
          <p className="text-slate-300 text-sm leading-relaxed max-w-2xl mx-auto">
            An asphalt tonnage calculator gives you a planning number in seconds. Measure the paved area carefully, use the compacted thickness, confirm the density with your supplier and add a small allowance. Then check whether the quote is in tons or tonnes before you place the order.
          </p>
          <div className="pt-4 border-t border-slate-800 text-xs text-slate-500 italic">
            Results are estimates for planning only. Confirm quantities with a qualified contractor or supplier before ordering.
          </div>
        </section>

        {/* RELATED TOOLS CARDS */}
        <section className="pt-8 space-y-6">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Layers className="text-teal-400" size={22} />
            Explore More Bitumen & Asphalt Tools
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {RELATED_TOOLS.map((tool) => (
              <Link
                key={tool.name}
                href={tool.href}
                className={`bg-gradient-to-r ${tool.color} border ${tool.border} rounded-2xl p-5 hover:scale-[1.02] transition-all group`}
              >
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-bold text-white group-hover:text-teal-300 transition-colors">{tool.name}</h4>
                  <ChevronRight className="text-white/40 group-hover:text-white transition-colors" size={18} />
                </div>
                <p className="text-xs text-slate-300">{tool.desc}</p>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
