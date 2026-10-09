import AuthorBio from "../../components/AuthorBio";
// app/blog/how-is-bitumen-transported/page.tsx
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
  Thermometer,
  Truck,
  Ship,
} from "lucide-react";

export const metadata: Metadata = {
  title: "How Is Bitumen Transported? Methods, Temps & Safety Rules",
  description:
    "How is bitumen transported? Road tankers, ships, ISO tanks, rail cars, drums — temperatures, UN 3257 rules, PPE requirements, and a full delivery checklist.",
  keywords: [
    "how is bitumen transported",
    "bitumen transport methods",
    "bitumen tanker temperature",
    "bitumen dangerous goods",
    "UN 3257 bitumen",
    "bitumen road tanker",
    "bitumen carrier ship",
    "ISO tank bitumen",
    "bitumen transport safety",
    "bitumen delivery temperature",
  ],
  alternates: { canonical: "https://bitumencalcpro.com/blog/how-is-bitumen-transported" },
  openGraph: {
    title: "How Is Bitumen Transported? Methods, Temperatures & Safety Rules | BitumenCalcPro",
    description:
      "Road tankers, ships, ISO tanks, rail cars, drums — temperatures, UN 3257 rules, PPE and a full delivery checklist for bitumen transport.",
    url: "https://bitumencalcpro.com/blog/how-is-bitumen-transported",
    siteName: "BitumenCalcPro",
    type: "article",
    publishedTime: "2026-09-28T00:00:00.000Z",
    authors: ["BitumenCalcPro"],
    images: [
      {
        url: "/how-is-bitumen-transported.webp",
        width: 1200,
        height: 675,
        alt: "How is bitumen transported — insulated heated road tanker delivering hot liquid bitumen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Is Bitumen Transported? Methods, Temperatures & Safety Rules",
    description:
      "Road tankers, ships, ISO tanks, rail — temperatures, UN 3257 rules, and a full delivery checklist.",
    images: ["/how-is-bitumen-transported.webp"],
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
    "How Is Bitumen Transported? Methods, Temperatures, and Safety Rules",
  description:
    "Road tankers, ships, ISO tanks, rail cars, drums — temperatures, UN 3257 rules, PPE requirements, and a full delivery checklist for bitumen transport.",
  image: "https://bitumencalcpro.com/how-is-bitumen-transported.webp",
  datePublished: "2026-09-28T00:00:00.000Z",
  dateModified: "2026-09-28T00:00:00.000Z",
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
    logo: {
      "@type": "ImageObject",
      url: "https://bitumencalcpro.com/logo.png",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://bitumencalcpro.com/blog/how-is-bitumen-transported",
  },
  keywords:
    "how is bitumen transported, bitumen transport, bitumen tanker, bitumen carrier ship, UN 3257, bitumen ISO tank, bitumen road transport, bitumen safety",
  articleSection: "Bitumen Fundamentals",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How is bitumen transported by road?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In insulated, heated tankers that hold the load between roughly 120°C and 190°C. The driver and site team follow a discharge procedure and wear full PPE.",
      },
    },
    {
      "@type": "Question",
      name: "At what temperature is bitumen transported?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on grade. Road delivery ranges from 120°C to 190°C, and ships carry cargo up to 250°C. Bitumen emulsion stays between 10°C and 85°C.",
      },
    },
    {
      "@type": "Question",
      name: "Can bitumen be transported cold?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Drums, bags, and blocks carry it cold for remote or small jobs. It must be reheated before use, and drums lose 2% to 3% as residue.",
      },
    },
    {
      "@type": "Question",
      name: "How is bitumen transported overseas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bulk overseas loads go by bitumen carrier ship with insulated, heated cargo tanks. Smaller export volumes travel in heated ISO tank containers.",
      },
    },
    {
      "@type": "Question",
      name: "Is bitumen a dangerous good in transport?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "When loaded at or above 100°C, it is usually classified under UN 3257, Class 9, Packing Group III as an elevated temperature liquid. Check local regulations for your specific route.",
      },
    },
    {
      "@type": "Question",
      name: "How long can bitumen stay hot in a tanker?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on insulation, weather, and starting temperature. Insulated ship tanks lose about 1°C every 4 hours. Road tankers vary — ask the supplier for a maximum transit time.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if bitumen cools in the tanker?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Viscosity rises sharply. Unloading slows and discharge lines can block. The tanker heating system can reheat the load, but long delays increase energy costs and risk a delivery failure.",
      },
    },
    {
      "@type": "Question",
      name: "How is oil sands bitumen transported?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "By pipeline after dilution with 25% to 55% diluent (dilbit), or by rail with less or no diluent required.",
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
      name: "How Is Bitumen Transported?",
      item: "https://bitumencalcpro.com/blog/how-is-bitumen-transported",
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

function QuickFact({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <div className="border-l-4 border-orange-400 pl-5 my-5 not-prose">
      <p className="font-bold text-white mb-1">{question}</p>
      <p className="text-white/70 text-sm leading-relaxed">{answer}</p>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────
export default function HowIsBitumenTransportedPage() {
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
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-orange-600/10 pointer-events-none" />
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
            <span className="text-white/90 font-medium">
              How Is Bitumen Transported?
            </span>
          </nav>

          {/* Category badge */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="inline-flex items-center gap-1.5 bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
              <Truck size={12} />
              Bitumen Fundamentals
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-6 max-w-4xl">
            How Is Bitumen Transported? Methods, Temperatures, and Safety Rules
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-white/75 text-sm mb-10">
            <span className="flex items-center gap-1.5">
              <Calendar size={13} />
              <time dateTime="2026-09-28">September 28, 2026</time>
            </span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="flex items-center gap-1.5">
              <Clock size={13} />
              20 min read
            </span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="text-white/75">By BitumenCalcPro</span>
          </div>
        </div>
      </div>

      {/* ── HERO IMAGE ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionImage
          src="/how-is-bitumen-transported.webp"
          alt="How is bitumen transported — insulated heated road tanker delivering hot liquid paving bitumen to job site"
          caption="Most paving bitumen moves hot at 120–190°C in insulated, heated road tankers"
          priority
        />
      </div>

      {/* ── ARTICLE BODY ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24">
        <div className="flex flex-col xl:flex-row gap-12 items-start">

          {/* ── MAIN CONTENT ── */}
          <article className="flex-1 min-w-0">

            {/* Quick Overview Box */}
            <div className="mb-10 bg-gradient-to-br from-teal-500/15 to-teal-600/10 border border-teal-400/25 rounded-2xl p-6 md:p-8">
              <h2 className="text-lg font-black text-teal-300 mb-3 flex items-center gap-2">
                <CheckCircle2 size={18} />
                Quick Overview
              </h2>
              <p className="text-white/85 leading-relaxed text-base">
                Most road bitumen moves <strong className="text-white">hot, at roughly 120&deg;C to 190&deg;C</strong>, in insulated and heated road tankers, rail tank cars, ISO tank containers, and bitumen carrier ships. Remote or small jobs use cold packaging such as steel drums and bags. Oil sands bitumen also travels by pipeline after it is thinned with diluent. Hot bitumen is usually shipped as a dangerous good under <strong className="text-white">UN 3257</strong>.
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
                  { id: "why-special-transport", label: "Why Bitumen Needs Special Transport" },
                  { id: "methods-at-a-glance", label: "Transport Methods at a Glance" },
                  { id: "road-transport", label: "Road Transport (Tankers)" },
                  { id: "rail-transport", label: "Rail Transport" },
                  { id: "ships-carriers", label: "Ships & Bitumen Carriers" },
                  { id: "iso-tanks", label: "ISO Tank Containers" },
                  { id: "cold-packaging", label: "Drums, Bags & Cold Packaging" },
                  { id: "pipelines-dilbit", label: "Pipelines & Diluted Bitumen" },
                  { id: "emulsion-transport", label: "Bitumen Emulsion Transport" },
                  { id: "temperature-guide", label: "Temperature Guide" },
                  { id: "rules-labeling", label: "Rules & Labeling (UN 3257)" },
                  { id: "safety-hazards", label: "Safety Hazards" },
                  { id: "which-method-fits", label: "Which Method Fits Which Job" },
                  { id: "delivery-checklist", label: "Delivery Checklist" },
                  { id: "transport-loss", label: "Transport Loss & Quantity Estimates" },
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
                Bitumen is a hard, black solid at room temperature. A paver needs it as a hot liquid. Almost every rule of bitumen transport comes from closing that gap.
              </p>
              <p className="text-white/85 leading-relaxed mb-4 text-base">
                So how is bitumen transported from a refinery to a road site without cooling, spilling, or burning anyone? It depends on the grade, the distance, and the job size. A highway project needs bulk tankers. A village patch repair may use a few steel drums. An export order may cross an ocean in a heated ship.
              </p>
              <p className="text-white/85 leading-relaxed text-base">
                Below: the methods, temperatures, rules, hazards, and a delivery checklist. If you want to understand what bitumen is before diving into how it moves, our{" "}
                <Link
                  href="/blog/what-is-bitumen"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors font-medium"
                >
                  complete guide to bitumen
                </Link>{" "}
                covers the chemistry, grades, and uses in full detail.
              </p>
            </section>

            {/* ── SECTION: Why Special Transport ── */}
            <section id="why-special-transport" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                Why Bitumen Needs Special Transport
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Bitumen is thick and sticky at ambient temperature. Heat turns it into a fluid, and the hotter it gets, the thinner it flows. If it cools too far, it will not pump, drain, or spray.
              </p>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Bitumen also insulates well. The layer touching a cold tank wall cools first while the core stays hot. That is why tankers rely on insulation and heating coils to hold the temperature a load already has &mdash; not to heat bitumen from cold.
              </p>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Two products share the name, and they move differently:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3 text-white/80 text-base">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-orange-400 shrink-0" />
                  <span>
                    <strong className="text-white">Road (paving) bitumen</strong> is a refinery product. It moves as a hot liquid, or cold in packaging for small jobs. Understanding{" "}
                    <Link
                      href="/blog/bitumen-grades-explained"
                      className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                    >
                      the different bitumen grades
                    </Link>{" "}
                    helps clarify why different grades demand different handling temperatures.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-white/80 text-base">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-teal-400 shrink-0" />
                  <span>
                    <strong className="text-white">Oil sands bitumen</strong> is produced in places like Alberta. It moves through pipelines after dilution, or by rail.
                  </span>
                </li>
              </ul>
              <div className="bg-white/5 border border-white/10 rounded-xl p-5 mb-6">
                <p className="text-white/70 text-sm leading-relaxed">
                  <strong className="text-white">Terminology note:</strong> In North America, road bitumen is often called <em>asphalt</em> or <em>asphalt cement</em>. This article uses &ldquo;bitumen&rdquo; throughout. For a full breakdown of what separates the binder from the finished pavement mix, see our{" "}
                  <Link
                    href="/blog/asphalt-vs-bitumen"
                    className="text-teal-400 hover:text-orange-300 underline underline-offset-2 transition-colors font-medium"
                  >
                    asphalt vs bitumen complete guide
                  </Link>
                  .
                </p>
              </div>

              <SectionImage
                src="/hot-bitumen-insulated-heated-tanker.webp"
                alt="Hot bitumen inside insulated heated road tanker showing thermal oil heating system maintaining 150 to 190 degree Celsius delivery temperature"
                caption="Insulated tankers use electric coils or hot-oil heating systems to hold delivery temperature — they maintain heat, they do not generate it from cold"
              />
            </section>

            {/* ── SECTION: Methods at a Glance ── */}
            <section id="methods-at-a-glance" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Bitumen Transport Methods at a Glance
              </h2>
              <p className="text-white/80 leading-relaxed mb-6 text-base">
                Each method suits a different scenario. The table below summarises the trade-offs before diving into each one in detail.
              </p>
              <InfoTable
                headers={["Method", "State", "Best For", "Main Drawback"]}
                rows={[
                  ["Road tanker", "Hot liquid", "Refinery or terminal to plant or site", "Heat loss on long trips"],
                  ["Rail tank car", "Hot liquid", "Long-distance bulk", "Needs rail access, then a truck for the last leg"],
                  ["Bitumen carrier ship", "Hot liquid, up to 250°C", "Import, export, coastal bulk", "Needs heated terminals"],
                  ["ISO tank container", "Hot liquid", "Small export loads, places without terminals", "Heating needed at destination"],
                  ["Steel drums", "Cold", "Remote sites, small jobs", "Residue, waste, slow decanting"],
                  ["Bags and blocks", "Cold", "Niche remote supply", "Leaks, packaging that may not melt"],
                  ["Pipeline (dilbit)", "Thinned with diluent", "Oil sands crude bitumen", "Diluent cost and recovery"],
                  ["Emulsion tanker", "Cool, water-based", "Tack coats, spraying, cold mix", "Frost and separation risk"],
                ]}
              />
            </section>

            {/* ── SECTION: Road Transport ── */}
            <section id="road-transport" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                How Is Bitumen Transported by Road?
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Road tankers are the most common link between a terminal and a mixing plant or job site. The tank is insulated and fitted with a heating system, temperature controls, and lagged discharge pipes.
              </p>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Heating comes in two main forms. Electric or steam coils reach about 100&deg;C, and hot oil systems can reach 300&deg;C. A tanker does not heat bitumen from cold &mdash; it holds the heat the load already has.
              </p>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Distance is the practical limit. A poorly lagged tank lets the load thicken on a long trip. Cooled bitumen slows unloading, burns more heating fuel, blocks discharge lines, and leaves crews waiting on site. That is why delivery distances stay limited and route planning matters.
              </p>

              <h3 className="text-2xl font-black text-white mb-4 mt-8">
                Road Tanker Loading and Unloading Procedure
              </h3>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                The routine below is a typical pattern used in the UK and many other markets. Steps vary by country and individual site requirements.
              </p>

              <div className="space-y-3 mb-6">
                {[
                  {
                    step: "01",
                    title: "Receiving tank inspection",
                    desc: "The tank is confirmed clean and dry. Water contact with hot bitumen causes a violent steam reaction, and contamination can ruin the entire load.",
                  },
                  {
                    step: "02",
                    title: "Hose and valve check",
                    desc: "The driver inspects hoses, connections, and valves before pumping begins.",
                  },
                  {
                    step: "03",
                    title: "Discharge permit completion",
                    desc: "Driver and site representative complete a bitumen discharge permit together before unloading starts.",
                  },
                  {
                    step: "04",
                    title: "Monitored transfer",
                    desc: "Someone watches the discharge throughout. If a leak appears anywhere, transfer stops immediately.",
                  },
                  {
                    step: "05",
                    title: "Discharge method",
                    desc: "Delivery uses a ground-based pump, pressure discharge, or gravity. In the UK, around 70% of sites use pressure discharge.",
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

              <SectionImage
                src="/bitumen-road-tanker-rail-transport.webp"
                alt="Bitumen road tanker and rail tank car transport — insulated heated vehicles for delivering hot liquid bitumen over long distances"
                caption="Road tankers and rail tank cars both rely on insulation and heating to keep bitumen pumpable throughout transit"
              />
            </section>

            {/* ── SECTION: Rail Transport ── */}
            <section id="rail-transport" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Rail Transport
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Rail suits long distances and large volumes where trucks alone become slow and expensive. For road bitumen, insulated tank containers can ride the rail network and transfer to a truck for the final leg to the mixing plant or site.
              </p>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Rail matters for oil sands bitumen too. Rail cars need less diluent &mdash; or none &mdash; which saves the cost of thinning the product. Even so, many producers still ship diluted bitumen by rail because pipelines feed the rail loading points.
              </p>
              <p className="text-white/80 leading-relaxed text-base">
                Understanding{" "}
                <Link
                  href="/blog/bitumen-density-chart"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                >
                  bitumen density by grade and temperature
                </Link>{" "}
                is important for rail billing, since density affects how much mass a tank of a given volume carries &mdash; and rail freight is typically billed by weight.
              </p>
            </section>

            {/* ── SECTION: Ships ── */}
            <section id="ships-carriers" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                Ships and Bitumen Carriers
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Bulk overseas trade uses specialized ships. A bitumen carrier has insulated cargo tanks, thermal oil heating, and heated lines and pumps throughout. These systems hold cargo temperatures <strong className="text-white">up to 250&deg;C</strong> throughout the voyage.
              </p>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                The tanker <em>RATHBOYNE</em> is a well-documented example. It has two independent tank blocks of four tanks each, with a total capacity of 5,400 m&sup3;. The tanks are insulated with Rockwool, and layered rubber supports absorb heat so a 250&deg;C cargo reduces to about 80&deg;C where it meets the hull.
              </p>

              <div className="bg-gradient-to-br from-blue-500/10 to-teal-600/10 border border-blue-400/20 rounded-2xl p-6 mb-6">
                <h3 className="text-lg font-black text-blue-300 mb-3 flex items-center gap-2">
                  <Ship size={18} />
                  Marine Cooling Rate
                </h3>
                <p className="text-white/80 leading-relaxed text-base">
                  Marine sources give a typical cooling rate of about <strong className="text-white">1&deg;C every 4 hours</strong> in insulated tanks, so heating runs continuously throughout the voyage. Bitumen also clings to tank walls &mdash; without good temperature control, a significant quantity can remain on board after discharge.
                </p>
              </div>

              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Ships unload at terminals equipped with bitumen pumps, insulated pipelines, and heated shore tanks. From there, road tankers complete the final delivery to mixing plants or job sites.
              </p>

              <SectionImage
                src="/bitumen-carrier-ship-hot-cargo.webp"
                alt="Bitumen carrier ship with insulated heated cargo tanks transporting hot liquid bitumen at up to 250 degrees Celsius for overseas export"
                caption="Specialist bitumen carriers maintain cargo temperatures up to 250°C using thermal oil heating systems throughout the sea voyage"
              />
            </section>

            {/* ── SECTION: ISO Tanks ── */}
            <section id="iso-tanks" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                ISO Tank Containers and Bitumen Containers
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Not every port has a bitumen terminal. Insulated ISO tank containers fill that gap. A bitumen ISO tank is a heated, insulated variant of the standard chemical tank, usually built to T4 or T11 specifications, with heating coils or electric elements. Capacity runs up to 20 tonnes.
              </p>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                The same container moves by truck, rail, and ship interchangeably. That flexibility makes it a practical choice for smaller export volumes or delivery to sites far from a purpose-built terminal.
              </p>

              <SectionImage
                src="/bitumen-iso-tank-drums-cold-packaging.webp"
                alt="Bitumen ISO tank container and steel drums for cold packaging — comparing bulk heated transport versus small-volume cold delivery options"
                caption="ISO tanks offer flexible multimodal transport for smaller export volumes; steel drums suit remote sites where bulk delivery is impractical"
              />
            </section>

            {/* ── SECTION: Cold Packaging ── */}
            <section id="cold-packaging" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                Drums, Bags, and Other Cold Packaging
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Cold transport is a small part of global bitumen trade, covering regions that are hard or costly to reach by bulk methods. For small on-demand patch repairs using cold-applied material, our guide to{" "}
                <Link
                  href="/blog/cold-mix-bitumen"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                >
                  cold mix bitumen
                </Link>{" "}
                covers application rates, storage, and performance limits in detail.
              </p>

              <h3 className="text-2xl font-black text-white mb-4">
                Steel Drums
              </h3>
              <p className="text-white/80 leading-relaxed mb-4 text-base">
                Steel drums are the classic option for small quantities, typically 150 or 200 litre sizes. Their well-known drawbacks:
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "A standard dry box container holds only 72 to 80 drums — about 18 tonnes — less than a bitumen container in the same shipping slot.",
                  "About 2% to 3% of the bitumen stays behind as unrecoverable residue per drum.",
                  "Used drums are hard to recycle and typically become industrial waste.",
                  "Decanting requires a lot of energy and specialised heating equipment.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/80 text-base">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-orange-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="bg-orange-500/10 border border-orange-400/20 rounded-xl p-5 mb-6">
                <p className="text-orange-200 text-sm leading-relaxed font-medium flex items-start gap-2">
                  <AlertCircle size={15} className="mt-0.5 shrink-0" />
                  <span>
                    <strong>Safety warning:</strong> Never heat a sealed drum with a naked flame. Use a decanter or heating chamber built for the job and follow the supplier&apos;s instructions precisely.
                  </span>
                </p>
              </div>

              <h3 className="text-2xl font-black text-white mb-4">
                Bags, Blocks, and Specialist Packaging
              </h3>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Bags have their own problems. Polyethylene, polypropylene, and paper bags often leak during handling, and plastic bags may not fully melt into the bitumen &mdash; meaning workers must remove them manually before use, adding time on site.
              </p>
              <p className="text-white/80 leading-relaxed text-base">
                Blocks, pellets, and cardboard containers also exist. Patent filings describe bitumen blocks wrapped in thermoplastic film, and some suppliers ship in 1 cubic metre cardboard containers recycled after use. Their market share is very small compared with hot bulk delivery.
              </p>
            </section>

            {/* ── SECTION: Pipelines ── */}
            <section id="pipelines-dilbit" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Pipelines and Diluted Bitumen
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Crude oil sands bitumen is too thick to flow through a pipeline on its own. Producers thin it with a diluent such as natural gas condensate at <strong className="text-white">25% to 55% by volume</strong>, depending on the bitumen grade, the pipeline specifications, and the destination refinery. The resulting blend is called <em>dilbit</em>. The diluent costs money, occupies pipeline capacity, and must be recovered and transported back to the oil sands for the next batch.
              </p>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Road bitumen does not normally travel by long-distance pipeline. Inside refineries and terminals, it moves through heated, insulated pipes. Researchers continue to test solid-form bitumen for shipping, but the commercial case remains unproven at scale.
              </p>
              <p className="text-white/80 leading-relaxed text-base">
                For context on why oil sands bitumen behaves so differently from refinery-grade paving bitumen, the{" "}
                <a
                  href="https://natural-resources.canada.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                >
                  Natural Resources Canada oil sands overview
                  <ExternalLink size={12} className="inline ml-0.5 mb-0.5" />
                </a>{" "}
                provides authoritative background on production, composition, and transport methods.
              </p>
            </section>

            {/* ── SECTION: Emulsion Transport ── */}
            <section id="emulsion-transport" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                Bitumen Emulsion Transport
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Emulsion is bitumen dispersed in water with an emulsifier. It needs far less heat than paving bitumen, but it has specific vulnerabilities during transport and storage. For a full breakdown of emulsion types, production methods, and grade codes like CRS-1 and SS-1, see our{" "}
                <Link
                  href="/blog/bitumen-emulsion-explained"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                >
                  bitumen emulsion explained guide
                </Link>
                .
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-white/5 border border-white/10 rounded-xl p-5 border-l-4 border-l-blue-400">
                  <h3 className="text-white font-bold mb-2 text-base flex items-center gap-2">
                    <Thermometer size={15} className="text-blue-400" />
                    Temperature range
                  </h3>
                  <p className="text-white/65 text-sm leading-relaxed">
                    Keep emulsion between <strong className="text-white">10&deg;C and 85&deg;C</strong>. Below 10&deg;C, frost splits the emulsion into bitumen and water permanently &mdash; it cannot be recombined and must be discarded.
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-5 border-l-4 border-l-orange-400">
                  <h3 className="text-white font-bold mb-2 text-base flex items-center gap-2">
                    <AlertCircle size={15} className="text-teal-400" />
                    Handling precautions
                  </h3>
                  <p className="text-white/65 text-sm leading-relaxed">
                    Allow gentle agitation only so the product does not separate. A road tanker exposes more emulsion surface to air, which can cause skinning. Circulate bulk storage tanks at regular intervals.
                  </p>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed text-base">
                Cutback bitumen &mdash; thinned with solvent rather than water &mdash; follows different transport rules. The solvent makes it flammable, so always check the Safety Data Sheet (SDS) for the specific hazard classification before arranging transport.
              </p>
            </section>

            {/* ── SECTION: Temperature Guide ── */}
            <section id="temperature-guide" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Temperature Guide for Bitumen Transport
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Published numbers differ because grade, supplier, and country all change the target. The supplier&apos;s delivery note always has the final say. These ranges represent typical industry practice.
              </p>
              <InfoTable
                headers={["Stage", "Typical Range"]}
                rows={[
                  ["Standard paving bitumen storage", "150°C to 180°C"],
                  ["Polymer modified bitumen (PMB) storage", "170°C to 185°C"],
                  ["Road tanker delivery temperature", "~120°C to 190°C"],
                  ["Bitumen carrier cargo (ship)", "Up to 250°C"],
                  ["Bitumen emulsion", "10°C to 85°C"],
                ]}
              />
              <div className="space-y-0 mt-6">
                <QuickFact
                  question="Why does storage above 200°C cause problems?"
                  answer="It accelerates oxidation and ageing of the binder — effectively pre-ageing bitumen before it ever reaches the pavement. This shortens road service life and changes the grade properties."
                />
                <QuickFact
                  question="Why is below 120°C a problem for road tankers?"
                  answer="Bitumen becomes too viscous to pump efficiently at this point. Discharge lines block, unloading slows, and on-site waiting time stretches — all adding cost to the delivery."
                />
                <QuickFact
                  question="Why is PMB especially time-sensitive during transport?"
                  answer="Polymer modified bitumen can sit for only about three to five days before polymer separation becomes a real risk. A delayed PMB delivery is a genuine operational problem that can render the entire load unusable."
                />
              </div>
            </section>

            {/* ── SECTION: Rules and Labeling ── */}
            <section id="rules-labeling" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                Rules and Labeling: UN 3257 and Dangerous Goods Classification
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Hot bitumen counts as a dangerous good in transport. A typical SDS for 50/70 penetration grade lists <strong className="text-white">UN 3257, Class 9, Packing Group III</strong>, under the name <em>elevated temperature liquid, n.o.s.</em> That entry applies across ADR (road), RID (rail), and IMDG (sea) regulatory regimes.
              </p>
              <div className="bg-gradient-to-br from-teal-500/10 to-blue-600/10 border border-teal-400/20 rounded-2xl p-6 mb-6">
                <h3 className="text-lg font-black text-teal-300 mb-3">What UN 3257 Covers</h3>
                <p className="text-white/80 leading-relaxed text-base mb-3">
                  UN 3257 covers liquids at or above 100&deg;C and below their flash point. Some regimes &mdash; including US DOT rules &mdash; treat product loaded at 100&deg;C or below as outside the elevated temperature category. So <strong className="text-white">loading temperature can directly change the classification and the paperwork required</strong>.
                </p>
              </div>

              <h3 className="text-2xl font-black text-white mb-4">UK Compliance Example</h3>
              <ul className="space-y-3 mb-6">
                {[
                  "The CDG Regulations 2009 apply, and drivers must hold an ADR Vocational Training Certificate for the relevant tank class.",
                  "Hauliers and suppliers must appoint a Dangerous Goods Safety Advisor, and vehicles carry ADR hazard markings.",
                  "Records of batch numbers, quantities, and routes support traceability and regulatory compliance.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/80 text-base">
                    <CheckCircle2 size={15} className="text-teal-400 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                <p className="text-white/70 text-sm leading-relaxed">
                  <strong className="text-white">Important:</strong> Rules differ significantly by country. This article is general information, not legal advice &mdash; always check your national dangerous goods regulator and your carrier before shipping. The{" "}
                  <a
                    href="https://unece.org/transport/dangerous-goods"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                  >
                    UNECE ADR regulations
                    <ExternalLink size={12} className="inline ml-0.5 mb-0.5" />
                  </a>{" "}
                  are the authoritative reference for European road transport of dangerous goods.
                </p>
              </div>
            </section>

            {/* ── SECTION: Safety Hazards ── */}
            <section id="safety-hazards" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Safety Hazards During Bitumen Transport and Delivery
              </h2>
              <p className="text-white/80 leading-relaxed mb-6 text-base">
                Bitumen transport and delivery carry serious hazards. Understanding them before arrival on site is the first step to managing them correctly.
              </p>

              <SectionImage
                src="/bitumen-transport-safety-unloading-ppe.webp"
                alt="Bitumen transport safety — worker wearing full PPE with heat-resistant gloves, face shield and protective clothing during hot bitumen tanker unloading"
                caption="Full PPE — heat-resistant gloves, face shield, and neck cape — is required within 6 metres of any bitumen delivery point"
              />

              <div className="space-y-4 mt-6">
                {[
                  {
                    title: "Severe burns",
                    color: "orange" as const,
                    desc: "Paving grade bitumen is supplied at 150°C to 190°C — far hotter than boiling water. Burns are severe and deep. First aid: flood the area immediately with cold running water for at least 20 minutes, cover with clean gauze, and get the casualty to hospital. Never use gasoline, kerosene, or solvents to remove bitumen from skin.",
                  },
                  {
                    title: "Hydrogen sulfide (H₂S)",
                    color: "teal" as const,
                    desc: "H₂S forms naturally in bitumen and collects in the vapor space above the cargo. At high concentrations it paralyses the sense of smell — a fading rotten-egg odor does not mean exposure has ended. Treat all hatches and confined spaces with extreme care, and use calibrated gas detectors before entry.",
                  },
                  {
                    title: "Water contact — boil-over risk",
                    color: "blue" as const,
                    desc: "Moisture in tank walls or pipework causes violent steam expansion and boil-over when hot bitumen enters. All receiving tanks must be thoroughly dry and inspected before any transfer begins.",
                  },
                  {
                    title: "Fire risk",
                    color: "red" as const,
                    desc: "Do not use compressed air near hot bitumen. Do not put water on burning bitumen — use dry powder or foam extinguishers rated for Class B fires.",
                  },
                  {
                    title: "PPE requirements",
                    color: "green" as const,
                    desc: "UK guidance requires heat-resistant gloves, safety glasses, a full face shield, and a neck cape within 6 metres of any delivery. A functioning safety shower must be located within 20 metres of the unloading point.",
                  },
                ].map(({ title, color, desc }) => (
                  <div
                    key={title}
                    className={`bg-white/5 border border-white/10 rounded-xl p-5 border-l-4 ${
                      color === "orange"
                        ? "border-l-orange-400"
                        : color === "teal"
                        ? "border-l-teal-400"
                        : color === "blue"
                        ? "border-l-blue-400"
                        : color === "red"
                        ? "border-l-red-400"
                        : "border-l-green-400"
                    }`}
                  >
                    <h3 className="text-white font-bold mb-2 text-base">{title}</h3>
                    <p className="text-white/65 text-sm leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── SECTION: Which Method Fits ── */}
            <section id="which-method-fits" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                Which Transport Method Fits Which Job?
              </h2>
              <p className="text-white/80 leading-relaxed mb-6 text-base">
                Heat drives cost. Heated tankers burn significant energy to maintain temperature. Packaging avoids that energy cost but introduces residue losses, handling waste, and slower site operations. Match the method to the volume, distance, and available infrastructure.
              </p>
              <InfoTable
                headers={["Scenario", "Best Transport Method"]}
                rows={[
                  ["Refinery to mixing plant within a few hours' drive", "Road tanker"],
                  ["Long-distance bulk with rail access at both ends", "Rail tank cars, then road tanker for the last leg"],
                  ["Large overseas volume to a port with a bitumen terminal", "Bitumen carrier ship to terminal, then road tanker"],
                  ["Small overseas volume, no bitumen terminal available", "Heated ISO tank container"],
                  ["Remote site, small quantity needed", "Steel drums or packaged bitumen blocks"],
                  ["Tack coats and spray surface treatment work", "Bitumen emulsion tanker"],
                  ["Oil sands crude bitumen movement", "Pipeline (dilbit) or rail car"],
                ]}
              />
              <p className="text-white/80 leading-relaxed mt-6 text-base">
                For pavement projects where you need to estimate total binder quantity before booking a delivery, the{" "}
                <Link
                  href="/bitumen-tank-volume-calculator"
                  className="text-teal-400 hover:text-orange-300 font-semibold underline underline-offset-2 transition-colors"
                >
                  Bitumen Tank Volume Calculator
                </Link>{" "}
                gives fast, accurate estimates based on road dimensions, mix density, and binder percentage.
              </p>
            </section>

            {/* ── SECTION: Delivery Checklist ── */}
            <section id="delivery-checklist" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Delivery Checklist for Contractors and Site Teams
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {[
                  "Confirm grade, quantity, and delivery temperature on the order",
                  "Record the load temperature when the tanker arrives on site",
                  "Agree the unloading method (pump, pressure, or gravity) and verify hose fittings match",
                  "Confirm the receiving tank is clean, completely dry, and ready",
                  "Clear the unloading area, confirm full PPE is worn, and test the safety shower",
                  "Complete the site discharge permit or your local equivalent document",
                  "Check the billing basis — weight or volume — and match to the delivery note",
                  "Retain the batch number and a sample for quality control records",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4"
                  >
                    <CheckCircle2
                      size={15}
                      className="text-teal-400 mt-0.5 shrink-0"
                    />
                    <span className="text-white/75 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* ── SECTION: Transport Loss ── */}
            <section id="transport-loss" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                Transport Loss and Quantity Estimates
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Bitumen is usually bought by weight but used by volume. It expands when heated, and its specific gravity runs from approximately <strong className="text-white">1.00 to 1.04</strong>. A volume measured hot contains less mass than the same volume measured cold. One tonne at room temperature is a little under 1 m&sup3;.
              </p>
              <p className="text-white/80 leading-relaxed mb-6 text-base">
                If drums are used, always add the expected residue percentage to your order quantity. With 2% to 3% left unrecoverable in each drum, a 100-tonne drummed order typically delivers only 97 to 98 tonnes of usable binder. Factor this into procurement from the start.
              </p>

              <div className="bg-gradient-to-br from-teal-500/15 via-blue-600/10 to-purple-600/10 border border-white/15 rounded-2xl p-6 md:p-8">
                <h3 className="text-lg font-black text-teal-300 mb-3">
                  Estimating Binder Quantity Before You Order
                </h3>
                <p className="text-white/85 leading-relaxed text-base mb-4">
                  To turn a pavement area and thickness into a binder quantity, use the{" "}
                  <Link
                    href="/"
                    className="text-teal-400 hover:text-orange-300 font-semibold underline underline-offset-2 transition-colors"
                  >
                    bitumen quantity calculator
                  </Link>
                  . Getting the order right before delivery day avoids expensive short loads or costly second deliveries &mdash; both of which carry their own temperature management risks.
                </p>
              </div>
            </section>

            {/* ── SECTION: Conclusion ── */}
            <section id="conclusion" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Conclusion
              </h2>
              <div className="bg-gradient-to-br from-teal-500/15 via-blue-600/10 to-purple-600/10 border border-white/15 rounded-2xl p-6 md:p-8">
                <p className="text-white/85 leading-relaxed mb-4 text-base">
                  Bitumen transport is fundamentally a heat problem. Paving bitumen moves hot in insulated tankers, rail cars, ISO containers, and ships. Cold packaging covers remote jobs but wastes 2% to 3% of product as drum residue. Emulsion needs frost protection to remain effective, and oil sands bitumen requires diluent to flow through pipelines.
                </p>
                <p className="text-white/85 leading-relaxed mb-4 text-base">
                  Before any delivery, confirm the grade, temperature, and unloading method. Keep receiving tanks completely dry, ensure the full site team wears appropriate PPE, check how the load is billed, and understand{" "}
                  <Link
                    href="/blog/bitumen-grades-explained"
                    className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                  >
                    which bitumen grade suits your pavement conditions
                  </Link>{" "}
                  before placing the order.
                </p>
                <p className="text-white/85 leading-relaxed text-base">
                  For background on the material itself &mdash; what it is, where it comes from, and how its properties drive every transport decision &mdash; our{" "}
                  <Link
                    href="/blog/what-is-bitumen"
                    className="text-teal-400 hover:text-orange-300 font-semibold underline underline-offset-2 transition-colors"
                  >
                    what is bitumen guide
                  </Link>{" "}
                  is the natural companion to this article.
                </p>
                <p className="text-white/85 leading-relaxed text-base mt-4">
                  And when you&apos;re discussing deliveries or writing specifications, it helps to say the material&apos;s name correctly. Our{" "}
                  <Link
                    href="/blog/how-to-pronounce-bitumen"
                    className="text-violet-400 hover:text-violet-300 underline underline-offset-2 transition-colors font-medium"
                  >
                    guide to pronouncing bitumen
                  </Link>{" "}
                  covers the British (BICH-uh-mun), American (buh-TOO-mun), and Australian pronunciations so you can use the word confidently in any setting.
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
                    q: "How is bitumen transported by road?",
                    a: "In insulated, heated tankers that hold the load between roughly 120°C and 190°C. The driver and site team follow a formal discharge procedure and wear full PPE including heat-resistant gloves, face shield, and neck cape.",
                  },
                  {
                    q: "At what temperature is bitumen transported?",
                    a: "It depends on grade. Road delivery ranges from 120°C to 190°C. Ships carry cargo up to 250°C. Polymer modified bitumen (PMB) typically travels at 150°C to 190°C. Bitumen emulsion stays between 10°C and 85°C.",
                  },
                  {
                    q: "Can bitumen be transported cold?",
                    a: "Yes. Drums, bags, and blocks carry it cold for remote or small jobs. It must be reheated before use, and drums leave 2% to 3% unrecoverable residue — factor this into your order quantity.",
                  },
                  {
                    q: "How is bitumen transported overseas?",
                    a: "Bulk loads go by bitumen carrier ship with insulated, heated cargo tanks maintaining up to 250°C. Smaller export volumes travel in heated ISO tank containers that move interchangeably by truck, rail, and ship.",
                  },
                  {
                    q: "Is bitumen a dangerous good in transport?",
                    a: "When loaded at or above 100°C, it is typically classified under UN 3257, Class 9, Packing Group III as an elevated temperature liquid. Some regimes exclude product loaded at or below 100°C — always verify local rules for your specific route.",
                  },
                  {
                    q: "How long can bitumen stay hot in a tanker?",
                    a: "It depends on insulation quality, ambient temperature, and starting load temperature. Insulated ship tanks lose about 1°C every 4 hours. Road tankers vary considerably — ask the supplier for a maximum transit time for your specific load and season.",
                  },
                  {
                    q: "What happens if bitumen cools in the tanker?",
                    a: "Viscosity rises sharply. Unloading slows and discharge lines can block solid. The tanker heating system can reheat the load, but long delays are costly and best avoided through careful route planning and realistic delivery windows.",
                  },
                  {
                    q: "How is oil sands bitumen transported?",
                    a: "By pipeline after dilution with 25% to 55% diluent (dilbit), or by rail with less or no diluent. Rail requires no dedicated pipeline infrastructure but still needs terminal access at both ends for loading and unloading.",
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
