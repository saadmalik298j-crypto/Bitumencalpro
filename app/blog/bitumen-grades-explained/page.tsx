import AuthorBio from "../../components/AuthorBio";
// app/blog/bitumen-grades-explained/page.tsx
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
  Layers,
} from "lucide-react";

// ── Metadata ──────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Bitumen Grades Explained: Penetration, VG & PG Guide",
  description:
    "Understand bitumen grades — penetration grade (60/70, 80/100), viscosity grade (VG10–VG40), and performance grade (PG) — and learn how to choose the right one for climate and traffic.",
  keywords: [
    "bitumen grades",
    "penetration grade bitumen",
    "VG30 bitumen",
    "VG40 bitumen",
    "performance grade bitumen",
    "PG bitumen",
    "60/70 bitumen",
    "80/100 bitumen",
    "viscosity grade bitumen",
    "bitumen grade selection",
    "bitumen grading system",
    "VG10 VG20 VG30 VG40",
  ],
  alternates: {
    canonical: "https://bitumencalcpro.com/blog/bitumen-grades-explained",
  },
  openGraph: {
    title: "Bitumen Grades Explained: Penetration, VG & PG | BitumenCalcPro",
    description:
      "Understand bitumen grades — penetration grade (60/70, 80/100), viscosity grade (VG10–VG40), and performance grade (PG) — and learn how to choose the right one for climate and traffic.",
    url: "https://bitumencalcpro.com/blog/bitumen-grades-explained",
    siteName: "BitumenCalcPro",
    type: "article",
    publishedTime: "2026-08-09T00:00:00.000Z",
    authors: ["BitumenCalcPro"],
    images: [
      {
        url: "/bitumen-grades-explained-penetration-vg-pg.webp",
        width: 1200,
        height: 630,
        alt: "Bitumen grades explained — penetration, viscosity and performance grade overview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bitumen Grades Explained: Penetration, VG & PG Guide",
    description:
      "Penetration grade, VG10–VG40, and PG bitumen explained — including how to pick the right grade for your climate and traffic conditions.",
    images: ["/bitumen-grades-explained-penetration-vg-pg.webp"],
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
    "Bitumen Grades Explained: Penetration, VG, PG & How to Choose the Right One",
  description:
    "Understand bitumen grades — penetration grade (60/70, 80/100), viscosity grade (VG10–VG40), and performance grade (PG) — and learn how to choose the right one for climate and traffic.",
  image:
    "https://bitumencalcpro.com/bitumen-grades-explained-penetration-vg-pg.webp",
  datePublished: "2026-08-09T00:00:00.000Z",
  dateModified: "2026-08-09T00:00:00.000Z",
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
    "@id": "https://bitumencalcpro.com/blog/bitumen-grades-explained",
  },
  keywords:
    "bitumen grades, penetration grade bitumen, VG30, VG40, performance grade PG bitumen, 60/70 bitumen, viscosity grade bitumen, bitumen grade selection",
  articleSection: "Bitumen Properties & Testing",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does bitumen grade 60/70 mean?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It means a needle penetrates between 60 and 70 tenths of a millimeter into the bitumen sample under standardized test conditions at 25°C. It's a mid-range penetration grade suited to general-purpose paving.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between VG30 and VG40 bitumen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "VG40 is stiffer and more viscous than VG30, making it better suited to hot climates and heavy traffic, while VG30 is the more general-purpose grade used across standard road construction.",
      },
    },
    {
      "@type": "Question",
      name: "How do I read a PG grade like PG 64-22?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The first number (64) is the highest average pavement temperature the binder resists rutting at; the second number (-22) is the lowest temperature it resists cracking at.",
      },
    },
    {
      "@type": "Question",
      name: "Which bitumen grade is best for road construction?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There's no single best grade — it depends on climate and traffic. VG30 is a common general-purpose choice in moderate climates, but hot, high-traffic regions often need VG40 or a higher PG grade.",
      },
    },
    {
      "@type": "Question",
      name: "Can I substitute VG30 for 60/70 penetration grade bitumen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In many cases yes, since VG30 is often used as an equivalent replacement for 60/70 during a regional transition between grading systems, but always confirm against the specific project's governing specification.",
      },
    },
    {
      "@type": "Question",
      name: "Why did viscosity grading replace penetration grading in some regions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Because penetration grading only tests at one temperature (25°C) and doesn't reliably predict how bitumen performs at real pavement temperatures in hot weather, which viscosity grading measures more directly at 60°C.",
      },
    },
    {
      "@type": "Question",
      name: "What grade of bitumen is used for roofing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Roofing typically uses oxidized (blown) bitumen rather than standard paving grades, since air-blowing raises its softening point for better performance in membrane and waterproofing applications.",
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
      name: "Bitumen Grades Explained",
      item: "https://bitumencalcpro.com/blog/bitumen-grades-explained",
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

// ── Page ─────────────────────────────────────────────────
export default function BitumenGradesExplainedPage() {
  return (
    <>
      <Script
        id="schema-article-grades"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="schema-faq-grades"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="schema-breadcrumb-grades"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ── HERO BAND ── */}
      <div className="relative pt-16 pb-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 to-orange-600/10 pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-orange-500/10 blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full bg-teal-500/10 blur-[80px] pointer-events-none" />

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
              Bitumen Grades Explained
            </span>
          </nav>

          {/* Category badge */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="inline-flex items-center gap-1.5 bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
              <Layers size={12} />
              Bitumen Properties &amp; Testing
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-6 max-w-4xl">
            Bitumen Grades Explained: Penetration, VG, PG &amp; How to Choose
            the Right One
          </h1>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-4 text-white/50 text-sm mb-10">
            <span className="flex items-center gap-1.5">
              <Calendar size={13} />
              <time dateTime="2026-08-09">August 9, 2026</time>
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

      {/* ── HERO IMAGE ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionImage
          src="/bitumen-grades-explained-penetration-vg-pg.webp"
          alt="Bitumen grades overview — penetration grade, viscosity grade VG and performance grade PG systems compared"
          caption="Three grading systems, one goal: matching bitumen behavior to climate and traffic"
          priority
        />
      </div>

      {/* ── ARTICLE BODY + SIDEBAR ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24">
        <div className="flex flex-col xl:flex-row gap-12 items-start">

          {/* ── MAIN CONTENT ── */}
          <article className="flex-1 min-w-0">

            {/* Quick Answer */}
            <div className="mb-10 bg-gradient-to-br from-teal-500/15 to-teal-600/10 border border-teal-400/25 rounded-2xl p-6 md:p-8">
              <h2 className="text-lg font-black text-teal-300 mb-3 flex items-center gap-2">
                <CheckCircle2 size={18} />
                Quick Answer
              </h2>
              <p className="text-white/85 leading-relaxed text-base">
                Bitumen grades classify binder by hardness or flow behavior so engineers can match
                it to climate and traffic. The main systems are{" "}
                <strong className="text-white">penetration grade</strong> (60/70, 80/100),{" "}
                <strong className="text-white">viscosity grade</strong> (VG10–VG40), and{" "}
                <strong className="text-white">performance grade</strong> (PG 64-22 and similar).
                Softer grades suit cold climates and light traffic; harder or higher grades suit
                hot climates and heavy loads.
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
                    { id: "what-are-bitumen-grades", label: "What Are Bitumen Grades?" },
                    { id: "penetration-grade", label: "Penetration Grade" },
                    { id: "viscosity-grade", label: "Viscosity Grade (VG)" },
                    { id: "performance-grade", label: "Performance Grade (PG)" },
                    { id: "other-bitumen-types", label: "Other Bitumen Types" },
                    { id: "how-to-choose", label: "How to Choose a Grade" },
                    { id: "comparison", label: "Penetration vs VG vs PG" },
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



            {/* ── SECTION: What Are Bitumen Grades? ── */}
            <section id="what-are-bitumen-grades" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                What Are Bitumen Grades?
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Bitumen grades are a classification system that tells engineers and contractors how
                a specific batch of{" "}
                <Link
                  href="/blog/what-is-bitumen"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors font-medium"
                >
                  bitumen
                </Link>{" "}
                will behave — how hard it is, how it flows when heated, and how it performs across
                different temperatures. Since bitumen used on a highway in a hot desert needs
                completely different properties than bitumen used on a mountain road that freezes
                every winter, grading exists so the right binder gets matched to the right job
                every time.
              </p>
              <p className="text-white/80 leading-relaxed text-base">
                Three main grading systems are used around the world today: penetration grade,
                viscosity grade (VG), and performance grade (PG). Each one measures a different
                property, was developed to fix a limitation in the system before it, and remains
                standard in different regions or applications.
              </p>
            </section>

            {/* ── SECTION: Penetration Grade ── */}
            <section id="penetration-grade" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Penetration Grade Bitumen
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Penetration grading is the oldest and simplest classification method, and it&apos;s
                still the most widely referenced grading label even in regions that have moved to
                newer systems.
              </p>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                The test is straightforward: a needle weighing 100 grams is lowered onto a bitumen
                sample held at 25°C, and the depth it sinks in 5 seconds is measured in tenths of a
                millimeter (dmm). A &ldquo;60/70&rdquo; bitumen means the needle penetrates between
                60 and 70 dmm under these conditions. Lower numbers mean a harder, stiffer bitumen;
                higher numbers mean a softer one.
              </p>

              {/* Image 2 — Penetration grade needle test */}
              <SectionImage
                src="/penetration-grade-bitumen-60-70-test.webp"
                alt="Penetration grade bitumen 60/70 needle test — measuring needle depth in tenths of a millimeter at 25°C"
                caption="The penetration needle test: a 100 g needle drops for 5 seconds at 25°C — the sinking depth (in dmm) defines the grade"
              />

              <p className="text-white/80 leading-relaxed mb-4 text-base">
                Common penetration grades and their typical applications:
              </p>
              <InfoTable
                headers={["Grade", "Relative Hardness", "Typical Use"]}
                rows={[
                  ["30/40", "Very hard", "Hot climates, heavy traffic"],
                  ["40/50", "Hard", "Hot regions, high-traffic roads"],
                  ["60/70", "Medium", "General-purpose paving, moderate climates"],
                  ["80/100", "Soft", "Cooler climates, lighter traffic"],
                  ["120/150", "Very soft", "Cold regions, surface treatments"],
                ]}
              />

              <p className="text-white/80 leading-relaxed text-base">
                Penetration grading works well for basic classification, but it has a real
                limitation: it only measures behavior at one fixed temperature. Two bitumens with
                the same penetration value at 25°C can behave very differently once actual pavement
                temperatures swing from freezing in winter to 60°C or more on a hot summer road
                surface. This gap is exactly what the viscosity grading system was built to close.
              </p>
            </section>

            {/* ── SECTION: Viscosity Grade ── */}
            <section id="viscosity-grade" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                Viscosity Grade (VG) Bitumen
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Viscosity grading measures how bitumen flows at 60°C — a temperature much closer to
                what a real road surface experiences in hot weather — rather than relying on a single
                room-temperature needle test. This gives a more dependable prediction of how a
                binder will resist rutting once it&apos;s actually carrying traffic in the heat.
              </p>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                VG bitumen is classified into four grades. This system, standardized in India under
                IS&nbsp;73:2013, has become one of the most widely used viscosity-based
                classifications globally, and it&apos;s closely aligned with the guidelines
                published by the{" "}
                <a
                  href="https://asphaltinstitute.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                >
                  Asphalt Institute
                  <ExternalLink size={12} className="inline ml-0.5 mb-0.5" />
                </a>
                .
              </p>

              <InfoTable
                headers={[
                  "Grade",
                  "Min. Penetration at 25°C",
                  "Absolute Viscosity at 60°C",
                  "Best Suited For",
                ]}
                rows={[
                  ["VG10", "80 dmm", "800–1,200 poise", "Cold climates, spraying, surface dressing"],
                  ["VG20", "60 dmm", "1,600–2,400 poise", "Moderate climates, average traffic"],
                  ["VG30", "45 dmm", "2,400–3,600 poise", "General road construction, standard traffic"],
                  ["VG40", "35 dmm", "3,200–4,800 poise", "Hot climates, heavy traffic, high-stress areas"],
                ]}
              />

              {/* Image 3 — VG10–VG40 comparison */}
              <SectionImage
                src="/vg10-vg20-vg30-vg40-bitumen-grades.webp"
                alt="VG10, VG20, VG30, VG40 viscosity grade bitumen comparison — hardness, viscosity, and application overview"
                caption="VG10 through VG40: from the softest cold-climate grade to the stiffest grade reserved for heavy-traffic hot zones"
              />

              <p className="text-white/80 leading-relaxed mb-5 text-base">
                VG10 is the softest and most flexible, making it a natural fit for cold or
                high-altitude regions, prime coats, and tack coats where good wetting and easy
                spraying matter more than stiffness. VG30 sits in the middle and has become the
                default choice for standard highway construction in moderate climates, since it
                balances workability with enough stiffness to resist deformation. VG40 is the
                stiffest of the four, reserved for hot climates and heavy-traffic zones like toll
                booths, bus lanes, and intersections where vehicles accelerate and brake repeatedly.
              </p>
              <p className="text-white/80 leading-relaxed text-base">
                A useful rule of thumb: VG30 is often used as a like-for-like replacement for 60/70
                penetration grade, and VG10 for 80/100, in regions transitioning between the two
                systems. Once you have confirmed the right VG grade, our free{" "}
                <Link
                  href="/"
                  className="text-orange-400 hover:text-orange-300 underline underline-offset-2 transition-colors font-medium"
                >
                  Bitumen Calculator
                </Link>{" "}
                can estimate the exact quantity needed for any road project in seconds.
              </p>
            </section>

            {/* ── SECTION: Performance Grade ── */}
            <section id="performance-grade" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Performance Grade (PG) Bitumen
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Performance grading takes a different approach entirely. Instead of classifying
                bitumen by a lab measurement at a fixed temperature, PG grading is built directly
                around the actual high and low pavement temperatures a road will experience over its
                service life. It was developed in the United States under the{" "}
                <a
                  href="https://www.fhwa.dot.gov/pavement/asphalt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                >
                  Strategic Highway Research Program (SHRP)
                  <ExternalLink size={12} className="inline ml-0.5 mb-0.5" />
                </a>{" "}
                specifically to reduce the gap between lab test results and real-world pavement
                failure.
              </p>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                A PG grade reads as two numbers, such as{" "}
                <strong className="text-white">PG&nbsp;64-22</strong>:
              </p>

              {/* PG grade visual cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 not-prose">
                <div className="bg-orange-500/10 border border-orange-400/20 rounded-xl p-5 border-l-4 border-l-orange-400">
                  <p className="text-orange-300 font-black text-2xl mb-1">64</p>
                  <p className="text-white font-bold mb-1 text-sm">High Temperature</p>
                  <p className="text-white/65 text-sm leading-relaxed">
                    The average seven-day maximum pavement temperature the binder can handle
                    without excessive rutting.
                  </p>
                </div>
                <div className="bg-teal-500/10 border border-teal-400/20 rounded-xl p-5 border-l-4 border-l-teal-400">
                  <p className="text-teal-300 font-black text-2xl mb-1">-22</p>
                  <p className="text-white font-bold mb-1 text-sm">Low Temperature</p>
                  <p className="text-white/65 text-sm leading-relaxed">
                    The minimum pavement temperature the binder can handle without thermal
                    cracking.
                  </p>
                </div>
              </div>

              {/* Image 4 — PG 64-22 climate */}
              <SectionImage
                src="/pg-64-22-bitumen-performance-grade-climate.webp"
                alt="PG 64-22 bitumen performance grade — climate temperature range showing rutting resistance at 64°C and cracking resistance at minus 22°C"
                caption="PG 64-22 maps directly to climate: engineered to resist rutting at 64°C summer highs and cracking at −22°C winter lows"
              />

              <p className="text-white/80 leading-relaxed text-base">
                Engineers select the PG grade based on regional climate data and expected traffic
                loading, which makes this system especially useful for large infrastructure projects
                where failure risk needs to be minimized across an entire temperature range, not
                just checked at one reference point.
              </p>
            </section>

            {/* ── SECTION: Other Bitumen Types ── */}
            <section id="other-bitumen-types" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                Other Bitumen Types by Formulation
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Beyond the three main grading systems, bitumen is also classified by how it&apos;s
                formulated for specific applications rather than by hardness or viscosity alone.
              </p>

              {[
                {
                  title: "Paving grade bitumen",
                  desc: "The standard refined binder used directly in hot mix asphalt — what the grading systems above all describe.",
                  color: "teal",
                },
                {
                  title: "Cutback bitumen",
                  desc: "Thinned with a volatile solvent so it stays workable at lower temperatures, common for prime coats and cold-weather spraying.",
                  color: "orange",
                },
                {
                  title: "Bitumen emulsion",
                  desc: "Bitumen dispersed in water for ambient-temperature application, widely used in tack coats and cold mix applications — our dedicated guide covers ",
                  color: "violet",
                  link: true,
                },
                {
                  title: "Polymer modified bitumen (PMB)",
                  desc: "Blended with polymers to improve elasticity, rutting resistance, and fatigue life under heavy or repeated loading.",
                  color: "blue",
                },
                {
                  title: "Oxidized (blown) bitumen",
                  desc: "Air-blown to raise its softening point, mainly used in roofing and damp-proofing rather than roads.",
                  color: "orange",
                },
              ].map(({ title, desc, color, link }) => (
                <div
                  key={title}
                  className={`mb-4 bg-white/5 border border-white/10 rounded-2xl p-5 border-l-4 hover:bg-white/[0.08] transition-colors ${
                    color === "orange"
                      ? "border-l-orange-400"
                      : color === "teal"
                      ? "border-l-teal-400"
                      : color === "violet"
                      ? "border-l-violet-400"
                      : "border-l-blue-400"
                  }`}
                >
                  <h3 className="text-white font-bold mb-1.5 text-base">{title}</h3>
                  <p className="text-white/65 text-sm leading-relaxed">
                    {link ? (
                      <>
                        {desc}
                        <Link
                          href="/blog/cold-mix-bitumen"
                          className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                        >
                          cold mix bitumen in depth
                        </Link>
                        .
                      </>
                    ) : (
                      desc
                    )}
                  </p>
                </div>
              ))}

              <p className="text-white/80 leading-relaxed text-base mt-2">
                These categories can overlap with the grading systems above — a PMB, for example,
                still has an underlying viscosity or penetration grade before modification, but the
                added polymers change how it performs beyond what the base grade alone would
                predict.
              </p>
            </section>

            {/* ── SECTION: How to Choose ── */}
            <section id="how-to-choose" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                How to Choose the Right Bitumen Grade
              </h2>
              <p className="text-white/80 leading-relaxed mb-6 text-base">
                Selecting a grade comes down to matching the binder&apos;s temperature behavior to
                the conditions it will actually face.
              </p>

              {/* Image 5 — Choosing the correct grade */}
              <SectionImage
                src="/choosing-bitumen-grade-climate-traffic-road.webp"
                alt="Choosing the right bitumen grade based on climate temperature, traffic load and road type"
                caption="Grade selection is driven by three factors: climate temperature range, traffic loading, and the application type"
              />

              <div className="space-y-3 mb-6">
                {[
                  {
                    num: "01",
                    title: "Check the climate",
                    desc: "Hot regions need stiffer, higher-viscosity grades to resist rutting; cold regions need softer grades to avoid thermal cracking.",
                  },
                  {
                    num: "02",
                    title: "Assess the traffic load",
                    desc: "Heavy, slow-moving, or channelized traffic — bus lanes, intersections, ports — benefits from stiffer grades or PMB.",
                  },
                  {
                    num: "03",
                    title: "Confirm the application",
                    desc: "Road paving, prime coats, surface dressing, and roofing all call for different formulations, not just different hardness levels.",
                  },
                  {
                    num: "04",
                    title: "Follow local specifications",
                    desc: "National and regional road authorities typically mandate a specific grading system and grade range for public infrastructure — always check the governing standard before ordering.",
                  },
                  {
                    num: "05",
                    title: "Consider mixing and compaction temperatures",
                    desc: "Softer grades are easier to work with at lower plant temperatures, which can matter for smaller operations or remote sites.",
                  },
                ].map(({ num, title, desc }) => (
                  <div
                    key={num}
                    className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-4"
                  >
                    <span className="text-orange-400 font-black text-lg shrink-0 w-8">{num}</span>
                    <div>
                      <strong className="text-white text-base">{title}</strong>
                      <p className="text-white/65 text-sm mt-0.5 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-orange-500/10 border border-orange-400/25 rounded-2xl p-5 md:p-6">
                <p className="text-white/85 text-sm leading-relaxed">
                  <strong className="text-orange-300">Worth noting:</strong> Using the wrong grade
                  is one of the more common — and entirely preventable — causes of early pavement
                  failure. A binder too soft for the local climate softens further in summer heat
                  and leads to rutting; one too stiff for winter lows becomes brittle and cracks.
                  Getting the grade right at the specification stage costs nothing extra and prevents
                  expensive repairs later. Pair your grade selection with our{" "}
                  <Link
                    href="/blog/bitumen-density-chart"
                    className="text-orange-400 hover:text-orange-300 underline underline-offset-2 transition-colors"
                  >
                    bitumen density reference chart
                  </Link>{" "}
                  to verify grade-specific properties during quantity estimation.
                </p>
              </div>
            </section>

            {/* ── SECTION: Quick Comparison Table ── */}
            <section id="comparison" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                Penetration vs. VG vs. PG: Quick Comparison
              </h2>
              <p className="text-white/80 leading-relaxed mb-4 text-base">
                Each grading system has its strengths. Here is how they sit side by side when
                making a specification decision:
              </p>

              {/* Image 6 — Penetration vs VG vs PG */}
              <SectionImage
                src="/penetration-vs-vg-vs-pg-bitumen-comparison.webp"
                alt="Penetration grade vs viscosity grade VG vs performance grade PG bitumen — side-by-side comparison table visual"
                caption="Penetration, VG, and PG grading systems compared across test method, temperature scope, and best-fit applications"
              />

              <InfoTable
                headers={[
                  "Factor",
                  "Penetration Grade",
                  "Viscosity Grade (VG)",
                  "Performance Grade (PG)",
                ]}
                rows={[
                  [
                    "What it measures",
                    "Hardness via needle test",
                    "Flow resistance at 60°C",
                    "Actual pavement temperature range",
                  ],
                  [
                    "Test temperature",
                    "25°C only",
                    "60°C (and often 135°C)",
                    "Based on regional climate data",
                  ],
                  [
                    "Accounts for temperature swings",
                    "No",
                    "Partially",
                    "Yes, directly",
                  ],
                  [
                    "Common region",
                    "Traditional, widespread",
                    "India and similar markets",
                    "United States and similar markets",
                  ],
                  [
                    "Best for",
                    "Simple, general classification",
                    "Predictable hot-weather performance",
                    "Climate-specific, high-reliability projects",
                  ],
                ]}
              />
            </section>

            {/* ── SECTION: Summary ── */}
            <section id="summary" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Summary
              </h2>
              <div className="bg-gradient-to-br from-teal-500/15 via-blue-600/10 to-purple-600/10 border border-white/15 rounded-2xl p-6 md:p-8">
                <p className="text-white/85 leading-relaxed mb-4 text-base">
                  Bitumen grading exists to match binder behavior to real-world conditions —
                  climate, traffic, and application all shape which grade is appropriate for a given
                  project. Penetration grading offers a simple hardness baseline, viscosity grading
                  (VG10–VG40) gives a more reliable read on hot-weather performance, and performance
                  grading (PG) ties the binder directly to actual pavement temperature extremes.
                  Getting the grade right from the start is one of the cheapest ways to avoid
                  rutting, cracking, and early pavement failure down the line.
                </p>
                <p className="text-white/85 leading-relaxed text-base">
                  Once you&apos;ve confirmed the right grade, use our{" "}
                  <Link
                    href="/"
                    className="text-orange-400 hover:text-orange-300 font-semibold underline underline-offset-2 transition-colors"
                  >
                    free Bitumen Calculator
                  </Link>{" "}
                  to estimate the exact quantity of binder needed based on road dimensions, mix
                  density, and binder percentage — saving time and reducing waste before you place
                  the order.
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
                    q: "What does bitumen grade 60/70 mean?",
                    a: "It means a needle penetrates between 60 and 70 tenths of a millimeter into the bitumen sample under standardized test conditions at 25°C. It's a mid-range penetration grade suited to general-purpose paving.",
                  },
                  {
                    q: "What is the difference between VG30 and VG40 bitumen?",
                    a: "VG40 is stiffer and more viscous than VG30, making it better suited to hot climates and heavy traffic, while VG30 is the more general-purpose grade used across standard road construction.",
                  },
                  {
                    q: "How do I read a PG grade like PG 64-22?",
                    a: "The first number (64) is the highest average pavement temperature the binder resists rutting at; the second number (-22) is the lowest temperature it resists cracking at.",
                  },
                  {
                    q: "Which bitumen grade is best for road construction?",
                    a: "There's no single best grade — it depends on climate and traffic. VG30 is a common general-purpose choice in moderate climates, but hot, high-traffic regions often need VG40 or a higher PG grade.",
                  },
                  {
                    q: "Can I substitute VG30 for 60/70 penetration grade bitumen?",
                    a: "In many cases yes, since VG30 is often used as an equivalent replacement for 60/70 during a regional transition between grading systems, but always confirm against the specific project's governing specification.",
                  },
                  {
                    q: "Why did viscosity grading replace penetration grading in some regions?",
                    a: "Because penetration grading only tests at one temperature (25°C) and doesn't reliably predict how bitumen performs at real pavement temperatures in hot weather, which viscosity grading measures more directly at 60°C.",
                  },
                  {
                    q: "What grade of bitumen is used for roofing?",
                    a: "Roofing typically uses oxidized (blown) bitumen rather than standard paving grades, since air-blowing raises its softening point for better performance in membrane and waterproofing applications.",
                  },
                ].map(({ q, a }, i) => (
                  <details
                    key={i}
                    className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden open:border-white/20 transition-all hover:bg-white/[0.08]"
                  >
                    <summary className="flex items-center justify-between gap-4 cursor-pointer p-5 md:p-6 font-bold text-white text-base select-none list-none">
                      <h3 className="text-base font-bold text-white m-0 leading-snug">{q}</h3>
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

          
        </div>
      </div>
    </>
  );
}
