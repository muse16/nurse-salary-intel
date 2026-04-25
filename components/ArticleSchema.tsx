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
  lastUpdated?: string;
}

export default function ArticleSchema({
  title,
  description,
  url,
  datePublished = '2026-04-01',
  dateModified,
  type = 'Article',
  faqs,
  lastUpdated,
}: ArticleSchemaProps) {
  const getDateModified = () => {
    if (dateModified) return dateModified;
    if (lastUpdated) {
      const monthMap: { [key: string]: string } = {
        january: '01', february: '02', march: '03', april: '04',
        may: '05', june: '06', july: '07', august: '08',
        september: '09', october: '10', november: '11', december: '12',
      };
      const parts = lastUpdated.toLowerCase().split(' ');
      if (parts.length === 2) {
        const month = monthMap[parts[0]];
        const year = parts[1];
        if (month && year) {
          return `${year}-${month}-15`;
        }
      }
    }
    return '2026-04-20';
  };

  const finalDateModified = getDateModified();

  const formatDateWithTimezone = (dateStr: string) => {
    if (!dateStr.includes('T')) {
      return `${dateStr}T00:00:00Z`;
    }
    if (!dateStr.endsWith('Z')) {
      return `${dateStr}Z`;
    }
    return dateStr;
  };

  const baseUrl = `${BASE}${url}`;

  // When FAQs exist, output ONLY FAQPage (Google's recommended approach)
  // When no FAQs, output ONLY Article
  let jsonLd: any;

  if