import Link from "next/link";

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
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-5">
              Precision civil engineering calculators, mix design algorithms, and technical paving guides built for contractors, engineers, and students worldwide. Founded by Nabeel Awan in Islamabad, Pakistan.
            </p>

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
                href="https://x.com/bitumencalcpro"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700/80 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 hover:border-slate-500 transition-all shadow-sm"
                aria-label="BitumenCalcPro on X"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/bitumencalcpro/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700/80 flex items-center justify-center text-slate-400 hover:text-white hover:bg-pink-600 hover:border-pink-600 transition-all shadow-sm"
                aria-label="BitumenCalcPro on Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
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
                  <Link href="/asphalt-tonnage-calculator/" className="text-slate-300 hover:text-white transition-colors text-xs sm:text-sm">
                    Asphalt Tonnage Calculator
                  </Link>
                </li>
                <li>
                  <Link href="/asphalt-driveway-cost-calculator/" className="text-slate-300 hover:text-white transition-colors text-xs sm:text-sm">
                    Driveway Cost Calculator
                  </Link>
                </li>
                <li>
                  <Link href="/tack-coat-calculator/" className="text-slate-300 hover:text-white transition-colors text-xs sm:text-sm">
                    Tack Coat Calculator
                  </Link>
                </li>
                <li>
                  <Link href="/asphalt-millings-calculator/" className="text-slate-300 hover:text-white transition-colors text-xs sm:text-sm">
                    Asphalt Millings Calculator
                  </Link>
                </li>
                <li>
                  <Link href="/bitumen-tank-volume-calculator/" className="text-slate-300 hover:text-white transition-colors text-xs sm:text-sm">
                    Bitumen Tank Volume Calculator
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-teal-400 font-bold text-xs uppercase tracking-wider mb-4">Resources & Company</p>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/blog" className="text-slate-300 hover:text-white transition-colors text-xs sm:text-sm">
                    Engineering Learning Hub
                  </Link>
                </li>
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
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-400">
          <p>© 2026 BitumenCalcPro. All rights reserved.</p>
          <p className="text-slate-400 text-center max-w-xl">
            BitumenCalcPro provides technical Calculators for estimation & educational purposes. Always verify final pavement orders with a certified civil engineer.
          </p>
        </div>

      </div>
    </footer>
  );
}

