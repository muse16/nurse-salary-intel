interface GearItem {
  name: string;
  price: string;
  category: string;
  affiliateLink: string;
  emoji: string;
  bgColor: string;
}

interface RecommendedGearProps {
  /** 'sidebar' (default) = single column list; 'grid' = 2–5 col grid for full-width use */
  layout?: 'sidebar' | 'grid';
}

export default function RecommendedGear({ layout = 'sidebar' }: RecommendedGearProps) {
  const AMAZON_TAG = 'maveryholding-20';

  const gearItems: GearItem[] = [
    {
      name: '3M Littmann Classic III Stethoscope',
      price: '$119.99',
      category: 'Diagnostic Tools',
      affiliateLink: `https://www.amazon.com/s?k=3M+Littmann+Classic+III+Stethoscope&tag=${AMAZON_TAG}`,
      emoji: '🩺',
      bgColor: 'bg-blue-100',
    },
    {
      name: 'Nursing Compression Socks (3-Pack)',
      price: '$24.99',
      category: 'Comfort & Wellness',
      affiliateLink: `https://www.amazon.com/s?k=nurse+compression+socks+women+men&tag=${AMAZON_TAG}`,
      emoji: '🧦',
      bgColor: 'bg-green-100',
    },
    {
      name: 'Medical Scrubs — Top-Rated',
      price: '$35+',
      category: 'Medical Apparel',
      affiliateLink: `https://www.amazon.com/s?k=medical+scrubs+nursing&tag=${AMAZON_TAG}`,
      emoji: '👕',
      bgColor: 'bg-teal-100',
    },
    {
      name: 'Retractable Badge Reel Clip',
      price: '$12.99',
      category: 'Accessories',
      affiliateLink: `https://www.amazon.com/s?k=retractable+badge+reel+nurse&tag=${AMAZON_TAG}`,
      emoji: '🏷️',
      bgColor: 'bg-purple-100',
    },
    {
      name: 'Medical Penlight (2-Pack)',
      price: '$9.99',
      category: 'Diagnostic Tools',
      affiliateLink: `https://www.amazon.com/s?k=medical+penlight+nurse+2+pack&tag=${AMAZON_TAG}`,
      emoji: '🔦',
      bgColor: 'bg-yellow-100',
    },
    {
      name: 'Nursing Clipboard with Storage',
      price: '$16.99',
      category: 'Organization',
      affiliateLink: `https://www.amazon.com/s?k=nursing+clipboard+storage+compartment&tag=${AMAZON_TAG}`,
      emoji: '📋',
      bgColor: 'bg-orange-100',
    },
    {
      name: 'Nurse Fanny Pack / Hip Bag',
      price: '$22.99',
      category: 'Organization',
      affiliateLink: `https://www.amazon.com/s?k=nurse+fanny+pack+hip+bag+scrubs&tag=${AMAZON_TAG}`,
      emoji: '👜',
      bgColor: 'bg-pink-100',
    },
    {
      name: 'Waterproof Watch with Second Hand',
      price: '$29.99',
      category: 'Clinical Essentials',
      affiliateLink: `https://www.amazon.com/s?k=waterproof+nurse+watch+second+hand&tag=${AMAZON_TAG}`,
      emoji: '⌚',
      bgColor: 'bg-indigo-100',
    },
    {
      name: 'Nursing Drug Handbook 2026',
      price: '$39.99',
      category: 'Reference',
      affiliateLink: `https://www.amazon.com/s?k=nursing+drug+handbook+2026&tag=${AMAZON_TAG}`,
      emoji: '📚',
      bgColor: 'bg-red-100',
    },
    {
      name: 'Trauma Shears — Heavy Duty',
      price: '$8.99',
      category: 'Clinical Essentials',
      affiliateLink: `https://www.amazon.com/s?k=trauma+shears+nurse+heavy+duty&tag=${AMAZON_TAG}`,
      emoji: '✂️',
      bgColor: 'bg-gray-100',
    },
  ];

  if (layout === 'grid') {
    return (
      <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-900">Nurse-Approved Gear</h3>
          <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full font-semibold">
            Affiliate
          </span>
        </div>
        <p className="text-gray-500 text-sm mb-5">
          Essential tools trusted by nursing professionals — handpicked from Amazon.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {gearItems.map((item, idx) => (
            <a
              key={idx}
              href={item.affiliateLink}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="flex flex-col items-center text-center gap-2 rounded-xl p-3 border border-gray-100 hover:border-blue-300 hover:shadow-sm transition-all bg-gray-50 hover:bg-blue-50"
            >
              <div className={`w-12 h-12 rounded-lg ${item.bgColor} flex items-center justify-center text-2xl`}>
                {item.emoji}
              </div>
              <div className="text-xs font-bold text-gray-900 leading-tight line-clamp-2">{item.name}</div>
              <div className="text-xs text-gray-400">{item.category}</div>
              <div className="text-sm font-black text-blue-600">{item.price}</div>
              <div className="text-xs text-gray-400">Shop Amazon ↗</div>
            </a>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="text-xs text-gray-400 text-center">
            As an Amazon Associate, we earn from qualifying purchases.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-bold text-gray-900">Recommended Gear</h3>
        <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full font-semibold">
          Affiliate
        </span>
      </div>
      <p className="text-gray-500 text-xs mb-5">
        Essential tools trusted by nursing professionals.
      </p>

      <div className="space-y-3">
        {gearItems.map((item, idx) => (
          <a
            key={idx}
            href={item.affiliateLink}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="flex items-center gap-3 rounded-xl p-3 border border-gray-100 hover:border-blue-300 hover:shadow-sm transition-all bg-gray-50 hover:bg-blue-50"
          >
            <div className={`w-12 h-12 rounded-lg ${item.bgColor} flex items-center justify-center shrink-0 text-2xl`}>
              {item.emoji}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-bold text-gray-900 leading-tight line-clamp-2">{item.name}</div>
              <div className="text-xs text-gray-400 mt-0.5">{item.category}</div>
            </div>
            <div className="text-right shrink-0">
              <div className="text-sm font-black text-blue-600">{item.price}</div>
              <div className="text-xs text-gray-400">Amazon ↗</div>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-5 pt-4 border-t border-gray-100">
        <p className="text-xs text-gray-400 text-center">
          As an Amazon Associate, we earn from qualifying purchases.
        </p>
      </div>
    </div>
  );
}
