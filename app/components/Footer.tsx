import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-white/10 py-16 text-slate-300">
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
            <p className="text-slate-300 text-sm max-w-sm mb-4">
              Engineered with precision for civil engineers, paving contractors, and construction professionals worldwide.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <a href="https://www.youtube.com/@bitumencalcpro" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-red-500 transition-colors" aria-label="YouTube Channel">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.418-4.814a2.507 2.507 0 0 1 1.768-1.768C5.747 5 12 5 12 5s6.255 0 7.812.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-3 text-sm font-medium">
            <div className="flex flex-col gap-3">
              <Link href="/about-us" className="hover:text-teal-400 transition-colors">About Us</Link>
              <Link href="/blog" className="hover:text-teal-400 transition-colors">Blog</Link>
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
        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} BitumenCalcPro. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/dmca" className="hover:text-white transition-colors">DMCA</Link>
            <span>v1.0.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
