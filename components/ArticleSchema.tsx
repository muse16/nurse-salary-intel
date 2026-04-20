const BASE = 'https://nursesalaryintel.com';

interface FAQItem {
  question: string;
  answer: string;
}

interface ArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  type?: 'Article' | 'HowTo';
  faqs?: FAQItem[];
}

export default function ArticleSchema({
  title,
  description,
  url,
  datePublished = '2026-04-01',
  dateModified = '2026-04-20',
  type = 'Article',
  faqs,
}: ArticleSchemaProps) {
  const article = {
    '@type': type,
    headline: title,
    description,
    url: `${BASE}${url}`,
    datePublished,
    dateModified,
    image: {
      '@type': 'ImageObject',
      url: `${BASE}/images/hero-nurse.jpg`,
      width: 1200,
      height: 630,
    },
    author: {
      '@type': 'Organization',
      name: 'Nurse Salary Intel',
      url: BASE,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Nurse Salary Intel',
      logo: {
        '@type': 'ImageObject',
        url: `${BASE}/images/logo.svg`,
      },
    },
  };

  const graph: object[] = [article];

  if (faqs && faqs.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    });
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
