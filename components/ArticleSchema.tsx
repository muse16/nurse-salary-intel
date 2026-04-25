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
  // Convert lastUpdated (e.g., "April 2026") to ISO date if dateModified not provided
  const getDateModified = () => {
    if (dateModified) return dateModified;
    if (lastUpdated) {
      // Convert "April 2026" format to ISO date (use last day of month)
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
          // Use the 15th of the month as a reasonable middle estimate
          return `${year}-${month}-15`;
        }
      }
    }
    return '2026-04-20'; // fallback
  };

  const finalDateModified = getDateModified();

  // Add timezone to ISO dates (Z for UTC)
  const formatDateWithTimezone = (dateStr: string) => {
    if (!dateStr.includes('T')) {
      return `${dateStr}