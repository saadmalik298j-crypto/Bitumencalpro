// app/contact-us/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import {
  Mail,
  MessageSquare,
  Clock,
  Shield,
  ArrowLeft,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | BitumenCalcPro",
  description:
    "Get in touch with the BitumenCalcPro team. Have a question, spotted a bug, or want to share feedback? We're here to help.",
  alternates: { canonical: "https://bitumencalcpro.com/contact-us" },
  openGraph: {
    title: "Contact Us | BitumenCalcPro",
    description:
      "Get in touch with the BitumenCalcPro team. We'd love to hear from you.",
    url: "https://bitumencalcpro.com/contact-us",
    siteName: "BitumenCalcPro",
    type: "website",
  },
};

export default function ContactUsPage() {
  return (
    <>
      {/* Hero */}
      <div className="pt-20 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-violet-600/0 pointer-events-none" />
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-orange-500/5 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-violet-600/10 blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm mb-8 group">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Back to Calculator
          </Link>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/20 border border-orange-400/30 text-orange-200 text-sm font-semibold mb-6 backdrop-blur-sm">
            <MessageSquare size={14} className="text-orange-400" />
            We&apos;re Real People
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">Get in Touch</h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            Have a question, spotted a bug, or just want to share feedback? We&apos;d love to hear from you. We typically respond within one business day.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left: Info cards */}
          <div className="space-y-5">
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-violet-50 border border-violet-100 flex items-center justify-center mb-4">
                <Mail size={20} className="text-violet-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-1">Email Us</h3>
              <p className="text-slate-500 text-sm mb-2">For all general inquiries:</p>
              <a href="mailto:hello@bitumencalcpro.com" className="text-violet-600 font-semibold text-sm hover:underline">
                hello@bitumencalcpro.com
              </a>
            </div>

            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-4">
                <Clock size={20} className="text-blue-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-1">Response Time</h3>
              <p className="text-slate-500 text-sm mb-1">We aim to reply within:</p>
              <p className="text-blue-600 font-bold text-sm">1 business day</p>
              <p className="text-slate-400 text-xs mt-2">Mon – Fri, 9am – 6pm UTC</p>
            </div>

            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center mb-4">
                <Shield size={20} className="text-orange-500" />
              </div>
              <h3 className="font-bold text-slate-900 mb-1">Privacy First</h3>
              <p className="text-slate-500 text-sm">
                We use your email only to respond to your message — nothing else. We don't do cold email. Ever.
              </p>
            </div>

            {/* Quick Links */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
              <h3 className="font-bold text-slate-900 mb-3 text-sm">Helpful Pages</h3>
              <div className="space-y-2">
                {[
                  { label: "Privacy Policy", href: "/privacy-policy" },
                  { label: "Terms & Conditions", href: "/terms-and-conditions" },
                  { label: "Disclaimer", href: "/disclaimer" },
                  { label: "DMCA Policy", href: "/dmca" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-sm text-slate-500 hover:text-violet-600 transition-colors py-1 border-b border-slate-100 last:border-0"
                  >
                    {link.label} →
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form + FAQ Component */}
          <ContactForm />
        </div>
      </main>
    </>
  );
}
