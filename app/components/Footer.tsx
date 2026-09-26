import Link from "next/link";
import { MapPin, Mail, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-14 pb-10 text-slate-300">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-12">

          {/* Brand, Location & Entity Information */}
          <div className="text-left max-w-sm">
            <Link href="/" className="text-2xl font-black text-white flex items-center gap-2.5 mb-3 group">
              <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-400 to-teal-600 text-slate-950 flex items-center justify-center text-sm font-black shadow-md shadow-teal-500/20 group-hover:scale-105 transition-transform">
                B
              </span>
              <span className="bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
                BitumenCalcPro
              </span>
            </Link>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
              Precision civil engineering calculators, mix design algorithms, and technical paving guides built for contractors, engineers, and students worldwide.
            </p>
            
            {/* E-E-A-T Location & Founder Badge */}
            <div className="flex flex-col gap-2 mb-5 text-xs text-slate-400">
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin size={14} className="text-teal-400 shrink-0" />
                <span>Headquarters: <strong>Islamabad, Pakistan</strong></span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck size={14} className="text-violet-400 shrink-0" />
                <span>Publisher: <strong>Nabeel Awan</strong></span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://web.facebook.com/profile.php?id=61592790119864"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700/80 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all shadow-sm"
                aria-label="BitumenCalcPro on Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@bitumencalcpro"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700/80 flex items-center justify-center text-slate-400 hover:text-white hover:bg-red-600 hover:border-red-600 transition-all shadow-sm"
                aria-label="BitumenCalcPro on YouTube"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.418-4.814a2.507 2.507 0 0 1 1.768-1.768C5.747 5 12 5 12 5s6.255 0 7.812.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://www.pinterest.com/Bitumencalcpro/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700/80 flex items-center justify-center text-slate-400 hover:text-white hover:bg-red-500 hover:border-red-500 transition-all shadow-sm"
                aria-label="BitumenCalcPro on Pinterest"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.168 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 text-sm">
            <div>
              <p className="text-teal-400 font-bold text-xs uppercase tracking-wider mb-4">Calculators & Tools</p>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/" className="text-slate-300 hover:text-white transition-colors text-xs sm:text-sm">
                    Bitumen Calculator
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-slate-300 hover:text-white transition-colors text-xs sm:text-sm">
                    Engineering Learning Hub
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-teal-400 font-bold text-xs uppercase tracking-wider mb-4">Company & Entity</p>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/about-us" className="text-slate-300 hover:text-white transition-colors text-xs sm:text-sm">
                    About BitumenCalcPro
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" className="text-slate-300 hover:text-white transition-colors text-xs sm:text-sm">
                    Contact & Support
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-teal-400 font-bold text-xs uppercase tracking-wider mb-4">Legal & Compliance</p>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/privacy-policy" className="text-slate-300 hover:text-white transition-colors text-xs sm:text-sm">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-and-conditions" className="text-slate-300 hover:text-white transition-colors text-xs sm:text-sm">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/disclaimer" className="text-slate-300 hover:text-white transition-colors text-xs sm:text-sm">
                    Disclaimer
                  </Link>
                </li>
                <li>
                  <Link href="/dmca" className="text-slate-300 hover:text-white transition-colors text-xs sm:text-sm">
                    DMCA Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-500">
          <p>© 2026 BitumenCalcPro. All rights reserved.</p>
          <p className="text-slate-500 text-center max-w-xl">
            BitumenCalcPro provides technical software for estimation & educational purposes. Always verify final pavement orders with a certified civil engineer.
          </p>
        </div>

      </div>
    </footer>
  );
}

