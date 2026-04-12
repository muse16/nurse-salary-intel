'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

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
        <div className="hidden md:flex items-center gap-x-8">
          <a href="#dashboard" className="text-primary font-semibold border-b-2 border-primary pb-1">Dashboard</a>
          <Link href="/audit" className="text-on-surface-variant hover:text-primary transition-colors">Contract Audit</Link>
          <a href="#browse" className="text-on-surface-variant hover:text-primary transition-colors">Salaries</a>
          <a href="#positions" className="text-on-surface-variant hover:text-primary transition-colors">Positions</a>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/blog" className="hidden lg:block text-on-surface-variant hover:text-primary transition-colors font-medium">Blog</Link>
          <a href="#calculator" className="gradient-primary text-on-primary px-6 py-2.5 rounded-xl font-semibold text-sm shadow-md transition-all active:scale-95">
            Calculate Salary
          </a>
          {/* Mobile hamburger */}
          <button
            className="md:hidden text-on-surface-variant"
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
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3 bg-surface-container-lowest/95 backdrop-blur-md">
          <a href="#dashboard" className="block text-primary font-semibold py-2" onClick={() => setMobileOpen(false)}>Dashboard</a>
          <Link href="/audit" className="block text-on-surface-variant py-2" onClick={() => setMobileOpen(false)}>Contract Audit</Link>
          <a href="#browse" className="block text-on-surface-variant py-2" onClick={() => setMobileOpen(false)}>Salaries</a>
          <a href="#positions" className="block text-on-surface-variant py-2" onClick={() => setMobileOpen(false)}>Positions</a>
          <Link href="/blog" className="block text-on-surface-variant py-2" onClick={() => setMobileOpen(false)}>Blog</Link>
        </div>
      )}
    </nav>
  );
}
