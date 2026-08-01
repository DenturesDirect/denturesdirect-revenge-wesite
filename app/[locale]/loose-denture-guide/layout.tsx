import { Metadata } from 'next';
import React from 'react';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {

  return {
    title: 'Free Guide: Your 3 Real Options for a Loose Lower Denture | Dentures Direct Toronto',
    description: 'Written by Damien John Hiorth DD, 25-year denturist in North York Toronto. Covers relining, premium digital dentures, and implant overdentures — what each costs, how long it lasts, and which is right for you.',
    keywords: 'loose lower denture options, loose denture fix Toronto, reline vs new denture, implant overdenture vs reline, denture options Toronto, loose denture guide, best denture Toronto',
    alternates: {
      canonical: `https://www.denturesdirect.ca/en/loose-denture-guide`,
      },
    openGraph: {
      title: 'Your 3 Real Options for a Loose Lower Denture | Dentures Direct Toronto',
      description: 'Reline, digital denture, or implant overdenture? Honest breakdown of costs, longevity, and which is right for you — by a 25-year denturist in Toronto.',
      url: `https://www.denturesdirect.ca/${locale}/loose-denture-guide`,
      siteName: 'Dentures Direct',
      type: 'website',
      images: [{
      url: '/loose-denture-guide-cover.png',
      width: 1200,
      height: 630,
      alt: 'Loose Denture Guide — 3 Real Options — Dentures Direct Toronto',
    }],
    },
  };
}

export default function GuideLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
