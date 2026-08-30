import AuthorBio from "../../components/AuthorBio";
// app/blog/modified-bitumen-roof-repair/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import {
  ChevronRight, Clock, Calendar, BookOpen, ArrowRight, ArrowLeft,
  CheckCircle2, AlertCircle, ExternalLink, Wrench, ShieldCheck, AlertTriangle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Modified Bitumen Roof Repair: Problems, Fixes & When to Call a Pro",
  description: "Learn how to repair a modified bitumen roof — blisters, seam failure, ponding water, punctures & cracks. Step-by-step fixes, DIY vs professional guide, and maintenance tips.",
  keywords: ["modified bitumen roof repair","mod bit roof repair","bitumen roof blister repair","modified bitumen seam failure","flat roof repair","ponding water flat roof","modified bitumen roof problems","torch down roof repair","bitumen membrane repair","modified bitumen roof maintenance"],
  alternates: { canonical: "https://bitumencalcpro.com/blog/modified-bitumen-roof-repair" },
  openGraph: {
    title: "Modified Bitumen Roof Repair: Common Problems, Fixes & When to Call a Professional | BitumenCalcPro",
    description: "Learn how to repair a modified bitumen roof — blisters, seam failure, ponding water, punctures & cracks. Step-by-step fixes, DIY vs professional guide, and maintenance tips.",
    url: "https://bitumencalcpro.com/blog/modified-bitumen-roof-repair",
    siteName: "BitumenCalcPro",
    type: "article",
    publishedTime: "2026-08-10T00:00:00.000Z",
    authors: ["BitumenCalcPro"],
    images: [{ url: "/modified-bitumen-roof-repair-guide.webp", width: 1200, height: 630, alt: "Modified bitumen roof repair — fixing blisters, seams, and leaks on a flat roof" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Modified Bitumen Roof Repair: Common Problems, Fixes & When to Call a Pro",
    description: "Step-by-step guide to repairing modified bitumen roofs — blisters, seam failure, ponding water, punctures, and when DIY is not enough.",
    images: ["/modified-bitumen-roof-repair-guide.webp"],
  },
  robots: { "max-image-preview": "large" },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Modified Bitumen Roof Repair: Common Problems, Fixes & When to Call a Professional",
  description: "Learn how to repair a modified bitumen roof — blisters, seam failure, ponding water, punctures & cracks. Step-by-step fixes, DIY vs professional guide, and maintenance tips.",
  image: "https://bitumencalcpro.com/modified-bitumen-roof-repair-guide.webp",
  datePublished: "2026-08-10T00:00:00.000Z",
  dateModified: "2026-08-10T00:00:00.000Z",
  author: { "@type": "Organization", name: "BitumenCalcPro", url: "https://bitumencalcpro.com" },
  publisher: { "@type": "Organization", name: "BitumenCalcPro", url: "https://bitumencalcpro.com", logo: { "@type": "ImageObject", url: "https://bitumencalcpro.com/favicon.ico" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://bitumencalcpro.com/blog/modified-bitumen-roof-repair" },
  keywords: "modified bitumen roof repair, mod bit roof repair, bitumen roof blister repair, seam failure, flat roof repair, ponding water",
  articleSection: "Roofing & Waterproofing",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is the most common cause of modified bitumen roof leaks?", acceptedAnswer: { "@type": "Answer", text: "Seam failure. The bonds between overlapping sheets weaken over time from heat cycling and UV exposure, creating a path for water even when the rest of the membrane looks intact." } },
    { "@type": "Question", name: "How do I know if a blister needs to be repaired?", acceptedAnswer: { "@type": "Answer", text: "Small, firm blisters under about two inches that are not growing can often be monitored. Larger blisters, ones near a seam, or ones that feel soft or spongy indicate trapped moisture and should be repaired." } },
    { "@type": "Question", name: "Is ponding water on a modified bitumen roof a serious problem?", acceptedAnswer: { "@type": "Answer", text: "Yes, if it lasts more than 48 hours after rain. Persistent ponding accelerates membrane wear and usually points to a drainage issue that needs addressing, not just the visible water itself." } },
    { "@type": "Question", name: "Can I repair a modified bitumen roof myself?", acceptedAnswer: { "@type": "Answer", text: "Small, isolated issues like a single blister or minor crack are manageable DIY repairs with basic roofing tools. Widespread seam failure, recurring leaks, or roofs with multiple problem areas are better handled by a roofing professional." } },
    { "@type": "Question", name: "How often should I inspect a modified bitumen roof?", acceptedAnswer: { "@type": "Answer", text: "At least twice a year, plus after any severe weather event like a hailstorm or high winds." } },
    { "@type": "Question", name: "How long does a modified bitumen roof last?", acceptedAnswer: { "@type": "Answer", text: "Typically 15 to 20 years with regular maintenance. Without it, that lifespan can drop to around 10 years as small issues go unaddressed and compound." } },
    { "@type": "Question", name: "What is the difference between repairing modified bitumen and other bitumen roofing?", acceptedAnswer: { "@type": "Answer", text: "The repair techniques are similar, but modified bitumen's polymer-enhanced membrane and heat-welded or adhesive seam systems call for compatible repair materials. Always use materials specified for your exact membrane type." } },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://bitumencalcpro.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://bitumencalcpro.com/blog" },
    { "@type": "ListItem", position: 3, name: "Modified Bitumen Roof Repair", item: "https://bitumencalcpro.com/blog/modified-bitumen-roof-repair" },
  ],
};

function SectionImage({ src, alt, caption, priority }: { src: string; alt: string; caption?: string; priority?: boolean }) {
  return (
    <figure className="my-8 sm:my-10 w-[calc(100vw-32px)] max-w-full lg:w-full overflow-hidden not-prose">
      <div className="relative w-full max-w-full rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 shadow-xl sm:shadow-2xl bg-black/20">
        <Image src={src} alt={alt} width={1200} height={675} className="w-full max-w-full h-auto object-contain sm:object-cover" style={{ maxWidth: '100%', height: 'auto', display: 'block' }} sizes="(max-width: 768px) 100vw, (max-width: 1280px) 75vw, 900px" priority={priority} />
      </div>
      {caption && <figcaption className="mt-3 text-center text-sm text-white/45 italic">{caption}</figcaption>}
    </figure>
  );
}

function InfoTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="my-6 sm:my-8 -mx-4 sm:mx-0 overflow-x-auto not-prose sm:rounded-xl border-y sm:border border-white/10 shadow-lg">
      <table className="w-full min-w-[320px] text-sm">
        <thead>
          <tr className="bg-orange-600/25 border-b border-white/10">
            {headers.map((h) => <th key={h} className="text-left px-3 py-2.5 sm:px-5 sm:py-3.5 text-white font-bold text-xs uppercase tracking-wider">{h}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={`border-b border-white/5 ${i % 2 === 0 ? "bg-white/5" : "bg-white/[0.02]"} hover:bg-white/10 transition-colors`}>
              {row.map((cell, j) => <td key={j} className="px-3 py-2 sm:px-5 sm:py-3 text-white/80 leading-relaxed text-xs sm:text-sm">{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function StepCard({ number, title, children }: { number: number; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-5 mb-8 not-prose">
      <div className="shrink-0 w-10 h-10 rounded-full bg-orange-500/20 border border-orange-400/30 flex items-center justify-center font-black text-orange-300 text-sm mt-0.5">{number}</div>
      <div className="flex-1">
        <h3 className="text-white font-black text-lg mb-2">{title}</h3>
        <div className="text-white/75 text-base leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

export default function ModifiedBitumenRoofRepairPage() {
  return (
    <>
      <Script id="schema-article-roof-repair" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="schema-faq-roof-repair" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="schema-breadcrumb-roof-repair" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* HERO BAND */}
      <div className="relative pt-16 pb-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-teal-600/10 pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-orange-500/10 blur-[100px] pointer-events-none" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-1.5 text-sm text-white/55 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={13} />
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <ChevronRight size={13} />
            <span className="text-white/90 font-medium">Modified Bitumen Roof Repair</span>
          </nav>
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="inline-flex items-center gap-1.5 bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
              <Wrench size={12} />
              Roofing &amp; Waterproofing
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-6 max-w-4xl">
            Modified Bitumen Roof Repair: Common Problems, Fixes &amp; When to Call a Professional
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-white/50 text-sm mb-10">
            <span className="flex items-center gap-1.5"><Calendar size={13} /><time dateTime="2026-08-10">August 10, 2026</time></span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="flex items-center gap-1.5"><Clock size={13} />15 min read</span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="text-white/50">By BitumenCalcPro</span>
          </div>
        </div>
      </div>

      {/* IMAGE 1: Hero — below title/date, before Quick Answer */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionImage
          src="/modified-bitumen-roof-repair-guide.webp"
          alt="Modified bitumen roof repair — patching blisters, seams, and cracks on a flat mod bit roof"
          caption="Most modified bitumen roof problems come down to a handful of causes — and most have a clear fix once correctly diagnosed"
          priority
        />
      </div>

      {/* ARTICLE BODY + SIDEBAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24">
        <div className="flex flex-col xl:flex-row gap-12 items-start">
          <article className="flex-1 min-w-0">

            {/* Quick Answer */}
            <div className="mb-10 bg-gradient-to-br from-orange-500/15 to-orange-600/10 border border-orange-400/25 rounded-2xl p-6 md:p-8">
              <h2 className="text-lg font-black text-orange-300 mb-3 flex items-center gap-2">
                <CheckCircle2 size={18} />Quick Answer
              </h2>
              <p className="text-white/85 leading-relaxed text-base">
                Modified bitumen roof repair usually means fixing <strong className="text-white">blisters, seam failures, punctures, or ponding water</strong> on a polymer-modified bitumen membrane. Most repairs involve cleaning the damaged area, cutting out the failed section, and resealing it with compatible lap cement, seam tape, or a heat-welded patch. Small issues caught early are simple DIY fixes; widespread seam failure or repeated leaks usually call for a professional.
              </p>
            </div>


            {/* SECTION: What Is Modified Bitumen */}
            <section id="what-is-modified-bitumen" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">What Is Modified Bitumen Roofing?</h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Modified bitumen is bitumen blended with polymers — usually <strong className="text-white">SBS rubber or APP plastic</strong> — to make it more flexible and durable than plain bitumen. The membrane comes in rolls that get installed in overlapping sheets, either heat-welded (torch-down), self-adhered, or set in hot or cold adhesive, depending on the system. For a full breakdown of the material and installation types, see our guide on{" "}
                <Link href="/blog/modified-bitumen-roofing" className="text-orange-400 hover:text-orange-300 underline underline-offset-2 transition-colors font-semibold">Modified Bitumen Roofing</Link>.
              </p>
              <p className="text-white/80 leading-relaxed text-base">
                This repair guide assumes you already have a modified bitumen roof and something has gone wrong — a leak, a bubble, a crack, or standing water that will not drain. If you are trying to figure out what type of roofing to install in the first place, the roofing guide above is the better starting point.
              </p>
            </section>

            {/* SECTION: Common Problems */}
            <section id="common-problems" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">Common Modified Bitumen Roof Problems</h2>
              <p className="text-white/80 leading-relaxed mb-6 text-base">Most modified bitumen roof issues fall into a handful of recurring categories. Knowing which one you are dealing with determines the fix.</p>

              {/* IMAGE 2: After intro paragraph, before Seam Failure */}
              <SectionImage
                src="/modified-bitumen-roof-common-problems.webp"
                alt="Common modified bitumen roof problems — blisters, seam failure, ponding water, and alligatoring on a flat roof"
                caption="Most modified bitumen roof failures trace back to one of six recurring problem types — each with a distinct cause and repair approach"
              />

              <div className="space-y-6">
                <div id="seam-failure" className="scroll-mt-24 bg-white/5 border border-white/10 rounded-2xl p-6 border-l-4 border-l-orange-400">
                  <h3 className="text-xl font-black text-white mb-3">Seam Failure</h3>
                  <p className="text-white/75 text-base leading-relaxed">Modified bitumen roofs are built from overlapping sheets bonded together at the seams, either with heat-welding or adhesive. Over time, heat cycling, UV exposure, and repeated expansion and contraction cause these bonds to loosen, lift, or separate. Seam failure is widely considered the single most common cause of leaks on modified bitumen roofs, since a failed seam creates a direct, often invisible, path for water to get underneath the membrane.</p>
                </div>
                <div id="blisters" className="scroll-mt-24 bg-white/5 border border-white/10 rounded-2xl p-6 border-l-4 border-l-teal-400">
                  <h3 className="text-xl font-black text-white mb-3">Blisters</h3>
                  <p className="text-white/75 text-base leading-relaxed">Blisters form when air or moisture gets trapped between the membrane and the layer beneath it, often from a small amount of moisture present during installation or from water that found its way in through an earlier, smaller defect. When the sun heats the roof, that trapped pocket expands and pushes the membrane up into a bubble. Small, firm blisters under about two inches that are not growing can often be monitored rather than repaired immediately. Larger blisters, ones near a seam, or ones that feel soft and spongy usually mean trapped moisture and need attention before they rupture.</p>
                </div>
                <div id="ponding-water" className="scroll-mt-24 bg-white/5 border border-white/10 rounded-2xl p-6 border-l-4 border-l-blue-400">
                  <h3 className="text-xl font-black text-white mb-3">Ponding Water</h3>
                  <p className="text-white/75 text-base leading-relaxed">Modified bitumen roofs are typically flat or low-slope, which makes drainage a genuine design concern. Water that sits for more than <strong className="text-white">48 hours after rainfall</strong> is considered ponding, and it is a warning sign rather than a cosmetic issue. Standing water accelerates membrane degradation, adds real structural weight to the roof deck, and often points to a drainage design problem rather than a one-time fluke.</p>
                </div>
                <div id="punctures" className="scroll-mt-24 bg-white/5 border border-white/10 rounded-2xl p-6 border-l-4 border-l-violet-400">
                  <h3 className="text-xl font-black text-white mb-3">Punctures</h3>
                  <p className="text-white/75 text-base leading-relaxed">Foot traffic during HVAC maintenance, dropped tools, and falling debris are the most common causes of punctures. A puncture creates an immediate, obvious path for water intrusion, which makes it one of the easier problems to spot but also one that needs prompt attention rather than monitoring.</p>
                </div>
                <div id="alligatoring" className="scroll-mt-24 bg-white/5 border border-white/10 rounded-2xl p-6 border-l-4 border-l-yellow-500">
                  <h3 className="text-xl font-black text-white mb-3">Alligatoring and Cracking</h3>
                  <p className="text-white/75 text-base leading-relaxed">Alligatoring describes a pattern of fine, interconnected cracks that resemble reptile skin, caused by UV exposure drying out and embrittling the asphalt over years of sun exposure. Unlike a single crack or split, alligatoring across a wide area often signals the membrane is nearing the end of its service life rather than suffering an isolated, repairable defect.</p>
                </div>
                <div id="flashing-failure" className="scroll-mt-24 bg-white/5 border border-white/10 rounded-2xl p-6 border-l-4 border-l-red-400">
                  <h3 className="text-xl font-black text-white mb-3">Flashing Failure</h3>
                  <p className="text-white/75 text-base leading-relaxed">The flashing around vents, HVAC units, skylights, and roof edges is a different material system than the field membrane, and it fails differently — usually from sealant breakdown, corrosion, or movement at the joint between the flashing and the membrane. Flashing problems are easy to overlook during a casual inspection but are a common source of leaks that get misdiagnosed as membrane failure.</p>
                </div>
              </div>
            </section>

            {/* SECTION: Signs */}
            <section id="signs-of-repair" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">Signs You Need Modified Bitumen Roof Repair</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { sign: "Interior water stains or active drips, especially after rain", color: "red" },
                  { sign: "Blisters that are growing, soft, or located near a seam", color: "orange" },
                  { sign: "Water pooling anywhere on the roof more than 48 hours after rainfall", color: "blue" },
                  { sign: "Visible cracks, splits, or a widespread alligatoring pattern", color: "yellow" },
                  { sign: "Lifted, separated, or curling seams", color: "orange" },
                  { sign: "Granule loss leaving bare, shiny patches on the membrane surface", color: "teal" },
                  { sign: "Soft or spongy spots underfoot, which can indicate a saturated substrate beneath the membrane", color: "red" },
                ].map(({ sign, color }, i) => (
                  <div key={i} className={`flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4 border-l-4 ${color === "red" ? "border-l-red-400" : color === "orange" ? "border-l-orange-400" : color === "blue" ? "border-l-blue-400" : color === "yellow" ? "border-l-yellow-400" : "border-l-teal-400"}`}>
                    <AlertTriangle size={16} className={`shrink-0 mt-0.5 ${color === "red" ? "text-red-400" : color === "orange" ? "text-orange-400" : color === "blue" ? "text-blue-400" : color === "yellow" ? "text-yellow-400" : "text-teal-400"}`} />
                    <p className="text-white/75 text-sm leading-relaxed">{sign}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION: How to Repair */}
            <section id="how-to-repair" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">How to Repair a Modified Bitumen Roof</h2>
              <p className="text-white/80 leading-relaxed mb-8 text-base">The repair approach depends on the specific problem, but most fixes follow a similar sequence.</p>
              <StepCard number={1} title="Inspect the Full Roof, Not Just the Obvious Spot">
                <p>A visible leak inside the building does not always sit directly beneath the actual roof defect, since water can travel along the deck before dripping through. Walk the entire roof looking for blisters, ponding, cracks, and lifted seams, and check flashing around every penetration. Some roofing contractors use <strong className="text-white">infrared thermography</strong> to spot trapped moisture that is not visible from the surface.</p>
              </StepCard>
              <StepCard number={2} title="Clean the Damaged Area">
                <p>Sweep away dirt, debris, and loose granules from the area you are repairing. If the membrane is stained or greasy, a mild detergent helps, but the surface needs to be <strong className="text-white">completely dry</strong> before any repair material goes on — trapped moisture under a fresh patch just recreates the same problem.</p>
              </StepCard>
              <StepCard number={3} title="Repair Blisters">
                <p>Cut an X-shape over the blister with a utility knife, fold back the flaps, and let the area dry out completely. Once dry, apply roofing cement underneath the flaps, press them back down, and cover the repair with a patch of compatible membrane material, sealed at the edges.</p>
              </StepCard>

              {/* IMAGE 4: Immediately after Step 3: Repair Blisters */}
              <SectionImage
                src="/modified-bitumen-roof-blister-repair.webp"
                alt="Modified bitumen roof blister repair — cutting an X shape over a blister, drying the area, and resealing with roofing cement and a membrane patch"
                caption="Cut the blister open in an X shape, let moisture fully escape and dry, then cement the flaps down and cover with a compatible membrane patch"
              />

              <StepCard number={4} title="Repair Seams">
                <p>Clean out the separated seam, apply compatible lap cement or re-heat-weld the joint depending on the membrane type, and reinforce it with seam tape where needed. Because seam failure is the most common source of leaks on a modified bitumen roof, a proper reseal here matters more than almost any other repair on the roof.</p>
              </StepCard>

              {/* IMAGE 3: Inside How to Repair, immediately after Step 4: Repair Seams */}
              <SectionImage
                src="/modified-bitumen-roof-seam-repair.webp"
                alt="Modified bitumen roof seam repair — applying lap cement and pressing down a separated seam on a flat bitumen membrane roof"
                caption="Seam repairs are the highest-impact repairs on a modified bitumen roof — clean the joint thoroughly before applying lap cement or heat-welding"
              />

              <StepCard number={5} title="Repair Cracks and Splits">
                <p>Clean and fully dry the cracked area, then apply a fabric-reinforced bitumen coating or a roofing patch over the split. For alligatoring that covers a large section rather than an isolated crack, patching individual cracks becomes impractical, and a broader resurfacing or replacement is usually the more sensible option.</p>
              </StepCard>
              <StepCard number={6} title="Address Punctures">
                <p>Small punctures can be patched the same way as a crack — clean, dry, patch, and seal the edges. Larger punctures or ones near a seam should get the same reinforced patch treatment as a seam repair, since the surrounding material is often already under more stress.</p>
              </StepCard>
            </section>

            {/* SECTION: DIY vs Professional */}
            <section id="diy-vs-professional" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">DIY Repair vs. Calling a Professional</h2>

              {/* IMAGE 5: Immediately above the DIY vs Professional table */}
              <SectionImage
                src="/modified-bitumen-roof-professional-inspection.webp"
                alt="Modified bitumen roof professional inspection — a roofing contractor examining a flat roof membrane for seam failure and hidden moisture damage"
                caption="A professional inspection becomes worthwhile whenever failures are recurring, widespread, or the roof is aging past its midpoint"
              />

              <InfoTable
                headers={["Situation", "Recommendation", "Official Guideline & Data"]}
                rows={[
                  ["Single small blister (< 2 inches) or minor crack", "DIY possible (Cold-applied)", "NRCA allows temporary cold-patching for minor surface defects. Open flames (torches) should never be used by DIYers."],
                  ["Torch-applied (Heat-welded) repairs", "Professional Required", "OSHA & NRCA (CERTA training) strictly restrict open-flame roofing to certified professionals due to extreme fire and injury hazards."],
                  ["Active leak with unknown origin", "Professional Required", "NRCA guidelines recommend professional infrared thermography or core testing to locate trapped moisture and prevent deck rot."],
                  ["Widespread seam failure or alligatoring", "Professional Required", "Indicates systemic membrane failure. Professional assessment needed for resurfacing vs. replacement (Avg. repair cost: $300-$1,200 minimum)."],
                  ["Persistent ponding water (> 48 hours)", "Professional Required", "Building codes require positive drainage. Tapered insulation or new drain installation requires structural and plumbing expertise."],
                  ["Roof under active manufacturer warranty", "Professional Required", "Performing unauthorized DIY repairs or using incompatible patches instantly voids most commercial roofing warranties."]
                ]}
              />
              <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 border border-orange-400/20 rounded-2xl p-6 not-prose mt-6">
                <div className="flex items-start gap-3">
                  <ShieldCheck size={20} className="text-orange-400 shrink-0 mt-0.5" />
                  <p className="text-white/80 text-sm leading-relaxed"><strong className="text-white">A repair that keeps failing in the same location</strong> is the clearest signal that the visible symptom is not the actual problem. Trapped moisture underneath the membrane, a structural drainage issue, or a much larger area of deteriorated material is usually the real cause — and patching the surface repeatedly will not fix it.</p>
                </div>
              </div>
            </section>

            {/* SECTION: Cost Factors */}
            <section id="cost-factors" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">What Affects Modified Bitumen Roof Repair Cost</h2>
              <p className="text-white/80 leading-relaxed mb-6 text-base">
                Exact repair costs vary too much by region, roof size, and contractor to quote a reliable number here, but a few factors consistently drive the price. The{" "}
                <a href="https://www.nrca.net/roofing/what-is-roofing" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors">
                  National Roofing Contractors Association (NRCA)<ExternalLink size={12} className="inline ml-0.5 mb-0.5" />
                </a>{" "}
                and local licensed roofing contractors are the most reliable sources for region-specific cost benchmarks.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Size and number of repair areas", desc: "A single blister costs far less to fix than a roof with multiple seam failures spread across its surface.", color: "orange" },
                  { title: "Accessibility", desc: "Steep access, height, or obstructions around the roof increase labor time and cost significantly.", color: "teal" },
                  { title: "Membrane type and age", desc: "Matching repair materials to an older or discontinued membrane type can add cost and complexity.", color: "violet" },
                  { title: "Root cause investigation", desc: "Diagnosing a hidden moisture source, especially with infrared thermography, adds cost but prevents repeat failures.", color: "blue" },
                  { title: "Repair vs. resurfacing vs. replacement", desc: "Widespread damage often makes a broader resurfacing more cost-effective per square foot than patching dozens of individual spots.", color: "orange" },
                ].map(({ title, desc, color }) => (
                  <div key={title} className={`bg-white/5 border border-white/10 rounded-xl p-5 border-l-4 ${color === "orange" ? "border-l-orange-400" : color === "teal" ? "border-l-teal-400" : color === "violet" ? "border-l-violet-400" : "border-l-blue-400"}`}>
                    <h3 className="text-white font-bold mb-2 text-base">{title}</h3>
                    <p className="text-white/65 text-sm leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION: Preventing Future Repairs */}
            <section id="preventing-repairs" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">Preventing Future Repairs</h2>
              {/* IMAGE 6: Immediately before "Preventing Future Repairs" content */}
              <SectionImage
                src="/modified-bitumen-roof-maintenance-drainage.webp"
                alt="Modified bitumen roof maintenance and drainage — clearing roof drains and inspecting membrane surface to prevent ponding and premature failure"
                caption="Keeping drains clear and scheduling two inspections per year are the two highest-impact maintenance habits on a flat modified bitumen roof"
              />
              <p className="text-white/80 leading-relaxed mb-6 text-base">
                Regular maintenance is what actually keeps a modified bitumen roof out of repair cycles in the first place. For context on what material quality means for longevity, our guide on{" "}
                <Link href="/blog/what-is-bitumen" className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors">what bitumen is</Link>{" "}
                explains how polymer modification affects durability at a material level.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Inspect at least twice a year, and always after severe weather events like hail or high winds",
                  "Clear debris regularly — leaves and branches trap moisture against the membrane and accelerate degradation",
                  "Keep drains and gutters clear to prevent ponding water from developing in the first place",
                  "Address small issues immediately — a small crack or lifted seam is a simple fix; the same problem left for a year often is not",
                  "Track recurring problem areas — a spot that keeps failing after repair usually needs a root-cause fix, not another patch",
                ].map((tip, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
                    <CheckCircle2 size={16} className="text-teal-400 shrink-0 mt-0.5" />
                    <p className="text-white/75 text-sm leading-relaxed">{tip}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION: How Long Do Repairs Last? */}
            <section id="repair-lifespan" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">How Long Do Modified Bitumen Roof Repairs Last?</h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">A well-executed repair on an otherwise sound roof can last for years, effectively matching the remaining service life of the membrane around it. A well-maintained modified bitumen roof overall typically lasts <strong className="text-white">15 to 20 years</strong>, though skipped maintenance and unaddressed minor damage can shorten that closer to 10.</p>
              <p className="text-white/80 leading-relaxed text-base">
                Repairs done on a roof already near the end of that range tend to be shorter-term fixes, since the surrounding membrane is aging at the same rate as the repaired section. At that stage, a full cost-benefit assessment of repair vs. replacement is usually more financially sensible than continued patching. Our free{" "}
                <Link href="/" className="text-orange-400 hover:text-orange-300 underline underline-offset-2 transition-colors font-semibold">Bitumen Calculator</Link>{" "}
                can help estimate material quantities if a larger resurfacing or replacement is on the table.
              </p>
              <div className="mt-6 bg-gradient-to-br from-teal-500/15 to-blue-600/10 border border-teal-400/25 rounded-2xl p-6 not-prose">
                <p className="text-white/85 text-sm leading-relaxed">
                  <strong className="text-teal-300">Related reading:</strong> For a broader look at bitumen grades and their properties, see{" "}
                  <Link href="/blog/bitumen-grades-explained" className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors">Bitumen Grades Explained</Link>.
                </p>
              </div>
            </section>

            {/* SECTION: Summary */}
            <section id="summary" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">Summary</h2>
              <div className="bg-gradient-to-br from-orange-500/15 via-teal-600/10 to-blue-600/10 border border-white/15 rounded-2xl p-6 md:p-8">
                <p className="text-white/85 leading-relaxed mb-4 text-base">Most modified bitumen roof problems trace back to a handful of causes — failed seams, trapped moisture under blisters, ponding water, punctures, or UV-driven cracking — and most have a straightforward repair once correctly diagnosed. Small, isolated issues are reasonable DIY fixes; recurring failures, widespread seam problems, or persistent ponding are signs it is time to bring in a professional.</p>
                <p className="text-white/85 leading-relaxed text-base">
                  Regular inspection and prompt small repairs remain the cheapest way to avoid bigger ones later. For industry standards and best practices on modified bitumen systems, the{" "}
                  <a href="https://www.nrca.net" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 underline underline-offset-2">
                    National Roofing Contractors Association (NRCA)<ExternalLink size={12} className="inline ml-0.5 mb-0.5" />
                  </a>{" "}
                  publishes detailed guidance for roofing professionals and building owners alike.
                </p>
              </div>
            </section>

            {/* SECTION: FAQ */}
            <section id="faq" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-6 border-l-4 border-teal-400 pl-4">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  { q: "What is the most common cause of modified bitumen roof leaks?", a: "Seam failure. The bonds between overlapping sheets weaken over time from heat cycling and UV exposure, creating a path for water even when the rest of the membrane looks intact." },
                  { q: "How do I know if a blister needs to be repaired?", a: "Small, firm blisters under about two inches that are not growing can often be monitored. Larger blisters, ones near a seam, or ones that feel soft or spongy indicate trapped moisture and should be repaired." },
                  { q: "Is ponding water on a modified bitumen roof a serious problem?", a: "Yes, if it lasts more than 48 hours after rain. Persistent ponding accelerates membrane wear and usually points to a drainage issue that needs addressing, not just the visible water itself." },
                  { q: "Can I repair a modified bitumen roof myself?", a: "Small, isolated issues like a single blister or minor crack are manageable DIY repairs with basic roofing tools. Widespread seam failure, recurring leaks, or roofs with multiple problem areas are better handled by a roofing professional." },
                  { q: "How often should I inspect a modified bitumen roof?", a: "At least twice a year, plus after any severe weather event like a hailstorm or high winds." },
                  { q: "How long does a modified bitumen roof last?", a: "Typically 15 to 20 years with regular maintenance. Without it, that lifespan can drop to around 10 years as small issues go unaddressed and compound." },
                  { q: "What is the difference between repairing modified bitumen and other bitumen roofing?", a: "The repair techniques are similar, but modified bitumen's polymer-enhanced membrane and heat-welded or adhesive seam systems call for compatible repair materials. For a broader look at bitumen-based roofing systems, see our general bitumen roofing and materials guides." },
                ].map(({ q, a }, i) => (
                  <details key={i} className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden open:border-white/20 transition-all hover:bg-white/[0.08]">
                    <summary className="flex items-center justify-between gap-4 cursor-pointer p-5 md:p-6 font-bold text-white text-base select-none list-none">
                      <span>{q}</span>
                      <ChevronRight size={18} className="text-orange-400 shrink-0 group-open:rotate-90 transition-transform duration-200" />
                    </summary>
                    <div className="px-5 md:px-6 pb-5 text-white/70 text-sm leading-relaxed border-t border-white/5 pt-4">{a}</div>
                  </details>
                ))}
              </div>
            </section>

            {/* Navigation */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
              <Link href="/blog" className="inline-flex items-center gap-2 text-white/60 hover:text-white font-semibold text-sm transition-colors group">
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Blog
              </Link>
              <Link href="/blog/modified-bitumen-roofing" className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white px-6 py-3 rounded-full font-bold text-sm transition-all shadow-[0_0_20px_rgba(249,115,22,0.35)] hover:shadow-[0_0_30px_rgba(249,115,22,0.55)]">
                Modified Bitumen Roofing Guide <ArrowRight size={15} />
              </Link>
            </div>
          
          <AuthorBio />
        </article>

          {/* SIDEBAR */}
          <aside className="hidden xl:block w-72 shrink-0">
            <div className="sticky top-24">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-white font-black text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
                  <BookOpen size={14} className="text-orange-400" />
                  Table of Contents
                </h3>
                <nav className="space-y-1">
                  {[
                    { id: "what-is-modified-bitumen", label: "What Is Modified Bitumen?" },
                    { id: "common-problems", label: "Common Problems" },
                    { id: "seam-failure", label: "  Seam Failure" },
                    { id: "blisters", label: "  Blisters" },
                    { id: "ponding-water", label: "  Ponding Water" },
                    { id: "punctures", label: "  Punctures" },
                    { id: "alligatoring", label: "  Alligatoring & Cracking" },
                    { id: "flashing-failure", label: "  Flashing Failure" },
                    { id: "signs-of-repair", label: "Signs You Need Repair" },
                    { id: "how-to-repair", label: "How to Repair (Steps)" },
                    { id: "diy-vs-professional", label: "DIY vs Professional" },
                    { id: "cost-factors", label: "Repair Cost Factors" },
                    { id: "preventing-repairs", label: "Preventing Future Repairs" },
                    { id: "repair-lifespan", label: "How Long Repairs Last" },
                    { id: "summary", label: "Summary" },
                    { id: "faq", label: "FAQ" },
                  ].map(({ id, label }) => (
                    <a key={id} href={`#${id}`} className="block text-white/55 hover:text-orange-400 text-xs leading-relaxed py-1 px-2 rounded-lg hover:bg-white/5 transition-all">
                      {label}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Sidebar CTA */}
              <div className="mt-5 bg-gradient-to-br from-orange-500/15 to-teal-500/10 border border-white/10 rounded-2xl p-5 text-center">
                <p className="text-white/80 text-xs leading-relaxed mb-4">Need to estimate bitumen quantities for a paving or roofing project?</p>
                <Link href="/" className="block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white px-4 py-2.5 rounded-xl font-bold text-xs transition-all shadow-[0_0_15px_rgba(249,115,22,0.3)] hover:shadow-[0_0_25px_rgba(249,115,22,0.5)]">
                  Free Bitumen Calculator →
                </Link>
              </div>

              {/* Related Posts */}
              <div className="mt-5 bg-white/5 border border-white/10 rounded-2xl p-5">
                <h3 className="text-white font-black text-xs uppercase tracking-wider mb-4 flex items-center gap-2">
                  <BookOpen size={12} className="text-teal-400" /> Related Articles
                </h3>
                <div className="space-y-3">
                  <Link href="/blog/modified-bitumen-roofing" className="block text-white/60 hover:text-orange-300 text-xs leading-relaxed py-1 transition-colors hover:underline underline-offset-2">
                    Modified Bitumen Roofing: The Complete Guide
                  </Link>
                  <Link href="/blog/what-is-bitumen" className="block text-white/60 hover:text-orange-300 text-xs leading-relaxed py-1 transition-colors hover:underline underline-offset-2">
                    What Is Bitumen? Meaning, Uses &amp; Properties
                  </Link>
                  <Link href="/blog/bitumen-grades-explained" className="block text-white/60 hover:text-orange-300 text-xs leading-relaxed py-1 transition-colors hover:underline underline-offset-2">
                    Bitumen Grades Explained: Penetration, VG, PG
                  </Link>
                  <Link href="/blog/bitumen-density-chart" className="block text-white/60 hover:text-orange-300 text-xs leading-relaxed py-1 transition-colors hover:underline underline-offset-2">
                    Bitumen Density Chart: Values by Grade &amp; Temperature
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
