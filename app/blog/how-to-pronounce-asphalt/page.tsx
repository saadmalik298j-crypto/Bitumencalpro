import AuthorBio from "../../components/AuthorBio";
// app/blog/how-to-pronounce-asphalt/page.tsx
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
  ExternalLink,
  Mic,
  Volume2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "How to Pronounce Asphalt: Say It Right, Spell It Right",
  description:
    "How to pronounce asphalt: say AS-fawlt. Syllable stress, Canadian ASH-falt vs British AS-falt, spelling tricks, origin, and road vocabulary guide.",
  keywords: [
    "how to pronounce asphalt",
    "how do you say asphalt",
    "how to spell asphalt",
    "asphalt pronunciation",
    "ash-falt pronunciation",
    "asphalt syllables",
    "asphalt vs bitumen pronunciation",
    "asphalt pronunciation guide",
  ],
  alternates: {
    canonical: "https://bitumencalcpro.com/blog/how-to-pronounce-asphalt",
  },
  openGraph: {
    title:
      "How to Pronounce Asphalt: Say It Right, Spell It Right | BitumenCalcPro",
    description:
      "How to pronounce asphalt: say AS-fawlt. Syllable stress, Canadian ASH-falt vs British AS-falt, spelling tricks, origin, and road vocabulary guide.",
    url: "https://bitumencalcpro.com/blog/how-to-pronounce-asphalt",
    siteName: "BitumenCalcPro",
    type: "article",
    publishedTime: "2026-10-11T00:00:00.000Z",
    authors: ["BitumenCalcPro"],
    images: [
      {
        url: "/how-to-pronounce-asphalt.webp",
        width: 1200,
        height: 675,
        alt: "How to pronounce asphalt — guide illustrating AS-fawlt syllable breakdown with phonetic sound wave and speaker icon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Pronounce Asphalt: Say It Right, Spell It Right",
    description:
      "How to pronounce asphalt: say AS-fawlt. Syllable stress, Canadian ASH-falt vs British AS-falt, spelling tricks, and road vocabulary.",
    images: ["/how-to-pronounce-asphalt.webp"],
  },
  robots: {
    "max-image-preview": "large",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Pronounce Asphalt: Say It Right, Spell It Right",
  description:
    "How to pronounce asphalt: say AS-fawlt. Two syllables, stress on the first, 'ph' as 'f', and second syllable rhyming with 'salt'. Complete regional guide and spelling rules.",
  image: "https://bitumencalcpro.com/how-to-pronounce-asphalt.webp",
  datePublished: "2026-10-11T00:00:00.000Z",
  dateModified: "2026-10-11T00:00:00.000Z",
  author: {
    "@type": "Person",
    name: "Nabeel Awan",
    url: "https://bitumencalcpro.com/about-us",
    image:
      "https://bitumencalcpro.com/nabeel-awan-bitumencalcpro-founder.webp",
  },
  publisher: {
    "@type": "Organization",
    name: "BitumenCalcPro",
    url: "https://bitumencalcpro.com",
    logo: {
      "@type": "ImageObject",
      url: "https://bitumencalcpro.com/logo.png",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://bitumencalcpro.com/blog/how-to-pronounce-asphalt",
  },
  keywords:
    "how to pronounce asphalt, how do you say asphalt, how to spell asphalt, asphalt pronunciation, ash-falt, asphalt syllables",
  articleSection: "Asphalt & Paving Materials",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do you say asphalt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Say AS-fawlt. It has two syllables, the stress is on the first, and the second rhymes with 'salt.'",
      },
    },
    {
      "@type": "Question",
      name: "Is 'ash-falt' an incorrect pronunciation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Dictionaries list it as an accepted variant. Many Canadians use it every day, and printed spellings suggest it has been around for over a century.",
      },
    },
    {
      "@type": "Question",
      name: "How many syllables are in asphalt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Two: as-phalt.",
      },
    },
    {
      "@type": "Question",
      name: "Is the 'ph' in asphalt silent?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. It makes an 'f' sound. Only the 'p' is not heard separately.",
      },
    },
    {
      "@type": "Question",
      name: "Why is asphalt spelled with 'ph'?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The word came from Greek through Latin. Greek phi became 'ph' in Latin, and English kept the spelling.",
      },
    },
    {
      "@type": "Question",
      name: "How do you spell asphalt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "a-s-p-h-a-l-t. Common misspellings include 'asfalt,' 'ashpalt,' 'asphault,' and 'aspalt.'",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between asphalt and bitumen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bitumen is the black, sticky binder. In most countries, asphalt is the paving mix made from bitumen plus stone, gravel, and sand. In the United States, 'asphalt' can mean either one.",
      },
    },
    {
      "@type": "Question",
      name: "Is tarmac the same as asphalt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tarmac is a common British and Irish word for an asphalt road surface. It comes from 'tar macadam.'",
      },
    },
    {
      "@type": "Question",
      name: "Does the verb 'to asphalt' sound different?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. It is pronounced AS-fawlt in the same way as the noun.",
      },
    },
    {
      "@type": "Question",
      name: "How do you pronounce asphaltic?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Say as-FAWL-tik. The stress moves to the second syllable.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://bitumencalcpro.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://bitumencalcpro.com/blog",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "How to Pronounce Asphalt",
      item: "https://bitumencalcpro.com/blog/how-to-pronounce-asphalt",
    },
  ],
};

function SectionImage({
  src,
  alt,
  caption,
  priority,
}: {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
}) {
  return (
    <figure className="my-8 sm:my-10 w-[calc(100vw-32px)] max-w-full lg:w-full overflow-hidden not-prose">
      <div className="relative w-full max-w-full rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 shadow-xl sm:shadow-2xl bg-black/20">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={675}
          className="w-full max-w-full h-auto object-contain sm:object-cover"
          style={{ maxWidth: "100%", height: "auto", display: "block" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 75vw, 900px"
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : undefined}
          priority={priority}
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-white/45 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

function InfoTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="my-6 sm:my-8 -mx-4 sm:mx-0 overflow-x-auto not-prose sm:rounded-xl border-y sm:border border-white/10 shadow-lg">
      <table className="w-full min-w-[320px] text-sm">
        <thead>
          <tr className="bg-orange-600/30 border-b border-white/10">
            {headers.map((h) => (
              <th
                key={h}
                className="text-left px-3 py-2.5 sm:px-5 sm:py-3.5 text-white font-bold text-xs uppercase tracking-wider"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={`border-b border-white/5 ${
                i % 2 === 0 ? "bg-white/5" : "bg-white/[0.02]"
              } hover:bg-white/10 transition-colors`}
            >
              {row.map((cell, j) => (
                <td
                  key={j}
                  className="px-3 py-2 sm:px-5 sm:py-3 text-white/80 leading-relaxed text-xs sm:text-sm"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function StepCard({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 mb-6">
      <div className="shrink-0 w-9 h-9 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-black text-sm shadow-[0_0_14px_rgba(249,115,22,0.4)]">
        {number}
      </div>
      <div className="flex-1 pt-1">
        <h3 className="text-white font-bold text-base mb-2">{title}</h3>
        <div className="text-white/75 text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

export default function HowToPronounceAsphaltPage() {
  return (
    <>
      <Script
        id="schema-article"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="schema-faq"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="schema-breadcrumb"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ── HERO BAND ── */}
      <div className="relative pt-16 pb-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-teal-600/10 pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-orange-500/10 blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center flex-wrap gap-1.5 text-sm text-white/55 mb-8"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight size={13} />
            <Link href="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
            <ChevronRight size={13} />
            <span className="text-white/90 font-medium">
              How to Pronounce Asphalt
            </span>
          </nav>

          {/* Category badge */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="inline-flex items-center gap-1.5 bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
              <Mic size={12} />
              Pavement Terminology
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-6 max-w-4xl">
            How to Pronounce Asphalt: Say It Right, Spell It Right
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-white/50 text-sm mb-10">
            <span className="flex items-center gap-1.5">
              <Calendar size={13} />
              <time dateTime="2026-10-11">October 11, 2026</time>
            </span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="flex items-center gap-1.5">
              <Clock size={13} />
              11 min read
            </span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="text-white/50">By BitumenCalcPro</span>
          </div>
        </div>
      </div>

      {/* ── FEATURED IMAGE — Below H1 ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionImage
          src="/how-to-pronounce-asphalt.webp"
          alt="How to pronounce asphalt — guide illustrating AS-fawlt syllable breakdown with phonetic sound wave and speaker icon"
          caption="How to pronounce asphalt correctly: say AS-fawlt with primary stress on the first syllable and the Greek 'ph' sounding like 'f'"
          priority
        />
      </div>

      {/* ── ARTICLE BODY ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24">
        <div className="flex flex-col xl:flex-row gap-12 items-start">
          <article className="flex-1 min-w-0">

            {/* Quick Answer */}
            <div className="mb-10 bg-gradient-to-br from-orange-500/15 to-orange-600/10 border border-orange-400/25 rounded-2xl p-6 md:p-8">
              <h2 className="text-lg font-black text-orange-300 mb-3 flex items-center gap-2">
                <CheckCircle2 size={18} />
                Quick Answer
              </h2>
              <p className="text-white/85 leading-relaxed text-base">
                How to pronounce asphalt: say <strong className="text-white">AS-fawlt</strong>. It has two syllables, and the stress lands on the first. The &ldquo;ph&rdquo; sounds like &ldquo;f,&rdquo; and the last syllable rhymes with &ldquo;salt.&rdquo; Many Canadians say <strong className="text-white">ASH-falt</strong>, and dictionaries accept that version too. British speakers often say <strong className="text-white">AS-falt</strong>, with a shorter second vowel. The spelling is <strong className="text-white">a-s-p-h-a-l-t</strong>.
              </p>
            </div>

            {/* Table of Contents */}
            <div className="mb-10 bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="text-white font-black text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
                <BookOpen size={14} className="text-teal-400" />
                Table of Contents
              </div>
              <nav className="space-y-1">
                {[
                  { id: "step-by-step", label: "How to Pronounce Asphalt, Step by Step" },
                  { id: "dictionary-symbols", label: "Reading the Dictionary Symbols" },
                  { id: "regional-pronunciation", label: "Asphalt Pronunciation by Region" },
                  { id: "why-ashfalt-exists", label: "Why Does 'Ash-falt' Exist?" },
                  { id: "how-to-spell", label: "How to Spell Asphalt" },
                  { id: "word-origins", label: "Where the Word Asphalt Comes From" },
                  { id: "related-words", label: "Words Related to Asphalt and How to Say Them" },
                  { id: "construction-terms", label: "Construction Terms That Travel With Asphalt" },
                  { id: "materials-comparison", label: "Asphalt, Bitumen, Tar, and Concrete: What Each Word Means" },
                  { id: "common-mistakes", label: "Common Pronunciation Mistakes" },
                  { id: "learner-tips", label: "Tips for Learners and Non-Native Speakers" },
                  { id: "which-to-use", label: "Which Pronunciation Should You Use?" },
                  { id: "conclusion", label: "Conclusion" },
                  { id: "faq", label: "FAQ" },
                ].map(({ id, label }) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    className="block text-white/55 hover:text-teal-400 text-xs leading-relaxed py-1 px-2 rounded-lg hover:bg-white/5 transition-all"
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Intro */}
            <section className="mb-12">
              <p className="text-white/85 leading-relaxed mb-4 text-base">
                You&apos;ve read the word a hundred times, and then someone hands you a microphone. Is it AS-fawlt, ASH-falt, or something else?
              </p>
              <p className="text-white/85 leading-relaxed mb-4 text-base">
                If you searched <em>how do you say asphalt</em> or <em>how to spell asphalt</em>, you&apos;ll find both answers here, along with the reasons the word gets said three different ways. This guide covers the standard pronunciation, regional versions, spelling tricks, the history behind the &ldquo;ph,&rdquo; and how to pronounce the related words you meet in road work, such as{" "}
                <Link
                  href="/blog/what-is-bitumen"
                  className="text-teal-400 hover:text-orange-300 font-semibold underline underline-offset-2 transition-colors"
                >
                  bitumen
                </Link>
                , tarmac, and macadam. You&apos;ll also get practice sentences and clear rules for which version to use in which situation.
              </p>
            </section>

            {/* Step by Step */}
            <section id="step-by-step" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                How to Pronounce Asphalt, Step by Step
              </h2>
              <p className="text-white/80 leading-relaxed mb-6 text-base">
                Take the word one piece at a time.
              </p>

              <StepCard number={1} title="Start with 'AS'">
                Use the short &ldquo;a&rdquo; from &ldquo;as&rdquo; or &ldquo;ask.&rdquo; Your mouth stays fairly open, and the sound is quick.
              </StepCard>

              <StepCard number={2} title="Move straight into 'F'">
                The letters &ldquo;ph&rdquo; make an &ldquo;f&rdquo; sound, the same as in &ldquo;phone&rdquo; and &ldquo;photo.&rdquo; You don&apos;t say a separate &ldquo;p&rdquo; or a separate &ldquo;h.&rdquo;
              </StepCard>

              <StepCard number={3} title="Finish with 'AWLT'">
                This part rhymes with &ldquo;fault,&rdquo; &ldquo;salt,&rdquo; and &ldquo;halt.&rdquo; Close it with a clean &ldquo;t.&rdquo;
              </StepCard>

              <StepCard number={4} title="Stress the first syllable">
                Press a little harder on &ldquo;AS&rdquo; than on &ldquo;fawlt.&rdquo; Say AS-fawlt, not as-FAWLT.
              </StepCard>

              <p className="text-white/80 leading-relaxed mb-4 text-base">
                Say it slowly three times, then at normal speed. The whole word takes about a second.
              </p>
              <p className="text-white/80 leading-relaxed text-base">
                If you want a rhyme check, &ldquo;fawlt&rdquo; sounds the same as the end of &ldquo;default&rdquo; and &ldquo;assault.&rdquo; The first half, &ldquo;AS,&rdquo; is the same as the word &ldquo;as.&rdquo;
              </p>
            </section>

            {/* Reading Dictionary Symbols */}
            <section id="dictionary-symbols" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Reading the Dictionary Symbols
              </h2>
              <p className="text-white/80 leading-relaxed mb-4 text-base">
                Dictionaries write pronunciation in special symbols, and they can look confusing. Here is how to read them for asphalt.
              </p>
              <ul className="space-y-3 mb-6 list-disc list-inside text-white/80 text-base leading-relaxed pl-2">
                <li>
                  <strong className="text-white">/ˈæs.fɔlt/</strong> is the common American transcription. The small mark before the first syllable shows where the stress goes. The symbol &ldquo;æ&rdquo; is the short &ldquo;a&rdquo; in &ldquo;cat.&rdquo; The symbol &ldquo;ɔ&rdquo; is the &ldquo;aw&rdquo; in &ldquo;law.&rdquo; So you read it as AS-fawlt.
                </li>
                <li>
                  <strong className="text-white">Merriam-Webster respelling:</strong> ˈas-ˌfȯlt. The ȯ symbol is the same &ldquo;aw&rdquo; sound. You can check the native sound recording on the{" "}
                  <a
                    href="https://www.merriam-webster.com/dictionary/asphalt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-400 hover:text-orange-300 font-semibold underline underline-offset-2 transition-colors"
                  >
                    Merriam-Webster asphalt dictionary entry <ExternalLink size={12} className="inline ml-0.5 mb-0.5" />
                  </a>.
                </li>
                <li>
                  <strong className="text-white">British transcription:</strong> often written with a shorter vowel in the second syllable, close to AS-falt, as listed in the{" "}
                  <a
                    href="https://dictionary.cambridge.org/dictionary/english/asphalt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-400 hover:text-orange-300 font-semibold underline underline-offset-2 transition-colors"
                  >
                    Cambridge Dictionary <ExternalLink size={12} className="inline ml-0.5 mb-0.5" />
                  </a>.
                </li>
              </ul>
              <p className="text-white/80 leading-relaxed text-base">
                You don&apos;t need to memorize any of these. The respelling AS-fawlt is enough for everyday use, and it matches what most dictionary audio clips play.
              </p>
            </section>

            {/* Asphalt Pronunciation by Region */}
            <section id="regional-pronunciation" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                Asphalt Pronunciation by Region
              </h2>
              <p className="text-white/80 leading-relaxed mb-4 text-base">
                The word has one spelling and a few common sounds. This table shows the main versions.
              </p>

              <InfoTable
                headers={["Region or accent", "Common sound", "What changes"]}
                rows={[
                  ["General American", "AS-fawlt", "Long 'aw' in the second syllable"],
                  ["British English", "AS-falt", "Shorter vowel in the second syllable"],
                  ["Canadian (very common in Ontario and the Great Lakes area)", "ASH-falt", "The first syllable starts with 'sh'"],
                ]}
              />

              {/* IMAGE 2: After regional pronunciation table */}
              <SectionImage
                src="/asphalt-pronunciation-by-region.webp"
                alt="Asphalt pronunciation by region map showing General American AS-fawlt, British AS-falt, and Canadian ASH-falt"
                caption="Pronunciation map: General American uses AS-fawlt, British English uses AS-falt, and Canadian English widely accepts ASH-falt"
              />

              <p className="text-white/80 leading-relaxed mb-4 text-base">
                Merriam-Webster lists AS-fawlt as the main pronunciation. It also records &ldquo;ash&rdquo; as an accepted alternative and describes the British ending as an especially British form. That means all three versions have dictionary support.
              </p>
              <p className="text-white/80 leading-relaxed mb-4 text-base">
                Many Canadians say ASH-falt, including engineers and road crews. An engineer who moved to Canada once asked an engineering forum about it after hearing &ldquo;ash-falt&rdquo; on a work site. Replies from people in that field said the pronunciation is common around the northern Great Lakes and in Canada. Several mentioned that colleagues with advanced degrees in the field say it that way too.
              </p>
              <p className="text-white/80 leading-relaxed text-base">
                So the &ldquo;ash&rdquo; version belongs to educated, professional speech in those places. It is not a mistake or a sign of an uneducated speaker.
              </p>
            </section>

            {/* Why Does Ash-falt Exist */}
            <section id="why-ashfalt-exists" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Why Does &ldquo;Ash-falt&rdquo; Exist?
              </h2>
              <p className="text-white/80 leading-relaxed mb-4 text-base">
                Nobody has a settled answer, and I won&apos;t pretend there is one. What the record shows is that the &ldquo;ash&rdquo; version is old.
              </p>
              <p className="text-white/80 leading-relaxed mb-4 text-base">
                A linguist posting to the American Dialect Society mailing list pointed to printed spellings of &ldquo;ashpalt&rdquo; from 1900 and 1907. The playwright Eugene O&apos;Neill also wrote it as &ldquo;ashpalt&rdquo; in a 1918 script. A comic song from the late 1800s or early 1900s used a similar spelling too.
              </p>
              <p className="text-white/80 leading-relaxed mb-4 text-base">
                Those spellings suggest people were saying &ldquo;ash&rdquo; more than a hundred years ago. The same discussion noted that the pronunciation is not limited to Canada. Speakers in other places use it as well, and one forum poster said it is common in South Africa.
              </p>
              <p className="text-white/80 leading-relaxed text-base">
                The practical takeaway: if you hear ASH-falt, nobody is confused. It&apos;s a regional habit with a long history.
              </p>
            </section>

            {/* How to Spell Asphalt */}
            <section id="how-to-spell" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                How to Spell Asphalt
              </h2>
              <p className="text-white/80 leading-relaxed mb-4 text-base">
                The spelling is a-s-p-h-a-l-t. That&apos;s 7 letters across 2 syllables: as-phalt.
              </p>
              <p className="text-white/80 leading-relaxed mb-4 text-base">
                The hard part is the &ldquo;ph&rdquo; in the middle. Many people want to write an &ldquo;f&rdquo; because that&apos;s what they hear. English uses &ldquo;ph&rdquo; for the &ldquo;f&rdquo; sound in words that came from Greek, and asphalt is one of them.
              </p>
              <p className="text-white/80 leading-relaxed mb-2 text-base font-semibold">
                Here are the spellings people type by mistake:
              </p>
              <ul className="space-y-2 mb-6 list-disc list-inside text-white/80 text-base leading-relaxed pl-2">
                <li><strong className="text-red-400">asfalt</strong> (the &ldquo;f&rdquo; replaces &ldquo;ph&rdquo;)</li>
                <li><strong className="text-red-400">ashpalt</strong> (the letters swap places after &ldquo;as&rdquo;)</li>
                <li><strong className="text-red-400">asphault</strong> (an extra &ldquo;u,&rdquo; copied from &ldquo;fault&rdquo;)</li>
                <li><strong className="text-red-400">aspalt</strong> (the &ldquo;h&rdquo; goes missing)</li>
              </ul>

              {/* IMAGE 3: After common misspellings */}
              <SectionImage
                src="/how-to-spell-asphalt-correctly.webp"
                alt="How to spell asphalt correctly — letter breakdown and mnemonic tricks"
                caption="Orthography guide: a-s-p-h-a-l-t with Greek 'ph' producing the single /f/ sound"
              />

              <div className="border-l-4 border-orange-400 pl-5 my-5 not-prose">
                <p className="font-bold text-white mb-1">Two memory tricks can help:</p>
                <div className="text-white/70 text-sm leading-relaxed space-y-2">
                  <p>
                    <strong className="text-white">1. Split it as &ldquo;asp&rdquo; + &ldquo;halt.&rdquo;</strong> An asp is a snake, and &ldquo;halt&rdquo; means stop. The word sits together as asp-halt.
                  </p>
                  <p>
                    <strong className="text-white">2. Link the &ldquo;ph&rdquo; to other Greek-origin words.</strong> Phone, photo, pharmacy, and phase all use &ldquo;ph&rdquo; for the same &ldquo;f&rdquo; sound.
                  </p>
                </div>
              </div>

              <p className="text-white/80 leading-relaxed mb-4 text-base">
                If you write for a living, set your spellchecker to flag &ldquo;asphault.&rdquo; It&apos;s the most common slip because &ldquo;fault&rdquo; is a word people already know.
              </p>
              <p className="text-white/80 leading-relaxed text-base">
                The word is spelled the same in British, American, and Canadian English. Some other languages spell it differently or use a different word, but in English there is one form.
              </p>
            </section>

            {/* Where the Word Asphalt Comes From */}
            <section id="word-origins" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Where the Word Asphalt Comes From
              </h2>
              <p className="text-white/80 leading-relaxed mb-4 text-base">
                Asphalt came into English through Medieval Latin <em>asphaltus</em>, which came from Greek <em>asphaltos</em>. The first known English use is from the 14th century, according to Merriam-Webster.
              </p>
              <p className="text-white/80 leading-relaxed mb-4 text-base">
                The earliest meaning was the natural black pitch that seeps out of the ground in some parts of the world, especially around the Middle East. That is a long way from a modern paving crew, but the material is closely related. Today most asphalt binder comes from refining crude oil.
              </p>

              {/* IMAGE 4: Word origins */}
              <SectionImage
                src="/asphalt-word-origin-natural-bitumen.webp"
                alt="Origin of asphalt word from natural bitumen pitch to modern paving"
                caption="Etymological progression: from ancient Greek 'asphaltos' pitch to refined petroleum asphalt binders"
              />

              <p className="text-white/80 leading-relaxed mb-4 text-base">
                One explanation links the Greek word to a prefix meaning &ldquo;not&rdquo; and a verb meaning &ldquo;to cause to fall,&rdquo; because the sticky material was used to hold walls together. Sources describe this origin as a possibility, so treat it as a theory.
              </p>
              <p className="text-white/80 leading-relaxed text-base">
                The Greek spelling also explains the &ldquo;ph.&rdquo; The letter phi became &ldquo;ph&rdquo; in Latin, and English kept it.
              </p>
            </section>

            {/* Words Related to Asphalt and How to Say Them */}
            <section id="related-words" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                Words Related to Asphalt and How to Say Them
              </h2>
              <p className="text-white/80 leading-relaxed mb-4 text-base">
                Once you know the main word, the family is easy.
              </p>

              <InfoTable
                headers={["Word", "How to say it", "Meaning"]}
                rows={[
                  ["Asphalt (verb)", "AS-fawlt", "To cover a surface with asphalt"],
                  ["Asphalted", "AS-fawl-ted", "Past tense of the verb"],
                  ["Asphalting", "AS-fawl-ting", "The act of paving with asphalt"],
                  ["Asphaltic", "as-FAWL-tik", "Relating to asphalt (stress shifts to the second syllable)"],
                  ["Asphaltum", "as-FAWL-tum", "A less common name for natural asphalt"],
                  ["Asphalt plant", "AS-fawlt plant", "A facility that makes asphalt mix"],
                ]}
              />

              <p className="text-white/80 leading-relaxed text-base">
                Notice that the stress moves in &ldquo;asphaltic&rdquo; and &ldquo;asphaltum.&rdquo; That is normal in English. When you add an ending, the stress often shifts.
              </p>
            </section>

            {/* Construction Terms That Travel With Asphalt */}
            <section id="construction-terms" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Construction Terms That Travel With Asphalt
              </h2>
              <p className="text-white/80 leading-relaxed mb-4 text-base">
                If you work around roads, you&apos;ll say these words next to asphalt every day.
              </p>

              {/* IMAGE 5: Before construction terminology */}
              <SectionImage
                src="/asphalt-road-construction-vocabulary.webp"
                alt="Asphalt road construction vocabulary showing layers, wearing course, tack coat, and aggregate"
                caption="Road terminology: how aggregate, tack coats, wearing courses, and binders fit together in paving"
              />

              <div className="space-y-4 mb-6">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <h3 className="text-white font-bold text-base mb-1">
                    Bitumen: buh-TOO-men / BIT-yoo-men
                  </h3>
                  <p className="text-white/75 text-sm leading-relaxed">
                    American dictionaries give buh-TOO-men. British English commonly says BIT-yoo-men or BICH-uh-men. All three are in use, so match the people around you. For a complete guide, read{" "}
                    <Link
                      href="/blog/how-to-pronounce-bitumen"
                      className="text-teal-400 hover:text-orange-300 font-semibold underline underline-offset-2 transition-colors"
                    >
                      how to pronounce bitumen
                    </Link>.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <h3 className="text-white font-bold text-base mb-1">
                    Tarmac: TAR-mak
                  </h3>
                  <p className="text-white/75 text-sm leading-relaxed">
                    TAR-mak. It is short for &ldquo;tar macadam.&rdquo;
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <h3 className="text-white font-bold text-base mb-1">
                    Macadam: muh-KAD-um
                  </h3>
                  <p className="text-white/75 text-sm leading-relaxed">
                    muh-KAD-um. The word comes from the name of the Scottish engineer John Loudon McAdam, who developed an early method of building roads from compacted stone.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <h3 className="text-white font-bold text-base mb-1">
                    Aggregate: AG-ruh-git
                  </h3>
                  <p className="text-white/75 text-sm leading-relaxed">
                    AG-ruh-git. The crushed stone and sand mixed with the binder.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <h3 className="text-white font-bold text-base mb-1">
                    HMA: H-M-A
                  </h3>
                  <p className="text-white/75 text-sm leading-relaxed">
                    Say the letters H-M-A. It stands for hot mix asphalt.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <h3 className="text-white font-bold text-base mb-1">
                    Tack coat: TAK coat
                  </h3>
                  <p className="text-white/75 text-sm leading-relaxed">
                    TAK coat. A thin layer of binder sprayed between pavement layers.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <h3 className="text-white font-bold text-base mb-1">
                    Wearing course: WAIR-ing course
                  </h3>
                  <p className="text-white/75 text-sm leading-relaxed">
                    WAIR-ing course. The top layer of a pavement.
                  </p>
                </div>
              </div>
            </section>

            {/* Asphalt, Bitumen, Tar, and Concrete: What Each Word Means */}
            <section id="materials-comparison" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                Asphalt, Bitumen, Tar, and Concrete: What Each Word Means
              </h2>
              <p className="text-white/80 leading-relaxed mb-4 text-base">
                These words get mixed up in everyday talk, and the meaning also changes by country. Getting them right helps both your speech and your writing.
              </p>
              <p className="text-white/80 leading-relaxed mb-4 text-base">
                <strong className="text-white">Bitumen</strong> is the thick, black, sticky binder. It comes from crude oil refining or from natural deposits. In the UK, Pakistan, India, and many other countries, &ldquo;bitumen&rdquo; is the word for this binder. A specification might call for a &ldquo;
                <Link
                  href="/blog/bitumen-grades-explained"
                  className="text-teal-400 hover:text-orange-300 font-semibold underline underline-offset-2 transition-colors"
                >
                  60/70 penetration grade bitumen
                </Link>
                ,&rdquo; where the numbers describe how soft the binder is.
              </p>
              <p className="text-white/80 leading-relaxed mb-4 text-base">
                <strong className="text-white">Asphalt</strong> is the finished paving mix in most of the world. It combines bitumen with aggregate (stone, gravel, and sand). In the United States, people often say &ldquo;asphalt&rdquo; for both the binder and the mix. The binder there may also be called asphalt cement or asphalt binder. Read our complete{" "}
                <Link
                  href="/blog/asphalt-vs-bitumen"
                  className="text-teal-400 hover:text-orange-300 font-semibold underline underline-offset-2 transition-colors"
                >
                  asphalt vs bitumen comparison
                </Link>{" "}
                for the regional differences.
              </p>
              <p className="text-white/80 leading-relaxed mb-4 text-base">
                <strong className="text-white">Tarmac</strong> is a common everyday word in Britain and Ireland for an asphalt road surface. It comes from &ldquo;tar macadam.&rdquo;
              </p>
              <p className="text-white/80 leading-relaxed mb-4 text-base">
                <strong className="text-white">Tar</strong> is a different material. It comes from distilling coal or wood, not from crude oil. People sometimes call asphalt roads &ldquo;tar roads,&rdquo; which is common speech and not technically accurate.
              </p>
              <p className="text-white/80 leading-relaxed mb-4 text-base">
                <strong className="text-white">Concrete</strong> uses cement as its binder, not bitumen. It is paler, stiffer, and has a different surface texture. Compare their performance in our guide on{" "}
                <Link
                  href="/blog/asphalt-vs-concrete"
                  className="text-teal-400 hover:text-orange-300 font-semibold underline underline-offset-2 transition-colors"
                >
                  asphalt vs concrete
                </Link>.
              </p>

              {/* IMAGE 6: Materials comparison */}
              <SectionImage
                src="/asphalt-bitumen-tar-concrete-comparison.webp"
                alt="Materials comparison between asphalt paving mix, bitumen binder, tar, and concrete"
                caption="Material distinctions: asphalt composite mix, bitumen binder, coal tar, and rigid concrete"
              />

              <div className="border-l-4 border-orange-400 pl-5 my-5 not-prose">
                <p className="font-bold text-white mb-1">Here is an example of why the difference matters:</p>
                <p className="text-white/70 text-sm leading-relaxed">
                  A road estimate that lists &ldquo;bitumen&rdquo; in tonnes is counting the binder only. A line that lists &ldquo;asphalt&rdquo; in tonnes is counting the full mix, which weighs far more. Mixing up the two words can throw off a quantity calculation. You can calculate precise project volumes and weights with our free{" "}
                  <Link
                    href="/"
                    className="text-teal-400 hover:text-orange-300 font-semibold underline underline-offset-2 transition-colors"
                  >
                    Bitumen and Asphalt Calculator
                  </Link>.
                </p>
              </div>
            </section>

            {/* Common Pronunciation Mistakes */}
            <section id="common-mistakes" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Common Pronunciation Mistakes
              </h2>
              <p className="text-white/80 leading-relaxed mb-4 text-base">
                These are the slips I hear and see most often:
              </p>
              <ul className="space-y-3 mb-6 list-disc list-inside text-white/80 text-base leading-relaxed pl-2">
                <li><strong className="text-white">Adding an extra vowel:</strong> saying &ldquo;as-uh-falt.&rdquo; The word has only two syllables.</li>
                <li><strong className="text-white">Saying the &ldquo;p&rdquo; on its own:</strong> saying &ldquo;as-p-halt.&rdquo; The &ldquo;ph&rdquo; together makes one &ldquo;f&rdquo; sound.</li>
                <li><strong className="text-white">Stressing the second syllable:</strong> saying as-FAWLT. Keep the push on the first syllable.</li>
                <li><strong className="text-white">Dropping the final &ldquo;t&rdquo;:</strong> saying &ldquo;asfaw.&rdquo; Finish the word with a clear &ldquo;t.&rdquo;</li>
                <li><strong className="text-white">Mixing the vowel with &ldquo;ash&rdquo;:</strong> saying &ldquo;ash-fawlt&rdquo; in an area where &ldquo;ash-falt&rdquo; or &ldquo;AS-fawlt&rdquo; would be expected. The two parts usually come as a matched set.</li>
              </ul>
            </section>

            {/* Tips for Learners and Non-Native Speakers */}
            <section id="learner-tips" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                Tips for Learners and Non-Native Speakers
              </h2>
              <p className="text-white/80 leading-relaxed mb-4 text-base">
                Some languages don&apos;t allow the consonant pairing &ldquo;sf&rdquo; in the middle of a word. Speakers of those languages sometimes add a small vowel to break it up. In asphalt that gives you &ldquo;as-uh-falt.&rdquo;
              </p>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6">
                <h3 className="text-base font-bold text-orange-300 mb-3 flex items-center gap-2">
                  <Volume2 size={18} />
                  Try this drill:
                </h3>
                <ol className="space-y-2 list-decimal list-inside text-white/80 text-sm leading-relaxed pl-2">
                  <li>Say &ldquo;as.&rdquo; Hold the &ldquo;s&rdquo; sound for a moment.</li>
                  <li>Without adding any vowel, slide the &ldquo;s&rdquo; into &ldquo;f.&rdquo;</li>
                  <li>Add &ldquo;awlt.&rdquo;</li>
                  <li>Speed up until it feels like one word.</li>
                </ol>
              </div>

              <p className="text-white/80 leading-relaxed mb-4 text-base">
                Record yourself on your phone and play it back. Compare it with an audio clip from a trusted dictionary. The recording will show you whether a hidden vowel crept in.
              </p>

              <p className="text-white/80 leading-relaxed mb-3 text-base font-semibold">
                Practice with these sentences:
              </p>
              <div className="space-y-2 bg-white/5 border border-white/10 rounded-xl p-5 mb-6 text-white/85 text-sm italic">
                <p>&ldquo;The crew laid fresh asphalt before the rain.&rdquo;</p>
                <p>&ldquo;The asphalt plant opens at six.&rdquo;</p>
                <p>&ldquo;They will asphalt the parking lot next week.&rdquo;</p>
                <p>&ldquo;Hot asphalt was spread over the old road surface.&rdquo;</p>
                <p>&ldquo;The bitumen and aggregate go into the asphalt mixer.&rdquo;</p>
              </div>
              <p className="text-white/80 leading-relaxed text-base">
                Read them out loud, slowly first and then at natural speed. Whether you are performing routine{" "}
                <Link
                  href="/blog/asphalt-driveway-sealcoating"
                  className="text-teal-400 hover:text-orange-300 font-semibold underline underline-offset-2 transition-colors"
                >
                  asphalt driveway sealcoating
                </Link>{" "}
                or using{" "}
                <Link
                  href="/blog/cold-mix-bitumen"
                  className="text-teal-400 hover:text-orange-300 font-semibold underline underline-offset-2 transition-colors"
                >
                  cold mix bitumen
                </Link>{" "}
                for patching, clear pronunciation builds confidence on site.
              </p>
            </section>

            {/* Which Pronunciation Should You Use? */}
            <section id="which-to-use" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">
                Which Pronunciation Should You Use?
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Match your audience.
              </p>
              <div className="space-y-3 mb-6">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <h3 className="text-white font-bold text-base mb-1">
                    Teaching, recording, or presenting to a mixed audience
                  </h3>
                  <p className="text-white/75 text-sm">
                    Use <strong className="text-white">AS-fawlt</strong>. It is the most widely recognized version.
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <h3 className="text-white font-bold text-base mb-1">
                    Working in Canada or with Canadian colleagues
                  </h3>
                  <p className="text-white/75 text-sm">
                    <strong className="text-white">ASH-falt</strong> will sound natural, and nobody will notice it.
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <h3 className="text-white font-bold text-base mb-1">
                    Working in the UK or Ireland
                  </h3>
                  <p className="text-white/75 text-sm">
                    <strong className="text-white">AS-falt</strong> is the common version, and &ldquo;tarmac&rdquo; often replaces the word in casual speech.
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <h3 className="text-white font-bold text-base mb-1">
                    Writing
                  </h3>
                  <p className="text-white/75 text-sm">
                    Always spell it <strong className="text-white font-mono">a-s-p-h-a-l-t</strong>. Pronunciation varies, but the spelling does not.
                  </p>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section id="conclusion" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                Conclusion
              </h2>
              <p className="text-white/85 leading-relaxed mb-4 text-base">
                Say <strong className="text-white">AS-fawlt</strong>: two syllables, stress on the first, &ldquo;ph&rdquo; as &ldquo;f,&rdquo; and a clear &ldquo;t&rdquo; at the end. ASH-falt is common in Canada, and AS-falt is common in Britain. All three have dictionary support. Spell the word a-s-p-h-a-l-t, and use the &ldquo;asp + halt&rdquo; trick if the &ldquo;ph&rdquo; trips you up.
              </p>
              <p className="text-white/85 leading-relaxed text-base">
                When you move from the word itself to road work and{" "}
                <Link
                  href="/blog/repair-asphalt-driveway"
                  className="text-teal-400 hover:text-orange-300 font-semibold underline underline-offset-2 transition-colors"
                >
                  driveway repair
                </Link>
                , keep the vocabulary straight. Bitumen is the binder, asphalt is usually the mix, tarmac is a British word for the surface, and tar is a separate material.
              </p>
            </section>

            {/* FAQ */}
            <section id="faq" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-6 border-l-4 border-teal-400 pl-4">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {[
                  {
                    q: "How do you say asphalt?",
                    a: "Say AS-fawlt. It has two syllables, the stress is on the first, and the second rhymes with 'salt.'",
                  },
                  {
                    q: "Is 'ash-falt' an incorrect pronunciation?",
                    a: "No. Dictionaries list it as an accepted variant. Many Canadians use it every day, and printed spellings suggest it has been around for over a century.",
                  },
                  {
                    q: "How many syllables are in asphalt?",
                    a: "Two: as-phalt.",
                  },
                  {
                    q: "Is the 'ph' in asphalt silent?",
                    a: "No. It makes an 'f' sound. Only the 'p' is not heard separately.",
                  },
                  {
                    q: "Why is asphalt spelled with 'ph'?",
                    a: "The word came from Greek through Latin. Greek phi became 'ph' in Latin, and English kept the spelling.",
                  },
                  {
                    q: "How do you spell asphalt?",
                    a: "a-s-p-h-a-l-t. Common misspellings include 'asfalt,' 'ashpalt,' 'asphault,' and 'aspalt.'",
                  },
                  {
                    q: "What is the difference between asphalt and bitumen?",
                    a: "Bitumen is the black, sticky binder. In most countries, asphalt is the paving mix made from bitumen plus stone, gravel, and sand. In the United States, 'asphalt' can mean either one.",
                  },
                  {
                    q: "Is tarmac the same as asphalt?",
                    a: "Tarmac is a common British and Irish word for an asphalt road surface. It comes from 'tar macadam.'",
                  },
                  {
                    q: "Does the verb 'to asphalt' sound different?",
                    a: "No. It is pronounced AS-fawlt in the same way as the noun.",
                  },
                  {
                    q: "How do you pronounce asphaltic?",
                    a: "Say as-FAWL-tik. The stress moves to the second syllable.",
                  },
                ].map(({ q, a }, i) => (
                  <div
                    key={i}
                    className="bg-white/5 border border-white/10 rounded-2xl p-5 md:p-6 transition-colors hover:bg-white/[0.08]"
                  >
                    <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                      {q}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
            </section>

            <AuthorBio />
          </article>
        </div>
      </div>
    </>
  );
}
