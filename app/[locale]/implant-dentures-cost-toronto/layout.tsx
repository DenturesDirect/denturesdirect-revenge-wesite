import { Metadata } from 'next';
import React from 'react';
import { getImplantCostContent } from '@/content/implant-cost';

const PATH = '/implant-dentures-cost-toronto';
const BASE = 'https://www.denturesdirect.ca';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const c = getImplantCostContent(locale);
  const languages = ['en', 'fr', 'vi', 'es', 'it'].reduce((acc, lang) => {
    acc[lang] = `${BASE}/${lang}${PATH}`;
    return acc;
  }, { 'x-default': `${BASE}/en${PATH}` } as Record<string, string>);

  return {
    title: c.meta.title,
    description: c.meta.description,
    keywords: 'implant dentures cost Toronto, how much do implant dentures cost, snap on denture cost Toronto, implant overdenture price Ontario, cost of denture implants Toronto, implant retained denture cost GTA, overdenture cost North York, $5250 implant denture, flat rate implant dentures Toronto, affordable implant dentures GTA, implant overdenture North York',
    alternates: {
      canonical: `${BASE}/${locale}${PATH}`,
      languages,
    },
    openGraph: {
      title: c.meta.ogTitle,
      description: c.meta.ogDescription,
      url: `${BASE}/${locale}${PATH}`,
      siteName: 'Dentures Direct',
      locale,
      type: 'website',
      images: [{ url: '/implant-retained-overdentures-after-toronto.jpg', width: 1200, height: 630, alt: 'Implant dentures cost Toronto — $5,250 flat per arch — Dentures Direct' }],
    },
  };
}

// Strip **bold** markers for plain-text JSON-LD output
const plain = (s: string) => s.replace(/\*\*/g, '');

function faqSchema(locale: string) {
  const c = getImplantCostContent(locale);
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "inLanguage": locale,
    "mainEntity": c.faq.items.map((item) => ({
      "@type": "Question",
      "name": plain(item.q),
      "acceptedAnswer": { "@type": "Answer", "text": plain(item.a) },
    })),
  };
}

export default function ImplantCostLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(locale)) }}
      />
      {children}
    </>
  );
}
