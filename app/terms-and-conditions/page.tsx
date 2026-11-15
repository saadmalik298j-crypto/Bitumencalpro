// app/terms-and-conditions/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import LegalLayout from "../components/LegalLayout";
import {
  CheckCircle,
  XCircle,
  Scale,
  Globe,
  Mail,
  ExternalLink,
  ShieldAlert,
  HardHat,
  BadgeDollarSign,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Terms and Conditions | BitumenCalcPro",
  description:
    "Terms and Conditions of Use for BitumenCalcPro. Review user rights, intellectual property, advertising disclosures, and limitations of liability for our civil engineering calculation platform.",
  alternates: { canonical: "https://bitumencalcpro.com/terms-and-conditions" },
  openGraph: {
    title: "Terms and Conditions | BitumenCalcPro",
    description:
      "Review the comprehensive terms of use, engineering estimation disclaimers, and advertising policies for BitumenCalcPro.",
    url: "https://bitumencalcpro.com/terms-and-conditions",
    siteName: "BitumenCalcPro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms and Conditions | BitumenCalcPro",
    description:
      "Review the terms of use, engineering estimation disclaimers, and advertising policies for BitumenCalcPro.",
  },
};

const allowed = [
  "Utilize all calculators freely for commercial, educational, or personal paving projects",
  "Share calculation methodologies, charts, and guide links with engineers, students, or project clients",
  "Reference empirical formulas and technical density tables in reports with proper attribution",
  "Integrate reference links into academic or contractor educational curricula",
];

const notAllowed = [
  "Scrape, harvest, bulk-query, or replicate our proprietary calculator code, scripts, or original content",
  "Resell, repackage, or distribute our web tools as a commercial paid service",
  "Deploy automated bots, spiders, or scrapers that cause disproportionate server load or denial-of-service",
  "Remove, obscure, or alter copyright watermarks, notices, or author attributions from any material",
];

export default function TermsPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Terms and Conditions | BitumenCalcPro",
    url: "https://bitumencalcpro.com/terms-and-conditions",
    description:
      "Terms of Service governing the use of BitumenCalcPro free civil engineering tools, advertising disclosures, and limitations of liability.",
    dateModified: "2026-11-15",
    isPartOf: {
      "@type": "WebSite",
      name: "BitumenCalcPro",
      url: "https://bitumencalcpro.com",
    },
  };

  return (
    <>
      <Script
        id="schema-terms-page"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <LegalLayout
        title="Terms & Conditions"
        subtitle="Clear, fair, and legally sound ground rules governing your use of BitumenCalcPro civil engineering calculators and technical resources."
        lastUpdated="November 15, 2026"
        badge="Terms of Service"
        accentColor="blue"
      >
        {/* Intro Summary Box */}
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-10">
          <p className="text-slate-700 text-base leading-relaxed m-0">
            <strong className="text-blue-700">Quick Agreement Summary:</strong> By accessing or
            using BitumenCalcPro (
            <a href="https://bitumencalcpro.com" className="text-blue-700 underline font-medium">
              bitumencalcpro.com
            </a>
            ), you agree to be bound by these Terms and Conditions. Our platform delivers free
            preliminary calculation tools and educational articles for civil engineers, asphalt
            paving contractors, and students. If you disagree with any portion of these terms, please
            refrain from using our services. For inquiries or legal notices, reach us directly at{" "}
            <a
              href="mailto:contact@bitumencalcpro.com"
              className="text-blue-700 font-bold underline hover:text-blue-900 transition-colors"
            >
              contact@bitumencalcpro.com
            </a>
            .
          </p>
        </div>

        {/* Section 1: The Service Scope */}
        <div className="space-y-6 mb-10">
          <div className="rounded-2xl border border-blue-100 bg-blue-50/50 p-7">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white border border-blue-200 flex items-center justify-center shrink-0">
                <Scale size={20} className="text-blue-600" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-2">
                  1. Scope of the Service
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-3">
                  BitumenCalcPro provides an integrated suite of web-based civil engineering calculation
                  utilities, including but not limited to the Bitumen Quantity Calculator, Asphalt
                  Tonnage Calculator, Driveway Cost Estimator, Tack Coat Emulsion Calculator, Asphalt
                  Millings Calculator, and Bitumen Tank Volume Calculator.
                </p>
                <p className="text-slate-600 text-sm leading-relaxed m-0">
                  All tools are provided completely free of charge for informational, planning, and
                  educational estimation purposes. We do not provide architectural, structural, or
                  formal construction engineering certification through this website.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: Advertising & Monetization Disclosures (AdSense) */}
          <div className="rounded-2xl border border-orange-200 bg-orange-50/50 p-7">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white border border-orange-200 flex items-center justify-center shrink-0">
                <BadgeDollarSign size={20} className="text-orange-600" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-2">
                  2. Third-Party Advertisements & Monetization
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-3">
                  To keep our engineering calculators free and continuously updated without paywalls,
                  BitumenCalcPro displays advertisements managed by third-party advertising partners,
                  including <strong>Google AdSense</strong>.
                </p>
                <p className="text-slate-600 text-sm leading-relaxed mb-3">
                  You acknowledge that third-party advertisements may be targeted to site content or
                  your browsing history in compliance with applicable advertising laws. BitumenCalcPro
                  does not endorse, verify, or guarantee the claims, products, or services advertised
                  by third-party sponsors. We adhere strictly to the{" "}
                  <a
                    href="https://www.ftc.gov/business-guidance/advertising-marketing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-700 underline font-semibold inline-flex items-center gap-1"
                  >
                    FTC Truth in Advertising Guidelines <ExternalLink size={12} />
                  </a>
                  . Any transaction you enter into with an advertiser found on our site is strictly
                  between you and that third party.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3: Engineering Disclaimer & Professional Verification */}
          <div className="rounded-2xl border border-amber-200 bg-amber-50/60 p-7">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white border border-amber-300 flex items-center justify-center shrink-0">
                <HardHat size={20} className="text-amber-600" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-2">
                  3. Requirement for Professional Engineering Verification
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-3">
                  Asphalt pavement mixtures and bitumen products are subject to dynamic real-world
                  variables: aggregate specific gravity, binder grade (PG, penetration, or viscosity
                  grade), mix design type (HMA, WMA, SMA), ambient placement temperature, subgrade
                  resilience, and field compaction levels.
                </p>
                <p className="text-slate-600 text-sm leading-relaxed m-0">
                  <strong>
                    Calculations generated on BitumenCalcPro must never substitute for a project-specific
                    Job-Mix Formula (JMF) or the certified stamped review of a licensed Professional
                    Engineer (PE).
                  </strong>{" "}
                  Before placing material orders, pouring asphalt, or bidding tenders, calculations
                  must be validated against applicable regional engineering standards such as{" "}
                  <a
                    href="https://ncees.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-800 underline font-semibold inline-flex items-center gap-1"
                  >
                    NCEES Engineering Licensure Standards <ExternalLink size={12} />
                  </a>{" "}
                  and relevant Department of Transportation (DOT) manuals.
                </p>
              </div>
            </div>
          </div>

          {/* Section 4: Intellectual Property */}
          <div className="rounded-2xl border border-violet-100 bg-violet-50/50 p-7">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white border border-violet-200 flex items-center justify-center shrink-0">
                <Globe size={20} className="text-violet-600" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-2">
                  4. Intellectual Property & Original Works
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-3">
                  All digital assets published on BitumenCalcPro — including our interactive software
                  algorithms, responsive UI components, mathematical formulations, original technical
                  diagrams, logos, and educational engineering guides — are the proprietary property
                  of BitumenCalcPro and founder Nabeel Awan, protected under international copyright
                  treaties.
                </p>
                <p className="text-slate-600 text-sm leading-relaxed m-0">
                  You are granted a revocable, non-exclusive license to use the tools for personal,
                  educational, or workplace project estimations. You may not decompile, reverse-engineer,
                  or scrape our source code without explicit prior written authorization.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 5: Permitted vs Prohibited Use */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-7">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <CheckCircle size={20} className="text-emerald-600" />
              Permitted Use
            </h2>
            <ul className="space-y-3">
              {allowed.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle size={12} className="text-emerald-600" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-red-50 border border-red-100 rounded-2xl p-7">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <XCircle size={20} className="text-red-500" />
              Prohibited Activities
            </h2>
            <ul className="space-y-3">
              {notAllowed.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="w-5 h-5 rounded-full bg-red-100 border border-red-200 flex items-center justify-center shrink-0 mt-0.5">
                    <XCircle size={12} className="text-red-500" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Section 6: Limitation of Liability */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-7 mb-10">
          <div className="flex items-start gap-3 mb-2">
            <ShieldAlert size={22} className="text-amber-700 shrink-0 mt-0.5" />
            <h2 className="text-lg font-bold text-slate-900">
              5. Limitation of Liability & Warranty Disclaimer
            </h2>
          </div>
          <p className="text-slate-700 text-sm leading-relaxed mb-3">
            BitumenCalcPro is provided on an <strong>&quot;AS IS&quot;</strong> and{" "}
            <strong>&quot;AS AVAILABLE&quot;</strong> basis without warranties of any kind, whether
            express or implied, including but not limited to implied warranties of merchantability,
            fitness for a particular pavement application, or uninterrupted service.
          </p>
          <p className="text-slate-700 text-sm leading-relaxed m-0">
            In no event shall BitumenCalcPro, its founder, contributors, or web hosts be held liable
            for direct, indirect, incidental, special, consequential, or punitive damages — including
            material supply shortages, paving project overrun costs, tender bidding errors, structural
            asphalt failures, or downtime — arising out of your access to or reliance upon calculations
            provided on this website.
          </p>
        </div>

        {/* Section 7: External Links & Web Standards */}
        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-7 mb-10">
          <h2 className="text-lg font-bold text-slate-900 mb-3">
            6. External Links & Web Standards Compliance
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-3">
            Our educational articles and calculators reference external industry sources, government
            transportation bodies, and testing agencies. BitumenCalcPro exercises no control over
            external websites and bears no responsibility for their privacy practices or content.
            Hyperlinks are provided solely for scholarly and operational convenience.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed m-0">
            Our codebase strives to maintain open web accessibility and interoperability in
            accordance with the{" "}
            <a
              href="https://www.w3.org/standards/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-800 underline font-semibold inline-flex items-center gap-1"
            >
              World Wide Web Consortium (W3C) Web Standards <ExternalLink size={12} />
            </a>
            .
          </p>
        </div>

        {/* Section 8: Governing Law & Updates */}
        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-7 mb-10">
          <h2 className="text-lg font-bold text-slate-900 mb-3">
            7. Governing Law, Severability & Revisions
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-3">
            These Terms and Conditions are governed by applicable general commercial principles and
            local laws. If any provision of these terms is judged invalid by a court of competent
            jurisdiction, the remaining clauses will remain in full force and effect.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed m-0">
            We reserve the right to modify these terms at any time. Continued use of BitumenCalcPro
            following notice of revisions constitutes your acceptance of the amended terms.
          </p>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-violet-950 rounded-3xl p-8 sm:p-10 text-center text-white">
          <Mail size={36} className="text-orange-400 mx-auto mb-3" />
          <h2 className="text-white font-bold text-2xl mb-2">
            Questions Regarding Our Terms of Use?
          </h2>
          <p className="text-slate-300 text-sm mb-6 max-w-lg mx-auto leading-relaxed">
            If you have questions about licensing our calculation widgets, partnership terms, or
            legal clarifications, our administrative team is ready to help:
          </p>
          <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-4 mb-6">
            <p className="text-xs uppercase tracking-widest text-orange-300 font-bold mb-1">
              Legal & Administrative Inquiries
            </p>
            <a
              href="mailto:contact@bitumencalcpro.com"
              className="text-white hover:text-orange-300 font-mono font-bold text-lg sm:text-xl transition-colors underline underline-offset-4"
            >
              contact@bitumencalcpro.com
            </a>
          </div>
          <div>
            <a
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 active:scale-95 text-white px-7 py-3 rounded-full font-bold text-sm transition-all shadow-md shadow-orange-900/40"
            >
              Contact Support Team
            </a>
          </div>
        </div>
      </LegalLayout>
    </>
  );
}
