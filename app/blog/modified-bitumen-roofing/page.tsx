import AuthorBio from "../../components/AuthorBio";
// app/blog/modified-bitumen-roofing/page.tsx
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
  Home as HomeIcon,
} from "lucide-react";

// ── Metadata ──────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Modified Bitumen Roofing: The Complete Guide for Flat Roofs",
  description:
    "Learn about modified bitumen (mod bit) roofing: SBS vs APP, costs ($4-$12/sq ft), lifespan, installation methods, and how it compares to TPO and EPDM.",
  keywords: [
    "modified bitumen roofing",
    "mod bit roof",
    "SBS vs APP modified bitumen",
    "torch down roofing",
    "flat roof membrane",
    "modified bitumen lifespan",
    "modified bitumen cost",
    "built up roofing",
    "commercial roofing",
  ],
  alternates: {
    canonical: "https://bitumencalcpro.com/blog/modified-bitumen-roofing",
  },
  openGraph: {
    title:
      "Modified Bitumen Roofing: The Complete Guide for Flat and Low-Slope Roofs | BitumenCalcPro",
    description:
      "Learn about modified bitumen (mod bit) roofing: SBS vs APP, costs ($4-$12/sq ft), lifespan, installation methods, and how it compares to TPO and EPDM.",
    url: "https://bitumencalcpro.com/blog/modified-bitumen-roofing",
    siteName: "BitumenCalcPro",
    type: "article",
    publishedTime: "2026-08-09T00:00:00.000Z",
    authors: ["BitumenCalcPro"],
    images: [
      {
        url: "/modified-bitumen-roofing-flat-low-slope.webp",
        width: 1200,
        height: 630,
        alt: "Modified bitumen roofing on a flat, low-slope commercial roof",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Modified Bitumen Roofing: The Complete Guide",
    description:
      "Everything you need to know about modified bitumen roofing for flat roofs: costs, installation, SBS vs APP, and comparison with TPO and EPDM.",
    images: ["/modified-bitumen-roofing-flat-low-slope.webp"],
  },
  robots: {
    "max-image-preview": "large",
  },
};

// ── Structured Data ──────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Modified Bitumen Roofing: The Complete Guide for Flat and Low-Slope Roofs",
  description:
    "Learn about modified bitumen (mod bit) roofing: SBS vs APP, costs ($4-$12/sq ft), lifespan, installation methods, and how it compares to TPO and EPDM.",
  image: "https://bitumencalcpro.com/modified-bitumen-roofing-flat-low-slope.webp",
  datePublished: "2026-08-09T00:00:00.000Z",
  dateModified: "2026-08-09T00:00:00.000Z",
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
    "@id": "https://bitumencalcpro.com/blog/modified-bitumen-roofing",
  },
  keywords: "modified bitumen roofing, SBS, APP, torch down roof, flat roof, commercial roofing",
  articleSection: "Roofing & Paving Materials",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is modified bitumen roofing good for residential homes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It's mainly used on flat or low-slope roofs, which are more common on additions, garages, porches, and some modern home designs than on standard pitched residential roofs. For a flat-roof section of a house, it's a solid, cost-effective option.",
      },
    },
    {
      "@type": "Question",
      name: "Is torch-down roofing safe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, when installed by a licensed, experienced crew following local fire codes. Most jurisdictions require a hot work permit and a fire watch during and after installation because of the open flame involved.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install modified bitumen over an existing roof?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In many cases, yes — if the existing deck and insulation are in good condition and local code allows an overlay. A roofing contractor needs to inspect the existing structure first, since a compromised deck or wet insulation underneath should be addressed rather than covered over.",
      },
    },
    {
      "@type": "Question",
      name: "How is modified bitumen different from built-up roofing (BUR)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BUR is built on-site, layer by layer, alternating hot asphalt and reinforcing felt. Modified bitumen is manufactured off-site as pre-formed rolls with polymers already added, which makes installation faster and more consistent while still keeping BUR's proven multi-layer approach.",
      },
    },
    {
      "@type": "Question",
      name: "Does color affect performance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Dark cap sheets absorb more heat, which can increase cooling costs and accelerate UV-related aging. A reflective granule cap sheet or an applied coating reduces heat absorption and can extend the membrane's service life.",
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
      name: "Modified Bitumen Roofing",
      item: "https://bitumencalcpro.com/blog/modified-bitumen-roofing",
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
export default function ModifiedBitumenRoofingPage() {
  return (
    <>
      <Script
        id="schema-article-modbit"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="schema-faq-modbit"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="schema-breadcrumb-modbit"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ── HERO BAND ── */}
      <div className="relative pt-16 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 to-blue-600/10 pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full bg-teal-500/10 blur-[80px] pointer-events-none" />

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
            <span className="text-white/90 font-medium">Modified Bitumen Roofing</span>
          </nav>

          {/* Category badge */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="inline-flex items-center gap-1.5 bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
              <HomeIcon size={12} />
              Roofing &amp; Waterproofing
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-6 max-w-4xl">
            Modified Bitumen Roofing: The Complete Guide for Flat and Low-Slope Roofs
          </h1>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-4 text-white/50 text-sm">
            <span className="flex items-center gap-1.5">
              <Calendar size={13} />
              <time dateTime="2026-08-09">August 9, 2026</time>
            </span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="flex items-center gap-1.5">
              <Clock size={13} />
              13 min read
            </span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="text-white/50">By BitumenCalcPro</span>
          </div>
        </div>
      </div>

      {/* ── ARTICLE BODY + SIDEBAR ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24">
        <div className="flex flex-col xl:flex-row gap-12 items-start">

          {/* ── MAIN CONTENT ── */}
          <article className="flex-1 min-w-0">

            {/* Quick Answer */}
            <div className="mb-8 bg-gradient-to-br from-blue-500/15 to-blue-600/10 border border-blue-400/25 rounded-2xl p-6 md:p-8">
              <h2 className="text-lg font-black text-blue-300 mb-3 flex items-center gap-2">
                <CheckCircle2 size={18} />
                Quick Answer
              </h2>
              <p className="text-white/85 leading-relaxed text-base">
                <strong className="text-white">Modified bitumen roofing</strong> is a multi-layer asphalt membrane reinforced with rubber (SBS) or plastic (APP) polymers, built for flat and low-slope roofs. It costs roughly $4 to $12 per square foot installed, lasts 15 to 25 years (up to 30 with good maintenance), and is applied by torching, hot mopping, cold adhesive, or self-adhering peel-and-stick sheets.
              </p>
            </div>

            {/* Table of Contents */}
            <div className="mb-10 bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="text-white font-black text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
                  <BookOpen size={14} className="text-blue-400" />
                  Table of Contents
                </div>
                <nav className="space-y-1">
                  {[
                    { id: "what-is-modified-bitumen", label: "What Is Modified Bitumen?" },
                    { id: "sbs-vs-app", label: "SBS vs APP" },
                    { id: "installation", label: "Installation Methods" },
                    { id: "system-layers", label: "System Layers" },
                    { id: "cost", label: "How Much Does It Cost?" },
                    { id: "lifespan", label: "How Long Does It Last?" },
                    { id: "comparison", label: "Mod Bit vs TPO vs EPDM" },
                    { id: "pros-cons", label: "Pros and Cons" },
                    { id: "repair-signs", label: "Signs of Repair" },
                    { id: "conclusion", label: "Conclusion" },
                    { id: "faq", label: "FAQ" },
                  ].map(({ id, label }) => (
                    <a
                      key={id}
                      href={`#${id}`}
                      className="block text-white/55 hover:text-blue-400 text-xs leading-relaxed py-1 px-2 rounded-lg hover:bg-white/5 transition-all"
                    >
                      {label}
                    </a>
                  ))}
                </nav>
            </div>


            {/* Image 1 — Exactly placed after Quick Answer, before Key Takeaways */}
            <SectionImage
              src="/modified-bitumen-roofing-flat-low-slope.webp"
              alt="Modified bitumen roofing applied on a flat, low-slope commercial roof"
              caption="Modified bitumen provides a durable, multi-layer waterproofing system ideal for low-slope commercial and residential roofs"
              priority
            />


            {/* ── SECTION: What Is Modified Bitumen Roofing? ── */}
            <section id="what-is-modified-bitumen" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                What Is Modified Bitumen Roofing?
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                <Link
                  href="/blog/what-is-bitumen"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors font-medium"
                >
                  Modified bitumen
                </Link>{" "}
                is an asphalt-based roofing membrane with polymers mixed into the asphalt to change how it behaves. Plain asphalt gets brittle in the cold and soft in the heat. Add a polymer — either a rubber compound or a plastic one — and the material stays flexible across a wider temperature range and resists cracking for longer.
              </p>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                The membrane isn't built layer by layer on the roof the way old built-up roofing (BUR) was. It's manufactured in a factory as reinforced rolls, usually 3 to 4 feet wide, then shipped to the job site and applied over a base layer. Most systems use two or three plies: a base sheet for structure and a cap sheet on top that handles UV exposure and weather.
              </p>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Mod bit showed up in Europe in the 1960s as a fix for BUR's biggest weaknesses — slow installation, heavy reliance on crew skill, and asphalt that dried out and cracked within a decade or two. It reached North America by the 1980s and has stayed a standard option for commercial flat roofs ever since, especially on buildings that see regular foot traffic from HVAC servicing or maintenance crews.
              </p>

              {/* Image 2 */}
              <SectionImage
                src="/modified-bitumen-roofing-membrane-layers.webp"
                alt="Modified bitumen roofing membrane layers — base sheet and cap sheet with polymer modifications"
                caption="Unlike old built-up roofs, modified bitumen is manufactured off-site into reinforced, multi-layer rolls ready for installation"
              />
            </section>

            {/* ── SECTION: SBS vs APP ── */}
            <section id="sbs-vs-app" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-blue-400 pl-4">
                SBS vs. APP: The Two Types of Modified Bitumen
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Almost every mod bit product on the market falls into one of these two categories. The polymer used changes how the membrane installs, how it performs, and where it makes sense.
              </p>

              <div className="mb-6 space-y-6">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 border-l-4 border-l-teal-400">
                  <h3 className="text-white font-bold mb-2 text-lg">SBS (Styrene-Butadiene-Styrene)</h3>
                  <p className="text-white/70 leading-relaxed text-sm">
                    SBS is a synthetic rubber. Think of it like a rubber band — it stretches when temperatures shift and returns to shape instead of cracking. That elasticity makes SBS membranes a strong choice in climates with big temperature swings or hard freezes, since the roof can expand and contract without splitting. SBS sheets can be installed with hot asphalt, cold adhesive, or as a self-adhering peel-and-stick product, which gives contractors more flexibility on job sites where an open flame isn't practical.
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 border-l-4 border-l-orange-400">
                  <h3 className="text-white font-bold mb-2 text-lg">APP (Atactic Polypropylene)</h3>
                  <p className="text-white/70 leading-relaxed text-sm">
                    APP is a plastic-based polymer, sometimes described as "plastic asphalt." It's more rigid than SBS once installed, but it holds up better against UV exposure over time. That makes it a common choice in hot, sun-heavy regions like the Gulf Coast and the Southwest. APP is almost always torch-applied. The installer runs a propane torch under the sheet to melt the asphalt coating on its underside, then rolls it onto the substrate while it's still tacky. It requires higher heat than SBS installation, which is part of why fire safety planning matters more with APP jobs.
                  </p>
                </div>
              </div>

              {/* Image 3 */}
              <SectionImage
                src="/sbs-vs-app-modified-bitumen-roofing.webp"
                alt="SBS vs APP modified bitumen roofing — comparing rubber-based flexibility and plastic-based rigidity"
                caption="SBS uses synthetic rubber for superior flexibility in cold climates, while APP uses plastic polymers for enhanced heat and UV resistance"
              />

              <p className="text-white/80 leading-relaxed mb-4 text-base font-semibold">
                Quick comparison:
              </p>
              <InfoTable
                headers={["Feature", "SBS", "APP"]}
                rows={[
                  ["Base material", "Rubber (synthetic)", "Plastic"],
                  ["Flexibility", "High — performs well in cold and freeze-thaw cycles", "Lower — more rigid once cured"],
                  ["UV resistance", "Good", "Better"],
                  ["Common installation", "Torch, cold adhesive, or self-adhered", "Almost always torch-applied"],
                  ["Best climate fit", "Regions with cold winters or wide temperature swings", "Hot, high-UV regions"],
                ]}
              />
              <p className="text-white/80 leading-relaxed text-base">
                Neither type is universally "better." The right choice depends on your climate, your roof's slope and traffic level, and how the installer plans to apply it.
              </p>
            </section>

            {/* ── SECTION: Installation Methods ── */}
            <section id="installation" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                How Modified Bitumen Is Installed
              </h2>
              <p className="text-white/80 leading-relaxed mb-6 text-base">
                There are four main installation methods, and the one a contractor recommends usually comes down to building code, roof access, and the type of membrane being used.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  {
                    num: "1",
                    title: "Torch-applied",
                    desc: "The installer uses a propane torch to melt the underside of the roll as it's laid down. This is the most common method for APP and one option for SBS. It bonds well and works in a wide range of conditions, but it requires an open flame on the roof, so many cities require a hot work permit and a fire watch during and after installation.",
                  },
                  {
                    num: "2",
                    title: "Hot-mopped (hot asphalt)",
                    desc: "Hot asphalt is heated in a kettle on the ground and piped or carried up to the roof, then mopped out in sections. The membrane is set into the hot asphalt while it's still fluid. This method doesn't need an open flame on the roof surface itself, but it does require specialized equipment and an experienced crew.",
                  },
                  {
                    num: "3",
                    title: "Cold-applied",
                    desc: "An asphalt-based adhesive is spread with a trowel or squeegee, and the membrane is pressed into it. No torch, no hot kettle. It's a good option for buildings where fire risk is a bigger concern, though the adhesive can take longer to cure fully.",
                  },
                  {
                    num: "4",
                    title: "Self-adhered (peel-and-stick)",
                    desc: "The membrane comes with an adhesive backing already applied, protected by a release film. Peel it off, position the sheet, and press it down. It's the fastest and safest method to install, with no flame and no hot materials, but it depends heavily on surface temperature and prep — cold weather can prevent a strong initial bond.",
                  },
                ].map(({ num, title, desc }) => (
                  <div
                    key={num}
                    className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/[0.07] transition-colors"
                  >
                    <span className="text-blue-400 font-black text-lg shrink-0 w-8">{num}.</span>
                    <div>
                      <strong className="text-white text-base">{title}</strong>
                      <p className="text-white/70 text-sm mt-1 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Image 4 */}
              <SectionImage
                src="/modified-bitumen-roof-installation-methods.webp"
                alt="Modified bitumen roof installation methods — torch applied, hot mopped, cold adhesive, and peel and stick"
                caption="Four distinct ways to install mod bit, catering to different fire codes, environmental constraints, and crew preferences"
              />
            </section>

            {/* ── SECTION: What It Actually Looks Like ── */}
            <section id="system-layers" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                What a Modified Bitumen System Actually Looks Like
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                A typical mod bit roof assembly has several layers working together, not just one membrane sitting on the deck:
              </p>
              
              <ul className="space-y-3 mb-6 bg-black/20 border border-white/10 p-6 rounded-2xl">
                {[
                  { title: "Roof deck", desc: "the structural surface (plywood, concrete, or metal decking)" },
                  { title: "Vapor barrier", desc: "(if needed) — controls moisture movement from inside the building" },
                  { title: "Insulation", desc: "for energy performance and to create a stable substrate" },
                  { title: "Base sheet", desc: "the first ply of modified bitumen, providing structure" },
                  { title: "Cap sheet", desc: "the top ply, which handles weather exposure and often includes UV-reflective granules" },
                ].map(({ title, desc }) => (
                  <li key={title} className="flex items-start gap-3 text-white/80 text-sm">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-400 shrink-0" />
                    <span><strong className="text-white">{title}</strong> — {desc}</span>
                  </li>
                ))}
              </ul>

              <p className="text-white/80 leading-relaxed mb-6 text-base">
                This layered, redundant design is one of mod bit's real advantages. If something punctures the top ply, the layer underneath is still there holding the water back — which isn't true for most single-ply membranes.
              </p>

              {/* Image 5 */}
              <SectionImage
                src="/modified-bitumen-roof-assembly-layers.webp"
                alt="Modified bitumen roof assembly layers — roof deck, insulation, base sheet, and cap sheet"
                caption="A redundant, multi-ply assembly ensures that even if the cap sheet sustains minor damage, the underlying base layer maintains a watertight seal"
              />
            </section>

            {/* ── SECTION: Cost ── */}
            <section id="cost" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-blue-400 pl-4">
                How Much Does Modified Bitumen Roofing Cost?
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Installed pricing generally runs <strong className="text-white">$4 to $12 per square foot</strong>, with most projects landing in the $6–$10 range. A few things move that number:
              </p>

              <ul className="space-y-2.5 mb-6">
                {[
                  { title: "Ply count", desc: "a 3-ply system typically adds $2–$3 per square foot over a 2-ply system, but it also extends lifespan meaningfully." },
                  { title: "Installation method", desc: "torch and hot-mop jobs often involve more labor and equipment than self-adhered systems." },
                  { title: "Tear-off vs. overlay", desc: "removing an existing roof adds cost versus installing over a prepared surface." },
                  { title: "Deck condition and access", desc: "a roof needing structural repair or with difficult crane/ladder access will run higher." },
                  { title: "Reflective coating", desc: "adding a reflective cap sheet or coating adds roughly $1–$2 per square foot but can lower cooling costs." },
                ].map(({ title, desc }) => (
                  <li key={title} className="flex items-start gap-3 text-white/80 text-sm">
                    <CheckCircle2 size={16} className="text-orange-400 mt-0.5 shrink-0" />
                    <span><strong className="text-white">{title}</strong> — {desc}</span>
                  </li>
                ))}
              </ul>

              <p className="text-white/80 leading-relaxed text-base">
                For a 1,500 to 1,700 square foot flat roof, that translates to a typical installed range of about $7,000 to $17,000, though exact numbers depend heavily on local labor rates and the specifics above. Getting a site-specific quote is the only reliable way to know your actual number — these ranges are a starting point for budgeting, not a final bid. If you're managing a pavement project alongside your roofing, you can also estimate your road paving costs instantly with our{" "}
                <Link
                  href="/"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors font-medium"
                >
                  Bitumen Calculator
                </Link>
                .
              </p>
            </section>

            {/* ── SECTION: Lifespan ── */}
            <section id="lifespan" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                How Long Does Modified Bitumen Roofing Last?
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Most modified bitumen roofs last <strong className="text-white">15 to 25 years</strong>. A well-installed 3-ply system with a quality cap sheet, good drainage, and regular maintenance can reach 25 to 30 years. A poorly drained or neglected 2-ply system can fall well short of that, sometimes needing attention within 12 to 15 years.
              </p>
              
              <p className="text-white/80 leading-relaxed mb-4 text-base font-semibold">
                The biggest factors affecting real-world lifespan:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: "Ponding water", desc: "standing water that doesn't drain within 48 hours accelerates membrane breakdown and voids most manufacturer warranties." },
                  { title: "Foot traffic", desc: "repeated HVAC servicing or maintenance visits wear down the cap sheet faster in high-traffic zones." },
                  { title: "UV exposure", desc: "dark, uncoated membranes absorb more heat and degrade faster under constant sun." },
                  { title: "Installation quality", desc: "seam sealing and flashing details matter more than the membrane itself in most failure cases." },
                  { title: "Maintenance habits", desc: "twice-yearly inspections catch small issues before they become leaks or structural problems." },
                ].map(({ title, desc }) => (
                  <div key={title} className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/[0.08] transition-colors">
                    <strong className="text-blue-300 text-sm block mb-1">{title}</strong>
                    <p className="text-white/70 text-xs leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── SECTION: Vs TPO vs EPDM ── */}
            <section id="comparison" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                Modified Bitumen vs. TPO vs. EPDM: Which Should You Choose?
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                These three materials cover most of the commercial flat roofing market today. Here's how they stack up:
              </p>

              <InfoTable
                headers={["Factor", "Modified Bitumen", "TPO", "EPDM"]}
                rows={[
                  ["Installed cost", "$4–$12/sq ft", "$5–$10/sq ft", "$3–$8/sq ft (typically the lowest)"],
                  ["Typical lifespan", "15–25 years", "20–30 years", "25–30 years"],
                  ["Puncture/foot traffic resistance", "Strong — multi-ply, redundant", "Moderate", "Moderate"],
                  ["UV/heat reflectivity", "Depends on cap sheet color and coating", "Strong — usually white, reflective", "Weak unless coated (traditionally black)"],
                  ["Repair difficulty", "Easy — patches quickly", "Requires heat-welding equipment", "Easy — patches with adhesive"],
                  ["Seam method", "Torched, mopped, or self-adhered overlaps", "Heat-welded", "Taped or adhered"],
                ]}
              />

              <p className="text-white/80 leading-relaxed mb-4 text-base">
                If your roof gets regular foot traffic or is in a storm-prone area where impact resistance matters, modified bitumen's layered, redundant construction is a genuine strength. If minimizing cooling costs is the priority, TPO's reflectivity usually wins. If lowest upfront cost and long service life with minimal maintenance is the goal, EPDM often comes out ahead — though it offers less puncture resistance than mod bit.
              </p>
              <p className="text-white/80 leading-relaxed text-base">
                There's no single "best" flat roofing material. The right one depends on your building's traffic, climate, budget, and how long you plan to own the property. You can explore other alternative materials like{" "}
                <Link
                  href="/blog/cold-mix-bitumen"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors font-medium"
                >
                  cold mix bitumen
                </Link>{" "}
                which is typically reserved for pothole and pavement repair rather than structural roofing.
              </p>
            </section>

            {/* ── SECTION: Pros and Cons ── */}
            <section id="pros-cons" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-blue-400 pl-4">
                Pros and Cons of Modified Bitumen Roofing
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-emerald-500/10 border border-emerald-400/20 rounded-2xl p-6">
                  <h3 className="text-emerald-400 font-black text-lg mb-4 flex items-center gap-2">
                    <CheckCircle2 size={18} /> Advantages
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "High tensile strength and strong resistance to punctures, tears, and foot traffic",
                      "Multi-ply, redundant construction — a single puncture doesn't cause an immediate leak",
                      "Multiple installation methods, so contractors can adapt to fire codes or access constraints",
                      "Excellent waterproofing, especially in multi-ply configurations",
                      "Patches and repairs quickly and inexpensively compared to welded single-ply systems",
                      "Decades of field performance data — it's a proven system, not a newer, less-tested product",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-white/80 text-sm">
                        <span className="text-emerald-400 shrink-0 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-red-500/10 border border-red-400/20 rounded-2xl p-6">
                  <h3 className="text-red-400 font-black text-lg mb-4 flex items-center gap-2">
                    <AlertCircle size={18} /> Drawbacks
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Shorter average lifespan than TPO, EPDM, or PVC",
                      "Dark cap sheets absorb heat, which can raise cooling costs unless a reflective coating is used",
                      "Torch-applied installation carries fire risk and often requires permits and a fire watch",
                      "Installation can produce strong odors and fumes, particularly with torch-down application",
                      "Heavier than single-ply membranes, which matters on older structures with limited load capacity",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-white/80 text-sm">
                        <span className="text-red-400 shrink-0 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* ── SECTION: Signs of Repair ── */}
            <section id="repair-signs" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Signs Your Modified Bitumen Roof Needs Repair or Replacement
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Catching problems early is almost always cheaper than waiting for a leak. Watch for:
              </p>
              
              <div className="bg-gradient-to-br from-teal-500/10 to-blue-600/5 border border-teal-400/20 rounded-2xl p-5 mb-6 not-prose">
                <p className="text-white/85 text-sm leading-relaxed mb-0">
                  <strong className="text-teal-300">Need to fix a leak?</strong> Read our comprehensive step-by-step guide on <Link href="/blog/modified-bitumen-roof-repair" className="text-orange-400 hover:text-orange-300 font-semibold underline underline-offset-2 transition-colors">Modified Bitumen Roof Repair</Link> for detailed instructions on fixing blisters, seam failures, and ponding water.
                </p>
              </div>
              <ul className="space-y-3 mb-6 bg-white/5 p-6 rounded-2xl border border-white/10">
                {[
                  { bold: "Blistering or bubbling", text: "on the membrane surface, which signals trapped moisture or air" },
                  { bold: "Cracking or splitting", text: "especially around seams and flashing details" },
                  { bold: "Granule loss", text: "on the cap sheet, which exposes the asphalt underneath to direct UV damage" },
                  { bold: "Standing water", text: "that doesn't drain within a day or two after rain" },
                  { bold: "Soft spots underfoot", text: "which can indicate saturated insulation below the membrane" },
                  { bold: "Visible seam separation", text: "where two sheets of membrane have pulled apart" },
                ].map(({ bold, text }) => (
                  <li key={bold} className="flex items-start gap-3 text-white/80 text-sm">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-orange-400 shrink-0" />
                    <span><strong className="text-white">{bold}</strong> {text}</span>
                  </li>
                ))}
              </ul>

              <p className="text-white/80 leading-relaxed mb-6 text-base">
                A twice-yearly inspection — typically spring and fall — plus a check after major storms is standard practice for catching these issues before they turn into structural repairs. Check our guide on <Link href="/blog/bitumen-grades-explained" className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors">bitumen grades</Link> if you're interested in the core material testing behind these roofs.
              </p>

              {/* Image 6 */}
              <SectionImage
                src="/modified-bitumen-roof-damage-repair.webp"
                alt="Signs of modified bitumen roof damage needing repair — cracking, blistering, and seam separation"
                caption="Identifying blistering, granule loss, or seam separation early can save thousands in extensive roof deck repairs"
              />
            </section>

            {/* ── SECTION: Conclusion ── */}
            <section id="conclusion" className="mb-12 scroll-mt-24">
              <h3 className="text-2xl font-black text-white mb-5 border-l-4 border-blue-400 pl-4">
                Conclusion
              </h3>
              <div className="bg-gradient-to-br from-blue-500/15 via-teal-600/10 to-purple-600/10 border border-white/15 rounded-2xl p-6 md:p-8">
                <p className="text-white/85 leading-relaxed mb-4 text-base">
                  Modified bitumen earns its long track record by doing one thing well: standing up to punctures, foot traffic, and storm debris better than most single-ply alternatives, thanks to its layered construction. It costs less upfront than TPO in many markets and repairs faster and cheaper than heat-welded systems when something does go wrong.
                </p>
                <p className="text-white/85 leading-relaxed text-base">
                  Where it gives ground is lifespan and energy efficiency — TPO and EPDM both tend to outlast it, and an uncoated dark membrane won't do your cooling bills any favors. For buildings with heavy roof traffic, tight budgets, or a need for fast, reliable repairs, modified bitumen remains one of the most practical flat roofing systems available. For buildings prioritizing energy savings above all else, it's worth weighing against TPO before deciding. You can learn more about general bituminous products by exploring our <Link href="/blog" className="text-blue-300 hover:text-blue-200 underline underline-offset-2">Knowledge Hub</Link>.
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
                    q: "Is modified bitumen roofing good for residential homes?",
                    a: "It's mainly used on flat or low-slope roofs, which are more common on additions, garages, porches, and some modern home designs than on standard pitched residential roofs. For a flat-roof section of a house, it's a solid, cost-effective option.",
                  },
                  {
                    q: "Is torch-down roofing safe?",
                    a: "Yes, when installed by a licensed, experienced crew following local fire codes. Most jurisdictions require a hot work permit and a fire watch during and after installation because of the open flame involved.",
                  },
                  {
                    q: "Can you install modified bitumen over an existing roof?",
                    a: "In many cases, yes — if the existing deck and insulation are in good condition and local code allows an overlay. A roofing contractor needs to inspect the existing structure first, since a compromised deck or wet insulation underneath should be addressed rather than covered over.",
                  },
                  {
                    q: "How is modified bitumen different from built-up roofing (BUR)?",
                    a: "BUR is built on-site, layer by layer, alternating hot asphalt and reinforcing felt. Modified bitumen is manufactured off-site as pre-formed rolls with polymers already added, which makes installation faster and more consistent while still keeping BUR's proven multi-layer approach.",
                  },
                  {
                    q: "Does color affect performance?",
                    a: "Yes. Dark cap sheets absorb more heat, which can increase cooling costs and accelerate UV-related aging. A reflective granule cap sheet or an applied coating reduces heat absorption and can extend the membrane's service life.",
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

            {/* ── Navigation ── */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-white/60 hover:text-white font-semibold text-sm transition-colors group"
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                Back to Blog
              </Link>
              <a
                href="https://www.nrca.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/60 hover:text-white font-semibold text-sm transition-colors group"
              >
                National Roofing Contractors Assoc. (NRCA) <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          
          <AuthorBio />
        </article>

          
        </div>
      </div>
    </>
  );
}
