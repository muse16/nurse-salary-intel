import { blogPosts } from '@/lib/blog-posts';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nursing Contract & Salary Blog | Nurse Salary Intelligence',
  description: 'Expert guidance on nursing contracts, salary negotiation, and red flag clauses. Written for RNs navigating offer letters and travel contracts.',
};

const categoryColors: Record<string, string> = {
  'Contract Red Flags': 'bg-red-100 text-red-700',
  'Salary Data': 'bg-blue-100 text-blue-700',
  'Negotiation': 'bg-green-100 text-green-700',
};

export default function BlogPage() {
  const sorted = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/" className="text-blue-600 hover:text-blue-700 font-semibold mb-3 inline-block text-sm">
            ← Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Nursing Contract & Salary Blog</h1>
          <p className="text-gray-500 mt-2 text-sm">
            Know what you're signing. Know what to negotiate.
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="space-y-6">
          {sorted.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
              <article className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 hover:border-blue-300 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[post.category] ?? 'bg-gray-100 text-gray-600'}`}>
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-400">{post.readTime}</span>
                  <span className="text-xs text-gray-400">
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors leading-snug mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="mt-4 text-blue-600 text-sm font-semibold group-hover:text-blue-700">
                  Read article →
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-br from-blue-900 to-indigo-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Don't sign without checking first</h2>
          <p className="text-blue-200 mb-6 text-sm">
            Run your offer letter through our free Contract Red Flag Audit — takes 3 minutes.
          </p>
          <Link
            href="/audit"
            className="inline-block bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-3 px-8 rounded-xl transition-colors"
          >
            Start Free Audit
          </Link>
        </div>
      </main>
    </div>
  );
}
