import AuthorBio from "../../components/AuthorBio";
// app/blog/how-to-remove-bitumen/page.tsx
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
} from "lucide-react";

export const metadata: Metadata = {
  title: "How to Remove Bitumen: Safe Methods for Every Surface",
  description:
    "Learn how to remove bitumen from skin, clothes, car paint, concrete, brick, wood, and more. Safe, tested methods with product recommendations and what to avoid.",
  keywords: [
    "how to remove bitumen",
    "remove bitumen from skin",
    "remove bitumen from car paint",
    "remove tar from clothes",
    "bitumen removal from concrete",
    "remove bitumen from wood",
    "how to clean bitumen",
    "tar remover",
  ],
  alternates: { canonical: "https://bitumencalcpro.com/blog/how-to-remove-bitumen" },
  openGraph: {
    title: "How to Remove Bitumen: Safe Methods for Every Surface | BitumenCalcPro",
    description:
      "Step-by-step bitumen removal for skin, clothes, car paint, concrete, brick, wood — with safe products, what to avoid, and a surface comparison table.",
    url: "https://bitumencalcpro.com/blog/how-to-remove-bitumen",
    siteName: "BitumenCalcPro",
    type: "article",
    publishedTime: "2026-09-29T00:00:00.000Z",
    authors: ["BitumenCalcPro"],
    images: [
      {
        url: "/how-to-remove-bitumen-safely.webp",
        width: 1200,
        height: 630,
        alt: "How to remove bitumen safely from different surfaces",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Remove Bitumen: Safe Methods for Every Surface",
    description:
      "Step-by-step bitumen removal for skin, clothes, car paint, concrete, brick, wood, and more.",
    images: ["/how-to-remove-bitumen-safely.webp"],
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
    "How to Remove Bitumen: Safe Methods for Skin, Clothes, Cars, Concrete, Wood and More",
  description:
    "Learn how to remove bitumen from skin, clothes, car paint, concrete, brick, wood, and more. Safe, tested methods with product recommendations and what to avoid.",
  image: "https://bitumencalcpro.com/how-to-remove-bitumen-safely.webp",
  datePublished: "2026-09-29T00:00:00.000Z",
  dateModified: "2026-09-29T00:00:00.000Z",
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
    "@id": "https://bitumencalcpro.com/blog/how-to-remove-bitumen",
  },
  keywords:
    "how to remove bitumen, bitumen removal, remove tar from skin, remove bitumen from car paint, bitumen from concrete, bitumen from wood",
  articleSection: "Bitumen Fundamentals",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What dissolves bitumen best?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oil-based products work on skin and fabric: vegetable oil, olive oil, and butter are commonly used and researched for skin safety. For hard surfaces like concrete, metal, and car paint, a dedicated tar remover, mineral spirits, or kerosene dissolves it more effectively.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use WD-40 to remove bitumen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, WD-40 is commonly used to soften bitumen and tar on car paint and concrete. Spray it on, let it dwell for several minutes, then wipe with a clean cloth.",
      },
    },
    {
      "@type": "Question",
      name: "Does vinegar remove bitumen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not effectively. Bitumen is a hydrocarbon, and vinegar is water-based and mildly acidic, which does not break down oil-based residue the way a solvent or oil does.",
      },
    },
    {
      "@type": "Question",
      name: "Is it safe to use gasoline to remove bitumen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not on skin or fabric. Gasoline dissolves bitumen but irritates skin, damages some fabrics, and carries a real fire risk. It is sometimes used on tools or bare metal, but safer alternatives exist for nearly every surface.",
      },
    },
    {
      "@type": "Question",
      name: "How do you remove bitumen from a car without damaging the paint?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use a dedicated tar and bug remover first, let it dwell, then wipe gently. Follow with a clay bar only if residue remains, then wash and reapply wax or sealant.",
      },
    },
    {
      "@type": "Question",
      name: "Why does bitumen stick so hard once it is dry?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bitumen is made of heavy hydrocarbons that harden as they cool and cure. Once fully dried, the material bonds tightly to porous surfaces like concrete and brick, which is why it needs a solvent or mechanical softening rather than washing it away with water.",
      },
    },
    {
      "@type": "Question",
      name: "Can hot bitumen burns be treated with butter at home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. While clinical studies have used butter and vegetable oil to remove hardened bitumen from burn wounds, this was done under medical supervision as part of treatment. A hot bitumen burn needs urgent medical attention first, not a home remedy.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://bitumencalcpro.com" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://bitumencalcpro.com/blog",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "How to Remove Bitumen",
      item: "https://bitumencalcpro.com/blog/how-to-remove-bitumen",
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
export default function HowToRemoveBitumenPage() {
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
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-orange-600/10 pointer-events-none" />
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full bg-teal-500/10 blur-[100px] pointer-events-none" />

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
            <span className="text-white/90 font-medium">How to Remove Bitumen</span>
          </nav>

          {/* Category badge */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="inline-flex items-center gap-1.5 bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
              <BookOpen size={12} />
              Bitumen Fundamentals
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-6 max-w-4xl">
            How to Remove Bitumen: Safe Methods for Skin, Clothes, Cars, Concrete, Wood and More
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-white/50 text-sm mb-10">
            <span className="flex items-center gap-1.5">
              <Calendar size={13} />
              <time dateTime="2026-09-29">September 29, 2026</time>
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

      {/* ── HERO IMAGE — Image 1: below H1, before Quick Answer ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionImage
          src="/how-to-remove-bitumen-safely.webp"
          alt="How to remove bitumen safely from skin, clothes, car paint, concrete, wood and other surfaces"
          caption="The right removal method depends entirely on the surface — what works on concrete can ruin car paint"
          priority
        />
      </div>

      {/* ── ARTICLE BODY + SIDEBAR ── */}
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
              <p className="text-white/85 leading-relaxed text-base">
                To remove bitumen, soften it first with heat, cold, or a compatible oil-based product,
                then lift it off without scrubbing it deeper into the surface. Skin and clothes respond
                well to vegetable oil or butter. Car paint and concrete need a dedicated tar remover or
                mineral spirits. Wood and parquet often need a scraper plus gentle heat. Never use
                gasoline, acetone, or harsh solvents on skin, and never touch hot, fresh bitumen with
                bare hands.
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
                  { id: "why-hard", label: "Why Bitumen Is Hard to Remove" },
                  { id: "skin", label: "How to Remove from Skin" },
                  { id: "clothes", label: "How to Remove from Clothes" },
                  { id: "car-paint", label: "How to Remove from Car Paint" },
                  { id: "concrete", label: "How to Remove from Concrete & Driveways" },
                  { id: "brick", label: "How to Remove from Brick" },
                  { id: "metal", label: "How to Remove from Metal" },
                  { id: "wood", label: "How to Remove from Wood & Parquet" },
                  { id: "shoes", label: "How to Remove from Shoes" },
                  { id: "paint", label: "How to Remove Bitumen Paint" },
                  { id: "comparison", label: "Surface Comparison Table" },
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

            {/* ── Intro ── */}
            <section className="mb-12">
              <p className="text-white/85 leading-relaxed mb-4 text-base">
                Bitumen is a thick, petroleum-based binder used in roofing, driveways, and parquet
                flooring. It&apos;s built to resist water and stick to almost anything, which is exactly
                why it&apos;s so hard to get off once it lands somewhere you didn&apos;t want it. The fix
                depends entirely on the surface: what softens bitumen on concrete can ruin car paint, and
                what&apos;s safe on denim will do nothing for a solid lump stuck to a wood block floor.
              </p>
              <p className="text-white/85 leading-relaxed mb-4 text-base">
                This guide breaks removal down by surface, based on what actually works and what causes
                more damage than the stain itself. If you want to understand why bitumen behaves the way it
                does — its hydrocarbon chemistry, thermoplastic properties, and where it comes from — our{" "}
                <Link
                  href="/blog/what-is-bitumen"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors font-medium"
                >
                  complete guide to bitumen
                </Link>{" "}
                covers all of that in detail.
              </p>
            </section>

            {/* ── Why Bitumen Is Hard to Remove ── */}
            <section id="why-hard" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                Why Bitumen Is Hard to Remove
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Bitumen is made of heavy hydrocarbons. It doesn&apos;t dissolve in water because water and
                oil don&apos;t mix. It softens with heat and firms up as it cools — useful on a road, but a
                problem once it&apos;s stuck to your hands, your car, or your floor. The only reliable way
                to shift it is to dissolve it with an oil-based product or a solvent, or soften and chip it
                away mechanically.
              </p>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Two mistakes cause most of the damage people report: scrubbing dry bitumen with force,
                which drags grit across paint or masonry and scratches it, and reaching for a harsh solvent
                like gasoline or acetone before checking if something milder will do the job.
              </p>
              <p className="text-white/80 leading-relaxed text-base">
                The thermoplastic behaviour that makes bitumen so effective in{" "}
                <Link
                  href="/blog/asphalt-vs-bitumen"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors font-medium"
                >
                  asphalt road construction
                </Link>{" "}
                is also what makes cold, hardened bitumen so stubborn once it has bonded to a porous
                surface.
              </p>
            </section>

            {/* ── Skin ── */}
            <section id="skin" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                How to Remove Bitumen from Skin
              </h2>

              {/* Image 2 — Skin section, before removal steps */}
              <SectionImage
                src="/remove-cold-bitumen-from-skin.webp"
                alt="Removing cold dried bitumen from skin safely using vegetable oil — safe step by step method"
                caption="Vegetable oil and butter outperform petroleum jelly for safe bitumen removal from unbroken skin"
              />

              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Bitumen on skin falls into two very different situations, and mixing them up is dangerous.
              </p>

              <div className="mb-8 bg-gradient-to-br from-emerald-500/10 to-teal-600/10 border border-emerald-400/20 rounded-2xl p-6">
                <h3 className="text-xl font-black text-emerald-300 mb-3">
                  Cold, Dried Bitumen on Unbroken Skin
                </h3>
                <p className="text-white/80 leading-relaxed mb-4 text-base">
                  Cold, dried bitumen on unbroken skin is a cleaning task. Research comparing removal
                  methods found vegetable oils — including olive oil and sunflower oil — work better than
                  petroleum jelly for dissolving bitumen without irritating the skin. Butter has also been
                  used successfully in clinical case reports for the same reason: it&apos;s non-toxic and
                  melts at a low temperature, letting it work into the residue.
                </p>
                <ol className="space-y-3">
                  {[
                    "Apply a generous amount of vegetable oil, olive oil, or softened butter directly to the spot",
                    "Let it sit for several minutes so the oil can soften the bitumen",
                    "Gently wipe with a soft cloth — don't scrub",
                    "Repeat if residue remains, then wash with mild soap and water",
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/80 text-base">
                      <span className="mt-0.5 w-6 h-6 rounded-full bg-emerald-500/30 border border-emerald-400/40 text-emerald-300 text-xs font-bold flex items-center justify-center shrink-0">
                        {i + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mb-8 bg-gradient-to-br from-red-500/10 to-orange-600/10 border border-red-400/20 rounded-2xl p-5">
                <h3 className="text-base font-black text-red-300 mb-2 flex items-center gap-2">
                  <AlertCircle size={15} />
                  What to Avoid on Skin
                </h3>
                <p className="text-white/80 leading-relaxed text-base">
                  Avoid gasoline, kerosene, paint thinner, or acetone on skin. These strip natural oils,
                  irritate tissue, and add a fire risk for no real benefit over a kitchen oil.
                </p>
              </div>

              <div className="bg-gradient-to-br from-red-600/15 to-red-700/10 border border-red-400/30 rounded-2xl p-6">
                <h3 className="text-xl font-black text-red-300 mb-3 flex items-center gap-2">
                  <AlertCircle size={18} />
                  Hot, Fresh Bitumen Burns — Medical Emergency
                </h3>
                <p className="text-white/80 leading-relaxed mb-3 text-base">
                  Hot, fresh bitumen that has burned the skin is a medical emergency, not a stain.{" "}
                  <strong className="text-white">Do not pull off adhered bitumen</strong> — this can tear
                  the burned skin underneath. Do not apply ice, solvent, or oil to a burn.
                </p>
                <p className="text-white/80 leading-relaxed text-base">
                  Keep the person warm, avoid removing anything stuck to broken skin, and get urgent medical
                  attention — especially for burns to the face, hands, joints, or any burn that&apos;s
                  large, deep, blistering, or very painful. The{" "}
                  <a
                    href="https://www.nhs.uk/conditions/burns-and-scalds/treatment/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                  >
                    NHS burn treatment guidelines
                    <ExternalLink size={12} className="inline ml-0.5 mb-0.5" />
                  </a>{" "}
                  are the authoritative reference for this type of injury. Medical teams have used melted
                  butter and vegetable oil to dissolve hardened bitumen from burn injuries under clinical
                  supervision — that is not a first-aid step to attempt at home on a burn.
                </p>
              </div>
            </section>

            {/* ── Clothes ── */}
            <section id="clothes" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                How to Remove Bitumen from Clothes
              </h2>

              {/* Image 3 — Clothes section, before numbered steps */}
              <SectionImage
                src="/remove-bitumen-from-clothes.webp"
                alt="How to remove a bitumen stain from fabric and clothing using vegetable oil and stain remover"
                caption="Cool the bitumen first — brittle residue chips away cleanly without smearing deeper into the fabric"
              />

              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Fabric holds onto bitumen differently than skin does, since the sticky residue works its
                way into fibres rather than sitting on a flat surface.
              </p>
              <ol className="space-y-4 mb-6">
                {[
                  {
                    step: "Cool it down first",
                    desc: "Ice or a spell in the freezer makes bitumen brittle and easier to break away without smearing it further into the weave",
                  },
                  {
                    step: "Scrape off solid material",
                    desc: "Use a dull knife or spoon — work from the outside edge inward to avoid spreading",
                  },
                  {
                    step: "Apply oil to soften the residue",
                    desc: "Vegetable oil, shortening, or petroleum jelly applied to the remaining stain — let it sit for 10 to 20 minutes",
                  },
                  {
                    step: "Blot, don't rub",
                    desc: "Lift the softened residue with a clean cloth — rubbing pushes the stain deeper into the weave",
                  },
                  {
                    step: "Pre-treat then wash as normal",
                    desc: "Apply a standard laundry stain remover or dish soap before washing",
                  },
                ].map(({ step, desc }, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/80 text-base">
                    <span className="mt-0.5 w-6 h-6 rounded-full bg-orange-500/30 border border-orange-400/40 text-orange-300 text-xs font-bold flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <span>
                      <strong className="text-white">{step}</strong> — {desc}
                    </span>
                  </li>
                ))}
              </ol>
              <p className="text-white/80 leading-relaxed text-base">
                Avoid rubbing hot bitumen while it&apos;s still warm — that pushes it deeper into the
                fabric. For delicate materials, test in an inconspicuous spot first.
              </p>
            </section>

            {/* ── Car Paint ── */}
            <section id="car-paint" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                How to Remove Bitumen from Car Paint
              </h2>

              {/* Image 4 — Car Paint section, before step-by-step */}
              <SectionImage
                src="/remove-bitumen-from-car-paint.webp"
                alt="Removing bitumen tar spots from car paint finish using a dedicated tar remover and microfiber cloth"
                caption="Always dissolve bitumen with a dedicated tar remover before reaching for the clay bar — sequence matters"
              />

              <p className="text-white/80 leading-relaxed mb-5 text-base">
                This is one of the most-searched bitumen removal problems, and also where the wrong method
                causes the most expensive damage. Road tar splatter is essentially the same material found
                on a{" "}
                <Link
                  href="/blog/bitumen-driveway-cost-worldwide"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors font-medium"
                >
                  freshly laid bitumen driveway
                </Link>
                {" "}— and it bonds to clear coat just as effectively.
              </p>

              <h3 className="text-xl font-black text-white mb-4">Step-by-Step</h3>
              <ol className="space-y-4 mb-6">
                {[
                  {
                    step: "Wash first",
                    desc: "pH-neutral car shampoo — cleaning a dirty panel before treating the spot risks grinding road grit into the paint",
                  },
                  {
                    step: "Apply tar remover",
                    desc: "A dedicated tar and bug remover, or a citrus or hydrocarbon-based automotive solvent, directly to the spot",
                  },
                  {
                    step: "Dwell for 5–10 minutes",
                    desc: "Allow the solvent time to break down the bitumen before wiping",
                  },
                  {
                    step: "Wipe gently with microfiber",
                    desc: "Reapply and repeat if any residue remains — don't force it",
                  },
                  {
                    step: "Clay bar if needed",
                    desc: "Only after the solvent has done its job — use a lubricated clay bar to lift any remaining embedded particles",
                  },
                  {
                    step: "Rewash and protect",
                    desc: "Remove all solvent residue then apply wax or sealant to restore paint protection",
                  },
                ].map(({ step, desc }, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/80 text-base">
                    <span className="mt-0.5 w-6 h-6 rounded-full bg-teal-500/30 border border-teal-400/40 text-teal-300 text-xs font-bold flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <span>
                      <strong className="text-white">{step}</strong> — {desc}
                    </span>
                  </li>
                ))}
              </ol>
              <div className="bg-gradient-to-br from-red-500/10 to-orange-600/10 border border-red-400/20 rounded-2xl p-5">
                <p className="text-white/80 leading-relaxed text-base">
                  <strong className="text-red-300">What to avoid:</strong> Gasoline, kerosene, and paint
                  thinner dull clear coat and strip wax faster than a proper tar remover. Don&apos;t clay
                  first either — large, sticky tar deposits can drag across the finish and cause fine
                  scratches before the solvent has dissolved the bulk of the residue.
                </p>
              </div>
            </section>

            {/* ── Concrete ── */}
            <section id="concrete" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                How to Remove Bitumen from Concrete and Driveways
              </h2>

              {/* Image 5 — Before Concrete and Driveways section */}
              <SectionImage
                src="/remove-bitumen-from-concrete-brick-metal.webp"
                alt="Removing bitumen from concrete driveway, brick wall, and bare metal using solvent and a scraper"
                caption="Cold weather is your ally for concrete — brittle tar chips away cleanly with a plastic scraper before any solvent is needed"
              />

              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Concrete&apos;s porous surface makes bitumen removal a two-part job: get the solid material
                off, then deal with the oily stain it leaves behind. The same porosity that makes{" "}
                <Link
                  href="/blog/asphalt-thickness"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors font-medium"
                >
                  asphalt pavement design
                </Link>{" "}
                critical also determines how deeply bitumen soaks into an unprotected concrete or driveway
                surface.
              </p>
              <ol className="space-y-4 mb-6">
                {[
                  {
                    step: "Scrape off solid material",
                    desc: "Plastic or stiff putty knife — cold weather helps since bitumen turns brittle and chips away more cleanly",
                  },
                  {
                    step: "Apply solvent",
                    desc: "Dedicated asphalt and tar remover, mineral spirits, or WD-40 directly onto the remaining stain",
                  },
                  {
                    step: "Dwell for several minutes",
                    desc: "Give the solvent time to soften residue before attempting to lift it",
                  },
                  {
                    step: "Blot — never wipe back and forth",
                    desc: "Back-and-forth wiping pushes dissolved bitumen deeper into the porous surface",
                  },
                  {
                    step: "Degrease and rinse",
                    desc: "Degreasing dish soap and water scrub to lift the oily residue left behind",
                  },
                  {
                    step: "Pressure wash if available",
                    desc: "Hot water pressure washing speeds up the process significantly for large or stubborn stains",
                  },
                ].map(({ step, desc }, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/80 text-base">
                    <span className="mt-0.5 w-6 h-6 rounded-full bg-orange-500/30 border border-orange-400/40 text-orange-300 text-xs font-bold flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <span>
                      <strong className="text-white">{step}</strong> — {desc}
                    </span>
                  </li>
                ))}
              </ol>
              <p className="text-white/80 leading-relaxed text-base">
                A concrete sealer applied after cleaning prevents future stains from soaking in as deeply —
                sealed concrete is far less porous than bare concrete.
              </p>
            </section>

            {/* ── Brick ── */}
            <section id="brick" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                How to Remove Bitumen from Brick
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Brick is even more porous than concrete, which means the same aggressive scrubbing that
                damages concrete will damage brick faster.
              </p>
              <ul className="space-y-4 mb-6">
                {[
                  {
                    tip: "Let it harden first",
                    desc: "If tar is still warm, let it cool — brittle bitumen chips away more cleanly than soft, sticky material",
                  },
                  {
                    tip: "Soak with solvent first — don't immediately scrub",
                    desc: "Press a solvent-soaked cloth against the stain for at least 5 minutes before any agitation",
                  },
                  {
                    tip: "Use petroleum-based solvent or masonry degreaser",
                    desc: "These dissolve the residue without damaging the brick face the way acid-based products can",
                  },
                  {
                    tip: "Lift with a soft brush",
                    desc: "Work gently to avoid grinding the residue deeper into the brick texture, then rinse thoroughly",
                  },
                  {
                    tip: "Never use a metal scraper on brick",
                    desc: "Metal tools chip and gouge brick permanently — once that surface damage occurs it cannot be reversed",
                  },
                ].map(({ tip, desc }, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/80 text-base">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-teal-400 shrink-0" />
                    <span>
                      <strong className="text-white">{tip}</strong> — {desc}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-white/80 leading-relaxed text-base">
                A yearly masonry sealer makes future bitumen spills far easier to clean — sealed brick
                doesn&apos;t absorb the oily component of the stain the way bare brick does.
              </p>
            </section>

            {/* ── Metal ── */}
            <section id="metal" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                How to Remove Bitumen from Metal
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Metal is more forgiving than wood, brick, or car paint — most bare metal tolerates stronger
                solvents without lasting damage. The complication is usually what&apos;s attached to the
                metal, not the metal itself.
              </p>
              <ol className="space-y-4 mb-6">
                {[
                  "Scrape off as much solid bitumen as possible with a metal or plastic scraper, whichever suits the surface",
                  "Apply a bitumen-suited solvent — asphalt remover, mineral spirits, or kerosene — to the remaining residue",
                  "Wipe clean with a rag, repeating as needed until the surface is clear",
                  "Rinse and dry thoroughly to remove solvent residue and prevent any corrosion risk",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/80 text-base">
                    <span className="mt-0.5 w-6 h-6 rounded-full bg-orange-500/30 border border-orange-400/40 text-orange-300 text-xs font-bold flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
              <div className="bg-gradient-to-br from-amber-500/10 to-orange-600/10 border border-amber-400/20 rounded-2xl p-5">
                <p className="text-white/80 leading-relaxed text-base">
                  <strong className="text-amber-300">Caution near adjacent materials:</strong> A solvent
                  strong enough to cut bitumen can soften paint, degrade rubber seals, or damage plastic
                  parts nearby. Test on a hidden section first and keep the solvent away from anything that
                  is not bare, unpainted metal.
                </p>
              </div>
            </section>

            {/* ── Wood and Parquet ── */}
            <section id="wood" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                How to Remove Bitumen from Wood and Parquet Flooring
              </h2>

              {/* Image 6 — Wood and Parquet section, before methods */}
              <SectionImage
                src="/remove-bitumen-from-wood-parquet.webp"
                alt="Removing thick bitumen adhesive from reclaimed wood parquet flooring blocks using a heat gun and flat scraper"
                caption="Reclaimed parquet often has heavy bitumen adhesive bonded to the back — heat or cold plus mechanical scraping are the main options"
              />

              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Wood, especially reclaimed parquet block flooring historically glued down with hot bitumen,
                is one of the most labour-intensive removal jobs there is. The adhesive strength that made
                bitumen so effective as a construction binder — covered in depth in our{" "}
                <Link
                  href="/blog/what-is-bitumen"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors font-medium"
                >
                  bitumen properties guide
                </Link>{" "}
                — is precisely what makes it so difficult to remove from porous wood grain.
              </p>

              <h3 className="text-xl font-black text-white mb-4">Two Main Approaches</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <h4 className="text-base font-black text-orange-300 mb-2">🔥 Heat Method</h4>
                  <p className="text-white/75 text-sm leading-relaxed">
                    Warm the bitumen gently with a heat gun, then scrape with a flat scraper or shave hook
                    while it&apos;s still soft. Keep heat moderate — too much scorches the wood or makes
                    the bitumen runny and harder to control.
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <h4 className="text-base font-black text-teal-300 mb-2">❄️ Cold Method</h4>
                  <p className="text-white/75 text-sm leading-relaxed">
                    Freeze small blocks or use dry ice on larger areas to make the bitumen brittle enough to
                    chip off cleanly. Avoids fumes and mess, though it works best on thinner layers.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-red-500/10 to-orange-600/10 border border-red-400/20 rounded-2xl p-5">
                <p className="text-white/80 leading-relaxed text-base">
                  <strong className="text-red-300">Avoid soaking wood in solvent.</strong> Wood absorbs
                  liquid along the grain — oversaturating it risks swelling, warping, or finish damage. For
                  a large flooring job, a specialist bitumen removal service is often more practical than a
                  full DIY approach across dozens of square metres.
                </p>
              </div>
            </section>

            {/* ── Shoes ── */}
            <section id="shoes" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                How to Remove Bitumen from Shoes
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Shoes combine several challenges at once: rubber soles, fabric or leather uppers, and often
                a mix of textures in one item.
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  {
                    tip: "Cool and harden first",
                    desc: "Let bitumen cool — freezing the shoe briefly makes it brittle and easier to chip away",
                  },
                  {
                    tip: "Scrape carefully around stitching",
                    desc: "Use a dull tool and work slowly to avoid pulling seams apart",
                  },
                  {
                    tip: "Rubber soles tolerate stronger solvents",
                    desc: "Mineral spirits or a dedicated adhesive remover works well on rubber without the damage risk present on fabric or leather",
                  },
                  {
                    tip: "Fabric or leather uppers need a gentler hand",
                    desc: "Vegetable oil or a leather-safe cleaner, blotting rather than rubbing — the same approach as clothing removal",
                  },
                  {
                    tip: "Air dry away from heat",
                    desc: "Clean off solvent residue thoroughly and allow natural drying to avoid material stress",
                  },
                ].map(({ tip, desc }, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/80 text-base">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-orange-400 shrink-0" />
                    <span>
                      <strong className="text-white">{tip}</strong> — {desc}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-white/80 leading-relaxed text-base">
                Test any solvent on a hidden section first. A product safe for rubber soles can discolor or
                damage leather and synthetic uppers.
              </p>
            </section>

            {/* ── Bitumen Paint ── */}
            <section id="paint" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                How to Remove Bitumen Paint
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Bitumen paint is a thinned, ready-to-use coating that hasn&apos;t fully cured into a
                hardened film in most cases — making it easier to remove than solid bitumen. The{" "}
                <a
                  href="https://www.asphaltinstitute.org/engineering/pavement-design/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                >
                  Asphalt Institute pavement design guidance
                  <ExternalLink size={12} className="inline ml-0.5 mb-0.5" />
                </a>{" "}
                describes the same binder chemistry at full concentration — bitumen paint is simply a
                diluted, brush-applied form of the same base material, which is why standard solvents work
                on it effectively.
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  {
                    point: "Metal or masonry",
                    desc: "A paint stripper formulated for bituminous coatings, or mineral spirits, softens it for scraping",
                  },
                  {
                    point: "Delicate surfaces",
                    desc: "Start with warm soapy water for very light residue, moving up to a solvent only if needed",
                  },
                  {
                    point: "Multiple coats may need multiple passes",
                    desc: "Several rounds of solvent application and scraping are often required for thick or layered coatings",
                  },
                  {
                    point: "Ventilation is essential",
                    desc: "Fumes from bituminous paint strippers are stronger than small stain removal — always work in a well-ventilated area",
                  },
                ].map(({ point, desc }, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/80 text-base">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-teal-400 shrink-0" />
                    <span>
                      <strong className="text-white">{point}</strong> — {desc}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* ── Comparison Table ── */}
            <section id="comparison" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                Which Method Works Best on Which Surface
              </h2>
              <p className="text-white/80 leading-relaxed mb-6 text-base">
                Every surface has a different best first move. This table summarises the safest starting
                point and the most common mistakes for each.
              </p>
              <InfoTable
                headers={["Surface", "Best First Approach", "Avoid"]}
                rows={[
                  [
                    "Skin (cold, unbroken)",
                    "Vegetable oil or butter",
                    "Gasoline, acetone, aggressive scrubbing",
                  ],
                  [
                    "Skin (hot burn)",
                    "Medical attention — no home removal",
                    "Ice, solvent, pulling off adhered material",
                  ],
                  ["Clothes", "Cool, scrape, then oil", "Rubbing while hot"],
                  [
                    "Car paint",
                    "Dedicated tar remover, then clay bar",
                    "Gasoline, clay before solvent",
                  ],
                  [
                    "Concrete",
                    "Scrape, then solvent, then degrease",
                    "Wiping back and forth",
                  ],
                  ["Brick", "Gentle solvent soak, soft brush", "Metal scrapers"],
                  [
                    "Metal",
                    "Scraper plus solvent",
                    "Solvent near rubber or plastic components",
                  ],
                  ["Wood / parquet", "Heat or cold plus scraper", "Soaking in solvent"],
                  [
                    "Shoes",
                    "Cool, scrape, surface-appropriate solvent",
                    "Same solvent on rubber and leather without testing",
                  ],
                  [
                    "Bitumen paint",
                    "Purpose-made stripper or mineral spirits",
                    "Working without ventilation",
                  ],
                ]}
              />
            </section>

            {/* ── Conclusion ── */}
            <section id="conclusion" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Conclusion
              </h2>
              <div className="bg-gradient-to-br from-teal-500/15 via-blue-600/10 to-purple-600/10 border border-white/15 rounded-2xl p-6 md:p-8">
                <p className="text-white/85 leading-relaxed mb-4 text-base">
                  Bitumen removal comes down to matching the method to the surface: oil for skin and fabric,
                  solvent for hard surfaces like car paint and concrete, and heat or cold plus mechanical
                  scraping for wood and parquet. The two things that cause the most damage across every
                  surface are scrubbing dry residue with force and reaching for a harsh solvent before
                  trying a milder one. Treat hot, fresh bitumen burns as a medical emergency, and treat
                  everything else as a patience-first cleaning job.
                </p>
                <p className="text-white/85 leading-relaxed mb-4 text-base">
                  Understanding why bitumen bonds so aggressively starts with understanding what it actually
                  is. Our{" "}
                  <Link
                    href="/blog/what-is-bitumen"
                    className="text-orange-400 hover:text-orange-300 font-semibold underline underline-offset-2 transition-colors"
                  >
                    complete bitumen guide
                  </Link>{" "}
                  covers the hydrocarbon chemistry and thermoplastic behaviour that make it both useful and
                  stubborn. If you are evaluating bitumen-based products for roofing or waterproofing, our{" "}
                  <Link
                    href="/blog/modified-bitumen-roofing"
                    className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors font-medium"
                  >
                    modified bitumen roofing guide
                  </Link>{" "}
                  is a useful next step.
                </p>
                <p className="text-white/85 leading-relaxed text-base">
                  If you&apos;re working with bitumen on a paving project and need to plan quantities, our
                  free{" "}
                  <Link
                    href="/"
                    className="text-orange-400 hover:text-orange-300 font-semibold underline underline-offset-2 transition-colors"
                  >
                    Bitumen Calculator
                  </Link>{" "}
                  gives accurate estimates for mix weight, binder content, and aggregate requirements for
                  any road or driveway project.
                </p>
              </div>
            </section>

            {/* ── FAQ ── */}
            <section id="faq" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-6 border-l-4 border-orange-400 pl-4">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {[
                  {
                    q: "What dissolves bitumen best?",
                    a: "Oil-based products work on skin and fabric: vegetable oil, olive oil, and butter are commonly used and researched for skin safety. For hard surfaces like concrete, metal, and car paint, a dedicated tar remover, mineral spirits, or kerosene dissolves it more effectively.",
                  },
                  {
                    q: "Can I use WD-40 to remove bitumen?",
                    a: "Yes, WD-40 is commonly used to soften bitumen and tar on car paint and concrete. Spray it on, let it dwell for several minutes, then wipe with a clean cloth.",
                  },
                  {
                    q: "Does vinegar remove bitumen?",
                    a: "Not effectively. Bitumen is a hydrocarbon, and vinegar is water-based and mildly acidic, which doesn't break down oil-based residue the way a solvent or oil does.",
                  },
                  {
                    q: "Is it safe to use gasoline to remove bitumen?",
                    a: "Not on skin or fabric. Gasoline dissolves bitumen but irritates skin, damages some fabrics, and carries a real fire risk. It's sometimes used on tools or bare metal, but safer alternatives exist for nearly every surface.",
                  },
                  {
                    q: "How do you remove bitumen from a car without damaging the paint?",
                    a: "Use a dedicated tar and bug remover first, let it dwell, then wipe gently. Follow with a clay bar only if residue remains, then wash and reapply wax or sealant.",
                  },
                  {
                    q: "Why does bitumen stick so hard once it's dry?",
                    a: "Bitumen is made of heavy hydrocarbons that harden as they cool and cure. Once fully dried, the material bonds tightly to porous surfaces like concrete and brick, which is why it needs a solvent or mechanical softening rather than washing it away with water.",
                  },
                  {
                    q: "Can hot bitumen burns be treated with butter at home?",
                    a: "No. While clinical studies have used butter and vegetable oil to remove hardened bitumen from burn wounds, this was done under medical supervision as part of treatment. A hot bitumen burn needs urgent medical attention first, not a home remedy.",
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

          {/* ── SIDEBAR ── */}
          <aside className="hidden xl:block w-72 shrink-0 sticky top-24 self-start space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className="text-white font-black text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <BookOpen size={13} className="text-orange-400" />
                Related Articles
              </div>
              <nav className="space-y-3">
                {[
                  {
                    href: "/blog/what-is-bitumen",
                    label: "What Is Bitumen?",
                    sub: "Meaning, uses & chemistry",
                  },
                  {
                    href: "/blog/asphalt-vs-bitumen",
                    label: "Asphalt vs Bitumen",
                    sub: "How they differ",
                  },
                  {
                    href: "/blog/bitumen-driveway-cost-worldwide",
                    label: "Bitumen Driveway Cost",
                    sub: "Worldwide 2026 prices",
                  },
                  {
                    href: "/blog/modified-bitumen-roofing",
                    label: "Modified Bitumen Roofing",
                    sub: "Complete flat roof guide",
                  },
                  {
                    href: "/blog/cold-mix-bitumen",
                    label: "Cold Mix Bitumen",
                    sub: "Uses & limitations",
                  },
                  {
                    href: "/blog/bitumen-grades-explained",
                    label: "Bitumen Grades Explained",
                    sub: "Penetration, VG, PG",
                  },
                ].map(({ href, label, sub }) => (
                  <Link
                    key={href}
                    href={href}
                    className="block group p-3 rounded-xl hover:bg-white/5 transition-colors"
                  >
                    <span className="block text-white/80 group-hover:text-teal-400 font-semibold text-sm transition-colors leading-snug">
                      {label}
                    </span>
                    <span className="block text-white/40 text-xs mt-0.5">{sub}</span>
                  </Link>
                ))}
              </nav>
            </div>

            <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-orange-400/20 rounded-2xl p-5 text-center">
              <p className="text-white font-black text-sm mb-2">Need a Bitumen Estimate?</p>
              <p className="text-white/60 text-xs mb-4 leading-relaxed">
                Calculate bitumen quantity, mix weight, and aggregate for any paving project.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white px-4 py-2.5 rounded-full font-bold text-xs transition-all"
              >
                Open Calculator
                <ArrowRight size={13} />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
