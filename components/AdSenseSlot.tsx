'use client';

import { useEffect } from 'react';

interface AdSenseSlotProps {
  position: 'header' | 'sidebar' | 'mid-content';
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

  const slotStyle =
    position === 'sidebar'
      ? { display: 'inline-block', width: '300px', height: '250px' }
      : { display: 'block', width: '100%', height: '90px' };

  return (
    <div className="flex justify-center overflow-hidden">
      <ins
        className="adsbygoogle"
        style={slotStyle}
        data-ad-client="ca-pub-4487629215570224"
        data-ad-format={position === 'sidebar' ? 'rectangle' : 'horizontal'}
        data-full-width-responsive="true"
      />
    </div>
  );
}
