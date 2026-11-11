import AuthorBio from "../../components/AuthorBio";
// app/blog/repair-asphalt-driveway/page.tsx
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
  Wrench,
  AlertTriangle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "How to Repair Asphalt Driveway Cracks & Potholes (DIY Guide)",
  description:
    "Step-by-step DIY guide to fixing asphalt driveway cracks and potholes. Learn which filler, patch, and tools to use — and when to call a pro.",
  keywords: [
    "repair asphalt driveway cracks",
    "asphalt driveway pothole repair",
    "DIY asphalt repair",
    "cold patch asphalt",
    "crack filler asphalt driveway",
    "how to fix cracks in asphalt driveway",
    "asphalt driveway repair guide",
    "patch hole in driveway",
    "asphalt crack repair",
    "pothole repair driveway",
  ],
  alternates: {
    canonical: "https://bitumencalcpro.com/blog/repair-asphalt-driveway",
  },
  openGraph: {
    title:
      "How to Repair Asphalt Driveway Cracks & Potholes (DIY Guide) | BitumenCalcPro",
    description:
      "Fix asphalt driveway cracks and potholes yourself. Step-by-step instructions, the right materials for every damage type, and clear signs to call a pro.",
    url: "https://bitumencalcpro.com/blog/repair-asphalt-driveway",
    siteName: "BitumenCalcPro",
    type: "article",
    publishedTime: "2026-10-11T00:00:00.000Z",
    authors: ["BitumenCalcPro"],
    images: [
      {
        url: "/repair-asphalt-driveway-cracks-potholes.webp",
        width: 1200,
        height: 675,
        alt: "Repaired asphalt driveway showing fixed cracks and patched potholes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "How to Repair Asphalt Driveway Cracks & Potholes (DIY Guide)",
    description:
      "Step-by-step asphalt repair guide — cracks, potholes, right products, compaction, and when to call a pro.",
    images: ["/repair-asphalt-driveway-cracks-potholes.webp"],
  },
  robots: {
    "max-image-preview": "large",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "How to Repair Asphalt Driveway Cracks and Potholes (DIY Guide)",
  description:
    "Step-by-step DIY guide to fixing asphalt driveway cracks and potholes. Learn which filler, patch, and tools to use — and when to call a pro.",
  image:
    "https://bitumencalcpro.com/repair-asphalt-driveway-cracks-potholes.webp",
  datePublished: "2026-10-11T00:00:00.000Z",
  dateModified: "2026-10-11T00:00:00.000Z",
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
    "@id": "https://bitumencalcpro.com/blog/repair-asphalt-driveway",
  },
  keywords:
    "repair asphalt driveway cracks, asphalt driveway pothole repair, DIY asphalt repair, cold patch asphalt, crack filler asphalt driveway, how to fix cracks in asphalt driveway",
  articleSection: "Asphalt & Paving Materials",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I fix cracks in an asphalt driveway?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Clean the crack with a wire brush and blow out the dust, let it dry, then fill it with cold-pour filler. Add foam backer rod first if the crack is wider than about 1/2 inch. Fill slightly above the surface, dust with sand, and let it cure per the label.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best way to patch a hole in a driveway?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Clean the hole, cut the edges square, fill deep holes with crushed gravel, then add cold patch in layers of 2 inches or less. Compact each layer firmly with a tamper, overfill slightly, and compact the final layer. Traffic will press it flush over the next few days.",
      },
    },
    {
      "@type": "Question",
      name: "How wide a crack can I fill myself?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cold-pour filler works on cracks up to about 1/2 inch. Cracks up to 1 inch usually need backer rod plus filler. Wider cracks often point to base movement and may need a patch or professional repair.",
      },
    },
    {
      "@type": "Question",
      name: "Is cold patch a permanent fix for potholes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cold patch is a temporary to semi-permanent repair. A well-compacted patch can last months to a few years. Permanent repairs use hot mix asphalt, and a pothole that keeps returning means the base layer needs work.",
      },
    },
    {
      "@type": "Question",
      name: "Can I repair asphalt in cold weather?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Crack filler needs a dry day above 50°F to bond properly. Many cold patch products are formulated to work in cool weather, but they compact and bond better when conditions are milder.",
      },
    },
    {
      "@type": "Question",
      name: "How long before I can drive on a repaired crack or pothole?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on the product. Thin crack sealer can be ready in a few hours, while wide filled cracks may need 48 to 72 hours. A compacted cold patch usually takes light traffic soon after, and the label gives the exact timing.",
      },
    },
    {
      "@type": "Question",
      name: "Should I repair cracks before sealcoating?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Fill cracks and patch holes first, let the repairs cure, and then apply sealcoat over the whole driveway. Sealing over open cracks traps moisture and accelerates damage.",
      },
    },
    {
      "@type": "Question",
      name: "Why does my pothole keep coming back?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Repeated potholes in the same spot usually mean the gravel base underneath is holding water or has washed out. Dig out the failed area, rebuild and compact the base, and then patch with hot mix for a lasting repair.",
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
      name: "How to Repair Asphalt Driveway Cracks and Potholes",
      item: "https://bitumencalcpro.com/blog/repair-asphalt-driveway",
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

function StepCard({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 mb-6">
      <div className="shrink-0 w-9 h-9 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-black text-sm shadow-[0_0_14px_rgba(249,115,22,0.4)]">
        {number}
      </div>
      <div className="flex-1 pt-1">
        <h3 className="text-white font-bold text-base mb-2">{title}</h3>
        <div className="text-white/75 text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

export default function RepairAsphaltDrivewayPage() {
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
            <Link
              href="/blog"
              className="hover:text-white transition-colors"
            >
              Blog
            </Link>
            <ChevronRight size={13} />
            <span className="text-white/90 font-medium">
              Repair Asphalt Driveway
            </span>
          </nav>

          {/* Category badge */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="inline-flex items-center gap-1.5 bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
              <Wrench size={12} />
              DIY Asphalt Repair
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-6 max-w-4xl">
            How to Repair Asphalt Driveway Cracks and Potholes (DIY Guide)
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-white/50 text-sm mb-10">
            <span className="flex items-center gap-1.5">
              <Calendar size={13} />
              <time dateTime="2026-10-11">October 11, 2026</time>
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

      {/* ── FEATURED IMAGE — Below H1 ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionImage
          src="/repair-asphalt-driveway-cracks-potholes.webp"
          alt="Repaired asphalt driveway showing crack and pothole fixes with cold patch and filler"
          caption="Most asphalt driveway damage — cracks up to 1/2 inch and potholes under a foot wide — is a straightforward afternoon DIY job with the right materials"
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
                To repair asphalt driveway cracks and potholes, clean out the damage, then match the fix to its size. Fill hairline to half-inch cracks with cold-pour filler and use backer rod for wider ones. For potholes, square the edges, fill with cold patch in 2-inch layers, and compact each layer hard. Work on a dry day above 50°F. Call a pro if you see alligator cracking or a soft, washed-out base.
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
                  { id: "identify-damage", label: "Identify the Damage First" },
                  { id: "tools-materials", label: "Tools and Materials" },
                  { id: "pick-right-day", label: "Pick the Right Day" },
                  { id: "fix-cracks", label: "How to Fix Asphalt Cracks" },
                  { id: "repair-potholes", label: "How to Repair Potholes" },
                  { id: "material-comparison", label: "Cold Patch vs Hot Mix vs Crack Filler" },
                  { id: "common-mistakes", label: "Common Mistakes That Ruin a Repair" },
                  { id: "when-pro", label: "When DIY Is Not Enough" },
                  { id: "after-repair", label: "After the Repair: Curing and Sealcoating" },
                  { id: "cost", label: "How Much Does DIY Asphalt Repair Cost" },
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
                Small asphalt damage is one of the few paving problems a homeowner can fix in an afternoon. A bottle of filler, a bag of cold patch, and a hand tamper handle most of what a driveway throws at you. Do-it-yourself asphalt repair works well when you pick the right product for the damage and prepare the hole or crack properly. It fails when someone pours filler into a dirty gap or dumps patch into a hole without compacting it.
              </p>
              <p className="text-white/85 leading-relaxed mb-4 text-base">
                This guide shows how to repair asphalt driveway cracks and potholes step by step, which materials fit which damage, and the signs that a repair needs a professional, not another bag of patch. If you are also planning a full resurfacing or new installation, our{" "}
                <Link
                  href="/asphalt-driveway-cost-calculator"
                  className="text-teal-400 hover:text-orange-300 underline underline-offset-2 transition-colors font-medium"
                >
                  asphalt driveway cost calculator
                </Link>{" "}
                can help you estimate material quantities and project costs before getting quotes.
              </p>
            </section>

            {/* Identify Damage */}
            <section id="identify-damage" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                Identify the Damage First
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                The repair depends on what you are looking at. Walk the driveway and sort each problem into one of these groups.
              </p>

              <InfoTable
                headers={["Damage", "What It Looks Like", "Typical Fix"]}
                rows={[
                  ["Hairline crack", "Thin surface line under 1/8 inch, often branching", "Pourable crack filler or sealcoat"],
                  ["Medium crack", "1/8 to 1/2 inch wide", "Cold-pour or rubberized filler"],
                  ["Wide crack", "Over 1/2 inch wide or deep", "Backer rod plus filler, or cold patch"],
                  ["Pothole", "A bowl-shaped hole where asphalt has broken away", "Cold patch in compacted layers"],
                  ["Alligator cracking", "A web of interlocking cracks in one area — see our guide to identifying all asphalt cracking types", "Professional cut-out repair"],
                  ["Sunken or spongy area", "Dips or soft spots underfoot", "Base repair, usually a pro job"],
                ]}
              />

              {/* Image 4: After damage comparison table */}
              <SectionImage
                src="/asphalt-driveway-crack-and-pothole-types.webp"
                alt="Types of asphalt driveway damage — hairline cracks, medium cracks, wide cracks, potholes, and alligator cracking"
                caption="Matching the repair to the damage type is the single most important decision — using crack filler on a pothole or ignoring alligator cracking will not work"
              />

              <p className="text-white/80 leading-relaxed text-base">
                Before choosing a fix, it helps to accurately diagnose the pattern — our guide on <Link href="/blog/asphalt-cracking-types" className="text-teal-400 hover:text-orange-300 underline underline-offset-2 transition-colors font-medium">identifying asphalt cracking types and causes</Link> walks through the differences between surface cracks and deep structural failures. Filler and sealer do different jobs. Filler fills the void inside a crack and stays flexible as the pavement moves. A sealer or sealcoat covers the surface and suits hairline cracking and spiderweb patterns. Cracks wider than roughly 1/8 inch need filler, not sealer alone. Understanding how{" "}
                <Link
                  href="/blog/cold-mix-bitumen"
                  className="text-teal-400 hover:text-orange-300 underline underline-offset-2 transition-colors font-medium"
                >
                  cold mix bitumen works as a repair material
                </Link>{" "}
                helps you choose the right product for each damage category before you open the first bag.
              </p>
            </section>

            {/* Tools and Materials */}
            <section id="tools-materials" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Tools and Materials
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                You do not need much for a typical repair. Here is what each job calls for.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-6 not-prose">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <h3 className="text-teal-300 font-bold text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Wrench size={14} />
                    For Cracks
                  </h3>
                  <ul className="space-y-2 text-white/75 text-sm">
                    {[
                      "Wire brush and a putty knife or screwdriver for cleaning",
                      "Leaf blower or compressed air",
                      "Cold-pour crack filler (squeeze bottle or jug)",
                      "Foam backer rod for cracks wider than about 1/2 inch",
                      "A squeegee or caulk gun, depending on the product",
                      "Sand for dusting the finished repair",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <h3 className="text-orange-300 font-bold text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Wrench size={14} />
                    For Potholes
                  </h3>
                  <ul className="space-y-2 text-white/75 text-sm">
                    {[
                      "Cold patch asphalt, enough to overfill the hole slightly",
                      "Crushed angular gravel if the hole is deep",
                      "Hand tamper (8 to 10 pounds) or plate compactor for larger patches",
                      "Square-nosed shovel, chisel or hammer, and a broom",
                      "Asphalt emulsion for a tack coat (optional but useful)",
                      "Work gloves and safety glasses",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="text-white/80 leading-relaxed text-base">
                Cold-pour filler is the beginner-friendly option. Hot-pour rubberized filler lasts longer on moving cracks, but it needs a heated kettle, which most people rent or leave to a contractor.
              </p>
            </section>

            {/* Pick Right Day */}
            <section id="pick-right-day" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                Pick the Right Day
              </h2>
              <p className="text-white/80 leading-relaxed mb-4 text-base">
                Crack filler needs a dry crack and mild weather. Aim for a dry day above 50°F, and avoid applying filler when rain is in the forecast within 24 hours. If dew sits in the crack in the morning, wait until the sun dries it or run a hair dryer over the gap for a minute.
              </p>
              <p className="text-white/80 leading-relaxed text-base">
                Cold patch is formulated to stay workable in cooler weather, and bagged products often say they can be used year-round. It still bonds and compacts better in milder conditions, so follow the label.
              </p>
            </section>

            {/* How to Fix Cracks */}
            <section id="fix-cracks" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                How to Fix Asphalt Cracks
              </h2>

              {/* Image 2: Before crack-repair steps */}
              <SectionImage
                src="/asphalt-driveway-crack-filler-application.webp"
                alt="Applying cold-pour crack filler to asphalt driveway crack — cleaning, drying, and filling steps"
                caption="Cold-pour filler applied to a clean, dry crack bonds to both walls and stays flexible as the pavement expands and contracts through seasons"
              />

              <div className="space-y-0 mb-6">
                <StepCard number={1} title="Clean the Crack">
                  Pull out weeds and grass, scrape loose asphalt from the edges, and scrub the crack with a wire brush. Blow out the dust with a leaf blower. Dirt left in the gap keeps filler from reaching the base and bonding to the walls.
                </StepCard>

                <StepCard number={2} title="Dry It">
                  Filler does not adhere to wet crack walls. Let the crack dry fully before you pour. A hair dryer or heat gun speeds this up on damp mornings.
                </StepCard>

                <StepCard number={3} title="Add Backer Rod to Wide Cracks">
                  Cracks wider than about 1/2 inch, or deeper than about 1 inch, swallow a lot of filler and tend to sag. Press closed-cell foam backer rod into the crack until it sits about 1/2 inch below the surface. Pick a rod roughly 25% wider than the crack so it wedges in place. The rod fills the depth and leaves a shallow channel for the filler.
                </StepCard>
              </div>

              {/* Image 5: Under Step 3 of crack repair */}
              <SectionImage
                src="/asphalt-crack-backer-rod-installation.webp"
                alt="Foam backer rod installed in wide asphalt driveway crack before applying crack filler"
                caption="Backer rod prevents filler from sinking into deep cracks, reduces product waste, and gives the repair a consistent depth for long-term flexibility"
              />

              <div className="space-y-0 mb-6">
                <StepCard number={4} title="Apply the Filler">
                  Pour or squeeze the filler slowly into the crack, working in sections on long cracks. Fill slightly above the surface, since the filler settles as it cures. Smooth it with a putty knife or squeegee so water cannot pool on top.
                </StepCard>

                <StepCard number={5} title="Dust and Wait">
                  Sprinkle a thin layer of sand over the wet filler to keep it from sticking to shoes and tires. Curing times vary by product — from a few hours for thin crack sealer to 48 to 72 hours before driving on a wide repair. Check the label.
                </StepCard>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-6">
                <h3 className="text-white font-bold text-base mb-3">
                  Which Filler for Which Crack
                </h3>
                <InfoTable
                  headers={["Crack Width", "Product", "Typical Lifespan"]}
                  rows={[
                    ["Under 1/8 inch", "Liquid sealer or sealcoat", "1 to 3 years"],
                    ["1/8 to 1/2 inch", "Cold-pour or rubberized filler", "About 1 to 3 years"],
                    ["1/2 to 1 inch", "Backer rod plus cold-pour or hot-pour", "Up to 5 years with hot-pour"],
                    ["Over 1 to 2 inches", "Backer rod, hot-pour, and sealcoat, or a patch", "Often needs professional help"],
                  ]}
                />
              </div>

              <p className="text-white/80 leading-relaxed text-base">
                Product sources disagree on the exact width where cold-pour stops working, with limits quoted anywhere from 1/4 to 3/4 inch. Treat 1/2 inch as a safe working limit and read the label on the product you buy.
              </p>
            </section>

            {/* Repair Potholes */}
            <section id="repair-potholes" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                How to Repair Potholes in an Asphalt Driveway
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                A pothole patch lives or dies on preparation and compaction. The steps below also answer how to patch a hole in a driveway of any shape. If you have recurring potholes or want to estimate the material you will need,{" "}
                <Link
                  href="/"
                  className="text-teal-400 hover:text-orange-300 underline underline-offset-2 transition-colors font-medium"
                >
                  the free Bitumen Calculator
                </Link>{" "}
                can help you quantify patch material before you head to the store.
              </p>

              {/* Image 3: Before pothole-repair steps */}
              <SectionImage
                src="/asphalt-driveway-pothole-cold-patch-repair.webp"
                alt="Asphalt driveway pothole repair with cold patch — cleaning, squaring edges, filling, and compacting"
                caption="Potholes need square vertical edges and layer-by-layer compaction — patches placed on rounded, crumbling edges or in a single thick lift almost always fail within weeks"
              />

              <div className="space-y-0">
                <StepCard number={1} title="Clean Out the Hole">
                  Remove loose stones, broken asphalt, dirt, and standing water. Clear vegetation from the edges. A shovel and broom do the job, and a wire brush helps on the walls.
                </StepCard>

                <StepCard number={2} title="Square the Edges">
                  Potholes usually have rounded, crumbling edges. Cut them back to vertical walls with a chisel and hammer, or a saw for a tidy result. Extend the cut about 2 inches into solid asphalt. Patch material thins out and flakes away on sloped edges, but it locks in against a square wall.
                </StepCard>

                <StepCard number={3} title="Fill Deep Holes with Gravel">
                  As a general rule, if the hole is deeper than roughly 2 to 4 inches, fill the bottom with crushed angular gravel (not smooth river rock) and compact it until about 2 to 3 inches of depth remain. Gravel costs less than patch material and gives the patch a firm bed. Check the bag for brand-specific depth guidance.
                </StepCard>

                <StepCard number={4} title="Add a Tack Coat">
                  Brush a thin coat of asphalt emulsion on the walls and floor and let it turn tacky, which takes 5 to 10 minutes. Many bagged patches work without it, but a tack coat improves the bond at the edges, where most patches fail first. This same emulsion chemistry is covered in detail in our{" "}
                  <Link
                    href="/blog/bitumen-emulsion-explained"
                    className="text-teal-400 hover:text-orange-300 underline underline-offset-2 transition-colors font-medium"
                  >
                    bitumen emulsion guide
                  </Link>
                  {" "}if you want to understand why it works.
                </StepCard>

                <StepCard number={5} title="Fill in Layers and Compact">
                  Shovel in cold patch no thicker than 2 inches at a time. Spread it into the corners, then compact the layer with a tamper, striking from the edges toward the center. Thick layers do not compact, and the loose material underneath sinks later. Repeat until the hole is full.
                </StepCard>

                <StepCard number={6} title="Overfill Slightly and Finish">
                  Leave the final layer about 1/2 inch to 1 inch above the surrounding driveway, then compact it down. Traffic will press it flush over the next few days. Driving a car slowly back and forth over the patch gives extra compaction, and dusting it with sand reduces tracking.
                </StepCard>
              </div>

              <div className="mt-6 bg-gradient-to-br from-teal-500/15 to-teal-600/10 border border-teal-400/25 rounded-2xl p-6">
                <p className="text-white/85 leading-relaxed text-base">
                  <strong className="text-teal-300">Key takeaway:</strong> Cold patch cures through compaction and time under traffic. A patch that was tamped well can hold for months to a few years, depending on traffic, drainage, and weather.
                </p>
              </div>
            </section>

            {/* Material Comparison */}
            <section id="material-comparison" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Cold Patch vs Hot Mix vs Crack Filler
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Picking the right material for each job is as important as the technique. Here is how the three main options compare.
              </p>

              <InfoTable
                headers={["Material", "Best For", "Skill Level", "Lasts"]}
                rows={[
                  ["Cold-pour filler", "Hairline to 1/2 inch cracks", "Beginner", "About 1 to 3 years"],
                  ["Hot-pour rubberized filler", "Moving cracks with clean edges", "Pro or rental kettle", "About 3 to 7 years"],
                  ["Cold patch", "Potholes, wide cracks, small failed areas", "Beginner", "Months to a few years"],
                  ["Hot mix asphalt", "Permanent patches and larger repairs", "Professional", "Years, often a decade or more"],
                ]}
              />

              <p className="text-white/80 leading-relaxed text-base">
                Cold patch is a repair material, not a paving material. For the full story on how it is made, how it behaves differently from hot mix, and when to use each type, see our{" "}
                <Link
                  href="/blog/cold-mix-bitumen"
                  className="text-teal-400 hover:text-orange-300 underline underline-offset-2 transition-colors font-medium"
                >
                  Cold Mix Bitumen guide
                </Link>
                .
              </p>
            </section>

            {/* Common Mistakes */}
            <section id="common-mistakes" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                Common Mistakes That Ruin a Repair
              </h2>
              <div className="space-y-3 not-prose">
                {[
                  {
                    title: "Pouring into a dirty crack",
                    desc: "Dust and debris stop filler from bonding to the crack walls. Always brush and blow out the gap before applying anything.",
                  },
                  {
                    title: "Skipping compaction",
                    desc: "A cold patch that is only shoveled and smoothed scatters within a few rainy weeks. Every lift needs firm tamping.",
                  },
                  {
                    title: "Filling in one thick lift",
                    desc: "Anything over 2 inches stays loose underneath and sinks. Always layer and compact.",
                  },
                  {
                    title: "Leaving sloped, crumbling edges",
                    desc: "The patch has nothing to grip on a rounded edge. Square vertical walls lock the material in place.",
                  },
                  {
                    title: "Repairing damp surfaces",
                    desc: "Moisture trapped under filler or patch material breaks the bond. Wait for dry conditions.",
                  },
                  {
                    title: "Using crack filler on a pothole",
                    desc: "Liquid filler has no aggregate and cannot carry load. Use cold patch for any structural void.",
                  },
                  {
                    title: "Sealing before repairing",
                    desc: "Fix cracks and holes first, let them cure, then sealcoat. Sealing over open damage traps moisture and accelerates deterioration.",
                  },
                ].map(({ title, desc }, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/[0.08] transition-colors"
                  >
                    <AlertTriangle
                      size={16}
                      className="text-orange-400 shrink-0 mt-0.5"
                    />
                    <div>
                      <span className="text-white font-bold text-sm">
                        {title}:{" "}
                      </span>
                      <span className="text-white/70 text-sm">{desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* When Pro */}
            <section id="when-pro" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                When DIY Is Not Enough
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Surface products fix surface damage. Call a paving contractor when you see any of these warning signs.
              </p>
              <div className="space-y-3 not-prose mb-5">
                {[
                  {
                    title: "Alligator cracking",
                    desc: "A web of interconnected cracks means the base beneath the asphalt has failed. Patching the surface leaves the cause in place.",
                  },
                  {
                    title: "A soft, spongy, or sunken area",
                    desc: "The base is weak or saturated. Surface patching will not fix a failed sub-base.",
                  },
                  {
                    title: "A pothole that keeps coming back in the same spot",
                    desc: "Repeated patching without base repair is wasted money. Water is sitting in or washing out the base material.",
                  },
                  {
                    title: "A hollow void under the surrounding asphalt",
                    desc: "Stop and get a professional assessment before digging further — underground voids can spread.",
                  },
                  {
                    title: "Damage across a large share of the driveway",
                    desc: "At some point resurfacing costs less than dozens of individual patches. A contractor can give you a comparison.",
                  },
                ].map(({ title, desc }, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 bg-gradient-to-r from-red-500/10 to-orange-500/5 border border-red-400/20 rounded-xl p-4"
                  >
                    <AlertTriangle
                      size={16}
                      className="text-red-400 shrink-0 mt-0.5"
                    />
                    <div>
                      <span className="text-white font-bold text-sm">
                        {title}:{" "}
                      </span>
                      <span className="text-white/70 text-sm">{desc}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-white/80 leading-relaxed text-base">
                For a recurring pothole, the real fix is usually digging out the failed area, replacing and compacting the base, and then patching with hot mix. This is where understanding{" "}
                <Link
                  href="/blog/asphalt-thickness"
                  className="text-teal-400 hover:text-orange-300 underline underline-offset-2 transition-colors font-medium"
                >
                  proper asphalt pavement layer thickness
                </Link>{" "}
                becomes important — a base that was too thin from the start is prone to early failure regardless of how well the surface is maintained.
              </p>
            </section>

            {/* After Repair */}
            <section id="after-repair" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                After the Repair: Curing and Sealcoating
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Keep traffic off fresh filler until it has cured per the label, which ranges from a few hours to 72 hours. A cold patch can usually take light traffic soon after compaction, though sharp wheel turns on it are best avoided for the first few days.
              </p>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Once every repair has cured, sealcoating the whole driveway protects the repairs and the surrounding asphalt from UV degradation, water infiltration, and oil damage. Our{" "}
                <Link
                  href="/blog/asphalt-driveway-sealcoating"
                  className="text-teal-400 hover:text-orange-300 underline underline-offset-2 transition-colors font-medium"
                >
                  asphalt driveway sealcoating guide
                </Link>{" "}
                covers the right timing, material options, application technique, and how often to reapply. If oil has stained the area you are patching,{" "}
                <Link
                  href="/blog/how-to-remove-oil-stains-asphalt-driveway"
                  className="text-teal-400 hover:text-orange-300 underline underline-offset-2 transition-colors font-medium"
                >
                  clean the oil spill from the asphalt surface
                </Link>{" "}
                before you apply patch or filler — patch material and filler bond poorly to oily surfaces.
              </p>

              {/* Image 6: After the Repair */}
              <SectionImage
                src="/finished-asphalt-driveway-repair-inspection.webp"
                alt="Finished asphalt driveway repair inspection — smooth patched surface ready for sealcoating"
                caption="A well-finished repair should sit flush with the surrounding surface and show no gaps at the edges — this is the inspection point before sealcoating"
              />
            </section>

            {/* Cost */}
            <section id="cost" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                How Much Does DIY Asphalt Repair Cost
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Most DIY crack and pothole repairs cost roughly $10 to $60 in materials. A bottle of pourable crack filler runs a few dollars to around $12, and cold patch for a pothole typically costs $30 to $60 once you add gravel for a deep hole. A hand tamper is a one-time purchase at $20 to $40, and a plate compactor can be rented for larger patches.
              </p>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Professional pricing varies widely by region and scope. For anything beyond spot repairs, get at least two quotes. If you are weighing whether to repair versus resurface, our{" "}
                <Link
                  href="/blog/bitumen-driveway-cost-worldwide"
                  className="text-teal-400 hover:text-orange-300 underline underline-offset-2 transition-colors font-medium"
                >
                  bitumen driveway cost guide
                </Link>{" "}
                covers contractor pricing by country and project size, which gives you a useful baseline before accepting a quote.
              </p>

              <div className="bg-gradient-to-br from-orange-500/15 to-orange-600/10 border border-orange-400/25 rounded-2xl p-6">
                <h3 className="text-orange-300 font-bold text-base mb-4">
                  Rough DIY Cost Breakdown
                </h3>
                <InfoTable
                  headers={["Item", "Typical Cost", "Notes"]}
                  rows={[
                    ["Cold-pour crack filler (1 bottle)", "$5 to $12", "Covers roughly 30 to 50 linear ft of 1/4-inch cracks"],
                    ["Foam backer rod (10 ft roll)", "$3 to $8", "For cracks over 1/2 inch wide"],
                    ["Cold patch (50 lb bag)", "$15 to $30", "Covers roughly 1 sq ft at 2 inches deep"],
                    ["Crushed gravel (for deep holes)", "$5 to $15 bag", "Reduces cold patch needed in deep potholes"],
                    ["Hand tamper", "$20 to $40", "One-time purchase, reusable"],
                    ["Plate compactor rental", "$50 to $100/day", "For multiple or large patches"],
                  ]}
                />
              </div>
            </section>

            {/* Conclusion */}
            <section id="conclusion" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                Conclusion
              </h2>
              <div className="bg-gradient-to-br from-teal-500/15 via-blue-600/10 to-purple-600/10 border border-white/15 rounded-2xl p-6 md:p-8">
                <p className="text-white/85 leading-relaxed mb-4 text-base">
                  Most asphalt driveway damage is a straightforward DIY job when you match the product to the problem. Pourable filler handles cracks up to about 1/2 inch; backer rod and filler handle wider ones; and cold patch in compacted 2-inch layers handles potholes. Clean and dry surfaces, square edges, and thorough compaction decide how long a repair lasts.
                </p>
                <p className="text-white/85 leading-relaxed mb-4 text-base">
                  Alligator cracking, spongy ground, and potholes that return mean the base has failed — and that needs a contractor. Once the repairs cure,{" "}
                  <Link
                    href="/blog/asphalt-driveway-sealcoating"
                    className="text-teal-400 hover:text-orange-300 font-semibold underline underline-offset-2 transition-colors"
                  >
                    sealcoating the whole driveway
                  </Link>{" "}
                  protects your work and extends the life of the surrounding pavement significantly.
                </p>
                <p className="text-white/85 leading-relaxed text-base">
                  Want to estimate quantities and costs for a larger project? Use our free{" "}
                  <Link
                    href="/"
                    className="text-teal-400 hover:text-orange-300 font-semibold underline underline-offset-2 transition-colors"
                  >
                    Bitumen Calculator Online
                  </Link>{" "}
                  to get accurate material estimates before committing to a contractor quote.
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
                    q: "How do I fix cracks in an asphalt driveway?",
                    a: "Clean the crack with a wire brush and blow out the dust, let it dry, then fill it with cold-pour filler. Add foam backer rod first if the crack is wider than about 1/2 inch. Fill slightly above the surface, dust with sand, and let it cure.",
                  },
                  {
                    q: "What is the best way to patch a hole in a driveway?",
                    a: "Clean the hole, cut the edges square, fill deep holes with crushed gravel, then add cold patch in layers of 2 inches or less. Compact each layer with a tamper, overfill slightly, and compact the final layer.",
                  },
                  {
                    q: "How wide a crack can I fill myself?",
                    a: "Cold-pour filler works on cracks up to about 1/2 inch. Cracks up to 1 inch usually need backer rod plus filler. Wider cracks often point to base movement and may need a patch or professional repair.",
                  },
                  {
                    q: "Is cold patch a permanent fix for potholes?",
                    a: "Cold patch is a temporary to semi-permanent repair. A well-compacted patch can last months to a few years. Permanent repairs use hot mix asphalt, and a pothole that returns means the base needs work.",
                  },
                  {
                    q: "Can I repair asphalt in cold weather?",
                    a: "Crack filler needs a dry day above 50°F to bond properly. Many cold patch products are made to work in cool weather, but they compact and bond better when conditions are milder.",
                  },
                  {
                    q: "How long before I can drive on a repaired crack or pothole?",
                    a: "Thin crack sealer can be ready in a few hours, while wide filled cracks may need 48 to 72 hours. A compacted cold patch usually takes light traffic soon after compaction. The label gives exact timing.",
                  },
                  {
                    q: "Should I repair cracks before sealcoating?",
                    a: "Yes. Fill cracks and patch holes first, let the repairs cure, and then apply sealcoat over the whole driveway. Sealing over open cracks traps moisture and accelerates damage.",
                  },
                  {
                    q: "Why does my pothole keep coming back?",
                    a: "Repeated potholes in the same spot usually mean the gravel base underneath is holding water or has washed out. Dig out the failed area, rebuild and compact the base, and then patch with hot mix for a lasting fix.",
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
