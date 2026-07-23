"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Calculator", href: "/" },
    { name: "About", href: "/about-us" },
  ];

  return (
    <header className="bg-white/10 backdrop-blur-lg sticky top-0 z-50 border-b border-white/20 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl md:text-2xl font-black text-white flex items-center gap-2 tracking-tight hover:opacity-90 transition-opacity">
          <div className="w-8 h-8 rounded-lg bg-white text-teal-600 flex items-center justify-center text-sm shadow-md font-extrabold">
            B
          </div>
          BitumenCalcPro
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-semibold text-sm transition-colors ${
                pathname === link.href ? "text-white" : "text-white/70 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact-us"
            className="bg-white text-teal-700 hover:bg-teal-50 px-5 py-2 rounded-full font-bold transition-all text-sm shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden bg-white/10 backdrop-blur-2xl border-t border-white/10 p-4 flex flex-col gap-4 absolute w-full shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-white font-semibold block px-4 py-2 rounded-lg hover:bg-white/10"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact-us"
            onClick={() => setIsOpen(false)}
            className="text-teal-700 bg-white font-bold block px-4 py-2 rounded-lg text-center mt-2 shadow-sm"
          >
            Contact Us
          </Link>
        </nav>
      )}
    </header>
  );
}
