import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { getAllPosts } from '@/content/blog';

const PATH = '/blog';
const BASE = 'https://www.denturesdirect.ca';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const languages = ['en', 'fr', 'vi', 'es', 'it'].reduce((acc, lang) => {
    acc[lang] = `${BASE}/${lang}${PATH}`;
    return acc;
  }, { 'x-default': `${BASE}/en${PATH}` } as Record<string, string>);

  return {
    title: 'Denture & Implant Blog | Expert Guides from Dentures Direct Toronto',
    description: 'Expert guides on implant-retained dentures, digital dentures, partials, relines, and emergency repairs — written by Damien Hiorth DD, denturist in North York Toronto.',
    keywords: 'denture blog Toronto, implant denture guide, digital denture articles, denturist advice North York',
    alternates: { canonical: `${BASE}/${locale}${PATH}`, languages },
    openGraph: {
      title: 'Denture & Implant Blog | Dentures Direct Toronto',
      description: 'Expert guides on implant dentures, digital dentures, partials, relines, and repairs from Dentures Direct, North York.',
      url: `${BASE}/${locale}${PATH}`,
      siteName: 'Dentures Direct',
      locale,
      type: 'website',
    },
  };
}

export default function BlogIndexPage({ params: { locale } }: { params: { locale: string } }) {
  const posts = getAllPosts();

  return (
    <div className="w-full bg-brand-light font-sans">
      {/* Hero */}
      <section className="relative pt-24 pb-16 bg-gradient-hero overflow-hidden">
        <div className="orb w-[500px] h-[500px] bg-brand-blue/10 -top-32 -right-40" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
          <span className="pill-badge border-brand-blue/30 bg-brand-blue/12 text-brand-blue mb-5 inline-flex">Expert Guides</span>
          <h1 className="text-5xl md:text-6xl font-bold mb-5 leading-[1.05]">
            The Dentures Direct
            <span className="block font-display italic text-brand-blueLight mt-1">Blog</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto text-white/70 leading-relaxed">
            Honest, practical guides on implant dentures, digital dentures, partials, relines, and repairs — from Damien Hiorth DD and the team.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/${locale}/blog/${post.slug}`}
                className="group flex flex-col bg-white rounded-3xl border border-brand-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full bg-brand-blue text-white shadow">
                    {post.category}
                  </span>
                </div>
                <div className="flex flex-col flex-grow p-7">
                  <p className="text-xs text-brand-gray mb-3">{post.dateLabel} · {post.readTime}</p>
                  <h2 className="text-xl font-bold text-brand-dark leading-snug mb-3 group-hover:text-brand-blue transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-brand-gray text-sm leading-relaxed flex-grow">{post.excerpt}</p>
                  <div className="mt-6 pt-5 border-t border-brand-border flex items-center justify-between">
                    <span className="text-xs text-brand-gray">By Damien Hiorth DD</span>
                    <span className="inline-flex items-center gap-1.5 text-brand-blue font-bold text-sm">
                      Read Article
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-hero text-white text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-5">Questions the articles didn&apos;t answer?</h2>
          <p className="text-lg text-white/65 mb-8">Book a free consultation with Damien — honest advice, clear pricing, no pressure.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:416-245-7474" className="btn-shimmer inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-blue hover:bg-brand-blueDark text-white font-bold rounded-full transition-all duration-300 shadow-cta hover:shadow-cta-hover">Call (416) 245-7474</a>
            <Link href={`/${locale}/contact`} className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/8 border border-white/25 text-white font-semibold rounded-full hover:bg-white/15 transition-all duration-300 backdrop-blur-sm">Book Online</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
