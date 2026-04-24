import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import Script from "next/script";
import AssistLoopScript from "./components/AssistLoopScript";
import { Analytics } from "@vercel/analytics/next";
import SiteFooter from "@/components/SiteFooter";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-headline",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

// ─── REPLACE with your GA4 Measurement ID from analytics.google.com ───────────
const GA4_ID = "G-MEGH7BGCLK";
// ─────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Nurse Salary Calculator | Free RN Pay Estimator by State & Specialty",
  description: "Use our free Nurse Salary Calculator to estimate RN pay by state, specialty, and experience. Compare travel nurse and staff nurse salaries across the US with real BLS data.",
  keywords: ["nurse salary calculator", "RN salary calculator", "travel nurse salary", "nurse pay estimator", "nursing salary by state", "nurse salary by specialty"],
  metadataBase: new URL("https://nursesalaryintel.com"),
  openGraph: {
    type: "website",
    siteName: "Nurse Salary Intel",
    title: "Nurse Salary Calculator — Free RN Pay Estimator",
    description: "Calculate your nurse salary by state, specialty, and experience. Free tool with real BLS data for travel nurses and staff RNs.",
    url: "https://nursesalaryintel.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nurse Salary Calculator — Free RN pay estimator by state and specialty",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nurse Salary Calculator — Free RN Pay Estimator",
    description: "Calculate your nurse salary by state, specialty, and experience. Free tool with real BLS data.",
    images: ["/og-image.png"],
  },
  other: {
    "google-adsense-account": "ca-pub-4487629215570224",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="fo-verify" content="39dcd307-ed45-4e62-b236-2bf2cfc7ab62" />
        {/* AdSense: plain <script> avoids Next.js adding data-nscript attribute */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4487629215570224"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${manrope.variable} ${inter.variable} antialiased`}>
        {children}
        <SiteFooter />

        {/* Google Analytics GA4 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA4_ID}');
          `}
        </Script>

        <Analytics />

        {/* AssistLoop Widget */}
        <AssistLoopScript />

        {/* AEO: FAQ Schema — helps AI agents pull direct answers */}
        <Script id="faq-schema" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is the average nurse salary in the US?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The average registered nurse (RN) salary in the United States is $81,220 per year according to 2026 BLS data. Salaries vary significantly by state, specialty, and experience level."
                }
              },
              {
                "@type": "Question",
                "name": "Which state pays nurses the most?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "California pays nurses the most, with an average RN salary of $133,340 per year as of 2026 BLS data. Other high-paying states include Hawaii ($113,060), Massachusetts ($103,090), and Oregon ($98,630)."
                }
              },
              {
                "@type": "Question",
                "name": "How much do travel nurses make?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Travel nurses earn an average of $102,800 per year, or approximately $49.42 per hour. Travel nurse pay typically includes a base hourly rate plus tax-free stipends for housing and meals, which can significantly increase total compensation."
                }
              },
              {
                "@type": "Question",
                "name": "What is the highest paying nursing specialty?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Certified Registered Nurse Anesthetists (CRNAs) are the highest paid nursing specialty, earning an average of $203,090 per year. Nurse Practitioners average $124,680, and Nurse Midwives average $120,880 per year."
                }
              },
              {
                "@type": "Question",
                "name": "How much does a nurse practitioner make?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nurse Practitioners (NPs) earn an average salary of $124,680 per year in the United States, according to 2026 BLS data. NP salaries range from approximately $91,440 to $163,350 depending on specialty, state, and experience."
                }
              },
              {
                "@type": "Question",
                "name": "What is a red flag in a travel nursing contract?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Common red flags in travel nursing contracts include: vague or missing pay schedules, one-sided cancellation clauses (facility can cancel penalty-free but nurse cannot), taxable housing stipends, delayed health insurance start dates, no licensure reimbursement, and unpaid or low-paid orientation periods."
                }
              },
              {
                "@type": "Question",
                "name": "How much do ICU nurses make?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ICU and Critical Care nurses earn an average salary of $89,540 per year, with a range of $68,200 to $127,800. ICU travel nurses can earn significantly more, with total compensation often exceeding $100,000 annually."
                }
              },
              {
                "@type": "Question",
                "name": "How do I calculate my nurse salary by state?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can use the free Nurse Salary Calculator at NurseSalaryIntel.com to estimate your RN pay by selecting your state, nursing specialty, and years of experience. The calculator uses 2026 BLS data and adjusts for local cost of living."
                }
              }
            ]
          })}
        </Script>

        {/* AEO: Dataset Schema — marks salary data as a citable dataset */}
        <Script id="dataset-schema" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dataset",
            "name": "US Nurse Salary Data by State and Specialty 2026",
            "description": "Comprehensive nurse salary data for all 50 US states and 12 nursing specialties, sourced from the 2026 Bureau of Labor Statistics (BLS) Occupational Employment and Wage Statistics.",
            "url": "https://nursesalaryintel.com",
            "creator": {
              "@type": "Organization",
              "name": "NurseSalaryIntel",
              "url": "https://nursesalaryintel.com"
            },
            "dateModified": "2026-04-12",
            "license": "https://nursesalaryintel.com",
            "variableMeasured": [
              "Average annual nurse salary",
              "Minimum nurse salary",
              "Maximum nurse salary",
              "Nurse employment level by state",
              "Cost of living index by state"
            ],
            "spatialCoverage": "United States",
            "temporalCoverage": "2026",
            "keywords": [
              "nurse salary", "RN salary", "travel nurse pay",
              "nurse practitioner salary", "CRNA salary",
              "nursing salary by state", "healthcare wages"
            ]
          })}
        </Script>

        {/* AEO: WebSite Schema with SearchAction */}
        <Script id="website-schema" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "NurseSalaryIntel",
            "url": "https://nursesalaryintel.com",
            "description": "Free nurse salary calculator and contract audit tool. Compare RN pay by state, specialty, and experience using 2026 BLS data.",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://nursesalaryintel.com/?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </Script>
      </body>
    </html>
  );
}
