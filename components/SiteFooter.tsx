import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant/20">
      <div className="w-full py-12 px-6 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col gap-2 items-center md:items-start">
          <div className="font-bold text-on-surface text-lg font-headline">Nurse Salary Intel</div>
          <p className="text-on-surface-variant text-sm text-center md:text-left">
            &copy; 2026 Nurse Salary Intel. Empowering healthcare professionals through data.
          </p>
        </div>
        <nav aria-label="Footer navigation" className="flex flex-wrap justify-center gap-x-6 gap-y-4">
          <Link href="/about" className="text-on-surface-variant hover:text-primary transition-opacity opacity-80 hover:opacity-100 underline decoration-primary/30 text-sm">About</Link>
          <Link href="/privacy-policy" className="text-on-surface-variant hover:text-primary transition-opacity opacity-80 hover:opacity-100 underline decoration-primary/30 text-sm">Privacy Policy</Link>
          <Link href="/disclaimer" className="text-on-surface-variant hover:text-primary transition-opacity opacity-80 hover:opacity-100 underline decoration-primary/30 text-sm">Disclaimer</Link>
          <Link href="/terms" className="text-on-surface-variant hover:text-primary transition-opacity opacity-80 hover:opacity-100 underline decoration-primary/30 text-sm">Terms of Service</Link>
          <Link href="/contact" className="text-on-surface-variant hover:text-primary transition-opacity opacity-80 hover:opacity-100 underline decoration-primary/30 text-sm">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}
