// app/components/LegalLayout.tsx
import Link from "next/link";
import { Shield, ArrowLeft } from "lucide-react";

interface LegalLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  lastUpdated: string;
  badge: string;
  /** accent used for the hero strip underline & badge glow — defaults to "violet" */
  accentColor?: "violet" | "orange" | "cyan" | "blue" | "amber";
}

const ACCENT = {
  violet: {
    badge:   "bg-violet-500/20 border-violet-400/30 text-violet-200",
    shield:  "text-violet-400",
    strip:   "from-violet-500/20 to-violet-500/0",
    cta:     "bg-violet-600 hover:bg-violet-500 shadow-violet-900/40",
  },
  orange: {
    badge:   "bg-orange-500/20 border-orange-400/30 text-orange-200",
    shield:  "text-orange-400",
    strip:   "from-orange-500/20 to-orange-500/0",
    cta:     "bg-orange-500 hover:bg-orange-400 shadow-orange-900/40",
  },
  cyan: {
    badge:   "bg-cyan-500/20 border-cyan-400/30 text-cyan-200",
    shield:  "text-cyan-400",
    strip:   "from-cyan-500/20 to-cyan-500/0",
    cta:     "bg-cyan-600 hover:bg-cyan-500 shadow-cyan-900/40",
  },
  blue: {
    badge:   "bg-blue-500/20 border-blue-400/30 text-blue-200",
    shield:  "text-blue-400",
    strip:   "from-blue-500/20 to-blue-500/0",
    cta:     "bg-blue-600 hover:bg-blue-500 shadow-blue-900/40",
  },
  amber: {
    badge:   "bg-amber-500/20 border-amber-400/30 text-amber-200",
    shield:  "text-amber-400",
    strip:   "from-amber-500/20 to-amber-500/0",
    cta:     "bg-amber-500 hover:bg-amber-400 shadow-amber-900/40",
  },
};

export default function LegalLayout({
  children,
  title,
  subtitle,
  lastUpdated,
  badge,
  accentColor = "violet",
}: LegalLayoutProps) {
  const a = ACCENT[accentColor];

  return (
    <>
      {/* ════════════════════════════════════
          HERO BANNER 
      ════════════════════════════════════ */}
      <div className="relative pt-20 pb-24 overflow-hidden">
        {/* Accent blobs (colour changes per page) */}
        <div className={`absolute inset-0 bg-gradient-to-br ${a.strip} pointer-events-none`} />
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-orange-500/5 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-violet-600/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          {/* Breadcrumb */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm mb-8 group transition-colors"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Back to Calculator
          </Link>

          {/* Badge */}
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm font-semibold mb-6 backdrop-blur-sm ${a.badge}`}>
            <Shield size={14} className={a.shield} />
            {badge}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight leading-tight">
            {title}
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-6 leading-relaxed font-medium">
            {subtitle}
          </p>
          <p className="text-white/70 text-sm">
            Last updated: <span className="text-white font-semibold">{lastUpdated}</span>
          </p>
        </div>
      </div>

      {/* ════════════════════════════════════
          CONTENT AREA
      ════════════════════════════════════ */}
      <main className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <div className="bg-white/95 backdrop-blur-3xl rounded-3xl shadow-2xl border border-white/20 p-8 md:p-12">
          {children}
        </div>
      </main>

    </>
  );
}
