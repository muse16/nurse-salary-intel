import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Negotiate Nursing Salary | Step-by-Step 2026',
  description:
    'Learn how to negotiate your nursing salary with confidence. Data-backed steps, email templates, and scripts for staff nurses and new grads.',
};

const faqs = [
  { question: 'How do I ask for a raise as a nurse?', answer: 'Schedule a 1:1 with your manager. Come with documented achievements, market data showing comparable roles earn more, and a specific number in mind. Frame it as a discussion, not an ultimatum.' },
  { question: 'What salary should a new grad nurse ask for?', answer: 'Research new grad rates at 3–5 hospitals in your market. Ask for the 75th percentile of that range. Most new grads accept the first offer; those who negotiate typically get $2,000–$4,000 more in first-year pay.' },
  { question: 'Can you negotiate a sign-on bonus?', answer: 'Yes. Sign-on bonuses are highly negotiable, especially in high-demand specialties or locations. Ask for a bonus even if one isn\'t offered — many hospitals have unadvertised sign-on budgets.' },
  { question: 'What if my hospital has set pay scales?', answer: 'Even with set pay scales, you can usually negotiate starting step, years of experience credit, certification differentials, shift preference, and non-salary benefits like tuition reimbursement.' },
];

export default function HowToNegotiateNursingSalary() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Salary Negotiation', href: '/salary-negotiation/nurse-playbook' },
        { label: 'How to Negotiate' },
      ]}
      h1="How to Negotiate Your Nursing Salary (Step-by-Step)"
      lastUpdated="April 2026"
      schemaType="HowTo"
      schemaTitle="How to Negotiate Nursing Salary"
      schemaDescription="Step-by-step guide to negotiating your nursing salary with data and scripts."
      schemaUrl="/salary-negotiation/how-to-negotiate-nursing-salary"
      faqs={faqs}
    >
      <p>
        Negotiating nursing salary feels intimidating, but the hospital expects it — and budgets for it. This
        step-by-step guide walks you through the exact process, from preparation to final offer.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Research Your Market Rate First</h2>
      <p>
        Before any conversation, know what your role pays. Use BLS data, our{' '}
        <Link href="/rn-salary-by-state" className="text-primary font-semibold hover:underline">state salary tables</Link>,
        and specialty guides. Know the 25th, 50th, and 75th percentile for your position.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Timing: When to Bring Up Salary</h2>
      <p>
        In interviews, let the employer bring up salary first. When they do, give a range (not a single number)
        based on your research, with your target at the top of the range. For existing positions, negotiate at
        annual review, after certifications, or at role changes.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">What to Say: Negotiation Scripts</h2>
      <div className="bg-surface-container-low p-5 rounded-lg border border-outline-variant my-4">
        <p className="text-xs font-semibold text-on-surface-variant mb-2 uppercase">When asked for salary expectations</p>
        <p className="text-sm italic text-on-surface">
          &ldquo;Based on my research, RNs with my experience in [city/specialty] typically earn $X–$Y. I&apos;m
          looking for something in that range, with the specific number depending on the full compensation package.&rdquo;
        </p>
      </div>
      <div className="bg-surface-container-low p-5 rounded-lg border border-outline-variant my-4">
        <p className="text-xs font-semibold text-on-surface-variant mb-2 uppercase">Responding to a below-market offer</p>
        <p className="text-sm italic text-on-surface">
          &ldquo;I appreciate the offer. Based on market data for [specialty] in this area, the typical range is
          $X–$Y. Could we discuss moving closer to $Y?&rdquo;
        </p>
      </div>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Email Templates for Salary Negotiation</h2>
      <div className="bg-surface-container-low p-5 rounded-lg border border-outline-variant my-4">
        <p className="text-xs font-semibold text-on-surface-variant mb-2 uppercase">Counter-offer email template</p>
        <p className="text-sm italic text-on-surface">
          &ldquo;Hi [Manager],<br /><br />
          Thank you for the offer — I&apos;m excited about joining [hospital]. Before I accept, I wanted to discuss
          the base rate. Based on market data for [specialty] nurses in [city], comparable roles pay $X–$Y.
          Given my [specific qualifications], I was hoping we could land at $Z.<br /><br />
          Happy to discuss further. Looking forward to your thoughts.&rdquo;
        </p>
      </div>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Negotiating as a New Grad Nurse</h2>
      <p>
        New grads have less leverage but can still negotiate. Focus on: sign-on bonus (often $3,000–$10,000),
        shift preference, start date flexibility, tuition/loan reimbursement, and scheduled pay progressions.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Following Up After the Negotiation</h2>
      <p>
        Get everything in writing. Once you agree verbally, ask for a written offer letter with all negotiated
        terms. Don&apos;t sign until the paperwork matches the conversation.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mt-8">
        <Link href="/salary-negotiation/nurse-playbook" className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors">
          <span className="font-bold text-primary text-sm">Full Negotiation Playbook →</span>
        </Link>
        <Link href="/salary-data" className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors">
          <span className="font-bold text-primary text-sm">Salary Database →</span>
        </Link>
      </div>
    </SEOPageLayout>
  );
}
