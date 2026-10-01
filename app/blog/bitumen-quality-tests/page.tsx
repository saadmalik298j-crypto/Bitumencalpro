// app/blog/bitumen-quality-tests/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import AuthorBio from "../../components/AuthorBio";

import {
  ChevronRight,
  Clock,
  Calendar,
  BookOpen,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  ExternalLink,
  FlaskConical,
} from "lucide-react";

// ── Metadata ──────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Bitumen Quality Tests: Every Standard Test Explained",
  description:
    "Penetration, viscosity, ductility, softening point, flash point, specific gravity, solubility, and extraction — every bitumen quality test explained with standards, temperatures, and why each result matters.",
  keywords: [
    "bitumen quality tests",
    "bitumen penetration test",
    "bitumen viscosity test",
    "bitumen ductility test",
    "softening point test bitumen",
    "flash point bitumen",
    "bitumen specific gravity",
    "bitumen solubility test",
    "bitumen extraction test",
    "ASTM D5 bitumen",
    "ASTM D113 ductility",
    "bitumen testing standards",
  ],
  alternates: {
    canonical: "https://bitumencalcpro.com/blog/bitumen-quality-tests",
  },
  openGraph: {
    title: "Bitumen Quality Tests: Every Standard Test Explained | BitumenCalcPro",
    description:
      "Penetration, viscosity, ductility, softening point, flash point, specific gravity, solubility, and extraction — every standard bitumen quality test, explained clearly.",
    url: "https://bitumencalcpro.com/blog/bitumen-quality-tests",
    siteName: "BitumenCalcPro",
    type: "article",
    publishedTime: "2026-09-30T00:00:00.000Z",
    authors: ["BitumenCalcPro"],
    images: [
      {
        url: "/bitumen-quality-tests-laboratory.webp",
        width: 1200,
        height: 630,
        alt: "Bitumen quality tests in a laboratory — penetration, viscosity, ductility and more",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bitumen Quality Tests: Every Standard Test Explained",
    description:
      "Penetration, viscosity, ductility, softening point, flash point, specific gravity, solubility, and extraction — every standard bitumen test, explained.",
    images: ["/bitumen-quality-tests-laboratory.webp"],
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
    "Bitumen Quality Tests: Viscosity, Ductility, Softening Point, Flash Point, and Every Test Explained",
  description:
    "Penetration, viscosity, ductility, softening point, flash point, specific gravity, solubility, and extraction — every bitumen quality test explained with standards, temperatures, and why each result matters.",
  image: "https://bitumencalcpro.com/bitumen-quality-tests-laboratory.webp",
  datePublished: "2026-09-30T00:00:00.000Z",
  dateModified: "2026-09-30T00:00:00.000Z",
  author: {
    "@type": "Person",
    name: "Nabeel Awan",
    url: "https://bitumencalcpro.com/about-us",
    image: "https://bitumencalcpro.com/nabeel-awan-bitumencalcpro-founder.webp",
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
    "@id": "https://bitumencalcpro.com/blog/bitumen-quality-tests",
  },
  keywords:
    "bitumen quality tests, bitumen penetration test, viscosity test bitumen, ductility test ASTM D113, softening point bitumen, flash point bitumen ASTM D92, bitumen extraction test, specific gravity bitumen",
  articleSection: "Bitumen Fundamentals",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the most important bitumen quality test?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No single test stands above the rest, since each measures a different property. Penetration and viscosity together describe basic grade and flow behavior, while ductility and softening point describe how the binder performs across a temperature range in service.",
      },
    },
    {
      "@type": "Question",
      name: "What does a bitumen ductility test measure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It measures how far a standardized bitumen sample stretches before it breaks, pulled at 5 cm per minute at 25 degrees C. Higher ductility means better flexibility and crack resistance.",
      },
    },
    {
      "@type": "Question",
      name: "Why is the flash point test done on bitumen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It confirms the temperature at which vapors from heated bitumen can ignite, which sets a safe upper limit for heating and mixing operations and appears on the material safety data sheet.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between the viscosity test and the softening point test?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Viscosity measures flow resistance at a specific temperature, usually 60 degrees C or 135 degrees C, useful for predicting mixing and rutting behavior. Softening point finds the temperature at which the bitumen itself starts to soften and sag, which is a different, more application-focused threshold.",
      },
    },
    {
      "@type": "Question",
      name: "What does the extraction test tell you that other bitumen tests do not?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every other test checks raw bitumen before it is used. The extraction test checks a finished asphalt mix, confirming how much bitumen the contractor actually included — a quality control check on the paving job itself, not the raw material.",
      },
    },
    {
      "@type": "Question",
      name: "How is bitumen specific gravity useful for spotting bad batches?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A specific gravity reading noticeably outside the normal range for a given grade can indicate the bitumen has been diluted with a lighter product or contaminated, making it a quick first screening check before more detailed testing.",
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
      name: "Bitumen Quality Tests",
      item: "https://bitumencalcpro.com/blog/bitumen-quality-tests",
    },
  ],
};

// ── Sub-components ───────────────────────────────────────

function SectionImage({
  src, alt, caption, priority,
}: {
  src: string; alt: string; caption?: string; priority?: boolean;
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

function InfoTable({ headers, rows }: { headers: string[]; rows: string[][]; }) {
  return (
    <div className="my-6 sm:my-8 -mx-4 sm:mx-0 overflow-x-auto not-prose sm:rounded-xl border-y sm:border border-white/10 shadow-lg">
      <table className="w-full min-w-[320px] text-sm">
        <thead>
          <tr className="bg-teal-600/30 border-b border-white/10">
            {headers.map((h) => (
              <th key={h} className="text-left px-3 py-2.5 sm:px-5 sm:py-3.5 text-white font-bold text-xs uppercase tracking-wider">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={`border-b border-white/5 ${i % 2 === 0 ? "bg-white/5" : "bg-white/[0.02]"} hover:bg-white/10 transition-colors`}>
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
export default function BitumenQualityTestsPage() {
  return (
    <>
      <Script id="schema-article" type="application/ld+json" strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="schema-faq" type="application/ld+json" strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="schema-breadcrumb" type="application/ld+json" strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ── HERO BAND ── */}
      <div className="relative pt-16 pb-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 to-blue-700/10 pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-[450px] h-[450px] rounded-full bg-teal-500/10 blur-[110px] pointer-events-none" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-1.5 text-sm text-white/55 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={13} />
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <ChevronRight size={13} />
            <span className="text-white/90 font-medium">Bitumen Quality Tests</span>
          </nav>

          {/* Badge */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="inline-flex items-center gap-1.5 bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
              <FlaskConical size={12} />
              Bitumen Fundamentals
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-6 max-w-4xl">
            Bitumen Quality Tests: Viscosity, Ductility, Softening Point, Flash Point, and Every Test Explained
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-white/50 text-sm mb-10">
            <span className="flex items-center gap-1.5">
              <Calendar size={13} />
              <time dateTime="2026-09-30">September 30, 2026</time>
            </span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="flex items-center gap-1.5"><Clock size={13} />16 min read</span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="text-white/50">By BitumenCalcPro</span>
          </div>
        </div>
      </div>

      {/* ── HERO IMAGE 1: below H1 / before Quick Answer ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionImage
          src="/bitumen-quality-tests-laboratory.webp"
          alt="Bitumen quality tests in a laboratory — technician running penetration, viscosity, ductility, and softening point tests on a bitumen sample"
          caption="Laboratory testing is the only reliable way to confirm a bitumen batch matches its stated grade before it reaches a road or roof"
          priority
        />
      </div>

      {/* ── ARTICLE BODY ── */}
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
                Bitumen quality tests measure how a binder behaves under heat, stress, and stretching before it ever reaches a road or roof. The core tests are penetration, viscosity, softening point, ductility, specific gravity, flash point and fire point, and solubility, plus an extraction test used to check bitumen content inside an already-mixed asphalt sample. Each test checks a different property, and together they confirm a batch meets its grade before it is approved for use.
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
                  { id: "why-testing-matters", label: "Why Bitumen Quality Testing Matters" },
                  { id: "penetration-test", label: "Penetration Test" },
                  { id: "viscosity-test", label: "Bitumen Viscosity Test" },
                  { id: "ductility-test", label: "Bitumen Ductility Testing" },
                  { id: "softening-point", label: "Softening Point Test" },
                  { id: "flash-fire-point", label: "Flash and Fire Point Test" },
                  { id: "specific-gravity", label: "Specific Gravity Test" },
                  { id: "solubility-test", label: "Solubility Test" },
                  { id: "extraction-test", label: "Bitumen Extraction Test" },
                  { id: "comparison-table", label: "Comparing the Tests" },
                  { id: "tests-together", label: "How These Tests Work Together" },
                  { id: "conclusion", label: "Conclusion" },
                  { id: "faq", label: "Frequently Asked Questions" },
                ].map(({ id, label }) => (
                  <a key={id} href={`#${id}`}
                    className="block text-white/55 hover:text-teal-400 text-xs leading-relaxed py-1 px-2 rounded-lg hover:bg-white/5 transition-all">
                    {label}
                  </a>
                ))}
              </nav>
            </div>

            {/* ── Intro ── */}
            <section className="mb-12">
              <p className="text-white/85 leading-relaxed mb-4 text-base">
                No refinery or contractor hands over bitumen without running it through a set of standardized checks first. A single physical property like how sticky or stiff a sample looks does not tell an engineer whether that binder will hold up on a summer highway or crack apart on a cold roof deck. That is what quality tests for bitumen are built to answer, and each one isolates a different behavior so a supplier and a buyer can agree on exactly what they are getting.
              </p>
              <p className="text-white/85 leading-relaxed text-base">
                This guide walks through every standard test, what it measures, and why the result actually matters on a job site. If you are newer to the material itself, our{" "}
                <Link href="/blog/what-is-bitumen" className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors font-medium">
                  complete guide to bitumen
                </Link>{" "}
                covers the chemistry, types, and applications before you dive into the testing side.
              </p>
            </section>

            {/* ── Why Testing Matters ── */}
            <section id="why-testing-matters" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                Why Bitumen Quality Testing Matters
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Bitumen is a viscoelastic material. It has no sharp melting point the way ice does. Instead, it gradually softens as temperature rises and stiffens as it falls, which means a single description like &ldquo;60/70 grade&rdquo; only means something once it is tied to a repeatable, standardized test result. Understanding the full{" "}
                <Link href="/blog/bitumen-grades-explained" className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors font-medium">
                  bitumen grading system
                </Link>{" "}
                makes the purpose of each test far clearer, since grades are defined entirely by their test results.
              </p>
              <p className="text-white/80 leading-relaxed text-base">
                Get the wrong grade onto a project, and the failure shows up months or years later: rutting in a hot summer, cracking in a cold winter, or a roofing membrane that never should have passed inspection. Quality testing exists to catch a mismatched or substandard batch before it is compacted into a road or torched onto a roof, not after.
              </p>
            </section>

            {/* ── IMAGE 2: Penetration / Viscosity section ── */}
            <SectionImage
              src="/bitumen-penetration-viscosity-test.webp"
              alt="Bitumen penetration test needle sinking into sample at 25 degrees C alongside viscosity measurement apparatus"
              caption="The penetration test and viscosity measurement are the two most widely cited tests for classifying and grading a bitumen batch"
            />

            {/* ── Penetration Test ── */}
            <section id="penetration-test" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Penetration Test
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Penetration is the oldest and most widely recognized bitumen classification test, and it is still the basis for naming grades like 60/70 and 80/100.
              </p>
              <div className="mb-6 bg-gradient-to-br from-teal-500/10 to-blue-600/10 border border-teal-400/20 rounded-2xl p-6">
                <h3 className="text-xl font-black text-teal-300 mb-3">How It Works (ASTM D5)</h3>
                <p className="text-white/80 leading-relaxed text-base">
                  A needle loaded to 100 grams is lowered onto a bitumen sample held at 25&deg;C, then released for exactly 5 seconds. The distance it sinks, measured in tenths of a millimeter, is the penetration value. A &ldquo;60/70&rdquo; bitumen means the needle sinks between 60 and 70 units under these exact conditions.
                </p>
              </div>
              <p className="text-white/80 leading-relaxed text-base">
                Lower numbers mean a harder binder, higher numbers mean a softer one. This single number is still the most common shorthand engineers use worldwide to describe a bitumen&apos;s basic hardness, and it is the starting point for selecting a grade suited to the climate and traffic load of a given project.
              </p>
            </section>

            {/* ── Viscosity Test ── */}
            <section id="viscosity-test" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                Bitumen Viscosity Test
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Viscosity measures how easily bitumen flows, and it is one of the most important quality tests for bitumen because it directly predicts mixing behavior and rutting resistance.
              </p>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Two temperatures matter most. At 60&deg;C, absolute viscosity is measured using a vacuum capillary viscometer, since this temperature approximates the hottest a road surface reaches in summer service. At 135&deg;C, kinematic viscosity is measured using an atmospheric capillary tube, since this is close to typical mixing plant temperatures, and the result confirms the bitumen will coat aggregate properly without being dangerously runny or too thick to pump.
              </p>
              <h3 className="text-xl font-black text-white mb-4">Two Common Instruments</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <h4 className="text-base font-black text-orange-300 mb-2">Saybolt Furol Viscometer</h4>
                  <p className="text-white/75 text-sm leading-relaxed">
                    Measures the time for 60 mL of sample to flow through a calibrated orifice, reported in Saybolt Furol seconds. Simple, inexpensive, and commonly used for liquid products like bitumen emulsion.
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <h4 className="text-base font-black text-teal-300 mb-2">Rotational (Brookfield) Viscometer</h4>
                  <p className="text-white/75 text-sm leading-relaxed">
                    Measures torque needed to rotate a spindle at constant speed inside the heated sample, typically at 135&deg;C. Standardized as ASTM D4402 / AASHTO T316 and required for Superpave performance-grade (PG) binders.
                  </p>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed text-base">
                A binder that is too viscous is hard to pump and coats aggregate unevenly. One that is too thin will not hold its film on the stone and drains off before compaction. Either mistake shows up as a weak, short-lived pavement — the same failure modes covered in our look at the{" "}
                <Link href="/blog/asphalt-estimation-mistakes" className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors font-medium">
                  most common asphalt estimation mistakes
                </Link>
                .
              </p>
            </section>

            {/* ── IMAGE 3: Ductility section ── */}
            <SectionImage
              src="/bitumen-ductility-test.webp"
              alt="Bitumen ductility test showing dogbone-shaped briquet sample being pulled apart at 5 cm per minute at 25 degrees C until it breaks"
              caption="The ductility briquet stretches at a fixed rate — the distance at break in centimetres determines long-term crack resistance"
            />

            {/* ── Ductility Test ── */}
            <section id="ductility-test" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Bitumen Ductility Testing
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Ductility measures flexibility, which is one of the properties standard hardness testing alone cannot reveal.
              </p>
              <div className="mb-6 bg-gradient-to-br from-teal-500/10 to-emerald-600/10 border border-teal-400/20 rounded-2xl p-6">
                <h3 className="text-xl font-black text-teal-300 mb-3">How It Works (ASTM D113)</h3>
                <p className="text-white/80 leading-relaxed text-base">
                  A dogbone-shaped bitumen sample called a briquet is pulled apart at a controlled speed of 5 cm per minute, at a standard temperature of 25&deg;C, until it breaks. The distance the sample stretches before separating, in centimeters, is the ductility value.
                </p>
              </div>
              <p className="text-white/80 leading-relaxed mb-4 text-base">
                A binder with poor ductility is brittle and cracks under the small, repeated movements a road surface experiences from traffic and temperature swings. High ductility means the bitumen can deform and recover without immediately fracturing, which matters far more than raw hardness for long-term crack resistance.
              </p>
              <p className="text-white/80 leading-relaxed text-base">
                Some specifications also run ductility testing at lower temperatures like 4&deg;C, specifically to check cold-weather flexibility. This is particularly important when evaluating binders destined for cold climates, where brittleness from temperature alone can cause cracking under load.
              </p>
            </section>

            {/* ── IMAGE 4: Softening Point and Flash Point ── */}
            <SectionImage
              src="/bitumen-softening-flash-point-tests.webp"
              alt="Bitumen softening point Ring-and-Ball test and Cleveland Open Cup flash point test apparatus for fire safety"
              caption="Ring-and-Ball softening point and Cleveland Open Cup flash point — critical thermal limits for roofing performance and job-site safety"
            />

            {/* ── Softening Point ── */}
            <section id="softening-point" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                Softening Point Test
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Bitumen does not melt at a fixed temperature the way ice does, so softening point testing gives engineers a standardized, repeatable stand-in for that missing melting point.
              </p>
              <div className="mb-6 bg-gradient-to-br from-orange-500/10 to-amber-600/10 border border-orange-400/20 rounded-2xl p-6">
                <h3 className="text-xl font-black text-orange-300 mb-3">How It Works — Ring-and-Ball (ASTM D36)</h3>
                <p className="text-white/80 leading-relaxed text-base">
                  Two horizontal discs of bitumen, each set inside a small metal ring, are heated in a water or glycerin bath while a steel ball rests on top of each. As the temperature climbs at a controlled rate, the bitumen softens until the ball sinks through it and touches a marked plate below. The temperature at that exact moment is the softening point, and the standard test method covers a range from 30&deg;C to 157&deg;C.
                </p>
              </div>
              <p className="text-white/80 leading-relaxed text-base">
                Softening point tells you the practical upper temperature limit before a binder starts to flow and lose its shape. This is especially critical for oxidized (blown) bitumen used in{" "}
                <Link href="/blog/modified-bitumen-roofing" className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors font-medium">
                  modified bitumen roofing systems
                </Link>
                , where a low softening point means the membrane could soften and slump on a hot day.
              </p>
            </section>

            {/* ── Flash and Fire Point ── */}
            <section id="flash-fire-point" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Flash and Fire Point Test
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                This test exists purely for safety, since bitumen has to be heated well above ordinary temperatures before it becomes workable, and the flash point is the line between routine heating and a real fire hazard.
              </p>
              <div className="mb-6 bg-gradient-to-br from-red-500/10 to-orange-600/10 border border-red-400/20 rounded-2xl p-6">
                <h3 className="text-xl font-black text-red-300 mb-3">How It Works — Cleveland Open Cup (ASTM D92)</h3>
                <p className="text-white/80 leading-relaxed mb-3 text-base">
                  A sample is heated in an open cup at a controlled rate while a small test flame passes over the surface at regular intervals. The <strong className="text-white">flash point</strong> is the lowest temperature at which vapors above the sample briefly ignite when the flame passes. Continued heating identifies the <strong className="text-white">fire point</strong>, the temperature at which the sample ignites and keeps burning for at least 5 seconds.
                </p>
                <p className="text-white/80 leading-relaxed text-base">
                  In practice, flash points for paving bitumen commonly fall in the 300 to 360&deg;C range, with fire points typically 20 to 30&deg;C higher.
                </p>
              </div>
              <p className="text-white/80 leading-relaxed text-base">
                Every heating and mixing operation needs to stay comfortably below the flash point to avoid a real fire hazard. This number is written directly into a bitumen&apos;s safety data sheet and used to set safe maximum heating temperatures at plants and job sites. The{" "}
                <a href="https://www.asphaltinstitute.org/resource_topics/safety/" target="_blank" rel="noopener noreferrer"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors">
                  Asphalt Institute safety guidance
                  <ExternalLink size={12} className="inline ml-0.5 mb-0.5" />
                </a>{" "}
                references flash point limits as a key parameter in plant operating procedures.
              </p>
            </section>

            {/* ── IMAGE 5: Specific Gravity / Solubility ── */}
            <SectionImage
              src="/bitumen-specific-gravity-solubility-test.webp"
              alt="Bitumen specific gravity pycnometer test and solubility trichloroethylene dissolution and filtering of bitumen sample for purity check"
              caption="Specific gravity (pycnometer) and solubility filtering — fast purity and density checks that flag contamination before deeper testing is needed"
            />

            {/* ── Specific Gravity ── */}
            <section id="specific-gravity" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                Specific Gravity Test
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Specific gravity compares bitumen&apos;s density to water&apos;s at the same temperature, and it is a fast way to check consistency and spot problems.
              </p>
              <div className="mb-6 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 border border-blue-400/20 rounded-2xl p-6">
                <h3 className="text-xl font-black text-blue-300 mb-3">How It Works (ASTM D70)</h3>
                <p className="text-white/80 leading-relaxed text-base">
                  A pycnometer, a small glass vessel of precisely known volume, is used to weigh a bitumen sample against an equal volume of water at a controlled temperature, typically 25&deg;C. Dividing the two weights gives the specific gravity, a unitless ratio.
                </p>
              </div>
              <p className="text-white/80 leading-relaxed text-base">
                Most paving-grade bitumen has a specific gravity just above 1.00, meaning it is marginally denser than water. A reading that falls noticeably outside the expected range for a given grade can signal dilution with a lighter petroleum product or contamination, making specific gravity a useful, low-cost first check before deeper testing. The same density principle is explored in the{" "}
                <Link href="/blog/bitumen-density-chart" className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors font-medium">
                  bitumen density chart by grade
                </Link>
                .
              </p>
            </section>

            {/* ── Solubility Test ── */}
            <section id="solubility-test" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Solubility Test
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Solubility testing answers a basic but important question: how much of this sample is actually bitumen, and how much is something else.
              </p>
              <div className="mb-6 bg-gradient-to-br from-teal-500/10 to-cyan-600/10 border border-teal-400/20 rounded-2xl p-6">
                <h3 className="text-xl font-black text-teal-300 mb-3">How It Works (ASTM D2042)</h3>
                <p className="text-white/80 leading-relaxed text-base">
                  A weighed bitumen sample is dissolved in trichloroethylene, then filtered. Anything that does not dissolve, including mineral matter, carbon residue, or other contaminants, is measured and subtracted, giving a percentage of pure bitumen in the sample.
                </p>
              </div>
              <p className="text-white/80 leading-relaxed text-base">
                Specifications typically require a solubility of at least 99% for paving-grade bitumen. A lower result usually points to the presence of inert filler, excessive carbon from overheating during production, or contamination introduced somewhere in the supply chain. Our guide on{" "}
                <Link href="/blog/how-is-bitumen-transported" className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors font-medium">
                  how bitumen is transported
                </Link>{" "}
                covers the handling risks that can affect purity during transit from refinery to site.
              </p>
            </section>

            {/* ── IMAGE 6: Extraction Test section ── */}
            <SectionImage
              src="/asphalt-bitumen-extraction-test.webp"
              alt="Asphalt bitumen extraction test using centrifuge method — dissolving finished asphalt mix in solvent to determine actual binder content in compacted pavement"
              caption="The extraction test is the only quality check that runs on finished asphalt mix rather than raw bitumen — it confirms what was actually delivered and compacted"
            />

            {/* ── Extraction Test ── */}
            <section id="extraction-test" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                Bitumen Extraction Test
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                The extraction test is different from every test above it, since it is not run on raw bitumen at all. It is run on a finished asphalt mix to determine how much bitumen the mix actually contains.
              </p>
              <h3 className="text-xl font-black text-white mb-4">Two Standard Methods</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <h4 className="text-base font-black text-orange-300 mb-2">Centrifuge Extraction (AASHTO T164)</h4>
                  <p className="text-white/75 text-sm leading-relaxed">
                    Dissolves the asphalt sample in a solvent inside a centrifuge, spinning off the aggregate and leaving the dissolved bitumen in the solvent, which is then measured. Accurate but requires solvent handling and disposal.
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <h4 className="text-base font-black text-teal-300 mb-2">Ignition Furnace (AASHTO T308 / ASTM D6307)</h4>
                  <p className="text-white/75 text-sm leading-relaxed">
                    Burns off the bitumen entirely at high temperature and calculates binder content from the weight lost, avoiding solvent use altogether. Increasingly preferred for routine quality control where solvent disposal is a concern.
                  </p>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed text-base">
                This test confirms whether a paving contractor actually delivered the binder content specified in the mix design, rather than under-dosing bitumen to cut material cost. It is one of the most direct quality control checks available on a finished road, since it verifies the real mix rather than just the raw material that went into it. For anyone tracking project quantities from the planning stage, our free{" "}
                <Link href="/" className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors font-medium">
                  Bitumen Calculator
                </Link>{" "}
                gives the mix design baseline that the extraction test later verifies was delivered.
              </p>
            </section>

            {/* ── Comparison Table ── */}
            <section id="comparison-table" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Comparing the Tests
              </h2>
              <p className="text-white/80 leading-relaxed mb-6 text-base">
                Each test occupies a different role in the overall quality picture. This table maps the standard, what it measures, and the temperature it runs at, making it easier to see the full testing picture at once.
              </p>
              <InfoTable
                headers={["Test", "Standard", "What It Measures", "Typical Test Temperature"]}
                rows={[
                  ["Penetration", "ASTM D5", "Hardness", "25°C"],
                  ["Viscosity", "ASTM D4402 / AASHTO T316", "Flow resistance", "60°C and 135°C"],
                  ["Ductility", "ASTM D113", "Stretch before breaking", "25°C"],
                  ["Softening point", "ASTM D36", "Temperature at which bitumen softens", "30–157°C range"],
                  ["Flash and fire point", "ASTM D92", "Safe heating limit", "Up to ~360°C"],
                  ["Specific gravity", "ASTM D70", "Density versus water", "25°C"],
                  ["Solubility", "ASTM D2042", "Purity of the bitumen sample", "Ambient"],
                  ["Extraction", "AASHTO T164 / T308", "Bitumen content in a finished mix", "N/A (mix sample)"],
                ]}
              />
            </section>

            {/* ── How Tests Work Together ── */}
            <section id="tests-together" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                How These Tests Work Together
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                No single test tells the whole story. A batch can pass a penetration test and still fail in service if its ductility is poor, and a binder can have excellent viscosity at 135&deg;C but soften too easily on a hot roof if its softening point is low for the application. Specifications combine several of these tests into one grade requirement precisely because each one exposes a different weakness a single measurement would miss.
              </p>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                This is also why lab-tested bitumen from a reputable supplier, backed by a certificate of analysis showing results from these standard tests, is worth more than a cheaper batch with no test data attached. The tests are the only real evidence that a specific shipment will behave the way its grade name suggests.
              </p>
              <p className="text-white/80 leading-relaxed text-base">
                The connection between testing and grade selection is direct. The{" "}
                <a href="https://www.astm.org/standards/d946" target="_blank" rel="noopener noreferrer"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors">
                  ASTM D946 specification for penetration-grade bitumen
                  <ExternalLink size={12} className="inline ml-0.5 mb-0.5" />
                </a>{" "}
                explicitly lists minimum and maximum values across multiple tests, including penetration, ductility, solubility, and flash point, to define what any given grade must pass before it is accepted for paving use. Choosing the right grade also depends on climate, traffic, and layer depth, all of which feed into{" "}
                <Link href="/blog/asphalt-thickness" className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors font-medium">
                  asphalt pavement thickness design
                </Link>
                .
              </p>
            </section>

            {/* ── Conclusion ── */}
            <section id="conclusion" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Conclusion
              </h2>
              <div className="bg-gradient-to-br from-teal-500/15 via-blue-600/10 to-purple-600/10 border border-white/15 rounded-2xl p-6 md:p-8">
                <p className="text-white/85 leading-relaxed mb-4 text-base">
                  Bitumen quality testing exists because a single description like a grade name is not enough to guarantee performance. Penetration and viscosity establish basic hardness and flow behavior. Ductility and softening point reveal how the binder handles stress and heat over its service life. Flash point protects workers during heating, specific gravity and solubility catch contamination, and the extraction test confirms a finished mix actually contains what its design called for.
                </p>
                <p className="text-white/85 leading-relaxed mb-4 text-base">
                  Together, these tests are what separate a binder backed by real data from one sold on a grade name alone. They are also the reason{" "}
                  <Link href="/blog/bitumen-emulsion-explained" className="text-teal-400 hover:text-orange-300 font-semibold underline underline-offset-2 transition-colors">
                    bitumen emulsion
                  </Link>{" "}
                  carries different testing requirements from a hot-poured paving grade, since the application drives which properties matter most, and the tests are how those properties are verified.
                </p>
                <p className="text-white/85 leading-relaxed text-base">
                  If you are working with bitumen on a paving project and need to plan quantities from the design stage, our free{" "}
                  <Link href="/" className="text-teal-400 hover:text-orange-300 font-semibold underline underline-offset-2 transition-colors">
                    Bitumen Calculator
                  </Link>{" "}
                  gives accurate estimates for mix weight, binder content, and aggregate requirements, the same figures the extraction test later verifies were delivered.
                </p>
              </div>
            </section>

            {/* ── FAQ ── */}
            <section id="faq" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-6 border-l-4 border-orange-400 pl-4">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {[
                  {
                    q: "What is the most important bitumen quality test?",
                    a: "No single test stands above the rest, since each measures a different property. Penetration and viscosity together describe basic grade and flow behavior, while ductility and softening point describe how the binder performs across a temperature range in service.",
                  },
                  {
                    q: "What does a bitumen ductility test measure?",
                    a: "It measures how far a standardized bitumen sample stretches before it breaks, pulled at 5 cm per minute at 25 degrees C. Higher ductility means better flexibility and crack resistance under traffic loading and temperature swings.",
                  },
                  {
                    q: "Why is the flash point test done on bitumen?",
                    a: "It confirms the temperature at which vapors from heated bitumen can ignite, which sets a safe upper limit for heating and mixing operations. This number appears on the material safety data sheet and is used to set plant and job-site heating limits.",
                  },
                  {
                    q: "What is the difference between the viscosity test and the softening point test?",
                    a: "Viscosity measures flow resistance at a specific temperature, usually 60 or 135 degrees C, useful for predicting mixing behavior and rutting resistance. Softening point finds the temperature at which the bitumen itself starts to soften and sag under load, which is a different, more application-focused threshold, especially important for roofing grades.",
                  },
                  {
                    q: "What does the extraction test tell you that other bitumen tests do not?",
                    a: "Every other test on this list checks raw bitumen before it is used. The extraction test checks a finished asphalt mix, confirming how much bitumen the contractor actually included — a quality control check on the paving job itself, not the raw material.",
                  },
                  {
                    q: "How is bitumen specific gravity useful for spotting bad batches?",
                    a: "A specific gravity reading noticeably outside the normal range for a given grade can indicate the bitumen has been diluted with a lighter product or contaminated. It is a quick, low-cost first screening check before more detailed testing is ordered.",
                  },
                ].map(({ q, a }, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5 md:p-6 transition-colors hover:bg-white/[0.08]">
                    <h3 className="text-lg font-bold text-white mb-2 leading-snug">{q}</h3>
                    <p className="text-white/70 text-sm leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Navigation ── */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
              <Link href="/blog"
                className="inline-flex items-center gap-2 text-white/60 hover:text-white font-semibold text-sm transition-colors group">
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                Back to Blog
              </Link>
              <Link href="/"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white px-6 py-3 rounded-full font-bold text-sm transition-all shadow-[0_0_20px_rgba(249,115,22,0.35)] hover:shadow-[0_0_30px_rgba(249,115,22,0.55)]">
                Try the Bitumen Calculator free
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
