import AuthorBio from "../../components/AuthorBio";
// app/blog/asphalt-thickness/page.tsx
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
  title: "Asphalt Thickness Chart: Driveways, Roads, Parking Lots & Trucks",
  description:
    "Complete asphalt thickness chart & guide. Get exact paving depth & base specs for driveways, roads & parking lots.",
  keywords: [
    "asphalt thickness",
    "asphalt thickness for driveway",
    "how thick should asphalt be",
    "asphalt depth for parking lot",
    "asphalt thickness chart",
    "road asphalt thickness",
    "asphalt thickness for heavy equipment",
    "driveway paving thickness",
    "pavement thickness guide",
  ],
  alternates: {
    canonical: "https://bitumencalcpro.com/blog/asphalt-thickness",
  },
  openGraph: {
    title:
      "Asphalt Thickness: Complete Chart for Driveways, Roads, Parking Lots & Heavy Equipment | BitumenCalcPro",
    description:
      "Complete asphalt thickness chart & guide. Get exact paving depth & base specs for driveways, roads & parking lots.",
    url: "https://bitumencalcpro.com/blog/asphalt-thickness",
    siteName: "BitumenCalcPro",
    type: "article",
    publishedTime: "2026-08-21T00:00:00.000Z",
    authors: ["BitumenCalcPro"],
    images: [
      {
        url: "/asphalt-thickness-driveway-road-parking-lot.webp",
        width: 1200,
        height: 630,
        alt: "Asphalt thickness for driveways, roads, and parking lots — complete visual guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Asphalt Thickness Chart: Driveways, Roads, Parking Lots & Trucks",
    description:
      "Complete asphalt thickness chart & guide. Get exact paving depth & base specs for driveways, roads & parking lots.",
    images: ["/asphalt-thickness-driveway-road-parking-lot.webp"],
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
    "Asphalt Thickness: Complete Chart for Driveways, Roads, Parking Lots & Heavy Equipment",
  description:
    "Complete asphalt thickness chart & guide. Get exact paving depth & base specs for driveways, roads & parking lots.",
  image:
    "https://bitumencalcpro.com/asphalt-thickness-driveway-road-parking-lot.webp",
  datePublished: "2026-08-21T00:00:00.000Z",
  dateModified: "2026-08-21T00:00:00.000Z",
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
    "@id": "https://bitumencalcpro.com/blog/asphalt-thickness",
  },
  keywords:
    "asphalt thickness, driveway asphalt thickness, road asphalt thickness, parking lot paving depth, heavy equipment asphalt",
  articleSection: "Asphalt & Paving Materials",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How thick should asphalt be for a driveway?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most residential driveways need 2 to 3 inches of compacted asphalt. If the driveway will regularly handle heavier vehicles like RVs or trucks, 3 to 4 inches is the safer choice.",
      },
    },
    {
      "@type": "Question",
      name: "How thick should asphalt be for a road?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It varies widely, from around 4 inches for local residential streets up to 12 inches for highways carrying heavy commercial traffic, depending on projected traffic loads and engineering design.",
      },
    },
    {
      "@type": "Question",
      name: "How thick should asphalt be for heavy equipment or trucks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Areas regularly handling heavy trucks or equipment typically need 6 to 8 inches of asphalt, often over a thicker aggregate base than standard applications.",
      },
    },
    {
      "@type": "Question",
      name: "How thick should asphalt be for a parking lot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard parking spaces generally need 3 inches, while drive lanes, entrances, and loading zones need 4 to 6 inches due to the additional stress from turning and braking traffic.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if asphalt is too thin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Thin asphalt can't distribute vehicle weight properly, leading to fatigue cracking. Once cracks form, water intrusion and continued traffic quickly turn them into potholes and larger structural failures.",
      },
    },
    {
      "@type": "Question",
      name: "Is the aggregate base as important as the asphalt thickness?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The base layer distributes load before it reaches the soil, and an inadequate base undermines even a properly thick asphalt layer above it.",
      },
    },
    {
      "@type": "Question",
      name: "Does climate affect how thick asphalt should be?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Regions with severe freeze-thaw cycles or extreme heat generally need thicker asphalt to handle the additional expansion, contraction, and stress those conditions place on the pavement.",
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
      name: "Asphalt Thickness",
      item: "https://bitumencalcpro.com/blog/asphalt-thickness",
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
export default function AsphaltThicknessPage() {
  return (
    <>
      <Script
        id="schema-article-asphalt-thickness"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="schema-faq-asphalt-thickness"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="schema-breadcrumb-asphalt-thickness"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ── HERO BAND ── */}
      <div className="relative pt-16 pb-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-teal-600/10 pointer-events-none" />
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
            <span className="text-white/90 font-medium">Asphalt Thickness</span>
          </nav>

          {/* Category badge */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="inline-flex items-center gap-1.5 bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
              <Layers size={12} />
              Asphalt &amp; Paving
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-6 max-w-4xl">
            Asphalt Thickness: Complete Chart for Driveways, Roads, Parking
            Lots &amp; Heavy Equipment
          </h1>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-4 text-white/50 text-sm mb-10">
            <span className="flex items-center gap-1.5">
              <Calendar size={13} />
              <time dateTime="2026-08-21">August 21, 2026</time>
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

      {/* ── ARTICLE BODY + SIDEBAR ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24">
        <div className="flex flex-col xl:flex-row gap-12 items-start">

          {/* ── MAIN CONTENT ── */}
          <article className="flex-1 min-w-0">

            {/* Quick Answer */}
            <div className="mb-8 bg-gradient-to-br from-orange-500/15 to-orange-600/10 border border-orange-400/25 rounded-2xl p-6 md:p-8">
              <h2 className="text-lg font-black text-orange-300 mb-3 flex items-center gap-2">
                <CheckCircle2 size={18} />
                Quick Answer
              </h2>
              <p className="text-white/85 leading-relaxed text-base">
                <strong className="text-white">Asphalt thickness</strong>{" "}
                typically ranges from 2 inches for light residential driveways
                to 12 inches for heavy-duty highways. Residential driveways need
                2–3 inches, commercial parking lots need 3–4 inches, and areas
                handling trucks or heavy equipment need 4–8 inches or more. The
                right thickness depends on traffic load, vehicle weight, soil
                conditions, and climate.
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
                    { id: "why-thickness-matters", label: "Why Thickness Matters" },
                    { id: "thickness-chart", label: "Thickness Chart by Use Case" },
                    { id: "residential-driveways", label: "Residential Driveways" },
                    { id: "asphalt-thickness-roads", label: "Roads & Highways" },
                    { id: "parking-lot-thickness", label: "Parking Lots" },
                    { id: "heavy-equipment-asphalt", label: "Heavy Equipment & Trucks" },
                    { id: "thickness-factors", label: "Factors Affecting Thickness" },
                    { id: "asphalt-mistakes", label: "Common Mistakes" },
                    { id: "video-guide", label: "Video Guide" },
                    { id: "faq", label: "FAQs" },
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


            {/* Featured Image — Placement 1 */}
            <SectionImage
              src="/asphalt-thickness-driveway-road-parking-lot.webp"
              alt="Asphalt thickness guide for driveways, roads, and parking lots showing different pavement applications"
              caption="Asphalt thickness requirements vary significantly by application — from 2-inch residential driveways to 12-inch heavy-duty highways"
              priority
            />


            {/* ── SECTION: Why Asphalt Thickness Matters ── */}
            <section id="why-thickness-matters" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                Why Asphalt Thickness Matters
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Asphalt spreads the weight of vehicles across a wider area
                before it reaches the soil underneath. Think of it like
                snowshoes distributing body weight over snow — a thin layer
                concentrates pressure into a small area, while a properly thick
                layer spreads that same load out and keeps the surface from
                deforming.
              </p>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                When asphalt is too thin for the load it carries, it flexes
                repeatedly under traffic. That repeated flexing creates small
                fatigue cracks, often in a web pattern that looks like alligator
                skin. Once cracks form, water gets into the base layer, and
                freeze-thaw cycles or continued traffic turn those cracks into
                potholes. Getting the thickness right from the start is far
                cheaper than repairing the damage that undersized asphalt
                eventually causes. You can use our{" "}
                <Link
                  href="/"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors font-medium"
                >
                  asphalt quantity calculator
                </Link>{" "}
                to estimate exact material requirements for your project before
                breaking ground.
              </p>

              {/* Image 2 — After "Why Asphalt Thickness Matters" */}
              <SectionImage
                src="/asphalt-pavement-layers-thickness-base-subgrade.webp"
                alt="Diagram showing asphalt pavement layers — asphalt surface, aggregate base, and subgrade soil"
                caption="A properly built pavement system layers asphalt over compacted aggregate base over prepared subgrade — each layer playing a structural role"
              />
            </section>

            {/* ── SECTION: Thickness Chart ── */}
            <section id="thickness-chart" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Asphalt Thickness Chart by Use Case
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                The table below summarizes typical asphalt thickness ranges
                across common applications, pulled together from paving industry
                guidance and typical contractor specifications. Always check
                local building codes, since exact requirements vary by
                municipality and climate.
              </p>

              <InfoTable
                headers={["Application", "Asphalt Thickness", "Aggregate Base"]}
                rows={[
                  [
                    "Residential driveway (standard)",
                    "2–3 inches",
                    "4–8 inches",
                  ],
                  [
                    "Residential driveway (heavy vehicles/RVs)",
                    "3–4 inches",
                    "6–8 inches",
                  ],
                  ["Commercial driveway", "3–4 inches", "8 inches"],
                  ["Parking spaces (light traffic)", "3 inches", "6 inches"],
                  [
                    "Parking lot drive lanes/entrances",
                    "4–6 inches",
                    "6–8 inches",
                  ],
                  [
                    "Heavy-duty parking (trucks, loading zones)",
                    "6–8 inches",
                    "8–12 inches",
                  ],
                  ["Local/residential roads", "4 inches", "6–8 inches"],
                  [
                    "Highways and major roads",
                    "4–12 inches",
                    "Varies by traffic study",
                  ],
                  ["Loading dock aprons", "6+ inches", "8–12 inches"],
                  [
                    "Walkways/trails (no aggregate base)",
                    "3–5 inches",
                    "None",
                  ],
                  [
                    "Walkways/trails (with aggregate base)",
                    "2–3 inches",
                    "4–6 inches",
                  ],
                ]}
              />

              <p className="text-white/65 text-sm italic mt-2 mb-6">
                These figures represent widely cited industry ranges rather than
                a single universal standard — always confirm against your
                project's engineering specification or local code before
                finalizing a design.
              </p>

              {/* Image 3 — After the chart */}
              <SectionImage
                src="/asphalt-thickness-driveway-parking-lot-highway-comparison.webp"
                alt="Side-by-side comparison of asphalt thickness for light-duty driveways, medium-duty parking lots, and heavy-duty highways"
                caption="Visual comparison of pavement cross-sections across light, medium, and heavy-duty applications — thickness scales directly with expected load"
              />
            </section>

            {/* ── SECTION: Residential Driveways ── */}
            <section id="residential-driveways" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                Asphalt Thickness for Residential Driveways
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Most residential driveways handling standard passenger vehicles
                need{" "}
                <strong className="text-white">
                  2 to 3 inches of compacted asphalt
                </strong>{" "}
                over a properly prepared aggregate base. The base layer often
                matters more than people expect — 4 to 8 inches of compacted
                granular aggregate underneath does much of the structural work,
                distributing weight before it ever reaches the soil.
              </p>

              {/* Image 4 — Inside Residential Driveways section */}
              <SectionImage
                src="/residential-driveway-asphalt-thickness-2-3-inches.webp"
                alt="Residential driveway asphalt installation showing 2 to 3 inch compacted asphalt over aggregate base"
                caption="Residential driveway construction — compacted asphalt over prepared granular base provides the load distribution needed for passenger vehicles"
              />

              <p className="text-white/80 leading-relaxed mb-5 text-base">
                If the driveway will regularly see heavier vehicles — an RV, a
                boat trailer, or a delivery truck — bumping up to 3 to 4 inches
                of asphalt is the safer call. The extra thickness helps
                distribute the additional axle weight and reduces the risk of
                indentations or surface buckling under repeated heavy loads. Some
                paving associations recommend 4 inches as a baseline for a
                full-depth residential driveway built for maximum longevity,
                particularly in regions with harsh freeze-thaw cycles.
              </p>
            </section>

            {/* ── SECTION: Roads ── */}
            <section id="asphalt-thickness-roads" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Asphalt Thickness for Roads
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Road thickness varies more than any other category, since it
                depends heavily on traffic volume, vehicle weight, and the
                engineering design behind the specific road. Local and
                residential streets with moderate traffic typically use around{" "}
                <strong className="text-white">4 inches of asphalt</strong>,
                while highways carrying heavy commercial traffic can range
                anywhere from 4 to 12 inches, depending on projected traffic
                loads over the pavement's design life.
              </p>
              <p className="text-white/80 leading-relaxed text-base">
                Road thickness design generally follows structured engineering
                methods, such as those outlined in the{" "}
                <a
                  href="https://www.transportation.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                >
                  AASHTO Guide for Design of Pavement Structures
                  <ExternalLink size={12} className="inline ml-0.5 mb-0.5" />
                </a>
                , which accounts for subgrade soil strength, expected traffic
                loading over time, and climate. This is one area where thickness
                genuinely shouldn't be guessed — road pavement design is
                typically calculated by a civil engineer based on projected
                traffic data specific to that road, not applied as a flat rule of
                thumb.
              </p>
            </section>

            {/* ── SECTION: Parking Lots ── */}
            <section id="parking-lot-thickness" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-blue-400 pl-4">
                Asphalt Thickness for Parking Lots
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Parking lots aren't uniform — different zones within the same lot
                often need different thicknesses depending on how they're used.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  {
                    label: "Standard parking spaces",
                    desc: "3 inches is typically sufficient for regular passenger vehicles that park and sit rather than maneuver repeatedly",
                    color: "teal",
                  },
                  {
                    label: "Drive lanes and entrances",
                    desc: "4 to 6 inches, since these areas see continuous turning and braking, which stresses the surface more than straight-line parking",
                    color: "orange",
                  },
                  {
                    label: "Loading zones and dumpster areas",
                    desc: "6 inches of asphalt over 8 inches of aggregate base is a common minimum, since trucks stop, idle, and load in these spots, creating concentrated point loads rather than distributed traffic",
                    color: "teal",
                  },
                ].map(({ label, desc, color }) => (
                  <div
                    key={label}
                    className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/[0.07] transition-colors"
                  >
                    <span
                      className={`mt-1.5 w-2.5 h-2.5 rounded-full shrink-0 ${color === "teal" ? "bg-teal-400" : "bg-orange-400"}`}
                    />
                    <div>
                      <strong className="text-white text-base">{label}</strong>
                      <p className="text-white/70 text-sm mt-1 leading-relaxed">
                        — {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-white/80 leading-relaxed text-base">
                Climate plays a real role here too. Regions with harsh winters
                and heavy freeze-thaw cycling, or extreme summer heat, often
                specify thicker parking lot asphalt — sometimes 4 to 6 inches
                even for standard traffic areas — to better handle the additional
                stress those conditions place on the pavement. Understanding the
                right{" "}
                <Link
                  href="/blog/bitumen-grades-explained"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors font-medium"
                >
                  bitumen grade for your climate
                </Link>{" "}
                is equally important — the binder grade affects how the asphalt
                performs across temperature extremes.
              </p>
            </section>

            {/* ── SECTION: Heavy Equipment ── */}
            <section id="heavy-equipment-asphalt" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                Asphalt Thickness for Heavy Equipment and Trucks
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Areas that regularly handle heavy trucks, construction equipment,
                or other high-axle-weight vehicles need substantially more
                asphalt than standard applications — typically{" "}
                <strong className="text-white">6 to 8 inches</strong>, sometimes
                reaching higher for the most demanding use cases.
              </p>

              {/* Image 5 — Before bullet list */}
              <SectionImage
                src="/heavy-duty-asphalt-thickness-trucks-loading-dock.webp"
                alt="Heavy-duty asphalt pavement for trucks and loading docks showing thick asphalt over reinforced aggregate base"
                caption="Heavy truck and loading dock areas require 6–8 inches of asphalt, often installed in multiple lifts over a thick aggregate base"
              />

              <ul className="space-y-3 mb-6 bg-black/20 border border-white/10 p-6 rounded-2xl">
                {[
                  {
                    bold: "Loading docks",
                    text: "minimum 6 inches to withstand concentrated, stationary point loads from trucks parked and idling while loading or unloading",
                  },
                  {
                    bold: "Industrial and heavy equipment access roads",
                    text: "4 to 7 inches, including both binder and surface layers, is common for routes that see consistent heavy vehicle traffic",
                  },
                  {
                    bold: "Fire truck access routes",
                    text: "6 inches or more, since emergency vehicles are exceptionally heavy and access routes need to perform reliably under that load at any time",
                  },
                  {
                    bold: "Vehicles or axle loads exceeding roughly 8,000 lbs",
                    text: "generally require 4 inches or more of asphalt at minimum, often paired with a thicker aggregate base than lighter-duty applications",
                  },
                ].map(({ bold, text }) => (
                  <li
                    key={bold}
                    className="flex items-start gap-3 text-white/80 text-sm"
                  >
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-orange-400 shrink-0" />
                    <span>
                      <strong className="text-white">{bold}</strong> — {text}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="text-white/80 leading-relaxed text-base">
                For these heavy-duty applications, the asphalt is typically
                installed in multiple layers — a binder course beneath a wear
                course — rather than as a single lift, which improves structural
                performance under concentrated, repeated loading. The{" "}
                <a
                  href="https://www.asphaltinstitute.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                >
                  Asphalt Institute
                  <ExternalLink size={12} className="inline ml-0.5 mb-0.5" />
                </a>{" "}
                publishes detailed thickness design guidance for heavy-duty
                industrial applications that engineers can reference for
                site-specific specifications.
              </p>
            </section>

            {/* ── SECTION: Factors ── */}
            <section id="thickness-factors" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Factors That Affect Required Asphalt Thickness
              </h2>
              <p className="text-white/80 leading-relaxed mb-6 text-base">
                Thickness recommendations aren't arbitrary — a handful of
                site-specific factors determine what a given project actually
                needs.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {[
                  {
                    title: "Traffic volume and vehicle weight",
                    desc: "More traffic and heavier vehicles both call for thicker asphalt, since load and frequency compound each other's stress on the pavement.",
                    color: "orange",
                  },
                  {
                    title: "Soil and subgrade conditions",
                    desc: "Weak, clay-heavy, or poorly draining soil can't support loads as effectively, so thicker asphalt or a thicker aggregate base compensates for a less stable foundation.",
                    color: "teal",
                  },
                  {
                    title: "Climate",
                    desc: "Regions with significant freeze-thaw cycling or extreme heat put more stress on pavement, since asphalt expands and contracts with temperature swings; thicker asphalt handles that movement better.",
                    color: "orange",
                  },
                  {
                    title: "Aggregate base thickness",
                    desc: "The base does much of the structural work supporting the asphalt above it; skimping on the base undermines even a properly thick asphalt layer.",
                    color: "teal",
                  },
                  {
                    title: "Intended use and design life",
                    desc: "A driveway built to last 25 years needs different specifications than one expected to be resurfaced within a decade.",
                    color: "orange",
                  },
                ].map(({ title, desc, color }) => (
                  <div
                    key={title}
                    className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/[0.08] transition-colors"
                  >
                    <strong
                      className={`text-sm block mb-1 ${color === "teal" ? "text-teal-300" : "text-orange-300"}`}
                    >
                      {title}
                    </strong>
                    <p className="text-white/70 text-xs leading-relaxed">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── SECTION: Common Mistakes ── */}
            <section id="asphalt-mistakes" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-blue-400 pl-4">
                Common Mistakes That Lead to Thin, Failing Asphalt
              </h2>

              {/* Image 6 — Before bullet list */}
              <SectionImage
                src="/thin-asphalt-fatigue-cracking-pothole-failure.webp"
                alt="Thin asphalt showing fatigue cracking, alligator cracking pattern, and pothole formation from inadequate pavement thickness"
                caption="Fatigue cracking — the alligator-skin pattern shown here — is the hallmark failure mode of asphalt that's too thin for its traffic load"
              />

              <ul className="space-y-3 mb-6 bg-white/5 p-6 rounded-2xl border border-white/10">
                {[
                  {
                    bold: "Skipping or under-building the aggregate base",
                    text: "asphalt thickness alone can't compensate for an inadequate base; the two work together structurally",
                  },
                  {
                    bold: "Using residential specs for commercial or heavy-use areas",
                    text: "a driveway-grade 2-inch layer under regular truck traffic fails far faster than the same thickness under passenger cars",
                  },
                  {
                    bold: "Ignoring local climate",
                    text: "a thickness that works in a mild climate may underperform in a region with severe freeze-thaw cycling",
                  },
                  {
                    bold: "Treating thickness tolerance loosely",
                    text: "industry practice generally allows a tolerance of around a quarter inch from the specified thickness; falling meaningfully short of spec increases failure risk even if it looks fine at installation",
                  },
                ].map(({ bold, text }) => (
                  <li
                    key={bold}
                    className="flex items-start gap-3 text-white/80 text-sm"
                  >
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-400 shrink-0" />
                    <span>
                      <strong className="text-white">{bold}</strong> — {text}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="text-white/80 leading-relaxed text-base">
                These same principles apply when estimating asphalt materials for
                any paving project. Our{" "}
                <Link
                  href="/blog/cold-mix-bitumen"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors font-medium"
                >
                  cold mix bitumen guide
                </Link>{" "}
                covers how temporary repair materials differ from hot-mix
                structural asphalt — useful context when evaluating patching
                options for existing pavement failures.
              </p>
            </section>

            {/* ── VIDEO SECTION ── */}
            <section id="video-guide" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Video: Asphalt Thickness Explained
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Getting the thickness of an asphalt layer right is super important 
                for making it strong. This video explains how the size of the stones 
                inside the asphalt changes how thick the layer needs to be. It also 
                shows why laying down a thicker layer keeps the asphalt hot longer, 
                making it much easier to press down tightly, especially on cold days.
              </p>
              <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black/30 aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/7wvUkvPkfuI"
                  title="Asphalt Thickness Guide — How Thick Should Asphalt Be?"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                  loading="lazy"
                />
              </div>
            </section>

            {/* ── SECTION: Conclusion ── */}
            <section id="conclusion" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                In Short
              </h2>
              <div className="bg-gradient-to-br from-orange-500/15 via-teal-600/10 to-blue-600/10 border border-white/15 rounded-2xl p-6 md:p-8">
                <p className="text-white/85 leading-relaxed mb-4 text-base">
                  Asphalt thickness isn't one-size-fits-all — it scales directly
                  with traffic weight, vehicle type, soil conditions, and
                  climate. Residential driveways generally need 2 to 3 inches,
                  commercial{" "}
                  <Link
                    href="/blog"
                    className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors font-medium"
                  >
                    paving projects
                  </Link>{" "}
                  like parking lots need 3 to 4 inches, and heavy-duty areas
                  handling trucks or equipment need 6 to 8 inches or more —
                  always paired with an adequately thick aggregate base
                  underneath.
                </p>
                <p className="text-white/85 leading-relaxed text-base">
                  Getting the thickness right from the start, rather than
                  cutting corners on either the asphalt or the base beneath ,it
                  is the difference between decades of reliable performance and a
                  surface that needs costly repairs within a few years. 
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
                    q: "How thick should asphalt be for a driveway?",
                    a: "Most residential driveways need 2 to 3 inches of compacted asphalt. If the driveway will regularly handle heavier vehicles like RVs or trucks, 3 to 4 inches is the safer choice.",
                  },
                  {
                    q: "How thick should asphalt be for a road?",
                    a: "It varies widely, from around 4 inches for local residential streets up to 12 inches for highways carrying heavy commercial traffic, depending on projected traffic loads and engineering design.",
                  },
                  {
                    q: "How thick should asphalt be for heavy equipment or trucks?",
                    a: "Areas regularly handling heavy trucks or equipment typically need 6 to 8 inches of asphalt, often over a thicker aggregate base than standard applications.",
                  },
                  {
                    q: "How thick should asphalt be for a parking lot?",
                    a: "Standard parking spaces generally need 3 inches, while drive lanes, entrances, and loading zones need 4 to 6 inches due to the additional stress from turning and braking traffic.",
                  },
                  {
                    q: "What happens if asphalt is too thin?",
                    a: "Thin asphalt can't distribute vehicle weight properly, leading to fatigue cracking. Once cracks form, water intrusion and continued traffic quickly turn them into potholes and larger structural failures.",
                  },
                  {
                    q: "Is the aggregate base as important as the asphalt thickness?",
                    a: "Yes. The base layer distributes load before it reaches the soil, and an inadequate base undermines even a properly thick asphalt layer above it.",
                  },
                  {
                    q: "Does climate affect how thick asphalt should be?",
                    a: "Yes. Regions with severe freeze-thaw cycles or extreme heat generally need thicker asphalt to handle the additional expansion, contraction, and stress those conditions place on the pavement.",
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
                Back to Knowledge Hub
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white px-6 py-3 rounded-full font-bold text-sm transition-all shadow-[0_0_20px_rgba(249,115,22,0.35)] hover:shadow-[0_0_30px_rgba(249,115,22,0.55)]"
              >
                Calculate Asphalt Materials
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
