import React from 'react';
import { Metadata } from 'next';
import { getCdcpContent } from '@/content/cdcp';

const PATH = '/cdcp-toronto-denturist/covered-services-list';
const BASE = 'https://www.denturesdirect.ca';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const c = getCdcpContent(locale).services;

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

function renderBold(text: string) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : <React.Fragment key={i}>{part}</React.Fragment>
  );
}

export default function CoveredServicesPage({ params: { locale } }: { params: { locale: string } }) {
  const c = getCdcpContent(locale).services;

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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-50 rounded-2xl p-10 border border-gray-200">
              <h2 className="text-2xl font-bold text-brand-dark mb-6 border-b pb-4">{c.coveredTitle}</h2>
              <ul className="space-y-4">
                {c.covered.map((item) => (
                  <li key={item.title} className="flex items-start">
                    <svg className="w-6 h-6 text-brand-blue mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-gray-700"><strong>{item.title}:</strong> {item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-brand-dark mb-6">{c.preauthTitle}</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">{renderBold(c.preauth1)}</p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">{c.preauth2}</p>
              <div className="p-6 bg-brand-light rounded-xl border border-brand-blue/20">
                <p className="text-brand-dark font-bold mb-2">{c.copayTitle}</p>
                <p className="text-gray-600 text-sm mb-4">{c.copayText}</p>
                <p className="text-brand-dark/70 text-[10px] italic leading-tight border-t border-brand-blue/10 pt-3">
                  {c.disclaimer}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
