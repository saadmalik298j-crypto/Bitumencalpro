import AuthorBio from "../../components/AuthorBio";
// app/blog/asphalt-vs-bitumen/page.tsx
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
  FlaskConical,
} from "lucide-react";

// ── Metadata ──────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Asphalt vs Bitumen: Complete Guide to How They Differ",
  description:
    "Asphalt vs bitumen explained clearly — binder vs finished mix, grades, forms, costs, failure modes, and how to calculate quantities. Tables, worked example, and FAQ.",
  keywords: [
    "asphalt vs bitumen",
    "difference between asphalt and bitumen",
    "bitumen vs asphalt",
    "what is asphalt",
    "what is bitumen",
    "asphalt binder",
    "bitumen grades",
    "asphalt mix design",
    "sprayed bitumen seal",
    "bitumen vs tar",
  ],
  alternates: { canonical: "https://bitumencalcpro.com/blog/asphalt-vs-bitumen" },
  openGraph: {
    title: "Asphalt vs Bitumen: Complete Guide to How They Differ | BitumenCalcPro",
    description:
      "Binder versus finished mix — grades, forms, costs, failure modes, and how to calculate quantities. Tables, worked example, and FAQ.",
    url: "https://bitumencalcpro.com/blog/asphalt-vs-bitumen",
    siteName: "BitumenCalcPro",
    type: "article",
    publishedTime: "2026-09-28T00:00:00.000Z",
    authors: ["BitumenCalcPro"],
    images: [
      {
        url: "/asphalt-vs-bitumen-comparison.webp",
        width: 1200,
        height: 675,
        alt: "Asphalt vs bitumen comparison — binder versus finished paving mix side by side",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Asphalt vs Bitumen: Complete Guide to How They Differ",
    description:
      "Binder versus mix — grades, costs, failure modes, quantity formulas, and a worked example.",
    images: ["/asphalt-vs-bitumen-comparison.webp"],
  },
  robots: {
    "max-image-preview": "large",
  },
};

// ── Structured Data ──────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Asphalt vs Bitumen: The Complete Guide to How They Differ",
  description:
    "Asphalt vs bitumen explained clearly — binder vs finished mix, grades, forms, costs, failure modes, and how to calculate quantities.",
  image: "https://bitumencalcpro.com/asphalt-vs-bitumen-comparison.webp",
  datePublished: "2026-09-28T00:00:00.000Z",
  dateModified: "2026-09-28T00:00:00.000Z",
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
    logo: { "@type": "ImageObject", url: "https://bitumencalcpro.com/logo.png" },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://bitumencalcpro.com/blog/asphalt-vs-bitumen",
  },
  keywords:
    "asphalt vs bitumen, difference between asphalt and bitumen, bitumen grades, asphalt mix, sprayed seal, bitumen binder, asphalt quantity",
  articleSection: "Bitumen Fundamentals",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is asphalt the same as bitumen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Bitumen is the binder, and asphalt is the mix that contains it — roughly 95% stone and sand bound by about 5% bitumen. In the US, 'asphalt' can also mean the binder.",
      },
    },
    {
      "@type": "Question",
      name: "Can you pave a road with bitumen alone?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Bitumen has no load-bearing structure without stone aggregate. Even a sprayed seal has chips rolled into it to provide texture and grip.",
      },
    },
    {
      "@type": "Question",
      name: "How much bitumen is in asphalt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Usually 5 to 6% by weight. The full range for paving mixes is about 4 to 7%, depending on mix type and traffic requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Is bitumen the same as tar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Bitumen comes from crude oil refining, and tar comes from destructive distillation of coal or wood. They are chemically different. Tarmac started as a brand for tar-bound stone but is now used loosely for any black paved surface.",
      },
    },
    {
      "@type": "Question",
      name: "Which is cheaper, bitumen or asphalt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A sprayed bitumen seal costs less to install than an asphalt layer. Asphalt costs more upfront but lasts longer, so busy surfaces usually favour asphalt on a cost-per-year-of-service basis.",
      },
    },
    {
      "@type": "Question",
      name: "Which bitumen grade is used on roads in Pakistan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "60/70 penetration grade is the usual choice, with 80/100 in cooler regions and polymer-modified bitumen (PMB) for high-heat, heavy-traffic routes. The project specification has the final say.",
      },
    },
    {
      "@type": "Question",
      name: "Can asphalt be recycled?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Old pavement is milled, crushed and fed back into new mixes as reclaimed asphalt pavement (RAP). The binder in it still works, reducing both material cost and waste.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between bitumen and asphalt cement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nothing meaningful. Asphalt cement is the US term for paving-grade bitumen. The two phrases refer to the same material.",
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
      name: "Asphalt vs Bitumen",
      item: "https://bitumencalcpro.com/blog/asphalt-vs-bitumen",
    },
  ],
};

// ── Sub-components ────────────────────────────────────────

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
        <figcaption className="mt-3 text-center text-sm text-white/70 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

function InfoTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
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

function QuickFact({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="border-l-4 border-orange-400 pl-5 my-5 not-prose">
      <p className="font-bold text-white mb-1">{question}</p>
      <p className="text-white/70 text-sm leading-relaxed">{answer}</p>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────
export default function AsphaltVsBitumenPage() {
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
            className="flex items-center flex-wrap gap-1.5 text-sm text-white/75 mb-8"
          >
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={13} />
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <ChevronRight size={13} />
            <span className="text-white/90 font-medium">Asphalt vs Bitumen</span>
          </nav>

          {/* Category badge */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="inline-flex items-center gap-1.5 bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
              <Layers size={12} />
              Bitumen Fundamentals
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-6 max-w-4xl">
            Asphalt vs Bitumen: The Complete Guide to How They Differ
          </h1>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-4 text-white/75 text-sm mb-10">
            <span className="flex items-center gap-1.5">
              <Calendar size={13} />
              <time dateTime="2026-09-28">September 28, 2026</time>
            </span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="flex items-center gap-1.5">
              <Clock size={13} />
              18 min read
            </span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="text-white/75">By BitumenCalcPro</span>
          </div>
        </div>
      </div>

      {/* ── HERO IMAGE ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionImage
          src="/asphalt-vs-bitumen-comparison.webp"
          alt="Asphalt vs bitumen comparison — bitumen binder on the left versus compacted asphalt pavement mix on the right"
          caption="Bitumen (left) is the refined petroleum binder; asphalt (right) is the finished mix of roughly 95% stone and sand bound by 5% bitumen"
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
              <p className="text-white/85 leading-relaxed text-base mb-3">
                Asphalt vs bitumen is a question of <strong className="text-white">mix versus binder</strong>. Bitumen is the thick, black, sticky residue left after refining crude oil. Asphalt is the road surface made with it: about <strong className="text-white">95% stone, sand and filler, bound by roughly 5% bitumen</strong>. Bitumen can be sprayed as a thin seal on its own. Asphalt is blended hot at a plant and compacted in thick layers. In the US, &ldquo;asphalt&rdquo; often names the binder too.
              </p>
              <p className="text-white/75 leading-relaxed text-sm">
                A supplier quotes you 20 tonnes of bitumen. Your contractor talks about laying 20 tonnes of asphalt. Those are very different orders — mixing them up can leave a job short of material or a budget off by a wide margin.
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
                  { id: "at-a-glance", label: "Bitumen and Asphalt at a Glance" },
                  { id: "what-is-bitumen", label: "What Is Bitumen?" },
                  { id: "bitumen-grades", label: "Bitumen Grades" },
                  { id: "forms-of-bitumen", label: "Forms of Bitumen" },
                  { id: "what-is-asphalt", label: "What Is Asphalt?" },
                  { id: "asphalt-types", label: "Types of Asphalt Mix" },
                  { id: "binder-content", label: "How Much Bitumen Goes Into Asphalt" },
                  { id: "why-confused", label: "Why the Two Words Get Mixed Up" },
                  { id: "seal-vs-asphalt", label: "Sprayed Seal vs Asphalt Layer" },
                  { id: "failure-modes", label: "How Bitumen and Asphalt Fail" },
                  { id: "cost-drivers", label: "What Drives the Cost" },
                  { id: "recycling", label: "Recycling and the Environment" },
                  { id: "which-to-choose", label: "Which One Should You Choose?" },
                  { id: "quantities", label: "How to Estimate Quantities" },
                  { id: "conclusion", label: "Conclusion" },
                  { id: "faq", label: "FAQ" },
                ].map(({ id, label }) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    className="block text-white/75 hover:text-teal-400 text-xs leading-relaxed py-1 px-2 rounded-lg hover:bg-white/5 transition-all"
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </div>

            {/* ── INTRO ── */}
            <section className="mb-12">
              <p className="text-white/85 leading-relaxed mb-4 text-base">
                The asphalt vs bitumen confusion is common because the words swap meaning between countries. This guide explains what each material is, how each is made, where each belongs, and how to calculate quantities. You&apos;ll also find a worked example, two comparison tables, and answers to the questions people ask most.
              </p>
              <p className="text-white/85 leading-relaxed text-base">
                If you want to go deeper on the binder itself first, our{" "}
                <Link
                  href="/blog/what-is-bitumen"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors font-medium"
                >
                  complete guide to what bitumen is
                </Link>{" "}
                covers chemistry, natural deposits, and properties in full detail before you compare it to asphalt.
              </p>
            </section>

            {/* ── SECTION: At a Glance ── */}
            <section id="at-a-glance" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                Bitumen and Asphalt at a Glance
              </h2>
              <InfoTable
                headers={["", "Bitumen", "Asphalt"]}
                rows={[
                  ["Role", "Binder", "Finished paving mix"],
                  ["Origin", "Refinery residue, or natural deposits", "Bitumen mixed with heated stone, sand and filler"],
                  ["Bitumen share", "100%", "About 4 to 7% by weight"],
                  ["Made at", "Refinery", "Asphalt plant"],
                  ["Used alone", "Yes — as thin sprayed coats", "Rarely — it is the pavement itself"],
                  ["Typical layer", "Thin seal or tack coat", "Thick compacted course (25–200 mm)"],
                ]}
              />
            </section>

            {/* ── SECTION: What Is Bitumen ── */}
            <section id="what-is-bitumen" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                What Is Bitumen?
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Bitumen is the heaviest part of crude oil. Refiners heat the crude and draw off the lighter products first — petrol, diesel, kerosene. The remainder goes through vacuum distillation, and the thick residue at the bottom is the raw material for bitumen.
              </p>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Four properties matter most on the road:
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  { label: "Thermoplastic", desc: "It softens when heated and stiffens as it cools — which is why it can be pumped, sprayed, and mixed at elevated temperatures, then sets firm on the road." },
                  { label: "Adhesive", desc: "It sticks firmly to stone particles, coating every surface and locking aggregate together under load." },
                  { label: "Waterproof", desc: "It repels water and protects the structural layers below from moisture infiltration." },
                  { label: "Slow ageing", desc: "It hardens through oxidation over the years, which is why old pavements crack — and why binder content, grade selection, and compaction all matter so much at the design stage." },
                ].map(({ label, desc }) => (
                  <li key={label} className="flex items-start gap-3 text-white/80 text-base">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-teal-400 shrink-0" />
                    <span>
                      <strong className="text-white">{label}:</strong> {desc}
                    </span>
                  </li>
                ))}
              </ul>

              <SectionImage
                src="/bitumen-refinery-production-binder.webp"
                alt="Bitumen refinery production — crude oil atmospheric and vacuum distillation process producing paving grade bitumen binder"
                caption="Bitumen is the heaviest residue produced after crude oil goes through atmospheric and vacuum distillation at a refinery"
              />

              <h3 className="text-2xl font-black text-white mb-4 mt-8">
                Natural Bitumen
              </h3>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Some bitumen comes from the ground. Pitch Lake in Trinidad covers roughly 100 acres. Crude oil seeps up there, the light fractions evaporate, and heavy asphalt stays behind. Sir Walter Raleigh used it to caulk ships in 1595, and it was first used on roads in 1815 — it is still mined and sold for paving today. Even so, nearly all road bitumen comes from refineries, where production quality is consistent and volume is scalable.
              </p>
            </section>

            {/* ── SECTION: Bitumen Grades ── */}
            <section id="bitumen-grades" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                Bitumen Grades
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Refined bitumen is graded by hardness or by performance. The most common test is penetration: a weighted needle is pressed into the sample at 25°C, and the depth it sinks — in tenths of a millimetre — gives the grade. A lower number means harder bitumen. For a full breakdown of grading systems, including how to read a PG grade like PG 64-22, see our{" "}
                <Link
                  href="/blog/bitumen-grades-explained"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                >
                  bitumen grades explained guide
                </Link>
                .
              </p>
              <div className="space-y-3 mb-6">
                {[
                  {
                    grade: "60/70",
                    desc: "The standard paving grade for warm to hot climates and normal traffic. Most widely used globally.",
                  },
                  {
                    grade: "80/100",
                    desc: "Softer. Handles cold weather and light traffic better. Common in cooler regions.",
                  },
                  {
                    grade: "VG grades (e.g. VG-30)",
                    desc: "Viscosity grades common in India and parts of South Asia, set by viscosity measured at 60°C.",
                  },
                  {
                    grade: "PG grades (e.g. PG 64-22)",
                    desc: "Performance Grade. Two numbers: the high-temperature rutting limit and the low-temperature cracking limit. Dominant in North America.",
                  },
                  {
                    grade: "PMB",
                    desc: "Polymer-modified bitumen. Polymers or rubber added for extra resistance to rutting in heat and fatigue cracking under heavy, slow loads.",
                  },
                ].map(({ grade, desc }) => (
                  <div
                    key={grade}
                    className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-4"
                  >
                    <span className="text-orange-400 font-black text-sm shrink-0 min-w-[70px]">
                      {grade}
                    </span>
                    <p className="text-white/70 text-sm leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-white/80 leading-relaxed text-base">
                A softening point test adds another check, measuring the temperature at which the bitumen softens enough to flow under standard conditions — useful for confirming grade consistency on delivery.
              </p>
            </section>

            {/* ── SECTION: Forms of Bitumen ── */}
            <section id="forms-of-bitumen" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Forms of Bitumen
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Bitumen leaves the refinery in several forms, each suited to a different job:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {[
                  {
                    title: "Paving grade",
                    color: "orange",
                    desc: "Applied hot. The binder for asphalt mixes and the material in bulk tanker deliveries.",
                  },
                  {
                    title: "Cutback bitumen",
                    color: "teal",
                    desc: "Thinned with a solvent for lower-temperature spraying. The solvent evaporates and the binder hardens.",
                  },
                  {
                    title: "Bitumen emulsion",
                    color: "blue",
                    desc: "Tiny bitumen droplets suspended in water with an emulsifier. Sprays cold, water evaporates as it sets. Used for tack coats and surface dressings.",
                  },
                  {
                    title: "Blown (oxidised)",
                    color: "violet",
                    desc: "Air blown through hot bitumen makes it harder and less temperature-sensitive. Goes into roofing membranes and pipe coatings.",
                  },
                  {
                    title: "Modified (PMB)",
                    color: "green",
                    desc: "Polymers or rubber added for improved elasticity, heat resistance, and fatigue life — the premium choice for demanding roads.",
                  },
                ].map(({ title, color, desc }) => (
                  <div
                    key={title}
                    className={`bg-white/5 border border-white/10 rounded-xl p-5 border-l-4 ${
                      color === "orange" ? "border-l-orange-400"
                      : color === "teal" ? "border-l-teal-400"
                      : color === "blue" ? "border-l-blue-400"
                      : color === "violet" ? "border-l-violet-400"
                      : "border-l-green-400"
                    }`}
                  >
                    <h3 className="text-white font-bold mb-2 text-base">{title}</h3>
                    <p className="text-white/65 text-sm leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-white/80 leading-relaxed text-base">
                Bitumen emulsion in particular has its own classification system based on electrical charge and setting speed. Our{" "}
                <Link
                  href="/blog/bitumen-emulsion-explained"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                >
                  bitumen emulsion explained guide
                </Link>{" "}
                covers cationic versus anionic types, production, and grade codes like CRS-1 and SS-1.
              </p>
            </section>

            {/* ── SECTION: What Is Asphalt ── */}
            <section id="what-is-asphalt" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                What Is Asphalt?
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Asphalt is a manufactured composite with four ingredients working together:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {[
                  { label: "Coarse aggregate", detail: "Crushed stone — carries the traffic load" },
                  { label: "Fine aggregate", detail: "Sand and crusher dust — fills the gaps between coarse stone" },
                  { label: "Mineral filler", detail: "Very fine powder filling the smallest voids and stiffening the mastic" },
                  { label: "Bitumen binder", detail: "Coats every particle and binds the structure together under load" },
                ].map(({ label, detail }) => (
                  <div key={label} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
                    <FlaskConical size={15} className="text-teal-400 mt-0.5 shrink-0" />
                    <span className="text-white/75 text-sm">
                      <strong className="text-white">{label}</strong> — {detail}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Aggregate makes up about <strong className="text-white">90 to 95% of the mix by weight</strong> and 75 to 85% by volume. It carries the traffic load. Bitumen coats every particle and holds the structure together. The mix of particle sizes — called gradation — controls how tightly the stone packs and how many air voids remain after compaction.
              </p>

              <SectionImage
                src="/asphalt-mixing-plant-paver-roller.webp"
                alt="Asphalt mixing plant, paver, and roller — showing the complete process of producing and laying hot mix asphalt on a road"
                caption="Asphalt production moves from the mixing plant (where bitumen meets heated aggregate) to the paver and roller on site"
              />

              <h3 className="text-2xl font-black text-white mb-4 mt-8">
                How Asphalt Is Made and Laid
              </h3>
              <div className="space-y-3 mb-6">
                {[
                  { step: "01", title: "Drying and heating", desc: "The plant dries and heats the aggregate to remove moisture before bitumen contact." },
                  { step: "02", title: "Mixing", desc: "Hot bitumen is metered in and mixed until every aggregate particle is fully coated." },
                  { step: "03", title: "Hauling", desc: "Insulated trucks deliver the mix to site under covers to hold the heat. Temperature loss during transit matters — cooled mix compacts poorly." },
                  { step: "04", title: "Tack coat", desc: "Crews spray a thin bitumen emulsion on the existing surface so the new layer bonds to it." },
                  { step: "05", title: "Paving", desc: "A paver spreads the mix evenly to the specified loose thickness." },
                  { step: "06", title: "Compaction", desc: "Rollers compact the mat while it is still hot. Cooled mix stiffens and cannot reach design density." },
                  { step: "07", title: "Opening to traffic", desc: "Traffic returns once the mat has cooled to a safe temperature — usually within a few hours." },
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
            </section>

            {/* ── SECTION: Asphalt Types ── */}
            <section id="asphalt-types" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Types of Asphalt Mix
              </h2>

              <h3 className="text-xl font-black text-white mb-3">By Gradation</h3>
              <div className="space-y-3 mb-6">
                {[
                  {
                    name: "Dense-graded (DBM / BC)",
                    desc: "The most common type, with a continuous range of particle sizes and few voids. South Asian specs often call these Dense Bituminous Macadam (binder course) and Bituminous Concrete (wearing course).",
                  },
                  {
                    name: "Stone mastic asphalt (SMA)",
                    desc: "Gap-graded, with stone touching stone, a high binder content and stabilising fibres. Excellent rutting and cracking resistance on heavy routes.",
                  },
                  {
                    name: "Open-graded (porous asphalt)",
                    desc: "Little fine material and many interconnected voids. Water drains through, spray drops and noise falls. The pores clog over time and need maintenance.",
                  },
                  {
                    name: "Mastic asphalt",
                    desc: "Very high binder and filler content, spread by hand rather than rolled. Waterproofs bridge decks, car parks, and roofs.",
                  },
                ].map(({ name, desc }) => (
                  <div key={name} className="bg-white/5 border border-white/10 rounded-xl p-5">
                    <h4 className="text-white font-bold mb-1.5 text-base">{name}</h4>
                    <p className="text-white/65 text-sm leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-black text-white mb-3">By Temperature</h3>
              <InfoTable
                headers={["Type", "Production Temperature", "Best Use"]}
                rows={[
                  ["Hot mix asphalt (HMA)", "~120°C to 190°C", "Standard new pavement and resurfacing"],
                  ["Warm mix asphalt (WMA)", "~100°C to 150°C", "Lower emissions, longer hauls, night paving"],
                  ["Cold mix", "Ambient — no heating needed", "Patching, remote sites, temporary repairs"],
                ]}
              />
              <p className="text-white/80 leading-relaxed mt-4 text-base">
                For cold mix patching specifically, our{" "}
                <Link
                  href="/blog/cold-mix-bitumen"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                >
                  cold mix bitumen guide
                </Link>{" "}
                covers emulsion-based and cutback cold mixes, performance limits, and when to use them versus hot mix.
              </p>
            </section>

            {/* ── SECTION: Binder Content ── */}
            <section id="binder-content" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                How Much Bitumen Goes Into Asphalt?
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Most paving mixes hold <strong className="text-white">4 to 7% bitumen by total weight</strong>. Base courses sit near 4.5%, and SMA reaches about 7%.
              </p>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                The amount matters critically. Too little binder leaves the surface dry, brittle, and prone to cracking and stone loss. Too much makes it soft, so wheel paths rut in summer heat.
              </p>
              <p className="text-white/80 leading-relaxed text-base">
                Engineers find the right amount through mix design, using the Marshall method or Superpave. They test several binder contents and pick the optimum — usually targeting about 4% air voids in the compacted mix. One Marshall design for a semi-dense bituminous concrete wearing course landed at <strong className="text-white">5.11% binder by total weight</strong>.
              </p>
            </section>

            {/* ── SECTION: Why Confused ── */}
            <section id="why-confused" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Why the Two Words Get Mixed Up
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                The confusion is regional. In American English, &ldquo;asphalt&rdquo; means the binder that British English calls bitumen. Americans also shorten &ldquo;asphalt concrete&rdquo; to &ldquo;asphalt,&rdquo; and that finished mix is what British and Australian English call asphalt or tarmac.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-white/5 border border-white/10 rounded-xl p-5 border-l-4 border-l-teal-400">
                  <h3 className="text-white font-bold mb-2 text-base">UK / Europe / Australia</h3>
                  <p className="text-white/65 text-sm leading-relaxed">
                    Specifications lean toward <strong className="text-white">&ldquo;bitumen&rdquo;</strong> for the binder and <strong className="text-white">&ldquo;asphalt&rdquo;</strong> or <strong className="text-white">&ldquo;tarmac&rdquo;</strong> for the finished mix.
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-5 border-l-4 border-l-orange-400">
                  <h3 className="text-white font-bold mb-2 text-base">United States</h3>
                  <p className="text-white/65 text-sm leading-relaxed">
                    Specifications prefer <strong className="text-white">&ldquo;asphalt binder&rdquo;</strong> or <strong className="text-white">&ldquo;asphalt cement&rdquo;</strong> for the binder, and <strong className="text-white">&ldquo;asphalt concrete&rdquo;</strong> or just <strong className="text-white">&ldquo;asphalt&rdquo;</strong> for the mix.
                  </p>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Two questions clear it up before you compare any quote:
              </p>
              <ul className="space-y-2 mb-5">
                {[
                  "Does the word mean the binder or the finished mix?",
                  "Is the quantity in tonnes of mix or litres of binder?",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/80 text-base">
                    <CheckCircle2 size={15} className="text-teal-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                <p className="text-white/70 text-sm leading-relaxed">
                  <strong className="text-white">Tar is a different product.</strong> It comes from coal or wood; bitumen comes from crude oil. &ldquo;Tarmac&rdquo; began as a brand name for tar-bound road stone. Today it is slang for almost any black paved surface, even though modern &ldquo;tarmac&rdquo; uses bitumen, not tar.
                </p>
              </div>
            </section>

            {/* ── SECTION: Seal vs Asphalt ── */}
            <section id="seal-vs-asphalt" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                Sprayed Bitumen Seal vs Asphalt Layer
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                For many buyers, the practical choice comes down to a sprayed seal or a full asphalt layer. Both use bitumen, but they behave very differently in service.
              </p>

              <SectionImage
                src="/bitumen-seal-vs-asphalt-pavement.webp"
                alt="Bitumen sprayed seal versus asphalt pavement comparison — thin chip seal on a rural road versus thick compacted asphalt on a highway"
                caption="A sprayed bitumen seal (thin, chip-textured) versus a compacted asphalt layer (thick, dense, smooth) — different tools for different traffic levels"
              />

              <InfoTable
                headers={["", "Sprayed Bitumen Seal", "Asphalt Layer"]}
                rows={[
                  ["Thickness", "~10 to 20 mm", "~25 to 200 mm depending on course"],
                  ["Typical life", "~5 to 10 years", "Longer — typically 15–25 years"],
                  ["Upfront cost", "Lower", "Higher"],
                  ["Heat performance", "Softens in extreme heat", "Holds shape better with correct grade"],
                  ["Surface texture", "Loose chips — more tyre noise", "Dense and quieter"],
                  ["Best for", "Low-traffic rural roads, car parks", "Driveways, city streets, highways"],
                ]}
              />
              <p className="text-white/70 text-sm mt-4 leading-relaxed">
                Thickness and lifespan figures for sprayed seal above are indicative values from Australian paving practice. Verify these against your local road authority specifications before making design decisions.
              </p>
              <p className="text-white/80 leading-relaxed mt-5 text-base">
                A seal costs less to lay, and on a quiet road it can be the right call. Asphalt costs more upfront. On busy surfaces it usually costs less <em>per year of service</em>.
              </p>
            </section>

            {/* ── SECTION: Failure Modes ── */}
            <section id="failure-modes" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                How Bitumen and Asphalt Fail
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Knowing the failure modes explains most specification choices — and helps you spot early warning signs on an existing surface.
              </p>

              <SectionImage
                src="/asphalt-pavement-rutting-cracking-failure.webp"
                alt="Asphalt pavement rutting and fatigue cracking failure — showing wheel path deformation and interconnected crack patterns on a road surface"
                caption="Rutting (wheel-path grooves) and fatigue cracking (interconnected pattern) are the two most common structural failures in asphalt pavement"
              />

              <div className="space-y-4 mt-6">
                {[
                  {
                    title: "Rutting",
                    color: "orange" as const,
                    desc: "Grooves form in wheel paths when the binder is too soft for the heat and load. Harder grades, SMA, and PMB reduce it. A binder that softens too much in summer heat is the most common cause.",
                  },
                  {
                    title: "Fatigue cracking",
                    color: "teal" as const,
                    desc: "Repeated loading cracks the layer from the bottom up, often in an interconnected pattern. Thin layers over weak or insufficiently compacted bases suffer most.",
                  },
                  {
                    title: "Thermal cracking",
                    color: "blue" as const,
                    desc: "Cold temperatures make the binder brittle. Softer grades such as 80/100 — or a low-temperature PG grade — help in cooler regions.",
                  },
                  {
                    title: "Stripping",
                    color: "violet" as const,
                    desc: "Water gets between the binder and the stone and breaks the adhesive bond. Good drainage, clean aggregate, and anti-strip additives such as hydrated lime reduce the risk.",
                  },
                  {
                    title: "Ageing and ravelling",
                    color: "red" as const,
                    desc: "Oxidation hardens the binder over time. Stones start to come loose — this is ravelling. Correct binder content and proper compaction at construction slow down the ageing process significantly.",
                  },
                ].map(({ title, color, desc }) => (
                  <div
                    key={title}
                    className={`bg-white/5 border border-white/10 rounded-xl p-5 border-l-4 ${
                      color === "orange" ? "border-l-orange-400"
                      : color === "teal" ? "border-l-teal-400"
                      : color === "blue" ? "border-l-blue-400"
                      : color === "violet" ? "border-l-violet-400"
                      : "border-l-red-400"
                    }`}
                  >
                    <h3 className="text-white font-bold mb-2 text-base">{title}</h3>
                    <p className="text-white/65 text-sm leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
              <div className="bg-orange-500/10 border border-orange-400/20 rounded-xl p-5 mt-6">
                <p className="text-orange-200 text-sm leading-relaxed flex items-start gap-2">
                  <AlertCircle size={15} className="mt-0.5 shrink-0" />
                  <span>
                    <strong>Compaction matters most.</strong> A mix that leaves the roller with too many air voids lets in water and air — and ages faster than one correctly compacted at the right temperature.
                  </span>
                </p>
              </div>
            </section>

            {/* ── SECTION: Cost Drivers ── */}
            <section id="cost-drivers" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                What Drives the Cost
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                No single price applies everywhere, but the same factors move every quote:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {[
                  { factor: "Crude oil prices", detail: "Bitumen prices tend to follow the crude oil market directly." },
                  { factor: "Layer thickness and area", detail: "Tonnage — and therefore cost — scales directly with both." },
                  { factor: "Base preparation", detail: "Repairs, drainage work, and aggregate base often cost more than the surfacing itself." },
                  { factor: "Haul distance", detail: "Mix must arrive hot. Long hauls limit which plants can supply the job." },
                  { factor: "Binder type", detail: "PMB costs more than plain 60/70. Confirm which grade the spec requires before comparing quotes." },
                  { factor: "Aggregate source", detail: "Local quarries keep transport costs down. Remote quarries add freight on both aggregate and finished mix." },
                ].map(({ factor, detail }) => (
                  <div key={factor} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-teal-400 shrink-0" />
                    <span className="text-white/75 text-sm">
                      <strong className="text-white">{factor}:</strong> {detail}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-white/80 leading-relaxed text-base">
                Compare quotes on the same basis: same thickness, same mix type, and same units. Mixing tonnes of mix with tonnes of binder in a comparison leads to the same confusion as mixing the two words.
              </p>
            </section>

            {/* ── SECTION: Recycling ── */}
            <section id="recycling" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Recycling and the Environment
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Asphalt is one of the most recycled construction materials on earth. Crews mill old pavement, crush it, and feed it back into new mixes as reclaimed asphalt pavement (RAP). The binder in that reclaimed material still works and contributes to the new mix design.
              </p>
              <div className="bg-gradient-to-br from-teal-500/10 to-green-600/10 border border-teal-400/20 rounded-2xl p-6 mb-5">
                <h3 className="text-lg font-black text-teal-300 mb-3">2024 Industry Data</h3>
                <p className="text-white/80 leading-relaxed text-base mb-3">
                  The{" "}
                  <a
                    href="https://www.asphaltpavement.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                  >
                    National Asphalt Pavement Association (NAPA) industry survey
                    <ExternalLink size={12} className="inline ml-0.5 mb-0.5" />
                  </a>{" "}
                  — conducted in partnership with the Federal Highway Administration — reported that <strong className="text-white">101.4 million tons of reclaimed asphalt pavement</strong> went back into use in the US in 2024.
                </p>
                <p className="text-white/80 leading-relaxed text-base">
                  The same survey put warm mix asphalt production at <strong className="text-white">178.3 million tons</strong> — approximately <strong className="text-white">40% of the total US market</strong>. Warm mix cuts fuel use, reduces fumes, and enables longer hauls before the mix cools below compaction temperature.
                </p>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Verify these figures against the most recent NAPA annual survey before citing them, as the numbers update each year.
              </p>
            </section>

            {/* ── SECTION: Which to Choose ── */}
            <section id="which-to-choose" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                Which One Should You Choose?
              </h2>
              <InfoTable
                headers={["Application", "Best Choice"]}
                rows={[
                  ["Driveway or car park", "Asphalt — thicker, copes better with turning and parked vehicles"],
                  ["Low-traffic rural road on a tight budget", "Sprayed bitumen seal"],
                  ["Highway, airport, port or industrial yard", "Asphalt with harder or modified binder"],
                  ["Pothole or patch repair", "Cold mix asphalt — no plant or heating needed"],
                  ["Reservoir or canal lining", "Asphalt — impermeable when properly designed"],
                  ["Bonding new layers to old pavement", "Tack coat of bitumen emulsion"],
                  ["Roof waterproofing", "Modified bitumen membrane (blown or PMB)"],
                ]}
              />
            </section>

            {/* ── SECTION: Quantities ── */}
            <section id="quantities" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                How to Estimate Bitumen and Asphalt Quantities
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Work out the mix weight first, then take the binder share from it. These two formulas cover most situations:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6 font-mono text-sm">
                <p className="text-teal-300 mb-2">
                  Mix (tonnes) = area (m²) × thickness (m) × density (kg/m³) ÷ 1,000
                </p>
                <p className="text-orange-300">
                  Bitumen (tonnes) = mix (tonnes) × binder % ÷ 100
                </p>
              </div>

              <SectionImage
                src="/asphalt-bitumen-quantity-estimation.webp"
                alt="Asphalt and bitumen quantity estimation — engineer calculating mix tonnage and binder content for a road pavement project"
                caption="Accurate quantity estimation starts with area, thickness, density and binder percentage — not guesswork"
              />

              <h3 className="text-2xl font-black text-white mb-4 mt-8">Worked Example</h3>
              <div className="bg-gradient-to-br from-teal-500/10 to-blue-600/10 border border-teal-400/20 rounded-2xl p-6 mb-6">
                <p className="text-white/80 leading-relaxed text-base mb-4">
                  A 500 m road section, 6 m wide, with a 50 mm binder course. Compacted density: 2,400 kg/m³. Binder content: 4.6%.
                </p>
                <div className="space-y-2 font-mono text-sm">
                  <p className="text-white/70">Area: 500 × 6 = <strong className="text-white">3,000 m²</strong></p>
                  <p className="text-white/70">Mix: 3,000 × 0.05 × 2,400 ÷ 1,000 = <strong className="text-white">360 tonnes</strong></p>
                  <p className="text-white/70">Bitumen: 360 × 0.046 = <strong className="text-teal-300">16.56 tonnes</strong></p>
                  <p className="text-white/70 text-xs mt-3">
                    To convert to litres: divide by bitumen density (~1.03 t/m³) → ≈ 16,100 litres.
                  </p>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Use the density and binder content from your actual mix design, not the values above. Add an allowance for wastage and base irregularity. The{" "}
                <Link
                  href="/"
                  className="text-orange-400 hover:text-orange-300 font-semibold underline underline-offset-2 transition-colors"
                >
                  BitumenCalcPro calculator
                </Link>{" "}
                runs these steps automatically and handles unit conversions.
              </p>

              <h3 className="text-xl font-black text-white mb-3">Common Estimating Mistakes</h3>
              <ul className="space-y-3">
                {[
                  "Ordering tonnes of asphalt when the quote is for tonnes of bitumen — or the reverse.",
                  "Using a density figure taken from a different mix type.",
                  "Skipping a wastage allowance and base irregularity factor.",
                  "Comparing the per-tonne price of mix with the per-tonne price of binder.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/80 text-base">
                    <AlertCircle size={15} className="text-orange-400 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* ── SECTION: Conclusion ── */}
            <section id="conclusion" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                Conclusion
              </h2>
              <div className="bg-gradient-to-br from-teal-500/15 via-blue-600/10 to-purple-600/10 border border-white/15 rounded-2xl p-6 md:p-8">
                <p className="text-white/85 leading-relaxed mb-4 text-base">
                  Asphalt vs bitumen is a question of binder versus mix. Bitumen is the petroleum-derived binder; asphalt is stone and sand coated in roughly 5% of it. Use bitumen alone for thin seals, tack coats, and waterproofing. Use asphalt where a surface has to carry traffic for years. Before you compare any quote, confirm which material and which unit it means. Should accidental overspray or spills occur during handling, check our step-by-step instructions on <Link href="/blog/how-to-remove-bitumen" className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors font-medium">removing bitumen safely from skin, equipment, and driveways</Link>.
                </p>
                <p className="text-white/85 leading-relaxed text-base mt-4">
                  If you&apos;re new to the material, you may also wonder how to say the word correctly. Our{" "}
                  <Link href="/blog/how-to-pronounce-bitumen" className="text-violet-400 hover:text-violet-300 underline underline-offset-2 transition-colors font-medium">
                    bitumen pronunciation guide
                  </Link>{" "}
                  covers British (BICH-uh-mun), American (buh-TOO-mun), and Australian accents with full IPA notation.
                </p>
                <p className="text-white/85 leading-relaxed mb-4 text-base">
                  Once you have the grade and mix type confirmed, check how the bitumen will arrive. Our guide on{" "}
                  <Link
                    href="/blog/how-is-bitumen-transported"
                    className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors font-medium"
                  >
                    how bitumen is transported
                  </Link>{" "}
                  — tanker temperatures, UN 3257 classification, and the site delivery checklist — is the natural next step.
                </p>
                <p className="text-white/85 leading-relaxed mb-4 text-base">
                  When choosing between flexible paving and rigid alternatives, compare the upfront installation costs, lifespan, and maintenance needs. See our comprehensive guide on <Link href="/blog/asphalt-vs-concrete" className="text-orange-400 hover:text-orange-300 underline underline-offset-2 transition-colors font-medium">asphalt vs concrete pavement differences</Link> for cost, durability, and climate suitability comparisons.
                </p>
                <p className="text-white/85 leading-relaxed text-base">
                  Use the{" "}
                  <Link
                    href="/"
                    className="text-orange-400 hover:text-orange-300 font-semibold underline underline-offset-2 transition-colors"
                  >
                    free bitumen quantity calculator
                  </Link>{" "}
                  to turn your road dimensions into mix tonnage and binder weight before placing the order.
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
                    q: "Is asphalt the same as bitumen?",
                    a: "No. Bitumen is the binder, and asphalt is the mix that contains it — roughly 95% stone and sand bound by about 5% bitumen. In the US, 'asphalt' can also mean the binder itself, which is the main source of confusion.",
                  },
                  {
                    q: "Can you pave a road with bitumen alone?",
                    a: "No. Bitumen has no load-bearing structure without stone aggregate. Even a sprayed bitumen seal has chips rolled into it to provide texture and structural grip.",
                  },
                  {
                    q: "How much bitumen is in asphalt?",
                    a: "Usually 5 to 6% by weight. The full range for paving mixes is about 4 to 7%, depending on mix type — base courses sit near 4.5% while stone mastic asphalt reaches around 7%.",
                  },
                  {
                    q: "Is bitumen the same as tar?",
                    a: "No. Bitumen comes from crude oil refining, and tar comes from destructive distillation of coal or wood. 'Tarmac' started as a brand for tar-bound stone but is now used loosely for any black paved surface, even though modern versions use bitumen.",
                  },
                  {
                    q: "Which is cheaper, a sprayed bitumen seal or asphalt?",
                    a: "A sprayed bitumen seal costs less to install. Asphalt costs more upfront but lasts significantly longer, so busy surfaces usually favour asphalt on a cost-per-year-of-service basis.",
                  },
                  {
                    q: "Which bitumen grade is used on roads in Pakistan?",
                    a: "60/70 penetration grade is the usual choice, with 80/100 in cooler northern regions and PMB for high-heat, heavy-traffic routes. The project specification and NHA standards have the final say.",
                  },
                  {
                    q: "Can asphalt be recycled?",
                    a: "Yes. Old pavement is milled, crushed and fed back into new mixes as reclaimed asphalt pavement (RAP). The binder in it still functions, reducing both material cost and environmental waste.",
                  },
                  {
                    q: "What is the difference between bitumen and asphalt cement?",
                    a: "Nothing meaningful. Asphalt cement is the US term for paving-grade bitumen. Both phrases describe the same material — the petroleum-derived binder used in asphalt mixes.",
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
