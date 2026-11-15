// app/contact-us/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import {
  Mail,
  MessageSquare,
  Clock,
  Shield,
  ArrowLeft,
  MapPin,
  HelpCircle,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | BitumenCalcPro",
  description:
    "Get in touch with the BitumenCalcPro engineering and editorial team. Email us directly at contact@bitumencalcpro.com for calculator feedback, bug reports, and partnership inquiries.",
  alternates: { canonical: "https://bitumencalcpro.com/contact-us" },
  openGraph: {
    title: "Contact Us | BitumenCalcPro",
    description:
      "Get in touch with the BitumenCalcPro team. Have a calculation question, spotted a bug, or want to collaborate? We're here to help.",
    url: "https://bitumencalcpro.com/contact-us",
    siteName: "BitumenCalcPro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | BitumenCalcPro",
    description:
      "Get in touch with the BitumenCalcPro team. We typically respond within one business day.",
  },
};

export default function ContactUsPage() {
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Us | BitumenCalcPro",
    url: "https://bitumencalcpro.com/contact-us",
    description:
      "Get in touch with the BitumenCalcPro team. Have a question, spotted an issue, or want to share feedback? Reach out directly.",
    mainEntity: {
      "@type": "Organization",
      name: "BitumenCalcPro",
      url: "https://bitumencalcpro.com",
      email: "contact@bitumencalcpro.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Islamabad",
        addressCountry: "PK",
      },
    },
    isPartOf: {
      "@type": "WebSite",
      name: "BitumenCalcPro",
      url: "https://bitumencalcpro.com",
    },
  };

  return (
    <>
      <Script
        id="schema-contact-page"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />

      {/* Hero Banner */}
      <div className="pt-20 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-violet-600/0 pointer-events-none" />
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-orange-500/5 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-violet-600/10 blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm mb-8 group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Back to Calculator
          </Link>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/20 border border-orange-400/30 text-orange-200 text-sm font-semibold mb-6 backdrop-blur-sm">
            <MessageSquare size={14} className="text-orange-400" />
            Direct Communication & Support
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Get in Touch
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            Have a question about our bitumen formulas, spotted a calculation bug, or interested in
            collaborating? We are real engineers and developers, and we read every message.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left: Info Cards */}
          <div className="space-y-5">
            {/* Direct Email Card */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-violet-50 border border-violet-100 flex items-center justify-center mb-4">
                <Mail size={22} className="text-violet-600" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-1">Official Email</h3>
              <p className="text-slate-500 text-xs mb-3">
                For technical, editorial, advertising & legal inquiries:
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                <a
                  href="mailto:contact@bitumencalcpro.com"
                  className="text-violet-700 hover:text-violet-900 font-mono font-bold text-sm block break-all transition-colors underline"
                >
                  contact@bitumencalcpro.com
                </a>
              </div>
              <p className="text-slate-400 text-xs mt-3 flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
                Verified direct inbox monitored daily
              </p>
            </div>

            {/* Response Time Card */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-4">
                <Clock size={22} className="text-blue-600" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-1">Response Time</h3>
              <p className="text-slate-500 text-xs mb-2">We strive to respond promptly:</p>
              <p className="text-blue-700 font-bold text-base">Within 24 business hours</p>
              <p className="text-slate-400 text-xs mt-2">
                Monday through Friday, 9:00 AM – 6:00 PM UTC
              </p>
            </div>

            {/* Operating Headquarters */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center mb-4">
                <MapPin size={22} className="text-teal-600" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-1">Operational Location</h3>
              <p className="text-slate-500 text-xs mb-1">Headquarters & Technical Operations:</p>
              <p className="text-teal-800 font-bold text-sm">Islamabad, Pakistan</p>
              <p className="text-slate-400 text-xs mt-2">
                Serving civil engineers, paving contractors, and academic researchers worldwide.
              </p>
            </div>

            {/* Privacy Guarantee */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center mb-4">
                <Shield size={22} className="text-orange-500" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-1">Strict Privacy Guarantee</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Your email address and message content are used solely to reply to your inquiry. We
                never share, rent, or sell contact data to third parties, and we never send unsolicited
                marketing emails.
              </p>
            </div>

            {/* Quick Links & Resources */}
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6">
              <h3 className="font-bold text-slate-900 mb-3 text-sm">Helpful Legal Pages</h3>
              <div className="space-y-2">
                {[
                  { label: "Privacy Policy", href: "/privacy-policy" },
                  { label: "Terms & Conditions", href: "/terms-and-conditions" },
                  { label: "Engineering Disclaimer", href: "/disclaimer" },
                  { label: "DMCA Copyright Policy", href: "/dmca" },
                  { label: "About Our Founders", href: "/about-us" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-sm text-slate-600 hover:text-violet-600 font-medium transition-colors py-1.5 border-b border-slate-200/60 last:border-0"
                  >
                    {link.label} →
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Interactive Contact Form & FAQ */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </main>
    </>
  );
}
