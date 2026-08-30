import AuthorBio from "../../components/AuthorBio";
// app/blog/bitumen-emulsion-explained/page.tsx
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
  Droplets,
  Zap,
} from "lucide-react";

// ── Metadata ──────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Bitumen Emulsion Explained: Types, Density, Production & Uses",
  description:
    "Discover bitumen emulsion types (cationic & anionic), density, production, and how this cold-applied binder compares to plain bitumen in road paving.",
  keywords: [
    "bitumen emulsion",
    "what is bitumen emulsion",
    "cationic bitumen emulsion",
    "anionic bitumen emulsion",
    "bitumen emulsion types",
    "bitumen emulsion density",
    "how bitumen emulsion is made",
    "bitumen emulsion uses",
    "bitumen emulsion vs bitumen",
    "colloid mill bitumen emulsion",
    "RS MS SS emulsion",
    "tack coat emulsion",
  ],
  alternates: {
    canonical: "https://bitumencalcpro.com/blog/bitumen-emulsion-explained",
  },
  openGraph: {
    title:
      "Bitumen Emulsion Explained: Types, Density, Production & Uses | BitumenCalcPro",
    description:
      "Discover bitumen emulsion types (cationic & anionic), density, production, and how this cold-applied binder compares to plain bitumen in road paving.",
    url: "https://bitumencalcpro.com/blog/bitumen-emulsion-explained",
    siteName: "BitumenCalcPro",
    type: "article",
    publishedTime: "2026-08-19T00:00:00.000Z",
    authors: ["BitumenCalcPro"],
    images: [
      {
        url: "/bitumen-emulsion-explained.webp",
        width: 1200,
        height: 630,
        alt: "Bitumen emulsion — water-based cold-applied road binder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bitumen Emulsion Explained: Types, Density, Production & Uses",
    description:
      "Discover bitumen emulsion types (cationic & anionic), density, production, and how this cold-applied binder compares to plain bitumen in road paving.",
    images: ["/bitumen-emulsion-explained.webp"],
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
    "Bitumen Emulsion Explained: Types, Density, Production & How It Differs from Bitumen",
  description:
    "Discover bitumen emulsion types (cationic & anionic), density, production, and how this cold-applied binder compares to plain bitumen in road paving.",
  image: "https://bitumencalcpro.com/bitumen-emulsion-explained.webp",
  datePublished: "2026-08-19T00:00:00.000Z",
  dateModified: "2026-08-19T00:00:00.000Z",
  author: {
    "@type": "Organization",
    name: "BitumenCalcPro",
    url: "https://bitumencalcpro.com",
  },
  publisher: {
    "@type": "Organization",
    name: "BitumenCalcPro",
    url: "https://bitumencalcpro.com",
    logo: {
      "@type": "ImageObject",
      url: "https://bitumencalcpro.com/favicon.ico",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://bitumencalcpro.com/blog/bitumen-emulsion-explained",
  },
  keywords:
    "bitumen emulsion, cationic emulsion, anionic emulsion, bitumen emulsion types, bitumen emulsion density, colloid mill, tack coat, prime coat, chip seal",
  articleSection: "Bitumen Fundamentals",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the difference between bitumen and bitumen emulsion?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bitumen is the raw petroleum binder that needs heat to become workable. Bitumen emulsion is that same binder broken into microscopic droplets and suspended in water with an emulsifier, so it stays workable at normal outdoor temperature without any heating.",
      },
    },
    {
      "@type": "Question",
      name: "What are the main types of bitumen emulsion?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Emulsions are classified by electrical charge (cationic or anionic) and by setting speed (rapid, medium, or slow setting), giving combinations like CRS-1, MS-2, or SS-1, each suited to different applications.",
      },
    },
    {
      "@type": "Question",
      name: "Is cationic or anionic bitumen emulsion better?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Neither is universally better — it depends on the aggregate. Cationic emulsions bond well with most common aggregate types, while anionic emulsions are chosen for alkaline aggregate like limestone or dolomite.",
      },
    },
    {
      "@type": "Question",
      name: "What is the density of bitumen emulsion?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Typically around 1.02–1.05 g/cm³ (1020–1050 kg/m³), close to plain bitumen, since both bitumen and water — its two main components — have similar densities.",
      },
    },
    {
      "@type": "Question",
      name: "How is bitumen emulsion made?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It's produced in a colloid mill, where heated bitumen and a water-emulsifier mixture are fed in together and sheared into microscopic droplets under intense mechanical force, then cooled and stored.",
      },
    },
    {
      "@type": "Question",
      name: "Can bitumen emulsion be used instead of hot bitumen for all applications?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. It's well suited to tack coats, prime coats, surface treatments, and cold mix, but it doesn't match the strength and durability of hot mix asphalt for new road construction or high-traffic pavement.",
      },
    },
    {
      "@type": "Question",
      name: "Does bitumen emulsion expire?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. It has a defined shelf life, commonly around 12 months when stored correctly, and can degrade or separate prematurely if frozen, overheated, or stored past its rated shelf life.",
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
      name: "Bitumen Emulsion Explained",
      item: "https://bitumencalcpro.com/blog/bitumen-emulsion-explained",
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
          className="w-full max-w-full h-auto object-contain sm:object-cover"
          style={{ maxWidth: "100%", height: "auto", display: "block" }}
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
export default function BitumenEmulsionExplainedPage() {
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
            <span className="text-white/90 font-medium">
              Bitumen Emulsion Explained
            </span>
          </nav>

          {/* Category badge */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="inline-flex items-center gap-1.5 bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
              <BookOpen size={12} />
              Bitumen Fundamentals
            </span>
            <span className="inline-flex items-center gap-1.5 bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
              <Droplets size={12} />
              Emulsion & Cold Application
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-6 max-w-4xl">
            Bitumen Emulsion Explained: Types, Density, Production &amp; How It
            Differs from Bitumen
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-white/50 text-sm mb-10">
            <span className="flex items-center gap-1.5">
              <Calendar size={13} />
              <time dateTime="2026-08-19">August 19, 2026</time>
            </span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="flex items-center gap-1.5">
              <Clock size={13} />
              16 min read
            </span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="text-white/50">By BitumenCalcPro</span>
          </div>
        </div>
      </div>

      {/* ── HERO IMAGE ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionImage
          src="/bitumen-emulsion-explained.webp"
          alt="Bitumen emulsion — water-based cold-applied bituminous road binder in a tank sprayer"
          caption="Bitumen emulsion: the same binder as hot bitumen, re-engineered for cold application without heating equipment"
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
                Bitumen emulsion is bitumen broken into tiny droplets and suspended in water with an
                emulsifier, so it stays workable at normal outdoor temperatures instead of needing to
                be heated. It&apos;s classified by electrical charge (cationic or anionic) and setting
                speed (rapid, medium, or slow), and it&apos;s widely used for tack coats, prime coats,
                chip seals, and cold mix asphalt.
              </p>
            </div>

            {/* Table of Contents */}
            <div className="mb-10 bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-white font-black text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
                  <BookOpen size={14} className="text-teal-400" />
                  Table of Contents
                </h3>
                <nav className="space-y-1">
                  {[
                    {
                      id: "what-is-bitumen-emulsion",
                      label: "What Is Bitumen Emulsion?",
                    },
                    {
                      id: "bitumen-vs-emulsion",
                      label: "Bitumen vs Emulsion",
                    },
                    {
                      id: "types-of-bitumen-emulsion",
                      label: "Types of Emulsion",
                    },
                    {
                      id: "cationic-vs-anionic",
                      label: "↳ Cationic vs Anionic",
                    },
                    { id: "setting-speed", label: "↳ RS, MS, SS, QS Grades" },
                    { id: "grade-codes", label: "↳ Reading Grade Codes" },
                    {
                      id: "bitumen-emulsion-density",
                      label: "Density Values",
                    },
                    {
                      id: "bitumen-emulsion-production",
                      label: "How It's Made",
                    },
                    { id: "bitumen-emulsion-uses", label: "Uses & Applications" },
                    { id: "advantages", label: "Advantages" },
                    { id: "video", label: "Video Overview" },
                    { id: "storage-shelf-life", label: "Storage & Shelf Life" },
                    { id: "conclusion", label: "Final Verdict" },
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



            {/* ── SECTION: What Is Bitumen Emulsion? ── */}
            <section id="what-is-bitumen-emulsion" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                What Is Bitumen Emulsion?
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Bitumen emulsion is a mixture of bitumen, water, and a chemical emulsifier,
                engineered so the bitumen stays sprayable and workable without any heat. Instead of a
                single, thick mass of binder, the bitumen exists as millions of microscopic droplets
                — typically between 1 and 10 microns across — suspended evenly throughout the water.
              </p>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                A useful comparison is milk. Milk is fat droplets held in suspension in water by
                natural proteins, which is why it stays smooth and pourable instead of separating
                into oil and water. Bitumen emulsion works on the same basic principle, just with
                bitumen droplets and a synthetic emulsifier standing in for the fat and proteins.
              </p>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Most road-grade emulsions run about <strong className="text-white">60% bitumen
                and 40% water by weight</strong>, though the exact ratio varies by grade and intended
                use. Once the emulsion is applied and the water evaporates — or, in some
                formulations, once the electrical charge neutralizes on contact with aggregate — the
                bitumen droplets merge back together and &ldquo;break,&rdquo; leaving a continuous
                binder film behind. That final film is functionally identical to what{" "}
                <Link
                  href="/blog/what-is-bitumen"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors font-medium"
                >
                  heated bitumen
                </Link>{" "}
                would leave, just applied without ever needing a burner.
              </p>
            </section>

            {/* ── SECTION: Bitumen vs Bitumen Emulsion ── */}
            <section id="bitumen-vs-emulsion" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Difference Between Bitumen and Bitumen Emulsion
              </h2>
              <p className="text-white/80 leading-relaxed mb-6 text-base">
                These two terms get used almost interchangeably in casual conversation, but
                they&apos;re meaningfully different products with different handling requirements.
              </p>
              <InfoTable
                headers={["Feature", "Bitumen", "Bitumen Emulsion"]}
                rows={[
                  [
                    "Physical state",
                    "Semi-solid, needs heat to become workable",
                    "Liquid at ambient temperature",
                  ],
                  [
                    "Application temperature",
                    "150–190°C",
                    "10–70°C, no heating required",
                  ],
                  [
                    "Composition",
                    "Pure petroleum binder",
                    "~60% bitumen, ~40% water, plus emulsifier",
                  ],
                  [
                    "Storage",
                    "Heated tanks required for extended storage",
                    "Stable in sealed containers at ambient temperature, within shelf life",
                  ],
                  [
                    "Energy use",
                    "High — constant heating during storage and application",
                    "Low — no heating needed",
                  ],
                  [
                    "Typical use",
                    "Hot mix asphalt, roofing",
                    "Tack coats, prime coats, chip seals, cold mix",
                  ],
                  [
                    "Setting behavior",
                    "Cools and hardens",
                    "Water evaporates or charge neutralizes, then bitumen breaks and bonds",
                  ],
                ]}
              />
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                The short version: bitumen is the raw binder, and bitumen emulsion is an engineered,
                water-based delivery form of that same binder — built specifically to remove the heat
                requirement from certain applications. For a broader picture of the pure binder
                itself, our{" "}
                <Link
                  href="/blog/what-is-bitumen"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors font-medium"
                >
                  guide on what bitumen is
                </Link>{" "}
                covers composition, grades, and properties in full.
              </p>

              <SectionImage
                src="/bitumen-vs-bitumen-emulsion.webp"
                alt="Bitumen vs bitumen emulsion — side-by-side comparison of solid hot binder and cold water-based emulsion"
                caption="Left: plain bitumen requires heating to 150–190°C. Right: bitumen emulsion stays liquid at ambient temperature and needs no heating equipment"
              />
            </section>

            {/* ── SECTION: Types of Bitumen Emulsion ── */}
            <section id="types-of-bitumen-emulsion" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                Types of Bitumen Emulsion
              </h2>
              <p className="text-white/80 leading-relaxed mb-6 text-base">
                Bitumen emulsions are classified along two independent lines: the electrical charge
                of the bitumen droplets, and how quickly the emulsion sets after application.
                Understanding both is necessary to read an emulsion&apos;s grade code correctly.
              </p>

              {/* Subsection: Cationic vs Anionic */}
              <div id="cationic-vs-anionic" className="mb-8 scroll-mt-24">
                <h3 className="text-2xl font-black text-white mb-4">
                  By Electrical Charge: Cationic vs. Anionic
                </h3>
                <p className="text-white/80 leading-relaxed mb-4 text-base">
                  <strong className="text-white">Cationic emulsions</strong> carry a positive charge
                  on the bitumen droplets, created using an acidic emulsifier. Because most aggregate
                  surfaces carry a natural negative charge, cationic emulsions bond to them quickly
                  and strongly — the opposite charges attract on contact, which is part of why
                  cationic types tend to set faster. Grade codes for cationic emulsions carry a
                  &ldquo;C&rdquo; prefix, as in CRS-1 or CMS-2.
                </p>
                <p className="text-white/80 leading-relaxed mb-4 text-base">
                  <strong className="text-white">Anionic emulsions</strong> carry a negative charge,
                  created using an alkaline emulsifier. These are chosen when the aggregate itself is
                  alkaline, such as limestone or dolomite, since cationic emulsions don&apos;t bond
                  as effectively with that type of surface chemistry. Grade codes for anionic
                  emulsions carry no charge prefix — RS-1 is anionic, while CRS-1 is its cationic
                  counterpart.
                </p>
                <p className="text-white/80 leading-relaxed mb-6 text-base">
                  In practice, cationic emulsions dominate road construction in most regions today,
                  since siliceous aggregates — which carry a negative charge and pair naturally with
                  cationic binders — are far more commonly used than alkaline ones.
                </p>

                <SectionImage
                  src="/cationic-vs-anionic-bitumen-emulsion.webp"
                  alt="Cationic vs anionic bitumen emulsion — electrical charge difference and aggregate bonding mechanism"
                  caption="Cationic emulsions (positive charge) bond readily with negatively charged siliceous aggregate; anionic emulsions suit alkaline aggregate like limestone"
                />
              </div>

              {/* Subsection: Setting Speed */}
              <div id="setting-speed" className="mb-8 scroll-mt-24">
                <h3 className="text-2xl font-black text-white mb-4">
                  By Setting Speed: RS, MS, SS, QS
                </h3>
                <div className="space-y-4 mb-6">
                  {[
                    {
                      code: "RS",
                      label: "Rapid Setting",
                      color: "orange",
                      desc: "Breaks and cures quickly after application, ideal for tack coats and surface dressing where minimal road closure time matters.",
                    },
                    {
                      code: "MS",
                      label: "Medium Setting",
                      color: "teal",
                      desc: "Takes longer to break, giving more working time for mixing with aggregate before it sets. Common in cold mix and patching applications.",
                    },
                    {
                      code: "SS",
                      label: "Slow Setting",
                      color: "violet",
                      desc: "Designed for extended workability, often chosen for prime coats where the emulsion needs time to penetrate a porous granular base before setting.",
                    },
                    {
                      code: "QS",
                      label: "Quick Setting",
                      color: "blue",
                      desc: "Sets even faster than RS grades, used for specific fast-turnaround treatments like some slurry seals.",
                    },
                  ].map(({ code, label, color, desc }) => (
                    <div
                      key={code}
                      className={`flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-5 border-l-4 ${
                        color === "orange"
                          ? "border-l-orange-400"
                          : color === "teal"
                          ? "border-l-teal-400"
                          : color === "violet"
                          ? "border-l-violet-400"
                          : "border-l-blue-400"
                      }`}
                    >
                      <span
                        className={`font-black text-lg shrink-0 w-10 text-center ${
                          color === "orange"
                            ? "text-orange-400"
                            : color === "teal"
                            ? "text-teal-400"
                            : color === "violet"
                            ? "text-violet-400"
                            : "text-blue-400"
                        }`}
                      >
                        {code}
                      </span>
                      <div>
                        <strong className="text-white text-base">{label}</strong>
                        <p className="text-white/65 text-sm mt-0.5 leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Subsection: Grade Codes */}
              <div id="grade-codes" className="mb-8 scroll-mt-24">
                <h3 className="text-2xl font-black text-white mb-4">
                  Reading a Full Grade Code
                </h3>
                <p className="text-white/80 leading-relaxed mb-4 text-base">
                  A complete grade designation combines charge, setting speed, and a viscosity
                  number, sometimes with an added letter for base bitumen hardness. For example:
                </p>
                <InfoTable
                  headers={["Grade Code", "Charge", "Setting Speed", "Viscosity / Notes"]}
                  rows={[
                    ["RS-1", "Anionic", "Rapid Setting", "Lower viscosity — tack coats"],
                    [
                      "CRS-2",
                      "Cationic",
                      "Rapid Setting",
                      "Higher viscosity — surface dressing",
                    ],
                    [
                      "CSS-1h",
                      "Cationic",
                      "Slow Setting",
                      "Harder base bitumen ('h' suffix)",
                    ],
                    [
                      "HFMS-2",
                      "Anionic",
                      "Medium Setting",
                      "High-float — gel-like quality prevents binder drain-off",
                    ],
                  ]}
                />
                <p className="text-white/80 leading-relaxed mb-4 text-base">
                  Higher viscosity numbers (2 vs. 1) generally mean a thicker, heavier emulsion film
                  — RS-2, for instance, deposits more binder per application than RS-1, which is why
                  RS-1 suits tack coats and RS-2 suits surface dressing, where a heavier film is
                  needed to lock aggregate chips in place. Understanding these grade codes is closely
                  related to the broader system of{" "}
                  <Link
                    href="/blog/bitumen-grades-explained"
                    className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors font-medium"
                  >
                    bitumen grade classification
                  </Link>
                  , which covers penetration, VG, and PG grades used for hot mix binder selection.
                </p>
              </div>
            </section>

            {/* ── SECTION: Density ── */}
            <section id="bitumen-emulsion-density" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Bitumen Emulsion Density
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Bitumen emulsion density sits close to that of plain bitumen, since its two main
                ingredients — bitumen and water — have similar densities to begin with.
              </p>
              <InfoTable
                headers={["Material", "Typical Density Range"]}
                rows={[
                  [
                    "Bitumen emulsion",
                    "1.02 – 1.05 g/cm³ (1020 – 1050 kg/m³)",
                  ],
                  [
                    "Plain paving bitumen (60/70)",
                    "1.01 – 1.04 g/cm³ (1010 – 1040 kg/m³)",
                  ],
                  ["Water", "1.00 g/cm³ (1000 kg/m³)"],
                ]}
              />

              <SectionImage
                src="/bitumen-emulsion-density.webp"
                alt="Bitumen emulsion density measurement — laboratory density test of water-based bituminous binder"
                caption="Bitumen emulsion density typically ranges 1.02–1.05 g/cm³, very close to plain bitumen since water and bitumen have similar densities"
              />

              <p className="text-white/80 leading-relaxed mb-5 text-base">
                These figures are general reference ranges. Actual density varies by manufacturer,
                formulation, and the specific bitumen and emulsifier used, so always confirm exact
                values against the supplier&apos;s certificate of analysis before using them in
                material calculations. For a full breakdown of density across different bitumen grades
                and forms, see our{" "}
                <Link
                  href="/blog/bitumen-density-chart"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors font-medium"
                >
                  Bitumen Density Chart
                </Link>
                .
              </p>
            </section>

            {/* ── SECTION: How Bitumen Emulsion Is Made ── */}
            <section id="bitumen-emulsion-production" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                How Bitumen Emulsion Is Made (Bitumen Emulsion Plant)
              </h2>
              <p className="text-white/80 leading-relaxed mb-6 text-base">
                Bitumen emulsion production happens in a specialized piece of equipment called a{" "}
                <strong className="text-white">colloid mill</strong>, and the process follows a
                consistent sequence regardless of scale.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  {
                    step: "01",
                    title: "Heating the bitumen",
                    desc: "Raw bitumen is heated to roughly 100–140°C, enough to reduce its viscosity so it can be pumped and processed, without overheating to the point of damaging the binder or generating excess fumes.",
                  },
                  {
                    step: "02",
                    title: "Preparing the water phase",
                    desc: "Water is mixed with the emulsifier and, for cationic emulsions, an acid, at a carefully controlled pH. This phase is kept below about 90°C to prevent boiling once combined with the hot bitumen.",
                  },
                  {
                    step: "03",
                    title: "Feeding both phases into the colloid mill",
                    desc: "The hot bitumen and the water/emulsifier phase are fed into the mill simultaneously through separate inlets.",
                  },
                  {
                    step: "04",
                    title: "Shearing into droplets",
                    desc: "Inside the mill, a high-speed rotor spins within a narrow gap next to a stationary housing. The intense shear force tears the bitumen into microscopic droplets, typically 1 to 10 microns across.",
                  },
                  {
                    step: "05",
                    title: "Charging the droplets",
                    desc: "As the bitumen breaks apart, the emulsifier coats each droplet and gives it its electrical charge, which is what keeps the droplets from re-merging in storage.",
                  },
                  {
                    step: "06",
                    title: "Cooling and storage",
                    desc: "The finished emulsion is cooled and moved to storage tanks, typically kept between about 10°C and 50°C depending on the grade.",
                  },
                ].map(({ step, title, desc }) => (
                  <div
                    key={step}
                    className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-4"
                  >
                    <span className="text-teal-400 font-black text-lg shrink-0 w-8">
                      {step}
                    </span>
                    <div>
                      <strong className="text-white text-base">{title}</strong>
                      <p className="text-white/65 text-sm mt-0.5 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <SectionImage
                src="/bitumen-emulsion-colloid-mill-production.webp"
                alt="Bitumen emulsion colloid mill production — high-speed rotor shearing bitumen into microscopic droplets"
                caption="Inside a colloid mill, a high-speed rotor shears hot bitumen into 1–10 micron droplets within the water-emulsifier phase"
              />

              <p className="text-white/80 leading-relaxed mb-5 text-base">
                A bitumen emulsion plant can run as a <strong className="text-white">batch
                process</strong>, mixing a fixed quantity at a time, or as a{" "}
                <strong className="text-white">continuous in-line process</strong>, where bitumen and
                water phases are drawn directly from storage tanks and blended on the fly. Larger
                commercial operations typically favor continuous production for consistency and
                throughput, while smaller or specialty producers often use batch systems.
              </p>
              <p className="text-white/80 leading-relaxed text-base">
                According to the{" "}
                <a
                  href="https://asphaltinstitute.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                >
                  Asphalt Institute
                  <ExternalLink size={12} className="inline ml-0.5 mb-0.5" />
                </a>
                , emulsion manufacturing consistency — particularly droplet size distribution and
                emulsifier concentration — directly determines how the finished product will behave
                on site, making process control critical in any bitumen emulsion plant.
              </p>
            </section>

            {/* ── SECTION: What Is Bitumen Emulsion Used For? ── */}
            <section id="bitumen-emulsion-uses" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                What Is Bitumen Emulsion Used For?
              </h2>
              <p className="text-white/80 leading-relaxed mb-6 text-base">
                Bitumen emulsion&apos;s ability to work without heat makes it suitable for a wide range
                of road and construction applications. Each application requires a specific grade
                matched to the job&apos;s setting speed and binder film thickness requirements.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {[
                  {
                    title: "Tack Coats",
                    desc: "A thin layer applied between asphalt lifts to bond them together. Typically RS-1 or CRS-1 — rapid-setting and low-viscosity to penetrate quickly without excess pooling.",
                    color: "orange",
                  },
                  {
                    title: "Prime Coats",
                    desc: "Applied to a granular base before the first bituminous layer. Usually a slow-setting grade like SS-1, chosen for its ability to penetrate a porous surface before setting.",
                    color: "teal",
                  },
                  {
                    title: "Chip Seals & Surface Dressing",
                    desc: "A heavier-film rapid-setting grade (RS-2 or CRS-2) sprayed onto the road surface with aggregate chips pressed in immediately after.",
                    color: "violet",
                  },
                  {
                    title: "Slurry Seals & Microsurfacing",
                    desc: "Thin, protective surface treatments that extend pavement life without a full resurfacing, commonly used on urban roads and parking areas.",
                    color: "blue",
                  },
                  {
                    title: "Cold Mix Asphalt",
                    desc: "Emulsion-coated aggregate used for pothole repair, patching, and low-traffic road construction — stays workable without a hot mix plant.",
                    color: "orange",
                  },
                  {
                    title: "Soil Stabilization & Waterproofing",
                    desc: "Mixed into granular material to improve binding and reduce dust on unpaved surfaces, or used as a cold-applied barrier against moisture on structures.",
                    color: "teal",
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

              <SectionImage
                src="/bitumen-emulsion-road-applications.webp"
                alt="Bitumen emulsion road applications — tack coat, prime coat, chip seal, and cold mix asphalt construction"
                caption="Bitumen emulsion is used across tack coats, prime coats, chip seals, and cold mix patching — all without heating equipment"
              />

              <p className="text-white/80 leading-relaxed text-base">
                For projects involving cold mix or emulsion-based surface treatments, estimating
                material quantities upfront avoids over-ordering and site delays. Our free{" "}
                <Link
                  href="/"
                  className="text-orange-400 hover:text-orange-300 underline underline-offset-2 transition-colors font-medium"
                >
                  Fast Bitumen Calculator
                </Link>{" "}
                can help you estimate binder quantities for tack coat, prime coat, and emulsion-based
                projects quickly.
              </p>
            </section>

            {/* ── SECTION: Advantages ── */}
            <section id="advantages" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                Advantages of Bitumen Emulsion
              </h2>
              <div className="bg-teal-500/10 border border-teal-400/20 rounded-2xl p-6 md:p-8 mb-6">
                <ul className="space-y-3">
                  {[
                    "No heating equipment required, which removes a major cost, energy, and safety burden compared to hot bitumen",
                    "Lower energy consumption, since nothing needs to stay hot during storage or application",
                    "Reduced fire and burn risk — crews work with a cool, water-based material rather than bitumen heated to 150°C or higher",
                    "Lower fume exposure, since there's no thermal degradation of the binder during application the way there is with hot bitumen",
                    "Works with damp aggregate, unlike hot mix, which generally needs dry material for proper coating",
                    "Versatile across applications, from thin surface treatments to full cold mix production, by simply changing the grade",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-white/80 text-sm leading-relaxed"
                    >
                      <CheckCircle2
                        size={15}
                        className="text-teal-400 mt-0.5 shrink-0"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-white/80 leading-relaxed text-base">
                These advantages are especially meaningful for maintenance work, where road crews
                often need to repair potholes or apply tack coats quickly without the logistics of a
                full hot plant. This is the same reason{" "}
                <Link
                  href="/blog/cold-mix-bitumen"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors font-medium"
                >
                  cold mix bitumen
                </Link>{" "}
                — which relies on emulsified or cutback binder — has become standard for emergency
                repairs and low-traffic construction.
              </p>
            </section>

            {/* ── SECTION: Video ── */}
            <section id="video" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Bitumen Emulsion Explained: Video Overview
              </h2>
              <p className="text-white/80 leading-relaxed mb-6 text-base">
                Watch the video below for a visual walkthrough of how bitumen emulsion is made,
                classified, and applied in road construction — covering the colloid mill process and
                cationic vs. anionic types in under 15 minutes.
              </p>
              <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-black/40 not-prose">
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    src="https://www.youtube.com/embed/97cSN579hM8?si=7zsb-VuCo-5s0zHY"
                    title="Bitumen Emulsion Explained — Types, Production and Road Applications"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    loading="lazy"
                    className="absolute inset-0 w-full h-full rounded-2xl"
                  />
                </div>
              </div>
              <p className="mt-3 text-center text-sm text-white/45 italic">
                Video: Bitumen emulsion explained — types, colloid mill production, and road
                construction applications
              </p>
            </section>

            {/* ── SECTION: Storage and Shelf Life ── */}
            <section id="storage-shelf-life" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                Bitumen Emulsion Storage and Shelf Life
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Bitumen emulsion is generally stable for a defined shelf life when stored correctly —
                typically around <strong className="text-white">10°C to 50°C</strong>, sealed away
                from freezing temperatures and excessive heat. Freezing can permanently break the
                emulsion prematurely, separating the bitumen from the water before it&apos;s ever
                applied, while temperatures that run too high for extended periods can also
                destabilize it.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                {[
                  {
                    icon: <Zap size={20} className="text-orange-400" />,
                    title: "Typical Shelf Life",
                    desc: "Around 12 months when stored correctly in sealed containers at recommended temperatures.",
                    color: "orange",
                  },
                  {
                    icon: <AlertCircle size={20} className="text-red-400" />,
                    title: "Freezing Risk",
                    desc: "Freezing permanently separates the emulsion — once broken prematurely, it cannot be re-emulsified for use.",
                    color: "red",
                  },
                  {
                    icon: <CheckCircle2 size={20} className="text-teal-400" />,
                    title: "Before Use",
                    desc: "Drums should be rolled or gently agitated before use to ensure bitumen droplets remain evenly distributed.",
                    color: "teal",
                  },
                ].map(({ icon, title, desc, color }) => (
                  <div
                    key={title}
                    className={`bg-white/5 border border-white/10 rounded-xl p-5 border-t-2 ${
                      color === "orange"
                        ? "border-t-orange-400"
                        : color === "red"
                        ? "border-t-red-400"
                        : "border-t-teal-400"
                    }`}
                  >
                    <div className="mb-2">{icon}</div>
                    <strong className="text-white text-sm block mb-1">{title}</strong>
                    <p className="text-white/60 text-xs leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── SECTION: Final Verdict ── */}
            <section id="conclusion" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Final Verdict
              </h2>
              <div className="bg-gradient-to-br from-teal-500/15 via-blue-600/10 to-purple-600/10 border border-white/15 rounded-2xl p-6 md:p-8">
                <p className="text-white/85 leading-relaxed mb-4 text-base">
                  Bitumen emulsion takes the same binder used in hot mix asphalt and re-engineers it
                  into a water-based, cold-applied form by suspending microscopic bitumen droplets in
                  water with an emulsifier. Its classification by charge (cationic or anionic) and
                  setting speed (RS, MS, SS) determines exactly which job it&apos;s suited for, from
                  tack coats to chip seals to cold mix asphalt. Produced in a colloid mill and stored
                  at moderate temperatures, it delivers most of what plain bitumen offers while
                  cutting the energy, safety, and handling demands that come with working hot.
                </p>
                <p className="text-white/85 leading-relaxed mb-4 text-base">
                  For a broader introduction to bitumen itself, see our guide on{" "}
                  <Link
                    href="/blog/what-is-bitumen"
                    className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors font-medium"
                  >
                    what bitumen is
                  </Link>
                  . For grade selection across bitumen types, see our{" "}
                  <Link
                    href="/blog/bitumen-grades-explained"
                    className="text-orange-400 hover:text-orange-300 underline underline-offset-2 transition-colors font-medium"
                  >
                    Bitumen Grades Explained guide
                  </Link>
                  . For density values across grades, see the{" "}
                  <Link
                    href="/blog/bitumen-density-chart"
                    className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors font-medium"
                  >
                    Bitumen Density Chart
                  </Link>
                  . To estimate quantities for a tack coat, prime coat, or emulsion-based project,
                  try our free{" "}
                  <Link
                    href="/"
                    className="text-orange-400 hover:text-orange-300 underline underline-offset-2 transition-colors font-medium"
                  >
                    Bitumen Calculator
                  </Link>
                  .
                </p>
                <p className="text-white/80 leading-relaxed text-sm">
                  For authoritative technical specifications on bitumen emulsion grades and test
                  methods, the{" "}
                  <a
                    href="https://www.fhwa.dot.gov/pavement/asphalt/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                  >
                    Federal Highway Administration (FHWA)
                    <ExternalLink size={11} className="inline ml-0.5 mb-0.5" />
                  </a>{" "}
                  publishes detailed pavement engineering guidance, including emulsion specifications
                  for federal road projects.
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
                    q: "What is the difference between bitumen and bitumen emulsion?",
                    a: "Bitumen is the raw petroleum binder that needs heat to become workable. Bitumen emulsion is that same binder broken into microscopic droplets and suspended in water with an emulsifier, so it stays workable at normal outdoor temperature without any heating.",
                  },
                  {
                    q: "What are the main types of bitumen emulsion?",
                    a: "Emulsions are classified by electrical charge (cationic or anionic) and by setting speed (rapid, medium, or slow setting), giving combinations like CRS-1, MS-2, or SS-1, each suited to different applications.",
                  },
                  {
                    q: "Is cationic or anionic bitumen emulsion better?",
                    a: "Neither is universally better — it depends on the aggregate. Cationic emulsions bond well with most common aggregate types, while anionic emulsions are chosen for alkaline aggregate like limestone or dolomite.",
                  },
                  {
                    q: "What is the density of bitumen emulsion?",
                    a: "Typically around 1.02–1.05 g/cm³ (1020–1050 kg/m³), close to plain bitumen, since both bitumen and water — its two main components — have similar densities.",
                  },
                  {
                    q: "How is bitumen emulsion made?",
                    a: "It's produced in a colloid mill, where heated bitumen and a water-emulsifier mixture are fed in together and sheared into microscopic droplets under intense mechanical force, then cooled and stored.",
                  },
                  {
                    q: "Can bitumen emulsion be used instead of hot bitumen for all applications?",
                    a: "No. It's well suited to tack coats, prime coats, surface treatments, and cold mix, but it doesn't match the strength and durability of hot mix asphalt for new road construction or high-traffic pavement.",
                  },
                  {
                    q: "Are there alternatives to bitumen?",
                    a: "Some road projects use alternative binders such as bio-based binders, sulfur-extended asphalt, or binders incorporating recycled plastic, though these remain less common than conventional bitumen and bitumen emulsion.",
                  },
                  {
                    q: "Does bitumen emulsion expire?",
                    a: "Yes. It has a defined shelf life, commonly around 12 months when stored correctly, and can degrade or separate prematurely if frozen, overheated, or stored past its rated shelf life.",
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
                <ArrowLeft
                  size={16}
                  className="group-hover:-translate-x-1 transition-transform"
                />
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

          {/* ── SIDEBAR: Table of Contents ── */}
          
        </div>
      </div>
    </>
  );
}
