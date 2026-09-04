import AuthorBio from "../../components/AuthorBio";
// app/blog/bitumen-driveway-cost-worldwide/page.tsx
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
  Globe,
  DollarSign,
} from "lucide-react";

// ── Metadata ──────────────────────────────────────────────
export const metadata: Metadata = {
  title:
    "Bitumen Driveway Cost: Worldwide 2026 Price Guide (UK, US, AU, NZ, Canada, Ireland)",
  description:
    "Real 2026 bitumen driveway costs by country: UK £45–£100/m², Ireland €40–€70/m², Australia $35–$100/m², US $75–$140/m², Canada $32–$88 CAD/m². Includes size tables, factors, and local rules.",
  keywords: [
    "bitumen driveway cost",
    "asphalt driveway cost",
    "tarmac driveway cost UK",
    "bitumen driveway price per m2",
    "driveway cost worldwide",
    "asphalt driveway cost Australia",
    "asphalt driveway cost USA",
    "tarmac driveway Ireland",
    "bitmac driveway cost",
    "driveway cost per square metre",
    "bitumen driveway cost 2026",
    "how much does a bitumen driveway cost",
  ],
  alternates: {
    canonical:
      "https://bitumencalcpro.com/blog/bitumen-driveway-cost-worldwide",
  },
  openGraph: {
    title:
      "Bitumen Driveway Cost: Worldwide 2026 Price Guide | BitumenCalcPro",
    description:
      "Real 2026 bitumen & asphalt driveway costs for UK, Ireland, Australia, New Zealand, US, and Canada — with size tables, cost factors, and local permit rules.",
    url: "https://bitumencalcpro.com/blog/bitumen-driveway-cost-worldwide",
    siteName: "BitumenCalcPro",
    type: "article",
    publishedTime: "2026-09-04T00:00:00.000Z",
    modifiedTime: "2026-09-04T00:00:00.000Z",
    authors: ["BitumenCalcPro"],
    images: [
      {
        url: "/bitumen-driveway-cost-worldwide-2026.webp",
        width: 1200,
        height: 630,
        alt: "Bitumen driveway cost worldwide 2026 price guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Bitumen Driveway Cost: Worldwide 2026 Price Guide | BitumenCalcPro",
    description:
      "Real 2026 bitumen & asphalt driveway costs for UK, Ireland, Australia, New Zealand, US, and Canada — with size tables, cost factors, and local permit rules.",
    images: ["/bitumen-driveway-cost-worldwide-2026.webp"],
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
    "Bitumen Driveway Cost: A Worldwide 2026 Price Guide",
  description:
    "Real 2026 bitumen and asphalt driveway costs by country — UK, Ireland, Australia, New Zealand, US, and Canada — with size tables, cost factors, maintenance costs, and local planning rules.",
  image:
    "https://bitumencalcpro.com/bitumen-driveway-cost-worldwide-2026.webp",
  datePublished: "2026-09-04T00:00:00.000Z",
  dateModified: "2026-09-04T00:00:00.000Z",
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
    "@id":
      "https://bitumencalcpro.com/blog/bitumen-driveway-cost-worldwide",
  },
  keywords:
    "bitumen driveway cost, asphalt driveway cost, tarmac driveway cost UK, driveway cost per m2, bitumen driveway price worldwide 2026",
  articleSection: "Asphalt & Paving Materials",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is bitumen the same as asphalt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Functionally, yes. Both use bitumen as the binder holding aggregate together. 'Bitumen' or 'tarmac' is the common term in the UK, Ireland, Australia, New Zealand, and South Africa. 'Asphalt' is the standard term in the US and Canada for the same material category.",
      },
    },
    {
      "@type": "Question",
      name: "Which country has the cheapest bitumen driveways?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Based on current per-m² rates, Ireland and the UK tend to sit at the lower end globally, largely due to a competitive contractor market and widespread use of standard bitmac rather than premium asphalt mixes.",
      },
    },
    {
      "@type": "Question",
      name: "How thick should a bitumen driveway be?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most residential driveways use a 25 to 40mm surface layer over a compacted sub-base of 100 to 150mm. Heavier use or soft ground often calls for a base course plus a separate surface course.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need planning permission for a bitumen driveway?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on your country and, often, your local council. The UK requires permission only for larger, non-permeable driveways draining to the street. Australia and New Zealand often require a permit for new crossovers to public roads. Check locally before booking work.",
      },
    },
    {
      "@type": "Question",
      name: "How long does bitumen driveway installation take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A standard single or double driveway usually takes 1 to 3 days in any market, covering excavation, sub-base laying, and the bitumen surface. Larger or more complex jobs with heavy groundwork can take a week or more.",
      },
    },
    {
      "@type": "Question",
      name: "Can I lay a bitumen driveway myself?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Small patch repairs are DIY-friendly with cold-lay products sold in most markets. A full driveway needs hot-laid material, a roller, and correct grading, which is why almost everyone hires a contractor for a complete installation.",
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
      name: "Bitumen Driveway Cost Worldwide",
      item: "https://bitumencalcpro.com/blog/bitumen-driveway-cost-worldwide",
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
                className="text-left px-3 py-2.5 sm:px-4 sm:py-3.5 text-white font-bold text-xs uppercase tracking-wider"
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
                  className="px-3 py-2 sm:px-4 sm:py-3 text-white/80 leading-relaxed text-xs sm:text-sm"
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
export default function BitumenDrivewayWorldwidePage() {
  return (
    <>
      <Script
        id="schema-article-driveway-cost"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="schema-faq-driveway-cost"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="schema-breadcrumb-driveway-cost"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ── HERO BAND ── */}
      <div className="relative pt-16 pb-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 to-orange-600/10 pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-teal-500/10 blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full bg-orange-500/10 blur-[80px] pointer-events-none" />

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
              Bitumen Driveway Cost Worldwide
            </span>
          </nav>

          {/* Category badge */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="inline-flex items-center gap-1.5 bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
              <Globe size={12} />
              Asphalt &amp; Paving Materials
            </span>
            <span className="inline-flex items-center gap-1.5 bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
              <DollarSign size={12} />
              2026 Pricing
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-6 max-w-4xl">
            Bitumen Driveway Cost: A Worldwide 2026 Price Guide
          </h1>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-4 text-white/50 text-sm mb-10">
            <span className="flex items-center gap-1.5">
              <Calendar size={13} />
              <time dateTime="2026-09-04">September 4, 2026</time>
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

      {/* ── ARTICLE BODY ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24">
        <div className="flex flex-col xl:flex-row gap-12 items-start">

          {/* ── MAIN CONTENT ── */}
          <article className="flex-1 min-w-0">

            {/* Image 1 — Featured hero / below H1 / before Quick Answer */}
            <SectionImage
              src="/bitumen-driveway-cost-worldwide-2026.webp"
              alt="Bitumen driveway cost worldwide 2026 — asphalt and tarmac driveway price guide for UK, Ireland, Australia, New Zealand, US, and Canada"
              caption="Bitumen driveway costs vary significantly by country, but the installation process and material are nearly identical worldwide"
              priority
            />

            {/* Quick Answer */}
            <div className="mb-10 bg-gradient-to-br from-teal-500/15 to-teal-600/10 border border-teal-400/25 rounded-2xl p-6 md:p-8">
              <h2 className="text-lg font-black text-teal-300 mb-3 flex items-center gap-2">
                <CheckCircle2 size={18} />
                Quick Answer
              </h2>
              <p className="text-white/85 leading-relaxed text-base">
                Bitumen driveway cost typically runs{" "}
                <strong className="text-white">
                  £45–£100 per m² in the UK, €40–€70 per m² in Ireland,
                  $35–$100 per m² in Australia, $90–$150 per m² in New Zealand,
                  $75–$140 per m² (roughly $7–$13 per sq ft) in the US, and
                  $32–$88 CAD per m² in Canada.
                </strong>{" "}
                Groundwork, drainage, and driveway size shift the total more
                than the material itself. Most installations last 15 to 25
                years.
              </p>
            </div>

            {/* Table of Contents */}
            <div className="mb-10 bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="text-white font-black text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
                <BookOpen size={14} className="text-teal-400" />
                What This Guide Covers
              </div>
              <nav className="space-y-1">
                {[
                  { id: "terminology", label: "Bitumen vs Asphalt: Same Material?" },
                  { id: "cost-by-country", label: "Cost by Country (Full Table)" },
                  { id: "uk-pricing", label: "United Kingdom Pricing" },
                  { id: "ireland-pricing", label: "Ireland Pricing" },
                  { id: "australia-pricing", label: "Australia Pricing" },
                  { id: "nz-pricing", label: "New Zealand Pricing" },
                  { id: "us-pricing", label: "United States Pricing" },
                  { id: "canada-pricing", label: "Canada Pricing" },
                  { id: "cost-drivers", label: "What Drives the Price" },
                  { id: "cost-by-size", label: "Cost by Driveway Size" },
                  { id: "material-comparison", label: "Bitumen vs Other Materials" },
                  { id: "lifespan", label: "How Long a Bitumen Driveway Lasts" },
                  { id: "planning-permission", label: "Planning Permission by Country" },
                  { id: "save-money", label: "How to Save Money" },
                  { id: "maintenance", label: "Maintenance Costs After Installation" },
                  { id: "price-gap", label: "Why the Price Gap Is So Wide" },
                  { id: "worked-example", label: "Worked Cost Example" },
                  { id: "conversions", label: "Unit Conversions to Watch" },
                  { id: "conclusion", label: "The Bottom Line" },
                  { id: "faq", label: "Frequently Asked Questions" },
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

            {/* ── SECTION: Intro ── */}
            <section className="mb-12">
              <p className="text-white/85 leading-relaxed mb-4 text-base">
                Ask for a "bitumen driveway" in Brisbane, Dublin, or Auckland, and everyone
                knows what you mean. Ask in Chicago or Toronto, and you'll likely get a blank
                look, then "you mean asphalt?" It's the same material almost everywhere:
                aggregate bound together with bitumen, a petroleum-based binder. The UK,
                Ireland, Australia, New Zealand, and South Africa mostly say "bitumen" or
                "tarmac." The US and Canada say "asphalt." A few UK contractors get technical
                and call it "bitmac," short for{" "}
                <Link
                  href="/blog/what-is-bitumen"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors font-medium"
                >
                  bituminous macadam
                </Link>
                , since actual tar hasn't been used in the mix for decades.
              </p>
              <p className="text-white/85 leading-relaxed text-base">
                This guide covers real 2026 pricing across the main English-speaking markets,
                in local currency, plus what pushes a quote up or down no matter where you
                live.
              </p>
            </section>

            {/* ── SECTION: Terminology ── */}
            <section id="terminology" className="mb-12 scroll-mt-24">
              <div className="bg-gradient-to-br from-blue-500/10 to-teal-500/5 border border-blue-400/20 rounded-2xl p-6 md:p-8">
                <h2 className="text-lg font-black text-blue-300 mb-3 flex items-center gap-2">
                  <BookOpen size={18} />
                  Bitumen vs Asphalt: Are They the Same Thing?
                </h2>
                <p className="text-white/80 leading-relaxed mb-4 text-base">
                  Functionally, yes. Both refer to aggregate bound with a petroleum-based
                  binder. The terminology differs by region, not by material composition.
                  "Bitumen" and "tarmac" dominate in the UK, Ireland, Australia, and New
                  Zealand. "Asphalt" and "blacktop" are the standard North American terms.
                </p>
                <p className="text-white/80 leading-relaxed text-base">
                  This distinction matters when comparing international quotes: a UK bitmac
                  driveway and a US asphalt driveway are priced differently — but they are
                  not different products. What varies is labour cost, local specification,
                  and market competition. For a deeper look at the material itself, see our
                  guide on{" "}
                  <Link
                    href="/blog/what-is-bitumen"
                    className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors font-medium"
                  >
                    what bitumen is and how it&apos;s made
                  </Link>
                  .
                </p>
              </div>

              {/* Image 2 — After terminology section */}
              <SectionImage
                src="/bitumen-vs-asphalt-hot-mix-comparison.webp"
                alt="Bitumen vs asphalt hot mix comparison — showing how bitumen binder and hot mix asphalt differ in composition and regional terminology"
                caption="Bitumen is the binder; hot mix asphalt (HMA) is the finished paving material. The terminology differs by country, but the product is essentially the same"
              />
            </section>

            {/* ── SECTION: Cost by Country Table ── */}
            <section id="cost-by-country" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Bitumen Driveway Cost by Country
              </h2>
              <p className="text-white/80 leading-relaxed mb-6 text-base">
                Prices below cover a professionally installed driveway, including groundwork
                and the bitumen surface. Currency and units follow local convention, since
                that&apos;s how you&apos;ll see quotes in each market.
              </p>

              {/* Image 3 — Before country pricing section */}
              <SectionImage
                src="/bitumen-driveway-cost-by-country-2026.webp"
                alt="Bitumen and asphalt driveway cost by country 2026 — price comparison chart for UK, Ireland, Australia, New Zealand, US, and Canada"
                caption="Driveway installation costs in 2026 across the main English-speaking markets — labour, mix specification, and market competition drive the differences"
              />

              <InfoTable
                headers={[
                  "Country",
                  "Typical cost per m²",
                  "Typical single-car driveway (20–25 m²)",
                ]}
                rows={[
                  ["United Kingdom", "£45 – £100", "£1,000 – £2,200"],
                  ["Ireland", "€40 – €70", "€1,000 – €1,750"],
                  ["Australia", "$35 – $100 (premium up to $175)", "$875 – $2,500"],
                  ["New Zealand", "$90 – $150", "$2,250 – $3,750"],
                  ["United States", "$75 – $140 ($7–$13 per sq ft)", "$1,900 – $3,500"],
                  ["Canada", "$32 – $88 CAD", "$800 – $2,200 CAD"],
                ]}
              />

              <p className="text-white/80 leading-relaxed text-base mt-4">
                A few things stand out once you line these up. Ireland and the UK sit at the
                lower end globally, largely because bitmac dominates the market there and
                competition among installers is high. New Zealand and the US run higher,
                partly due to labour costs and partly because "asphalt" quotes in those
                markets often assume a thicker, denser mix than standard UK bitmac. For
                context on how asphalt thickness affects both cost and performance, our{" "}
                <Link
                  href="/blog/asphalt-thickness"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors font-medium"
                >
                  complete asphalt thickness guide
                </Link>{" "}
                covers recommended depths by application type.
              </p>
            </section>

            {/* ── SECTION: UK ── */}
            <section id="uk-pricing" className="mb-10 scroll-mt-24">
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-4 border-l-4 border-orange-400 pl-4">
                United Kingdom: Tarmac Driveway Costs
              </h2>
              <p className="text-white/80 leading-relaxed mb-4 text-base">
                UK bitumen (tarmac) driveways cost <strong className="text-white">£45 to £100 per m²</strong>,
                with £45–£80 typical for a standard job and higher figures reflecting London
                and South East labour rates or premium finishes. A 40m² double driveway
                usually lands between <strong className="text-white">£2,000 and £4,000</strong>.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                <p className="text-white/85 text-sm leading-relaxed">
                  <strong className="text-teal-300">Key point:</strong>{" "}
                  Bitmac is the most competitive driveway surface in the UK market. London
                  and South East quotes sit 20–30% above the national average due to local
                  labour costs. A soakaway or permeable border is required on non-permeable
                  surfaces over 5m² draining to the road — budget £500–£1,000 if your site
                  needs one.
                </p>
              </div>
            </section>

            {/* ── SECTION: Ireland ── */}
            <section id="ireland-pricing" className="mb-10 scroll-mt-24">
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-4 border-l-4 border-orange-400 pl-4">
                Ireland: Tarmac Driveway Pricing
              </h2>
              <p className="text-white/80 leading-relaxed mb-4 text-base">
                Irish pricing runs <strong className="text-white">€40 to €70 per m²</strong>,
                making tarmac the cheapest full driveway surface available, ahead of block
                paving (€60–€120) and paving flags (€50–€90). Tarmac is contractor-only in
                Ireland; there&apos;s no real DIY supply option, so labour is baked into
                every quote.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                <p className="text-white/85 text-sm leading-relaxed">
                  <strong className="text-teal-300">Key point:</strong>{" "}
                  Ireland has one of the most competitive bitmac markets in the world
                  relative to GDP. The low per-m² cost makes it significantly cheaper than
                  equivalent block paving or resin-bound alternatives.
                </p>
              </div>
            </section>

            {/* ── SECTION: Australia ── */}
            <section id="australia-pricing" className="mb-10 scroll-mt-24">
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-4 border-l-4 border-orange-400 pl-4">
                Australia: Asphalt Driveway Costs
              </h2>
              <p className="text-white/80 leading-relaxed mb-4 text-base">
                Australian asphalt driveways cost{" "}
                <strong className="text-white">$35 to $45 per m² for a standard job</strong>,
                climbing to $100–$175 per m² for premium mixes or decorative finishes. Costs
                vary by state: Victoria and Queensland run slightly higher than Western
                Australia, largely due to labour and transport differences.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                <p className="text-white/85 text-sm leading-relaxed">
                  <strong className="text-teal-300">Key point:</strong>{" "}
                  Hot climate zones in Queensland and Western Australia can soften standard
                  asphalt under heavy vehicles and prolonged sun exposure. Contractors in
                  those regions often recommend a slightly harder-grade mix or a sealing
                  schedule every 3–4 years rather than 5.
                </p>
              </div>
            </section>

            {/* ── SECTION: NZ ── */}
            <section id="nz-pricing" className="mb-10 scroll-mt-24">
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-4 border-l-4 border-orange-400 pl-4">
                New Zealand: Asphalt Driveway Prices
              </h2>
              <p className="text-white/80 leading-relaxed mb-4 text-base">
                NZ pricing sits a little below plain concrete, which runs $100 to $150 per
                m². Asphalt driveways commonly land in the{" "}
                <strong className="text-white">$90 to $150 per m² range</strong> once site
                preparation, a compacted base course, and any drainage work are included.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                <p className="text-white/85 text-sm leading-relaxed">
                  <strong className="text-teal-300">Key point:</strong>{" "}
                  Many NZ councils require notification or a building consent for a new
                  vehicle crossing onto a public road, separate from the driveway surface
                  itself. Factor this into your timeline and budget before booking a
                  contractor.
                </p>
              </div>
            </section>

            {/* ── SECTION: US ── */}
            <section id="us-pricing" className="mb-10 scroll-mt-24">
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-4 border-l-4 border-orange-400 pl-4">
                United States: Asphalt Driveway Cost
              </h2>
              <p className="text-white/80 leading-relaxed mb-4 text-base">
                US asphalt driveways cost{" "}
                <strong className="text-white">$7 to $13 per sq ft for a new installation</strong>,
                which converts to roughly $75 to $140 per m². Replacement jobs that include
                tearing out an old surface run higher, at $8 to $15 per sq ft, while a simple
                overlay on a sound base costs $3 to $7 per sq ft.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                <p className="text-white/85 text-sm leading-relaxed">
                  <strong className="text-teal-300">Key point:</strong>{" "}
                  US contractors typically quote in square feet, not square metres. Always
                  convert before comparing to international rates. Site prep — including
                  demolition of the existing surface — is often quoted as a separate line
                  item and can add 15–25% to the headline driveway cost. Our{" "}
                  <Link
                    href="/blog/asphalt-estimation-mistakes"
                    className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors font-medium"
                  >
                    asphalt estimation guide
                  </Link>{" "}
                  covers the unit conversion errors that trip up most homeowners when
                  comparing quotes.
                </p>
              </div>
            </section>

            {/* ── SECTION: Canada ── */}
            <section id="canada-pricing" className="mb-12 scroll-mt-24">
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-4 border-l-4 border-orange-400 pl-4">
                Canada: Asphalt Driveway Cost
              </h2>
              <p className="text-white/80 leading-relaxed mb-4 text-base">
                Canadian hot-mix asphalt costs{" "}
                <strong className="text-white">$3.00 to $8.17 per sq ft</strong>, or about
                $32 to $88 CAD per m². A standard 2-car driveway (around 56 m²) typically
                totals <strong className="text-white">$1,800 to $4,900 CAD</strong> before
                extras like edging or drainage.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                <p className="text-white/85 text-sm leading-relaxed">
                  <strong className="text-teal-300">Key point:</strong>{" "}
                  Canadian winters are the harshest of any market in this guide. Freeze-thaw
                  cycles accelerate cracking on thin or poorly sealed driveways. Sealing
                  every 2–3 years rather than 5 is strongly recommended in provinces with
                  severe winters.
                </p>
              </div>
            </section>

            {/* ── SECTION: What Drives the Price ── */}
            <section id="cost-drivers" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                What Drives the Price Everywhere
              </h2>
              <p className="text-white/80 leading-relaxed mb-6 text-base">
                Regardless of country, the same handful of factors explain most of the gap
                between a cheap quote and an expensive one. Understanding these helps you
                evaluate contractor quotes — and spot the ones cutting corners on things that
                actually matter.
              </p>

              {/* Image 4 — Before cost drivers */}
              <SectionImage
                src="/factors-affecting-bitumen-driveway-cost.webp"
                alt="Factors affecting bitumen driveway cost — driveway size, ground condition, sub-base depth, drainage, access, finish, and region all influence the final price"
                caption="These eight factors account for most of the variation between the cheapest and most expensive quotes for an identical job in the same city"
              />

              <div className="space-y-4">
                {[
                  {
                    title: "Driveway size",
                    body: "Smaller jobs cost more per m². A contractor's minimum charge for delivery, plant hire, and a crew gets spread across less area, so a small single-car driveway can cost 30% to 50% more per square metre than a large one.",
                  },
                  {
                    title: "Ground condition",
                    body: "Old tarmac, cracked concrete, or soft soil needs digging out before anything new goes down, typically to 150mm. This excavation and disposal step often adds 25% to 35% of the total project cost.",
                  },
                  {
                    title: "Sub-base depth",
                    body: "A compacted layer of crushed stone under the bitumen surface is what actually carries the load. Skimping here is the single most common reason driveways fail early — usually within 5 years instead of lasting the full 15 to 25.",
                  },
                  {
                    title: "Drainage",
                    body: "Many countries now regulate where rainwater from a driveway can go. In England, non-permeable driveways over 5m² that drain to the street need planning permission unless you add a soakaway or permeable surface. Budget £500–£1,000, or the local equivalent, if your site needs it.",
                  },
                  {
                    title: "Bitumen thickness",
                    body: "A 25 to 40mm surface layer suits normal domestic traffic. Heavier vehicles or soft ground often call for a base course plus a separate surface course, which adds material and labour cost but extends the driveway's working life.",
                  },
                  {
                    title: "Access",
                    body: "Narrow side passages or driveways that machinery can't reach easily mean more hand labour, which can add 10% to 20% to a quote in any country.",
                  },
                  {
                    title: "Finish and colour",
                    body: "Standard black is cheapest everywhere. Coloured or decorative mixes — including red-chip finishes popular in the UK and premium coloured asphalt in Australia — typically cost 10% to 50% more.",
                  },
                  {
                    title: "Region within the country",
                    body: "Labour and transport costs vary locally just as much as they do between countries. Expect capital cities and major metro areas (London, Sydney, Auckland, Toronto) to sit at the higher end of the national range.",
                  },
                ].map(({ title, body }) => (
                  <div
                    key={title}
                    className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/[0.07] transition-colors"
                  >
                    <span className="text-teal-400 font-black text-base shrink-0 mt-0.5">→</span>
                    <div>
                      <p className="text-white font-bold text-sm mb-1">{title}</p>
                      <p className="text-white/75 text-sm leading-relaxed">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── SECTION: Cost by Size ── */}
            <section id="cost-by-size" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Bitumen Driveway Cost by Size
              </h2>
              <p className="text-white/80 leading-relaxed mb-6 text-base">
                These figures use the UK range as the reference point since bitmac terminology
                and UK pricing data are the most detailed publicly available, but the
                proportional relationship between sizes holds in every market.
              </p>

              {/* Image 5 — Before driveway size section */}
              <SectionImage
                src="/bitumen-driveway-cost-by-size.webp"
                alt="Bitumen driveway cost by size comparison — single car, double car, large, and extra large driveway pricing guide"
                caption="Smaller driveways cost proportionally more per square metre because fixed costs (delivery, plant hire, minimum crew) are spread over a smaller area"
              />

              <InfoTable
                headers={["Driveway size", "UK cost (illustrative)"]}
                rows={[
                  ["Single car (20m²)", "£1,000 – £2,000"],
                  ["Double, 2 cars (40m²)", "£2,000 – £4,000"],
                  ["Large (60m²)", "£2,700 – £6,000"],
                  ["Extra large (100m²+)", "£4,500 – £10,000+"],
                ]}
              />

              <p className="text-white/80 leading-relaxed text-base mt-4">
                To estimate your own market, take your local per-m² rate from the country
                table above and apply the same size-based logic: expect the rate to sit 20%
                to 30% higher than average for anything under 25m², and 10% to 20% lower
                than average for anything over 75m². For precise quantity calculations, our{" "}
                <Link
                  href="/"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors font-medium"
                >
                  bitumen calculator
                </Link>{" "}
                can help you work out material volumes before you approach a contractor.
              </p>
            </section>

            {/* ── SECTION: Material Comparison ── */}
            <section id="material-comparison" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Bitumen vs Other Driveway Materials
              </h2>
              <p className="text-white/80 leading-relaxed mb-6 text-base">
                The relative cost order between materials stays consistent worldwide, even
                though the actual numbers shift by country. Bitumen&apos;s main appeal
                everywhere is the same: a durable, tidy surface for meaningfully less than
                block paving, resin bound, or premium concrete, with a shorter install time
                too.
              </p>

              <InfoTable
                headers={["Material", "Relative cost", "Typical lifespan", "Worth knowing"]}
                rows={[
                  ["Bitumen / asphalt", "Lowest of the hard surfaces", "15 – 25 years", "Quick to install, softens under fuel or oil spills"],
                  ["Gravel", "Lower, sometimes cheaper than bitumen", "10 – 20 years", "Needs regular topping up and raking"],
                  ["Tar and chip / chip seal", "Low", "3 – 5 years", "Cheapest upfront, shortest lifespan"],
                  ["Concrete", "Mid to high", "20 – 30 years", "Cracks are harder to disguise than on bitumen"],
                  ["Resin bound", "High", "15 – 25 years", "Permeable, needs a skilled installer"],
                  ["Block paving", "Highest", "20 – 30 years", "Most design flexibility, weeds grow in joints"],
                ]}
              />

              <p className="text-white/80 leading-relaxed text-base mt-4">
                Understanding{" "}
                <Link
                  href="/blog/bitumen-grades-explained"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors font-medium"
                >
                  which bitumen grade suits your climate
                </Link>{" "}
                can also influence how well your driveway performs long-term — especially in
                markets with extreme heat or cold.
              </p>
            </section>

            {/* ── SECTION: Lifespan ── */}
            <section id="lifespan" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                How Long a Bitumen Driveway Lasts
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                A properly installed bitumen or asphalt driveway lasts{" "}
                <strong className="text-white">15 to 25 years</strong> in most climates.
                Some go longer with regular sealing; several installers report driveways
                still performing well past 30 years.
              </p>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Climate plays a real role here. Bitumen handles freeze-thaw cycles reasonably
                well, which is part of why it&apos;s popular in the UK and Ireland, but
                extreme heat in parts of Australia and the southern US can soften the surface
                and make it more prone to rutting under heavy or stationary vehicles. Regular
                sealing helps offset this in hot climates.
              </p>
              <p className="text-white/80 leading-relaxed text-base">
                Installation quality still matters more than climate. A shallow or poorly
                compacted sub-base is the most common reason a driveway fails early, wherever
                it&apos;s laid. This is why asking contractors specifically about sub-base
                depth is one of the most useful questions you can ask when comparing quotes —
                our{" "}
                <Link
                  href="/blog/asphalt-thickness"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors font-medium"
                >
                  asphalt thickness guide
                </Link>{" "}
                explains the recommended depths for different applications.
              </p>
            </section>

            {/* ── SECTION: Planning Permission ── */}
            <section id="planning-permission" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Planning Permission and Local Rules by Country
              </h2>
              <p className="text-white/80 leading-relaxed mb-6 text-base">
                Requirements vary enough by country that it&apos;s worth checking before you
                commit to a quote.
              </p>

              <div className="space-y-3">
                {[
                  {
                    country: "🇬🇧 United Kingdom",
                    rule: "No permission needed for most driveways. Non-permeable surfaces over 5m² that drain to a public road do need permission, unless you fit a soakaway or permeable surface instead.",
                  },
                  {
                    country: "🇮🇪 Ireland",
                    rule: "Generally exempt for standard residential driveways, though local authority rules on drainage and access to public roads still apply.",
                  },
                  {
                    country: "🇦🇺 Australia",
                    rule: "Council requirements vary by state and sometimes by local government area. Larger jobs — especially those affecting stormwater flow or a new crossover to the street — often need a permit.",
                  },
                  {
                    country: "🇳🇿 New Zealand",
                    rule: "Many councils require a building consent or at least notification for a new vehicle crossing onto a public road, separate from the driveway surface itself.",
                  },
                  {
                    country: "🇺🇸 United States",
                    rule: "Most residential driveway resurfacing doesn't need a permit, but a new crossing that meets a public street, or work in a utility easement, often does. City and county rules differ enough that a quick call to your local building department is worth the 10 minutes.",
                  },
                  {
                    country: "🇨🇦 Canada",
                    rule: "Similar to the US — resurfacing is usually permit-free, but new crossovers to public roads require approval. Municipality rules vary significantly between provinces.",
                  },
                ].map(({ country, rule }) => (
                  <div
                    key={country}
                    className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/[0.07] transition-colors"
                  >
                    <p className="text-white font-bold text-sm mb-1.5">{country}</p>
                    <p className="text-white/75 text-sm leading-relaxed">{rule}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── SECTION: Save Money ── */}
            <section id="save-money" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                How to Save Money Without Cutting the Corners That Matter
              </h2>

              <div className="space-y-3 mb-6">
                {[
                  {
                    num: "1",
                    text: "Get 3 quotes from local contractors. Prices for an identical job can vary by hundreds of dollars, pounds, or euros within the same city.",
                  },
                  {
                    num: "2",
                    text: "Book outside peak season. Spring and early summer are the busiest months in most markets, and contractors sometimes flex on price when they have gaps in the schedule.",
                  },
                  {
                    num: "3",
                    text: "Skip decorative edging or coloured mixes if budget is tight. Standard black bitumen with basic edging does the job and costs noticeably less.",
                  },
                  {
                    num: "4",
                    text: "Combine your job with a neighbour's if timing allows. Some contractors reduce the per-unit rate for back-to-back jobs on the same street.",
                  },
                  {
                    num: "5",
                    text: "Don't cut the sub-base depth or skip required drainage to save money upfront. Both show up as cracks, dips, and pooling water within a few years — and fixing the underlying problem later costs more than doing it right the first time.",
                  },
                ].map(({ num, text }) => (
                  <div
                    key={num}
                    className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/[0.07] transition-colors"
                  >
                    <span className="text-teal-400 font-black text-base shrink-0 w-7">{num}.</span>
                    <p className="text-white/80 text-sm leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── SECTION: Maintenance ── */}
            <section id="maintenance" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Maintenance Costs After Installation
              </h2>

              {/* Image 6 — Before maintenance section */}
              <SectionImage
                src="/bitumen-driveway-installation-maintenance-lifespan.webp"
                alt="Bitumen driveway installation, maintenance, and lifespan — showing sealing, crack repair, and resurfacing stages over the 15–25 year driveway lifecycle"
                caption="A well-maintained bitumen driveway can exceed 25 years of service life — with sealing, early crack repair, and prompt spill cleanup doing most of the work"
              />

              <div className="space-y-4">
                {[
                  {
                    title: "Sealing",
                    body: "Recommended every 3 to 5 years. Costs roughly 5% to 10% of the original installation cost per treatment and protects against UV fading, fuel spills, and oil damage.",
                  },
                  {
                    title: "Crack repair",
                    body: "Small cracks are cheap to fix if caught early — usually a small fraction of a full resurfacing job. Left alone, water gets in, freezes or expands, and turns a hairline crack into a pothole.",
                  },
                  {
                    title: "Resurfacing (overlay)",
                    body: "If the sub-base is still sound but the surface has worn thin, an overlay costs roughly a third to half of full replacement.",
                  },
                  {
                    title: "Routine cleaning",
                    body: "A yearly pressure wash keeps moss, staining, and organic growth off the surface and costs little beyond the price of hiring or owning a pressure washer.",
                  },
                  {
                    title: "Fuel and oil spills",
                    body: "Petrol, diesel, and oil soften bitumen over time in every climate. Wipe up spills quickly rather than letting them sit on the surface.",
                  },
                ].map(({ title, body }) => (
                  <div
                    key={title}
                    className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/[0.07] transition-colors"
                  >
                    <span className="text-orange-400 font-black text-base shrink-0 mt-0.5">▸</span>
                    <div>
                      <p className="text-white font-bold text-sm mb-1">{title}</p>
                      <p className="text-white/75 text-sm leading-relaxed">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── SECTION: Price Gap Explained ── */}
            <section id="price-gap" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Why the Price Gap Between Countries Is So Wide
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                A £50 per m² UK driveway and a $140 per m² US driveway aren&apos;t as
                different as the raw numbers suggest, but three real factors do separate
                markets.
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: "Labour cost",
                    body: "Paving crews in the US and Canada generally earn more per hour than equivalent crews in the UK or Ireland, and labour typically makes up 30% to 45% of a driveway's total cost. That gap alone explains much of the difference between UK and North American pricing.",
                  },
                  {
                    title: "Mix specification",
                    body: "What gets called 'asphalt' in the US often uses a denser, more refined mix than standard UK bitmac, closer to what UK contractors would price as a premium surface course. You're not always comparing the same product when you compare quotes across borders.",
                  },
                  {
                    title: "Market maturity and competition",
                    body: "Bitmac driveways are extremely common in the UK and Ireland, with a large number of specialist contractors competing for the same jobs. In markets where concrete or pavers dominate — such as much of the US and New Zealand — fewer contractors specialise in bitumen work, which keeps quotes higher.",
                  },
                ].map(({ title, body }) => (
                  <div
                    key={title}
                    className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/[0.07] transition-colors"
                  >
                    <p className="text-teal-300 font-bold text-sm mb-2">{title}</p>
                    <p className="text-white/75 text-sm leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>

              <p className="text-white/80 leading-relaxed text-base mt-6">
                None of this means one country is getting a better deal. A US quote at $100
                per m² and a UK quote at £70 per m² can both represent fair, competitive
                pricing for their respective markets. For more context on how bitumen
                properties affect specification choices, the{" "}
                <a
                  href="https://www.asphaltinstitute.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                >
                  Asphalt Institute
                  <ExternalLink size={12} className="inline ml-0.5 mb-0.5" />
                </a>{" "}
                publishes detailed guidance on mix design standards used across North American
                markets.
              </p>
            </section>

            {/* ── SECTION: Worked Example ── */}
            <section id="worked-example" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                A Worked Cost Example: 45m² Double Driveway
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Take a 45m² double driveway — a common size for a two-car UK household or a
                modest US suburban home.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-gradient-to-br from-teal-500/15 to-teal-600/10 border border-teal-400/25 rounded-2xl p-5">
                  <p className="text-teal-300 font-black text-sm mb-3 uppercase tracking-wide">🇬🇧 UK Example</p>
                  <p className="text-white/80 text-sm leading-relaxed mb-2">
                    At <strong className="text-white">£55 per m² average</strong>, that&apos;s
                    roughly <strong className="text-white">£2,475 installed</strong>, assuming a
                    straightforward site with no major excavation.
                  </p>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Add a soakaway for drainage compliance and basic edging, and a realistic
                    total sits closer to <strong className="text-white">£3,000 to £3,300</strong>.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-orange-500/15 to-orange-600/10 border border-orange-400/25 rounded-2xl p-5">
                  <p className="text-orange-300 font-black text-sm mb-3 uppercase tracking-wide">🇺🇸 US Example</p>
                  <p className="text-white/80 text-sm leading-relaxed mb-2">
                    At <strong className="text-white">$100 per m² average</strong> ($9.30 per sq ft,
                    mid-range), the same size driveway runs about{" "}
                    <strong className="text-white">$4,500</strong>.
                  </p>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Site prep in North America is often quoted separately and can add another{" "}
                    <strong className="text-white">15% to 25%</strong> if the existing surface
                    needs full removal.
                  </p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                <p className="text-white/85 text-sm leading-relaxed">
                  <strong className="text-teal-300">The lesson:</strong>{" "}
                  A quote that looks expensive next to an online average from a different
                  country usually isn&apos;t overpriced. It&apos;s reflecting a different labour
                  market and, often, a different specification. Always compare like-for-like
                  and ask each contractor what sub-base depth they&apos;re quoting for.
                </p>
              </div>
            </section>

            {/* ── SECTION: Unit Conversions ── */}
            <section id="conversions" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Currency and Unit Conversions to Watch
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Quotes get confusing fast when contractors mix units. A few conversions worth
                keeping handy. Avoiding these conversion pitfalls is one of the key points
                covered in our{" "}
                <Link
                  href="/blog/asphalt-estimation-mistakes"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors font-medium"
                >
                  guide to common asphalt estimation mistakes
                </Link>
                .
              </p>

              <InfoTable
                headers={["Conversion", "Value"]}
                rows={[
                  ["1 square metre (m²)", "≈ 10.76 square feet"],
                  ["$10 per sq ft", "≈ $108 per m²"],
                  ["£1 per m²", "Very different from $1 per sq ft — never compare directly"],
                  ["VAT / tax", "Usually included in UK & Irish quotes; sometimes separate in US & Canada"],
                ]}
              />

              <p className="text-white/80 leading-relaxed text-base mt-4">
                When you&apos;re comparing quotes from contractors in different regions, or
                checking an online estimate against a local quote, convert everything to the
                same unit and currency before judging whether a price is fair. The{" "}
                <a
                  href="https://www.checkatrade.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                >
                  Checkatrade cost guides
                  <ExternalLink size={12} className="inline ml-0.5 mb-0.5" />
                </a>{" "}
                offer regularly updated UK-specific benchmarks for tarmac and driveway work
                that can serve as a useful cross-reference for local quotes.
              </p>
            </section>

            {/* ── SECTION: Conclusion ── */}
            <section id="conclusion" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                The Bottom Line
              </h2>
              <div className="bg-gradient-to-br from-teal-500/10 via-blue-600/5 to-orange-600/10 border border-white/15 rounded-2xl p-6 md:p-8">
                <p className="text-white/85 leading-relaxed mb-4 text-base">
                  Bitumen driveway cost lands somewhere between £45 and £100 per m² in the UK
                  and Ireland, and the local equivalent of $75 to $150 per m² across
                  Australia, New Zealand, the US, and Canada. The material and the underlying
                  installation process are nearly identical worldwide; what changes is labour
                  cost, local drainage rules, and how much groundwork your site needs.
                </p>
                <p className="text-white/85 leading-relaxed text-base">
                  Get 3 local quotes, ask each contractor how deep the sub-base will be and
                  where the water goes, and you&apos;ll be able to compare them on the details
                  that actually determine how long your driveway lasts. Explore more guides in
                  our{" "}
                  <Link
                    href="/blog"
                    className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors font-medium"
                  >
                    bitumen and asphalt knowledge hub
                  </Link>
                  , or use our free{" "}
                  <Link
                    href="/"
                    className="text-orange-400 hover:text-orange-300 underline underline-offset-2 transition-colors font-medium"
                  >
                    bitumen quantity calculator
                  </Link>{" "}
                  to estimate material needs before you approach contractors.
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
                    q: "Is bitumen the same as asphalt?",
                    a: "Functionally, yes. Both use bitumen as the binder holding aggregate together. 'Bitumen' or 'tarmac' is the common term in the UK, Ireland, Australia, New Zealand, and South Africa. 'Asphalt' is the standard term in the US and Canada for the same material category.",
                  },
                  {
                    q: "Which country has the cheapest bitumen driveways?",
                    a: "Based on current per-m² rates, Ireland and the UK tend to sit at the lower end globally, largely due to a competitive contractor market and widespread use of standard bitmac rather than premium asphalt mixes.",
                  },
                  {
                    q: "How thick should a bitumen driveway be?",
                    a: "Most residential driveways use a 25 to 40mm surface layer over a compacted sub-base of 100 to 150mm. Heavier use or soft ground often calls for a base course plus a separate surface course.",
                  },
                  {
                    q: "Do I need planning permission for a bitumen driveway?",
                    a: "It depends on your country and, often, your local council. The UK requires permission only for larger, non-permeable driveways draining to the street. Australia and New Zealand often require a permit for new crossovers to public roads. Check locally before booking work.",
                  },
                  {
                    q: "How long does bitumen driveway installation take?",
                    a: "A standard single or double driveway usually takes 1 to 3 days in any market, covering excavation, sub-base laying, and the bitumen surface. Larger or more complex jobs with heavy groundwork can take a week or more.",
                  },
                  {
                    q: "Can I lay a bitumen driveway myself?",
                    a: "Small patch repairs are DIY-friendly with cold-lay products sold in most markets. A full driveway needs hot-laid material, a roller, and correct grading, which is why almost everyone hires a contractor for a complete installation.",
                  },
                ].map(({ q, a }, i) => (
                  <div
                    key={i}
                    className="bg-white/5 border border-white/10 rounded-2xl p-5 md:p-6 transition-colors hover:bg-white/[0.08]"
                  >
                    <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                      {q}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Related Articles ── */}
            <section className="mb-12" aria-label="Related articles">
              <h2 className="text-2xl font-black text-white mb-6 border-l-4 border-orange-400 pl-4">
                Related Guides
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    href: "/blog/asphalt-thickness",
                    title: "Asphalt Thickness Guide",
                    desc: "Exact depth specs for driveways, roads & parking lots — with base requirements.",
                    label: "Asphalt & Paving",
                  },
                  {
                    href: "/blog/asphalt-estimation-mistakes",
                    title: "Common Asphalt Estimation Mistakes",
                    desc: "Avoid density, waste & compaction errors that inflate paving project costs.",
                    label: "Cost & Estimating",
                  },
                  {
                    href: "/blog/what-is-bitumen",
                    title: "What Is Bitumen?",
                    desc: "Properties, uses, grades, and how bitumen differs from asphalt and tar.",
                    label: "Bitumen Fundamentals",
                  },
                  {
                    href: "/blog/bitumen-grades-explained",
                    title: "Bitumen Grades Explained",
                    desc: "Penetration, VG & PG grades — and how to choose the right one for your climate.",
                    label: "Grades & Testing",
                  },
                ].map(({ href, title, desc, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="group bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-teal-400/40 hover:bg-white/[0.08] transition-all"
                  >
                    <span className="text-xs text-teal-400 font-bold uppercase tracking-wide mb-2 block">
                      {label}
                    </span>
                    <p className="text-white font-bold text-sm mb-1.5 group-hover:text-teal-300 transition-colors">
                      {title}
                    </p>
                    <p className="text-white/55 text-xs leading-relaxed">{desc}</p>
                  </Link>
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
                className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 text-white px-6 py-3 rounded-full font-bold text-sm transition-all shadow-[0_0_20px_rgba(20,184,166,0.35)] hover:shadow-[0_0_30px_rgba(20,184,166,0.55)]"
              >
                Open Bitumen Calculator
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
