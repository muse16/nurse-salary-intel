interface ArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  type?: 'Article' | 'HowTo';
}

export default function ArticleSchema({
  title,
  description,
  url,
  datePublished = '2026-04-01',
  dateModified = '2026-04-14',
  type = 'Article',
}: ArticleSchemaProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': type,
    headline: title,
    description,
    url: `https://nursesalaryintel.com${url}`,
    datePublished,
    dateModified,
    author: {
      '@type': 'Organization',
      name: 'Nurse Salary Intel',
      url: 'https://nursesalaryintel.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Nurse Salary Intel',
      logo: {
        '@type': 'ImageObject',
        url: 'https://nursesalaryintel.com/images/logo.svg',
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
