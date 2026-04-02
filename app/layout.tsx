import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nurse Salary & Contract Intelligence | Transparent Healthcare Compensation Data",
  description: "Compare nurse salaries and identify contract red flags across the US. Transparent salary data and contract analysis for travel nurses and staff RNs.",
  other: {
    'google-adsense-account': 'ca-pub-4487629215570224',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4487629215570224"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
