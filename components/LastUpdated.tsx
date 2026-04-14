interface LastUpdatedProps {
  date: string; // e.g. "April 2026"
}

export default function LastUpdated({ date }: LastUpdatedProps) {
  return (
    <p className="text-xs text-on-surface-variant mb-6 flex items-center gap-1.5">
      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      Last Updated: {date}
    </p>
  );
}
