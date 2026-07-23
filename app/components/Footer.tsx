import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-white/10 py-16 text-slate-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <div className="text-2xl font-black text-white flex items-center justify-center md:justify-start gap-2 mb-3">
              <span className="w-8 h-8 rounded-lg bg-teal-500 inline-flex items-center justify-center text-white text-sm font-extrabold shadow-sm">
                B
              </span>
              BitumenCalcPro
            </div>
            <p className="text-slate-400 text-sm max-w-sm">
              Engineered with precision for civil engineers, paving contractors, and construction professionals worldwide.
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-3 text-sm font-medium">
            <div className="flex flex-col gap-3">
              <Link href="/about-us" className="hover:text-teal-400 transition-colors">About Us</Link>
              <Link href="/contact-us" className="hover:text-teal-400 transition-colors">Contact</Link>
              <Link href="/" className="hover:text-teal-400 transition-colors">Calculator</Link>
            </div>
            <div className="flex flex-col gap-3">
              <Link href="/privacy-policy" className="hover:text-teal-400 transition-colors">Privacy Policy</Link>
              <Link href="/terms-and-conditions" className="hover:text-teal-400 transition-colors">Terms of Service</Link>
              <Link href="/disclaimer" className="hover:text-teal-400 transition-colors">Disclaimer</Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} BitumenCalcPro. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/dmca" className="hover:text-slate-300 transition-colors">DMCA</Link>
            <span>v1.0.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
