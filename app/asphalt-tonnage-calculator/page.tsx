// app/asphalt-tonnage-calculator/page.tsx
import Script from "next/script";
import Link from "next/link";
import type { Metadata } from "next";
import AsphaltTonnageCalculator from "./AsphaltTonnageCalculator";
import { ChevronRight } from "lucide-react";

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

      {/* HERO SECTION WITH CALCULATOR WIDGET */}
      <div className="relative pt-20 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-teal-600/10 pointer-events-none" />
        <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-orange-500/10 blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-[480px] h-[480px] rounded-full bg-teal-500/20 blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-white/50 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight size={14} />
            <span className="text-white/80">Asphalt Tonnage Calculator</span>
          </nav>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-6 leading-tight">
            Asphalt Tonnage Calculator
          </h1>

          {/* CALCULATOR WIDGET AT TOP */}
          <AsphaltTonnageCalculator />
        </div>
      </div>

      {/* BELOW CONTENT SECTION (EXACT TEXT) */}
      <article className="py-16 text-white/90 leading-relaxed">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 space-y-12 text-base sm:text-lg">
          {/* INTRO PARAGRAPHS */}
          <div className="space-y-5 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-6 md:p-8 rounded-3xl shadow-xl">
            <p>
              Order 10% too little asphalt and the crew leaves a strip of the driveway unpaved. Order 10% too much and you pay for tons nobody can use, because hot mix can't be stored for next week.
            </p>
            <p>
              This asphalt tonnage calculator gives you the weight of asphalt a job needs from its area, thickness, and density. It works in feet, yards or metres and returns US tons or metric tonnes. Below the tool you'll find the formulas, worked examples, ready-made charts and the mistakes behind most ordering errors.
            </p>
            <p className="font-semibold text-teal-300 border-l-4 border-teal-400 pl-4 py-1">
              Every number on this page can be checked with a pocket calculator.
            </p>
          </div>

          {/* HOW TO USE */}
          <section className="space-y-6">
            <h2 className="text-2xl sm:text-4xl font-black text-white border-b border-white/10 pb-3">
              How to Use the Asphalt Tonnage Calculator
            </h2>
            <ul className="space-y-4 list-disc pl-6 text-white/80">
              <li>
                Enter the length and width of the paved area. If you already know the area, type it in directly.
              </li>
              <li>
                Enter the thickness of the finished, compacted layer, in whatever unit you measured.
              </li>
              <li>
                Check the density. The default is 145 lb/ft³ (about 2,320 kg/m³), a common planning value for compacted hot mix asphalt. Replace it with your supplier's number if you have one.
              </li>
              <li>
                Pick tons or tonnes and read the total weight.
              </li>
            </ul>
            <p className="text-sm bg-black/40 p-4 rounded-xl border border-white/10 text-white/70">
              Working on more than one layer? Run the tool once per layer and add the results. Layers often have different thicknesses and sometimes different densities.
            </p>
          </section>

          {/* THE FORMULA */}
          <section className="space-y-6">
            <h2 className="text-2xl sm:text-4xl font-black text-white border-b border-white/10 pb-3">
              The Asphalt Tonnage Formula
            </h2>
            <p>
              The calculation has three steps: find the volume, convert it to weight, then convert the weight to tons or tonnes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="bg-black/40 p-6 rounded-2xl border border-orange-500/30">
                <h3 className="text-lg font-bold text-orange-300 mb-2">US units</h3>
                <p className="font-mono text-sm sm:text-base text-white">
                  Tons = Area (ft²) × Thickness (ft) × Density (lb/ft³) ÷ 2,000
                </p>
              </div>

              <div className="bg-black/40 p-6 rounded-2xl border border-teal-500/30">
                <h3 className="text-lg font-bold text-teal-300 mb-2">Metric units</h3>
                <p className="font-mono text-sm sm:text-base text-white">
                  Tonnes = Area (m²) × Thickness (m) × Density (kg/m³) ÷ 1,000
                </p>
              </div>
            </div>

            <p>
              Convert thickness before you multiply. Divide inches by 12 to get feet. Divide millimetres by 1,000 to get metres. Skipping this step gives results that are 12 or 1,000 times too high.
            </p>

            <div className="space-y-4">
              <p className="font-semibold text-white">At 145 lb/ft³, a few constants save time on site:</p>
              <div className="overflow-x-auto bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl">
                <table className="w-full text-left text-sm sm:text-base">
                  <thead className="bg-white/10 text-white">
                    <tr>
                      <th className="p-4 font-bold border-b border-white/10">Quantity</th>
                      <th className="p-4 font-bold border-b border-white/10">Value</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-white/80">
                    <tr>
                      <td className="p-4">1 inch of asphalt, per ft²</td>
                      <td className="p-4 font-mono text-orange-300">12.08 lb</td>
                    </tr>
                    <tr>
                      <td className="p-4">1 inch of asphalt, per yd²</td>
                      <td className="p-4 font-mono text-orange-300">108.75 lb (most estimators round to 110)</td>
                    </tr>
                    <tr>
                      <td className="p-4">2 inches of asphalt, per ft²</td>
                      <td className="p-4 font-mono text-orange-300">24.2 lb</td>
                    </tr>
                    <tr>
                      <td className="p-4">1 yd³ of compacted asphalt</td>
                      <td className="p-4 font-mono text-orange-300">about 1.96 tons</td>
                    </tr>
                    <tr>
                      <td className="p-4">1 m² at 50 mm (2,350 kg/m³)</td>
                      <td className="p-4 font-mono text-teal-300">117.5 kg</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* WORKED EXAMPLES */}
          <section className="space-y-8">
            <h2 className="text-2xl sm:text-4xl font-black text-white border-b border-white/10 pb-3">
              Worked Examples
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* EXAMPLE 1 */}
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-3">
                <h3 className="text-xl font-bold text-orange-300">Example 1: Driveway, 2 inches</h3>
                <p className="text-sm text-white/80">A driveway is 12 ft × 50 ft, 2 in thick, at 145 lb/ft³.</p>
                <div className="font-mono text-xs sm:text-sm text-white/70 space-y-1 bg-black/40 p-4 rounded-xl border border-white/5">
                  <p>Area: 12 × 50 = 600 ft²</p>
                  <p>Volume: 600 × (2 ÷ 12) = 100 ft³</p>
                  <p>Weight: 100 × 145 = 14,500 lb</p>
                  <p className="text-orange-300 font-bold">Tons: 14,500 ÷ 2,000 = 7.25 tons</p>
                </div>
                <p className="text-xs text-teal-300 font-semibold">With a 5% allowance, order about 7.61 tons.</p>
              </div>

              {/* EXAMPLE 2 */}
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-3">
                <h3 className="text-xl font-bold text-orange-300">Example 2: Driveway with a turnaround, 3 inches</h3>
                <p className="text-sm text-white/80">A strip measures 10 ft × 40 ft. A turnaround pad measures 20 ft × 20 ft.</p>
                <div className="font-mono text-xs sm:text-sm text-white/70 space-y-1 bg-black/40 p-4 rounded-xl border border-white/5">
                  <p>Area: 400 + 400 = 800 ft²</p>
                  <p>Volume: 800 × 0.25 = 200 ft³</p>
                  <p>Weight: 200 × 145 = 29,000 lb</p>
                  <p className="text-orange-300 font-bold">Tons: 14.5 tons, or about 15.2 tons with 5% extra</p>
                </div>
              </div>

              {/* EXAMPLE 3 */}
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-3">
                <h3 className="text-xl font-bold text-orange-300">Example 3: Parking lot, 3 inches</h3>
                <p className="text-sm text-white/80">The lot is 60 ft × 120 ft.</p>
                <div className="font-mono text-xs sm:text-sm text-white/70 space-y-1 bg-black/40 p-4 rounded-xl border border-white/5">
                  <p>Area: 7,200 ft²</p>
                  <p>Volume: 7,200 × 0.25 = 1,800 ft³</p>
                  <p>Weight: 1,800 × 145 = 261,000 lb</p>
                  <p className="text-orange-300 font-bold">Tons: 130.5 tons, or about 137 tons with 5% extra</p>
                </div>
                <p className="text-xs text-white/70">Ask your supplier about truck capacity before you settle on the final number, since loads come in fixed sizes.</p>
              </div>

              {/* EXAMPLE 4 */}
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-3">
                <h3 className="text-xl font-bold text-teal-300">Example 4: Metric car park, 50 mm</h3>
                <p className="text-sm text-white/80">The area is 200 m² and density is 2,350 kg/m³.</p>
                <div className="font-mono text-xs sm:text-sm text-white/70 space-y-1 bg-black/40 p-4 rounded-xl border border-white/5">
                  <p>Volume: 200 × 0.05 = 10 m³</p>
                  <p>Weight: 10 × 2,350 = 23,500 kg</p>
                  <p className="text-teal-300 font-bold">Result: 23.5 tonnes, about 25.9 US tons</p>
                </div>
              </div>

              {/* EXAMPLE 5 */}
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-3">
                <h3 className="text-xl font-bold text-orange-300">Example 5: Square yards</h3>
                <p className="text-sm text-white/80">An area is 100 yd² at 3 in thick.</p>
                <div className="font-mono text-xs sm:text-sm text-white/70 space-y-1 bg-black/40 p-4 rounded-xl border border-white/5">
                  <p>100 × 3 × 110 lb = 33,000 lb</p>
                  <p className="text-orange-300 font-bold">Result: about 16.5 tons</p>
                </div>
                <p className="text-xs text-white/70">The exact figure at 145 lb/ft³ is 16.3 tons. The shortcut runs slightly high, which is fine for a first estimate.</p>
              </div>

              {/* EXAMPLE 6 */}
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-3">
                <h3 className="text-xl font-bold text-orange-300">Example 6: Two layers</h3>
                <p className="text-sm text-white/80">A 10,000 ft² road section gets a 3 in binder course and a 1.5 in surface course.</p>
                <div className="font-mono text-xs sm:text-sm text-white/70 space-y-1 bg-black/40 p-4 rounded-xl border border-white/5">
                  <p>Binder: 10,000 × 0.25 × 145 ÷ 2,000 = 181.25 tons</p>
                  <p>Surface: 10,000 × 0.125 × 145 ÷ 2,000 = 90.63 tons</p>
                  <p className="text-orange-300 font-bold">Total: about 271.9 tons</p>
                </div>
              </div>
            </div>
          </section>

          {/* HOW TO MEASURE ODD-SHAPED AREAS */}
          <section className="space-y-6">
            <h2 className="text-2xl sm:text-4xl font-black text-white border-b border-white/10 pb-3">
              How to Measure Odd-Shaped Areas
            </h2>
            <p>Split the surface into simple shapes, find each area, and add them.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-mono">
              <div className="bg-black/40 p-4 rounded-xl border border-white/10">Rectangle: length × width</div>
              <div className="bg-black/40 p-4 rounded-xl border border-white/10">Triangle: ½ × base × height</div>
              <div className="bg-black/40 p-4 rounded-xl border border-white/10">Circle: π × radius² (use 3.1416)</div>
              <div className="bg-black/40 p-4 rounded-xl border border-white/10">Trapezoid: ½ × (side a + side b) × height</div>
            </div>

            <p>
              Take a circular turnaround with a 30 ft diameter. The radius is 15 ft, so the area is 3.1416 × 225 = 706.9 ft². At 2 in thick, the volume is 117.8 ft³. Multiply by 145 and you get 17,082 lb, or 8.54 tons.
            </p>

            <p>
              Measure the paved surface only. Leave out curbs, planting beds and any strip that stays unpaved. On a long road, measure the width at several points and use the average.
            </p>
          </section>

          {/* ASPHALT TONNAGE CHARTS */}
          <section className="space-y-8">
            <h2 className="text-2xl sm:text-4xl font-black text-white border-b border-white/10 pb-3">
              Asphalt Tonnage Charts
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* US CHART */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-orange-300">US units (145 lb/ft³)</h3>
                <div className="overflow-x-auto bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-white/10 text-white">
                      <tr>
                        <th className="p-3 border-b border-white/10">Thickness</th>
                        <th className="p-3 border-b border-white/10">Tons per 1,000 ft²</th>
                        <th className="p-3 border-b border-white/10">Area covered by 1 ton</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10 text-white/80 font-mono">
                      <tr>
                        <td className="p-3">1.5 in</td>
                        <td className="p-3">9.06</td>
                        <td className="p-3">about 110 ft²</td>
                      </tr>
                      <tr>
                        <td className="p-3">2 in</td>
                        <td className="p-3">12.08</td>
                        <td className="p-3">about 83 ft²</td>
                      </tr>
                      <tr>
                        <td className="p-3">2.5 in</td>
                        <td className="p-3">15.10</td>
                        <td className="p-3">about 66 ft²</td>
                      </tr>
                      <tr>
                        <td className="p-3">3 in</td>
                        <td className="p-3">18.13</td>
                        <td className="p-3">about 55 ft²</td>
                      </tr>
                      <tr>
                        <td className="p-3">4 in</td>
                        <td className="p-3">24.17</td>
                        <td className="p-3">about 41 ft²</td>
                      </tr>
                      <tr>
                        <td className="p-3">6 in</td>
                        <td className="p-3">36.25</td>
                        <td className="p-3">about 28 ft²</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* METRIC CHART */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-teal-300">Metric units (2,350 kg/m³)</h3>
                <div className="overflow-x-auto bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-white/10 text-white">
                      <tr>
                        <th className="p-3 border-b border-white/10">Thickness</th>
                        <th className="p-3 border-b border-white/10">Tonnes per 100 m²</th>
                        <th className="p-3 border-b border-white/10">Area covered by 1 tonne</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10 text-white/80 font-mono">
                      <tr>
                        <td className="p-3">30 mm</td>
                        <td className="p-3">7.05</td>
                        <td className="p-3">about 14.2 m²</td>
                      </tr>
                      <tr>
                        <td className="p-3">40 mm</td>
                        <td className="p-3">9.40</td>
                        <td className="p-3">about 10.6 m²</td>
                      </tr>
                      <tr>
                        <td className="p-3">50 mm</td>
                        <td className="p-3">11.75</td>
                        <td className="p-3">about 8.5 m²</td>
                      </tr>
                      <tr>
                        <td className="p-3">75 mm</td>
                        <td className="p-3">17.63</td>
                        <td className="p-3">about 5.7 m²</td>
                      </tr>
                      <tr>
                        <td className="p-3">100 mm</td>
                        <td className="p-3">23.50</td>
                        <td className="p-3">about 4.3 m²</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <p className="text-sm text-white/70">
              If your density differs from the table, scale the result. A mix at 140 lb/ft³ weighs about 3.4% less than the 145 lb/ft³ figures shown.
            </p>
          </section>

          {/* WHAT CHANGES THE TONNAGE */}
          <section className="space-y-6">
            <h2 className="text-2xl sm:text-4xl font-black text-white border-b border-white/10 pb-3">
              What Changes the Tonnage
            </h2>
            <div className="space-y-4">
              <p>
                <strong>Thickness.</strong> Weight rises in direct proportion to thickness. Doubling the thickness doubles the tonnage. Small errors add up: a 2-inch layer that averages 2.25 inches uses 12.5% more asphalt than planned. Residential driveways commonly get 2 to 3 inches over a compacted base. Parking lots and roads often need more. Your contractor or local specification sets the real figure, and our{" "}
                <Link href="/blog" className="text-teal-300 underline font-semibold">
                  asphalt layer thickness guide
                </Link>{" "}
                lists typical depths.
              </p>
              <p>
                <strong>Density.</strong> Compacted hot mix commonly falls between 140 and 150 lb/ft³ (about 2,240 to 2,400 kg/m³). Heavier stone gives a heavier mix. Open-graded mixes have more air voids and weigh less. At 140 lb/ft³ the 7.25-ton driveway from Example 1 drops to 7.0 tons. At 150 lb/ft³ it rises to 7.5 tons.
              </p>
              <p>
                <strong>Base condition.</strong> A dipped, rutted or patchy base takes extra material to reach the planned thickness. Crowns and drainage slopes can shift the quantity a little compared with a flat calculation.
              </p>
              <p>
                <strong>Compaction.</strong> Asphalt is placed loose and rolled down. Compaction shrinks the volume of the mix, and the weight stays the same. This calculator uses compacted thickness, so the result is the weight needed for the finished layer. Thin layers also have practical limits. A commonly cited guideline is a thickness of at least 2 to 3 times the largest stone size in the mix. Your supplier can confirm the right mix for the depth you plan.
              </p>
              <p>
                <strong>Edges and transitions.</strong> Thickened edges, aprons and tie-ins to existing pavement add area and depth. Include them in your measurements.
              </p>
            </div>
          </section>

          {/* HOW MUCH EXTRA TO ORDER */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-4xl font-black text-white border-b border-white/10 pb-3">
              How Much Extra to Order
            </h2>
            <p>
              Many contractors add about 5% for edges, uneven spots and small losses. A rough base can push that higher.
            </p>
            <p>
              Plants sell hot mix by the ton, often with a minimum load. Hot mix also cools on the way to site, so deliveries should match what the crew can lay. For very small repairs, cold patch sold by the bag may suit better than a hot mix load. Your supplier or paving contractor can tell you what is normal for your site.
            </p>
          </section>

          {/* TONS VS TONNES */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-4xl font-black text-white border-b border-white/10 pb-3">
              Tons vs Tonnes
            </h2>
            <p>
              A US ton is 2,000 lb, about 907 kg. A metric tonne is 1,000 kg. One tonne equals 1.1023 US tons, so 100 tonnes is about 110.2 tons, a 10% gap. Confirm which unit your quote uses before you order. A quote in tonnes read as tons leaves you 10% short.
            </p>
          </section>

          {/* FROM TONNAGE TO BITUMEN, TACK COAT AND COST */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-4xl font-black text-white border-b border-white/10 pb-3">
              From Tonnage to Bitumen, Tack Coat and Cost
            </h2>
            <p>
              Asphalt mix is aggregate plus bitumen binder. At 5.5% binder, the 12.08 tons per 1,000 ft² at 2 inches contains about 0.66 tons of bitumen.
            </p>
            <p>
              Use our{" "}
              <Link href="/" className="text-teal-300 underline font-semibold">
                bitumen calculator
              </Link>{" "}
              to get binder weight, litres, and order quantity for a mix design. The{" "}
              <Link href="/tack-coat-calculator/" className="text-teal-300 underline font-semibold">
                tack coat calculator
              </Link>{" "}
              covers the sprayed layer under each lift. The{" "}
              <Link href="/asphalt-driveway-cost-calculator/" className="text-teal-300 underline font-semibold">
                asphalt driveway cost calculator
              </Link>{" "}
              turns tonnage into a budget. The{" "}
              <Link href="/asphalt-millings-calculator/" className="text-teal-300 underline font-semibold">
                asphalt millings calculator
              </Link>{" "}
              does the same weight math for recycled material.
            </p>
          </section>

          {/* COMMON MISTAKES */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-4xl font-black text-white border-b border-white/10 pb-3">
              Common Mistakes
            </h2>
            <ul className="space-y-3 list-disc pl-6 text-white/80">
              <li>
                <strong>Skipping the thickness conversion.</strong> Inches must become feet, and millimetres must become metres.
              </li>
              <li>
                <strong>Using binder density instead of mix density.</strong> Bitumen is about 1,030 kg/m³ and mix is about 2,350 kg/m³. The wrong choice returns less than half the true weight.
              </li>
              <li>
                <strong>Rounding thickness down.</strong> Using 2 inches instead of 2.5 inches takes 20% off the order.
              </li>
              <li>
                <strong>Counting unpaved areas.</strong> Curbs, beds and gaps add tons you never lay.
              </li>
              <li>
                <strong>Mixing units mid-formula.</strong> Feet for length with inches for thickness gives nonsense unless you convert.
              </li>
              <li>
                <strong>Reading tonnes as tons.</strong> The 10% difference becomes a shortage on site.
              </li>
            </ul>
          </section>

          {/* FAQS */}
          <section className="space-y-6">
            <h2 className="text-2xl sm:text-4xl font-black text-white border-b border-white/10 pb-3">
              FAQs
            </h2>
            <div className="space-y-4">
              {FAQ_DATA.map((faq, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-2">
                  <h3 className="font-bold text-white text-lg">{faq.q}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CONCLUSION & DISCLAIMER */}
          <section className="space-y-4 pt-6 border-t border-white/10">
            <h2 className="text-2xl sm:text-4xl font-black text-white">Conclusion</h2>
            <p>
              An asphalt tonnage calculator gives you a planning number in seconds. Measure the paved area carefully, use the compacted thickness, confirm the density with your supplier and add a small allowance. Then check whether the quote is in tons or tonnes before you place the order.
            </p>
            <p className="text-sm italic text-white/60 bg-black/40 p-4 rounded-xl border border-white/10">
              Results are estimates for planning only. Confirm quantities with a qualified contractor or supplier before ordering.
            </p>
          </section>
        </div>
      </article>
    </>
  );
}
