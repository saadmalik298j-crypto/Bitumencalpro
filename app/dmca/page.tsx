// app/dmca/page.tsx
import type { Metadata } from "next";
import LegalLayout from "../components/LegalLayout";
import { ShieldCheck, FileText, Clock, Ban, RotateCcw, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "DMCA Policy | BitumenCalcPro",
  description:
    "BitumenCalcPro's DMCA policy. Learn how to report copyright infringement and how we handle takedown requests and counter-notices.",
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
    description: "Learn how to report copyright infringement to BitumenCalcPro and how we handle DMCA takedown requests.",
  },
};

const steps = [
  {
    icon: FileText,
    color: "blue",
    num: "01",
    title: "Your Contact Information",
    text: "Provide your full name, mailing address, phone number, and email address so we can reach you about the claim.",
  },
  {
    icon: ShieldCheck,
    color: "violet",
    num: "02",
    title: "Identify the Copyrighted Work",
    text: "Clearly describe the copyrighted work you believe has been infringed. If multiple works are involved, provide a representative list.",
  },
  {
    icon: Ban,
    color: "orange",
    num: "03",
    title: "Identify the Infringing Material",
    text: "Provide the exact URL(s) on BitumenCalcPro where the infringing content appears so we can locate and investigate it.",
  },
  {
    icon: Clock,
    color: "cyan",
    num: "04",
    title: "Good Faith Statement",
    text: "Include this statement: \"I have a good faith belief that the use of the copyrighted material is not authorized by the copyright owner, its agent, or the law.\"",
  },
  {
    icon: RotateCcw,
    color: "slate",
    num: "05",
    title: "Accuracy Statement & Signature",
    text: "Include: \"I certify, under penalty of perjury, that the information in this notice is accurate and that I am the copyright owner or authorized to act on their behalf.\" Then provide your electronic or physical signature.",
  },
];

const colorClasses: Record<string, { icon: string; bg: string; border: string; num: string; numText: string }> = {
  blue: { icon: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100", num: "bg-blue-600", numText: "text-white" },
  violet: { icon: "text-violet-600", bg: "bg-violet-50", border: "border-violet-100", num: "bg-violet-600", numText: "text-white" },
  orange: { icon: "text-orange-500", bg: "bg-orange-50", border: "border-orange-100", num: "bg-orange-500", numText: "text-white" },
  cyan: { icon: "text-cyan-600", bg: "bg-cyan-50", border: "border-cyan-100", num: "bg-cyan-600", numText: "text-white" },
  slate: { icon: "text-slate-600", bg: "bg-slate-50", border: "border-slate-100", num: "bg-slate-600", numText: "text-white" },
};

export default function DmcaPage() {
  return (
    <LegalLayout
      title="DMCA Policy"
      subtitle="We respect intellectual property rights. Here's how to file a takedown request and what happens next — explained step by step."
      lastUpdated="July 23, 2026"
      badge="Copyright Protection"
      accentColor="cyan"
    >
      {/* Intro */}
      <div className="bg-cyan-50 border border-cyan-100 rounded-2xl p-6 mb-10">
        <p className="text-slate-700 text-base leading-relaxed m-0">
          BitumenCalcPro respects the intellectual property of others and
          expects our users to do the same. We comply with the{" "}
          <strong className="text-cyan-700">
            Digital Millennium Copyright Act (DMCA)
          </strong>{" "}
          and will respond promptly to valid takedown notices. If you believe
          content on our site infringes your copyright, here's exactly what to
          do.
        </p>
      </div>

      {/* What is DMCA */}
      <div className="mb-10">
        <h2 className="text-xl font-bold text-slate-900 mb-4">What is the DMCA?</h2>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          The Digital Millennium Copyright Act is a United States copyright law
          that provides a process for copyright holders to request the removal
          of infringing material from online platforms. Even if you're outside
          the US, the DMCA process is the most widely used international
          standard for copyright dispute resolution online.
        </p>
        <p className="text-slate-600 text-sm leading-relaxed">
          We take all legitimate DMCA notices seriously and investigate every
          claim. Abuse of the DMCA process (submitting false claims) may expose
          the claimant to legal liability.
        </p>
      </div>

      {/* How to File */}
      <h2 className="text-xl font-bold text-slate-900 mb-6">
        How to File a DMCA Takedown Notice
      </h2>
      <p className="text-slate-600 text-sm leading-relaxed mb-6">
        To file a valid DMCA notice, your written communication must include all
        five of the following elements:
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
                <p className="text-slate-600 text-sm leading-relaxed m-0">
                  {step.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Send To */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-violet-950 rounded-2xl p-7 mb-10">
        <h2 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
          <Mail size={20} className="text-orange-400" />
          Where to Send Your Notice
        </h2>
        <p className="text-slate-400 text-sm mb-4">
          Send your completed DMCA notice to our designated agent via email:
        </p>
        <div className="bg-white/10 border border-white/20 rounded-xl p-4">
          <p className="text-white font-mono text-sm m-0">
            📧 dmca@bitumencalcpro.com
          </p>
        </div>
        <p className="text-slate-500 text-xs mt-4 m-0">
          Please use the subject line: <strong className="text-slate-300">&quot;DMCA Takedown Notice&quot;</strong>. We aim to acknowledge all notices within 2 business days.
        </p>
      </div>

      {/* Counter Notice */}
      <div className="bg-violet-50 border border-violet-100 rounded-2xl p-7 mb-10">
        <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
          <RotateCcw size={20} className="text-violet-600" />
          Filing a Counter-Notice
        </h2>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          If you believe material was removed from our site by mistake or
          misidentification, you may submit a counter-notice. A valid
          counter-notice must include:
        </p>
        <ul className="space-y-2">
          {[
            "Your physical or electronic signature",
            "Identification of the removed material and its former location",
            "A statement under penalty of perjury that the material was removed by mistake or misidentification",
            "Your name, address, and phone number",
            "A statement consenting to the jurisdiction of the appropriate federal court",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
              <span className="w-5 h-5 rounded-full bg-violet-100 border border-violet-200 flex items-center justify-center shrink-0 mt-0.5 text-violet-700 font-bold text-xs">
                {i + 1}
              </span>
              {item}
            </li>
          ))}
        </ul>
        <p className="text-slate-500 text-xs mt-4 m-0">
          Upon receipt of a valid counter-notice, we will forward it to the
          original complainant. Content may be restored within 10–14 business
          days unless the complainant files a court action.
        </p>
      </div>

      {/* Repeat Infringers */}
      <div className="bg-red-50 border border-red-100 rounded-2xl p-7 mb-10">
        <h2 className="text-lg font-bold text-slate-900 mb-3">Repeat Infringer Policy</h2>
        <p className="text-slate-600 text-sm leading-relaxed m-0">
          In accordance with the DMCA and other applicable laws, BitumenCalcPro
          has adopted a policy of terminating, in appropriate circumstances, the
          accounts of users who are deemed to be repeat infringers. We may also
          at our discretion limit access to the site for users who infringe the
          intellectual property rights of others.
        </p>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-violet-950 rounded-2xl p-8 text-center">
        <Mail size={32} className="text-orange-400 mx-auto mb-3" />
        <h2 className="text-white font-bold text-xl mb-2">Need Help With a Copyright Issue?</h2>
        <p className="text-slate-400 text-sm mb-5 max-w-md mx-auto">
          If you&apos;re unsure about the process or have a general copyright
          question, reach out to us directly and we&apos;ll do our best to help.
        </p>
        <a
          href="/contact-us"
          className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 active:scale-95 text-white px-6 py-3 rounded-full font-semibold text-sm transition-all shadow-md shadow-orange-900/40"
        >
          Contact Us
        </a>
      </div>
    </LegalLayout>
  );
}
