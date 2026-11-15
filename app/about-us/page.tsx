// app/about-us/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import LegalLayout from "../components/LegalLayout";
import {
  Droplets,
  Calculator,
  Info,
  CheckCircle2,
  TrendingUp,
  ExternalLink,
  Mail,
  ShieldCheck,
  Compass,
  FileCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | BitumenCalcPro",
  description:
    "Learn about BitumenCalcPro — an independent online engineering resource founded by Nabeel Awan in Islamabad, Pakistan, providing precision asphalt and bitumen calculation tools.",
  alternates: { canonical: "https://bitumencalcpro.com/about-us" },
  openGraph: {
    title: "About Us | BitumenCalcPro",
    description:
      "Learn about BitumenCalcPro — an independent online resource for simple, practical bitumen, asphalt, and pavement calculations founded by Nabeel Awan in Islamabad, Pakistan.",
    url: "https://bitumencalcpro.com/about-us",
    siteName: "BitumenCalcPro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | BitumenCalcPro",
    description:
      "Learn about BitumenCalcPro — an independent online resource for simple, practical bitumen, asphalt, and pavement calculations.",
  },
};

export default function AboutUsPage() {
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About BitumenCalcPro",
    url: "https://bitumencalcpro.com/about-us",
    description:
      "Learn about BitumenCalcPro — an independent online resource for simple, practical bitumen, asphalt, and pavement calculations.",
    isPartOf: {
      "@type": "WebSite",
      name: "BitumenCalcPro",
      url: "https://bitumencalcpro.com",
    },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "BitumenCalcPro",
    url: "https://bitumencalcpro.com",
    logo: {
      "@type": "ImageObject",
      url: "https://bitumencalcpro.com/logo.png",
      width: 512,
      height: 512,
    },
    email: "contact@bitumencalcpro.com",
    description:
      "Free online bitumen and asphalt calculation platform for civil engineers and paving contractors worldwide.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Islamabad",
      addressCountry: "PK",
    },
    sameAs: [
      "https://x.com/bitumencalcpro",
      "https://web.facebook.com/profile.php?id=61592790119864",
      "https://www.instagram.com/bitumencalcpro/",
      "https://www.youtube.com/@bitumencalcpro",
    ],
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nabeel Awan",
    url: "https://bitumencalcpro.com/about-us",
    image: "https://bitumencalcpro.com/nabeel-awan-bitumencalcpro-founder.webp",
    jobTitle: "Founder & Lead Technical Developer",
    email: "contact@bitumencalcpro.com",
    description:
      "Web developer and founder of BitumenCalcPro based in Islamabad, Pakistan. Specialises in civil engineering calculation tools for bitumen, asphalt, and pavement estimation.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Islamabad",
      addressCountry: "PK",
    },
    worksFor: {
      "@type": "Organization",
      name: "BitumenCalcPro",
      url: "https://bitumencalcpro.com",
    },
    sameAs: [
      "https://web.facebook.com/p/Nabeel-Awan-61592639548311/",
      "https://www.instagram.com/nabeelawan78y7/",
    ],
    knowsAbout: [
      "Bitumen calculation",
      "Asphalt mix design",
      "Pavement engineering",
      "AASHTO standards",
      "ASTM testing methods",
    ],
  };

  return (
    <>
      <Script
        id="schema-about-page"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <Script
        id="schema-organization"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="schema-person"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <LegalLayout
        title="About BitumenCalcPro"
        subtitle="Independent, precision-engineered online tools built to make bitumen, asphalt, and pavement calculations simpler and transparent."
        lastUpdated="November 15, 2026"
        badge="About Us"
        accentColor="violet"
      >
        {/* Our Story */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-blue-500 flex items-center justify-center text-white font-black text-lg shadow-md shadow-violet-200">
              S
            </div>
            <h2 className="text-2xl font-bold text-slate-900 m-0">Our Story & Mission</h2>
          </div>

          <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
            <p>
              <strong>BitumenCalcPro</strong> (
              <a href="https://bitumencalcpro.com" className="text-violet-600 underline font-medium">
                bitumencalcpro.com
              </a>
              ) was founded with a singular, practical objective: to replace slow, error-prone manual
              spreadsheets with instant, intuitive, and mathematically transparent civil engineering
              calculation tools for pavement professionals.
            </p>
            <p>
              The platform was conceptualized and developed by <strong>Nabeel Awan</strong>, a
              technical web developer based in <strong>Islamabad, Pakistan</strong>. Having observed the
              frequent challenges faced by civil engineering students, estimator trainees, and paving
              contractors in determining accurate asphalt tonnage, bitumen emulsion requirements, and
              tack coat residual rates, Nabeel set out to build an accessible suite of browser-based
              tools grounded strictly in published pavement engineering science.
            </p>
            <p>
              For any editorial, business, or technical calculation questions, you can reach our
              team directly at{" "}
              <a
                href="mailto:contact@bitumencalcpro.com"
                className="text-violet-700 font-bold underline hover:text-violet-900 transition-colors"
              >
                contact@bitumencalcpro.com
              </a>
              .
            </p>
          </div>
        </div>

        {/* Meet the Founder */}
        <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 mb-12 border border-slate-200/80 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-violet-100 rounded-full blur-3xl -z-10 opacity-50 translate-x-1/2 -translate-y-1/2" />
          <h2 className="text-2xl font-bold text-slate-900 mb-8 relative z-10">Meet the Founder</h2>

          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start relative z-10">
            {/* Founder Image */}
            <div className="w-48 h-48 md:w-56 md:h-56 shrink-0 relative rounded-full p-2 bg-gradient-to-tr from-violet-300 to-orange-300 shadow-lg group">
              <div className="absolute inset-0 bg-white rounded-full m-1" />
              <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-100">
                <Image
                  src="/nabeel-awan-bitumencalcpro-founder.webp"
                  alt="Nabeel Awan - Founder and Lead Developer of BitumenCalcPro"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 192px, 224px"
                  priority
                />
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold text-slate-900 mb-1">Nabeel Awan</h3>
              <p className="text-violet-600 font-medium text-sm mb-4">
                Founder & Technical Lead · Islamabad, Pakistan
              </p>
              <div className="space-y-4 text-slate-600 text-sm leading-relaxed mb-6">
                <p>
                  Nabeel Awan oversees the algorithmic development, technical architecture, and
                  editorial integrity of BitumenCalcPro. His work bridges web software engineering
                  with highway and materials science, focusing on <strong>asphalt mix design,
                  volumetric calculations, binder density conversions, and geotechnical estimation
                  tools</strong>.
                </p>
                <p>
                  He continuously tests calculator formulas against real-world mix designs and
                  coordinates user feedback from international highway contractors to ensure the
                  platform remains reliable, intuitive, and compliant with evolving standards.
                </p>
                <p>
                  Direct Email:{" "}
                  <a
                    href="mailto:contact@bitumencalcpro.com"
                    className="text-violet-700 font-semibold underline"
                  >
                    contact@bitumencalcpro.com
                  </a>
                </p>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-4">
                <a
                  href="https://web.facebook.com/p/Nabeel-Awan-61592639548311/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors shadow-sm"
                  aria-label="Nabeel Awan on Facebook"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/nabeelawan78y7/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-pink-50 text-pink-600 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors shadow-sm"
                  aria-label="Nabeel Awan on Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Editorial Standards & Engineering References */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <FileCheck size={24} className="text-violet-600" />
            <h2 className="text-xl font-bold text-slate-900 m-0">
              Editorial Standards & Engineering Foundations
            </h2>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed mb-5">
            Every calculation utility and technical article on BitumenCalcPro is derived from
            peer-reviewed civil engineering handbooks and recognized highway agency specifications.
            Our formulas adhere to:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-700 mb-6">
            <li className="bg-white border border-slate-200 rounded-2xl p-4 flex flex-col justify-between">
              <div>
                <a
                  href="https://www.transportation.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-700 font-bold hover:underline inline-flex items-center gap-1.5 mb-1"
                >
                  AASHTO Highway Specifications <ExternalLink size={13} />
                </a>
                <p className="text-xs text-slate-500 m-0">
                  American Association of State Highway and Transportation Officials design guides
                  and volumetric testing standards (T 209, T 166).
                </p>
              </div>
            </li>

            <li className="bg-white border border-slate-200 rounded-2xl p-4 flex flex-col justify-between">
              <div>
                <a
                  href="https://www.asphaltinstitute.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-700 font-bold hover:underline inline-flex items-center gap-1.5 mb-1"
                >
                  Asphalt Institute MS-2 & MS-4 <ExternalLink size={13} />
                </a>
                <p className="text-xs text-slate-500 m-0">
                  Mix Design Methods for Asphalt Concrete and Asphalt Handbook practical guidelines.
                </p>
              </div>
            </li>

            <li className="bg-white border border-slate-200 rounded-2xl p-4 flex flex-col justify-between">
              <div>
                <a
                  href="https://www.astm.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-700 font-bold hover:underline inline-flex items-center gap-1.5 mb-1"
                >
                  ASTM International Standards <ExternalLink size={13} />
                </a>
                <p className="text-xs text-slate-500 m-0">
                  Standard test methods for bituminous mixtures including Marshall stability (ASTM
                  D6926) and theoretical maximum specific gravity (ASTM D2041).
                </p>
              </div>
            </li>

            <li className="bg-white border border-slate-200 rounded-2xl p-4 flex flex-col justify-between">
              <div>
                <a
                  href="https://www.asphaltpavement.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-700 font-bold hover:underline inline-flex items-center gap-1.5 mb-1"
                >
                  National Asphalt Pavement Association (NAPA) <ExternalLink size={13} />
                </a>
                <p className="text-xs text-slate-500 m-0">
                  Leading industry research on warm-mix asphalt, environmental sustainability, and
                  compaction technology.
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* What We Focus On */}
        <h2 className="text-xl font-bold text-slate-900 mb-6">Our Core Focus Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          <div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white border border-blue-200 flex items-center justify-center shrink-0">
                <Info size={20} className="text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Clear Math & Transparent Steps</h3>
                <p className="text-slate-600 text-sm leading-relaxed m-0">
                  We show how quantities are determined rather than hiding numbers behind a black-box
                  system. Users can inspect density factors, formulas, and metric/imperial conversion
                  constants.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-orange-100 bg-orange-50/60 p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white border border-orange-200 flex items-center justify-center shrink-0">
                <Calculator size={20} className="text-orange-500" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Job-Ready Construction Tools</h3>
                <p className="text-slate-600 text-sm leading-relaxed m-0">
                  Our calculations reflect day-to-day jobsite requirements: converting loose volume to
                  compacted thickness, accounting for haulage waste factors, and evaluating driveway
                  square footage costs.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-teal-100 bg-teal-50/60 p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white border border-teal-200 flex items-center justify-center shrink-0">
                <CheckCircle2 size={20} className="text-teal-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">100% Free Open Access</h3>
                <p className="text-slate-600 text-sm leading-relaxed m-0">
                  We provide completely open web utilities without mandatory registration,
                  paywalls, or credit card requirements. Everyone from contractor apprentices to
                  senior project managers can utilize our suite.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-violet-100 bg-violet-50/60 p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white border border-violet-200 flex items-center justify-center shrink-0">
                <TrendingUp size={20} className="text-violet-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Continuous Peer Review</h3>
                <p className="text-slate-600 text-sm leading-relaxed m-0">
                  We actively review and refine calculation constants against field feedback,
                  updates to ASTM standards, and modern pavement density recommendations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Funding & Advertising Model */}
        <div className="bg-orange-50/70 border border-orange-200 rounded-3xl p-8 mb-12">
          <div className="flex items-center gap-3 mb-3">
            <Compass size={22} className="text-orange-600" />
            <h2 className="text-lg font-bold text-slate-900 m-0">
              How BitumenCalcPro is Funded
            </h2>
          </div>
          <p className="text-slate-700 text-sm leading-relaxed mb-3">
            BitumenCalcPro is an independently funded digital venture. To maintain our servers,
            conduct technical research, and keep our calculations freely available to anyone across
            the globe, we display unobtrusive third-party advertisements via{" "}
            <strong>Google AdSense</strong>.
          </p>
          <p className="text-slate-700 text-sm leading-relaxed m-0">
            Advertising revenue supports our infrastructure costs without requiring subscription fees
            from civil engineering students or small paving contractors. Editorial integrity and
            mathematical rigor remain strictly independent from our advertising partners.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-violet-950 rounded-3xl p-8 sm:p-10 mb-12 text-center sm:text-left text-white">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <Droplets size={36} className="text-orange-400 shrink-0 mt-1" />
            <div>
              <h2 className="text-white font-bold text-2xl mb-3">Our Continuing Commitment</h2>
              <p className="text-slate-300 text-base leading-relaxed mb-4 font-medium italic">
                &quot;To empower paving professionals and civil engineers with clear, verified, and
                accessible digital calculation instruments.&quot;
              </p>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">
                We are continually expanding our suite with new calculation modules, compaction
                density guides, and bitumen testing references. Have an idea for a new tool or
                spotted something we can enhance?
              </p>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-sm text-slate-200">
                <Mail size={16} className="text-orange-400" />
                Write to Founder:{" "}
                <a
                  href="mailto:contact@bitumencalcpro.com"
                  className="text-white font-bold underline hover:text-orange-300"
                >
                  contact@bitumencalcpro.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 px-7 py-3.5 rounded-full font-bold text-sm transition-all shadow-sm w-full sm:w-auto"
          >
            Contact the Team
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-500 active:scale-95 text-white px-7 py-3.5 rounded-full font-bold text-sm transition-all shadow-md shadow-orange-200 w-full sm:w-auto"
          >
            <Calculator size={16} />
            Open Bitumen Calculator
          </Link>
        </div>
      </LegalLayout>
    </>
  );
}
