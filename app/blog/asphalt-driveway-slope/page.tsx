// app/blog/asphalt-driveway-slope/page.tsx
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
  Compass,
} from "lucide-react";

// ── Metadata ────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Asphalt Driveway Slope for Drainage: Minimum & Best Practices",
  description:
    "Master asphalt driveway slope for drainage: minimum 2% grade (1/4 in/ft), crown vs cross slope, maximum grade limits (10–15%), trench drains, and worked calculations.",
  keywords: [
    "asphalt driveway slope for drainage",
    "minimum driveway slope",
    "driveway slope per foot",
    "driveway crown vs cross slope",
    "driveway drainage slope percentage",
    "maximum driveway slope",
    "driveway trench drain garage",
    "driveway standing water repair",
  ],
  alternates: {
    canonical: "https://bitumencalcpro.com/blog/asphalt-driveway-slope",
  },
  openGraph: {
    title:
      "Asphalt Driveway Slope for Drainage: Minimum & Best Practices | BitumenCalcPro",
    description:
      "Practical engineering guide to asphalt driveway slope: minimum 2% grade (1/4 in per foot), crown vs one-way cross slope, max limits, apron transitions, and drainage fixes.",
    url: "https://bitumencalcpro.com/blog/asphalt-driveway-slope",
    siteName: "BitumenCalcPro",
    type: "article",
    publishedTime: "2026-11-13T00:00:00.000Z",
    authors: ["BitumenCalcPro"],
    images: [
      {
        url: "/asphalt-driveway-slope-for-drainage.webp",
        width: 1200,
        height: 675,
        alt: "Asphalt driveway slope for drainage — residential asphalt driveway sloping away from house toward street gutter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Asphalt Driveway Slope for Drainage: Minimum & Best Practices",
    description:
      "Minimum 2% slope for drainage, crown vs cross-slope design, garage trench drains, apron transitions, and how to fix poor slope without full replacement.",
    images: ["/asphalt-driveway-slope-for-drainage.webp"],
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
    "Asphalt Driveway Slope for Drainage: Minimum, Maximum, and Best Practice",
  description:
    "Master asphalt driveway slope for drainage: minimum 2% grade (1/4 in/ft), crown vs cross slope, maximum grade limits (10–15%), trench drains, and worked calculations.",
  image: "https://bitumencalcpro.com/asphalt-driveway-slope-for-drainage.webp",
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
    "@id": "https://bitumencalcpro.com/blog/asphalt-driveway-slope",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the minimum slope for an asphalt driveway?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most guides recommend 2% (about 1/4 inch of drop per foot). Many contractors accept 1% as a functional minimum, and some municipal codes allow 0.5%. Below 1%, asphalt is very likely to hold puddles and develop birdbaths.",
      },
    },
    {
      "@type": "Question",
      name: "How much slope is 1/4 inch per foot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It is about 2.08% (commonly rounded to 2%). Over a 10-foot run, that equals a vertical drop of 2.4 inches; over a 50-foot driveway, it equals 12 inches of total fall.",
      },
    },
    {
      "@type": "Question",
      name: "What is the maximum slope for a residential driveway?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It varies by location, usually between 10% and 18%. Some municipalities allow up to 20%, while others cap residential driveways at 12% to 15%. Anything above 15% is considered steep and requires transition curves.",
      },
    },
    {
      "@type": "Question",
      name: "Should a driveway slope toward the house?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Driveways should always slope away from the house, garage door, and foundation. If site topography forces a reverse slope toward the garage, install a trench drain with a heavy grate across the driveway before the door.",
      },
    },
    {
      "@type": "Question",
      name: "Is a crown or a one-way slope better?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Either layout works. A crown (center ridge falling to both edges) suits wider driveways with grass swales on both sides. A one-way cross slope suits narrower driveways or properties that naturally drain in a single direction.",
      },
    },
    {
      "@type": "Question",
      name: "Can I fix a flat driveway without replacing it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sometimes. Shallow birdbaths and isolated low spots can be patched or overlaid with hot mix. If the entire driveway is flat, installing a trench drain, side swale, or milling and resurfacing may be necessary.",
      },
    },
    {
      "@type": "Question",
      name: "Does slope affect how much asphalt I need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Slope itself has very little effect on surface area or material volume. Thickness does. Grade the stone base to the desired slope, lay a uniform thickness of asphalt everywhere, and calculate tonnage from area, thickness, and compacted density.",
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
      name: "Asphalt Driveway Slope for Drainage",
      item: "https://bitumencalcpro.com/blog/asphalt-driveway-slope",
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
export default function AsphaltDrivewaySlopePage() {
  const tocItems = [
    { id: "how-slope-is-measured", label: "How Driveway Slope Is Measured" },
    { id: "minimum-slope", label: "Minimum Slope for Drainage" },
    { id: "which-way-should-water-flow", label: "Which Way Should Water Flow?" },
    { id: "crown-vs-cross-slope", label: "Crown vs. One-Way Cross Slope" },
    { id: "maximum-slope", label: "Maximum Slope for an Asphalt Driveway" },
    { id: "aprons-and-transitions", label: "Aprons, Transitions, and Garage Entries" },
    { id: "worked-example", label: "Worked Example: A 60-Foot Driveway" },
    { id: "how-to-build-slope", label: "How to Build the Right Slope Into the Job" },
    { id: "poor-slope-consequences", label: "What Poor Slope Does to a Driveway" },
    { id: "fixing-poor-drainage", label: "Fixing a Driveway With Poor Drainage" },
    { id: "swales-and-drains", label: "Swales and Drains: Technical Details" },
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
            <span className="text-slate-300 truncate">Asphalt Driveway Slope</span>
          </nav>

          {/* Category Badge */}
          <div className="mb-4">
            <span className="inline-flex items-center gap-1.5 bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
              <Compass className="w-3 h-3" />
              Driveway Grading &amp; Drainage
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5 max-w-4xl">
            Asphalt Driveway Slope for Drainage
            <span className="block text-teal-400 text-2xl sm:text-3xl mt-1">
              Minimum, Maximum, and Best Practice
            </span>
          </h1>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-teal-400" />
              <time dateTime="2026-11-13">November 13, 2026</time>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-teal-400" />
              13 min read
            </span>
            <span className="flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-teal-400" />
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
              src="/asphalt-driveway-slope-for-drainage.webp"
              alt="Asphalt driveway slope for drainage — residential asphalt driveway sloping away from house toward street gutter"
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
            <div className="bg-gradient-to-r from-teal-900/40 to-slate-800/60 border border-teal-500/30 rounded-xl p-6 mb-8">
              <h2 className="text-teal-400 font-bold text-lg mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Quick Answer
              </h2>
              <p className="text-slate-200 leading-relaxed">
                A good asphalt driveway slope for drainage is <strong className="text-teal-300">2%</strong>, which drops about{" "}
                <strong className="text-teal-300">1/4 inch per foot</strong> (2.4 inches per 10 feet). Many paving
                contractors accept 1% as a functional minimum, while 0.5% is extremely difficult to pave without creating puddles.
                Always slope the surface away from the house and garage, incorporating a 2% cross slope or crown for lateral
                runoff. Most residential driveways stay under 10% to 15% overall grade, though local building codes establish the legal ceiling.
              </p>
            </div>

            {/* TOC */}
            <nav aria-label="Table of contents" className="bg-slate-800/60 border border-slate-700 rounded-xl p-5 mb-10">
              <h2 className="text-white font-bold text-base mb-4 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-teal-400" />
                In This Guide
              </h2>
              <ol className="space-y-2">
                {tocItems.map((item, i) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="flex items-center gap-2 text-sm text-slate-300 hover:text-teal-400 transition-colors group"
                    >
                      <span className="text-teal-500 font-mono text-xs w-5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                      <span className="group-hover:underline">{item.label}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            {/* Introduction */}
            <p className="text-slate-300 leading-relaxed mb-6 text-lg">
              Water is asphalt&apos;s main enemy. A driveway that holds standing puddles after rain cracks prematurely, softens at the
              aggregate base, and risks channeling water directly toward your garage door or house foundation.
            </p>
            <p className="text-slate-300 leading-relaxed mb-8">
              The right asphalt driveway slope for drainage fixes almost all of those risks before the first batch of hot mix
              leaves the plant. This guide covers minimum and maximum grades, crown versus one-way cross slope, apron
              transitions, a worked calculation example with real numbers, and field fixes for driveways that currently drain poorly.
            </p>

            {/* ── SECTION 1: How Slope Is Measured ── */}
            <section id="how-slope-is-measured" className="scroll-mt-24 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 pl-4 border-l-4 border-teal-400">
                How Driveway Slope Is Measured
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                In civil engineering and paving, slope is usually expressed as a percentage: vertical rise divided by horizontal
                run, multiplied by 100. For example, a drop of 1 foot over a horizontal distance of 100 feet is a 1% slope.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                Paving crews on job sites frequently talk in inches per foot of drop, while architectural plans may specify ratios
                or angular degrees. This conversion table summarizes the values commonly used in driveway construction:
              </p>

              <SectionImage
                src="/measuring-asphalt-driveway-slope.webp"
                alt="Contractor measuring asphalt driveway gradient with a level and tape measure on subgrade"
                caption="Slope measurement on site: digital levels and slope boards confirm vertical drop per foot before paving hot mix."
                priority
              />

              <InfoTable
                headers={["Slope (%)", "Drop Per Foot", "Drop Per 10 Feet", "Ratio", "Angle"]}
                rows={[
                  ["1%", "0.12 in (approx. 1/8 in)", "1.2 in", "1:100", "0.57°"],
                  ["2%", "0.24 in (approx. 1/4 in)", "2.4 in", "1:50", "1.15°"],
                  ["5%", "0.60 in (approx. 5/8 in)", "6.0 in", "1:20", "2.90°"],
                  ["10%", "1.20 in (approx. 1-1/4 in)", "12.0 in", "1:10", "5.70°"],
                  ["15%", "1.80 in (approx. 1-3/4 in)", "18.0 in", "1:6.7", "8.50°"],
                ]}
              />

              <p className="text-slate-300 leading-relaxed">
                Every residential driveway requires two slopes in its grading plan: the <strong>longitudinal slope</strong>,
                which carries water along the length from garage to street, and the <strong>cross slope</strong>, which directs
                water across the width from the center out or from one side to the other.
              </p>
            </section>

            {/* ── SECTION 2: Minimum Slope for Drainage ── */}
            <section id="minimum-slope" className="scroll-mt-24 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 pl-4 border-l-4 border-orange-400">
                Minimum Slope for Drainage
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                The universal recommendation across pavement engineering for outdoor asphalt surfaces is <strong>2%</strong> (1/4
                inch drop per foot). A 2% grade sheds water reliably, prevents shallow ponding, and looks flat and comfortable to the
                human eye.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                Real jobs allow some practical flexibility. Many experienced paving contractors accept 1% (1/8 inch per foot) as a
                functional floor, provided the base is graded with extreme precision. Civil engineers sometimes design to 0.5% on
                drawings, but achieving 0.5% with flexible asphalt without creating birdbaths is virtually impossible due to minor
                roller drum variations.
              </p>

              <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-5 mb-6">
                <h3 className="text-white font-bold text-base mb-2">Asphalt Institute Cross-Slope Standards</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-2">
                  For cross slope, the{" "}
                  <a
                    href="https://www.asphaltinstitute.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-400 hover:text-teal-300 underline underline-offset-2 inline-flex items-center gap-1"
                  >
                    Asphalt Institute
                    <ExternalLink className="w-3 h-3" />
                  </a>{" "}
                  recommends <strong>1.5% to 3.0%</strong> on paved surfaces. A 2.0% cross slope sits in the ideal center of that
                  guidance.
                </p>
                <p className="text-slate-300 text-sm leading-relaxed">
                  In regions with frequent heavy downpours, road drainage guidelines allow cross slopes up to 2.5% to ensure water
                  clears the travel lanes before forming sheets.
                </p>
              </div>

              <p className="text-slate-300 leading-relaxed">
                A simple field rule: <strong>always design for 2%, and treat 1% as the absolute minimum</strong>. Anything below
                1% requires perfect base compaction and zero paver screed deflection — conditions few residential projects achieve.
              </p>
            </section>

            {/* ── SECTION 3: Which Way Should Water Flow ── */}
            <section id="which-way-should-water-flow" className="scroll-mt-24 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 pl-4 border-l-4 border-teal-400">
                Which Way Should Water Flow?
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Water must move away from the house, the garage entrance, and the foundation walls. That single fundamental rule
                trumps every other grading dimension.
              </p>

              <SectionImage
                src="/asphalt-driveway-water-drainage.webp"
                alt="Rainwater flowing cleanly down an asphalt driveway toward the street gutter and storm drain"
                caption="Planned surface flow: runoff should travel away from home foundations toward street gutters, swales, or dedicated catch basins."
              />

              <p className="text-slate-300 leading-relaxed mb-4">
                Common engineered discharge destinations include:
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {[
                  { dest: "Street Gutter / Curb", desc: "The standard choice for driveways that slope downhill toward the roadway municipal storm system." },
                  { dest: "Vegetated Swale", desc: "A shallow turf channel parallel to the driveway on larger lots that absorbs and conveys runoff." },
                  { dest: "Trench Drain / Catch Basin", desc: "Essential when the driveway slopes backward toward the garage or has no lateral yard outlet." },
                  { dest: "Rain Garden / Bio-retention", desc: "Ideal where soils drain well and homeowners seek on-site storm management." },
                ].map((item) => (
                  <div key={item.dest} className="bg-slate-800/60 border border-slate-700 rounded-lg p-4">
                    <p className="text-teal-300 font-bold text-sm mb-1">{item.dest}</p>
                    <p className="text-slate-300 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-4">
                <p className="text-red-300 font-bold text-sm mb-1">Legal Boundary Warning</p>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Never discharge concentrated driveway runoff directly onto an adjoining neighbor&apos;s parcel. Most municipal codes
                  also strictly regulate how much sheet runoff can cross public sidewalks, which can create winter ice hazards.
                </p>
              </div>
            </section>

            {/* ── SECTION 4: Crown vs. One-Way Cross Slope ── */}
            <section id="crown-vs-cross-slope" className="scroll-mt-24 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 pl-4 border-l-4 border-orange-400">
                Crown vs. One-Way Cross Slope
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Both cross-sectional grading schemes shed water effectively. Choosing between them depends on driveway width,
                surrounding topography, and adjacent landscaping:
              </p>

              <SectionImage
                src="/asphalt-driveway-crown-vs-cross-slope.webp"
                alt="Crown vs one-way cross-slope comparison diagram showing center ridge versus uniform tilt cross-section"
                caption="Crown design creates a central ridge shedding water to both shoulders, while a one-way cross slope tilts the entire slab toward a single drainage ditch."
              />

              <InfoTable
                headers={["Layout", "How It Works", "Best Application", "Key Consideration"]}
                rows={[
                  [
                    "Crowned Profile",
                    "Centerline is the high point; 2% slope falls to both left and right edges",
                    "Wider driveways (14+ ft) with open grass or swales on both sides",
                    "Requires viable drainage outlets on both sides of the driveway",
                  ],
                  [
                    "One-Way Cross Slope",
                    "Entire surface tilts uniformly 1% to 2% toward one side",
                    "Narrower driveways, side-hill lots, or driveways flanked by a retaining wall",
                    "Water volume concentrates on the low side; needs an adequate gutter or swale",
                  ],
                ]}
              />

              <p className="text-slate-300 leading-relaxed mb-4">
                On a typical 12-foot residential driveway:
              </p>
              <ul className="space-y-1 mb-4 text-slate-300 text-sm">
                <li>• A <strong>crowned cross slope at 2%</strong> elevates the center approximately 1.4 inches above each edge.</li>
                <li>• A <strong>one-way cross slope at 2%</strong> drops the low edge roughly 2.9 inches below the high edge across the entire 12-foot span.</li>
              </ul>
              <p className="text-slate-300 leading-relaxed">
                One critical design consideration: a crowned profile creates a slight peak that can cause low-clearance vehicles to
                bottom out if the driveway meets a steep street apron. A one-way cross slope maintains a planar surface that prevents
                vehicle scraping.
              </p>
            </section>

            {/* ── SECTION 5: Maximum Slope ── */}
            <section id="maximum-slope" className="scroll-mt-24 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 pl-4 border-l-4 border-teal-400">
                Maximum Slope for an Asphalt Driveway
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                While minimum slope prevents ponding, maximum slope is governed by vehicle traction, safety, and local zoning
                codes. Most municipalities cap driveway grades between <strong>10% and 18%</strong>, with anything above 15%
                classified as a steep driveway.
              </p>

              <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-5 mb-6">
                <h3 className="text-white font-bold text-base mb-2">Agency Guidelines on Maximum Slope</h3>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>
                    • <strong>Texas DOT Guidance:</strong> The{" "}
                    <a
                      href="https://www.txdot.gov/business/road-design/access-management-manual.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-400 hover:text-teal-300 underline underline-offset-2 inline-flex items-center gap-1"
                    >
                      TxDOT Access Management Manual
                      <ExternalLink className="w-3 h-3" />
                    </a>{" "}
                    recommends capping driveway grades within the public right-of-way at 6% or less, and limits private residential
                    driveways to 12%.
                  </li>
                  <li>• <strong>Mountain &amp; Hillside Cities:</strong> Some California hillside jurisdictions cap grades at 20%, requiring engineered transition curves and rough broom textures.</li>
                  <li>• <strong>Snow &amp; Ice Regions:</strong> Northern municipalities commonly cap residential grades at 10% to 12% to prevent winter sliding, and recommend heated pavement systems when slopes exceed 11%.</li>
                </ul>
              </div>

              <p className="text-slate-300 leading-relaxed">
                Steep slopes introduce severe operational challenges: paver rollers struggle to achieve density on grades over 12%
                without shoving the mix, and vehicles lose traction in rain. Always check with your local municipal building or
                public works department before grading a hillside lot.
              </p>
            </section>

            {/* ── SECTION 6: Aprons, Transitions, and Garage Entries ── */}
            <section id="aprons-and-transitions" className="scroll-mt-24 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 pl-4 border-l-4 border-orange-400">
                Aprons, Transitions, and Garage Entries
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Slope changes at the street curb and garage threshold are where water ponding and vehicle undercarriage damage
                most commonly occur:
              </p>

              <SectionImage
                src="/asphalt-driveway-trench-drain-installation.webp"
                alt="Asphalt driveway trench drain installation with cast iron grate positioned across garage entrance threshold"
                caption="A heavy-duty trench drain set across the garage entrance captures reverse downhill runoff before water can enter the building."
              />

              <div className="space-y-4 mb-6">
                {[
                  {
                    title: "The Street Apron",
                    desc: "The connection between the driveway and the public road. Many city codes mandate that the first 10 to 15 feet of apron slope downward toward the road gutter at 2% to 5%, capping the maximum apron grade at 8% to ensure safe sight lines.",
                  },
                  {
                    title: "Vertical Transition Curves",
                    desc: "When a driveway transition exceeds 5% to 6%, vehicles can scrape front bumpers or high-center. Design a 10-foot vertical transition curve (or blend zone with a maximum 5% slope) at the top and bottom of any steep section.",
                  },
                  {
                    title: "The Garage Threshold",
                    desc: "Water pooling against garage doors is a widespread failure. Garage concrete slabs should sit 1 to 2 inches higher than the driveway, with the asphalt sloping away at 1% to 2% for at least 8 to 10 feet.",
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-slate-800/60 border border-slate-700 rounded-xl p-4">
                    <p className="text-teal-300 font-bold text-sm mb-1">{item.title}</p>
                    <p className="text-slate-300 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <p className="text-slate-300 leading-relaxed">
                If the surrounding terrain slopes downward toward your home, a trench drain with a pedestrian/traffic-rated grate
                installed across the driveway width is the only reliable defense against flooded garages.
              </p>
            </section>

            {/* ── SECTION 7: Worked Example ── */}
            <section id="worked-example" className="scroll-mt-24 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 pl-4 border-l-4 border-teal-400">
                Worked Example: A 60-Foot Driveway
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Consider a standard residential driveway measuring <strong>60 feet long by 12 feet wide</strong>, running downhill
                from the garage threshold to the street gutter:
              </p>

              <div className="bg-slate-800 border border-teal-500/40 rounded-xl p-5 mb-6 space-y-3 font-mono text-sm">
                <div>
                  <p className="text-teal-300 font-bold">1. Longitudinal Slope at 2% Target:</p>
                  <p className="text-slate-300">60 ft × 0.02 = 1.20 ft = <strong className="text-white">14.4 inches</strong> total drop from garage to street</p>
                </div>
                <div>
                  <p className="text-teal-300 font-bold">2. Longitudinal Slope at 1% Minimum:</p>
                  <p className="text-slate-300">60 ft × 0.01 = 0.60 ft = <strong className="text-white">7.2 inches</strong> total drop from garage to street</p>
                </div>
                <div>
                  <p className="text-teal-300 font-bold">3. Crown Cross Slope at 2% (6-ft half-width):</p>
                  <p className="text-slate-300">6 ft × 0.02 = 0.12 ft = <strong className="text-white">1.44 inches</strong> drop from center ridge to each edge</p>
                </div>
                <div>
                  <p className="text-teal-300 font-bold">4. One-Way Cross Slope at 2% (12-ft full width):</p>
                  <p className="text-slate-300">12 ft × 0.02 = 0.24 ft = <strong className="text-white">2.88 inches</strong> total drop from high edge to low edge</p>
                </div>
              </div>

              <p className="text-slate-300 leading-relaxed">
                Compare these numbers to site reality before paving. If your garage slab sits only 6 inches above the street gutter,
                you cannot achieve a 2% slope across the entire 60 feet (which requires 14.4 inches). You must either accept a 1%
                slope (7.2 inches drop) or incorporate catch basins along the profile. Running this math before mobilization avoids
                costly on-site grading disputes.
              </p>
            </section>

            {/* ── SECTION 8: How to Build Slope ── */}
            <section id="how-to-build-slope" className="scroll-mt-24 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 pl-4 border-l-4 border-orange-400">
                How to Build the Right Slope Into the Job
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Asphalt is a flexible wearing surface — it mirrors the contours of whatever lies beneath it. If your crushed stone
                base has dips or incorrect pitch, the asphalt mat will too. Paving crews cannot fix underlying grading errors.
              </p>

              <div className="space-y-3 mb-6">
                {[
                  {
                    step: "1. Establish Benchmark Elevations",
                    detail: "Set laser level targets at the garage door threshold and the street gutter. Calculate all intermediate grades from these benchmarks.",
                  },
                  {
                    step: "2. Grade the Aggregate Base to Pitch",
                    detail: "Crown or tilt the crushed stone subbase to the final intended slope. Check cross-fall with a digital level every 10 to 15 feet.",
                  },
                  {
                    step: "3. Compact the Base to Maximum Density",
                    detail: "Moisturize and roll the aggregate base thoroughly. Uncompacted base material settles under vehicle weight, creating shallow dips called birdbaths.",
                  },
                  {
                    step: "4. Pave a Uniform Asphalt Thickness",
                    detail: "Do not use expensive hot mix as leveling filler. Lay a uniform 2 to 3 inch compacted mat over the pre-graded base.",
                  },
                  {
                    step: "5. Roll While Hot and Execute Water Tests",
                    detail: "Compact while the mix is between 240°F and 300°F. Before the crew leaves, perform a garden hose flood test to identify any standing water spots while the mix is still warm enough to adjust.",
                  },
                ].map((item) => (
                  <div key={item.step} className="bg-slate-800/60 border border-slate-700 rounded-lg p-4">
                    <p className="text-white font-semibold text-sm mb-1">{item.step}</p>
                    <p className="text-slate-400 text-xs leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>

              <p className="text-slate-300 leading-relaxed">
                Proper compaction is critical for water resistance. Consult our guide on{" "}
                <Link
                  href="/blog/how-to-compact-asphalt"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                >
                  how to compact asphalt to reach target density
                </Link>{" "}
                to learn why rolling technique directly impacts surface permeability.
              </p>
            </section>

            {/* ── SECTION 9: What Poor Slope Does to a Driveway ── */}
            <section id="poor-slope-consequences" className="scroll-mt-24 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 pl-4 border-l-4 border-teal-400">
                What Poor Slope Does to a Driveway
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Flat or backward-sloping driveways allow water to linger. Over seasons of freeze-thaw cycles, trapped water
                inevitably destroys the pavement:
              </p>

              <SectionImage
                src="/asphalt-driveway-standing-water-drainage-problem.webp"
                alt="Asphalt driveway standing water drainage problem — birdbath puddle on flat driveway causing cracking and base softening"
                caption="Standing water birdbath on a poorly graded driveway: pooled water softens the aggregate subbase, leading to alligator cracking and pothole formation."
              />

              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                {[
                  { issue: "Freeze-Thaw Pavement Damage", desc: "Water enters micro-cracks, freezes, expands by 9%, and ruptures the asphalt binder." },
                  { issue: "Subbase Softening & Sagging", desc: "Ponded water seeps through porous asphalt, saturating and softening the aggregate foundation." },
                  { issue: "Accelerated Binder Oxidation", desc: "Surfaces constantly submerged under puddles lose bitumen cohesion and ravel rapidly." },
                  { issue: "Winter Ice Hazard", desc: "Flat areas that hold puddles freeze into invisible black ice sheets, creating slip hazards." },
                  { issue: "Foundation & Basement Leaking", desc: "Water draining backward toward garage doors causes foundation dampness and drywall rot." },
                  { issue: "Severe Alligator Cracking", desc: "Weakened base support results in interconnected fatigue cracking under vehicle tires." },
                ].map((item) => (
                  <div key={item.issue} className="bg-slate-800/60 border border-slate-700 rounded-lg p-3">
                    <p className="text-orange-300 font-bold text-sm mb-1">{item.issue}</p>
                    <p className="text-slate-300 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <p className="text-slate-300 leading-relaxed">
                Learn how poor drainage accelerates structural failure in our guide on{" "}
                <Link
                  href="/blog/asphalt-cracking-types"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                >
                  identifying asphalt cracking types and causes
                </Link>
                .
              </p>
            </section>

            {/* ── SECTION 10: Fixing a Driveway With Poor Drainage ── */}
            <section id="fixing-poor-drainage" className="scroll-mt-24 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 pl-4 border-l-4 border-orange-400">
                Fixing a Driveway With Poor Drainage
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                The appropriate remedy depends on whether the drainage problem is localized or spans the entire driveway:
              </p>

              <InfoTable
                headers={["Drainage Problem", "Engineered Solution", "Practical Notes"]}
                rows={[
                  [
                    "Shallow puddle in one isolated spot",
                    "Skin patch or asphalt surface overlay",
                    "Clean and tack surface, then apply fine hot mix feathered to zero",
                  ],
                  [
                    "Entire driveway is flat (< 0.5% grade)",
                    "Milling, regrading base, and resurfacing",
                    "Costs more, but permanently corrects the elevation deficiency",
                  ],
                  [
                    "Water runs downhill toward garage",
                    "Channel / trench drain across threshold",
                    "Install heavy-duty drain connected to a gravity discharge pipe",
                  ],
                  [
                    "Hillside runoff washing across pavement",
                    "French drain or turf swale on uphill side",
                    "Intercepts subsurface water before it reaches driveway edge",
                  ],
                  [
                    "Driveway crosses ditch or swale",
                    "Culvert pipe installation",
                    "Size diameter (typically 12–18 in) to match storm volume",
                  ],
                  [
                    "No natural downhill surface outlet",
                    "Dry well or catch basin system",
                    "Collects water and allows gradual ground infiltration",
                  ],
                ]}
              />

              <p className="text-slate-300 leading-relaxed">
                For localized low spots and patching techniques, read our step-by-step{" "}
                <Link
                  href="/blog/repair-asphalt-driveway"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                >
                  asphalt driveway repair guide
                </Link>
                .
              </p>
            </section>

            {/* ── SECTION 11: Swales and Drains ── */}
            <section id="swales-and-drains" className="scroll-mt-24 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 pl-4 border-l-4 border-teal-400">
                Swales and Drains: Technical Details
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                When surface slope alone cannot convey storm runoff away from structures, engineered drainage elements must be
                integrated:
              </p>

              <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-5 mb-6 space-y-3">
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>
                    • <strong>Paved Asphalt Swales:</strong> If an asphalt swale is installed along the driveway edge, it must maintain
                    a minimum longitudinal slope of <strong>0.5%</strong> (preferably 1.0%) so water does not pool in the invert. The swale
                    lip should sit at least 1 inch below the adjacent driveway edge.
                  </li>
                  <li>
                    • <strong>Trench Drains:</strong> Set trench drain grates roughly 1/8 to 1/4 inch lower than the surrounding asphalt
                    so water drops freely into the channel. Ensure the grate carries a Class B (medium duty) or Class C (heavy duty) load rating
                    to withstand passenger vehicle and delivery truck axle weights.
                  </li>
                  <li>
                    • <strong>French Drains:</strong> Perforated PVC or corrugated pipe wrapped in non-woven geotextile fabric and surrounded
                    by washed 3/4-inch crushed stone should slope at least <strong>1% to 2%</strong> toward a daylight discharge point or dry well.
                  </li>
                </ul>
              </div>

              <p className="text-slate-300 leading-relaxed">
                When budgeting a new driveway or redesigning grading elevations, use our free{" "}
                <Link
                  href="/asphalt-driveway-cost-calculator"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors font-medium"
                >
                  asphalt driveway cost calculator
                </Link>{" "}
                to estimate material costs by square footage and layer thickness.
              </p>
            </section>

            {/* ── SECTION 12: FAQ ── */}
            <section id="faq" className="scroll-mt-24 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 pl-4 border-l-4 border-orange-400">
                Frequently Asked Questions
              </h2>
              <div className="space-y-5">
                {[
                  {
                    q: "What is the minimum slope for an asphalt driveway?",
                    a: "Most guides recommend 2% (about 1/4 inch of drop per foot). Many contractors accept 1% as a functional minimum, and some municipal codes allow 0.5%. Below 1%, asphalt is very likely to hold puddles and develop birdbaths.",
                  },
                  {
                    q: "How much slope is 1/4 inch per foot?",
                    a: "It is about 2.08% (commonly rounded to 2%). Over a 10-foot run, that equals a vertical drop of 2.4 inches; over a 50-foot driveway, it equals 12 inches of total fall.",
                  },
                  {
                    q: "What is the maximum slope for a residential driveway?",
                    a: "It varies by location, usually between 10% and 18%. Some municipalities allow up to 20%, while others cap residential driveways at 12% to 15%. Anything above 15% is considered steep and requires transition curves.",
                  },
                  {
                    q: "Should a driveway slope toward the house?",
                    a: "No. Driveways should always slope away from the house, garage door, and foundation. If site topography forces a reverse slope toward the garage, install a trench drain with a heavy grate across the driveway before the door.",
                  },
                  {
                    q: "Is a crown or a one-way slope better?",
                    a: "Either layout works. A crown (center ridge falling to both edges) suits wider driveways with grass swales on both sides. A one-way cross slope suits narrower driveways or properties that naturally drain in a single direction.",
                  },
                  {
                    q: "Can I fix a flat driveway without replacing it?",
                    a: "Sometimes. Shallow birdbaths and isolated low spots can be patched or overlaid with hot mix. If the entire driveway is flat, installing a trench drain, side swale, or milling and resurfacing may be necessary.",
                  },
                  {
                    q: "Does slope affect how much asphalt I need?",
                    a: "Slope itself has very little effect on surface area or material volume. Thickness does. Grade the stone base to the desired slope, lay a uniform thickness of asphalt everywhere, and calculate tonnage from area, thickness, and compacted density.",
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
                  The ideal asphalt driveway slope for drainage is 2% longitudinally and 2% in cross-fall, with 1% serving as the
                  absolute lower threshold. Always direct runoff away from buildings, engineer smooth apron transitions at the
                  street and garage threshold, and check local zoning regulations on maximum grade limits.
                </p>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Do the elevation math before mobilizing crews, build the slope directly into the crushed aggregate base, and
                  conduct a water hose flood test before the asphalt cools. A driveway that sheds water effectively will outlast a
                  flat, ponding driveway by decades.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  To estimate required asphalt quantities based on driveway square footage, lift thickness, and compacted density,
                  use our free{" "}
                  <Link
                    href="/"
                    className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors font-semibold"
                  >
                    Bitumen Calculator at BitumenCalcPro
                  </Link>
                  .
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

