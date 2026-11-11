// app/blog/asphalt-air-voids/page.tsx
import AuthorBio from "../../components/AuthorBio";
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
  title: "How to Calculate Air Voids in Asphalt: Formula, Steps & Examples",
  description:
    "Calculate air voids in asphalt using Va = 100 × (1 − Gmb ÷ Gmm). Covers Gmb and Gmm test methods, two worked examples, VMA/VFA relationships, target ranges, and common mistakes.",
  keywords: [
    "air voids in asphalt",
    "how to calculate air voids",
    "air voids formula asphalt",
    "Gmb Gmm asphalt",
    "Va percent asphalt",
    "VMA VFA asphalt",
    "AASHTO T 269",
    "percent air voids pavement",
    "asphalt mix design air voids",
    "bulk specific gravity asphalt",
  ],
  alternates: {
    canonical: "https://bitumencalcpro.com/blog/asphalt-air-voids",
  },
  openGraph: {
    title:
      "How to Calculate Air Voids in Asphalt: Formula, Steps & Examples | BitumenCalcPro",
    description:
      "Step-by-step guide to calculating air voids in asphalt using Gmb and Gmm. Includes two worked examples, VMA/VFA relationships, target ranges, and field troubleshooting.",
    url: "https://bitumencalcpro.com/blog/asphalt-air-voids",
    siteName: "BitumenCalcPro",
    type: "article",
    publishedTime: "2026-11-11T00:00:00.000Z",
    authors: ["BitumenCalcPro"],
    images: [
      {
        url: "/how-to-calculate-air-voids-in-asphalt.webp",
        width: 1200,
        height: 675,
        alt: "How to calculate air voids in asphalt — Gmb and Gmm specific gravity test measurements for Va formula",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Calculate Air Voids in Asphalt: Formula, Steps & Examples",
    description:
      "Air voids formula Va = 100 × (1 − Gmb ÷ Gmm). Two worked examples, VMA/VFA explained, target ranges, and common lab mistakes — everything for mix design.",
    images: ["/how-to-calculate-air-voids-in-asphalt.webp"],
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
    "How to Calculate Air Voids in Asphalt (Formula, Steps, and Worked Examples)",
  description:
    "Calculate air voids in asphalt using Va = 100 × (1 − Gmb ÷ Gmm). Covers Gmb and Gmm test methods, two worked examples, VMA/VFA relationships, target ranges, and common mistakes.",
  image:
    "https://bitumencalcpro.com/how-to-calculate-air-voids-in-asphalt.webp",
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
    "@id": "https://bitumencalcpro.com/blog/asphalt-air-voids",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the formula for air voids in asphalt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Air voids (Va%) = 100 × (1 − Gmb ÷ Gmm). Gmb is the bulk specific gravity of the compacted specimen, measured by AASHTO T 166 or ASTM D2726. Gmm is the maximum theoretical specific gravity of the loose mix, measured by AASHTO T 209 or ASTM D2041.",
      },
    },
    {
      "@type": "Question",
      name: "What is an acceptable air void percentage in asphalt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lab-compacted specimens target 4.0% air voids at Ndesign gyrations in Superpave design. Field compacted pavement should reach 3% to 8% Va. Most highway specs call for 3% to 5% under traffic. Below 3% causes rutting and bleeding. Above 8% allows water infiltration and accelerated oxidation.",
      },
    },
    {
      "@type": "Question",
      name: "How is Gmb measured?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gmb is measured per AASHTO T 166 (ASTM D2726) using the saturated surface-dry (SSD) method. Weigh the dry specimen in air (A), weigh it SSD in air (B), then weigh it submerged in water (C). Gmb = A ÷ (B − C).",
      },
    },
    {
      "@type": "Question",
      name: "How is Gmm measured?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gmm is measured by the Rice test per AASHTO T 209 (ASTM D2041). Loose mix is placed in a vacuum container, air is evacuated, water is added, and the container is weighed. Gmm = dry mass of mix ÷ (dry mass + mass of water filling voids).",
      },
    },
    {
      "@type": "Question",
      name: "What happens if air voids are too low?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If air voids fall below about 3%, traffic loads have no room to push binder. The mix shoves and ruts under wheel loads, and binder bleeds to the surface creating a slick, shiny, low-friction surface. This is a common failure mode in hot climates with heavy traffic.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if air voids are too high?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Above about 8%, the interconnected void system lets water and air into the mat. Water freezes, expands, and strips binder from aggregate. Oxygen oxidizes the binder, making it brittle and prone to cracking. High air voids are the leading cause of premature raveling and fatigue cracking.",
      },
    },
    {
      "@type": "Question",
      name: "What is VMA in asphalt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "VMA stands for voids in the mineral aggregate. It is the total void space between aggregate particles in the compacted mix, expressed as a percent. VMA = 100 − (Gmb × Ps ÷ Gsb), where Ps is the percent aggregate by mass and Gsb is the bulk specific gravity of the aggregate blend. VMA must be large enough to hold both the design binder film thickness and the target air voids.",
      },
    },
    {
      "@type": "Question",
      name: "What is VFA in asphalt and how does it relate to air voids?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "VFA stands for voids filled with asphalt. It is the percentage of VMA that is filled with binder: VFA = 100 × (VMA − Va) ÷ VMA. At 4% Va and 15% VMA the VFA is 73.3%. Superpave targets VFA between 65% and 75% for most traffic levels, rising to 65%–78% for lower-volume roads. VFA controls durability and rutting resistance together.",
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
      name: "How to Calculate Air Voids in Asphalt",
      item: "https://bitumencalcpro.com/blog/asphalt-air-voids",
    },
  ],
};

// ── Helper components ────────────────────────────────────
function SectionImage({
  src,
  alt,
  caption,
  priority = false,
}: {
  src: string;
  alt: string;
  caption: string;
  priority?: boolean;
}) {
  return (
    <figure className="my-8 w-full">
      <div className="relative w-full overflow-hidden rounded-xl shadow-lg">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={675}
          priority={priority}
          className="w-full h-auto object-contain sm:object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 75vw, 900px"
        />
      </div>
      <figcaption className="mt-2 text-center text-sm text-slate-400 italic">
        {caption}
      </figcaption>
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
    <div className="my-6 overflow-x-auto rounded-xl border border-slate-700 shadow-md">
      <table className="w-full text-sm text-left">
        <thead className="bg-slate-700 text-teal-300 uppercase text-xs tracking-wider">
          <tr>
            {headers.map((h, i) => (
              <th key={i} className="px-4 py-3 font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr
              key={ri}
              className={
                ri % 2 === 0
                  ? "bg-slate-800 hover:bg-slate-750"
                  : "bg-slate-850 hover:bg-slate-750"
              }
            >
              {row.map((cell, ci) => (
                <td key={ci} className="px-4 py-3 text-slate-300 border-t border-slate-700">
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
export default function AirVoidsPage() {
  const tocItems = [
    { id: "what-are-air-voids", label: "What Are Air Voids in Asphalt?" },
    { id: "the-formula", label: "The Air Voids Formula" },
    { id: "what-you-need", label: "What You Need: Gmb and Gmm" },
    { id: "lab-specimen-example", label: "Lab Specimen Example" },
    { id: "field-core-example", label: "Field Core Example" },
    { id: "vma-and-vfa", label: "VMA and VFA" },
    { id: "target-ranges", label: "Target Ranges by Mix Type" },
    { id: "why-air-voids-matter", label: "Why Air Voids Matter" },
    { id: "common-mistakes", label: "Common Mistakes" },
    { id: "how-to-fix", label: "How to Fix Out-of-Range Air Voids" },
    { id: "quick-reference", label: "Quick Reference Table" },
    { id: "faq", label: "FAQ" },
  ];

  return (
    <>
      {/* ── JSON-LD ── */}
      <Script
        id="article-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="min-h-screen bg-slate-900 text-slate-100">

        {/* ── Hero Band ── */}
        <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 border-b border-slate-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10">

            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-sm text-slate-400 mb-6">
              <Link href="/" className="hover:text-teal-400 transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link href="/blog" className="hover:text-teal-400 transition-colors">Blog</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-slate-300 truncate">Air Voids in Asphalt</span>
            </nav>

            {/* Category Badge */}
            <div className="mb-4">
              <span className="inline-flex items-center gap-1.5 bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                <BookOpen className="w-3 h-3" />
                Mix Design &amp; Lab Testing
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5 max-w-4xl">
              How to Calculate Air Voids in Asphalt
              <span className="block text-teal-400 text-2xl sm:text-3xl mt-1">
                Formula, Steps, and Worked Examples
              </span>
            </h1>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-teal-400" />
                <time dateTime="2026-11-11">November 11, 2026</time>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-teal-400" />
                16 min read
              </span>
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-teal-400" />
                By Nabeel Awan
              </span>
            </div>
          </div>
        </div>

        {/* ── Featured Image ── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-2 mb-2">
          <figure className="w-full">
            <div className="relative w-full overflow-hidden rounded-xl shadow-2xl">
              <Image
                src="/how-to-calculate-air-voids-in-asphalt.webp"
                alt="How to calculate air voids in asphalt — Gmb and Gmm specific gravity test measurements for Va formula"
                width={1200}
                height={675}
                priority
                fetchPriority="high"
                className="w-full h-auto object-contain sm:object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 75vw, 900px"
              />
            </div>
          </figure>
        </div>

        {/* ── Article Body ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col xl:flex-row gap-10">

            {/* Main Content */}
            <article className="flex-1 min-w-0">

              {/* Quick Answer */}
              <div className="bg-gradient-to-r from-teal-900/40 to-slate-800/60 border border-teal-500/30 rounded-xl p-6 mb-8">
                <h2 className="text-teal-400 font-bold text-lg mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  Quick Answer
                </h2>
                <p className="text-slate-200 leading-relaxed">
                  To calculate air voids in asphalt, measure the bulk specific gravity (Gmb) of a compacted sample and
                  the maximum specific gravity (Gmm) of the loose mix. Then use: <strong className="text-teal-300">Air
                  voids (%) = 100 × (1 − Gmb ÷ Gmm)</strong>. A Gmb of 2.419 and a Gmm of 2.520 give 4.0% air voids.
                  Most dense-graded mixes target about 4% in the lab and roughly 3% to 8% in the field.
                </p>
              </div>

              {/* TOC */}
              <nav aria-label="Table of contents" className="bg-slate-800/60 border border-slate-700 rounded-xl p-5 mb-10">
                <h2 className="text-white font-bold text-base mb-4 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-teal-400" />
                  In This Guide
                </h2>
                <ol className="space-y-2">
                  {tocItems.map((item, i) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="flex items-center gap-2 text-sm text-slate-300 hover:text-teal-400 transition-colors group"
                      >
                        <span className="text-teal-500 font-mono text-xs w-5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                        <span className="group-hover:underline">{item.label}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>

              {/* ── Intro ── */}
              <p className="text-slate-300 leading-relaxed mb-6 text-lg">
                Air voids decide how long a pavement lasts. Too many, and water and air get into the mat. Too few, and
                the mix ruts and bleeds in the first hot summer.
              </p>
              <p className="text-slate-300 leading-relaxed mb-6">
                This guide shows how to calculate air voids in asphalt from two lab measurements. You&apos;ll get the formula,
                the test methods behind each input, two worked examples, target ranges, and the mistakes that throw results
                off. If you work with Superpave, Marshall, or field cores, the steps are the same.
              </p>

              {/* ── SECTION 1: What Are Air Voids ── */}
              <section id="what-are-air-voids" className="scroll-mt-24 mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 pl-4 border-l-4 border-teal-400">
                  What Are Air Voids in Asphalt?
                </h2>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Air voids, written as Va or Pa, are the pockets of air trapped between coated aggregate particles in a
                  compacted asphalt mix. They are expressed as a percentage of the total specimen volume.
                </p>
                <p className="text-slate-300 leading-relaxed mb-4">
                  A compacted specimen of asphalt mix is made up of three things: aggregate, binder, and air. The aggregate
                  takes up most of the volume. Binder fills a portion of the gaps between particles. Air fills the rest. That
                  remaining air is what Va measures.
                </p>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Va is not the same as VMA. VMA is the total void space between aggregate particles — it includes both the
                  binder-filled voids and the air-filled voids. Va is only the unfilled part. Keep this straight from the
                  beginning or the numbers will not make sense.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  Va shows up in every mix design method. Superpave selects the design binder content at a target Va of 4.0%.
                  Marshall design does the same thing. Field cores check whether compaction brought Va down from the lab
                  value into the allowable field range.
                </p>
              </section>

              {/* ── SECTION 2: The Formula ── */}
              <section id="the-formula" className="scroll-mt-24 mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 pl-4 border-l-4 border-orange-400">
                  The Air Voids Formula
                </h2>
                <p className="text-slate-300 leading-relaxed mb-6">
                  The formula for air voids in asphalt has two inputs: bulk specific gravity (Gmb) and maximum theoretical
                  specific gravity (Gmm).
                </p>

                {/* Formula Box */}
                <div className="bg-slate-800 border border-teal-500/40 rounded-xl p-6 mb-8 text-center">
                  <p className="text-teal-300 text-xl font-mono font-bold mb-2">
                    Va (%) = 100 × (1 − Gmb ÷ Gmm)
                  </p>
                  <p className="text-slate-400 text-sm mt-3">
                    Va = percent air voids &nbsp;|&nbsp; Gmb = bulk specific gravity of compacted specimen &nbsp;|&nbsp;
                    Gmm = maximum theoretical specific gravity of loose mix
                  </p>
                </div>

                <p className="text-slate-300 leading-relaxed mb-4">
                  The fraction Gmb ÷ Gmm tells you what proportion of the theoretical maximum density the compacted specimen
                  has reached. If Gmm is 2.520 and Gmb is 2.419, the ratio is 0.9599. The specimen is at 95.99% of maximum
                  density. The remaining 4.01% is air — that is Va.
                </p>

                <InfoTable
                  headers={["Term", "Full Name", "Standard", "What It Measures"]}
                  rows={[
                    ["Gmb", "Bulk Specific Gravity", "AASHTO T 166 / ASTM D2726", "Density of compacted specimen including surface voids"],
                    ["Gmm", "Maximum Theoretical Sp. Gr.", "AASHTO T 209 / ASTM D2041", "Density of loose mix with zero air"],
                    ["Va", "Air Voids", "Calculated", "Percent of total volume that is air"],
                    ["VMA", "Voids in Mineral Aggregate", "Calculated from Gmb + Gsb", "Total void space between aggregate particles"],
                    ["VFA", "Voids Filled with Asphalt", "Calculated from VMA + Va", "Percent of VMA occupied by binder"],
                  ]}
                />
              </section>

              {/* ── SECTION 3: What You Need (Gmb + Gmm) ── */}
              <section id="what-you-need" className="scroll-mt-24 mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 pl-4 border-l-4 border-teal-400">
                  What You Need: Gmb and Gmm
                </h2>

                <h3 className="text-xl font-bold text-white mb-4">
                  Measuring Gmb — Bulk Specific Gravity
                </h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Gmb is measured on a compacted specimen — a lab gyratory puck, a Marshall specimen, or a field core. The
                  standard method is AASHTO T 166 (ASTM D2726), the saturated surface-dry (SSD) procedure.
                </p>

                <SectionImage
                  src="/asphalt-bulk-specific-gravity-gmb-test.webp"
                  alt="Asphalt bulk specific gravity Gmb test using saturated surface-dry SSD method per AASHTO T 166"
                  caption="Gmb is measured by the SSD method: dry weight in air, SSD weight in air, and submerged weight in water."
                />

                <p className="text-slate-300 leading-relaxed mb-4">
                  Three weights go in:
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "A — dry mass of specimen in air (g)",
                    "B — saturated surface-dry mass of specimen in air (g)",
                    "C — submerged mass of specimen in water (g)",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-teal-400 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="bg-slate-800 border border-slate-600 rounded-lg p-4 mb-6 font-mono text-teal-300 text-center text-base">
                  Gmb = A ÷ (B − C)
                </div>
                <p className="text-slate-300 leading-relaxed mb-8">
                  For cores with a large surface texture or open-graded mixes, use the dimensional method (AASHTO T 269 /
                  ASTM D3203) or the CoreLok vacuum method instead. Surface texture on open mixes absorbs more water during
                  SSD saturation and inflates B, pulling Gmb down. This is an important distinction when working with{" "}
                  <Link
                    href="/blog/asphalt-yield"
                    className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                  >
                    asphalt yield and compacted density calculations
                  </Link>{" "}
                  that depend on Gmb for accuracy.
                </p>

                <h3 className="text-xl font-bold text-white mb-4">
                  Measuring Gmm — Maximum Theoretical Specific Gravity
                </h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Gmm is measured on a loose, uncompacted sample of the same mix. The test is called the Rice test after its
                  developer. Standard: AASHTO T 209 (ASTM D2041).
                </p>

                <SectionImage
                  src="/asphalt-maximum-specific-gravity-rice-test.webp"
                  alt="Asphalt maximum specific gravity Gmm Rice test per AASHTO T 209 — vacuum container with loose mix and water"
                  caption="The Rice test evacuates air from loose mix suspended in water to determine Gmm — the theoretical maximum density with zero air voids."
                />

                <p className="text-slate-300 leading-relaxed mb-4">
                  Steps of the Rice test:
                </p>
                <ol className="space-y-2 mb-6 list-decimal list-inside text-slate-300">
                  <li>Separate the loose mix by hand to break clumps.</li>
                  <li>Place the mix in the vacuum container with enough water to submerge it.</li>
                  <li>Apply vacuum (≥ 27.5 inHg) for 15 minutes while agitating.</li>
                  <li>Release vacuum, fill to the calibration mark, and weigh.</li>
                </ol>
                <div className="bg-slate-800 border border-slate-600 rounded-lg p-4 mb-6 font-mono text-teal-300 text-center text-base">
                  Gmm = A ÷ (A + D − E)
                </div>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Where A = dry mass of mix, D = mass of container + water, E = mass of container + water + mix submerged.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  Gmm can also be calculated from mix composition if you know the specific gravity and content of each
                  material. For standard dense-graded mixes, the Rice test is preferred because it accounts for the actual
                  binder and aggregate in the specific batch. The resulting Gmm value directly relates to{" "}
                  <Link
                    href="/blog/bitumen-density-chart"
                    className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                  >
                    bitumen binder density values
                  </Link>{" "}
                  used across mix design calculations.
                </p>
              </section>

              {/* ── SECTION 4: Lab Specimen Example ── */}
              <section id="lab-specimen-example" className="scroll-mt-24 mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 pl-4 border-l-4 border-orange-400">
                  Lab Specimen Example
                </h2>
                <p className="text-slate-300 leading-relaxed mb-6">
                  Here are the numbers from a Superpave mix design at the design number of gyrations (Ndesign = 75).
                </p>

                <InfoTable
                  headers={["Measurement", "Value", "Method"]}
                  rows={[
                    ["Dry mass in air (A)", "1,197.4 g", "Scale"],
                    ["SSD mass in air (B)", "1,200.6 g", "Scale"],
                    ["Submerged mass (C)", "686.1 g", "Suspension scale"],
                    ["Gmb", "1197.4 ÷ (1200.6 − 686.1) = 2.329", "AASHTO T 166"],
                    ["Gmm (Rice test)", "2.491", "AASHTO T 209"],
                    ["Va", "100 × (1 − 2.329 ÷ 2.491) = 6.5%", "Calculated"],
                  ]}
                />

                <SectionImage
                  src="/asphalt-gmb-gmm-air-voids-comparison.webp"
                  alt="Asphalt Gmb versus Gmm comparison showing how air void percentage is derived from the difference between bulk and maximum specific gravity"
                  caption="The gap between Gmb and Gmm represents the air space in the compacted specimen. Va shrinks as compaction increases."
                />

                <p className="text-slate-300 leading-relaxed mb-4">
                  At 6.5% Va, this mix is above the 4% design target. That means the design binder content needs to change,
                  or the mix was not compacted correctly in the lab. The designer would typically increase binder content in
                  increments of 0.5% and retest until Va lands at 4% at Ndesign.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  At the final design binder content, all volumetric properties — Va, VMA, VFA, Gmb, Gmm — are recalculated
                  and checked against the Superpave criteria table. The design only passes if all properties are within spec
                  simultaneously. This holistic check connects directly to decisions about{" "}
                  <Link
                    href="/blog/asphalt-thickness"
                    className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                  >
                    pavement layer thickness and mix design
                  </Link>{" "}
                  for the design traffic level.
                </p>
              </section>

              {/* ── SECTION 5: Field Core Example ── */}
              <section id="field-core-example" className="scroll-mt-24 mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 pl-4 border-l-4 border-teal-400">
                  Field Core Example
                </h2>
                <p className="text-slate-300 leading-relaxed mb-6">
                  Field cores check compaction quality. The lab gives you the Gmm from the same day&apos;s production. The
                  core gives you the field Gmb. The difference tells you how well the paving crew compacted the mat.
                </p>

                <InfoTable
                  headers={["Measurement", "Value", "Source"]}
                  rows={[
                    ["Dry mass in air (A)", "912.3 g", "Scale"],
                    ["SSD mass in air (B)", "914.0 g", "Scale"],
                    ["Submerged mass (C)", "524.1 g", "Suspension scale"],
                    ["Gmb (field)", "912.3 ÷ (914.0 − 524.1) = 2.340", "AASHTO T 166"],
                    ["Gmm (plant, same day)", "2.491", "AASHTO T 209"],
                    ["Va (field)", "100 × (1 − 2.340 ÷ 2.491) = 6.1%", "Calculated"],
                    ["% Compaction", "2.340 ÷ 2.491 × 100 = 93.9%", "Calculated"],
                  ]}
                />

                <p className="text-slate-300 leading-relaxed mb-4">
                  Most highway specs require field Va between 3% and 8%, and percent compaction at 92% or greater. This core
                  meets both: 6.1% Va (within range) and 93.9% compaction (above 92%).
                </p>
                <p className="text-slate-300 leading-relaxed mb-4">
                  If Va was above 8%, the inspector would call for more roller passes or investigate roller patterns. If Va was
                  below 3%, the crew may have used too many passes or the mix temperature dropped before compaction. See the
                  section on common mistakes below for more on what causes each condition.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  Cores should be taken randomly across the mat — not at the edge, not directly in the wheel path of the
                  roller, and not at cold joints. At least one core per 1,000 linear feet per lane is a typical minimum.
                </p>
              </section>

              {/* ── SECTION 6: VMA and VFA ── */}
              <section id="vma-and-vfa" className="scroll-mt-24 mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 pl-4 border-l-4 border-orange-400">
                  VMA and VFA
                </h2>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Va tells you how much air is in the mix. VMA tells you how much total void space exists between aggregate
                  particles. VFA tells you what fraction of that VMA is filled with binder.
                </p>

                <SectionImage
                  src="/asphalt-air-voids-vma-vfa-volumetric-structure.webp"
                  alt="Asphalt air voids VMA VFA volumetric structure diagram showing relationship between aggregate binder and air in compacted mix"
                  caption="Volumetric structure of a compacted asphalt specimen: total volume = aggregate + binder + air. VMA covers binder + air; VFA is the binder-filled share of VMA."
                />

                <p className="text-slate-300 leading-relaxed mb-4">
                  The formulas are:
                </p>

                <div className="bg-slate-800 border border-slate-600 rounded-xl p-5 mb-6 space-y-3">
                  <div className="font-mono text-teal-300 text-sm">
                    <span className="text-slate-400">VMA (%) = </span>100 − (Gmb × Ps ÷ Gsb)
                  </div>
                  <div className="font-mono text-teal-300 text-sm">
                    <span className="text-slate-400">VFA (%) = </span>100 × (VMA − Va) ÷ VMA
                  </div>
                  <p className="text-slate-400 text-xs mt-2">
                    Ps = percent aggregate by total mass of mix (decimal) &nbsp;|&nbsp;
                    Gsb = bulk specific gravity of aggregate blend
                  </p>
                </div>

                <p className="text-slate-300 leading-relaxed mb-4">
                  For a mix with Gmb = 2.419, Ps = 0.945, Gsb = 2.720:
                </p>
                <div className="bg-slate-800 border border-slate-600 rounded-lg p-4 mb-6 text-slate-200 text-sm">
                  <p>VMA = 100 − (2.419 × 0.945 ÷ 2.720) = 100 − 84.0 = <strong className="text-teal-300">16.0%</strong></p>
                  <p className="mt-2">VFA = 100 × (16.0 − 4.0) ÷ 16.0 = <strong className="text-teal-300">75.0%</strong></p>
                </div>

                <p className="text-slate-300 leading-relaxed mb-4">
                  VMA must be large enough to hold both the design binder film and the target air voids. If VMA is too low,
                  increasing binder content will drive Va down instead of building film thickness — the mix runs out of void
                  space. If VMA is too high, the mix may need an unusually large binder content to reach 4% Va, raising costs
                  and bleeding risk.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  Superpave minimum VMA values run from 13% for large-stone mixes (37.5 mm NMAS) to 15% for 19 mm and 19%
                  for 4.75 mm fine-graded mixes. The{" "}
                  <Link
                    href="/blog/bitumen-grades-explained"
                    className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                  >
                    binder grade selection for the right VFA range
                  </Link>{" "}
                  also affects how the mix performs at the boundary of these targets — a stiffer grade leaves less room for
                  VFA error before the mix becomes brittle.
                </p>
              </section>

              {/* ── SECTION 7: Target Ranges ── */}
              <section id="target-ranges" className="scroll-mt-24 mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 pl-4 border-l-4 border-teal-400">
                  Target Ranges by Mix Type
                </h2>
                <p className="text-slate-300 leading-relaxed mb-6">
                  Va targets differ between lab design and field compaction, and between mix types. These are general
                  Superpave and standard highway department values — always check the project specification.
                </p>

                <InfoTable
                  headers={["Context", "Va Target / Range", "Notes"]}
                  rows={[
                    ["Superpave lab design (Ndesign)", "4.0%", "Design binder content set at this Va"],
                    ["Superpave lab (Ninitial)", "< 11%", "Prevents tender mix at start of compaction"],
                    ["Superpave lab (Nmax)", "> 2%", "Prevents over-compaction under traffic"],
                    ["Field compaction — highway", "3% to 5%", "Most DOT specs; < 3% risks rutting"],
                    ["Field compaction — general", "3% to 8%", "Wider range allowed on lower-volume roads"],
                    ["Surface course (fine-graded)", "3% to 5%", "Tight range for water resistance"],
                    ["Base course (coarse-graded)", "4% to 8%", "More tolerance; drainage layer below"],
                    ["Open-graded friction course", "15% to 22%", "Intentionally high for drainage/noise"],
                  ]}
                />

                <p className="text-slate-300 leading-relaxed mt-4">
                  The Ninitial criterion (Va &lt; 11%) checks whether the mix is too stiff to compact at all. The Nmax
                  criterion (Va &gt; 2%) checks whether traffic will drive Va to zero over time, causing rutting and bleeding.
                  Both checks run at the same design binder content — only the number of gyrations changes.
                </p>
              </section>

              {/* ── SECTION 8: Why Air Voids Matter ── */}
              <section id="why-air-voids-matter" className="scroll-mt-24 mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 pl-4 border-l-4 border-orange-400">
                  Why Air Voids Matter
                </h2>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Va is the single number that connects mix design to field performance. It sits at the intersection of
                  durability, rutting resistance, and water damage resistance.
                </p>

                <SectionImage
                  src="/asphalt-air-voids-pavement-failure-rutting-raveling.webp"
                  alt="Asphalt pavement failure from incorrect air voids — rutting from low Va and raveling from high Va in asphalt surface"
                  caption="Low air voids cause rutting and binder bleeding; high air voids allow moisture infiltration, raveling, and fatigue cracking."
                />

                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-5">
                    <h3 className="text-red-400 font-bold mb-3 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4" />
                      Too Few Air Voids (Va &lt; 3%)
                    </h3>
                    <ul className="space-y-2 text-slate-300 text-sm">
                      {[
                        "Rutting under wheel loads",
                        "Binder bleeding to surface",
                        "Low skid resistance (slick surface)",
                        "Shoving at intersections and bus stops",
                        "Pavement instability in hot weather",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="text-red-400 mt-0.5">✗</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-orange-900/20 border border-orange-500/30 rounded-xl p-5">
                    <h3 className="text-orange-400 font-bold mb-3 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4" />
                      Too Many Air Voids (Va &gt; 8%)
                    </h3>
                    <ul className="space-y-2 text-slate-300 text-sm">
                      {[
                        "Water infiltration and freeze-thaw damage",
                        "Accelerated binder oxidation",
                        "Raveling — aggregate loss from surface",
                        "Fatigue cracking under repeated loading",
                        "Shortened pavement life",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="text-orange-400 mt-0.5">✗</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <p className="text-slate-300 leading-relaxed mb-4">
                  High air voids are a leading driver of the{" "}
                  <Link
                    href="/blog/asphalt-cracking-types"
                    className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                  >
                    asphalt cracking types linked to low density
                  </Link>{" "}
                  — fatigue cracking, longitudinal wheel-path cracks, and block cracking all accelerate when Va is
                  chronically above 7% or 8%.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  Research shows that each 1% increase in air voids above the optimum reduces pavement life by roughly 10%.
                  A mat compacted to 8% Va instead of 4% will last about 60% as long as intended. This sensitivity is why
                  compaction quality is closely monitored on highway projects.
                </p>
              </section>

              {/* ── SECTION 9: Common Mistakes ── */}
              <section id="common-mistakes" className="scroll-mt-24 mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 pl-4 border-l-4 border-teal-400">
                  Common Mistakes When Calculating Air Voids
                </h2>

                <div className="space-y-5">
                  {[
                    {
                      title: "Using Gmb from the wrong test method for the mix type",
                      desc: "Open-graded mixes absorb water during SSD saturation. The standard SSD method (AASHTO T 166) gives a falsely low Gmb for these mixes. Use the CoreLok vacuum procedure or dimensional method (AASHTO T 269) instead. Getting this wrong pushes Va high — the core looks under-compacted when it is not.",
                    },
                    {
                      title: "Mixing up plant Gmm and design Gmm",
                      desc: "The design Gmm is from the mix proportions. Plant Gmm is measured on actual production samples. These should be close but are rarely identical. Field Va calculations must use the production Gmm from the same day — using the design Gmm can hide real changes in the mix.",
                    },
                    {
                      title: "Not conditioning the sample before Gmm testing",
                      desc: "AASHTO T 209 requires the sample to be at room temperature (25°C) before testing. Hot mix straight from the plant gives a lower Gmm because binder is expanded. The error is small but systematic.",
                    },
                    {
                      title: "Sampling bias in field cores",
                      desc: "Taking cores only at easy-access locations or at the paver mat center will produce a biased data set. Corner areas, longitudinal joints, and transition zones are where compaction typically falls off — these spots need their own core locations.",
                    },
                    {
                      title: "Confusing Va with percent compaction",
                      desc: "Percent compaction = (Gmb ÷ Gmm) × 100. Va = 100 × (1 − Gmb ÷ Gmm). They are complementary. 95% compaction is 5% Va. Both come from the same ratio, but specs often state one or the other — do not calculate Va and compare to a compaction target, or vice versa.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="bg-slate-800/60 border border-slate-700 rounded-xl p-5"
                    >
                      <h3 className="text-white font-bold mb-2 flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" />
                        {item.title}
                      </h3>
                      <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <p className="text-slate-300 leading-relaxed mt-6">
                  Avoiding these mistakes early is part of the broader challenge of{" "}
                  <Link
                    href="/blog/asphalt-estimation-mistakes"
                    className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                  >
                    common asphalt mix design and estimation errors
                  </Link>{" "}
                  that drive up project cost and reduce pavement performance.
                </p>
              </section>

              {/* ── SECTION 10: How to Fix ── */}
              <section id="how-to-fix" className="scroll-mt-24 mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 pl-4 border-l-4 border-orange-400">
                  How to Fix Out-of-Range Air Voids
                </h2>

                <h3 className="text-lg font-bold text-white mb-3">In Mix Design (Lab)</h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  If Va is too high at Ndesign, increase binder content. More binder fills more of the void space.
                  Increase in steps of 0.5% by weight of mix. At each step, compact a new set of specimens and
                  recalculate all volumetric properties.
                </p>
                <p className="text-slate-300 leading-relaxed mb-6">
                  If Va is too low at Ndesign, reduce binder content. If reducing binder content pushes VMA too low or VFA
                  out of range, the aggregate gradation may need to change — typically moving coarser to open up VMA.
                </p>

                <h3 className="text-lg font-bold text-white mb-3">In the Field (Compaction)</h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  High field Va (poor compaction) — Add roller passes. Verify mat temperature at the breakdown roller: most
                  dense-graded mixes need compaction above 230°F (110°C). Check roller weight and speed.
                </p>
                <p className="text-slate-300 leading-relaxed mb-6">
                  Low field Va (over-compaction) — Reduce roller passes. Check that the mix temperature has not been elevated
                  — high-temperature mix over-compacts easily and can also binder-drain on the screed.
                </p>

                <div className="bg-teal-900/20 border border-teal-500/30 rounded-xl p-5">
                  <p className="text-teal-300 font-semibold mb-2">Field Rule of Thumb</p>
                  <p className="text-slate-300 text-sm">
                    One additional roller pass typically reduces air voids by about 0.5% to 1.0% on a standard
                    dense-graded mix. This varies with roller weight, tire pressure, mix temperature, and lift
                    thickness. Use it only as a starting estimate — always verify with cores.
                  </p>
                </div>
              </section>

              {/* ── SECTION 11: Quick Reference ── */}
              <section id="quick-reference" className="scroll-mt-24 mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 pl-4 border-l-4 border-teal-400">
                  Quick Reference Table
                </h2>
                <p className="text-slate-300 leading-relaxed mb-6">
                  All the key formulas and standards in one place.
                </p>

                <InfoTable
                  headers={["Property", "Formula", "Standard", "Target"]}
                  rows={[
                    ["Air Voids (Va)", "100 × (1 − Gmb ÷ Gmm)", "Calculated", "4% (lab); 3–8% (field)"],
                    ["% Compaction", "(Gmb ÷ Gmm) × 100", "Calculated", "≥ 92–96% (varies by spec)"],
                    ["Gmb", "A ÷ (B − C)", "AASHTO T 166 / ASTM D2726", "Mix-specific"],
                    ["Gmm", "A ÷ (A + D − E)", "AASHTO T 209 / ASTM D2041", "Mix-specific"],
                    ["VMA", "100 − (Gmb × Ps ÷ Gsb)", "Calculated", "≥ 13–19% (depends on NMAS)"],
                    ["VFA", "100 × (VMA − Va) ÷ VMA", "Calculated", "65–75% (most traffic levels)"],
                  ]}
                />

                <p className="text-slate-300 leading-relaxed mt-4">
                  For a full primer on AASHTO and ASTM test methods for asphalt volumetrics, the{" "}
                  <a
                    href="https://www.asphaltinstitute.org/engineering/mix-design/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors inline-flex items-center gap-1"
                  >
                    Asphalt Institute Mix Design resources
                    <ExternalLink className="w-3 h-3" />
                  </a>{" "}
                  provide the complete MS-2 manual used by most state agencies. The{" "}
                  <a
                    href="https://www.fhwa.dot.gov/pavement/asphalt/mix.cfm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors inline-flex items-center gap-1"
                  >
                    FHWA Asphalt Mix Design page
                    <ExternalLink className="w-3 h-3" />
                  </a>{" "}
                  also publishes free guidance documents on Superpave volumetric design for public use.
                </p>
              </section>

              {/* ── SECTION 12: FAQ ── */}
              <section id="faq" className="scroll-mt-24 mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 pl-4 border-l-4 border-orange-400">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      q: "What is the formula for air voids in asphalt?",
                      a: "Air voids (Va%) = 100 × (1 − Gmb ÷ Gmm). Gmb is the bulk specific gravity of the compacted specimen, measured by AASHTO T 166 or ASTM D2726. Gmm is the maximum theoretical specific gravity of the loose mix, measured by AASHTO T 209 or ASTM D2041.",
                    },
                    {
                      q: "What is an acceptable air void percentage in asphalt?",
                      a: "Lab-compacted specimens target 4.0% air voids at Ndesign gyrations in Superpave design. Field compacted pavement should reach 3% to 8% Va. Most highway specs call for 3% to 5% under traffic. Below 3% causes rutting and bleeding. Above 8% allows water infiltration and accelerated oxidation.",
                    },
                    {
                      q: "How is Gmb measured?",
                      a: "Gmb is measured per AASHTO T 166 (ASTM D2726) using the saturated surface-dry (SSD) method. Weigh the dry specimen in air (A), weigh it SSD in air (B), then weigh it submerged in water (C). Gmb = A ÷ (B − C).",
                    },
                    {
                      q: "How is Gmm measured?",
                      a: "Gmm is measured by the Rice test per AASHTO T 209 (ASTM D2041). Loose mix is placed in a vacuum container, air is evacuated, water is added, and the container is weighed. Gmm = dry mass of mix ÷ (dry mass + mass of water filling voids).",
                    },
                    {
                      q: "What happens if air voids are too low?",
                      a: "If air voids fall below about 3%, traffic loads have no room to push binder. The mix shoves and ruts under wheel loads, and binder bleeds to the surface creating a slick, shiny, low-friction surface. This is a common failure mode in hot climates with heavy traffic.",
                    },
                    {
                      q: "What happens if air voids are too high?",
                      a: "Above about 8%, the interconnected void system lets water and air into the mat. Water freezes, expands, and strips binder from aggregate. Oxygen oxidizes the binder, making it brittle and prone to cracking. High air voids are the leading cause of premature raveling and fatigue cracking.",
                    },
                    {
                      q: "What is VMA in asphalt?",
                      a: "VMA stands for voids in the mineral aggregate. It is the total void space between aggregate particles in the compacted mix, expressed as a percent. VMA = 100 − (Gmb × Ps ÷ Gsb), where Ps is the percent aggregate by mass and Gsb is the bulk specific gravity of the aggregate blend. VMA must be large enough to hold both the design binder film thickness and the target air voids.",
                    },
                    {
                      q: "What is VFA in asphalt and how does it relate to air voids?",
                      a: "VFA stands for voids filled with asphalt. It is the percentage of VMA that is filled with binder: VFA = 100 × (VMA − Va) ÷ VMA. At 4% Va and 15% VMA the VFA is 73.3%. Superpave targets VFA between 65% and 75% for most traffic levels, rising to 65%–78% for lower-volume roads. VFA controls durability and rutting resistance together.",
                    },
                  ].map((item) => (
                    <div key={item.q} className="bg-slate-800/60 border border-slate-700 rounded-xl p-5">
                      <h3 className="text-lg font-bold text-white mb-3">{item.q}</h3>
                      <p className="text-slate-300 leading-relaxed text-sm">{item.a}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── Conclusion ── */}
              <section className="mb-12">
                <div className="bg-gradient-to-r from-slate-800 to-slate-800/60 border border-slate-700 rounded-xl p-6">
                  <h2 className="text-xl font-bold text-white mb-4">Summary</h2>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Air voids in asphalt are calculated from two specific gravity measurements: Gmb (bulk, compacted) and
                    Gmm (maximum, loose). The formula Va = 100 × (1 − Gmb ÷ Gmm) is straightforward, but the accuracy of
                    each input depends entirely on correct sampling, temperature control, and test method selection.
                  </p>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Target 4% in lab design. Accept 3% to 8% in the field. Know what happens below 3% (rutting, bleeding)
                    and above 8% (water damage, raveling). Check VMA and VFA at every trial binder content — Va alone does
                    not tell the whole volumetric story.
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    If you are sizing asphalt quantities for a project alongside mix design work, the{" "}
                    <Link
                      href="/"
                      className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                    >
                      Bitumen Calculator
                    </Link>{" "}
                    at BitumenCalcPro can help you estimate tonnage, coverage, and application rates from your compacted
                    density and thickness inputs.
                  </p>
                </div>
              </section>

              {/* Author Bio */}
              <div className="mt-10">
                <AuthorBio />
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}

