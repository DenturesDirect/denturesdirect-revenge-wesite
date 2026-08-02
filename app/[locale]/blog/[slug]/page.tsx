import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllPosts, getBlogPost } from '@/content/blog';

const BASE = 'https://www.denturesdirect.ca';

export async function generateMetadata({ params: { locale, slug } }: { params: { locale: string; slug: string } }): Promise<Metadata> {
  const post = getBlogPost(slug);
  if (!post) return {};
  const path = `/blog/${slug}`;

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: { canonical: `${BASE}/en${path}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `${BASE}/${locale}${path}`,
      siteName: 'Dentures Direct',
      locale,
      type: 'article',
      publishedTime: post.date,
      authors: ['Damien John Hiorth DD'],
      images: [{ url: post.image, width: 1200, height: 630, alt: post.imageAlt }],
    },
  };
}

export default function BlogPostPage({ params: { locale, slug } }: { params: { locale: string; slug: string } }) {
  const post = getBlogPost(slug);
  if (!post) notFound();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    image: `${BASE}${post.image}`,
    datePublished: post.date,
    dateModified: post.dateModified ?? post.date,
    inLanguage: locale,
    author: { '@type': 'Person', name: 'Damien John Hiorth DD', url: `${BASE}/${locale}/about-us` },
    publisher: {
      '@type': 'Organization',
      name: 'Dentures Direct',
      logo: { '@type': 'ImageObject', url: `${BASE}/dentures-direct-toronto-logo.png` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE}/${locale}/blog/${slug}` },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE}/${locale}` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE}/${locale}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: `${BASE}/${locale}/blog/${slug}` },
    ],
  };

  const videoSchema = post.youtubeId ? {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: post.title,
    description: post.metaDescription,
    thumbnailUrl: [`https://i.ytimg.com/vi/${post.youtubeId}/maxresdefault.jpg`, `https://i.ytimg.com/vi/${post.youtubeId}/hqdefault.jpg`, `${BASE}${post.image}`],
    uploadDate: post.date,
    contentUrl: `https://www.youtube.com/watch?v=${post.youtubeId}`,
    embedUrl: `https://www.youtube.com/embed/${post.youtubeId}`,
    publisher: {
      '@type': 'Organization',
      name: 'Dentures Direct',
      logo: { '@type': 'ImageObject', url: `${BASE}/dentures-direct-toronto-logo.png` },
    },
  } : null;

  const faqSchema = post.faq && post.faq.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  } : null;

  const related = getAllPosts().filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 2);

  return (
    <div className="w-full bg-white font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {videoSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }} />}
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      {/* Hero */}
      <section className="relative pt-24 pb-14 bg-gradient-hero overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/50">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href={`/${locale}`} className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden>›</li>
              <li><Link href={`/${locale}/blog`} className="hover:text-white transition-colors">Blog</Link></li>
              <li aria-hidden>›</li>
              <li className="text-white/80">{post.category}</li>
            </ol>
          </nav>
          <span className="pill-badge border-brand-blue/30 bg-brand-blue/12 text-brand-blue mb-4 inline-flex">{post.category}</span>
          <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] mb-5">{post.title}</h1>
          <p className="text-white/60 text-sm">By Damien John Hiorth DD · {post.dateLabel} · {post.readTime}</p>
        </div>
      </section>

      {/* Cover video (if set) or image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        {post.youtubeId ? (
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-card-hover ring-1 ring-brand-border bg-black">
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${post.youtubeId}?rel=0&modestbranding=1`}
              title={post.title}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        ) : (
          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-card-hover ring-1 ring-brand-border">
            <Image src={post.image} alt={post.imageAlt} fill className="object-cover" priority />
          </div>
        )}
      </div>

      {/* Body */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="blog-prose" dangerouslySetInnerHTML={{ __html: post.body }} />

        {/* FAQ — visible content backing the FAQPage schema */}
        {post.faq && post.faq.length > 0 && (
          <section className="mt-12" aria-label="Frequently asked questions">
            <h2 className="text-2xl font-bold text-brand-dark mb-6">Frequently asked questions</h2>
            <div className="space-y-3">
              {post.faq.map((f) => (
                <details key={f.q} className="group rounded-2xl border border-brand-border bg-brand-ice/50 px-6 py-4">
                  <summary className="cursor-pointer list-none font-bold text-brand-dark flex items-start justify-between gap-4">
                    <span>{f.q}</span>
                    <span className="text-brand-blue shrink-0 transition-transform group-open:rotate-45 text-xl leading-none" aria-hidden>+</span>
                  </summary>
                  <p className="mt-3 text-brand-gray leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* Author card */}
        <div className="mt-12 flex items-center gap-4 p-6 rounded-3xl bg-brand-ice border border-brand-border">
          <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0">
            <Image src="/damien-new.jpg" alt="Damien John Hiorth DD" fill className="object-cover object-top" />
          </div>
          <div>
            <p className="font-bold text-brand-dark">Damien John Hiorth DD</p>
            <p className="text-sm text-brand-gray">Founder &amp; Lead Denturist · 25 years · Dentures Direct, North York Toronto</p>
          </div>
        </div>
      </article>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-14 bg-brand-ice border-t border-brand-border">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-brand-dark mb-8 text-center">Keep reading</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {related.map((p) => (
                <Link key={p.slug} href={`/${locale}/blog/${p.slug}`} className="group flex gap-4 bg-white rounded-2xl border border-brand-border p-4 hover:shadow-card transition-all">
                  <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
                    <Image src={p.image} alt={p.imageAlt} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="text-xs text-brand-gray mb-1">{p.readTime}</p>
                    <h3 className="font-bold text-brand-dark text-sm leading-snug group-hover:text-brand-blue transition-colors">{p.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href={`/${locale}/blog`} className="inline-flex items-center gap-2 text-brand-blue font-bold hover:gap-4 transition-all">
                ← All articles
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
