import Image from "next/image";

export default function AuthorBio() {
  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 mt-12 mb-8 shadow-lg relative overflow-hidden not-prose">
      <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/10 rounded-full blur-2xl pointer-events-none translate-x-1/2 -translate-y-1/2" />
      <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start relative z-10">
        <div className="w-24 h-24 shrink-0 relative rounded-full p-1 bg-gradient-to-tr from-violet-500/50 to-orange-500/50 shadow-md group">
          <div className="absolute inset-0 bg-black/50 rounded-full m-0.5" />
          <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-800">
            <Image
              src="/nabeel-awan-bitumencalcpro-founder.webp"
              alt="Nabeel Awan - Founder of BitumenCalcPro"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="96px"
            />
          </div>
        </div>
        
        <div className="flex-1 text-center sm:text-left">
          <h3 className="text-xl font-bold text-white mb-1">Nabeel Awan</h3>
          <p className="text-violet-400 font-medium text-sm mb-3">Founder & Web Developer</p>
          <div className="space-y-3 text-white/70 text-sm leading-relaxed">
            <p>
              Nabeel Awan is a web developer and the founder of BitumenCalcPro. His work focuses on web development and building practical online tools, with a strong interest in <strong>civil engineering, asphalt, bitumen, pavement construction, and construction technology</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
