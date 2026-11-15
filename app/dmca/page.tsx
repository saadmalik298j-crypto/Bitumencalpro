// app/dmca/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import LegalLayout from "../components/LegalLayout";
import {
  ShieldCheck,
  FileText,
  Clock,
  Ban,
  RotateCcw,
  Mail,
  ExternalLink,
  ShieldAlert,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "DMCA Policy | BitumenCalcPro",
  description:
    "BitumenCalcPro Digital Millennium Copyright Act (DMCA) Policy. Learn how to submit copyright infringement notices and counter-notices to our designated agent.",
  alternates: { canonical: "https://bitumencalcpro.com/dmca" },
  openGraph: {
    title: "DMCA Policy | BitumenCalcPro",
    description:
      "Learn how to report copyright infringement to BitumenCalcPro and how we handle DMCA takedown requests.",
    url: "https://bitumencalcpro.com/dmca",
    siteName: "BitumenCalcPro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DMCA Policy | BitumenCalcPro",
    description:
      "Learn how to report copyright infringement to BitumenCalcPro and how we handle DMCA takedown requests.",
  },
};

const steps = [
  {
    icon: FileText,
    color: "blue",
    num: "01",
    title: "Complainant Contact Information",
    text: "Provide your legal name, physical mailing address, telephone number, and verifiable email address so our designated copyright agent can communicate with you directly.",
  },
  {
    icon: ShieldCheck,
    color: "violet",
    num: "02",
    title: "Identification of the Copyrighted Work",
    text: "Clearly describe the copyrighted material claimed to have been infringed, including registration details if registered with the U.S. Copyright Office or international equivalents.",
  },
  {
    icon: Ban,
    color: "orange",
    num: "03",
    title: "Exact Location on BitumenCalcPro",
    text: "Provide the specific URL(s) on bitumencalcpro.com where the allegedly infringing asset is located so that our technical team can promptly identify and investigate the content.",
  },
  {
    icon: Clock,
    color: "cyan",
    num: "04",
    title: "Good Faith Certification",
    text: "Include this statement: \"I have a good faith belief that the disputed use of the copyrighted material is not authorized by the copyright owner, its agent, or the law.\"",
  },
  {
    icon: RotateCcw,
    color: "slate",
    num: "05",
    title: "Perjury Statement & Electronic Signature",
    text: "Include: \"I swear, under penalty of perjury, that the information in this notification is accurate and that I am the copyright owner, or am authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.\" Followed by your physical or electronic signature.",
  },
];

const colorClasses: Record<
  string,
  { icon: string; bg: string; border: string; num: string; numText: string }
> = {
  blue: {
    icon: "text-blue-600",
    bg: "bg-blue-50/60",
    border: "border-blue-200",
    num: "bg-blue-600",
    numText: "text-white",
  },
  violet: {
    icon: "text-violet-600",
    bg: "bg-violet-50/60",
    border: "border-violet-200",
    num: "bg-violet-600",
    numText: "text-white",
  },
  orange: {
    icon: "text-orange-600",
    bg: "bg-orange-50/60",
    border: "border-orange-200",
    num: "bg-orange-500",
    numText: "text-white",
  },
  cyan: {
    icon: "text-cyan-600",
    bg: "bg-cyan-50/60",
    border: "border-cyan-200",
    num: "bg-cyan-600",
    numText: "text-white",
  },
  slate: {
    icon: "text-slate-600",
    bg: "bg-slate-50",
    border: "border-slate-200",
    num: "bg-slate-600",
    numText: "text-white",
  },
};

export default function DmcaPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "DMCA Policy | BitumenCalcPro",
    url: "https://bitumencalcpro.com/dmca",
    description:
      "Guidelines and statutory procedures for filing copyright notices and counter-notices with BitumenCalcPro.",
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
        id="schema-dmca-page"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <LegalLayout
        title="DMCA Copyright Policy"
        subtitle="BitumenCalcPro respects intellectual property rights and acts promptly in response to valid Digital Millennium Copyright Act notices."
        lastUpdated="November 15, 2026"
        badge="Copyright Protection"
        accentColor="cyan"
      >
        {/* Intro */}
        <div className="bg-cyan-50 border border-cyan-200 rounded-2xl p-6 mb-10 shadow-sm">
          <p className="text-slate-700 text-base leading-relaxed m-0">
            BitumenCalcPro (
            <a href="https://bitumencalcpro.com" className="text-cyan-800 font-bold underline">
              bitumencalcpro.com
            </a>
            ) respects the intellectual property rights of others and strictly complies with the{" "}
            <strong>
              <a
                href="https://www.copyright.gov/dmca/"
                className="text-cyan-800 underline font-semibold inline-flex items-center gap-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Digital Millennium Copyright Act (DMCA) <ExternalLink size={13} />
              </a>
            </strong>{" "}
            under Title 17, United States Code, Section 512(c). If you believe in good faith that any
            content published on our website infringes upon your copyright, please follow the formal
            notification procedure outlined below.
          </p>
        </div>

        {/* What is the DMCA */}
        <div className="mb-10 text-slate-700 text-sm leading-relaxed space-y-4">
          <h2 className="text-xl font-bold text-slate-900">
            About the Digital Millennium Copyright Act
          </h2>
          <p>
            The DMCA establishes a legal framework enabling copyright owners to notify online
            service providers of allegedly infringing material. Although BitumenCalcPro operates
            internationally, we adopt DMCA principles alongside the standards established by the{" "}
            <a
              href="https://www.wipo.int/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-800 underline font-semibold inline-flex items-center gap-1"
            >
              World Intellectual Property Organization (WIPO) <ExternalLink size={12} />
            </a>{" "}
            to ensure fair, expeditious, and transparent resolution of copyright disputes.
          </p>
          <p>
            Please note that under{" "}
            <a
              href="https://www.copyright.gov/title17/92chap5.html#512"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-800 underline font-semibold inline-flex items-center gap-1"
            >
              17 U.S.C. § 512(f) <ExternalLink size={12} />
            </a>
            , any person who knowingly materially misrepresents that material or activity is
            infringing may be subject to liability for damages, including court costs and attorneys&apos;
            fees.
          </p>
        </div>

        {/* How to File a DMCA Notice */}
        <h2 className="text-xl font-bold text-slate-900 mb-4">
          How to File a Notice of Copyright Infringement
        </h2>
        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          To ensure prompt processing, your written notice must provide all five required statutory
          elements:
        </p>

        <div className="space-y-4 mb-10">
          {steps.map((step) => {
            const Icon = step.icon;
            const colors = colorClasses[step.color];
            return (
              <div
                key={step.num}
                className={`rounded-2xl border ${colors.border} ${colors.bg} p-6 flex items-start gap-5`}
              >
                <div className="shrink-0 text-center">
                  <div
                    className={`w-10 h-10 rounded-xl ${colors.num} flex items-center justify-center text-white font-black text-sm mb-1`}
                  >
                    {step.num}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon size={16} className={colors.icon} />
                    <h3 className="font-bold text-slate-800 text-sm">{step.title}</h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed m-0">{step.text}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Designated Copyright Agent Information */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-violet-950 rounded-3xl p-8 mb-10 text-white">
          <h2 className="text-white font-bold text-xl mb-3 flex items-center gap-2">
            <Mail size={22} className="text-orange-400" />
            Designated Copyright Agent
          </h2>
          <p className="text-slate-300 text-sm mb-5 leading-relaxed">
            Please direct all official DMCA notifications and counter-notifications to our
            designated copyright officer via email:
          </p>

          <div className="bg-white/10 border border-white/20 rounded-2xl p-5 mb-5 space-y-2">
            <p className="text-xs uppercase tracking-wider text-orange-300 font-bold">
              Designated Agent Email (Clickable)
            </p>
            <a
              href="mailto:contact@bitumencalcpro.com"
              className="text-white hover:text-orange-300 font-mono font-bold text-lg block transition-colors underline"
            >
              contact@bitumencalcpro.com
            </a>
            <div className="pt-2 text-xs text-slate-300 border-t border-white/10 space-y-1">
              <p>Attn: Legal & Copyright Compliance Department</p>
              <p>Entity: BitumenCalcPro</p>
              <p>Location: Islamabad, Pakistan</p>
            </div>
          </div>

          <p className="text-slate-400 text-xs m-0">
            Please use the subject line:{" "}
            <strong className="text-white">&quot;DMCA Takedown Notice — [Your Name or Organization]&quot;</strong>.
            We acknowledge receipt of valid notices within 24 to 48 business hours.
          </p>
        </div>

        {/* Counter-Notification Procedure */}
        <div className="bg-violet-50/70 border border-violet-200 rounded-3xl p-7 mb-10">
          <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
            <RotateCcw size={20} className="text-violet-600" />
            Filing a Counter-Notification
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            If you believe material you authored was removed or disabled as a result of mistake or
            misidentification, you may submit a formal counter-notification under 17 U.S.C. § 512(g).
            Your counter-notification must contain:
          </p>
          <ul className="space-y-2.5 mb-5">
            {[
              "Your physical or electronic signature.",
              "Identification of the specific content that was removed or disabled and the URL where it appeared prior to removal.",
              "A statement under penalty of perjury that you have a good faith belief that the material was removed or disabled as a result of mistake or misidentification.",
              "Your legal name, mailing address, telephone number, and email address.",
              "A statement that you consent to the jurisdiction of the appropriate federal or judicial court for your address.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                <span className="w-5 h-5 rounded-full bg-violet-100 border border-violet-200 flex items-center justify-center shrink-0 mt-0.5 text-violet-700 font-bold text-xs">
                  {i + 1}
                </span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-slate-500 text-xs m-0 leading-relaxed">
            Upon receipt of a valid counter-notification, we will forward a copy to the original
            complaining party. If the original complainant does not notify us within 10 to 14 business
            days that they have filed a court action, we may restore the removed material.
          </p>
        </div>

        {/* Repeat Infringer Policy */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
          <div className="flex items-center gap-2.5 mb-2">
            <ShieldAlert size={18} className="text-slate-700" />
            <h3 className="font-bold text-slate-900 text-base">Repeat Infringer Policy</h3>
          </div>
          <p className="text-slate-600 text-xs leading-relaxed m-0">
            In accordance with the DMCA and other applicable intellectual property laws,
            BitumenCalcPro maintains a strict policy to terminate access or privileges for any user
            or contributor found to repeatedly infringe the intellectual property rights of others.
          </p>
        </div>
      </LegalLayout>
    </>
  );
}
