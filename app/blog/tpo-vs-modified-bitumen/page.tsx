import AuthorBio from "../../components/AuthorBio";
// app/blog/tpo-vs-modified-bitumen/page.tsx
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
  title: "TPO vs Modified Bitumen: Which Flat Roof System Is Right?",
  description:
    "Compare TPO vs modified bitumen roofing systems. Learn the differences in cost, durability, energy efficiency, and which flat roof is best for your building.",
  keywords: [
    "tpo vs modified bitumen",
    "tpo roofing",
    "modified bitumen roofing",
    "flat roof systems",
    "commercial roofing comparison",
    "tpo vs bitumen",
    "best flat roof",
  ],
  alternates: { canonical: "https://bitumencalcpro.com/blog/tpo-vs-modified-bitumen" },
  openGraph: {
    title: "TPO vs Modified Bitumen: Which Flat Roof System Is Right for Your Building? | BitumenCalcPro",
    description:
      "Compare TPO vs modified bitumen roofing systems. Learn the differences in cost, durability, energy efficiency, and which flat roof is best for your building.",
    url: "https://bitumencalcpro.com/blog/tpo-vs-modified-bitumen",
    siteName: "BitumenCalcPro",
    type: "article",
    publishedTime: "2026-08-11T00:00:00.000Z",
    authors: ["BitumenCalcPro"],
    images: [
      {
        url: "/tpo-vs-modified-bitumen-flat-roof.webp",
        width: 1200,
        height: 630,
        alt: "TPO vs Modified Bitumen Flat Roof Comparison",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TPO vs Modified Bitumen: Which Flat Roof System Is Right?",
    description:
      "Discover the pros and cons of TPO and modified bitumen roofing systems to choose the best option for your commercial building.",
    images: ["/tpo-vs-modified-bitumen-flat-roof.webp"],
  },
  robots: {
    "max-image-preview": "large",
  },
};

// ── Structured Data ──────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "TPO vs Modified Bitumen: Which Flat Roof System Is Right for Your Building?",
  description:
    "Compare TPO vs modified bitumen roofing systems. Learn the differences in cost, durability, energy efficiency, and which flat roof is best for your building.",
  image: "https://bitumencalcpro.com/tpo-vs-modified-bitumen-flat-roof.webp",
  datePublished: "2026-08-11T00:00:00.000Z",
  dateModified: "2026-08-11T00:00:00.000Z",
  author: { "@type": "Organization", name: "BitumenCalcPro", url: "https://bitumencalcpro.com" },
  publisher: {
    "@type": "Organization",
    name: "BitumenCalcPro",
    url: "https://bitumencalcpro.com",
    logo: { "@type": "ImageObject", url: "https://bitumencalcpro.com/favicon.ico" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://bitumencalcpro.com/blog/tpo-vs-modified-bitumen" },
  keywords:
    "tpo vs modified bitumen, tpo roofing, modified bitumen roofing, commercial flat roof, roofing comparison",
  articleSection: "Roofing Comparison",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is TPO or modified bitumen better for a flat roof?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Neither is universally 'better' — it depends on your priorities. TPO tends to win on cost, energy efficiency, and lifespan in sunny climates. Modified bitumen tends to win on impact resistance and performance on high-traffic or storm-exposed roofs.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a TPO roof last compared to modified bitumen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TPO typically lasts 20 to 30 years when properly installed and maintained. Modified bitumen typically lasts 15 to 20 years, with actual lifespan depending on installation quality, climate exposure, and maintenance.",
      },
    },
    {
      "@type": "Question",
      name: "Which roofing material is cheaper, TPO or modified bitumen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TPO is generally cheaper both in material cost and installation labor. Modified bitumen costs more partly because it's asphalt-based, tying its price to crude oil markets, and partly because installation methods like torching require more skilled labor.",
      },
    },
    {
      "@type": "Question",
      name: "Can modified bitumen be made more energy-efficient?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, but it requires an added reflective coating. Without one, its darker surface absorbs more heat than TPO's naturally reflective white membrane.",
      },
    },
    {
      "@type": "Question",
      name: "Does TPO puncture easily?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TPO can puncture more easily than modified bitumen because it's a thinner, single-ply membrane without the same reinforced, multi-layer structure. Roofs with heavy foot traffic or equipment movement may be better suited to modified bitumen.",
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
      name: "TPO vs Modified Bitumen",
      item: "https://bitumencalcpro.com/blog/tpo-vs-modified-bitumen",
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
                <td key={j} className="px-3 py-2 sm:px-5 sm:py-3 text-white/80 leading-relaxed text-xs sm:text-sm">
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
export default function TpoVsModifiedBitumenPage() {
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
            <span className="text-white/90 font-medium">TPO vs Modified Bitumen</span>
          </nav>

          {/* Category badge */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="inline-flex items-center gap-1.5 bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
              <BookOpen size={12} />
              Roofing Comparison
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-6 max-w-4xl">
            TPO vs Modified Bitumen: Which Flat Roof System Is Right for Your Building?
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-white/50 text-sm mb-10">
            <span className="flex items-center gap-1.5">
              <Calendar size={13} />
              <time dateTime="2026-08-11">August 11, 2026</time>
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

      {/* ── HERO IMAGE ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionImage
          src="/tpo-vs-modified-bitumen-flat-roof.webp"
          alt="TPO vs modified bitumen flat roof comparison on commercial building"
          caption="Comparing two of the most popular commercial flat roofing materials: TPO and Modified Bitumen"
          priority
        />
      </div>

      {/* ── ARTICLE BODY + SIDEBAR ── */}
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
                TPO is a single-ply, heat-welded membrane that costs less upfront, reflects heat, and typically lasts 20–30 years. Modified bitumen is a multi-layer, asphalt-based system that costs more but resists punctures and foot traffic better, typically lasting 15–20 years. Choose TPO for energy savings and budget; choose modified bitumen for high-traffic, impact-heavy roofs.
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
                    { id: "what-is-tpo-roofing", label: "What Is TPO Roofing?" },
                    { id: "what-is-modified-bitumen-roofing", label: "What Is Modified Bitumen?" },
                    { id: "side-by-side-comparison", label: "Side-by-Side Comparison" },
                    { id: "cost-comparison", label: "Cost Comparison" },
                    { id: "durability-and-lifespan", label: "Durability and Lifespan" },
                    { id: "energy-efficiency", label: "Energy Efficiency" },
                    { id: "weather-and-climate-performance", label: "Weather Performance" },
                    { id: "installation-and-maintenance", label: "Installation & Maintenance" },
                    { id: "which-one-should-you-choose", label: "Which One to Choose?" },
                    { id: "summary", label: "Summary" },
                    { id: "faq", label: "Common Questions" },
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



            {/* ── SECTION: What Is TPO Roofing? ── */}
            <section id="what-is-tpo-roofing" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                What Is TPO Roofing?
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                TPO stands for thermoplastic polyolefin. It&apos;s a single-ply membrane, meaning the whole roof is covered with one continuous sheet instead of multiple stacked layers. The sheet itself has three bonded layers: a base layer, a polyester-reinforced fabric core for strength, and a thermoplastic top layer that gives it its light color and weather resistance.
              </p>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Rolls of TPO come in large sheets and get heat-welded together on-site, creating seams that are actually fused rather than just glued or taped. This welding process is what makes or breaks a TPO installation — done correctly, the seams are as strong as the membrane itself; done poorly, they&apos;re the first place a roof will fail.
              </p>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                TPO has only been widely used since the 1990s, but it has quickly become the most common material on new commercial low-slope roofs in the U.S. Its rise is largely due to two things: it&apos;s cheaper to install than most alternatives, and its bright white surface reflects sunlight instead of absorbing it. For energy-efficient standards, the{" "}
                <a
                  href="https://www.energy.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                >
                  U.S. Department of Energy
                  <ExternalLink size={12} className="inline ml-0.5 mb-0.5" />
                </a>{" "}
                frequently recognizes cool roofs like TPO for reducing cooling demand.
              </p>

              <SectionImage
                src="/tpo-roofing-heat-welded-membrane.webp"
                alt="TPO roofing installation showing heat-welded membrane process"
                caption="TPO relies on heat-welded seams, making correct installation critical for a leak-free roof"
              />
            </section>

            {/* ── SECTION: What Is Modified Bitumen Roofing? ── */}
            <section id="what-is-modified-bitumen-roofing" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                What Is Modified Bitumen Roofing?
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Modified bitumen is an asphalt-based roofing system developed in the 1970s as an upgrade to older built-up roofing (BUR). The &quot;modified&quot; part refers to polymers blended into the asphalt to improve its performance:
              </p>
              <ul className="space-y-3 mb-5">
                <li className="flex items-start gap-3 text-white/80 text-base">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-orange-400 shrink-0" />
                  <span>
                    <strong className="text-white">SBS (styrene-butadiene-styrene):</strong> adds rubber-like flexibility, helping the membrane move with the building without cracking.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-white/80 text-base">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-teal-400 shrink-0" />
                  <span>
                    <strong className="text-white">APP (atactic polypropylene):</strong> improves resistance to aging and UV exposure.
                  </span>
                </li>
              </ul>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                These asphalt-polymer blends are reinforced with fiberglass or polyester mats and manufactured into rolls. A typical system uses a base layer and a cap layer, and some installations add a reinforcing fabric layer or an asphalt emulsion base coat for extra protection — similar in structure to traditional built-up roofing, just more advanced. You can learn more about its composition in our detailed{" "}
                <Link
                  href="/blog/what-is-bitumen"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                >
                  bitumen basics guide
                </Link>.
              </p>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Modified bitumen can be installed a few different ways: torch-applied (heat welding), cold-applied adhesive, self-adhered rolls, or mechanically fastened. Torching requires skilled installers and careful fire safety precautions, which is one reason labor costs run higher than TPO. The{" "}
                <a
                  href="https://www.nrca.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                >
                  National Roofing Contractors Association (NRCA)
                  <ExternalLink size={12} className="inline ml-0.5 mb-0.5" />
                </a>{" "}
                provides extensive guidelines on proper and safe installation of these heavy-duty systems.
              </p>

              <SectionImage
                src="/modified-bitumen-roofing-membrane.webp"
                alt="Modified bitumen roofing showing asphalt-based membrane layers"
                caption="Modified bitumen is built up in multiple layers, making it exceptionally resistant to tears and impact"
              />
            </section>

            {/* ── SECTION: Side-by-Side Comparison ── */}
            <section id="side-by-side-comparison" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                TPO vs. Modified Bitumen: Side-by-Side Comparison
              </h2>
              
              <SectionImage
                src="/tpo-vs-modified-bitumen-comparison.webp"
                alt="Side-by-side comparison of TPO and Modified Bitumen roofing materials"
                caption="A quick visual reference of TPO vs modified bitumen characteristics"
              />

              <InfoTable
                headers={["Factor", "TPO", "Modified Bitumen"]}
                rows={[
                  ["Structure", "Single-ply membrane", "Multi-layer, asphalt-based"],
                  ["Typical lifespan", "20–30 years", "15–20 years"],
                  ["Upfront cost", "Lower", "Higher"],
                  ["Installation", "Heat-welded seams, faster labor", "Torch, cold-adhesive, or mechanically fastened"],
                  ["Energy efficiency", "High — reflective white surface", "Lower unless coated; absorbs heat"],
                  ["Impact/puncture resistance", "Moderate — thinner membrane", "High — reinforced layers"],
                  ["Standing water tolerance", "Good", "Weaker; needs proper slope"],
                  ["UV resistance", "Strong, especially in white", "Weaker over time without coating"],
                  ["Leak detection", "Easier on light surface", "Harder on dark, granulated surface"],
                  ["Warranty (typical)", "Often longer with proper install", "Commonly 10–12 years"],
                  ["Best for", "Hot climates, budget-conscious projects, energy savings", "High foot traffic, storm-prone areas, impact resistance"],
                ]}
              />
            </section>

            {/* ── SECTION: Cost Comparison ── */}
            <section id="cost-comparison" className="mb-12 scroll-mt-24">
              <h3 className="text-2xl font-black text-white mb-4 mt-8 border-l-4 border-teal-400 pl-4">
                Cost Comparison
              </h3>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                TPO is generally the more budget-friendly option, both for materials and labor. The membrane itself is less expensive, and heat-welded installation tends to go faster than layering and torching a modified bitumen system. To accurately estimate flat roof material costs, you can use our{" "}
                <Link
                  href="/"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                >
                  flat roof system calculator
                </Link>.
              </p>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Modified bitumen costs more, partly because it&apos;s a byproduct of crude oil refining, so its price shifts with oil markets and refinery output. Installation labor also costs more because torch-applying or layering multiple sheets takes longer and requires more skilled labor than welding a single TPO sheet.
              </p>
              <p className="text-white/80 leading-relaxed text-base">
                That higher upfront cost isn&apos;t necessarily wasted money. Modified bitumen&apos;s thicker, reinforced structure can offset the price difference over time on roofs that take a beating from foot traffic, dropped tools, or storm debris.
              </p>
            </section>

            {/* ── SECTION: Durability and Lifespan ── */}
            <section id="durability-and-lifespan" className="mb-12 scroll-mt-24">
              <h3 className="text-2xl font-black text-white mb-4 mt-8 border-l-4 border-orange-400 pl-4">
                Durability and Lifespan
              </h3>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                This is where the two systems diverge the most, and the answer depends heavily on what the roof has to deal with day to day.
              </p>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Modified bitumen&apos;s reinforced, multi-layer build makes it genuinely tough. It resists cracking, tearing, and impact damage well, which is why it&apos;s often the better pick for roofs with regular foot traffic, like buildings with rooftop HVAC access points that technicians walk across often. It typically lasts 15 to 20 years, with lifespan depending heavily on installation quality and how much wear the roof takes over time.
              </p>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                TPO, while thinner, tends to outlast modified bitumen when installed correctly, often reaching 20 to 30 years thanks to strong resistance to UV rays and heat. But that durability comes with a catch: TPO can puncture more easily than modified bitumen, since it doesn&apos;t have the same reinforced, multi-ply structure. On roofs where equipment gets dragged around or maintenance crews are walking frequently, that&apos;s a real consideration.
              </p>
              <p className="text-white/80 leading-relaxed text-base">
                Modified bitumen has one structural advantage in a specific scenario: it handles building movement well because of its flexible SBS or APP polymers. TPO, however, tends to manage standing water more comfortably, which matters most on roofs with minimal slope where water can&apos;t drain quickly.
              </p>
            </section>

            {/* ── SECTION: Energy Efficiency ── */}
            <section id="energy-efficiency" className="mb-12 scroll-mt-24">
              <h3 className="text-2xl font-black text-white mb-4 mt-8 border-l-4 border-teal-400 pl-4">
                Energy Efficiency
              </h3>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                TPO&apos;s biggest selling point for many building owners is its impact on cooling costs. Because it&apos;s typically white, TPO reflects sunlight rather than absorbing it, which keeps the roof surface — and often the building below it — cooler. In hot climates, that translates directly into lower air conditioning bills.
              </p>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Modified bitumen&apos;s natural surface is darker and granulated, so it absorbs more heat by default. It can be made more energy-efficient with a reflective coating, but that&apos;s an added step and cost rather than a built-in feature. Without a coating, a modified bitumen roof will run hotter than an equivalent TPO roof in direct sun.
              </p>

              <SectionImage
                src="/tpo-vs-modified-bitumen-energy-efficiency.webp"
                alt="Diagram showing energy efficiency of reflective TPO vs darker modified bitumen"
                caption="TPO’s bright white surface reflects UV rays, drastically lowering cooling costs in hot climates"
              />
            </section>

            {/* ── SECTION: Weather and Climate Performance ── */}
            <section id="weather-and-climate-performance" className="mb-12 scroll-mt-24">
              <h3 className="text-2xl font-black text-white mb-4 mt-8 border-l-4 border-orange-400 pl-4">
                Weather and Climate Performance
              </h3>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Both systems can perform well, but they have different strengths depending on the climate.
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-teal-400 shrink-0" />
                  <span className="text-white/80 text-base">
                    <strong className="text-white">In hot, high-UV climates:</strong> TPO tends to age better. Asphalt-based membranes are more prone to long-term UV and heat degradation than white TPO, which matters in markets that see intense, sustained sun exposure.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-orange-400 shrink-0" />
                  <span className="text-white/80 text-base">
                    <strong className="text-white">In storm-prone or high-wind areas:</strong> Modified bitumen&apos;s reinforced structure holds up well against debris impact and wind-driven damage. It&apos;s a common choice in regions that regularly deal with hail or storm debris.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-teal-400 shrink-0" />
                  <span className="text-white/80 text-base">
                    <strong className="text-white">On low-slope roofs with drainage issues:</strong> TPO handles standing water more reliably than modified bitumen, which matters if the roof design doesn&apos;t allow water to drain quickly after rain.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-orange-400 shrink-0" />
                  <span className="text-white/80 text-base">
                    <strong className="text-white">For leak detection:</strong> TPO&apos;s light, smooth surface makes it easier to spot cracks or splits during inspection. Modified bitumen&apos;s dark, granulated surface can hide early signs of failure, meaning problems sometimes go unnoticed longer.
                  </span>
                </li>
              </ul>
            </section>

            {/* ── SECTION: Installation and Maintenance ── */}
            <section id="installation-and-maintenance" className="mb-12 scroll-mt-24">
              <h3 className="text-2xl font-black text-white mb-4 mt-8 border-l-4 border-teal-400 pl-4">
                Installation and Maintenance
              </h3>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                TPO installation is generally faster and less labor-intensive, since it involves rolling out large sheets and heat-welding the seams. That said, seam quality is everything — a poorly welded seam is the most common cause of TPO leaks and premature failure. It&apos;s worth choosing a contractor with specific TPO welding experience rather than assuming any commercial roofer can do it well.
              </p>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Modified bitumen installation takes more steps and more skilled labor, whether it&apos;s torch-applied, cold-adhered, or mechanically fastened. Torch application in particular carries fire-safety risks during installation that require trained crews and proper precautions. You can dive deeper into these materials in our full guide to{" "}
                <Link
                  href="/blog/modified-bitumen-roofing"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                >
                  modified bitumen roofing systems
                </Link>.
              </p>
              <p className="text-white/80 leading-relaxed text-base">
                On the maintenance side, both systems are relatively low-maintenance once installed correctly. Modified bitumen is often described as easy to repair and patch, since damaged sections can be identified and resealed without redoing the whole roof. If you need to{" "}
                <Link
                  href="/blog/modified-bitumen-roof-repair"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                >
                  repair and maintain
                </Link>{" "}
                your existing asphalt-based roof, many owners find patching very straightforward. TPO repairs are also straightforward when the damage is caught early, but seam failures can sometimes be harder to trace than surface punctures.
              </p>
            </section>

            {/* ── SECTION: Which One Should You Choose? ── */}
            <section id="which-one-should-you-choose" className="mb-12 scroll-mt-24">
              <SectionImage
                src="/choose-tpo-or-modified-bitumen-roof.webp"
                alt="Building owner choosing between TPO and Modified Bitumen roofing samples"
                caption="Making the right choice depends heavily on climate, traffic, and your budget"
              />

              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                Which One Should You Choose?
              </h2>
              <p className="text-white/80 leading-relaxed mb-6 text-base">
                There&apos;s no universal right answer here — it comes down to what matters most for your specific building.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Choose TPO if:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-white/80 text-sm">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
                      You&apos;re working with a tighter budget
                    </li>
                    <li className="flex items-start gap-3 text-white/80 text-sm">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
                      Your building is in a hot, sunny climate and cooling costs are a concern
                    </li>
                    <li className="flex items-start gap-3 text-white/80 text-sm">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
                      Your roof doesn&apos;t see heavy foot traffic
                    </li>
                    <li className="flex items-start gap-3 text-white/80 text-sm">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
                      Fast installation timelines matter
                    </li>
                  </ul>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Choose modified bitumen if:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-white/80 text-sm">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
                      Your roof gets frequent foot traffic or has multiple rooftop units requiring regular access
                    </li>
                    <li className="flex items-start gap-3 text-white/80 text-sm">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
                      You&apos;re in a storm-prone area with risk of hail or debris impact
                    </li>
                    <li className="flex items-start gap-3 text-white/80 text-sm">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
                      You want a roofing system with a long history of proven field performance
                    </li>
                    <li className="flex items-start gap-3 text-white/80 text-sm">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
                      You&apos;re willing to pay more upfront for added impact resistance
                    </li>
                  </ul>
                </div>
              </div>
              
              <p className="text-white/80 leading-relaxed text-base">
                Some property owners with an existing modified bitumen roof that&apos;s still structurally sound choose to repair and maintain it rather than switch systems entirely, which can be a cost-effective way to extend its service life instead of a full replacement.
              </p>
            </section>

            {/* ── SECTION: Summary ── */}
            <section id="summary" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Summary
              </h2>
              <div className="bg-gradient-to-br from-teal-500/15 via-blue-600/10 to-purple-600/10 border border-white/15 rounded-2xl p-6 md:p-8">
                <p className="text-white/85 leading-relaxed text-base">
                  TPO and modified bitumen solve the same problem — keeping water out of a flat or low-slope roof — but they get there differently. TPO leans on a single reflective membrane that&apos;s cheaper to install and better at cutting cooling costs. Modified bitumen leans on layered, reinforced asphalt that holds up better under impact and foot traffic, at a higher price. The right choice depends less on which material is &quot;better&quot; overall and more on your climate, your roof&apos;s traffic level, and your budget for upfront cost versus long-term durability. A roofing professional who can inspect your specific building will give you a far more reliable answer than any general comparison.
                </p>
              </div>
            </section>

            {/* ── SECTION: FAQ ── */}
            <section id="faq" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-6 border-l-4 border-orange-400 pl-4">
                Common Questions
              </h2>
              <div className="space-y-4">
                {[
                  {
                    q: "Is TPO or modified bitumen better for a flat roof?",
                    a: "Neither is universally 'better' — it depends on your priorities. TPO tends to win on cost, energy efficiency, and lifespan in sunny climates. Modified bitumen tends to win on impact resistance and performance on high-traffic or storm-exposed roofs.",
                  },
                  {
                    q: "How long does a TPO roof last compared to modified bitumen?",
                    a: "TPO typically lasts 20 to 30 years when properly installed and maintained. Modified bitumen typically lasts 15 to 20 years, with actual lifespan depending on installation quality, climate exposure, and maintenance.",
                  },
                  {
                    q: "Which roofing material is cheaper, TPO or modified bitumen?",
                    a: "TPO is generally cheaper both in material cost and installation labor. Modified bitumen costs more partly because it's asphalt-based, tying its price to crude oil markets, and partly because installation methods like torching require more skilled labor.",
                  },
                  {
                    q: "Can modified bitumen be made more energy-efficient?",
                    a: "Yes, but it requires an added reflective coating. Without one, its darker surface absorbs more heat than TPO's naturally reflective white membrane.",
                  },
                  {
                    q: "Does TPO puncture easily?",
                    a: "TPO can puncture more easily than modified bitumen because it's a thinner, single-ply membrane without the same reinforced, multi-layer structure. Roofs with heavy foot traffic or equipment movement may be better suited to modified bitumen.",
                  },
                ].map(({ q, a }, i) => (
      <div
        key={i}
        className="bg-white/5 border border-white/10 rounded-2xl p-5 md:p-6 transition-colors hover:bg-white/[0.08]"
      >
        <h3 className="text-lg font-bold text-white mb-2 leading-snug">
          {q}
        </h3>
        <p className="text-white/70 text-sm leading-relaxed">
          {a}
        </p>
      </div>
    ))}
              </div>
            </section>

            {/* ── Navigation: Back to Blog ── */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-white/60 hover:text-white font-semibold text-sm transition-colors group"
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                Back to Blog
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white px-6 py-3 rounded-full font-bold text-sm transition-all shadow-[0_0_20px_rgba(249,115,22,0.35)] hover:shadow-[0_0_30px_rgba(249,115,22,0.55)]"
              >
                Estimate Flat Roof System
                <ArrowRight size={15} />
              </Link>
            </div>
          
          <AuthorBio />
        </article>

          {/* ── SIDEBAR: Table of Contents ── */}
          
        </div>
      </div>
    </>
  );
}
