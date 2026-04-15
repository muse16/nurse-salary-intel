import { getPostBySlug, getAllSlugs, blogPosts } from '@/lib/blog-posts';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import AdSenseSlot from '@/components/AdSenseSlot';
import SiteNav from '@/components/SiteNav';
import ContractAuditCTA from '@/components/ContractAuditCTA';

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
  const description = post.metaDescription ?? post.excerpt;
  const keywords = [post.focusKeyword, ...(post.secondaryKeywords ?? [])];
  const url = `https://nursesalaryintel.com/blog/${post.slug}`;
  return {
    title: `${post.title} | Nurse Salary Intelligence`,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description,
      url,
      type: 'article',
      publishedTime: post.date,
      images: post.coverImage ? [{ url: post.coverImage, alt: post.imageAlt }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description,
      images: post.coverImage ? [post.coverImage] : undefined,
    },
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
      <SiteNav />
      <header className="bg-white border-b border-gray-200 shadow-sm pt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/blog" className="text-blue-600 hover:text-blue-700 font-semibold mb-3 inline-block text-sm">
            ← Back to Blog
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Article header */}
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[post.category] ?? 'bg-gray-100 text-gray-600'}`}>
              {post.category}
            </span>
            <span className="text-xs text-gray-500 font-medium">{post.readTime}</span>
            <span className="text-gray-300">·</span>
            <span className="text-xs text-gray-500 font-medium">
              {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
          </div>
          <h1 className="font-headline text-4xl sm:text-5xl font-extrabold text-gray-900 leading-[1.15] tracking-tight mb-5">
            {post.title}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
            {post.excerpt}
          </p>
        </div>

        {/* Cover image (SEO + social) */}
        {post.coverImage && (
          <figure className="mb-8 rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-gray-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.coverImage}
              alt={post.imageAlt}
              className="w-full h-auto object-cover aspect-[16/9]"
            />
            <figcaption className="sr-only">{post.imageAlt}</figcaption>
          </figure>
        )}

        {/* Ad before content */}
        <AdSenseSlot position="blog-top" />

        {/* Article body */}
        <article
          className="blog-article bg-white rounded-2xl shadow-sm border border-gray-100 px-6 sm:px-10 py-10"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Free audit teaser + unified $9 CTA */}
        <div className="mt-8 bg-gradient-to-br from-blue-900 to-indigo-900 rounded-2xl p-7 text-white">
          <h2 className="text-xl font-bold mb-2">Free Contract Red Flag Audit</h2>
          <p className="text-blue-200 text-sm mb-5">
            Review your offer letter clause by clause. Get a risk score in 3 minutes — no email required.
          </p>
          <Link
            href="/audit"
            className="inline-block bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-2.5 px-6 rounded-xl transition-colors text-sm"
          >
            Start Free Audit
          </Link>
        </div>
        <ContractAuditCTA variant="banner" />

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
