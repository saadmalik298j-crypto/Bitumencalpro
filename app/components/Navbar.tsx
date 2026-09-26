"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Calculator, BookOpen, Info, ShieldCheck, Mail, FileText, ChevronRight, Scale } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const mainNavLinks = [
    { name: "Calculator", href: "/", icon: Calculator, description: "Calculate bitumen & asphalt quantities" },
    { name: "Blog & Guides", href: "/blog", icon: BookOpen, description: "Engineering articles & estimation guides" },
    { name: "About Us", href: "/about-us", icon: Info, description: "Our mission & industry background" },
    { name: "Privacy Policy", href: "/privacy-policy", icon: ShieldCheck, description: "Data protection & privacy guidelines" },
  ];

  const legalLinks = [
    { name: "Terms & Conditions", href: "/terms-and-conditions", icon: FileText },
    { name: "Disclaimer", href: "/disclaimer", icon: Scale },
  ];

  return (
    <header className="bg-slate-900/90 backdrop-blur-md sticky top-0 z-50 border-b border-slate-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl md:text-2xl font-black text-white flex items-center gap-2.5 tracking-tight hover:opacity-90 transition-opacity"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-400 to-teal-600 text-slate-950 flex items-center justify-center text-base shadow-lg shadow-teal-500/20 font-black">
            B
          </div>
          <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
            BitumenCalcPro
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-7 items-center">
          {mainNavLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-semibold text-sm transition-all py-1.5 px-3 rounded-lg ${
                  isActive
                    ? "text-teal-300 bg-teal-500/10 border border-teal-500/20 shadow-sm"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            href="/contact-us"
            className="bg-gradient-to-r from-teal-400 to-teal-500 text-slate-950 hover:from-teal-300 hover:to-teal-400 px-5 py-2 rounded-xl font-bold transition-all text-sm shadow-md shadow-teal-500/15 hover:shadow-teal-500/30 hover:-translate-y-0.5 active:translate-y-0"
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-slate-200 hover:text-white p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 focus:outline-none focus:ring-2 focus:ring-teal-400/50 transition-all"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open navigation menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} className="text-teal-400" /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 top-[61px] bg-slate-950/80 backdrop-blur-sm z-40 md:hidden animate-fade-in"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer Menu Panel */}
      {isOpen && (
        <nav className="md:hidden bg-slate-900 border-b border-slate-800 fixed left-0 right-0 top-[61px] max-h-[calc(100vh-61px)] overflow-y-auto z-50 p-5 shadow-2xl flex flex-col gap-6 animate-slide-down">
          {/* Main Mobile Navigation */}
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 px-2">
              Main Menu
            </div>
            <div className="flex flex-col gap-2">
              {mainNavLinks.map((link) => {
                const Icon = link.icon;
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between p-3.5 rounded-xl transition-all ${
                      isActive
                        ? "bg-teal-500/15 text-teal-300 border border-teal-500/30 font-bold"
                        : "text-slate-200 hover:bg-slate-800/80 hover:text-white font-medium border border-transparent"
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                          isActive ? "bg-teal-500/20 text-teal-300" : "bg-slate-800 text-slate-400"
                        }`}
                      >
                        <Icon size={19} />
                      </div>
                      <div>
                        <div className="text-base leading-snug">{link.name}</div>
                        <div className="text-xs text-slate-400 font-normal leading-tight mt-0.5">
                          {link.description}
                        </div>
                      </div>
                    </div>
                    <ChevronRight size={18} className={isActive ? "text-teal-400" : "text-slate-600"} />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Legal & Policy Section */}
          <div className="border-t border-slate-800/80 pt-4">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 px-2">
              Legal & Trust
            </div>
            <div className="grid grid-cols-2 gap-2">
              {legalLinks.map((link) => {
                const Icon = link.icon;
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-2.5 p-3 rounded-xl text-xs font-semibold transition-all ${
                      isActive
                        ? "bg-teal-500/15 text-teal-300 border border-teal-500/30"
                        : "bg-slate-800/50 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800"
                    }`}
                  >
                    <Icon size={15} className="text-teal-400 shrink-0" />
                    <span className="truncate">{link.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Contact Action */}
          <div className="pt-2 pb-1">
            <Link
              href="/contact-us"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2.5 w-full bg-gradient-to-r from-teal-400 to-teal-500 text-slate-950 font-bold py-3.5 px-4 rounded-xl text-center text-sm shadow-lg shadow-teal-500/20 active:scale-[0.99] transition-all"
            >
              <Mail size={18} />
              <span>Get in Touch / Contact Us</span>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

