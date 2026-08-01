import React from 'react';
import { Metadata } from 'next';
import { getCdcpContent } from '@/content/cdcp';

const PATH = '/cdcp-toronto-denturist/how-to-apply';
const BASE = 'https://www.denturesdirect.ca';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const c = getCdcpContent(locale).apply;

  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: { canonical: `${BASE}/en${PATH}` },
    openGraph: {
      title: c.metaTitle,
      description: c.metaDescription,
      url: `${BASE}/${locale}${PATH}`,
      siteName: 'Dentures Direct',
      locale,
      type: 'website',
    },
  };
}

export default function HowToApplyPage({ params: { locale } }: { params: { locale: string } }) {
  const c = getCdcpContent(locale).apply;

  return (
    <div className="w-full bg-brand-light font-sans">
      <section className="relative pt-24 pb-20 bg-brand-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white text-center">
          <span className="text-brand-blue font-bold uppercase tracking-widest text-sm mb-4 block">{c.badge}</span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{c.h1a} <br/><span className="text-brand-blue">{c.h1b}</span></h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-300 mb-8 leading-relaxed">
            {c.sub}
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-dark mb-10 text-center">{c.stepsTitle}</h2>

          <div className="space-y-12">
            {c.steps.map((step, i) => (
              <div key={i} className="flex flex-col md:flex-row items-start gap-6">
                <div className={`w-16 h-16 ${i === 2 ? 'bg-brand-blueDark' : 'bg-brand-blue'} text-white rounded-full flex items-center justify-center flex-shrink-0 text-2xl font-bold`}>{i + 1}</div>
                <div>
                  <h3 className="text-2xl font-bold text-brand-dark mb-3">{step.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-blue text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">{c.ctaTitle}</h2>
          <p className="text-xl mb-10 text-brand-light">{c.ctaText}</p>
          <a href="tel:416-245-7474" className="inline-block bg-white text-brand-dark font-bold py-4 px-10 rounded-md hover:bg-brand-light transition-colors text-xl shadow-lg">
            {c.ctaBtn}
          </a>
        </div>
      </section>
    </div>
  );
}
