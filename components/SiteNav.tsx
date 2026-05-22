'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useCallback } from 'react';

type MenuKey = 'rn-salary' | 'specialties' | 'career' | 'travel' | 'calculators' | null;

const NAV_ITEMS: { label: string; href: string; key: MenuKey }[] = [
  { label: 'RN Salary',           href: '/rn-salary-by-state',              key: 'rn-salary' },
  { label: 'Nursing Specialties', href: '/nursing-salary/by-specialty-2026', key: 'specialties' },
  { label: 'Career Guides',       href: '/blog',                             key: 'career' },
  { label: 'Travel Nursing',      href: '/travel-nursing',                   key: 'travel' },
  { label: 'Calculators',         href: '/rn-salary-calculator',             key: 'calculators' },
];

export default function SiteNav() {
  const [activeMenu, setActiveMenu] = useState<MenuKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<MenuKey>(null);
  const closeTimer = useState<ReturnType<typeof setTimeout> | null>(null);

  const openMenu = useCallback((key: MenuKey) => {
    if (closeTimer[0]) clearTimeout(closeTimer[0]);
    setActiveMenu(key);
  }, [closeTimer]);

  const scheduleClose = useCallback(() => {
    closeTimer[0] = setTimeout(() => setActiveMenu(null), 120);
  }, [closeTimer]);

  const cancelClose = useCallback(() => {
    if (closeTimer[0]) clearTimeout(closeTimer[0]);
  }, [closeTimer]);

  const toggleAccordion = (key: MenuKey) =>
    setOpenAccordion(prev => (prev === key ? null : key));

  return (
    <nav className="fixed w-full top-0 z-50 glass-nav shadow-sm">

      {/* ── Main bar ── */}
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">

        {/* Logo — unchanged */}
        <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-primary font-headline shrink-0">
          <Image src="/images/logo.svg" alt="Nurse Salary Intel logo" width={32} height={32} priority />
          Nurse Salary Intel
        </Link>

        {/* ── Desktop nav ── */}
        <div className="hidden lg:flex items-center gap-0.5">
          {NAV_ITEMS.map(item => (
            <div
              key={item.key}
              onMouseEnter={() => openMenu(item.key)}
              onMouseLeave={scheduleClose}
            >
              <Link
                href={item.href}
                onClick={() => setActiveMenu(null)}
                className={`flex items-center gap-1 text-sm font-medium px-3 py-2 rounded-lg transition-colors whitespace-nowrap ${
                  activeMenu === item.key
                    ? 'bg-surface-container text-primary'
                    : 'text-on-surface-variant hover:bg-surface-container hover:text-primary'
                }`}
              >
                {item.label}
                <svg
                  className={`w-3.5 h-3.5 opacity-50 transition-transform duration-200 ${activeMenu === item.key ? 'rotate-180 opacity-80' : ''}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </div>
          ))}

          <Link
            href="/rn-salary-calculator"
            className="ml-3 gradient-primary text-on-primary px-5 py-2.5 rounded-xl font-semibold text-sm shadow-md transition-all active:scale-95 hover:opacity-90 whitespace-nowrap"
          >
            Calculate Salary
          </Link>
        </div>

        {/* ── Mobile hamburger ── */}
        <button
          className="lg:hidden text-on-surface-variant p-2 rounded-lg hover:bg-surface-container transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* ── Mega menu panel (desktop) ── */}
      {activeMenu && (
        <div
          className="absolute top-full left-0 w-full bg-white border-b border-outline-variant/40 shadow-xl z-40"
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        >
          <div className="max-w-7xl mx-auto px-6 py-7">

            {/* RN SALARY */}
            {activeMenu === 'rn-salary' && (
              <div className="flex gap-10">
                <div className="flex gap-4 shrink-0">
                  <Link href="/rn-salary-by-state" onClick={() => setActiveMenu(null)}
                    className="group flex flex-col gap-3 p-5 rounded-xl border border-outline-variant/50 hover:border-primary hover:shadow-md transition-all w-44">
                    <div className="w-10 h-10 rounded-lg bg-primary-fixed flex items-center justify-center text-xl">🗺️</div>
                    <div>
                      <div className="font-semibold text-sm text-on-surface">By State</div>
                      <div className="text-xs text-on-surface-variant mt-0.5">All 50 states ranked</div>
                    </div>
                  </Link>
                  <Link href="/rn-salary-by-city" onClick={() => setActiveMenu(null)}
                    className="group flex flex-col gap-3 p-5 rounded-xl border border-outline-variant/50 hover:border-primary hover:shadow-md transition-all w-44">
                    <div className="w-10 h-10 rounded-lg bg-secondary-container flex items-center justify-center text-xl">🏙️</div>
                    <div>
                      <div className="font-semibold text-sm text-on-surface">By City</div>
                      <div className="text-xs text-on-surface-variant mt-0.5">25+ metro areas</div>
                    </div>
                  </Link>
                </div>
                <div className="w-px bg-outline-variant/30 shrink-0" />
                <div>
                  <p className="text-xs font-bold text-outline uppercase tracking-wider mb-3">Top States</p>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-1">
                    {['California', 'Texas', 'New York', 'Florida', 'Washington', 'Massachusetts'].map(s => (
                      <Link key={s} href={`/rn-salary-by-state/${s.toLowerCase().replace(/ /g, '-')}`}
                        onClick={() => setActiveMenu(null)}
                        className="flex items-center gap-2 py-1.5 text-sm text-on-surface-variant hover:text-primary transition-colors">
                        <span className="w-1 h-1 rounded-full bg-outline-variant shrink-0" />{s}
                      </Link>
                    ))}
                  </div>
                  <Link href="/highest-paying-states-for-rns-2026" onClick={() => setActiveMenu(null)}
                    className="inline-flex items-center gap-1 mt-3 text-xs font-semibold text-primary">
                    Highest paying states →
                  </Link>
                </div>
                <div className="w-px bg-outline-variant/30 shrink-0" />
                <div>
                  <p className="text-xs font-bold text-outline uppercase tracking-wider mb-3">Top Cities</p>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-1">
                    {['Houston', 'New York City', 'Los Angeles', 'Chicago', 'Dallas', 'Seattle'].map(c => (
                      <Link key={c} href={`/${c.toLowerCase().replace(/ /g, '-')}-rn-salary-2026`}
                        onClick={() => setActiveMenu(null)}
                        className="flex items-center gap-2 py-1.5 text-sm text-on-surface-variant hover:text-primary transition-colors">
                        <span className="w-1 h-1 rounded-full bg-outline-variant shrink-0" />{c}
                      </Link>
                    ))}
                  </div>
                  <Link href="/nurse-salary-cost-of-living-2026" onClick={() => setActiveMenu(null)}
                    className="inline-flex items-center gap-1 mt-3 text-xs font-semibold text-primary">
                    Cost of living adjusted →
                  </Link>
                </div>
              </div>
            )}

            {/* NURSING SPECIALTIES */}
            {activeMenu === 'specialties' && (
              <div>
                <p className="text-xs font-bold text-outline uppercase tracking-wider mb-4">Browse by specialty</p>
                <div className="grid grid-cols-4 gap-3">
                  {[
                    { label: 'ICU Nurse',          icon: '🏥', pay: 'Avg $95K', href: '/icu-nurse-salary-2026' },
                    { label: 'ER Nurse',            icon: '🚑', pay: 'Avg $88K', href: '/er-nurse-salary-2026' },
                    { label: 'OR Nurse',            icon: '🔬', pay: 'Avg $91K', href: '/or-nurse-salary-2026' },
                    { label: 'CRNA',               icon: '💉', pay: 'Avg $214K', href: '/crna-salary-2026' },
                    { label: 'Nurse Practitioner', icon: '🩺', pay: 'Avg $126K', href: '/nurse-practitioner-salary-2026' },
                    { label: 'NICU Nurse',         icon: '👶', pay: 'Avg $82K', href: '/nicu-nurse-salary-2026' },
                    { label: 'L&D Nurse',          icon: '🌸', pay: 'Avg $84K', href: '/labor-delivery-nurse-salary-2026' },
                    { label: 'Oncology Nurse',     icon: '🎗️', pay: 'Avg $86K', href: '/oncology-nurse-salary-2026' },
                  ].map(s => (
                    <Link key={s.label} href={s.href} onClick={() => setActiveMenu(null)}
                      className="flex items-center gap-3 p-3 rounded-xl border border-outline-variant/50 hover:border-primary hover:bg-primary-fixed/30 transition-all">
                      <span className="text-xl shrink-0">{s.icon}</span>
                      <div>
                        <div className="text-sm font-semibold text-on-surface leading-tight">{s.label}</div>
                        <div className="text-xs text-primary font-medium">{s.pay}</div>
                      </div>
                    </Link>
                  ))}
                </div>
                <Link href="/nursing-salary/by-specialty-2026" onClick={() => setActiveMenu(null)}
                  className="inline-flex items-center gap-1 mt-4 text-xs font-semibold text-primary">
                  View all specialties →
                </Link>
              </div>
            )}

            {/* CAREER GUIDES */}
            {activeMenu === 'career' && (
              <div className="flex gap-10">
                <div className="shrink-0">
                  <Link href="/new-grad-rn-salary-2026" onClick={() => setActiveMenu(null)}
                    className="flex flex-col gap-3 p-5 rounded-xl border border-outline-variant/50 hover:border-primary hover:shadow-md transition-all w-44">
                    <div className="w-10 h-10 rounded-lg bg-tertiary-fixed flex items-center justify-center text-xl">🎓</div>
                    <div>
                      <div className="font-semibold text-sm text-on-surface">New Grad RN</div>
                      <div className="text-xs text-on-surface-variant mt-0.5">Entry-level salary guide</div>
                    </div>
                  </Link>
                </div>
                <div className="w-px bg-outline-variant/30 shrink-0" />
                <div>
                  <p className="text-xs font-bold text-outline uppercase tracking-wider mb-3">Pay Guides</p>
                  {[
                    { label: 'Shift differential pay',      href: '/shift-differential-nurse-pay-2026' },
                    { label: 'Night shift pay guide',        href: '/night-shift-differential-nurses' },
                    { label: 'Per diem nurse pay',           href: '/per-diem-nurse-salary-2026' },
                    { label: 'BSN vs ADN salary',            href: '/salary/bsn-vs-rn' },
                    { label: 'RN vs LPN salary',             href: '/rn-vs-lpn-salary-2026' },
                  ].map(l => (
                    <Link key={l.label} href={l.href} onClick={() => setActiveMenu(null)}
                      className="flex items-center gap-2 py-1.5 text-sm text-on-surface-variant hover:text-primary transition-colors">
                      <span className="w-1 h-1 rounded-full bg-outline-variant shrink-0" />{l.label}
                    </Link>
                  ))}
                </div>
                <div className="w-px bg-outline-variant/30 shrink-0" />
                <div>
                  <p className="text-xs font-bold text-outline uppercase tracking-wider mb-3">Negotiation</p>
                  {[
                    { label: 'Salary negotiation guide',    href: '/nurse-salary-negotiation-guide-2026' },
                    { label: 'Using BLS data to negotiate', href: '/nurse-salary-negotiation-data-guide-2026' },
                    { label: 'Sign-on bonus guide',          href: '/nurse-sign-on-bonus-guide-2026' },
                    { label: 'Negotiation scripts',          href: '/nurse-salary-negotiation-scripts-2026' },
                  ].map(l => (
                    <Link key={l.label} href={l.href} onClick={() => setActiveMenu(null)}
                      className="flex items-center gap-2 py-1.5 text-sm text-on-surface-variant hover:text-primary transition-colors">
                      <span className="w-1 h-1 rounded-full bg-outline-variant shrink-0" />{l.label}
                    </Link>
                  ))}
                  <Link href="/blog" onClick={() => setActiveMenu(null)}
                    className="inline-flex items-center gap-1 mt-3 text-xs font-semibold text-primary">
                    All salary guides →
                  </Link>
                </div>
              </div>
            )}

            {/* TRAVEL NURSING */}
            {activeMenu === 'travel' && (
              <div className="flex gap-10">
                <div className="flex gap-4 shrink-0">
                  <Link href="/travel-nursing" onClick={() => setActiveMenu(null)}
                    className="flex flex-col gap-3 p-5 rounded-xl border border-outline-variant/50 hover:border-primary hover:shadow-md transition-all w-44">
                    <div className="w-10 h-10 rounded-lg bg-primary-fixed flex items-center justify-center text-xl">✈️</div>
                    <div>
                      <div className="font-semibold text-sm text-on-surface">Overview</div>
                      <div className="text-xs text-on-surface-variant mt-0.5">How travel nursing works</div>
                    </div>
                  </Link>
                  <Link href="/travel-nurse-pay-calculator" onClick={() => setActiveMenu(null)}
                    className="flex flex-col gap-3 p-5 rounded-xl border border-outline-variant/50 hover:border-primary hover:shadow-md transition-all w-44">
                    <div className="w-10 h-10 rounded-lg bg-secondary-container flex items-center justify-center text-xl">🧮</div>
                    <div>
                      <div className="font-semibold text-sm text-on-surface">Pay Calculator</div>
                      <div className="text-xs text-on-surface-variant mt-0.5">Estimate take-home pay</div>
                    </div>
                  </Link>
                </div>
                <div className="w-px bg-outline-variant/30 shrink-0" />
                <div>
                  <p className="text-xs font-bold text-outline uppercase tracking-wider mb-3">Contracts & Pay</p>
                  {[
                    { label: 'Contract red flags',       href: '/travel-nursing/contract-red-flags' },
                    { label: 'Pay package breakdown',    href: '/travel-nursing/pay-package-breakdown' },
                    { label: 'Negotiate your contract',  href: '/travel-nursing/how-to-negotiate-contract' },
                    { label: 'Agency comparison',        href: '/travel-nurse-agency-comparison-2026' },
                    { label: 'Travel vs staff nurse pay', href: '/travel-nurse-vs-staff-nurse-salary-2026' },
                  ].map(l => (
                    <Link key={l.label} href={l.href} onClick={() => setActiveMenu(null)}
                      className="flex items-center gap-2 py-1.5 text-sm text-on-surface-variant hover:text-primary transition-colors">
                      <span className="w-1 h-1 rounded-full bg-outline-variant shrink-0" />{l.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* CALCULATORS */}
            {activeMenu === 'calculators' && (
              <div className="flex gap-4">
                <Link href="/rn-salary-calculator" onClick={() => setActiveMenu(null)}
                  className="flex flex-col gap-3 p-5 rounded-xl border border-outline-variant/50 hover:border-primary hover:shadow-md transition-all w-52">
                  <div className="w-10 h-10 rounded-lg bg-primary-fixed flex items-center justify-center text-xl">💵</div>
                  <div>
                    <div className="font-semibold text-sm text-on-surface">RN Salary Calculator</div>
                    <div className="text-xs text-on-surface-variant mt-0.5">Take-home pay after taxes, all 50 states</div>
                  </div>
                </Link>
                <Link href="/travel-nurse-pay-calculator" onClick={() => setActiveMenu(null)}
                  className="flex flex-col gap-3 p-5 rounded-xl border border-outline-variant/50 hover:border-primary hover:shadow-md transition-all w-52">
                  <div className="w-10 h-10 rounded-lg bg-secondary-container flex items-center justify-center text-xl">✈️</div>
                  <div>
                    <div className="font-semibold text-sm text-on-surface">Travel Nurse Pay Calculator</div>
                    <div className="text-xs text-on-surface-variant mt-0.5">Compare contracts &amp; stipends</div>
                  </div>
                </Link>
                <Link href="/salary/bsn-vs-rn" onClick={() => setActiveMenu(null)}
                  className="flex flex-col gap-3 p-5 rounded-xl border border-outline-variant/50 hover:border-primary hover:shadow-md transition-all w-52">
                  <div className="w-10 h-10 rounded-lg bg-tertiary-fixed flex items-center justify-center text-xl">🎓</div>
                  <div>
                    <div className="font-semibold text-sm text-on-surface">BSN vs ADN Salary</div>
                    <div className="text-xs text-on-surface-variant mt-0.5">Does a BSN pay off? Run the numbers</div>
                  </div>
                </Link>
              </div>
            )}

          </div>
        </div>
      )}

      {/* ── Mobile accordion menu ── */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-outline-variant/30 bg-white max-h-[80vh] overflow-y-auto">
          {NAV_ITEMS.map(item => (
            <div key={item.key} className="border-b border-outline-variant/20">
              <button
                className="flex items-center justify-between w-full px-6 py-4 text-sm font-semibold text-on-surface text-left hover:text-primary transition-colors"
                onClick={() => toggleAccordion(item.key)}
                aria-expanded={openAccordion === item.key}
              >
                {item.label}
                <svg
                  className={`w-4 h-4 text-outline transition-transform duration-200 ${openAccordion === item.key ? 'rotate-180' : ''}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {openAccordion === item.key && (
                <div className="bg-surface-container-low pb-3">
                  {/* RN Salary mobile */}
                  {item.key === 'rn-salary' && (
                    <>
                      {[
                        { label: 'By State — Browse all 50',     href: '/rn-salary-by-state' },
                        { label: 'By City — 25+ metros',          href: '/rn-salary-by-city' },
                        { label: 'Highest paying states',          href: '/highest-paying-states-for-rns-2026' },
                        { label: 'Cost of living adjusted',        href: '/nurse-salary-cost-of-living-2026' },
                      ].map(l => (
                        <Link key={l.label} href={l.href} onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-2 px-8 py-3 text-sm text-on-surface-variant hover:text-primary transition-colors">
                          <span className="w-1 h-1 rounded-full bg-outline-variant shrink-0" />{l.label}
                        </Link>
                      ))}
                    </>
                  )}
                  {/* Specialties mobile */}
                  {item.key === 'specialties' && (
                    <>
                      {[
                        { label: 'ICU Nurse', href: '/icu-nurse-salary-2026' },
                        { label: 'ER Nurse',  href: '/er-nurse-salary-2026' },
                        { label: 'CRNA',      href: '/crna-salary-2026' },
                        { label: 'Nurse Practitioner', href: '/nurse-practitioner-salary-2026' },
                        { label: 'NICU Nurse', href: '/nicu-nurse-salary-2026' },
                        { label: 'L&D Nurse',  href: '/labor-delivery-nurse-salary-2026' },
                        { label: 'All specialties', href: '/nursing-salary/by-specialty-2026' },
                      ].map(l => (
                        <Link key={l.label} href={l.href} onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-2 px-8 py-3 text-sm text-on-surface-variant hover:text-primary transition-colors">
                          <span className="w-1 h-1 rounded-full bg-outline-variant shrink-0" />{l.label}
                        </Link>
                      ))}
                    </>
                  )}
                  {/* Career mobile */}
                  {item.key === 'career' && (
                    <>
                      {[
                        { label: 'New Grad RN Salary',          href: '/new-grad-rn-salary-2026' },
                        { label: 'Shift Differential Pay',       href: '/shift-differential-nurse-pay-2026' },
                        { label: 'Salary Negotiation Guide',     href: '/nurse-salary-negotiation-guide-2026' },
                        { label: 'BSN vs ADN Pay',               href: '/salary/bsn-vs-rn' },
                        { label: 'All Salary Guides',            href: '/blog' },
                      ].map(l => (
                        <Link key={l.label} href={l.href} onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-2 px-8 py-3 text-sm text-on-surface-variant hover:text-primary transition-colors">
                          <span className="w-1 h-1 rounded-full bg-outline-variant shrink-0" />{l.label}
                        </Link>
                      ))}
                    </>
                  )}
                  {/* Travel mobile */}
                  {item.key === 'travel' && (
                    <>
                      {[
                        { label: 'Travel Nurse Overview',        href: '/travel-nursing' },
                        { label: 'Pay Calculator',               href: '/travel-nurse-pay-calculator' },
                        { label: 'Contract Red Flags',           href: '/travel-nursing/contract-red-flags' },
                        { label: 'Pay Package Breakdown',        href: '/travel-nursing/pay-package-breakdown' },
                        { label: 'Agency Comparison',            href: '/travel-nurse-agency-comparison-2026' },
                      ].map(l => (
                        <Link key={l.label} href={l.href} onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-2 px-8 py-3 text-sm text-on-surface-variant hover:text-primary transition-colors">
                          <span className="w-1 h-1 rounded-full bg-outline-variant shrink-0" />{l.label}
                        </Link>
                      ))}
                    </>
                  )}
                  {/* Calculators mobile */}
                  {item.key === 'calculators' && (
                    <>
                      {[
                        { label: 'RN Salary Calculator',          href: '/rn-salary-calculator' },
                        { label: 'Travel Nurse Pay Calculator',   href: '/travel-nurse-pay-calculator' },
                        { label: 'BSN vs ADN Salary',             href: '/salary/bsn-vs-rn' },
                      ].map(l => (
                        <Link key={l.label} href={l.href} onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-2 px-8 py-3 text-sm text-on-surface-variant hover:text-primary transition-colors">
                          <span className="w-1 h-1 rounded-full bg-outline-variant shrink-0" />{l.label}
                        </Link>
                      ))}
                    </>
                  )}
                </div>
              )}
            </div>
          ))}

          {/* Mobile CTA */}
          <div className="px-6 py-5">
            <Link
              href="/rn-salary-calculator"
              className="block gradient-primary text-on-primary px-4 py-3 rounded-xl font-semibold text-sm text-center shadow-md"
              onClick={() => setMobileOpen(false)}
            >
              Calculate Salary
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
