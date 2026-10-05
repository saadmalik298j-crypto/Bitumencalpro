import AuthorBio from "../../components/AuthorBio";
// app/blog/bitumen-paint/page.tsx
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
  Droplets,
  Shield,
} from "lucide-react";

// ── Metadata ──────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Bitumen Paint: Uses, Drying Time & How to Apply It",
  description:
    "What is bitumen paint used for? See how it waterproofs wood, concrete, steel & foundations, how long it takes to dry, and if you can paint over it.",
  keywords: [
    "bitumen paint",
    "bituminous paint",
    "black bitumen paint",
    "bitumen paint uses",
    "bitumen paint for wood",
    "bitumen paint for concrete",
    "bitumen paint for steel",
    "bitumen paint drying time",
    "waterproof bitumen paint",
    "bitumen roof paint",
    "how to apply bitumen paint",
    "can you paint over bitumen paint",
    "bitumen paint vs bitumen membrane",
    "bitumen paint for foundations",
  ],
  alternates: { canonical: "https://bitumencalcpro.com/blog/bitumen-paint" },
  openGraph: {
    title:
      "Bitumen Paint: Uses, Drying Time & How to Apply It | BitumenCalcPro",
    description:
      "What is bitumen paint used for? See how it waterproofs wood, concrete, steel & foundations, how long it takes to dry, and if you can paint over it.",
    url: "https://bitumencalcpro.com/blog/bitumen-paint",
    siteName: "BitumenCalcPro",
    type: "article",
    publishedTime: "2026-10-04T00:00:00.000Z",
    authors: ["BitumenCalcPro"],
    images: [
      {
        url: "/bitumen-paint-waterproofing-coating.webp",
        width: 1200,
        height: 675,
        alt: "Bitumen paint waterproofing coating — black bituminous paint applied to concrete, steel and wood surfaces for moisture protection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bitumen Paint: Uses, Drying Time & How to Apply It",
    description:
      "Waterproofs wood, concrete, steel & foundations. Drying times, application steps, overcoating tips, and membrane comparison.",
    images: ["/bitumen-paint-waterproofing-coating.webp"],
  },
  robots: {
    "max-image-preview": "large",
  },
};

// ── Structured Data ───────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Bitumen Paint: Uses, Benefits, Application, and Everything You Need to Know",
  description:
    "What is bitumen paint used for? See how it waterproofs wood, concrete, steel and foundations, how long it takes to dry, and if you can paint over it.",
  image: "https://bitumencalcpro.com/bitumen-paint-waterproofing-coating.webp",
  datePublished: "2026-10-04T00:00:00.000Z",
  dateModified: "2026-10-04T00:00:00.000Z",
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
    "@id": "https://bitumencalcpro.com/blog/bitumen-paint",
  },
  keywords:
    "bitumen paint, bituminous paint, black bitumen paint, bitumen paint uses, waterproof bitumen paint, bitumen roof paint, bitumen paint for wood, bitumen paint for concrete, bitumen paint for steel, bitumen paint for foundations",
  articleSection: "Roofing & Waterproofing",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is bitumen paint made of?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It's bitumen dissolved in a solvent, typically white spirit, combined with pigments and additives that help it spread, dry, and cure into a flexible, waterproof black film.",
      },
    },
    {
      "@type": "Question",
      name: "Is bitumen paint waterproof?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Waterproofing is its primary function, forming a continuous barrier that blocks water penetration on concrete, wood, steel, and masonry surfaces.",
      },
    },
    {
      "@type": "Question",
      name: "How long does bitumen paint take to dry?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Touch dry typically takes 2 to 8 hours, with full cure commonly taking 1 to 3 days, depending on temperature, humidity, and the porosity of the surface.",
      },
    },
    {
      "@type": "Question",
      name: "Can you paint over bitumen paint?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It's possible but limited. Standard topcoats often bleed through, so an aluminium leafing primer or a specialist bitumen-compatible coating generally gives better results than a direct repaint.",
      },
    },
    {
      "@type": "Question",
      name: "Can bitumen paint be used on wood?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, it's commonly used to waterproof fences, sheds, and exterior timber. Apply it only to clean, fully dry wood, since painting over damp timber traps moisture underneath the coating.",
      },
    },
    {
      "@type": "Question",
      name: "Is bitumen paint safe for drinking water tanks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not all formulations are. Check the specific product's technical data sheet, since standard bitumen paint is not always rated safe for potable water contact.",
      },
    },
    {
      "@type": "Question",
      name: "How often does a roof need bitumen paint reapplied?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It varies by product and exposure rather than a fixed schedule, since UV exposure and weather cycling on a roof break the coating down faster than on more sheltered surfaces. Check the manufacturer's maintenance guidance for the specific coating used.",
      },
    },
    {
      "@type": "Question",
      name: "Does bitumen paint need a primer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "On porous surfaces like bare concrete and some wood, yes. A primer seals the surface pores and improves adhesion before the main coating is applied.",
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
      name: "Bitumen Paint",
      item: "https://bitumencalcpro.com/blog/bitumen-paint",
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
          className="w-full max-w-full h-auto object-contain sm:object-cover" style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 75vw, 900px"
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : undefined}
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
export default function BitumenPaintPage() {
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
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full bg-teal-500/10 blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center flex-wrap gap-1.5 text-sm text-white/75 mb-8"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight size={13} />
            <Link href="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
            <ChevronRight size={13} />
            <span className="text-white/90 font-medium">Bitumen Paint</span>
          </nav>

          {/* Category badge */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="inline-flex items-center gap-1.5 bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
              <Droplets size={12} />
              Roofing &amp; Waterproofing
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-6 max-w-4xl">
            Bitumen Paint: Uses, Benefits, Application, and Everything You Need
            to Know
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-white/75 text-sm mb-10">
            <span className="flex items-center gap-1.5">
              <Calendar size={13} />
              <time dateTime="2026-10-04">October 4, 2026</time>
            </span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="flex items-center gap-1.5">
              <Clock size={13} />
              14 min read
            </span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="text-white/75">By BitumenCalcPro</span>
          </div>
        </div>
      </div>

      {/* ── HERO IMAGE ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionImage
          src="/bitumen-paint-waterproofing-coating.webp"
          alt="Bitumen paint waterproofing coating — black bituminous paint applied to concrete foundation, steel, and wood surfaces for moisture and corrosion protection"
          caption="Bitumen paint forms a flexible, waterproof black film on concrete, steel, wood, and masonry — applied cold with standard tools"
          priority
        />
      </div>

      {/* ── ARTICLE BODY ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24">
        <div className="flex flex-col xl:flex-row gap-12 items-start">

          {/* ── MAIN CONTENT ── */}
          <article className="flex-1 min-w-0">

            {/* Quick Answer Box */}
            <div className="mb-10 bg-gradient-to-br from-teal-500/15 to-teal-600/10 border border-teal-400/25 rounded-2xl p-6 md:p-8">
              <h2 className="text-lg font-black text-teal-300 mb-3 flex items-center gap-2">
                <CheckCircle2 size={18} />
                Quick Answer
              </h2>
              <p className="text-white/85 leading-relaxed text-base">
                Bitumen paint is a <strong className="text-white">black, solvent-based coating</strong> made from bitumen that waterproofs and protects surfaces like concrete, wood, steel, and foundations against moisture, corrosion, and weather damage. It&apos;s cold-applied and touch dry within a few hours, with full cure times varying by product, typically landing somewhere in the <strong className="text-white">24 to 72 hour range</strong>. It&apos;s widely used on roofs, foundations, metalwork, and underground structures, though it generally can&apos;t be painted over without a specialist primer, since it tends to bleed through most topcoats.
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
                  { id: "what-is-bitumen-paint", label: "What Is Bitumen Paint" },
                  { id: "what-is-bitumen-paint-used-for", label: "What Is Bitumen Paint Used For" },
                  { id: "bitumen-paint-for-concrete", label: "Bitumen Paint for Concrete" },
                  { id: "bitumen-paint-for-wood", label: "Bitumen Paint for Wood" },
                  { id: "bitumen-paint-for-steel", label: "Bitumen Paint for Steel" },
                  { id: "bitumen-paint-for-foundations", label: "Bitumen Paint for Foundations" },
                  { id: "bitumen-roof-paint", label: "Bitumen Roof Paint" },
                  { id: "benefits-and-disadvantages", label: "Benefits & Disadvantages" },
                  { id: "how-to-apply", label: "How to Apply Bitumen Paint" },
                  { id: "drying-time", label: "How Long Does Bitumen Paint Take to Dry" },
                  { id: "can-you-paint-over", label: "Can You Paint Over Bitumen Paint" },
                  { id: "vs-membrane", label: "Bitumen Paint vs Bitumen Membrane" },
                  { id: "spray", label: "Bitumen Spray Paint" },
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
                Bitumen paint is one of the oldest, simplest waterproofing products still in common use — a thick, black coating that goes on cold and dries into a tough, water-resistant film. It shows up on roofs, foundations, steel structures, and wood that needs protecting from moisture, and it&apos;s cheap enough that most hardware stores carry at least one version of it.
              </p>
              <p className="text-white/85 leading-relaxed text-base">
                This guide covers what bitumen paint actually does, where it works best, how long it takes to dry, and the handful of things that trip people up when they use it for the first time — especially around overcoating and surface prep. If you want to understand the broader material first, our{" "}
                <Link
                  href="/blog/what-is-bitumen"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors font-medium"
                >
                  complete guide to bitumen
                </Link>{" "}
                covers the chemistry, grades, and uses in full detail.
              </p>
            </section>

            {/* ── SECTION: What Is Bitumen Paint ── */}
            <section id="what-is-bitumen-paint" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                What Is Bitumen Paint
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Bitumen paint is a thick, black coating made by dissolving bitumen in a solvent — usually white spirit — along with pigments and additives that help it spread and cure evenly. Once applied, the solvent evaporates and leaves behind a solid, flexible bitumen film that&apos;s waterproof, weather-resistant, and resistant to low concentrations of acids and alkalis.
              </p>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                It&apos;s often called <strong className="text-white">bituminous paint</strong> or <strong className="text-white">black bitumen paint</strong> interchangeably, and it&apos;s closely related to bitumen coating and{" "}
                <Link
                  href="/blog/modified-bitumen-roofing"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                >
                  bitumen membrane products
                </Link>
                , just in a ready-to-brush liquid form rather than a sheet or thick trowel-applied compound. Some manufacturers also offer coal tar versions with similar properties, though bitumen-based formulas have become more common as coal tar use has declined in many regions due to environmental and health regulations.
              </p>

              <SectionImage
                src="/bitumen-paint-coating-application.webp"
                alt="Bitumen paint coating application — brushing black bituminous paint onto a surface showing solvent-based waterproofing process and film formation"
                caption="Bitumen paint is applied cold by brush, roller, or spray — the solvent evaporates to leave a continuous waterproof bitumen film"
              />
            </section>

            {/* ── SECTION: Uses ── */}
            <section id="what-is-bitumen-paint-used-for" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                What Is Bitumen Paint Used For
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Bitumen paint&apos;s core job is simple: stop water and weather from getting into a surface that shouldn&apos;t absorb it. That single function covers a wide range of real applications.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  {
                    color: "orange" as const,
                    text: "Waterproofing foundations and retaining walls, protecting below-ground concrete from constant soil moisture",
                  },
                  {
                    color: "teal" as const,
                    text: "Weatherproofing roofs, particularly felt roofs, corrugated iron, and other roofing materials exposed to rain and UV",
                  },
                  {
                    color: "orange" as const,
                    text: "Protecting steelwork from corrosion, including pipes, tanks, fire escapes, ladders, and gutters",
                  },
                  {
                    color: "teal" as const,
                    text: "Sealing underground and underwater structures, since it holds up well against sustained water contact",
                  },
                  {
                    color: "orange" as const,
                    text: "Treating wood against rot and moisture, especially fences, sheds, and wooden poles exposed to the elements",
                  },
                  {
                    color: "teal" as const,
                    text: "Coating potable and non-potable water tanks — though not all formulations are rated safe for drinking water contact, so check the product specification before using it on anything holding water for consumption",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-white/80 text-base">
                    <span
                      className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${
                        item.color === "orange" ? "bg-orange-400" : "bg-teal-400"
                      }`}
                    />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* ── SECTION: Concrete ── */}
            <section id="bitumen-paint-for-concrete" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                Bitumen Paint for Concrete
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Concrete is porous by nature, which means it soaks up water readily unless something blocks that absorption. Bitumen paint forms a continuous barrier over the surface that stops water penetration and the chemical damage that comes with it — including the freeze-thaw cracking and reinforcement corrosion that untreated concrete is prone to over time.
              </p>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                It&apos;s commonly used on concrete foundations, retaining walls, and below-grade structures where ongoing moisture exposure is a given rather than an occasional risk. Because concrete is so porous, most manufacturers recommend a primer coat first. Skipping the primer on bare concrete often means the first coat of bitumen paint soaks in unevenly rather than forming a proper surface film.
              </p>

              <SectionImage
                src="/bitumen-paint-concrete-wood-steel-protection.webp"
                alt="Bitumen paint protection for concrete, wood, and steel — black waterproofing coating applied to multiple building materials showing corrosion and moisture barrier"
                caption="Bitumen paint protects porous concrete, rot-prone wood, and corrosion-susceptible steel with the same cold-applied waterproofing formula"
              />
            </section>

            {/* ── SECTION: Wood ── */}
            <section id="bitumen-paint-for-wood" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Bitumen Paint for Wood
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Wood rots when it stays wet, and bitumen paint for wood works by sealing the surface so water can&apos;t get in and start that process. It&apos;s a common choice for fences, garden sheds, wooden poles, and any exterior timber that sits exposed to rain and ground moisture.
              </p>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                A few rules matter more for wood than for other surfaces. Always apply bitumen paint to <strong className="text-white">clean, dry wood</strong>. Painting over damp timber traps that moisture underneath the coating instead of keeping it out, which can speed up rot rather than prevent it. If the wood will sit in standing water or buried ground contact, bitumen paint is a reasonable choice specifically because it holds up well to prolonged water exposure — more so than many standard exterior wood finishes.
              </p>
            </section>

            {/* ── SECTION: Steel ── */}
            <section id="bitumen-paint-for-steel" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                Bitumen Paint for Steel
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Steel corrodes when exposed to moisture and oxygen over time, and bitumen paint protects it by forming a barrier that keeps both away from the metal surface. It&apos;s used across shipbuilding, pipelines, storage tanks, and general structural steelwork exposed to the weather.
              </p>
              <p className="text-white/80 leading-relaxed text-base">
                Ferrous metal — meaning iron and steel — benefits most directly, though bitumen paint also works on non-ferrous metals like aluminium, zinc, and lead. For heavily rusted steel, a rust-inhibiting primer applied first gives the bitumen coating a stable surface to bond to, rather than coating over active corrosion. To understand the broader material science behind why bitumen bonds so effectively to metal surfaces, the{" "}
                <a
                  href="https://www.bbacerts.co.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                >
                  British Board of Agrément (BBA)
                  <ExternalLink size={12} className="inline ml-0.5 mb-0.5" />
                </a>{" "}
                publishes approval certificates for waterproofing coatings used on structural materials in the UK.
              </p>
            </section>

            {/* ── SECTION: Foundations ── */}
            <section id="bitumen-paint-for-foundations" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Bitumen Paint for Foundations
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Foundation waterproofing is one of bitumen paint&apos;s most common jobs, since below-grade concrete sits in constant contact with damp soil. A bitumen coating applied to the exterior face of a foundation wall acts as a flexible barrier that keeps that ground moisture from working its way into the structure.
              </p>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                This matters because a damp foundation doesn&apos;t just risk water ingress into a basement. Sustained moisture exposure also speeds up concrete deterioration and, where steel reinforcement is present, drives corrosion inside the slab itself. Bitumen-based coatings are commonly used on exterior foundation surfaces before backfilling, where the specified system is suitable for the structure and site conditions.
              </p>

              <SectionImage
                src="/bitumen-paint-foundation-roof-waterproofing.webp"
                alt="Bitumen paint foundation waterproofing — black bituminous coating applied to concrete foundation wall exterior before backfilling to prevent ground moisture ingress"
                caption="Applied to foundation exteriors before backfilling, bitumen paint creates a continuous damp-proof barrier against constant soil moisture contact"
              />
            </section>

            {/* ── SECTION: Roof Paint ── */}
            <section id="bitumen-roof-paint" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                Bitumen Roof Paint
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Roofing is one of the most visible and common uses for bitumen paint. It&apos;s applied to felt roofs, corrugated iron, and other roofing substrates to extend their waterproof life well past what the base material alone would manage.
              </p>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Bitumen roof paint works as a flexible, weatherproof film over materials that would otherwise crack, corrode, or let water through as they age. It&apos;s a maintenance product as much as a protective one. UV exposure and weather cycling break the coating down faster on a roof than on a more sheltered vertical surface, so roof coatings may need periodic recoating as they weather. How often varies considerably by product and exposure, so it&apos;s worth following the manufacturer&apos;s maintenance recommendations for the specific coating used rather than assuming a fixed interval.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-xl p-5 mb-6">
                <p className="text-white/70 text-sm leading-relaxed">
                  <strong className="text-white">Color note:</strong> Bitumen paint is black by nature — a direct result of the bitumen itself rather than an added pigment choice. Some manufacturers offer tinted or specialist bitumen-based coatings for applications where a different color or finish is needed, but standard general-purpose bitumen paint remains black. For flat and low-slope roofing systems that go beyond a simple paint coat, our guide to{" "}
                  <Link
                    href="/blog/modified-bitumen-roofing"
                    className="text-teal-400 hover:text-orange-300 underline underline-offset-2 transition-colors font-medium"
                  >
                    modified bitumen roofing
                  </Link>{" "}
                  covers the membrane-based alternative in full detail.
                </p>
              </div>
            </section>

            {/* ── SECTION: Benefits & Disadvantages ── */}
            <section id="benefits-and-disadvantages" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Benefits and Disadvantages of Bitumen Paint
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-white/5 border border-white/10 rounded-xl p-5 border-l-4 border-l-teal-400">
                  <h3 className="text-white font-bold mb-3 text-base flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-teal-400" />
                    Benefits
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Strong waterproofing across concrete, wood, steel, and masonry",
                      "Cold applied — no heating equipment or specialist tools needed",
                      "Flexible once cured, moves slightly with the substrate without cracking",
                      "Resistant to low concentrations of acids and alkalis",
                      "Economical compared to membrane systems",
                      "Fast initial drying, allowing a second coat the same day in most conditions",
                    ].map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-white/70 text-sm">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-5 border-l-4 border-l-orange-400">
                  <h3 className="text-white font-bold mb-3 text-base flex items-center gap-2">
                    <AlertCircle size={16} className="text-orange-400" />
                    Disadvantages
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Difficult to apply in cold conditions — coating stiffens and spreads unevenly",
                      "Softens in high heat, affecting performance on sun-exposed surfaces",
                      "Limited overcoating options — standard paints bleed through it",
                      "Can attack certain plastics, including polystyrene — check substrate compatibility",
                    ].map((d, i) => (
                      <li key={i} className="flex items-start gap-2 text-white/70 text-sm">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <InfoTable
                headers={["Property", "Performance"]}
                rows={[
                  ["Waterproofing", "Excellent — forms a continuous, pin-hole-free film"],
                  ["Flexibility", "Good — moves with minor substrate movement without cracking"],
                  ["Chemical resistance", "Moderate — handles dilute acids and alkalis; avoid strong solvents"],
                  ["UV resistance", "Moderate — degrades faster on fully exposed roof surfaces"],
                  ["Cold-weather application", "Poor — viscosity rises significantly below 5°C"],
                  ["Overcoating", "Difficult — most topcoats bleed through without a specialist primer"],
                ]}
              />
            </section>

            {/* ── SECTION: How to Apply ── */}
            <section id="how-to-apply" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                How to Apply Bitumen Paint
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Bitumen paint is designed to be straightforward to apply, though a few steps make the difference between a coating that lasts and one that fails early.
              </p>

              <SectionImage
                src="/how-to-apply-bitumen-paint.webp"
                alt="How to apply bitumen paint — step by step application guide showing brush and roller technique on prepared concrete and metal surface for waterproofing"
                caption="Surface preparation is the most important step — bitumen paint applied to dirty or damp surfaces won&apos;t bond properly and will fail early"
              />

              <div className="space-y-3 mb-6">
                {[
                  {
                    step: "01",
                    title: "Clear and clean the surface",
                    desc: "Remove loose dirt, debris, and old flaking material. A pressure wash followed by scrubbing any stubborn residue gives the coating a clean surface to bond to.",
                  },
                  {
                    step: "02",
                    title: "Let the surface dry fully",
                    desc: "Bitumen paint should go onto a dry substrate. Applying it over damp concrete or wood traps moisture underneath rather than keeping it out.",
                  },
                  {
                    step: "03",
                    title: "Apply a primer on porous surfaces",
                    desc: "Bare concrete, masonry, and some wood benefit from a dedicated bitumen primer first, since it seals the pores and improves adhesion for the main coating.",
                  },
                  {
                    step: "04",
                    title: "Stir the paint thoroughly before use",
                    desc: "It's supplied ready to use and shouldn't need thinning. Pigment and bitumen can separate during storage, so thorough stirring is essential.",
                  },
                  {
                    step: "05",
                    title: "Apply by brush, roller, or spray",
                    desc: "Work it evenly across the surface. Spray application covers large or awkward areas efficiently, while brush and roller give more control on edges and detail work.",
                  },
                  {
                    step: "06",
                    title: "Apply at least two coats",
                    desc: "Let each coat dry fully before the next. A single coat rarely gives full, even protection — especially on porous substrates like concrete and old wood.",
                  },
                ].map(({ step, title, desc }) => (
                  <div
                    key={step}
                    className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-4"
                  >
                    <span className="text-teal-400 font-black text-lg shrink-0 w-8">
                      {step}
                    </span>
                    <div>
                      <strong className="text-white text-base">{title}</strong>
                      <p className="text-white/65 text-sm mt-0.5">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-orange-500/10 border border-orange-400/20 rounded-xl p-5">
                <p className="text-orange-200 text-sm leading-relaxed font-medium flex items-start gap-2">
                  <AlertCircle size={15} className="mt-0.5 shrink-0" />
                  <span>
                    <strong>Important:</strong> Avoid solvent contact after curing. Once dry, keep the coated surface away from areas where it might come into repeated contact with solvents, which can soften the bitumen film again and compromise its waterproofing performance.
                  </span>
                </p>
              </div>
            </section>

            {/* ── SECTION: Drying Time ── */}
            <section id="drying-time" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                How Long Does Bitumen Paint Take to Dry
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Drying time varies by product, temperature, humidity, and the porosity of the surface it&apos;s applied to, but most bitumen paints follow a similar general pattern.
              </p>

              <InfoTable
                headers={["Stage", "Typical Timeframe"]}
                rows={[
                  ["Touch dry", "2 to 8 hours"],
                  ["Ready for second coat", "Same 2 to 8 hour window in most conditions"],
                  ["Full cure", "24 to 72 hours — varies by product, film thickness, and substrate"],
                ]}
              />

              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Warmer, drier conditions speed drying noticeably, since the solvent evaporates faster. Cold, humid, or damp weather slows the process, sometimes significantly. Porous surfaces like concrete and wood tend to hold onto moisture longer than non-porous metal, which can extend drying time further on those substrates.
              </p>
              <p className="text-white/80 leading-relaxed text-base">
                Different solvent-based bitumen coatings can cure at meaningfully different rates, so checking the specific product&apos;s technical data sheet is worth the extra few minutes rather than assuming a fixed timeline. The{" "}
                <a
                  href="https://coatings.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                >
                  British Coatings Federation (BCF)
                  <ExternalLink size={12} className="inline ml-0.5 mb-0.5" />
                </a>{" "}
                publishes guidance and technical standards on protective solvent-based coating performance and cure conditions.
              </p>
            </section>

            {/* ── SECTION: Paint Over ── */}
            <section id="can-you-paint-over" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                Can You Paint Over Bitumen Paint
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                This is one of the most common questions people run into, usually after deciding they want to change the color of a previously bitumen-coated surface. The honest answer: it&apos;s possible, but it&apos;s genuinely harder than painting over most other surfaces.
              </p>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Bitumen paint has a tendency to bleed through standard topcoats — especially solvent-based ones — since heat and sunlight can soften the bitumen underneath and pull its dark pigment up through the new layer. A handful of approaches work more reliably than a direct repaint:
              </p>
              <div className="space-y-3 mb-6">
                {[
                  {
                    color: "teal" as const,
                    title: "Aluminium leafing primer",
                    desc: "The most commonly recommended option. Its metallic particles form a physical barrier that blocks bleed-through better than standard primers.",
                  },
                  {
                    color: "orange" as const,
                    title: "Water-based masonry paints",
                    desc: "Applied after a suitable barrier primer, these tend to perform better than solvent-based topcoats, which are more prone to reactivating the bitumen underneath.",
                  },
                  {
                    color: "teal" as const,
                    title: "Specialist bitumen-compatible coatings",
                    desc: "Sold specifically for overcoating bitumen, these are formulated to handle the bleed-through problem directly.",
                  },
                  {
                    color: "orange" as const,
                    title: "Allow full cure time before overcoating",
                    desc: "Letting the bitumen paint cure fully and age before attempting to overcoat improves results — fresher bitumen is more prone to bleeding than a coating that's had time to fully harden.",
                  },
                ].map((item, i) => (
                  <div key={i} className={`bg-white/5 border border-white/10 rounded-xl p-4 border-l-4 ${item.color === "teal" ? "border-l-teal-400" : "border-l-orange-400"}`}>
                    <strong className="text-white text-sm">{item.title}</strong>
                    <p className="text-white/65 text-sm mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="bg-gradient-to-br from-teal-500/10 to-blue-600/10 border border-teal-400/20 rounded-2xl p-6">
                <p className="text-white/80 leading-relaxed text-base">
                  <strong className="text-white">Simplest option:</strong> If changing color matters less than simply refreshing protection, recoating with another layer of bitumen paint is by far the easiest route — bitumen bonds well to itself with no bleed-through risk at all. For those exploring protective roof coatings more broadly, our guide on{" "}
                  <Link
                    href="/blog/modified-bitumen-roof-repair"
                    className="text-teal-400 hover:text-orange-300 underline underline-offset-2 transition-colors font-medium"
                  >
                    modified bitumen roof repair
                  </Link>{" "}
                  covers maintenance and recoating strategies for membrane-based roofing systems.
                </p>
              </div>
            </section>

            {/* ── SECTION: vs Membrane ── */}
            <section id="vs-membrane" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Waterproof Bitumen Paint vs Bitumen Membrane
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Bitumen paint and bitumen membrane solve the same basic problem — keeping water out — but they&apos;re different products suited to different jobs. Bitumen paint is a liquid coating, brushed or sprayed on in thin layers, which makes it practical for irregular shapes, metalwork, and detail areas a sheet membrane can&apos;t easily cover. Bitumen membrane is a manufactured sheet, often reinforced with fiberglass or polyester, which gives it more consistent thickness and durability for large, flat roofing or below-ground applications.
              </p>

              <SectionImage
                src="/bitumen-paint-vs-bitumen-membrane.webp"
                alt="Bitumen paint vs bitumen membrane comparison — liquid brush-on waterproofing coating versus reinforced sheet membrane for roofing and foundation waterproofing"
                caption="Bitumen paint handles details, metalwork, and irregular shapes; bitumen membrane delivers consistent thickness across large flat roofing surfaces"
              />

              <InfoTable
                headers={["Factor", "Bitumen Paint", "Bitumen Membrane"]}
                rows={[
                  ["Application", "Brush, roller, or spray — cold applied", "Torch-applied, self-adhesive, or cold-bonded"],
                  ["Best use", "Metalwork, wood, foundations, details", "Flat roofs, large below-ground areas"],
                  ["Thickness", "Thin — 2 to 3 coats typically", "Consistent — typically 3 to 5 mm"],
                  ["Complex shapes", "Excellent — conforms to any geometry", "Limited — sheets need cutting and overlapping"],
                  ["Cost", "Lower — materials and labour", "Higher — materials and specialist installation"],
                  ["Durability", "Good with maintenance", "Excellent — reinforced for long-term use"],
                ]}
              />
              <p className="text-white/80 leading-relaxed mt-5 text-base">
                In practice, the two are often used together. A bitumen paint coating can serve as a primer or detail sealant around membrane edges, penetrations, and joints, where a rigid sheet can&apos;t easily conform. For flat roofing projects comparing these systems against modern single-ply options, our{" "}
                <Link
                  href="/blog/tpo-vs-modified-bitumen"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                >
                  TPO vs modified bitumen comparison
                </Link>{" "}
                breaks down cost, durability, and which system suits which building type.
              </p>
            </section>

            {/* ── SECTION: Spray Paint ── */}
            <section id="spray" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                Bitumen Spray Paint
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Spray application is one of the three standard ways to apply bitumen paint, alongside brush and roller, and it&apos;s a practical choice for large surfaces, awkward shapes, or jobs where speed matters more than fine control. Most ready-to-use bitumen paints don&apos;t require thinning before spraying, though checking the specific product&apos;s guidance matters, since formulations vary in viscosity.
              </p>
              <p className="text-white/80 leading-relaxed text-base">
                Spray application gives more even coverage across large, flat, or textured areas than brush work typically achieves, but it comes with tradeoffs. Overspray control matters more, and detail areas like edges and joints often still need a brush for proper coverage. A lot of professional roofing and tank-coating work uses spray for the bulk of the surface and brush work for edges, seams, and penetrations.
              </p>
            </section>

            {/* ── SECTION: Conclusion ── */}
            <section id="conclusion" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Conclusion
              </h2>
              <div className="bg-gradient-to-br from-teal-500/15 via-blue-600/10 to-purple-600/10 border border-white/15 rounded-2xl p-6 md:p-8">
                <p className="text-white/85 leading-relaxed mb-4 text-base">
                  Bitumen paint earns its long track record by doing one job reliably: stopping water from getting where it shouldn&apos;t. It works across concrete, wood, steel, and foundations, applies cold with basic tools, and cures into a flexible, weatherproof film within a day or two under normal conditions.
                </p>
                <p className="text-white/85 leading-relaxed mb-4 text-base">
                  The one real limitation worth planning around is overcoating — since standard topcoats tend to bleed through and need a specialist primer or compatible product to cover cleanly. For straightforward waterproofing on roofs, foundations, and metalwork, it remains one of the simplest, most economical options available.
                </p>
                <p className="text-white/85 leading-relaxed text-base">
                  To understand how bitumen itself behaves as a material — its grades, properties, and chemistry — our{" "}
                  <Link
                    href="/blog/bitumen-grades-explained"
                    className="text-teal-400 hover:text-orange-300 font-semibold underline underline-offset-2 transition-colors"
                  >
                    bitumen grades guide
                  </Link>{" "}
                  is the natural companion to this article, covering penetration grades, viscosity grades, and how to choose the right specification for the job.
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
                    q: "What is bitumen paint made of?",
                    a: "It's bitumen dissolved in a solvent, typically white spirit, combined with pigments and additives that help it spread, dry, and cure into a flexible, waterproof black film.",
                  },
                  {
                    q: "Is bitumen paint waterproof?",
                    a: "Yes. Waterproofing is its primary function, forming a continuous barrier that blocks water penetration on concrete, wood, steel, and masonry surfaces.",
                  },
                  {
                    q: "How long does bitumen paint take to dry?",
                    a: "Touch dry typically takes 2 to 8 hours, with full cure commonly taking 1 to 3 days, depending on temperature, humidity, and the porosity of the surface.",
                  },
                  {
                    q: "Can you paint over bitumen paint?",
                    a: "It's possible but limited. Standard topcoats often bleed through, so an aluminium leafing primer or a specialist bitumen-compatible coating generally gives better results than a direct repaint.",
                  },
                  {
                    q: "Can bitumen paint be used on wood?",
                    a: "Yes, it's commonly used to waterproof fences, sheds, and exterior timber. Apply it only to clean, fully dry wood, since painting over damp timber traps moisture underneath the coating.",
                  },
                  {
                    q: "Is bitumen paint safe for drinking water tanks?",
                    a: "Not all formulations are. Check the specific product's technical data sheet, since standard bitumen paint is not always rated safe for potable water contact.",
                  },
                  {
                    q: "How often does a roof need bitumen paint reapplied?",
                    a: "It varies by product and exposure rather than a fixed schedule, since UV exposure and weather cycling on a roof break the coating down faster than on more sheltered surfaces. Check the manufacturer's maintenance guidance for the specific coating used.",
                  },
                  {
                    q: "Does bitumen paint need a primer?",
                    a: "On porous surfaces like bare concrete and some wood, yes. A primer seals the surface pores and improves adhesion before the main coating is applied.",
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
