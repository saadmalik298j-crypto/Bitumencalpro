import AuthorBio from "../../components/AuthorBio";
// app/blog/asphalt-yield/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import {
  ChevronRight,
  Clock,
  Calendar,
  BookOpen,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
} from "lucide-react";

// ── Metadata ──────────────────────────────────────────────
export const metadata: Metadata = {
  title: "How to Calculate Asphalt Yield: Formulas, Examples & Field Check",
  description:
    "Calculate asphalt yield in lb/yd² using the 110 factor. Includes worked examples, a coverage-per-ton chart, field verification method, and ordering waste allowance.",
  keywords: [
    "asphalt yield",
    "how to calculate asphalt yield",
    "asphalt yield formula",
    "asphalt coverage per ton",
    "pounds per square yard asphalt",
    "asphalt tons per square yard",
    "110 factor asphalt",
    "asphalt spread rate",
    "asphalt tonnage calculation",
    "asphalt yield check",
  ],
  alternates: {
    canonical: "https://bitumencalcpro.com/blog/asphalt-yield",
  },
  openGraph: {
    title:
      "How to Calculate Asphalt Yield: Formulas, Examples & Field Check | BitumenCalcPro",
    description:
      "Step-by-step asphalt yield calculation using the 110 lb/yd² factor — with worked examples, a coverage chart, and a field method to catch thin mats before they fail.",
    url: "https://bitumencalcpro.com/blog/asphalt-yield",
    siteName: "BitumenCalcPro",
    type: "article",
    publishedTime: "2026-11-11T00:00:00.000Z",
    authors: ["BitumenCalcPro"],
    images: [
      {
        url: "/how-to-calculate-asphalt-yield.webp",
        width: 1200,
        height: 675,
        alt: "How to calculate asphalt yield — distributor truck coverage and lb per square yard formula on paving project",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Calculate Asphalt Yield: Formulas, Examples & Field Check",
    description:
      "Asphalt yield formulas, the 110 lb/yd² factor explained, 4 worked examples, a coverage chart, and a field verification method.",
    images: ["/how-to-calculate-asphalt-yield.webp"],
  },
  robots: {
    "max-image-preview": "large",
  },
};

// ── Structured Data ──────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "How to Calculate Asphalt Yield (Formulas, Examples, and a Field Check)",
  description:
    "Calculate asphalt yield in lb/yd² using the 110 factor. Includes worked examples, a coverage-per-ton chart, field verification method, and ordering waste allowance.",
  image: "https://bitumencalcpro.com/how-to-calculate-asphalt-yield.webp",
  datePublished: "2026-11-11T00:00:00.000Z",
  dateModified: "2026-11-11T00:00:00.000Z",
  author: {
    "@type": "Person",
    name: "Nabeel Awan",
    url: "https://bitumencalcpro.com/about-us",
    image:
      "https://bitumencalcpro.com/nabeel-awan-bitumencalcpro-founder.webp",
  },
  publisher: {
    "@type": "Organization",
    name: "BitumenCalcPro",
    url: "https://bitumencalcpro.com",
    logo: {
      "@type": "ImageObject",
      url: "https://bitumencalcpro.com/logo.png",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://bitumencalcpro.com/blog/asphalt-yield",
  },
  keywords:
    "asphalt yield, how to calculate asphalt yield, asphalt coverage per ton, pounds per square yard asphalt, 110 factor asphalt, asphalt spread rate, asphalt tonnage calculation",
  articleSection: "Asphalt & Paving Materials",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is asphalt yield?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Asphalt yield is the weight of hot mix placed per square yard at a set thickness, usually in lb/yd². Contractors use it to check that the mat matches the specified thickness.",
      },
    },
    {
      "@type": "Question",
      name: "How do you calculate asphalt yield?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Divide the pounds of mix placed by the square yards covered to get actual yield. For the target, multiply the specified thickness in inches by 110.",
      },
    },
    {
      "@type": "Question",
      name: "How many square yards does a ton of asphalt cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "About 18.2 square yards at 1 inch, 9.1 at 2 inches, and 6.1 at 3 inches, using the standard 110 lb/yd² per inch planning factor.",
      },
    },
    {
      "@type": "Question",
      name: "Why is 110 lb per square yard per inch used for asphalt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It rounds the weight of one square yard of compacted dense-graded mix at 1 inch thick. At 145 lb/ft³, one square yard by one inch equals about 108.75 lb, which rounds to 110 for planning purposes.",
      },
    },
    {
      "@type": "Question",
      name: "How many tons of asphalt do I need for 1,000 square yards?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "At 2 inches, about 110 tons. At 3 inches, about 165 tons, before adding a waste allowance.",
      },
    },
    {
      "@type": "Question",
      name: "Does compaction change asphalt yield?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mix is ordered by weight, so tonnage stays the same. Compaction sets the final thickness, so always calculate from compacted thickness, not loose thickness.",
      },
    },
    {
      "@type": "Question",
      name: "How much extra asphalt should I order?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "About 5% for large, simple, rectangular jobs and about 10% for small or irregular ones. Round up to a truckload to avoid a costly second delivery.",
      },
    },
    {
      "@type": "Question",
      name: "Is asphalt yield the same as coverage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "They are two views of the same relationship. Yield is pounds per square yard, and coverage is square yards per ton.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://bitumencalcpro.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://bitumencalcpro.com/blog",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "How to Calculate Asphalt Yield",
      item: "https://bitumencalcpro.com/blog/asphalt-yield",
    },
  ],
};

// ── Reusable Components ───────────────────────────────────
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
          className="w-full max-w-full h-auto object-contain sm:object-cover"
          style={{ maxWidth: "100%", height: "auto", display: "block" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 75vw, 900px"
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : undefined}
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
                <td
                  key={j}
                  className="px-3 py-2 sm:px-5 sm:py-3 text-white/80 leading-relaxed text-xs sm:text-sm"
                >
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

// ── Page ─────────────────────────────────────────────────
export default function AsphaltYieldPage() {
  return (
    <>
      <Script
        id="schema-article"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="schema-faq"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="schema-breadcrumb"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ── HERO BAND ── */}
      <div className="relative pt-16 pb-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 to-orange-600/10 pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-teal-500/10 blur-[100px] pointer-events-none" />

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
            <span className="text-white/90 font-medium">
              How to Calculate Asphalt Yield
            </span>
          </nav>

          {/* Category badge */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="inline-flex items-center gap-1.5 bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
              <BookOpen size={12} />
              Asphalt &amp; Paving Materials
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-6 max-w-4xl">
            How to Calculate Asphalt Yield (Formulas, Examples, and a Field
            Check)
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-white/50 text-sm mb-10">
            <span className="flex items-center gap-1.5">
              <Calendar size={13} />
              <time dateTime="2026-11-11">November 11, 2026</time>
            </span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="flex items-center gap-1.5">
              <Clock size={13} />
              14 min read
            </span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="text-white/50">By BitumenCalcPro</span>
          </div>
        </div>
      </div>

      {/* ── FEATURED IMAGE ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionImage
          src="/how-to-calculate-asphalt-yield.webp"
          alt="How to calculate asphalt yield — asphalt paving crew spreading hot mix with yield formula showing pounds per square yard per inch"
          caption="Yield ties the scale ticket to the mat — target yield tells you what to place, and actual yield tells you whether you hit it"
          priority
        />
      </div>

      {/* ── ARTICLE BODY ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24">
        <div className="flex flex-col xl:flex-row gap-12 items-start">
          <article className="flex-1 min-w-0">

            {/* Quick Answer */}
            <div className="mb-10 bg-gradient-to-br from-teal-500/15 to-teal-600/10 border border-teal-400/25 rounded-2xl p-6 md:p-8">
              <h2 className="text-lg font-black text-teal-300 mb-3 flex items-center gap-2">
                <CheckCircle2 size={18} />
                Quick Answer
              </h2>
              <p className="text-white/85 leading-relaxed text-base">
                To calculate asphalt yield, work in pounds per square yard.
                Multiply the compacted thickness in inches by about{" "}
                <strong className="text-white">110 lb per square yard per inch</strong>{" "}
                to get the target yield. Tons needed equals square yards ×
                thickness × 110 ÷ 2,000. One ton covers about{" "}
                <strong className="text-white">18.2 square yards at 1 inch</strong>,
                or 9.1 at 2 inches. After paving, divide the pounds placed by
                the square yards covered to check actual yield against the target.
              </p>
            </div>

            {/* Table of Contents */}
            <div className="mb-10 bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="text-white font-black text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
                <BookOpen size={14} className="text-teal-400" />
                Table of Contents
              </div>
              <nav className="space-y-1">
                {[
                  { id: "what-yield-means", label: "What Asphalt Yield Means" },
                  { id: "core-formulas", label: "The Core Formulas" },
                  { id: "110-factor", label: "Where the 110 Number Comes From" },
                  { id: "worked-examples", label: "Worked Examples" },
                  { id: "coverage-chart", label: "Asphalt Coverage Per Ton Chart" },
                  { id: "field-check", label: "How to Check Actual Yield on the Job" },
                  { id: "what-moves-yield", label: "What Moves Asphalt Yield" },
                  { id: "waste-allowance", label: "Ordering: Waste Allowance" },
                  { id: "unit-conversions", label: "Converting Between Units" },
                  { id: "common-mistakes", label: "Common Mistakes" },
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

            {/* Intro */}
            <section className="mb-10">
              <p className="text-white/85 leading-relaxed mb-4 text-base">
                Asphalt is bought by the ton and laid by the square yard. Yield
                is the number that connects the two. It tells a crew how much
                mix to spread, tells an estimator how many trucks to order, and
                tells an inspector whether the mat on the ground matches the
                thickness on the plan.
              </p>
              <p className="text-white/85 leading-relaxed mb-4 text-base">
                This guide shows how to calculate asphalt yield from scratch,
                where the standard 110 factor comes from, how to run the numbers
                on real jobs, and how to check actual yield once paving starts.
                For large projects where you need total tonnage quickly, our{" "}
                <Link
                  href="/asphalt-tonnage-calculator"
                  className="text-teal-400 hover:text-orange-300 underline underline-offset-2 transition-colors font-medium"
                >
                  free asphalt tonnage calculator
                </Link>{" "}
                handles the arithmetic and unit conversions automatically.
              </p>
            </section>



            {/* What Yield Means */}
            <section id="what-yield-means" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                What Asphalt Yield Means
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Asphalt yield is the amount of hot mix placed over a given area
                at a given thickness. Crews usually express it as{" "}
                <strong className="text-white">
                  pounds per square yard (lb/yd²)
                </strong>
                . The per-inch version — pounds per square yard per inch of
                compacted thickness — is the figure you carry from job to job.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
                {[
                  {
                    term: "Coverage per ton",
                    def: "How many square yards (or square feet) one ton of mix covers at a set thickness",
                    color: "teal",
                  },
                  {
                    term: "Spread rate",
                    def: "The pounds of mix applied per square yard — the same number as yield",
                    color: "orange",
                  },
                  {
                    term: "Target vs actual",
                    def: "Target yield is what the design says to place. Actual yield is what scale tickets and measurements show you placed. The gap is the useful part.",
                    color: "teal",
                  },
                ].map(({ term, def, color }) => (
                  <div
                    key={term}
                    className={`bg-white/5 border rounded-xl p-4 border-l-4 ${
                      color === "teal"
                        ? "border-teal-400/40 border-l-teal-400"
                        : "border-orange-400/40 border-l-orange-400"
                    }`}
                  >
                    <p
                      className={`font-bold text-sm mb-1 ${
                        color === "teal" ? "text-teal-300" : "text-orange-300"
                      }`}
                    >
                      {term}
                    </p>
                    <p className="text-white/65 text-xs leading-relaxed">{def}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Core Formulas */}
            <section id="core-formulas" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                How to Calculate Asphalt Yield: The Core Formulas
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Start by converting the area to square yards, since yield works
                in that unit.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  {
                    label: "Convert area",
                    formula: "Square yards = length (ft) × width (ft) ÷ 9",
                  },
                  {
                    label: "Target yield",
                    formula: "Target yield (lb/yd²) = thickness (in) × 110",
                  },
                  {
                    label: "Tons needed",
                    formula: "Tons = square yards × thickness (in) × 110 ÷ 2,000",
                  },
                  {
                    label: "Coverage per ton",
                    formula: "Square yards per ton = 2,000 ÷ target yield  =  18.2 ÷ thickness (in)",
                  },
                  {
                    label: "Load coverage",
                    formula: "Square yards from a load = tons × 2,000 ÷ (110 × thickness in inches)",
                  },
                ].map(({ label, formula }) => (
                  <div
                    key={label}
                    className="bg-slate-950/80 border border-white/10 rounded-xl p-4 font-mono text-sm"
                  >
                    <span className="text-teal-400 text-xs font-sans font-bold uppercase tracking-wider block mb-1">
                      {label}
                    </span>
                    <span className="text-white">{formula}</span>
                  </div>
                ))}
              </div>
              <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-xl p-5 mb-5">
                <p className="text-white/80 text-sm leading-relaxed mb-2">
                  <strong className="text-white">Square-foot alternative:</strong>{" "}
                  tons = length (ft) × width (ft) × thickness (ft) × 145 ÷
                  2,000. Both routes give nearly the same answer.
                </p>
                <p className="text-white/80 text-sm leading-relaxed">
                  <strong className="text-white">Metric version:</strong>{" "}
                  Compacted hot mix weighs about 2,322 kg/m³, so tonnes = area
                  (m²) × thickness (m) × 2.322. A 50 mm layer places about
                  116 kg/m².
                </p>
              </div>

              {/* Image 2: After core formulas */}
              <SectionImage
                src="/asphalt-compacted-thickness-yield-measurement.webp"
                alt="Asphalt compacted thickness yield measurement — core sample showing compacted mat depth used to verify lb per square yard yield against specification"
                caption="Compacted thickness — not loose thickness — is what the 110 factor requires; always measure after rolling, not before"
              />
            </section>

            {/* 110 Factor */}
            <section id="110-factor" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Where the 110 Number Comes From
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                The 110 lb/yd² per inch factor is a shortcut for the density of
                compacted hot mix. Here is the derivation:
              </p>
              <div className="space-y-2 mb-6">
                {[
                  "1 square yard = 9 square feet",
                  "At 1 inch thick, that is 9 × (1 ÷ 12) = 0.75 cubic feet",
                  "Dense-graded hot mix weighs about 145 lb/ft³ when compacted",
                  "0.75 × 145 = 108.75 lb → rounds to 110 for planning",
                ].map((step, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 text-white/80 text-sm leading-relaxed"
                  >
                    <span className="text-teal-400 font-black shrink-0 w-5">
                      {i + 1}.
                    </span>
                    {step}
                  </div>
                ))}
              </div>
              <div className="bg-gradient-to-br from-teal-500/10 to-teal-600/5 border border-teal-500/20 rounded-xl p-5 mb-5">
                <p className="text-white/85 text-sm leading-relaxed mb-2">
                  <strong className="text-teal-300">Mix-specific formula:</strong>{" "}
                  lb/yd² per inch = 46.8 × bulk specific gravity of the
                  compacted mix. A bulk specific gravity of 2.35 gives exactly
                  110. The mix design and field cores supply the real value, which is also used to <Link href="/blog/asphalt-air-voids" className="text-amber-400 hover:text-amber-300 underline underline-offset-2 transition-colors">calculate air voids in asphalt</Link> for volumetric compliance.
                </p>
                <p className="text-white/80 text-sm leading-relaxed">
                  Several state transportation agencies use 110 as their
                  estimating factor for all asphalt mixtures; some
                  specifications use 112.
                </p>
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                How much does the factor choice matter?
              </h3>
              <p className="text-white/80 leading-relaxed mb-4 text-base">
                On a 1,000 yd² job at 2 inches:
              </p>
              <InfoTable
                headers={["Factor", "Tons needed"]}
                rows={[
                  ["108.75 (145 lb/ft³ exact)", "108.75"],
                  ["110 (common planning factor)", "110"],
                  ["112 (some specifications)", "112"],
                ]}
              />
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                The spread is about 3%. A few online calculators use roughly
                121 lb/yd² per inch, which runs about 10% higher than 110.
                Check which factor a tool uses before comparing its answer with
                yours. Our{" "}
                <Link
                  href="/blog/asphalt-estimation-mistakes"
                  className="text-teal-400 hover:text-orange-300 underline underline-offset-2 transition-colors font-medium"
                >
                  guide to common asphalt estimation mistakes
                </Link>{" "}
                covers how the wrong density assumption is one of the most
                expensive errors estimators make.
              </p>

              {/* Image 3: After 110 factor explanation */}
              <SectionImage
                src="/asphalt-yield-density-pavement-cross-section.webp"
                alt="Asphalt yield and density pavement cross section — showing compacted mix density of 145 lb per cubic foot used in the 110 lb per square yard per inch calculation"
                caption="The 110 factor is a shortcut for compacted mix density — a heavier mix covers fewer square yards per ton and needs a mix-specific factor for precision"
              />
            </section>

            {/* Worked Examples */}
            <section id="worked-examples" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-6 border-l-4 border-orange-400 pl-4">
                Worked Examples
              </h2>

              <div className="space-y-5">
                {/* Example 1 */}
                <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
                  <p className="text-orange-300 font-black text-sm uppercase tracking-wider mb-3">
                    Example 1 — Residential Driveway
                  </p>
                  <p className="text-white/80 text-sm leading-relaxed mb-4">
                    A driveway is 12 ft × 50 ft, paved 3 inches thick.
                  </p>
                  <div className="space-y-2 font-mono text-sm">
                    {[
                      ["Area", "12 × 50 = 600 ft²  →  600 ÷ 9 = 66.7 yd²"],
                      ["Target yield", "3 × 110 = 330 lb/yd²"],
                      ["Tons needed", "66.7 × 3 × 110 ÷ 2,000 = 11.0 tons"],
                      ["Cross-check", "600 × 0.25 ft × 145 ÷ 2,000 = 10.9 tons ✓"],
                    ].map(([label, val]) => (
                      <div key={label} className="flex gap-3">
                        <span className="text-white/40 text-xs w-28 shrink-0 mt-0.5 font-sans">{label}</span>
                        <span className="text-white">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Example 2 */}
                <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
                  <p className="text-teal-300 font-black text-sm uppercase tracking-wider mb-3">
                    Example 2 — Parking Lot Surface Course
                  </p>
                  <p className="text-white/80 text-sm leading-relaxed mb-4">
                    A lot covers 20,000 ft² and gets a 2-inch surface course.
                  </p>
                  <div className="space-y-2 font-mono text-sm">
                    {[
                      ["Area", "20,000 ÷ 9 = 2,222 yd²"],
                      ["Tons", "2,222 × 2 × 110 ÷ 2,000 = 244 tons"],
                    ].map(([label, val]) => (
                      <div key={label} className="flex gap-3">
                        <span className="text-white/40 text-xs w-28 shrink-0 mt-0.5 font-sans">{label}</span>
                        <span className="text-white">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image 4: Before Example 3 */}
                <SectionImage
                  src="/asphalt-truckload-paving-coverage.webp"
                  alt="Asphalt truckload paving coverage — 20-ton dump truck unloading hot mix asphalt showing square yards of coverage at 2 inch thickness"
                  caption="Knowing how far a single truck load reaches lets a paving crew plan joint locations and schedule deliveries without gaps or cold joints"
                />

                {/* Example 3 */}
                <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
                  <p className="text-orange-300 font-black text-sm uppercase tracking-wider mb-3">
                    Example 3 — How Far a Truck Load Goes
                  </p>
                  <p className="text-white/80 text-sm leading-relaxed mb-4">
                    A 20-ton load is spread 2 inches thick.
                  </p>
                  <div className="space-y-2 font-mono text-sm">
                    {[
                      ["Square yards", "20 × 2,000 ÷ (110 × 2) = 40,000 ÷ 220 = 182 yd²"],
                      ["Square feet", "182 × 9 ≈ 1,636 ft²"],
                    ].map(([label, val]) => (
                      <div key={label} className="flex gap-3">
                        <span className="text-white/40 text-xs w-28 shrink-0 mt-0.5 font-sans">{label}</span>
                        <span className="text-white">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Example 4 */}
                <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
                  <p className="text-teal-300 font-black text-sm uppercase tracking-wider mb-3">
                    Example 4 — Lineal Feet Per Ton for a Lane
                  </p>
                  <p className="text-white/80 text-sm leading-relaxed mb-4">
                    A 12-ft lane is paved 2 inches thick.
                  </p>
                  <div className="space-y-2 font-mono text-sm mb-4">
                    {[
                      ["Area per ft", "12 ft × 1 ft = 12 ft²  →  12 ÷ 9 = 1.33 yd²"],
                      ["lb per ft", "1.33 × 220 = 293 lb"],
                      ["Feet per ton", "2,000 ÷ 293 ≈ 6.8 ft"],
                      ["20-ton load", "20 × 6.8 ≈ 136 ft of lane"],
                    ].map(([label, val]) => (
                      <div key={label} className="flex gap-3">
                        <span className="text-white/40 text-xs w-28 shrink-0 mt-0.5 font-sans">{label}</span>
                        <span className="text-white">{val}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-white/60 text-xs">
                    Cross-check: 182 yd² (Example 3) spread over a 12-ft width
                    = about 136 ft of lane. ✓
                  </p>
                </div>
              </div>
            </section>

            {/* Coverage Chart */}
            <section id="coverage-chart" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Asphalt Coverage Per Ton Chart
              </h2>
              <p className="text-white/80 leading-relaxed mb-4 text-base">
                Values use 110 lb/yd² per inch. Tons per 1,000 yd² = 1,000 ×
                thickness × 0.055.
              </p>
              <InfoTable
                headers={["Thickness", "Sq yd per ton", "Sq ft per ton", "Tons per 1,000 sq yd"]}
                rows={[
                  ["1.5 in", "12.1", "109", "82.5"],
                  ["2 in", "9.1", "82", "110"],
                  ["2.5 in", "7.3", "65", "137.5"],
                  ["3 in", "6.1", "55", "165"],
                  ["4 in", "4.5", "41", "220"],
                ]}
              />
              <p className="text-white/80 leading-relaxed text-base">
                For the right layer depth by application type — driveway, road,
                parking lot, or heavy equipment — see our{" "}
                <Link
                  href="/blog/asphalt-thickness"
                  className="text-teal-400 hover:text-orange-300 underline underline-offset-2 transition-colors font-medium"
                >
                  complete asphalt thickness guide
                </Link>
                .
              </p>
            </section>

            {/* Field Check */}
            <section id="field-check" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                How to Check Actual Asphalt Yield on the Job
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                The calculation tells you what to expect. The field check tells
                you what happened.
              </p>

              {/* Image 5: Field check section */}
              <SectionImage
                src="/actual-asphalt-yield-field-inspection.webp"
                alt="Actual asphalt yield field inspection — inspector comparing scale ticket tons placed against measured square yards to verify yield against specification"
                caption="Field yield checks run per load and per day — catching a thin mat early costs a few extra tons, and catching it too late costs a full section rebuild"
              />

              <div className="space-y-3 mb-6">
                {[
                  {
                    step: "1",
                    action: "Total the pounds placed",
                    detail: "Add up the net tons from the scale tickets and multiply by 2,000",
                  },
                  {
                    step: "2",
                    action: "Measure the area covered",
                    detail: "Measure the paved length and width, then convert to square yards",
                  },
                  {
                    step: "3",
                    action: "Divide",
                    detail: "Actual yield (lb/yd²) = pounds placed ÷ square yards covered",
                  },
                  {
                    step: "4",
                    action: "Compare with the target",
                    detail: "Target = specified thickness × 110",
                  },
                  {
                    step: "5",
                    action: "Convert to thickness if needed",
                    detail: "Average thickness (in) = actual yield ÷ 110",
                  },
                ].map(({ step, action, detail }) => (
                  <div
                    key={step}
                    className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-4"
                  >
                    <span className="w-7 h-7 rounded-lg bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-300 font-black text-xs shrink-0">
                      {step}
                    </span>
                    <div>
                      <p className="text-white font-bold text-sm mb-0.5">{action}</p>
                      <p className="text-white/65 text-sm leading-relaxed">{detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-orange-500/15 to-orange-600/10 border border-orange-400/25 rounded-2xl p-6 mb-5">
                <p className="text-orange-300 font-bold text-sm mb-3">
                  Field example — 2-inch spec
                </p>
                <div className="space-y-2 font-mono text-sm">
                  {[
                    ["Placed", "40 tons × 2,000 = 80,000 lb"],
                    ["Actual yield", "80,000 ÷ 380 yd² = 210.5 lb/yd²"],
                    ["Target yield", "2 × 110 = 220 lb/yd²"],
                    ["Difference", "9.5 lb/yd² short — about 4.3% under"],
                    ["Avg thickness", "210.5 ÷ 110 = 1.91 inches"],
                  ].map(([label, val]) => (
                    <div key={label} className="flex gap-3">
                      <span className="text-white/40 text-xs w-28 shrink-0 mt-0.5 font-sans">{label}</span>
                      <span className="text-white">{val}</span>
                    </div>
                  ))}
                </div>
                <p className="text-white/70 text-xs mt-3 leading-relaxed">
                  The mat is averaging 1.9 inches against a 2-inch spec.
                  Agencies check yield per load and per day — the specification
                  sets the tolerance.
                </p>
              </div>
            </section>

            {/* What Moves Yield */}
            <section id="what-moves-yield" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                What Moves Asphalt Yield
              </h2>

              {/* Image 6: What Moves Asphalt Yield */}
              <SectionImage
                src="/uneven-asphalt-base-excess-material-yield.webp"
                alt="Uneven asphalt base causing excess material yield — low spots and rutted base absorbing extra hot mix above target yield"
                caption="An uneven or rutted base is the most common reason actual yield exceeds target — the low spots consume mix the design never accounted for"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                {[
                  {
                    factor: "Mix density",
                    effect: "Aggregate type and gradation change compacted weight per inch. Open-graded mixes weigh less than dense-graded ones and cover more area per ton.",
                    dir: "varies",
                  },
                  {
                    factor: "Base condition",
                    effect: "Low spots and rutted bases absorb extra mix, so actual yield runs above target — the most common reason a job comes in short.",
                    dir: "high",
                  },
                  {
                    factor: "Milled surfaces",
                    effect: "Texture and uneven milling pull more material than a smooth surface — use the higher-end planning rate.",
                    dir: "high",
                  },
                  {
                    factor: "Thickness variation",
                    effect: "An average thickness of 2.3 inches on a 2-inch spec uses about 15% more material than planned.",
                    dir: "high",
                  },
                  {
                    factor: "Compaction",
                    effect: "Mix is bought by weight, so compaction does not change tonnage — it changes the final thickness. Always calculate from compacted thickness.",
                    dir: "neutral",
                  },
                  {
                    factor: "Waste",
                    effect: "Edge trimming, hand work, and material left in the truck bed all add to tons ordered without adding to placed area.",
                    dir: "high",
                  },
                ].map(({ factor, effect, dir }) => (
                  <div
                    key={factor}
                    className={`bg-white/[0.03] border rounded-xl p-4 border-l-4 ${
                      dir === "high"
                        ? "border-orange-400/40 border-l-orange-400"
                        : dir === "neutral"
                        ? "border-teal-400/40 border-l-teal-400"
                        : "border-white/20 border-l-white/20"
                    }`}
                  >
                    <p className="text-white font-bold text-sm mb-1">{factor}</p>
                    <p className="text-white/65 text-xs leading-relaxed">{effect}</p>
                  </div>
                ))}
              </div>
              <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/20 rounded-xl p-5">
                <p className="text-white/85 text-sm leading-relaxed">
                  <strong className="text-orange-300">Use compacted density with compacted thickness.</strong>{" "}
                  If you calculate from loose volume, you need a loose density — mixing the two overstates the order.
                </p>
              </div>
            </section>

            {/* Waste Allowance */}
            <section id="waste-allowance" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                Ordering: Waste Allowance
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                The formulas give net tons in place. Add a buffer on top:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                <div className="bg-teal-500/10 border border-teal-500/20 rounded-xl p-5">
                  <p className="text-teal-300 font-bold text-sm mb-2">+5% waste</p>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Large, simple, rectangular areas with a good base condition
                    and minimal hand work
                  </p>
                </div>
                <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-5">
                  <p className="text-orange-300 font-bold text-sm mb-2">+10% waste</p>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Small jobs, curves, irregular shapes, or uneven and poorly
                    prepared bases
                  </p>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed text-base">
                Round up to a full truckload. Plants deliver by the load, and a
                short order means a second delivery and a cold seam where two
                batches meet. The{" "}
                <a
                  href="https://www.asphaltinstitute.org/engineering/construction/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                >
                  Asphalt Institute&apos;s construction guidelines
                  <ExternalLink size={12} className="inline ml-0.5 mb-0.5" />
                </a>{" "}
                recommend confirming mix density with the supplier&apos;s mix
                design before ordering on any job over a few hundred tons.
              </p>
            </section>

            {/* Unit Conversions */}
            <section id="unit-conversions" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Converting Between Units
              </h2>
              <p className="text-white/80 leading-relaxed mb-4 text-base">
                Plans and specifications arrive in mixed units, so keep these
                conversions handy:
              </p>
              <InfoTable
                headers={["From", "To", "Multiply by"]}
                rows={[
                  ["lb/yd² per inch", "kg/m² per mm", "0.0214"],
                  ["Short tons", "Metric tonnes", "0.907"],
                  ["Square feet", "Square yards", "0.111 (divide by 9)"],
                  ["Square yards", "Square meters", "0.836"],
                ]}
              />
              <p className="text-white/80 leading-relaxed text-base">
                A 110 lb/yd² per inch factor works out to about 2.35 kg/m² per
                mm, which matches the metric density of about 2.32 to 2.35
                t/m³. The{" "}
                <a
                  href="https://www.fhwa.dot.gov/pavement/asphalt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                >
                  Federal Highway Administration&apos;s asphalt pavement resources
                  <ExternalLink size={12} className="inline ml-0.5 mb-0.5" />
                </a>{" "}
                include specification tables that use both unit systems.
              </p>
            </section>

            {/* Common Mistakes */}
            <section id="common-mistakes" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                Common Mistakes
              </h2>
              <div className="space-y-3 mb-6">
                {[
                  {
                    mistake: "Skipping the square yard conversion",
                    fix: "Dividing by 9 is the step people forget when starting in square feet. The 110 factor only works with square yards.",
                  },
                  {
                    mistake: "Using loose thickness",
                    fix: "The 110 factor assumes compacted thickness. Loose thickness runs higher — using it understates your order.",
                  },
                  {
                    mistake: "Mixing short tons and metric tonnes",
                    fix: "A short ton is 2,000 lb; a tonne is about 2,205 lb. A 10% error becomes a shortage on site.",
                  },
                  {
                    mistake: "Treating 110 as exact",
                    fix: "It is a planning factor. Confirm actual density with the supplier on large jobs using the bulk Gsb from the mix design.",
                  },
                  {
                    mistake: "Ignoring the base condition",
                    fix: "An uneven base raises actual yield above target. Survey and prepare the base before calculating order quantities.",
                  },
                  {
                    mistake: "Confusing bitumen with mix",
                    fix: "The 110 factor is for hot mix asphalt. Liquid bitumen binder has a density near that of water. See our Bitumen Density Chart for binder values.",
                  },
                ].map(({ mistake, fix }, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 bg-white/[0.03] border border-white/10 rounded-xl p-4"
                  >
                    <AlertCircle size={16} className="text-orange-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-white font-bold text-sm mb-0.5">{mistake}</p>
                      <p className="text-white/65 text-sm leading-relaxed">{fix}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary box */}
              <div className="bg-gradient-to-br from-teal-500/15 via-blue-600/10 to-purple-600/10 border border-white/15 rounded-2xl p-6 md:p-8">
                <h3 className="text-lg font-black text-white mb-3">Sum Up</h3>
                <p className="text-white/85 leading-relaxed mb-4 text-base">
                  To calculate asphalt yield, convert the area to square yards,
                  multiply by the compacted thickness and 110 lb per inch, and
                  divide by 2,000 for tons. Use 18.2 ÷ thickness for square
                  yards per ton. After paving, divide pounds placed by square
                  yards covered and compare the result with the target to catch
                  thin or thick mats early.
                </p>
                <p className="text-white/85 leading-relaxed text-base">
                  Add 5% to 10% for waste and confirm the mix density with your
                  supplier on large jobs. For the bitumen binder quantity inside
                  the mix, our{" "}
                  <Link
                    href="/"
                    className="text-teal-400 hover:text-orange-300 font-semibold underline underline-offset-2 transition-colors"
                  >
                    free Bitumen Calculator
                  </Link>{" "}
                  handles binder weight, litres, and order quantity from the
                  mix design. For density values across different bitumen grades
                  and forms, see our{" "}
                  <Link
                    href="/blog/bitumen-density-chart"
                    className="text-teal-400 hover:text-orange-300 font-semibold underline underline-offset-2 transition-colors"
                  >
                    Bitumen Density Chart
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-6 border-l-4 border-teal-400 pl-4">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {[
                  {
                    q: "What is asphalt yield?",
                    a: "Asphalt yield is the weight of hot mix placed per square yard at a set thickness, usually in lb/yd². Contractors use it to check that the mat matches the specified thickness.",
                  },
                  {
                    q: "How do you calculate asphalt yield?",
                    a: "Divide the pounds of mix placed by the square yards covered to get actual yield. For the target, multiply the specified thickness in inches by 110.",
                  },
                  {
                    q: "How many square yards does a ton of asphalt cover?",
                    a: "About 18.2 square yards at 1 inch, 9.1 at 2 inches, and 6.1 at 3 inches, using the standard 110 lb/yd² per inch planning factor.",
                  },
                  {
                    q: "Why is 110 lb per square yard per inch used for asphalt?",
                    a: "It rounds the weight of one square yard of compacted dense-graded mix at 1 inch thick. At 145 lb/ft³, one square yard by one inch equals about 108.75 lb, which rounds to 110 for planning purposes.",
                  },
                  {
                    q: "How many tons of asphalt do I need for 1,000 square yards?",
                    a: "At 2 inches, about 110 tons. At 3 inches, about 165 tons, before adding a waste allowance.",
                  },
                  {
                    q: "Does compaction change asphalt yield?",
                    a: "Mix is ordered by weight, so tonnage stays the same. Compaction sets the final thickness, so always calculate from compacted thickness, not loose thickness.",
                  },
                  {
                    q: "How much extra asphalt should I order?",
                    a: "About 5% for large, simple, rectangular jobs and about 10% for small or irregular ones. Round up to a truckload to avoid a costly second delivery.",
                  },
                  {
                    q: "Is asphalt yield the same as coverage?",
                    a: "They are two views of the same relationship. Yield is pounds per square yard, and coverage is square yards per ton.",
                  },
                ].map(({ q, a }, i) => (
                  <div
                    key={i}
                    className="bg-white/5 border border-white/10 rounded-2xl p-5 md:p-6 transition-colors hover:bg-white/[0.08]"
                  >
                    <h3 className="text-lg font-bold text-white mb-2 leading-snug">{q}</h3>
                    <p className="text-white/70 text-sm leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
            </section>

            <AuthorBio />
          </article>
        </div>
      </div>
    </>
  );
}

