// app/blog/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { BookOpen, Clock, ChevronRight, ArrowRight, Rss, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Bitumen Knowledge Hub — Expert Guides & Tutorials | BitumenCalcPro",
  description:
    "Expert articles on bitumen, asphalt mix design, road construction, waterproofing, and pavement engineering. Learn what engineers need to know — in plain language.",
  keywords: [
    "bitumen guide",
    "what is bitumen",
    "asphalt vs bitumen",
    "bitumen properties",
    "bitumen uses",
    "road construction guide",
    "asphalt knowledge",
  ],
  alternates: { canonical: "https://bitumencalcpro.com/blog" },
  openGraph: {
    title: "Bitumen Knowledge Hub — Expert Guides & Tutorials | BitumenCalcPro",
    description:
      "Expert articles on bitumen, asphalt mix design, road construction, waterproofing, and pavement engineering.",
    url: "https://bitumencalcpro.com/blog",
    siteName: "BitumenCalcPro",
    type: "website",
    images: [
      {
        url: "/what-is-bitumen.webp",
        width: 1200,
        height: 630,
        alt: "Bitumen Knowledge Hub — BitumenCalcPro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bitumen Knowledge Hub — Expert Guides & Tutorials | BitumenCalcPro",
    description:
      "Expert articles on bitumen, asphalt mix design, road construction, waterproofing, and pavement engineering.",
    images: ["/what-is-bitumen.webp"],
  },
};

const POSTS = [
  {
    slug: "cold-mix-bitumen",
    category: "Asphalt & Paving Materials",
    title: "Cold Mix Bitumen Explained: Uses, Benefits, Limitations & How It Compares to Hot Mix",
    excerpt:
      "Everything about cold mix bitumen — what it is, how it's made, cold vs hot mix asphalt, pothole repair uses, storage, costs, and when to use each.",
    image: "/cold-mix-bitumen-guide-featured.webp",
    imageAlt: "Cold mix bitumen guide — pothole repair and road maintenance material",
    readTime: "22 min read",
    date: "August 3, 2026",
    dateISO: "2026-08-03",
    tags: ["Cold Mix Bitumen", "Pothole Repair", "Asphalt", "Road Maintenance"],
    featured: true,
  },
  {
    slug: "what-is-bitumen",
    category: "Bitumen Fundamentals",
    title: "What Is Bitumen? Meaning, Uses, Properties & How It Compares to Asphalt and Tar",
    excerpt:
      "Bitumen is a thick, black, petroleum-based material that acts as the binding agent in asphalt. Discover its meaning, uses, grades, properties, types, and how it differs from asphalt and tar.",
    image: "/what-is-bitumen.webp",
    imageAlt: "What is bitumen — petroleum-based road paving material",
    readTime: "18 min read",
    date: "August 1, 2026",
    dateISO: "2026-08-01",
    tags: ["Bitumen", "Asphalt", "Road Construction", "Waterproofing"],
    featured: false,
  },
];

export default function BlogPage() {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "BitumenCalcPro Knowledge Hub",
    url: "https://bitumencalcpro.com/blog",
    description:
      "Expert articles on bitumen, asphalt mix design, road construction, and pavement engineering.",
    publisher: {
      "@type": "Organization",
      name: "BitumenCalcPro",
      url: "https://bitumencalcpro.com",
    },
    blogPost: POSTS.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: `https://bitumencalcpro.com/blog/${p.slug}`,
      datePublished: p.dateISO,
      image: `https://bitumencalcpro.com${p.image}`,
      description: p.excerpt,
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://bitumencalcpro.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://bitumencalcpro.com/blog" },
    ],
  };

  const featuredPost = POSTS[0];

  return (
    <>
      <Script
        id="schema-blog"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <Script
        id="schema-blog-breadcrumb"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ── HERO ── */}
      <div className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-orange-600/10 pointer-events-none" />
        <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-orange-500/10 blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-[480px] h-[480px] rounded-full bg-teal-500/20 blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-white font-medium">Blog</span>
          </nav>

          <div className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-400/30 text-teal-200 px-5 py-2 rounded-full text-sm font-bold mb-6">
            <Rss size={15} />
            Knowledge Hub
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-6 leading-tight drop-shadow-2xl">
            <span className="bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">Bitumen</span>{" "}
            Knowledge Hub
          </h1>

          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            Expert guides on bitumen, asphalt mix design, road construction, and pavement engineering — written for engineers, contractors, and professionals.
          </p>
        </div>
      </div>

      {/* ── FEATURED POST ── */}
      <section className="py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-white/50 text-sm font-semibold uppercase tracking-widest flex items-center gap-2">
              <BookOpen size={14} />
              Featured Article
            </span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          {/* Featured Card */}
          <article className="group relative bg-gradient-to-br from-white/10 to-white/5 border border-white/15 rounded-[2rem] overflow-hidden shadow-2xl hover:border-white/30 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[2rem]" />

            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[420px]">
              {/* Image */}
              <div className="relative w-full aspect-[4/3] lg:aspect-auto min-h-[280px] lg:min-h-[420px] overflow-hidden">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.imageAlt}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Overlay gradient for text readability on mobile */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col justify-center p-8 md:p-10 lg:p-12">
                {/* Category + Featured badge */}
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span className="inline-flex items-center gap-1.5 bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                    ⭐ Featured
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs font-semibold px-3 py-1.5 rounded-full">
                    {featuredPost.category}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-white mb-4 leading-tight">
                  {featuredPost.title}
                </h2>

                <p className="text-white/70 text-base leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-white/50 text-sm mb-8">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} />
                    <time dateTime={featuredPost.dateISO}>{featuredPost.date}</time>
                  </span>
                  <span className="w-1 h-1 rounded-full bg-white/30" />
                  <span className="flex items-center gap-1.5">
                    <Clock size={13} />
                    {featuredPost.readTime}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {featuredPost.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-white/5 border border-white/10 text-white/60 text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 active:scale-95 text-white px-7 py-3.5 rounded-full font-bold text-sm transition-all shadow-[0_0_20px_rgba(249,115,22,0.35)] hover:shadow-[0_0_30px_rgba(249,115,22,0.55)] w-fit"
                >
                  Read Full Article
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* ── ALL POSTS GRID ── */}
      <section className="py-12 pb-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-white/50 text-sm font-semibold uppercase tracking-widest">
              All Articles
            </span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {POSTS.map((post) => (
              <article
                key={post.slug}
                className="group bg-gradient-to-b from-white/10 to-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:border-white/25 hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] flex flex-col"
              >
                <div className="relative w-full aspect-[16/9] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-teal-500/90 backdrop-blur-sm text-white text-xs font-bold px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-white/40 text-xs mb-3">
                    <span className="flex items-center gap-1"><Calendar size={11} /><time dateTime={post.dateISO}>{post.date}</time></span>
                    <span>·</span>
                    <span className="flex items-center gap-1"><Clock size={11} />{post.readTime}</span>
                  </div>
                  <h2 className="text-white font-bold text-lg leading-snug mb-3 flex-1 group-hover:text-orange-300 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-white/60 text-sm leading-relaxed mb-5 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-teal-400 hover:text-orange-400 font-semibold text-sm transition-colors group/link"
                  >
                    Read Article
                    <ChevronRight size={15} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA: Use the Calculator ── */}
      <section className="py-20 relative overflow-hidden bg-black/20 border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600/10 to-orange-500/10 pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Ready to Estimate Your Project?
          </h2>
          <p className="text-white/70 text-lg mb-8 leading-relaxed">
            Use our free{" "}
            <Link href="/" className="text-orange-400 hover:text-orange-300 font-semibold underline underline-offset-2 transition-colors">
              Bitumen Calculator
            </Link>{" "}
            to instantly estimate bitumen quantity, asphalt mix weight, and aggregate requirements for any road or paving project.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 active:scale-95 text-white px-8 py-4 rounded-full font-black text-base transition-all shadow-[0_0_25px_rgba(20,184,166,0.4)] hover:shadow-[0_0_35px_rgba(20,184,166,0.6)]"
          >
            Open Bitumen Calculator
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
