// app/blog/what-is-bitumen/page.tsx
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

export const metadata: Metadata = {
  title: "What Is Bitumen? Uses, Properties, Types & Comparison",
  description:
    "Discover everything about bitumen, including its meaning, uses, properties, grades, cold mix, modified bitumen, and asphalt vs tar differences.",
  keywords: [
    "what is bitumen",
    "bitumen meaning",
    "bitumen uses",
    "bitumen properties",
    "bitumen vs asphalt",
    "bitumen vs tar",
    "types of bitumen",
    "modified bitumen",
    "cold mix bitumen",
    "bitumen grades",
  ],
  alternates: { canonical: "https://bitumencalcpro.com/blog/what-is-bitumen" },
  openGraph: {
    title: "What Is Bitumen? Uses, Properties, Types & Comparison | BitumenCalcPro",
    description:
      "Discover everything about bitumen, including its meaning, uses, properties, grades, cold mix, modified bitumen, and asphalt vs tar differences.",
    url: "https://bitumencalcpro.com/blog/what-is-bitumen",
    siteName: "BitumenCalcPro",
    type: "article",
    publishedTime: "2026-08-01T00:00:00.000Z",
    authors: ["BitumenCalcPro"],
    images: [
      {
        url: "/what-is-bitumen.webp",
        width: 1200,
        height: 630,
        alt: "What is bitumen — road paving binder material",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Is Bitumen? Uses, Properties, Types & Comparison",
    description:
      "Discover everything about bitumen — its meaning, uses, properties, grades, and how it differs from asphalt and tar.",
    images: ["/what-is-bitumen.webp"],
  },
  robots: {
    "max-image-preview": "large",
  },
};

// ── Structured Data ──────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What Is Bitumen? Meaning, Uses, Properties & How It Compares to Asphalt and Tar",
  description:
    "Discover everything about bitumen, including its meaning, uses, properties, grades, cold mix, modified bitumen, and asphalt vs tar differences.",
  image: "https://bitumencalcpro.com/what-is-bitumen.webp",
  datePublished: "2026-08-01T00:00:00.000Z",
  dateModified: "2026-08-01T00:00:00.000Z",
  author: { "@type": "Organization", name: "BitumenCalcPro", url: "https://bitumencalcpro.com" },
  publisher: {
    "@type": "Organization",
    name: "BitumenCalcPro",
    url: "https://bitumencalcpro.com",
    logo: { "@type": "ImageObject", url: "https://bitumencalcpro.com/favicon.ico" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://bitumencalcpro.com/blog/what-is-bitumen" },
  keywords:
    "bitumen, what is bitumen, bitumen uses, bitumen properties, bitumen vs asphalt, asphalt binder, types of bitumen",
  articleSection: "Bitumen Fundamentals",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is bitumen a liquid?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not at normal temperatures. Bitumen is semi-solid until heated to around 150–160°C, at which point it becomes a workable liquid. As it cools, it hardens again.",
      },
    },
    {
      "@type": "Question",
      name: "What is bitumen made of?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mostly hydrocarbons — specifically asphaltenes, resins, and oils — along with trace amounts of sulfur, nitrogen, and metals. It comes from refining crude oil or occurs naturally in deposits like oil sands.",
      },
    },
    {
      "@type": "Question",
      name: "Is asphalt the same as blacktop?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Essentially yes. Blacktop is a common term, especially in North America, for the finished asphalt pavement surface.",
      },
    },
    {
      "@type": "Question",
      name: "What does bituminous mean?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bituminous describes anything containing or related to bitumen. Bituminous coating or membrane refers to bitumen-based waterproofing products.",
      },
    },
    {
      "@type": "Question",
      name: "What is bitumen used for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mainly road construction and driveways, but also roofing membranes, waterproofing, pipe coatings, and industrial floor sealants.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between bitumen and tar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bitumen comes from crude oil; tar traditionally comes from coal or wood. Tar has largely been phased out in favor of bitumen due to environmental concerns and better weather resistance.",
      },
    },
    {
      "@type": "Question",
      name: "What is cold mix bitumen used for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pothole repairs, patching, and temporary road maintenance in locations where a hot mix plant isn't available.",
      },
    },
    {
      "@type": "Question",
      name: "What is modified bitumen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard bitumen blended with polymers or rubber to improve elasticity, heat resistance, and durability in demanding climates and high-traffic areas.",
      },
    },
    {
      "@type": "Question",
      name: "Is bitumen recyclable?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Old bitumen-bound pavement is commonly milled and recycled into new asphalt mixes.",
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
      name: "What Is Bitumen?",
      item: "https://bitumencalcpro.com/blog/what-is-bitumen",
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

function QuickFact({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="border-l-4 border-orange-400 pl-5 my-5 not-prose">
      <p className="font-bold text-white mb-1">{question}</p>
      <p className="text-white/70 text-sm leading-relaxed">{answer}</p>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────
export default function WhatIsBitumenPage() {
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
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-orange-600/10 pointer-events-none" />
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full bg-teal-500/10 blur-[100px] pointer-events-none" />

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
            <span className="text-white/90 font-medium">What Is Bitumen?</span>
          </nav>

          {/* Category badge */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="inline-flex items-center gap-1.5 bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
              <BookOpen size={12} />
              Bitumen Fundamentals
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-6 max-w-4xl">
            What Is Bitumen? Meaning, Uses, Properties &amp; How It Compares to Asphalt and Tar
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-white/50 text-sm mb-10">
            <span className="flex items-center gap-1.5">
              <Calendar size={13} />
              <time dateTime="2026-08-01">August 1, 2026</time>
            </span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="flex items-center gap-1.5">
              <Clock size={13} />
              18 min read
            </span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="text-white/50">By BitumenCalcPro</span>
          </div>
        </div>
      </div>

      {/* ── HERO IMAGE ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionImage
          src="/what-is-bitumen.webp"
          alt="What is bitumen — thick black petroleum-based road paving binder material"
          caption="Bitumen: the petroleum-derived binder that holds asphalt together"
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
                Bitumen is a thick, black, petroleum-based material that acts as the binding agent in asphalt.
                It&apos;s made through crude oil refining or found naturally in oil sands and asphalt lakes.
                Bitumen turns liquid when heated and hardens as it cools, which is why it&apos;s used to bind
                stone and gravel together for roads, roofing, and waterproofing.
              </p>
            </div>

            {/* Glance Table */}
            <h2 className="text-2xl font-black text-white mb-4">Bitumen at a Glance</h2>
            <InfoTable
              headers={["Feature", "Details"]}
              rows={[
                ["Material", "Petroleum-based binder"],
                ["Color", "Black"],
                ["State", "Semi-solid"],
                ["Main Use", "Asphalt binder"],
                ["Waterproof", "Yes"],
                ["Recyclable", "Yes"],
                ["Common Grades", "60/70, 80/100, VG-30"],
                ["Application Temperature", "Around 150–170°C"],
              ]}
            />

            {/* Key Takeaways */}
            <div className="mb-10 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
              <h2 className="text-lg font-black text-orange-300 mb-4 flex items-center gap-2">
                <AlertCircle size={18} />
                Key Takeaways
              </h2>
              <ul className="space-y-2.5">
                {[
                  "Bitumen is a semi-solid petroleum product that becomes liquid when heated",
                  "It's the \"glue\" in asphalt, not the same substance as asphalt itself",
                  "Most bitumen comes from crude oil refining; a smaller amount occurs naturally",
                  "Main uses: road paving, roofing membranes, waterproofing, and industrial coatings",
                  "Bitumen, asphalt, and tar are often confused but come from different sources",
                  'Cold mix and modified bitumen extend its use to repairs and extreme climates',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/75 text-sm leading-relaxed">
                    <CheckCircle2 size={15} className="text-teal-400 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* ── SECTION: What Is Bitumen? ── */}
            <section id="what-is-bitumen" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                What Is Bitumen?
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Bitumen is a dark, sticky substance that&apos;s semi-solid at room temperature but flows like a thick
                liquid when heated. It belongs to the same family as crude oil and is one of the heaviest, most
                complex fractions left over after refining.
              </p>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                If you&apos;ve ever watched a road crew laying fresh asphalt, the black liquid holding everything
                together is bitumen. It&apos;s not gravel, and it&apos;s not asphalt on its own — it&apos;s the binder
                that makes asphalt work.
              </p>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                <strong className="text-white">Is bitumen a liquid?</strong> Not exactly, and that&apos;s the interesting
                part. At normal outdoor temperatures, bitumen behaves as a solid or semi-solid. Heat it to around
                150–160°C, and it turns into a workable liquid that can be poured, mixed, and spread. As it cools,
                it sets again. This heat-sensitive behavior is called <em>thermoplastic</em>, and it&apos;s the reason
                bitumen is so useful for construction. According to the{" "}
               
                  Federal Highway Administration
                
                , bitumen has been used in construction and waterproofing applications for thousands of years.
              </p>
            </section>

            {/* ── SECTION: What Is Bitumen Made Of? ── */}
            <section id="what-is-bitumen-made-of" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                What Is Bitumen Made Of?
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Bitumen is made mostly of hydrocarbons, along with smaller amounts of sulfur, nitrogen, and trace
                metals like nickel and vanadium. These hydrocarbons fall into a few groups — <strong className="text-white">asphaltenes</strong>,{" "}
                <strong className="text-white">resins</strong>, and <strong className="text-white">oils</strong> — and the ratio between them
                determines how hard, soft, or elastic the final bitumen is.
              </p>
              <p className="text-white/80 leading-relaxed mb-4 text-base">
                Two main routes produce bitumen:
              </p>
              <ul className="space-y-3 mb-5">
                <li className="flex items-start gap-3 text-white/80 text-base">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-orange-400 shrink-0" />
                  <span>
                    <strong className="text-white">Refined bitumen</strong> — the byproduct left after crude oil goes through
                    distillation to extract lighter products like gasoline and diesel
                  </span>
                </li>
                <li className="flex items-start gap-3 text-white/80 text-base">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-teal-400 shrink-0" />
                  <span>
                    <strong className="text-white">Natural bitumen</strong> — found in the ground, formed over millions of years
                    as lighter oil components evaporated or degraded, leaving behind a thick residue
                  </span>
                </li>
              </ul>
              <p className="text-white/80 leading-relaxed text-base">
                Most of the bitumen used in construction today is refined, since it&apos;s easier to control quality and
                consistency at scale.
              </p>
            </section>

            {/* ── SECTION: Where Does Bitumen Come From? ── */}
            <section id="where-does-bitumen-come-from" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                Where Does Bitumen Come From? (How It&apos;s Made)
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Bitumen comes from two sources: oil refineries and natural deposits.
              </p>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                At a refinery, crude oil goes through a step-by-step separation process: it&apos;s heated in a furnace,
                then <strong className="text-white">atmospheric distillation</strong> pulls off the lightest products first (gases, gasoline,
                naphtha), followed by <strong className="text-white">vacuum distillation</strong>, which separates the remaining heavier
                fractions like diesel and lubricating oils under reduced pressure. What&apos;s left at the bottom, too
                heavy to vaporize further, is the heavy residue — the bitumen.
              </p>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                This is the standard method refineries use worldwide, and it&apos;s why bitumen is often described as the
                &ldquo;bottom of the barrel&rdquo; — the last and heaviest product crude oil yields.
              </p>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Natural bitumen forms differently, with no refinery involved. Over geological time, oil deposits near
                the Earth&apos;s surface lose their lighter compounds to evaporation and bacterial breakdown, leaving thick
                bitumen behind. The{" "}
                <a
                  href="https://www.nrcan.gc.ca/our-natural-resources/energy-sources-distribution/clean-fossil-fuels/oil-sands/18085"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                >
                  Athabasca oil sands in Canada
                  <ExternalLink size={12} className="inline ml-0.5 mb-0.5" />
                </a>{" "}
                and the Pitch Lake in Trinidad are two well-known natural sources. These deposits supply a smaller
                share of global bitumen compared to refined production, but they&apos;ve been used for construction and
                waterproofing since ancient times.
              </p>

              <SectionImage
                src="/how-bitumen-is-made.webp"
                alt="How bitumen is made — crude oil refinery atmospheric and vacuum distillation process"
                caption="Bitumen is extracted as the heavy residue at the bottom of the crude oil distillation process"
              />
            </section>

            {/* ── SECTION: Bitumen Properties ── */}
            <section id="bitumen-properties" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Bitumen Properties
              </h2>
              <p className="text-white/80 leading-relaxed mb-6 text-base">
                Bitumen&apos;s usefulness depends on a handful of physical properties that engineers rely on when designing
                roads and waterproofing systems.
              </p>
              <InfoTable
                headers={["Property", "What It Means", "Why It Matters"]}
                rows={[
                  ["Waterproof", "Doesn't absorb or let water pass through", "Protects road bases and roofs from water damage"],
                  ["Adhesive", "Sticks strongly to stone, gravel, and other surfaces", "Binds aggregate into a solid, stable mix"],
                  ["Thermoplastic", "Softens with heat, hardens as it cools", "Allows it to be poured and shaped, then set"],
                  ["Flexible", "Can stretch and move slightly under load", "Resists cracking from traffic and temperature swings"],
                  ["Durable", "Withstands years of weather and wear", "Reduces how often roads need resurfacing"],
                  ["Chemical resistant", "Holds up against oils, salts, and mild acids", "Suitable for industrial flooring and coatings"],
                ]}
              />

              <SectionImage
                src="/bitumen-properties.webp"
                alt="Bitumen properties — waterproof, adhesive, thermoplastic, flexible, durable material"
                caption="Bitumen's combination of waterproofing, adhesion, and thermoplastic behavior makes it uniquely suited for roads and waterproofing"
              />
            </section>

            {/* ── SECTION: How Bitumen Is Graded and Tested ── */}
            <section id="bitumen-grading" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                How Bitumen Is Graded and Tested
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Before bitumen leaves a refinery or supplier, it goes through standardised lab testing so buyers know
                exactly what they&apos;re getting. The{" "}
                <a
                  href="https://asphaltinstitute.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                >
                  Asphalt Institute
                  <ExternalLink size={12} className="inline ml-0.5 mb-0.5" />
                </a>{" "}
                publishes detailed specifications for each test method.
              </p>
              <ul className="space-y-4 mb-6">
                {[
                  {
                    title: "Penetration test",
                    desc: "A needle of fixed weight is dropped onto a sample; the depth it sinks (in tenths of a millimeter) sets the grade. A \"60/70\" bitumen means the needle sinks 60–70 units; lower numbers mean harder bitumen.",
                  },
                  {
                    title: "Softening point test",
                    desc: "Finds the temperature at which a heated bitumen ball softens enough to sag under a small steel ball's weight.",
                  },
                  {
                    title: "Ductility test",
                    desc: "Checks how far a sample stretches before breaking, showing flexibility.",
                  },
                  {
                    title: "Viscosity test",
                    desc: "Measures resistance to flow at a set temperature, affecting how easily it's pumped and mixed on site.",
                  },
                ].map(({ title, desc }) => (
                  <li key={title} className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-orange-400 shrink-0" />
                    <span className="text-white/80 text-base">
                      <strong className="text-white">{title}</strong> — {desc}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-white/80 leading-relaxed text-base">
                A contractor laying roads in a hot desert climate needs a stiffer grade than one working in a cold,
                mountainous region. Using the wrong grade leads to rutting in summer or cracking in winter, both of
                which shorten a road&apos;s service life.
              </p>
            </section>

            {/* ── SECTION: Bitumen Grades ── */}
            <section id="bitumen-grades" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Bitumen Grades
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Bitumen is classified into several grading systems depending on region and application:
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  { label: "Penetration grade (e.g., 60/70, 80/100)", desc: "the standard for most paving" },
                  { label: "Viscosity grade", desc: "classifies flow behavior at high temperature" },
                  { label: "Performance grade (PG)", desc: "rates the highest and lowest pavement temperatures it can handle, common in North America" },
                  { label: "Emulsion grade", desc: "bitumen suspended in water for cold application" },
                ].map(({ label, desc }) => (
                  <li key={label} className="flex items-start gap-3 text-white/80 text-base">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-teal-400 shrink-0" />
                    <span>
                      <strong className="text-white">{label}</strong> — {desc}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-white/80 leading-relaxed text-base">
                Emulsion grades in particular follow their own classification system by electrical charge and setting speed — our dedicated{" "}
                <Link
                  href="/blog/bitumen-emulsion-explained"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors font-medium"
                >
                  bitumen emulsion guide
                </Link>{" "}
                covers grade codes like CRS-1, MS-2, and SS-1 in full detail. For a breakdown of how each grading system works for hot mix binders, how to read a PG grade like PG 64-22, and how to choose the right grade for your project, see our dedicated guide:{" "}
                <Link
                  href="/blog/bitumen-grades-explained"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors font-medium"
                >
                  Bitumen Grades Explained: Penetration, VG, PG &amp; How to Choose
                </Link>
                .
              </p>
            </section>

            {/* ── SECTION: Bitumen vs Asphalt vs Concrete ── */}
            <section id="bitumen-vs-asphalt-vs-concrete" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                Bitumen vs Asphalt vs Concrete
              </h2>
              <InfoTable
                headers={["Feature", "Bitumen", "Asphalt", "Concrete"]}
                rows={[
                  ["Material", "Binder", "Road Mix", "Cement-based"],
                  ["Flexibility", "High", "High", "Low"],
                  ["Waterproof", "Yes", "Yes", "Moderate"],
                  ["Cost", "Lower", "Moderate", "Higher"],
                  ["Repair", "Easy", "Easy", "Harder"],
                ]}
              />
            </section>

            {/* ── SECTION: Types of Bitumen ── */}
            <section id="types-of-bitumen" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Types of Bitumen
              </h2>
              <p className="text-white/80 leading-relaxed mb-8 text-base">
                Not all bitumen is the same. Different grades and formulations exist for different jobs.
              </p>

              {[
                {
                  id: "bituminous-coating",
                  title: "Bituminous Coating",
                  body: "Bituminous coating is a liquid or semi-liquid form of bitumen, often mixed with solvents, applied as a protective layer on metal, concrete, or masonry. It's commonly brushed or sprayed onto surfaces that need to resist moisture and corrosion, like underground pipes or foundation walls.",
                },
                {
                  id: "bitumen-membrane",
                  title: "Bitumen Membrane",
                  body: "A bitumen membrane is a manufactured sheet, usually reinforced with fiberglass or polyester, used to waterproof roofs and below-ground structures. These membranes are either torched down with heat or self-adhesive, and they form a continuous, watertight barrier.",
                },
                {
                  id: "bitumen-paint",
                  title: "Bitumen Paint",
                  body: "Bitumen paint is a thinner, ready-to-apply version of bituminous coating. It's popular for smaller waterproofing jobs, like sealing gutters, garden ponds, or metal fencing, where a full membrane isn't practical.",
                },
                {
                  id: "modified-bitumen",
                  title: "Modified Bitumen",
                  body: "Modified bitumen is regular bitumen blended with additional materials to improve performance in demanding conditions — chosen when standard grades won't hold up.",
                  bullets: [
                    "Polymer modified bitumen (PMB) — plastic or rubber polymers boost elasticity and heat resistance, common on highways and runways",
                    "Crumb rubber modified bitumen — recycled tire rubber improves durability and reduces road noise",
                    "Oxidized bitumen — air blown through hot bitumen raises its softening point; mainly used in roofing, not roads",
                    "Cutback bitumen — thinned with solvent to stay workable at lower temperatures",
                  ],
                },
                {
                  id: "cold-mix-bitumen",
                  title: "Cold Mix Bitumen",
                  body: <>
                 <Link href='/blog/cold-mix-bitumen' className="text-orange-500"> Cold mix bitumen</Link> is asphalt made using emulsified or cutback bitumen that can be applied without heating, staying workable at or near normal outdoor temperature — unlike hot mix, which must be produced and laid hot.</>,
                  extras: [
                    { label: "Uses", text: "Pothole repairs, patching cracks, temporary road maintenance, and any location without a hot mix plant nearby." },
                    { label: "Benefits", text: "Safer and easier to handle (no heating equipment needed), can be stored for later use, and works in wet or cold conditions." },
                    { label: "Limitations", text: "Lower strength and durability than hot mix, so it suits repairs and low-traffic areas rather than new road construction." },
                  ],
                },
              ].map(({ id, title, body, bullets, extras }) => (
                <div key={id} id={id} className="mb-8 scroll-mt-24 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/[0.08] transition-colors">
                  <h3 className="text-xl font-black text-white mb-3">{title}</h3>
                  <p className="text-white/75 leading-relaxed mb-3 text-base">{body}</p>
                  {bullets && (
                    <ul className="space-y-2 mt-3">
                      {bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3 text-white/70 text-sm">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                  {extras && (
                    <div className="mt-4 space-y-2">
                      {extras.map(({ label, text }) => (
                        <p key={label} className="text-white/70 text-sm">
                          <strong className="text-white">{label}:</strong> {text}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <SectionImage
                src="/types-of-bitumen.webp"
                alt="Types of bitumen — bituminous coating, membrane, modified bitumen, cold mix"
                caption="Bitumen comes in many forms: coatings, membranes, polymer-modified grades, and cold mixes"
              />
            </section>

            {/* ── SECTION: What Is Bitumen Used For? ── */}
            <section id="bitumen-uses" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                What Is Bitumen Used For?
              </h2>
              <p className="text-white/80 leading-relaxed mb-6 text-base">
                Bitumen shows up in more places than most people realize. Its combination of waterproofing and
                adhesive strength makes it valuable well beyond roads.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {[
                  {
                    title: "Road construction & driveways",
                    desc: "Bitumen's biggest use. It binds crushed stone and sand into asphalt, which is then laid and compacted to form road surfaces, driveways, parking lots, and airport runways.",
                    color: "orange",
                  },
                  {
                    title: "Roofing & waterproofing",
                    desc: "Bitumen membranes — particularly modified bitumen — are a standard choice for flat and low-slope roofs, foundations, basements, and bridge decks. Our guide on modified bitumen roofing explains the system layers and materials used.",
                    color: "teal",
                    link: { href: "/blog/modified-bitumen-roofing", text: "modified bitumen roofing" },
                  },
                  {
                    title: "Industrial applications",
                    desc: "Pipe coatings, damp-proofing courses in buildings, and certain sealants rely on bitumen for its resistance to water and mild chemicals.",
                    color: "violet",
                  },
                  {
                    title: "Protective coatings",
                    desc: "Bitumen paint and bituminous coating products protect metal and concrete surfaces from corrosion and moisture — common in tanks, pipes, and exposed structural steel.",
                    color: "blue",
                  },
                ].map(({ title, desc, color, link }) => (
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
                    <p className="text-white/65 text-sm leading-relaxed">
                      {link ? (
                        <>
                          Bitumen membranes — particularly modified bitumen — are a standard choice for flat and low-slope roofs, foundations, basements, and bridge decks. Our guide on{" "}
                          <Link href={link.href} className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors">
                            {link.text}
                          </Link>{" "}
                          explains the system layers and materials used.
                        </>
                      ) : (
                        desc
                      )}
                    </p>
                  </div>
                ))}
              </div>

              <SectionImage
                src="/bitumen-applications.webp"
                alt="Bitumen applications — roads, roofing, waterproofing, industrial pipe coatings"
                caption="Bitumen is used across roads, roofing, waterproofing systems, and industrial coatings"
              />
            </section>

            {/* ── SECTION: Advantages & Disadvantages ── */}
            <section id="advantages-disadvantages" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Advantages and Disadvantages of Bitumen
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-teal-500/10 border border-teal-400/20 rounded-xl p-5">
                  <h3 className="text-teal-300 font-black mb-3 flex items-center gap-2">
                    <CheckCircle2 size={16} /> Advantages
                  </h3>
                  <ul className="space-y-2">
                    {["Strong waterproofing", "Flexible under traffic loads", "Recyclable", "Faster to apply than concrete", "Cost-effective at scale"].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-white/75 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-orange-500/10 border border-orange-400/20 rounded-xl p-5">
                  <h3 className="text-orange-300 font-black mb-3 flex items-center gap-2">
                    <AlertCircle size={16} /> Disadvantages
                  </h3>
                  <ul className="space-y-2">
                    {["Softens in extreme heat (rutting risk)", "Brittle in extreme cold with wrong grade", "Price tied to crude oil markets", "Needs periodic resealing", "Safety concerns during hot application"].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-white/75 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* ── SECTION: Is Bitumen Safe? ── */}
            <section id="bitumen-safety" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                Is Bitumen Safe to Handle?
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Bitumen itself is considered low-risk when handled correctly, but heating and applying it comes with
                real hazards that construction crews take seriously.
              </p>
              <p className="text-white/80 leading-relaxed text-base">
                Hot bitumen can cause severe burns on contact, since working temperatures typically run between 140°C
                and 180°C. Fumes released during heating can also irritate the eyes, skin, and respiratory system with
                prolonged exposure. Workers handling hot bitumen use heat-resistant gloves, long sleeves, face shields,
                and, near mixing plants, respiratory protection. The{" "}
                <a
                  href="https://www.fhwa.dot.gov/pavement/asphalt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                >
                  Federal Highway Administration (FHWA)
                  <ExternalLink size={12} className="inline ml-0.5 mb-0.5" />
                </a>{" "}
                provides guidance on safe asphalt paving practices for workers on site.
              </p>
            </section>

            {/* ── SECTION: Bitumen vs Asphalt vs Tar ── */}
            <section id="bitumen-vs-asphalt-vs-tar" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Bitumen vs. Asphalt vs. Tar
              </h2>
              <p className="text-white/80 leading-relaxed mb-6 text-base">
                These three terms get mixed up constantly, and the confusion is understandable since all three are dark,
                sticky, and used in paving. But they&apos;re not the same material.
              </p>
              <InfoTable
                headers={["Feature", "Bitumen", "Asphalt", "Tar"]}
                rows={[
                  ["Source", "Crude oil (refined or natural)", "Bitumen + aggregate mix", "Coal or wood, distilled"],
                  ["Composition", "Pure binder", "Bitumen combined with stone, sand, gravel", "Different hydrocarbon structure"],
                  ["Appearance", "Thick, black, semi-solid", "Grayish-black finished surface", "Darker, thinner, stronger smell"],
                  ["Main use", "Binding agent", "Finished road/pavement surface", "Historically roofing and roads"],
                  ["Weather resistance", "Good", "Good (depends on mix)", "Lower; breaks down faster under UV"],
                ]}
              />
              <p className="text-white/80 leading-relaxed mb-6 text-base">
                The short version: <strong className="text-white">bitumen is an ingredient</strong>, asphalt is the
                finished product that contains it, and tar is a related but chemically different material largely
                replaced by bitumen in modern construction due to environmental and durability concerns.
              </p>

              <SectionImage
                src="/bitumen-vs-asphalt-vs-tar .webp"
                alt="Bitumen vs asphalt vs tar — comparison of road paving materials"
                caption="Bitumen (left) is the pure binder; asphalt (centre) is the finished mix; tar (right) is a distinct material from coal distillation"
              />
            </section>

            {/* ── SECTION: Asphalt Binder ── */}
            <section id="asphalt-binder" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                Asphalt Binder Explained
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                When engineers talk about &ldquo;binder&rdquo; in paving, they mean bitumen. Asphalt binder is simply another
                name for the bitumen portion of an asphalt mix — the substance that coats and holds the aggregate
                together. The{" "}
                <a
                  href="https://www.transportation.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                >
                  American Association of State Highway and Transportation Officials (AASHTO)
                  <ExternalLink size={12} className="inline ml-0.5 mb-0.5" />
                </a>{" "}
                sets the performance grade (PG) standards that govern binder selection for pavement design.
              </p>
              <p className="text-white/80 leading-relaxed text-base">
                Without the binder, asphalt would just be loose gravel. It&apos;s what gives finished pavement its
                strength, flexibility, and resistance to water. Engineers select binder grades based on climate: stiffer
                binders for hot regions to resist rutting, softer ones for cold regions to resist cracking.
              </p>
            </section>

            {/* ── SECTION: Bituminous Concrete ── */}
            <section id="bituminous-concrete" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                What Is Bituminous Concrete?
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Bituminous concrete, sometimes called asphalt concrete, is the technical name for pavement made by
                mixing bitumen with graded aggregate — a precise combination of different stone and sand sizes. It&apos;s
                the standard material for most modern road surfaces.
              </p>
              <p className="text-white/80 leading-relaxed text-base">
                This differs from <strong className="text-white">asphalt millings</strong>, the crushed, recycled material produced when
                old asphalt roads are ground up during resurfacing and often reused as a base layer for new roads.
              </p>
            </section>

            {/* ── SECTION: What Is Asphalt Made Of? ── */}
            <section id="what-is-asphalt-made-of" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                What Is Asphalt Made Of?
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Asphalt is made of aggregate (crushed stone, gravel, and sand) and bitumen, the binder holding it
                together. Aggregate typically makes up <strong className="text-white">90–95% of the mix by weight</strong>, with
                bitumen filling the rest — the aggregate provides strength, while the bitumen coats each particle and
                locks it into a weatherproof surface.
              </p>
              <p className="text-white/80 leading-relaxed text-base">
                Natural asphalt exists in a few places, like asphalt lakes, but most used today is manufactured at
                plants with refined bitumen and processed aggregate.
              </p>
            </section>

            {/* ── SECTION: Blacktop / Tarmac ── */}
            <section id="bitumen-blacktop-tarmac" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Is Bitumen the Same as Blacktop or Tarmac?
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Not quite, though the terms are often used interchangeably in everyday conversation.
              </p>
              <div className="space-y-4 mb-4">
                <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <h3 className="text-white font-bold mb-2">Blacktop</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    A general term for asphalt pavement, especially in North America. It refers to the finished road
                    surface, not the binder itself.
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <h3 className="text-white font-bold mb-2">Tarmac</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    A British term, short for &ldquo;tar-macadam,&rdquo; originally made with tar rather than bitumen. Modern
                    tarmac typically uses bitumen as the binder, so the name has stuck even though the ingredients
                    changed.
                  </p>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed text-base">
                Bitumen is technically the binding component inside all of them, not the surface material itself.
              </p>
            </section>

            {/* ── SECTION: Road Construction ── */}
            <section id="bitumen-road-construction" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                Bitumen in Road Construction
              </h2>
              <p className="text-white/80 leading-relaxed mb-6 text-base">
                Building a bitumen road follows a specific sequence to make sure the surface lasts.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  { step: "01", title: "Preparing the base", desc: "The ground is graded and compacted to create a stable foundation" },
                  { step: "02", title: "Mixing", desc: "Bitumen is heated and blended with aggregate at a mixing plant" },
                  { step: "03", title: "Laying", desc: "The hot mix is spread evenly across the prepared base using a paver" },
                  { step: "04", title: "Compacting", desc: "Heavy rollers press the mix down, removing air pockets" },
                  { step: "05", title: "Cooling and setting", desc: "The bitumen hardens as it cools into a solid, weatherproof surface" },
                ].map(({ step, title, desc }) => (
                  <div key={step} className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-4">
                    <span className="text-orange-400 font-black text-lg shrink-0 w-8">{step}</span>
                    <div>
                      <strong className="text-white text-base">{title}</strong>
                      <p className="text-white/65 text-sm mt-0.5">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <SectionImage
                src="/bitumen-road-construction.webp"
                alt="Bitumen road construction — paving, compacting, and laying asphalt surface"
                caption="Road construction with bitumen: base preparation, hot mix laying, and compaction"
              />

              <h3 className="text-2xl font-black text-white mb-4 mt-8">
                Common Problems in Bitumen Roads
              </h3>
              <div className="space-y-3 mb-6">
                {[
                  { prob: "Rutting", cause: "Grooves from heavy traffic, usually linked to using too soft a bitumen grade for the climate" },
                  { prob: "Cracking", cause: "Caused by temperature swings, sun-driven oxidation over time, or an under-compacted base" },
                  { prob: "Potholes", cause: "Start as small cracks that let water into the base layer; freeze-thaw cycles then expand the damage" },
                  { prob: "Bleeding", cause: "Excess bitumen rises to the surface in hot weather, making the road slick" },
                ].map(({ prob, cause }) => (
                  <div key={prob} className="flex items-start gap-3 text-white/75 text-sm">
                    <AlertCircle size={15} className="text-orange-400 mt-0.5 shrink-0" />
                    <span><strong className="text-white">{prob}</strong> — {cause}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* ── SECTION: Repair and Maintenance ── */}
            <section id="repair-maintenance" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Repair and Maintenance
              </h2>
              <p className="text-white/80 leading-relaxed mb-6 text-base">
                Keeping bitumen surfaces in good condition relies on a few standard techniques:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {[
                  { title: "Crack sealing", desc: "Filling small cracks before water reaches the base" },
                  { title: "Pothole repair", desc: "Often done with cold mix for a quick, no-heat fix" },
                  { title: "Surface dressing", desc: "A thin refresh layer of bitumen and aggregate" },
                  { title: "Overlay", desc: "A fresh hot mix layer over a worn but structurally sound road" },
                  { title: "Seal coating", desc: "A protective layer against UV, oil, and water without adding thickness" },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
                    <CheckCircle2 size={15} className="text-teal-400 mt-0.5 shrink-0" />
                    <span className="text-white/75 text-sm">
                      <strong className="text-white">{title}</strong> — {desc}
                    </span>
                  </div>
                ))}
              </div>

              <SectionImage
                src="/bitumen-road-repair.webp"
                alt="Bitumen road repair — crack sealing, pothole patching, and surface maintenance"
                caption="Regular maintenance — crack sealing, overlay, and seal coating — extends road life significantly"
              />

              <h3 className="text-2xl font-black text-white mb-4 mt-8">How Long Does Bitumen Last?</h3>
              <InfoTable
                headers={["Application", "Typical Lifespan"]}
                rows={[
                  ["Asphalt driveway", "15–20 years"],
                  ["Road surface", "15–25 years before major resurfacing"],
                  ["Roofing membrane", "10–20 years"],
                  ["Waterproofing coating", "5–15 years, depending on exposure"],
                ]}
              />
              <p className="text-white/70 text-sm mt-3">
                Regular sealing and prompt crack repair can push these numbers toward the higher end of each range.
              </p>
            </section>

            {/* ── SECTION: Bitumen Quality and Price ── */}
            <section id="bitumen-quality-price" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                Bitumen Quality and Products
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Not every batch of bitumen performs the same way, and quality control matters more than people assume.
                Refineries and suppliers test bitumen for penetration grade, ductility, and softening point before it
                goes to market.
              </p>
              <p className="text-white/80 leading-relaxed mb-8 text-base">
                Bitumen products vary by intended use: paving grade for roads and driveways, industrial grade for
                coatings and waterproofing, and modified bitumen, blended with polymers or rubber, for extra flexibility
                in extreme climates.
              </p>

              <h3 className="text-2xl font-black text-white mb-4">What Affects Bitumen Price?</h3>
              <p className="text-white/80 leading-relaxed text-base">
                Bitumen price fluctuates with crude oil markets, since it&apos;s a petroleum byproduct. Grade and quality,
                order quantity, regional supply and refining capacity, transportation (bitumen needs heated tankers),
                and general supply chain conditions all influence cost — which is why prices vary between countries and
                even between suppliers in the same region.
              </p>
            </section>

            {/* ── SECTION: Quick Facts ── */}
            <section id="quick-facts" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-6 border-l-4 border-teal-400 pl-4">
                Quick Facts About Bitumen
              </h2>
              <div className="space-y-0">
                <QuickFact
                  question="Why is bitumen black?"
                  answer="The heavy hydrocarbons and carbon-rich compounds left after refining absorb nearly all visible light, giving bitumen its dark, near-black color."
                />
                <QuickFact
                  question="Why is bitumen waterproof?"
                  answer="Its hydrocarbon structure repels water rather than absorbing it, and once compacted, it forms a continuous layer with no gaps for moisture to pass through."
                />
                <QuickFact
                  question="Is bitumen flammable?"
                  answer="It can ignite at very high temperatures, but isn't considered highly flammable under normal handling. The bigger safety concern is fumes released when it's overheated."
                />
                <QuickFact
                  question="Is bitumen toxic?"
                  answer="Once cooled and set, it's chemically stable and low-risk to touch. Fumes released during heating can irritate skin and airways with prolonged exposure, which is why workers use protective equipment during application."
                />
                <QuickFact
                  question="Can bitumen crack?"
                  answer="Yes, especially with age, temperature swings, or a base that wasn't compacted properly. Cracking is one of the most common signs a surface needs maintenance."
                />
                <QuickFact
                  question="Does rain damage fresh bitumen?"
                  answer="Freshly laid bitumen that's still warm can be disturbed by heavy rain before it sets. Once cooled and compacted, it's fully waterproof."
                />
              </div>
            </section>

            {/* ── SECTION: Conclusion ── */}
            <section id="conclusion" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                Conclusion
              </h2>
              <div className="bg-gradient-to-br from-teal-500/15 via-blue-600/10 to-purple-600/10 border border-white/15 rounded-2xl p-6 md:p-8">
                <p className="text-white/85 leading-relaxed mb-4 text-base">
                  Bitumen is the binder, not the road. It&apos;s the sticky, petroleum-based material that holds asphalt
                  together, made either by refining crude oil or, less commonly, sourced naturally from deposits like
                  oil sands. Its waterproofing, adhesive, and heat-responsive properties make it essential not just for
                  paving, but for roofing, waterproofing, and industrial coatings.
                </p>
                <p className="text-white/85 leading-relaxed mb-6 text-base">
                  Understanding bitumen&apos;s role — and how it differs from asphalt and tar — makes it easier to choose
                  the right material, whether you&apos;re sealing a driveway, comparing paving contractors, or making sense
                  of construction terminology.
                </p>
                <p className="text-white/85 leading-relaxed text-base">
                  If you&apos;re planning a paving project, estimating material quantities before construction can save time
                  and reduce waste. You can use our{" "}
                  <Link
                    href="/"
                    className="text-orange-400 hover:text-orange-300 font-semibold underline underline-offset-2 transition-colors"
                  >
                    Bitumen Calculator
                  </Link>{" "}
                  to estimate bitumen requirements based on road dimensions, mix density, and binder percentage.
                </p>
              </div>
            </section>

            {/* ── SECTION: FAQ ── */}
            <section id="faq" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-6 border-l-4 border-teal-400 pl-4">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {[
                  {
                    q: "Is bitumen a liquid?",
                    a: "Not at normal temperatures. Bitumen is semi-solid until heated to around 150–160°C, at which point it becomes a workable liquid. As it cools, it hardens again.",
                  },
                  {
                    q: "What is bitumen made of?",
                    a: "Mostly hydrocarbons — specifically asphaltenes, resins, and oils — along with trace amounts of sulfur, nitrogen, and metals. It comes from refining crude oil or occurs naturally in deposits like oil sands.",
                  },
                  {
                    q: "Is asphalt the same as blacktop?",
                    a: 'Essentially yes. Blacktop is a common term, especially in North America, for the finished asphalt pavement surface.',
                  },
                  {
                    q: "What does bituminous mean?",
                    a: "\"Bituminous\" describes anything containing or related to bitumen. Bituminous coating or membrane refers to bitumen-based waterproofing products.",
                  },
                  {
                    q: "What is bitumen used for?",
                    a: "Mainly road construction and driveways, but also roofing membranes, waterproofing, pipe coatings, and industrial floor sealants.",
                  },
                  {
                    q: "Bitumen vs. tar — what's the difference?",
                    a: "Bitumen comes from crude oil; tar traditionally comes from coal or wood. Tar has largely been phased out in favor of bitumen due to environmental concerns and better weather resistance.",
                  },
                  {
                    q: "What is cold mix bitumen used for?",
                    a: "Pothole repairs, patching, and temporary road maintenance in locations where a hot mix plant isn't available.",
                  },
                  {
                    q: "What is modified bitumen?",
                    a: "Standard bitumen blended with polymers or rubber to improve elasticity, heat resistance, and durability in demanding climates and high-traffic areas.",
                  },
                  {
                    q: "Is bitumen recyclable?",
                    a: "Yes. Old bitumen-bound pavement is commonly milled and recycled into new asphalt mixes.",
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

            {/* ── Navigation: Back to Blog ── */}
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
          </article>

          {/* ── SIDEBAR: Table of Contents ── */}
          <aside className="hidden xl:block w-72 shrink-0">
            <div className="sticky top-24">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-white font-black text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
                  <BookOpen size={14} className="text-teal-400" />
                  Table of Contents
                </h3>
                <nav className="space-y-1">
                  {[
                    { id: "what-is-bitumen", label: "What Is Bitumen?" },
                    { id: "what-is-bitumen-made-of", label: "What Is It Made Of?" },
                    { id: "where-does-bitumen-come-from", label: "Where Does It Come From?" },
                    { id: "bitumen-properties", label: "Bitumen Properties" },
                    { id: "bitumen-grading", label: "Grading & Testing" },
                    { id: "bitumen-grades", label: "Bitumen Grades" },
                    { id: "bitumen-vs-asphalt-vs-concrete", label: "vs Asphalt vs Concrete" },
                    { id: "types-of-bitumen", label: "Types of Bitumen" },
                    { id: "bitumen-uses", label: "What Is It Used For?" },
                    { id: "advantages-disadvantages", label: "Advantages & Disadvantages" },
                    { id: "bitumen-safety", label: "Is It Safe?" },
                    { id: "bitumen-vs-asphalt-vs-tar", label: "vs Asphalt vs Tar" },
                    { id: "asphalt-binder", label: "Asphalt Binder" },
                    { id: "bituminous-concrete", label: "Bituminous Concrete" },
                    { id: "bitumen-road-construction", label: "Road Construction" },
                    { id: "repair-maintenance", label: "Repair & Maintenance" },
                    { id: "quick-facts", label: "Quick Facts" },
                    { id: "conclusion", label: "Conclusion" },
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
                  Planning a paving project? Estimate your bitumen quantities instantly.
                </p>
                <Link
                  href="/"
                  className="block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white px-4 py-2.5 rounded-xl font-bold text-xs transition-all shadow-[0_0_15px_rgba(249,115,22,0.3)] hover:shadow-[0_0_25px_rgba(249,115,22,0.5)]"
                >
                  Free Bitumen Calculator →
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
