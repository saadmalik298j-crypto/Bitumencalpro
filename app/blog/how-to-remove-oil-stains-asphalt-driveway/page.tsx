import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AuthorBio from "../../components/AuthorBio";
import {
  ChevronRight,
  Clock,
  Calendar,
  BookOpen,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  HelpCircle,
  ExternalLink,
  ShieldAlert,
  Droplets,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "How to Remove Oil Stains from Asphalt Driveways (Fast DIY Guide)",
  description:
    "Learn how to remove fresh and dried oil stains from asphalt driveways safely without damaging the bitumen binder. Includes step-by-step DIY cleaning methods and products to avoid.",
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
    title: "How to Remove Oil Stains from Asphalt Driveways (Fast DIY Guide) | BitumenCalcPro",
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
        alt: "How to remove oil stains from an asphalt driveway - professional cleaning guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Remove Oil Stains from Asphalt Driveways (Fast DIY Guide)",
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

export default function HowToRemoveOilStainsAsphaltPage() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-100 selection:bg-amber-500/30 selection:text-amber-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Header Banner */}
      <div className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900/90 to-[#0F172A] border-b border-slate-800/80">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 pb-12 relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center text-xs sm:text-sm text-slate-400 mb-6 gap-1.5 flex-wrap">
            <Link href="/" className="hover:text-amber-400 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <Link href="/blog" className="hover:text-amber-400 transition-colors">
              Blog
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-slate-300 font-medium truncate max-w-[200px] sm:max-w-xs">
              Oil Stain Removal Guide
            </span>
          </nav>

          {/* Tag & Category */}
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <span className="px-3 py-1 bg-amber-500/10 text-amber-400 text-xs font-semibold rounded-full border border-amber-500/20">
              Asphalt Maintenance & Care
            </span>
            <span className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full border border-slate-700">
              DIY Cleaning Guide
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.25] mb-6">
            How to Remove Oil Stains from an Asphalt Driveway
          </h1>

          {/* Meta Metadata */}
          <div className="flex items-center gap-4 text-xs sm:text-sm text-slate-400 border-t border-slate-800 pt-4 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center text-xs">
                NA
              </div>
              <span className="text-slate-200 font-medium">Nabeel Awan</span>
            </div>
            <span className="text-slate-600">•</span>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-slate-500" />
              <span>Published Oct 2026</span>
            </div>
            <span className="text-slate-600">•</span>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-slate-500" />
              <span>7 min read</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <article className="prose prose-invert prose-amber max-w-none">
          {/* Filename 1: how-to-remove-oil-stains-asphalt-driveway.webp (Below H1, before Quick Answer) */}
          <div className="my-6">
            <Image
              src="/how-to-remove-oil-stains-asphalt-driveway.webp"
              alt="How to remove oil stains from an asphalt driveway - professional cleaning demonstration"
              width={1200}
              height={675}
              className="w-full h-auto rounded-2xl border border-slate-800 shadow-2xl object-cover"
              priority
            />
            <p className="text-xs text-slate-400 mt-2 text-center italic">
              Matching your cleaning method to the age of the oil spill is critical for preserving asphalt binder integrity.
            </p>
          </div>

          {/* Quick Answer Box */}
          <div className="p-6 my-8 rounded-2xl bg-gradient-to-br from-amber-950/40 via-slate-900 to-slate-900 border border-amber-500/30 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center gap-2 text-amber-400 font-bold text-lg mb-3">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span>Quick Answer</span>
            </div>
            <p className="text-slate-200 text-base leading-relaxed m-0">
              To remove oil stains from asphalt, start with an absorbent like cat litter or baking soda for fresh spills, then scrub with dish soap and a stiff brush. For dried, older stains, use a dedicated asphalt-safe degreaser rather than a harsh solvent, since gasoline and strong chemical strippers can soften the asphalt binder itself. Rinse thoroughly, let the area dry, and reseal the driveway once the stain is gone.
            </p>
          </div>

          {/* Intro Content */}
          <p className="text-slate-300 text-lg leading-relaxed mb-6">
            An oil stain on an asphalt driveway is a common problem with a straightforward fix, as long as you match the method to how fresh or old the stain is. Asphalt&apos;s biggest weakness here is also its biggest clue: it&apos;s made from petroleum, so oil doesn&apos;t just sit on top of it; it can soften the binder underneath if left untreated long enough. That&apos;s why the right first move matters more than the exact product you reach for.
          </p>
          <p className="text-slate-300 text-lg leading-relaxed mb-8">
            This guide covers what to do for a fresh spill, what works on an old, dried stain, and which products to avoid entirely. Whether you are performing routine maintenance or using our{" "}
            <Link href="/" className="text-amber-400 underline hover:text-amber-300 transition-colors font-medium">
              asphalt volume calculator
            </Link>{" "}
            to plan upcoming driveway resurfacing, maintaining surface cleanliness protects your pavement investment.
          </p>

          {/* Section 1: Why Oil Stains Asphalt So Easily */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 flex items-center gap-2">
              Why Oil Stains Asphalt So Easily
            </h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Asphalt driveways are made of crushed stone and sand held together with bitumen, a thick, black petroleum binder. Motor oil and other petroleum products share enough chemistry with that binder that they can dissolve into it rather than just sitting on the surface the way they would on concrete.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              This explains two things. First, why asphalt stains darker and faster than concrete does (as detailed in our comprehensive guide on{" "}
              <Link href="/blog/asphalt-vs-concrete" className="text-amber-400 underline hover:text-amber-300 transition-colors">
                asphalt vs concrete pavement differences
              </Link>
              ). Second, why using the wrong cleaning product, especially a strong solvent, can make the problem worse by softening the asphalt around the stain instead of just lifting the oil off.
            </p>
            <div className="p-4 bg-slate-900/80 border-l-4 border-amber-500 rounded-r-xl text-slate-300 text-sm">
              <strong className="text-amber-400">Technical Note:</strong> According to the{" "}
              <a
                href="https://www.asphaltinstitute.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 underline hover:text-amber-300 inline-flex items-center gap-1"
              >
                Asphalt Institute <ExternalLink className="w-3 h-3" />
              </a>
              , refined petroleum products like motor oil, diesel, and gasoline act as active fluxing solvents on bituminous binders, lowering bitumen viscosity and causing irreversible aggregate debonding.
            </div>
          </section>

          {/* Section 2: How to Remove a Fresh Oil Stain */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 flex items-center gap-2">
              <Droplets className="w-6 h-6 text-amber-400" />
              How to Remove a Fresh Oil Stain
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Speed matters most here. Oil that hasn&apos;t had time to soak in is far easier to lift than oil that&apos;s had days to work into the surface. Follow this 4-step emergency spill routine:
            </p>

            <div className="space-y-4 mb-6">
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex gap-4 items-start">
                <span className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center shrink-0">
                  1
                </span>
                <div>
                  <h3 className="text-white font-bold text-base mb-1">Blot Up Standing Oil</h3>
                  <p className="text-slate-300 text-sm m-0">
                    Blot up any standing oil with a rag or paper towels. Don&apos;t wipe it around. Press down and lift.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex gap-4 items-start">
                <span className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center shrink-0">
                  2
                </span>
                <div>
                  <h3 className="text-white font-bold text-base mb-1">Apply Absorbent Material</h3>
                  <p className="text-slate-300 text-sm m-0">
                    Cover the spot with an absorbent material. Cat litter, baking soda, and cornstarch all work. Clay-based cat litter tends to be the most effective at pulling oil up out of a porous surface.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex gap-4 items-start">
                <span className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center shrink-0">
                  3
                </span>
                <div>
                  <h3 className="text-white font-bold text-base mb-1">Allow Sufficient Dwell Time</h3>
                  <p className="text-slate-300 text-sm m-0">
                    Let it sit. Give it at least 30 minutes for a small spill, or overnight for anything larger.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex gap-4 items-start">
                <span className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center shrink-0">
                  4
                </span>
                <div>
                  <h3 className="text-white font-bold text-base mb-1">Sweep and Inspect</h3>
                  <p className="text-slate-300 text-sm m-0">
                    Sweep up the absorbent and check the spot. If a shadow remains, move to the dish soap method below.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed">
              Catching a spill within the first hour or two is the single biggest factor in how easy the whole cleanup turns out to be. Proper surface care avoids costly repairs, which are often cited when analyzing{" "}
              <Link href="/blog/asphalt-estimation-mistakes" className="text-amber-400 underline hover:text-amber-300 transition-colors">
                asphalt project estimation errors
              </Link>.
            </p>
          </section>

          {/* Filename 2: fresh-old-oil-stains-asphalt-cleaning.webp (Before "How to Clean an Older, Set-In Oil Stain") */}
          <div className="my-8">
            <Image
              src="/fresh-old-oil-stains-asphalt-cleaning.webp"
              alt="Comparison of fresh spill absorption vs old set-in oil stain cleaning on asphalt"
              width={1200}
              height={675}
              className="w-full h-auto rounded-2xl border border-slate-800 shadow-2xl object-cover"
            />
            <p className="text-xs text-slate-400 mt-2 text-center italic">
              Fresh oil spills absorb quickly, while set-in stains require specialized asphalt-safe degreasers and emulsification.
            </p>
          </div>

          {/* Section 3: How to Clean an Older, Set-In Oil Stain */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 flex items-center gap-2">
              How to Clean an Older, Set-In Oil Stain
            </h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Dried stains need more than absorption. The oil has already worked into the surface, so the next step is breaking it down and lifting it out.
            </p>

            <ul className="space-y-3 text-slate-300 list-disc list-inside mb-6">
              <li>
                <strong className="text-white">Apply dish soap or laundry detergent directly to the stain.</strong> A thick, concentrated application works better than diluting it first.
              </li>
              <li>
                <strong className="text-white">Scrub with a stiff-bristled brush,</strong> working in small circles to force the soap into the stain rather than just across the surface.
              </li>
              <li>
                <strong className="text-white">Let it sit for 30 to 60 minutes,</strong> especially on older stains.
              </li>
              <li>
                <strong className="text-white">Rinse with hot water if you have access to it,</strong> since heat helps break down oil more effectively than cold water alone.
              </li>
              <li>
                <strong className="text-white">Repeat as needed.</strong> Older stains often need 2 or 3 rounds before they fully lift.
              </li>
            </ul>

            <p className="text-slate-300 leading-relaxed mb-4">
              For stains that don&apos;t respond to dish soap, a dedicated asphalt-safe degreaser is the next step. Products made specifically for oil and grease removal on pavement, rather than general-purpose cleaners, are formulated to lift petroleum residue without attacking the asphalt itself. Apply according to the product&apos;s instructions, since concentration and dwell time vary by brand.
            </p>
          </section>

          {/* Section 4: What to Avoid */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 flex items-center gap-2">
              <ShieldAlert className="w-6 h-6 text-red-400" />
              What to Avoid
            </h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              A few common home remedies and products cause more harm than good on asphalt specifically.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-xl bg-red-950/20 border border-red-900/40">
                <h3 className="text-red-300 font-bold text-base mb-2 flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-red-400" />
                  Gasoline or Kerosene
                </h3>
                <p className="text-slate-300 text-sm m-0">
                  These dissolve oil effectively, but they also dissolve asphalt&apos;s own binder, leaving the surface soft or damaged where applied.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-red-950/20 border border-red-900/40">
                <h3 className="text-red-300 font-bold text-base mb-2 flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-red-400" />
                  Strong Solvent Strippers
                </h3>
                <p className="text-slate-300 text-sm m-0">
                  Strong solvent-based strippers not labeled safe for asphalt. Many degreasers built for concrete or metal are too aggressive for a petroleum-based surface.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-red-950/20 border border-red-900/40">
                <h3 className="text-red-300 font-bold text-base mb-2 flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-red-400" />
                  WD-40 as Primary Treatment
                </h3>
                <p className="text-slate-300 text-sm m-0">
                  WD-40 as a primary treatment. It can loosen light residue, but multiple independent product comparisons find it underperforms compared to dedicated degreasers on asphalt specifically, and it&apos;s not formulated for this job.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-red-950/20 border border-red-900/40">
                <h3 className="text-red-300 font-bold text-base mb-2 flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-red-400" />
                  Wire Brushes & Abrasives
                </h3>
                <p className="text-slate-300 text-sm m-0">
                  Scrubbing with a wire brush or anything abrasive enough to score the surface. This can leave permanent marks even after the stain itself is gone.
                </p>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed">
              If you&apos;re ever unsure whether a product is safe for asphalt, test it on a small, inconspicuous section first and check back after a few minutes for any softening or discoloration. Environmental compliance standards from the{" "}
              <a
                href="https://www.epa.gov"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 underline hover:text-amber-300 inline-flex items-center gap-1"
              >
                U.S. Environmental Protection Agency (EPA) <ExternalLink className="w-3 h-3" />
              </a>{" "}
              also recommend using non-toxic biodegradable degreasers to prevent hazardous runoff into storm drains.
            </p>
          </section>

          {/* Filename 3: pressure-washer-asphalt-oil-stain-cleaning.webp (Before "Using a Pressure Washer") */}
          <div className="my-8">
            <Image
              src="/pressure-washer-asphalt-oil-stain-cleaning.webp"
              alt="Using a pressure washer safely on an asphalt driveway oil stain with wide fan nozzle"
              width={1200}
              height={675}
              className="w-full h-auto rounded-2xl border border-slate-800 shadow-2xl object-cover"
            />
            <p className="text-xs text-slate-400 mt-2 text-center italic">
              Pressure washing should follow chemical pretreatment. Use wide fan patterns to avoid stripping surface aggregates.
            </p>
          </div>

          {/* Section 5: Using a Pressure Washer */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 flex items-center gap-2">
              Using a Pressure Washer
            </h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              A pressure washer speeds up the rinse step and can help lift loosened residue after an absorbent or degreaser has already broken down the oil, but it&apos;s not a standalone fix. Spraying water at a stain alone, without pretreatment, mostly just moves the oil around rather than removing it.
            </p>
            <p className="text-slate-300 leading-relaxed">
              If you use one, start with a wider spray pattern and moderate pressure. A narrow, high-pressure stream held too close can actually etch or damage the asphalt surface, especially on an older or already-weathered driveway.
            </p>
          </section>

          {/* Section 6: When the Stain Won't Fully Come Out */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 flex items-center gap-2">
              When the Stain Won&apos;t Fully Come Out
            </h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Some oil stains, especially large ones that sat for weeks or months before treatment, leave a faint shadow even after thorough cleaning. At that point, a few options remain:
            </p>

            <div className="space-y-4 mb-6">
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <h3 className="text-white font-bold text-base mb-1">1. Live With It</h3>
                <p className="text-slate-300 text-sm m-0">
                  A faint shadow is cosmetic and doesn&apos;t affect the driveway&apos;s structural condition.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <h3 className="text-white font-bold text-base mb-1">2. Patch Softened Spots</h3>
                <p className="text-slate-300 text-sm m-0">
                  Apply an asphalt-safe filler or patch if the oil has visibly softened or degraded the surface, not just stained it.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <h3 className="text-white font-bold text-base mb-1">3. Sealcoat the Entire Driveway</h3>
                <p className="text-slate-300 text-sm m-0">
                  Sealcoat the entire driveway. This is often the most effective fix for a stubborn, visible stain, since a fresh coat of sealer restores a uniform black color across the whole surface rather than trying to spot-treat one area.
                </p>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed">
              Sealcoating after cleaning is worth doing even without a lingering stain. For details on application timing, costs, and material selection, check our comprehensive{" "}
              <Link href="/blog/asphalt-driveway-sealcoating" className="text-amber-400 underline hover:text-amber-300 transition-colors">
                asphalt sealcoating guide
              </Link>
              . It protects the surface from future oil and gas spills and restores the deep black color that fades over time from sun exposure.
            </p>
          </section>

          {/* Filename 4: asphalt-driveway-oil-stain-sealcoating.webp (Before "Preventing Future Oil Stains") */}
          <div className="my-8">
            <Image
              src="/asphalt-driveway-oil-stain-sealcoating.webp"
              alt="Applying a protective driveway sealcoat layer to prevent future oil stain penetration"
              width={1200}
              height={675}
              className="w-full h-auto rounded-2xl border border-slate-800 shadow-2xl object-cover"
            />
            <p className="text-xs text-slate-400 mt-2 text-center italic">
              Regular driveway sealcoating forms a protective chemical barrier that prevents petroleum fluids from penetrating asphalt.
            </p>
          </div>

          {/* Section 7: Preventing Future Oil Stains */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 flex items-center gap-2">
              Preventing Future Oil Stains
            </h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              A few habits make the next spill far easier to deal with, or prevent it entirely.
            </p>

            <ul className="space-y-3 text-slate-300 list-disc list-inside mb-6">
              <li>
                <strong className="text-white">Check your vehicle for leaks.</strong> A slow, recurring drip usually means a gasket or seal needs attention, and catching it early saves repeated driveway cleanups.
              </li>
              <li>
                <strong className="text-white">Keep an oil-absorbent mat or a sheet of cardboard</strong> under a known leak until you fix the vehicle issue.
              </li>
              <li>
                <strong className="text-white">Reseal the driveway every 2 to 3 years.</strong> A properly sealed surface resists oil penetration far better than bare, unsealed asphalt. Overall, regular sealing keeps your long-term maintenance low as noted in our{" "}
                <Link href="/blog/bitumen-driveway-cost-worldwide" className="text-amber-400 underline hover:text-amber-300 transition-colors">
                  driveway paving cost guide
                </Link>.
              </li>
              <li>
                <strong className="text-white">Clean spills immediately rather than waiting.</strong> The difference between a 10-minute cleanup and an hours-long scrubbing session usually comes down to how long the oil sat before you treated it.
              </li>
            </ul>
          </section>

          {/* Section 8: Conclusion */}
          <section className="mb-12 p-6 rounded-2xl bg-slate-900/90 border border-slate-800">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Conclusion</h2>
            <p className="text-slate-300 leading-relaxed m-0">
              Removing oil stains from asphalt comes down to matching the method to the stain&apos;s age. Fresh spills respond well to absorbents like cat litter or baking soda, followed by a dish soap scrub if needed. Older, dried stains need a dedicated degreaser rather than harsh solvents, since gasoline and strong strippers can damage asphalt&apos;s own petroleum-based binder. Clean spills quickly, skip the gasoline, and reseal the driveway once the stain is gone to protect against the next one.
            </p>
          </section>

          {/* Section 9: FAQ Accordion Section */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-amber-400" />
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-slate-900 border border-slate-800">
                <h3 className="text-white font-bold text-lg mb-2">
                  What is the best way to get oil stains out of an asphalt driveway?
                </h3>
                <p className="text-slate-300 text-base m-0">
                  For fresh spills, use an absorbent like cat litter or baking soda first, then follow with dish soap and a stiff brush. For older stains, a dedicated asphalt-safe degreaser works better than general household products.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900 border border-slate-800">
                <h3 className="text-white font-bold text-lg mb-2">
                  Does WD-40 remove oil stains from asphalt?
                </h3>
                <p className="text-slate-300 text-base m-0">
                  It can help loosen light residue, but it&apos;s not formulated for this job and generally underperforms compared to a dedicated degreaser on older or heavier stains.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900 border border-slate-800">
                <h3 className="text-white font-bold text-lg mb-2">
                  Is it safe to use gasoline to clean oil off a driveway?
                </h3>
                <p className="text-slate-300 text-base m-0">
                  No. Gasoline dissolves oil, but it also dissolves asphalt&apos;s own petroleum-based binder, which can soften or damage the surface where it&apos;s applied.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900 border border-slate-800">
                <h3 className="text-white font-bold text-lg mb-2">
                  Can baking soda remove oil stains from asphalt?
                </h3>
                <p className="text-slate-300 text-base m-0">
                  Yes, for fresh spills. Spread a thick layer over the stain, let it absorb the oil for at least 30 minutes, then sweep and scrub the remaining residue with dish soap.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900 border border-slate-800">
                <h3 className="text-white font-bold text-lg mb-2">
                  Will a pressure washer remove oil stains from a driveway?
                </h3>
                <p className="text-slate-300 text-base m-0">
                  On its own, not effectively. A pressure washer works best after an absorbent or degreaser has already broken down the oil, helping rinse away the loosened residue.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900 border border-slate-800">
                <h3 className="text-white font-bold text-lg mb-2">
                  Why does oil stain asphalt more than concrete?
                </h3>
                <p className="text-slate-300 text-base m-0">
                  Asphalt is petroleum-based, so oil shares enough chemistry with the asphalt binder to soften and dissolve into it rather than just sitting on top the way it does on concrete.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900 border border-slate-800">
                <h3 className="text-white font-bold text-lg mb-2">
                  How do I get rid of an old oil stain that won&apos;t come out?
                </h3>
                <p className="text-slate-300 text-base m-0">
                  Try repeated applications of a dedicated degreaser first. If a faint shadow remains, sealcoating the full driveway usually restores a uniform appearance better than trying to spot-treat the stain further.
                </p>
              </div>
            </div>
          </section>

          {/* Author Bio */}
          <div className="mt-12">
            <AuthorBio />
          </div>

        </article>
      </main>
    </div>
  );
}
