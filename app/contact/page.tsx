import type { Metadata } from 'next';
import SiteNav from '@/components/SiteNav';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact www.nursesalaryintel.com for corrections, feedback, partnerships, or advertising inquiries.',
  openGraph: {
    title: 'Contact | www.nursesalaryintel.com',
    description: 'Contact www.nursesalaryintel.com for corrections, feedback, partnerships, or advertising inquiries.',
    url: 'https://www.nursesalaryintel.com/contact',
  },
  alternates: { canonical: 'https://www.nursesalaryintel.com/contact' },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-surface">
      <SiteNav />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <h1 className="text-3xl sm:text-4xl font-bold font-headline text-on-surface tracking-tight mb-8">
          Contact
        </h1>

        <div className="prose-content space-y-6 text-on-surface-variant leading-relaxed">
          <p>
            Thanks for visiting <strong className="text-on-surface">www.nursesalaryintel.com</strong>.
          </p>
          <p>
            We welcome feedback and aim to keep our nursing salary information accurate and up to date. If you have a correction, suggestion, or business inquiry, feel free to reach out.
          </p>

          <hr className="border-outline-variant/20 my-8" />

          <h2 className="text-xl font-semibold font-headline text-on-surface mt-8 mb-3">Email</h2>
          <p>The best way to contact us is by email:</p>
          <p>
            <a href="mailto:support@nursesalaryintel.com" className="text-primary underline hover:opacity-80 font-semibold text-lg">
              support@nursesalaryintel.com
            </a>
          </p>

          <hr className="border-outline-variant/20 my-8" />

          <h2 className="text-xl font-semibold font-headline text-on-surface mt-8 mb-3">What You Can Contact Us About</h2>
          <p>You can email us regarding:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Corrections to salary estimates or location details</li>
            <li>Feedback on an article or calculator</li>
            <li>Suggestions for future nursing salary topics</li>
            <li>Partnership or advertising inquiries</li>
            <li>Requests to update outdated information</li>
            <li>Technical issues with the website</li>
          </ul>

          <hr className="border-outline-variant/20 my-8" />

          <h2 className="text-xl font-semibold font-headline text-on-surface mt-8 mb-3">What We Cannot Help With</h2>
          <p>To keep our inbox manageable, please note that we cannot provide:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Medical advice</li>
            <li>Legal advice</li>
            <li>Personal employment dispute resolution</li>
            <li>HR mediation or contract interpretation</li>
            <li>Individual salary guarantees</li>
          </ul>
          <p>If you need professional advice, we recommend contacting a licensed professional in the appropriate field.</p>

          <hr className="border-outline-variant/20 my-8" />

          <h2 className="text-xl font-semibold font-headline text-on-surface mt-8 mb-3">Response Time</h2>
          <p>
            We typically respond within <strong className="text-on-surface">2–5 business days</strong>.
          </p>
          <p>During high volume periods, responses may take slightly longer.</p>

          <hr className="border-outline-variant/20 my-8" />

          <h2 className="text-xl font-semibold font-headline text-on-surface mt-8 mb-3">FAQ</h2>

          <h3 className="text-lg font-semibold font-headline text-on-surface mt-6 mb-2">Do you offer personalized salary advice?</h3>
          <p>
            We provide general salary research and educational content, but we do not offer personalized salary consulting.
          </p>

          <h3 className="text-lg font-semibold font-headline text-on-surface mt-6 mb-2">Can I request an article for my city or state?</h3>
          <p>
            Yes. If you don&apos;t see your location covered yet, email us and we may add it to our content schedule.
          </p>

          <h3 className="text-lg font-semibold font-headline text-on-surface mt-6 mb-2">Do you accept advertising inquiries?</h3>
          <p>Yes. Please contact us with &ldquo;Advertising&rdquo; in the subject line.</p>

          <h3 className="text-lg font-semibold font-headline text-on-surface mt-6 mb-2">How can I report incorrect information?</h3>
          <p>Email us with the page URL and the correction details, and we will review it.</p>

          <hr className="border-outline-variant/20 my-8" />

          <h2 className="text-xl font-semibold font-headline text-on-surface mt-8 mb-3">Thank You</h2>
          <p>
            We appreciate your help in making <strong className="text-on-surface">www.nursesalaryintel.com</strong> a useful resource for nurses across the United States.
          </p>
          <p>
            You may also review our{' '}
            <Link href="/about" className="text-primary underline hover:opacity-80">About page</Link> to learn more about who we are and how we work.
          </p>

          <hr className="border-outline-variant/20 my-8" />

          <p className="text-sm text-on-surface-variant/70">
            Last Updated: April 23, 2026<br />
            Contact:{' '}
            <a href="mailto:support@nursesalaryintel.com" className="text-primary underline hover:opacity-80">
              support@nursesalaryintel.com
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
