import { Metadata } from 'next';
import React from 'react';

const PATH = '/denture-services/implant-retained-overdentures-toronto';
const BASE = 'https://www.denturesdirect.ca';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const languages = ['en', 'fr', 'vi', 'es', 'it'].reduce((acc, lang) => {
    acc[lang] = `${BASE}/${lang}${PATH}`;
    return acc;
  }, { 'x-default': `${BASE}/en${PATH}` } as Record<string, string>);

  return {
    title: 'Implant-Retained Dentures Toronto | Snap-On & Fixed Overdentures — $5,250 Flat Per Arch',
    description:
      'Implant-retained dentures in Toronto by Damien Hiorth DD — 25 years of implant denture experience. Snap-on overdentures $5,250 flat per arch, designed and CNC-milled in our own North York lab. Free consultation: (416) 245-7474.',
    keywords:
      'implant retained dentures Toronto, implant dentures Toronto, snap on dentures Toronto, snap in dentures Toronto, implant overdentures Toronto, implant supported dentures Toronto, All-on-4 Toronto, overdentures North York, implant dentures GTA, denture implants Toronto cost, locator attachment dentures Toronto',
    alternates: {
      canonical: `${BASE}/${locale}${PATH}`,
      languages,
    },
    openGraph: {
      title: 'Implant-Retained Dentures Toronto | Snap-On & Fixed Overdentures',
      description:
        'Stop struggling with loose dentures. Snap-on and fixed implant overdentures, $5,250 flat per arch, CNC-milled in our own North York lab. Free consultation.',
      url: `${BASE}/${locale}${PATH}`,
      siteName: 'Dentures Direct',
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are implant-retained dentures?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Implant-retained dentures (also called implant overdentures or snap-on dentures) are dentures that clip onto dental implants anchored in your jawbone. Unlike traditional dentures that rest on the gums, they don't shift, float, or require adhesive. They can be removable (snap-on) or fixed (All-on-4 style)."
      }
    },
    {
      "@type": "Question",
      "name": "How much do implant-retained dentures cost in Toronto?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "At Dentures Direct the implant overdenture is $5,250 flat per arch — no tax, no variation. Both arches together are $10,000. The implant surgery is a separate fee set by the oral surgeon, averaging approximately $2,370 per implant. Fixed All-on-4 solutions from surgical centres usually exceed $25,000 per arch."
      }
    },
    {
      "@type": "Question",
      "name": "How many implants do I need for an implant-retained denture?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Typically 3 implants for a lower overdenture and 4 for an upper overdenture. The exact number depends on your bone density and jaw anatomy, which is confirmed with a CBCT scan before surgery."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between snap-on and fixed implant dentures?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Snap-on overdentures clip onto the implants and are removed at home for cleaning — they are significantly more stable than traditional dentures and far more affordable. Fixed dentures (All-on-4) are screwed onto the implants and only removed by a professional; they offer maximum stability but usually cost over $25,000 per arch."
      }
    },
    {
      "@type": "Question",
      "name": "I already have implants — can you make a denture that fits them?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, this is one of our most common cases. If your implants are healthy and well positioned, we design and mill a new digital overdenture to clip onto them — or convert your existing denture. Your only cost is the overdenture fee."
      }
    },
    {
      "@type": "Question",
      "name": "How long does the implant denture process take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If you already have implants: typically 2–4 weeks. If implants need to be placed first: 3–6 months of healing after surgery, then 2–4 weeks for us to design and mill the overdenture in our on-site lab."
      }
    },
    {
      "@type": "Question",
      "name": "Do implant-retained dentures stop bone loss?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dental implants stimulate the jawbone the way natural tooth roots do, which helps slow the bone resorption that traditional dentures accelerate. This is one of the main long-term health benefits of implant-retained dentures."
      }
    },
    {
      "@type": "Question",
      "name": "Where in the GTA do you serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our clinic and lab are at 2833 Weston Road in North York, Toronto. Patients visit us from across the GTA — Etobicoke, Scarborough, York, Vaughan, Woodbridge, Mississauga, Brampton, Markham, and Richmond Hill."
      }
    }
  ]
};

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
      "streetAddress": "2833 Weston Rd",
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
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": `${BASE}/${locale}` },
      { "@type": "ListItem", "position": 2, "name": "Denture Services", "item": `${BASE}/${locale}/denture-services` },
      { "@type": "ListItem", "position": 3, "name": "Implant-Retained Dentures Toronto", "item": `${BASE}/${locale}${PATH}` }
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(procedureSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(locale)) }} />
      {children}
    </>
  );
}
