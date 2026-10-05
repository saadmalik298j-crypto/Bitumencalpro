import AuthorBio from "../../components/AuthorBio";
// app/blog/how-to-remove-oil-stains-asphalt-driveway/page.tsx
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
  AlertTriangle,
  XCircle,
  ShieldAlert,
  Droplets,
} from "lucide-react";

export const metadata: Metadata = {
  title: "How to Remove Oil Stains from an Asphalt Driveway",
  description:
    "Learn how to remove fresh and dried oil stains from asphalt driveways safely without damaging the bitumen binder. Step-by-step DIY cleaning guide and products to avoid.",
  keywords: [
    "remove oil stains from asphalt driveway",
    "clean oil off asphalt",
    "asphalt driveway oil stain remover",
    "baking soda oil stain asphalt",
    "degreaser for asphalt driveway",
    "oil spill on asphalt",
    "pressure washer asphalt oil stain",
    "get motor oil out of driveway",
  ],
  alternates: { canonical: "https://bitumencalcpro.com/blog/how-to-remove-oil-stains-asphalt-driveway" },
  openGraph: {
    title: "How to Remove Oil Stains from an Asphalt Driveway | BitumenCalcPro",
    description:
      "Step-by-step guide to lifting fresh spills and set-in oil stains from asphalt pavement using absorbents, dish soap, and asphalt-safe degreasers.",
    url: "https://bitumencalcpro.com/blog/how-to-remove-oil-stains-asphalt-driveway",
    siteName: "BitumenCalcPro",
    type: "article",
    publishedTime: "2026-10-01T00:00:00.000Z",
    authors: ["BitumenCalcPro"],
    images: [
      {
        url: "/how-to-remove-oil-stains-asphalt-driveway.webp",
        width: 1200,
        height: 675,
        alt: "How to remove oil stains from an asphalt driveway — professional cleaning guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Remove Oil Stains from an Asphalt Driveway",
    description:
      "Lift fresh and dried motor oil stains from your asphalt driveway safely. Step-by-step guide with recommended cleaning products and methods to avoid.",
    images: ["/how-to-remove-oil-stains-asphalt-driveway.webp"],
  },
  robots: {
    "max-image-preview": "large",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Remove Oil Stains from an Asphalt Driveway",
  description:
    "To remove oil stains from asphalt, start with an absorbent for fresh spills, then scrub with dish soap. For dried stains, use a dedicated asphalt-safe degreaser.",
  image: "https://bitumencalcpro.com/how-to-remove-oil-stains-asphalt-driveway.webp",
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
    "@id": "https://bitumencalcpro.com/blog/how-to-remove-oil-stains-asphalt-driveway",
  },
  keywords:
    "remove oil stains from asphalt driveway, clean oil off asphalt, asphalt driveway oil stain remover, baking soda oil stain asphalt",
  articleSection: "Asphalt Maintenance",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the best way to get oil stains out of an asphalt driveway?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For fresh spills, use an absorbent like cat litter or baking soda first, then follow with dish soap and a stiff brush. For older stains, a dedicated asphalt-safe degreaser works better than general household products.",
      },
    },
    {
      "@type": "Question",
      name: "Does WD-40 remove oil stains from asphalt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It can help loosen light residue, but it's not formulated for this job and generally underperforms compared to a dedicated degreaser on older or heavier stains.",
      },
    },
    {
      "@type": "Question",
      name: "Is it safe to use gasoline to clean oil off a driveway?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Gasoline dissolves oil, but it also dissolves asphalt's own petroleum-based binder, which can soften or damage the surface where it's applied.",
      },
    },
    {
      "@type": "Question",
      name: "Can baking soda remove oil stains from asphalt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, for fresh spills. Spread a thick layer over the stain, let it absorb the oil for at least 30 minutes, then sweep and scrub the remaining residue with dish soap.",
      },
    },
    {
      "@type": "Question",
      name: "Will a pressure washer remove oil stains from a driveway?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "On its own, not effectively. A pressure washer works best after an absorbent or degreaser has already broken down the oil, helping rinse away the loosened residue.",
      },
    },
    {
      "@type": "Question",
      name: "Why does oil stain asphalt more than concrete?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Asphalt is petroleum-based, so oil shares enough chemistry with the asphalt binder to soften and dissolve into it rather than just sitting on top the way it does on concrete.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get rid of an old oil stain that won't come out?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Try repeated applications of a dedicated degreaser first. If a faint shadow remains, sealcoating the full driveway usually restores a uniform appearance better than trying to spot-treat the stain further.",
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
      name: "How to Remove Oil Stains from an Asphalt Driveway",
      item: "https://bitumencalcpro.com/blog/how-to-remove-oil-stains-asphalt-driveway",
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

export default function HowToRemoveOilStainsAsphaltPage() {
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
            <span className="text-white/90 font-medium">Oil Stain Removal Guide</span>
          </nav>

          {/* Category badge */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="inline-flex items-center gap-1.5 bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
              <BookOpen size={12} />
              Asphalt Maintenance &amp; Care
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-6 max-w-4xl">
            How to Remove Oil Stains from an Asphalt Driveway
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
              7 min read
            </span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="text-white/50">By BitumenCalcPro</span>
          </div>
        </div>
      </div>

      {/* ── HERO IMAGE — Image 1: below H1, before Quick Answer ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionImage
          src="/how-to-remove-oil-stains-asphalt-driveway.webp"
          alt="How to remove oil stains from an asphalt driveway — professional driveway cleaning demonstration"
          caption="Matching your cleaning method to the age of the oil spill is critical for preserving asphalt binder integrity"
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
                To remove oil stains from asphalt, start with an absorbent like cat litter or baking soda for fresh spills, then scrub with dish soap and a stiff brush. For dried, older stains, use a dedicated asphalt-safe degreaser rather than a harsh solvent, since gasoline and strong chemical strippers can soften the asphalt binder itself. Rinse thoroughly, let the area dry, and reseal the driveway once the stain is gone.
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
                  { id: "why-oil-stains", label: "Why Oil Stains Asphalt So Easily" },
                  { id: "fresh-oil-stain", label: "How to Remove a Fresh Oil Stain" },
                  { id: "older-set-in-stain", label: "How to Clean an Older, Set-In Oil Stain" },
                  { id: "what-to-avoid", label: "What to Avoid" },
                  { id: "pressure-washer", label: "Using a Pressure Washer" },
                  { id: "stubborn-stains", label: "When the Stain Won't Fully Come Out" },
                  { id: "prevention", label: "Preventing Future Oil Stains" },
                  { id: "conclusion", label: "Conclusion" },
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

            {/* Intro Paragraphs */}
            <section className="mb-12">
              <p className="text-white/85 leading-relaxed mb-4 text-base">
                An oil stain on an asphalt driveway is a common problem with a straightforward fix, as long as you match the method to how fresh or old the stain is. Asphalt&apos;s biggest weakness here is also its biggest clue: it&apos;s made from petroleum, so oil doesn&apos;t just sit on top of it; it can soften the binder underneath if left untreated long enough. That&apos;s why the right first move matters more than the exact product you reach for.
              </p>
              <p className="text-white/85 leading-relaxed mb-4 text-base">
                This guide covers what to do for a fresh spill, what works on an old, dried stain, and which products to avoid entirely. Whether you are performing routine driveway care or using our{" "}
                <Link
                  href="/"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors font-medium"
                >
                  Bitumen &amp; Asphalt Calculator
                </Link>{" "}
                to estimate materials for an upcoming resurfacing project, maintaining surface cleanliness protects your pavement investment.
              </p>
            </section>

            {/* Section 1: Why Oil Stains Asphalt So Easily */}
            <section id="why-oil-stains" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                Why Oil Stains Asphalt So Easily
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Asphalt driveways are made of crushed stone and sand held together with bitumen, a thick, black petroleum binder. Motor oil and other petroleum products share enough chemistry with that binder that they can dissolve into it rather than just sitting on the surface the way they would on concrete.
              </p>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                This explains two things. First, why asphalt stains darker and faster than concrete does (as detailed in our guide on{" "}
                <Link
                  href="/blog/asphalt-vs-concrete"
                  className="text-teal-400 hover:text-orange-300 underline underline-offset-2 transition-colors font-medium"
                >
                  asphalt vs concrete pavement differences
                </Link>
                ). Second, why using the wrong cleaning product, especially a strong solvent, can make the problem worse by softening the asphalt around the stain instead of just lifting the oil off.
              </p>
              <div className="bg-gradient-to-br from-teal-500/15 to-teal-600/10 border border-teal-400/25 rounded-2xl p-5 mb-5">
                <p className="text-white/85 leading-relaxed text-sm">
                  <strong className="text-teal-300">Technical Note:</strong> According to technical guidance from the{" "}
                  <a
                    href="https://www.asphaltinstitute.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                  >
                    Asphalt Institute
                    <ExternalLink size={12} className="inline ml-0.5 mb-0.5" />
                  </a>
                  , refined petroleum products like motor oil, diesel, and gasoline act as active fluxing solvents on bituminous binders, lowering bitumen viscosity and causing aggregate debonding.
                </p>
              </div>
            </section>

            {/* Section 2: How to Remove a Fresh Oil Stain */}
            <section id="fresh-oil-stain" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                How to Remove a Fresh Oil Stain
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Speed matters most here. Oil that hasn&apos;t had time to soak in is far easier to lift than oil that&apos;s had days to work into the surface.
              </p>
              <div className="space-y-4 mb-6">
                {[
                  {
                    step: "1",
                    title: "Blot up standing oil",
                    detail: "Blot up any standing oil with a rag or paper towels. Don't wipe it around. Press down and lift.",
                  },
                  {
                    step: "2",
                    title: "Cover with absorbent material",
                    detail: "Cover the spot with an absorbent material. Cat litter, baking soda, and cornstarch all work. Clay-based cat litter tends to be the most effective at pulling oil up out of a porous surface.",
                  },
                  {
                    step: "3",
                    title: "Let it sit",
                    detail: "Let it sit. Give it at least 30 minutes for a small spill, or overnight for anything larger.",
                  },
                  {
                    step: "4",
                    title: "Sweep up and check",
                    detail: "Sweep up the absorbent and check the spot. If a shadow remains, move to the dish soap method below.",
                  },
                ].map(({ step, title, detail }) => (
                  <div
                    key={step}
                    className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-start gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-orange-500/20 text-orange-300 font-bold flex items-center justify-center shrink-0 text-sm border border-orange-400/30">
                      {step}
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-base mb-1">{title}</h3>
                      <p className="text-white/70 text-sm leading-relaxed">{detail}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-white/80 leading-relaxed text-base">
                Catching a spill within the first hour or two is the single biggest factor in how easy the whole cleanup turns out to be. Prompt spill cleanup helps prevent major pavement repair costs, often discussed in our analysis of{" "}
                <Link
                  href="/blog/asphalt-estimation-mistakes"
                  className="text-teal-400 hover:text-orange-300 underline underline-offset-2 transition-colors font-medium"
                >
                  asphalt project estimation mistakes
                </Link>.
              </p>
            </section>

            {/* ── IMAGE 2: Before "How to Clean an Older, Set-In Oil Stain" ── */}
            <SectionImage
              src="/fresh-old-oil-stains-asphalt-cleaning.webp"
              alt="Fresh oil spill versus old set-in stain cleaning on an asphalt driveway"
              caption="Fresh spills respond quickly to absorbent clay powders, whereas older set-in stains require dedicated emulsifying degreasers"
            />

            {/* Section 3: How to Clean an Older, Set-In Oil Stain */}
            <section id="older-set-in-stain" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                How to Clean an Older, Set-In Oil Stain
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Dried stains need more than absorption. The oil has already worked into the surface, so the next step is breaking it down and lifting it out.
              </p>
              <div className="border-l-2 border-orange-400/30 pl-4 space-y-3 mb-6 text-white/80 text-base">
                <p>
                  <strong className="text-white">1. Apply dish soap or laundry detergent directly to the stain.</strong> A thick, concentrated application works better than diluting it first.
                </p>
                <p>
                  <strong className="text-white">2. Scrub with a stiff-bristled brush,</strong> working in small circles to force the soap into the stain rather than just across the surface.
                </p>
                <p>
                  <strong className="text-white">3. Let it sit for 30 to 60 minutes,</strong> especially on older stains.
                </p>
                <p>
                  <strong className="text-white">4. Rinse with hot water if you have access to it,</strong> since heat helps break down oil more effectively than cold water alone.
                </p>
                <p>
                  <strong className="text-white">5. Repeat as needed.</strong> Older stains often need 2 or 3 rounds before they fully lift.
                </p>
              </div>
              <p className="text-white/80 leading-relaxed text-base">
                For stains that don&apos;t respond to dish soap, a dedicated asphalt-safe degreaser is the next step. Products made specifically for oil and grease removal on pavement, rather than general-purpose cleaners, are formulated to lift petroleum residue without attacking the asphalt itself. Apply according to the product&apos;s instructions, since concentration and dwell time vary by brand.
              </p>
            </section>

            {/* Section 4: What to Avoid */}
            <section id="what-to-avoid" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                What to Avoid
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                A few common home remedies and products cause more harm than good on asphalt specifically.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <h3 className="text-orange-300 font-bold text-base mb-2 flex items-center gap-2">
                    <XCircle size={16} className="text-orange-400" />
                    Gasoline or Kerosene
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    These dissolve oil effectively, but they also dissolve asphalt&apos;s own binder, leaving the surface soft or damaged where applied.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <h3 className="text-orange-300 font-bold text-base mb-2 flex items-center gap-2">
                    <XCircle size={16} className="text-orange-400" />
                    Strong Solvent Strippers
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Strong solvent-based strippers not labeled safe for asphalt. Many degreasers built for concrete or metal are too aggressive for a petroleum-based surface.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <h3 className="text-orange-300 font-bold text-base mb-2 flex items-center gap-2">
                    <XCircle size={16} className="text-orange-400" />
                    WD-40 as Primary Treatment
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    WD-40 as a primary treatment. It can loosen light residue, but multiple independent product comparisons find it underperforms compared to dedicated degreasers on asphalt specifically, and it&apos;s not formulated for this job.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <h3 className="text-orange-300 font-bold text-base mb-2 flex items-center gap-2">
                    <XCircle size={16} className="text-orange-400" />
                    Wire Brushes &amp; Abrasives
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Scrubbing with a wire brush or anything abrasive enough to score the surface. This can leave permanent marks even after the stain itself is gone.
                  </p>
                </div>
              </div>

              <p className="text-white/80 leading-relaxed text-base">
                If you&apos;re ever unsure whether a product is safe for asphalt, test it on a small, inconspicuous section first and check back after a few minutes for any softening or discoloration. Environmental standards from the{" "}
                <a
                  href="https://www.epa.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                >
                  U.S. EPA
                  <ExternalLink size={12} className="inline ml-0.5 mb-0.5" />
                </a>{" "}
                emphasize using non-toxic, biodegradable pavement cleaners to protect runoff drainage networks.
              </p>
            </section>

            {/* ── IMAGE 3: Before "Using a Pressure Washer" ── */}
            <SectionImage
              src="/pressure-washer-asphalt-oil-stain-cleaning.webp"
              alt="Using a pressure washer with wide fan tip to clean pre-treated oil stain on asphalt"
              caption="Pressure washing is ideal for rinsing pre-treated residue — always use wide fan nozzles to protect aggregate bonding"
            />

            {/* Section 5: Using a Pressure Washer */}
            <section id="pressure-washer" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                Using a Pressure Washer
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                A pressure washer speeds up the rinse step and can help lift loosened residue after an absorbent or degreaser has already broken down the oil, but it&apos;s not a standalone fix. Spraying water at a stain alone, without pretreatment, mostly just moves the oil around rather than removing it.
              </p>
              <p className="text-white/80 leading-relaxed text-base">
                If you use one, start with a wider spray pattern and moderate pressure. A narrow, high-pressure stream held too close can actually etch or damage the asphalt surface, especially on an older or already-weathered driveway.
              </p>
            </section>

            {/* Section 6: When the Stain Won't Fully Come Out */}
            <section id="stubborn-stains" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                When the Stain Won&apos;t Fully Come Out
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Some oil stains, especially large ones that sat for weeks or months before treatment, leave a faint shadow even after thorough cleaning. At that point, a few options remain:
              </p>
              <div className="space-y-3 border-l-2 border-teal-400/30 pl-4 mb-6 text-white/80 text-base">
                <p>
                  <strong className="text-white">1. Live with it.</strong> A faint shadow is cosmetic and doesn&apos;t affect the driveway&apos;s structural condition.
                </p>
                <p>
                  <strong className="text-white">2. Apply an asphalt-safe filler or patch</strong> if the oil has visibly softened or degraded the surface, not just stained it.
                </p>
                <p>
                  <strong className="text-white">3. Sealcoat the entire driveway.</strong> This is often the most effective fix for a stubborn, visible stain, since a fresh coat of sealer restores a uniform black color across the whole surface rather than trying to spot-treat one area.
                </p>
              </div>
              <p className="text-white/80 leading-relaxed text-base">
                Sealcoating after cleaning is worth doing even without a lingering stain. Check our complete{" "}
                <Link
                  href="/blog/asphalt-driveway-sealcoating"
                  className="text-teal-400 hover:text-orange-300 underline underline-offset-2 transition-colors font-medium"
                >
                  asphalt driveway sealcoating guide
                </Link>{" "}
                for details on DIY application, costs, and timing. It protects the surface from future oil and gas spills and restores the deep black color that fades over time from sun exposure.
              </p>
            </section>

            {/* ── IMAGE 4: Before "Preventing Future Oil Stains" ── */}
            <SectionImage
              src="/asphalt-driveway-oil-stain-sealcoating.webp"
              alt="Protective sealcoat layer on asphalt driveway shielding pavement from oil spills"
              caption="A fresh coat of quality sealer protects against UV oxidation and prevents petroleum fluids from penetrating deep into the asphalt binder"
            />

            {/* Section 7: Preventing Future Oil Stains */}
            <section id="prevention" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                Preventing Future Oil Stains
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                A few habits make the next spill far easier to deal with, or prevent it entirely:
              </p>
              <div className="border-l-2 border-orange-400/30 pl-4 space-y-3 mb-6 text-white/80 text-base">
                <p>
                  <strong className="text-white">Check your vehicle for leaks.</strong> A slow, recurring drip usually means a gasket or seal needs attention, and catching it early saves repeated driveway cleanups.
                </p>
                <p>
                  <strong className="text-white">Keep an oil-absorbent mat or a sheet of cardboard</strong> under a known leak until you fix the vehicle issue.
                </p>
                <p>
                  <strong className="text-white">Reseal the driveway every 2 to 3 years.</strong> A properly sealed surface resists oil penetration far better than bare, unsealed asphalt. Regular maintenance keeps long-term replacement costs down as outlined in our{" "}
                  <Link
                    href="/blog/bitumen-driveway-cost-worldwide"
                    className="text-teal-400 hover:text-orange-300 underline underline-offset-2 transition-colors font-medium"
                  >
                    driveway paving cost guide
                  </Link>.
                </p>
                <p>
                  <strong className="text-white">Clean spills immediately rather than waiting.</strong> The difference between a 10-minute cleanup and an hours-long scrubbing session usually comes down to how long the oil sat before you treated it.
                </p>
              </div>
            </section>

            {/* Section 8: Conclusion */}
            <section id="conclusion" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Conclusion
              </h2>
              <div className="bg-gradient-to-br from-teal-500/15 via-blue-600/10 to-purple-600/10 border border-white/15 rounded-2xl p-6 md:p-8">
                <p className="text-white/85 leading-relaxed mb-4 text-base">
                  Removing oil stains from asphalt comes down to matching the method to the stain&apos;s age. Fresh spills respond well to absorbents like cat litter or baking soda, followed by a dish soap scrub if needed. Older, dried stains need a dedicated degreaser rather than harsh solvents, since gasoline and strong strippers can damage asphalt&apos;s own petroleum-based binder. Clean spills quickly, skip the gasoline, and reseal the driveway once the stain is gone to protect against the next one.
                </p>
                <p className="text-white/85 leading-relaxed text-base">
                  Planning a driveway maintenance or repaving project? Calculate material quantities and costs accurately with our free{" "}
                  <Link
                    href="/"
                    className="text-teal-400 hover:text-orange-300 font-semibold underline underline-offset-2 transition-colors"
                  >
                    Bitumen Quantity Calculator
                  </Link>.
                </p>
              </div>
            </section>

            {/* Section 9: FAQ */}
            <section id="faq" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-6 border-l-4 border-orange-400 pl-4">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {[
                  {
                    q: "What is the best way to get oil stains out of an asphalt driveway?",
                    a: "For fresh spills, use an absorbent like cat litter or baking soda first, then follow with dish soap and a stiff brush. For older stains, a dedicated asphalt-safe degreaser works better than general household products.",
                  },
                  {
                    q: "Does WD-40 remove oil stains from asphalt?",
                    a: "It can help loosen light residue, but it's not formulated for this job and generally underperforms compared to a dedicated degreaser on older or heavier stains.",
                  },
                  {
                    q: "Is it safe to use gasoline to clean oil off a driveway?",
                    a: "No. Gasoline dissolves oil, but it also dissolves asphalt's own petroleum-based binder, which can soften or damage the surface where it's applied.",
                  },
                  {
                    q: "Can baking soda remove oil stains from asphalt?",
                    a: "Yes, for fresh spills. Spread a thick layer over the stain, let it absorb the oil for at least 30 minutes, then sweep and scrub the remaining residue with dish soap.",
                  },
                  {
                    q: "Will a pressure washer remove oil stains from a driveway?",
                    a: "On its own, not effectively. A pressure washer works best after an absorbent or degreaser has already broken down the oil, helping rinse away the loosened residue.",
                  },
                  {
                    q: "Why does oil stain asphalt more than concrete?",
                    a: "Asphalt is petroleum-based, so oil shares enough chemistry with the asphalt binder to soften and dissolve into it rather than just sitting on top the way it does on concrete.",
                  },
                  {
                    q: "How do I get rid of an old oil stain that won't come out?",
                    a: "Try repeated applications of a dedicated degreaser first. If a faint shadow remains, sealcoating the full driveway usually restores a uniform appearance better than trying to spot-treat the stain further.",
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
