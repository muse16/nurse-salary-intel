import Link from 'next/link';
import SiteNav from './SiteNav';
import Breadcrumbs from './Breadcrumbs';
import LastUpdated from './LastUpdated';
import ContractAuditCTA from './ContractAuditCTA';
import FAQSection from './FAQSection';
import ArticleSchema from './ArticleSchema';

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
}: SEOPageLayoutProps) {
  return (
    <div className="min-h-screen bg-surface">
      <SiteNav />
      <ArticleSchema
        title={schemaTitle}
        description={schemaDescription}
        url={schemaUrl}
        type={schemaType}
        faqs={faqs}
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

        <ContractAuditCTA variant="banner" />
      </main>
    </div>
  );
}
