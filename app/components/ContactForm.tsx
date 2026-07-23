"use client";

import { useState } from "react";
import Link from "next/link";
import { Send, CheckCircle, Bug, Lightbulb, HardHat, Shield, HelpCircle } from "lucide-react";

const reasons = [
  { icon: Bug, label: "Report a Bug", value: "bug" },
  { icon: Lightbulb, label: "Feature Request", value: "feature" },
  { icon: HardHat, label: "Technical Question", value: "technical" },
  { icon: Shield, label: "Privacy / Legal", value: "legal" },
  { icon: HelpCircle, label: "General Inquiry", value: "general" },
];

const faqs = [
  {
    q: "How accurate are BitumenCalcPro's results?",
    a: "Our calculator uses standard industry formulas and typical density values per asphalt mix type. Results are accurate estimates intended to support professional judgment — always verify with your mix design documentation and have a qualified engineer sign off before use on a real project.",
  },
  {
    q: "Is BitumenCalcPro free to use?",
    a: "Yes, completely free. No registration, no subscription, no hidden fees. We plan to keep it that way.",
  },
  {
    q: "Can I use results in my project reports?",
    a: "You can use our estimates as a starting point for planning and budgeting. For formal engineering reports, the results should be verified and endorsed by a licensed engineer.",
  },
  {
    q: "Do you support imperial units (feet, inches)?",
    a: "Currently the calculator works in metric units. Imperial unit support is on our roadmap — let us know via the contact form if it's a priority for you.",
  },
];

export default function ContactForm() {
  const [selected, setSelected] = useState("general");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "4946c454-1fd5-410a-b1db-1c4d2803e3bd");
    formData.append("subject", `New message from ${form.name} on BitumenCalcPro`);
    formData.append("reason", selected);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="lg:col-span-2 space-y-8">
      {/* Contact Form */}
      <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm">
        {submitted ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center mx-auto mb-5">
              <CheckCircle size={32} className="text-emerald-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h2>
            <p className="text-slate-500 text-sm mb-6 max-w-sm mx-auto">
              Thanks for reaching out. We'll get back to you at{" "}
              <strong className="text-slate-700">{form.email}</strong> within one business day.
            </p>
            <button
              onClick={() => { setSubmitted(false); setForm({ name: "", email: "", message: "" }); }}
              className="text-violet-600 hover:text-violet-500 font-semibold text-sm underline underline-offset-2"
            >
              Send another message
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-xl font-bold text-slate-900 mb-6">Send Us a Message</h2>

            {/* Reason Selector */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-slate-700 mb-3">
                What's this about?
              </label>
              <div className="flex flex-wrap gap-2">
                {reasons.map((r) => {
                  const Icon = r.icon;
                  return (
                    <button
                      key={r.value}
                      type="button"
                      id={`reason-${r.value}`}
                      onClick={() => setSelected(r.value)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium transition-all ${
                        selected === r.value
                          ? "bg-violet-600 border-violet-600 text-white shadow-md shadow-violet-200"
                          : "bg-white border-slate-200 text-slate-600 hover:border-violet-300 hover:text-violet-600"
                      }`}
                    >
                      <Icon size={14} />
                      {r.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Your Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="John Smith"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Your Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us what's on your mind. The more detail you share, the better we can help."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent transition-all resize-none"
                />
              </div>

              {error && (
                <div className="bg-red-50 text-red-600 text-sm font-medium p-3 rounded-xl border border-red-200">
                  {error}
                </div>
              )}

              <p className="text-xs text-slate-400">
                By submitting this form, you agree to our{" "}
                <Link href="/privacy-policy" className="text-violet-500 hover:underline">Privacy Policy</Link>.
                We'll never share your email.
              </p>

              <button
                id="contact-submit"
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 disabled:opacity-70 disabled:hover:bg-orange-500 active:scale-[0.98] text-white py-3.5 rounded-xl font-bold text-sm transition-all shadow-md shadow-orange-200"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin w-4 h-4 border-2 border-white/20 border-t-white rounded-full"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </>
        )}
      </div>

      {/* FAQ */}
      <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-slate-100 rounded-xl overflow-hidden">
              <button
                id={`faq-${idx}`}
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-semibold text-slate-800 text-sm pr-4">{faq.q}</span>
                <span className={`text-violet-600 text-lg font-bold shrink-0 transition-transform ${openFaq === idx ? "rotate-45" : ""}`}>
                  +
                </span>
              </button>
              {openFaq === idx && (
                <div className="px-5 pb-4 border-t border-slate-50">
                  <p className="text-slate-500 text-sm leading-relaxed pt-3 m-0">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
