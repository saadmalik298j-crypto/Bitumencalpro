// app/blog/asphalt-paving-temperature/page.tsx
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
  Thermometer,
} from "lucide-react";

// ── Metadata ────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Asphalt Paving Temperature Chart: Mix, Air & Surface Guide",
  description:
    "Comprehensive asphalt paving temperature chart. Covers plant discharge, road delivery, breakdown rolling, cessation (175°F), and minimum ambient air and surface limits.",
  keywords: [
    "asphalt paving temperature chart",
    "asphalt temperature",
    "minimum temperature to pave asphalt",
    "hot mix asphalt temperature",
    "asphalt cessation temperature",
    "warm mix asphalt temperature",
    "asphalt compaction temperature range",
    "infrared thermometer asphalt",
  ],
  alternates: {
    canonical: "https://bitumencalcpro.com/blog/asphalt-paving-temperature",
  },
  openGraph: {
    title:
      "Asphalt Paving Temperature Chart: Mix, Air & Surface Guide | BitumenCalcPro",
    description:
      "Complete working temperature chart for hot mix asphalt: plant production (275–350°F), road delivery, breakdown rolling, cessation limits (175°F), and lift thickness rules.",
    url: "https://bitumencalcpro.com/blog/asphalt-paving-temperature",
    siteName: "BitumenCalcPro",
    type: "article",
    publishedTime: "2026-11-13T00:00:00.000Z",
    authors: ["BitumenCalcPro"],
    images: [
      {
        url: "/asphalt-paving-temperature-guide.webp",
        width: 1200,
        height: 675,
        alt: "Asphalt paving temperature chart guide — asphalt paver laying hot mix asphalt on highway with roller following closely behind",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Asphalt Paving Temperature Chart: Mix, Air & Surface Guide",
    description:
      "Working temperature ranges for asphalt paving from plant to cooled mat: breakdown rolling, cessation limits, lift thickness charts, and weather rules.",
    images: ["/asphalt-paving-temperature-guide.webp"],
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
    "Asphalt Paving Temperature Chart: Mix, Air, Surface, and Compaction Temperatures",
  description:
    "Comprehensive asphalt paving temperature chart. Covers plant discharge, road delivery, breakdown rolling, cessation (175°F), and minimum ambient air and surface limits.",
  image: "https://bitumencalcpro.com/asphalt-paving-temperature-guide.webp",
  datePublished: "2026-11-13T00:00:00.000Z",
  dateModified: "2026-11-13T00:00:00.000Z",
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
    "@id": "https://bitumencalcpro.com/blog/asphalt-paving-temperature",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What temperature is hot mix asphalt laid at?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Typically 250 to 325°F (121 to 163°C) at the road behind the paver screed, with the exact range set by agency specification and binder grade.",
      },
    },
    {
      "@type": "Question",
      name: "What is the minimum temperature for paving asphalt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most specifications call for about 35 to 55°F (2 to 13°C) air and surface temperature, depending on lift thickness. A common surface-course rule is 40 to 50°F and rising.",
      },
    },
    {
      "@type": "Question",
      name: "What is the cessation temperature for asphalt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "About 175 to 185°F (79 to 85°C). Below this threshold, rolling adds little or no density and can fracture aggregate stones.",
      },
    },
    {
      "@type": "Question",
      name: "What temperature should asphalt be when you start rolling?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Breakdown rolling should start while the mat is above roughly 240 to 250°F (116 to 121°C), rolling as hot as the mat tolerates without shoving.",
      },
    },
    {
      "@type": "Question",
      name: "How hot is asphalt when it comes out of the plant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "About 275 to 350°F (135 to 177°C) for hot mix asphalt (HMA) and 215 to 275°F (102 to 135°C) for warm mix asphalt (WMA).",
      },
    },
    {
      "@type": "Question",
      name: "How long until you can drive on new asphalt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The mat should cool below about 140°F (60°C) before traffic crosses it. Residential driveways and parking lots usually wait 24 to 48 hours to prevent surface scuffing.",
      },
    },
    {
      "@type": "Question",
      name: "Can you pave asphalt when it is cold?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Within limits. Warm mix additives, thicker lifts, and a sun-warmed dry base extend the season, but agency specifications set strict minimum air and base cutoffs.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between hot mix and warm mix temperatures?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Warm mix is produced at about 215 to 275°F, compared with 275 to 350°F for hot mix. Chemical additives or water injection foaming help it coat aggregate and compact at lower temperatures.",
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
      name: "Asphalt Paving Temperature Chart",
      item: "https://bitumencalcpro.com/blog/asphalt-paving-temperature",
    },
  ],
};

// ── Helper Components ────────────────────────────────────────
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

// ── Page Component ───────────────────────────────────────────
export default function AsphaltPavingTemperaturePage() {
  const tocItems = [
    { id: "temperature-chart", label: "Asphalt Paving Temperature Chart" },
    { id: "lift-thickness-temps", label: "Minimum Air and Surface Temp by Lift Thickness" },
    { id: "hot-warm-cold-mix", label: "Hot Mix vs Warm Mix vs Cold Mix Temperatures" },
    { id: "how-fast-asphalt-cools", label: "How Fast Asphalt Cools" },
    { id: "what-each-roller-does", label: "What Each Roller Does at Its Temperature" },
    { id: "hot-weather-paving", label: "Hot Weather Paving" },
    { id: "cold-weather-paving", label: "Cold Weather Paving" },
    { id: "measuring-temperature", label: "How to Measure Asphalt Temperature" },
    { id: "common-mistakes", label: "Common Temperature Mistakes" },
    { id: "f-to-c-reference", label: "Quick Reference: Fahrenheit to Celsius" },
    { id: "faq", label: "Frequently Asked Questions" },
  ];

  return (
    <>
      {/* ── JSON-LD Schemas ── */}
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
            <span className="text-slate-300 truncate">Asphalt Paving Temperature Chart</span>
          </nav>

          <div className="mb-4">
            <span className="inline-flex items-center gap-1.5 bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
              <Thermometer className="w-3 h-3" />
              Paving Temperature &amp; Weather
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5 max-w-4xl">
            Asphalt Paving Temperature Chart
            <span className="block text-orange-400 text-2xl sm:text-3xl mt-1">
              Mix, Air, Surface, and Compaction Temperatures
            </span>
          </h1>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-orange-400" />
              <time dateTime="2026-11-13">November 13, 2026</time>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-orange-400" />
              13 min read
            </span>
            <span className="flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-orange-400" />
              By BitumenCalcPro
            </span>
          </div>
        </div>
      </div>

      {/* ── Featured Image ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-0 mb-2">
        <figure className="w-full">
          <div className="relative w-full overflow-hidden rounded-xl shadow-2xl">
            <Image
              src="/asphalt-paving-temperature-guide.webp"
              alt="Asphalt paving temperature chart guide — asphalt paver laying hot mix asphalt on highway with roller following closely behind"
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
                An asphalt paving temperature chart tracks hot mix from plant to cooled mat. Mix is produced at roughly{" "}
                <strong className="text-orange-300">275 to 350°F (135 to 177°C)</strong> and reaches the road at about{" "}
                <strong className="text-orange-300">250 to 325°F</strong>. Breakdown rolling starts above roughly 240°F,
                rolling should finish before the mat falls to about 175 to 185°F (the cessation temperature), and traffic waits
                until it is below about 140°F. Ambient air and surface temperatures usually must be at least 35 to 55°F,
                depending on lift thickness and agency specification.
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

            {/* Introduction */}
            <p className="text-slate-300 leading-relaxed mb-6 text-lg">
              Asphalt paving is a race against the thermometer. Hot mix has to be spread, rolled, and finished before it
              cools, and each stage has its own temperature window. An asphalt paving temperature chart shows those windows in
              one place, from the plant discharge to the point where traffic can safely drive on the surface.
            </p>
            <p className="text-slate-300 leading-relaxed mb-8">
              This guide gives the working chart, the minimum air and surface temperatures by lift thickness, the differences
              between hot, warm, and cold mix, and the hot- and cold-weather adjustments crews make. Specifications vary by
              agency, so treat the numbers as typical ranges and follow your project documents.
            </p>

            {/* ── SECTION 1: Asphalt Paving Temperature Chart ── */}
            <section id="temperature-chart" className="scroll-mt-24 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 pl-4 border-l-4 border-orange-400">
                Asphalt Paving Temperature Chart
              </h2>

              <InfoTable
                headers={["Stage", "Temperature (°F)", "Temperature (°C)", "Notes"]}
                rows={[
                  ["Plant production (hot mix)", "275 to 350", "135 to 177", "Specifications cap the upper end by binder and mix design"],
                  ["Mix at the road", "250 to 325", "121 to 163", "Some agencies set a strict floor of 265°F"],
                  ["Behind the screed, before breakdown", "240 to 290 typical; floor near 190 to 200", "116 to 143; floor near 88 to 93", "Minimum varies by agency and mix design"],
                  ["Breakdown rolling (first coverage)", "Start before surface drops below ~240 to 250", "116 to 121", "Roll as hot as the mat tolerates without shoving"],
                  ["Intermediate rolling", "Finish before about 175 to 190", "79 to 88", "Most of the density comes in this band"],
                  ["Cessation temperature", "About 175 to 185", "79 to 85", "Rolling adds little or no density below this"],
                  ["Finish rolling", "Finish before about 140 to 150", "60 to 66", "Removes roller marks and irons surface"],
                  ["Open to traffic", "Below about 140", "60", "Driveways usually wait 24 to 48 hours"],
                ]}
              />

              <p className="text-slate-300 leading-relaxed mb-4">
                These are typical agency ranges, and a few states set tighter or looser limits. California Department of
                Transportation (
                <a
                  href="https://dot.ca.gov/programs/construction/pavement-construction"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 inline-flex items-center gap-1"
                >
                  Caltrans
                  <ExternalLink className="w-3 h-3" />
                </a>
                ) specifications, for instance, give slightly different breakdown and finish limits depending on the binder
                grade, and a national review of state highway specifications found minimum placement temperatures ranging from
                200°F for a warm mix to 265°F for a polymer-modified PG 64-22 mix.
              </p>
            </section>

            {/* ── SECTION 2: Minimum Air and Surface Temp by Lift Thickness ── */}
            <section id="lift-thickness-temps" className="scroll-mt-24 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 pl-4 border-l-4 border-teal-400">
                Minimum Air and Surface Temperature by Lift Thickness
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Thin lifts lose heat fast, so they demand warmer weather. A thick lift holds heat longer and stays workable.
                Agencies formalize this as a table linking minimum ambient air and surface temperature directly to compacted
                lift thickness:
              </p>

              <InfoTable
                headers={["Compacted Lift Thickness", "Minimum Ambient Temperature (°F)", "Minimum Ambient Temperature (°C)"]}
                rows={[
                  ["1.0 inch or less", "55°F", "13°C"],
                  ["1.1 to 2.0 inches", "45°F", "7°C"],
                  ["2.1 to 3.0 inches", "40°F", "4°C"],
                  ["3.1 to 4.5 inches", "35°F", "2°C"],
                ]}
              />

              <p className="text-slate-300 leading-relaxed mb-4">
                Standard highway specifications prohibit placement on a wet or frozen surface and require mix arriving at the
                road between 265°F and 325°F. Other transportation departments publish separate columns for surface wear
                courses versus base courses, requiring higher minimum ambient thresholds for wearing courses (commonly 45°F to
                50°F and rising). Review your project specification and our comprehensive{" "}
                <Link
                  href="/blog/asphalt-thickness"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                >
                  asphalt pavement layer thickness guide
                </Link>{" "}
                to check standard lift depths.
              </p>

              <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-5 mb-6">
                <h3 className="text-white font-bold text-base mb-2">Field Example: Base vs. Air Temperature</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-3">
                  A crew plans to place a 2-inch surface course. The agency table above specifies 45°F minimum for that
                  thickness. At 9:00 AM, the ambient air reads 52°F and rising, yet an infrared check on the shaded aggregate
                  base reads 44°F.
                </p>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Because the base is below the 45°F requirement, placing hot mix over it will flash-cool the bottom of the mat,
                  preventing proper compaction. The crew waits for direct sun to warm the stone or shifts the placement window
                  to the afternoon.
                </p>
              </div>

              <p className="text-slate-300 leading-relaxed">
                Always check temperature on the surface as well as in the air. A dark, previously paved base in full sun can
                read 15°F to 20°F above ambient air, while a damp or shaded aggregate base can read well below it.
              </p>
            </section>

            {/* ── SECTION 3: Hot Mix vs Warm Mix vs Cold Mix Temperatures ── */}
            <section id="hot-warm-cold-mix" className="scroll-mt-24 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 pl-4 border-l-4 border-orange-400">
                Hot Mix vs Warm Mix vs Cold Mix Temperatures
              </h2>

              <InfoTable
                headers={["Parameter", "Hot Mix (HMA)", "Warm Mix (WMA)", "Cold Mix"]}
                rows={[
                  ["Production temperature", "275 to 350°F", "215 to 275°F", "Ambient (unheated)"],
                  ["Minimum at paver screed", "About 225 to 250°F", "About 200 to 225°F", "Not applicable"],
                  ["Primary use cases", "Highways, driveways, parking lots", "Long hauls, cool weather, late season", "Pothole patching & emergency repairs"],
                  ["Weather window", "Warm, dry conditions", "Wider window, lower base cutoffs", "Cool and damp conditions"],
                ]}
              />

              <p className="text-slate-300 leading-relaxed mb-4">
                Warm mix asphalt (WMA) incorporates chemical additives or water-injection foaming that lowers binder viscosity,
                allowing aggregates to be fully coated and compacted at temperatures 30°F to 60°F below conventional HMA. This
                significantly extends paving into cooler autumn months and cuts fuel consumption at the plant.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Cold mix asphalt requires no heating plant. It is formulated with solvent cutbacks or specialty emulsifiers for
                temporary pothole repairs in wet and chilly conditions, though it does not match hot mix in structural capacity
                or service life. Our detailed{" "}
                <Link
                  href="/blog/cold-mix-bitumen"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                >
                  cold mix bitumen guide
                </Link>{" "}
                explains where cold patches perform best.
              </p>
            </section>

            {/* ── SECTION 4: How Fast Asphalt Cools ── */}
            <section id="how-fast-asphalt-cools" className="scroll-mt-24 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 pl-4 border-l-4 border-teal-400">
                How Fast Asphalt Cools
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Six physical and environmental factors determine how many minutes your crew has before the mat reaches its
                cessation threshold:
              </p>

              <SectionImage
                src="/asphalt-paving-weather-cooling-conditions.webp"
                alt="Fresh asphalt exposed to cool, windy weather conditions — showing rapid heat loss on fresh road surface"
                caption="Wind and cool air rapidly pull heat from the surface of the mat, creating a stiff crust while a cold base chills the mix from below."
              />

              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                {[
                  { factor: "Lift Thickness", detail: "Lifts over 2 inches retain internal core heat significantly longer than thin 1-inch surface lifts." },
                  { factor: "Base Temperature", detail: "A cold base pulls heat rapidly out of the bottom of the fresh mat by conductive transfer." },
                  { factor: "Delivery Temperature", detail: "Mix delivered at 300°F gives a much longer rolling window than mix arriving at 260°F." },
                  { factor: "Ambient Air Temperature", detail: "Cold air speeds convective cooling across the exposed mat." },
                  { factor: "Wind Speed", detail: "Wind is the most aggressive cooling factor; a 15 mph wind cuts available compaction time in half." },
                  { factor: "Solar Radiation", detail: "Direct sun preheats the base and slows surface heat loss; shaded areas cool rapidly." },
                ].map((item) => (
                  <div key={item.factor} className="bg-slate-800/60 border border-slate-700 rounded-lg p-3">
                    <p className="text-orange-300 font-bold text-sm mb-1">{item.factor}</p>
                    <p className="text-slate-300 text-xs leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>

              <p className="text-slate-300 leading-relaxed">
                Compaction also reduces layer thickness. A mat placed loosely at 1⅞ to 2 inches compacts down to approximately
                1½ inches under heavy rollers — a reduction of roughly 20% to 25%. When estimating required material quantities,
                always calculate from compacted thickness rather than loose depth. Use our step-by-step{" "}
                <Link
                  href="/blog/asphalt-yield"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                >
                  asphalt yield and coverage per ton guide
                </Link>{" "}
                to convert between dimensions, density, and ordered tonnage.
              </p>
            </section>

            {/* ── SECTION 5: What Each Roller Does at Its Temperature ── */}
            <section id="what-each-roller-does" className="scroll-mt-24 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 pl-4 border-l-4 border-orange-400">
                What Each Roller Does at Its Temperature
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Paving operations deploy a synchronized roller train. Each machine type operates within a defined temperature
                slice to build density without scarring the mat:
              </p>

              <SectionImage
                src="/asphalt-compaction-roller-stages.webp"
                alt="Steel drum and pneumatic tire rollers compacting asphalt — vibratory breakdown, rubber tire intermediate, and static finish rollers"
                caption="Each roller works within its temperature band: vibratory steel drums for initial breakdown, pneumatic tire rollers for intermediate kneading, and static drums for final finish."
              />

              <div className="space-y-3 mb-6">
                {[
                  {
                    phase: "Breakdown Rolling (240°F – 290°F)",
                    desc: "Operates right behind the paver screed. It achieves the vast majority of target density while the binder is fluid. Heavy vibratory double-drum rollers typically lead this phase.",
                  },
                  {
                    phase: "Intermediate Rolling (190°F – 240°F)",
                    desc: "Continues densification and seals voids. Pneumatic rubber-tire rollers provide a kneading action that knits aggregate particles together before the mix reaches cessation.",
                  },
                  {
                    phase: "Finish Rolling (140°F – 175°F)",
                    desc: "A static steel-wheel roller irons out tire marks, ridges, and surface blemishes. It does not add density — its sole purpose is providing a smooth, uniform ride surface.",
                  },
                ].map((r) => (
                  <div key={r.phase} className="bg-slate-800/60 border border-slate-700 rounded-xl p-4">
                    <p className="text-teal-300 font-bold text-base mb-1">{r.phase}</p>
                    <p className="text-slate-300 text-sm leading-relaxed">{r.desc}</p>
                  </div>
                ))}
              </div>

              <p className="text-slate-300 leading-relaxed">
                Below the cessation temperature (roughly 175°F), additional roller passes will not increase density.
                Specifications typically mandate achieving 92% to 97% of the mix&apos;s maximum theoretical density (Gmm). A
                mat that drops below 175°F before rolling finishes will fall short of density and suffer premature distress.
                Consult our complete operational guide on{" "}
                <Link
                  href="/blog/how-to-compact-asphalt"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                >
                  how to compact asphalt with proper roller sequences and passes
                </Link>{" "}
                to master the rolling pattern.
              </p>
            </section>

            {/* ── SECTION 6: Hot Weather Paving ── */}
            <section id="hot-weather-paving" className="scroll-mt-24 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 pl-4 border-l-4 border-teal-400">
                Hot Weather Paving
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Extreme ambient heat does not stop paving, but it alters the operational plan. When air temperatures climb
                above 85°F (29°C), state highway guidance (such as New York State DOT specifications) advises:
              </p>

              <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-5 mb-6 space-y-3">
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" />
                    <span><strong>Lower Production Temperature:</strong> Reduce mix plant discharge temperature by 15°F to 20°F to prevent excessive binder tenderness and mat shoving.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" />
                    <span><strong>Limit Pass Count:</strong> Stop rolling once density is reached; over-rolling hot asphalt causes the mix to shove and create bow waves ahead of the drums.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" />
                    <span><strong>Park Rollers Off the Mat:</strong> Heavy rollers must never stand idle on hot pavement, as they leave permanent drum depressions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" />
                    <span><strong>Delay Traffic Opening:</strong> Keep vehicle traffic completely off the mat until internal temperatures cool below 140°F (60°C). On private driveways and parking lots, waiting 24 to 48 hours prevents power-steering tire gouges.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* ── SECTION 7: Cold Weather Paving ── */}
            <section id="cold-weather-paving" className="scroll-mt-24 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 pl-4 border-l-4 border-orange-400">
                Cold Weather Paving
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Cold weather compresses the compaction window drastically, leaving crews little margin for error. Strict cold
                weather paving rules must be enforced:
              </p>

              <SectionImage
                src="/cold-weather-asphalt-paving-operation.webp"
                alt="Crew paving and compacting asphalt in cool, dry weather — asphalt trucks tarped and breakdown rollers tight behind paver"
                caption="In cool weather, breakdown rollers must operate directly behind the screed and trucks must stay covered with tarps until dumping."
              />

              <div className="space-y-3 mb-6">
                {[
                  { rule: "Check Air and Surface Simultaneously", desc: "Specifications require both air and base temperatures to be above the threshold and rising before releasing plant trucks." },
                  { rule: "Utilize Warm Mix Asphalt (WMA)", desc: "WMA foaming or chemical additives allow workable compaction down to lower ambient limits where specifications permit." },
                  { rule: "Design Thicker Lifts", desc: "Where elevation permits, placing thicker lifts (2.5 to 3.5 inches) dramatically increases heat retention compared to thin surface layers." },
                  { rule: "Monitor Wind Velocity Closely", desc: "Wind draws heat from the surface within minutes; keep haul trucks tarped and tighten the roller spacing behind the paver." },
                  { rule: "Respect Seasonal Cutoff Dates", desc: "Most DOT agencies enforce calendar cutoff dates (typically mid-October to early November) after which surface paving is prohibited." },
                  { rule: "Never Spray Tack on Frozen Pavement", desc: "Applying bituminous emulsion to frozen asphalt traps water and emulsifiers that freeze, preventing bond. See our guide on prime coat vs tack coat for proper emulsion break." },
                ].map((item) => (
                  <div key={item.rule} className="flex items-start gap-3 bg-slate-800/60 border border-slate-700 rounded-lg p-3">
                    <AlertCircle className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-white font-semibold text-sm">{item.rule}</p>
                      <p className="text-slate-300 text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-slate-300 leading-relaxed">
                Emulsion break times and tack bonding are thoroughly covered in our{" "}
                <Link
                  href="/blog/prime-coat-vs-tack-coat"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                >
                  prime coat vs tack coat comparison
                </Link>
                . Furthermore, wet conditions multiply cold-weather risks; see our analysis on{" "}
                <Link
                  href="/blog/pave-asphalt-in-rain"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                >
                  paving asphalt in wet conditions and rain
                </Link>{" "}
                to understand how moisture causes steam stripping and debonding.
              </p>
            </section>

            {/* ── SECTION 8: How to Measure Asphalt Temperature ── */}
            <section id="measuring-temperature" className="scroll-mt-24 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 pl-4 border-l-4 border-teal-400">
                How to Measure Asphalt Temperature
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Handheld infrared (IR) thermometers and thermal imaging cameras are the standard jobsite tools for assessing mat
                temperatures, while modern pavers often feature continuous screed-mounted infrared sensor bars.
              </p>

              <SectionImage
                src="/measuring-asphalt-temperature-infrared.webp"
                alt="Technician measuring fresh asphalt with an infrared thermometer behind the paver screed"
                caption="Non-contact infrared thermometers measure surface radiant temperature. Probe thermometers should periodically verify internal core heat."
              />

              <div className="bg-teal-900/20 border border-teal-500/30 rounded-xl p-5 mb-6">
                <p className="text-teal-300 font-semibold mb-1">Surface vs. Internal Core Temperatures</p>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Infrared guns measure the radiant temperature of the upper aggregate crust only. In windy or chilly conditions,
                  the surface of the mat can register 30°F cooler than the core of the lift. Quality control inspectors should
                  periodically insert an armored stem-dial thermometer into the center of the uncompacted lift to confirm actual
                  internal compaction heat.
                </p>
              </div>

              <p className="text-slate-300 leading-relaxed">
                Take readings at multiple locations across the lane width (centerline, quarter points, and outer unconfined
                edges), as thermal segregation in the delivery truck can create cold spots that compact unevenly.
              </p>
            </section>

            {/* ── SECTION 9: Common Temperature Mistakes ── */}
            <section id="common-mistakes" className="scroll-mt-24 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 pl-4 border-l-4 border-orange-400">
                Common Temperature Mistakes
              </h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                Failing to adhere to temperature boundaries is the root cause of most premature pavement cracking, rutting, and
                raveling.
              </p>

              <SectionImage
                src="/asphalt-poor-compaction-pavement-damage.webp"
                alt="Asphalt surface showing raveling and poor compaction damage caused by rolling below cessation temperature"
                caption="Severe pavement raveling and aggregate loss: rolling asphalt after it drops below cessation temperature fails to achieve target density, allowing moisture infiltration."
              />

              <div className="space-y-3 mb-6">
                {[
                  {
                    err: "Paving below minimum air or base temperatures",
                    fix: "The mat loses heat before rollers can complete target passes, leaving excessive in-place air voids.",
                  },
                  {
                    err: "Overheating mix at the asphalt plant",
                    fix: "Heating mix beyond 350°F severely oxidizes and ages the bitumen binder, making the finished pavement prematurely brittle.",
                  },
                  {
                    err: "Delaying breakdown rolling passes",
                    fix: "Allowing a roller to fall 600+ feet behind the paver allows the mix to drop below 240°F, permanently locking in low density.",
                  },
                  {
                    err: "Rolling below the 175°F cessation threshold",
                    fix: "Vibrating a cooled mat fractures aggregate stones and breaks internal bonds without adding density.",
                  },
                  {
                    err: "Ignoring cold or damp base conditions",
                    fix: "A cold aggregate base chills the bottom of the lift in seconds via conduction, causing severe bottom-up density loss.",
                  },
                  {
                    err: "Placing thin lifts in windy weather",
                    fix: "Thin 1-inch overlays lose heat in under 8 minutes in 15 mph wind; schedule thin wearing courses during calm, warm days.",
                  },
                  {
                    err: "Confusing Fahrenheit and Celsius specifications",
                    fix: "250°F is 121°C; ensure crews, scale operators, and testers are calibrated to the same temperature scale.",
                  },
                ].map((item) => (
                  <div key={item.err} className="flex items-start gap-3 bg-slate-800/60 border border-slate-700 rounded-lg p-3">
                    <AlertCircle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-white font-semibold text-sm">{item.err}</p>
                      <p className="text-slate-400 text-xs mt-0.5">{item.fix}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-slate-300 leading-relaxed">
                When temperature drops prevent rollers from hitting density, the resulting high void content can be measured
                using the procedures in our guide on{" "}
                <Link
                  href="/blog/asphalt-air-voids"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                >
                  calculating air voids in asphalt
                </Link>
                .
              </p>
            </section>

            {/* ── SECTION 10: Fahrenheit to Celsius Quick Reference ── */}
            <section id="f-to-c-reference" className="scroll-mt-24 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 pl-4 border-l-4 border-teal-400">
                Quick Reference: Fahrenheit to Celsius
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Use this rapid conversion table for standard asphalt paving milestones:
              </p>

              <InfoTable
                headers={["°F", "°C", "Paving Milestone"]}
                rows={[
                  ["140°F", "60°C", "Safe threshold to open pavement to traffic"],
                  ["150°F", "66°C", "Finish rolling cutoff window"],
                  ["175°F", "79°C", "Critical compaction cessation temperature"],
                  ["190°F", "88°C", "Intermediate rolling target completion"],
                  ["225°F", "107°C", "Minimum delivery temperature for warm mix"],
                  ["250°F", "121°C", "Minimum road delivery for standard hot mix"],
                  ["275°F", "135°C", "Target breakdown rolling temperature"],
                  ["300°F", "149°C", "Standard HMA placement temperature behind screed"],
                  ["325°F", "163°C", "Upper delivery threshold for polymer-modified mixes"],
                  ["350°F", "177°C", "Maximum allowable plant production ceiling"],
                ]}
              />
            </section>

            {/* ── SECTION 11: FAQ ── */}
            <section id="faq" className="scroll-mt-24 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 pl-4 border-l-4 border-orange-400">
                Frequently Asked Questions
              </h2>
              <div className="space-y-5">
                {[
                  {
                    q: "What temperature is hot mix asphalt laid at?",
                    a: "Typically 250 to 325°F (121 to 163°C) at the road behind the paver screed, with the exact range set by agency specification and binder grade.",
                  },
                  {
                    q: "What is the minimum temperature for paving asphalt?",
                    a: "Most specifications call for about 35 to 55°F (2 to 13°C) air and surface temperature, depending on lift thickness. A common surface-course rule is 40 to 50°F and rising.",
                  },
                  {
                    q: "What is the cessation temperature for asphalt?",
                    a: "About 175 to 185°F (79 to 85°C). Below this threshold, rolling adds little or no density and can fracture aggregate stones.",
                  },
                  {
                    q: "What temperature should asphalt be when you start rolling?",
                    a: "Breakdown rolling should start while the mat is above roughly 240 to 250°F (116 to 121°C), rolling as hot as the mat tolerates without shoving.",
                  },
                  {
                    q: "How hot is asphalt when it comes out of the plant?",
                    a: "About 275 to 350°F (135 to 177°C) for hot mix asphalt (HMA) and 215 to 275°F (102 to 135°C) for warm mix asphalt (WMA).",
                  },
                  {
                    q: "How long until you can drive on new asphalt?",
                    a: "The mat should cool below about 140°F (60°C) before traffic crosses it. Residential driveways and parking lots usually wait 24 to 48 hours to prevent surface scuffing.",
                  },
                  {
                    q: "Can you pave asphalt when it is cold?",
                    a: "Within limits. Warm mix additives, thicker lifts, and a sun-warmed dry base extend the season, but agency specifications set strict minimum air and base cutoffs.",
                  },
                  {
                    q: "What is the difference between hot mix and warm mix temperatures?",
                    a: "Warm mix is produced at about 215 to 275°F, compared with 275 to 350°F for hot mix. Chemical additives or water injection foaming help it coat aggregate and compact at lower temperatures.",
                  },
                ].map((item) => (
                  <div key={item.q} className="bg-slate-800/60 border border-slate-700 rounded-xl p-5">
                    <h3 className="text-lg font-bold text-white mb-3">{item.q}</h3>
                    <p className="text-slate-300 leading-relaxed text-sm">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-slate-800 to-slate-800/60 border border-slate-700 rounded-xl p-6">
                <h2 className="text-xl font-bold text-white mb-4">Summary</h2>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Hot mix asphalt moves through a precise sequence of temperature milestones: produced at 275°F to 350°F,
                  placed on the road at 250°F to 325°F, rolled while hot enough to densify, and completed before dropping below
                  the 175°F to 185°F cessation threshold.
                </p>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Thin lifts, wind, and cold bases shorten the workable window rapidly, while warm mix asphalt and thicker lifts
                  provide valuable buffer time. Always verify minimum requirements against project specifications and measure the
                  mat continuously using calibrated infrared and probe thermometers.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  Before ordering mix for your next paving job, use the free{" "}
                  <Link
                    href="/"
                    className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors font-semibold"
                  >
                    Bitumen Calculator at BitumenCalcPro
                  </Link>{" "}
                  to calculate required tonnage, volume, and material coverage accurately.
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
    </>
  );
}

