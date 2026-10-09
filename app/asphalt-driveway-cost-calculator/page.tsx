// app/asphalt-driveway-cost-calculator/page.tsx
import Script from "next/script";
import Link from "next/link";
import type { Metadata } from "next";
import DrivewayCostCalculator from "./DrivewayCostCalculator";
import {
  DollarSign,
  ChevronRight,
  CheckCircle2,
  HelpCircle,
  BarChart3,
  Scale,
  TrendingUp,
  FileText,
  Lightbulb,
  ShieldAlert,
  Zap,
  BookOpen,
} from "lucide-react";

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

      {/* HERO SECTION WITH ENHANCED UI */}
      <div className="relative pt-16 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 via-slate-900/40 to-orange-600/10 pointer-events-none" />
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-teal-500/15 blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-orange-500/20 blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-white/50 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight size={14} />
            <span className="text-white/80">Asphalt Driveway Cost Calculator</span>
          </nav>

          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500/25 to-emerald-500/15 border border-teal-500/40 text-teal-200 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-5 shadow-[0_0_20px_rgba(20,184,166,0.25)]">
            <DollarSign size={16} className="text-teal-400" />
            Budget & Quote Estimator
          </div>

          <h1 className="hero-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-4 leading-tight">
            <span className="bg-gradient-to-r from-teal-300 via-emerald-300 to-yellow-300 bg-clip-text text-transparent">
              Asphalt Driveway
            </span>{" "}
            <span className="text-white">Cost Calculator</span>
          </h1>

          {/* CATCHY 1-2 SENTENCE SUBTITLE */}
          <p className="text-white/90 text-lg md:text-xl font-medium max-w-3xl mb-8 leading-relaxed drop-shadow">
            Instantly estimate material weight, delivery costs, base preparation, and total paving budgets. Test contractor quotes with transparent cost-per-square-foot breakdowns.
          </p>

          <div className="flex flex-wrap gap-2.5 mb-10">
            {["Custom Price Per Ton", "Full Cost Breakdown", "Includes Base & Extras", "100% Free Tool"].map((b) => (
              <span
                key={b}
                className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/15 text-white/90 text-xs font-semibold px-3.5 py-1.5 rounded-full shadow-sm"
              >
                <CheckCircle2 size={13} className="text-teal-400" />
                {b}
              </span>
            ))}
          </div>

          {/* CALCULATOR WIDGET AT TOP */}
          <div className="bg-slate-900/60 backdrop-blur-xl border border-white/15 rounded-3xl p-2 sm:p-4 shadow-2xl shadow-teal-950/20">
            <DrivewayCostCalculator />
          </div>
        </div>
      </div>

      {/* BELOW CONTENT SECTION WITH ENHANCED STYLING & EXACT TEXT */}
      <article className="py-16 text-white/90 leading-relaxed">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 space-y-14 text-base sm:text-lg">
          {/* INTRO PARAGRAPHS */}
          <div className="space-y-5 bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/15 p-6 sm:p-8 rounded-3xl shadow-2xl backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />
            <p>
              Paving quotes often arrive as one number with no breakdown. Without the tonnage behind it, you can't tell whether the price is fair or the layer is thinner than you asked for.
            </p>
            <p>
              This asphalt driveway cost calculator finds the tons of asphalt your driveway needs, prices that material, and adds the extras you enter: base preparation, delivery, labor, removal of an old surface. It returns a total, plus cost per square foot and per square metre, so you can compare it with real quotes.
            </p>
            <div className="flex items-center gap-3 bg-teal-500/15 border-l-4 border-teal-400 p-4 rounded-r-xl text-teal-200 font-semibold text-sm sm:text-base">
              <CheckCircle2 size={20} className="text-teal-400 flex-shrink-0" />
              <span>Prices change with region, season and contractor, so the tool assumes none. You enter the price per ton from your supplier or contractor, and the math does the rest.</span>
            </div>
          </div>

          {/* HOW TO USE */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-400 font-bold">
                <Lightbulb size={20} />
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white">
                How to Use the Asphalt Driveway Cost Calculator
              </h2>
            </div>
            <ul className="space-y-3.5 list-none pl-0">
              {[
                "Enter the length and width of the driveway, or type the area if you know it.",
                "Enter the thickness of the finished layer. Many residential driveways get 2 to 3 inches compacted over a prepared base.",
                "Keep the density at 145 lb/ft³ unless your supplier gives a different number.",
                "Enter the price per ton (or tonne) from a plant or contractor quote.",
                "Add a waste allowance. 5% is a common starting point.",
                "Fill in the extras that apply: base preparation, delivery or trucking, labor and equipment, removal of the old driveway, edging.",
                "Read the tons, material cost, extras and total. If your contractor quotes one installed price per ton, enter it as the price and leave the extras at zero. Entering both double counts the labor.",
              ].map((step, idx) => (
                <li key={idx} className="flex items-start gap-3 bg-white/5 border border-white/10 p-4 rounded-xl">
                  <span className="w-7 h-7 rounded-lg bg-teal-500/20 text-teal-300 font-black text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="text-white/80">{step}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* THE DRIVEWAY COST FORMULA */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="w-10 h-10 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 font-bold">
                <BarChart3 size={20} />
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white">
                The Driveway Cost Formula
              </h2>
            </div>
            <p>The cost math sits on top of the tonnage math.</p>

            <div className="bg-slate-900/90 p-6 rounded-2xl border border-orange-500/30 shadow-xl space-y-2 font-mono text-sm sm:text-base">
              <p className="text-white">Tons = Area (ft²) × Thickness (ft) × Density (lb/ft³) ÷ 2,000</p>
              <p className="text-white">Order tons = Tons × (1 + Allowance ÷ 100)</p>
              <p className="text-white">Material cost = Order tons × Price per ton</p>
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
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-400 font-bold">
                <FileText size={20} />
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white">
                Worked Examples
              </h2>
            </div>
            <p className="text-sm italic text-white/70">
              The prices below are placeholders picked to keep the arithmetic easy. Replace them with your own quotes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* EXAMPLE 1 */}
              <div className="bg-slate-900/60 border border-white/15 p-6 rounded-2xl space-y-3 hover:border-teal-500/40 transition-all shadow-xl">
                <span className="text-xs font-mono bg-teal-500/20 text-teal-300 px-2.5 py-1 rounded-md font-bold">Example 1</span>
                <h3 className="text-xl font-bold text-white">Material and delivery, 2 inches</h3>
                <p className="text-sm text-white/80">A driveway is 12 ft × 50 ft, 2 in thick, at 145 lb/ft³.</p>
                <div className="font-mono text-xs sm:text-sm text-white/70 space-y-1 bg-black/50 p-4 rounded-xl border border-white/5">
                  <p>Area: 600 ft²</p>
                  <p>Volume: 600 × (2 ÷ 12) = 100 ft³</p>
                  <p>Weight: 100 × 145 = 14,500 lb, which is 7.25 tons</p>
                  <p>With a 5% allowance: 7.61 tons</p>
                  <p>Material at $100 per ton: $761</p>
                  <p>Delivery, flat fee of $150: $911 total</p>
                  <p className="text-teal-300 font-bold">Cost per ft²: $1.52</p>
                </div>
                <p className="text-xs text-white/70">That figure covers mix and trucking. Labor, equipment and base work come on top.</p>
              </div>

              {/* EXAMPLE 2 */}
              <div className="bg-slate-900/60 border border-white/15 p-6 rounded-2xl space-y-3 hover:border-teal-500/40 transition-all shadow-xl">
                <span className="text-xs font-mono bg-teal-500/20 text-teal-300 px-2.5 py-1 rounded-md font-bold">Example 2</span>
                <h3 className="text-xl font-bold text-white">A full job with extras</h3>
                <p className="text-sm text-white/80">A driveway is 20 ft × 40 ft and 2.5 in thick.</p>
                <div className="font-mono text-xs sm:text-sm text-white/70 space-y-1 bg-black/50 p-4 rounded-xl border border-white/5">
                  <p>Area: 800 ft²</p>
                  <p>Volume: 800 × (2.5 ÷ 12) = 166.7 ft³</p>
                  <p>Weight: 166.7 × 145 = 24,167 lb, which is 12.08 tons</p>
                  <p>With 5% extra: 12.69 tons</p>
                </div>

                <div className="overflow-x-auto bg-black/50 rounded-xl border border-white/10">
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
                      <tr className="font-bold text-teal-300 bg-white/5">
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
              <div className="bg-slate-900/60 border border-white/15 p-6 rounded-2xl space-y-3 hover:border-teal-500/40 transition-all shadow-xl">
                <span className="text-xs font-mono bg-teal-500/20 text-teal-300 px-2.5 py-1 rounded-md font-bold">Example 3</span>
                <h3 className="text-xl font-bold text-white">What one extra inch costs</h3>
                <p className="text-sm text-white/80">The area is 600 ft², the allowance is 5%, and the price is $100 per ton.</p>
                <div className="font-mono text-xs sm:text-sm text-white/70 space-y-1 bg-black/50 p-4 rounded-xl border border-white/5">
                  <p>2 in: 7.61 tons, $761</p>
                  <p>3 in: 11.42 tons, $1,142</p>
                </div>
                <p className="text-xs text-white/70">
                  The extra inch adds $381 in material alone. Thickness scales cost in direct proportion: 3 inches uses 50% more asphalt than 2 inches.
                </p>
              </div>

              {/* EXAMPLE 4 */}
              <div className="bg-slate-900/60 border border-white/15 p-6 rounded-2xl space-y-3 hover:border-orange-500/40 transition-all shadow-xl">
                <span className="text-xs font-mono bg-orange-500/20 text-orange-300 px-2.5 py-1 rounded-md font-bold">Example 4</span>
                <h3 className="text-xl font-bold text-white">Metric driveway</h3>
                <p className="text-sm text-white/80">A driveway is 5 m × 15 m, 50 mm thick, at 2,350 kg/m³.</p>
                <div className="font-mono text-xs sm:text-sm text-white/70 space-y-1 bg-black/50 p-4 rounded-xl border border-white/5">
                  <p>Area: 75 m²</p>
                  <p>Volume: 75 × 0.05 = 3.75 m³</p>
                  <p>Weight: 3.75 × 2,350 = 8,812.5 kg, which is 8.81 tonnes</p>
                  <p>With 5% extra: 9.25 tonnes</p>
                  <p>Material at 120 per tonne: 1,110</p>
                  <p className="text-orange-300 font-bold">Material cost per m²: 14.80</p>
                </div>
                <p className="text-xs text-white/70">Use any currency. The calculator treats it as a plain number.</p>
              </div>
            </div>
          </section>

          {/* HOW PRICE PER TON CHANGES THE TOTAL */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-400 font-bold">
                <TrendingUp size={20} />
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white">
                How Price per Ton Changes the Total
              </h2>
            </div>
            <p className="text-sm text-white/80">
              This table uses the driveway from Example 1: 600 ft², 2 in thick, 7.61 tons ordered. Material only.
            </p>

            <div className="overflow-x-auto bg-slate-900/80 border border-white/15 rounded-2xl max-w-xl shadow-xl">
              <table className="w-full text-left text-sm">
                <thead className="bg-white/10 text-white">
                  <tr>
                    <th className="p-3.5 border-b border-white/10">Price per ton</th>
                    <th className="p-3.5 border-b border-white/10">Material cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 text-white/80 font-mono">
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-3.5">$90</td>
                    <td className="p-3.5 text-teal-300 font-bold">$685</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-3.5">$100</td>
                    <td className="p-3.5 text-teal-300 font-bold">$761</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-3.5">$110</td>
                    <td className="p-3.5 text-teal-300 font-bold">$837</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-3.5">$120</td>
                    <td className="p-3.5 text-teal-300 font-bold">$913</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-3.5">$130</td>
                    <td className="p-3.5 text-teal-300 font-bold">$989</td>
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
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="w-10 h-10 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 font-bold">
                <BarChart3 size={20} />
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white">
                Material Cost per 1,000 ft² by Thickness
              </h2>
            </div>
            <p className="text-sm text-white/80">Based on the tons in the tonnage chart (145 lb/ft³, no allowance).</p>

            <div className="overflow-x-auto bg-slate-900/80 border border-white/15 rounded-2xl max-w-2xl shadow-xl">
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
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-3.5 font-bold text-white">1.5 in</td>
                    <td className="p-3.5">9.06</td>
                    <td className="p-3.5 text-teal-300">$906</td>
                    <td className="p-3.5 text-orange-300">$1,087</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-3.5 font-bold text-white">2 in</td>
                    <td className="p-3.5">12.08</td>
                    <td className="p-3.5 text-teal-300">$1,208</td>
                    <td className="p-3.5 text-orange-300">$1,450</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-3.5 font-bold text-white">3 in</td>
                    <td className="p-3.5">18.13</td>
                    <td className="p-3.5 text-teal-300">$1,813</td>
                    <td className="p-3.5 text-orange-300">$2,176</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-3.5 font-bold text-white">4 in</td>
                    <td className="p-3.5">24.17</td>
                    <td className="p-3.5 text-teal-300">$2,417</td>
                    <td className="p-3.5 text-orange-300">$2,900</td>
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
              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                <p>
                  <strong className="text-teal-300">Size and thickness.</strong> These two numbers set the tonnage. Area is fixed by your site. Thickness is the number you and your contractor decide.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                <p>
                  <strong className="text-teal-300">Price of the mix.</strong> It moves with binder, fuel and aggregate costs, and with the distance from the plant to your site. Our{" "}
                  <Link href="/" className="text-teal-300 underline font-semibold">
                    bitumen calculator
                  </Link>{" "}
                  shows how much of each ton is binder.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                <p>
                  <strong className="text-teal-300">Base preparation.</strong> Excavation, grading and a compacted stone base often cost as much as the asphalt itself, as Example 2 shows. A weak base can lead to cracking and settling, so this line deserves a real quote.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                <p>
                  <strong className="text-teal-300">Removal of an old driveway.</strong> Breaking up, hauling away and disposing of old pavement adds labor and dump fees.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                <p>
                  <strong className="text-teal-300">Access, slope and drainage.</strong> Tight access limits equipment. Steep grades and water control add work.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                <p>
                  <strong className="text-teal-300">Delivery and load size.</strong> Hot mix cools on the road, so plants limit how far it travels. Some plants and contractors charge extra for small loads, so ask about minimums.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                <p>
                  <strong className="text-teal-300">Edging and finishing.</strong> Curbs, aprons and tie-ins to the street add area and labor. Many contractors suggest sealing a new surface later, so ask when and what it costs.
                </p>
              </div>
            </div>
          </section>

          {/* WHAT THE CALCULATOR DOESN'T COUNT */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-4xl font-black text-white border-b border-white/10 pb-3">
              What the Calculator Doesn't Count
            </h2>
            <p className="bg-slate-900/80 p-5 rounded-2xl border border-white/10">
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
              <ul className="space-y-3.5 list-none pl-0">
                {[
                  "Get quotes on identical specs, so the price differences are real.",
                  "Narrow the driveway where the site allows.",
                  "Ask if the contractor will accept site prep you can do, such as clearing plants or moving old stone.",
                  "Ask a neighbor about paving at the same time. Shared delivery and equipment setup can lower each job's cost.",
                  "Ask whether an overlay on the existing surface is possible. An overlay needs less base work and less removal. It suits sound surfaces and doesn't suit badly cracked or failed ones, so the contractor decides after inspecting.",
                ].map((tip, idx) => (
                  <li key={idx} className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
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
                { title: "Counting labor twice.", text: "An installed price per ton already includes labor." },
                { title: "Entering the total job price as the price per ton.", text: "The tool multiplies it by the tons." },
                { title: "Leaving out the base.", text: "The base line is often the second biggest cost." },
                { title: "Mixing tons and tonnes.", text: "One tonne is 1.1023 US tons, a 10% gap." },
                { title: "Entering loose thickness.", text: "Use the compacted thickness of the finished layer." },
                { title: "Comparing quotes at different thicknesses.", text: "A 2 inch quote and a 3 inch quote are two different products." },
              ].map((m, idx) => (
                <li key={idx} className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">✕</span>
                  <p className="text-sm sm:text-base">
                    <strong className="text-white">{m.title}</strong> {m.text}
                  </p>
                </li>
              ))}
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
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="w-10 h-10 rounded-xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center text-violet-400 font-bold">
                <HelpCircle size={20} />
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white">
                FAQs
              </h2>
            </div>
            <div className="space-y-4">
              {FAQ_DATA.map((faq, i) => (
                <div key={i} className="bg-slate-900/80 border border-white/15 p-6 rounded-2xl space-y-2 hover:border-white/30 transition-colors">
                  <h3 className="font-bold text-white text-lg flex items-center gap-2">
                    <span className="text-teal-400 font-mono">Q:</span> {faq.q}
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
              An asphalt driveway cost calculator gives you a number to test quotes against. Measure the area, choose the compacted thickness, enter the price per ton, and list every extra. Then compare the total and the cost per square foot with each quote you receive.
            </p>
            <p className="text-sm italic text-white/60 bg-black/50 p-4 rounded-xl border border-white/10">
              Results are estimates for planning only. Prices vary by location and contractor. Confirm costs with a qualified paving contractor before you commit.
            </p>
          </section>
        </div>
      </article>
    </>
  );
}
