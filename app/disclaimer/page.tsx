import type { Metadata } from 'next';
import SiteNav from '@/components/SiteNav';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Disclaimer',
  description: 'Read the disclaimer for www.nursesalaryintel.com including salary estimate limitations and liability terms.',
  openGraph: {
    title: 'Disclaimer | www.nursesalaryintel.com',
    description: 'Read the disclaimer for www.nursesalaryintel.com including salary estimate limitations and liability terms.',
    url: 'https://www.nursesalaryintel.com/disclaimer',
  },
  alternates: { canonical: 'https://www.nursesalaryintel.com/disclaimer' },
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-surface">
      <SiteNav />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <h1 className="text-3xl sm:text-4xl font-bold font-headline text-on-surface tracking-tight mb-8">
          Disclaimer
        </h1>

        <div className="prose-content space-y-6 text-on-surface-variant leading-relaxed">
          <p>
            The information provided on <strong className="text-on-surface">www.nursesalaryintel.com</strong> is for general informational and educational purposes only.
          </p>
          <p>By using this website, you acknowledge and agree to the terms outlined in this Disclaimer.</p>
          <p className="font-semibold text-on-surface">Last Updated: April 23, 2026</p>

          <hr className="border-outline-variant/20 my-8" />

          <h2 className="text-xl font-semibold font-headline text-on-surface mt-8 mb-3">Informational Purposes Only</h2>
          <p>
            All content on www.nursesalaryintel.com is published in good faith for informational purposes only. While we aim to provide accurate and helpful salary and career guidance, we make no guarantees regarding completeness, reliability, or accuracy.
          </p>

          <hr className="border-outline-variant/20 my-8" />

          <h2 className="text-xl font-semibold font-headline text-on-surface mt-8 mb-3">Salary Estimates and Earnings Disclaimer</h2>
          <p>Any salary figures, wage ranges, and compensation information provided on this website are estimates only.</p>
          <p>Actual nurse pay may vary based on many factors, including but not limited to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Employer and facility type</li>
            <li>Location and cost of living</li>
            <li>Union contracts and benefits</li>
            <li>Years of experience</li>
            <li>Certifications and specialty</li>
            <li>Shift schedules, overtime, and bonuses</li>
            <li>Market demand and staffing conditions</li>
          </ul>
          <p>
            You should always verify compensation information directly with employers or official sources before making career or financial decisions.
          </p>

          <hr className="border-outline-variant/20 my-8" />

          <h2 className="text-xl font-semibold font-headline text-on-surface mt-8 mb-3">No Professional Advice</h2>
          <p>The content on www.nursesalaryintel.com does not constitute:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Medical advice</li>
            <li>Legal advice</li>
            <li>Financial advice</li>
            <li>Tax advice</li>
          </ul>
          <p>You should consult qualified professionals for advice specific to your personal situation.</p>

          <hr className="border-outline-variant/20 my-8" />

          <h2 className="text-xl font-semibold font-headline text-on-surface mt-8 mb-3">External Links Disclaimer</h2>
          <p>
            This website may contain links to external websites that are not operated or controlled by www.nursesalaryintel.com.
          </p>
          <p>
            We are not responsible for the accuracy, relevance, or content of third-party websites. Visiting external links is done at your own risk.
          </p>

          <hr className="border-outline-variant/20 my-8" />

          <h2 className="text-xl font-semibold font-headline text-on-surface mt-8 mb-3">Advertising and Affiliate Disclosure</h2>
          <p>
            www.nursesalaryintel.com may display advertisements and may participate in affiliate marketing programs.
          </p>
          <p>This means we may earn revenue through:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Display advertising (including Google AdSense)</li>
            <li>Affiliate links (commissions from purchases made through links)</li>
          </ul>
          <p>
            These relationships do not influence our editorial content, and we aim to provide fair and helpful information regardless of monetization.
          </p>

          <hr className="border-outline-variant/20 my-8" />

          <h2 className="text-xl font-semibold font-headline text-on-surface mt-8 mb-3">Limitation of Liability</h2>
          <p>
            Under no circumstances shall www.nursesalaryintel.com, its owners, contributors, or affiliates be liable for any loss or damage arising from your use of the website or reliance on any information provided.
          </p>
          <p>Your use of this website is solely at your own risk.</p>

          <hr className="border-outline-variant/20 my-8" />

          <h2 className="text-xl font-semibold font-headline text-on-surface mt-8 mb-3">Contact Us</h2>
          <p>If you have questions about this Disclaimer, contact us at:</p>
          <p>
            <a href="mailto:support@nursesalaryintel.com" className="text-primary underline hover:opacity-80 font-semibold">
              support@nursesalaryintel.com
            </a>
          </p>
          <p>
            You may also review our{' '}
            <Link href="/privacy-policy" className="text-primary underline hover:opacity-80">Privacy Policy</Link> and{' '}
            <Link href="/terms" className="text-primary underline hover:opacity-80">Terms of Service</Link>.
          </p>

          <hr className="border-outline-variant/20 my-8" />

          <p className="text-sm text-on-surface-variant/70">&copy; 2026 www.nursesalaryintel.com. All rights reserved.</p>
        </div>
      </main>
    </div>
  );
}
