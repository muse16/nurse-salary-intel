import type { Metadata } from 'next';
import SiteNav from '@/components/SiteNav';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About www.nursesalaryintel.com',
  description: 'Learn more about www.nursesalaryintel.com, how we estimate nursing salaries, and our editorial standards.',
  openGraph: {
    title: 'About www.nursesalaryintel.com',
    description: 'Learn more about www.nursesalaryintel.com, how we estimate nursing salaries, and our editorial standards.',
    url: 'https://www.nursesalaryintel.com/about',
  },
  alternates: { canonical: 'https://www.nursesalaryintel.com/about' },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-surface">
      <SiteNav />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <h1 className="text-3xl sm:text-4xl font-bold font-headline text-on-surface tracking-tight mb-8">
          About www.nursesalaryintel.com
        </h1>

        <div className="prose-content space-y-6 text-on-surface-variant leading-relaxed">
          <p>
            Welcome to <strong className="text-on-surface">www.nursesalaryintel.com</strong>, an informational website dedicated to helping nurses, nursing students, and healthcare professionals better understand nursing pay across the United States.
          </p>
          <p>
            Our goal is simple: provide clear, easy-to-understand salary information and career insights so you can make more confident decisions about your nursing career.
          </p>

          <hr className="border-outline-variant/20 my-8" />

          <h2 className="text-xl font-semibold font-headline text-on-surface mt-8 mb-3">Our Mission</h2>
          <p>
            Nursing is one of the most important professions in the world, and nurses deserve transparency when it comes to compensation.
          </p>
          <p>
            At <strong className="text-on-surface">www.nursesalaryintel.com</strong>, our mission is to provide reliable nursing salary insights, pay comparisons, and negotiation guidance to help you:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Understand average RN pay in your state or city</li>
            <li>Compare salary differences by specialty and experience level</li>
            <li>Evaluate career paths that can increase earning potential</li>
            <li>Learn how to negotiate pay and benefits more effectively</li>
          </ul>

          <hr className="border-outline-variant/20 my-8" />

          <h2 className="text-xl font-semibold font-headline text-on-surface mt-8 mb-3">What We Cover</h2>
          <p>www.nursesalaryintel.com focuses on salary and career-related topics such as:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Registered Nurse (RN) salary by state</li>
            <li>RN salary by major city and metro area</li>
            <li>Nursing pay by specialty (ICU, ER, OR, NICU, and more)</li>
            <li>New grad RN salary expectations</li>
            <li>Shift differentials, overtime pay, and bonuses</li>
            <li>Travel nurse pay trends</li>
            <li>Salary negotiation scripts and tips</li>
            <li>Certifications and career moves that may increase income</li>
          </ul>
          <p>Our content is designed to be practical, data-driven, and easy to read.</p>

          <hr className="border-outline-variant/20 my-8" />

          <h2 className="text-xl font-semibold font-headline text-on-surface mt-8 mb-3">How We Estimate Salary Information</h2>
          <p>Salary information can vary widely depending on location, employer, union status, experience, and demand.</p>
          <p>To build our salary estimates and comparisons, we may use a combination of:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>U.S. Bureau of Labor Statistics (BLS) wage data</li>
            <li>Publicly available government labor resources</li>
            <li>Hospital and employer job postings</li>
            <li>Aggregated compensation reporting sources</li>
            <li>Industry research and published nursing pay reports</li>
          </ul>
          <p>
            Because compensation changes frequently, we provide salary ranges and averages whenever possible rather than claiming exact guaranteed earnings.
          </p>

          <hr className="border-outline-variant/20 my-8" />

          <h2 className="text-xl font-semibold font-headline text-on-surface mt-8 mb-3">Editorial Standards and Accuracy</h2>
          <p>We take accuracy seriously.</p>
          <p>
            Our content is written and reviewed with the goal of being helpful, transparent, and updated regularly. When possible, we reference reputable sources and include citations.
          </p>
          <p>However, salary data is always subject to change, and your actual pay may differ depending on factors like:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Employer and facility type</li>
            <li>Experience level</li>
            <li>Certifications</li>
            <li>Location and cost of living</li>
            <li>Union agreements</li>
            <li>Shift schedules and overtime</li>
          </ul>
          <p>We encourage readers to use our content as a research starting point and confirm salary details directly with employers.</p>

          <hr className="border-outline-variant/20 my-8" />

          <h2 className="text-xl font-semibold font-headline text-on-surface mt-8 mb-3">How www.nursesalaryintel.com Is Funded</h2>
          <p>
            To keep this website free for readers, <strong className="text-on-surface">www.nursesalaryintel.com</strong> may earn revenue through:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Display advertising (including Google AdSense)</li>
            <li>Affiliate partnerships (where we may earn a small commission if you choose to purchase through a link)</li>
          </ul>
          <p>
            Affiliate relationships do not influence our salary estimates or editorial recommendations. We aim to recommend only resources that may be genuinely useful to nurses.
          </p>

          <hr className="border-outline-variant/20 my-8" />

          <h2 className="text-xl font-semibold font-headline text-on-surface mt-8 mb-3">Contact Us</h2>
          <p>If you have feedback, notice an error, or want to suggest a topic, we&apos;d love to hear from you.</p>
          <p>
            Email us anytime at:{' '}
            <a href="mailto:support@nursesalaryintel.com" className="text-primary underline hover:opacity-80">
              support@nursesalaryintel.com
            </a>
          </p>
          <p>
            You can also visit our <Link href="/contact" className="text-primary underline hover:opacity-80">Contact page</Link> for more details.
          </p>

          <hr className="border-outline-variant/20 my-8" />

          <p className="text-sm text-on-surface-variant/70">
            Written by www.nursesalaryintel.com Editorial Team<br />
            Last Updated: April 23, 2026
          </p>
        </div>
      </main>
    </div>
  );
}
