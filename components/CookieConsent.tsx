'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const STORAGE_KEY = 'nsi_cookie_consent';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show if user hasn't already dismissed
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  function dismiss() {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-50 bg-inverse-surface border-t border-outline-variant/20 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p className="text-sm text-inverse-on-surface leading-relaxed max-w-2xl">
          We use cookies for analytics and advertising, including Google AdSense.
          By continuing to use this site, you accept our use of cookies.{' '}
          <Link
            href="/privacy-policy"
            className="underline text-inverse-on-surface hover:text-primary-fixed transition-colors font-medium"
          >
            Privacy Policy
          </Link>
        </p>
        <button
          onClick={dismiss}
          aria-label="Accept cookies and close banner"
          className="shrink-0 bg-primary text-on-primary text-sm font-semibold px-5 py-2 rounded-lg hover:bg-primary-container hover:text-on-primary-container transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          Got it
        </button>
      </div>
    </div>
  );
}
