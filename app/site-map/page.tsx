import type { Metadata } from 'next';
import Link from 'next/link';
import SiteNav from '@/components/SiteNav';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Site Map | NurseSalaryIntel',
  description: 'A complete index of every page on NurseSalaryIntel.com — salary guides by city, state, and specialty, travel nursing resources, negotiation tools, and more.',
  robots: { index: true, follow: true },
};

const BREADCRUMBS = [
  { label: 'Home', href: '/' },
  { label: 'Site Map' },
];

const states = [
  { label: 'Alabama', href: '/rn-salary-by-state/alabama' },
  { label: 'Alaska', href: '/rn-salary-by-state/alaska' },
  { label: 'Arizona', href: '/rn-salary-by-state/arizona' },
  { label: 'Arkansas', href: '/rn-salary-by-state/arkansas' },
  { label: 'California', href: '/rn-salary-by-state/california' },
  { label: 'Colorado', href: '/rn-salary-by-state/colorado' },
  { label: 'Connecticut', href: '/rn-salary-by-state/connecticut' },
  { label: 'Delaware', href: '/rn-salary-by-state/delaware' },
  { label: 'Florida', href: '/rn-salary-by-state/florida' },
  { label: 'Georgia', href: '/rn-salary-by-state/georgia' },
  { label: 'Hawaii', href: '/rn-salary-by-state/hawaii' },
  { label: 'Idaho', href: '/rn-salary-by-state/idaho' },
  { label: 'Illinois', href: '/rn-salary-by-state/illinois' },
  { label: 'Indiana', href: '/rn-salary-by-state/indiana' },
  { label: 'Iowa', href: '/rn-salary-by-state/iowa' },
  { label: 'Kansas', href: '/rn-salary-by-state/kansas' },
  { label: 'Kentucky', href: '/rn-salary-by-state/kentucky' },
  { label: 'Louisiana', href: '/rn-salary-by-state/louisiana' },
  { label: 'Maine', href: '/rn-salary-by-state/maine' },
  { label: 'Maryland', href: '/rn-salary-by-state/maryland' },
  { label: 'Massachusetts', href: '/rn-salary-by-state/massachusetts' },
  { label: 'Michigan', href: '/rn-salary-by-state/michigan' },
  { label: 'Minnesota', href: '/rn-salary-by-state/minnesota' },
  { label: 'Mississippi', href: '/rn-salary-by-state/mississippi' },
  { label: 'Missouri', href: '/rn-salary-by-state/missouri' },
  { label: 'Montana', href: '/rn-salary-by-state/montana' },
  { label: 'Nebraska', href: '/rn-salary-by-state/nebraska' },
  { label: 'Nevada', href: '/rn-salary-by-state/nevada' },
  { label: 'New Hampshire', href: '/rn-salary-by-state/new-hampshire' },
  { label: 'New Jersey', href: '/rn-salary-by-state/new-jersey' },
  { label: 'New Mexico', href: '/rn-salary-by-state/new-mexico' },
  { label: 'New York', href: '/rn-salary-by-state/new-york' },
  { label: 'North Carolina', href: '/rn-salary-by-state/north-carolina' },
  { label: 'North Dakota', href: '/rn-salary-by-state/north-dakota' },
  { label: 'Ohio', href: '/rn-salary-by-state/ohio' },
  { label: 'Oklahoma', href: '/rn-salary-by-state/oklahoma' },
  { label: 'Oregon', href: '/rn-salary-by-state/oregon' },
  { label: 'Pennsylvania', href: '/rn-salary-by-state/pennsylvania' },
  { label: 'Rhode Island', href: '/rn-salary-by-state/rhode-island' },
  { label: 'South Carolina', href: '/rn-salary-by-state/south-carolina' },
  { label: 'South Dakota', href: '/rn-salary-by-state/south-dakota' },
  { label: 'Tennessee', href: '/rn-salary-by-state/tennessee' },
  { label: 'Texas', href: '/rn-salary-by-state/texas' },
  { label: 'Utah', href: '/rn-salary-by-state/utah' },
  { label: 'Vermont', href: '/rn-salary-by-state/vermont' },
  { label: 'Virginia', href: '/rn-salary-by-state/virginia' },
  { label: 'Washington', href: '/rn-salary-by-state/washington' },
  { label: 'West Virginia', href: '/rn-salary-by-state/west-virginia' },
  { label: 'Wisconsin', href: '/rn-salary-by-state/wisconsin' },
  { label: 'Wyoming', href: '/rn-salary-by-state/wyoming' },
];

interface LinkItem {
  label: string;
  href: string;
}

function SectionCard({ title, links }: { title: string; links: LinkItem[] }) {
  return (
    <div className="border border-outline-variant rounded-xl bg-surface-container-lowest overflow-hidden">
      <div className="bg-surface-container-low border-b border-outline-variant px-5 py-3">
        <h2 className="text-sm font-bold font-headline text-primary uppercase tracking-wider">
          {title}
        </h2>
      </div>
      <ul className="px-5 py-4 space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1.5 group"
            >
              <span className="text-outline group-hover:text-primary transition-colors">›</span>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SiteMapPage() {
  return (
    <div className="min-h-screen bg-surface">
      <SiteNav />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <Breadcrumbs items={BREADCRUMBS} />

        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold font-headline text-on-surface tracking-tight mb-3">
            Site Map
          </h1>
          <p className="text-on-surface-variant text-base max-w-2xl">
            A complete index of every page on NurseSalaryIntel.com. Browse by category or use your browser&apos;s find function (Ctrl+F / Cmd+F) to search for a specific page.
          </p>
        </div>

        {/* Main content grid */}
        <div className="space-y-10">

          {/* Row 1: City + Specialty Salary Guides */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SectionCard
              title="City Salary Guides"
              links={[
                { label: 'New York City RN Salary 2026', href: '/new-york-city-rn-salary-2026' },
                { label: 'Chicago RN Salary 2026', href: '/chicago-rn-salary-2026' },
                { label: 'Houston RN Salary 2026', href: '/houston-rn-salary-2026' },
                { label: 'Dallas RN Salary 2026', href: '/dallas-rn-salary-2026' },
                { label: 'Los Angeles RN Salary 2026', href: '/rn-salary-by-state/california' },
                { label: 'San Francisco RN Salary 2026', href: '/san-francisco-rn-salary-2026' },
                { label: 'San Diego RN Salary 2026', href: '/san-diego-rn-salary-2026' },
                { label: 'Seattle RN Salary 2026', href: '/seattle-rn-salary-2026' },
                { label: 'Philadelphia RN Salary 2026', href: '/philadelphia-rn-salary-2026' },
                { label: 'Atlanta RN Salary 2026', href: '/atlanta-rn-salary-2026' },
                { label: 'Tampa RN Salary 2026', href: '/tampa-rn-salary-2026' },
                { label: 'Baltimore RN Salary 2026', href: '/baltimore-rn-salary-2026' },
                { label: 'Portland RN Salary 2026', href: '/portland-rn-salary-2026' },
                { label: 'Cleveland RN Salary 2026', href: '/cleveland-rn-salary-2026' },
                { label: 'Detroit RN Salary 2026', href: '/detroit-rn-salary-2026' },
                { label: 'Houston vs. Dallas RN Salary', href: '/houston-vs-dallas-rn-salary-2026' },
                { label: 'Highest-Paying States for RNs', href: '/highest-paying-states-for-rns-2026' },
                { label: 'All Cities →', href: '/rn-salary-by-city' },
              ]}
            />
            <SectionCard
              title="Nursing Specialties"
              links={[
                { label: 'CRNA Salary 2026', href: '/crna-salary-2026' },
                { label: 'ICU Nurse Salary 2026', href: '/nursing-salary/icu-nurse-salary' },
                { label: 'ER Nurse Salary 2026', href: '/er-nurse-salary-2026' },
                { label: 'Critical Care Nurse Salary 2026', href: '/critical-care-nurse-salary-2026' },
                { label: 'OR Nurse Salary 2026', href: '/or-nurse-salary-2026' },
                { label: 'Labor & Delivery Nurse Salary 2026', href: '/labor-delivery-nurse-salary-2026' },
                { label: 'NICU Nurse Salary 2026', href: '/nursing-salary/nicu-nurse-salary' },
                { label: 'Psychiatric Nurse Salary 2026', href: '/psychiatric-nurse-salary-2026' },
                { label: 'Oncology Nurse Salary 2026', href: '/oncology-nurse-salary-2026' },
                { label: 'Flight Nurse Salary 2026', href: '/flight-nurse-salary-2026' },
                { label: 'Pediatric Nurse Salary 2026', href: '/pediatric-nurse-salary-2026' },
                { label: 'Certified Nurse Midwife Salary 2026', href: '/certified-nurse-midwife-salary-2026' },
                { label: 'Aesthetic Nurse Salary 2026', href: '/aesthetic-nurse-salary-2026' },
                { label: 'Charge Nurse Salary 2026', href: '/nursing-salary/charge-nurse-salary' },
                { label: 'All Specialties →', href: '/nursing-salary/by-specialty-2026' },
              ]}
            />
          </div>

          {/* Row 2: Advanced Practice + Salary Comparisons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SectionCard
              title="Advanced Practice & Degrees"
              links={[
                { label: 'Nurse Practitioner Salary 2026', href: '/nursing-salary/nurse-practitioner-salary' },
                { label: 'DNP Salary 2026', href: '/dnp-salary-2026' },
                { label: "Women's Health NP (WHNP) Salary 2026", href: '/whnp-salary-2026' },
                { label: 'FNP Salary 2026', href: '/nursing-salary/fnp-salary' },
                { label: 'PMHNP Salary 2026', href: '/nursing-salary/pmhnp-salary' },
                { label: 'AGNP Salary 2026', href: '/nursing-salary/agnp-salary' },
                { label: 'BSN Nurse Salary & Career Paths 2026', href: '/bsn-nurse-salary-career-paths-2026' },
                { label: 'BSN vs RN Salary', href: '/salary/bsn-vs-rn' },
                { label: 'RN vs LPN Salary 2026', href: '/rn-vs-lpn-salary-2026' },
                { label: 'Best RN to BSN Programs', href: '/nursing-salary/best-rn-to-bsn-programs' },
                { label: 'How to Become a Nurse Practitioner', href: '/nursing-salary/how-to-become-nurse-practitioner' },
              ]}
            />
            <SectionCard
              title="Salary Comparisons & Context"
              links={[
                { label: 'ICU vs ER Nurse Salary 2026', href: '/icu-vs-er-nurse-salary-2026' },
                { label: 'Nurse Salary California vs Texas', href: '/nurse-salary-california-vs-texas' },
                { label: 'Travel Nurse vs Staff Nurse Salary 2026', href: '/travel-nurse-vs-staff-nurse-salary-2026' },
                { label: 'Nurse Salary Cost of Living 2026', href: '/nurse-salary-cost-of-living-2026' },
                { label: 'Nurse Salary by Age & Experience 2026', href: '/nurse-salary-by-age-experience-2026' },
                { label: 'RN Salary by Years of Experience', href: '/rn-salary-by-years-of-experience-2026' },
                { label: 'New Grad RN Salary 2026', href: '/new-grad-rn-salary-2026' },
                { label: 'Entry-Level Nurse Salary', href: '/entry-level-nurse-salary' },
                { label: 'Per Diem Nurse Salary 2026', href: '/per-diem-nurse-salary-2026' },
                { label: 'How Much Do Nurses Make Per Hour', href: '/how-much-do-nurses-make-per-hour' },
                { label: 'Highest-Paying Nursing Specialties', href: '/highest-paying-nursing-specialties' },
                { label: 'CNA Salary 2026', href: '/nursing-salary/cna-salary' },
                { label: 'LPN Salary 2026', href: '/nursing-salary/lpn-salary' },
              ]}
            />
          </div>

          {/* Row 3: Travel Nursing + Salary Negotiation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SectionCard
              title="Travel Nursing"
              links={[
                { label: 'Travel Nursing Salary Guide 2026', href: '/travel-nursing/salary-guide-2026' },
                { label: 'Travel Nurse Salary Guide', href: '/travel-nurse-salary-guide' },
                { label: 'Travel Nurse Agency Comparison 2026', href: '/travel-nurse-agency-comparison-2026' },
                { label: 'Travel Nurse Pay Calculator', href: '/travel-nurse-pay-calculator' },
                { label: 'Travel Nursing Salary by State', href: '/travel-nursing/salary-by-state' },
                { label: 'Travel Nursing Salary by Specialty', href: '/travel-nursing/salary-by-specialty' },
                { label: 'Pay Package Breakdown', href: '/travel-nursing/pay-package-breakdown' },
                { label: 'Contract Red Flags', href: '/travel-nursing/contract-red-flags' },
                { label: 'How to Negotiate Your Contract', href: '/travel-nursing/how-to-negotiate-contract' },
                { label: 'Travel Nurse vs Staff Nurse Salary', href: '/travel-nursing/vs-staff-nurse-salary' },
                { label: 'Night Shift Differential for Nurses', href: '/night-shift-differential-nurses' },
                { label: 'Shift Differential Nurse Pay 2026', href: '/shift-differential-nurse-pay-2026' },
                { label: 'Nurse Overtime Pay Guide', href: '/nurse-overtime-pay-guide' },
              ]}
            />
            <SectionCard
              title="Salary Negotiation"
              links={[
                { label: 'Nurse Negotiation Playbook', href: '/salary-negotiation/nurse-playbook' },
                { label: 'How to Negotiate a Nursing Salary', href: '/salary-negotiation/how-to-negotiate-nursing-salary' },
                { label: 'Nurse Salary Negotiation Guide 2026', href: '/nurse-salary-negotiation-guide-2026' },
                { label: 'Nurse Salary Negotiation Data Guide', href: '/nurse-salary-negotiation-data-guide-2026' },
                { label: 'Nurse Salary Negotiation Scripts', href: '/nurse-salary-negotiation-scripts-2026' },
                { label: 'Travel Nursing Contract Review', href: '/salary-negotiation/travel-nursing-contract-review' },
                { label: 'Contract Clauses to Watch', href: '/salary-negotiation/contract-clauses-to-watch' },
                { label: 'Night Shift Differential Pay', href: '/salary-negotiation/night-shift-differential-pay' },
                { label: 'Nurse Sign-On Bonus Guide 2026', href: '/nurse-sign-on-bonus-guide-2026' },
                { label: 'Registered Nurse Salary Breakdown', href: '/registered-nurse-salary-breakdown' },
              ]}
            />
          </div>

          {/* Row 4: Hospital Guides + Tools */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SectionCard
              title="Hospital Salary Guides"
              links={[
                { label: 'Bayhealth RN Salary 2026', href: '/bayhealth-rn-salary-2026' },
                { label: 'HonorHealth RN Salary 2026', href: '/honorhealth-rn-salary-2026' },
                { label: 'Nurse Salary by Hospital (Hub)', href: '/nurse-salary-by-hospital' },
                { label: 'Browse All Hospital Pages →', href: '/nurse-salary-by-hospital' },
              ]}
            />
            <SectionCard
              title="Salary Tools & Data"
              links={[
                { label: 'RN Salary Calculator', href: '/rn-salary-calculator' },
                { label: 'Travel Nurse Pay Calculator', href: '/travel-nurse-pay-calculator' },
                { label: 'Salary Data 2026', href: '/salary-data' },
                { label: 'Nurse Salary Data Hub', href: '/nursing-salary/salary-data-2026' },
                { label: 'How We Calculate Nurse Salary Estimates', href: '/how-we-calculate-nurse-salary-estimates' },
                { label: 'RN Salary by City (Hub)', href: '/rn-salary-by-city' },
                { label: 'RN Salary by State (Hub)', href: '/rn-salary-by-state' },
                { label: 'Highest-Paying States for RNs', href: '/rn-salary-by-state/highest-paying-states' },
                { label: 'Nurse Salary by Hospital (Hub)', href: '/nurse-salary-by-hospital' },
                { label: 'Contract Audit Kit', href: '/audit' },
              ]}
            />
          </div>

          {/* RN Salary by State — full 50-state grid */}
          <div className="border border-outline-variant rounded-xl bg-surface-container-lowest overflow-hidden">
            <div className="bg-surface-container-low border-b border-outline-variant px-5 py-3 flex items-center justify-between">
              <h2 className="text-sm font-bold font-headline text-primary uppercase tracking-wider">
                RN Salary by State — All 50 States
              </h2>
              <Link href="/rn-salary-by-state" className="text-xs text-primary hover:underline font-medium">
                View hub →
              </Link>
            </div>
            <div className="p-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
              {states.map((state) => (
                <Link
                  key={state.href}
                  href={state.href}
                  className="text-xs text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-colors px-2 py-1.5 rounded border border-transparent hover:border-outline-variant flex items-center gap-1 group"
                >
                  <span className="text-outline group-hover:text-primary transition-colors text-xs">›</span>
                  {state.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Site Info */}
          <div className="border border-outline-variant rounded-xl bg-surface-container-lowest overflow-hidden">
            <div className="bg-surface-container-low border-b border-outline-variant px-5 py-3">
              <h2 className="text-sm font-bold font-headline text-primary uppercase tracking-wider">
                About & Site Info
              </h2>
            </div>
            <div className="p-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/about' },
                { label: 'Contact', href: '/contact' },
                { label: 'Privacy Policy', href: '/privacy-policy' },
                { label: 'Terms of Service', href: '/terms' },
                { label: 'Disclaimer', href: '/disclaimer' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1.5 group px-2 py-1"
                >
                  <span className="text-outline group-hover:text-primary transition-colors">›</span>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
