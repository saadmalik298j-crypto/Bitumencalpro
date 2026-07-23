// app/terms-and-conditions/page.tsx
import type { Metadata } from "next";
import LegalLayout from "../components/LegalLayout";
import { CheckCircle, XCircle, Scale, Globe, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms and Conditions | BitumenCalcPro",
  description:
    "Read the terms and conditions for using BitumenCalcPro. Understand your rights, responsibilities, and what you can expect from our free bitumen calculator.",
  alternates: { canonical: "https://bitumencalcpro.com/terms-and-conditions" },
  openGraph: {
    title: "Terms and Conditions | BitumenCalcPro",
    description:
      "Read the terms and conditions for using BitumenCalcPro — the free bitumen calculator for engineers and contractors.",
    url: "https://bitumencalcpro.com/terms-and-conditions",
    siteName: "BitumenCalcPro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms and Conditions | BitumenCalcPro",
    description: "Read the terms and conditions for using BitumenCalcPro — the free bitumen calculator for engineers and contractors.",
  },
};

const allowed = [
  "Use the calculator freely for personal, educational, or professional projects",
  "Share links to BitumenCalcPro with colleagues or students",
  "Reference our calculation methodology in your own work (with attribution)",
  "Embed the tool in educational materials or blog posts with a link back",
];

const notAllowed = [
  "Reproduce or resell our calculator, formulas, or content as your own product",
  "Attempt to scrape, reverse-engineer, or disrupt the service",
  "Use the site to spread misinformation or harmful content",
  "Remove our branding or copyright notices from any content you share",
];

const clauses = [
  {
    icon: CheckCircle,
    color: "green",
    title: "Acceptance of Terms",
    text: "By accessing and using BitumenCalcPro, you agree to these terms. If you don't agree, that's completely fine — just don't use the site. These terms apply to all visitors, users, and anyone else who accesses the service.",
  },
  {
    icon: Scale,
    color: "blue",
    title: "The Service We Provide",
    text: "BitumenCalcPro provides a free online calculator to estimate bitumen and aggregate quantities for pavement construction projects. The tool is provided as-is for informational and estimation purposes. While we work hard to keep calculations accurate, results should always be verified by a qualified engineer before being used on a real project.",
  },
  {
    icon: Globe,
    color: "violet",
    title: "Intellectual Property",
    text: "All content on BitumenCalcPro — including the design, text, formulas, and code — belongs to us unless stated otherwise. You're welcome to use the tool and reference our work, but please don't copy or republish our content without permission.",
  },
];

const colorClasses: Record<string, { icon: string; bg: string; border: string }> = {
  green: { icon: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" },
  blue: { icon: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100" },
  violet: { icon: "text-violet-600", bg: "bg-violet-50", border: "border-violet-100" },
};

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms & Conditions"
      subtitle="Plain and simple ground rules for using BitumenCalcPro. We've written this to be readable — not to confuse you."
      lastUpdated="July 23, 2026"
      badge="Fair & Transparent"
      accentColor="blue"
    >
      {/* Intro */}
      <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-10">
        <p className="text-slate-700 text-base leading-relaxed m-0">
          <strong className="text-blue-700">Quick summary:</strong> Use
          BitumenCalcPro freely for your engineering and contracting work, treat
          the results as estimates (not gospel), and don't misuse or copy our
          content. That's really all there is to it.
        </p>
      </div>

      {/* Clauses */}
      <div className="space-y-6 mb-10">
        {clauses.map((clause, idx) => {
          const Icon = clause.icon;
          const colors = colorClasses[clause.color];
          return (
            <div key={idx} className={`rounded-2xl border ${colors.border} ${colors.bg} p-7`}>
              <div className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-xl bg-white border ${colors.border} flex items-center justify-center shrink-0`}>
                  <Icon size={20} className={colors.icon} />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900 mb-2">{clause.title}</h2>
                  <p className="text-slate-600 text-sm leading-relaxed m-0">{clause.text}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Allowed / Not Allowed */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-7">
          <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <CheckCircle size={20} className="text-emerald-600" />
            What You Can Do
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
            What You Can't Do
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

      {/* Limitation of Liability */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-7 mb-10">
        <h2 className="text-lg font-bold text-slate-900 mb-3">Limitation of Liability</h2>
        <p className="text-slate-600 text-sm leading-relaxed m-0">
          BitumenCalcPro is provided free of charge and on an "as is" basis. We
          make every effort to keep the calculations accurate and the site
          running smoothly, but we cannot guarantee the results will be perfect
          in every situation. <strong>Always have a qualified engineer review
          estimates before applying them to real construction work.</strong> We
          are not liable for any losses arising from reliance on our tool.
        </p>
      </div>

      {/* Governing Law */}
      <div className="bg-slate-50 border border-slate-100 rounded-2xl p-7 mb-10">
        <h2 className="text-lg font-bold text-slate-900 mb-3">Governing Law & Changes</h2>
        <p className="text-slate-600 text-sm leading-relaxed mb-3">
          These terms are governed by applicable laws. We reserve the right to
          update them at any time — when we do, we'll change the "last updated"
          date at the top of this page.
        </p>
        <p className="text-slate-600 text-sm leading-relaxed m-0">
          Continued use of BitumenCalcPro after any changes means you've
          accepted the new terms. We encourage you to review this page
          periodically.
        </p>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-violet-950 rounded-2xl p-8 text-center">
        <Mail size={32} className="text-orange-400 mx-auto mb-3" />
        <h2 className="text-white font-bold text-xl mb-2">Questions About These Terms?</h2>
        <p className="text-slate-400 text-sm mb-5 max-w-md mx-auto">
          If something here is unclear, drop us a message. We&apos;re happy to
          explain anything in plain English.
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
