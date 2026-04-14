'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const navLinks = [
  { label: 'Salary Data', href: '/salary-data' },
  { label: 'Travel Nursing', href: '/travel-nursing/salary-guide-2026' },
  { label: 'By Specialty', href: '/nursing-salary/by-specialty-2026' },
  { label: 'By State', href: '/rn-salary-by-state' },
  { label: 'Negotiation', href: '/salary-negotiation/nurse-playbook' },
  { label: 'Contract Audit', href: '/contract-audit' },
];

export default function SiteNav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 glass-nav shadow-sm">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-primary font-headline">
          <Image src="/images/logo.svg" alt="Nurse Salary Intel logo" width={32} height={32} />
          Nurse Salary Intel
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                link.label === 'Contract Audit'
                  ? 'gradient-primary text-on-primary px-4 py-2 rounded-lg'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-on-surface-variant"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden px-6 pb-4 space-y-3 bg-surface-container-lowest/95 backdrop-blur-md">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-on-surface-variant py-2 font-medium"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
