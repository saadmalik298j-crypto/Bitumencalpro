import AuthorBio from "../../components/AuthorBio";
// app/blog/asphalt-vs-concrete/page.tsx
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
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Asphalt vs Concrete: Cost, Lifespan & Which One to Choose",
  description:
    "Asphalt vs concrete compared on cost, lifespan, climate performance, and maintenance. Find out which paving material saves you more money over time.",
  keywords: [
    "asphalt vs concrete",
    "asphalt or concrete driveway",
    "concrete vs asphalt cost",
    "asphalt lifespan",
    "concrete driveway cost",
    "which is better asphalt or concrete",
    "asphalt vs concrete roads",
    "paving material comparison",
  ],
  alternates: { canonical: "https://bitumencalcpro.com/blog/asphalt-vs-concrete" },
  openGraph: {
    title: "Asphalt vs Concrete: Cost, Lifespan & Which One to Choose | BitumenCalcPro",
    description:
      "Asphalt costs less upfront. Concrete lasts longer. Full comparison — cost, durability, climate fit, maintenance, and how to choose.",
    url: "https://bitumencalcpro.com/blog/asphalt-vs-concrete",
    siteName: "BitumenCalcPro",
    type: "article",
    publishedTime: "2026-10-01T00:00:00.000Z",
    authors: ["BitumenCalcPro"],
    images: [
      {
        url: "/asphalt-vs-concrete-comparison..webp",
        width: 1200,
        height: 675,
        alt: "Asphalt vs concrete paving comparison — cost, lifespan, and climate performance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Asphalt vs Concrete: Cost, Lifespan & Which One to Choose",
    description:
      "Asphalt costs less upfront. Concrete lasts longer. Full breakdown of cost, durability, climate fit, and maintenance.",
    images: ["/asphalt-vs-concrete-comparison..webp"],
  },
  robots: {
    "max-image-preview": "large",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Asphalt vs Concrete: Cost, Lifespan, Climate Fit, and Which One to Choose",
  description:
    "Asphalt vs concrete compared on cost, lifespan, climate performance, and maintenance. Find out which paving material saves you more money over time.",
  image: "https://bitumencalcpro.com/asphalt-vs-concrete-comparison..webp",
  datePublished: "2026-10-01T00:00:00.000Z",
  dateModified: "2026-10-01T00:00:00.000Z",
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
    logo: { "@type": "ImageObject", url: "https://bitumencalcpro.com/favicon.ico" },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://bitumencalcpro.com/blog/asphalt-vs-concrete",
  },
  keywords:
    "asphalt vs concrete, asphalt or concrete driveway, concrete vs asphalt cost, which is better asphalt or concrete, asphalt lifespan, paving material comparison",
  articleSection: "Asphalt & Paving Materials",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is asphalt or concrete cheaper?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Asphalt is cheaper to install, typically $3 to $15 per square foot versus concrete's $6 to $20 per square foot. Over 25 to 30 years, including maintenance and eventual replacement, the total cost often evens out or slightly favors concrete.",
      },
    },
    {
      "@type": "Question",
      name: "Which lasts longer, asphalt or concrete?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Concrete lasts longer. A well-maintained concrete surface typically holds up 25 to 40 years, compared to 15 to 20 years for asphalt.",
      },
    },
    {
      "@type": "Question",
      name: "Is asphalt or concrete better for cold climates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Asphalt generally performs better in cold climates. Its flexibility handles freeze-thaw cycles and ground movement better than rigid concrete, which is also more vulnerable to road salt damage.",
      },
    },
    {
      "@type": "Question",
      name: "Is asphalt or concrete better for hot climates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Concrete typically holds up better in extreme heat, since asphalt can soften and rut under sustained high temperatures and heavy traffic.",
      },
    },
    {
      "@type": "Question",
      name: "How often does asphalt need sealcoating?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every 2 to 5 years, depending on traffic, climate, and sun exposure. Skipping this maintenance shortens asphalt's lifespan.",
      },
    },
    {
      "@type": "Question",
      name: "Does concrete need sealcoating like asphalt does?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Concrete needs occasional degreasing and joint sealing instead, which is less frequent and generally less expensive over time than asphalt's sealcoating cycle.",
      },
    },
    {
      "@type": "Question",
      name: "Which paving material is more environmentally friendly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on what you weigh more heavily. Asphalt is about 95% recyclable, but concrete's much longer lifespan means fewer total replacement cycles over time.",
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
      name: "Asphalt vs Concrete",
      item: "https://bitumencalcpro.com/blog/asphalt-vs-concrete",
    },
  ],
};

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

export default function AsphaltVsConcretePage() {
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
            <span className="text-white/90 font-medium">Asphalt vs Concrete</span>
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
            Asphalt vs Concrete: Cost, Lifespan, Climate Fit, and Which One to Choose
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-white/50 text-sm mb-10">
            <span className="flex items-center gap-1.5">
              <Calendar size={13} />
              <time dateTime="2026-10-01">October 1, 2026</time>
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

      {/* ── HERO IMAGE — Image 1: below H1, before Quick Answer ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionImage
          src="/asphalt-vs-concrete-comparison..webp"
          alt="Asphalt vs concrete paving comparison — cost, lifespan, and climate performance side by side"
          caption="Asphalt and concrete solve the same problem in fundamentally different ways — the right choice depends on your budget timeline, climate, and project type"
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
                Asphalt costs less upfront (about $3 to $15 per square foot) and installs faster, but it
                lasts 15 to 20 years and needs sealcoating every 2 to 5 years. Concrete costs more upfront
                (about $6 to $20 per square foot), lasts 25 to 40 years, and needs far less maintenance.
                Asphalt handles cold climates and freeze-thaw cycles better. Concrete holds up better in
                extreme heat. The right choice depends on your budget, climate, and how long you plan to
                keep the surface.
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
                  { id: "what-they-are", label: "What Asphalt and Concrete Are Made Of" },
                  { id: "cost", label: "Cost Comparison" },
                  { id: "lifespan", label: "Lifespan and Durability" },
                  { id: "climate", label: "Climate and Weather Performance" },
                  { id: "maintenance", label: "Maintenance Requirements" },
                  { id: "repair", label: "Repair Costs" },
                  { id: "environment", label: "Environmental Considerations" },
                  { id: "roads", label: "Roads and Highways" },
                  { id: "which-to-choose", label: "Which Should You Choose?" },
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

            {/* Intro */}
            <section className="mb-12">
              <p className="text-white/85 leading-relaxed mb-4 text-base">
                Asphalt vs concrete comes down to a trade: less money now or less money later. Asphalt wins
                on upfront cost and installation speed. Concrete wins on lifespan and long-term maintenance.
                Neither material is better in every case. The right pick depends on your climate, your
                budget timeline, and what the surface needs to handle.
              </p>
              <p className="text-white/85 leading-relaxed mb-4 text-base">
                This guide breaks down the real differences: cost, durability, climate performance,
                maintenance, and how each material behaves on a driveway, road, or parking lot. If
                you&apos;re budgeting a{" "}
                <Link
                  href="/blog/bitumen-driveway-cost-worldwide"
                  className="text-teal-400 hover:text-orange-300 underline underline-offset-2 transition-colors font-medium"
                >
                  bitumen driveway project
                </Link>{" "}
                or planning quantities for any paving job, our free{" "}
                <Link
                  href="/"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors font-medium"
                >
                  Bitumen Calculator
                </Link>{" "}
                can help you estimate material quantities and costs before committing to a quote.
              </p>
            </section>

            {/* What They Are Made Of */}
            <section id="what-they-are" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                What Are Asphalt and Concrete Made Of
              </h2>
              <SectionImage
                src="/asphalt-concrete-materials-comparison.webp"
                alt="Asphalt and concrete material composition comparison — aggregate and bitumen binder versus cement, water, and sand"
                caption="The core materials define everything downstream — asphalt's bitumen binder stays flexible while cement hydration locks concrete into a rigid slab"
              />
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Asphalt is a mix of crushed stone, sand, and bitumen — a petroleum-based binder that holds
                the aggregate together. It&apos;s laid hot, usually around 300°F, then compacted with
                rollers before it cools into a solid, flexible surface. Understanding the role of{" "}
                <Link
                  href="/blog/asphalt-vs-bitumen"
                  className="text-teal-400 hover:text-orange-300 underline underline-offset-2 transition-colors font-medium"
                >
                  bitumen as an asphalt binder
                </Link>{" "}
                clarifies why the two paving materials perform so differently — bitumen&apos;s thermoplastic
                properties are the root of asphalt&apos;s flexibility advantage.
              </p>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Concrete is a mix of cement, water, sand, and coarse aggregate. Cement reacts with water in
                a chemical process called hydration, which hardens the mix into a rigid slab. Concrete takes
                about 28 days to reach full design strength, though it can handle light foot traffic within
                a week.
              </p>
              <p className="text-white/80 leading-relaxed text-base">
                The core difference starts here. Asphalt stays somewhat flexible after it sets. Concrete
                becomes rigid. That single property drives most of the performance differences covered below.
              </p>
            </section>

            {/* Cost */}
            <section id="cost" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Cost Comparison
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Asphalt is cheaper to install in almost every case. Reported ranges vary by region and
                project size, but asphalt typically runs{" "}
                <strong className="text-white">$3 to $15 per square foot installed</strong>, while concrete
                runs <strong className="text-white">$6 to $20 per square foot</strong>. For a
                600-square-foot driveway, that puts asphalt around $1,800 to $9,000 and concrete around
                $3,600 to $12,000.
              </p>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                The upfront gap closes over time. Asphalt needs sealcoating every 2 to 5 years at roughly
                $0.15 to $0.45 per square foot, plus periodic crack repairs. Concrete needs occasional
                degreasing and joint sealing, but nothing on that recurring schedule. Several cost studies
                that track 30-year total ownership costs — including sealcoating, repairs, and eventual
                replacement — find the two materials land close to each other, or concrete comes out
                slightly ahead, once you factor in that a concrete surface often outlasts two full asphalt
                replacements.
              </p>
              <div className="bg-gradient-to-br from-teal-500/15 to-teal-600/10 border border-teal-400/25 rounded-2xl p-6 mb-5">
                <p className="text-white/85 leading-relaxed text-base">
                  <strong className="text-teal-300">Bottom line:</strong> Asphalt wins if you need the
                  lower number today. Concrete wins if you&apos;re comparing total cost across 25 to 30
                  years.
                </p>
              </div>
            </section>

            {/* Lifespan */}
            <section id="lifespan" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                Lifespan and Durability
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Concrete lasts longer. A well-installed concrete surface typically holds up{" "}
                <strong className="text-white">25 to 40 years</strong>, and some sources report 50 years
                with strict maintenance. Asphalt typically lasts{" "}
                <strong className="text-white">15 to 20 years</strong> before it needs full replacement,
                though consistent sealcoating and prompt crack repair can push that toward the higher end.
              </p>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Compressive strength tells part of the story. Standard concrete mixes reach 3,000 to 4,000
                PSI, and highway-grade mixes go higher — 4,000 to 6,000 PSI — which is why concrete handles
                heavy, repeated loads like truck traffic and airport runways well. Asphalt&apos;s strength
                comes from a different property: flexibility. It bends slightly under load and ground
                movement instead of cracking, which matters more on surfaces exposed to shifting soil or
                freeze-thaw cycles. This same structural reasoning informs decisions about{" "}
                <Link
                  href="/blog/asphalt-thickness"
                  className="text-teal-400 hover:text-orange-300 underline underline-offset-2 transition-colors font-medium"
                >
                  asphalt pavement thickness and layer design
                </Link>
                .
              </p>
              <p className="text-white/80 leading-relaxed text-base">
                Concrete&apos;s rigidity is also its weak point. Once a concrete slab cracks, the crack
                doesn&apos;t self-heal the way an asphalt surface can be resealed. Asphalt develops surface
                wear and smaller cracks over time, but repairs are usually simpler and cheaper per square
                foot than a concrete slab replacement.
              </p>
            </section>

            {/* Climate */}
            <section id="climate" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Climate and Weather Performance
              </h2>
              <SectionImage
                src="/asphalt-vs-concrete-climate-performance.webp"
                alt="Asphalt vs concrete climate performance — freeze-thaw cold weather versus extreme heat resistance comparison"
                caption="Climate is often the deciding factor — asphalt flexes with freeze-thaw cycles while concrete resists softening in sustained summer heat"
              />
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Climate is often the deciding factor, and the two materials respond to weather in opposite
                ways.
              </p>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                <strong className="text-white">Cold climates favour asphalt.</strong> Its flexibility lets
                it expand and contract with freeze-thaw cycles without cracking as readily as rigid
                concrete. Asphalt&apos;s dark surface also absorbs more heat from sunlight, which helps
                snow and ice melt faster. Road salt, heavily used in northern climates, is harder on
                concrete than asphalt, since salt penetrates concrete&apos;s pores and speeds up surface
                scaling and deterioration.
              </p>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                <strong className="text-white">Hot climates favour concrete.</strong> Concrete resists
                softening and rutting under sustained high heat better than asphalt does. Asphalt can
                soften in extreme summer temperatures, leading to surface deformation under heavy or
                slow-moving traffic. This is part of why cities in hot regions have shifted toward more
                concrete paving — partly to reduce the{" "}
                <a
                  href="https://www.epa.gov/heatislands/using-cool-pavements-reduce-heat-islands"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                >
                  urban heat island effect that dark asphalt surfaces contribute to
                  <ExternalLink size={12} className="inline ml-0.5 mb-0.5" />
                </a>
                .
              </p>
              <p className="text-white/80 leading-relaxed mb-6 text-base">
                Installation timing matters too. Concrete needs temperatures within a specific range during
                its 24 to 48-hour curing window. Pouring concrete below 50°F slows the hydration process
                and can reduce final compressive strength if not managed with insulation or heated water.
                Asphalt installs across a wider temperature range and cures faster, which is part of why
                cold-climate contractors often prefer it for winter or shoulder-season work.
              </p>
              <InfoTable
                headers={["Factor", "Asphalt", "Concrete"]}
                rows={[
                  [
                    "Cold weather / freeze-thaw",
                    "Handles well — flexes with movement",
                    "Prone to cracking and salt damage",
                  ],
                  ["Extreme heat", "Can soften and rut", "Holds shape well"],
                  [
                    "Installation temperature range",
                    "Wider",
                    "Narrower — needs 50\u00b0F+ typically",
                  ],
                  ["Snow and ice melt", "Faster, due to dark surface", "Slower"],
                ]}
              />
            </section>

            {/* Maintenance */}
            <section id="maintenance" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                Maintenance Requirements
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Asphalt needs more frequent, smaller maintenance tasks. Sealcoating every 2 to 5 years
                protects the surface from UV exposure, oil, and water penetration. Small cracks need
                filling before they widen and let water into the base layer. Skipping this schedule
                shortens asphalt&apos;s lifespan noticeably.
              </p>
              <p className="text-white/80 leading-relaxed text-base">
                Concrete needs less frequent attention but different types of care. Occasional degreasing
                removes oil and grease stains, since these soak into concrete&apos;s more porous surface.
                Joint sealing prevents water infiltration at expansion joints. Concrete doesn&apos;t need
                the recurring sealcoat cycle asphalt does, which is the main reason its long-term
                maintenance cost runs lower.
              </p>
            </section>

            {/* Repair */}
            <section id="repair" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Repair Costs
              </h2>
              <SectionImage
                src="/asphalt-concrete-maintenance-repair.webp"
                alt="Asphalt and concrete maintenance and repair costs comparison — crack filling and sealcoating versus slab replacement"
                caption="Asphalt repairs are cheaper per incident but happen more often — concrete repairs cost more but are needed far less frequently"
              />
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Asphalt repairs tend to be cheaper and faster per instance. A small crack costs roughly{" "}
                <strong className="text-white">$1 to $3 per linear foot</strong> to fill. Larger issues
                like potholes or minor sinking run{" "}
                <strong className="text-white">$2 to $5 per square foot</strong>. Asphalt&apos;s
                flexibility also means minor surface damage rarely requires a full section replacement.
              </p>
              <p className="text-white/80 leading-relaxed text-base">
                Concrete repairs cost more per instance — roughly{" "}
                <strong className="text-white">$3 to $25 per square foot</strong> depending on severity —
                and a cracked slab section often needs full removal and replacement rather than a surface
                patch, since concrete doesn&apos;t compact or reseal the way asphalt does. Unforeseen
                repair scope is also one of the most common{" "}
                <Link
                  href="/blog/asphalt-estimation-mistakes"
                  className="text-teal-400 hover:text-orange-300 underline underline-offset-2 transition-colors font-medium"
                >
                  asphalt and paving estimation mistakes
                </Link>{" "}
                that push project budgets over before work even starts.
              </p>
            </section>

            {/* Environment */}
            <section id="environment" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                Environmental Considerations
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Asphalt has a real recycling advantage. Roughly 95% of removed asphalt gets reused in new
                paving projects, since old asphalt can be milled up and reprocessed. This cuts down on
                both landfill waste and the need for fresh raw material. The{" "}
                <a
                  href="https://www.fhwa.dot.gov/Pavement/recycling/rap/index.cfm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                >
                  Federal Highway Administration reports asphalt is North America&apos;s most
                  recycled material by tonnage
                  <ExternalLink size={12} className="inline ml-0.5 mb-0.5" />
                </a>
                .
              </p>
              <p className="text-white/80 leading-relaxed text-base">
                Concrete&apos;s environmental case rests more on longevity than recyclability. A surface
                that lasts 30 to 40 years — versus asphalt&apos;s 15 to 20 — means fewer total replacement
                cycles and less material consumed over a property&apos;s lifetime, even though concrete
                production (particularly cement manufacturing) carries a heavier carbon footprint per ton
                than asphalt production. Neither material has a clear environmental win across every
                scenario. It depends on whether you weight recyclability or lifespan more heavily.
              </p>
            </section>

            {/* Roads */}
            <section id="roads" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Asphalt vs Concrete for Roads and Highways
              </h2>
              <SectionImage
                src="/asphalt-vs-concrete-highway-heavy-traffic.webp"
                alt="Asphalt vs concrete road and highway comparison — heavy truck traffic performance on different paving surfaces"
                caption="On high-volume highways, concrete's lifespan advantage often justifies its higher upfront cost and longer curing closure time"
              />
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                At the road and highway scale, the same trade-offs apply, with a few added factors.
              </p>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Asphalt is the more common choice for standard roads, largely due to lower upfront cost and
                faster installation — fewer lane closures and shorter curing windows matter more on
                high-traffic routes. Its flexibility also handles the ground movement that comes with a
                road&apos;s much longer, continuous surface better than a rigid material would. These are
                some of the same considerations that influence decisions around{" "}
                <Link
                  href="/blog/cold-mix-bitumen"
                  className="text-teal-400 hover:text-orange-300 underline underline-offset-2 transition-colors font-medium"
                >
                  cold mix versus hot mix asphalt for road maintenance
                </Link>
                .
              </p>
              <p className="text-white/80 leading-relaxed text-base">
                Concrete shows up more often on highways designed for very heavy, sustained truck traffic,
                airport runways, and stretches where long-term durability outweighs the higher installation
                cost and longer closure time needed for curing. Some transportation studies suggest
                concrete roads can last roughly twice as long as asphalt roads under comparable
                heavy-traffic conditions, though the exact multiplier varies by region, traffic load, and
                climate.
              </p>
            </section>

            {/* Which to Choose */}
            <section id="which-to-choose" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                Which Should You Choose?
              </h2>
              <SectionImage
                src="/choosing-asphalt-or-concrete-driveway.webp"
                alt="Choosing asphalt or concrete for your driveway — practical decision guide based on budget, climate, and project lifespan"
                caption="A few targeted questions narrow the decision fast — budget timeline and climate are the two variables that matter most"
              />
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                A few practical questions narrow this down fast:
              </p>
              <div className="space-y-4 mb-6">
                {[
                  {
                    q: "Is your budget tighter right now than it will be later?",
                    a: "Asphalt's lower upfront cost makes sense if you need to spread expenses over time rather than pay more today for less maintenance later.",
                  },
                  {
                    q: "Do you live somewhere with harsh winters and heavy salt use?",
                    a: "Asphalt's flexibility and better cold-weather performance usually make it the safer pick.",
                  },
                  {
                    q: "Do you live somewhere with intense, sustained summer heat?",
                    a: "Concrete's heat resistance avoids the softening and rutting asphalt can experience.",
                  },
                  {
                    q: "How long do you plan to keep the property?",
                    a: "If you're staying 20-plus years, concrete's longer lifespan and lower maintenance frequency often make it the better long-term value, even with the higher installation cost.",
                  },
                  {
                    q: "Do you want a lower-maintenance surface, even if it costs more upfront?",
                    a: "Concrete is the clear choice here.",
                  },
                ].map(({ q, a }, i) => (
                  <div
                    key={i}
                    className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/[0.08] transition-colors"
                  >
                    <p className="text-white font-bold text-base mb-1">{q}</p>
                    <p className="text-white/70 text-sm leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Conclusion */}
            <section id="conclusion" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Conclusion
              </h2>
              <div className="bg-gradient-to-br from-teal-500/15 via-blue-600/10 to-purple-600/10 border border-white/15 rounded-2xl p-6 md:p-8">
                <p className="text-white/85 leading-relaxed mb-4 text-base">
                  Asphalt and concrete solve the same problem in different ways. Asphalt costs less to
                  install, cures faster, and flexes with cold weather and ground movement — but it needs
                  regular sealcoating and typically lasts 15 to 20 years. Concrete costs more upfront and
                  takes longer to cure, but it resists heat well, needs far less recurring maintenance, and
                  typically lasts 25 to 40 years. Climate, budget, timeline, and how long you plan to keep
                  the surface should drive the decision more than upfront price alone.
                </p>
                <p className="text-white/85 leading-relaxed mb-4 text-base">
                  To understand the full properties of the{" "}
                  <Link
                    href="/blog/what-is-bitumen"
                    className="text-teal-400 hover:text-orange-300 font-semibold underline underline-offset-2 transition-colors"
                  >
                    bitumen binder that gives asphalt its flexibility
                  </Link>{" "}
                  — including how its petroleum chemistry affects climate response and durability — our
                  complete bitumen guide covers all of that in detail.
                </p>
                <p className="text-white/85 leading-relaxed text-base">
                  Planning a paving project? Use our free{" "}
                  <Link
                    href="/"
                    className="text-teal-400 hover:text-orange-300 font-semibold underline underline-offset-2 transition-colors"
                  >
                    Bitumen Calculator Online
                  </Link>{" "}
                  to estimate mix weight, binder content, and aggregate requirements accurately — before
                  you commit to a contractor quote.
                </p>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-6 border-l-4 border-orange-400 pl-4">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {[
                  {
                    q: "Is asphalt or concrete cheaper?",
                    a: "Asphalt is cheaper to install, typically $3 to $15 per square foot versus concrete's $6 to $20 per square foot. Over 25 to 30 years, including maintenance and eventual replacement, the total cost often evens out or slightly favors concrete.",
                  },
                  {
                    q: "Which lasts longer, asphalt or concrete?",
                    a: "Concrete lasts longer. A well-maintained concrete surface typically holds up 25 to 40 years, compared to 15 to 20 years for asphalt.",
                  },
                  {
                    q: "Is asphalt or concrete better for cold climates?",
                    a: "Asphalt generally performs better in cold climates. Its flexibility handles freeze-thaw cycles and ground movement better than rigid concrete, which is also more vulnerable to road salt damage.",
                  },
                  {
                    q: "Is asphalt or concrete better for hot climates?",
                    a: "Concrete typically holds up better in extreme heat, since asphalt can soften and rut under sustained high temperatures and heavy traffic.",
                  },
                  {
                    q: "How often does asphalt need sealcoating?",
                    a: "Every 2 to 5 years, depending on traffic, climate, and sun exposure. Skipping this maintenance shortens asphalt's lifespan.",
                  },
                  {
                    q: "Does concrete need sealcoating like asphalt does?",
                    a: "No. Concrete needs occasional degreasing and joint sealing instead, which is less frequent and generally less expensive over time than asphalt's sealcoating cycle.",
                  },
                  {
                    q: "Which paving material is more environmentally friendly?",
                    a: "It depends on what you weigh more heavily. Asphalt is about 95% recyclable, but concrete's much longer lifespan means fewer total replacement cycles over time.",
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

            {/* Navigation */}
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
