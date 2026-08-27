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
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | BitumenCalcPro",
  description:
    "Learn about BitumenCalcPro — an independent online resource for simple, practical bitumen, asphalt, and pavement calculations.",
  alternates: { canonical: "https://bitumencalcpro.com/about-us" },
  openGraph: {
    title: "About Us | BitumenCalcPro",
    description:
      "Learn about BitumenCalcPro — an independent online resource for simple, practical bitumen, asphalt, and pavement calculations.",
    url: "https://bitumencalcpro.com/about-us",
    siteName: "BitumenCalcPro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | BitumenCalcPro",
    description: "Learn about BitumenCalcPro — an independent online resource for simple, practical bitumen, asphalt, and pavement calculations.",
  },
};

export default function AboutUsPage() {
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About BitumenCalcPro",
    "url": "https://bitumencalcpro.com/about-us",
    "description": "Learn about BitumenCalcPro — an independent online resource for simple, practical bitumen, asphalt, and pavement calculations.",
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
      "url": "https://bitumencalcpro.com/logo.png"
    },
    "description": "Free online bitumen calculator for civil engineers and paving contractors worldwide.",
    "sameAs": [
      "https://twitter.com/bitumencalcpro"
    ]
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
      <LegalLayout
        title="About BitumenCalcPro"
        subtitle="Simple, practical tools for bitumen, asphalt, and pavement calculations."
        lastUpdated="August 27, 2026"
        badge="About Us"
        accentColor="violet"
      >
        {/* Our Story */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-blue-500 flex items-center justify-center text-white font-black text-lg shadow-md shadow-violet-200">
              S
            </div>
            <h2 className="text-2xl font-bold text-slate-900 m-0">Our Story</h2>
          </div>

          <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
            <p>
              BitumenCalcPro is an independent online resource created to make <strong>bitumen, asphalt, and pavement calculations simpler, faster, and easier to understand</strong>.
            </p>
            <p>
              The project was founded by <strong>Nabeel Awan, a web developer with a strong interest in civil engineering, road construction, asphalt, bitumen, and construction technology</strong>.
            </p>
            <p>
              The idea started with a simple goal: make common material calculations easier without requiring complicated spreadsheets or manual calculations. BitumenCalcPro brings these calculations into practical online tools that can be used from anywhere.
            </p>
            <p>
              Our goal is not just to provide a number. Where practical, we explain the inputs, calculation methods, units, and assumptions so users can better understand and verify the results.
            </p>
          </div>
        </div>

        {/* Meet the Founder */}
        <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 mb-12 border border-slate-100 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-violet-100 rounded-full blur-3xl -z-10 opacity-50 translate-x-1/2 -translate-y-1/2" />
          <h2 className="text-2xl font-bold text-slate-900 mb-8 relative z-10">Meet the Founder</h2>
          
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start relative z-10">
            {/* Founder Image - Modern styling */}
            <div className="w-48 h-48 md:w-56 md:h-56 shrink-0 relative rounded-full p-2 bg-gradient-to-tr from-violet-200 to-orange-200 shadow-lg group">
              <div className="absolute inset-0 bg-white rounded-full m-1" />
              <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-100">
                <Image
                  src="/nabeel-awan-bitumencalcpro-founder.webp"
                  alt="Nabeel Awan - Founder of BitumenCalcPro"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 192px, 224px"
                />
              </div>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold text-slate-900 mb-1">Nabeel Awan</h3>
              <p className="text-violet-600 font-medium text-sm mb-4">Founder & Web Developer</p>
              <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                <p>
                  Nabeel Awan is a web developer and the founder of BitumenCalcPro. His work focuses on web development and building practical online tools, with a strong interest in <strong>civil engineering, asphalt, bitumen, pavement construction, and construction technology</strong>.
                </p>
                <p>
                  He develops and maintains BitumenCalcPro, including its calculators, website, technical content, and ongoing improvements.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What We Focus On */}
        <h2 className="text-xl font-bold text-slate-900 mb-6">What We Focus On</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6 hover:shadow-sm transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white border border-blue-100 flex items-center justify-center shrink-0">
                <Info size={20} className="text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Clear Calculations</h3>
                <p className="text-slate-600 text-sm leading-relaxed m-0">We aim to show how results are calculated rather than simply presenting unexplained numbers.</p>
              </div>
            </div>
          </div>
          
          <div className="rounded-2xl border border-orange-100 bg-orange-50 p-6 hover:shadow-sm transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white border border-orange-100 flex items-center justify-center shrink-0">
                <Calculator size={20} className="text-orange-500" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Practical Tools</h3>
                <p className="text-slate-600 text-sm leading-relaxed m-0">Our calculators focus on common estimation tasks involving pavement dimensions, asphalt mix quantities, bitumen content, density, material quantities, and related measurements.</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-teal-100 bg-teal-50 p-6 hover:shadow-sm transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white border border-teal-100 flex items-center justify-center shrink-0">
                <CheckCircle2 size={20} className="text-teal-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Accessible Information</h3>
                <p className="text-slate-600 text-sm leading-relaxed m-0">We provide free online tools and educational resources that can be accessed without specialized software.</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-violet-100 bg-violet-50 p-6 hover:shadow-sm transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white border border-violet-100 flex items-center justify-center shrink-0">
                <TrendingUp size={20} className="text-violet-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Continuous Improvement</h3>
                <p className="text-slate-600 text-sm leading-relaxed m-0">We regularly improve our calculators and content through testing, research, and user feedback.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Calculation Approach */}
        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-7 mb-12">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Our Calculation Approach</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            BitumenCalcPro uses <strong>standard engineering formulas and established calculation methods</strong> to estimate asphalt volume, hot mix asphalt weight, bitumen requirements, aggregate quantities, and related measurements.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            The calculator uses the values entered by the user, including pavement dimensions, mix density, bitumen content, units, and optional settings, to produce practical estimates.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed m-0">
            We aim to keep the calculation process transparent while making technical quantity estimates easier to understand and verify.
          </p>
        </div>
        
        {/* Accuracy & Important Notes */}
        <div className="bg-orange-50 border border-orange-100 rounded-2xl p-7 mb-12">
          <h2 className="text-lg font-bold text-slate-900 mb-4 text-orange-800">Accuracy & Important Notes</h2>
          <p className="text-orange-900/80 text-sm leading-relaxed mb-4">
            Calculator results depend on the information entered by the user and the material properties selected for the calculation. Actual asphalt and bitumen quantities can vary depending on the approved mix design, material characteristics, compaction requirements, project specifications, and site conditions.
          </p>
          <p className="text-orange-900/80 text-sm leading-relaxed m-0">
            BitumenCalcPro is intended for <strong>estimation, planning, educational, and preliminary calculation purposes</strong>. For actual construction projects, results should be checked against <strong>project specifications, approved mix designs, material data, applicable standards, and qualified professional judgment</strong>.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-violet-950 rounded-2xl p-8 mb-12 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <Droplets size={32} className="text-orange-400 shrink-0 mt-1" />
            <div>
              <h2 className="text-white font-bold text-xl mb-3">Our Mission</h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-4 font-medium italic">
                &quot;To make practical pavement and construction calculations easier to access, understand, and verify.&quot;
              </p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                We will continue developing useful calculators, guides, and resources for people working with or learning about <strong>asphalt, bitumen, pavement, and construction</strong>.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed m-0">
                If you have a suggestion, notice an issue, or have an idea for a useful calculator, we would be happy to hear from you.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 px-6 py-3 rounded-full font-semibold text-sm transition-all shadow-sm w-full sm:w-auto"
          >
            Contact Us
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-500 active:scale-95 text-white px-6 py-3 rounded-full font-semibold text-sm transition-all shadow-md shadow-orange-200 w-full sm:w-auto"
          >
            <Calculator size={16} />
            Open Bitumen Calculator
          </Link>
        </div>
      </LegalLayout>
    </>
  );
}
