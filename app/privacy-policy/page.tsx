// app/privacy-policy/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import LegalLayout from "../components/LegalLayout";
import {
  Eye,
  Lock,
  Share2,
  Cookie,
  Mail,
  RefreshCw,
  BarChart2,
  ShieldAlert,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";

/* ─── Site-wide design tokens ─── */
const BRAND_CTA = "bg-violet-600 hover:bg-violet-500 shadow-md shadow-violet-200";

export const metadata: Metadata = {
  title: "Privacy Policy | BitumenCalcPro",
  description:
    "Comprehensive Privacy Policy for BitumenCalcPro. Learn how we collect, use, and protect your information, including Google AdSense, cookie management, GDPR, and CCPA compliance.",
  alternates: { canonical: "https://bitumencalcpro.com/privacy-policy" },
  openGraph: {
    title: "Privacy Policy | BitumenCalcPro",
    description:
      "Learn how BitumenCalcPro protects your personal data, handles cookies, and adheres to Google AdSense, GDPR, and CCPA privacy standards.",
    url: "https://bitumencalcpro.com/privacy-policy",
    siteName: "BitumenCalcPro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | BitumenCalcPro",
    description:
      "Learn how BitumenCalcPro protects your personal data, handles cookies, and adheres to Google AdSense, GDPR, and CCPA privacy standards.",
  },
};

export default function PrivacyPolicyPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy | BitumenCalcPro",
    url: "https://bitumencalcpro.com/privacy-policy",
    description:
      "Comprehensive Privacy Policy for BitumenCalcPro including Google AdSense disclosures, cookie consent, GDPR, CCPA, and data retention guidelines.",
    dateModified: "2026-11-15",
    isPartOf: {
      "@type": "WebSite",
      name: "BitumenCalcPro",
      url: "https://bitumencalcpro.com",
    },
  };

  return (
    <>
      <Script
        id="schema-privacy-page"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <LegalLayout
        title="Privacy Policy"
        subtitle="We believe transparency and user privacy are foundational. Here is an explicit, clear breakdown of how data is handled across BitumenCalcPro."
        lastUpdated="November 15, 2026"
        badge="Your Privacy Matters"
        accentColor="violet"
      >
        {/* Executive Summary Callout */}
        <div className="bg-violet-50 border border-violet-100 rounded-2xl p-6 mb-10">
          <p className="text-slate-700 text-base leading-relaxed m-0">
            <strong className="text-violet-700">Summary in Brief:</strong> BitumenCalcPro
            (
            <a
              href="https://bitumencalcpro.com"
              className="text-violet-700 underline font-medium"
            >
              bitumencalcpro.com
            </a>
            ) is an open-access civil engineering and asphalt calculation resource. We do not
            require user accounts, we never sell your personal data, and we collect only the minimal
            information required to provide our calculation utilities and serve contextual,
            non-intrusive advertisements. For any privacy or data inquiries, you can reach us directly
            at{" "}
            <a
              href="mailto:contact@bitumencalcpro.com"
              className="text-violet-700 font-bold underline hover:text-violet-900 transition-colors"
            >
              contact@bitumencalcpro.com
            </a>
            .
          </p>
        </div>

        {/* Sections Container */}
        <div className="space-y-10">
          {/* Section 1: Information We Collect */}
          <div className="rounded-2xl border border-violet-100 bg-violet-50/50 p-7">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-violet-100 border border-violet-200 flex items-center justify-center">
                <Eye size={20} className="text-violet-600" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 m-0">
                1. Information We Collect
              </h2>
            </div>
            <div className="space-y-5">
              <div>
                <h3 className="font-semibold text-slate-800 mb-1 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-violet-600 text-white text-xs flex items-center justify-center shrink-0">
                    1
                  </span>
                  Information You Voluntarily Provide
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed ml-7 m-0">
                  When you submit an inquiry through our contact form or send an email to{" "}
                  <a
                    href="mailto:contact@bitumencalcpro.com"
                    className="text-violet-600 font-medium underline"
                  >
                    contact@bitumencalcpro.com
                  </a>
                  , we collect your name, email address, inquiry subject, and message contents. We
                  use this information strictly to respond to your specific question, feedback, or
                  technical calculation report.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-800 mb-1 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-violet-600 text-white text-xs flex items-center justify-center shrink-0">
                    2
                  </span>
                  Log Files & Automated Technical Data
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed ml-7 m-0">
                  Like standard web applications, our web hosting servers automatically record
                  protocol log files. These records include Internet Protocol (IP) addresses,
                  browser type, Internet Service Provider (ISP), date/time stamps, referring/exit
                  pages, and platform type. This data is strictly aggregated and non-personally
                  identifiable; it is utilized to analyze server load, administer the site, prevent
                  denial-of-service attempts, and ensure site stability.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-800 mb-1 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-violet-600 text-white text-xs flex items-center justify-center shrink-0">
                    3
                  </span>
                  Calculations & Client-Side Inputs
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed ml-7 m-0">
                  The inputs you enter into our calculators (pavement length, width, thickness, mix
                  density, asphalt cement percentage, and tank dimensions) are processed locally
                  within your client browser session. We do not store, log, or transmit your
                  confidential project dimensions to any remote database.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: Google AdSense & Advertising Disclosures */}
          <div className="rounded-2xl border border-orange-200 bg-orange-50/60 p-7">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-orange-100 border border-orange-200 flex items-center justify-center">
                <BarChart2 size={20} className="text-orange-600" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 m-0">
                2. Google AdSense & Third-Party Advertising
              </h2>
            </div>
            <div className="space-y-5 text-sm text-slate-700 leading-relaxed">
              <p>
                BitumenCalcPro partners with third-party advertising vendors, predominantly{" "}
                <strong>Google AdSense</strong>, to serve advertisements when you visit our website.
                These companies may use cookies and web beacons to collect non-personally
                identifiable information about your visits to this and other websites in order to
                provide advertisements about goods and services of interest to you.
              </p>

              <div className="bg-white/80 border border-orange-200 rounded-xl p-5 space-y-3">
                <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-orange-600" />
                  Mandatory Google AdSense Disclosures:
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-slate-600">
                  <li>
                    <strong>Third-Party Vendor Cookies:</strong> Third-party vendors, including
                    Google, use cookies to serve ads based on a user&apos;s prior visits to this
                    website or other websites on the internet.
                  </li>
                  <li>
                    <strong>DoubleClick DART Cookie:</strong> Google&apos;s use of advertising
                    cookies enables it and its partners to serve ads to our users based on their
                    visit to BitumenCalcPro and/or other sites across the World Wide Web.
                  </li>
                  <li>
                    <strong>Personalized Ads Opt-Out:</strong> Users may opt out of personalized
                    advertising at any time by visiting{" "}
                    <a
                      href="https://adssettings.google.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-700 font-semibold underline inline-flex items-center gap-1"
                    >
                      Google Ads Settings <ExternalLink size={12} />
                    </a>
                    .
                  </li>
                  <li>
                    <strong>Industry-Wide Opt-Out Tools:</strong> Alternatively, users can opt out
                    of a third-party vendor&apos;s use of cookies for personalized advertising by
                    visiting the{" "}
                    <a
                      href="https://optout.aboutads.info/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-700 font-semibold underline inline-flex items-center gap-1"
                    >
                      AboutAds Digital Advertising Alliance Opt-Out <ExternalLink size={12} />
                    </a>{" "}
                    or the{" "}
                    <a
                      href="https://www.networkadvertising.org/choices/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-700 font-semibold underline inline-flex items-center gap-1"
                    >
                      Network Advertising Initiative (NAI) Opt-Out Portal{" "}
                      <ExternalLink size={12} />
                    </a>
                    . European residents can manage preferences via the{" "}
                    <a
                      href="https://www.youronlinechoices.eu/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-700 font-semibold underline inline-flex items-center gap-1"
                    >
                      Your Online Choices (EDAA) <ExternalLink size={12} />
                    </a>
                    .
                  </li>
                  <li>
                    <strong>Google Advertising Policies:</strong> For detailed information on how
                    Google processes data in connection with its advertising products, please consult{" "}
                    <a
                      href="https://policies.google.com/technologies/ads"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-700 font-semibold underline inline-flex items-center gap-1"
                    >
                      Google Advertising Technologies & Privacy Policy{" "}
                      <ExternalLink size={12} />
                    </a>
                    .
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 3: Cookie Management */}
          <div className="rounded-2xl border border-cyan-100 bg-cyan-50/50 p-7">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-cyan-100 border border-cyan-200 flex items-center justify-center">
                <Cookie size={20} className="text-cyan-600" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 m-0">
                3. Cookies and Web Beacons
              </h2>
            </div>
            <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
              <p>
                A cookie is a small text file saved to your device by a web server. BitumenCalcPro
                itself uses minimal essential cookies to preserve your display preferences (such as
                metric vs. imperial measurement units). Third-party partners (such as Google
                Analytics and Google AdSense) may set cookies to measure traffic patterns and deliver
                tailored advertising.
              </p>
              <p>
                <strong>How to Control and Disable Cookies:</strong> You can choose to disable or
                selectively turn off our cookies or third-party cookies in your browser settings, or by
                managing preferences in programs such as Norton or Kaspersky Internet Security.
                However, our calculators remain 100% operational even if all browser cookies are
                disabled. For guidance on controlling cookies in specific browsers, refer to your
                browser documentation:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-slate-700">
                <li>
                  <a
                    href="https://support.google.com/chrome/answer/95647"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-700 underline font-medium"
                  >
                    Google Chrome Cookie Management
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-700 underline font-medium"
                  >
                    Mozilla Firefox Privacy & Cookies
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-700 underline font-medium"
                  >
                    Apple Safari Cookie Settings
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 4: Analytics Tools */}
          <div className="rounded-2xl border border-blue-100 bg-blue-50/50 p-7">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-100 border border-blue-200 flex items-center justify-center">
                <Lock size={20} className="text-blue-600" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 m-0">
                4. Web Analytics & Measurement
              </h2>
            </div>
            <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
              <p>
                We may use Google Analytics to measure visitor aggregate traffic metrics (e.g.,
                which pavement calculation guides are visited most frequently, average session
                duration, and geographical distribution). Google Analytics collects non-personally
                identifiable data. To learn how Google uses data when you use partner sites, visit{" "}
                <a
                  href="https://policies.google.com/technologies/partner-sites"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 font-semibold underline inline-flex items-center gap-1"
                >
                  How Google Uses Information from Sites or Apps that Use Our Services{" "}
                  <ExternalLink size={12} />
                </a>
                .
              </p>
              <p>
                You can prevent Google Analytics from identifying you on return visits by downloading
                and installing the{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 font-semibold underline inline-flex items-center gap-1"
                >
                  Google Analytics Opt-Out Browser Add-On <ExternalLink size={12} />
                </a>
                .
              </p>
            </div>
          </div>

          {/* Section 5: GDPR Rights (European Union & UK) */}
          <div className="rounded-2xl border border-violet-100 bg-violet-50/50 p-7">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-violet-100 border border-violet-200 flex items-center justify-center">
                <RefreshCw size={20} className="text-violet-600" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 m-0">
                5. European Union & UK Privacy Rights (GDPR)
              </h2>
            </div>
            <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
              <p>
                Under the European General Data Protection Regulation (Regulation (EU) 2016/679) and
                the UK Data Protection Act 2018, visitors from the European Economic Area (EEA) and the
                United Kingdom hold the following statutory rights regarding their personal data:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>
                  <strong>Right of Access:</strong> You can request a copy of the personal information
                  we hold about you.
                </li>
                <li>
                  <strong>Right to Rectification:</strong> You may ask us to correct inaccurate or
                  incomplete data.
                </li>
                <li>
                  <strong>Right to Erasure (&quot;Right to be Forgotten&quot;):</strong> You may
                  request that we delete any contact information you previously provided.
                </li>
                <li>
                  <strong>Right to Restrict or Object to Processing:</strong> You can object to
                  direct communication or request limited processing.
                </li>
                <li>
                  <strong>Supervisory Authority Complaints:</strong> You have the right to lodge a
                  complaint with your local Data Protection Authority. For more details, consult the{" "}
                  <a
                    href="https://gdpr.eu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-violet-700 underline font-medium inline-flex items-center gap-1"
                  >
                    European Union GDPR Portal <ExternalLink size={12} />
                  </a>{" "}
                  or the UK Information Commissioner&apos;s Office at{" "}
                  <a
                    href="https://ico.org.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-violet-700 underline font-medium inline-flex items-center gap-1"
                  >
                    ICO.org.uk <ExternalLink size={12} />
                  </a>
                  .
                </li>
              </ul>
              <p>
                To exercise any of these rights, email our Data Privacy Officer at{" "}
                <a
                  href="mailto:contact@bitumencalcpro.com"
                  className="text-violet-700 font-bold underline"
                >
                  contact@bitumencalcpro.com
                </a>
                . All requests are addressed within 30 days without charge.
              </p>
            </div>
          </div>

          {/* Section 6: CCPA / CPRA Rights (California Residents) */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-slate-200 border border-slate-300 flex items-center justify-center">
                <Share2 size={20} className="text-slate-700" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 m-0">
                6. California Consumer Privacy Act (CCPA / CPRA)
              </h2>
            </div>
            <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
              <p>
                For California residents, the California Consumer Privacy Act provides specific rights
                regarding personal data:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>
                  <strong>We Do Not Sell Your Personal Information:</strong> BitumenCalcPro has not
                  sold, rented, or commercialized user personal information to any third party during
                  the preceding 12 months, and will never do so.
                </li>
                <li>
                  <strong>Right to Know:</strong> You may request disclosure of the categories and
                  specific pieces of personal information collected.
                </li>
                <li>
                  <strong>Right to Delete:</strong> You can submit a deletion request for your
                  personal data.
                </li>
                <li>
                  <strong>Non-Discrimination:</strong> We never discriminate against any user for
                  exercising statutory privacy rights.
                </li>
              </ul>
              <p>
                Official information regarding California consumer rights is available from the{" "}
                <a
                  href="https://oag.ca.gov/privacy/ccpa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-900 underline font-semibold inline-flex items-center gap-1"
                >
                  California Department of Justice (CCPA) <ExternalLink size={12} />
                </a>
                . To submit a request, contact{" "}
                <a
                  href="mailto:contact@bitumencalcpro.com"
                  className="text-slate-900 font-bold underline"
                >
                  contact@bitumencalcpro.com
                </a>
                .
              </p>
            </div>
          </div>

          {/* Section 7: Children's Online Privacy Protection (COPPA) */}
          <div className="rounded-2xl border border-red-100 bg-red-50/50 p-7">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-red-100 border border-red-200 flex items-center justify-center">
                <ShieldAlert size={20} className="text-red-600" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 m-0">
                7. Children&apos;s Online Privacy Protection Act (COPPA)
              </h2>
            </div>
            <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
              <p>
                BitumenCalcPro provides technical civil engineering calculations aimed at adult
                professionals, contractors, and university engineering students. We do not knowingly
                collect or solicit personal identifiable information from children under the age of
                13 in adherence with the U.S. Children&apos;s Online Privacy Protection Act (COPPA).
              </p>
              <p>
                If you believe a child under 13 has submitted personal contact details to us, please
                contact us immediately at{" "}
                <a
                  href="mailto:contact@bitumencalcpro.com"
                  className="text-red-700 font-bold underline"
                >
                  contact@bitumencalcpro.com
                </a>
                , and we will promptly purge that information from our records. Read more about child
                privacy protection from the{" "}
                <a
                  href="https://www.ftc.gov/legal-library/browse/rules/childrens-online-privacy-protection-rule-coppa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-700 underline font-semibold inline-flex items-center gap-1"
                >
                  Federal Trade Commission (FTC COPPA Rule) <ExternalLink size={12} />
                </a>
                .
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information & Official Mailbox */}
        <div className="mt-12 bg-gradient-to-br from-slate-900 via-slate-800 to-violet-950 rounded-3xl p-8 sm:p-10 text-center text-white">
          <Mail size={36} className="text-violet-400 mx-auto mb-4" />
          <h2 className="text-white font-bold text-2xl mb-3">
            Privacy Questions or Data Requests?
          </h2>
          <p className="text-slate-300 text-sm mb-6 max-w-xl mx-auto leading-relaxed">
            Our data protection officer monitors inquiries daily. If you have any questions
            regarding this privacy policy, cookie preferences, or data retention, please write to us
            directly:
          </p>
          <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-4 mb-6">
            <p className="text-xs uppercase tracking-widest text-violet-300 font-bold mb-1">
              Official Contact & Data Inquiries
            </p>
            <a
              href="mailto:contact@bitumencalcpro.com"
              className="text-white hover:text-violet-300 font-mono font-bold text-lg sm:text-xl transition-colors underline underline-offset-4"
            >
              contact@bitumencalcpro.com
            </a>
          </div>
          <div>
            <a
              href="/contact-us"
              className={`inline-flex items-center gap-2 ${BRAND_CTA} text-white px-7 py-3 rounded-full font-bold text-sm transition-all active:scale-95`}
            >
              Visit Contact Center
            </a>
          </div>
        </div>

        {/* Policy Change Notice */}
        <p className="text-slate-400 text-xs text-center mt-8">
          BitumenCalcPro reserves the right to amend this Privacy Policy as needed to reflect updates
          in engineering tools, advertising partner standards, or legal frameworks. Any changes are
          effective immediately upon publishing with the updated &quot;Last updated&quot; timestamp
          above.
        </p>
      </LegalLayout>
    </>
  );
}
