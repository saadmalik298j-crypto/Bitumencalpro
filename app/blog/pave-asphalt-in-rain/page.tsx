// app/blog/pave-asphalt-in-rain/page.tsx
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
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  CloudRain,
} from "lucide-react";

// ── Metadata ────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Can You Pave Asphalt in the Rain? What Happens & What to Do",
  description:
    "Rain cools hot mix before compaction, creates steam under the mat, and breaks tack coat bond. Learn when to stop, when to continue, and how long to wait after rain before paving.",
  keywords: [
    "can you pave asphalt in the rain",
    "paving asphalt in rain",
    "asphalt paving wet weather",
    "how long after rain to pave asphalt",
    "rain on fresh asphalt",
    "asphalt rain damage",
    "pave in light rain",
    "asphalt compaction temperature rain",
    "wet base asphalt paving",
  ],
  alternates: {
    canonical: "https://bitumencalcpro.com/blog/pave-asphalt-in-rain",
  },
  openGraph: {
    title:
      "Can You Pave Asphalt in the Rain? What Happens & What to Do | BitumenCalcPro",
    description:
      "Rain cools hot mix, creates steam on a wet base, and stops tack coat bonding. Expert guide covering when to stop, when to continue, and how long to wait after rain.",
    url: "https://bitumencalcpro.com/blog/pave-asphalt-in-rain",
    siteName: "BitumenCalcPro",
    type: "article",
    publishedTime: "2026-11-12T00:00:00.000Z",
    authors: ["BitumenCalcPro"],
    images: [
      {
        url: "/can-you-pave-asphalt-in-the-rain.webp",
        width: 1200,
        height: 675,
        alt: "Can you pave asphalt in the rain — paving crew stopping work on wet road surface during rain",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Can You Pave Asphalt in the Rain? What Happens & What to Do",
    description:
      "Rain damages hot mix compaction, creates steam under the mat, and breaks tack coat bond. When to stop, when to continue, and how long to wait.",
    images: ["/can-you-pave-asphalt-in-the-rain.webp"],
  },
  robots: {
    "max-image-preview": "large",
  },
};

// ── Structured Data ──────────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Can You Pave Asphalt in the Rain? What Happens and What to Do",
  description:
    "Rain cools hot mix before compaction, creates steam under the mat, and breaks tack coat bond. Learn when to stop, when to continue, and how long to wait after rain before paving.",
  image: "https://bitumencalcpro.com/can-you-pave-asphalt-in-the-rain.webp",
  datePublished: "2026-11-12T00:00:00.000Z",
  dateModified: "2026-11-12T00:00:00.000Z",
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
    "@id": "https://bitumencalcpro.com/blog/pave-asphalt-in-rain",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can you pave asphalt in the rain?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Planned paving should not happen in the rain. Rain cools the mix before compaction, creates steam on a wet base, and keeps tack coat from bonding properly. Some engineering guidance allows light rain to continue mid-job when there is no standing water, though most contractors and specifications stop work.",
      },
    },
    {
      "@type": "Question",
      name: "Can you lay asphalt in light rain?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rarely. Light rain still cools the mat and wets the tack coat. A job already underway may continue under some engineering guidance if the surface has no standing water, but most contractors stop to protect the pavement quality.",
      },
    },
    {
      "@type": "Question",
      name: "How long after rain can you pave asphalt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wait at least 24 hours after rain, and longer if the ground is saturated. After heavy rain, several dry days may be needed. The base should be dry and firm — if you leave footprints walking on it, it is too wet to pave.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if it rains on fresh asphalt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rain on a hot, uncompacted mat harms compaction by cooling the mix too fast. Light rain on a compacted, cooled mat is generally not a problem. Standing water on fresh asphalt in the first few days can weaken the surface and lead to early cracking or potholes if drainage is poor.",
      },
    },
    {
      "@type": "Question",
      name: "How long should fresh asphalt stay dry?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "At least 24 hours, and longer for heavy rain. Some sources suggest keeping the mat dry for up to 72 hours. Fresh asphalt should also stay clear of vehicle traffic for 24 to 48 hours.",
      },
    },
    {
      "@type": "Question",
      name: "Can you pave over a wet base?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Water under hot mix turns to steam when covered, which can strip the binder from the aggregate and leave pockets that prevent the new layer from bonding to the one below.",
      },
    },
    {
      "@type": "Question",
      name: "What is the minimum temperature for paving asphalt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most hot mix specifications call for a minimum air temperature of about 50°F (10°C) and rising. Some agencies allow paving down to 40°F (4°C) with warm mix asphalt or polymer-modified mixes.",
      },
    },
    {
      "@type": "Question",
      name: "Can you use cold mix asphalt in the rain?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cold mix is designed for damp and cool conditions and works for temporary pothole repairs in wet weather. Standing water still prevents a good bond, and cold mix is a temporary repair, not a substitute for hot mix paving.",
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
      name: "Can You Pave Asphalt in the Rain?",
      item: "https://bitumencalcpro.com/blog/pave-asphalt-in-rain",
    },
  ],
};

// ── Helper components ────────────────────────────────────────
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
  rows: (string | React.JSX.Element)[][];
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
                ri % 2 === 0 ? "bg-slate-800" : "bg-slate-800/60"
              }
            >
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className="px-4 py-3 text-slate-300 border-t border-slate-700"
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

// ── Page ─────────────────────────────────────────────────────
export default function PaveAsphaltInRainPage() {
  const tocItems = [
    { id: "quick-decision-table", label: "When to Pave and When to Stop" },
    { id: "why-rain-is-a-problem", label: "Why Rain Is a Problem for Hot Mix" },
    { id: "mix-cooling", label: "It Cools the Mix Before Compaction" },
    { id: "steam-under-mat", label: "It Makes Steam Under the Mat" },
    { id: "tack-coat-bond", label: "It Breaks the Tack Coat Bond" },
    { id: "engineers-vs-contractors", label: "Engineers vs Contractors" },
    { id: "mid-job-action", label: "What to Do if Rain Starts Mid-Job" },
    { id: "how-long-to-wait", label: "How Long to Wait After Rain" },
    { id: "rain-and-temperature", label: "Rain and Temperature Together" },
    { id: "rain-after-paving", label: "Rain After Paving" },
    { id: "cold-mix", label: "Can You Use Cold Mix in the Rain?" },
    { id: "planning", label: "Planning Around the Forecast" },
    { id: "damage-signs", label: "Signs Rain Damaged a Fresh Pavement" },
    { id: "contractor-questions", label: "Questions to Ask Your Contractor" },
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

      {/* ── Hero Band ── */}
      <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-sm text-slate-400 mb-6">
            <Link href="/" className="hover:text-teal-400 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/blog" className="hover:text-teal-400 transition-colors">Blog</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-slate-300 truncate">Paving Asphalt in the Rain</span>
          </nav>

          {/* Category Badge */}
          <div className="mb-4">
            <span className="inline-flex items-center gap-1.5 bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
              <CloudRain className="w-3 h-3" />
              Asphalt &amp; Paving Practice
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5 max-w-4xl">
            Can You Pave Asphalt in the Rain?
            <span className="block text-orange-400 text-2xl sm:text-3xl mt-1">
              What Happens and What to Do
            </span>
          </h1>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-orange-400" />
              <time dateTime="2026-11-12">November 12, 2026</time>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-orange-400" />
              12 min read
            </span>
            <span className="flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-orange-400" />
              By Nabeel Awan
            </span>
          </div>
        </div>
      </div>

      {/* ── Featured Image ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-0 mb-2">
        <figure className="w-full">
          <div className="relative w-full overflow-hidden rounded-xl shadow-2xl">
            <Image
              src="/can-you-pave-asphalt-in-the-rain.webp"
              alt="Can you pave asphalt in the rain — paving crew stopping work on wet road surface during rainfall"
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
          <article className="flex-1 min-w-0">

            {/* Quick Answer */}
            <div className="bg-gradient-to-r from-orange-900/40 to-slate-800/60 border border-orange-500/30 rounded-xl p-6 mb-8">
              <h2 className="text-orange-400 font-bold text-lg mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Quick Answer
              </h2>
              <p className="text-slate-200 leading-relaxed">
                You should <strong className="text-orange-300">not pave hot mix asphalt in the rain</strong>. Rain cools the
                mix before rollers reach full density, turns water on the base into steam, and stops tack coat from bonding.
                Some engineering guidance allows light rain to continue mid-job when the surface has no standing water, though
                most contractors and specifications stop work. Wait until the base is dry — usually 24 hours or more after
                rain — and keep the new mat dry for at least 24 hours.
              </p>
            </div>

            {/* TOC */}
            <nav aria-label="Table of contents" className="bg-slate-800/60 border border-slate-700 rounded-xl p-5 mb-10">
              <h2 className="text-white font-bold text-base mb-4 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-orange-400" />
                In This Guide
              </h2>
              <ol className="space-y-2">
                {tocItems.map((item, i) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="flex items-center gap-2 text-sm text-slate-300 hover:text-orange-400 transition-colors group"
                    >
                      <span className="text-orange-500 font-mono text-xs w-5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                      <span className="group-hover:underline">{item.label}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            {/* Intro */}
            <p className="text-slate-300 leading-relaxed mb-6 text-lg">
              Anyone who has booked a paving crew knows the call that comes the night before: the forecast changed. Can you
              pave asphalt in the rain, or does the job slip to next week? The short answer is no for planned work, with a
              few narrow exceptions that depend on how hard it rains, what is under the mix, and what the specification allows.
            </p>
            <p className="text-slate-300 leading-relaxed mb-8">
              This guide explains why rain causes problems, what engineers and contractors say, what to do when a storm hits
              mid-job, and how long to wait before and after paving.
            </p>

            {/* ── SECTION 1: Decision Table ── */}
            <section id="quick-decision-table" className="scroll-mt-24 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 pl-4 border-l-4 border-orange-400">
                When to Pave and When to Stop
              </h2>

              <InfoTable
                headers={["Situation", "Pave?", "Why"]}
                rows={[
                  [
                    "Steady or heavy rain",
                    <span key="no1" className="text-red-400 font-bold">No</span>,
                    "The mix cools too fast, and the base is wet",
                  ],
                  [
                    "Standing water or puddles on the base",
                    <span key="no2" className="text-red-400 font-bold">No</span>,
                    "Water under hot mix turns to steam",
                  ],
                  [
                    "Light rain starts mid-job, no standing water",
                    <span key="sometimes" className="text-yellow-400 font-bold">Sometimes</span>,
                    "Some guidance allows it, though most contractors stop",
                  ],
                  [
                    "Base still wet after rain",
                    <span key="no3" className="text-red-400 font-bold">No</span>,
                    "Tack coat and lift bond suffer",
                  ],
                  [
                    "Rain stopped, base fully dry",
                    <span key="yes" className="text-green-400 font-bold">Yes</span>,
                    "Normal conditions are back",
                  ],
                  [
                    "Rain forecast within 24 hours after paving",
                    <span key="reschedule" className="text-yellow-400 font-bold">Reschedule</span>,
                    "The fresh mat needs time to cool and set",
                  ],
                ]}
              />
            </section>

            {/* ── SECTION 2: Why Rain Is a Problem ── */}
            <section id="why-rain-is-a-problem" className="scroll-mt-24 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 pl-4 border-l-4 border-teal-400">
                Why Rain Is a Problem for Hot Mix Asphalt
              </h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                Hot mix asphalt is a temperature-sensitive material. Everything from the moment it leaves the plant to the
                final roller pass depends on keeping the mix above certain thresholds. Rain disrupts that process in three
                ways — and each one can ruin the finished pavement.
              </p>
            </section>

            {/* ── SECTION 3: Mix Cooling ── */}
            <section id="mix-cooling" className="scroll-mt-24 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 pl-4 border-l-4 border-orange-400">
                It Cools the Mix Before It Is Compacted
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Hot mix asphalt leaves the plant at roughly 275 to 325°F. Crews have a limited window to spread and compact
                it, and compaction is generally finished once the mat cools to about 175°F, though the exact cutoff depends
                on the mix. Rain speeds up cooling — and so does a wet surface, through evaporation.
              </p>

              <SectionImage
                src="/rain-cooling-hot-mix-asphalt.webp"
                alt="Rain cooling hot mix asphalt on road during paving — temperature drop effect on fresh mat compaction"
                caption="Rain accelerates heat loss from the mat surface. Once the mix falls below the compaction window, rollers cannot achieve target density."
                priority
              />

              <p className="text-slate-300 leading-relaxed mb-4">
                Compaction gives asphalt its strength and its resistance to water. A mat that cools early ends up with too
                many air voids. Specifications typically target a density of about 92 to 97 percent of the mix&apos;s maximum
                theoretical density, and a mat that cools too soon can fall short of it.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Too many voids let water into the pavement later, which leads to cracking and raveling. Following the proper <Link href="/blog/how-to-compact-asphalt" className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors">asphalt compaction temperatures and roller passes</Link> ensures the mat locks together before the cessation threshold is reached. Understanding{" "}
                <Link
                  href="/blog/asphalt-air-voids"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                >
                  how air voids in asphalt are calculated and controlled
                </Link>{" "}
                shows exactly how much damage a few percentage points of extra void space causes to long-term pavement life.
              </p>
            </section>

            {/* ── SECTION 4: Steam Under Mat ── */}
            <section id="steam-under-mat" className="scroll-mt-24 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 pl-4 border-l-4 border-teal-400">
                It Makes Steam Under the Mat
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Water on the base or on a lower lift flashes to steam when hot mix covers it. The steam can separate the
                asphalt binder from the aggregate — a failure called stripping. It also leaves pockets that keep the new
                layer from bonding to the one below.
              </p>

              <SectionImage
                src="/water-trapped-under-asphalt-pavement.webp"
                alt="Water trapped under asphalt pavement causing steam and stripping failure — wet base paving problem"
                caption="Water trapped under a hot mat flashes to steam instantly. The resulting pressure pockets prevent bonding and cause binder stripping."
              />

              <p className="text-slate-300 leading-relaxed">
                This is why engineering guidance says never to pave over puddles — whether it is raining or not. Even a thin
                film of standing water on the base is enough to cause localised stripping and bond failure. Wet soil is a
                risk even after the rain stops, which is why the base needs adequate drying time.
              </p>
            </section>

            {/* ── SECTION 5: Tack Coat Bond ── */}
            <section id="tack-coat-bond" className="scroll-mt-24 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 pl-4 border-l-4 border-orange-400">
                It Breaks the Tack Coat Bond
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                A tack coat is a thin film of asphalt emulsion that bonds a new layer to the one below. It has to go on a
                clean, dry surface and break — changing from brown to black — before paving begins. Rain washes it, dilutes
                it, and keeps it from setting.
              </p>

              <SectionImage
                src="/wet-tack-coat-asphalt-layer-bonding.webp"
                alt="Wet tack coat on asphalt layer showing poor bonding conditions — rain prevents emulsion from breaking and bonding properly"
                caption="Tack coat must break (turn black) before paving. Rain washes and dilutes the emulsion, leaving layers without a bond and prone to slippage under traffic."
              />

              <p className="text-slate-300 leading-relaxed mb-4">
                Without a good bond, the layers can slip against each other under traffic and the pavement cracks. The full
                detail on emulsion break times and application rates is covered in the{" "}
                <Link
                  href="/blog/prime-coat-vs-tack-coat"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                >
                  prime coat vs tack coat comparison
                </Link>
                . Never apply emulsion tack to pavement at or below freezing, because the water and emulsifier stay in the
                layer and freeze.
              </p>
            </section>

            {/* ── SECTION 6: Engineers vs Contractors ── */}
            <section id="engineers-vs-contractors" className="scroll-mt-24 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 pl-4 border-l-4 border-teal-400">
                What Engineers Say vs What Contractors Do
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                The two groups give slightly different answers, and both are worth knowing.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div className="bg-slate-800/60 border border-teal-500/30 rounded-xl p-5">
                  <h3 className="text-teal-400 font-bold mb-3">Engineering Guidance</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    The{" "}
                    <a
                      href="https://www.asphaltinstitute.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-400 hover:text-teal-300 underline underline-offset-2 inline-flex items-center gap-1"
                    >
                      Asphalt Institute
                      <ExternalLink className="w-3 h-3" />
                    </a>{" "}
                    guidance says work that is underway can continue if rain starts, as long as there is no standing water
                    and the rain is not too hard. The main concern is compaction, since the mix cools faster when it lands
                    on a wet surface or when rain falls on an uncompacted mat.
                  </p>
                </div>
                <div className="bg-slate-800/60 border border-orange-500/30 rounded-xl p-5">
                  <h3 className="text-orange-400 font-bold mb-3">Contractor Practice</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Most paving contractors and many agency specifications take a stricter position: they stop when rain
                    starts, because a short compaction window and a thin lift leave little room for error. The general
                    industry practice is not to pave in the rain at all. If your project is under a public specification,
                    the specification decides.
                  </p>
                </div>
              </div>

              <p className="text-slate-300 leading-relaxed">
                On a private driveway or parking lot, a contractor who stops for rain is protecting the pavement and the
                warranty. Any contractor who offers to pave over a wet base should explain exactly how they plan to achieve
                compaction and bond before you agree.
              </p>
            </section>

            {/* ── SECTION 7: Mid-Job Action ── */}
            <section id="mid-job-action" className="scroll-mt-24 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 pl-4 border-l-4 border-orange-400">
                What to Do if Rain Starts Mid-Job
              </h2>

              <SectionImage
                src="/asphalt-paving-stopped-due-to-rain.webp"
                alt="Asphalt paving stopped due to rain — crew building transverse joint after stopping work mid-job"
                caption="When rain forces a stop mid-job, compact what is already placed and cut a straight transverse joint before the mat cools completely."
              />

              <div className="space-y-3 mb-6">
                {[
                  {
                    title: "Stop placing new mix",
                    desc: "Do not spread material onto a wet surface or over standing water. Any mix placed in those conditions will have poor density and bond.",
                  },
                  {
                    title: "Roll what is already down",
                    desc: "Compact the mat that has been placed while it is still hot enough to compact. Do not abandon it — partial compaction is better than none.",
                  },
                  {
                    title: "Build a clean transverse joint",
                    desc: "Cut a straight, square edge where paving stopped so work can resume cleanly. A rough end will create a weak longitudinal bump when paving restarts.",
                  },
                  {
                    title: "Protect loaded trucks",
                    desc: "Mix that cools in the truck may no longer be workable. Keep loads covered and check temperatures — do not place mix that has dropped below specification.",
                  },
                  {
                    title: "Re-tack before resuming",
                    desc: "Wait for the base to dry fully, then re-apply and allow the tack coat to break before the next lift goes down.",
                  },
                  {
                    title: "Inspect the finished work",
                    desc: "Look at the placed mat for low density areas, tender spots, or sections that look rough or open. These may need testing or remediation.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3 bg-slate-800/60 border border-slate-700 rounded-lg p-4">
                    <CheckCircle2 className="w-5 h-5 text-teal-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-white font-semibold text-sm">{item.title}</p>
                      <p className="text-slate-400 text-sm mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── SECTION 8: How Long to Wait ── */}
            <section id="how-long-to-wait" className="scroll-mt-24 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 pl-4 border-l-4 border-teal-400">
                How Long to Wait After Rain Before Paving
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                A common guideline is to wait at least 24 hours after rain, and longer if the ground is saturated. After heavy
                rain, several dry days may be needed before the base is firm enough.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                A practical field test is to walk on the base. If you leave footprints, it is too wet to pave. The surface
                should be dry with no standing water and no soft or muddy spots. Wind and sun speed drying, while shade and
                cool air slow it.
              </p>

              <div className="bg-teal-900/20 border border-teal-500/30 rounded-xl p-5 mb-6">
                <h3 className="text-teal-400 font-semibold mb-2">Field Rule of Thumb</h3>
                <p className="text-slate-300 text-sm">
                  Temperature matters here too. Dark pavement in full sun at 55°F air temperature can have a surface
                  temperature of 70°F or higher. A shaded, wet aggregate base at the same air temperature might be at 45°F —
                  and that cools the mat quickly, cutting compaction time significantly.
                </p>
              </div>

              <InfoTable
                headers={["Condition", "Minimum Wait", "Notes"]}
                rows={[
                  ["Light shower, good drainage", "24 hours", "Walk test — no footprints"],
                  ["Moderate rain", "24–48 hours", "Check base firmness"],
                  ["Heavy rain / saturation", "48–72 hours or more", "May need multiple dry days"],
                  ["Clay subgrade after rain", "72 hours or more", "Clay retains moisture longest"],
                  ["Sandy / well-drained base", "24 hours", "Dries fastest with sun and wind"],
                ]}
              />
            </section>

            {/* ── SECTION 9: Rain and Temperature ── */}
            <section id="rain-and-temperature" className="scroll-mt-24 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 pl-4 border-l-4 border-orange-400">
                Rain and Temperature Together
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Most hot mix specifications call for a minimum air temperature of about 50°F and rising. Some agencies allow
                paving down to 40°F with warm mix asphalt or polymer-modified mixes — always check the specification and the
                supplier. Review our <Link href="/blog/asphalt-paving-temperature" className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors">asphalt paving temperature chart and lift thickness table</Link> for ambient thresholds by layer depth.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                Cool, wet weather is the worst combination because the mat loses heat from both the air and the surface
                moisture. Thicker lifts hold heat longer, which is one reason lift thickness matters in cool weather. The{" "}
                <Link
                  href="/blog/asphalt-thickness"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                >
                  asphalt layer thickness guide
                </Link>{" "}
                covers how minimum lift depth is specified for different temperature conditions.
              </p>

              <InfoTable
                headers={["Condition", "Risk Level", "Action"]}
                rows={[
                  ["Air temp above 60°F, dry", "Low", "Normal paving window"],
                  ["Air temp 50–60°F, light rain", "Medium", "Monitor closely, consider stopping"],
                  ["Air temp below 50°F, any rain", "High", "Stop — compaction window too short"],
                  ["Air temp 40–50°F, dry", "Medium", "Use warm mix or polymer-modified"],
                  ["Air temp below 40°F", "Very High", "Do not pave hot mix"],
                ]}
              />
            </section>

            {/* ── SECTION 10: Rain After Paving ── */}
            <section id="rain-after-paving" className="scroll-mt-24 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 pl-4 border-l-4 border-teal-400">
                Rain After Paving — Timing Decides the Risk
              </h2>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-5">
                  <h3 className="text-red-400 font-bold mb-3 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    High Risk — Rain on Uncompacted Hot Mat
                  </h3>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    {[
                      "Cools the mix before rollers finish",
                      "Compaction falls short of spec density",
                      "Excess air voids reduce pavement life",
                      "Early cracking and raveling likely",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-red-400 mt-0.5">✗</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-teal-900/20 border border-teal-500/30 rounded-xl p-5">
                  <h3 className="text-teal-400 font-bold mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    Lower Risk — Rain on Compacted, Cooled Mat
                  </h3>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    {[
                      "Light rain generally does not damage it",
                      "Mat has already reached target density",
                      "Drainage design handles surface water",
                      "Standing water still a concern in first few days",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-teal-400 mt-0.5">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="text-slate-300 leading-relaxed mb-4">
                Most guidance asks for at least 24 hours of dry weather after paving. Some sources suggest avoiding heavy
                rain for as long as 72 hours. Fresh asphalt is soft enough that you should keep vehicles off it for 24 to 48
                hours as well.
              </p>
              <p className="text-slate-300 leading-relaxed">
                If rain is forecast right after paving, ask the contractor about timing. Sealcoat is a separate matter —
                it needs about 24 to 48 hours of dry weather after application. The{" "}
                <Link
                  href="/blog/asphalt-driveway-sealcoating"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                >
                  asphalt driveway sealcoating guide
                </Link>{" "}
                covers exactly when to seal a new surface and how long to wait after rain.
              </p>
            </section>

            {/* ── SECTION 11: Cold Mix ── */}
            <section id="cold-mix" className="scroll-mt-24 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 pl-4 border-l-4 border-orange-400">
                Can You Use Cold Mix Asphalt in the Rain?
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Cold mix asphalt is formulated for damp and cool conditions, and crews use it for temporary pothole repairs
                in wet weather. Standing water still prevents a good bond, and cold mix is a temporary repair — not a
                substitute for hot mix paving.
              </p>
              <p className="text-slate-300 leading-relaxed">
                The{" "}
                <Link
                  href="/blog/cold-mix-bitumen"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                >
                  cold mix bitumen guide
                </Link>{" "}
                covers exactly when it works, what formulations hold up in wet weather, and where it falls short of hot mix
                performance for permanent repairs.
              </p>
            </section>

            {/* ── SECTION 12: Planning ── */}
            <section id="planning" className="scroll-mt-24 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 pl-4 border-l-4 border-teal-400">
                Planning Around the Forecast
              </h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                Weather decides most paving schedules. Build a buffer in from the start and the job runs smoothly. Ignore
                the forecast and a failed pavement costs far more to fix than a one-week delay.
              </p>

              <div className="space-y-3 mb-6">
                {[
                  {
                    title: "Check the forecast several days out",
                    desc: "Aim for a dry base, a dry day for paving, and about 24 hours without rain afterward. Five-day forecasts are reliable enough to plan around.",
                  },
                  {
                    title: "Pick the right season",
                    desc: "Late spring to early fall gives the warmest and driest windows. Spring brings the most rain risk. Early autumn often has stable, dry weather ideal for paving.",
                  },
                  {
                    title: "Watch temperature as well as rain",
                    desc: "Air near 50°F and rising, with a dry, sun-warmed base, gives crews the longest compaction window. Cold mornings that warm up are better than warm mornings that cool.",
                  },
                  {
                    title: "Agree on a rain date",
                    desc: "Contractors reschedule for weather routinely. A backup date written into the contract avoids arguments and delays on the day of the job.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3 bg-slate-800/60 border border-slate-700 rounded-lg p-4">
                    <CheckCircle2 className="w-5 h-5 text-orange-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-white font-semibold text-sm">{item.title}</p>
                      <p className="text-slate-400 text-sm mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-slate-300 leading-relaxed">
                Accurate material estimation also helps keep a project on schedule. If you need to calculate tonnage for a
                rescheduled pour, the{" "}
                <Link
                  href="/"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                >
                  Bitumen Calculator at BitumenCalcPro
                </Link>{" "}
                gives you fast, accurate asphalt quantity estimates by area, thickness, and mix type.
              </p>
            </section>

            {/* ── SECTION 13: Damage Signs ── */}
            <section id="damage-signs" className="scroll-mt-24 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 pl-4 border-l-4 border-orange-400">
                Signs Rain Damaged a Fresh Pavement
              </h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                Poor compaction does not always show up right away. Low density can take time to appear as cracking and
                raveling, which is why density testing matters on larger projects.
              </p>

              <SectionImage
                src="/rain-damaged-asphalt-pavement-raveling.webp"
                alt="Rain damaged asphalt pavement showing raveling and surface deterioration from poor compaction during wet paving"
                caption="Raveling — the loss of aggregate from the surface — is a classic sign of under-compacted asphalt caused by rain interrupting the paving operation."
              />

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {[
                  "Loose stone or raveling at the surface",
                  "Soft or tender spots in the mat",
                  "A rough, open texture in places",
                  "Early cracking, particularly near joints",
                  "Layers that separate or shift under traffic",
                  "Water pooling in low areas",
                  "Potholes in the first year of service",
                  "Surface blistering or bubbling",
                ].map((sign) => (
                  <div key={sign} className="flex items-start gap-2 bg-slate-800/60 border border-slate-700 rounded-lg p-3">
                    <AlertCircle className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" />
                    <span className="text-slate-300 text-sm">{sign}</span>
                  </div>
                ))}
              </div>

              <p className="text-slate-300 leading-relaxed">
                Identifying these warning signs early is part of understanding broader{" "}
                <Link
                  href="/blog/asphalt-cracking-types"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                >
                  asphalt cracking types and their root causes
                </Link>
                . Rain-related compaction failures often start as raveling or surface cracking and progress quickly to
                structural damage if left untreated.
              </p>
            </section>

            {/* ── SECTION 14: Contractor Questions ── */}
            <section id="contractor-questions" className="scroll-mt-24 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 pl-4 border-l-4 border-teal-400">
                Questions to Ask Your Contractor
              </h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                Before any paving project — especially one scheduled in marginal weather — these questions separate
                experienced contractors from those cutting corners.
              </p>

              <div className="space-y-3">
                {[
                  "What is your cutoff for rain on the day, and who makes the call?",
                  "How will you handle a storm that starts mid-job?",
                  "Will the base be fully dry before paving starts?",
                  "How long do I need to keep traffic off, and what if it rains?",
                  "Is the tack coat applied and allowed to break before the mix goes down?",
                  "What density testing will you do, and what happens if it fails spec?",
                ].map((q) => (
                  <div key={q} className="flex items-start gap-3 bg-slate-800/60 border border-slate-700 rounded-lg p-4">
                    <span className="text-teal-400 font-bold text-lg shrink-0">?</span>
                    <p className="text-slate-300 text-sm leading-relaxed">{q}</p>
                  </div>
                ))}
              </div>
            </section>

         

            {/* Conclusion */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-slate-800 to-slate-800/60 border border-slate-700 rounded-xl p-6">
                <h2 className="text-xl font-bold text-white mb-4">Sum Upy</h2>
                <p className="text-slate-300 leading-relaxed mb-4">
                  You cannot pave hot mix in the rain without risking the pavement. Rain cools the mix before it is
                  compacted, makes steam when it meets a wet base, and keeps tack coat from bonding. If a storm starts
                  mid-job, stop, roll what is down, and build a clean transverse joint.
                </p>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Wait at least 24 hours after rain for the base to dry, and protect the new mat for 24 hours or more after
                  paving. Planning around the forecast costs a few days at most and protects a pavement that should last
                  years. For{" "}
                  <Link
                    href="/blog/repair-asphalt-driveway"
                    className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                  >
                    fixing asphalt driveway damage
                  </Link>{" "}
                  caused by poor compaction or premature rain exposure, early intervention prevents minor raveling from
                  becoming a full-depth failure.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  The{" "}
                  <a
                    href="https://www.fhwa.dot.gov/pavement/asphalt/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-400 hover:text-teal-300 underline underline-offset-2 inline-flex items-center gap-1 transition-colors"
                  >
                    FHWA Asphalt Pavement resources
                    <ExternalLink className="w-3 h-3" />
                  </a>{" "}
                  provide free agency-level guidance on compaction temperature windows, weather limitations, and quality
                  assurance testing for hot mix paving operations.
                </p>
              </div>
            </section>
   {/* ── SECTION 15: FAQ ── */}
            <section id="faq" className="scroll-mt-24 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 pl-4 border-l-4 border-orange-400">
                Frequently Asked Questions
              </h2>
              <div className="space-y-5">
                {[
                  {
                    q: "Can you pave asphalt in the rain?",
                    a: "Planned paving should not happen in the rain. Rain cools the mix before compaction is complete, creates steam on a wet base, and keeps tack coat from bonding properly. Some engineering guidance allows light rain to continue mid-job when there is no standing water, though most contractors and specifications stop work.",
                  },
                  {
                    q: "Can you lay asphalt in light rain?",
                    a: "Rarely. Light rain still cools the mat and wets the tack coat. A job already underway may continue under some engineering guidance if the surface has no standing water, but most contractors stop to protect pavement quality and their warranty.",
                  },
                  {
                    q: "How long after rain can you pave asphalt?",
                    a: "Wait at least 24 hours after rain, and longer if the ground is saturated. After heavy rain, several dry days may be needed. The base should be dry and firm — if you leave footprints walking on it, it is too wet to pave.",
                  },
                  {
                    q: "What happens if it rains on fresh asphalt?",
                    a: "Rain on a hot, uncompacted mat harms compaction by cooling the mix too fast, leaving excess air voids. Light rain on a compacted, cooled mat is generally not a problem. Standing water on fresh asphalt in the first few days can weaken the surface and lead to early cracking or potholes if drainage is poor.",
                  },
                  {
                    q: "How long should fresh asphalt stay dry?",
                    a: "At least 24 hours, and longer for heavy rain. Some sources suggest keeping the mat dry for up to 72 hours. Fresh asphalt is soft enough that you should also keep vehicle traffic off it for 24 to 48 hours.",
                  },
                  {
                    q: "Can you pave over a wet base?",
                    a: "No. Water under hot mix turns to steam when covered, which can strip the binder from the aggregate and leave pockets that prevent the new layer from bonding to the one below.",
                  },
                  {
                    q: "What is the minimum temperature for paving asphalt?",
                    a: "Most hot mix specifications call for a minimum air temperature of about 50°F (10°C) and rising. Some agencies allow paving down to 40°F (4°C) with warm mix asphalt or polymer-modified mixes — always check your project specification.",
                  },
                  {
                    q: "Can you use cold mix asphalt in the rain?",
                    a: "Cold mix is designed for damp and cool conditions and works for temporary pothole repairs in wet weather. Standing water still prevents a good bond, and cold mix is a temporary repair, not a substitute for hot mix paving.",
                  },
                ].map((item) => (
                  <div key={item.q} className="bg-slate-800/60 border border-slate-700 rounded-xl p-5">
                    <h3 className="text-lg font-bold text-white mb-3">{item.q}</h3>
                    <p className="text-slate-300 leading-relaxed text-sm">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>
            {/* Author Bio */}
            <div className="mt-10">
              <AuthorBio />
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
