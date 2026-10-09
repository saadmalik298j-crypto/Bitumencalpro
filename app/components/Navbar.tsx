"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Bitumen Calc", href: "/" },
    { name: "Tonnage", href: "/asphalt-tonnage-calculator/" },
    { name: "Driveway Cost", href: "/asphalt-driveway-cost-calculator/" },
    { name: "Tack Coat", href: "/tack-coat-calculator/" },
    { name: "Millings", href: "/asphalt-millings-calculator/" },
    { name: "Tank Volume", href: "/bitumen-tank-volume-calculator/" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <header className="bg-white/10 backdrop-blur-xl sticky top-0 z-50 border-b border-white/20 shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-3.5 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl md:text-2xl font-black text-white flex items-center gap-2.5 tracking-tight hover:opacity-90 transition-opacity"
        >
          <div className="w-8 h-8 md:w-9 md:h-9 rounded-xl bg-white text-teal-700 flex items-center justify-center text-base shadow-md font-black">
            B
          </div>
          <span>BitumenCalcPro</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-7 items-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-semibold text-sm transition-all py-1 px-3 rounded-lg ${
                  isActive
                    ? "text-white bg-white/20 shadow-sm"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            href="/contact-us"
            className="bg-white text-teal-700 hover:bg-teal-50 px-5 py-2 rounded-full font-bold transition-all text-sm shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden text-white p-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 transition-colors focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Simple Mobile Navigation Menu */}
      {isOpen && (
        <nav className="md:hidden bg-slate-900/95 backdrop-blur-2xl border-t border-b border-white/15 p-4 flex flex-col gap-2.5 absolute left-0 right-0 w-full shadow-2xl animate-slide-down">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-base font-semibold block px-4 py-3 rounded-xl transition-all ${
                  isActive
                    ? "text-white bg-white/20 font-bold border border-white/20"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            href="/contact-us"
            onClick={() => setIsOpen(false)}
            className="text-teal-700 bg-white hover:bg-teal-50 font-bold block px-4 py-3 rounded-xl text-center mt-1 shadow-md transition-all text-base"
          >
            Contact Us
          </Link>
        </nav>
      )}
    </header>
  );
}


