// app/privacy-policy/page.tsx
import type { Metadata } from "next";
import LegalLayout from "../components/LegalLayout";
import { Eye, Lock, Share2, Cookie, Mail, RefreshCw } from "lucide-react";

/* ─── Site-wide design tokens (match homepage) ─── */
const BRAND_CTA = "bg-violet-600 hover:bg-violet-500 shadow-md shadow-violet-200";
const SECTION_CARD  = "rounded-2xl border";

export const metadata: Metadata = {
  title: "Privacy Policy | BitumenCalcPro",
  description:
    "Learn how BitumenCalcPro collects, uses, and protects your personal information. We respect your privacy and are committed to keeping your data safe.",
  alternates: { canonical: "https://bitumencalcpro.com/privacy-policy" },
  openGraph: {
    title: "Privacy Policy | BitumenCalcPro",
    description:
      "Learn how BitumenCalcPro collects, uses, and protects your personal information.",
    url: "https://bitumencalcpro.com/privacy-policy",
    siteName: "BitumenCalcPro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | BitumenCalcPro",
    description: "Learn how BitumenCalcPro collects, uses, and protects your personal information.",
  },
};

const sections = [
  {
    icon: Eye,
    color: "violet",
    title: "What We Collect",
    content: [
      {
        subtitle: "Information You Give Us",
        text: "When you fill out our contact form, we collect your name and email address — nothing more. We only ask for what we actually need to get back to you.",
      },
      {
        subtitle: "Information Collected Automatically",
        text: "Like most websites, we automatically receive basic technical data when you visit: your browser type, operating system, approximate location (country/region), pages viewed, and how long you spend on each page. This is standard anonymised analytics data.",
      },
      {
        subtitle: "What We Don't Collect",
        text: "We never ask for your financial information, social security number, or any sensitive personal details. BitumenCalcPro is a free calculator tool — there's no account system and no payment processing.",
      },
    ],
  },
  {
    icon: Lock,
    color: "blue",
    title: "How We Use Your Information",
    content: [
      {
        subtitle: "To Improve the Tool",
        text: "We use anonymous usage data to understand which calculator features are most helpful, fix bugs, and make the experience better for everyone.",
      },
      {
        subtitle: "To Reply to You",
        text: "If you contact us, we use your email address solely to respond to your message. We won't sign you up to any newsletters or hand your contact details to anyone else.",
      },
      {
        subtitle: "To Keep the Site Secure",
        text: "We monitor traffic patterns to detect and prevent abuse, spam, or anything that could affect your experience.",
      },
    ],
  },
  {
    icon: Share2,
    color: "orange",
    title: "Do We Share Your Data?",
    content: [
      {
        subtitle: "The Short Answer: No",
        text: "We do not sell, rent, or trade your personal information. Period. Your data is not a product here.",
      },
      {
        subtitle: "Service Providers",
        text: "We use a small number of trusted third-party services (such as hosting and analytics providers) that may process anonymised data on our behalf under strict confidentiality agreements.",
      },
      {
        subtitle: "Legal Requirements",
        text: "We may disclose information if required by law — for example, in response to a court order. In such cases, we'll only share the minimum necessary information.",
      },
    ],
  },
  {
    icon: Cookie,
    color: "cyan",
    title: "Cookies",
    content: [
      {
        subtitle: "What Cookies We Use",
        text: "We use a minimal set of cookies. Analytics cookies (e.g. from Google Analytics) help us understand how visitors use the site. These are anonymised and do not identify you personally.",
      },
      {
        subtitle: "Your Choices",
        text: "You can disable or clear cookies at any time through your browser settings. Doing so won't stop BitumenCalcPro from working — the calculator is fully functional with or without cookies.",
      },
    ],
  },
  {
    icon: RefreshCw,
    color: "slate",
    title: "Your Rights",
    content: [
      {
        subtitle: "Access & Correction",
        text: "You have the right to request a copy of any personal data we hold about you, and to ask us to correct any inaccuracies.",
      },
      {
        subtitle: "Deletion",
        text: "You can ask us to delete your personal data at any time. Just contact us and we'll take care of it promptly.",
      },
      {
        subtitle: "GDPR & CCPA",
        text: "If you are based in the European Union or California, additional rights apply under GDPR and CCPA respectively. We honour all such requests. Contact us at the email below for any data rights inquiry.",
      },
    ],
  },
];

const colorClasses: Record<
  string,
  { icon: string; bg: string; border: string; num: string }
> = {
  violet: {
    icon: "text-violet-600",
    bg: "bg-violet-50",
    border: "border-violet-100",
    num: "bg-violet-600",
  },
  blue: {
    icon: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
    num: "bg-blue-600",
  },
  orange: {
    icon: "text-orange-500",
    bg: "bg-orange-50",
    border: "border-orange-100",
    num: "bg-orange-500",
  },
  cyan: {
    icon: "text-cyan-600",
    bg: "bg-cyan-50",
    border: "border-cyan-100",
    num: "bg-cyan-600",
  },
  slate: {
    icon: "text-slate-600",
    bg: "bg-slate-50",
    border: "border-slate-100",
    num: "bg-slate-600",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="We believe privacy is a right, not a privilege. Here's exactly how we handle your information — no legal jargon, just plain English."
      lastUpdated="July 23, 2026"
      badge="Your Privacy Matters"
      accentColor="violet"
    >
      {/* Intro */}
      <div className="bg-violet-50 border border-violet-100 rounded-2xl p-6 mb-10">
        <p className="text-slate-700 text-base leading-relaxed m-0">
          <strong className="text-violet-700">The short version:</strong>{" "}
          BitumenCalcPro is a free bitumen calculator for civil engineers and
          paving contractors. We collect minimal data, never sell it, and work
          hard to keep it safe. The rest of this page gives you the full
          details.
        </p>
      </div>

      {/* Sections */}
      <div className="space-y-10">
        {sections.map((section, idx) => {
          const colors = colorClasses[section.color];
          const Icon = section.icon;
          return (
            <div key={idx} className={`rounded-2xl border ${colors.border} ${colors.bg} p-7`}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center`}>
                  <Icon size={20} className={colors.icon} />
                </div>
                <h2 className="text-xl font-bold text-slate-900 m-0">
                  {section.title}
                </h2>
              </div>
              <div className="space-y-5">
                {section.content.map((item, i) => (
                  <div key={i}>
                    <h3 className="font-semibold text-slate-800 mb-1 flex items-center gap-2">
                      <span className={`w-5 h-5 rounded-full ${colors.num} text-white text-xs flex items-center justify-center shrink-0`}>
                        {i + 1}
                      </span>
                      {item.subtitle}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed ml-7 m-0">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Contact CTA */}
      <div className="mt-10 bg-gradient-to-br from-slate-900 to-violet-950 rounded-2xl p-8 text-center">
        <Mail size={32} className="text-violet-400 mx-auto mb-3" />
        <h2 className="text-white font-bold text-xl mb-2">Have a Privacy Question?</h2>
        <p className="text-slate-400 text-sm mb-5 max-w-md mx-auto">
          We're real people and we read every email. Reach out any time — we
          typically reply within one business day.
        </p>
        <a
          href="/contact-us"
          className={`inline-flex items-center gap-2 ${BRAND_CTA} text-white px-6 py-3 rounded-full font-semibold text-sm transition-all active:scale-95`}
        >
          Contact Us
        </a>
      </div>

      {/* Updates notice */}
      <p className="text-slate-400 text-xs text-center mt-6">
        We may update this policy occasionally. When we do, we'll update the
        "last updated" date above. Continued use of the site after changes
        means you accept the updated policy.
      </p>
    </LegalLayout>
  );
}
