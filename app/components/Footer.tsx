import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-white/10 py-16 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">

          {/* Brand & Social */}
          <div className="text-center md:text-left max-w-xs">
            <div className="text-2xl font-black text-white flex items-center justify-center md:justify-start gap-2 mb-3">
              <span className="w-8 h-8 rounded-lg bg-teal-500 inline-flex items-center justify-center text-white text-sm font-extrabold shadow-sm">
                B
              </span>
              BitumenCalcPro
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Precision calculator and real-world technical guides built for paving pros. We equip civil engineers and contractors worldwide with the tools to get the job done right.
            </p>
            {/* Social Icons */}
            <div className="flex items-center justify-center md:justify-start gap-4">
              {/* YouTube */}
              <a href="https://www.youtube.com/@bitumencalcpro" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-red-500 transition-colors" aria-label="BitumenCalcPro on YouTube">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.418-4.814a2.507 2.507 0 0 1 1.768-1.768C5.747 5 12 5 12 5s6.255 0 7.812.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                </svg>
              </a>
              {/* Facebook */}
              <a href="https://web.facebook.com/profile.php?id=61592790119864" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-500 transition-colors" aria-label="BitumenCalcPro on Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              {/* Pinterest */}
              <a href="https://www.pinterest.com/Bitumencalcpro/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-red-600 transition-colors" aria-label="BitumenCalcPro on Pinterest">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.168 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-6 text-sm font-medium">
            <div>
              <p className="text-white font-bold text-xs uppercase tracking-widest mb-3 text-teal-400">Tools</p>
              <div className="flex flex-col gap-2.5">
                <Link href="/" className="hover:text-teal-400 transition-colors">Bitumen Calculator</Link>
                <Link href="/blog" className="hover:text-teal-400 transition-colors">Learning Hub</Link>
              </div>
            </div>
            <div>
              <p className="text-white font-bold text-xs uppercase tracking-widest mb-3 text-teal-400">Company</p>
              <div className="flex flex-col gap-2.5">
                <Link href="/about-us" className="hover:text-teal-400 transition-colors">About Us</Link>
                <Link href="/contact-us" className="hover:text-teal-400 transition-colors">Contact</Link>
              </div>
            </div>
            <div>
              <p className="text-white font-bold text-xs uppercase tracking-widest mb-3 text-teal-400">Legal</p>
              <div className="flex flex-col gap-2.5">
                <Link href="/privacy-policy" className="hover:text-teal-400 transition-colors">Privacy Policy</Link>
                <Link href="/terms-and-conditions" className="hover:text-teal-400 transition-colors">Terms of Service</Link>
                <Link href="/disclaimer" className="hover:text-teal-400 transition-colors">Disclaimer</Link>
                <Link href="/dmca" className="hover:text-teal-400 transition-colors">DMCA</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} BitumenCalcPro. All rights reserved.</p>
          <p className="text-slate-600 text-center">
            BitumenCalcPro provides general information for educational purposes. Always consult a qualified engineer for project-specific decisions.
          </p>
        </div>

      </div>
    </footer>
  );
}
