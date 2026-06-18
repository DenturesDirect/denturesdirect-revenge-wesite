import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CDCP Denturist Toronto | Canadian Dental Care Plan Dentures | Dentures Direct',
  description: 'Dentures Direct is an official CDCP provider in Toronto and North York. Get your digital dentures covered under the Canadian Dental Care Plan. Serving eligible Canadian seniors in the GTA.',
  keywords: 'CDCP denturist Toronto, Canadian Dental Care Plan dentures, CDCP dentures North York, CDCP covered dentures GTA, CDCP provider Toronto, government dental plan dentures Toronto',
  openGraph: {
    title: 'CDCP Denturist Toronto | Canadian Dental Care Plan Dentures',
    description: 'Official CDCP provider in Toronto. Get premium digital dentures fully covered under the Canadian Dental Care Plan for eligible Canadian seniors.',
    url: 'https://www.denturesdirect.ca/en/cdcp-toronto-denturist',
    siteName: 'Dentures Direct',
    type: 'website',
    images: [{
      url: '/og-en.png',
      width: 1200,
      height: 630,
      alt: 'CDCP Covered Dentures – Dentures Direct Toronto',
    }],
  },
};

export default function CdcpLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
