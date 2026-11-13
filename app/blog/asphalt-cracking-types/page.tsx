import AuthorBio from "../../components/AuthorBio";
// app/blog/asphalt-cracking-types/page.tsx
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
  title: "Asphalt Cracking Types and Causes: Identify Every Crack",
  description:
    "Identify every asphalt crack type — alligator, block, transverse, longitudinal, edge, slippage, and reflective — plus their causes and the right repair for each.",
  keywords: [
    "asphalt cracking types",
    "asphalt crack causes",
    "alligator cracking asphalt",
    "block cracking asphalt",
    "transverse cracking pavement",
    "longitudinal cracking asphalt",
    "slippage cracking asphalt",
    "reflective cracking overlay",
    "edge cracking pavement",
    "types of asphalt cracks",
    "asphalt fatigue cracking",
    "pavement distress types",
  ],
  alternates: {
    canonical: "https://bitumencalcpro.com/blog/asphalt-cracking-types",
  },
  openGraph: {
    title:
      "Asphalt Cracking Types and Causes: How to Identify Each Crack | BitumenCalcPro",
    description:
      "Learn how to identify all 7 asphalt crack types — alligator, block, transverse, longitudinal, edge, slippage, and reflective — and what causes each one.",
    url: "https://bitumencalcpro.com/blog/asphalt-cracking-types",
    siteName: "BitumenCalcPro",
    type: "article",
    publishedTime: "2026-11-10T00:00:00.000Z",
    authors: ["BitumenCalcPro"],
    images: [
      {
        url: "/asphalt-cracking-types-and-causes.webp",
        width: 1200,
        height: 675,
        alt: "Asphalt cracking types and causes — alligator, block, transverse and reflective cracking on road surface",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Asphalt Cracking Types and Causes: Identify Every Crack",
    description:
      "All 7 asphalt crack types explained — what each looks like, what causes it, and which repairs actually work.",
    images: ["/asphalt-cracking-types-and-causes.webp"],
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
    "Asphalt Cracking Types and Causes: How to Identify Each Crack",
  description:
    "Identify every asphalt crack type — alligator, block, transverse, longitudinal, edge, slippage, and reflective — plus their causes and the right repair for each.",
  image: "https://bitumencalcpro.com/asphalt-cracking-types-and-causes.webp",
  datePublished: "2026-11-10T00:00:00.000Z",
  dateModified: "2026-11-10T00:00:00.000Z",
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
    "@id": "https://bitumencalcpro.com/blog/asphalt-cracking-types",
  },
  keywords:
    "asphalt cracking types, alligator cracking, block cracking, transverse cracking, longitudinal cracking, slippage cracking, reflective cracking, edge cracking, asphalt crack causes, pavement distress",
  articleSection: "Asphalt & Paving Materials",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What causes cracks in new asphalt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The usual causes are poor compaction, a weak base, the wrong binder grade, badly built joints, missing tack coat, and early overloading. Shrinkage cracks can also appear in the first seasons.",
      },
    },
    {
      "@type": "Question",
      name: "Do all asphalt cracks mean structural failure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Block, thermal, and many longitudinal cracks come from climate and aging binder. Alligator cracking and slippage cracking are structural or bonding failures and need deeper repair.",
      },
    },
    {
      "@type": "Question",
      name: "Can alligator cracking be sealed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sealing is generally ineffective once the alligator pattern has formed. The failed area needs to be removed and rebuilt, and the underlying cause corrected.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between block cracking and alligator cracking?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Block cracking forms large rectangles and is caused by shrinkage and temperature cycles. Alligator cracking forms small pieces, starts in wheel paths, and is caused by repeated traffic loading.",
      },
    },
    {
      "@type": "Question",
      name: "How do cracks turn into potholes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As alligator cracking worsens, the interconnected cracks create small chunks of pavement. Traffic dislodges them, leaving a hole down through the asphalt layer to the base.",
      },
    },
    {
      "@type": "Question",
      name: "Does water cause asphalt cracks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Water is rarely the only cause, but it speeds up almost every type. It softens the base, weakens the subgrade, and expands when it freezes inside cracks.",
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
      name: "Asphalt Cracking Types and Causes",
      item: "https://bitumencalcpro.com/blog/asphalt-cracking-types",
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
      <table className="w-full min-w-[380px] text-sm">
        <thead>
          <tr className="bg-orange-600/30 border-b border-white/10">
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

function CrackTypeHeader({
  num,
  name,
  color,
}: {
  num: number;
  name: string;
  color: "orange" | "teal";
}) {
  return (
    <div className="flex items-center gap-4 mb-5">
      <div
        className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-lg shrink-0 ${
          color === "orange"
            ? "bg-orange-500/20 border border-orange-500/30 text-orange-300"
            : "bg-teal-500/20 border border-teal-500/30 text-teal-300"
        }`}
      >
        {num}
      </div>
      <h3
        className={`text-2xl font-black ${
          color === "orange" ? "text-orange-200" : "text-teal-200"
        }`}
      >
        {name}
      </h3>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────
export default function AsphaltCrackingTypesPage() {
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
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-teal-600/10 pointer-events-none" />
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
            <span className="text-white/90 font-medium">
              Asphalt Cracking Types and Causes
            </span>
          </nav>

          {/* Category badge */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="inline-flex items-center gap-1.5 bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
              <BookOpen size={12} />
              Asphalt &amp; Paving Materials
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-6 max-w-4xl">
            Asphalt Cracking Types and Causes: How to Identify Each Crack
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-white/50 text-sm mb-10">
            <span className="flex items-center gap-1.5">
              <Calendar size={13} />
              <time dateTime="2026-11-10">November 10, 2026</time>
            </span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="flex items-center gap-1.5">
              <Clock size={13} />
              15 min read
            </span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="text-white/50">By BitumenCalcPro</span>
          </div>
        </div>
      </div>

      {/* ── FEATURED IMAGE ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionImage
          src="/asphalt-cracking-types-and-causes.webp"
          alt="Asphalt cracking types and causes — alligator, block, transverse, longitudinal, edge, slippage, and reflective cracks on road pavement"
          caption="Every crack pattern is a diagnosis — the shape, location, and spacing tell you whether the problem is structural, climatic, or a construction defect"
          priority
        />
      </div>

      {/* ── ARTICLE BODY ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24">
        <div className="flex flex-col xl:flex-row gap-12 items-start">
          <article className="flex-1 min-w-0">

            {/* Quick Answer */}
            <div className="mb-10 bg-gradient-to-br from-orange-500/15 to-orange-600/10 border border-orange-400/25 rounded-2xl p-6 md:p-8">
              <h2 className="text-lg font-black text-orange-300 mb-3 flex items-center gap-2">
                <CheckCircle2 size={18} />
                Quick Answer
              </h2>
              <p className="text-white/85 leading-relaxed text-base">
                Asphalt cracking types and causes fall into three groups.
                Load-related cracks — mainly alligator and wheel-path
                longitudinal cracks — come from repeated traffic on a weak
                structure. Climate-related cracks, including block, transverse,
                and non-wheel-path longitudinal cracks, come from temperature
                swings and aging binder. Construction and support problems cause
                edge, joint, slippage, and reflective cracks. The crack pattern
                tells you which group you are dealing with.
              </p>
            </div>

            {/* Table of Contents */}
            <div className="mb-10 bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="text-white font-black text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
                <BookOpen size={14} className="text-orange-400" />
                Table of Contents
              </div>
              <nav className="space-y-1">
                {[
                  { id: "why-asphalt-cracks", label: "Why Asphalt Cracks in the First Place" },
                  { id: "crack-types-glance", label: "Asphalt Crack Types at a Glance" },
                  { id: "alligator-cracking", label: "1. Alligator (Fatigue) Cracking" },
                  { id: "block-cracking", label: "2. Block Cracking" },
                  { id: "transverse-cracking", label: "3. Transverse (Thermal) Cracking" },
                  { id: "longitudinal-cracking", label: "4. Longitudinal Cracking" },
                  { id: "edge-cracking", label: "5. Edge Cracking" },
                  { id: "slippage-cracking", label: "6. Slippage Cracking" },
                  { id: "reflective-cracking", label: "7. Reflective Cracking" },
                  { id: "how-to-identify", label: "How to Tell Which Crack You Have" },
                  { id: "surface-vs-structural", label: "Surface Cracks vs Structural Cracks" },
                  { id: "prevention", label: "How to Prevent Asphalt Cracking" },
                  { id: "repair-mistakes", label: "Common Repair Mistakes" },
                  { id: "faq", label: "FAQ" },
                ].map(({ id, label }) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    className="block text-white/55 hover:text-orange-400 text-xs leading-relaxed py-1 px-2 rounded-lg hover:bg-white/5 transition-all"
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Intro */}
            <section className="mb-12">
              <p className="text-white/85 leading-relaxed mb-4 text-base">
                Every crack in an asphalt surface has a pattern, and the
                pattern points to a cause. Small interlocking cracks in the
                wheel path mean something different from long, evenly spaced
                cracks across a lane. This guide covers the asphalt cracking
                types and causes you will meet on roads, parking lots, and
                driveways — how to tell them apart in the field, which ones can
                be sealed, and which ones need a structural repair.
              </p>
              <p className="text-white/85 leading-relaxed mb-4 text-base">
                It is written for contractors, estimators, site engineers, and
                property owners. Once you identify the crack type, our guide on{" "}
                <Link
                  href="/blog/repair-asphalt-driveway"
                  className="text-orange-400 hover:text-teal-400 underline underline-offset-2 transition-colors font-medium"
                >
                  repairing asphalt driveway cracks and potholes
                </Link>{" "}
                covers the step-by-step fix for each damage category, and our{" "}
                <Link
                  href="/"
                  className="text-teal-400 hover:text-orange-400 underline underline-offset-2 transition-colors font-medium"
                >
                  free Bitumen Calculator
                </Link>{" "}
                helps estimate material quantities before ordering.
              </p>
            </section>

            {/* Why Asphalt Cracks */}
            <section id="why-asphalt-cracks" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                Why Asphalt Cracks in the First Place
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Asphalt is aggregate held together by a bitumen binder. A new
                mix flexes under load and recovers. As the binder ages, it
                oxidizes and stiffens, and the surface loses that flexibility.
                A crack forms when stress exceeds what the aged material can
                handle.
              </p>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                That stress comes from three places. First, traffic loading —
                repeated wheel passes flex the pavement, and heavy trucks cause
                the most damage. Second, climate — cold weather shrinks asphalt,
                and daily temperature cycles repeat the strain. Third,
                construction and support problems — poor compaction, weak
                bonding between layers, badly built joints, weak shoulders, and
                an unstable base or subgrade all create weak points. The{" "}
                <Link
                  href="/blog/bitumen-grades-explained"
                  className="text-teal-400 hover:text-orange-400 underline underline-offset-2 transition-colors font-medium"
                >
                  bitumen binder grade chosen at mix design
                </Link>{" "}
                has a direct effect on how well the pavement resists both
                thermal cracking and fatigue under traffic.
              </p>
              <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/25 rounded-2xl p-5 mb-5">
                <p className="text-white/85 text-sm leading-relaxed">
                  <strong className="text-orange-300">Water speeds up all three.</strong>{" "}
                  Once it gets into a crack, it softens the base, weakens the
                  subgrade, and expands when it freezes. A small crack left open
                  through a wet season usually grows significantly.
                </p>
              </div>
            </section>

            {/* Crack Types at a Glance */}
            <section id="crack-types-glance" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Asphalt Crack Types at a Glance
              </h2>
              <InfoTable
                headers={["Crack type", "What it looks like", "Main cause", "Load-related?"]}
                rows={[
                  ["Alligator (fatigue)", "Interconnected cracks forming small pieces, usually in wheel paths", "Repeated traffic on a weak structure", "Yes"],
                  ["Block", "Large rectangles across a wide area", "Binder shrinkage and daily temperature cycles", "No"],
                  ["Transverse (thermal)", "Cracks across the lane, often evenly spaced", "Low temperatures, hard or aged binder", "No, though traffic worsens it"],
                  ["Longitudinal", "Cracks parallel to the centerline", "Fatigue in wheel path; joints, shrinkage or base movement elsewhere", "Depends on location"],
                  ["Edge", "Cracks within 1 to 2 ft of the pavement edge", "Weak shoulder support, poor drainage", "Partly"],
                  ["Slippage", "Crescent or half-moon cracks", "Poor bond between layers, weak surface mix", "Yes (braking and turning forces)"],
                  ["Reflective", "Cracks in an overlay matching the old surface below", "Movement of the old pavement or concrete joints", "No, though traffic speeds damage"],
                ]}
              />

              {/* Image 2: After crack-types table */}
              <SectionImage
                src="/alligator-cracking-vs-block-cracking.webp"
                alt="Alligator cracking vs block cracking comparison — small interconnected wheel-path pieces versus large rectangular panels on asphalt pavement"
                caption="Block size and location separate alligator from block cracking — alligator starts in wheel paths with small pieces; block cracking covers wide areas with large rectangles"
              />
            </section>

            {/* The 7 Crack Types */}
            <section className="mb-4">
              <h2 className="text-3xl font-black text-white mb-8 border-l-4 border-orange-400 pl-4">
                The 7 Main Asphalt Crack Types and Their Causes
              </h2>
            </section>

            {/* 1. Alligator */}
            <section id="alligator-cracking" className="mb-12 scroll-mt-24">
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:p-8">
                <CrackTypeHeader num={1} name="Alligator (Fatigue) Cracking" color="orange" />
                <p className="text-white/80 leading-relaxed mb-5 text-base">
                  Alligator cracking is a network of interconnected cracks that
                  form small, many-sided pieces — usually under 1 ft (30 cm)
                  across. It starts in the wheel paths and can spread across the
                  whole lane. The pattern resembles alligator or crocodile skin,
                  which is where the name comes from.
                </p>
                <h4 className="text-white font-bold mb-3">Causes:</h4>
                <ul className="space-y-2 mb-5">
                  {[
                    "Repeated traffic loads above what the pavement was designed to carry",
                    "A pavement layer that is too thin, or a structural design that was inadequate from the start",
                    "A weak or wet base and subgrade",
                    "Poor compaction during construction — including when paving crews push on in rain",
                    "Heavier traffic than planned, such as a new bus route on an older street",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/75 text-sm leading-relaxed">
                      <AlertCircle size={15} className="text-orange-400 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-white/80 leading-relaxed mb-4 text-base">
                  Cracks can start at the bottom of the asphalt layer and
                  travel up. Others start at the surface where tire stress is
                  high and the binder has aged — engineers call that top-down
                  cracking. The right{" "}
                  <Link
                    href="/blog/asphalt-thickness"
                    className="text-teal-400 hover:text-orange-400 underline underline-offset-2 transition-colors font-medium"
                  >
                    asphalt pavement thickness for the actual traffic load
                  </Link>{" "}
                  is the primary defense against fatigue cracking.
                </p>
                <div className="bg-red-500/10 border border-red-500/25 rounded-xl p-4">
                  <p className="text-white/80 text-sm leading-relaxed">
                    <strong className="text-red-300">Structural failure.</strong>{" "}
                    Crack sealing stops working once the alligator pattern forms.
                    Left alone, loose pieces break out and become potholes. The
                    usual repair removes the failed area and rebuilds it after
                    fixing the underlying cause — often drainage or a weak base.
                  </p>
                </div>
              </div>
            </section>

            {/* 2. Block */}
            <section id="block-cracking" className="mb-12 scroll-mt-24">
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:p-8">
                <CrackTypeHeader num={2} name="Block Cracking" color="teal" />
                <p className="text-white/80 leading-relaxed mb-5 text-base">
                  Block cracking divides the surface into large rectangles,
                  roughly 1 to 100 sq ft (0.1 to 9 m²). It usually covers a
                  wide area and often shows up where traffic is light — such as
                  parking lots and shoulders.
                </p>
                <h4 className="text-white font-bold mb-3">Causes:</h4>
                <ul className="space-y-2 mb-5">
                  {[
                    "Shrinkage of the asphalt and daily temperature cycling",
                    "Binder that has aged and hardened so it can no longer expand and contract",
                    "A binder grade poorly matched to the local climate in the mix design",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/75 text-sm leading-relaxed">
                      <AlertCircle size={15} className="text-teal-400 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-white/80 leading-relaxed text-base">
                  Block cracking is not load-related, which separates it from
                  alligator cracking. High in-place voids accelerate binder oxidation and cracking, making it vital to <Link href="/blog/asphalt-air-voids" className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors">calculate air voids in asphalt</Link> during post-compaction quality checks. The two can look similar in early stages,
                  so check the block size and whether the cracking follows the
                  wheel paths. Light cases respond to crack sealing or a surface
                  treatment. Widespread, severe cases usually need milling and
                  an overlay.
                </p>
              </div>
            </section>

            {/* Image 3: Before transverse section */}
            <SectionImage
              src="/transverse-longitudinal-asphalt-cracks.webp"
              alt="Transverse and longitudinal asphalt cracks — thermal cracks across lane width and fatigue cracks parallel to centerline on road surface"
              caption="Location is the first diagnostic clue — transverse cracks run across the lane while longitudinal cracks run with the paving direction"
            />

            {/* 3. Transverse */}
            <section id="transverse-cracking" className="mb-12 scroll-mt-24">
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:p-8">
                <CrackTypeHeader num={3} name="Transverse (Thermal) Cracking" color="orange" />
                <p className="text-white/80 leading-relaxed mb-5 text-base">
                  Transverse cracks run across the pavement, roughly
                  perpendicular to the centerline. They often appear at regular
                  intervals along the road.
                </p>
                <h4 className="text-white font-bold mb-3">Causes:</h4>
                <ul className="space-y-2 mb-5">
                  {[
                    "Low-temperature thermal cracking — the surface shrinks in cold weather",
                    "Binder that is too hard for the climate, or binder that has aged and oxidized",
                    "A shrinking or cracked base below the surface",
                    "A crack in the old layer reflecting up through an overlay",
                    "Poor transverse joint construction, often from incorrect paver operation",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/75 text-sm leading-relaxed">
                      <AlertCircle size={15} className="text-orange-400 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-white/80 leading-relaxed text-base">
                  These cracks are not directly caused by traffic, although
                  heavy loads make them worse. A transverse crack can also be
                  an early sign of alligator cracking to come, so treat it
                  before water gets in.
                </p>
              </div>
            </section>

            {/* 4. Longitudinal */}
            <section id="longitudinal-cracking" className="mb-12 scroll-mt-24">
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:p-8">
                <CrackTypeHeader num={4} name="Longitudinal Cracking" color="teal" />
                <p className="text-white/80 leading-relaxed mb-5 text-base">
                  Longitudinal cracks run parallel to the centerline or the
                  paving direction.{" "}
                  <strong className="text-white">
                    Location tells you the cause.
                  </strong>
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                  <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-4">
                    <p className="text-orange-300 font-bold text-sm mb-2">In the wheel path</p>
                    <p className="text-white/75 text-sm leading-relaxed">
                      Usually load-related fatigue cracking in its early stage.
                      Often leads to alligator cracking if left untreated.
                    </p>
                  </div>
                  <div className="bg-teal-500/10 border border-teal-500/20 rounded-xl p-4">
                    <p className="text-teal-300 font-bold text-sm mb-2">Outside the wheel path</p>
                    <p className="text-white/75 text-sm leading-relaxed">
                      Usually a poorly constructed lane joint, shrinkage,
                      cracks reflecting upward, embankment settlement, or
                      expansive subgrade near the edge.
                    </p>
                  </div>
                </div>
                <p className="text-white/80 leading-relaxed text-base">
                  Paving joints should sit outside the wheel paths wherever
                  possible. Wheels running directly on a joint speed up its
                  failure.
                </p>
              </div>
            </section>

            {/* 5. Edge */}
            <section id="edge-cracking" className="mb-12 scroll-mt-24">
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:p-8">
                <CrackTypeHeader num={5} name="Edge Cracking" color="orange" />

                {/* Image 4: Under edge cracking */}
                <SectionImage
                  src="/asphalt-edge-cracking-weak-shoulder.webp"
                  alt="Asphalt edge cracking caused by weak shoulder support — crescent cracks within 1 to 2 feet of pavement edge with shoulder settlement"
                  caption="Edge cracks form because the pavement edge lacks lateral support — fix the shoulder and drainage before sealing or the cracks return"
                />

                <p className="text-white/80 leading-relaxed mb-5 text-base">
                  Edge cracks run along the pavement edge, usually within 1 to
                  2 ft (30 to 60 cm) of it. They often begin as crescent shapes
                  and can branch toward the shoulder. With time they can
                  resemble alligator cracking.
                </p>
                <h4 className="text-white font-bold mb-3">Causes:</h4>
                <ul className="space-y-2 mb-5">
                  {[
                    "Lack of support from a weak or low shoulder",
                    "Poor drainage that softens the base at the edge",
                    "Alternate wetting and drying under the shoulder surface",
                    "Trees, shrubs, and heavy vegetation close to the edge",
                    "Heavy vehicles driving on the edge of the lane",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/75 text-sm leading-relaxed">
                      <AlertCircle size={15} className="text-orange-400 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="bg-teal-500/10 border border-teal-500/20 rounded-xl p-4">
                  <p className="text-white/80 text-sm leading-relaxed">
                    <strong className="text-teal-300">Fix the support first.</strong>{" "}
                    Remove nearby vegetation, correct the drainage, and rebuild
                    the shoulder with good material. Then seal the cracks.
                    Sealing alone will not stop the base from settling.
                  </p>
                </div>
              </div>
            </section>

            {/* 6. Slippage */}
            <section id="slippage-cracking" className="mb-12 scroll-mt-24">
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:p-8">
                <CrackTypeHeader num={6} name="Slippage Cracking" color="teal" />

                {/* Image 5: Under slippage cracking */}
                <SectionImage
                  src="/asphalt-slippage-cracking-half-moon.webp"
                  alt="Asphalt slippage cracking — half-moon crescent shaped cracks at intersection from missing tack coat and poor interlayer bond"
                  caption="Crescent-shaped slippage cracks appear where shear forces are highest — intersections, curves, and bus stops are the first places to check"
                />

                <p className="text-white/80 leading-relaxed mb-5 text-base">
                  Slippage cracks are crescent or half-moon shaped. They appear
                  where vehicles brake, turn, or accelerate — such as
                  intersections and curves — because those spots carry the
                  highest shear forces.
                </p>
                <h4 className="text-white font-bold mb-3">Causes:</h4>
                <ul className="space-y-2 mb-5">
                  {[
                    "Weak bond between the surface layer and the layer below",
                    "Missing or poorly applied tack coat",
                    "Dust, dirt, oil, or water trapped between layers during paving",
                    "A low-strength surface mix",
                    "Excessive deflection of the whole pavement structure",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/75 text-sm leading-relaxed">
                      <AlertCircle size={15} className="text-teal-400 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-white/80 leading-relaxed text-base">
                  The surface course slides and shoves under traffic, then
                  tears. Slippage cracking is a direct consequence of a missing
                  or contaminated tack coat — our guide on{" "}
                  <Link
                    href="/blog/prime-coat-vs-tack-coat"
                    className="text-teal-400 hover:text-orange-400 underline underline-offset-2 transition-colors font-medium"
                  >
                    tack coat application and common bond failures
                  </Link>{" "}
                  covers the rates, cure times, and mistakes that lead to
                  exactly this distress type. Water trapped under the mat from rain during paving is another trigger — the guide on{" "}<Link href="/blog/pave-asphalt-in-rain" className="text-teal-400 hover:text-orange-400 underline underline-offset-2 transition-colors font-medium">paving in wet weather conditions</Link>{" "}explains why a wet base causes slippage and bond failure. If the cause is deflection or
                  fatigue below, a deeper repair is needed.
                </p>
              </div>
            </section>

            {/* 7. Reflective */}
            <section id="reflective-cracking" className="mb-12 scroll-mt-24">
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:p-8">
                <CrackTypeHeader num={7} name="Reflective Cracking" color="orange" />

                {/* Image 6: Under reflective cracking */}
                <SectionImage
                  src="/reflective-cracking-asphalt-overlay.webp"
                  alt="Reflective cracking in asphalt overlay — straight cracks copying joint pattern of old concrete slab beneath new bituminous surface"
                  caption="Reflective cracks mirror the layer below — straight lines matching concrete joint spacing are a classic sign that the base problem was not addressed before overlaying"
                />

                <p className="text-white/80 leading-relaxed mb-5 text-base">
                  Reflective cracks form in an overlay and copy the crack or
                  joint pattern of the pavement underneath. You often see
                  straight lines that match the joint spacing of an old concrete
                  slab below.
                </p>
                <h4 className="text-white font-bold mb-3">Causes:</h4>
                <ul className="space-y-2 mb-5">
                  {[
                    "Movement of the old pavement caused by temperature and moisture changes",
                    "Movement of concrete slabs beneath an asphalt overlay",
                    "An overlay placed over cracks that were never repaired",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/75 text-sm leading-relaxed">
                      <AlertCircle size={15} className="text-orange-400 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-white/80 leading-relaxed text-base">
                  Traffic is not the starting cause, although it speeds up
                  damage once cracks open. Repair existing cracks before
                  overlaying. Interlayer systems — such as geosynthetic grids
                  or fabrics — can slow reflection. Narrow cracks can be sealed.
                  Wide, numerous cracks usually mean removing and replacing the
                  overlay after preparing the base layer.
                </p>
              </div>
            </section>

            {/* How to Identify */}
            <section id="how-to-identify" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                How to Tell Which Crack You Have
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Use this checklist on site. It takes a few minutes and usually
                narrows the cause to one or two options.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  { step: "01", title: "Find the location", desc: "Wheel path, lane center, edge, or across the lane? Location is the fastest first filter." },
                  { step: "02", title: "Read the pattern", desc: "Parallel lines, a grid of small pieces, large rectangles, or crescents? Each pattern points to a different cause." },
                  { step: "03", title: "Check spacing and extent", desc: "Evenly spaced cracks suggest thermal or reflective causes. A local patch suggests a local problem." },
                  { step: "04", title: "Look at traffic movement", desc: "Braking and turning zones point to slippage cracking." },
                  { step: "05", title: "Inspect drainage and surroundings", desc: "Look for standing water, low shoulders, and roots near the edge." },
                  { step: "06", title: "Check the history", desc: "Note any recent overlay, widening, utility cut, or old patch." },
                  { step: "07", title: "Measure width and watch for movement", desc: "Check whether pieces rock under traffic or fine material is pumping out of the cracks." },
                ].map(({ step, title, desc }) => (
                  <div
                    key={step}
                    className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-4"
                  >
                    <span className="text-orange-400 font-black text-sm shrink-0 w-7">{step}</span>
                    <div>
                      <p className="text-white font-bold text-sm mb-0.5">{title}</p>
                      <p className="text-white/65 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Surface vs Structural */}
            <section id="surface-vs-structural" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                Surface Cracks vs Structural Cracks
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                The most useful question is whether the crack comes from the
                surface layer or the structure beneath it.
              </p>
              <InfoTable
                headers={["Condition", "Likely type", "Typical response"]}
                rows={[
                  ["Narrow cracks (under ~1/2 in or 12 mm), few in number", "Thermal, block, joint", "Crack seal or fill"],
                  ["Wider, more frequent cracks, with edges starting to break", "Block, transverse, reflective", "Crack seal with surface treatment, or mill and overlay depending on extent"],
                  ["Interconnected small pieces, loose material", "Alligator", "Remove and rebuild the failed area; fix the base and drainage"],
                  ["Crescent cracks with shoved surface", "Slippage", "Remove the slipped area, clean, apply tack coat, repave"],
                  ["Bowl-shaped holes through the surface", "Pothole (end stage of alligator)", "Patch, then address the cause"],
                ]}
              />
              <p className="text-white/80 leading-relaxed text-base">
                Once you know the repair area, calculate the asphalt tonnage
                and tack coat quantity from area, thickness, and compacted
                density. Our guide on <Link href="/blog/asphalt-yield" className="text-teal-400 hover:text-orange-300 underline underline-offset-2 transition-colors font-medium">how to calculate asphalt yield per square yard</Link> shows the exact formulas and field verification steps. Our{" "}
                <Link
                  href="/tack-coat-calculator"
                  className="text-teal-400 hover:text-orange-400 underline underline-offset-2 transition-colors font-medium"
                >
                  free tack coat calculator
                </Link>{" "}
                handles the tack coat arithmetic, and the{" "}
                <Link
                  href="/blog/asphalt-estimation-mistakes"
                  className="text-teal-400 hover:text-orange-400 underline underline-offset-2 transition-colors font-medium"
                >
                  common asphalt estimation mistakes guide
                </Link>{" "}
                covers the quantity errors that most often cause short orders
                and cost overruns on repair jobs.
              </p>
            </section>

            {/* Prevention */}
            <section id="prevention" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                How to Prevent Asphalt Cracking
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Most cracking is predictable. These steps reduce it
                significantly:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                {[
                  "Design the pavement thickness for the actual traffic, including heavy trucks",
                  "Compact every layer to specification — poor compaction leaves air voids that speed aging",
                  "Choose a binder grade suited to the local temperature range",
                  "Apply tack coat evenly between layers, and keep surfaces clean and dry before paving",
                  "Build joints properly and keep them out of the wheel paths",
                  "Keep drainage working — shoulders should shed water away from the pavement",
                  "Cut back vegetation near the pavement edge",
                  "Seal narrow cracks early, before water reaches the base",
                  "Repair cracks before placing an overlay",
                  "Inspect on a regular schedule so small problems get fixed while they are cheap",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white/5 border border-white/8 rounded-xl p-3.5">
                    <CheckCircle2 size={15} className="text-teal-400 mt-0.5 shrink-0" />
                    <span className="text-white/75 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-white/80 leading-relaxed text-base">
                Using{" "}
                <Link
                  href="/blog/cold-mix-bitumen"
                  className="text-teal-400 hover:text-orange-400 underline underline-offset-2 transition-colors font-medium"
                >
                  cold mix bitumen for early crack filling and pothole repair
                </Link>{" "}
                keeps water out of the base between maintenance cycles, buying
                time before a full structural repair is needed.
              </p>
            </section>

            {/* Repair Mistakes */}
            <section id="repair-mistakes" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                Common Repair Mistakes
              </h2>
              <div className="space-y-3 mb-6">
                {[
                  { mistake: "Sealing alligator cracks", why: "Sealant does not restore structure. The failed area needs removal and rebuilding." },
                  { mistake: "Overlaying without repairing", why: "Cracks and joints reflect through the new layer, often within one or two seasons." },
                  { mistake: "Skipping tack coat", why: "Missing bond is a direct cause of slippage cracking — one of the most expensive failure modes to fix." },
                  { mistake: "Ignoring drainage", why: "A new patch over a wet base fails again at the same location." },
                  { mistake: "Waiting too long", why: "Cracks let in water, and water turns cheap sealing jobs into expensive rebuilds." },
                ].map(({ mistake, why }, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 bg-red-500/5 border border-red-500/20 rounded-xl p-4"
                  >
                    <span className="text-red-400 font-black text-sm shrink-0 mt-0.5">✕</span>
                    <div>
                      <p className="text-red-200 font-bold text-sm mb-0.5">{mistake}</p>
                      <p className="text-white/65 text-sm leading-relaxed">{why}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-teal-500/15 via-blue-600/10 to-purple-600/10 border border-white/15 rounded-2xl p-6 md:p-8">
                <h3 className="text-lg font-black text-white mb-3">Conclusion</h3>
                <p className="text-white/85 leading-relaxed mb-4 text-base">
                  The crack tells you where to look. Pattern and location
                  separate load-related cracks from climate-related ones and
                  from those caused by weak bonding or poor support. Seal
                  narrow cracks early, rebuild failed areas properly, and fix
                  drainage and base problems before laying new asphalt.
                </p>
                <p className="text-white/85 leading-relaxed text-base">
                  Knowing the asphalt cracking types and causes makes the
                  repair choice faster and keeps the same crack from coming
                  back. For a full walkthrough of DIY and professional repair
                  methods by crack type, see our{" "}
                  <Link
                    href="/blog/repair-asphalt-driveway"
                    className="text-teal-400 hover:text-orange-400 font-semibold underline underline-offset-2 transition-colors"
                  >
                    step-by-step asphalt repair guide
                  </Link>
                  .{" "}
                  <a
                    href="https://www.fhwa.dot.gov/pavement/pub_details.cfm?id=36"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                  >
                    FHWA&apos;s Pavement Distress Identification Manual
                    <ExternalLink size={12} className="inline ml-0.5 mb-0.5" />
                  </a>{" "}
                  is the definitive reference for field identification of
                  pavement distress across all crack types.
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
                    q: "What causes cracks in new asphalt?",
                    a: "The usual causes are poor compaction, a weak base, the wrong binder grade, badly built joints, missing tack coat, and early overloading. Shrinkage cracks can also appear in the first seasons.",
                  },
                  {
                    q: "Do all asphalt cracks mean structural failure?",
                    a: "No. Block, thermal, and many longitudinal cracks come from climate and aging binder. Alligator cracking and slippage cracking are structural or bonding failures and need deeper repair.",
                  },
                  {
                    q: "Can alligator cracking be sealed?",
                    a: "Sealing is generally ineffective once the alligator pattern has formed. The failed area needs to be removed and rebuilt, and the underlying cause corrected.",
                  },
                  {
                    q: "What is the difference between block cracking and alligator cracking?",
                    a: "Block cracking forms large rectangles and is caused by shrinkage and temperature cycles. Alligator cracking forms small pieces, starts in wheel paths, and is caused by repeated traffic loading.",
                  },
                  {
                    q: "How do cracks turn into potholes?",
                    a: "As alligator cracking worsens, the interconnected cracks create small chunks of pavement. Traffic dislodges them, leaving a hole down through the asphalt layer to the base.",
                  },
                  {
                    q: "Does water cause asphalt cracks?",
                    a: "Water is rarely the only cause, but it speeds up almost every type. It softens the base, weakens the subgrade, and expands when it freezes inside cracks.",
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

