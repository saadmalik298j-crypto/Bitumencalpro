// app/page.tsx
import Link from "next/link";
import Calculator from "./components/Calculator";
import {
  Info,
  Calculator as CalcIcon,
  Droplets,
  ArrowRight,
  ShieldCheck,
  Zap,
  BookOpen,
  HardHat,
  ChevronRight,
  Compass,
  Lightbulb,
  Target,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BitumenCalcPro — Free Bitumen & Asphalt Calculator",
  description:
    "Calculate the required quantities of bitumen and aggregates for your pavement construction project. Free, fast, and accurate estimates for civil engineers and paving contractors.",
  keywords: [
    "bitumen calculator",
    "asphalt quantity calculator",
    "bitumen content calculation",
    "HMA estimate",
    "pavement materials",
    "civil engineering calculator"
  ],
  alternates: { canonical: "https://bitumencalcpro.com" },
  openGraph: {
    title: "BitumenCalcPro — Free Bitumen & Asphalt Calculator",
    description:
      "Calculate bitumen and aggregate quantities instantly. Built for civil engineers and paving contractors.",
    url: "https://bitumencalcpro.com",
    siteName: "BitumenCalcPro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BitumenCalcPro — Free Bitumen & Asphalt Calculator",
    description: "Calculate bitumen and aggregate quantities instantly. Built for civil engineers and paving contractors.",
  },
};

/* ─────────────────────────────────────────────
   Reference data
───────────────────────────────────────────── */
const REFERENCE_DATA = [
  {
    name: "Dense Graded HMA",
    desc: "General purpose paving — roads, highways, and driveways.",
    range: "5.0% – 6.0%",
    classes: "border-orange-100 bg-orange-50 hover:bg-orange-100",
    textClass: "text-orange-700 border-orange-200 bg-white",
    dot: "bg-orange-500",
  },
  {
    name: "Stone Mastic Asphalt (SMA)",
    desc: "High-traffic highways with excellent rut resistance.",
    range: "6.0% – 7.0%",
    classes: "border-blue-100 bg-blue-50 hover:bg-blue-100",
    textClass: "text-blue-700 border-blue-200 bg-white",
    dot: "bg-blue-500",
  },
  {
    name: "Open Graded Friction Course",
    desc: "Highway surface drainage and noise reduction layer.",
    range: "4.5% – 5.5%",
    classes: "border-violet-100 bg-violet-50 hover:bg-violet-100",
    textClass: "text-violet-700 border-violet-200 bg-white",
    dot: "bg-violet-500",
  },
  {
    name: "Polymer Modified (PMB)",
    desc: "Heavy-duty — airports, industrial areas, bus terminals.",
    range: "5.5% – 7.0%",
    classes: "border-slate-100 bg-slate-50 hover:bg-slate-100",
    textClass: "text-slate-700 border-slate-200 bg-white",
    dot: "bg-slate-600",
  },
] as const;

/* Trust / feature badges */
const TRUST_BADGES = [
  { icon: ShieldCheck, label: "AASHTO-aligned formulas" },
  { icon: Zap,         label: "Instant results" },
  { icon: BookOpen,    label: "Transparent methodology" },
  { icon: HardHat,     label: "Built for site engineers" },
];

/* How-it-works steps */
const STEPS = [
  {
    num: "01",
    icon: CalcIcon,
    color: "orange",
    title: "Calculate Total Volume",
    desc: "Enter your road section's length, width, and compacted layer thickness to determine the total paving volume.",
    formula: "V = L × W × T",
    unit: "m³",
  },
  {
    num: "02",
    icon: ArrowRight,
    color: "blue",
    title: "Determine Mix Weight",
    desc: "Multiply the volume by your chosen asphalt mix density to get the total hot-mix asphalt (HMA) tonnage required.",
    formula: "W = V × Density",
    unit: "tonnes",
  },
  {
    num: "03",
    icon: Droplets,
    color: "violet",
    title: "Extract Bitumen Mass",
    desc: "Apply the design bitumen content percentage to isolate the pure bitumen (binder) quantity from the HMA weight.",
    formula: "Wb = W × (B% ÷ 100)",
    unit: "tonnes",
  },
];

const stepColors: Record<
  string,
  { num: string; icon: string; bg: string; border: string; formula: string }
> = {
  orange: {
    num: "bg-orange-500 text-white",
    icon: "text-orange-500",
    bg: "bg-orange-50",
    border: "border-orange-200",
    formula: "text-orange-700 bg-white border-orange-200",
  },
  blue: {
    num: "bg-blue-600 text-white",
    icon: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-200",
    formula: "text-blue-700 bg-white border-blue-200",
  },
  violet: {
    num: "bg-violet-600 text-white",
    icon: "text-violet-600",
    bg: "bg-violet-50",
    border: "border-violet-200",
    formula: "text-violet-700 bg-white border-violet-200",
  },
};

/* ─────────────────────────────────────────────
   Page
───────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      {/* ═══════════════════════════════
          HERO 
      ═══════════════════════════════ */}
      <div className="relative pt-20 pb-28 overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-violet-600/0 pointer-events-none" />
        <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-orange-500/5 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-[480px] h-[480px] rounded-full bg-violet-600/10 blur-3xl pointer-events-none" />

        <div id="calculator" className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          {/* Tag line */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/20 border border-orange-400/30 text-orange-200 text-sm font-semibold backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-400" />
              </span>
              Real-time estimation engine
            </div>
          </div>

          {/* H1 */}
          <h1 className="text-center text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-4 leading-tight">
            <span className="text-orange-400">Bitumen</span>{" "}
            <span className="text-white">Calculator</span>
          </h1>

          <p className="text-center  text-white  text-lg max-w-2xl mx-auto mb-6 leading-relaxed">
            Instantly calculate bitumen binder and aggregate quantities for any
            road pavement project — using industry-standard HMA formulas trusted
            by civil engineers worldwide.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {TRUST_BADGES.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-white text-xs font-medium"
              >
                <Icon size={13} className="text-orange-400" />
                {label}
              </div>
            ))}
          </div>

          {/* ── CALCULATOR ── */}
          <Calculator />
        </div>
      </div>

      {/* ═══════════════════════════════
          QUICK START GUIDE
      ═══════════════════════════════ */}
      <section className="py-24 border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm">
              <Compass size={14} />
              Quick Start Guide
            </div>
            <h2 className="text-3xl font-black text-white mb-3 shadow-sm">
              How to Use the Calculator
            </h2>
            <p className="text-white/80 max-w-xl mx-auto text-sm leading-relaxed">
              Whether you are a student or a senior pavement engineer, getting accurate estimates takes less than a minute.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Beginner */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-lg relative overflow-hidden group hover:bg-white/20 transition-all">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all">
                <Compass size={100} />
              </div>
              <div className="w-12 h-12 bg-green-500/20 border border-green-400/30 text-green-300 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                <span className="font-black text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Beginner Setup</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Just entering the industry? Start by typing in your basic road dimensions (Length, Width, and Thickness). You can leave the Mix Properties (Bitumen Content and Density) at their default standard values!
              </p>
            </div>

            {/* Intermediate */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-lg relative overflow-hidden group hover:bg-white/20 transition-all mt-0 md:mt-8">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all">
                <Target size={100} />
              </div>
              <div className="w-12 h-12 bg-orange-500/20 border border-orange-400/30 text-orange-300 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                <span className="font-black text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Mix & Match Units</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Don't waste time converting units manually. If your length is in meters but your thickness is in inches, simply change the unit dropdowns next to each field. We handle the complex math automatically.
              </p>
            </div>

            {/* Advanced */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-lg relative overflow-hidden group hover:bg-white/20 transition-all mt-0 md:mt-16">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all">
                <Lightbulb size={100} />
              </div>
              <div className="w-12 h-12 bg-violet-500/20 border border-violet-400/30 text-violet-300 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                <span className="font-black text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Advanced Config</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Use your specific Marshall or Superpave lab report data. Adjust the exact Mix Density and Bitumen Content. Then, set your specific Output Preferences (e.g., Short Tons vs Tonnes) and enter the price for an instant cost estimate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          HOW IT WORKS
      ═══════════════════════════════ */}
      <section
        id="how-it-works"
        className="py-24 border-t border-white/10"
      >
        <div className="max-w-7xl  mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm">
              <BookOpen size={14} />
              Calculation Methodology
            </div>
            <h2 className="text-3xl py-4 font-black text-white mb-2 shadow-sm">
              How the Math Works
            </h2>
            <p className="text-white/80 max-w-xl mx-auto text-sm leading-relaxed">
              We apply the same three-step formula used in AASHTO and BS
              pavement design standards — fully transparent, no black box.
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STEPS.map((step) => {
              const Icon = step.icon;
              const c = stepColors[step.color];
              return (
                <div
                  key={step.num}
                  className={`rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-8 shadow-lg hover:bg-white/20 transition-all`}
                >
                  {/* Step number + icon */}
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center font-black text-sm bg-white/20 text-white`}
                    >
                      {step.num}
                    </div>
                    <Icon size={22} className="text-white" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 shadow-sm">
                    {step.title}
                  </h3>
                  <p className="text-white/80 text-sm mb-5 leading-relaxed">
                    {step.desc}
                  </p>

                  {/* Formula chip */}
                  <div
                    className={`border border-white/20 bg-black/20 rounded-lg px-4 py-2.5 text-sm font-mono font-semibold text-white shadow-inner`}
                  >
                    {step.formula}
                    <span className="ml-2 text-xs font-sans font-normal opacity-60">
                      → {step.unit}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Engineering note */}
          <div className="mt-10 bg-black/20 border border-white/10 rounded-2xl p-5 flex items-start gap-4 backdrop-blur-sm">
            <HardHat size={20} className="text-orange-400 shrink-0 mt-0.5" />
            <p className="text-white/90 text-sm leading-relaxed">
              <strong className="text-white">Engineering Note:</strong> All results are estimates based
              on standard bulk density values. Always cross-check with your
              project-specific mix design report (Marshall or Superpave) before
              procurement. See our{" "}
              <Link
                href="/disclaimer"
                className="underline underline-offset-2 hover:text-white transition-colors font-semibold"
              >
                disclaimer
              </Link>{" "}
              for full details.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          REFERENCE TABLE
      ═══════════════════════════════ */}
      <section
        id="reference"
        className="py-24 border-t border-white/10"
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
            {/* Header */}
            <div className="flex items-start gap-4 mb-2">
              <div className="w-11 h-11 rounded-xl bg-white/20 border border-white/10 flex items-center justify-center shrink-0 shadow-inner">
                <Info size={22} className="text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white shadow-sm">
                  Reference: Typical Bitumen Content by Mix Type
                </h2>
                <p className="text-white/80 text-sm mt-1">
                  Industry-standard bitumen percentages by weight (% by total
                  mix weight) for common HMA mix types. Source: Asphalt
                  Institute & AASHTO.
                </p>
              </div>
            </div>

            <div className="h-px bg-white/20 my-7" />

            <div className="space-y-3">
              {REFERENCE_DATA.map((item) => (
                <div
                  key={item.name}
                  className={`flex justify-between items-center p-4 rounded-xl border border-white/10 bg-black/20 backdrop-blur-sm transition-all cursor-default hover:bg-black/30`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-2.5 h-2.5 rounded-full shrink-0 shadow-[0_0_8px_rgba(255,255,255,0.5)] bg-white`}
                    />
                    <div>
                      <h4 className="font-bold text-white text-sm">
                        {item.name}
                      </h4>
                      <p className="text-xs text-white/70 mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`font-mono font-bold px-3 py-1 rounded-lg border border-white/20 bg-white/10 text-white text-sm ml-4 shrink-0 shadow-inner`}
                  >
                    {item.range}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-white/60 text-xs mt-6 leading-relaxed">
              * These ranges represent typical design values. Actual bitumen
              content must be determined through mix design testing (Marshall or
              Superpave) by a qualified laboratory.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          BOTTOM CTA STRIP
      ═══════════════════════════════ */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-violet-600/0 pointer-events-none" />
        <div className="absolute -top-16 left-1/4 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-3 shadow-sm">
            Questions or Feedback?
          </h2>
          <p className="text-white/90 text-base mb-8 max-w-lg mx-auto leading-relaxed font-medium">
            We're engineers too — if you spot an error, want a new feature, or
            just want to say hello, we&apos;d love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 active:scale-95 text-white px-7 py-3.5 rounded-full font-bold text-sm transition-all shadow-lg shadow-orange-900/40"
            >
              Get in Touch
              <ChevronRight size={16} />
            </Link>
            <Link
              href="/about-us"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-7 py-3.5 rounded-full font-semibold text-sm transition-all"
            >
              About BitumenCalcPro
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}