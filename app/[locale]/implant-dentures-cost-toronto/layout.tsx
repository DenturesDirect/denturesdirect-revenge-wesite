import { Metadata } from 'next';
import React from 'react';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const languages = ['en', 'fr', 'vi', 'es', 'it'].reduce((acc, lang) => {
    acc[lang] = `https://www.denturesdirect.ca/${lang}/implant-dentures-cost-toronto`;
    return acc;
  }, {} as Record<string, string>);

  return {
    title: 'How Much Do Implant Dentures Cost in Toronto? $5,250 Per Arch | Dentures Direct',
    description: 'Implant overdenture: $5,250 flat per arch, no tax. Implant surgery fee varies by bone density, grafting needs, and surgeon — last year\'s average was ~$2,370/implant. Use your own surgeon or we refer. Free consultation at Dentures Direct, North York Toronto.',
    keywords: 'implant dentures cost Toronto, how much do implant dentures cost, snap on denture cost Toronto, implant overdenture price Ontario, cost of denture implants Toronto, implant retained denture cost GTA, overdenture cost North York, $5250 implant denture, flat rate implant dentures Toronto, affordable implant dentures GTA, implant overdenture North York',
    alternates: {
      canonical: `https://www.denturesdirect.ca/${locale}/implant-dentures-cost-toronto`,
      languages,
    },
    openGraph: {
      title: 'Implant Dentures $5,250 Flat Per Arch | Honest Cost Breakdown | Dentures Direct Toronto',
      description: '$5,250 per arch — no tax, no variation. Implant surgery quoted separately by your oral surgeon. Last year\'s average: ~$2,370/implant. Free consultation in North York.',
      url: `https://www.denturesdirect.ca/${locale}/implant-dentures-cost-toronto`,
      siteName: 'Dentures Direct',
      type: 'website',
      images: [{ url: '/implant-retained-overdentures-after-toronto.jpg', width: 1200, height: 630, alt: 'Implant dentures cost Toronto — $5,250 flat per arch — Dentures Direct' }],
    },
  };
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much do implant dentures cost in Toronto?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The implant overdenture (the denture itself) is $5,250 flat per arch at Dentures Direct — no tax, no variation. The implant surgery is a separate fee set by the oral surgeon, averaging approximately $2,370 per implant based on last year's referred patients. Total cost depends on how many implants you need and your bone condition."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use my own oral surgeon for implant dentures?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. We build the overdenture — we don't place implants. You can use any oral surgeon you trust. If you need a referral, we work with a small network of experienced oral surgeons in the GTA. The only requirement: they must do a CBCT scan before surgery."
      }
    },
    {
      "@type": "Question",
      "name": "Why does the cost of implant surgery vary so much?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Implant surgery cost varies based on bone density, number of implants needed (3 for lower jaw, 4 for upper), whether bone grafting is required, the surgeon's experience, and the implant system used. A CBCT scan is required before any surgeon can give you an accurate quote."
      }
    },
    {
      "@type": "Question",
      "name": "Does CDCP or OHIP cover implant dentures in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "OHIP does not cover dental implants or overdentures. The Canadian Dental Care Plan (CDCP) does not currently cover implant surgery but may cover a portion of the denture component. Most private insurance plans cover part of the denture portion but not the implants. Contact us for current coverage details."
      }
    },
    {
      "@type": "Question",
      "name": "What if I already have implants placed elsewhere?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "This is one of our most common cases. If your implants are well-positioned and healthy, we can build a new digital overdenture to clip onto them — or convert your existing denture. Your only cost is the $5,250 overdenture fee. Book a free consultation and we'll assess your implants."
      }
    }
  ]
};

export default function ImplantCostLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
