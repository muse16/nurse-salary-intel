'use client';

import { useEffect } from 'react';

interface AdSenseSlotProps {
  position: 'header' | 'sidebar' | 'mid-content' | 'blog-top' | 'blog-mid';
}

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

export default function AdSenseSlot({ position }: AdSenseSlotProps) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {}
  }, []);

  const isSidebar = position === 'sidebar';

  const slotStyle = isSidebar
    ? { display: 'inline-block', width: '300px', height: '250px' }
    : { display: 'block', width: '100%', height: '90px' };

  return (
    <div
      className="flex justify-center overflow-hidden"
      style={{ minHeight: isSidebar ? '250px' : '90px' }}
    >
      <ins
        className="adsbygoogle"
        style={slotStyle}
        data-ad-client="ca-pub-4487629215570224"
        data-ad-format={isSidebar ? 'rectangle' : 'horizontal'}
      />
    </div>
  );
}
