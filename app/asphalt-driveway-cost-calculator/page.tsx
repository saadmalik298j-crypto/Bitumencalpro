// app/asphalt-driveway-cost-calculator/page.tsx
import Script from "next/script";
import Link from "next/link";
import type { Metadata } from "next";
import DrivewayCostCalculator from "./DrivewayCostCalculator";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Asphalt Driveway Cost Calculator | Estimate Tons and Total Cost",
  description:
    "Free asphalt driveway cost calculator. Enter size, thickness and your price per ton to get tons needed, material cost, extras and cost per square foot.",
  keywords: [
    "asphalt driveway cost calculator",
    "driveway cost estimator",
    "asphalt driveway cost per sq ft",
    "how much does asphalt driveway cost",
    "asphalt price per ton",
    "paving cost estimator",
    "driveway asphalt tonnage and cost",
  ],
  alternates: { canonical: "https://bitumencalcpro.com/asphalt-driveway-cost-calculator/" },
  openGraph: {
    title: "Asphalt Driveway Cost Calculator | Estimate Tons and Total Cost",
    description:
      "Free asphalt driveway cost calculator. Enter size, thickness and your price per ton to get tons needed, material cost, extras and cost per square foot.",
    url: "https://bitumencalcpro.com/asphalt-driveway-cost-calculator/",
    siteName: "BitumenCalcPro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asphalt Driveway Cost Calculator | Estimate Tons and Total Cost",
    description:
      "Free asphalt driveway cost calculator. Enter size, thickness and your price per ton to get tons needed, material cost, extras and cost per square foot.",
  },
};

const FAQ_DATA = [
  {
    q: "How much does it cost to pave a driveway?",
    a: "The cost depends on area, thickness, local prices and site work. This calculator turns your own price per ton and extras into a total, so you can test your quotes.",
  },
  {
    q: "How many tons of asphalt do I need for a driveway?",
    a: "A 12 ft × 50 ft driveway at 2 inches needs about 7.25 tons. Our tonnage calculator works it out for any size.",
  },
  {
    q: "How do I find the cost per square foot?",
    a: "Divide the total cost by the area in square feet. In Example 2, $4,169 ÷ 800 ft² gives $5.21.",
  },
  {
    q: "Is the price per ton the same as an installed price?",
    a: "A plant price covers the mix. An installed price per ton covers the mix plus labor and equipment. Ask which one you have been quoted.",
  },
  {
    q: "How thick should an asphalt driveway be?",
    a: "Many residential driveways use 2 to 3 inches compacted over a prepared base. Heavier vehicles may need more, so confirm with your contractor.",
  },
  {
    q: "Does the calculator include sealcoating?",
    a: "Only if you add it to the extras line.",
  },
  {
    q: "How accurate is the estimate?",
    a: "It is as accurate as the numbers you enter. Final prices depend on site inspection and the contractor's quote.",
  },
];

export default function DrivewayCostPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Asphalt Driveway Cost Calculator",
    url: "https://bitumencalcpro.com/asphalt-driveway-cost-calculator/",
    description:
      "Free asphalt driveway cost calculator. Enter size, thickness and your price per ton to get tons needed, material cost, extras and cost per square foot.",
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
        id="schema-driveway-app"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Script
        id="schema-driveway-faq"
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
            <span className="text-white/80">Asphalt Driveway Cost Calculator</span>
          </nav>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-6 leading-tight">
            Asphalt Driveway Cost Calculator
          </h1>

          {/* CALCULATOR WIDGET AT TOP */}
          <DrivewayCostCalculator />
        </div>
      </div>

      {/* BELOW CONTENT SECTION (EXACT TEXT) */}
      <article className="py-16 text-white/90 leading-relaxed">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 space-y-12 text-base sm:text-lg">
          {/* INTRO PARAGRAPHS */}
          <div className="space-y-5 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-6 md:p-8 rounded-3xl shadow-xl">
            <p>
              Paving quotes often arrive as one number with no breakdown. Without the tonnage behind it, you can't tell whether the price is fair or the layer is thinner than you asked for.
            </p>
            <p>
              This asphalt driveway cost calculator finds the tons of asphalt your driveway needs, prices that material, and adds the extras you enter: base preparation, delivery, labor, removal of an old surface. It returns a total, plus cost per square foot and per square metre, so you can compare it with real quotes.
            </p>
            <p className="font-semibold text-teal-300 border-l-4 border-teal-400 pl-4 py-1">
              Prices change with region, season and contractor, so the tool assumes none. You enter the price per ton from your supplier or contractor, and the math does the rest.
            </p>
          </div>

          {/* HOW TO USE */}
          <section className="space-y-6">
            <h2 className="text-2xl sm:text-4xl font-black text-white border-b border-white/10 pb-3">
              How to Use the Asphalt Driveway Cost Calculator
            </h2>
            <ul className="space-y-4 list-disc pl-6 text-white/80">
              <li>
                Enter the length and width of the driveway, or type the area if you know it.
              </li>
              <li>
                Enter the thickness of the finished layer. Many residential driveways get 2 to 3 inches compacted over a prepared base.
              </li>
              <li>
                Keep the density at 145 lb/ft³ unless your supplier gives a different number.
              </li>
              <li>
                Enter the price per ton (or tonne) from a plant or contractor quote.
              </li>
              <li>
                Add a waste allowance. 5% is a common starting point.
              </li>
              <li>
                Fill in the extras that apply: base preparation, delivery or trucking, labor and equipment, removal of the old driveway, edging.
              </li>
              <li>
                Read the tons, material cost, extras and total. If your contractor quotes one installed price per ton, enter it as the price and leave the extras at zero. Entering both double counts the labor.
              </li>
            </ul>
          </section>

          {/* THE DRIVEWAY COST FORMULA */}
          <section className="space-y-6">
            <h2 className="text-2xl sm:text-4xl font-black text-white border-b border-white/10 pb-3">
              The Driveway Cost Formula
            </h2>
            <p>The cost math sits on top of the tonnage math.</p>

            <div className="bg-black/40 p-6 rounded-2xl border border-orange-500/30 font-mono text-xs sm:text-sm text-white/90 space-y-2">
              <p>Tons = Area (ft²) × Thickness (ft) × Density (lb/ft³) ÷ 2,000</p>
              <p>Order tons = Tons × (1 + Allowance ÷ 100)</p>
              <p>Material cost = Order tons × Price per ton</p>
              <p className="text-orange-300 font-bold">Total cost = Material cost + Extras</p>
              <p className="text-teal-300 font-bold">Cost per ft² = Total cost ÷ Area</p>
            </div>

            <p>
              For metric, tonnes = area (m²) × thickness (m) × density (kg/m³) ÷ 1,000. The cost lines stay the same, and cost per m² = total cost ÷ area.
            </p>

            <p>
              To convert, multiply cost per ft² by 9 to get cost per square yard. The first step is explained in detail on our{" "}
              <Link href="/asphalt-tonnage-calculator/" className="text-teal-300 underline font-semibold">
                asphalt tonnage calculator
              </Link>{" "}
              page.
            </p>
          </section>

          {/* WORKED EXAMPLES */}
          <section className="space-y-8">
            <h2 className="text-2xl sm:text-4xl font-black text-white border-b border-white/10 pb-3">
              Worked Examples
            </h2>
            <p className="text-sm italic text-white/70">
              The prices below are placeholders picked to keep the arithmetic easy. Replace them with your own quotes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* EXAMPLE 1 */}
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-3">
                <h3 className="text-xl font-bold text-orange-300">Example 1: Material and delivery, 2 inches</h3>
                <p className="text-sm text-white/80">A driveway is 12 ft × 50 ft, 2 in thick, at 145 lb/ft³.</p>
                <div className="font-mono text-xs sm:text-sm text-white/70 space-y-1 bg-black/40 p-4 rounded-xl border border-white/5">
                  <p>Area: 600 ft²</p>
                  <p>Volume: 600 × (2 ÷ 12) = 100 ft³</p>
                  <p>Weight: 100 × 145 = 14,500 lb, which is 7.25 tons</p>
                  <p>With a 5% allowance: 7.61 tons</p>
                  <p>Material at $100 per ton: $761</p>
                  <p>Delivery, flat fee of $150: $911 total</p>
                  <p className="text-orange-300 font-bold">Cost per ft²: $1.52</p>
                </div>
                <p className="text-xs text-white/70">That figure covers mix and trucking. Labor, equipment and base work come on top.</p>
              </div>

              {/* EXAMPLE 2 */}
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-3">
                <h3 className="text-xl font-bold text-orange-300">Example 2: A full job with extras</h3>
                <p className="text-sm text-white/80">A driveway is 20 ft × 40 ft and 2.5 in thick.</p>
                <div className="font-mono text-xs sm:text-sm text-white/70 space-y-1 bg-black/40 p-4 rounded-xl border border-white/5">
                  <p>Area: 800 ft²</p>
                  <p>Volume: 800 × (2.5 ÷ 12) = 166.7 ft³</p>
                  <p>Weight: 166.7 × 145 = 24,167 lb, which is 12.08 tons</p>
                  <p>With 5% extra: 12.69 tons</p>
                </div>

                <div className="overflow-x-auto bg-black/40 rounded-xl border border-white/5">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-white/10 text-white">
                      <tr>
                        <th className="p-2.5 border-b border-white/10">Line</th>
                        <th className="p-2.5 border-b border-white/10">Cost</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10 font-mono text-white/80">
                      <tr>
                        <td className="p-2.5">Material: 12.69 tons × $100</td>
                        <td className="p-2.5">$1,269</td>
                      </tr>
                      <tr>
                        <td className="p-2.5">Base preparation</td>
                        <td className="p-2.5">$1,200</td>
                      </tr>
                      <tr>
                        <td className="p-2.5">Delivery</td>
                        <td className="p-2.5">$200</td>
                      </tr>
                      <tr>
                        <td className="p-2.5">Labor and equipment</td>
                        <td className="p-2.5">$1,500</td>
                      </tr>
                      <tr className="font-bold text-orange-300 bg-white/5">
                        <td className="p-2.5">Total</td>
                        <td className="p-2.5">$4,169</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-xs text-white/70">
                  Cost per ft² is $5.21. Cost per square yard is $46.90. Material makes up about 30% of this total, and the base and labor lines carry the rest.
                </p>
              </div>

              {/* EXAMPLE 3 */}
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-3">
                <h3 className="text-xl font-bold text-orange-300">Example 3: What one extra inch costs</h3>
                <p className="text-sm text-white/80">The area is 600 ft², the allowance is 5%, and the price is $100 per ton.</p>
                <div className="font-mono text-xs sm:text-sm text-white/70 space-y-1 bg-black/40 p-4 rounded-xl border border-white/5">
                  <p>2 in: 7.61 tons, $761</p>
                  <p>3 in: 11.42 tons, $1,142</p>
                </div>
                <p className="text-xs text-white/70">
                  The extra inch adds $381 in material alone. Thickness scales cost in direct proportion: 3 inches uses 50% more asphalt than 2 inches.
                </p>
              </div>

              {/* EXAMPLE 4 */}
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-3">
                <h3 className="text-xl font-bold text-teal-300">Example 4: Metric driveway</h3>
                <p className="text-sm text-white/80">A driveway is 5 m × 15 m, 50 mm thick, at 2,350 kg/m³.</p>
                <div className="font-mono text-xs sm:text-sm text-white/70 space-y-1 bg-black/40 p-4 rounded-xl border border-white/5">
                  <p>Area: 75 m²</p>
                  <p>Volume: 75 × 0.05 = 3.75 m³</p>
                  <p>Weight: 3.75 × 2,350 = 8,812.5 kg, which is 8.81 tonnes</p>
                  <p>With 5% extra: 9.25 tonnes</p>
                  <p>Material at 120 per tonne: 1,110</p>
                  <p className="text-teal-300 font-bold">Material cost per m²: 14.80</p>
                </div>
                <p className="text-xs text-white/70">Use any currency. The calculator treats it as a plain number.</p>
              </div>
            </div>
          </section>

          {/* HOW PRICE PER TON CHANGES THE TOTAL */}
          <section className="space-y-6">
            <h2 className="text-2xl sm:text-4xl font-black text-white border-b border-white/10 pb-3">
              How Price per Ton Changes the Total
            </h2>
            <p className="text-sm text-white/80">
              This table uses the driveway from Example 1: 600 ft², 2 in thick, 7.61 tons ordered. Material only.
            </p>

            <div className="overflow-x-auto bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl max-w-xl">
              <table className="w-full text-left text-sm">
                <thead className="bg-white/10 text-white">
                  <tr>
                    <th className="p-3.5 border-b border-white/10">Price per ton</th>
                    <th className="p-3.5 border-b border-white/10">Material cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 text-white/80 font-mono">
                  <tr>
                    <td className="p-3.5">$90</td>
                    <td className="p-3.5 text-orange-300">$685</td>
                  </tr>
                  <tr>
                    <td className="p-3.5">$100</td>
                    <td className="p-3.5 text-orange-300">$761</td>
                  </tr>
                  <tr>
                    <td className="p-3.5">$110</td>
                    <td className="p-3.5 text-orange-300">$837</td>
                  </tr>
                  <tr>
                    <td className="p-3.5">$120</td>
                    <td className="p-3.5 text-orange-300">$913</td>
                  </tr>
                  <tr>
                    <td className="p-3.5">$130</td>
                    <td className="p-3.5 text-orange-300">$989</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Each $10 change in the ton price moves this job by about $76. On a larger driveway, the same change moves it more. Ask for the price per ton in writing and note whether it includes delivery.
            </p>
          </section>

          {/* MATERIAL COST PER 1000 SQ FT BY THICKNESS */}
          <section className="space-y-6">
            <h2 className="text-2xl sm:text-4xl font-black text-white border-b border-white/10 pb-3">
              Material Cost per 1,000 ft² by Thickness
            </h2>
            <p className="text-sm text-white/80">Based on the tons in the tonnage chart (145 lb/ft³, no allowance).</p>

            <div className="overflow-x-auto bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl max-w-2xl">
              <table className="w-full text-left text-sm">
                <thead className="bg-white/10 text-white">
                  <tr>
                    <th className="p-3.5 border-b border-white/10">Thickness</th>
                    <th className="p-3.5 border-b border-white/10">Tons</th>
                    <th className="p-3.5 border-b border-white/10">At $100 per ton</th>
                    <th className="p-3.5 border-b border-white/10">At $120 per ton</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 text-white/80 font-mono">
                  <tr>
                    <td className="p-3.5 font-bold text-white">1.5 in</td>
                    <td className="p-3.5">9.06</td>
                    <td className="p-3.5 text-orange-300">$906</td>
                    <td className="p-3.5 text-teal-300">$1,087</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">2 in</td>
                    <td className="p-3.5">12.08</td>
                    <td className="p-3.5 text-orange-300">$1,208</td>
                    <td className="p-3.5 text-teal-300">$1,450</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">3 in</td>
                    <td className="p-3.5">18.13</td>
                    <td className="p-3.5 text-orange-300">$1,813</td>
                    <td className="p-3.5 text-teal-300">$2,176</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">4 in</td>
                    <td className="p-3.5">24.17</td>
                    <td className="p-3.5 text-orange-300">$2,417</td>
                    <td className="p-3.5 text-teal-300">$2,900</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-white/70">
              Divide by 1,000 and multiply by your area in square feet to scale any row to your driveway.
            </p>
          </section>

          {/* WHAT GOES INTO DRIVEWAY COST */}
          <section className="space-y-6">
            <h2 className="text-2xl sm:text-4xl font-black text-white border-b border-white/10 pb-3">
              What Goes Into Driveway Cost
            </h2>
            <div className="space-y-4">
              <p>
                <strong>Size and thickness.</strong> These two numbers set the tonnage. Area is fixed by your site. Thickness is the number you and your contractor decide.
              </p>
              <p>
                <strong>Price of the mix.</strong> It moves with binder, fuel and aggregate costs, and with the distance from the plant to your site. Our{" "}
                <Link href="/" className="text-teal-300 underline font-semibold">
                  bitumen calculator
                </Link>{" "}
                shows how much of each ton is binder.
              </p>
              <p>
                <strong>Base preparation.</strong> Excavation, grading and a compacted stone base often cost as much as the asphalt itself, as Example 2 shows. A weak base can lead to cracking and settling, so this line deserves a real quote.
              </p>
              <p>
                <strong>Removal of an old driveway.</strong> Breaking up, hauling away and disposing of old pavement adds labor and dump fees.
              </p>
              <p>
                <strong>Access, slope and drainage.</strong> Tight access limits equipment. Steep grades and water control add work.
              </p>
              <p>
                <strong>Delivery and load size.</strong> Hot mix cools on the road, so plants limit how far it travels. Some plants and contractors charge extra for small loads, so ask about minimums.
              </p>
              <p>
                <strong>Edging and finishing.</strong> Curbs, aprons and tie-ins to the street add area and labor. Many contractors suggest sealing a new surface later, so ask when and what it costs.
              </p>
            </div>
          </section>

          {/* WHAT THE CALCULATOR DOESN'T COUNT */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-4xl font-black text-white border-b border-white/10 pb-3">
              What the Calculator Doesn't Count
            </h2>
            <p>
              Permits, sales tax, utility cover adjustments, landscaping repairs and drainage structures are outside the calculation. Add any of them to the extras line. If sales tax applies in your area, add it to the final total.
            </p>
          </section>

          {/* READING A CONTRACTOR QUOTE */}
          <section className="space-y-6">
            <h2 className="text-2xl sm:text-4xl font-black text-white border-b border-white/10 pb-3">
              Reading a Contractor Quote
            </h2>
            <p>
              Quotes come in three forms: a lump sum, a price per square foot installed, or a price per ton installed. Convert each to cost per square foot (total ÷ area) and the three become comparable.
            </p>
            <p>
              Then check the tonnage. Ask the contractor for the thickness and tons they plan to use. A 600 ft² driveway at 2 inches needs about 7.25 tons. A quote that lists 5 tons for the same job points to a thinner layer or a smaller area than you expect.
            </p>
            <div className="space-y-3">
              <p className="font-semibold text-white">Ask what the price includes:</p>
              <ul className="space-y-2 list-disc pl-6 text-white/80">
                <li>Base depth and material</li>
                <li>Compaction</li>
                <li>Whether thickness is measured compacted</li>
                <li>Edging and cleanup</li>
                <li>Warranty terms</li>
              </ul>
            </div>
            <p>
              Collect at least 2 or 3 quotes on the same specification. A difference in thickness or base depth makes two quotes impossible to compare.
            </p>
          </section>

          {/* WAYS TO CUT COST WITHOUT THINNING THE LAYER */}
          <section className="space-y-6">
            <h2 className="text-2xl sm:text-4xl font-black text-white border-b border-white/10 pb-3">
              Ways to Cut Cost Without Thinning the Layer
            </h2>
            <p>
              Cutting thickness saves material now. Heavy vehicles on a thin layer can lead to early cracking and rutting, so thickness is a poor place to save.
            </p>
            <div className="space-y-3">
              <p className="font-semibold text-white">These options are safer:</p>
              <ul className="space-y-3 list-disc pl-6 text-white/80">
                <li>Get quotes on identical specs, so the price differences are real.</li>
                <li>Narrow the driveway where the site allows.</li>
                <li>Ask if the contractor will accept site prep you can do, such as clearing plants or moving old stone.</li>
                <li>Ask a neighbor about paving at the same time. Shared delivery and equipment setup can lower each job's cost.</li>
                <li>Ask whether an overlay on the existing surface is possible. An overlay needs less base work and less removal. It suits sound surfaces and doesn't suit badly cracked or failed ones, so the contractor decides after inspecting.</li>
              </ul>
            </div>
          </section>

          {/* COMMON MISTAKES */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-4xl font-black text-white border-b border-white/10 pb-3">
              Common Mistakes
            </h2>
            <ul className="space-y-3 list-disc pl-6 text-white/80">
              <li>
                <strong>Counting labor twice.</strong> An installed price per ton already includes labor.
              </li>
              <li>
                <strong>Entering the total job price as the price per ton.</strong> The tool multiplies it by the tons.
              </li>
              <li>
                <strong>Leaving out the base.</strong> The base line is often the second biggest cost.
              </li>
              <li>
                <strong>Mixing tons and tonnes.</strong> One tonne is 1.1023 US tons, a 10% gap.
              </li>
              <li>
                <strong>Entering loose thickness.</strong> Use the compacted thickness of the finished layer.
              </li>
              <li>
                <strong>Comparing quotes at different thicknesses.</strong> A 2 inch quote and a 3 inch quote are two different products.
              </li>
            </ul>
            <p className="text-sm text-white/70 pt-2">
              If you plan a tack coat between layers, work out the binder with the{" "}
              <Link href="/tack-coat-calculator/" className="text-teal-300 underline font-semibold">
                tack coat calculator
              </Link>
              . If you plan to use recycled material, see the{" "}
              <Link href="/asphalt-millings-calculator/" className="text-teal-300 underline font-semibold">
                asphalt millings calculator
              </Link>
              .
            </p>
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
              An asphalt driveway cost calculator gives you a number to test quotes against. Measure the area, choose the compacted thickness, enter the price per ton, and list every extra. Then compare the total and the cost per square foot with each quote you receive.
            </p>
            <p className="text-sm italic text-white/60 bg-black/40 p-4 rounded-xl border border-white/10">
              Results are estimates for planning only. Prices vary by location and contractor. Confirm costs with a qualified paving contractor before you commit.
            </p>
          </section>
        </div>
      </article>
    </>
  );
}
