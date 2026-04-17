import type { Metadata } from 'next';
import SiteNav from '@/components/SiteNav';
import AuditClient from './AuditClient';

export const metadata: Metadata = {
  title: 'Nurse Salary Calculator & Contract Red Flag Audit | NurseSalaryIntel',
  description: 'Use our free nurse salary calculator and contract audit checklist to check your RN pay and identify red flags before signing. Works for travel nurses and staff RNs.',
  keywords: ['nurse salary calculator', 'nursing contract audit', 'travel nurse contract red flags', 'RN contract checklist', 'nurse contract review'],
  openGraph: {
    title: 'Nurse Salary Calculator & Contract Audit Tool',
    description: 'Free tool for RNs to verify expected salary and identify contract red flags before signing. Covers pay terms, stipends, cancellation clauses, and more.',
    url: 'https://nursesalaryintel.com/audit',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Nurse Salary Calculator and Contract Audit Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nurse Salary Calculator & Contract Audit Tool',
    description: 'Free RN contract audit checklist — identify red flags and verify your salary before signing.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://nursesalaryintel.com/audit',
  },
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Audit a Nursing Contract for Red Flags',
  description: 'Use this free nurse salary calculator and contract audit tool to identify red flags in your nursing contract before signing. Works for travel nurses and staff RNs.',
  totalTime: 'PT10M',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Review Payment Terms & Schedule',
      text: 'Verify your exact pay rate, pay frequency (weekly or bi-weekly), and any deductions. Request a written pay breakdown showing base rate, stipends, and all deductions before signing.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Check Contract Cancellation Terms',
      text: 'Understand termination conditions for both you and the facility. Negotiate mutual cancellation terms — if the facility can cancel penalty-free, you should be able to as well.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Verify Housing & Stipend Details',
      text: 'Confirm your housing stipend amount, tax treatment, and contingency plan if housing falls through. Compare the stipend to local rent prices.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Review Health Insurance Coverage',
      text: 'Check plan details, coverage start date, and out-of-pocket premium costs. Ask for day-one coverage and get the plan summary document in writing.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Confirm Licensure & Certification Reimbursement',
      text: 'Verify reimbursement for state licenses, certifications, and renewals. Ask for upfront reimbursement or a signing stipend before your start date.',
    },
    {
      '@type': 'HowToStep',
      position: 6,
      name: 'Verify Completion Bonus Conditions',
      text: 'Confirm the bonus amount, payment timeline, and exact conditions. Get the bonus conditions in writing and confirm whether it prorates if the facility ends the contract early.',
    },
    {
      '@type': 'HowToStep',
      position: 7,
      name: 'Check Shift Differential Rates',
      text: 'Review night, weekend, and holiday pay premium rates. Ask for the differential rate schedule in writing and compare it against BLS averages for your area.',
    },
    {
      '@type': 'HowToStep',
      position: 8,
      name: 'Review On-Call Requirements',
      text: 'Understand on-call frequency, compensation, and expected response time. Negotiate a flat on-call rate plus your full hourly rate when called in.',
    },
    {
      '@type': 'HowToStep',
      position: 9,
      name: 'Confirm Travel & Relocation Reimbursement',
      text: 'Verify reimbursement for travel to the assignment and return home. Ask for a separate travel stipend paid upfront, not contingent on contract completion.',
    },
    {
      '@type': 'HowToStep',
      position: 10,
      name: 'Understand the Floating Policy',
      text: 'Know when and where you can be floated to other units. Request a float clause limiting you to units within your specialty or competency area.',
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I use the nurse salary calculator and contract audit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Review each of the 10 contract sections and mark each one as "Looks Good," "Need to Check," or "Red Flag." Once all 10 are reviewed, you\'ll receive a risk score (Low, Moderate, High, or Critical) with specific clauses to negotiate.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the most common red flags in a travel nursing contract?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most common red flags are: one-sided cancellation clauses (facility can cancel penalty-free but you cannot), vague or missing pay breakdowns, taxable housing stipends, delayed health insurance start dates, no licensure reimbursement, and unpaid on-call time.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is this nurse salary calculator and contract audit tool free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, the nurse salary calculator and contract audit checklist is completely free. For a deeper professional review of your specific contract language, you can upgrade to our $9 contract audit service.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should an RN salary include beyond the base hourly rate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A complete RN salary package should include your base hourly rate, housing and meal stipends (ideally tax-free), health insurance, shift differentials for nights/weekends, licensure reimbursement, a completion bonus, and travel reimbursement. Use our nurse salary calculator to compare your offer against state averages.',
      },
    },
  ],
};

export default function AuditPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SiteNav />

      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold mb-4">
            Free Nurse Salary Calculator &amp; Contract Red Flag Audit
          </h1>
          <p className="text-xl text-blue-100">
            Know what RNs earn in your state — then make sure your contract reflects it.
            Use this free nurse salary calculator and audit checklist to review each contract
            section, mark what you find, and get an instant risk score with negotiation guidance.
          </p>
        </div>
      </header>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <AuditClient />
    </div>
  );
}
