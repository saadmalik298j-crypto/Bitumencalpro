// app/blog/bitumen-density-chart/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import {
import AuthorBio from "../../components/AuthorBio";
  ChevronRight,
  Clock,
  Calendar,
  BookOpen,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  FlaskConical,
  Thermometer,
  BarChart3,
} from "lucide-react";

// ── Metadata ──────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Bitumen Density Chart: Values by Grade & Temperature",
  description:
    "See bitumen density values by grade — 60/70, 80/100, VG30 & more. Includes temperature effects, conversion formulas, and a quality check guide.",
  keywords: [
    "bitumen density",
    "bitumen density chart",
    "bitumen density kg/m3",
    "bitumen density g/cm3",
    "bitumen specific gravity",
    "bitumen grade density",
    "60/70 bitumen density",
    "VG30 density",
    "asphalt binder density",
    "bitumen density temperature",
  ],
  alternates: { canonical: "https://bitumencalcpro.com/blog/bitumen-density-chart" },
  openGraph: {
    title: "Bitumen Density Chart: Values by Grade & Temperature | BitumenCalcPro",
    description:
      "See bitumen density values by grade — 60/70, 80/100, VG30 & more. Includes temperature effects, conversion formulas, and a quality check guide.",
    url: "https://bitumencalcpro.com/blog/bitumen-density-chart",
    siteName: "BitumenCalcPro",
    type: "article",
    publishedTime: "2026-08-06T00:00:00.000Z",
    authors: ["BitumenCalcPro"],
    images: [
      {
        url: "/bitumen-density-chart.webp",
        width: 1200,
        height: 630,
        alt: "Bitumen density chart — density values by grade and temperature",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bitumen Density Chart: Values by Grade & Temperature",
    description:
      "Bitumen density values by grade — 60/70, 80/100, VG30 & more — with temperature effects and conversion formulas.",
    images: ["/bitumen-density-chart.webp"],
  },
  robots: {
    "max-image-preview": "large",
  },
};

// ── Structured Data ──────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Bitumen Density Chart: Density Values by Grade, Temperature Effects & How to Use Them",
  description:
    "See bitumen density values by grade — 60/70, 80/100, VG30 & more. Includes temperature effects, conversion formulas, and a quality check guide.",
  image: "https://bitumencalcpro.com/bitumen-density-chart.webp",
  datePublished: "2026-08-06T00:00:00.000Z",
  dateModified: "2026-08-06T00:00:00.000Z",
  author: { "@type": "Organization", name: "BitumenCalcPro", url: "https://bitumencalcpro.com" },
  publisher: {
    "@type": "Organization",
    name: "BitumenCalcPro",
    url: "https://bitumencalcpro.com",
    logo: { "@type": "ImageObject", url: "https://bitumencalcpro.com/favicon.ico" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://bitumencalcpro.com/blog/bitumen-density-chart" },
  keywords:
    "bitumen density, bitumen density chart, bitumen specific gravity, bitumen density kg/m3, bitumen grade density, temperature effects on bitumen",
  articleSection: "Bitumen Properties & Testing",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the density of bitumen in kg/m³?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most paving-grade bitumen falls between 1000 and 1050 kg/m³ at 25°C, though the exact figure depends on grade, source, and temperature.",
      },
    },
    {
      "@type": "Question",
      name: "Is bitumen denser than water?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Usually slightly, yes. Most paving grades have a specific gravity just above 1.00, meaning they're marginally denser than water, though some softer grades come in close to or just under water's density.",
      },
    },
    {
      "@type": "Question",
      name: "Why does bitumen density change with temperature?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Like most materials, bitumen expands as it heats up. The same mass spread across a larger volume means the density reading drops as temperature rises.",
      },
    },
    {
      "@type": "Question",
      name: "Does bitumen grade affect density?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Harder penetration grades and oxidized bitumen tend to read denser, while softer grades and cutback bitumen (diluted with solvent) read lower.",
      },
    },
    {
      "@type": "Question",
      name: "How do I convert bitumen density from kg/m³ to tons/m³?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Divide by 1000. A density of 1020 kg/m³ is the same as 1.02 tons/m³.",
      },
    },
    {
      "@type": "Question",
      name: "Can density tell me if bitumen has been adulterated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It can offer an early warning. A density reading noticeably outside the normal range for a stated grade may indicate dilution or contamination, but full lab testing is needed to confirm quality.",
      },
    },
    {
      "@type": "Question",
      name: "What temperature is bitumen density usually measured at?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "25°C is the standard reference temperature for most reported density values, though testing at higher temperatures matters for applications closer to actual mixing or application conditions.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://bitumencalcpro.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://bitumencalcpro.com/blog" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Bitumen Density Chart",
      item: "https://bitumencalcpro.com/blog/bitumen-density-chart",
    },
  ],
};

// ── Reusable sub-components ───────────────────────────────

function SectionImage({
  src,
  alt,
  caption,
  priority,
}: {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
}) {
  return (
    <figure className="my-8 sm:my-10 w-[calc(100vw-32px)] max-w-full lg:w-full overflow-hidden not-prose">
      <div className="relative w-full max-w-full rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 shadow-xl sm:shadow-2xl bg-black/20">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={675}
          className="w-full max-w-full h-auto object-contain sm:object-cover" style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 75vw, 900px"
          priority={priority}
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-white/45 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

function InfoTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="my-6 sm:my-8 -mx-4 sm:mx-0 overflow-x-auto not-prose sm:rounded-xl border-y sm:border border-white/10 shadow-lg">
      <table className="w-full min-w-[320px] text-sm">
        <thead>
          <tr className="bg-teal-600/30 border-b border-white/10">
            {headers.map((h) => (
              <th
                key={h}
                className="text-left px-3 py-2.5 sm:px-5 sm:py-3.5 text-white font-bold text-xs uppercase tracking-wider"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={`border-b border-white/5 ${
                i % 2 === 0 ? "bg-white/5" : "bg-white/[0.02]"
              } hover:bg-white/10 transition-colors`}
            >
              {row.map((cell, j) => (
                <td key={j} className="px-3 py-2 sm:px-5 sm:py-3 text-white/80 leading-relaxed text-xs sm:text-sm">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CalcBox({ title, formula, example }: { title: string; formula: string; example: string }) {
  return (
    <div className="my-5 bg-white/5 border border-white/10 rounded-2xl p-6 not-prose">
      <p className="font-bold text-white mb-2">{title}</p>
      <code className="block bg-black/30 text-teal-300 text-sm px-4 py-2.5 rounded-lg mb-3 font-mono">
        {formula}
      </code>
      <p className="text-white/65 text-sm leading-relaxed">{example}</p>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────
export default function BitumenDensityChartPage() {
  return (
    <>
      <Script
        id="schema-article-density"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="schema-faq-density"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="schema-breadcrumb-density"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ── HERO BAND ── */}
      <div className="relative pt-16 pb-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 to-blue-600/10 pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-orange-500/10 blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center flex-wrap gap-1.5 text-sm text-white/55 mb-8"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight size={13} />
            <Link href="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
            <ChevronRight size={13} />
            <span className="text-white/90 font-medium">Bitumen Density Chart</span>
          </nav>

          {/* Category badge */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="inline-flex items-center gap-1.5 bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
              <BarChart3 size={12} />
              Bitumen Properties &amp; Testing
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-6 max-w-4xl">
            Bitumen Density Chart: Density Values by Grade, Temperature Effects &amp; How to Use Them
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-white/50 text-sm mb-10">
            <span className="flex items-center gap-1.5">
              <Calendar size={13} />
              <time dateTime="2026-08-06">August 6, 2026</time>
            </span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="flex items-center gap-1.5">
              <Clock size={13} />
              12 min read
            </span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="text-white/50">By BitumenCalcPro</span>
          </div>
        </div>
      </div>

      {/* ── HERO IMAGE ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionImage
          src="/bitumen-density-chart.webp"
          alt="Bitumen density chart — density values by grade at 25°C"
          caption="Bitumen density varies by grade, temperature, and source — this chart covers the full picture"
          priority
        />
      </div>

      {/* ── ARTICLE BODY + SIDEBAR ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24">
        <div className="flex flex-col xl:flex-row gap-12 items-start">

          {/* ── MAIN CONTENT ── */}
          <article className="flex-1 min-w-0">

            {/* Quick Answer Box */}
            <div className="mb-10 bg-gradient-to-br from-teal-500/15 to-teal-600/10 border border-teal-400/25 rounded-2xl p-6 md:p-8">
              <h2 className="text-lg font-black text-teal-300 mb-3 flex items-center gap-2">
                <CheckCircle2 size={18} />
                Quick Answer
              </h2>
              <p className="text-white/85 leading-relaxed text-base">
                Bitumen density typically falls between <strong className="text-white">1.00 and 1.05 g/cm³
                (1000–1050 kg/m³) at 25°C</strong>, though it varies by grade, source, and temperature.
                Softer penetration grades like 80/100 sit toward the lower end, while harder or oxidized grades
                run higher. Density drops as bitumen heats up, which matters for accurate material calculations
                and mix design.
              </p>
            </div>

            {/* Key Takeaways */}
            <div className="mb-10 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
              <h2 className="text-lg font-black text-orange-300 mb-4 flex items-center gap-2">
                <AlertCircle size={18} />
                Key Takeaways
              </h2>
              <ul className="space-y-2.5">
                {[
                  "Most paving-grade bitumen has a density close to water, roughly 1.00–1.05 g/cm³ at 25°C",
                  "Density decreases as temperature rises, so lab and supplier values are always tied to a specific test temperature",
                  "Grade affects density: harder grades and oxidized bitumen run slightly denser than softer penetration grades",
                  "Density figures vary between suppliers and sources, so always confirm exact values against a certificate of analysis",
                  "Accurate density values matter for converting between weight and volume in transport, storage, and mix design",
                  "Unusually low or high density readings can be an early sign of diluted or contaminated bitumen",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/75 text-sm leading-relaxed">
                    <CheckCircle2 size={15} className="text-teal-400 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* ── SECTION: What Is Bitumen Density? ── */}
            <section id="what-is-bitumen-density" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                What Is Bitumen Density?
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Density measures how much mass fits into a given volume — for bitumen, it&apos;s usually expressed
                in <strong className="text-white">kilograms per cubic meter (kg/m³)</strong> or{" "}
                <strong className="text-white">grams per cubic centimeter (g/cm³)</strong>. Since bitumen sits so
                close to water&apos;s density of 1.00 g/cm³, small differences between grades matter a lot in
                engineering calculations, even though the material always looks and feels similarly heavy and thick.
              </p>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Density is closely related to <strong className="text-white">specific gravity</strong>, a term
                you&apos;ll see just as often on technical data sheets. Specific gravity compares bitumen&apos;s
                density to that of water at the same temperature, so a specific gravity of 1.02 simply means the
                bitumen is 2% denser than water. In practice, the two numbers are close enough to use
                interchangeably for most fieldwork, though lab reports usually specify which one they&apos;re giving.
              </p>

              <SectionImage
                src="/what-is-bitumen-density.webp"
                alt="What is bitumen density — measuring mass per unit volume of bitumen binder"
                caption="Bitumen density is expressed in kg/m³ or g/cm³ and compared to water's reference density of 1.00 g/cm³"
              />
            </section>

            {/* ── SECTION: Bitumen Density Chart ── */}
            <section id="bitumen-density-chart" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Bitumen Density Chart
              </h2>
              <p className="text-white/80 leading-relaxed mb-6 text-base">
                The table below gives typical density ranges for common bitumen grades at 25°C. These figures are
                general industry reference ranges compiled from supplier data sheets and technical sources —
                actual values vary by producer, crude oil source, and manufacturing process, so always check the
                certificate of analysis for the specific batch you&apos;re using.
              </p>

              <InfoTable
                headers={["Bitumen Grade", "Density Range (g/cm³)", "Density Range (kg/m³)"]}
                rows={[
                  ["Penetration 40/50", "1.02 – 1.05", "1020 – 1050"],
                  ["Penetration 60/70", "1.01 – 1.04", "1010 – 1040"],
                  ["Penetration 80/100", "0.99 – 1.02", "990 – 1020"],
                  ["VG10", "0.99 – 1.01", "990 – 1010"],
                  ["VG30", "1.00 – 1.03", "1000 – 1030"],
                  ["VG40", "1.02 – 1.05", "1020 – 1050"],
                  ["Bitumen emulsion", "1.02 – 1.05", "1020 – 1050"],
                  ["Cutback bitumen", "0.92 – 0.97", "920 – 970"],
                  ["Oxidized (blown) bitumen", "1.05 – 1.10", "1050 – 1100"],
                  ["Polymer modified bitumen (PMB)", "0.98 – 1.02", "980 – 1020"],
                ]}
              />

              <SectionImage
                src="/bitumen-density-by-grade.webp"
                alt="Bitumen density by grade — comparison of 40/50, 60/70, 80/100, VG30, cutback, emulsion, and oxidized bitumen"
                caption="Harder penetration grades and oxidized bitumen run denser; cutback bitumen reads noticeably lower due to solvent dilution"
              />

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 not-prose mt-6">
                <p className="text-white/80 text-sm leading-relaxed">
                  <strong className="text-white">A few patterns worth noting:</strong> Harder penetration grades
                  (40/50) generally run denser than softer ones (80/100), since they contain a different balance
                  of asphaltenes and oils. Cutback bitumen reads noticeably lower because it&apos;s diluted with a
                  lighter solvent, while oxidized bitumen reads higher because air-blowing changes its molecular
                  structure. Emulsions sit on the higher end too, since they include water in the mix.
                </p>
              </div>
            </section>

            {/* ── SECTION: Temperature Effects ── */}
            <section id="temperature-effects" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                How Temperature Affects Bitumen Density
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Density isn&apos;t a fixed number — it changes with temperature, and this is one of the most important
                things to understand before using any density chart for real calculations. As bitumen heats up, it
                expands slightly, which spreads the same mass over more volume and lowers the density reading.
              </p>

              <InfoTable
                headers={["Temperature", "Approximate Density (g/cm³)"]}
                rows={[
                  ["25°C", "~1.03"],
                  ["60°C", "~1.00"],
                  ["135°C", "~0.97"],
                  ["160°C", "~0.95"],
                ]}
              />

              <SectionImage
                src="/bitumen-density-temperature.webp"
                alt="Bitumen density vs temperature — how density decreases as bitumen heats up from 25°C to 160°C"
                caption="Bitumen density drops steadily as temperature rises — always match the density value to your application temperature"
              />

              <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 border border-orange-400/20 rounded-2xl p-6 not-prose">
                <div className="flex items-start gap-3">
                  <Thermometer size={20} className="text-orange-400 shrink-0 mt-0.5" />
                  <p className="text-white/80 text-sm leading-relaxed">
                    <strong className="text-white">Why this matters for hot mix:</strong> A reading taken at 25°C
                    isn&apos;t directly comparable to one taken at 135°C, the typical mixing temperature for hot
                    mix asphalt. If you&apos;re converting weight to volume for a hot mix batch, use a density
                    value measured close to your actual application temperature, not the standard 25°C reference
                    figure, or your quantity estimate will be off.
                  </p>
                </div>
              </div>
            </section>

            {/* ── SECTION: Density vs Specific Gravity ── */}
            <section id="density-vs-specific-gravity" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Density vs. Specific Gravity: What&apos;s the Difference?
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                These two terms cause more confusion than they should. <strong className="text-white">Density</strong> is
                an absolute measurement — mass per unit volume. <strong className="text-white">Specific gravity</strong>{" "}
                is a ratio — bitumen&apos;s density divided by water&apos;s density at the same temperature, which makes
                it a unitless number.
              </p>
              <p className="text-white/80 leading-relaxed text-base">
                In practice: if bitumen density is 1020 kg/m³ and water density is 1000 kg/m³ at the same
                temperature, the specific gravity is 1.02. Since water&apos;s density is so close to 1.00 g/cm³, the
                two figures end up numerically almost identical, which is why they&apos;re often used interchangeably
                in the field even though they measure slightly different things.
              </p>
            </section>

            {/* ── SECTION: Why Density Matters ── */}
            <section id="why-density-matters" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                Why Bitumen Density Matters
              </h2>
              <p className="text-white/80 leading-relaxed mb-6 text-base">
                Density isn&apos;t just a technical curiosity — it directly affects several practical decisions on a
                construction project.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {[
                  {
                    title: "Material estimation",
                    desc: "Converting between weight and volume when ordering, storing, or transporting bitumen depends entirely on an accurate density figure.",
                    color: "orange",
                  },
                  {
                    title: "Transport & storage planning",
                    desc: "Tankers and storage tanks are rated by volume, but bitumen is typically bought and sold by weight, so density is the conversion factor between the two.",
                    color: "teal",
                  },
                  {
                    title: "Mix design",
                    desc: "Asphalt mix design calculations use bitumen density alongside aggregate density to determine void content and binder ratios accurately.",
                    color: "violet",
                  },
                  {
                    title: "Quality control",
                    desc: "A density reading that falls outside the expected range for a given grade can be an early warning sign of contamination or dilution.",
                    color: "blue",
                  },
                  {
                    title: "Cost calculations",
                    desc: "Since bitumen is often priced by weight but handled by volume, density errors can lead to real under- or over-ordering on a project.",
                    color: "orange",
                  },
                ].map(({ title, desc, color }) => (
                  <div
                    key={title}
                    className={`bg-white/5 border border-white/10 rounded-xl p-5 border-l-4 ${
                      color === "orange"
                        ? "border-l-orange-400"
                        : color === "teal"
                        ? "border-l-teal-400"
                        : color === "violet"
                        ? "border-l-violet-400"
                        : "border-l-blue-400"
                    }`}
                  >
                    <h3 className="text-white font-bold mb-2 text-base">{title}</h3>
                    <p className="text-white/65 text-sm leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>

              <p className="text-white/80 leading-relaxed text-base">
                For accurate project estimates, our{" "}
                <Link
                  href="/"
                  className="text-orange-400 hover:text-orange-300 font-semibold underline underline-offset-2 transition-colors"
                >
                  Bitumen Calculator
                </Link>{" "}
                uses density as a core input to convert between weight and volume, making it easy to cross-check
                your material orders against supplier invoices.
              </p>
            </section>

            {/* ── SECTION: Density Testing ── */}
            <section id="density-testing" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                How Bitumen Density Is Tested
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                The standard method uses a <strong className="text-white">pycnometer</strong>, a small glass vessel
                with a precisely known volume. A sample of bitumen is weighed, placed in the pycnometer, and the
                volume it displaces is measured against a water reference at a controlled temperature. Dividing the
                mass by the volume gives the density directly.
              </p>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Because temperature has such a large effect on the result, testing standards specify exact
                temperatures for the test — typically 25°C for standard reporting, though some specifications call
                for measurements at other temperatures relevant to storage or application conditions. The{" "}
                <a
                  href="https://www.astm.org/d0070_d0070m-17.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                >
                  ASTM D70 standard
                  <ExternalLink size={12} className="inline ml-0.5 mb-0.5" />
                </a>{" "}
                governs the pycnometer test method for bitumen specific gravity and density.
              </p>
              <p className="text-white/80 leading-relaxed text-base">
                Reputable suppliers include density figures on their certificate of analysis for every batch,
                tested under standardized conditions rather than estimated from general grade ranges.
              </p>

              <SectionImage
                src="/bitumen-density-testing.webp"
                alt="Bitumen density testing — pycnometer method for measuring specific gravity and density in a laboratory"
                caption="The pycnometer method: weighing a bitumen sample and measuring volume displacement against water at a controlled 25°C"
              />
            </section>

            {/* ── SECTION: Density Comparison ── */}
            <section id="density-comparison" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                Bitumen Density vs. Asphalt vs. Aggregate vs. Water
              </h2>
              <p className="text-white/80 leading-relaxed mb-6 text-base">
                Bitumen doesn&apos;t work alone — it&apos;s always part of a larger mix, and comparing its density to the
                other materials involved helps put the numbers in context.
              </p>

              <InfoTable
                headers={["Material", "Typical Density (kg/m³)"]}
                rows={[
                  ["Water", "1000"],
                  ["Bitumen (paving grade)", "1000 – 1050"],
                  ["Aggregate (crushed stone)", "2600 – 2900"],
                  ["Hot mix asphalt (compacted)", "2200 – 2500"],
                ]}
              />

              <SectionImage
                src="/bitumen-vs-asphalt-density.webp"
                alt="Bitumen vs asphalt vs aggregate density comparison — showing relative densities of paving materials"
                caption="Aggregate is roughly 2.5× denser than bitumen — which explains why bitumen makes up only a small percentage of asphalt by weight"
              />

              <p className="text-white/80 leading-relaxed text-base">
                This comparison shows why bitumen makes up such a small percentage of asphalt by weight, despite
                doing most of the binding work — aggregate is roughly two-and-a-half to three times denser than
                bitumen, so even a small percentage of binder by weight ends up coating a much larger volume of
                stone.
              </p>

              <p className="text-white/80 leading-relaxed mt-5 text-base">
                For a deeper look at what goes into the mix, see our guide on{" "}
                <Link
                  href="/blog/what-is-bitumen"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                >
                  what bitumen is and how it&apos;s used
                </Link>
                , which covers the full composition of asphalt and how bitumen behaves as a binder.
              </p>
            </section>

            {/* ── SECTION: Quality Issues ── */}
            <section id="quality-issues" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Using Density to Spot Bitumen Quality Issues
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Density can double as a rough quality check. Bitumen diluted with cheaper substances like recycled
                oil, furnace oil, or diesel typically reads <strong className="text-white">below the expected
                density range</strong> for its stated grade, since these additives are lighter than pure bitumen.
                On the other end, unusually high density readings can point to contamination with ash or
                over-oxidized residue.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-orange-500/10 border border-orange-400/20 rounded-xl p-5">
                  <h3 className="text-orange-300 font-black mb-3 flex items-center gap-2">
                    <AlertCircle size={16} />
                    Low Density Warning
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Density below the expected range for a grade often indicates dilution with lighter substances
                    (recycled oil, diesel, kerosene). Softening point and penetration tests will confirm.
                  </p>
                </div>
                <div className="bg-teal-500/10 border border-teal-400/20 rounded-xl p-5">
                  <h3 className="text-teal-300 font-black mb-3 flex items-center gap-2">
                    <AlertCircle size={16} />
                    High Density Warning
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Unusually high density may signal over-oxidation or contamination with ash or heavy residue.
                    Full lab testing — penetration, ductility, softening point — is needed to confirm.
                  </p>
                </div>
              </div>

              <SectionImage
                src="/bitumen-quality-testing.webp"
                alt="Bitumen quality testing — lab tests for density, penetration, softening point, and ductility"
                caption="Density is a useful early flag — but penetration, softening point, and ductility remain the definitive quality tests"
              />

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 not-prose mt-2">
                <div className="flex items-start gap-3">
                  <FlaskConical size={20} className="text-teal-400 shrink-0 mt-0.5" />
                  <p className="text-white/75 text-sm leading-relaxed">
                    <strong className="text-white">Important:</strong> This isn&apos;t a substitute for full lab
                    testing — penetration, softening point, and ductility tests remain the proper way to verify
                    grade and quality — but a density reading well outside the normal range for a given grade is
                    a reasonable early flag that something about a shipment deserves closer inspection before
                    it&apos;s accepted or used. The{" "}
                    <a
                      href="https://asphaltinstitute.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-400 hover:text-teal-300 underline underline-offset-2"
                    >
                      Asphalt Institute
                      <ExternalLink size={11} className="inline ml-0.5 mb-0.5" />
                    </a>{" "}
                    publishes full specifications and test method standards for bitumen quality acceptance.
                  </p>
                </div>
              </div>
            </section>

            {/* ── SECTION: Using This Chart ── */}
            <section id="using-the-chart" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                How to Use This Chart for Calculations
              </h2>
              <p className="text-white/80 leading-relaxed mb-6 text-base">
                Density charts become genuinely useful once you apply them to real numbers. Two common conversions
                come up constantly in fieldwork:
              </p>

              <CalcBox
                title="Converting volume to weight"
                formula="Weight (kg) = Volume (m³) × Density (kg/m³)"
                example="Example: 2.5 m³ of 60/70 bitumen at a density of 1020 kg/m³ = 2,550 kg = 2.55 metric tons"
              />

              <CalcBox
                title="Converting weight to volume"
                formula="Volume (m³) = Weight (kg) ÷ Density (kg/m³)"
                example="Example: 5 tons (5000 kg) of VG30 at 1010 kg/m³ = 4.95 m³ of storage or transport volume needed"
              />

              <SectionImage
                src="/bitumen-density-calculation.webp"
                alt="Bitumen density calculation — converting weight to volume and volume to weight using density"
                caption="These two conversions — volume to weight, weight to volume — are the most frequent practical uses of a density figure on site"
              />

              <p className="text-white/80 leading-relaxed text-base">
                These conversions matter most when ordering material by weight but needing to confirm it fits in a
                tanker rated by volume, or when a mix design specifies binder content by volume but the supplier
                invoices by weight. Getting the density value wrong — or using one measured at the wrong
                temperature — is one of the more common sources of estimating errors on paving projects.
              </p>

              <div className="mt-6 bg-gradient-to-br from-teal-500/15 to-blue-600/10 border border-teal-400/25 rounded-2xl p-6 not-prose">
                <p className="text-white/85 text-sm leading-relaxed">
                  <strong className="text-teal-300">Pro tip:</strong> Rather than doing these conversions manually,
                  our{" "}
                  <Link
                    href="/"
                    className="text-orange-400 hover:text-orange-300 font-semibold underline underline-offset-2 transition-colors"
                  >
                    free Bitumen Calculator
                  </Link>{" "}
                  handles weight-to-volume and volume-to-weight conversions automatically as part of full asphalt
                  quantity estimates. You can also check our guide on{" "}
                  <Link
                    href="/blog/cold-mix-bitumen"
                    className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                  >
                    cold mix bitumen
                  </Link>{" "}
                  — density differences between cold mix and hot mix affect estimation in ways that catch many
                  contractors off guard.
                </p>
              </div>
            </section>

            {/* ── SECTION: Summary ── */}
            <section id="summary" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Summary
              </h2>
              <div className="bg-gradient-to-br from-teal-500/15 via-blue-600/10 to-purple-600/10 border border-white/15 rounded-2xl p-6 md:p-8">
                <p className="text-white/85 leading-relaxed mb-4 text-base">
                  Bitumen density sits close to water&apos;s, typically in the 1.00–1.05 g/cm³ range, but the exact
                  figure shifts with grade, temperature, and source. Harder grades and oxidized bitumen run denser;
                  cutback bitumen and softer penetration grades run lighter. Getting density right — and matching
                  it to the correct temperature — matters for everything from ordering the right quantity to
                  spotting a diluted shipment before it&apos;s used.
                </p>
                <p className="text-white/85 leading-relaxed text-base">
                  For project-specific calculations, use the exact density figure from your supplier&apos;s
                  certificate of analysis rather than a general chart, since real-world values can vary from the
                  typical ranges shown here. If you&apos;re estimating asphalt material quantities, our{" "}
                  <Link
                    href="/"
                    className="text-orange-400 hover:text-orange-300 font-semibold underline underline-offset-2 transition-colors"
                  >
                    Bitumen Calculator
                  </Link>{" "}
                  lets you plug in your exact density and binder content to get accurate weight and volume
                  estimates for any paving project.
                </p>
              </div>
            </section>

            {/* ── SECTION: FAQ ── */}
            <section id="faq" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-6 border-l-4 border-orange-400 pl-4">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {[
                  {
                    q: "What is the density of bitumen in kg/m³?",
                    a: "Most paving-grade bitumen falls between 1000 and 1050 kg/m³ at 25°C, though the exact figure depends on grade, source, and temperature.",
                  },
                  {
                    q: "Is bitumen denser than water?",
                    a: "Usually slightly, yes. Most paving grades have a specific gravity just above 1.00, meaning they're marginally denser than water, though some softer grades come in close to or just under water's density.",
                  },
                  {
                    q: "Why does bitumen density change with temperature?",
                    a: "Like most materials, bitumen expands as it heats up. The same mass spread across a larger volume means the density reading drops as temperature rises.",
                  },
                  {
                    q: "Does bitumen grade affect density?",
                    a: "Yes. Harder penetration grades and oxidized bitumen tend to read denser, while softer grades and cutback bitumen (diluted with solvent) read lower.",
                  },
                  {
                    q: "How do I convert bitumen density from kg/m³ to tons/m³?",
                    a: "Divide by 1000. A density of 1020 kg/m³ is the same as 1.02 tons/m³.",
                  },
                  {
                    q: "Can density tell me if bitumen has been adulterated?",
                    a: "It can offer an early warning. A density reading noticeably outside the normal range for a stated grade may indicate dilution or contamination, but full lab testing is needed to confirm quality.",
                  },
                  {
                    q: "What temperature is bitumen density usually measured at?",
                    a: "25°C is the standard reference temperature for most reported density values, though testing at higher temperatures matters for applications closer to actual mixing or application conditions.",
                  },
                ].map(({ q, a }, i) => (
                  <details
                    key={i}
                    className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden open:border-white/20 transition-all hover:bg-white/[0.08]"
                  >
                    <summary className="flex items-center justify-between gap-4 cursor-pointer p-5 md:p-6 font-bold text-white text-base select-none list-none">
                      <span>{q}</span>
                      <ChevronRight
                        size={18}
                        className="text-teal-400 shrink-0 group-open:rotate-90 transition-transform duration-200"
                      />
                    </summary>
                    <div className="px-5 md:px-6 pb-5 text-white/70 text-sm leading-relaxed border-t border-white/5 pt-4">
                      {a}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* ── Navigation ── */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-white/60 hover:text-white font-semibold text-sm transition-colors group"
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                Back to Blog
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white px-6 py-3 rounded-full font-bold text-sm transition-all shadow-[0_0_20px_rgba(249,115,22,0.35)] hover:shadow-[0_0_30px_rgba(249,115,22,0.55)]"
              >
                Try the Bitumen Calculator
                <ArrowRight size={15} />
              </Link>
            </div>
          
          <AuthorBio />
        </article>

          {/* ── SIDEBAR ── */}
          <aside className="hidden xl:block w-72 shrink-0">
            <div className="sticky top-24">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-white font-black text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
                  <BookOpen size={14} className="text-teal-400" />
                  Table of Contents
                </h3>
                <nav className="space-y-1">
                  {[
                    { id: "what-is-bitumen-density", label: "What Is Bitumen Density?" },
                    { id: "bitumen-density-chart", label: "Density Chart by Grade" },
                    { id: "temperature-effects", label: "Temperature Effects" },
                    { id: "density-vs-specific-gravity", label: "Density vs Specific Gravity" },
                    { id: "why-density-matters", label: "Why Density Matters" },
                    { id: "density-testing", label: "How Density Is Tested" },
                    { id: "density-comparison", label: "Density Comparison" },
                    { id: "quality-issues", label: "Quality Issues" },
                    { id: "using-the-chart", label: "Using the Chart" },
                    { id: "summary", label: "Summary" },
                    { id: "faq", label: "FAQ" },
                  ].map(({ id, label }) => (
                    <a
                      key={id}
                      href={`#${id}`}
                      className="block text-white/55 hover:text-teal-400 text-xs leading-relaxed py-1 px-2 rounded-lg hover:bg-white/5 transition-all"
                    >
                      {label}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Sidebar CTA */}
              <div className="mt-5 bg-gradient-to-br from-orange-500/15 to-teal-500/10 border border-white/10 rounded-2xl p-5 text-center">
                <p className="text-white/80 text-xs leading-relaxed mb-4">
                  Need to convert bitumen weight to volume? Use our free calculator.
                </p>
                <Link
                  href="/"
                  className="block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white px-4 py-2.5 rounded-xl font-bold text-xs transition-all shadow-[0_0_15px_rgba(249,115,22,0.3)] hover:shadow-[0_0_25px_rgba(249,115,22,0.5)]"
                >
                  Free Bitumen Calculator →
                </Link>
              </div>

              {/* Related Posts */}
              <div className="mt-5 bg-white/5 border border-white/10 rounded-2xl p-5">
                <h3 className="text-white font-black text-sm uppercase tracking-wider mb-4">
                  Related Articles
                </h3>
                <div className="space-y-3">
                  <Link
                    href="/blog/what-is-bitumen"
                    className="block group hover:bg-white/5 rounded-xl p-3 transition-colors -mx-1"
                  >
                    <p className="text-white/70 text-xs font-semibold group-hover:text-teal-400 transition-colors leading-snug">
                      What Is Bitumen? Meaning, Uses &amp; Properties
                    </p>
                    <span className="text-white/35 text-xs mt-1 block">Bitumen Fundamentals</span>
                  </Link>
                  <Link
                    href="/blog/cold-mix-bitumen"
                    className="block group hover:bg-white/5 rounded-xl p-3 transition-colors -mx-1"
                  >
                    <p className="text-white/70 text-xs font-semibold group-hover:text-teal-400 transition-colors leading-snug">
                      Cold Mix Bitumen: Uses, Benefits &amp; Hot Mix Comparison
                    </p>
                    <span className="text-white/35 text-xs mt-1 block">Asphalt &amp; Paving</span>
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
