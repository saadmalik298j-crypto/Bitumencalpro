import AuthorBio from "../../components/AuthorBio";
// app/blog/asphalt-driveway-sealcoating/page.tsx
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
  title: "Asphalt Driveway Sealcoating: Cost, Frequency & DIY Guide",
  description:
    "Everything about asphalt driveway sealcoating — how much it costs, how often to seal, whether it's worth it, and step-by-step DIY instructions.",
  keywords: [
    "asphalt driveway sealcoating",
    "driveway sealcoating cost",
    "how often to seal asphalt driveway",
    "sealcoat driveway yourself",
    "asphalt sealer",
    "driveway sealing frequency",
    "parking lot sealcoating",
    "DIY asphalt sealcoating",
  ],
  alternates: { canonical: "https://bitumencalcpro.com/blog/asphalt-driveway-sealcoating" },
  openGraph: {
    title: "Asphalt Driveway Sealcoating: Cost, Frequency & DIY Guide | BitumenCalcPro",
    description:
      "Professional sealcoating costs $0.15-$0.65/sq ft. DIY runs $0.08-$0.35/sq ft. Seal every 2-3 years starting 3-6 months after paving. Full cost table, DIY steps, and parking lot guide.",
    url: "https://bitumencalcpro.com/blog/asphalt-driveway-sealcoating",
    siteName: "BitumenCalcPro",
    type: "article",
    publishedTime: "2026-10-01T00:00:00.000Z",
    authors: ["BitumenCalcPro"],
    images: [
      {
        url: "/asphalt-driveway-sealcoating-guide.webp",
        width: 1200,
        height: 675,
        alt: "Asphalt driveway sealcoating — protective coating application on residential driveway surface",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Asphalt Driveway Sealcoating: Cost, Frequency & DIY Guide",
    description:
      "How much sealcoating costs, how often to do it, and the exact steps to seal your own asphalt driveway.",
    images: ["/asphalt-driveway-sealcoating-guide.webp"],
  },
  robots: {
    "max-image-preview": "large",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Asphalt Driveway Sealcoating: Cost, Frequency, and How to Do It Yourself",
  description:
    "Everything about asphalt driveway sealcoating — how much it costs, how often to seal, whether it's worth it, and step-by-step DIY instructions.",
  image: "https://bitumencalcpro.com/asphalt-driveway-sealcoating-guide.webp",
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
    logo: { "@type": "ImageObject", url: "https://bitumencalcpro.com/logo.png" },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://bitumencalcpro.com/blog/asphalt-driveway-sealcoating",
  },
  keywords:
    "asphalt driveway sealcoating, driveway sealcoating cost, how often to seal asphalt driveway, sealcoat driveway yourself, asphalt sealer, parking lot sealcoating",
  articleSection: "Asphalt & Paving Materials",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How often should I seal my asphalt driveway?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every 2 to 3 years for most driveways, starting 3 to 6 months after a new installation. Heavy traffic or harsh climates can shorten that interval, while light use can stretch it slightly longer.",
      },
    },
    {
      "@type": "Question",
      name: "How much does it cost to sealcoat a driveway?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Professional sealcoating runs $0.15 to $0.65 per square foot, or $150 to $300 for a typical 600 square foot driveway. DIY materials cost $0.08 to $0.35 per square foot, or roughly $50 to $110 for the same size.",
      },
    },
    {
      "@type": "Question",
      name: "Is sealing your own driveway worth it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, for most homeowners. DIY sealcoating saves 40 to 60% compared to hiring a professional and uses the same basic process, as long as you follow proper prep and weather guidelines.",
      },
    },
    {
      "@type": "Question",
      name: "Can you seal an asphalt driveway too often?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Sealing every year, rather than every 2 to 3 years, can build up excess layers that peel and can trap oils in the asphalt, making the surface soft instead of protecting it.",
      },
    },
    {
      "@type": "Question",
      name: "What temperature is needed to seal a driveway?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Between 50 and 90 degrees F, with at least 2 consecutive dry days — one before application and one after — so the sealer can cure properly.",
      },
    },
    {
      "@type": "Question",
      name: "How long after paving should you wait to seal a driveway?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "3 to 6 months. Sealing too soon traps volatile compounds still releasing from the fresh asphalt binder and can leave the surface soft.",
      },
    },
    {
      "@type": "Question",
      name: "Does sealcoating fix cracks and potholes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Sealcoating protects the surface but does not repair structural damage. Cracks need to be filled before sealing, and significant potholes or base failure need separate repair.",
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
      name: "Asphalt Driveway Sealcoating",
      item: "https://bitumencalcpro.com/blog/asphalt-driveway-sealcoating",
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
          className="w-full max-w-full h-auto object-contain sm:object-cover" style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 75vw, 900px"
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : undefined}
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

export default function AsphaltDrivewaySeacoatingPage() {
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

      {/* HERO BAND */}
      <div className="relative pt-16 pb-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 to-orange-600/10 pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-teal-500/10 blur-[100px] pointer-events-none" />

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
            <span className="text-white/90 font-medium">Asphalt Driveway Sealcoating</span>
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
            Asphalt Driveway Sealcoating: Cost, Frequency, and How to Do It Yourself
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
              12 min read
            </span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="text-white/50">By BitumenCalcPro</span>
          </div>
        </div>
      </div>

      {/* HERO IMAGE — Image 1: below H1, before Quick Answer */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionImage
          src="/asphalt-driveway-sealcoating-guide.webp"
          alt="Asphalt driveway sealcoating — fresh sealcoat applied on residential driveway for UV and water protection"
          caption="Sealcoating is the single most cost-effective maintenance step for an asphalt driveway — a thin protective layer that can extend surface life by years for cents per square foot"
          priority
        />
      </div>

      {/* ARTICLE BODY */}
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
                Asphalt driveway sealcoating costs{" "}
                <strong className="text-white">$0.15 to $0.65 per square foot</strong> professionally installed, or{" "}
                <strong className="text-white">$0.08 to $0.35 per square foot</strong> for DIY materials. Most driveways need sealing every{" "}
                <strong className="text-white">2 to 3 years</strong>, starting 3 to 6 months after a new asphalt installation.
                Sealcoating protects asphalt from UV rays, water, and oil, and can extend a driveway&apos;s life by several years for
                a fraction of the cost of replacement.
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
                  { id: "what-sealcoating-does", label: "What Sealcoating Actually Does" },
                  { id: "how-often", label: "How Often to Seal an Asphalt Driveway" },
                  { id: "cost", label: "Asphalt Driveway Sealcoating Cost" },
                  { id: "worth-it", label: "Is Driveway Sealcoating Worth It?" },
                  { id: "diy-steps", label: "How to Seal an Asphalt Driveway Yourself" },
                  { id: "parking-lot", label: "Sealcoating a Parking Lot" },
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
                Asphalt driveway sealcoating is a thin protective coating applied over asphalt to block water, UV rays, and chemical
                damage from oil and gas spills. It&apos;s the cheapest maintenance step that actually extends a driveway&apos;s life,
                and it&apos;s one most homeowners either do too rarely or skip entirely until cracks and fading make the problem obvious.
              </p>
              <p className="text-white/85 leading-relaxed mb-4 text-base">
                This guide covers how often to seal, what it costs, whether it&apos;s worth doing, and the steps to do it yourself.
                If you&apos;re also planning a new asphalt surface, understanding{" "}
                <Link
                  href="/blog/asphalt-thickness"
                  className="text-teal-400 hover:text-orange-300 underline underline-offset-2 transition-colors font-medium"
                >
                  correct asphalt pavement thickness
                </Link>{" "}
                from the start is just as important as keeping it sealed once it&apos;s down.
              </p>
            </section>

            {/* What Sealcoating Actually Does */}
            <section id="what-sealcoating-does" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                What Sealcoating Actually Does
              </h2>
              <SectionImage
                src="/asphalt-sealcoating-protection-uv-water-oil.webp"
                alt="Asphalt sealcoating protection against UV rays, water infiltration, and oil damage on a residential driveway surface"
                caption="A sealcoat barrier blocks the three forces that degrade asphalt fastest — solar UV oxidation, freeze-thaw water intrusion, and petroleum-based oil spills"
              />
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Fresh asphalt is a deep black mix of aggregate and{" "}
                <Link
                  href="/blog/what-is-bitumen"
                  className="text-teal-400 hover:text-orange-300 underline underline-offset-2 transition-colors font-medium"
                >
                  bitumen binder
                </Link>
                . Sun exposure oxidizes that binder over time, drying it out and turning the surface a dull gray. Water gets into
                small cracks and expands when it freezes, widening them. Oil and gas spills soften the asphalt&apos;s binder directly,
                since both the binder and many petroleum products share a similar chemistry.
              </p>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Sealcoat forms a thin barrier over the surface that blocks UV rays, sheds water, and resists oil and gas penetration.
                It doesn&apos;t add structural strength — it protects the asphalt that&apos;s already there from breaking down faster
                than it should. This is fundamentally different from the role of the{" "}
                <Link
                  href="/blog/asphalt-vs-bitumen"
                  className="text-teal-400 hover:text-orange-300 underline underline-offset-2 transition-colors font-medium"
                >
                  bitumen binder within the asphalt mix
                </Link>
                , which provides structural flexibility from day one.
              </p>
              <div className="bg-gradient-to-br from-teal-500/15 to-teal-600/10 border border-teal-400/25 rounded-2xl p-6 mb-5">
                <p className="text-white/85 leading-relaxed text-base">
                  <strong className="text-teal-300">Key point:</strong> Sealcoating is a surface protectant, not a structural repair.
                  If cracks or base damage already exist, sealcoating won&apos;t fix them — it simply preserves what&apos;s still good.
                </p>
              </div>
            </section>

            {/* How Often */}
            <section id="how-often" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                How Often Should You Seal an Asphalt Driveway
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Seal a brand-new asphalt driveway{" "}
                <strong className="text-white">3 to 6 months after installation</strong>, not immediately. Fresh asphalt needs time to
                cure and release volatile compounds from the binder. Sealing too early traps those compounds and can leave the surface soft.
              </p>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                After that first application, reseal every <strong className="text-white">2 to 3 years</strong> for most residential
                driveways. A few things shift that number:
              </p>
              <div className="space-y-3 mb-6">
                {[
                  {
                    label: "Heavy traffic or steep driveway",
                    detail:
                      "Wears sealer down faster, which can mean resealing closer to the 2-year mark.",
                  },
                  {
                    label: "Harsh climates with intense sun or heavy freeze-thaw cycles",
                    detail: "Also shortens the resealing interval.",
                  },
                  {
                    label: "Light use and shaded driveway",
                    detail: "Can stretch the interval toward 3 years without issue.",
                  },
                ].map(({ label, detail }, i) => (
                  <div
                    key={i}
                    className="bg-white/5 border border-white/10 rounded-xl p-4 flex gap-3"
                  >
                    <div className="shrink-0 w-2 h-2 rounded-full bg-orange-400 mt-1.5" />
                    <div>
                      <p className="text-white font-semibold text-sm mb-0.5">{label}</p>
                      <p className="text-white/65 text-sm leading-relaxed">{detail}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Watch the driveway itself rather than relying purely on a calendar. Fading from deep black to gray, a rough or pitted
                surface texture, or visible hairline cracking are all signs it&apos;s due, regardless of exactly how many years have passed.
              </p>
              <div className="bg-gradient-to-br from-orange-500/15 to-orange-600/10 border border-orange-400/25 rounded-2xl p-6">
                <p className="text-white/85 leading-relaxed text-base">
                  <strong className="text-orange-300">Avoid over-sealing.</strong> Multiple paving sources agree that annual sealing
                  does more harm than good. It builds up excess layers that can peel, and it can trap oils inside the asphalt, leaving
                  the surface soft and flexible instead of protected. Stick to the 2-to-3-year window.
                </p>
              </div>
            </section>

            {/* Cost */}
            <section id="cost" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                Asphalt Driveway Sealcoating Cost
              </h2>
              <SectionImage
                src="/asphalt-driveway-sealcoating-cost-estimate.webp"
                alt="Asphalt driveway sealcoating cost estimate — comparing DIY and professional contractor pricing per square foot"
                caption="DIY sealcoating saves 40 to 60 percent versus hiring a contractor — the same materials at a fraction of the labor cost, with the same protective result when properly applied"
              />
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Pricing varies by region, sealant type, and whether you hire a professional or do it yourself. For a complete picture
                of what asphalt installations cost before you even get to sealcoating, the{" "}
                <Link
                  href="/blog/bitumen-driveway-cost-worldwide"
                  className="text-teal-400 hover:text-orange-300 underline underline-offset-2 transition-colors font-medium"
                >
                  worldwide bitumen driveway cost guide
                </Link>{" "}
                breaks down prices by country and driveway size.
              </p>

              <InfoTable
                headers={["Driveway Size", "DIY Cost", "Professional Cost"]}
                rows={[
                  ["Small (200 to 300 sq ft)", "$30 to $75", "$120 to $200"],
                  ["Medium (600 sq ft, double car)", "$50 to $110", "$150 to $300"],
                  ["Large (1,000+ sq ft)", "$90 to $200", "$300 to $600+"],
                ]}
              />

              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Per square foot, professional sealcoating generally runs{" "}
                <strong className="text-white">$0.15 to $0.65</strong>, with most jobs landing between $0.20 and $0.30. DIY materials
                run <strong className="text-white">$0.08 to $0.35 per square foot</strong>, depending on the sealant type.
              </p>

              <h3 className="text-xl font-bold text-white mb-4">Sealant Type and Cost</h3>
              <p className="text-white/80 leading-relaxed mb-4 text-base">
                Sealant type affects cost directly:
              </p>
              <InfoTable
                headers={["Sealant Type", "Cost per Sq Ft"]}
                rows={[
                  ["Asphalt emulsion", "$0.08 to $0.10"],
                  ["Coal tar emulsion", "$0.06 to $0.10"],
                  ["Latex acrylic", "$0.20 to $0.25"],
                  ["Eco-friendly formulas", "$0.25 to $0.38"],
                ]}
              />

              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Crack repair adds cost on top of the base sealing price, typically{" "}
                <strong className="text-white">$0.35 to $1.75 per square foot</strong> of damaged area depending on severity.
                Professionals often charge a separate pressure washing fee, usually $0.27 to $0.39 per square foot or a flat
                $100 to $200, if the driveway needs cleaning before sealing.
              </p>
              <p className="text-white/80 leading-relaxed text-base">
                Most professional sealcoating companies also carry a minimum service charge, often{" "}
                <strong className="text-white">$150 to $200</strong>, so a very small driveway may cost close to the same as a
                medium one.
              </p>
            </section>

            {/* Worth It */}
            <section id="worth-it" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Is Driveway Sealcoating Worth It?
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Yes, for most driveways. The math works in sealcoating&apos;s favor by a wide margin: spending{" "}
                <strong className="text-white">$0.20 to $0.30 per square foot</strong> every 2 to 3 years is far cheaper than the
                cost of a full driveway replacement, which runs several dollars per square foot and only becomes necessary sooner when
                asphalt is left unprotected.
              </p>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Unsealed asphalt exposed to sun, water, and oil breaks down faster, developing cracks and potholes years ahead of a
                sealed surface. Skipping sealcoating entirely doesn&apos;t just risk an earlier full replacement — it also tends to
                mean more frequent, piecemeal crack repairs in the years leading up to it. This is closely related to why{" "}
                <Link
                  href="/blog/asphalt-estimation-mistakes"
                  className="text-teal-400 hover:text-orange-300 underline underline-offset-2 transition-colors font-medium"
                >
                  deferred maintenance is one of the costliest asphalt project mistakes
                </Link>{" "}
                property owners make — each round of piecemeal repair adds cost that regular sealing would have mostly prevented.
              </p>
              <div className="bg-gradient-to-br from-teal-500/15 via-blue-600/10 to-purple-600/10 border border-white/15 rounded-2xl p-6">
                <p className="text-white/85 leading-relaxed text-base">
                  <strong className="text-teal-300">The exception:</strong> A driveway already past the point sealcoating can help.
                  If the asphalt is over 20 years old, the base beneath it has failed, or cracks run deeper than about 2 inches,
                  sealcoating treats the surface without fixing the underlying problem. In that case, a professional repair or
                  resurfacing assessment makes more sense than another round of sealer.
                </p>
              </div>
            </section>

            {/* DIY Steps */}
            <section id="diy-steps" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                How to Seal an Asphalt Driveway Yourself
              </h2>
              <SectionImage
                src="/diy-asphalt-driveway-sealcoating.webp"
                alt="DIY asphalt driveway sealcoating — homeowner applying sealcoat with squeegee applicator on a clean residential driveway"
                caption="DIY sealcoating is one of the more approachable home maintenance projects — the key variables are surface prep and weather, not technique"
              />
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                DIY sealcoating is one of the more approachable home maintenance projects, provided the weather cooperates and the
                surface is properly prepped. The same principle of careful surface preparation applies whether you&apos;re sealing a
                driveway or working on any asphalt maintenance — the{" "}
                <a
                  href="https://www.asphaltinstitute.org/engineering/asphalt-pavement-construction/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                >
                  Asphalt Institute&apos;s pavement construction guidance
                  <ExternalLink size={12} className="inline ml-0.5 mb-0.5" />
                </a>{" "}
                reinforces that surface condition before application determines most of the outcome.
              </p>

              <h3 className="text-xl font-bold text-white mb-4">What You&apos;ll Need</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  "Asphalt sealer (enough for 2 coats; check coverage per gallon on the product label)",
                  "Crack filler, if needed",
                  "Stiff push broom or squeegee applicator",
                  "Pressure washer or hose and stiff brush",
                  "Painter's tape for edges",
                  "Safety gloves",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 flex items-start gap-3"
                  >
                    <CheckCircle2 size={15} className="text-teal-400 shrink-0 mt-0.5" />
                    <span className="text-white/75 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-white mb-4">Step-by-Step Process</h3>
              <div className="space-y-4 mb-6">
                {[
                  {
                    step: "1",
                    title: "Clear and sweep the driveway",
                    detail:
                      "Remove all debris, dirt, and vehicles. Sweep thoroughly so no loose material remains on the surface.",
                  },
                  {
                    step: "2",
                    title: "Degrease oil and grease stains",
                    detail: (
                      <span>
                        Scrub stained areas with a degreaser and rinse. For step-by-step instructions on absorbent prep and degreasing, see our guide on{" "}
                        <Link
                          href="/blog/how-to-remove-oil-stains-asphalt-driveway"
                          className="text-teal-400 hover:text-orange-300 underline underline-offset-2 transition-colors font-medium"
                        >
                          how to remove oil stains from an asphalt driveway
                        </Link>
                        . Sealer won&apos;t bond properly over an oil-contaminated surface.
                      </span>
                    ),
                  },
                  {
                    step: "3",
                    title: "Fill cracks",
                    detail:
                      "Apply crack filler to any gaps before sealing. Let it cure fully per the product's instructions — often 24 hours — before moving to the next step.",
                  },
                  {
                    step: "4",
                    title: "Pressure wash and dry",
                    detail:
                      "Pressure wash or scrub the full surface to remove loose debris, then let it dry completely — usually 24 hours in good weather.",
                  },
                  {
                    step: "5",
                    title: "Check the forecast",
                    detail:
                      "You need temperatures between 50 and 90 degrees F and at least 2 consecutive dry days — one before application and one after — for the sealer to cure properly.",
                  },
                  {
                    step: "6",
                    title: "Apply the first coat",
                    detail:
                      "Apply the first coat with a squeegee applicator, working in small sections and maintaining a wet edge so lines don't show once dry.",
                  },
                  {
                    step: "7",
                    title: "Let dry, then apply second coat",
                    detail:
                      "Let the first coat dry — typically 4 to 8 hours depending on conditions — before applying a second coat for better coverage and durability.",
                  },
                  {
                    step: "8",
                    title: "Keep vehicles off for 24 to 48 hours",
                    detail:
                      "Keep vehicles off the driveway for at least 24 to 48 hours after the final coat, longer in cooler or humid conditions.",
                  },
                ].map(({ step, title, detail }) => (
                  <div
                    key={step}
                    className="bg-white/5 border border-white/10 rounded-2xl p-5 flex gap-4"
                  >
                    <div className="shrink-0 w-9 h-9 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-black text-sm shadow-lg">
                      {step}
                    </div>
                    <div>
                      <p className="text-white font-bold text-base mb-1">{title}</p>
                      <p className="text-white/70 text-sm leading-relaxed">{detail}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-gradient-to-br from-teal-500/15 to-teal-600/10 border border-teal-400/25 rounded-2xl p-6">
                <p className="text-white/85 leading-relaxed text-base">
                  <strong className="text-teal-300">Pro tip:</strong> Two thinner coats generally outperform one thick one. Thick
                  applications can crack or peel as they cure. This is also a good time to address stubborn oil stains before they
                  worsen — our guide on{" "}
                  <Link
                    href="/blog/how-to-remove-bitumen"
                    className="text-teal-400 hover:text-orange-300 underline underline-offset-2 transition-colors font-medium"
                  >
                    removing bitumen and petroleum stains from surfaces
                  </Link>{" "}
                  covers the right products and methods for different stain types.
                </p>
              </div>
            </section>

            {/* Parking Lot */}
            <section id="parking-lot" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Sealcoating a Parking Lot
              </h2>
              <SectionImage
                src="/commercial-parking-lot-sealcoating.webp"
                alt="Commercial parking lot sealcoating — fresh sealcoat application on large asphalt parking area with line striping work"
                caption="Commercial parking lots follow the same sealcoating chemistry as driveways, but traffic volume, sectioning logistics, and line striping make them a contractor job at any real scale"
              />
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Commercial parking lots follow the same core sealcoating process as a residential driveway, but a few differences
                matter at that scale.
              </p>
              <div className="space-y-4 mb-6">
                {[
                  {
                    q: "Traffic volume changes the schedule",
                    a: "A parking lot sees far more daily traffic than a driveway, which wears sealer down faster. Many commercial lots need resealing every 2 to 3 years as well, but high-traffic lots — like those at retail centers or restaurants — sometimes need it closer to every 1 to 2 years.",
                  },
                  {
                    q: "Sectioning the work matters more",
                    a: "A large lot cannot be sealed and cured all at once without shutting down access entirely, so most commercial jobs are done in sections, often overnight or over a weekend, to keep at least part of the lot usable.",
                  },
                  {
                    q: "Line striping is part of the job",
                    a: "Parking lots need their stall lines and markings repainted after sealcoating, since the sealer covers the old paint. This adds a cost line professionals typically quote separately from the sealcoating itself.",
                  },
                  {
                    q: "Cost scales differently",
                    a: "Per square foot, large commercial jobs often land at the lower end of the pricing range, since contractors can apply materials more efficiently across a big, open area compared to the edges, curves, and obstacles common on a residential driveway.",
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
              <p className="text-white/80 leading-relaxed text-base">
                For a parking lot of any real size, hiring a commercial paving contractor makes more sense than a DIY approach. The
                equipment, sectioning logistics, and striping work go well beyond what a homeowner-scale project calls for. The same
                factors that influence{" "}
                <Link
                  href="/blog/asphalt-vs-concrete"
                  className="text-teal-400 hover:text-orange-300 underline underline-offset-2 transition-colors font-medium"
                >
                  choosing between asphalt and concrete for commercial surfaces
                </Link>{" "}
                also apply here — material choice and maintenance frequency are closely linked at the commercial scale.
              </p>
            </section>

            {/* Conclusion */}
            <section id="conclusion" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                Conclusion
              </h2>
              <SectionImage
                src="/asphalt-driveway-sealcoating-maintenance.webp"
                alt="Asphalt driveway long-term maintenance and sealcoating results — well-maintained sealed surface versus cracked neglected driveway"
                caption="A properly sealed driveway maintains its structural integrity and appearance for far longer — the cost difference is cents per square foot now versus dollars later"
              />
              <div className="bg-gradient-to-br from-teal-500/15 via-blue-600/10 to-purple-600/10 border border-white/15 rounded-2xl p-6 md:p-8">
                <p className="text-white/85 leading-relaxed mb-4 text-base">
                  Sealcoating is cheap insurance for asphalt. A driveway sealed every 2 to 3 years, starting a few months after
                  installation, holds its color and resists cracking far longer than one left unprotected — for a cost measured in
                  cents per square foot rather than dollars. DIY sealing works well for most homeowners who follow proper prep and
                  weather windows, while parking lots and larger commercial jobs are better handled by a contractor equipped for
                  sectioning, striping, and faster turnaround.
                </p>
                <p className="text-white/85 leading-relaxed mb-4 text-base">
                  Before budgeting any paving or maintenance project, use our free{" "}
                  <Link
                    href="/"
                    className="text-teal-400 hover:text-orange-300 font-semibold underline underline-offset-2 transition-colors"
                  >
                    Bitumen Calculator
                  </Link>{" "}
                  to estimate material quantities and costs accurately — from initial paving through to long-term upkeep planning.
                </p>
                <p className="text-white/85 leading-relaxed text-base">
                  For the broader technical context of how asphalt behaves over its lifetime — including how the bitumen binder degrades
                  and why protective surface treatments matter — the{" "}
                  <a
                    href="https://www.fhwa.dot.gov/pavement/asphalt/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                  >
                    Federal Highway Administration&apos;s asphalt pavement resources
                    <ExternalLink size={12} className="inline ml-0.5 mb-0.5" />
                  </a>{" "}
                  provide a thorough engineering foundation.
                </p>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-6 border-l-4 border-teal-400 pl-4">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {[
                  {
                    q: "How often should I seal my asphalt driveway?",
                    a: "Every 2 to 3 years for most driveways, starting 3 to 6 months after a new installation. Heavy traffic or harsh climates can shorten that interval, while light use can stretch it slightly longer.",
                  },
                  {
                    q: "How much does it cost to sealcoat a driveway?",
                    a: "Professional sealcoating runs $0.15 to $0.65 per square foot, or $150 to $300 for a typical 600 square foot driveway. DIY materials cost $0.08 to $0.35 per square foot, or roughly $50 to $110 for the same size.",
                  },
                  {
                    q: "Is sealing your own driveway worth it?",
                    a: "Yes, for most homeowners. DIY sealcoating saves 40 to 60% compared to hiring a professional and uses the same basic process, as long as you follow proper prep and weather guidelines.",
                  },
                  {
                    q: "Can you seal an asphalt driveway too often?",
                    a: "Yes. Sealing every year, rather than every 2 to 3 years, can build up excess layers that peel and can trap oils in the asphalt, making the surface soft instead of protecting it.",
                  },
                  {
                    q: "What temperature is needed to seal a driveway?",
                    a: "Between 50 and 90 degrees F, with at least 2 consecutive dry days — one before application and one after — so the sealer can cure properly.",
                  },
                  {
                    q: "How long after paving should you wait to seal a driveway?",
                    a: "3 to 6 months. Sealing too soon traps volatile compounds still releasing from the fresh asphalt binder and can leave the surface soft.",
                  },
                  {
                    q: "Does sealcoating fix cracks and potholes?",
                    a: "No. Sealcoating protects the surface but does not repair structural damage. Cracks need to be filled before sealing, and significant potholes or base failure need separate repair.",
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
