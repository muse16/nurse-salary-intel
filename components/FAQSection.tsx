interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
}

export default function FAQSection({ faqs }: FAQSectionProps) {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold font-headline text-on-surface mb-6">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <details
            key={i}
            className="group bg-surface-container-lowest rounded-lg border border-outline-variant overflow-hidden"
          >
            <summary className="flex items-center justify-between cursor-pointer px-6 py-4 font-semibold text-on-surface hover:bg-surface-container-low transition-colors">
              <span>{faq.question}</span>
              <svg
                className="w-5 h-5 text-outline shrink-0 transition-transform group-open:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-4 text-on-surface-variant leading-relaxed">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
