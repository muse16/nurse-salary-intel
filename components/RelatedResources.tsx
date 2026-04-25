import Link from 'next/link';

interface ResourceItem {
  href: string;
  title: string;
  desc: string;
}

interface RelatedResourcesProps {
  heading?: string;
  items: ResourceItem[];
  columns?: 2 | 3;
}

export default function RelatedResources({
  heading = 'Related Resources',
  items,
  columns = 2,
}: RelatedResourcesProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold font-headline text-on-surface">{heading}</h2>
      <div className={`grid sm:grid-cols-2 ${columns === 3 ? 'lg:grid-cols-3' : ''} gap-4`}>
        {items.map(({ href, title, desc }) => (
          <Link
            key={href}
            href={href}
            className="p-4 rounded-lg border border-outline-variant hover:border-primary hover:bg-surface-container-low transition-colors"
          >
            <p className="font-bold text-primary text-sm mb-1">{title} →</p>
            <p className="text-on-surface-variant text-xs">{desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
