// app/page.tsx
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import Calculator from "./components/Calculator";
import {
 Info,
 Calculator as CalcIcon,
 Droplets,
 ArrowRight,
 ShieldCheck,
 Zap,
 BookOpen,
 HardHat,
 ChevronRight,
 Compass,
 Lightbulb,
 Target,
 BarChart,
 Scale,
 AlertTriangle,
 CheckCircle2,
 HelpCircle,
 Settings,
 Layers,
 DollarSign,
 FileText,
 Users
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "Free Bitumen Calculator | Estimate Bitumen & Asphalt Mix",
 description:
 "Estimate bitumen quantity, asphalt mix weight, aggregate weight, and project cost in seconds. Fast, accurate, and free for engineers and contractors.",
 keywords: [
 "bitumen calculator",
 "asphalt quantity calculator",
 "bitumen content calculation",
 "HMA estimate",
 "pavement materials",
 "civil engineering calculator"
 ],
 alternates: { canonical: "https://bitumencalcpro.com" },
 openGraph: {
 title: "Free Bitumen Calculator | Estimate Bitumen & Asphalt Mix",
 description:
 "Estimate bitumen quantity, asphalt mix weight, aggregate weight, and project cost in seconds. Fast, accurate, and free for engineers and contractors.",
 url: "https://bitumencalcpro.com",
 siteName: "BitumenCalcPro",
 type: "website",
 images: [
  {
   url: "/bitumen-calculator-og-image.png",
   width: 1729,
   height: 910,
   alt: "Free Bitumen Calculator ,Estimate Bitumen & Asphalt Mix",
  },
 ],
 },
 twitter: {
 card: "summary_large_image",
 title: "Free Bitumen Calculator | Estimate Bitumen & Asphalt Mix",
 description: "Estimate bitumen quantity, asphalt mix weight, aggregate weight, and project cost in seconds. Fast, accurate, and free for engineers and contractors.",
 images: ["/bitumen-calculator-og-image.png"],
 },
};

const REFERENCE_DATA = [
 {
 name: "Dense Graded HMA",
 desc: "General purpose paving ,roads, highways, and driveways.",
 range: "5.0% – 6.0%",
 },
 {
 name: "Stone Mastic Asphalt (SMA)",
 desc: "High-traffic highways with excellent rut resistance.",
 range: "6.0% – 7.0%",
 },
 {
 name: "Open Graded Friction Course",
 desc: "Highway surface drainage and noise reduction layer.",
 range: "4.5% – 5.5%",
 },
 {
 name: "Polymer Modified (PMB)",
 desc: "Heavy-duty ,airports, industrial areas, bus terminals.",
 range: "5.5% – 7.0%",
 },
] as const;

const TRUST_BADGES = [
 { icon: ShieldCheck, label: "AASHTO-aligned formulas" },
 { icon: Zap, label: "Instant results" },
 { icon: BookOpen, label: "Transparent methodology" },
 { icon: HardHat, label: "Built for site engineers" },
];

const STEPS = [
 {
 num: "01",
 icon: CalcIcon,
 color: "orange",
 title: "1. Total Asphalt Volume Calculation",
 desc: "The first step is calculating the volume of the asphalt pavement layer.",
 formula: "Total Volume = Length × Width × Thickness",
 unit: "m³",
 example: "1,000 × 3.5 × 0.05 = 175 m³",
 },
 {
 num: "02",
 icon: BarChart,
 color: "blue",
 title: "2. Total Hot Mix Asphalt (HMA) Weight Calculation",
 desc: "After finding the pavement volume, the calculator converts the volume into total asphalt mixture weight using the HMA density.",
 formula: "Total Asphalt Weight = Volume × Mix Density",
 unit: "tonnes",
 example: "175 × 2,350 = 411,250 kg (411.25 t)",
 },
 {
 num: "03",
 icon: Droplets,
 color: "violet",
 title: "3. Bitumen Binder Quantity Calculation",
 desc: "After finding Total Asphalt Weight our calculator then separates the bitumen portion from the total asphalt mixture. Bitumen content represents the percentage of binder contained within the total HMA weight.",
 formula: "Bitumen Quantity = Total Mix Weight × (Bitumen Content ÷ 100)",
 unit: "tonnes",
 example: "411.25 × (5.5 ÷ 100) = 22.62 tonnes",
 },
 {
 num: "04",
 icon: Scale,
 color: "orange",
 title: "4. Aggregate Quantity Calculation",
 desc: "The remaining portion of the asphalt mixture is calculated as aggregate weight.",
 formula: "Aggregate Quantity = Total Mix Weight − Bitumen Quantity",
 unit: "tonnes",
 example: "411.25 − 22.62 = 388.63 tonnes",
 },
];

const FAQ_DATA = [
 {
 q: "What is a Bitumen Calculator?",
 a: "A Bitumen Calculator is an online tool that estimates bitumen binder, hot mix asphalt (HMA), and aggregate quantities for pavement projects. It uses pavement dimensions, mix density, and bitumen content to calculate material requirements."
 },
 {
 q: "How do you calculate bitumen quantity for asphalt?",
 a: "Bitumen quantity is calculated by multiplying the total asphalt mix weight by the bitumen content percentage. Formula: Bitumen Quantity = Total Mix Weight × (Bitumen Content ÷ 100)"
 },
 {
 q: "What information is required to use a Bitumen Calculator?",
 a: "You need pavement length, width, thickness, HMA density, and bitumen content percentage. These values help calculate asphalt volume, total mix weight, and binder quantity."
 },
 {
 q: "How do you calculate asphalt quantity in tonnes?",
 a: "Asphalt quantity is calculated by multiplying pavement volume by HMA density. The result is converted from kilograms to tonnes to estimate the required asphalt material."
 },
 {
  q: "What bitumen content percentage should I use for asphalt calculation?",
  a: "The correct bitumen content comes from the approved asphalt mix design. Most HMA mixtures commonly contain around 4% to 7% bitumen by total mix weight. The right percentage also depends on the bitumen grade specified — our guide on bitumen grades explains how penetration grade, VG, and PG systems influence mix design."
 },
 {
 q: "What density should be used in a Bitumen Calculator?",
 a: "Use the HMA mix density, not pure bitumen density. Asphalt mix density is typically around 2,200–2,450 kg/m³ depending on the project mix design."
 },
 {
 q: "Can a Bitumen Calculator calculate aggregate quantity?",
 a: "Yes, it calculates aggregate quantity by subtracting the bitumen weight from the total asphalt mix weight. Formula: Aggregate Quantity = Total Mix Weight − Bitumen Quantity"
 },
 {
 q: "Is a Bitumen Calculator accurate for construction projects?",
 a: "A Bitumen Calculator provides an estimate based on the entered project data. For final construction quantities, always confirm values with approved mix designs and project specifications."
 }
];

export default function Home() {

 /* ─── Structured Data (JSON-LD) ─── */
 const webApplicationSchema = {
 "@context": "https://schema.org",
 "@type": "WebApplication",
 "name": "BitumenCalcPro — Free Bitumen Calculator",
 "url": "https://bitumencalcpro.com",
 "description": "Free online bitumen calculator that estimates bitumen binder quantity, hot mix asphalt (HMA) weight, aggregate quantity, and project cost for pavement construction projects.",
 "applicationCategory": "EngineeringApplication",
 "applicationSubCategory": "UtilitiesApplication",
 "operatingSystem": "Any",
 "browserRequirements": "Requires JavaScript",
 "offers": {
 "@type": "Offer",
 "price": "0",
 "priceCurrency": "USD"
 },
 "featureList": [
 "Bitumen quantity estimation",
 "Hot Mix Asphalt (HMA) weight calculation",
 "Aggregate quantity calculation",
 "Bitumen cost estimation",
 "Multiple unit support (metric and imperial)",
 "Multi-layer pavement calculation",
 "Instant results",
 "AASHTO-aligned formulas"
 ]
 };

 const webSiteSchema = {
 "@context": "https://schema.org",
 "@type": "WebSite",
 "name": "BitumenCalcPro",
 "url": "https://bitumencalcpro.com"
 };

 const organizationSchema = {
 "@context": "https://schema.org",
 "@type": "Organization",
 "name": "BitumenCalcPro",
 "url": "https://bitumencalcpro.com",
 "logo": {
 "@type": "ImageObject",
 "url": "https://bitumencalcpro.com/logo.png"
 },
 "sameAs": [
 "https://twitter.com/bitumencalcpro"
 ]
 };

 const breadcrumbSchema = {
 "@context": "https://schema.org",
 "@type": "BreadcrumbList",
 "itemListElement": [
 {
 "@type": "ListItem",
 "position": 1,
 "name": "Home",
 "item": "https://bitumencalcpro.com"
 },
 {
 "@type": "ListItem",
 "position": 2,
 "name": "Bitumen Calculator",
 "item": "https://bitumencalcpro.com/#calculator"
 }
 ]
 };

 const faqSchema = {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": FAQ_DATA.map((faq) => ({
 "@type": "Question",
 "name": faq.q,
 "acceptedAnswer": {
 "@type": "Answer",
 "text": faq.a
 }
 }))
 };

 return (
 <>
 {/* ─── JSON-LD Structured Data ─── */}
 <Script
 id="schema-web-application"
 type="application/ld+json"
 strategy="beforeInteractive"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }}
 />
 <Script
 id="schema-website"
 type="application/ld+json"
 strategy="beforeInteractive"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
 />
 <Script
 id="schema-organization"
 type="application/ld+json"
 strategy="beforeInteractive"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
 />
 <Script
 id="schema-breadcrumb"
 type="application/ld+json"
 strategy="beforeInteractive"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
 />
 <Script
 id="schema-faq"
 type="application/ld+json"
 strategy="beforeInteractive"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
 />

 {/* ═══════════════════════════════
 HERO 
 ═══════════════════════════════ */}
 <div className="relative pt-20 pb-28 overflow-hidden">
 <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-orange-600/10 pointer-events-none" />
 <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-orange-500/10 blur-[100px] pointer-events-none" />
 <div className="absolute -bottom-32 -right-32 w-[480px] h-[480px] rounded-full bg-teal-500/20 blur-[100px] pointer-events-none" />

 <div id="calculator" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 
 <h1 className="text-center text-4xl sm:text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight drop-shadow-2xl">
 <span className="bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">Bitumen</span> <span className="text-white">Calculator</span>
 </h1>

 <p className="text-center text-white/90 text-lg md:text-xl font-medium max-w-3xl mx-auto mb-8 leading-relaxed drop-shadow-md">
 Calculate Asphalt Mix Weight, Bitumen, and Aggregate Quantity. Instantly estimate binder and aggregate quantities for any road pavement project.
 </p>

 <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-2 sm:gap-4 mb-14">
 {TRUST_BADGES.map(({ icon: Icon, label }) => (
 <div
 key={label}
 className="flex items-center gap-2 bg-black/20 border border-white/10 rounded-full px-4 py-2 text-white text-xs sm:text-sm font-medium justify-center shadow-inner hover:bg-black/30 transition-colors"
 >
 <Icon size={16} className="text-orange-400 shrink-0" />
 <span className="truncate">{label}</span>
 </div>
 ))}
 </div>

 <Calculator />
 </div>
 </div>

 {/* ═══════════════════════════════
 WHAT IS A BITUMEN CALCULATOR
 ═══════════════════════════════ */}
 <section className="py-24 relative bg-black/10 border-y border-white/5">
 <div className="max-w-7xl mx-auto px-6 lg:px-8">
 <div className="flex flex-col lg:flex-row gap-16 items-center">
 <div className="lg:w-1/2">
 <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500/20 to-transparent border-l-4 border-teal-400 text-white px-4 py-2 rounded-r-lg text-sm font-bold mb-6 ">
 <Info size={16} className="text-teal-400" />
 Overview
 </div>
 <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight drop-shadow-lg">
 What Is a Bitumen Calculator?
 </h2>
 <div className="prose prose-invert prose-lg max-w-none">
 <p className="text-white/80 leading-relaxed mb-5 font-medium text-lg">
A Bitumen Calculator is an online tool that helps engineers, contractors, estimators, and construction professionals calculate the amount of bitumen binder, hot mix asphalt (HMA), and aggregates required for pavement and road construction projects.
 </p>
 <p className="text-white/70 leading-relaxed mb-5">
Simply enter the pavement length, width, thickness, mix density, and bitumen content, and the calculator instantly estimates the total asphalt volume, mix weight, bitumen quantity, aggregate weight, and an optional material cost estimate. These calculations support project planning, material estimation, and budgeting. While this tool is designed for paving projects, bitumen is also heavily utilized in the building sector—you can read our guide on <Link href="/blog/modified-bitumen-roofing" className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors">modified bitumen roofing</Link> if you are dealing with commercial flat roofs. If you want to learn more about the base materials involved, you can read our detailed guide on <Link href="/blog/what-is-bitumen" className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors">what bitumen is, its properties, and how it compares to asphalt and tar</Link>.
 </p>

 </div>
 </div>
 
 {/* Enhanced Image Container */}
 <div className="lg:w-1/2 w-full">
 <div className="relative rounded-[2rem] p-4 sm:p-6 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.3)] group">
 <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-teal-500/20 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
 <div className="relative w-full aspect-video sm:aspect-[4/3] rounded-xl overflow-hidden bg-black/40 border border-white/5">
 <Image 
 src="/civil-engineer-using-bitumen-calculator.webp" 
 alt="Civil engineer using bitumen calculator for pavement estimation" 
 fill 
 priority
 className="object-contain transition-transform duration-700 group-hover:scale-105" 
 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
 />
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* ═══════════════════════════════
 QUICK START GUIDE
 ═══════════════════════════════ */}
 <section className="py-24 relative overflow-hidden">
 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-teal-500/5 blur-[120px] pointer-events-none" />
 
 <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
 <div className="text-center mb-16">
 <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 text-orange-100 px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-[0_0_15px_rgba(249,115,22,0.2)]">
 <Compass size={16} />
 Quick Start Guide
 </div>
 <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 drop-shadow-xl">
 How to Use This Calculator
 </h2>
 <p className="text-white/80 max-w-3xl mx-auto text-lg leading-relaxed font-medium">
 Using the Bitumen Calculator takes three simple steps. You don't need any software or manual formulas ,just your project dimensions and mix data.
 </p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
 {/* Step 1 */}
 <div className="bg-gradient-to-b from-white/10 to-transparent border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden group hover:border-white/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(0,0,0,0.3)]">
 <div className="absolute -top-4 -right-4 p-4 opacity-5 group-hover:opacity-10 group-hover:scale-125 transition-all duration-500 text-white">
 <Target size={140} />
 </div>
 <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-green-500/20">
 <span className="font-black text-2xl">1</span>
 </div>
 <h3 className="text-2xl font-bold text-white mb-4">Enter Dimensions</h3>
 <p className="text-white/70 text-base leading-relaxed mb-6">
 Enter the length, width, and thickness of the pavement section you're working on. Thickness is usually the smallest number (often in millimetres), so double-check units before you calculate ,a decimal error here throws off every result that follows.
 </p>
 <div className="bg-black/40 rounded-xl p-4 border border-white/5 text-sm text-green-300 font-mono shadow-inner">
 Example:<br/>Length: 1,000 m<br/>Width: 3.5 m<br/>Thickness: 50 mm
 </div>
 </div>

 {/* Step 2 */}
 <div className="bg-gradient-to-b from-white/10 to-transparent border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden group hover:border-white/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(0,0,0,0.3)] mt-0 md:mt-12">
 <div className="absolute -top-4 -right-4 p-4 opacity-5 group-hover:opacity-10 group-hover:scale-125 transition-all duration-500 text-white">
 <Settings size={140} />
 </div>
 <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-red-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-orange-500/20">
 <span className="font-black text-2xl">2</span>
 </div>
 <h3 className="text-2xl font-bold text-white mb-4">Select Units for Dimensions and Results</h3>
 <p className="text-white/70 text-base leading-relaxed">
 Our Bitumen Calculator allows users to select different measurement units based on project requirements. Users can enter pavement dimensions using suitable units, while the calculator automatically converts values internally to perform accurate calculations.
 <br/><br/>
 Using the correct units helps prevent calculation errors and ensures the final asphalt, bitumen, and aggregate quantities are displayed in the required format.
 </p>
 </div>

 {/* Step 3 */}
 <div className="bg-gradient-to-b from-white/10 to-transparent border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden group hover:border-white/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(0,0,0,0.3)] mt-0 md:mt-24">
 <div className="absolute -top-4 -right-4 p-4 opacity-5 group-hover:opacity-10 group-hover:scale-125 transition-all duration-500 text-white">
 <Lightbulb size={140} />
 </div>
 <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-purple-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-violet-500/20">
 <span className="font-black text-2xl">3</span>
 </div>
 <h3 className="text-2xl font-bold text-white mb-4">Enter Mix Properties (Density, Bitumen %)</h3>
 <p className="text-white/70 text-base leading-relaxed mb-6">
 Add the mix density (kg/m³) and the bitumen content percentage from your approved mix design. If you don't have a project-specific value, a typical reference range is fine for early-stage estimating.
 </p>
 <h4 className="text-lg font-bold text-white mb-2">Optional: Add Price for Cost Estimate</h4>
 <p className="text-white/70 text-sm leading-relaxed">
 If you want a rough binder cost, enter a price per tonne or per litre. This gives a budgeting figure only.
 </p>
 </div>
 </div>

 {/* Calculator Inputs Table */}
 <div className="mt-20 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl max-w-5xl mx-auto">
 <div className="p-6 md:p-8 bg-black/40 border-b border-white/5">
 <h2 className="text-2xl font-bold text-white flex items-center gap-3">
 <FileText className="text-teal-400" size={28} /> Calculator Inputs at a Glance
 </h2>
 </div>
 <div className="overflow-x-auto">
 <table className="w-full text-left text-white text-base">
 <thead className="bg-white/5">
 <tr>
 <th className="p-5 md:p-6 font-bold uppercase tracking-wider text-sm border-b border-white/10 text-white/50">Input</th>
 <th className="p-5 md:p-6 font-bold uppercase tracking-wider text-sm border-b border-white/10 text-white/50">Description</th>
 <th className="p-5 md:p-6 font-bold uppercase tracking-wider text-sm border-b border-white/10 text-white/50">Unit</th>
 </tr>
 </thead>
 <tbody className="divide-y divide-white/5">
 <tr className="hover:bg-white/5 transition-colors group">
 <td className="p-5 md:p-6 font-bold text-orange-300 group-hover:text-orange-200">Length</td>
 <td className="p-5 md:p-6 text-white/80">Total pavement section length</td>
 <td className="p-5 md:p-6 font-mono text-sm text-white/60 bg-black/20 rounded-md m-2 inline-block">m, ft, cm, mm, in, yd</td>
 </tr>
 <tr className="hover:bg-white/5 transition-colors group">
 <td className="p-5 md:p-6 font-bold text-orange-300 group-hover:text-orange-200">Width</td>
 <td className="p-5 md:p-6 text-white/80">Pavement width</td>
 <td className="p-5 md:p-6 font-mono text-sm text-white/60 bg-black/20 rounded-md m-2 inline-block">m, ft, cm, mm, in, yd</td>
 </tr>
 <tr className="hover:bg-white/5 transition-colors group">
 <td className="p-5 md:p-6 font-bold text-orange-300 group-hover:text-orange-200">Thickness</td>
 <td className="p-5 md:p-6 text-white/80">Asphalt layer thickness</td>
 <td className="p-5 md:p-6 font-mono text-sm text-white/60 bg-black/20 rounded-md m-2 inline-block">m, ft, cm, mm, in, yd</td>
 </tr>
 <tr className="hover:bg-white/5 transition-colors group">
 <td className="p-5 md:p-6 font-bold text-blue-300 group-hover:text-blue-200">Mix Density</td>
 <td className="p-5 md:p-6 text-white/80">Weight of compacted HMA per cubic meter</td>
 <td className="p-5 md:p-6 font-mono text-sm text-white/60 bg-black/20 rounded-md m-2 inline-block">kg/m³, lb/yd³, lb/ft³</td>
 </tr>
 <tr className="hover:bg-white/5 transition-colors group">
 <td className="p-5 md:p-6 font-bold text-violet-300 group-hover:text-violet-200">Bitumen Content</td>
 <td className="p-5 md:p-6 text-white/80">Binder percentage in total asphalt mix</td>
 <td className="p-5 md:p-6 font-mono text-sm text-white/60 bg-black/20 rounded-md m-2 inline-block">%</td>
 </tr>
 <tr className="hover:bg-white/5 transition-colors group">
 <td className="p-5 md:p-6 font-bold text-green-300 group-hover:text-green-200">Bitumen Price</td>
 <td className="p-5 md:p-6 text-white/80">Optional binder cost calculation</td>
 <td className="p-5 md:p-6 font-mono text-sm text-white/60 bg-black/20 rounded-md m-2 inline-block">$/tonne or local currency</td>
 </tr>
 </tbody>
 </table>
 </div>
 </div>
 </div>
 </section>

 {/* ═══════════════════════════════
 HOW THE MATH WORKS
 ═══════════════════════════════ */}
 <section id="how-it-works" className="py-24 bg-black/20 border-y border-white/5 relative">
 <div className="max-w-7xl mx-auto px-6 lg:px-8">
 
 <div className="flex flex-col lg:flex-row gap-16 items-center mb-16">
 <div className="lg:w-1/2">
 <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-transparent border-l-4 border-blue-400 text-white px-4 py-2 rounded-r-lg text-sm font-bold mb-6 ">
 <BookOpen size={16} className="text-blue-400" />
 Calculation Methodology
 </div>
 <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 drop-shadow-lg">
 Bitumen Calculator Formula: How the Calculation Works
 </h2>
 <div className="prose prose-invert prose-lg max-w-none">
 <p className="text-white/80 font-medium leading-relaxed mb-6">
 This Bitumen Quantity Calculator uses standard pavement material estimation formulas to convert project dimensions and asphalt mix properties into total material requirements.
 </p>
 <p className="text-white/70 leading-relaxed mb-6">
 The calculation process follows four main steps. Each calculation uses the values entered by the user, including pavement dimensions, mix density, and bitumen content percentage.
 </p>
 
 <h3 className="text-xl font-bold text-white mb-3 mt-8">Complete Bitumen Calculation Formula</h3>
 <p className="text-white/70 leading-relaxed mb-4">
 For a quick estimate, the entire process can be combined into one calculation:
 </p>
 <div className="bg-gradient-to-r from-blue-900/40 to-violet-900/40 p-4 rounded-xl border border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.15)] inline-block">
 <strong className="text-white font-mono text-sm md:text-base">
 Bitumen Quantity = (Length × Width × Thickness in meters × Mix Density) × (Bitumen Content ÷ 100)
 </strong>
 </div>
 <p className="text-white/60 text-sm mt-3 italic">
 This formula helps estimate the approximate binder requirement for an asphalt pavement section when the project dimensions and mix properties are known.
 </p>
 </div>
 </div>
 
 <div className="lg:w-1/2 w-full">
 <div className="relative rounded-[2rem] p-4 sm:p-6 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.3)] group">
 <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
 <div className="relative w-full aspect-video sm:aspect-[4/3] rounded-xl overflow-hidden bg-black/40 border border-white/5">
 <Image 
 src="/bitumen-calculator-calculation-process.webp" 
 alt="Bitumen calculator calculation process visualization" 
 fill 
 className="object-contain transition-transform duration-700 group-hover:scale-105" 
 sizes="(max-width: 768px) 100vw, 50vw"
 />
 </div>
 </div>
 </div>
 </div>

 {/* Steps Grid */}
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
 {STEPS.map((step) => {
 const Icon = step.icon;
 return (
 <div key={step.num} className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8 shadow-2xl hover:border-white/30 transition-all duration-300 flex flex-col group hover:-translate-y-1">
 <div className="flex items-center gap-4 mb-6">
 <div className="w-12 h-12 rounded-2xl flex items-center justify-center font-black text-lg bg-white/10 text-white border border-white/20 shadow-inner group-hover:bg-white/20 transition-colors">
 {step.num}
 </div>
 <h3 className="text-2xl font-bold text-white shadow-sm leading-tight">
 {step.title}
 </h3>
 </div>
 
 <p className="text-white/70 text-lg mb-8 leading-relaxed flex-grow">
 {step.desc}
 </p>

 <div className="bg-black/40 rounded-2xl p-6 border border-white/5 shadow-inner mt-auto">
 <div className="text-xs text-white/40 uppercase tracking-widest font-black mb-2">Formula</div>
 <div className="text-orange-300 font-mono font-bold text-sm md:text-base mb-5">{step.formula}</div>
 
 <div className="text-xs text-white/40 uppercase tracking-widest font-black mb-2">Example Calculation</div>
 <div className="text-green-300 font-mono font-bold text-sm md:text-base">{step.example}</div>
 </div>
 </div>
 );
 })}
 </div>

 {/* Cost Calculation Block */}
 <div className="mt-8 bg-gradient-to-r from-emerald-500/20 to-teal-600/20 rounded-3xl border border-emerald-500/30 p-8 md:p-10 shadow-[0_0_40px_rgba(16,185,129,0.1)] ">
 <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
 <div className="w-14 h-14 rounded-2xl flex items-center justify-center font-black text-xl bg-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)]">
 <DollarSign size={28} />
 </div>
 <div>
 <h3 className="text-2xl md:text-3xl font-black text-white shadow-sm">
 Bitumen Cost Calculation
 </h3>
 <p className="text-emerald-100/80 text-lg mt-2">
 The calculator can also estimate the approximate bitumen cost based on the calculated binder quantity.
 </p>
 </div>
 </div>
 
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
 <div className="bg-black/40 rounded-2xl p-6 border border-emerald-500/20 shadow-inner">
 <div className="text-xs text-emerald-300/60 uppercase tracking-widest font-black mb-2">Formula</div>
 <div className="text-emerald-300 font-mono font-bold text-sm md:text-base">Bitumen Cost = Bitumen Required × Bitumen Price per Unit Weight</div>
 </div>
 <div className="bg-black/40 rounded-2xl p-6 border border-emerald-500/20 shadow-inner">
 <div className="text-xs text-emerald-300/60 uppercase tracking-widest font-black mb-2">Example Calculation</div>
 <div className="text-emerald-300 font-mono font-bold text-sm md:text-base">
 <span className="text-white/50 text-xs block mb-1">Bitumen Required: 22.62 tonnes | Price: $500/tonne</span>
 22.62 × 500 = $11,309.38
 </div>
 </div>
 </div>
 <p className="text-emerald-200/60 text-sm mt-6 font-medium bg-black/20 p-4 rounded-xl inline-block border border-emerald-500/10">
 The cost result is an estimate only. Actual prices may vary depending on supplier, location, bitumen grade, transportation, and market conditions.
 </p>
 </div>

 <div className="mt-8 bg-gradient-to-r from-orange-500/20 to-red-600/20 border border-orange-500/30 rounded-3xl p-8 flex flex-col md:flex-row items-start gap-6 shadow-[0_0_30px_rgba(249,115,22,0.1)]">
 <div className="bg-orange-500/20 p-4 rounded-2xl border border-orange-500/30 shrink-0">
 <HardHat size={32} className="text-orange-400" />
 </div>
 <div>
 <h4 className="text-white font-black mb-3 text-2xl">Important Calculation Note</h4>
 <p className="text-white/90 text-lg leading-relaxed mb-4">
 The accuracy of the result depends on the values entered into the calculator. For the most reliable estimate, use:
 </p>
 <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base text-white/90 mb-5 font-medium">
 <li className="flex items-center gap-3 bg-black/20 p-3 rounded-xl border border-white/5"><CheckCircle2 size={20} className="text-orange-400"/> Approved asphalt mix density</li>
 <li className="flex items-center gap-3 bg-black/20 p-3 rounded-xl border border-white/5"><CheckCircle2 size={20} className="text-orange-400"/> Laboratory-tested bitumen content</li>
 <li className="flex items-center gap-3 bg-black/20 p-3 rounded-xl border border-white/5"><CheckCircle2 size={20} className="text-orange-400"/> Correct pavement thickness</li>
 <li className="flex items-center gap-3 bg-black/20 p-3 rounded-xl border border-white/5"><CheckCircle2 size={20} className="text-orange-400"/> Consistent measurement units</li>
 </ul>
 <p className="text-orange-200/80 text-sm font-medium">
 The results are intended for planning and estimation. Final construction quantities should always be confirmed using the approved asphalt mix design and project specifications.
 </p>
 </div>
 </div>
 </div>
 </section>

 {/* ═══════════════════════════════
 DEEP DIVE ENGINEERING CONCEPTS
 ═══════════════════════════════ */}
 <section className="py-24 relative overflow-hidden">
 <div className="absolute -right-32 top-32 w-[800px] h-[800px] rounded-full bg-blue-500/5 blur-[150px] pointer-events-none" />
 
 <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
 <div className="text-center mb-20">
 <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 drop-shadow-xl">
 Pavement Engineering Concepts
 </h2>
 </div>

 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
 
 {/* Concept 1 */}
 <div className="bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-2xl hover:border-white/20 transition-all group">
 <div className="w-14 h-14 bg-red-500/20 border border-red-500/40 text-red-400 rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(239,68,68,0.2)]">
 <AlertTriangle size={28} />
 </div>
 <h3 className="text-3xl font-black text-white mb-6 leading-tight">Mix Density vs. Bitumen (Binder) Density ,Don't Confuse These</h3>
 <p className="text-white/80 text-lg leading-relaxed mb-6 font-medium">
 This is one of the most common sources of ordering errors, because both numbers look similar but do completely different jobs.
 </p>
 <ul className="space-y-4 text-base text-white/90 mb-8">
 <li className="flex gap-4 items-start bg-black/20 p-4 rounded-2xl border border-white/5">
 <span className="w-3 h-3 rounded-full bg-orange-400 mt-1.5 shrink-0 shadow-[0_0_10px_rgba(249,115,22,0.8)]" />
 <span><strong className="text-white">Mix density (roughly 2,200–2,450 kg/m³)</strong> is the weight of the finished asphalt mixture ,bitumen plus aggregate plus filler ,per cubic metre. This calculator uses mix density to turn your pavement volume into total mix weight.</span>
 </li>
 <li className="flex gap-4 items-start bg-black/20 p-4 rounded-2xl border border-white/5">
 <span className="w-3 h-3 rounded-full bg-blue-400 mt-1.5 shrink-0 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
 <span><strong className="text-white">Bitumen (binder) density (roughly 1,020–1,040 kg/m³)</strong> is the weight of pure bitumen alone, before it's mixed with anything. This number matters when you're converting a bitumen weight into a volume ,for example, working out how many litres or drums of binder to order.</span>
 </li>
 </ul>
 <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6 text-sm md:text-base text-red-200 shadow-inner">
 <strong className="text-white block mb-2 text-lg">Where the mix-up causes real errors:</strong> 
 If someone mistakenly uses binder density (≈1,030 kg/m³) instead of mix density (≈2,350 kg/m³) to convert the pavement volume into weight, the calculated tonnage comes out at less than half the correct figure. On the 175 m³ example above, that mistake would produce roughly 180 tonnes instead of 411 tonnes ,a shortfall that would stop a paving crew mid-job.
 <br/><br/>
 <span className="font-bold text-white uppercase tracking-wider text-xs bg-red-900/50 px-2 py-1 rounded inline-block mb-1">Rule of thumb:</span><br/>
 Use mix density for volume-to-weight conversions of the whole asphalt layer. Use binder density only when converting the bitumen portion into litres or drums.
 </div>
 </div>

 {/* Concept 2 */}
 <div className="bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-2xl hover:border-white/20 transition-all flex flex-col justify-between">
 <div>
 <div className="w-14 h-14 bg-blue-500/20 border border-blue-500/40 text-blue-400 rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
 <Layers size={28} />
 </div>
 <h3 className="text-3xl font-black text-white mb-6 leading-tight">Loose Volume vs. Compacted Volume</h3>
 <p className="text-white/80 text-lg leading-relaxed mb-6">
 Asphalt volume isn't fixed ,it changes depending on whether the material is <strong>loose</strong> (as delivered/laid, before rolling) or <strong>compacted</strong> (after rolling, the finished in-place layer).
 </p>
 <div className="space-y-6">
 <div className="bg-black/20 p-5 rounded-2xl border border-white/5">
 <strong className="text-white block mb-2 text-lg">Why it shrinks:</strong>
 <p className="text-white/70">Hot mix asphalt contains air voids when it's freshly laid. Compaction rollers press the aggregate particles closer together and drive out much of that air, reducing the volume the material occupies.</p>
 </div>
 <div className="bg-black/20 p-5 rounded-2xl border border-white/5">
 <strong className="text-white block mb-2 text-lg">Typical bulking factors:</strong>
 <p className="text-white/70">Loose asphalt volume is generally higher than compacted volume, because compaction removes air voids that are present when the mix is freshly laid. The exact difference depends on the mix design, temperature, and compaction requirements, so any bulking factor used for planning should be confirmed against the specific mix and site conditions rather than treated as a fixed constant.</p>
 </div>
 </div>
 </div>
 <div className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-6 text-base text-blue-100 shadow-inner mt-8">
 <strong className="text-white block mb-2 text-lg">Why it matters for ordering:</strong> 
 This calculator estimates material based on the finished, compacted pavement dimensions ,the volume you actually want on the road once rolled. If you're ordering loose mix by weight from a plant, the plant-side loose volume will be larger than the compacted design volume. Mixing these two numbers up leads to either under-ordering (if compacted volume is treated as the loose delivery volume) or over-ordering (the reverse). Always confirm with your supplier which volume basis their quote is built on.
 </div>
 </div>

 </div>

 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
 <div className="order-2 lg:order-1">
 <h3 className="text-3xl font-black text-white mb-6 drop-shadow-md">Multi-Layer Pavement Calculations</h3>
 <p className="text-white/80 text-lg leading-relaxed mb-8">
 Most pavements aren't a single layer ,they typically consist of a base course, binder course, and wearing course, each with different thickness and bitumen content. Calculating them separately and summing the results gives a far more accurate material estimate than treating the pavement as one uniform layer.
 </p>
 
 <div className="bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden text-base shadow-2xl ">
 <div className="p-6 bg-black/40 border-b border-white/5">
 <h4 className="font-bold text-white">Worked example (1,000 m × 3.5 m section):</h4>
 </div>
 <div className="overflow-x-auto">
 <table className="w-full text-left text-white/90 min-w-[500px]">
 <thead className="bg-black/20 border-b border-white/10 text-white/50 text-sm uppercase tracking-wider">
 <tr>
 <th className="p-4 md:p-5">Layer</th>
 <th className="p-4 md:p-5">Thickness</th>
 <th className="p-4 md:p-5">Bitumen %</th>
 <th className="p-4 md:p-5">Mix Weight</th>
 <th className="p-4 md:p-5 text-orange-300">Bitumen Weight</th>
 </tr>
 </thead>
 <tbody className="divide-y divide-white/5 font-medium">
 <tr className="hover:bg-white/5 transition-colors">
 <td className="p-4 md:p-5 font-bold text-white">Base course</td>
 <td className="p-4 md:p-5 text-white/70">75 mm</td>
 <td className="p-4 md:p-5 text-white/70">4.0%</td>
 <td className="p-4 md:p-5 font-mono text-sm">616.9 t</td>
 <td className="p-4 md:p-5 text-orange-300 font-mono text-sm bg-orange-900/10">24.7 t</td>
 </tr>
 <tr className="hover:bg-white/5 transition-colors">
 <td className="p-4 md:p-5 font-bold text-white">Binder course</td>
 <td className="p-4 md:p-5 text-white/70">50 mm</td>
 <td className="p-4 md:p-5 text-white/70">4.5%</td>
 <td className="p-4 md:p-5 font-mono text-sm">411.3 t</td>
 <td className="p-4 md:p-5 text-orange-300 font-mono text-sm bg-orange-900/10">18.5 t</td>
 </tr>
 <tr className="hover:bg-white/5 transition-colors">
 <td className="p-4 md:p-5 font-bold text-white">Wearing course</td>
 <td className="p-4 md:p-5 text-white/70">40 mm</td>
 <td className="p-4 md:p-5 text-white/70">5.5%</td>
 <td className="p-4 md:p-5 font-mono text-sm">329.0 t</td>
 <td className="p-4 md:p-5 text-orange-300 font-mono text-sm bg-orange-900/10">18.1 t</td>
 </tr>
 </tbody>
 <tfoot className="bg-gradient-to-r from-orange-900/40 to-orange-900/10 border-t border-orange-500/20 font-black">
 <tr>
 <td colSpan={4} className="p-5 text-right text-orange-100">Total bitumen required across all three layers:</td>
 <td className="p-5 text-orange-400 font-mono text-lg">≈ 61.3 t</td>
 </tr>
 </tfoot>
 </table>
 </div>
 </div>
 <p className="text-white/60 text-sm mt-4 italic px-2">
 Noticeably different from calculating a single average layer, and closer to what a real procurement order needs.
 </p>
 </div>
 
 {/* Enhanced Image Container */}
 <div className="order-1 lg:order-2 w-full">
 <div className="relative rounded-[2rem] p-4 sm:p-6 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.3)] group">
 <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
 <div className="relative w-full aspect-video sm:aspect-[4/3] rounded-xl overflow-hidden bg-black/40 border border-white/5">
 <Image 
 src="/bitumen-calculator-asphalt-pavement-estimation.webp" 
 alt="Asphalt pavement estimation and multi-layer calculation" 
 fill 
 className="object-contain transition-transform duration-700 group-hover:scale-105" 
 sizes="(max-width: 768px) 100vw, 50vw"
 />
 </div>
 </div>
 </div>
 </div>

 <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
 {/* Box 1 */}
 <div className="bg-gradient-to-b from-white/10 to-transparent border border-white/10 rounded-[2rem] p-8 hover:border-white/30 transition-all duration-300 shadow-xl hover:-translate-y-1">
 <div className="w-14 h-14 bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
 <Droplets size={28} />
 </div>
 <h3 className="font-black text-white text-2xl mb-4 leading-tight">Converting Bitumen Weight to Litres and Drums</h3>
 <p className="text-white/80 text-base mb-6 leading-relaxed">
 Bitumen is often specified by weight (tonnes) in mix design but purchased or transported by volume (litres or drums), so this conversion comes up constantly in procurement.
 </p>
 <div className="bg-black/40 p-4 rounded-xl border border-white/5 mb-6 text-center">
 <span className="text-cyan-300 font-mono font-bold text-sm md:text-base">Litres = Bitumen Weight (kg) ÷ Binder Density (kg/L)</span>
 </div>
 <p className="text-white/70 text-sm mb-4">Using a typical binder density of approx 1.03 kg/L:</p>
 <div className="bg-cyan-900/20 rounded-xl overflow-hidden border border-cyan-500/20">
 <div className="p-3 bg-cyan-900/40 border-b border-cyan-500/20 text-center font-mono text-sm text-cyan-100 font-bold">
 22,620 kg ÷ 1.03 kg/L ≈ 21,961 litres
 </div>
 <table className="w-full text-sm text-white/80">
 <tbody className="divide-y divide-cyan-500/10">
 <tr className="hover:bg-white/5">
 <td className="p-3 pl-4">20 L drum</td>
 <td className="p-3 pr-4 text-right font-mono text-cyan-200">≈ 20.6 kg</td>
 </tr>
 <tr className="hover:bg-white/5">
 <td className="p-3 pl-4">200 L drum</td>
 <td className="p-3 pr-4 text-right font-mono text-cyan-200">≈ 206 kg</td>
 </tr>
 </tbody>
 </table>
 </div>
 </div>

 {/* Box 2 */}
 <div className="bg-gradient-to-b from-white/10 to-transparent border border-white/10 rounded-[2rem] p-8 hover:border-white/30 transition-all duration-300 shadow-xl hover:-translate-y-1">
 <div className="w-14 h-14 bg-yellow-500/20 border border-yellow-500/40 text-yellow-400 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(234,179,8,0.2)]">
 <Zap size={28} />
 </div>
 <h3 className="font-black text-white text-2xl mb-4 leading-tight">Bitumen Calculator vs. Spray Application Calculator</h3>
 <p className="text-white/80 text-base mb-6 leading-relaxed">
 These two calculations are often confused because both involve "how much bitumen," but they solve different problems.
 </p>
 <div className="space-y-4 mb-6">
 <div className="bg-black/20 p-4 rounded-xl border border-white/5">
 <strong className="text-white block mb-1">Mix-design calculation (this page):</strong>
 <span className="text-white/70 text-sm">Estimates the bitumen bound inside the hot mix asphalt itself ,measured as a percentage of total mix weight (kg per tonne of mix).</span>
 </div>
 <div className="bg-black/20 p-4 rounded-xl border border-white/5">
 <strong className="text-white block mb-1">Spray/coat-rate calculation:</strong>
 <span className="text-white/70 text-sm">Estimates bitumen sprayed onto a surface for tack/prime coats ,measured as a rate per area (kg/m² or L/m²).</span>
 </div>
 </div>
 <div className="bg-yellow-900/20 p-4 rounded-xl border border-yellow-500/20 text-sm text-yellow-100/90 italic">
 If your project involves both ,an HMA layer plus a tack coat beneath it ,the two quantities need to be calculated and ordered separately; one does not substitute for the other.
 </div>
 </div>

 {/* Box 3 */}
 <div className="bg-gradient-to-b from-white/10 to-transparent border border-white/10 rounded-[2rem] p-8 hover:border-white/30 transition-all duration-300 shadow-xl hover:-translate-y-1">
 <div className="w-14 h-14 bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
 <DollarSign size={28} />
 </div>
 <h3 className="font-black text-white text-2xl mb-4 leading-tight">What Affects Bitumen Price</h3>
 <p className="text-white/80 text-base mb-6 leading-relaxed">
 Bitumen pricing isn't fixed the way a manufactured product's list price might be ,it fluctuates for several structural reasons:
 </p>
 <ul className="space-y-3 mb-6">
 <li className="flex items-start gap-3 bg-black/20 p-3 rounded-xl border border-white/5">
 <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
 <span className="text-white/80 text-sm"><strong className="text-white">Crude oil linkage</strong> ,bitumen is a refinery by-product, so its cost tracks crude oil prices to a significant degree.</span>
 </li>
 <li className="flex items-start gap-3 bg-black/20 p-3 rounded-xl border border-white/5">
 <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
 <span className="text-white/80 text-sm"><strong className="text-white">Grade</strong> — <Link href="/blog/bitumen-grades-explained" className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors">penetration grades, VG, and PG bitumen</Link> carry different production costs, and polymer-modified binders (PMB) carry a further premium.</span>
 </li>
 <li className="flex items-start gap-3 bg-black/20 p-3 rounded-xl border border-white/5">
 <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
 <span className="text-white/80 text-sm"><strong className="text-white">Region</strong> ,proximity to refineries, import duties, and local demand all shift local pricing.</span>
 </li>
 <li className="flex items-start gap-3 bg-black/20 p-3 rounded-xl border border-white/5">
 <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
 <span className="text-white/80 text-sm"><strong className="text-white">Order size</strong> ,bulk tanker orders typically carry lower per-tonne pricing than small drummed quantities.</span>
 </li>
 </ul>
 <div className="bg-emerald-900/20 p-4 rounded-xl border border-emerald-500/20 text-sm text-emerald-100/90 font-medium text-center">
 Always confirm current pricing with a supplier before finalizing a budget.
 </div>
 </div>
 </div>

 </div>
 </section>

 {/* ═══════════════════════════════
 MATERIALS COMPARISON
 ═══════════════════════════════ */}
 <section className="py-24 bg-black/20 border-y border-white/5 relative">
 <div className="max-w-7xl mx-auto px-6 lg:px-8">
 <div className="flex flex-col lg:flex-row gap-16 items-center">
 {/* Enhanced Image Container */}
 <div className="lg:w-1/2 w-full order-2 lg:order-1">
 <div className="relative rounded-[2rem] p-4 sm:p-6 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.3)] group">
 <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
 <div className="relative w-full aspect-video sm:aspect-[4/3] rounded-xl overflow-hidden bg-black/40 border border-white/5">
 <Image 
 src="/bitumen-asphalt-aggregate-materials-comparison.webp" 
 alt="Comparison of bitumen, asphalt, and aggregate materials" 
 fill 
 className="object-contain transition-transform duration-700 group-hover:scale-105" 
 sizes="(max-width: 768px) 100vw, 50vw"
 />
 </div>
 </div>
 </div>
 <div className="lg:w-1/2 order-1 lg:order-2">
 <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 drop-shadow-lg leading-tight">
 Bitumen vs. Asphalt vs. Tar vs. Tarmac
 </h2>
 <p className="text-white/80 text-lg leading-relaxed mb-8">
 These four terms get used interchangeably in everyday speech, but in civil engineering, they mean different things:
 </p>
 
 <div className="space-y-6">
 <div className="bg-gradient-to-r from-orange-500/10 to-transparent border border-orange-500/20 p-6 rounded-3xl shadow-lg hover:bg-orange-500/10 transition-colors">
 <h3 className="text-2xl font-black text-orange-400 mb-2">Bitumen</h3>
 <p className="text-white/80 text-base leading-relaxed">The black, sticky binder itself, derived from crude oil refining. It's an ingredient, not a finished road surface. Curious about properties and grades? Read our full guide on  <Link href="/blog/what-is-bitumen" className="text-orange-400 hover:text-orange-300 underline underline-offset-2">What is bitumen?</Link>.</p>
 </div>
 
 <div className="bg-gradient-to-r from-white/10 to-transparent border border-white/10 p-6 rounded-3xl shadow-lg hover:bg-white/10 transition-colors">
 <h3 className="text-2xl font-black text-white mb-2">Asphalt</h3>
 <p className="text-white/80 text-base leading-relaxed">The finished mixture of bitumen binder and mineral aggregate, laid and compacted to form the pavement layer. While hot mix is standard for construction, <Link href="/blog/cold-mix-bitumen" className="text-teal-400 hover:text-teal-300 underline underline-offset-2">cold mix bitumen</Link> is often used for quick repairs without heating equipment. (In American English, "asphalt" is also sometimes used to mean the binder itself ,a common source of cross-Atlantic confusion).</p>
 </div>

 <div className="bg-black/30 border border-white/5 p-6 rounded-3xl shadow-inner">
 <h3 className="text-2xl font-black text-white/50 mb-2">Tar & Tarmac</h3>
 <p className="text-white/60 text-base leading-relaxed mb-4"><strong className="text-white/80">Tar</strong> ,a similar-looking black binder, but derived from coal rather than petroleum. Tar was used historically in road construction and is now largely phased out in most modern paving due to health and environmental concerns.</p>
 <p className="text-white/60 text-base leading-relaxed"><strong className="text-white/80">Tarmac</strong> ,short for "tar-bound macadam," a historical road-surfacing method. The word has stuck around colloquially to mean any paved road surface, even though modern pavements are almost always bitumen-based asphalt rather than true tar-bound macadam.</p>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* ═══════════════════════════════
 REFERENCE TABLE & OBC
 ═══════════════════════════════ */}
 <section id="reference" className="py-24 relative">
 <div className="max-w-7xl mx-auto px-6 lg:px-8">
 
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
 {/* Table side */}
 <div className="bg-gradient-to-br from-white/10 to-transparent rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-white/20">
 <div className="flex items-start gap-5 mb-8">
 <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0 shadow-inner">
 <Info size={28} className="text-white" />
 </div>
 <div>
 <h2 className="text-3xl font-black text-white drop-shadow-sm leading-tight">
 Typical Bitumen Content by Mix Type
 </h2>
 <p className="text-white/70 text-base mt-2">
 (Reference Table)
 </p>
 </div>
 </div>

 <div className="space-y-4">
 {REFERENCE_DATA.map((item) => (
 <div key={item.name} className="flex justify-between items-center p-5 rounded-2xl border border-white/10 bg-black/30 transition-all cursor-default hover:bg-black/50 hover:scale-[1.02] shadow-lg">
 <div className="flex items-center gap-4">
 <span className="w-3 h-3 rounded-full shrink-0 shadow-[0_0_10px_rgba(255,255,255,0.8)] bg-white" />
 <div>
 <h3 className="font-bold text-white text-base md:text-lg">{item.name}</h3>
 <p className="text-sm text-white/60 mt-1">{item.desc}</p>
 </div>
 </div>
 <span className="font-mono font-black px-4 py-2 rounded-xl border border-white/20 bg-white/10 text-white text-sm md:text-base ml-4 shrink-0 shadow-inner">
 {item.range}
 </span>
 </div>
 ))}
 </div>
 
 <div className="mt-8 bg-black/20 p-5 rounded-2xl border border-white/5">
 <strong className="text-white text-sm block mb-2">These ranges shift based on:</strong>
 <ul className="text-white/60 text-sm space-y-2 list-disc list-inside">
 <li><strong className="text-white/80">Traffic loading</strong> ,heavier traffic often calls for stiffer, lower-binder mixes to resist rutting.</li>
 <li><strong className="text-white/80">Climate</strong> ,hotter regions may need modified binders or adjusted content to avoid softening.</li>
 <li><strong className="text-white/80">Aggregate grading</strong> ,finer gradations generally need more binder to coat the increased surface area.</li>
 </ul>
 <p className="text-white/50 text-xs mt-4 italic text-center">
 None of these figures replace an approved, lab-verified mix design for the actual project.
 </p>
 </div>
 </div>

 {/* OBC side */}
 <div className="flex flex-col justify-center">
 <h2 className="text-4xl font-black text-white mb-6 drop-shadow-lg">
 Optimum Bitumen Content (OBC) & Mix Design Standards
 </h2>
 <p className="text-white/80 text-lg leading-relaxed mb-8">
 A reference table gives a starting range, but the actual percentage used on a project comes from a formal mix design process that determines the Optimum Bitumen Content (OBC).
 </p>
 
 <div className="space-y-6">
 <div className="bg-gradient-to-r from-orange-500/10 to-transparent p-6 rounded-3xl border border-orange-500/20 shadow-lg hover:border-orange-500/40 transition-colors">
 <h3 className="text-2xl font-black  text-teal-400 mb-3">Marshall Method</h3>
 <p className="text-white/80 text-base leading-relaxed">Compacts trial mixes at several bitumen percentages, then tests stability and flow to find the percentage that best balances strength, density, and air voids. It remains widely used, particularly in South Asia and parts of the Middle East.</p>
 </div>
 
 <div className="bg-gradient-to-r from-blue-500/10 to-transparent p-6 rounded-3xl border border-blue-500/20 shadow-lg hover:border-blue-500/40 transition-colors">
 <h3 className="text-2xl font-black text-blue-500 mb-3">Superpave Method</h3>
 <p className="text-white/80 text-base leading-relaxed">A more performance-based approach developed in the US that considers traffic level, climate, and aggregate properties using gyratory compaction rather than impact compaction, aiming to better predict long-term field performance.</p>
 </div>

 <div className="bg-black/30 p-8 rounded-3xl border border-white/10 shadow-inner">
 <h4 className="text-sm font-black text-white/50 mb-4 uppercase tracking-widest">Governing standards and bodies</h4>
 <ul className="text-white/80 text-base space-y-4">
 <li className="flex items-start gap-3"><span className="text-white font-bold w-1/3"><a href="https://www.transportation.org/" target="_blank" rel="noopener noreferrer" className=" text-teal-400 underline hover:underline">AASHTO</a> / <a href="https://www.asphaltinstitute.org/" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline">MS-2</a></span> <span className="w-2/3 text-white/60">Widely referenced mix design procedures in North America.</span></li>
 <li className="flex items-start gap-3"><span className="text-white font-bold w-1/3">BS EN 12591 / EN 13108</span> <span className="w-2/3 text-white/60">European bitumen and asphalt mixture standards.</span></li>
 <li className="flex items-start gap-3"><span className="text-white font-bold w-1/3"><a href="https://morth.nic.in/" target="_blank" rel="noopener noreferrer" className=" text-teal-400 hover:underline">MoRTH</a> specifications</span> <span className="w-2/3 text-white/60">The standard reference for road and bridge works in India.</span></li>
 </ul>
 </div>
 
 <p className="text-white/70 text-sm font-medium italic bg-white/5 p-4 rounded-xl border border-white/10">
 A reference table can guide early estimating, but only lab-tested OBC ,derived from the specific aggregate source, binder grade, and traffic condition of the project ,should be used for final construction quantities.
 </p>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* ═══════════════════════════════
 WHY USE & FAQ
 ═══════════════════════════════ */}
 <section className="py-24 bg-black/30 border-t border-white/5 relative overflow-hidden">
 <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
 
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
 
 {/* Left side: Why Use, Users & Mistakes */}
 <div className="lg:col-span-5 space-y-8">
 
 <div className="bg-gradient-to-br from-orange-500/20 to-pink-600/20 rounded-[2rem] p-8 md:p-10 border border-white/20 shadow-2xl">
  <h2 className="text-3xl font-black text-white mb-4 flex items-center gap-3">
                 <Zap className="text-orange-400" size={32}/> Why Use BitumenCalcPro?
                </h2>
 <p className="text-white/90 text-base leading-relaxed mb-6 font-medium">
 BitumenCalcPro provides a transparent way to estimate asphalt material requirements without manually performing multiple calculations. Instead of showing only a final number, the calculator explains how pavement dimensions, <Link href="/blog/bitumen-density-chart" className="text-orange-400 hover:underline">density</Link>, and <Link href="/blog/what-is-bitumen" className="text-orange-400 hover:underline">bitumen</Link> percentage affect the final result. 
 </p>
 <div className="bg-black/30 rounded-2xl p-6 border border-white/10">
  <h3 className="font-bold text-white mb-4 uppercase tracking-widest text-xs">Benefits</h3>
 <ul className="space-y-3 text-sm md:text-base text-white/90 font-medium">
 <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-orange-400 shrink-0"/> Faster preliminary estimates</li>
 <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-orange-400 shrink-0"/> Clear calculation methodology</li>
 <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-orange-400 shrink-0"/> Helps reduce ordering mistakes</li>
 <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-orange-400 shrink-0"/> Useful for engineers, contractors, and students</li>
 <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-orange-400 shrink-0"/> Supports early project planning</li>
 </ul>
 </div>
 </div>

 <div className="bg-white/5 rounded-[2rem] p-8 border border-white/10 shadow-xl">
  <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                 <Users className="text-violet-400" size={28}/> Who Uses This Calculator
                </h2>
 <ul className="space-y-4 text-base text-white/70">
 <li className="flex flex-col"><strong className="text-white">Civil engineers</strong> <span>Preliminary pavement quantity calculations and project planning.</span></li>
 <li className="flex flex-col"><strong className="text-white">Site engineers</strong> <span>Quick material estimates before construction activities begin.</span></li>
 <li className="flex flex-col"><strong className="text-white">Road contractors</strong> <span>Approximate bitumen and aggregate quantities for tendering and procurement.</span></li>
 <li className="flex flex-col"><strong className="text-white">Quantity surveyors</strong> <span>Early-stage cost estimation and material planning.</span></li>
 <li className="flex flex-col"><strong className="text-white">Engineering students</strong> <span>Understanding the relationship between pavement dimensions, mix density, and bitumen percentage.</span></li>
 </ul>
 </div>

 <div className="bg-gradient-to-br from-red-900/20 to-black/40 rounded-[2rem] p-8 border border-red-500/20 shadow-xl">
  <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                 <AlertTriangle className="text-red-400" size={28}/> Common Mistakes in Bitumen Calculation
                </h2>
 <ul className="space-y-4 text-base text-white/80">
 <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" /> <span><strong>Density mix-up</strong> ,using binder density (see our <Link href="/blog/bitumen-density-chart" className="text-red-400 font-bold hover:underline">density chart</Link>) where mix density is required (or vice versa), which can throw results off by more than half.</span></li>
 <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" /> <span><strong>By-mix-weight vs. by-aggregate-weight confusion</strong> ,bitumen content is normally expressed as a percentage of total mix weight, not aggregate weight alone.</span></li>
 <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" /> <span><strong>Skipping a waste allowance</strong> ,real-world paving involves handling loss, spillage, and compaction variability. A calculator gives the theoretical material requirement; site teams typically add a contingency margin on top.</span></li>
 <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" /> <span><strong>Using loose volume where compacted volume was needed</strong> ,mixing up the two volume bases is one of the most common causes of mismatched delivery quantities on site.</span></li>
 </ul>
 <div className="mt-8 pt-8 border-t border-red-500/20">
  <h3 className="text-white font-black mb-3">Limitations of This Calculator</h3>
 <p className="text-sm text-white/60 leading-relaxed mb-3">
 This calculator produces an engineering estimate, not a certified material order. Specifically, it:
 </p>
 <ul className="list-disc list-inside text-sm text-white/60 space-y-1 mb-4 ml-1">
 <li>Uses the density and bitumen content values you enter</li>
 <li>Does not account for compaction losses, handling waste, or site-specific variability</li>
 <li>Assumes a single uniform layer unless you calculate each pavement course separately</li>
 <li>Does not calculate spray application rates for tack, prime, or seal coats</li>
 </ul>
 <p className="text-sm text-white/70 font-medium">
 Should not be used as the sole basis for final procurement, tendering, or construction decisions. Always confirm final quantities against laboratory-tested mix design data and project specifications.
 </p>
 </div>
 </div>
 </div>

 {/* Right side: FAQ & Conclusion */}
 <div className="lg:col-span-7">
 <div className="flex items-center gap-4 mb-10">
 <HelpCircle size={40} className="text-teal-400 drop-shadow-[0_0_15px_rgba(45,212,191,0.5)]" />
 <h2 className="text-4xl sm:text-5xl font-black text-white drop-shadow-lg">Frequently Asked Questions</h2>
 </div>
 
 <div className="space-y-5">
 {FAQ_DATA.map((faq, i) => (
 <div key={i} className="bg-white/5 border border-white/10 rounded-[1.5rem] p-6 md:p-8 hover:bg-white/10 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 duration-300">
 <h3 className="text-xl font-bold text-white mb-4 leading-tight">{faq.q}</h3>
 <p className="text-white/70 text-base leading-relaxed">{faq.a}</p>
 </div>
 ))}
 </div>

 <div className="mt-16 bg-gradient-to-br from-teal-500/20 via-blue-600/20 to-purple-600/20 rounded-[2.5rem] p-10 md:p-12 border border-white/20 shadow-[0_0_50px_rgba(0,0,0,0.3)]">
  <h2 className="text-3xl font-black text-white mb-6 drop-shadow-md">Conclusion</h2>
  <p className="text-white/90 text-lg leading-relaxed mb-6 font-medium">
  Estimating bitumen and aggregate quantities doesn&apos;t need to involve manual formula work every time — but understanding what&apos;s behind the numbers matters, especially where mix density, binder density, and compaction factors are easy to mix up.
  </p>
  <p className="text-white/90 text-lg leading-relaxed font-medium">
  Used alongside an approved mix design, this calculator gives a fast, transparent way to plan pavement material quantities before committing to a final order.
  </p>
 </div>
 </div>
 </div>
 </div>
 </section>




 {/* ═══════════════════════════════
 BOTTOM CTA STRIP
 ═══════════════════════════════ */}
 <section className="py-24 relative overflow-hidden bg-black/40 border-t border-white/5">
 <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-transparent pointer-events-none" />
 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />
 
 <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
 <h2 className="text-3xl md:text-5xl font-black text-white mb-6 drop-shadow-lg">
 Questions or Feedback?
 </h2>
 <p className="text-white/80 text-lg md:text-xl mb-10 max-w-xl mx-auto leading-relaxed font-medium">
 We're engineers too ,if you spot an error, want a new feature, or
 just want to say hello, we&apos;d love to hear from you.
 </p>
 <div className="flex flex-col sm:flex-row gap-5 justify-center">
 <Link
 href="/contact-us"
 className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 active:scale-95 text-white px-8 py-4 rounded-full font-black text-base transition-all shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:shadow-[0_0_30px_rgba(249,115,22,0.6)]"
 >
 Get in Touch
 <ChevronRight size={20} />
 </Link>
 <Link
 href="/about-us"
 className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/20 text-white px-8 py-4 rounded-full font-bold text-base transition-all shadow-lg"
 >
 About BitumenCalcPro
 </Link>
 </div>
 </div>
 </section>

 </>
 );
}