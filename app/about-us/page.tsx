// app/about-us/page.tsx
import type { Metadata } from "next";
import LegalLayout from "../components/LegalLayout";
import {
  Droplets,
  Target,
  Users,
  Zap,
  HeartHandshake,
  BarChart2,
  Calculator,
  Globe,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | BitumenCalcPro",
  description:
    "Learn about BitumenCalcPro — who we are, why we built this tool, and our mission to make bitumen calculation fast, accurate, and accessible for engineers worldwide.",
  alternates: { canonical: "https://bitumencalcpro.com/about-us" },
  openGraph: {
    title: "About Us | BitumenCalcPro",
    description:
      "Learn about BitumenCalcPro — who we are, why we built this tool, and our mission to make bitumen calculation fast, accurate, and accessible for engineers worldwide.",
    url: "https://bitumencalcpro.com/about-us",
    siteName: "BitumenCalcPro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | BitumenCalcPro",
    description: "Learn about BitumenCalcPro — who we are, why we built this tool, and our mission to make bitumen calculation fast and accurate.",
  },
};

const values = [
  {
    icon: Target,
    color: "violet",
    title: "Accuracy First",
    text: "Every formula is validated against industry standards. We don't round corners when it matters.",
  },
  {
    icon: Zap,
    color: "orange",
    title: "Speed & Simplicity",
    text: "Engineers are busy. We designed the tool to deliver results in seconds, not minutes.",
  },
  {
    icon: HeartHandshake,
    color: "blue",
    title: "Always Free",
    text: "We believe access to good engineering tools shouldn't cost a subscription fee. This tool will always be free.",
  },
  {
    icon: Globe,
    color: "cyan",
    title: "Built for Everyone",
    text: "Whether you're a student, a site engineer, or a senior contractor — the tool works for you.",
  },
];

const stats = [
  { icon: Users, value: "10,000+", label: "Engineers & Contractors" },
  { icon: Calculator, value: "500,000+", label: "Calculations Run" },
  { icon: Globe, value: "80+", label: "Countries Reached" },
  { icon: BarChart2, value: "99.9%", label: "Uptime" },
];

const colorClasses: Record<string, { icon: string; bg: string; border: string }> = {
  violet: { icon: "text-violet-600", bg: "bg-violet-50", border: "border-violet-100" },
  orange: { icon: "text-orange-500", bg: "bg-orange-50", border: "border-orange-100" },
  blue: { icon: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100" },
  cyan: { icon: "text-cyan-600", bg: "bg-cyan-50", border: "border-cyan-100" },
};

const statColorClasses = [
  "from-violet-600 to-blue-500",
  "from-orange-500 to-amber-400",
  "from-cyan-600 to-teal-500",
  "from-blue-600 to-indigo-500",
];

export default function AboutUsPage() {
  return (
    <LegalLayout
      title="About BitumenCalcPro"
      subtitle="We're engineers and developers who got tired of doing bitumen calculations on spreadsheets. So we built something better."
      lastUpdated="July 23, 2026"
      badge="Our Story"
      accentColor="violet"
    >
      {/* Origin Story */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-blue-500 flex items-center justify-center text-white font-black text-lg shadow-md shadow-violet-200">
            B
          </div>
          <h2 className="text-2xl font-bold text-slate-900 m-0">How We Started</h2>
        </div>

        <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
          <p>
            BitumenCalcPro started with a simple frustration: calculating
            bitumen quantities for a road project meant juggling multiple
            spreadsheets, referencing different industry tables, and
            double-checking formulas every time. For experienced engineers, it
            was tedious. For students and junior site staff, it was genuinely
            confusing.
          </p>
          <p>
            We decided to fix that. We built a clean, straightforward calculator
            that applies standard industry formulas — transparently — so
            engineers can trust the result and understand how it was arrived at.
            No black box. No subscription. No nonsense.
          </p>
          <p>
            What started as an internal tool quickly became something we wanted
            to share with the wider engineering community. Today, BitumenCalcPro
            is used by engineers, contractors, students, and project managers
            across more than 80 countries.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-100 rounded-2xl p-5 text-center hover:shadow-md transition-shadow"
            >
              <div
                className={`w-10 h-10 rounded-xl bg-gradient-to-br ${statColorClasses[idx]} flex items-center justify-center text-white mx-auto mb-3`}
              >
                <Icon size={18} />
              </div>
              <p className="text-2xl font-black text-slate-900 mb-0.5">{stat.value}</p>
              <p className="text-slate-500 text-xs m-0">{stat.label}</p>
            </div>
          );
        })}
      </div>

      {/* Mission */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-violet-950 rounded-2xl p-8 mb-12">
        <div className="flex items-start gap-4">
          <Droplets size={32} className="text-orange-400 shrink-0 mt-1" />
          <div>
            <h2 className="text-white font-bold text-xl mb-3">Our Mission</h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              To make engineering calculation tools that are genuinely useful —
              accurate, fast, transparent, and freely accessible to everyone in
              the civil engineering and paving industry, regardless of where
              they are in the world or their level of experience.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed m-0">
              We believe that good tools make good engineers. And good engineers
              build better roads, bridges, and infrastructure for all of us.
            </p>
          </div>
        </div>
      </div>

      {/* Values */}
      <h2 className="text-xl font-bold text-slate-900 mb-6">What We Stand For</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
        {values.map((value, idx) => {
          const Icon = value.icon;
          const colors = colorClasses[value.color];
          return (
            <div
              key={idx}
              className={`rounded-2xl border ${colors.border} ${colors.bg} p-6 hover:shadow-sm transition-shadow`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-xl bg-white border ${colors.border} flex items-center justify-center shrink-0`}>
                  <Icon size={20} className={colors.icon} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{value.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed m-0">{value.text}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Methodology */}
      <div className="bg-blue-50 border border-blue-100 rounded-2xl p-7 mb-12">
        <h2 className="text-lg font-bold text-slate-900 mb-4">Our Calculation Methodology</h2>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          All calculations are based on widely accepted industry formulas and
          standard density values published by bodies such as AASHTO, the
          Asphalt Institute, and national highway standards. We show the formula
          breakdown on the homepage so you can verify our maths at any time.
        </p>
        <p className="text-slate-600 text-sm leading-relaxed m-0">
          We review and update our methodology whenever standards evolve or when
          our community flags potential improvements. Transparency is not just a
          policy for us — it's how we build trust.
        </p>
      </div>

      {/* What's Next */}
      <div className="bg-violet-50 border border-violet-100 rounded-2xl p-7 mb-10">
        <h2 className="text-lg font-bold text-slate-900 mb-4">What's Coming Next</h2>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          We're actively working on expanding BitumenCalcPro with more mix
          types, support for additional unit systems, and detailed project
          reporting features. Our roadmap is driven by user feedback — so if
          there's a feature you'd find useful, we genuinely want to hear about
          it.
        </p>
        <a
          href="/contact-us"
          className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 active:scale-95 text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all shadow-md shadow-orange-200"
        >
          Share Your Feedback
        </a>
      </div>

      {/* CTA */}
      <div className="text-center bg-slate-50 border border-slate-100 rounded-2xl p-8">
        <h2 className="text-xl font-bold text-slate-900 mb-2">Ready to Calculate?</h2>
        <p className="text-slate-500 text-sm mb-5 max-w-sm mx-auto">
          Head back to the calculator and put BitumenCalcPro to work on your next project.
        </p>
        <a
          href="/"
          className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 active:scale-95 text-white px-6 py-3 rounded-full font-semibold text-sm transition-all shadow-md shadow-orange-200"
        >
          <Calculator size={16} />
          Open Calculator
        </a>
      </div>
    </LegalLayout>
  );
}
