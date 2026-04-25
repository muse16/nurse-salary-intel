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

interface SEOPageLayoutProps {
  breadcrumbs: BreadcrumbItem[];
  h1: string;
  lastUpdated?: string;
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

        <ContractAuditCTA variant="banner" />
      </main>
    </div>
  );
}
