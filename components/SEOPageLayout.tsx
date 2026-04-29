import Link from 'next/link';
import SiteNav from './SiteNav';
import Breadcrumbs from './Breadcrumbs';
import LastUpdated from './LastUpdated';
import ContractAuditCTA from './ContractAuditCTA';
import FAQSection from './FAQSection';
import ArticleSchema from './ArticleSchema';
import { getCitiesByState, slugify } from '@/lib/data';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface SourceItem {
  title: string;
  url: string;
}

interface AuthorInfo {
  name: string;
  link: string;
}

interface SEOPageLayoutProps {
  breadcrumbs: BreadcrumbItem[];
  h1: string;
  lastUpdated?: string;
  author?: AuthorInfo;
  sources?: SourceItem[];
  methodology?: string;
  schemaType?: 'Article' | 'HowTo';
  schemaTitle: string;
  schemaDescription: string;
  schemaUrl: string;
  faqs: FAQItem[];
  children: React.ReactNode;
  /** Pass the full state name (e.g. "Arizona") to auto-render a Top Cities section */
  stateName?: string;
  /** Pass the state slug (e.g. "arizona") for city URL generation */
  stateSlug?: string;
}

export default function SEOPageLayout({
  breadcrumbs,
  h1,
  lastUpdated,
  author,
  sources,
  methodology,
  schemaType = 'Article',
  schemaTitle,
  schemaDescription,
  schemaUrl,
  faqs,
  children,
  stateName,
  stateSlug,
}: SEOPageLayoutProps) {
  const stateCities = stateName && stateSlug ? getCitiesByState(stateName) : [];
  return (
    <div className="min-h-screen bg-surface">
      <SiteNav />
      <ArticleSchema
        title={schemaTitle}
        description={schemaDescription}
        url={schemaUrl}
        type={schemaType}
        faqs={faqs}
        lastUpdated={lastUpdated}
      />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <Breadcrumbs items={breadcrumbs} />

        {lastUpdated && <LastUpdated date={lastUpdated} />}

        <h1 className="text-3xl sm:text-4xl font-bold font-headline text-on-surface tracking-tight mb-8">
          {h1}
        </h1>

        <div className="prose-content space-y-6 text-on-surface-variant leading-relaxed">
          {children}
        </div>

        <FAQSection faqs={faqs} />

        {/* EEAT Signals: Author, Sources, Methodology */}
        <div className="border-t border-outline-variant pt-8 mt-12 space-y-6">
          {author && (
            <div>
              <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wide">By</p>
              <p className="text-on-surface">
                <Link href={author.link} className="text-primary hover:underline font-semibold">
                  {author.name}
                </Link>
              </p>
            </div>
          )}

          {sources && sources.length > 0 && (
            <div>
              <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wide">Sources</p>
              <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
                {sources.map((source) => (
                  <li key={source.url}>
                    <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      {source.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {methodology && (
            <div>
              <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wide">Methodology</p>
              <p className="text-on-surface-variant text-sm">{methodology}</p>
            </div>
          )}
        </div>

        {/* Top Cities Section — rendered when stateName + stateSlug provided */}
        {stateName && stateSlug && stateCities.length > 0 && (
          <div className="border-t border-outline-variant pt-8 mt-8">
            <h2 className="text-xl font-bold font-headline text-on-surface mb-4">
              Top Cities for Nurses in {stateName}
            </h2>
            <p className="text-on-surface-variant text-sm mb-4">
              RN salaries vary significantly by metro area within {stateName}. See city-level pay, top hospitals, and how each market compares to the statewide average.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {stateCities.map((city) => (
                <Link
                  key={city}
                  href={`/salary/${stateSlug}/${slugify(city)}`}
                  className="flex items-center gap-2 p-3 rounded-lg border border-outline-variant hover:border-primary hover:bg-surface-container-low transition-colors text-sm"
                >
                  <span className="text-primary font-medium">{city}</span>
                  <span className="text-on-surface-variant text-xs ml-auto">→</span>
                </Link>
              ))}
            </div>
            <p className="text-xs text-on-surface-variant mt-4">
              See all cities: <Link href="/rn-salary-by-city" className="text-primary hover:underline">RN salary by city →</Link>
            </p>
          </div>
        )}

        {/* Top Nursing Specialties — rendered on state pages */}
        {stateName && (
          <div className="border-t border-outline-variant pt-8 mt-8">
            <h2 className="text-xl font-bold font-headline text-on-surface mb-4">
              Top Nursing Specialties in {stateName}
            </h2>
            <p className="text-on-surface-variant text-sm mb-4">
              Specialty and certification significantly impact RN pay in {stateName}. See how each role compares nationally and within the state.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: '/nursing-salary/icu-nurse-salary', label: 'ICU Nurse Salary', desc: 'Critical care pay + CCRN premium' },
                { href: '/nursing-salary/er-nurse-salary', label: 'ER Nurse Salary', desc: 'Emergency nursing pay by state' },
                { href: '/nursing-salary/nicu-nurse-salary', label: 'NICU Nurse Salary', desc: 'Neonatal ICU pay + certification' },
                { href: '/nursing-salary/nurse-practitioner-salary', label: 'Nurse Practitioner Salary', desc: 'NP pay by specialty and state' },
                { href: '/nursing-salary/crna-salary-by-state', label: 'CRNA Salary', desc: 'Highest-paid nursing role — $214K avg' },
                { href: '/nursing-salary/charge-nurse-salary', label: 'Charge Nurse Salary', desc: 'Leadership premium over staff RN' },
              ].map(({ href, label, desc }) => (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center justify-between p-3 rounded-lg border border-outline-variant hover:border-primary hover:bg-surface-container-low transition-colors"
                >
                  <div>
                    <p className="text-sm font-semibold text-primary">{label}</p>
                    <p className="text-xs text-on-surface-variant">{desc}</p>
                  </div>
                  <span className="text-on-surface-variant text-xs ml-3">→</span>
                </Link>
              ))}
            </div>
            <p className="text-xs text-on-surface-variant mt-4">
              Full rankings: <Link href="/highest-paying-nursing-specialties" className="text-primary hover:underline">Highest-paying nursing specialties 2026 →</Link>
            </p>
          </div>
        )}

        <ContractAuditCTA variant="banner" />
      </main>
    </div>
  );
}
