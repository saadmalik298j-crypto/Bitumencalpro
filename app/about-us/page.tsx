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
  MapPin,
  Award,
  BookOpenCheck,
  ShieldCheck,
  Mail
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | BitumenCalcPro",
  description:
    "Learn about BitumenCalcPro — founded by Nabeel Awan in Islamabad, Pakistan. Discover our engineering computational methodologies, AASHTO/ASTM standards alignment, and pavement estimation tools.",
  alternates: { canonical: "https://bitumencalcpro.com/about-us" },
  openGraph: {
    title: "About Us | BitumenCalcPro",
    description:
      "Learn about BitumenCalcPro — founded by Nabeel Awan in Islamabad, Pakistan. Discover our engineering computational methodologies, AASHTO/ASTM standards alignment, and pavement estimation tools.",
    url: "https://bitumencalcpro.com/about-us",
    siteName: "BitumenCalcPro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | BitumenCalcPro",
    description: "Learn about BitumenCalcPro — founded by Nabeel Awan in Islamabad, Pakistan. Civil engineering calculation tools grounded in AASHTO and ASTM standards.",
  },
};

export default function AboutUsPage() {
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About BitumenCalcPro",
    "url": "https://bitumencalcpro.com/about-us",
    "description": "Learn about BitumenCalcPro — an independent online engineering resource for precise bitumen, asphalt, and pavement material calculation grounded in international standards.",
    "isPartOf": {
      "@type": "WebSite",
      "name": "BitumenCalcPro",
      "url": "https://bitumencalcpro.com"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "BitumenCalcPro",
    "url": "https://bitumencalcpro.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://bitumencalcpro.com/logo.png",
      "width": 512,
      "height": 512
    },
    "description": "Specialized engineering calculation tools and technical resources for bitumen, asphalt, and pavement contractors worldwide.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Islamabad",
      "addressCountry": "PK"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Technical Support",
      "url": "https://bitumencalcpro.com/contact-us"
    },
    "sameAs": [
      "https://twitter.com/bitumencalcpro"
    ]
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Nabeel Awan",
    "url": "https://bitumencalcpro.com/about-us",
    "image": "https://bitumencalcpro.com/nabeel-awan-bitumencalcpro-founder.webp",
    "jobTitle": "Founder & Lead Technical Developer",
    "description": "Software engineer and lead technical developer of BitumenCalcPro based in Islamabad, Pakistan. Specializes in civil engineering computational modeling, pavement estimation algorithms, and mix design software grounded in AASHTO, ASTM, and Asphalt Institute MS-2 standards.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Islamabad",
      "addressCountry": "PK"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "BitumenCalcPro",
      "url": "https://bitumencalcpro.com"
    },
    "sameAs": [
      "https://web.facebook.com/p/Nabeel-Awan-61592639548311/",
      "https://www.instagram.com/nabeelawan78y7/"
    ],
    "knowsAbout": [
      "Bitumen Volumetric Calculation",
      "Hot Mix Asphalt (HMA) Design",
      "Pavement Engineering Algorithms",
      "AASHTO T 245 & T 166 Standards",
      "ASTM D6926 & D2041 Test Methods",
      "Asphalt Institute MS-2 Guidelines",
      "MoRTH Section 500 Specifications"
    ]
  };

  return (
    <>
      <Script
        id="schema-about-page"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <Script
        id="schema-organization"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="schema-person"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <LegalLayout
        title="About BitumenCalcPro"
        subtitle="Precision software, verified engineering formulas, and practical tools for global pavement estimation."
        lastUpdated="September 26, 2026"
        badge="About Us"
        accentColor="violet"
      >
        {/* Operating Location & Identity Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-teal-950 rounded-2xl p-6 mb-12 border border-slate-700/60 shadow-lg text-white">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-300 shrink-0">
                <MapPin size={22} />
              </div>
              <div>
                <div className="text-xs font-bold text-teal-300 uppercase tracking-wider">Operating Headquarters</div>
                <div className="text-base font-bold text-white">Islamabad, Pakistan</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-violet-500/20 border border-violet-500/40 flex items-center justify-center text-violet-300 shrink-0">
                <Award size={22} />
              </div>
              <div>
                <div className="text-xs font-bold text-violet-300 uppercase tracking-wider">Engineering Compliance</div>
                <div className="text-base font-bold text-white">AASHTO, ASTM & MS-2 Aligned</div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Story */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-blue-500 flex items-center justify-center text-white font-black text-lg shadow-md shadow-violet-200">
              S
            </div>
            <h2 className="text-2xl font-bold text-slate-900 m-0">Our Purpose & Background</h2>
          </div>

          <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
            <p>
              BitumenCalcPro is a dedicated engineering computation platform developed to provide <strong>accurate, transparent, and standardized bitumen, asphalt, and pavement material estimation tools</strong> for civil engineers, site managers, paving contractors, and students worldwide.
            </p>
            <p>
              The platform was created by <strong>Nabeel Awan</strong>, a software developer and technical researcher operating from <strong>Islamabad, Pakistan</strong>. Combining web application architecture with rigorous study of international highway and pavement materials specifications, Nabeel established BitumenCalcPro to replace prone-to-error manual estimation spreadsheets with precise, accessible web algorithms.
            </p>
            <p>
              Rather than relying on unverified generic estimates, all calculation formulas on BitumenCalcPro are directly coded from <strong>governing civil engineering references and laboratory standards</strong>, including AASHTO mix design procedures, ASTM volumetric testing protocols, and Asphalt Institute MS-2 specifications.
            </p>
          </div>
        </div>

        {/* Meet the Founder */}
        <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 mb-12 border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-violet-100 rounded-full blur-3xl -z-10 opacity-50 translate-x-1/2 -translate-y-1/2" />
          <h2 className="text-2xl font-bold text-slate-900 mb-8 relative z-10">Meet the Founder & Lead Developer</h2>
          
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start relative z-10">
            {/* Founder Image */}
            <div className="w-48 h-48 md:w-56 md:h-56 shrink-0 relative rounded-full p-2 bg-gradient-to-tr from-violet-300 via-teal-300 to-orange-300 shadow-lg group">
              <div className="absolute inset-0 bg-white rounded-full m-1" />
              <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-100">
                <Image
                  src="/nabeel-awan-bitumencalcpro-founder.webp"
                  alt="Nabeel Awan - Founder & Lead Developer of BitumenCalcPro"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 192px, 224px"
                />
              </div>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold text-slate-900 mb-1">Nabeel Awan</h3>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-4">
                <span className="bg-violet-100 text-violet-800 text-xs font-bold px-3 py-1 rounded-full">
                  Founder & Lead Technical Developer
                </span>
                <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                  <MapPin size={12} className="text-teal-600" /> Islamabad, Pakistan
                </span>
              </div>

              <div className="space-y-3.5 text-slate-600 text-sm leading-relaxed mb-6">
                <p>
                  Nabeel Awan is the founder and lead software developer behind BitumenCalcPro. With a specialization in computational tools, software engineering, and pavement material algorithms, Nabeel focuses on creating high-precision online calculators tailored to civil engineering standards.
                </p>
                <p>
                  He personally researches, programs, and audits the volumetric algorithms, unit conversion logic, and technical guides published on BitumenCalcPro to ensure compliance with global highway construction guidelines.
                </p>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-3">
                <a
                  href="https://web.facebook.com/p/Nabeel-Awan-61592639548311/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors shadow-sm"
                  aria-label="Nabeel Awan Facebook Profile"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a
                  href="https://www.instagram.com/nabeelawan78y7/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-pink-50 text-pink-600 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors shadow-sm"
                  aria-label="Nabeel Awan Instagram Profile"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 bg-teal-50 border border-teal-200 px-3.5 py-2 rounded-full hover:bg-teal-100 transition-colors"
                >
                  <Mail size={14} /> Contact Nabeel Direct
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Engineering Standards & Methodology (E-E-A-T Focus) */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 mb-12 shadow-md">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center">
              <BookOpenCheck size={22} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white m-0">Governing Engineering Standards & Audit Process</h2>
              <p className="text-slate-400 text-xs mt-0.5 m-0">Technical references used to code and validate BitumenCalcPro algorithms</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed text-slate-300">
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-5">
              <h3 className="text-teal-400 font-bold text-sm mb-2">AASHTO Standards Alignment</h3>
              <p className="m-0">
                Calculations conform with <strong>AASHTO T 245</strong> (Resistance to Plastic Flow of Bituminous Mixtures using Marshall Apparatus), <strong>AASHTO T 166</strong> (Bulk Specific Gravity of Compacted Asphalt Mixtures), and <strong>AASHTO M 320</strong> (Performance Graded Asphalt Binders).
              </p>
            </div>

            <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-5">
              <h3 className="text-teal-400 font-bold text-sm mb-2">ASTM International Testing Methods</h3>
              <p className="m-0">
                Volumetric formulations incorporate <strong>ASTM D6926 / D6927</strong> for Marshall compaction and stability testing, and <strong>ASTM D2041</strong> for Theoretical Maximum Specific Gravity (Rice Density) of Bituminous Paving Mixtures.
              </p>
            </div>

            <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-5">
              <h3 className="text-teal-400 font-bold text-sm mb-2">Asphalt Institute Guidelines (MS-2)</h3>
              <p className="m-0">
                Material density ranges and asphalt binder content ratios are benchmarked against <strong>Asphalt Institute Manual Series No. 2 (MS-2)</strong> — <em>Asphalt Mix Design Methods</em>.
              </p>
            </div>

            <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-5">
              <h3 className="text-teal-400 font-bold text-sm mb-2">Global & Regional Specifications</h3>
              <p className="m-0">
                Density formulas and conversion ratios support <strong>BS EN 12697</strong> (European Bituminous Mixtures), <strong>MoRTH Section 500</strong> (Indian Ministry of Road Transport and Highways), and <strong>IS 73 / IS 8887</strong> standards.
              </p>
            </div>
          </div>
        </div>

        {/* What We Focus On */}
        <h2 className="text-xl font-bold text-slate-900 mb-6">Core Operational Commitments</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6 hover:shadow-sm transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white border border-blue-100 flex items-center justify-center shrink-0">
                <Info size={20} className="text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Transparent Calculation Logic</h3>
                <p className="text-slate-600 text-sm leading-relaxed m-0">We display exact mathematical formulas, density multipliers, and unit breakdown steps so users can independently verify every result.</p>
              </div>
            </div>
          </div>
          
          <div className="rounded-2xl border border-orange-100 bg-orange-50 p-6 hover:shadow-sm transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white border border-orange-100 flex items-center justify-center shrink-0">
                <Calculator size={20} className="text-orange-500" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Field-Relevant Paving Tools</h3>
                <p className="text-slate-600 text-sm leading-relaxed m-0">Calculators target real-world pavement workflows: surface area coverage, hot mix asphalt tonnage, prime/tack coat rates, and bitumen emulsion volumes.</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-teal-100 bg-teal-50 p-6 hover:shadow-sm transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white border border-teal-100 flex items-center justify-center shrink-0">
                <CheckCircle2 size={20} className="text-teal-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Open & Accessible Knowledge</h3>
                <p className="text-slate-600 text-sm leading-relaxed m-0">We provide free engineering tools and educational material without paywalls or restrictive registrations.</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-violet-100 bg-violet-50 p-6 hover:shadow-sm transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white border border-violet-100 flex items-center justify-center shrink-0">
                <TrendingUp size={20} className="text-violet-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Continuous Quality Auditing</h3>
                <p className="text-slate-600 text-sm leading-relaxed m-0">Algorithms and educational guides are regularly audited against updated technical literature and industry feedback.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Accuracy & Professional Disclaimer */}
        <div className="bg-orange-50 border border-orange-200/80 rounded-2xl p-7 mb-12">
          <div className="flex items-center gap-3 mb-3">
            <ShieldCheck size={22} className="text-orange-600 shrink-0" />
            <h2 className="text-lg font-bold text-slate-900 m-0 text-orange-950">Accuracy & Engineering Verification Disclaimer</h2>
          </div>
          <p className="text-orange-900/90 text-sm leading-relaxed mb-3">
            BitumenCalcPro calculations are generated using specified density parameters, volumetric mix proportions, and user inputs. Actual paving material quantities on field projects can vary based on job mix formulas (JMF), compaction degree, aggregate specific gravity, and ambient temperatures.
          </p>
          <p className="text-orange-900/90 text-sm leading-relaxed m-0">
            Our calculators serve as <strong>estimation, planning, pre-bid budgeting, and educational tools</strong>. Project managers and contractors must verify final material orders against approved project specifications, laboratory test reports, and certified civil engineer reviews.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-violet-950 rounded-2xl p-8 mb-12 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <Droplets size={32} className="text-teal-400 shrink-0 mt-1" />
            <div>
              <h2 className="text-white font-bold text-xl mb-3">Our Mission</h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-4 font-medium italic">
                &quot;To make specialized pavement and civil engineering calculations transparent, standardized, and accessible to everyone worldwide.&quot;
              </p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                We operate from <strong>Islamabad, Pakistan</strong>, continuously refining computational tools and technical guides for professionals working with asphalt, bitumen, and pavement materials.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed m-0">
                Have feedback or want to suggest a new calculation module? Reach out directly via our <Link href="/contact-us" className="text-teal-400 underline font-semibold">Contact Page</Link>.
              </p>
            </div>
          </div>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 px-6 py-3 rounded-full font-semibold text-sm transition-all shadow-sm w-full sm:w-auto"
          >
            <Mail size={16} className="text-teal-600" />
            Contact Us & Feedback
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 active:scale-95 text-slate-950 px-6 py-3 rounded-full font-bold text-sm transition-all shadow-md shadow-teal-500/20 w-full sm:w-auto"
          >
            <Calculator size={16} />
            Open Bitumen Calculator
          </Link>
        </div>
      </LegalLayout>
    </>
  );
}

