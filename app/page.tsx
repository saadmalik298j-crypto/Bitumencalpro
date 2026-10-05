// app/page.tsx
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
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
  BarChart,
  Scale,
  AlertTriangle,
  CheckCircle2,
  HelpCircle,
  Settings,
  Layers,
  DollarSign,
  FileText,
  Users,
  Navigation2,
  Milestone,
  Car,
  Footprints,
  Home as HomeIcon,
  Building2,
  Award,
  ExternalLink,
  ShoppingCart,
  FlaskConical,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Bitumen Calculator | Estimate Bitumen & Asphalt Mix",
  description:
    "Estimate bitumen quantity, asphalt mix weight, aggregate weight, and project cost in seconds. Fast, accurate, and free for engineers and contractors.",
  keywords: [
    "bitumen calculator",
    "asphalt quantity calculator",
    "bitumen content calculation",
    "HMA estimate",
    "pavement materials",
    "civil engineering calculator",
  ],
  alternates: { canonical: "https://bitumencalcpro.com" },
  openGraph: {
    title: "Free Bitumen Calculator | Estimate Bitumen & Asphalt Mix",
    description:
      "Estimate bitumen quantity, asphalt mix weight, aggregate weight, and project cost in seconds. Fast, accurate, and free for engineers and contractors.",
    url: "https://bitumencalcpro.com",
    siteName: "BitumenCalcPro",
    type: "website",
    images: [
      {
        url: "/bitumen-calculator-og-image.png",
        width: 1729,
        height: 910,
        alt: "Free Bitumen Calculator — Estimate Bitumen & Asphalt Mix",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Bitumen Calculator | Estimate Bitumen & Asphalt Mix",
    description:
      "Estimate bitumen quantity, asphalt mix weight, aggregate weight, and project cost in seconds. Fast, accurate, and free for engineers and contractors.",
    images: ["/bitumen-calculator-og-image.png"],
  },
};

const REFERENCE_DATA = [
  {
    name: "Dense Graded HMA",
    desc: "General purpose paving — roads, highways, and driveways.",
    range: "5.0% – 6.0%",
  },
  {
    name: "Stone Mastic Asphalt (SMA)",
    desc: "High-traffic highways with excellent rut resistance.",
    range: "6.0% – 7.0%",
  },
  {
    name: "Open Graded Friction Course",
    desc: "Highway surface drainage and noise reduction layer.",
    range: "4.5% – 5.5%",
  },
  {
    name: "Polymer Modified (PMB)",
    desc: "Heavy-duty — airports, industrial areas, bus terminals.",
    range: "5.5% – 7.0%",
  },
] as const;

const STEPS = [
  {
    num: "01",
    icon: CalcIcon,
    color: "orange",
    title: "Step 1: Total Asphalt Volume",
    desc: "The first step is calculating the volume of the asphalt pavement layer.",
    formula: "Total Volume = Length × Width × Thickness",
    unit: "m³",
    example: "1,000 × 3.5 × 0.05 = 175 m³",
  },
  {
    num: "02",
    icon: BarChart,
    color: "blue",
    title: "Step 2: Total HMA Weight",
    desc: "After finding the pavement volume, the calculator converts the volume into total asphalt mixture weight using the HMA density.",
    formula: "Total Asphalt Weight = Volume × Mix Density",
    unit: "tonnes",
    example: "175 × 2,350 = 411,250 kg (411.25 t)",
  },
  {
    num: "03",
    icon: Droplets,
    color: "violet",
    title: "Step 3: Bitumen Quantity",
    desc: "After finding Total Asphalt Weight our calculator then separates the bitumen portion from the total asphalt mixture. Bitumen content represents the percentage of binder contained within the total HMA weight.",
    formula: "Bitumen Quantity = Total Mix Weight × (Bitumen Content ÷ 100)",
    unit: "tonnes",
    example: "411.25 × (5.5 ÷ 100) = 22.62 tonnes",
  },
  {
    num: "04",
    icon: Scale,
    color: "orange",
    title: "Step 4: Aggregate Quantity",
    desc: "The remaining portion of the asphalt mixture is calculated as aggregate weight.",
    formula: "Aggregate Quantity = Total Mix Weight − Bitumen Quantity",
    unit: "tonnes",
    example: "411.25 − 22.62 = 388.63 tonnes",
  },
];

const FAQ_DATA = [
  {
    q: "What is the formula for calculating bitumen quantity?",
    a: "To find the bitumen quantity, first calculate the total asphalt volume (Length × Width × Thickness in metres), then convert to weight using the mix density, then apply the bitumen content percentage. The single combined formula is: Bitumen (kg) = L × W × T × Density × (B% ÷ 100).",
  },
  {
    q: "What inputs do I need to estimate asphalt materials?",
    a: "You'll need: pavement dimensions (length, width, thickness), the compacted HMA mix density (typically 2,200–2,450 kg/m³), and the target bitumen content percentage from your mix design (usually 4–6.5%). For ordering, also add a 2–5% wastage allowance.",
  },
  {
    q: "How do I know what bitumen percentage to use?",
    a: "The exact percentage must come from a lab-approved mix design for your project. As planning estimates: wearing courses typically use 5–6.5%, binder courses 4.5–5.5%, and base courses 4–5%. Always confirm with your supplier before final ordering.",
  },
  {
    q: "What density should I use in a bitumen calculator?",
    a: "Use the compacted HMA mix density, not the pure bitumen binder density. Dense-graded asphalt mixes typically range from 2,200 to 2,450 kg/m³. Pure bitumen density (≈1.03 kg/L or ≈1,030 kg/m³) is only used when converting bitumen weight to litres.",
  },
  {
    q: "How do I convert my pavement volume into tonnes?",
    a: "Multiply total pavement volume (m³) by the compacted mix density (kg/m³), then divide by 1,000 to get tonnes. Example: 175 m³ × 2,350 kg/m³ = 411,250 kg = 411.25 t.",
  },
  {
    q: "Why should I add a wastage factor to my bitumen calculation?",
    a: "Standard civil engineering practice adds 2%–5% wastage to account for site losses, uneven subgrade, edge trimming, and transport loss. For example: 22.62 t net × 1.05 = 23.75 t order quantity.",
  },
  {
    q: "What is the compaction factor for Hot Mix Asphalt (HMA)?",
    a: "The compaction factor is the ratio of loose mix volume to compacted in-place volume. For dense-graded HMA it ranges from 1.15 to 1.25 (average 1.20). Loose volume = Compacted volume × Compaction factor. Confirm the exact value with your supplier.",
  },
  {
    q: "How do I convert bitumen weight to litres and drums?",
    a: "Divide bitumen kg by the pure binder density (typically 1.03 kg/L). Example: 4,428 kg ÷ 1.03 = 4,299 litres. To find drums: Litres ÷ 200 for 200 L drums, or Litres ÷ 20 for 20 L drums.",
  },
];

export default function Home() {
  const webApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": "https://bitumencalcpro.com",
    url: "https://bitumencalcpro.com",
    name: "Bitumen Calculator",
    description:
      "Free online bitumen calculator that estimates bitumen binder quantity, hot mix asphalt (HMA) weight, aggregate quantity, and project cost for pavement construction projects.",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "UtilitiesApplication",
    operatingSystem: "All",
    browserRequirements: "Requires HTML5 canvas or JavaScript support.",
    explanationOfUses:
      "Calculates required volumes and weights for bitumen, hot mix asphalt, and aggregates for pavement civil engineering projects.",
    isAccessibleForFree: true,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: [
      "Bitumen quantity estimation",
      "Hot Mix Asphalt (HMA) weight calculation",
      "Aggregate quantity calculation",
      "Bitumen cost estimation",
      "Multiple unit support (metric and imperial)",
      "Multi-layer pavement calculation",
      "Instant results",
      "AASHTO-aligned formulas",
    ],
    author: {
      "@type": "Organization",
      name: "BitumenCalcPro",
    },
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "BitumenCalcPro",
    url: "https://bitumencalcpro.com",
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "BitumenCalcPro",
    url: "https://bitumencalcpro.com",
    logo: {
      "@type": "ImageObject",
      url: "https://bitumencalcpro.com/logo.png",
      width: 512,
      height: 512,
    },
    sameAs: ["https://twitter.com/bitumencalcpro"],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_DATA.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <>
      {/* ─── JSON-LD Structured Data ─── */}
      <Script
        id="schema-web-application"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }}
      />
      <Script
        id="schema-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <Script
        id="schema-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="schema-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ═══════════════════════════════
          H1: HERO SECTION
          ═══════════════════════════════ */}
      <div className="relative pt-20 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-orange-600/10 pointer-events-none" />
        <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-orange-500/10 blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-[480px] h-[480px] rounded-full bg-teal-500/20 blur-[100px] pointer-events-none" />

        <div id="calculator" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h1 className="hero-heading text-center text-4xl sm:text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight drop-shadow-2xl">
            <span className="bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
              Bitumen
            </span>{" "}
            <span className="text-white">Calculator</span>
          </h1>

          <p className="text-center text-white/90 text-lg md:text-xl font-medium max-w-3xl mx-auto mb-8 leading-relaxed drop-shadow-md">
            Calculate bitumen, asphalt mix weight, and aggregate quantities instantly for any road
            pavement project.
          </p>

          <Calculator />
        </div>
      </div>

      {/* ═══════════════════════════════
          H2: WHAT IS A BITUMEN CALCULATOR?
          ═══════════════════════════════ */}
      <section className="py-24 relative bg-black/10 border-y border-white/5">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500/20 to-transparent border-l-4 border-teal-400 text-white px-4 py-2 rounded-r-lg text-sm font-bold mb-6">
              <Info size={16} className="text-teal-400" />
              Overview
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight drop-shadow-lg">
              What Is a Bitumen Calculator?
            </h2>
          </div>

          <div className="prose prose-invert prose-lg max-w-none mb-12 text-center mx-auto">
            <p className="text-white/80 leading-relaxed mb-5 font-medium text-lg">
              A Bitumen Calculator is an online tool that helps engineers, contractors,
              estimators, and construction professionals calculate the amount of bitumen binder,
              hot mix asphalt (HMA), and aggregates required for pavement and road construction
              projects.
            </p>
            <p className="text-white/70 leading-relaxed mb-5">
              Simply enter the pavement length, width, thickness, mix density, and bitumen
              content, and the calculator instantly estimates the total asphalt volume, mix
              weight, bitumen quantity, aggregate weight, and an optional material cost estimate.
              These calculations support project planning, material estimation, and budgeting.
              To learn more about material properties and classification grades, read our overview on{" "}
              <Link
                href="/blog/what-is-bitumen"
                className="text-teal-400 hover:text-teal-300 font-semibold underline underline-offset-2 transition-colors"
              >
                what bitumen is
              </Link>.
            </p>
          </div>

          {/* Featured Image */}
          <div className="w-full">
            <div className="relative rounded-[2rem] p-4 sm:p-6 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.3)] group max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-teal-500/20 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black/40 border border-white/5">
                <Image
                  src="/civil-engineer-using-bitumen-calculator.webp"
                  alt="Civil engineer using bitumen calculator for pavement estimation"
                  fill
                  loading="eager"
                  fetchPriority="high"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 900px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          H2: HOW TO USE THIS CALCULATOR
          ═══════════════════════════════ */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-teal-500/5 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 text-orange-100 px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-[0_0_15px_rgba(249,115,22,0.2)]">
              <Compass size={16} />
              Quick Start Guide
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 drop-shadow-xl">
              How to Use This Calculator
            </h2>
            <p className="text-white/80 max-w-3xl mx-auto text-lg leading-relaxed font-medium">
              Using the Bitumen Calculator takes three simple steps. You don&apos;t need any software or
              manual formulas — just your project dimensions and mix data.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Step 1 */}
            <div className="bg-gradient-to-b from-white/10 to-transparent border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden group hover:border-white/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(0,0,0,0.3)]">
              <div className="absolute -top-4 -right-4 p-4 opacity-5 group-hover:opacity-10 group-hover:scale-125 transition-all duration-500 text-white">
                <Target size={140} />
              </div>
              <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-green-500/20">
                <span className="font-black text-2xl">1</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Enter Dimensions</h3>
              <p className="text-white/70 text-base leading-relaxed mb-6">
                Enter the length, width, and thickness of the pavement section you&apos;re working on.
                Thickness is usually the smallest number (often in millimetres), so double-check
                units before you calculate. See our{" "}
                <Link
                  href="/blog/asphalt-thickness"
                  className="text-teal-400 hover:text-teal-300 font-semibold underline underline-offset-2 transition-colors"
                >
                  Asphalt Layer Thickness Guide
                </Link>{" "}
                for standard depth recommendations.
              </p>
              <div className="bg-black/40 rounded-xl p-4 border border-white/5 text-sm text-green-300 font-mono shadow-inner">
                Example:
                <br />
                Length: 1,000 m
                <br />
                Width: 3.5 m
                <br />
                Thickness: 50 mm
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-gradient-to-b from-white/10 to-transparent border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden group hover:border-white/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(0,0,0,0.3)] mt-0 md:mt-12">
              <div className="absolute -top-4 -right-4 p-4 opacity-5 group-hover:opacity-10 group-hover:scale-125 transition-all duration-500 text-white">
                <Settings size={140} />
              </div>
              <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-red-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-orange-500/20">
                <span className="font-black text-2xl">2</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Select Units for Dimensions and Results
              </h3>
              <p className="text-white/70 text-base leading-relaxed">
                Our Bitumen Calculator allows users to select different measurement units based on
                project requirements. Users can enter pavement dimensions using suitable units,
                while the calculator automatically converts values internally to perform accurate
                calculations.
                <br />
                <br />
                Using the correct units helps prevent calculation errors and ensures the final
                asphalt, bitumen, and aggregate quantities are displayed in the required format.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-gradient-to-b from-white/10 to-transparent border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden group hover:border-white/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(0,0,0,0.3)] mt-0 md:mt-24">
              <div className="absolute -top-4 -right-4 p-4 opacity-5 group-hover:opacity-10 group-hover:scale-125 transition-all duration-500 text-white">
                <Lightbulb size={140} />
              </div>
              <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-purple-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-violet-500/20">
                <span className="font-black text-2xl">3</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Enter Mix Properties (Density, Bitumen %)
              </h3>
              <p className="text-white/70 text-base leading-relaxed mb-6">
                Add the mix density (kg/m³) and the bitumen content percentage from your approved
                mix design. If you don&apos;t have a project-specific value, a typical reference range is
                fine for early-stage estimating.
              </p>
              <div className="text-white/70 text-sm leading-relaxed border-t border-white/10 pt-4 mt-2">
                <strong className="text-white block mb-1">Optional: Cost &amp; Advanced Settings</strong>
                Enter a price per unit for a budgeting cost figure. You can also configure advanced options like wastage allowances, compaction factors, and custom binder density.
              </div>
            </div>
          </div>

          {/* ═══════════════════════════════
              H2: CALCULATOR INPUTS AT A GLANCE
              ═══════════════════════════════ */}
          <div className="mt-20 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl max-w-5xl mx-auto">
            <div className="p-6 md:p-8 bg-black/40 border-b border-white/5">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <FileText className="text-teal-400" size={28} /> Calculator Inputs at a Glance
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-white text-base">
                <thead className="bg-white/5">
                  <tr>
                    <th className="p-5 md:p-6 font-bold uppercase tracking-wider text-sm border-b border-white/10 text-white/50">
                      Input
                    </th>
                    <th className="p-5 md:p-6 font-bold uppercase tracking-wider text-sm border-b border-white/10 text-white/50">
                      Description
                    </th>
                    <th className="p-5 md:p-6 font-bold uppercase tracking-wider text-sm border-b border-white/10 text-white/50">
                      Unit
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr className="hover:bg-white/5 transition-colors group">
                    <td className="p-5 md:p-6 font-bold text-orange-300 group-hover:text-orange-200">
                      Length
                    </td>
                    <td className="p-5 md:p-6 text-white/80">Total pavement section length</td>
                    <td className="p-5 md:p-6 font-mono text-sm text-white/60 bg-black/20 rounded-md m-2 inline-block">
                      m, ft, cm, mm, in, yd
                    </td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors group">
                    <td className="p-5 md:p-6 font-bold text-orange-300 group-hover:text-orange-200">
                      Width
                    </td>
                    <td className="p-5 md:p-6 text-white/80">Pavement width</td>
                    <td className="p-5 md:p-6 font-mono text-sm text-white/60 bg-black/20 rounded-md m-2 inline-block">
                      m, ft, cm, mm, in, yd
                    </td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors group">
                    <td className="p-5 md:p-6 font-bold text-orange-300 group-hover:text-orange-200">
                      Thickness
                    </td>
                    <td className="p-5 md:p-6 text-white/80">Asphalt layer thickness</td>
                    <td className="p-5 md:p-6 font-mono text-sm text-white/60 bg-black/20 rounded-md m-2 inline-block">
                      m, ft, cm, mm, in, yd
                    </td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors group">
                    <td className="p-5 md:p-6 font-bold text-blue-300 group-hover:text-blue-200">
                      Mix Density
                    </td>
                    <td className="p-5 md:p-6 text-white/80">
                      Weight of compacted HMA per cubic meter
                    </td>
                    <td className="p-5 md:p-6 font-mono text-sm text-white/60 bg-black/20 rounded-md m-2 inline-block">
                      kg/m³, lb/yd³, lb/ft³
                    </td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors group">
                    <td className="p-5 md:p-6 font-bold text-violet-300 group-hover:text-violet-200">
                      Bitumen Content
                    </td>
                    <td className="p-5 md:p-6 text-white/80">
                      Binder percentage in total asphalt mix
                    </td>
                    <td className="p-5 md:p-6 font-mono text-sm text-white/60 bg-black/20 rounded-md m-2 inline-block">
                      %
                    </td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors group">
                    <td className="p-5 md:p-6 font-bold text-green-300 group-hover:text-green-200">
                      Bitumen Price
                    </td>
                    <td className="p-5 md:p-6 text-white/80">Optional binder cost calculation</td>
                    <td className="p-5 md:p-6 font-mono text-sm text-white/60 bg-black/20 rounded-md m-2 inline-block">
                      $/unit or local currency
                    </td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors group">
                    <td className="p-5 md:p-6 font-bold text-amber-300 group-hover:text-amber-200 flex items-center gap-2">
                      <ShoppingCart size={16} /> Wastage Allowance
                    </td>
                    <td className="p-5 md:p-6 text-white/80">Extra percentage to add to the order quantity</td>
                    <td className="p-5 md:p-6 font-mono text-sm text-white/60 bg-black/20 rounded-md m-2 inline-block">
                      %
                    </td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors group">
                    <td className="p-5 md:p-6 font-bold text-sky-300 group-hover:text-sky-200 flex items-center gap-2">
                      <Layers size={16} /> Compaction Factor
                    </td>
                    <td className="p-5 md:p-6 text-white/80">Ratio to convert compacted volume to loose volume</td>
                    <td className="p-5 md:p-6 font-mono text-sm text-white/60 bg-black/20 rounded-md m-2 inline-block">
                      ratio (e.g. 1.00)
                    </td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors group">
                    <td className="p-5 md:p-6 font-bold text-teal-300 group-hover:text-teal-200 flex items-center gap-2">
                      <FlaskConical size={16} /> Binder Density
                    </td>
                    <td className="p-5 md:p-6 text-white/80">Density of pure bitumen for litres conversion</td>
                    <td className="p-5 md:p-6 font-mono text-sm text-white/60 bg-black/20 rounded-md m-2 inline-block">
                      kg/L
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          H2: BITUMEN CALCULATION FORMULA & STEP-BY-STEP METHOD
          ═══════════════════════════════ */}
      <section id="how-it-works" className="py-24 bg-black/20 border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-16 max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-transparent border-l-4 border-blue-400 text-white px-4 py-2 rounded-r-lg text-sm font-bold mb-6">
              <BookOpen size={16} className="text-blue-400" />
              Calculation Methodology
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 drop-shadow-lg">
              Bitumen Calculation Formula &amp; Step-by-Step Method
            </h2>
            <div className="prose prose-invert prose-lg max-w-none w-full text-center">
              <p className="text-white/80 font-medium leading-relaxed mb-6">
                This Bitumen Quantity Calculator uses standard pavement material estimation
                formulas to convert project dimensions and asphalt mix properties into total
                material requirements.
              </p>
              <p className="text-white/70 leading-relaxed mb-6">
                The calculation process follows four main steps. Each calculation uses the values
                entered by the user, including pavement dimensions, mix density, and bitumen
                content percentage.
              </p>

              {/* H3: Complete Bitumen Calculation Formula */}
              <h3 className="text-xl font-bold text-white mb-3 mt-8">
                Complete Bitumen Calculation Formula
              </h3>
              <p className="text-white/70 leading-relaxed mb-4">
                For a quick estimate, the entire process can be combined into one calculation:
              </p>
              <div className="bg-gradient-to-r from-blue-900/40 to-violet-900/40 p-4 rounded-xl border border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.15)] inline-block">
                <strong className="text-white font-mono text-sm md:text-base">
                  Bitumen Quantity = (Length × Width × Thickness in meters × Mix Density) ×
                  (Bitumen Content ÷ 100)
                </strong>
              </div>
              <p className="text-white/60 text-sm mt-3 italic">
                This formula helps estimate the approximate binder requirement for an asphalt
                pavement section. You can refer to our{" "}
                <Link
                  href="/blog/bitumen-density-chart"
                  className="text-teal-400 hover:text-teal-300 font-semibold underline underline-offset-2 transition-colors not-italic"
                >
                  Bitumen &amp; Asphalt Density Chart
                </Link>{" "}
                for standard job-mix values.
              </p>
            </div>

            <div className="w-full mt-12">
              <div className="relative rounded-[2rem] p-4 sm:p-6 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.3)] group max-w-4xl mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black/40 border border-white/5">
                  <Image
                    src="/bitumen-calculator-calculation-process.webp"
                    alt="Bitumen calculator calculation process visualization"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 900px"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Steps Grid (H3 for Step 1-4) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {STEPS.map((step) => {
              return (
                <div
                  key={step.num}
                  className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8 shadow-2xl hover:border-white/30 transition-all duration-300 flex flex-col group hover:-translate-y-1"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center font-black text-lg bg-white/10 text-white border border-white/20 shadow-inner group-hover:bg-white/20 transition-colors">
                      {step.num}
                    </div>
                    <h3 className="text-2xl font-bold text-white shadow-sm leading-tight">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-white/70 text-lg mb-8 leading-relaxed flex-grow">
                    {step.desc}
                  </p>

                  <div className="bg-black/40 rounded-2xl p-6 border border-white/5 shadow-inner mt-auto">
                    <div className="text-xs text-white/40 uppercase tracking-widest font-black mb-2">
                      Formula
                    </div>
                    <div className="text-orange-300 font-mono font-bold text-sm md:text-base mb-5">
                      {step.formula}
                    </div>

                    <div className="text-xs text-white/40 uppercase tracking-widest font-black mb-2">
                      Example Calculation
                    </div>
                    <div className="text-green-300 font-mono font-bold text-sm md:text-base">
                      {step.example}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* H3: Bitumen Cost Calculation */}
          <div className="mt-12 bg-gradient-to-r from-emerald-500/20 to-teal-600/20 rounded-3xl border border-emerald-500/30 p-8 md:p-10 shadow-[0_0_40px_rgba(16,185,129,0.1)]">
            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center font-black text-xl bg-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                <DollarSign size={28} />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-black text-white shadow-sm">
                  Bitumen Cost Calculation
                </h3>
                <p className="text-emerald-100/80 text-lg mt-2">
                  The calculator can also estimate the approximate bitumen cost based on the
                  calculated binder quantity.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
              <div className="bg-black/40 rounded-2xl p-6 border border-emerald-500/20 shadow-inner">
                <div className="text-xs text-emerald-300/60 uppercase tracking-widest font-black mb-2">
                  Formula
                </div>
                <div className="text-emerald-300 font-mono font-bold text-sm md:text-base">
                  Bitumen Cost = Bitumen Required × Bitumen Price per Unit Weight
                </div>
              </div>
              <div className="bg-black/40 rounded-2xl p-6 border border-emerald-500/20 shadow-inner">
                <div className="text-xs text-emerald-300/60 uppercase tracking-widest font-black mb-2">
                  Example Calculation
                </div>
                <div className="text-emerald-300 font-mono font-bold text-sm md:text-base">
                  <span className="text-white/50 text-xs block mb-1">
                    Bitumen Required: 22.62 tonnes | Price: $500/tonne
                  </span>
                  22.62 × 500 = $11,309.38
                </div>
              </div>
            </div>
            <p className="text-emerald-200/60 text-sm mt-6 font-medium bg-black/20 p-4 rounded-xl inline-block border border-emerald-500/10">
              The cost result is an estimate only. Actual prices may vary depending on supplier,
              location, bitumen grade, transportation, and market conditions.
            </p>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════
          H2: ALL BITUMEN FORMULAS AT A GLANCE
          ═══════════════════════════════ */}
      <section id="bitumen-formulas" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500/20 to-transparent border-l-4 border-violet-400 text-white px-4 py-2 rounded-r-lg text-sm font-bold mb-6">
              <FileText size={15} className="text-violet-400" />
              Formula Reference
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 drop-shadow-xl">
              All Bitumen Formulas at a Glance
            </h2>
            <p className="text-white/60 text-lg max-w-2xl">
              Every equation used in bitumen estimation — grouped by category for quick reference.
            </p>
          </div>

          {/* Formula Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Category 1: Core Quantities */}
            <div className="bg-gradient-to-br from-violet-500/10 to-violet-500/5 border border-violet-400/20 rounded-3xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-violet-500/20 border border-violet-400/30 flex items-center justify-center">
                  <CalcIcon size={18} className="text-violet-400" />
                </div>
                <span className="text-violet-300 font-black text-xs uppercase tracking-widest">Core Quantities</span>
              </div>
              <div className="space-y-4">
                {[
                  { name: "Bitumen (kg)", eq: "L × W × T × ρ × (B% ÷ 100)" },
                  { name: "Bitumen %", eq: "(bitumen wt ÷ mix wt) × 100" },
                  { name: "Aggregate wt", eq: "Mix wt × ((100 − B%) ÷ 100)" },
                  { name: "Bitumen / m²", eq: "T (m) × ρ × (B% ÷ 100)" },
                ].map(({ name, eq }) => (
                  <div key={name} className="bg-black/30 rounded-xl p-4 border border-white/5">
                    <div className="text-white/50 text-[10px] uppercase tracking-widest font-black mb-1">{name}</div>
                    <div className="text-white font-mono text-xs md:text-sm font-semibold">{eq}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Category 2: Ordering & Volume */}
            <div className="bg-gradient-to-br from-orange-500/10 to-orange-500/5 border border-orange-400/20 rounded-3xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-orange-500/20 border border-orange-400/30 flex items-center justify-center">
                  <ShoppingCart size={18} className="text-orange-400" />
                </div>
                <span className="text-orange-300 font-black text-xs uppercase tracking-widest">Ordering &amp; Volume</span>
              </div>
              <div className="space-y-4">
                {[
                  { name: "Order quantity", eq: "Net bitumen × (1 + wastage% ÷ 100)" },
                  { name: "Loose volume", eq: "Compacted vol × compaction factor" },
                  { name: "Litres", eq: "Bitumen kg ÷ binder density (kg/L)" },
                  { name: "Drums (200 L)", eq: "Litres ÷ 200" },
                ].map(({ name, eq }) => (
                  <div key={name} className="bg-black/30 rounded-xl p-4 border border-white/5">
                    <div className="text-white/50 text-[10px] uppercase tracking-widest font-black mb-1">{name}</div>
                    <div className="text-orange-200 font-mono text-xs md:text-sm font-semibold">{eq}</div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-orange-200/60 text-xs bg-orange-500/10 border border-orange-500/20 rounded-xl px-3 py-2">
                ⚠️ Typical planning values are around 1.15 to 1.25; confirm with your supplier.
              </p>
            </div>

            {/* Category 3: Cost + Unit Conversions */}
            <div className="bg-gradient-to-br from-teal-500/10 to-teal-500/5 border border-teal-400/20 rounded-3xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-400/30 flex items-center justify-center">
                  <DollarSign size={18} className="text-teal-400" />
                </div>
                <span className="text-teal-300 font-black text-xs uppercase tracking-widest">Cost &amp; Conversions</span>
              </div>
              <div className="space-y-4 mb-4">
                <div className="bg-black/30 rounded-xl p-4 border border-white/5">
                  <div className="text-white/50 text-[10px] uppercase tracking-widest font-black mb-1">Cost</div>
                  <div className="text-teal-200 font-mono text-xs md:text-sm font-semibold">Bitumen t × price/tonne</div>
                </div>
              </div>
              <div className="bg-blue-900/20 border border-blue-500/15 rounded-2xl p-4">
                <div className="text-blue-300/70 text-[10px] uppercase tracking-widest font-black mb-3">Unit Conversions</div>
                <div className="space-y-1.5 font-mono text-xs text-white/70">
                  {[
                    "mm ÷ 1000 = m",
                    "ft × 0.3048 = m",
                    "in × 25.4 = mm",
                    "lb/ft³ × 16.0185 = kg/m³",
                    "lb/yd³ × 0.5933 = kg/m³",
                    "1 short ton = 907.185 kg",
                  ].map((c) => (
                    <div key={c} className="bg-white/5 rounded px-2.5 py-1">{c}</div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          H2: WORKED EXAMPLES
          ═══════════════════════════════ */}
      <section className="py-24 bg-black/20 border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-100 px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-[0_0_15px_rgba(34,197,94,0.2)]">
              <CheckCircle2 size={16} />
              Practical Applications
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 drop-shadow-xl">
              Worked Examples
            </h2>
            <p className="text-white/80 max-w-3xl mx-auto text-lg leading-relaxed">
              Explore step-by-step worked examples for different project scenarios, from single roads and driveways to complex multi-layer highways.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* H3: Road Section (1 km) */}
            <div className="bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-teal-500 text-white text-xs font-black flex items-center justify-center shrink-0">1</span>
                <h3 className="text-2xl font-black text-white">Road Section (1 km)</h3>
              </div>
              <p className="text-white/70 text-sm mb-6">
                Standard single-carriageway road section measuring 1,000 metres long by 3.5 metres wide with a 50 mm wearing course layer and 5.5% bitumen content.
              </p>
              <div className="font-mono text-sm space-y-2 text-white/80 bg-black/30 p-5 rounded-2xl border border-white/5">
                <p>Volume: 1,000 × 3.5 × 0.050 = <span className="text-teal-300 font-bold">175 m³</span></p>
                <p>Mix Weight: 175 × 2,350 = <span className="text-teal-300 font-bold">411.25 tonnes</span></p>
                <p>Net Bitumen: 411.25 × 0.055 = <span className="text-orange-300 font-bold">22.62 tonnes</span></p>
                <p>Order (+5% Wastage): 22.62 × 1.05 = <span className="text-orange-300 font-bold">23.75 tonnes</span></p>
                <p>Loose Volume (CF 1.20): 175 × 1.20 = <span className="text-teal-300 font-bold">210 m³</span></p>
              </div>
            </div>

            {/* H3: Driveway (Metric) */}
            <div className="bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-orange-500 text-white text-xs font-black flex items-center justify-center shrink-0">2</span>
                <h3 className="text-2xl font-black text-white">Driveway (Metric)</h3>
              </div>
              <p className="text-white/70 text-sm mb-6">
                Residential driveway measuring 15 metres long by 4 metres wide with a 40 mm asphalt layer and 5.5% bitumen content.
              </p>
              <div className="font-mono text-sm space-y-2 text-white/80 bg-black/30 p-5 rounded-2xl border border-white/5">
                <p>Volume: 15 × 4 × 0.040 = <span className="text-teal-300 font-bold">2.4 m³</span></p>
                <p>Mix Weight: 2.4 × 2,350 = <span className="text-teal-300 font-bold">5,640 kg</span></p>
                <p>Bitumen Weight: 5,640 × 0.055 = <span className="text-orange-300 font-bold">310.2 kg</span></p>
                <p className="text-white/50 text-xs pt-2">
                  Volume of binder: 310.2 ÷ 1.03 ≈ <span className="text-teal-300 font-bold">301 L</span> (approx. 15 × 20 L drums)
                </p>
              </div>
            </div>

            {/* H3: Car Park with Wastage and Loose Volume */}
            <div className="bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-blue-500 text-white text-xs font-black flex items-center justify-center shrink-0">3</span>
                <h3 className="text-2xl font-black text-white">Car Park with Wastage and Loose Volume</h3>
              </div>
              <p className="text-white/70 text-sm mb-6">
                Commercial car park measuring 40 m × 25 m (1,000 m²) at 50 mm thickness, including 3% wastage and a compaction factor of 1.20.
              </p>
              <div className="font-mono text-sm space-y-2 text-white/80 bg-black/30 p-5 rounded-2xl border border-white/5">
                <p>Mix Weight: 1,000 m² × 0.050 × 2,350 = <span className="text-teal-300 font-bold">117.5 tonnes</span></p>
                <p>Net Bitumen: 117,500 kg × 0.055 = <span className="text-orange-300 font-bold">6.46 tonnes</span></p>
                <p>Order (+3% Wastage): 6.46 × 1.03 = <span className="text-orange-300 font-bold">6.66 tonnes</span></p>
                <p>Loose Volume: 50 m³ × 1.20 = <span className="text-teal-300 font-bold">60 m³</span> (≈ 31 × 200 L drums)</p>
              </div>
            </div>

            {/* H3: Imperial Units Example */}
            <div className="bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-yellow-500 text-white text-xs font-black flex items-center justify-center shrink-0">4</span>
                <h3 className="text-2xl font-black text-white">Imperial Units Example</h3>
              </div>
              <p className="text-white/70 text-sm mb-6">
                US highway section measuring 1 mile (5,280 ft) by 12 ft wide at 2 in thickness using 145 lb/ft³ mix density and 5.0% bitumen content.
              </p>
              <div className="font-mono text-sm space-y-2 text-white/80 bg-black/30 p-5 rounded-2xl border border-white/5">
                <p>Volume: 5,280 × 12 × (2 ÷ 12) = <span className="text-teal-300 font-bold">10,560 ft³</span></p>
                <p>Mix Weight: 10,560 × 145 = <span className="text-teal-300 font-bold">765.6 short tons</span> (1,531,200 lb)</p>
                <p>Bitumen: 765.6 × 0.05 = <span className="text-orange-300 font-bold">38.28 short tons</span></p>
                <p className="text-white/50 text-xs pt-2">
                  Metric Conversion: 38.28 × 907.185 kg = 34,715 kg ≈ <span className="text-orange-300 font-bold">34.7 tonnes</span>
                </p>
              </div>
            </div>

          </div>

          {/* H3: Multi-Layer Highway */}
          <div className="mt-10 bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-full bg-violet-500 text-white text-xs font-black flex items-center justify-center shrink-0">5</span>
              <h3 className="text-2xl md:text-3xl font-black text-white">Multi-Layer Highway</h3>
            </div>
            <p className="text-white/80 text-base leading-relaxed mb-6">
              Most highway pavements consist of three distinct courses (base course, binder course, wearing course), each with a specific thickness and binder content. Calculating them separately gives the exact procurement requirement.
            </p>

            <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden text-base shadow-2xl w-full text-left">
              <div className="p-5 bg-black/40 border-b border-white/5">
                <h4 className="font-bold text-white text-sm">3-Layer Pavement Worked Example (1 km × 3.5 m)</h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-white/90 min-w-[500px]">
                  <thead className="bg-black/20 border-b border-white/10 text-white/50 text-sm uppercase tracking-wider">
                    <tr>
                      <th className="p-4 md:p-5">Layer</th>
                      <th className="p-4 md:p-5">Thickness</th>
                      <th className="p-4 md:p-5">Bitumen %</th>
                      <th className="p-4 md:p-5">Mix Weight</th>
                      <th className="p-4 md:p-5 text-orange-300">Bitumen Weight</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 font-medium">
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="p-4 md:p-5 font-bold text-white">Base course</td>
                      <td className="p-4 md:p-5 text-white/70">75 mm</td>
                      <td className="p-4 md:p-5 text-white/70">4.0%</td>
                      <td className="p-4 md:p-5 font-mono text-sm">616.9 t</td>
                      <td className="p-4 md:p-5 text-orange-300 font-mono text-sm bg-orange-900/10">
                        24.7 t
                      </td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="p-4 md:p-5 font-bold text-white">Binder course</td>
                      <td className="p-4 md:p-5 text-white/70">50 mm</td>
                      <td className="p-4 md:p-5 text-white/70">4.5%</td>
                      <td className="p-4 md:p-5 font-mono text-sm">411.3 t</td>
                      <td className="p-4 md:p-5 text-orange-300 font-mono text-sm bg-orange-900/10">
                        18.5 t
                      </td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="p-4 md:p-5 font-bold text-white">Wearing course</td>
                      <td className="p-4 md:p-5 text-white/70">40 mm</td>
                      <td className="p-4 md:p-5 text-white/70">5.5%</td>
                      <td className="p-4 md:p-5 font-mono text-sm">329.0 t</td>
                      <td className="p-4 md:p-5 text-orange-300 font-mono text-sm bg-orange-900/10">
                        18.1 t
                      </td>
                    </tr>
                  </tbody>
                  <tfoot className="bg-gradient-to-r from-orange-900/40 to-orange-900/10 border-t border-orange-500/20 font-black">
                    <tr>
                      <td colSpan={4} className="p-5 text-right text-orange-100">
                        Total bitumen required across all three layers:
                      </td>
                      <td className="p-5 text-orange-400 font-mono text-lg">≈ 61.3 t</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>

            <div className="mt-6 bg-orange-500/10 border border-orange-500/20 rounded-2xl px-6 py-4">
              <p className="text-orange-200/80 text-sm font-medium">
                <span className="text-orange-300 font-black">With 5% wastage:</span> 61.3 t × 1.05 = <span className="text-orange-300 font-black">64.4 t order quantity.</span> Always add a wastage allowance (2–5%) before placing your procurement order.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          H2: QUICK LOOKUP TABLES
          ═══════════════════════════════ */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-500/30 text-teal-100 px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-[0_0_15px_rgba(20,184,166,0.2)]">
              <BarChart size={16} className="text-teal-400" />
              Reference Guides
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 drop-shadow-xl">
              Quick Lookup Tables
            </h2>
            <p className="text-white/80 max-w-3xl mx-auto text-lg leading-relaxed">
              Use these quick reference tables for rapid material estimation across typical road dimensions and mix binder ratios.
            </p>
          </div>

          <div className="space-y-12 max-w-5xl mx-auto">

            {/* H3: Bitumen Required for a 1 km Road */}
            <div className="bg-gradient-to-br from-white/8 to-white/3 border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl">
              <div className="flex flex-col sm:flex-row sm:items-end gap-3 mb-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-white">Bitumen Required for a 1 km Road</h3>
                  <p className="text-white/50 text-sm mt-1">
                    Road dimensions: 1 km (1,000 m) length × 3.5 m width, mix density 2,350 kg/m³. Values are <span className="text-orange-300 font-bold">tonnes of bitumen binder</span>.
                  </p>
                </div>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-white/10">
                <table className="w-full text-sm min-w-[480px]">
                  <thead>
                    <tr className="bg-white/10 border-b border-white/10">
                      <th className="text-left px-5 py-3.5 text-white/60 font-black uppercase tracking-widest text-xs">Thickness</th>
                      <th className="text-right px-5 py-3.5 text-white/50 font-black uppercase tracking-widest text-xs">Mix (t)</th>
                      <th className="text-right px-5 py-3.5 text-teal-300/80 font-black uppercase tracking-widest text-xs">4.5%</th>
                      <th className="text-right px-5 py-3.5 text-teal-300/80 font-black uppercase tracking-widest text-xs">5.0%</th>
                      <th className="text-right px-5 py-3.5 text-orange-300/80 font-black uppercase tracking-widest text-xs">5.5%</th>
                      <th className="text-right px-5 py-3.5 text-orange-300/80 font-black uppercase tracking-widest text-xs">6.0%</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {[
                      { t: "30 mm",  mix: "246.75", v45: "11.10", v50: "12.34", v55: "13.57", v60: "14.81" },
                      { t: "40 mm",  mix: "329.00", v45: "14.81", v50: "16.45", v55: "18.10", v60: "19.74" },
                      { t: "50 mm",  mix: "411.25", v45: "18.51", v50: "20.56", v55: "22.62", v60: "24.68" },
                      { t: "75 mm",  mix: "616.88", v45: "27.76", v50: "30.84", v55: "33.93", v60: "37.01" },
                      { t: "100 mm", mix: "822.50", v45: "37.01", v50: "41.13", v55: "45.24", v60: "49.35" },
                    ].map((row) => (
                      <tr key={row.t} className="hover:bg-white/5 transition-colors">
                        <td className="px-5 py-4 text-white font-semibold">{row.t}</td>
                        <td className="px-5 py-4 text-white/50 text-right font-mono">{row.mix}</td>
                        <td className="px-5 py-4 text-teal-300 text-right font-mono font-bold">{row.v45}</td>
                        <td className="px-5 py-4 text-teal-300 text-right font-mono font-bold">{row.v50}</td>
                        <td className="px-5 py-4 text-orange-300 text-right font-mono font-bold">{row.v55}</td>
                        <td className="px-5 py-4 text-orange-300 text-right font-mono font-bold">{row.v60}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* H3: Bitumen per Tonne of Asphalt */}
            <div className="bg-gradient-to-br from-white/8 to-white/3 border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl">
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-black text-white">Bitumen per Tonne of Asphalt</h3>
                <p className="text-white/50 text-sm mt-1">
                  Bitumen and aggregate weight breakdown per 1 tonne (1,000 kg) of total asphalt mix.
                </p>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-white/10">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-white/10 border-b border-white/10">
                      <th className="text-left px-5 py-3.5 text-white/60 font-black uppercase tracking-widest text-xs">Bitumen Content (B%)</th>
                      <th className="text-right px-5 py-3.5 text-orange-300/80 font-black uppercase tracking-widest text-xs">Bitumen Weight</th>
                      <th className="text-right px-5 py-3.5 text-white/60 font-black uppercase tracking-widest text-xs">Aggregate Weight</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {[
                      { pct: "4.5%", bit: "45 kg", agg: "955 kg" },
                      { pct: "5.0%", bit: "50 kg", agg: "950 kg" },
                      { pct: "5.5%", bit: "55 kg", agg: "945 kg" },
                      { pct: "6.0%", bit: "60 kg", agg: "940 kg" },
                      { pct: "6.5%", bit: "65 kg", agg: "935 kg" },
                    ].map((row) => (
                      <tr key={row.pct} className="hover:bg-white/5 transition-colors">
                        <td className="px-5 py-4 text-white font-semibold">{row.pct}</td>
                        <td className="px-5 py-4 text-orange-300 text-right font-mono font-bold">{row.bit}</td>
                        <td className="px-5 py-4 text-white/60 text-right font-mono">{row.agg}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          H2: PAVEMENT ENGINEERING CONCEPTS
          ═══════════════════════════════ */}
      <section className="py-24 relative overflow-hidden bg-black/20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 drop-shadow-xl">
              Pavement Engineering Concepts
            </h2>
            <p className="text-white/80 max-w-3xl mx-auto text-lg leading-relaxed">
              Understand essential engineering concepts behind mix densities, volume shrinkage, liquid binder conversions, and coat applications.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">

            {/* H3: Mix Density vs Binder Density */}
            <div className="bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-2xl">
              <div className="w-14 h-14 bg-red-500/20 border border-red-500/40 text-red-400 rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(239,68,68,0.2)]">
                <AlertTriangle size={28} />
              </div>
              <h3 className="text-3xl font-black text-white mb-6 leading-tight">
                Mix Density vs Binder Density
              </h3>
              <p className="text-white/80 text-lg leading-relaxed mb-6 font-medium">
                This is one of the most common sources of ordering errors, because both numbers look
                similar but do completely different jobs.
              </p>
              <ul className="space-y-4 text-base text-white/90 mb-8">
                <li className="flex gap-4 items-start bg-black/20 p-4 rounded-2xl border border-white/5">
                  <span className="w-3 h-3 rounded-full bg-orange-400 mt-1.5 shrink-0 shadow-[0_0_10px_rgba(249,115,22,0.8)]" />
                  <span>
                    <strong className="text-white">
                      Mix density (roughly 2,200–2,450 kg/m³)
                    </strong>{" "}
                    is the weight of the finished asphalt mixture — bitumen plus aggregate plus
                    filler — per cubic metre. This calculator uses mix density to turn your pavement
                    volume into total mix weight.
                  </span>
                </li>
                <li className="flex gap-4 items-start bg-black/20 p-4 rounded-2xl border border-white/5">
                  <span className="w-3 h-3 rounded-full bg-blue-400 mt-1.5 shrink-0 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                  <span>
                    <strong className="text-white">
                      Bitumen (binder) density (roughly 1,020–1,040 kg/m³)
                    </strong>{" "}
                    is the weight of pure bitumen alone, before it&apos;s mixed with anything. This
                    number matters when you&apos;re converting a bitumen weight into a volume — for
                    example, working out how many litres or drums of binder to order.
                  </span>
                </li>
              </ul>
              <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6 text-sm md:text-base text-red-200 shadow-inner">
                <strong className="text-white block mb-2 text-lg">
                  Where the mix-up causes real errors:
                </strong>
                If someone mistakenly uses binder density (≈1,030 kg/m³) instead of mix density
                (≈2,350 kg/m³) to convert the pavement volume into weight, the calculated tonnage
                comes out at less than half the correct figure.
                <br />
                <br />
                <span className="font-bold text-white uppercase tracking-wider text-xs bg-red-900/50 px-2 py-1 rounded inline-block mb-1">
                  Rule of thumb:
                </span>
                <br />
                Use mix density for volume-to-weight conversions of the whole asphalt layer. Use
                binder density only when converting the bitumen portion into litres or drums.
              </div>
            </div>

            {/* H3: Loose Volume vs Compacted Volume */}
            <div className="bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-2xl flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 bg-blue-500/20 border border-blue-500/40 text-blue-400 rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                  <Layers size={28} />
                </div>
                <h3 className="text-3xl font-black text-white mb-6 leading-tight">
                  Loose Volume vs Compacted Volume
                </h3>
                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  Asphalt volume isn&apos;t fixed — it changes depending on whether the material is{" "}
                  <strong>loose</strong> (as delivered/laid, before rolling) or{" "}
                  <strong>compacted</strong> (after rolling, the finished in-place layer).
                </p>
                <div className="space-y-6">
                  <div className="bg-black/20 p-5 rounded-2xl border border-white/5">
                    <strong className="text-white block mb-2 text-lg">Why it shrinks:</strong>
                    <p className="text-white/70">
                      Hot mix asphalt contains air voids when it&apos;s freshly laid. Compaction
                      rollers press the aggregate particles closer together and drive out much of
                      that air, reducing the volume the material occupies.
                    </p>
                  </div>
                  <div className="bg-black/20 p-5 rounded-2xl border border-white/5">
                    <strong className="text-white block mb-2 text-lg">
                      Typical bulking factors:
                    </strong>
                    <p className="text-white/70">
                      Loose asphalt volume is generally higher than compacted volume, because
                      compaction removes air voids that are present when the mix is freshly laid.
                      The exact difference depends on the mix design, temperature, and compaction
                      requirements.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-6 text-base text-blue-100 shadow-inner mt-8">
                <strong className="text-white block mb-2 text-lg">
                  Why it matters for ordering:
                </strong>
                This calculator estimates material based on the finished, compacted pavement
                dimensions — the volume you actually want on the road once rolled. Always confirm with your supplier which volume basis their quote is built on.
              </div>
            </div>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* H3: Converting Bitumen Weight to Litres and Drums */}
            <div className="bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-[2rem] p-8 shadow-2xl">
              <div className="w-14 h-14 bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                <Droplets size={28} />
              </div>
              <h3 className="font-black text-white text-2xl mb-4 leading-tight">
                Converting Bitumen Weight to Litres and Drums
              </h3>
              <p className="text-white/80 text-base mb-6 leading-relaxed">
                Bitumen is often specified by weight (tonnes) in mix design but purchased or
                transported by volume (litres or drums), so this conversion comes up constantly in
                procurement.
              </p>
              <div className="bg-black/40 p-4 rounded-xl border border-white/5 mb-6 text-center">
                <span className="text-cyan-300 font-mono font-bold text-sm md:text-base">
                  Litres = Bitumen Weight (kg) ÷ Binder Density (kg/L)
                </span>
              </div>
              <p className="text-white/70 text-sm mb-4">
                Using a typical binder density of approx 1.03 kg/L:
              </p>
              <div className="bg-cyan-900/20 rounded-xl overflow-hidden border border-cyan-500/20">
                <div className="p-3 bg-cyan-900/40 border-b border-cyan-500/20 text-center font-mono text-sm text-cyan-100 font-bold">
                  22,620 kg ÷ 1.03 kg/L ≈ 21,961 litres
                </div>
                <table className="w-full text-sm text-white/80">
                  <tbody className="divide-y divide-cyan-500/10">
                    <tr className="hover:bg-white/5">
                      <td className="p-3 pl-4">20 L drum</td>
                      <td className="p-3 pr-4 text-right font-mono text-cyan-200">≈ 20.6 kg</td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="p-3 pl-4">200 L drum</td>
                      <td className="p-3 pr-4 text-right font-mono text-cyan-200">≈ 206 kg</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* H3: Bitumen Calculator vs Spray Application Calculator */}
            <div className="bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-[2rem] p-8 shadow-2xl">
              <div className="w-14 h-14 bg-yellow-500/20 border border-yellow-500/40 text-yellow-400 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(234,179,8,0.2)]">
                <Zap size={28} />
              </div>
              <h3 className="font-black text-white text-2xl mb-4 leading-tight">
                Bitumen Calculator vs Spray Application Calculator
              </h3>
              <p className="text-white/80 text-base mb-6 leading-relaxed">
                These two calculations are often confused because both involve &quot;how much bitumen,&quot;
                but they solve different problems.
              </p>
              <div className="space-y-4 mb-6">
                <div className="bg-black/20 p-4 rounded-xl border border-white/5">
                  <strong className="text-white block mb-1">
                    Mix-design calculation (this page):
                  </strong>
                  <span className="text-white/70 text-sm">
                    Estimates the bitumen bound inside the hot mix asphalt itself — measured as a
                    percentage of total mix weight (kg per tonne of mix).
                  </span>
                </div>
                <div className="bg-black/20 p-4 rounded-xl border border-white/5">
                  <strong className="text-white block mb-1">Spray/coat-rate calculation:</strong>
                  <span className="text-white/70 text-sm">
                    Estimates bitumen sprayed onto a surface for tack/prime coats — measured as a
                    rate per area (kg/m² or L/m²).
                  </span>
                </div>
              </div>
              <div className="bg-yellow-900/20 p-4 rounded-xl border border-yellow-500/20 text-sm text-yellow-100/90 italic">
                If your project involves both — an HMA layer plus a tack coat beneath it — the two
                quantities need to be calculated and ordered separately.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          H2: WHAT AFFECTS BITUMEN PRICE
          ═══════════════════════════════ */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-br from-emerald-500/10 via-white/5 to-transparent border border-emerald-500/20 rounded-[2.5rem] p-8 md:p-12 shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 rounded-2xl flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                <DollarSign size={28} />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-white">
                  What Affects Bitumen Price
                </h2>
                <p className="text-white/60 text-sm mt-1">Understanding market dynamics and pricing variables</p>
              </div>
            </div>

            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Bitumen pricing isn&apos;t fixed the way a manufactured product&apos;s list price might be — it fluctuates for several structural reasons:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-black/30 p-5 rounded-2xl border border-white/5">
                <strong className="text-emerald-400 block mb-2 text-base">Crude oil linkage</strong>
                <p className="text-white/70 text-sm leading-relaxed">
                  Bitumen is a heavy refinery by-product, so its baseline cost tracks global crude oil market benchmarks to a significant degree.
                </p>
              </div>

              <div className="bg-black/30 p-5 rounded-2xl border border-white/5">
                <strong className="text-emerald-400 block mb-2 text-base">Grade &amp; Specifications</strong>
                <p className="text-white/70 text-sm leading-relaxed">
                  <Link
                    href="/blog/bitumen-grades-explained"
                    className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors font-semibold"
                  >
                    Penetration grades, VG, and PG bitumen
                  </Link>{" "}
                  carry different refining costs. Polymer-modified binders (PMB) command a further price premium.
                </p>
              </div>

              <div className="bg-black/30 p-5 rounded-2xl border border-white/5">
                <strong className="text-emerald-400 block mb-2 text-base">Geographic Region</strong>
                <p className="text-white/70 text-sm leading-relaxed">
                  Proximity to coastal refineries, import tariffs, regional supply constraints, and local infrastructure demand all shift regional pricing.
                </p>
              </div>

              <div className="bg-black/30 p-5 rounded-2xl border border-white/5">
                <strong className="text-emerald-400 block mb-2 text-base">Order Volume &amp; Delivery</strong>
                <p className="text-white/70 text-sm leading-relaxed">
                  Bulk liquid tanker deliveries offer much lower per-tonne pricing compared to heated intermediate bulk containers or small drummed supplies.
                </p>
              </div>
            </div>

            <div className="bg-emerald-900/30 p-5 rounded-2xl border border-emerald-500/30 text-sm text-emerald-100 font-medium text-center">
              Always confirm current pricing directly with an approved local bitumen supplier before finalizing your project budget.
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          H2: BITUMEN VS ASPHALT VS TAR VS TARMAC
          ═══════════════════════════════ */}
      <section className="py-24 bg-black/20 border-y border-white/5 relative">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 drop-shadow-lg leading-tight">
              Bitumen vs Asphalt vs Tar vs Tarmac
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              These four terms get used interchangeably in everyday speech, but in civil
              engineering, they mean different things:
            </p>

            <div className="space-y-6 w-full text-left">
              <div className="bg-gradient-to-r from-orange-500/10 to-transparent border border-orange-500/20 p-6 rounded-3xl shadow-lg hover:bg-orange-500/10 transition-colors">
                <h3 className="text-2xl font-black text-orange-400 mb-2">Bitumen</h3>
                <p className="text-white/80 text-base leading-relaxed">
                  The black, sticky binder itself, derived from crude oil refining. It&apos;s an
                  ingredient, not a finished road surface. Curious about properties and grades?
                  Read our full guide on{" "}
                  <Link
                    href="/blog/what-is-bitumen"
                    className="text-orange-400 hover:text-orange-300 underline underline-offset-2"
                  >
                    What is bitumen?
                  </Link>
                  .
                </p>
              </div>

              <div className="bg-gradient-to-r from-white/10 to-transparent border border-white/10 p-6 rounded-3xl shadow-lg hover:bg-white/10 transition-colors">
                <h3 className="text-2xl font-black text-white mb-2">Asphalt</h3>
                <p className="text-white/80 text-base leading-relaxed">
                  The finished mixture of bitumen binder and mineral aggregate, laid and compacted
                  to form the pavement layer. While hot mix is standard for construction,{" "}
                  <Link
                    href="/blog/cold-mix-bitumen"
                    className="text-teal-400 hover:text-teal-300 underline underline-offset-2"
                  >
                    cold mix bitumen
                  </Link>{" "}
                  is often used for quick repairs without heating equipment. Pavement depth varies
                  widely by application — see our{" "}
                  <Link
                    href="/blog/asphalt-thickness"
                    className="text-orange-400 hover:text-orange-300 underline underline-offset-2"
                  >
                    asphalt thickness guide
                  </Link>{" "}
                  for driveways, roads, and heavy-duty surfaces.
                </p>
              </div>

              <div className="bg-black/30 border border-white/5 p-6 rounded-3xl shadow-inner">
                <h3 className="text-2xl font-black text-white/50 mb-2">Tar &amp; Tarmac</h3>
                <p className="text-white/60 text-base leading-relaxed mb-4">
                  <strong className="text-white/80">Tar</strong> — a similar-looking black binder,
                  but derived from coal rather than petroleum. Tar was used historically in road
                  construction and is now largely phased out in most modern paving due to health
                  and environmental concerns.
                </p>
                <p className="text-white/60 text-base leading-relaxed">
                  <strong className="text-white/80">Tarmac</strong> — short for &quot;tar-bound
                  macadam,&quot; a historical road-surfacing method. The word has stuck around
                  colloquially to mean any paved road surface, even though modern pavements are
                  almost always bitumen-based asphalt.
                </p>
              </div>
            </div>

            {/* Comparison Image */}
            <div className="w-full mt-12">
              <div className="relative rounded-[2rem] p-4 sm:p-6 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.3)] group max-w-4xl mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black/40 border border-white/5">
                  <Image
                    src="/bitumen-asphalt-aggregate-materials-comparison.webp"
                    alt="Comparison of bitumen, asphalt, and aggregate materials"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 900px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          H2: WHERE IS BITUMEN CALCULATION USED? (cards, no H3s)
          ═══════════════════════════════ */}
      <section className="py-24 bg-black/20 border-y border-white/5 relative overflow-hidden">
        <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-teal-500/5 blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-500/30 text-teal-100 px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-[0_0_15px_rgba(20,184,166,0.2)]">
              <Navigation2 size={16} />
              Applications
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 drop-shadow-xl">
              Where Is Bitumen Calculation Used?
            </h2>
            <p className="text-white/70 max-w-3xl mx-auto text-lg leading-relaxed">
              From residential driveways to motorways and industrial port aprons, bitumen quantity
              estimation is needed across every pavement category.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Navigation2,
                color: "teal",
                title: "Urban & Rural Roads",
                bullets: [
                  "Municipal road resurfacing and patch repairs",
                  "Rural sealed road construction with base and wearing courses",
                  "Kerb-to-kerb bitumen quantity takeoffs for council contracts",
                ],
              },
              {
                icon: Milestone,
                color: "blue",
                title: "Highways & Motorways",
                bullets: [
                  "Multi-lane carriageway paving with separate layer calculations",
                  "SMA and PMB mixes for high-speed, high-traffic surfaces",
                  "Pavement rehabilitation: milling depth vs overlay tonnage",
                ],
              },
              {
                icon: Car,
                color: "violet",
                title: "Car Parks & Forecourts",
                bullets: [
                  "Retail and commercial car park surface estimation",
                  "Petrol station forecourt dense-graded HMA quantities",
                  "Airport apron and taxiway binder course calculation",
                ],
              },
              {
                icon: Footprints,
                color: "orange",
                title: "Footpaths & Cycle Paths",
                bullets: [
                  "Thin wearing course for pedestrian paths (30–40 mm layers)",
                  "Shared cycle and footway combined bitumen estimates",
                  "Urban trail networks with open-graded friction course mixes",
                ],
              },
              {
                icon: HomeIcon,
                color: "emerald",
                title: "Driveways & Private Roads",
                bullets: [
                  "Residential driveway surface and base course quantities",
                  "Private estate roads with varying layer configurations",
                  "Homeowner supply estimates: tonnes of asphalt per square metre",
                ],
              },
              {
                icon: Building2,
                color: "red",
                title: "Industrial & Port Projects",
                bullets: [
                  "Heavy-duty yard paving for logistics centres and warehouses",
                  "Port terminal apron: thick base course, PMB wearing course",
                  "Mining haul roads: high-density mix design, bitumen per tonne",
                ],
              },
            ].map(({ icon: Icon, color, title, bullets }) => {
              const colors: Record<string, string> = {
                teal: "from-teal-500/20 to-transparent border-teal-500/20 hover:border-teal-500/50",
                blue: "from-blue-500/20 to-transparent border-blue-500/20 hover:border-blue-500/50",
                violet:
                  "from-violet-500/20 to-transparent border-violet-500/20 hover:border-violet-500/50",
                orange:
                  "from-orange-500/20 to-transparent border-orange-500/20 hover:border-orange-500/50",
                emerald:
                  "from-emerald-500/20 to-transparent border-emerald-500/20 hover:border-emerald-500/50",
                red: "from-red-500/20 to-transparent border-red-500/20 hover:border-red-500/50",
              };
              const iconColors: Record<string, string> = {
                teal: "bg-teal-500/20 border-teal-500/40 text-teal-400",
                blue: "bg-blue-500/20 border-blue-500/40 text-blue-400",
                violet: "bg-violet-500/20 border-violet-500/40 text-violet-400",
                orange: "bg-orange-500/20 border-orange-500/40 text-orange-400",
                emerald: "bg-emerald-500/20 border-emerald-500/40 text-emerald-400",
                red: "bg-red-500/20 border-red-500/40 text-red-400",
              };
              return (
                <div
                  key={title}
                  className={`bg-gradient-to-br ${colors[color]} rounded-[2rem] p-8 border transition-all duration-300 hover:-translate-y-1 shadow-xl group`}
                >
                  <div
                    className={`w-12 h-12 ${iconColors[color]} border rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <Icon size={24} />
                  </div>
                  {/* Card Title (div, no H3) */}
                  <div className="text-xl font-black text-white mb-4">{title}</div>
                  <ul className="space-y-3">
                    {bullets.map((b, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-white/70 text-sm leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-white/40 mt-2 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          H2: TYPICAL BITUMEN CONTENT BY MIX TYPE (table)
          ═══════════════════════════════ */}
      <section id="reference" className="py-24 relative">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-br from-white/10 to-transparent rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-white/20 w-full">
            <div className="flex flex-col items-center text-center gap-5 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0 shadow-inner">
                <Info size={28} className="text-white" />
              </div>
              <div>
                <h2 className="text-3xl sm:text-4xl font-black text-white drop-shadow-sm leading-tight">
                  Typical Bitumen Content by Mix Type
                </h2>
                <p className="text-white/70 text-base mt-2">(Reference Table)</p>
              </div>
            </div>

            <div className="space-y-4">
              {REFERENCE_DATA.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-5 rounded-2xl border border-white/10 bg-black/30 transition-all cursor-default hover:bg-black/50 hover:scale-[1.02] shadow-lg gap-4"
                >
                  <div className="flex items-center gap-4">
                    <span className="w-3 h-3 rounded-full shrink-0 shadow-[0_0_10px_rgba(255,255,255,0.8)] bg-white" />
                    <div>
                      {/* Bold name div, no H3 */}
                      <div className="font-bold text-white text-base md:text-lg">{item.name}</div>
                      <p className="text-sm text-white/60 mt-1">{item.desc}</p>
                    </div>
                  </div>
                  <span className="font-mono font-black px-4 py-2 rounded-xl border border-white/20 bg-white/10 text-white text-sm md:text-base shrink-0 shadow-inner">
                    {item.range}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-black/20 p-5 rounded-2xl border border-white/5">
              <strong className="text-white text-sm block mb-2 text-center sm:text-left">
                These ranges shift based on:
              </strong>
              <ul className="text-white/60 text-sm space-y-2 list-disc list-inside">
                <li>
                  <strong className="text-white/80">Traffic loading</strong> — heavier traffic
                  often calls for stiffer, lower-binder mixes to resist rutting.
                </li>
                <li>
                  <strong className="text-white/80">Climate</strong> — hotter regions may need
                  modified binders or adjusted content to avoid softening.
                </li>
                <li>
                  <strong className="text-white/80">Aggregate grading</strong> — finer gradations
                  generally need more binder to coat the increased surface area.
                </li>
              </ul>
              <p className="text-white/50 text-xs mt-4 italic text-center">
                None of these figures replace an approved, lab-verified mix design for the actual project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          H2: OPTIMUM BITUMEN CONTENT & MIX DESIGN STANDARDS
          ═══════════════════════════════ */}
      <section className="py-24 relative overflow-hidden bg-black/20 border-y border-white/5">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center w-full">
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 drop-shadow-lg leading-tight">
              Optimum Bitumen Content &amp; Mix Design Standards
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-3xl">
              A reference table gives a starting range, but the actual percentage used on a
              project comes from a formal mix design process that determines the Optimum Bitumen
              Content (OBC).
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full text-left">
              {/* H3: Marshall Method */}
              <div className="bg-gradient-to-br from-teal-500/10 to-transparent p-7 rounded-3xl border border-teal-500/20 shadow-lg hover:border-teal-500/40 transition-colors">
                <h3 className="text-2xl font-black text-teal-400 mb-3">Marshall Method</h3>
                <p className="text-white/80 text-base leading-relaxed">
                  Compacts trial mixes at several bitumen percentages, then tests stability and
                  flow to find the percentage that best balances strength, density, and air voids.
                  It remains widely used, particularly in South Asia and parts of the Middle East.
                </p>
              </div>

              {/* H3: Superpave Method */}
              <div className="bg-gradient-to-br from-blue-500/10 to-transparent p-7 rounded-3xl border border-blue-500/20 shadow-lg hover:border-blue-500/40 transition-colors">
                <h3 className="text-2xl font-black text-blue-400 mb-3">Superpave Method</h3>
                <p className="text-white/80 text-base leading-relaxed">
                  A performance-based approach developed in the US that considers traffic
                  level, climate, and aggregate properties using gyratory compaction rather than
                  impact compaction, aiming to better predict long-term field performance.
                </p>
              </div>
            </div>

            <p className="text-white/70 text-sm font-medium italic bg-white/5 p-4 rounded-xl border border-white/10 text-center mt-8">
              A reference table can guide early estimating, but only lab-tested OBC — derived
              from the specific aggregate source, binder grade, and traffic condition of the
              project — should be used for final construction quantities.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          H2: INDUSTRY STANDARDS & REFERENCES (bold names, no H3s)
          ═══════════════════════════════ */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-[700px] h-[700px] rounded-full bg-violet-500/5 blur-[140px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-violet-500/20 border border-violet-500/30 text-violet-100 px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
              <Award size={16} />
              Industry Standards
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 drop-shadow-xl">
              Industry Standards &amp; References
            </h2>
            <p className="text-white/70 max-w-3xl mx-auto text-lg leading-relaxed">
              Bitumen calculator results are only as good as the mix design inputs behind them.
              These are the standards that govern how bitumen content, mix density, and volumetric
              properties are determined, tested, and specified.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                code: "Asphalt Institute MS-2",
                title: "Mix Design Methods",
                body: "Asphalt Institute",
                color: "violet",
                href: "https://asphaltinstitute.org/",
                desc: "Industry-standard methodology for asphalt mix design and the binder content ranges used throughout our calculations.",
              },
              {
                code: "AASHTO M323",
                title: "Superpave Volumetric Mix Design",
                body: "AASHTO",
                color: "teal",
                href: "https://www.transportation.org/",
                desc: "Standard specification defining volumetric mix design requirements adopted across U.S. and international pavement projects.",
              },
              {
                code: "AASHTO T166",
                title: "Bulk Specific Gravity of Compacted Asphalt",
                body: "AASHTO",
                color: "blue",
                href: "https://www.transportation.org/",
                desc: "Reference test method for determining the compacted mix density values used in our quantity estimates.",
              },
              {
                code: "FHWA Pavement Guidance",
                title: "Pavement Design Guidance",
                body: "FHWA",
                color: "orange",
                href: "https://www.fhwa.dot.gov/",
                desc: "Federal Highway Administration guidance informing general pavement design and material estimation practices.",
              },
            ].map(({ code, title, body, color, href, desc }) => {
              const badgeColors: Record<string, string> = {
                teal: "bg-teal-500/20 text-teal-300 border-teal-500/30",
                violet: "bg-violet-500/20 text-violet-300 border-violet-500/30",
                blue: "bg-blue-500/20 text-blue-300 border-blue-500/30",
                orange: "bg-orange-500/20 text-orange-300 border-orange-500/30",
              };
              const cardBorder: Record<string, string> = {
                teal: "border-teal-500/20 hover:border-teal-500/50",
                violet: "border-violet-500/20 hover:border-violet-500/50",
                blue: "border-blue-500/20 hover:border-blue-500/50",
                orange: "border-orange-500/20 hover:border-orange-500/50",
              };
              return (
                <a
                  key={code}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-gradient-to-b from-white/10 to-transparent ${cardBorder[color]} border rounded-[2rem] p-7 transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col gap-4 group`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <span
                      className={`text-xs font-black px-3 py-1.5 rounded-full border ${badgeColors[color]} uppercase tracking-wider shrink-0`}
                    >
                      {body}
                    </span>
                    <ExternalLink size={14} className="text-white/30 group-hover:text-white/80 transition-colors shrink-0" />
                  </div>
                  <div>
                    <div className="text-base font-black text-white group-hover:text-teal-300 transition-colors mb-1 leading-tight">{code}</div>
                    <p className="text-white/50 text-xs font-semibold">{title}</p>
                  </div>
                  <p className="text-white/65 text-sm leading-relaxed flex-1">{desc}</p>
                </a>
              );
            })}
          </div>

          <p className="text-white/40 text-sm text-center mt-10 italic">
            Always verify that the edition of any standard in force in your jurisdiction matches
            the mix design data you are entering into the calculator.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════
          H2: WHO USES BITUMENCALCPRO?
          ═══════════════════════════════ */}
      <section className="py-24 bg-black/30 border-t border-white/5 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="bg-gradient-to-br from-orange-500/20 to-violet-600/20 rounded-[2.5rem] p-8 md:p-12 border border-white/20 shadow-2xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 flex items-center justify-center gap-3 text-center">
              <Users className="text-orange-400" size={36} /> Who Uses BitumenCalcPro?
            </h2>
            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8 text-center max-w-3xl mx-auto">
              BitumenCalcPro gives pavement professionals a transparent, formula-driven estimate — helping contractors and engineers avoid asphalt estimation mistakes, manage site maintenance, and understand how project budgeting and{" "}
              <Link
                href="/blog/bitumen-driveway-cost-worldwide"
                className="text-orange-400 hover:text-orange-300 font-bold underline underline-offset-2 transition-colors"
              >
                bitumen driveway cost
              </Link>{" "}
              drive project requirements.
            </p>
            <ul className="space-y-4 text-sm md:text-base">
              <li className="flex items-start gap-3 bg-black/20 p-4 rounded-2xl border border-white/5">
                <CheckCircle2 size={20} className="text-orange-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Civil &amp; site engineers</strong>{" "}
                  <span className="text-white/70">
                    — preliminary quantity takeoffs and project planning.
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-3 bg-black/20 p-4 rounded-2xl border border-white/5">
                <CheckCircle2 size={20} className="text-orange-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Road contractors &amp; estimators</strong>{" "}
                  <span className="text-white/70">
                    — fast binder and aggregate figures for tendering and procurement.
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-3 bg-black/20 p-4 rounded-2xl border border-white/5">
                <CheckCircle2 size={20} className="text-orange-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Quantity surveyors</strong>{" "}
                  <span className="text-white/70">
                    — early-stage cost modelling before lab-tested values are available.
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-3 bg-black/20 p-4 rounded-2xl border border-white/5">
                <CheckCircle2 size={20} className="text-orange-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Engineering students</strong>{" "}
                  <span className="text-white/70">
                    — understanding how mix density, bitumen percentage, and pavement geometry interact.
                  </span>
                </span>
              </li>
            </ul>
          </div>

          {/* ═══════════════════════════════
              H2: CONCLUSION
              ═══════════════════════════════ */}
          <div className="bg-gradient-to-br from-teal-500/20 via-blue-600/20 to-purple-600/20 rounded-[2.5rem] p-8 md:p-12 border border-white/20 shadow-[0_0_50px_rgba(0,0,0,0.3)] text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 drop-shadow-md">
              Conclusion
            </h2>
            <p className="text-white/90 text-lg leading-relaxed mb-6 font-medium max-w-3xl mx-auto">
              Estimating bitumen and aggregate quantities doesn&apos;t need to involve manual formula
              work every time — but understanding what&apos;s behind the numbers matters, especially
              where mix density, binder density, and compaction factors are easy to mix up.
            </p>
            <p className="text-white/90 text-lg leading-relaxed font-medium max-w-3xl mx-auto">
              Used alongside an approved mix design, this calculator gives a fast, transparent
              way to plan pavement material quantities before committing to a final order.
            </p>
          </div>

          {/* ═══════════════════════════════
              H2: FREQUENTLY ASKED QUESTIONS
              ═══════════════════════════════ */}
          <div className="w-full">
            <div className="flex flex-col items-center gap-4 mb-10 text-center">
              <HelpCircle
                size={40}
                className="text-teal-400 drop-shadow-[0_0_15px_rgba(45,212,191,0.5)]"
              />
              <h2 className="text-4xl sm:text-5xl font-black text-white drop-shadow-lg">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-5">
              {FAQ_DATA.map((faq, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-[1.5rem] p-6 md:p-8 hover:bg-white/10 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 duration-300"
                >
                  <h3 className="text-xl font-bold text-white mb-4 leading-tight">{faq.q}</h3>
                  <p className="text-white/70 text-base leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}