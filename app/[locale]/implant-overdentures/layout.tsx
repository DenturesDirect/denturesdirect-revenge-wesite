import { Metadata } from 'next';
import React from 'react';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const languages = ['en', 'fr', 'vi', 'es', 'it'].reduce((acc, lang) => {
    acc[lang] = `https://www.denturesdirect.ca/${lang}/implant-overdentures`;
    return acc;
  }, {} as Record<string, string>);

  return {
    title: 'Implant Overdentures Toronto — Stop Loose Dentures for Good | Dentures Direct',
    description: 'Lower implant-retained overdentures in Toronto. Stop your denture from moving, clicking, and embarrassing you. In-house lab, RDT Candidate on staff. Free consultation — call (416) 245-7474.',
    keywords: 'implant overdentures Toronto, implant retained dentures North York, snap on dentures Toronto, loose lower denture fix Toronto, implant supported dentures GTA, overdenture Toronto cost',
    alternates: {
      canonical: `https://www.denturesdirect.ca/${locale}/implant-overdentures`,
      languages,
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
