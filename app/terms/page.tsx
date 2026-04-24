import type { Metadata } from 'next';
import SiteNav from '@/components/SiteNav';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Review the terms of service for www.nursesalaryintel.com including acceptable use, liability limitations, and policies.',
  openGraph: {
    title: 'Terms of Service | www.nursesalaryintel.com',
    description: 'Review the terms of service for www.nursesalaryintel.com including acceptable use, liability limitations, and policies.',
    url: 'https://www.nursesalaryintel.com/terms',
  },
  alternates: { canonical: 'https://www.nursesalaryintel.com/terms' },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-surface">
      <SiteNav />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <h1 className="text-3xl sm:text-4xl font-bold font-headline text-on-surface tracking-tight mb-8">
          Terms of Service
        </h1>

        <div className="prose-content space-y-6 text-on-surface-variant leading-relaxed">
          <p>
            Welcome to <strong className="text-on-surface">www.nursesalaryintel.com</strong>.
          </p>
          <p>
            These Terms of Service (&ldquo;Terms&rdquo;) govern your use of this website. By accessing or using www.nursesalaryintel.com, you agree to be bound by these Terms. If you do not agree, please do not use the website.
          </p>
          <p className="font-semibold text-on-surface">Effective Date: April 23, 2026</p>

          <hr className="border-outline-variant/20 my-8" />

          <h2 className="text-xl font-semibold font-headline text-on-surface mt-8 mb-3">1. Use of the Website</h2>
          <p>
            www.nursesalaryintel.com provides informational content related to nursing salaries, pay estimates, career guidance, and salary negotiation.
          </p>
          <p>You may use this website for personal, non-commercial informational purposes.</p>

          <hr className="border-outline-variant/20 my-8" />

          <h2 className="text-xl font-semibold font-headline text-on-surface mt-8 mb-3">2. Intellectual Property</h2>
          <p>
            All content on www.nursesalaryintel.com, including text, graphics, logos, design elements, and original articles, is the property of www.nursesalaryintel.com unless otherwise stated.
          </p>
          <p>
            You may not reproduce, republish, copy, distribute, or exploit any content from this website without written permission, except as allowed under applicable law.
          </p>

          <hr className="border-outline-variant/20 my-8" />

          <h2 className="text-xl font-semibold font-headline text-on-surface mt-8 mb-3">3. Prohibited Uses</h2>
          <p>You agree not to use the website in any way that:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Violates any applicable laws or regulations</li>
            <li>Infringes on the rights of others</li>
            <li>Attempts to disrupt or compromise site security</li>
            <li>Scrapes, extracts, or harvests data using bots or automated tools</li>
            <li>Copies large portions of content for commercial use</li>
            <li>Uploads malicious code, viruses, or harmful software</li>
          </ul>
          <p>We reserve the right to restrict or block access to users who violate these Terms.</p>

          <hr className="border-outline-variant/20 my-8" />

          <h2 className="text-xl font-semibold font-headline text-on-surface mt-8 mb-3">4. Accuracy of Information</h2>
          <p>
            We strive to provide accurate and updated information, but salary data and job market conditions can change frequently.
          </p>
          <p>
            We do not guarantee that the information provided is complete, current, or error-free. You agree that any reliance on website content is at your own risk.
          </p>

          <hr className="border-outline-variant/20 my-8" />

          <h2 className="text-xl font-semibold font-headline text-on-surface mt-8 mb-3">5. Disclaimer of Warranties</h2>
          <p>
            www.nursesalaryintel.com is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis.
          </p>
          <p>We make no warranties of any kind, express or implied, regarding:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>accuracy</li>
            <li>reliability</li>
            <li>availability</li>
            <li>fitness for a particular purpose</li>
          </ul>

          <hr className="border-outline-variant/20 my-8" />

          <h2 className="text-xl font-semibold font-headline text-on-surface mt-8 mb-3">6. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, www.nursesalaryintel.com and its owners, contributors, or affiliates shall not be liable for any direct, indirect, incidental, consequential, or special damages resulting from your use of the website.
          </p>
          <p>
            This includes but is not limited to loss of income, employment decisions, or business opportunities based on information provided on the site.
          </p>

          <hr className="border-outline-variant/20 my-8" />

          <h2 className="text-xl font-semibold font-headline text-on-surface mt-8 mb-3">7. Third-Party Links</h2>
          <p>
            This website may contain links to third-party websites. These links are provided for convenience only.
          </p>
          <p>We do not control third-party websites and are not responsible for their content, policies, or practices.</p>

          <hr className="border-outline-variant/20 my-8" />

          <h2 className="text-xl font-semibold font-headline text-on-surface mt-8 mb-3">8. Advertising and Affiliate Relationships</h2>
          <p>www.nursesalaryintel.com may display advertisements and participate in affiliate programs.</p>
          <p>We may earn revenue from:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Display ads (including Google AdSense)</li>
            <li>Affiliate commissions from purchases made through referral links</li>
          </ul>
          <p>These relationships do not guarantee endorsement, and users are responsible for evaluating third-party services.</p>

          <hr className="border-outline-variant/20 my-8" />

          <h2 className="text-xl font-semibold font-headline text-on-surface mt-8 mb-3">9. Termination</h2>
          <p>
            We may suspend or terminate access to the website at any time, without notice, if we believe a user has violated these Terms or engaged in harmful behavior.
          </p>

          <hr className="border-outline-variant/20 my-8" />

          <h2 className="text-xl font-semibold font-headline text-on-surface mt-8 mb-3">10. Governing Law</h2>
          <p>
            These Terms are governed by and interpreted in accordance with the laws of the <strong className="text-on-surface">United States</strong>, without regard to conflict of law principles.
          </p>

          <hr className="border-outline-variant/20 my-8" />

          <h2 className="text-xl font-semibold font-headline text-on-surface mt-8 mb-3">11. Changes to These Terms</h2>
          <p>We may update these Terms at any time. Any changes will be posted on this page with an updated effective date.</p>
          <p>Your continued use of the website after updates are posted constitutes acceptance of the revised Terms.</p>

          <hr className="border-outline-variant/20 my-8" />

          <h2 className="text-xl font-semibold font-headline text-on-surface mt-8 mb-3">12. Contact Information</h2>
          <p>If you have questions about these Terms, you can contact us at:</p>
          <p>
            <a href="mailto:support@nursesalaryintel.com" className="text-primary underline hover:opacity-80 font-semibold">
              support@nursesalaryintel.com
            </a>
          </p>
          <p>
            You may also review our{' '}
            <Link href="/privacy-policy" className="text-primary underline hover:opacity-80">Privacy Policy</Link> and{' '}
            <Link href="/disclaimer" className="text-primary underline hover:opacity-80">Disclaimer</Link>.
          </p>

          <hr className="border-outline-variant/20 my-8" />

          <p className="text-sm text-on-surface-variant/70">&copy; 2026 www.nursesalaryintel.com. All rights reserved.</p>
        </div>
      </main>
    </div>
  );
}
