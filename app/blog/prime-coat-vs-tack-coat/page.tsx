import AuthorBio from "../../components/AuthorBio";
// app/blog/prime-coat-vs-tack-coat/page.tsx
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

// ── Metadata ──────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Prime Coat vs Tack Coat: Differences, Rates & When to Use Each",
  description:
    "Prime coat vs tack coat explained: what each one does, the right application rates, binder types, cure times, and how to avoid bond failures on asphalt projects.",
  keywords: [
    "prime coat vs tack coat",
    "prime coat application rate",
    "tack coat application rate",
    "what is prime coat",
    "what is tack coat",
    "prime coat vs tack coat difference",
    "tack coat emulsion",
    "prime coat bitumen",
    "asphalt bond coat",
    "pavement tack coat",
  ],
  alternates: {
    canonical: "https://bitumencalcpro.com/blog/prime-coat-vs-tack-coat",
  },
  openGraph: {
    title:
      "Prime Coat vs Tack Coat: Differences, Application Rates & When to Use Each | BitumenCalcPro",
    description:
      "Prime coat goes on a granular base. Tack coat goes between asphalt layers. Full breakdown of materials, rates, cure times, and common bond failures.",
    url: "https://bitumencalcpro.com/blog/prime-coat-vs-tack-coat",
    siteName: "BitumenCalcPro",
    type: "article",
    publishedTime: "2026-11-10T00:00:00.000Z",
    authors: ["BitumenCalcPro"],
    images: [
      {
        url: "/prime-coat-vs-tack-coat-comparison.webp",
        width: 1200,
        height: 675,
        alt: "Prime coat vs tack coat — bitumen spray application comparison on asphalt pavement",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prime Coat vs Tack Coat: Differences, Rates & When to Use Each",
    description:
      "Prime coat on a granular base. Tack coat between asphalt layers. Full breakdown of binders, rates, cure times, and failure causes.",
    images: ["/prime-coat-vs-tack-coat-comparison.webp"],
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
    "Prime Coat vs Tack Coat: Differences, Application Rates, and When to Use Each",
  description:
    "Prime coat vs tack coat explained: what each one does, the right application rates, binder types, cure times, and how to avoid bond failures on asphalt projects.",
  image:
    "https://bitumencalcpro.com/prime-coat-vs-tack-coat-comparison.webp",
  datePublished: "2026-11-10T00:00:00.000Z",
  dateModified: "2026-11-10T00:00:00.000Z",
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
    "@id": "https://bitumencalcpro.com/blog/prime-coat-vs-tack-coat",
  },
  keywords:
    "prime coat vs tack coat, prime coat application rate, tack coat application rate, what is prime coat, what is tack coat, tack coat emulsion, asphalt bond coat",
  articleSection: "Asphalt & Paving Materials",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the main difference between a prime coat and a tack coat?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A prime coat is sprayed on an unbound granular base and soaks into it. A tack coat is sprayed on an existing asphalt or concrete surface and stays on top to bond the next layer.",
      },
    },
    {
      "@type": "Question",
      name: "Can a tack coat replace a prime coat?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Tack emulsion is applied at a far lighter rate and does not penetrate a granular base, so it cannot bind loose fines or seal the base.",
      },
    },
    {
      "@type": "Question",
      name: "Is a tack coat needed between every asphalt layer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most specifications require it. Some allow the engineer to authorize omitting it between new lifts when the surface is clean and free of dust and debris.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a prime coat take to cure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Usually 24 to 72 hours, depending on the binder, rate, base moisture, and weather. Some specifications require at least 48 hours undisturbed.",
      },
    },
    {
      "@type": "Question",
      name: "How long should a tack coat sit before paving?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Until it breaks from brown to black and the water has left. In warm, dry weather that often takes 30 minutes to 2 hours. Cold, humid weather or dilution pushes it longer.",
      },
    },
    {
      "@type": "Question",
      name: "What is the application rate for a tack coat?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Residual rates run about 0.02 to 0.15 gal/yd², with 0.04 to 0.08 the common working band. Milled and aged surfaces take more than smooth, dense ones.",
      },
    },
    {
      "@type": "Question",
      name: "What binder is used for a prime coat?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Medium-curing cutbacks such as MC-30 and MC-70 are traditional. Slow-setting emulsions or penetrating prime emulsions are used where cutbacks are restricted.",
      },
    },
    {
      "@type": "Question",
      name: "Why is tack coat diluted?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dilution adds water so the crew can apply a thin, even film at low residual rates. The spray rate must increase to leave the same residual, and dilution also lengthens the break time.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if you skip the tack coat?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The new layer can slide on the old one under traffic. The result is slippage, cracking, and delamination — the surface can separate over time.",
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
      name: "Prime Coat vs Tack Coat",
      item: "https://bitumencalcpro.com/blog/prime-coat-vs-tack-coat",
    },
  ],
};

// ── Reusable Components ───────────────────────────────────
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
  rows: (string | React.ReactNode)[][];
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
export default function PrimeCoatVsTackCoatPage() {
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
            <span className="text-white/90 font-medium">
              Prime Coat vs Tack Coat
            </span>
          </nav>

          {/* Category badge */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="inline-flex items-center gap-1.5 bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
              <BookOpen size={12} />
              Asphalt &amp; Paving Materials
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-6 max-w-4xl">
            Prime Coat vs Tack Coat: Differences, Application Rates, and When
            to Use Each
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-white/50 text-sm mb-10">
            <span className="flex items-center gap-1.5">
              <Calendar size={13} />
              <time dateTime="2026-11-10">November 10, 2026</time>
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

      {/* ── FEATURED IMAGE ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionImage
          src="/prime-coat-vs-tack-coat-comparison.webp"
          alt="Prime coat vs tack coat — bituminous spray application comparison showing distributor truck on granular base and asphalt overlay"
          caption="One distributor truck often sprays both coats on the same job — but prime coat and tack coat touch different surfaces and do entirely different jobs"
          priority
        />
      </div>

      {/* ── ARTICLE BODY ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24">
        <div className="flex flex-col xl:flex-row gap-12 items-start">
          <article className="flex-1 min-w-0">

            {/* Quick Answer */}
            <div className="mb-10 bg-gradient-to-br from-teal-500/15 to-teal-600/10 border border-teal-400/25 rounded-2xl p-6 md:p-8">
              <h2 className="text-lg font-black text-teal-300 mb-3 flex items-center gap-2">
                <CheckCircle2 size={18} />
                Quick Answer
              </h2>
              <p className="text-white/85 leading-relaxed text-base">
                Prime coat vs tack coat comes down to the surface. A prime coat
                is sprayed on an unbound granular base before the first asphalt
                layer. It soaks in, binds loose fines, and seals the base. A
                tack coat is sprayed on existing asphalt or concrete. It stays
                on top and bonds the new layer to the old one. Prime coats are
                heavier — about 0.15 to 0.50 gal/yd² — and cure for 24 hours
                or more. Tack coats break within hours.
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
                  { id: "at-a-glance", label: "Prime Coat vs Tack Coat at a Glance" },
                  { id: "prime-coat", label: "What Is a Prime Coat?" },
                  { id: "tack-coat", label: "What Is a Tack Coat?" },
                  { id: "pavement-layers", label: "Where Each Coat Goes in the Pavement" },
                  { id: "application-rates", label: "Application Rates Compared" },
                  { id: "quantity-calculation", label: "How to Calculate Quantities" },
                  { id: "mistakes-failures", label: "Common Mistakes and Failures" },
                  { id: "do-you-need-both", label: "Do You Need Both?" },
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

            {/* Intro */}
            <section className="mb-12">
              <p className="text-white/85 leading-relaxed mb-4 text-base">
                Both prime coat and tack coat are thin sprays of bitumen. Both
                go down before asphalt does. One distributor truck often sprays
                both on the same job, which is why the two names get swapped on
                site and in conversation. The distinction is simple once you
                know what each one touches: a prime coat goes on a base with no
                binder in it, and a tack coat goes on a surface that already
                has binder in it. The material, the rate, and the cure time all
                follow from that.
              </p>
              <p className="text-white/85 leading-relaxed mb-4 text-base">
                This guide covers what each coat does, which materials and
                rates go with each, how to calculate quantities, and the
                mistakes that cause bond failures. If you are budgeting for{" "}
                <Link
                  href="/tack-coat-calculator"
                  className="text-teal-400 hover:text-orange-300 underline underline-offset-2 transition-colors font-medium"
                >
                  tack coat material quantities
                </Link>{" "}
                on your next paving project, our free tack coat calculator
                handles the arithmetic for you.
              </p>
            </section>

            {/* At a Glance Table */}
            <section id="at-a-glance" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Prime Coat vs Tack Coat at a Glance
              </h2>
              <InfoTable
                headers={["", "Prime coat", "Tack coat"]}
                rows={[
                  ["Applied to", "Unbound granular or stabilized base", "Existing asphalt, milled surface, or concrete"],
                  ["Main job", "Penetrate and seal the base, bind surface fines, prepare for asphalt", "Bond a new asphalt layer to the layer below"],
                  ["Where it ends up", "Soaks into the top of the base", "Stays on the surface as a thin film"],
                  ["Typical binder", "MC-30 or MC-70 cutback, slow-setting emulsions, penetrating prime emulsions", "CSS-1h, SS-1h, CSS-1, SS-1, trackless tack"],
                  ["Typical rate", "About 0.15 to 0.50 gal/yd²", "About 0.02 to 0.15 gal/yd² residual"],
                  ["Wait before paving", "About 24 to 72 hours", "About 30 minutes to a few hours, until the emulsion breaks"],
                  ["If skipped or done badly", "Base raveling, moisture problems, weak bond to the first lift", "Slippage, cracking, delamination"],
                ]}
              />
              <p className="text-white/55 text-xs italic mt-2">
                Rates vary by agency — the project specification is the controlling document.
              </p>
            </section>

            {/* What Is a Prime Coat */}
            <section id="prime-coat" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                What Is a Prime Coat?
              </h2>
              <SectionImage
                src="/prime-coat-granular-base-application.webp"
                alt="Prime coat application on granular base — bituminous distributor spraying low-viscosity cutback on crushed stone base course"
                caption="A prime coat is thin on purpose — it needs to flow into the voids at the top of the base and stay there, not pool on the surface"
              />
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                A prime coat is a low-viscosity bituminous liquid sprayed onto
                an unbound granular base — such as crushed stone or stabilized
                soil — before the first asphalt layer goes down. The liquid is
                thin on purpose so it can flow into the top of the base and
                stay there.
              </p>

              <h3 className="text-xl font-bold text-white mb-3 mt-6">
                What a prime coat does
              </h3>
              <ul className="space-y-2 mb-5">
                {[
                  "Binds loose fines at the surface of the base so they do not ravel under construction traffic",
                  "Seals the base against water, limiting moisture from rain and preventing moisture loss from the base",
                  "Controls dust until the asphalt is placed",
                  "Prepares the surface so the first asphalt layer bonds to the base",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-white/80 text-base leading-relaxed"
                  >
                    <CheckCircle2
                      size={16}
                      className="text-teal-400 mt-1 shrink-0"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Rain, wheel traffic, and wind all attack a bare granular base.
                A primed surface gives the paving crew a firmer, more uniform
                platform to work from.
              </p>

              <h3 className="text-xl font-bold text-white mb-3 mt-6">
                Prime coat materials
              </h3>
              <InfoTable
                headers={["Base condition", "Common binder", "Why"]}
                rows={[
                  ["Tight, fine-graded or clay-bound base", "MC-30", "The most fluid medium-curing cutback, so it can enter fine pores"],
                  ["Open, coarse base", "MC-70", "Medium curing gives it time to penetrate before the solvent flashes off"],
                  ["Where cutbacks are restricted", "CSS-1h or SS-1h, or a penetrating prime emulsion", "Water-based, no solvent release"],
                ]}
              />
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Cutbacks penetrate deeper and release solvent as they cure.
                Many regions restrict that, and emulsions have taken a growing
                share of prime work. Our guide on{" "}
                <Link
                  href="/blog/bitumen-emulsion-explained"
                  className="text-teal-400 hover:text-orange-300 underline underline-offset-2 transition-colors font-medium"
                >
                  bitumen emulsion grades and what the codes mean
                </Link>{" "}
                covers the full classification system in detail.
              </p>

              <h3 className="text-xl font-bold text-white mb-3 mt-6">
                Prime coat application rate
              </h3>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Cutback prime coats are typically applied at about{" "}
                <strong className="text-white">
                  0.20 to 0.50 gal/yd²
                </strong>{" "}
                (roughly 0.9 to 2.3 L/m²), with open bases at the high end.
                Emulsion prime coats typically run about{" "}
                <strong className="text-white">
                  0.15 to 0.30 gal/yd² residual
                </strong>
                . A federal airfield specification, for example, calls for 0.20
                to 0.30 gal/yd² for its prime coat. The base absorbs the
                liquid, so the rate is a volume of material leaving the spray
                bar. Test sections confirm whether the base takes the rate
                without pooling.
              </p>

              <h3 className="text-xl font-bold text-white mb-3 mt-6">
                Prime coat curing
              </h3>
              <p className="text-white/80 leading-relaxed text-base">
                Most prime coats need{" "}
                <strong className="text-white">24 to 72 hours</strong> to cure,
                depending on the binder, rate, base moisture, and weather. Some
                specifications require the primed surface to stay undisturbed
                for at least 48 hours. The coat is ready for asphalt when the
                binder has penetrated and no wet or excess material remains on
                top.
              </p>
            </section>

            {/* What Is a Tack Coat */}
            <section id="tack-coat" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                What Is a Tack Coat?
              </h2>
              <SectionImage
                src="/tack-coat-existing-asphalt-application.webp"
                alt="Tack coat application on existing asphalt — distributor truck spraying CSS-1h emulsion before hot mix asphalt overlay"
                caption="Tack coat emulsion goes on as brown liquid and breaks to black as the water evaporates — pave only after the full color change"
              />
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                A tack coat is a thin film of asphalt emulsion sprayed between
                a new asphalt layer and the surface below it. It bonds the two
                layers so the pavement acts as one structure under traffic.
                Without that bond, the top layer can shift independently of the
                layer beneath.
              </p>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Tack coats go on the top of a lower asphalt lift before the
                next lift, on existing pavement before an overlay, on a milled
                surface before the new surface course, and on concrete where
                the specification calls for an asphalt overlay.
              </p>

              <h3 className="text-xl font-bold text-white mb-3 mt-6">
                Tack coat materials
              </h3>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                CSS-1h (cationic slow-setting, hard base) is the most commonly
                specified tack emulsion in the United States. Other common
                choices are SS-1, SS-1h, and CSS-1. All are slow-setting grades
                that can be sprayed in a thin, even film and then break
                predictably. Trackless tack uses a harder binder that does not
                stick to tires and equipment, which helps on jobs where trucks
                must run over the tacked surface. The full classification of
                these emulsion grades is explained in our{" "}
                <Link
                  href="/blog/bitumen-emulsion-explained"
                  className="text-teal-400 hover:text-orange-300 underline underline-offset-2 transition-colors font-medium"
                >
                  bitumen emulsion guide
                </Link>
                .
              </p>

              <h3 className="text-xl font-bold text-white mb-3 mt-6">
                Tack coat application rate
              </h3>
              <p className="text-white/80 leading-relaxed mb-4 text-base">
                Tack coat rates are written as{" "}
                <strong className="text-white">residual asphalt</strong> — the
                binder left on the surface once the water has gone. Across
                agencies, the residual rate falls between about{" "}
                <strong className="text-white">0.02 and 0.15 gal/yd²</strong>{" "}
                (0.09 to 0.68 L/m²), and 0.04 to 0.08 gal/yd² is the common
                working band.
              </p>
              <InfoTable
                headers={["Surface", "Rate guidance"]}
                rows={[
                  ["Dense, smooth, newly placed asphalt", "Lower end"],
                  ["Flushed or bleeding surface", "Lower end — it already carries excess binder"],
                  ["Dry, aged, or oxidized surface", "Higher end"],
                  ["Open-textured or raveled surface", "Higher end"],
                  ["Milled surface", "Highest band — true surface area exceeds plan area"],
                ]}
              />

              <h3 className="text-xl font-bold text-white mb-3 mt-6">
                Diluting tack coat
              </h3>
              <p className="text-white/80 leading-relaxed mb-4 text-base">
                Emulsion is sometimes diluted with water at 1:1 so the crew can
                spread the binder more evenly at low rates. Caltrans notes that
                1:1 suits milled pavement in warm weather, and that a steep
                grade or high cross slope calls for little or no dilution to
                avoid puddling and runoff.
              </p>
              <div className="bg-gradient-to-br from-orange-500/15 to-orange-600/10 border border-orange-400/25 rounded-2xl p-6 mb-5">
                <p className="text-white/85 leading-relaxed text-sm">
                  <strong className="text-orange-300">Dilution arithmetic:</strong>{" "}
                  A diluted emulsion must be applied at a higher spray rate to
                  leave the same residual. The formula:{" "}
                  <em>diluted rate = undiluted rate × (1 + water ÷ emulsion)</em>.
                  Add water to the emulsion, not emulsion to water, or the
                  emulsion can break early. Some agencies — including Missouri
                  DOT — prohibit field dilution, citing inaccurate ratios and
                  incompatible water sources.
                </p>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 mt-6">
                Tack coat break and cure
              </h3>
              <p className="text-white/80 leading-relaxed text-base">
                Fresh emulsion is brown. As water separates from the asphalt it
                turns black — that color change is called the break. Pave only
                after the tack has broken. Hot mix placed on unbroken, brown
                tack traps water at the interface and gives almost no bond. In
                warm, dry weather the break often takes 30 minutes to 2 hours.
                Cold, humid weather, heavier application, and dilution all push
                it longer. Keep traffic off the tacked surface where possible;
                if trucks must cross it, trackless tack or a clean-wheel rule
                reduces pickup.
              </p>
            </section>

            {/* Pavement Layers */}
            <section id="pavement-layers" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                Where Each Coat Goes in the Pavement
              </h2>
              <SectionImage
                src="/prime-coat-tack-coat-pavement-layers.webp"
                alt="Prime coat and tack coat placement in pavement layer diagram — showing granular base, prime coat, asphalt binder course, tack coat, and surface course"
                caption="A prime coat sits only at the base-to-asphalt boundary — every tack coat sits between two bound layers"
              />
              <p className="text-white/80 leading-relaxed mb-4 text-base">
                The order of layers shows why the two coats never overlap.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <p className="text-teal-300 font-bold text-sm uppercase tracking-wider mb-3">
                    New pavement on a granular base
                  </p>
                  <ol className="space-y-1.5">
                    {[
                      "Compacted subgrade",
                      "Subbase and granular base",
                      "Prime coat on the base (where specified)",
                      "First asphalt layer — base or binder course",
                      "Tack coat on top of that layer",
                      "Surface course",
                    ].map((step, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-white/75 text-sm"
                      >
                        <span className="text-teal-400 font-bold shrink-0">
                          {i + 1}.
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <p className="text-orange-300 font-bold text-sm uppercase tracking-wider mb-3">
                    Overlay on existing pavement
                  </p>
                  <ol className="space-y-1.5">
                    {[
                      "Existing pavement — cleaned and sometimes milled",
                      "Tack coat",
                      "New asphalt overlay",
                    ].map((step, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-white/75 text-sm"
                      >
                        <span className="text-orange-400 font-bold shrink-0">
                          {i + 1}.
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed text-base">
                For typical layer thicknesses and structural design
                requirements, see our{" "}
                <Link
                  href="/blog/asphalt-thickness"
                  className="text-teal-400 hover:text-orange-300 underline underline-offset-2 transition-colors font-medium"
                >
                  asphalt pavement thickness guide
                </Link>
                , which covers driveways, roads, and parking lots.
              </p>
            </section>

            {/* Application Rates Compared */}
            <section id="application-rates" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Application Rates Compared
              </h2>
              <SectionImage
                src="/prime-tack-coat-application-rate.webp"
                alt="Prime coat vs tack coat application rate comparison — spray bar coverage and residual binder rate diagram"
                caption="Prime coat rates describe volume sprayed; tack coat rates describe residual binder left after the water evaporates — mixing these up is a common ordering error"
              />
              <InfoTable
                headers={["", "Prime coat", "Tack coat"]}
                rows={[
                  ["Rate in gal/yd²", "About 0.15 to 0.50", "About 0.02 to 0.15 residual"],
                  ["Rate in L/m²", "About 0.7 to 2.3", "About 0.09 to 0.68 residual"],
                  ["Rate is measured as", "Volume sprayed (the base absorbs it)", "Residual binder left after the water leaves"],
                  ["Dilution", "Not typical", "Common at 1:1 where the specification allows"],
                ]}
              />
              <p className="text-white/80 leading-relaxed text-base">
                To convert, 1 gal/yd² is about 4.53 L/m². Sources quote
                different rates for the same coat, so use the figure in your
                project specification and confirm it with a test strip.
              </p>
            </section>

            {/* Quantity Calculation */}
            <section id="quantity-calculation" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                How to Calculate Prime and Tack Coat Quantities
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                The basic formula is the same for both:
              </p>
              <div className="bg-gradient-to-br from-teal-500/15 to-teal-600/10 border border-teal-400/25 rounded-2xl p-6 mb-6 font-mono text-sm">
                <p className="text-teal-300 font-bold mb-1">Formula</p>
                <p className="text-white">
                  Quantity (gal) = area (yd²) × application rate (gal/yd²)
                </p>
              </div>

              <div className="space-y-5 mb-6">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <p className="text-orange-300 font-bold mb-2">
                    Prime coat example
                  </p>
                  <p className="text-white/80 text-sm leading-relaxed">
                    A 1,000 yd² base at 0.25 gal/yd² needs{" "}
                    <strong className="text-white">250 gallons</strong> of
                    cutback or emulsion.
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <p className="text-teal-300 font-bold mb-2">
                    Tack coat example
                  </p>
                  <p className="text-white/80 text-sm leading-relaxed mb-2">
                    1,000 yd² of asphalt, target residual rate 0.05 gal/yd²:
                  </p>
                  <ul className="space-y-1 text-white/75 text-sm">
                    <li>Residual asphalt needed: 1,000 × 0.05 = <strong className="text-white">50 gallons</strong></li>
                    <li>Emulsion at 60% residue: 50 ÷ 0.60 = <strong className="text-white">~83 gallons</strong> undiluted</li>
                    <li>Diluted 1:1 with water: ~83 gal emulsion + ~83 gal water = <strong className="text-white">~167 gallons sprayed</strong> (~0.17 gal/yd²)</li>
                  </ul>
                </div>
              </div>

              <p className="text-white/80 leading-relaxed mb-4 text-base">
                Residue varies by emulsion — FHWA puts it at roughly 57 to 70
                percent of the undiluted emulsion, so use the figure on the
                supplier&apos;s certificate. Check whether a quoted rate means
                residual binder or sprayed emulsion. Mixing them up is one of
                the most common sources of short orders on site. Our{" "}
                <Link
                  href="/blog/asphalt-estimation-mistakes"
                  className="text-teal-400 hover:text-orange-300 underline underline-offset-2 transition-colors font-medium"
                >
                  common asphalt estimation mistakes guide
                </Link>{" "}
                covers other quantity errors that push budgets over, and our{" "}
                <Link
                  href="/tack-coat-calculator"
                  className="text-teal-400 hover:text-orange-300 underline underline-offset-2 transition-colors font-medium"
                >
                  free tack coat calculator
                </Link>{" "}
                handles overall tack quantities for a paving job.
              </p>

              <div className="bg-gradient-to-br from-blue-500/15 to-blue-600/10 border border-blue-400/25 rounded-2xl p-5">
                <p className="text-white/80 text-sm leading-relaxed">
                  <strong className="text-blue-300">FHWA guidance:</strong>{" "}
                  The{" "}
                  <a
                    href="https://www.fhwa.dot.gov/pavement/asphalt/pubs/hif19028/hif19028.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                  >
                    Federal Highway Administration&apos;s tack coat guidelines
                    <ExternalLink size={12} className="inline ml-0.5 mb-0.5" />
                  </a>{" "}
                  recommend verifying residual content with the supplier&apos;s
                  mill certificate and conducting a test strip before full
                  application on any project.
                </p>
              </div>
            </section>

            {/* Mistakes and Failures */}
            <section id="mistakes-failures" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Common Mistakes and Failures
              </h2>
              <SectionImage
                src="/tack-coat-failure-asphalt-slippage.webp"
                alt="Tack coat failure — asphalt slippage cracking and delamination between pavement layers caused by missing or contaminated tack coat"
                caption="Crescent-shaped slippage cracks and delamination at the bond line trace back to the tack coat — not to the mix or the layer thickness"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/25 rounded-2xl p-5">
                  <p className="text-orange-300 font-bold text-sm uppercase tracking-wider mb-3">
                    Prime coat mistakes
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Paving before the prime has cured — leaves wet binder under the asphalt",
                      "Choosing a binder too thick for the base to absorb",
                      "Spraying more than the base can take — leaves pooled material on top",
                      "Letting construction traffic cut up the primed surface before paving",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-white/75 text-sm leading-relaxed">
                        <span className="text-orange-400 mt-0.5 shrink-0">✕</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-red-500/10 to-red-600/5 border border-red-500/25 rounded-2xl p-5">
                  <p className="text-red-300 font-bold text-sm uppercase tracking-wider mb-3">
                    Tack coat mistakes
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Too much tack — acts as a lubricant and creates a slippage plane",
                      "Too little or uneven tack — missed strips leave unbonded areas",
                      "Paving on brown tack — emulsion has not broken, water stays trapped",
                      "Spraying onto a dusty or dirty surface — tack does not bond to contamination",
                      "Using a smooth-surface rate on a milled surface — higher rate is needed",
                      "Tracking — trucks pull tack off and leave bare spots",
                      "Skipping tack between lifts without authorization",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-white/75 text-sm leading-relaxed">
                        <span className="text-red-400 mt-0.5 shrink-0">✕</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed text-base">
                Crescent-shaped slippage cracks and delamination at the bond
                line trace back to the tack coat — not to the mix or the layer
                thickness. Understanding{" "}
                <Link
                  href="/blog/bitumen-grades-explained"
                  className="text-teal-400 hover:text-orange-300 underline underline-offset-2 transition-colors font-medium"
                >
                  bitumen binder grades and performance specifications
                </Link>{" "}
                helps in selecting the right emulsion for the temperature and
                traffic conditions on a given project.
              </p>
            </section>

            {/* Do You Need Both */}
            <section id="do-you-need-both" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                Do You Need Both?
              </h2>
              <InfoTable
                headers={["Scenario", "Prime coat", "Tack coat"]}
                rows={[
                  ["New road or parking lot on granular base", "Where specified", "Between asphalt lifts"],
                  ["Overlay on existing asphalt", "Not used", "Yes"],
                  ["Overlay on milled asphalt", "Not used", "Yes, at the higher rate"],
                  ["Asphalt over concrete", "Not used", "Where the specification calls for it"],
                ]}
              />
              <p className="text-white/80 leading-relaxed text-base">
                Whether a project uses a prime coat is a specification decision,
                and some agencies omit it on dense, well-compacted bases. Some
                specifications also let the engineer authorize skipping tack
                between new lifts when the surface is clean, though most still
                require it. Treat both as engineering calls and follow the
                project documents. For more context on how binder selection
                affects pavement performance, the{" "}
                <a
                  href="https://www.asphaltinstitute.org/engineering/construction/tack-coat-best-practices/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                >
                  Asphalt Institute&apos;s tack coat best practices
                  <ExternalLink size={12} className="inline ml-0.5 mb-0.5" />
                </a>{" "}
                is a widely referenced industry resource.
              </p>
            </section>

            {/* Summary */}
            <section id="summary" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Summary
              </h2>
              <div className="bg-gradient-to-br from-teal-500/15 via-blue-600/10 to-purple-600/10 border border-white/15 rounded-2xl p-6 md:p-8">
                <p className="text-white/85 leading-relaxed mb-4 text-base">
                  The choice between the two coats follows the surface under
                  the asphalt. Prime goes on an unbound base, penetrates it,
                  and cures for a day or more. Tack goes on a bound surface,
                  stays on top, and is ready once it turns black. Their
                  materials, rates, and cure times differ because their jobs
                  differ.
                </p>
                <p className="text-white/85 leading-relaxed mb-4 text-base">
                  Calculate quantities from the residual rate and the
                  emulsion&apos;s residue percentage, follow the project
                  specification, and let every tack coat break before the
                  asphalt arrives. For a broader look at how{" "}
                  <Link
                    href="/blog/what-is-bitumen"
                    className="text-teal-400 hover:text-orange-300 font-semibold underline underline-offset-2 transition-colors"
                  >
                    bitumen properties affect pavement performance
                  </Link>
                  , our complete bitumen guide covers grades, density, and
                  temperature behavior in full.
                </p>
                <p className="text-white/85 leading-relaxed text-base">
                  Planning a paving project? Use our free{" "}
                  <Link
                    href="/"
                    className="text-teal-400 hover:text-orange-300 font-semibold underline underline-offset-2 transition-colors"
                  >
                    Bitumen Calculator
                  </Link>{" "}
                  to estimate mix weight, binder content, and aggregate
                  requirements accurately — before you commit to a contractor
                  quote.
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
                    q: "What is the main difference between a prime coat and a tack coat?",
                    a: "A prime coat is sprayed on an unbound granular base and soaks into it. A tack coat is sprayed on an existing asphalt or concrete surface and stays on top to bond the next layer.",
                  },
                  {
                    q: "Can a tack coat replace a prime coat?",
                    a: "No. Tack emulsion is applied at a far lighter rate and does not penetrate a granular base, so it cannot bind loose fines or seal the base.",
                  },
                  {
                    q: "Is a tack coat needed between every asphalt layer?",
                    a: "Most specifications require it. Some allow the engineer to authorize omitting it between new lifts when the surface is clean and free of dust and debris.",
                  },
                  {
                    q: "How long does a prime coat take to cure?",
                    a: "Usually 24 to 72 hours, depending on the binder, rate, base moisture, and weather. Some specifications require at least 48 hours undisturbed.",
                  },
                  {
                    q: "How long should a tack coat sit before paving?",
                    a: "Until it breaks from brown to black and the water has left. In warm, dry weather that often takes 30 minutes to 2 hours. Cold, humid weather or dilution pushes it longer.",
                  },
                  {
                    q: "What is the application rate for a tack coat?",
                    a: "Residual rates run about 0.02 to 0.15 gal/yd², with 0.04 to 0.08 the common working band. Milled and aged surfaces take more than smooth, dense ones.",
                  },
                  {
                    q: "What binder is used for a prime coat?",
                    a: "Medium-curing cutbacks such as MC-30 and MC-70 are traditional. Slow-setting emulsions or penetrating prime emulsions are used where cutbacks are restricted.",
                  },
                  {
                    q: "Why is tack coat diluted?",
                    a: "Dilution adds water so the crew can apply a thin, even film at low residual rates. The spray rate must increase to leave the same residual, and dilution also lengthens the break time.",
                  },
                  {
                    q: "What happens if you skip the tack coat?",
                    a: "The new layer can slide on the old one under traffic. The result is slippage, cracking, and delamination — the surface can separate over time.",
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

            <AuthorBio />
          </article>
        </div>
      </div>
    </>
  );
}
