import { getPostBySlug, getAllSlugs, blogPosts } from '@/lib/blog-posts';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import AdSenseSlot from '@/components/AdSenseSlot';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: 'Post Not Found' };
  return {
    title: `${post.title} | Nurse Salary Intelligence`,
    description: post.excerpt,
  };
}

const categoryColors: Record<string, string> = {
  'Contract Red Flags': 'bg-red-100 text-red-700',
  'Salary Data': 'bg-blue-100 text-blue-700',
  'Negotiation': 'bg-green-100 text-green-700',
};

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/blog" className="text-blue-600 hover:text-blue-700 font-semibold mb-3 inline-block text-sm">
            ← Back to Blog
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Article header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[post.category] ?? 'bg-gray-100 text-gray-600'}`}>
              {post.category}
            </span>
            <span className="text-xs text-gray-400">{post.readTime}</span>
            <span className="text-xs text-gray-400">
              {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 leading-tight mb-4">
            {post.title}
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed">
            {post.excerpt}
          </p>
        </div>

        {/* Ad before content */}
        <AdSenseSlot position="blog-top" />

        {/* Article body */}
        <article
          className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 prose prose-gray max-w-none
            prose-headings:font-bold prose-headings:text-gray-900
            prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-3
            prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-2
            prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
            prose-ul:text-gray-700 prose-ul:space-y-1
            prose-ol:text-gray-700 prose-ol:space-y-1
            prose-li:leading-relaxed
            prose-blockquote:border-l-4 prose-blockquote:border-blue-400 prose-blockquote:bg-blue-50
            prose-blockquote:px-5 prose-blockquote:py-3 prose-blockquote:rounded-r-lg prose-blockquote:text-gray-700
            prose-strong:text-gray-900
            prose-hr:border-gray-200"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* CTA box */}
        <div className="mt-8 bg-gradient-to-br from-blue-900 to-indigo-900 rounded-2xl p-7 text-white">
          <h2 className="text-xl font-bold mb-2">Free Contract Red Flag Audit</h2>
          <p className="text-blue-200 text-sm mb-5">
            Review your offer letter clause by clause. Get a risk score in 3 minutes — no email required.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/audit"
              className="inline-block bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-2.5 px-6 rounded-xl transition-colors text-sm"
            >
              Start Free Audit
            </Link>
            <a
              href="https://maveryholdings.gumroad.com/l/djnau"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white/10 hover:bg-white/20 text-white font-semibold py-2.5 px-6 rounded-xl transition-colors text-sm border border-white/20"
            >
              Get Negotiation Scripts — $9
            </a>
          </div>
        </div>

        {/* Ad mid */}
        <div className="mt-8">
          <AdSenseSlot position="blog-mid" />
        </div>

        {/* Related posts */}
        {related.length > 0 && (
          <div className="mt-10">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Related Articles</h2>
            <div className="space-y-4">
              {related.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="block group">
                  <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 hover:border-blue-300 hover:shadow-md transition-all">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${categoryColors[p.category] ?? 'bg-gray-100 text-gray-600'}`}>
                        {p.category}
                      </span>
                      <span className="text-xs text-gray-400">{p.readTime}</span>
                    </div>
                    <div className="font-bold text-gray-900 group-hover:text-blue-700 text-sm leading-snug">
                      {p.title}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
