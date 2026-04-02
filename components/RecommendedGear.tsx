import Image from 'next/image';

interface GearItem {
  name: string;
  price: string;
  category: string;
  affiliateLink: string;
  imageUrl: string;
  imageAlt: string;
}

export default function RecommendedGear() {
  const AMAZON_TAG = 'maveryholding-20';

  const gearItems: GearItem[] = [
    {
      name: '3M Littmann Classic III Stethoscope',
      price: '$119.99',
      category: 'Diagnostic Tools',
      affiliateLink: `https://www.amazon.com/dp/B000LNPMEI?tag=${AMAZON_TAG}`,
      imageUrl: 'https://m.media-amazon.com/images/I/71hNNFsNRDL._AC_SL400_.jpg',
      imageAlt: '3M Littmann Classic III Stethoscope',
    },
    {
      name: 'FIGS Raffi Scrub Top',
      price: '$38.00',
      category: 'Medical Apparel',
      affiliateLink: `https://www.amazon.com/s?k=figs+scrubs&tag=${AMAZON_TAG}`,
      imageUrl: 'https://m.media-amazon.com/images/I/61UJn1DPALL._AC_SL400_.jpg',
      imageAlt: 'FIGS scrubs',
    },
    {
      name: 'Physix Gear Compression Socks (3-Pack)',
      price: '$24.99',
      category: 'Comfort & Wellness',
      affiliateLink: `https://www.amazon.com/dp/B01MAWPZJT?tag=${AMAZON_TAG}`,
      imageUrl: 'https://m.media-amazon.com/images/I/71mMm1BXIBL._AC_SL400_.jpg',
      imageAlt: 'Compression socks for nurses',
    },
    {
      name: 'Prestige Medical Badge Reel',
      price: '$12.99',
      category: 'Accessories',
      affiliateLink: `https://www.amazon.com/s?k=nurse+badge+holder+retractable&tag=${AMAZON_TAG}`,
      imageUrl: 'https://m.media-amazon.com/images/I/61WdwFGZIHL._AC_SL400_.jpg',
      imageAlt: 'Retractable badge reel',
    },
    {
      name: 'Prestige Medical Penlight (2-Pack)',
      price: '$9.99',
      category: 'Diagnostic Tools',
      affiliateLink: `https://www.amazon.com/dp/B000EVQWKC?tag=${AMAZON_TAG}`,
      imageUrl: 'https://m.media-amazon.com/images/I/51Y8C1BHDFL._AC_SL400_.jpg',
      imageAlt: 'Medical penlight',
    },
    {
      name: 'Nursing Clipboard with Storage',
      price: '$16.99',
      category: 'Organization',
      affiliateLink: `https://www.amazon.com/s?k=nursing+clipboard+storage&tag=${AMAZON_TAG}`,
      imageUrl: 'https://m.media-amazon.com/images/I/71VqdUxsVtL._AC_SL400_.jpg',
      imageAlt: 'Nursing clipboard with storage',
    },
  ];

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
            <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-white border border-gray-200 shrink-0">
              <Image
                src={item.imageUrl}
                alt={item.imageAlt}
                fill
                className="object-contain p-1"
                sizes="56px"
                unoptimized
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-bold text-gray-900 leading-tight line-clamp-2">{item.name}</div>
              <div className="text-xs text-gray-400 mt-0.5">{item.category}</div>
            </div>
            <div className="text-right shrink-0">
              <div className="text-sm font-black text-blue-600">{item.price}</div>
              <div className="text-xs text-gray-400">Amazon</div>
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
