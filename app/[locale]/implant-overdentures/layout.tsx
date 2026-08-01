import { Metadata } from 'next';
import React from 'react';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {

  return {
    title: 'Stop Loose Dentures for Good — Snap-In Implant Overdentures | Dentures Direct Toronto',
    description: 'Denture moving, clicking, or embarrassing you? Snap-in implant overdentures hold it in place for good. In-house North York lab, $5,250 flat per arch. Free consultation — call (416) 245-7474.',
    keywords: 'loose denture fix Toronto, denture won\'t stay in, snap in dentures Toronto, denture adhesive alternative, loose lower denture solution Toronto, secure dentures North York',
    alternates: {
      canonical: `https://www.denturesdirect.ca/en/implant-overdentures`,
      },
    openGraph: {
      title: 'Stop Loose Dentures for Good | Implant Overdentures Toronto',
      description: 'Lower implant-retained overdentures in Toronto. In-house lab, RDT on staff. Free consultation — Dentures Direct North York.',
      url: `https://www.denturesdirect.ca/${locale}/implant-overdentures`,
      siteName: 'Dentures Direct',
      type: 'website',
      images: [{ url: '/implant-retained-overdentures-after-toronto.jpg', width: 1200, height: 630, alt: 'Implant Overdentures Toronto — Dentures Direct' }],
    },
  };
}

// Standalone layout — no shared header or footer for a clean Google Ads experience
export default function ImplantLandingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
