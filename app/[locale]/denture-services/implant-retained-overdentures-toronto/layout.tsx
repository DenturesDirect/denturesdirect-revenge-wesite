import React from 'react';
import { getImplantPillarContent } from '@/content/implant-pillar';

const PATH = '/denture-services/implant-retained-overdentures-toronto';
const BASE = 'https://www.denturesdirect.ca';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const c = getImplantPillarContent(locale);

  return {
    title: c.meta.title,
    description: c.meta.description,
    keywords:
      'implant retained dentures Toronto, implant dentures Toronto, snap on dentures Toronto, snap in dentures Toronto, implant overdentures Toronto, implant supported dentures Toronto, All-on-4 Toronto, overdentures North York, implant dentures GTA, denture implants Toronto cost, locator attachment dentures Toronto',
    alternates: {
      canonical: `${BASE}/en${PATH}`,
      },
    openGraph: {
      title: c.meta.ogTitle,
      description: c.meta.ogDescription,
      url: `${BASE}/${locale}${PATH}`,
      siteName: 'Dentures Direct',
      locale,
      type: 'website',
      images: [{
        url: '/implant-retained-overdentures-after-toronto.jpg',
        width: 1200,
        height: 630,
        alt: 'Implant-retained dentures result — Dentures Direct Toronto',
      }],
    },
  };
}

// Strip **bold** markers for plain-text JSON-LD output
const plain = (s: string) => s.replace(/\*\*/g, '');

function faqSchema(locale: string) {
  const c = getImplantPillarContent(locale);
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

const procedureSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "name": "Implant-Retained Overdentures",
  "alternateName": ["Snap-On Dentures", "Implant Overdentures", "Implant-Supported Dentures"],
  "procedureType": "https://schema.org/NoninvasiveProcedure",
  "howPerformed": "Digital intraoral scanning of the jaw and implant positions, CAD design by a licensed denturist, and on-site CNC milling of the overdenture, which attaches to dental implants placed by an oral surgeon.",
  "body": "Implant-retained dentures snap onto 3–4 dental implants per arch, eliminating movement, clicking, and the need for adhesive.",
  "provider": {
    "@type": "MedicalClinic",
    "name": "Dentures Direct",
    "telephone": "+1-416-245-7474",
    "url": "https://www.denturesdirect.ca",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2833 Weston Road",
      "addressLocality": "Toronto",
      "addressRegion": "ON",
      "postalCode": "M9M 2S1",
      "addressCountry": "CA"
    }
  },
  "offers": {
    "@type": "Offer",
    "price": "5250",
    "priceCurrency": "CAD",
    "description": "Implant overdenture — $5,250 flat per arch, no tax. Implant surgery quoted separately by the oral surgeon."
  }
};

function breadcrumbSchema(locale: string) {
  const c = getImplantPillarContent(locale);
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": c.crumbs.home, "item": `${BASE}/${locale}` },
      { "@type": "ListItem", "position": 2, "name": c.crumbs.services, "item": `${BASE}/${locale}/denture-services` },
      { "@type": "ListItem", "position": 3, "name": c.crumbs.current, "item": `${BASE}/${locale}${PATH}` }
    ]
  };
}

export default function ImplantOverdenturesLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(locale)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(procedureSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(locale)) }} />
      {children}
    </>
  );
}
