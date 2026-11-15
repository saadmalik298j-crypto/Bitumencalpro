// app/disclaimer/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import LegalLayout from "../components/LegalLayout";
import {
  AlertTriangle,
  HardHat,
  BookOpen,
  ThumbsUp,
  Mail,
  ExternalLink,
  ShieldCheck,
  BadgeDollarSign,
  Compass,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Disclaimer | BitumenCalcPro",
  description:
    "Important engineering estimation disclaimer, advertising disclosure, and professional liability limits for BitumenCalcPro civil calculation tools.",
  alternates: { canonical: "https://bitumencalcpro.com/disclaimer" },
  openGraph: {
    title: "Disclaimer | BitumenCalcPro",
    description:
      "Important engineering disclaimer and advertising disclosures for BitumenCalcPro. Learn why professional engineering review is required.",
    url: "https://bitumencalcpro.com/disclaimer",
    siteName: "BitumenCalcPro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Disclaimer | BitumenCalcPro",
    description:
      "Important engineering disclaimer and advertising disclosures for BitumenCalcPro. Learn why professional engineering review is required.",
  },
};

const points = [
  {
    icon: AlertTriangle,
    color: "amber",
    title: "1. Mathematical Estimates vs. Job-Mix Formulas",
    text: "The quantities computed by BitumenCalcPro are mathematical approximations generated using typical compacted densities (e.g., 2,300 to 2,450 kg/m³ for Dense Graded Asphalt) and standard volumetric equations. In real pavement construction, material tonnage is governed by project-specific Job-Mix Formulas (JMF), exact aggregate bulk specific gravity (Gsb), bitumen binder specific gravity (Gb), and field compaction tolerances. Our calculators are intended for preliminary bidding, material budgeting, and educational estimation — never as stamped final design specifications.",
  },
  {
    icon: HardHat,
    color: "orange",
    title: "2. Requirement for Professional Engineering Review",
    text: "We strongly advise that all material quantity determinations, asphalt lift thickness choices, tack coat application rates, and slope gradients be vetted and approved by a certified pavement engineer, registered Professional Engineer (PE), or certified laboratory technician before issuing purchase orders or beginning construction. BitumenCalcPro does not provide licensed architectural or structural engineering services.",
  },
  {
    icon: BookOpen,
    color: "blue",
    title: "3. Codes, Standards & Regional Variances",
    text: "Pavement engineering codes vary considerably across international jurisdictions. Whether your project is governed by the American Association of State Highway and Transportation Officials (AASHTO), ASTM International standards, British Standards (BS EN), or Indian MoRTH specifications, regional moisture sensitivity, freeze-thaw indices, and truck axle loadings (ESALs) take precedence over general web calculator defaults.",
  },
  {
    icon: ThumbsUp,
    color: "violet",
    title: "4. Input Accuracy and Real-World Waste Factors",
    text: "Calculations rely entirely on the exact dimensional and density data supplied by the user. Field operations invariably experience material waste, irregular subgrade grading, tack coat overspray, and roller pass edge trimming (customarily requiring a 5% to 10% contingency factor). BitumenCalcPro cannot account for unseen subgrade undulations or hauling losses.",
  },
];

const colorClasses: Record<string, { icon: string; bg: string; border: string; iconBg: string }> = {
  amber: {
    icon: "text-amber-600",
    bg: "bg-amber-50/60",
    border: "border-amber-200",
    iconBg: "bg-amber-100 border-amber-300",
  },
  orange: {
    icon: "text-orange-600",
    bg: "bg-orange-50/60",
    border: "border-orange-200",
    iconBg: "bg-orange-100 border-orange-300",
  },
  blue: {
    icon: "text-blue-600",
    bg: "bg-blue-50/60",
    border: "border-blue-200",
    iconBg: "bg-blue-100 border-blue-300",
  },
  violet: {
    icon: "text-violet-600",
    bg: "bg-violet-50/60",
    border: "border-violet-200",
    iconBg: "bg-violet-100 border-violet-300",
  },
};

export default function DisclaimerPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Disclaimer | BitumenCalcPro",
    url: "https://bitumencalcpro.com/disclaimer",
    description:
      "Official disclaimer detailing the informational and estimation scope of BitumenCalcPro civil calculators, third-party advertising disclosures, and engineering liability limitations.",
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
        id="schema-disclaimer-page"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <LegalLayout
        title="Disclaimer"
        subtitle="Full transparency on the operational capabilities, mathematical premises, and legal boundaries of BitumenCalcPro tools."
        lastUpdated="November 15, 2026"
        badge="Legal & Engineering Notice"
        accentColor="orange"
      >
        {/* Prominent Safety Warning */}
        <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-2xl p-6 mb-10 shadow-sm">
          <div className="flex items-start gap-4">
            <AlertTriangle size={26} className="text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-amber-900 text-base mb-1">
                Mandatory Professional Notice
              </p>
              <p className="text-amber-800 text-sm leading-relaxed m-0">
                BitumenCalcPro is a digital estimation and educational decision-support resource.
                All numerical outputs, tonnage estimates, emulsion volumes, and cost figures must be
                cross-verified by a certified civil engineer or paving superintendent prior to
                contractual commitments or field placement.
              </p>
            </div>
          </div>
        </div>

        {/* Intro */}
        <div className="mb-10 text-slate-700 text-base leading-relaxed space-y-4">
          <p>
            At BitumenCalcPro (
            <a href="https://bitumencalcpro.com" className="text-orange-600 font-semibold underline">
              bitumencalcpro.com
            </a>
            ), we are dedicated to helping civil engineers, asphalt contractors, quantity surveyors,
            and engineering students streamline pavement calculations. We believe that professional
            integrity requires complete candor regarding the mathematical scope and inherent
            limitations of browser-based calculation utilities.
          </p>
          <p>
            If you ever have technical questions regarding our calculation methodology, please reach
            out directly at{" "}
            <a
              href="mailto:contact@bitumencalcpro.com"
              className="text-orange-600 font-bold underline hover:text-orange-800 transition-colors"
            >
              contact@bitumencalcpro.com
            </a>
            .
          </p>
        </div>

        {/* Core Technical Disclaimer Cards */}
        <div className="space-y-6 mb-12">
          {points.map((point, idx) => {
            const Icon = point.icon;
            const colors = colorClasses[point.color];
            return (
              <div key={idx} className={`rounded-2xl border ${colors.border} ${colors.bg} p-7`}>
                <div className="flex items-start gap-4">
                  <div
                    className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${colors.iconBg}`}
                  >
                    <Icon size={20} className={colors.icon} />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-slate-900 mb-2">{point.title}</h2>
                    <p className="text-slate-600 text-sm leading-relaxed m-0">{point.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Authoritative Engineering References */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-7 mb-10">
          <div className="flex items-center gap-3 mb-4">
            <Compass size={22} className="text-slate-800" />
            <h2 className="text-lg font-bold text-slate-900 m-0">
              Authoritative Reference Standards & External Guidelines
            </h2>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            Our algorithms and educational articles reference recognized global pavement
            engineering organizations. For formal project standards, specifications, and laboratory
            test protocols, please refer to the following official resources:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-700">
            <li className="bg-white border border-slate-200 rounded-xl p-3 flex items-center justify-between">
              <a
                href="https://www.astm.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-900 hover:text-orange-600 font-semibold inline-flex items-center gap-1.5"
              >
                ASTM International (D6926 / D2041) <ExternalLink size={13} className="text-slate-400" />
              </a>
            </li>
            <li className="bg-white border border-slate-200 rounded-xl p-3 flex items-center justify-between">
              <a
                href="https://www.transportation.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-900 hover:text-orange-600 font-semibold inline-flex items-center gap-1.5"
              >
                AASHTO Highway Standards <ExternalLink size={13} className="text-slate-400" />
              </a>
            </li>
            <li className="bg-white border border-slate-200 rounded-xl p-3 flex items-center justify-between">
              <a
                href="https://www.fhwa.dot.gov/pavement/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-900 hover:text-orange-600 font-semibold inline-flex items-center gap-1.5"
              >
                Federal Highway Administration (FHWA) <ExternalLink size={13} className="text-slate-400" />
              </a>
            </li>
            <li className="bg-white border border-slate-200 rounded-xl p-3 flex items-center justify-between">
              <a
                href="https://www.asphaltinstitute.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-900 hover:text-orange-600 font-semibold inline-flex items-center gap-1.5"
              >
                Asphalt Institute Technical Manuals <ExternalLink size={13} className="text-slate-400" />
              </a>
            </li>
          </ul>
        </div>

        {/* Advertising & Monetization Disclosure (Google AdSense) */}
        <div className="bg-orange-50/70 border border-orange-200 rounded-2xl p-7 mb-10">
          <div className="flex items-center gap-3 mb-3">
            <BadgeDollarSign size={22} className="text-orange-600" />
            <h2 className="text-lg font-bold text-slate-900 m-0">
              Advertising & Sponsorship Disclosure
            </h2>
          </div>
          <p className="text-slate-700 text-sm leading-relaxed mb-3">
            BitumenCalcPro is an independently operated web platform supported through digital
            advertising networks, primarily <strong>Google AdSense</strong>. Third-party advertisers
            display commercial messages across our site to fund our ongoing development, high-speed
            hosting, and educational research.
          </p>
          <p className="text-slate-700 text-sm leading-relaxed mb-3">
            In compliance with the{" "}
            <a
              href="https://www.ftc.gov/business-guidance/advertising-marketing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-700 font-bold underline inline-flex items-center gap-1"
            >
              U.S. Federal Trade Commission (FTC) Guides <ExternalLink size={12} />
            </a>
            , we disclose that advertisements displayed on our site are clearly separated from our
            editorial content and calculator outputs. The presence of any advertisement does not
            constitute an endorsement, guarantee, or warranty by BitumenCalcPro of any product,
            equipment, or service advertised.
          </p>
          <p className="text-slate-700 text-sm leading-relaxed m-0">
            Ad networks and third-party vendors have no influence over our mathematical algorithms,
            density values, or engineering recommendations.
          </p>
        </div>

        {/* Liability Limitation */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-7 mb-10">
          <div className="flex items-center gap-3 mb-3">
            <ShieldCheck size={22} className="text-slate-700" />
            <h2 className="text-lg font-bold text-slate-900 m-0">
              Legal Limitation of Liability
            </h2>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed mb-3">
            Under no circumstances shall BitumenCalcPro, its founder Nabeel Awan, authors, or
            technical contributors be held legally liable for any financial losses, contractor
            penalties, procurement disputes, material under-runs or over-runs, structural pavement
            deficiencies, or consequential damages resulting from the use of, or inability to use,
            the calculations provided on this website.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed m-0">
            Users assume 100% full responsibility for validating all outputs against approved
            project plans, laboratory mix designs, and stamped engineering drawings.
          </p>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-violet-950 rounded-3xl p-8 sm:p-10 text-center text-white">
          <Mail size={36} className="text-orange-400 mx-auto mb-3" />
          <h2 className="text-white font-bold text-2xl mb-2">
            Spotted an Anomaly or Have Feedback?
          </h2>
          <p className="text-slate-300 text-sm mb-6 max-w-lg mx-auto leading-relaxed">
            We hold our engineering models to rigorous standards. If you identify a formula
            discrepancy or wish to suggest an improved calculation approach, please contact our
            technical lead:
          </p>
          <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-4 mb-6">
            <p className="text-xs uppercase tracking-widest text-orange-300 font-bold mb-1">
              Direct Technical Feedback
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
              Submit Detailed Feedback
            </a>
          </div>
        </div>
      </LegalLayout>
    </>
  );
}
