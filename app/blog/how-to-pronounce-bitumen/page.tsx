import AuthorBio from "../../components/AuthorBio";
// app/blog/how-to-pronounce-bitumen/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import {
  ChevronRight,
  Clock,
  Calendar,
  BookOpen,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Volume2,
  Globe,
  Mic,
} from "lucide-react";

export const metadata: Metadata = {
  title: "How to Pronounce Bitumen: British, American & Australian Guide",
  description:
    "Learn how to pronounce bitumen correctly. British says BICH-uh-mun, American says buh-TOO-mun. IPA symbols, stress patterns, common mistakes, and a 10-minute practice routine.",
  keywords: [
    "how to pronounce bitumen",
    "bitumen pronunciation",
    "bitumen pronunciation British",
    "bitumen pronunciation American",
    "bitumen IPA",
    "how do you say bitumen",
    "bitumen syllables",
    "bituminous pronunciation",
  ],
  alternates: { canonical: "https://bitumencalcpro.com/blog/how-to-pronounce-bitumen" },
  openGraph: {
    title: "How to Pronounce Bitumen: British, American & Australian Guide | BitumenCalcPro",
    description:
      "British says BICH-uh-mun, American says buh-TOO-mun. Full IPA, stress patterns, common mistakes, and a 10-minute practice routine.",
    url: "https://bitumencalcpro.com/blog/how-to-pronounce-bitumen",
    siteName: "BitumenCalcPro",
    type: "article",
    publishedTime: "2026-09-29T00:00:00.000Z",
    authors: ["BitumenCalcPro"],
    images: [
      {
        url: "/how-to-pronounce-bitumen.jpg",
        width: 1200,
        height: 675,
        alt: "How to pronounce bitumen — British, American and Australian English pronunciation guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Pronounce Bitumen: British, American & Australian Guide",
    description: "BICH-uh-mun vs buh-TOO-mun — full IPA, stress patterns, and a 10-minute practice routine.",
    images: ["/how-to-pronounce-bitumen.jpg"],
  },
  robots: { "max-image-preview": "large" },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Pronounce Bitumen: British, American and Australian English",
  description: "Learn how to pronounce bitumen in British, American, and Australian English. Includes IPA transcriptions, stress patterns, common mistakes, and a practice routine.",
  image: "https://bitumencalcpro.com/how-to-pronounce-bitumen.jpg",
  datePublished: "2026-09-29T00:00:00.000Z",
  dateModified: "2026-09-29T00:00:00.000Z",
  author: {
    "@type": "Person",
    name: "Nabeel Awan",
    url: "https://bitumencalcpro.com/about-us",
    image: "https://bitumencalcpro.com/nabeel-awan-bitumencalcpro-founder.webp",
  },
  publisher: {
    "@type": "Organization",
    name: "BitumenCalcPro",
    url: "https://bitumencalcpro.com",
    logo: { "@type": "ImageObject", url: "https://bitumencalcpro.com/favicon.ico" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://bitumencalcpro.com/blog/how-to-pronounce-bitumen" },
  keywords: "how to pronounce bitumen, bitumen pronunciation, bitumen IPA, British pronunciation bitumen, American pronunciation bitumen",
  articleSection: "Bitumen Fundamentals",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How many syllables does bitumen have?", acceptedAnswer: { "@type": "Answer", text: "Bitumen has 3 syllables: bi-tu-men. The stress falls on the first syllable in British English and on the second syllable in American English." } },
    { "@type": "Question", name: "Is the 't' in bitumen silent?", acceptedAnswer: { "@type": "Answer", text: "No. In American English it is a clear 't.' In British English it blends with the following sound and becomes 'ch,' as in BICH-uh-mun." } },
    { "@type": "Question", name: "What is the British pronunciation of bitumen?", acceptedAnswer: { "@type": "Answer", text: "The common British form is BICH-uh-mun, written /\u02c8b\u026at\u0283.\u0259.m\u0259n/ in Cambridge Dictionary. Another British form is BIT-yuh-mun (/\u02c8b\u026atj\u028am\u0259n/)." } },
    { "@type": "Question", name: "What is the American pronunciation of bitumen?", acceptedAnswer: { "@type": "Answer", text: "American English uses buh-TOO-mun, bye-TOO-mun, or bih-TOO-mun. All American forms place stress on the second syllable." } },
    { "@type": "Question", name: "How do Australians say bitumen?", acceptedAnswer: { "@type": "Answer", text: "Most Australians use a British-type form with first-syllable stress. Both BICH-uh-mun and BIT-yuh-mun are common in Australian speech." } },
    { "@type": "Question", name: "How do you pronounce bituminous?", acceptedAnswer: { "@type": "Answer", text: "It is buh-TOO-muh-nus in American English and buh-TYOO-mih-nus in British English. It has 4 syllables, with stress on the second." } },
    { "@type": "Question", name: "Does bitumen rhyme with anything?", acceptedAnswer: { "@type": "Answer", text: "The American buh-TYOO-mun rhymes with 'human' in its last two syllables. Merriam-Webster's rhyme list also includes 'acumen' and 'cumin.'" } },
    { "@type": "Question", name: "Is bitumen the same as asphalt?", acceptedAnswer: { "@type": "Answer", text: "In the US, 'asphalt' can name the binder, so the terms overlap. In most other countries, bitumen is the binder and asphalt is the finished mix of bitumen, stone, and sand." } },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://bitumencalcpro.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://bitumencalcpro.com/blog" },
    { "@type": "ListItem", position: 3, name: "How to Pronounce Bitumen", item: "https://bitumencalcpro.com/blog/how-to-pronounce-bitumen" },
  ],
};

function SectionImage({ src, alt, caption, priority }: { src: string; alt: string; caption?: string; priority?: boolean }) {
  return (
    <figure className="my-8 sm:my-10 w-[calc(100vw-32px)] max-w-full lg:w-full overflow-hidden not-prose">
      <div className="relative w-full max-w-full rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 shadow-xl sm:shadow-2xl bg-black/20">
        <Image src={src} alt={alt} width={1200} height={675} className="w-full max-w-full h-auto object-contain sm:object-cover" style={{ maxWidth: "100%", height: "auto", display: "block" }} sizes="(max-width: 768px) 100vw, (max-width: 1280px) 75vw, 900px" priority={priority} />
      </div>
      {caption && <figcaption className="mt-3 text-center text-sm text-white/70 italic">{caption}</figcaption>}
    </figure>
  );
}

function InfoTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="my-6 sm:my-8 -mx-4 sm:mx-0 overflow-x-auto not-prose sm:rounded-xl border-y sm:border border-white/10 shadow-lg">
      <table className="w-full min-w-[320px] text-sm">
        <thead>
          <tr className="bg-teal-600/30 border-b border-white/10">
            {headers.map((h) => <th key={h} className="text-left px-3 py-2.5 sm:px-5 sm:py-3.5 text-white font-bold text-xs uppercase tracking-wider">{h}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={`border-b border-white/5 ${i % 2 === 0 ? "bg-white/5" : "bg-white/[0.02]"} hover:bg-white/10 transition-colors`}>
              {row.map((cell, j) => <td key={j} className="px-3 py-2 sm:px-5 sm:py-3 text-white/80 leading-relaxed text-xs sm:text-sm">{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function QuickFact({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="border-l-4 border-orange-400 pl-5 my-5 not-prose">
      <p className="font-bold text-white mb-1">{question}</p>
      <p className="text-white/70 text-sm leading-relaxed">{answer}</p>
    </div>
  );
}

export default function HowToPronounceBitumenPage() {
  return (
    <>
      <Script id="schema-article-pronounce" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="schema-faq-pronounce" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="schema-breadcrumb-pronounce" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* HERO BAND */}
      <div className="relative pt-16 pb-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-teal-600/10 pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-violet-500/10 blur-[100px] pointer-events-none" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-1.5 text-sm text-white/75 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={13} />
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <ChevronRight size={13} />
            <span className="text-white/90 font-medium">How to Pronounce Bitumen</span>
          </nav>
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="inline-flex items-center gap-1.5 bg-violet-500/20 border border-violet-400/30 text-violet-300 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
              <Volume2 size={12} />
              Bitumen Fundamentals
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-6 max-w-4xl">
            How to Pronounce Bitumen: British, American and Australian English
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-white/75 text-sm mb-10">
            <span className="flex items-center gap-1.5"><Calendar size={13} /><time dateTime="2026-09-29">September 29, 2026</time></span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="flex items-center gap-1.5"><Clock size={13} />16 min read</span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="text-white/75">By BitumenCalcPro</span>
          </div>
        </div>
      </div>

      {/* IMAGE 1: Below H1 / before Quick Answer */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionImage src="/how-to-pronounce-bitumen.jpg" alt="How to pronounce bitumen — illustrated guide showing British BICH-uh-mun and American buh-TOO-mun pronunciations with syllable stress markers" caption="British English stresses the first syllable (BICH-uh-mun); American English stresses the second (buh-TOO-mun)" priority />
      </div>

      {/* ARTICLE BODY */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24">
        <div className="flex flex-col xl:flex-row gap-12 items-start">
          <article className="flex-1 min-w-0">

            {/* Quick Answer */}
            <div className="mb-10 bg-gradient-to-br from-violet-500/15 to-violet-600/10 border border-violet-400/25 rounded-2xl p-6 md:p-8">
              <h2 className="text-lg font-black text-violet-300 mb-3 flex items-center gap-2">
                <CheckCircle2 size={18} />Quick Answer
              </h2>
              <p className="text-white/85 leading-relaxed text-base mb-3">
                How to pronounce bitumen depends on your accent. <strong className="text-white">British English says BICH-uh-mun</strong>, with stress on the first syllable. <strong className="text-white">American English says buh-TOO-mun or bye-TOO-mun</strong>, with stress on the second. Both have 3 syllables, and the unstressed vowels shrink to a soft &ldquo;uh.&rdquo;
              </p>
              <p className="text-white/75 leading-relaxed text-sm">Pick one accent, say it the same way every time, and people will understand you on any job site or in any classroom.</p>
            </div>

            {/* Table of Contents */}
            <div className="mb-10 bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="text-white font-black text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
                <BookOpen size={14} className="text-violet-400" />Table of Contents
              </div>
              <nav className="space-y-1">
                {[
                  { id: "at-a-glance", label: "Bitumen Pronunciation at a Glance" },
                  { id: "british-english", label: "British English: BICH-uh-mun" },
                  { id: "american-english", label: "American English: buh-TOO-mun and Variants" },
                  { id: "australia-nz", label: "Australia, New Zealand, and South Asia" },
                  { id: "ipa-breakdown", label: "The Sounds Broken Down (IPA)" },
                  { id: "syllables-stress", label: "Syllables, Stress, and the Schwa" },
                  { id: "why-varies", label: "Why the Pronunciation Varies" },
                  { id: "mistakes", label: "Common Pronunciation Mistakes" },
                  { id: "related-words", label: "Related Words and Technical Terms" },
                  { id: "what-bitumen-means", label: "What Bitumen Means" },
                  { id: "which-to-use", label: "Which Pronunciation Should You Use?" },
                  { id: "practice", label: "A 10-Minute Practice Routine" },
                  { id: "conclusion", label: "Conclusion" },
                  { id: "faq", label: "FAQ" },
                ].map(({ id, label }) => (
                  <a key={id} href={`#${id}`} className="block text-white/75 hover:text-violet-400 text-xs leading-relaxed py-1 px-2 rounded-lg hover:bg-white/5 transition-all">{label}</a>
                ))}
              </nav>
            </div>

            {/* Intro */}
            <section className="mb-12">
              <p className="text-white/85 leading-relaxed mb-4 text-base">
                You see the word on road signs, roofing labels, and oil news. Then someone asks you to say it out loud, and you&apos;re not sure which syllable to hit. Dictionaries list more than one pronunciation, and each one is right for its own accent.
              </p>
              <p className="text-white/85 leading-relaxed text-base">
                This guide covers how to pronounce bitumen in British, American, Australian, and other English accents. You&apos;ll get respellings, IPA symbols, stress patterns, common mistakes, related technical words, and a practice routine. The forms below come from{" "}
                <a href="https://dictionary.cambridge.org/dictionary/english/bitumen" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:text-violet-300 underline underline-offset-2 transition-colors">
                  Cambridge Dictionary <ExternalLink size={12} className="inline ml-0.5 mb-0.5" />
                </a>{" "}
                and{" "}
                <a href="https://www.merriam-webster.com/dictionary/bitumen" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:text-violet-300 underline underline-offset-2 transition-colors">
                  Merriam-Webster <ExternalLink size={12} className="inline ml-0.5 mb-0.5" />
                </a>
                . For a deep dive into what bitumen actually is, see our{" "}
                <Link href="/blog/what-is-bitumen" className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors font-medium">complete guide to bitumen</Link>.
              </p>
            </section>

            {/* Section: At a Glance */}
            <section id="at-a-glance" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-violet-400 pl-4">Bitumen Pronunciation at a Glance</h2>
              {/* IMAGE 2: Before pronunciation table */}
              <SectionImage src="/british-american-bitumen-pronunciation.jpg" alt="British versus American bitumen pronunciation comparison — BICH-uh-mun versus buh-TOO-mun side by side with IPA notation" caption="British and American English differ on both stress placement and the middle consonant sound" />
              <InfoTable
                headers={["Accent", "Simple respelling", "IPA", "Stressed syllable"]}
                rows={[
                  ["British (common)", "BICH-uh-mun", "/\u02c8b\u026at\u0283.\u0259.m\u0259n/", "1st"],
                  ["British (alternate)", "BIT-yuh-mun", "/\u02c8b\u026atj\u028am\u0259n/", "1st"],
                  ["American (Cambridge)", "bye-TOO-mun", "/ba\u026a\u02c8tu\u02d0.m\u0259n/", "2nd"],
                  ["American (Oxford)", "bih-TOO-mun", "/b\u026a\u02c8tu\u02d0m\u0259n/", "2nd"],
                  ["American (Merriam-Webster)", "buh-TYOO-mun", "/b\u0259\u02c8tju\u02d0m\u0259n/", "2nd"],
                ]}
              />
              <p className="text-white/80 leading-relaxed mb-4 text-base">Capital letters mark the stressed syllable. You don&apos;t need to say it louder — make it slightly longer and clearer than the other two syllables.</p>
              <p className="text-white/80 leading-relaxed text-base">Every form above has 3 syllables. The differences are the stress, the first vowel, and the middle consonant. Merriam-Webster also lists a &ldquo;bye&rdquo; opening and a &ldquo;TOO&rdquo; version without the &ldquo;y&rdquo; glide, so you&apos;ll find several American forms across sources.</p>
            </section>

            {/* Section: British English */}
            <section id="british-english" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">British English: BICH-uh-mun</h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">Cambridge lists the UK pronunciation as <strong className="text-white">/\u02c8b\u026at\u0283.\u0259.m\u0259n/</strong>. It&apos;s the form most people mean when they say &ldquo;the British pronunciation.&rdquo;</p>
              {/* IMAGE 3: British English section */}
              <SectionImage src="/british-english-bitumen-pronunciation.jpg" alt="British English bitumen pronunciation — BICH-uh-mun with first-syllable stress and IPA symbols highlighted" caption="British English: stress falls firmly on the first syllable — BICH — which rhymes with 'rich' and 'which'" />
              <h3 className="text-2xl font-black text-white mb-4 mt-8">Step-by-Step</h3>
              <div className="space-y-3 mb-6">
                {[
                  { step: "01", title: "Say BICH", desc: "It rhymes with 'rich' and 'which.' This is the stressed beat." },
                  { step: "02", title: "Add a very short 'uh'", desc: "This is the schwa — the vowel in the first syllable of 'about.' Keep it quick." },
                  { step: "03", title: "Finish with a light 'mun'", desc: "The lips close for the 'm,' and the tongue tip touches the ridge behind your top teeth for the 'n.'" },
                  { step: "04", title: "Join them without gaps", desc: "BICH-uh-mun. The first syllable takes the beat. The other two are quick and quiet." },
                ].map(({ step, title, desc }) => (
                  <div key={step} className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-4">
                    <span className="text-violet-400 font-black text-lg shrink-0 w-8">{step}</span>
                    <div><strong className="text-white text-base">{title}</strong><p className="text-white/65 text-sm mt-0.5">{desc}</p></div>
                  </div>
                ))}
              </div>
              <QuickFact question="The 'BIT-yuh-mun' variant" answer="Merriam-Webster marks a form beginning 'BIT-yuh' as especially British. Both British forms put stress on the first syllable. The 'ch' comes from 't' and 'y' merging when spoken quickly — linguists call this yod coalescence. The same merger appears in some British pronunciations of 'Tuesday' (CHOOZ-day) and 'tune' (CHOON)." />
            </section>

            {/* Section: American English */}
            <section id="american-english" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">American English: buh-TOO-mun and Its Variants</h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">American sources don&apos;t agree on one form, but all share one thing: <strong className="text-white">the stress is on the second syllable</strong>.</p>
              {/* IMAGE 4: American English section */}
              <SectionImage src="/american-english-bitumen-pronunciation.jpg" alt="American English bitumen pronunciation — buh-TOO-mun with second-syllable stress and IPA notation" caption="American English shifts stress to the second syllable — TOO — and drops the 'y' glide in most accents" />
              <div className="space-y-4 mb-6">
                {[
                  { form: "bye-TOO-mun", ipa: "/ba\u026a\u02c8tu\u02d0.m\u0259n/", source: "Cambridge (US) & ELSA Speak", desc: "The first vowel is the 'eye' sound. The middle is a clear 't' followed by the long 'oo' of 'blue.' The last syllable is weak." },
                  { form: "bih-TOO-mun", ipa: "/b\u026a\u02c8tu\u02d0m\u0259n/", source: "Oxford Learner's Dictionaries", desc: "The first vowel is the short 'i' of 'bit.' This version sounds close to the British first vowel, with American stress." },
                  { form: "buh-TYOO-mun", ipa: "/b\u0259\u02c8tju\u02d0m\u0259n/", source: "Merriam-Webster (primary form)", desc: "A weak 'buh' at the start and a small 'y' glide in the middle. Rhymes with 'human' in the last two syllables." },
                ].map(({ form, ipa, source, desc }) => (
                  <div key={form} className="bg-white/5 border border-white/10 rounded-xl p-5 border-l-4 border-l-orange-400">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <strong className="text-white text-base">{form}</strong>
                      <span className="text-orange-300 font-mono text-xs bg-orange-400/10 px-2 py-0.5 rounded">{ipa}</span>
                      <span className="text-white/40 text-xs">{source}</span>
                    </div>
                    <p className="text-white/65 text-sm leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-5 mb-5">
                <h3 className="text-white font-bold mb-2 text-base">Why Americans usually drop the &ldquo;y&rdquo;</h3>
                <p className="text-white/70 text-sm leading-relaxed">Many American accents drop the &ldquo;y&rdquo; glide after &ldquo;t,&rdquo; &ldquo;d,&rdquo; and &ldquo;n.&rdquo; So &ldquo;tune&rdquo; becomes TOON, &ldquo;Tuesday&rdquo; becomes TOOZ-day. That&apos;s why you hear <em>TOO</em> and not <em>CHOO</em> or <em>TYOO</em>.</p>
              </div>
              <p className="text-white/80 leading-relaxed text-base">If you want one form to memorize, choose <strong className="text-white">buh-TOO-mun</strong>. Canada generally follows the same second-syllable pattern — buh-TOO-mun is a safe choice there too.</p>
            </section>

            {/* Section: Australia, NZ, South Asia */}
            <section id="australia-nz" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">Australia, New Zealand, and South Asia</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {[
                  { region: "Australia", color: "teal", desc: "Australians use the word daily, and in informal speech it names a sealed road surface. Both BICH-uh-mun and BIT-yuh-mun are common, with first-syllable stress typical of British-type accents." },
                  { region: "New Zealand", color: "blue", desc: "No major dictionary records a separate NZ pronunciation. NZ English is close to British and Australian patterns, so first-syllable stress is the standard choice." },
                  { region: "India & Pakistan", color: "orange", desc: "English in South Asia generally follows British conventions. BICH-uh-mun matches the British model. Check a recording before using it in a formal presentation." },
                  { region: "Canada", color: "violet", desc: "Second-syllable stress is the most common pattern in Canadian broadcasts about Alberta's oil sands. buh-TOO-mun is a dependable Canadian-sounding choice." },
                ].map(({ region, color, desc }) => (
                  <div key={region} className={`bg-white/5 border border-white/10 rounded-xl p-5 border-l-4 ${color === "teal" ? "border-l-teal-400" : color === "blue" ? "border-l-blue-400" : color === "orange" ? "border-l-orange-400" : "border-l-violet-400"}`}>
                    <div className="flex items-center gap-2 mb-2"><Globe size={14} className="text-white/50" /><h3 className="text-white font-bold text-base">{region}</h3></div>
                    <p className="text-white/65 text-sm leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section: IPA */}
            <section id="ipa-breakdown" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">The Sounds Broken Down (IPA)</h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">The International Phonetic Alphabet gives each speech sound its own symbol, avoiding the problems of English spelling.</p>
              {/* IMAGE 5: Before IPA table */}
              <SectionImage src="/bitumen-ipa-pronunciation-sounds.jpg" alt="Bitumen IPA pronunciation sounds breakdown — showing each phoneme for British and American English" caption="IPA symbols remove the ambiguity of English spelling — each symbol maps to exactly one sound" />
              <InfoTable
                headers={["Symbol", "Sounds like", "Where it appears"]}
                rows={[
                  ["/b/", "'b' in book", "First sound in every accent"],
                  ["/\u026a/", "'i' in ship", "First vowel in British and Oxford US form"],
                  ["/a\u026a/", "'eye'", "First vowel in bye-TOO-mun"],
                  ["/\u0259/", "'a' in above", "Weak schwa vowel in British and US"],
                  ["/t\u0283/", "'ch' in cheese", "Middle sound in British BICH-uh-mun"],
                  ["/t/", "'t' in town", "Middle sound in American forms"],
                  ["/tj/", "'t' plus a short 'y'", "Middle sound in BIT-yuh-mun and TYOO-mun"],
                  ["/u\u02d0/", "'oo' in blue", "Stressed vowel in American forms"],
                  ["/\u028a/", "'oo' in book", "Short vowel in /\u02c8b\u026atj\u028am\u0259n/"],
                  ["/m/", "'m' in moon", "Third-last sound"],
                  ["/n/", "'n' in name", "Last sound"],
                ]}
              />
              <p className="text-white/70 text-sm leading-relaxed mt-4">The mark /\u02c8/ goes before the stressed syllable. Small differences between dictionary transcriptions are normal. For the last syllable, say &ldquo;mun&rdquo; with your jaw relaxed.</p>
            </section>

            {/* Section: Syllables, Stress, Schwa */}
            <section id="syllables-stress" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">Syllables, Stress, and the Schwa</h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">Bitumen has 3 syllables: <strong className="text-white font-mono">bi-tu-men</strong>.</p>
              <InfoTable headers={["", "Syllable 1", "Syllable 2", "Syllable 3"]} rows={[["British", "BI (strong)", "tu (weak)", "men (weak)"], ["American", "bi (weak or 'bye')", "TU (strong)", "men (weak)"]]} />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-white/5 border border-white/10 rounded-xl p-5 border-l-4 border-l-teal-400">
                  <h3 className="text-white font-bold mb-2 text-base">What word stress does</h3>
                  <p className="text-white/65 text-sm leading-relaxed">English speakers listen for stress patterns as much as individual sounds. A stressed syllable is longer, a little louder, and higher in pitch. The wrong stress can make a word sound unfamiliar even when every sound is correct.</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-5 border-l-4 border-l-violet-400">
                  <h3 className="text-white font-bold mb-2 text-base">The schwa /\u0259/</h3>
                  <p className="text-white/65 text-sm leading-relaxed">The schwa is the most common vowel in English — a short, relaxed &ldquo;uh.&rdquo; Learners who give every vowel its full sound tend to say &ldquo;bit-YOO-men&rdquo; with three equal beats — understandable, but stiff. Shorten the unstressed parts and the word flows.</p>
                </div>
              </div>
              <div className="bg-orange-500/10 border border-orange-400/20 rounded-xl p-5">
                <p className="text-orange-200 text-sm leading-relaxed flex items-start gap-2">
                  <AlertCircle size={15} className="mt-0.5 shrink-0" />
                  <span><strong>Accent comparison:</strong> &ldquo;Laboratory&rdquo; is a familiar case: British say luh-BOR-uh-tree, Americans say LAB-ruh-tor-ee. Bitumen follows the same kind of stress split between accents.</span>
                </p>
              </div>
            </section>

            {/* Section: Why Varies */}
            <section id="why-varies" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">Why the Pronunciation Varies</h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">The word comes from Latin <em>bitumen</em>, meaning mineral pitch. Merriam-Webster dates its first known use to the 15th century — long enough for accents to diverge. Three changes explain most of the variation you hear today.</p>
              <div className="space-y-3 mb-6">
                {[
                  { n: "01", title: "Stress placement", desc: "British English settled on first-syllable stress. American English settled on second-syllable stress." },
                  { n: "02", title: "The 't' plus 'y' sound", desc: "British English merged them into 'ch.' American English commonly dropped the 'y' and kept a clean 't.'" },
                  { n: "03", title: "Vowel reduction", desc: "When a syllable loses stress, its vowel weakens. That's why the first vowel in the American form appears as 'buh,' 'bih,' or 'bye' depending on the dictionary." },
                ].map(({ n, title, desc }) => (
                  <div key={n} className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-4">
                    <span className="text-orange-400 font-black text-lg shrink-0 w-8">{n}</span>
                    <div><strong className="text-white text-base">{title}</strong><p className="text-white/65 text-sm mt-0.5">{desc}</p></div>
                  </div>
                ))}
              </div>
              <p className="text-white/70 text-sm leading-relaxed">The long &ldquo;eye&rdquo; opening in bye-TOO-mun likely comes from English spelling rules: an &ldquo;i&rdquo; followed by one consonant and another vowel is often read long, as in &ldquo;item&rdquo; or &ldquo;biting.&rdquo; Forvo has recordings of bitumen in German, Dutch, and Danish — each language pronounces it by its own rules.</p>
            </section>

            {/* Section: Common Mistakes */}
            <section id="mistakes" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">Common Pronunciation Mistakes</h2>
              <div className="space-y-4 mb-6">
                {[
                  { n: "1", title: "Giving 'men' full strength", desc: "Saying BICH-uh-MEN or buh-TOO-MEN puts weight on the last syllable. The correct ending is a soft 'mun' — short and relaxed." },
                  { n: "2", title: "Cutting the word to 2 syllables", desc: "'BIT-um' is a common error. Bitumen needs all 3 syllables. If you drop the middle one, it can sound like 'bittern' or something else entirely." },
                  { n: "3", title: "Mixing accents", desc: "Starting with British 'BICH' and finishing with American 'TOO' doesn't match either standard. It can sound inconsistent in formal contexts." },
                  { n: "4", title: "Stressing every syllable equally", desc: "'Bit-you-men' with three even beats is a spelling pronunciation. Choose which syllable is strong and make the others short." },
                  { n: "5", title: "Adding sounds at the end", desc: "Some speakers add a hard 't' or stretch the 'n,' making it 'bitument' or 'bituMEEN.' Stop cleanly on the 'n.'" },
                  { n: "6", title: "Stretching the first vowel", desc: "In the British form, the first vowel is short, as in 'bit.' Saying BEE-choo-men changes the word. Keep it quick." },
                  { n: "7", title: "Misspelling it", desc: "The spelling is b-i-t-u-m-e-n. Learners sometimes write 'bitumin.' Remember the 'e' before the final 'n.'" },
                ].map(({ n, title, desc }) => (
                  <div key={n} className="flex items-start gap-4 bg-white/5 border border-orange-400/20 rounded-xl p-4 border-l-4 border-l-orange-400">
                    <span className="text-orange-400 font-black text-base shrink-0 w-6">{n}.</span>
                    <div><strong className="text-white text-base">{title}</strong><p className="text-white/65 text-sm mt-0.5">{desc}</p></div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section: Related Words */}
            <section id="related-words" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">Related Words and Technical Terms</h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                If you work in roads, roofing, or oil, you&apos;ll say more than one word from this family. Understanding how{" "}
                <Link href="/blog/bitumen-grades-explained" className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors font-medium">bitumen grades are classified</Link>{" "}
                helps you say designations like &ldquo;sixty seventy pen&rdquo; or &ldquo;PG sixty-four twenty-two&rdquo; confidently on site.
              </p>
              <h3 className="text-xl font-black text-white mb-3">Words built from bitumen</h3>
              <InfoTable
                headers={["Word", "US respelling", "UK respelling", "Notes"]}
                rows={[
                  ["bituminous", "buh-TOO-muh-nus", "buh-TYOO-mih-nus", "4 syllables, stress on the 2nd"],
                  ["bituminize", "buh-TOO-muh-nize", "buh-TYOO-muh-nize", "Verb: to treat with bitumen"],
                  ["bituminization", "buh-too-muh-nuh-ZAY-shun", "buh-tyoo-mih-nye-ZAY-shun", "Noun: the process"],
                ]}
              />
              <h3 className="text-xl font-black text-white mb-3 mt-8">Terms used with bitumen</h3>
              <InfoTable
                headers={["Term", "Respelling"]}
                rows={[
                  ["asphalt", "AS-fawlt (US) / AS-falt (UK)"],
                  ["aggregate", "AG-rih-git"],
                  ["viscosity", "vis-KOS-ih-tee"],
                  ["penetration", "pen-ih-TRAY-shun"],
                  ["emulsion", "ih-MUL-shun"],
                  ["cutback", "CUT-back"],
                  ["polymer", "POL-ih-mer"],
                  ["membrane", "MEM-brayn"],
                  ["hydrocarbon", "HY-druh-KAR-bun"],
                  ["petroleum", "puh-TROH-lee-um"],
                ]}
              />
              <p className="text-white/70 text-sm leading-relaxed mt-4">Grade names are spoken as numbers: &ldquo;60/70 pen&rdquo; is &ldquo;sixty seventy pen.&rdquo; &ldquo;VG-30&rdquo; is &ldquo;V-G thirty.&rdquo; Modified bitumen — MOD-ih-fide BICH-uh-mun or buh-TOO-mun.</p>
            </section>

            {/* Section: What Bitumen Means */}
            <section id="what-bitumen-means" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">What Bitumen Means</h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">Bitumen is a black, sticky, thick material made of hydrocarbons. Builders use it as a binder in road surfaces and as a waterproofing material on roofs, pipes, and foundations. Most bitumen used in construction is the heavy residue left after crude oil is refined.</p>
              <InfoTable
                headers={["Term", "Meaning", "Where it's common"]}
                rows={[
                  ["Bitumen", "The sticky binder, from crude oil or natural deposits", "UK, Australia, Canada, South Asia, most of the world"],
                  ["Asphalt", "Finished mix of bitumen, stone, and sand (most countries); the binder itself in the US", "Worldwide — meaning varies by region"],
                  ["Tar", "A different material made from coal or wood", "Roofing and older road work"],
                ]}
              />
              <p className="text-white/80 leading-relaxed text-base">
                Tar and bitumen look alike but behave differently. In the US, the binder is often called &ldquo;asphalt cement,&rdquo; which is why Americans say &ldquo;asphalt&rdquo; where others say &ldquo;bitumen.&rdquo; Our{" "}
                <Link href="/blog/asphalt-vs-bitumen" className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors font-medium">asphalt vs bitumen comparison guide</Link>{" "}
                breaks down exactly when each term applies and where the regional terminology diverges.
              </p>
            </section>

            {/* Section: Which to Use */}
            <section id="which-to-use" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">Which Pronunciation Should You Use?</h2>
              {/* IMAGE 6: Before this section */}
              <SectionImage src="/bitumen-pronunciation-construction-jobsite.jpg" alt="Bitumen pronunciation on a construction job site — contractor and engineer discussing paving materials where either British or American pronunciation is used naturally" caption="On any international job site, both BICH-uh-mun and buh-TOO-mun are understood — consistency matters more than which form you choose" />
              <p className="text-white/80 leading-relaxed mb-5 text-base">Use the form that matches the people around you.</p>
              <div className="space-y-3 mb-6">
                {[
                  { cond: "British English or British-trained colleagues", use: "BICH-uh-mun" },
                  { cond: "American English or US clients", use: "buh-TOO-mun" },
                  { cond: "a British or American exam standard", use: "The form that matches your exam specification" },
                  { cond: "Australia", use: "Listen to your colleagues — both BICH-uh-mun and BIT-yuh-mun are normal" },
                ].map(({ cond, use }) => (
                  <div key={cond} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
                    <CheckCircle2 size={15} className="text-teal-400 mt-0.5 shrink-0" />
                    <span className="text-white/80 text-sm"><strong className="text-white">If you use {cond}:</strong> {use}</span>
                  </div>
                ))}
              </div>
              <div className="bg-gradient-to-br from-teal-500/10 to-violet-600/10 border border-teal-400/20 rounded-xl p-5">
                <p className="text-white/80 text-sm leading-relaxed">Engineers, contractors, and suppliers hear all of these versions every week. <strong className="text-white">Consistency is what stands out.</strong> If you switch accents in the middle of a word, people notice.</p>
              </div>
            </section>

            {/* Section: Practice */}
            <section id="practice" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">A 10-Minute Practice Routine</h2>
              <div className="space-y-4 mb-6">
                {[
                  { day: "Day 1", title: "Listen and repeat", steps: ["Pick British or American English.", "Open a dictionary recording (Cambridge, Oxford, or Merriam-Webster) and listen 3 times without speaking.", "Tap the table every time you hear the stressed syllable.", "Say the word slowly 5 times, then at normal speed 5 times."] },
                  { day: "Day 2", title: "Build the word in parts", steps: ["British: BICH \u2192 BICH-uh \u2192 BICH-uh-mun", "American: TOO \u2192 buh-TOO \u2192 buh-TOO-mun", "The last two syllables of buh-TYOO-mun rhyme with 'human.' Say 'human' first and add 'buh' at the front."] },
                  { day: "Day 3", title: "Use it in sentences", steps: ["The crew heated the bitumen before mixing it with stone.", "The roof membrane contains polymer-modified bitumen.", "The specification lists the required bitumen grade.", "Canadian oil sands hold large deposits of natural bitumen.", "The contractor ordered enough bitumen for the whole driveway.", "Bituminous coal burns differently from bitumen."] },
                  { day: "Day 4", title: "Use it in real situations", steps: ["Try: 'We're waiting on the bitumen delivery. It should arrive Thursday.'", "Say it in a phone call, a class discussion, or a team meeting.", "Record yourself and compare to the dictionary audio. Check: same syllable stressed? Last syllable short? One accent throughout?"] },
                ].map(({ day, title, steps }) => (
                  <div key={day} className="bg-white/5 border border-white/10 rounded-xl p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-violet-400 font-black text-sm bg-violet-400/10 px-3 py-1 rounded-full">{day}</span>
                      <h3 className="text-white font-bold text-base">{title}</h3>
                    </div>
                    <ul className="space-y-1.5">
                      {steps.map((s, i) => <li key={i} className="flex items-start gap-2 text-white/70 text-sm"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0" />{s}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3"><Mic size={15} className="text-teal-400" /><h3 className="text-white font-bold text-base">Practice tools</h3></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { tool: "Cambridge & Oxford Dictionaries", note: "UK and US audio recordings on every word page" },
                    { tool: "Forvo", note: "Native speaker recordings including an Australian bitumen recording" },
                    { tool: "ELSA Speak", note: "Scores your pronunciation and highlights weak sounds" },
                    { tool: "Your phone's voice recorder", note: "Free and the easiest way to hear yourself speak" },
                  ].map(({ tool, note }) => <div key={tool} className="text-sm"><strong className="text-white">{tool}</strong><p className="text-white/55 mt-0.5">{note}</p></div>)}
                </div>
              </div>
            </section>

            {/* Section: Conclusion */}
            <section id="conclusion" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">Conclusion</h2>
              <div className="bg-gradient-to-br from-violet-500/15 via-teal-600/10 to-orange-600/10 border border-white/15 rounded-2xl p-6 md:p-8">
                <p className="text-white/85 leading-relaxed mb-4 text-base">British English says <strong className="text-white">BICH-uh-mun</strong>, sometimes <strong className="text-white">BIT-yuh-mun</strong>, with the beat on the first syllable. American English says <strong className="text-white">buh-TOO-mun</strong>, <strong className="text-white">bye-TOO-mun</strong>, or <strong className="text-white">bih-TOO-mun</strong>, with the beat on the second. Australians commonly use a British-type form.</p>
                <p className="text-white/85 leading-relaxed mb-4 text-base">Whichever form you choose, keep the unstressed vowels short, end with a soft &ldquo;mun,&rdquo; and use one accent from start to finish.</p>
                <p className="text-white/85 leading-relaxed text-base">
                  Once you can say it confidently, the next step is understanding what it does in construction. Our{" "}
                  <Link href="/blog/bitumen-emulsion-explained" className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors font-medium">bitumen emulsion guide</Link>{" "}
                  explains how the binder is turned into a cold-applied water-based form. You can also use the{" "}
                  <Link href="/" className="text-orange-400 hover:text-orange-300 font-semibold underline underline-offset-2 transition-colors">free bitumen quantity calculator</Link>{" "}
                  to see just how much of the material a typical road project actually needs.
                </p>
              </div>
            </section>

            {/* Section: FAQ */}
            <section id="faq" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-6 border-l-4 border-teal-400 pl-4">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  { q: "How many syllables does bitumen have?", a: "It has 3 syllables: bi-tu-men. The stress falls on the first syllable in British English and the second in American English." },
                  { q: "Is the 't' in bitumen silent?", a: "No. In American English it's a clear 't.' In British English it blends with the next sound and becomes 'ch,' as in BICH-uh-mun." },
                  { q: "What is the British pronunciation of bitumen?", a: "The common British form is BICH-uh-mun (/\u02c8b\u026at\u0283.\u0259.m\u0259n/). Another British form is BIT-yuh-mun (/\u02c8b\u026atj\u028am\u0259n/)." },
                  { q: "What is the American pronunciation of bitumen?", a: "Usually buh-TOO-mun, bye-TOO-mun, or bih-TOO-mun. The second syllable takes the stress in every American form." },
                  { q: "How do Australians say bitumen?", a: "Most use a British-type form with first-syllable stress. Both BICH-uh-mun and BIT-yuh-mun are common." },
                  { q: "Is 'bit-you-men' wrong?", a: "It's close to the BIT-yuh-mun form when the last two syllables are kept weak. Saying all three with equal force sounds unnatural — choose one syllable to stress." },
                  { q: "How do you pronounce bituminous?", a: "It's buh-TOO-muh-nus in American English and buh-TYOO-mih-nus in British English. 4 syllables, stress on the second." },
                  { q: "Does bitumen rhyme with anything?", a: "The American buh-TYOO-mun rhymes with 'human' in its last two syllables. Merriam-Webster also includes 'acumen' and 'cumin.'" },
                  { q: "Is bitumen the same as asphalt?", a: "In the US, often yes. In most other countries, bitumen is the binder and asphalt is the finished mix of bitumen, stone, and sand." },
                  { q: "Is bitumen the same as tar?", a: "No. Tar is made from coal or wood. Bitumen comes from petroleum or natural deposits." },
                  { q: "What does bitumen mean in Australia?", a: "It names the material, and in everyday speech it also refers to a sealed road surface — 'a kilometre of bitumen' means a stretch of paved road." },
                ].map(({ q, a }, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5 md:p-6 transition-colors hover:bg-white/[0.08]">
                    <h3 className="text-lg font-bold text-white mb-2 leading-snug">{q}</h3>
                    <p className="text-white/70 text-sm leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Navigation */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
              <Link href="/blog" className="inline-flex items-center gap-2 text-white/60 hover:text-white font-semibold text-sm transition-colors group">
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />Back to Blog
              </Link>
              <Link href="/" className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500 to-violet-600 hover:from-violet-400 hover:to-violet-500 text-white px-6 py-3 rounded-full font-bold text-sm transition-all shadow-[0_0_20px_rgba(139,92,246,0.35)] hover:shadow-[0_0_30px_rgba(139,92,246,0.55)]">
                Try the Bitumen Calculator<ArrowRight size={15} />
              </Link>
            </div>
            <AuthorBio />
          </article>

          {/* SIDEBAR */}
          <aside className="xl:w-80 shrink-0 space-y-6 xl:sticky xl:top-24 self-start">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4"><Volume2 size={16} className="text-violet-400" /><h2 className="text-white font-black text-sm uppercase tracking-wider">Quick Reference</h2></div>
              <div className="space-y-3">
                {[
                  { accent: "British", form: "BICH-uh-mun", ipa: "/\u02c8b\u026at\u0283.\u0259.m\u0259n/", stress: "1st syllable" },
                  { accent: "British (alt)", form: "BIT-yuh-mun", ipa: "/\u02c8b\u026atj\u028am\u0259n/", stress: "1st syllable" },
                  { accent: "American", form: "buh-TOO-mun", ipa: "/b\u0259\u02c8tju\u02d0m\u0259n/", stress: "2nd syllable" },
                  { accent: "Australian", form: "BICH-uh-mun", ipa: "/\u02c8b\u026at\u0283.\u0259.m\u0259n/", stress: "1st syllable" },
                ].map(({ accent, form, ipa, stress }) => (
                  <div key={accent} className="bg-white/5 rounded-xl p-3 border border-white/5">
                    <div className="text-white/50 text-xs mb-1">{accent}</div>
                    <div className="text-white font-bold text-sm">{form}</div>
                    <div className="text-violet-300 font-mono text-xs">{ipa}</div>
                    <div className="text-white/40 text-xs mt-0.5">Stress: {stress}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h2 className="text-white font-black text-sm uppercase tracking-wider mb-4">Related Articles</h2>
              <div className="space-y-3">
                {[
                  { href: "/blog/what-is-bitumen", title: "What Is Bitumen?", desc: "Chemistry, uses, and properties" },
                  { href: "/blog/asphalt-vs-bitumen", title: "Asphalt vs Bitumen", desc: "Full comparison guide" },
                  { href: "/blog/bitumen-grades-explained", title: "Bitumen Grades Explained", desc: "60/70, VG, PG systems" },
                  { href: "/blog/bitumen-emulsion-explained", title: "Bitumen Emulsion", desc: "Cold-applied binder types" },
                  { href: "/blog/how-to-remove-bitumen", title: "How to Remove Bitumen", desc: "Safe removal from all surfaces" },
                ].map(({ href, title, desc }) => (
                  <Link key={href} href={href} className="flex items-start gap-3 group hover:bg-white/5 rounded-xl p-2 -mx-2 transition-colors">
                    <ArrowRight size={14} className="text-violet-400 mt-0.5 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                    <div><div className="text-white/90 text-sm font-semibold group-hover:text-white transition-colors">{title}</div><div className="text-white/45 text-xs">{desc}</div></div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-violet-500/20 to-teal-600/20 border border-violet-400/20 rounded-2xl p-6">
              <h2 className="text-white font-black text-base mb-2">Plan Your Next Project</h2>
              <p className="text-white/65 text-sm leading-relaxed mb-4">Now that you can say it confidently — estimate how much bitumen your project actually needs.</p>
              <Link href="/" className="inline-flex items-center gap-2 bg-violet-500 hover:bg-violet-400 text-white px-4 py-2.5 rounded-full font-bold text-sm transition-all w-full justify-center">
                Open Calculator <ArrowRight size={14} />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
