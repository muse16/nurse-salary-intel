import type { Metadata } from 'next';
import SiteNav from '@/components/SiteNav';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Read the privacy policy for www.nursesalaryintel.com including cookies, analytics, and advertising disclosures.',
  openGraph: {
    title: 'Privacy Policy | www.nursesalaryintel.com',
    description: 'Read the privacy policy for www.nursesalaryintel.com including cookies, analytics, and advertising disclosures.',
    url: 'https://www.nursesalaryintel.com/privacy-policy',
  },
  alternates: { canonical: 'https://www.nursesalaryintel.com/privacy-policy' },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-surface">
      <SiteNav />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <h1 className="text-3xl sm:text-4xl font-bold font-headline text-on-surface tracking-tight mb-8">
          Privacy Policy
        </h1>

        <div className="prose-content space-y-6 text-on-surface-variant leading-relaxed">
          <p>
            At <strong className="text-on-surface">www.nursesalaryintel.com</strong>, we respect your privacy and are committed to being transparent about the information we collect and how it is used.
          </p>
          <p>This Privacy Policy explains what data we collect, how we use it, and what choices you have as a visitor.</p>
          <p className="font-semibold text-on-surface">Last Updated: April 23, 2026</p>

          <hr className="border-outline-variant/20 my-8" />

          <h2 className="text-xl font-semibold font-headline text-on-surface mt-8 mb-3">Information We Collect</h2>
          <p>We may collect information in the following ways:</p>

          <h3 className="text-lg font-semibold font-headline text-on-surface mt-6 mb-2">Information You Provide Voluntarily</h3>
          <p>If you contact us through a form or email, we may collect information you choose to provide, such as:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Your name (if provided)</li>
            <li>Your email address</li>
            <li>The message you send us</li>
          </ul>
          <p>We only use this information to respond to your inquiry.</p>

          <h3 className="text-lg font-semibold font-headline text-on-surface mt-6 mb-2">Automatically Collected Information</h3>
          <p>When you visit www.nursesalaryintel.com, we may automatically collect certain information such as:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Browser type and device information</li>
            <li>IP address (often anonymized through analytics tools)</li>
            <li>Pages visited and time spent on the site</li>
            <li>Referral sources (how you found the site)</li>
            <li>General geographic location (city/state level)</li>
          </ul>
          <p>This information is typically collected through analytics and advertising technologies.</p>

          <hr className="border-outline-variant/20 my-8" />

          <h2 className="text-xl font-semibold font-headline text-on-surface mt-8 mb-3">How We Use Your Information</h2>
          <p>We may use collected information to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Improve website content and user experience</li>
            <li>Understand which pages are most helpful to visitors</li>
            <li>Monitor site performance and prevent abuse</li>
            <li>Respond to messages and inquiries</li>
            <li>Display relevant advertising and measure ad performance</li>
          </ul>
          <p>We do not sell personal information to third parties.</p>

          <hr className="border-outline-variant/20 my-8" />

          <h2 className="text-xl font-semibold font-headline text-on-surface mt-8 mb-3">Cookies and Tracking Technologies</h2>

          <h3 className="text-lg font-semibold font-headline text-on-surface mt-6 mb-2">What Are Cookies?</h3>
          <p>
            Cookies are small text files stored on your browser or device that help websites function properly and improve user experience.
          </p>

          <h3 className="text-lg font-semibold font-headline text-on-surface mt-6 mb-2">How We Use Cookies</h3>
          <p>www.nursesalaryintel.com may use cookies for:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Essential site functionality</li>
            <li>Analytics and traffic measurement</li>
            <li>Advertising and personalization</li>
            <li>Remembering user preferences (where applicable)</li>
          </ul>

          <hr className="border-outline-variant/20 my-8" />

          <h2 className="text-xl font-semibold font-headline text-on-surface mt-8 mb-3">Google AdSense and Advertising Cookies</h2>
          <p>
            www.nursesalaryintel.com may use third-party advertising services, including{' '}
            <strong className="text-on-surface">Google AdSense</strong>, to serve ads.
          </p>
          <p>Google and its partners may use cookies (including the <strong className="text-on-surface">DoubleClick cookie</strong>) to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Serve ads based on your visits to this website and other websites</li>
            <li>Measure ad performance</li>
            <li>Provide personalized advertising</li>
          </ul>
          <p>
            You can learn more about how Google uses information from sites that use its services at:{' '}
            <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:opacity-80 break-all">
              https://policies.google.com/technologies/partner-sites
            </a>
          </p>
          <p>
            You can opt out of personalized advertising through Google Ad Settings:{' '}
            <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:opacity-80 break-all">
              https://adssettings.google.com/
            </a>
          </p>

          <hr className="border-outline-variant/20 my-8" />

          <h2 className="text-xl font-semibold font-headline text-on-surface mt-8 mb-3">Third-Party Services</h2>
          <p>We may use third-party services to support website operations, including:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Google Analytics (traffic measurement)</li>
            <li>Google AdSense (advertising)</li>
            <li>Website hosting providers and performance tools</li>
          </ul>
          <p>These third-party providers may collect data according to their own privacy policies.</p>

          <hr className="border-outline-variant/20 my-8" />

          <h2 className="text-xl font-semibold font-headline text-on-surface mt-8 mb-3">Affiliate Disclosure</h2>
          <p>
            Some pages on www.nursesalaryintel.com may include affiliate links. If you click an affiliate link and make a purchase, we may earn a small commission at no additional cost to you.
          </p>
          <p>Affiliate relationships do not affect the information we provide, and we aim to keep content fair and educational.</p>

          <hr className="border-outline-variant/20 my-8" />

          <h2 className="text-xl font-semibold font-headline text-on-surface mt-8 mb-3">How to Control Cookies</h2>
          <p>You can control or disable cookies through your browser settings. Most browsers allow you to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Delete cookies</li>
            <li>Block cookies</li>
            <li>Receive a warning before cookies are stored</li>
          </ul>
          <p>Please note that disabling cookies may affect website functionality and ad personalization.</p>

          <hr className="border-outline-variant/20 my-8" />

          <h2 className="text-xl font-semibold font-headline text-on-surface mt-8 mb-3">Data Retention</h2>
          <p>
            We retain personal information only as long as needed to respond to inquiries, comply with legal obligations, or maintain site operations.
          </p>
          <p>Analytics and advertising data may be retained according to the policies of the service providers we use.</p>

          <hr className="border-outline-variant/20 my-8" />

          <h2 className="text-xl font-semibold font-headline text-on-surface mt-8 mb-3">Children&apos;s Privacy</h2>
          <p>www.nursesalaryintel.com is intended for a general audience and is not directed toward children under 13.</p>
          <p>
            We do not knowingly collect personal information from children under 13. If you believe a child has provided personal information, please contact us and we will take steps to remove it.
          </p>

          <hr className="border-outline-variant/20 my-8" />

          <h2 className="text-xl font-semibold font-headline text-on-surface mt-8 mb-3">Your Privacy Rights</h2>
          <p>
            Depending on your location, you may have certain rights regarding your personal data, including:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>The right to request access to information we may have collected</li>
            <li>The right to request deletion of your information</li>
            <li>The right to opt out of certain data collection practices</li>
          </ul>
          <p>
            To make a request, please contact us at:{' '}
            <a href="mailto:support@nursesalaryintel.com" className="text-primary underline hover:opacity-80">
              support@nursesalaryintel.com
            </a>
          </p>

          <hr className="border-outline-variant/20 my-8" />

          <h2 className="text-xl font-semibold font-headline text-on-surface mt-8 mb-3">Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in laws, technology, or our website operations.
          </p>
          <p>Updates will be posted on this page with a revised &ldquo;Last Updated&rdquo; date.</p>

          <hr className="border-outline-variant/20 my-8" />

          <h2 className="text-xl font-semibold font-headline text-on-surface mt-8 mb-3">Contact Us</h2>
          <p>If you have questions about this Privacy Policy, contact us at:</p>
          <p>
            <a href="mailto:support@nursesalaryintel.com" className="text-primary underline hover:opacity-80 font-semibold">
              support@nursesalaryintel.com
            </a>
          </p>
          <p>
            You may also review our <Link href="/terms" className="text-primary underline hover:opacity-80">Terms of Service</Link> and{' '}
            <Link href="/disclaimer" className="text-primary underline hover:opacity-80">Disclaimer</Link>.
          </p>

          <hr className="border-outline-variant/20 my-8" />

          <p className="text-sm text-on-surface-variant/70">&copy; 2026 www.nursesalaryintel.com. All rights reserved.</p>
        </div>
      </main>
    </div>
  );
}
