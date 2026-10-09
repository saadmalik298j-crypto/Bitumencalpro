// app/tack-coat-calculator/page.tsx
import Script from "next/script";
import Link from "next/link";
import type { Metadata } from "next";
import TackCoatCalculator from "./TackCoatCalculator";
import {
  Droplets,
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
  title: "Tack Coat Calculator | Emulsion, Water and Residual Bitumen",
  description:
    "Free tack coat calculator. Enter area, residual rate, emulsion residue and dilution to get emulsion, water, residual bitumen and drums needed.",
  keywords: [
    "tack coat calculator",
    "emulsion calculator",
    "residual bitumen calculator",
    "tack coat rate",
    "MoRTH tack coat rate",
    "DOT tack coat application rate",
    "bitumen emulsion calculator",
    "tack coat spray rate",
  ],
  alternates: { canonical: "https://bitumencalcpro.com/tack-coat-calculator" },
  openGraph: {
    title: "Tack Coat Calculator | Emulsion, Water and Residual Bitumen",
    description:
      "Free tack coat calculator. Enter area, residual rate, emulsion residue and dilution to get emulsion, water, residual bitumen and drums needed.",
    url: "https://bitumencalcpro.com/tack-coat-calculator",
    siteName: "BitumenCalcPro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tack Coat Calculator | Emulsion, Water and Residual Bitumen",
    description:
      "Free tack coat calculator. Enter area, residual rate, emulsion residue and dilution to get emulsion, water, residual bitumen and drums needed.",
  },
};

const FAQ_DATA = [
  {
    q: "How much tack coat do I need per square yard?",
    a: "California guidance puts typical emulsion spray rates between 0.05 and 0.15 gal/yd². Residual rates in many US specifications fall around 0.04 to 0.08 gal/yd². Your specification controls.",
  },
  {
    q: "How much tack coat do I need per square metre?",
    a: "Indian practice under MoRTH Section 500 lists 0.20 to 0.30 kg/m² of emulsion on bituminous surfaces. A US rate of 0.08 gal/yd² equals about 0.36 L/m².",
  },
  {
    q: "How do I calculate tack coat quantity?",
    a: "Multiply the area by the spray rate. For 3,500 m² at 0.25 kg/m², that is 875 kg of emulsion.",
  },
  {
    q: "What is the residual rate?",
    a: "It is the bitumen left on the surface after the water evaporates. Multiply the emulsion rate by the residue share and by the emulsion share if the mix is diluted.",
  },
  {
    q: "How much water do I add to tack coat emulsion?",
    a: "Follow your supplier and your specification. A 1:1 mix has equal parts water and emulsion. Some agencies cap dilution at that level.",
  },
  {
    q: "What is the residue of tack coat emulsion?",
    a: "SS-1h and CSS-1h grades require at least 57% in standard specifications, and test certificates often show about 60%.",
  },
  {
    q: "Do I need tack coat between every asphalt layer?",
    a: "Specifications generally call for it between lifts and on existing pavement before an overlay. Your project documents list the exact locations.",
  },
  {
    q: "What is the difference between tack coat and prime coat?",
    a: "A tack coat bonds asphalt to a bound surface. A prime coat treats a granular base before paving.",
  },
];

export default function TackCoatPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Tack Coat Calculator",
    url: "https://bitumencalcpro.com/tack-coat-calculator",
    description:
      "Free tack coat calculator. Enter area, residual rate, emulsion residue and dilution to get emulsion, water, residual bitumen and drums needed.",
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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://bitumencalcpro.com" },
      { "@type": "ListItem", position: 2, name: "Tack Coat Calculator", item: "https://bitumencalcpro.com/tack-coat-calculator" },
    ],
  };

  return (
    <>
      <Script
        id="schema-tack-app"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Script
        id="schema-tack-faq"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="schema-tack-breadcrumb"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* HERO SECTION */}
      <div className="relative pt-16 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 via-slate-900/40 to-blue-600/10 pointer-events-none" />
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-teal-500/15 blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-blue-500/20 blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-white/50 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight size={14} />
            <span className="text-white/80">Tack Coat Calculator</span>
          </nav>

          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500/25 to-cyan-500/15 border border-teal-500/40 text-teal-200 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-5 shadow-[0_0_20px_rgba(20,184,166,0.25)]">
            <Droplets size={16} className="text-teal-400" />
            Bond Coat & Emulsion Quantity Estimator
          </div>

          <h1 className="hero-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-4 leading-tight">
            <span className="bg-gradient-to-r from-teal-400 via-cyan-300 to-blue-200 bg-clip-text text-transparent">
              Tack Coat
            </span>{" "}
            <span className="text-white">Calculator</span>
          </h1>

          {/* CATCHY SUBTITLE */}
          <p className="text-white/90 text-lg md:text-xl font-medium max-w-3xl mb-8 leading-relaxed drop-shadow">
            Calculate exact bitumen emulsion, added water, residual bitumen, and drum counts. Built on state DOT, federal, and Indian (MoRTH) standards for undiluted and diluted tack coat applications.
          </p>

          <div className="flex flex-wrap gap-2.5 mb-10">
            {[
              "State DOT & MoRTH Compliant",
              "Residual vs Spray Rate Math",
              "Dilution & Residue Ratios",
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
          <div className="bg-slate-900 border border-white/15 rounded-3xl p-2 sm:p-4 shadow-2xl shadow-teal-950/20">
            <TackCoatCalculator />
          </div>
        </div>
      </div>

      {/* ARTICLE CONTENT */}
      <article className="py-16 text-white/90 leading-relaxed">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 space-y-14 text-base sm:text-lg">
          {/* INTRO PARAGRAPHS */}
          <div className="space-y-5 bg-slate-800/60 border border-white/15 p-6 sm:p-8 rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />
            
            <p>
              A tack coat spec that reads &quot;0.05 gal/yd²&quot; can mean three different amounts of bitumen. Read as spray volume, it leaves about 0.03 gal/yd² of bitumen with an undiluted 60% emulsion, and about 0.015 gal/yd² with a 1:1 dilution. Read as residual bitumen, it needs 0.083 gal/yd² of undiluted emulsion or 0.167 gal/yd² of 1:1 diluted emulsion.
            </p>
            <p>
              This tack coat calculator removes that confusion. Enter the area, the rate from your specification, the emulsion residue and the dilution. It returns emulsion, water, residual bitumen and drums, in litres, kilograms or gallons.
            </p>
            <div className="flex items-center gap-3 bg-teal-500/15 border-l-4 border-teal-400 p-4 rounded-r-xl text-teal-200 font-semibold text-sm sm:text-base">
              <CheckCircle2 size={20} className="text-teal-400 flex-shrink-0" />
              <span>Every formula is below, so you can check any result by hand.</span>
            </div>
          </div>

          {/* HOW TO USE */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-400 font-bold">
                <Lightbulb size={20} />
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white">
                How to Use the Tack Coat Calculator
              </h2>
            </div>
            <ul className="space-y-3.5 list-none pl-0">
              {[
                "Enter the length and width of the surface, or type the area directly.",
                "Enter the application rate and choose its unit: kg/m², L/m² or gal/yd².",
                "Say what the rate describes: residual bitumen, undiluted emulsion or diluted emulsion. Your specification states this.",
                "Enter the emulsion residue. Use the supplier's data sheet. Without it, 60% is a reasonable planning value.",
                "Enter the dilution if any. A 1:1 mix is one part water to one part emulsion.",
                "Add an allowance for spray loss and the number of surfaces you are tacking.",
              ].map((step, idx) => (
                <li key={idx} className="flex items-start gap-3 bg-white/5 border border-white/10 p-4 rounded-xl">
                  <span className="w-7 h-7 rounded-lg bg-teal-500/20 text-teal-300 font-black text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="text-white/80">{step}</span>
                </li>
              ))}
            </ul>
            <div className="bg-slate-900/80 border border-white/10 p-5 rounded-2xl text-sm text-white/70 flex items-start gap-3 shadow-inner">
              <Zap size={18} className="text-teal-400 flex-shrink-0 mt-0.5" />
              <p>
                The tool assumes an emulsion density of about 1.0 kg/L. Change it if your supplier gives another figure.
              </p>
            </div>
          </section>

          {/* FORMULAS */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-400 font-bold">
                <BarChart3 size={20} />
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white">
                Tack Coat Formulas
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-900/90 p-6 rounded-2xl border border-teal-500/30 shadow-xl space-y-3">
                <h3 className="text-lg font-bold text-teal-300 flex items-center gap-2">
                  <span className="px-2 py-0.5 text-xs bg-teal-500/20 rounded font-mono">1</span> Residual rate to spray rate
                </h3>
                <p className="font-mono text-sm sm:text-base text-white bg-black/50 p-4 rounded-xl border border-white/10">
                  Spray rate = Residual rate ÷ (Residue share × Emulsion share)
                </p>
                <p className="text-sm text-white/70">
                  Residue share is the residue percentage divided by 100. Emulsion share is 1 for undiluted material. For a diluted mix, emulsion share = 1 ÷ (1 + water parts per emulsion part). A 1:1 mix gives 0.5. One part water to four parts emulsion gives 0.8.
                </p>
              </div>

              <div className="bg-slate-900/90 p-6 rounded-2xl border border-teal-500/30 shadow-xl space-y-3">
                <h3 className="text-lg font-bold text-teal-300 flex items-center gap-2">
                  <span className="px-2 py-0.5 text-xs bg-teal-500/20 rounded font-mono">2</span> Quantities
                </h3>
                <div className="font-mono text-sm sm:text-base text-white bg-black/50 p-4 rounded-xl border border-white/10 space-y-2">
                  <p>Sprayed volume = Area × Spray rate</p>
                  <p>Emulsion volume = Sprayed volume × Emulsion share</p>
                  <p>Water volume = Sprayed volume − Emulsion volume</p>
                  <p>Residual bitumen = Emulsion mass × Residue share</p>
                </div>
              </div>

              <div className="bg-slate-900/90 p-6 rounded-2xl border border-teal-500/30 shadow-xl space-y-3">
                <h3 className="text-lg font-bold text-teal-300 flex items-center gap-2">
                  <span className="px-2 py-0.5 text-xs bg-teal-500/20 rounded font-mono">3</span> Quick estimate for spray rate
                </h3>
                <div className="font-mono text-sm sm:text-base text-white bg-black/50 p-4 rounded-xl border border-white/10 space-y-1">
                  <p>Undiluted: about 1.5 to 1.7 × residual rate</p>
                  <p>1:1 diluted: about 3.0 to 3.3 × residual rate</p>
                </div>
                <p className="text-sm text-white/70">
                  One{" "}
                  <a
                    href="https://highways.dot.gov/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-300 underline inline-flex items-center gap-1 hover:text-white"
                  >
                    Federal Highway Administration (FHWA) specification <ExternalLink size={13} />
                  </a>{" "}
                  sets these multipliers at 1.5 and 3.0. They match an emulsion near 67% residue, so the calculator uses your actual residue.
                </p>
              </div>

              <div className="bg-slate-900/90 p-6 rounded-2xl border border-teal-500/30 shadow-xl space-y-3">
                <h3 className="text-lg font-bold text-teal-300 flex items-center gap-2">
                  <span className="px-2 py-0.5 text-xs bg-teal-500/20 rounded font-mono">4</span> Conversions
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-sm text-white/80">
                  <div className="bg-black/50 p-3 rounded-lg border border-white/10">1 gal/yd² = 4.527 L/m²</div>
                  <div className="bg-black/50 p-3 rounded-lg border border-white/10">1 yd² = 0.8361 m²</div>
                  <div className="bg-black/50 p-3 rounded-lg border border-white/10">1 L/m² = 0.221 gal/yd²</div>
                </div>
              </div>
            </div>
          </section>

          {/* EMULSION RATE VS RESIDUAL RATE */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-400 font-bold">
                <Scale size={20} />
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white">
                Emulsion Rate vs Residual Rate
              </h2>
            </div>
            <p>
              Emulsion is bitumen droplets in water. After the emulsion &quot;breaks,&quot; the water leaves and the bitumen stays on the surface. That bitumen is the residue, and it creates the bond.
            </p>
            <p>
              A residual rate states how much bitumen stays. A spray rate states how much liquid leaves the distributor. Agencies increasingly write specifications as residual rates because spray volume depends on residue and dilution.
            </p>
            <div className="bg-teal-500/10 border border-teal-500/30 p-5 rounded-2xl text-teal-100 font-medium">
              Without the residual basis, two crews can follow the same line in a spec and apply different amounts of binder. Check the wording of your own document before you enter a number.
            </div>
          </section>

          {/* TYPICAL TACK COAT RATES */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-400 font-bold">
                <Ruler size={20} />
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white">
                Typical Tack Coat Rates (Official References)
              </h2>
            </div>
            <p className="text-white/70">
              Published guidance gives these ranges. Your project specification overrides all of them.
            </p>

            <div className="space-y-4">
              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                <h3 className="text-lg font-bold text-teal-300 mb-1 flex items-center gap-2">
                  US Spray Rates &mdash;{" "}
                  <a
                    href="https://dot.ca.gov/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white underline text-sm inline-flex items-center gap-1 hover:text-teal-300"
                  >
                    Caltrans Construction Manual <ExternalLink size={13} />
                  </a>
                </h3>
                <p className="text-white/80">
                  California guidance says emulsion tack, diluted or undiluted, is typically sprayed at <strong>0.05 to 0.15 gal/yd²</strong>. It says rates near 0.10 gal/yd² give more uniform coverage.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                <h3 className="text-lg font-bold text-teal-300 mb-1 flex items-center gap-2">
                  US Residual Rates &mdash;{" "}
                  <a
                    href="https://www.dot.state.mn.us/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white underline text-sm inline-flex items-center gap-1 hover:text-teal-300"
                  >
                    Minnesota DOT Pavement Manual <ExternalLink size={13} />
                  </a>
                </h3>
                <p className="text-white/80">
                  Minnesota guidance puts residual bitumen at about <strong>0.04 to 0.06 gal/yd²</strong> on smooth, non-milled surfaces and up to <strong>0.08 gal/yd²</strong> on milled or very rough ones. Federal and state specifications use values in this neighborhood.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                <h3 className="text-lg font-bold text-teal-300 mb-1 flex items-center gap-2">
                  Example Spec in Litres &mdash;{" "}
                  <a
                    href="https://oklahoma.gov/odot.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white underline text-sm inline-flex items-center gap-1 hover:text-teal-300"
                  >
                    Oklahoma DOT Specs <ExternalLink size={13} />
                  </a>
                </h3>
                <p className="text-white/80">
                  Oklahoma specifies <strong>0.08 gal/yd² (0.36 L/m²)</strong> of original emulsion for its trackless tack products, adjusted for surface texture.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                <h3 className="text-lg font-bold text-teal-300 mb-1 flex items-center gap-2">
                  Indian Practice &mdash;{" "}
                  <a
                    href="https://morth.nic.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white underline text-sm inline-flex items-center gap-1 hover:text-teal-300"
                  >
                    MoRTH Section 500 Specifications <ExternalLink size={13} />
                  </a>
                </h3>
                <p className="text-white/80">
                  The tack coat table lists <strong>0.20 to 0.30 kg/m²</strong> on bituminous surfaces. Tender documents commonly quote 0.20 or 0.25 kg/m² on bituminous surfaces, 0.25 to 0.30 kg/m² on primed granular surfaces and a higher figure on cement concrete.
                </p>
              </div>
            </div>

            <p className="text-sm text-white/70 italic bg-black/40 p-4 rounded-xl border border-white/10">
              Surface condition moves the rate. Tight, dense surfaces need less tack than open, raveled ones. Aged, dry asphalt needs more than a flushed surface. Milled surfaces take more because of their texture.
            </p>
          </section>

          {/* EMULSION RESIDUE */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-4xl font-black text-white border-b border-white/10 pb-3">
              Emulsion Residue (ASTM Standards)
            </h2>
            <p>
              Residue is the share of the emulsion that is bitumen. Standard slow-setting grades such as SS-1h and CSS-1h require at least 57% residue under{" "}
              <a
                href="https://www.astm.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-300 underline inline-flex items-center gap-1 hover:text-white"
              >
                ASTM D977 and ASTM D2397 standards <ExternalLink size={13} />
              </a>
              . Test certificates often show a little more, around 60%. Some agencies list SS-1 at 55% minimum, and trackless products can be lower. One state allows 50% minimum for a trackless grade.
            </p>
            <p>
              Residue changes the answer. A 57% emulsion leaves 5% less bitumen than a 60% emulsion at the same spray rate. Use the number on your supplier&apos;s data sheet.
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* EXAMPLE 1 */}
              <div className="bg-slate-900/60 border border-white/15 p-6 rounded-2xl space-y-3 hover:border-teal-500/40 transition-all shadow-xl">
                <span className="text-xs font-mono bg-teal-500/20 text-teal-300 px-2.5 py-1 rounded-md font-bold">Example 1</span>
                <h3 className="text-xl font-bold text-white">Road section in metric units</h3>
                <p className="text-sm text-white/80">A 1 km road is 3.5 m wide. The spec calls for 0.25 kg/m² of emulsion. Density is 1.0 kg/L and residue is 60%.</p>
                <div className="font-mono text-xs sm:text-sm text-white/70 space-y-1 bg-black/50 p-4 rounded-xl border border-white/5">
                  <p>Area: 1,000 × 3.5 = 3,500 m²</p>
                  <p>Emulsion: 3,500 × 0.25 = 875 kg (approx 875 L)</p>
                  <p>Residual bitumen: 875 × 0.60 = 525 kg</p>
                  <p className="text-teal-300 font-bold">Residual rate: 0.15 kg/m²</p>
                </div>
                <p className="text-xs text-teal-300 font-semibold">With a 10% allowance, order about 962 kg (~5 drums of 200 L).</p>
              </div>

              {/* EXAMPLE 2 */}
              <div className="bg-slate-900/60 border border-white/15 p-6 rounded-2xl space-y-3 hover:border-teal-500/40 transition-all shadow-xl">
                <span className="text-xs font-mono bg-teal-500/20 text-teal-300 px-2.5 py-1 rounded-md font-bold">Example 2</span>
                <h3 className="text-xl font-bold text-white">Parking lot with a residual spec</h3>
                <p className="text-sm text-white/80">The lot is 60 ft × 120 ft. The spec asks for 0.05 gal/yd² of residual bitumen. Emulsion residue is 60%.</p>
                <div className="font-mono text-xs sm:text-sm text-white/70 space-y-1 bg-black/50 p-4 rounded-xl border border-white/5">
                  <p>Area: 7,200 ft² ÷ 9 = 800 yd²</p>
                  <p>Residual bitumen needed: 800 × 0.05 = 40 gal</p>
                  <p>Undiluted spray rate: 0.05 ÷ 0.60 = 0.083 gal/yd²</p>
                  <p className="text-teal-300 font-bold">Emulsion: 800 × 0.083 = 66.7 gal</p>
                </div>
                <p className="text-xs text-white/70">Metric equivalent spray rate: ~0.38 L/m². With 10% extra: order ~73 gal.</p>
              </div>

              {/* EXAMPLE 3 */}
              <div className="bg-slate-900/60 border border-white/15 p-6 rounded-2xl space-y-3 hover:border-teal-500/40 transition-all shadow-xl">
                <span className="text-xs font-mono bg-teal-500/20 text-teal-300 px-2.5 py-1 rounded-md font-bold">Example 3</span>
                <h3 className="text-xl font-bold text-white">Diluted emulsion</h3>
                <p className="text-sm text-white/80">The same lot is sprayed with a 1:1 mix.</p>
                <div className="font-mono text-xs sm:text-sm text-white/70 space-y-1 bg-black/50 p-4 rounded-xl border border-white/5">
                  <p>Spray rate: 0.05 ÷ (0.60 × 0.5) = 0.167 gal/yd²</p>
                  <p>Sprayed volume: 800 × 0.167 = 133.3 gal</p>
                  <p>Emulsion share: 66.7 gal | Water: 66.7 gal</p>
                  <p className="text-teal-300 font-bold">Residual bitumen: 40 gal</p>
                </div>
                <p className="text-xs text-white/70">Dilution doubles sprayed volume but leaves emulsion order unchanged. Order emulsion share, not total sprayed volume.</p>
              </div>

              {/* EXAMPLE 4 */}
              <div className="bg-slate-900/60 border border-white/15 p-6 rounded-2xl space-y-3 hover:border-teal-500/40 transition-all shadow-xl">
                <span className="text-xs font-mono bg-teal-500/20 text-teal-300 px-2.5 py-1 rounded-md font-bold">Example 4</span>
                <h3 className="text-xl font-bold text-white">Diluted mix at 57% residue</h3>
                <p className="text-sm text-white/80">2,000 yd² surface needs 0.05 gal/yd² residual. Residue is 57%, 1 part water to 4 parts emulsion (0.8 share).</p>
                <div className="font-mono text-xs sm:text-sm text-white/70 space-y-1 bg-black/50 p-4 rounded-xl border border-white/5">
                  <p>Spray rate: 0.05 ÷ (0.57 × 0.80) = 0.1096 (~0.11 gal/yd²)</p>
                  <p>Sprayed volume: 2,000 × 0.1096 = 219.3 gal</p>
                  <p>Emulsion: 175.4 gal | Water: 43.9 gal</p>
                  <p className="text-teal-300 font-bold">Check: 175.4 × 0.57 = 100 gal residue</p>
                </div>
                <p className="text-xs text-white/70">
                  <a href="https://dot.ca.gov/" target="_blank" rel="noopener noreferrer" className="underline text-teal-300">
                    California construction manual
                  </a>{" "}
                  uses this exact formula and inputs (0.11 gal/yd²).
                </p>
              </div>

              {/* EXAMPLE 5 */}
              <div className="bg-slate-900/60 border border-white/15 p-6 rounded-2xl space-y-3 hover:border-teal-500/40 transition-all shadow-xl">
                <span className="text-xs font-mono bg-teal-500/20 text-teal-300 px-2.5 py-1 rounded-md font-bold">Example 5</span>
                <h3 className="text-xl font-bold text-white">Two surfaces</h3>
                <p className="text-sm text-white/80">3,500 m² road tacked on two surfaces: base course and binder course at 0.20 kg/m².</p>
                <div className="font-mono text-xs sm:text-sm text-white/70 space-y-1 bg-black/50 p-4 rounded-xl border border-white/5">
                  <p>Area to tack: 3,500 × 2 = 7,000 m²</p>
                  <p>Emulsion: 1,400 kg</p>
                  <p className="text-teal-300 font-bold">Residual bitumen at 60%: 840 kg</p>
                </div>
                <p className="text-xs text-white/70">Count every surface the specification calls for, not only the top one.</p>
              </div>

              {/* EXAMPLE 6 */}
              <div className="bg-slate-900/60 border border-white/15 p-6 rounded-2xl space-y-3 hover:border-teal-500/40 transition-all shadow-xl">
                <span className="text-xs font-mono bg-teal-500/20 text-teal-300 px-2.5 py-1 rounded-md font-bold">Example 6</span>
                <h3 className="text-xl font-bold text-white">Unit conversion</h3>
                <p className="text-sm text-white/80">Converting US to Metric and vice versa.</p>
                <div className="font-mono text-xs sm:text-sm text-white/70 space-y-1 bg-black/50 p-4 rounded-xl border border-white/5">
                  <p>US spec: 0.05 gal/yd² of emulsion</p>
                  <p>Metric: 0.05 × 4.527 = 0.23 L/m²</p>
                  <p className="text-teal-300 font-bold">0.25 kg/m² at density 1.0 ≈ 0.055 gal/yd²</p>
                </div>
              </div>
            </div>
          </section>

          {/* TACK COAT CHARTS */}
          <section className="space-y-8">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-400 font-bold">
                <BarChart3 size={20} />
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white">
                Tack Coat Charts
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* METRIC CHART */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-teal-300">Metric quantities per 1,000 m² (emulsion rate, 60% residue)</h3>
                <div className="overflow-x-auto bg-slate-900/80 border border-white/15 rounded-2xl shadow-xl">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-white/10 text-white">
                      <tr>
                        <th className="p-3.5 border-b border-white/10">Emulsion rate (kg/m²)</th>
                        <th className="p-3.5 border-b border-white/10">Emulsion (kg)</th>
                        <th className="p-3.5 border-b border-white/10">Residual bitumen (kg)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10 text-white/80 font-mono">
                      <tr className="hover:bg-white/5 transition-colors">
                        <td className="p-3.5 text-white font-bold">0.20</td>
                        <td className="p-3.5 text-teal-300">200</td>
                        <td className="p-3.5">120</td>
                      </tr>
                      <tr className="hover:bg-white/5 transition-colors">
                        <td className="p-3.5 text-white font-bold">0.25</td>
                        <td className="p-3.5 text-teal-300">250</td>
                        <td className="p-3.5">150</td>
                      </tr>
                      <tr className="hover:bg-white/5 transition-colors">
                        <td className="p-3.5 text-white font-bold">0.30</td>
                        <td className="p-3.5 text-teal-300">300</td>
                        <td className="p-3.5">180</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* US CHART */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-teal-300">US spray rates for a residual target (60% residue)</h3>
                <div className="overflow-x-auto bg-slate-900/80 border border-white/15 rounded-2xl shadow-xl">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-white/10 text-white">
                      <tr>
                        <th className="p-3.5 border-b border-white/10">Residual (gal/yd²)</th>
                        <th className="p-3.5 border-b border-white/10">Undiluted spray</th>
                        <th className="p-3.5 border-b border-white/10">1:1 diluted spray</th>
                        <th className="p-3.5 border-b border-white/10">Emulsion per 1k yd²</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10 text-white/80 font-mono">
                      <tr className="hover:bg-white/5 transition-colors">
                        <td className="p-3.5 text-white font-bold">0.04</td>
                        <td className="p-3.5 text-teal-300">0.067 gal/yd²</td>
                        <td className="p-3.5">0.133 gal/yd²</td>
                        <td className="p-3.5">66.7 gal</td>
                      </tr>
                      <tr className="hover:bg-white/5 transition-colors">
                        <td className="p-3.5 text-white font-bold">0.05</td>
                        <td className="p-3.5 text-teal-300">0.083 gal/yd²</td>
                        <td className="p-3.5">0.167 gal/yd²</td>
                        <td className="p-3.5">83.3 gal</td>
                      </tr>
                      <tr className="hover:bg-white/5 transition-colors">
                        <td className="p-3.5 text-white font-bold">0.06</td>
                        <td className="p-3.5 text-teal-300">0.100 gal/yd²</td>
                        <td className="p-3.5">0.200 gal/yd²</td>
                        <td className="p-3.5">100.0 gal</td>
                      </tr>
                      <tr className="hover:bg-white/5 transition-colors">
                        <td className="p-3.5 text-white font-bold">0.08</td>
                        <td className="p-3.5 text-teal-300">0.133 gal/yd²</td>
                        <td className="p-3.5">0.267 gal/yd²</td>
                        <td className="p-3.5">133.3 gal</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <p className="text-sm text-white/70">
              Scale any row by your area divided by 1,000. A 57% emulsion needs about 5% more emulsion than the 60% rows show.
            </p>
          </section>

          {/* TACK COAT VS PRIME COAT */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-400 font-bold">
                <Info size={20} />
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white">
                Tack Coat vs Prime Coat
              </h2>
            </div>
            <p>
              A tack coat bonds a new asphalt layer to an existing asphalt or concrete surface. A prime coat goes on an unbound granular base before paving, and it penetrates the base. Prime coats use more binder. Indian tenders commonly list 0.6 to 1.2 kg/m² for prime coat, against 0.20 to 0.30 kg/m² for tack on bituminous surfaces.
            </p>
            <p>
              Calculate them separately. Our{" "}
              <Link href="/" className="text-teal-300 underline font-semibold">
                bitumen calculator
              </Link>{" "}
              covers the binder inside the asphalt mix, which is a third quantity. Mix binder, tack coat and prime coat are three separate orders.
            </p>
          </section>

          {/* WHAT CHANGES THE TACK COAT QUANTITY */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-400 font-bold">
                <TrendingUp size={20} />
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white">
                What Changes the Tack Coat Quantity
              </h2>
            </div>
            <div className="space-y-4">
              {[
                { title: "Surface area.", text: "Include every surface that gets sprayed, plus ramps, tie-ins and edge strips." },
                { title: "Application rate.", text: "The spec sets it. Over a large area, small changes add up. Moving from 0.25 to 0.30 kg/m² adds 50 kg per 1,000 m²." },
                { title: "Dilution.", text: "Dilution raises the sprayed volume and leaves the bitumen the same. The emulsion order stays the same, and the water comes from the site or supplier." },
                { title: "Residue.", text: "A lower-residue product needs more emulsion for the same bitumen." },
                { title: "Surface texture.", text: "Milled, aged and open surfaces take more tack than dense, new ones." },
                { title: "Spray losses.", text: "Overlaps at lane joints, hand work at fixtures and spray bar starts/stops use material. Estimators allow around 5 to 10% for this." },
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                  <p>
                    <strong className="text-teal-300">{item.title}</strong> {item.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* APPLICATION NOTES THAT AFFECT QUANTITY */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-4xl font-black text-white border-b border-white/10 pb-3">
              Application Notes That Affect Quantity
            </h2>
            <ul className="space-y-3 list-disc pl-6 text-white/80">
              <li>Clean, dry surfaces take tack better. Dust and standing water weaken the bond.</li>
              <li>Calibrate the distributor before the main run. Standard practice is a pad or mat test that weighs the spray, then converts weight to rate. Because emulsion expands with heat, volume checks convert gallons to a 60°F reference. Specifications set tolerances (e.g. within 0.01 gal/yd² or 10%).</li>
              <li>Let the emulsion break before paving. Brown emulsion on the surface means water is still present. Pick-up by trucks weakens the bond.</li>
              <li>Spread the tack evenly. Heavy lines and dry streaks both weaken the bond.</li>
              <li>California&apos;s manual states that dilution should be done by the manufacturer, and allows up to 1 part water to 1 part emulsion for slow-setting and quick-setting grades.</li>
            </ul>
          </section>

          {/* ORDERING AND UNITS */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-4xl font-black text-white border-b border-white/10 pb-3">
              Ordering and Units
            </h2>
            <p>
              Emulsion arrives by tanker, by 200 L drum or in 1,000 L totes. Divide your order by the container size to get drum counts.
            </p>
            <p>
              Confirm whether your supplier sells by weight or volume. Emulsion density is close to 1.0 kg/L, which makes volume and weight close. A few percent of difference matters on a large order.
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
                { title: "Reading a residual rate as a spray rate.", text: "The two can differ by a factor of 1.7 to 3." },
                { title: "Ordering the diluted volume as emulsion.", text: "A 1:1 mix needs half that volume in actual emulsion." },
                { title: "Assuming 60% residue.", text: "Always verify on the supplier's technical data sheet." },
                { title: "Counting one surface when the spec calls for two.", text: "Multiply by the number of lifts/layers needing tack." },
                { title: "Mixing units.", text: "gal/yd² and L/m² differ by a factor of 4.527." },
                { title: "Confusing mix design binder % with emulsion residue.", text: "An asphalt mix at 5.5% bitumen and an emulsion at 60% residue are completely separate parameters." },
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
              For the asphalt layer above the tack, use the{" "}
              <Link href="/asphalt-tonnage-calculator" className="text-teal-300 underline font-semibold">
                asphalt tonnage calculator
              </Link>
              . For a residential budget, see the{" "}
              <Link href="/asphalt-driveway-cost-calculator" className="text-teal-300 underline font-semibold">
                asphalt driveway cost calculator
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
              A tack coat calculator gives you emulsion, water and residual bitumen from one rate. Start with the basis of your specification, check the residue on the data sheet, and count each surface you need to spray. Then add an allowance and confirm the container size with your supplier.
            </p>
            <p className="text-sm italic text-white/60 bg-black/50 p-4 rounded-xl border border-white/10">
              Results are estimates for planning. Rates, dilution and materials must follow your project specification and supplier instructions.
            </p>
          </section>
        </div>
      </article>
    </>
  );
}
