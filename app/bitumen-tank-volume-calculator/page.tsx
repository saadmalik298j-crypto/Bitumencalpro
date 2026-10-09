// app/bitumen-tank-volume-calculator/page.tsx
import Script from "next/script";
import Link from "next/link";
import type { Metadata } from "next";
import TankVolumeCalculator from "./TankVolumeCalculator";
import {
  FlaskConical,
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
  Thermometer,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Bitumen Tank Volume Calculator | Horizontal Cylinder Capacity",
  description:
    "Free bitumen tank volume calculator. Calculate capacity in litres and m³, bitumen weight in tonnes, partial fill from dip depth, and temperature expansion.",
  keywords: [
    "bitumen tank volume calculator",
    "bitumen storage tank capacity",
    "horizontal cylinder tank volume",
    "bitumen dipstick calculator",
    "bitumen thermal expansion",
    "ASTM D4311 density calculator",
  ],
  alternates: { canonical: "https://bitumencalcpro.com/bitumen-tank-volume-calculator/" },
  openGraph: {
    title: "Bitumen Tank Volume Calculator | Horizontal Cylinder Capacity",
    description:
      "Free bitumen tank volume calculator. Calculate capacity in litres and m³, bitumen weight in tonnes, partial fill from dip depth, and temperature expansion.",
    url: "https://bitumencalcpro.com/bitumen-tank-volume-calculator/",
    siteName: "BitumenCalcPro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bitumen Tank Volume Calculator | Horizontal Cylinder Capacity",
    description:
      "Free bitumen tank volume calculator. Calculate capacity in litres and m³, bitumen weight in tonnes, partial fill from dip depth, and temperature expansion.",
  },
};

const FAQ_DATA = [
  {
    q: "What is the formula for bitumen tank volume?",
    a: "For a horizontal cylinder, V = π × r² × L, where r is the inside radius and L is the length, both in metres. For a 2 m × 6 m tank that gives 18.85 m³.",
  },
  {
    q: "How many litres are in a tonne of bitumen?",
    a: "At 1,030 kg/m³ a tonne is about 971 litres. At 160°C, with a density near 944 kg/m³, a tonne takes up about 1,060 litres.",
  },
  {
    q: "What density should I use for bitumen?",
    a: "Use the density at your tank temperature. The 15°C figure from your data sheet works for cold product. For a tank at 160°C, adjust it with the expansion formula above. The 1,030 default sits near the 15°C end.",
  },
  {
    q: "How do I convert a dipstick reading to volume?",
    a: "Divide the depth by the tank diameter, read the volume share from the chart, and enter that percentage in the partial fill field. Or use the segment formula.",
  },
  {
    q: "Does this calculator include dished ends?",
    a: "The core formula treats a straight cylinder with flat ends. Select elliptical or hemispherical heads in the calculator options to include dished ends.",
  },
  {
    q: "How many gallons are in a cubic metre?",
    a: "1 m³ is 264.17 US gallons. A 2 m × 6 m tank holds about 4,980 US gallons.",
  },
  {
    q: "Why does hot bitumen weigh less per cubic metre?",
    a: "Heat expands the liquid. The same mass fills more volume, so each cubic metre holds less mass. A tank at 160°C holds about 9% less weight than the same tank at 15°C.",
  },
  {
    q: "What size tank do I need?",
    a: "Size it from the volume you use between deliveries, plus the margin for expansion and the unusable bitumen at the bottom. Convert tonnes to m³ at your storage temperature.",
  },
];

export default function TankVolumePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Bitumen Tank Volume Calculator",
    url: "https://bitumencalcpro.com/bitumen-tank-volume-calculator/",
    description:
      "Free bitumen tank volume calculator. Calculate capacity in litres and m³, bitumen weight in tonnes, partial fill from dip depth, and temperature expansion.",
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
        id="schema-tank-app"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Script
        id="schema-tank-faq"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO SECTION */}
      <div className="relative pt-16 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-slate-900/40 to-cyan-600/10 pointer-events-none" />
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-blue-500/15 blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-cyan-500/20 blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-white/50 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight size={14} />
            <span className="text-white/80">Bitumen Tank Volume Calculator</span>
          </nav>

          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/25 to-cyan-500/15 border border-blue-500/40 text-blue-200 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-5 shadow-[0_0_20px_rgba(59,130,246,0.25)]">
            <FlaskConical size={16} className="text-blue-400" />
            Horizontal Cylinder Tank Capacity & Thermal Expansion Tool
          </div>

          <h1 className="hero-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-4 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-200 bg-clip-text text-transparent">
              Bitumen Tank Volume
            </span>{" "}
            <span className="text-white">Calculator</span>
          </h1>

          {/* CATCHY SUBTITLE */}
          <p className="text-white/90 text-lg md:text-xl font-medium max-w-3xl mb-8 leading-relaxed drop-shadow">
            Calculate storage tank volume in m³ and litres, dipstick level conversions, and bitumen weight in tonnes. Features ASTM D4311 temperature expansion math for hot bitumen storage.
          </p>

          <div className="flex flex-wrap gap-2.5 mb-10">
            {[
              "Horizontal Cylinder & Dished Heads",
              "Dipstick Circular Segment Math",
              "ASTM D4311 Hot Density Correction",
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
          <div className="bg-slate-900 border border-white/15 rounded-3xl p-2 sm:p-4 shadow-2xl shadow-blue-950/20">
            <TankVolumeCalculator />
          </div>
        </div>
      </div>

      {/* ARTICLE CONTENT */}
      <article className="py-16 text-white/90 leading-relaxed">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 space-y-14 text-base sm:text-lg">
          {/* INTRO STORY PARAGRAPHS */}
          <div className="space-y-5 bg-slate-800/60 border border-white/15 p-6 sm:p-8 rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-300 uppercase tracking-wider mb-1">
              <Calendar size={14} /> Last updated: October 2026
            </div>
            <p className="text-lg font-semibold text-blue-200">
              A tanker arrives with 25 tonnes of bitumen at 160°C. Your tank is 3 m × 6 m and already 40% full. Does the load fit? It doesn’t. The delivery needs 26.5 m³ and the tank has 25.4 m³ free.
            </p>
            <p>
              This bitumen tank volume calculator gives you the capacity of a horizontal cylindrical tank in cubic metres and litres, plus the weight of bitumen inside in tonnes. It handles full tanks and partial fills. Below the tool you’ll find the formulas, worked examples, charts, and the temperature effect behind most weight errors.
            </p>
          </div>

          {/* HOW TO USE */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold">
                <Lightbulb size={20} />
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white">
                How to Use the Bitumen Tank Volume Calculator
              </h2>
            </div>
            <ul className="space-y-3.5 list-none pl-0">
              {[
                "Enter the tank diameter in metres. Use the inside diameter (excluding cladding).",
                "Enter the tank length in metres, measured along the straight cylinder.",
                "Enter the storage temperature (°C) and bitumen density in kg/m³ (default 1,030 @ 15°C). Read the temperature section below before accepting it.",
                "Choose full tank, percentage fill, or enter liquid dip depth directly.",
                "Click Calculate Volume. Read the result in m³, litres and tonnes.",
              ].map((step, idx) => (
                <li key={idx} className="flex items-start gap-3 bg-white/5 border border-white/10 p-4 rounded-xl">
                  <span className="w-7 h-7 rounded-lg bg-blue-500/20 text-blue-300 font-black text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="text-white/80">{step}</span>
                </li>
              ))}
            </ul>
            <div className="bg-slate-900/80 border border-white/10 p-5 rounded-2xl text-sm text-white/70 flex items-start gap-3 shadow-inner">
              <Zap size={18} className="text-teal-400 flex-shrink-0 mt-0.5" />
              <p>
                The tool treats the tank as a straight horizontal cylinder with flat ends (or optional dished ends). A dipstick gives depth, and depth converts to volume with the segment formula.
              </p>
            </div>
          </section>

          {/* FORMULAS */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold">
                <BarChart3 size={20} />
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white">
                Bitumen Tank Volume Formulas
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-900/90 p-6 rounded-2xl border border-blue-500/30 shadow-xl space-y-3">
                <h3 className="text-lg font-bold text-blue-300">1. Full Tank Volume</h3>
                <p className="font-mono text-base text-white bg-black/50 p-4 rounded-xl border border-white/10">
                  V = π × r² × L
                </p>
                <p className="text-sm text-white/70">
                  Here r is the radius (diameter ÷ 2) and L is the length, both in metres. V comes out in m³. Multiply by 1,000 for litres.
                </p>
              </div>

              <div className="bg-slate-900/90 p-6 rounded-2xl border border-teal-500/30 shadow-xl space-y-3">
                <h3 className="text-lg font-bold text-teal-300">2. Bitumen Weight</h3>
                <p className="font-mono text-base text-white bg-black/50 p-4 rounded-xl border border-white/10">
                  Weight (kg) = V (m³) × Density (kg/m³)
                </p>
                <p className="text-sm text-white/70">
                  Divide by 1,000 for tonnes. Divide by 907.185 for US short tons.
                </p>
              </div>

              <div className="bg-slate-900/90 p-6 rounded-2xl border border-cyan-500/30 shadow-xl space-y-3">
                <h3 className="text-lg font-bold text-cyan-300">3. Partial Fill from Liquid Depth</h3>
                <div className="font-mono text-sm sm:text-base text-white bg-black/50 p-4 rounded-xl border border-white/10 space-y-2">
                  <p>Area of liquid = r² × arccos((r − h) ÷ r) − (r − h) × √(2rh − h²)</p>
                  <p>V = Area × L</p>
                </div>
                <p className="text-sm text-white/70">
                  Here h is the depth of bitumen in metres, measured from the bottom of the shell. Work arccos in radians.
                </p>
              </div>

              {/* Conversions table */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white">Quick Conversions</h3>
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
                        <td className="p-3.5 text-blue-300">1 m³</td>
                        <td className="p-3.5">1,000 litres</td>
                      </tr>
                      <tr className="hover:bg-white/5 transition-colors">
                        <td className="p-3.5 text-blue-300">1 m³</td>
                        <td className="p-3.5">264.17 US gallons</td>
                      </tr>
                      <tr className="hover:bg-white/5 transition-colors">
                        <td className="p-3.5 text-blue-300">1 tonne</td>
                        <td className="p-3.5">1.1023 US tons</td>
                      </tr>
                      <tr className="hover:bg-white/5 transition-colors">
                        <td className="p-3.5 text-blue-300">1 US gallon</td>
                        <td className="p-3.5">3.785 litres</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* WORKED EXAMPLES */}
          <section className="space-y-8">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold">
                <FileText size={20} />
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white">
                Worked Examples
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* EXAMPLE 1 */}
              <div className="bg-slate-900/60 border border-white/15 p-6 rounded-2xl space-y-3 hover:border-blue-500/40 transition-all shadow-xl">
                <span className="text-xs font-mono bg-blue-500/20 text-blue-300 px-2.5 py-1 rounded-md font-bold">Example 1</span>
                <h3 className="text-xl font-bold text-white">Full tank</h3>
                <p className="text-sm text-white/80">The tank is 2 m in diameter and 6 m long.</p>
                <div className="font-mono text-xs sm:text-sm text-white/70 space-y-1 bg-black/50 p-4 rounded-xl border border-white/5">
                  <p>Volume: π × 1² × 6 = 18.85 m³ (18,850 L)</p>
                  <p>Weight at 1,030 kg/m³: 19.42 tonnes</p>
                  <p className="text-blue-300 font-bold">Weight at 944 kg/m³ (160°C): 17.79 tonnes</p>
                </div>
              </div>

              {/* EXAMPLE 2 */}
              <div className="bg-slate-900/60 border border-white/15 p-6 rounded-2xl space-y-3 hover:border-blue-500/40 transition-all shadow-xl">
                <span className="text-xs font-mono bg-blue-500/20 text-blue-300 px-2.5 py-1 rounded-md font-bold">Example 2</span>
                <h3 className="text-xl font-bold text-white">Partial fill</h3>
                <p className="text-sm text-white/80">The same tank is 40% full by volume.</p>
                <div className="font-mono text-xs sm:text-sm text-white/70 space-y-1 bg-black/50 p-4 rounded-xl border border-white/5">
                  <p>Volume: 18.85 × 0.40 = 7.54 m³ (7,540 L)</p>
                  <p className="text-blue-300 font-bold">Weight at 944 kg/m³: 7.12 tonnes</p>
                  <p>Weight at 1,030 kg/m³: 7.77 tonnes</p>
                </div>
              </div>

              {/* EXAMPLE 3 */}
              <div className="bg-slate-900/60 border border-white/15 p-6 rounded-2xl space-y-3 hover:border-blue-500/40 transition-all shadow-xl">
                <span className="text-xs font-mono bg-blue-500/20 text-blue-300 px-2.5 py-1 rounded-md font-bold">Example 3</span>
                <h3 className="text-xl font-bold text-white">Dipstick reading</h3>
                <p className="text-sm text-white/80">Tank 2.4 m D × 8 m L. Dipstick shows 0.9 m of bitumen.</p>
                <div className="font-mono text-xs sm:text-sm text-white/70 space-y-1 bg-black/50 p-4 rounded-xl border border-white/5">
                  <p>Full volume: π × 1.2² × 8 = 36.19 m³</p>
                  <p>Depth ratio: 0.9 ÷ 2.4 = 37.5%</p>
                  <p>Liquid volume (segment formula): 12.40 m³</p>
                  <p className="text-blue-300 font-bold">Share of full volume: 34.3%</p>
                </div>
                <p className="text-xs text-white/70">At 944 kg/m³, bitumen weighs 11.70 tonnes. Typing 37.5% instead of 34.3% overstates volume by ~9%.</p>
              </div>

              {/* EXAMPLE 4 */}
              <div className="bg-slate-900/60 border border-white/15 p-6 rounded-2xl space-y-3 hover:border-blue-500/40 transition-all shadow-xl">
                <span className="text-xs font-mono bg-blue-500/20 text-blue-300 px-2.5 py-1 rounded-md font-bold">Example 4</span>
                <h3 className="text-xl font-bold text-white">Will the delivery fit?</h3>
                <p className="text-sm text-white/80">3 m × 6 m tank holds 42.41 m³. Currently 40% full (16.96 m³). Free space: 25.45 m³.</p>
                <div className="font-mono text-xs sm:text-sm text-white/70 space-y-1 bg-black/50 p-4 rounded-xl border border-white/5">
                  <p>25-tonne load @ 944 kg/m³ takes 26.49 m³.</p>
                  <p className="text-red-400 font-bold">Result: DOES NOT FIT (needs 26.49 m³ &gt; 25.45 m³ free)</p>
                </div>
                <p className="text-xs text-white/70">At 1,030 default density, the load would seem to take 24.27 m³ and appear to fit. Density choice flips the answer!</p>
              </div>

              {/* EXAMPLE 5 */}
              <div className="bg-slate-900/60 border border-white/15 p-6 rounded-2xl sm:col-span-2 space-y-3 hover:border-blue-500/40 transition-all shadow-xl">
                <span className="text-xs font-mono bg-blue-500/20 text-blue-300 px-2.5 py-1 rounded-md font-bold">Example 5</span>
                <h3 className="text-xl font-bold text-white">Plant storage</h3>
                <p className="text-sm text-white/80">A plant makes 800 tonnes of mix a day at 5.5% binder (44 tonnes bitumen/day, 132 tonnes over 3 days).</p>
                <div className="font-mono text-xs sm:text-sm text-white/70 space-y-1 bg-black/50 p-4 rounded-xl border border-white/5">
                  <p>At 944 kg/m³, 132 tonnes needs ~140 m³ of working volume.</p>
                  <p>One 3 m × 12 m tank holds 84.8 m³ full.</p>
                  <p className="text-blue-300 font-bold">Two 3 m × 12 m tanks hold 169.6 m³, leaving room for fill margin and bottom heel.</p>
                </div>
              </div>
            </div>
          </section>

          {/* BITUMEN TANK CAPACITY CHART */}
          <section className="space-y-8">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold">
                <BarChart3 size={20} />
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white">
                Bitumen Tank Capacity Chart
              </h2>
            </div>
            <p className="text-sm text-white/70">Full tanks, flat ends. Hot weight uses 944 kg/m³ (160°C).</p>

            <div className="overflow-x-auto bg-slate-900/80 border border-white/15 rounded-2xl shadow-xl">
              <table className="w-full text-left text-sm">
                <thead className="bg-white/10 text-white font-sans">
                  <tr>
                    <th className="p-3.5 border-b border-white/10">Diameter × length</th>
                    <th className="p-3.5 border-b border-white/10">Volume (m³)</th>
                    <th className="p-3.5 border-b border-white/10">Litres</th>
                    <th className="p-3.5 border-b border-white/10">Tonnes @ 1,030</th>
                    <th className="p-3.5 border-b border-white/10">Tonnes @ 944 (160°C)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 text-white/80 font-mono">
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-3.5 text-white font-bold">1.5 m × 4 m</td>
                    <td className="p-3.5 text-blue-300">7.07</td>
                    <td className="p-3.5">7,069</td>
                    <td className="p-3.5">7.3</td>
                    <td className="p-3.5 text-teal-300 font-bold">6.7</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-3.5 text-white font-bold">1.8 m × 5 m</td>
                    <td className="p-3.5 text-blue-300">12.72</td>
                    <td className="p-3.5">12,723</td>
                    <td className="p-3.5">13.1</td>
                    <td className="p-3.5 text-teal-300 font-bold">12.0</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-3.5 text-white font-bold">2.0 m × 6 m</td>
                    <td className="p-3.5 text-blue-300">18.85</td>
                    <td className="p-3.5">18,850</td>
                    <td className="p-3.5">19.4</td>
                    <td className="p-3.5 text-teal-300 font-bold">17.8</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-3.5 text-white font-bold">2.2 m × 8 m</td>
                    <td className="p-3.5 text-blue-300">30.41</td>
                    <td className="p-3.5">30,411</td>
                    <td className="p-3.5">31.3</td>
                    <td className="p-3.5 text-teal-300 font-bold">28.7</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-3.5 text-white font-bold">2.5 m × 10 m</td>
                    <td className="p-3.5 text-blue-300">49.09</td>
                    <td className="p-3.5">49,087</td>
                    <td className="p-3.5">50.6</td>
                    <td className="p-3.5 text-teal-300 font-bold">46.3</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-3.5 text-white font-bold">3.0 m × 12 m</td>
                    <td className="p-3.5 text-blue-300">84.82</td>
                    <td className="p-3.5">84,823</td>
                    <td className="p-3.5">87.4</td>
                    <td className="p-3.5 text-teal-300 font-bold">80.1</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* DIPSTICK DEPTH TO VOLUME CHART */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold">
                <Ruler size={20} />
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white">
                Dipstick Depth to Volume Chart
              </h2>
            </div>
            <p>
              Volume in a horizontal tank does not rise in step with depth. Find your depth as a share of diameter, then read the volume share. Interpolate between rows.
            </p>

            <div className="overflow-x-auto bg-slate-900/80 border border-white/15 rounded-2xl shadow-xl">
              <table className="w-full text-left text-sm font-mono">
                <thead className="bg-white/10 text-white font-sans">
                  <tr>
                    <th className="p-3.5 border-b border-white/10">Depth (% of diameter)</th>
                    <th className="p-3.5 border-b border-white/10">Volume (% of full tank)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 text-white/80">
                  {[
                    { depth: "10%", vol: "5.2%" },
                    { depth: "20%", vol: "14.2%" },
                    { depth: "25%", vol: "19.6%" },
                    { depth: "30%", vol: "25.2%" },
                    { depth: "40%", vol: "37.4%" },
                    { depth: "50%", vol: "50.0%" },
                    { depth: "60%", vol: "62.6%" },
                    { depth: "70%", vol: "74.8%" },
                    { depth: "75%", vol: "80.4%" },
                    { depth: "80%", vol: "85.8%" },
                    { depth: "90%", vol: "94.8%" },
                  ].map((row) => (
                    <tr key={row.depth} className="hover:bg-white/5 transition-colors">
                      <td className="p-3 text-white font-bold">{row.depth}</td>
                      <td className="p-3 text-blue-300 font-bold">{row.vol}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-white/70">
              Half depth is exactly half volume. Near the middle of the tank, a small change in level moves a lot of bitumen, so a 20 mm error in a dip reading matters more there than at either end. Build-up on the tank walls changes the true diameter too, and industry fact sheets warn that horizontal tanks suffer more from this than vertical ones.
            </p>
          </section>

          {/* WHY TEMPERATURE CHANGES BITUMEN WEIGHT */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold">
                <Thermometer size={20} />
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white">
                Why Temperature Changes Bitumen Weight (ASTM D4311)
              </h2>
            </div>
            <p>
              Bitumen expands when heated, so each cubic metre holds less mass at 160°C than at 15°C.{" "}
              <a
                href="https://www.astm.org/d4311_d4311m-15r21.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 underline font-semibold inline-flex items-center gap-1 hover:text-white"
              >
                ASTM D4311 Standard Practice <ExternalLink size={13} />
              </a>{" "}
              sets the base temperature for asphalt volume at 15°C and uses an expansion coefficient of 0.00063 per °C for asphalts denser than 966 kg/m³ at that temperature. Lighter grades use 0.00072.
            </p>

            <div className="bg-slate-900/90 p-5 rounded-2xl border border-blue-500/30 font-mono text-sm sm:text-base text-blue-300">
              ρ(T) = ρ(15°C) ÷ (1 + 0.00063 × (T − 15))
            </div>

            <div className="overflow-x-auto bg-slate-900/80 border border-white/15 rounded-2xl shadow-xl">
              <table className="w-full text-left text-sm font-mono">
                <thead className="bg-white/10 text-white font-sans">
                  <tr>
                    <th className="p-3.5 border-b border-white/10">Temperature</th>
                    <th className="p-3.5 border-b border-white/10">Density (kg/m³)</th>
                    <th className="p-3.5 border-b border-white/10">Litres per tonne</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 text-white/80">
                  {[
                    { temp: "15°C", rho: "1,030", L: "971" },
                    { temp: "25°C", rho: "1,024", L: "977" },
                    { temp: "100°C", rho: "978", L: "1,023" },
                    { temp: "120°C", rho: "966", L: "1,035" },
                    { temp: "140°C", rho: "955", L: "1,047" },
                    { temp: "150°C", rho: "949", L: "1,053" },
                    { temp: "160°C", rho: "944", L: "1,060" },
                    { temp: "170°C", rho: "938", L: "1,066" },
                    { temp: "180°C", rho: "933", L: "1,072" },
                  ].map((r) => (
                    <tr key={r.temp} className="hover:bg-white/5 transition-colors">
                      <td className="p-3 text-white font-bold">{r.temp}</td>
                      <td className="p-3 text-teal-300">{r.rho}</td>
                      <td className="p-3">{r.L}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-white/80">
              Bitumen is commonly stored around 150°C to 160°C, so a tank at working temperature holds about 9% less weight per cubic metre than the 1,030 default implies. Get the density at 15°C from your supplier’s data sheet, then adjust it for your tank temperature.
            </p>
            <p className="text-sm text-white/80">
              Expansion also affects fill levels. A tank filled to 20 m³ at 15°C reaches about 21.8 m³ at 160°C, a rise of 9.1%. Leave headroom for it.
            </p>
          </section>

          {/* TANKS WITH DISHED ENDS */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-4xl font-black text-white border-b border-white/10 pb-3">
              Tanks With Dished Ends
            </h2>
            <p>
              Many bitumen tanks have curved heads. The calculator assumes flat ends by default, so add head volume to the shell volume:
            </p>
            <ul className="space-y-2 font-mono text-sm text-blue-300 list-disc pl-6">
              <li>2:1 elliptical head: π × D³ ÷ 24 per head</li>
              <li>Hemispherical head: π × D³ ÷ 12 per head</li>
            </ul>
            <p className="text-sm text-white/80">
              For a 2 m diameter, two elliptical heads add 2.09 m³, which is 11% of the 18.85 m³ shell in Example 1. Two hemispherical heads add 4.19 m³, or 22%. Torispherical heads follow other formulas. Use the tank maker’s calibration chart for those.
            </p>
          </section>

          {/* TOTAL CAPACITY VS USABLE CAPACITY */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-4xl font-black text-white border-b border-white/10 pb-3">
              Total Capacity vs Usable Capacity
            </h2>
            <p>
              The calculator returns geometric capacity. Usable capacity is smaller.
            </p>
            <p>
              Heating coils must stay under the bitumen.{" "}
              <a
                href="https://www.eurobitume.eu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 underline font-semibold inline-flex items-center gap-1 hover:text-white"
              >
                Eurobitume Storage &amp; Handling Guidance <ExternalLink size={13} />
              </a>{" "}
              tells operators to consider coil position against bitumen level, because exposed coils overheat the product. The draw-off point sits above the tank bottom, so some bitumen stays unavailable. Industry fact sheets built on{" "}
              <a
                href="https://www.bitumenuk.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 underline font-semibold inline-flex items-center gap-1 hover:text-white"
              >
                Refined Bitumen Association (RBA) Guidance <ExternalLink size={13} />
              </a>{" "}
              subtract that unavailable volume, then take another 10% off to reach a safe working capacity. Your site procedure or tank maker sets the real limits.
            </p>
          </section>

          {/* HOW TO MEASURE YOUR TANK */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-4xl font-black text-white border-b border-white/10 pb-3">
              How to Measure Your Tank
            </h2>
            <p>
              Measure the inside diameter of the steel shell. Insulation and cladding add to the outside. A tank that measures 2.2 m over the cladding but has a 2.0 m shell would be overstated by 21%, because volume grows with the square of diameter.
            </p>
            <p>
              Measure length along the cylinder, not including the heads. If the tank has a calibration plate or dip chart, trust it over a tape measure.
            </p>
          </section>

          {/* TYPICAL TANK SIZES */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-4xl font-black text-white border-b border-white/10 pb-3">
              Typical Tank Sizes
            </h2>
            <p>
              Spray distributor trucks commonly carry 1,000 to 4,500 US gallons, which is about 3.8 to 17 m³. Some larger trucks carry 14,000 to 16,000 litres. Plant storage tanks run from tens of cubic metres up to a few hundred. Terminal tanks reach thousands of cubic metres. One recent import terminal built a 7,250 m³ tank.
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
                { title: "Using outside diameter.", text: "Insulation inflates the capacity." },
                { title: "Using the 15°C density for a hot tank.", text: "It overstates weight by about 9% at 160°C." },
                { title: "Entering dip depth as volume %.", text: "A 25% depth is 19.6% volume. A 75% depth is 80.4%." },
                { title: "Ignoring dished heads.", text: "They add 11% to 22% to a 2:1 tank." },
                { title: "Entering millimetres in a metre field.", text: "A diameter of 2,000 instead of 2 makes volume 1,000,000 times too high." },
                { title: "Reading tonnes as US tons.", text: "The gap is 10%." },
                { title: "Filling to the brim cold.", text: "Bitumen expands as it heats." },
              ].map((m, idx) => (
                <li key={idx} className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">✕</span>
                  <p className="text-sm sm:text-base">
                    <strong className="text-white">{m.title}</strong> {m.text}
                  </p>
                </li>
              ))}
            </ul>
            <p className="text-sm text-white/70">
              For binder weight inside a mix, use the{" "}
              <Link href="/" className="text-teal-300 underline font-semibold">
                bitumen calculator
              </Link>
              . For sprayed binder under each layer, use the{" "}
              <Link href="/tack-coat-calculator" className="text-teal-300 underline font-semibold">
                tack coat calculator
              </Link>
              . For mix weight, use the{" "}
              <Link href="/asphalt-tonnage-calculator" className="text-teal-300 underline font-semibold">
                asphalt tonnage calculator
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
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-4">
              {FAQ_DATA.map((faq, i) => (
                <div key={i} className="bg-slate-900/80 border border-white/15 p-6 rounded-2xl space-y-2 hover:border-white/30 transition-colors">
                  <h3 className="font-bold text-white text-lg flex items-center gap-2">
                    <span className="text-blue-400 font-mono">Q:</span> {faq.q}
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
              A bitumen tank volume calculator gives you capacity and weight from three numbers: inside diameter, length and density. Use the density at your tank temperature, convert dip readings to volume before you enter them, and add head volume if your tank has dished ends. Then check what the tank can safely hold, since usable capacity is lower than total capacity.
            </p>
            <p className="text-sm italic text-white/60 bg-black/50 p-4 rounded-xl border border-white/10">
              Results are estimates for planning only. For tank design, loading and safety, consult a qualified process or mechanical engineer.
            </p>
          </section>
        </div>
      </article>
    </>
  );
}
