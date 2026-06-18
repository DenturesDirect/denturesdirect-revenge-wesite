import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Denture Services Toronto | Digital Dentures, Partials & Implants | Dentures Direct',
  description: 'Comprehensive denture services in Toronto and North York. Digital full dentures, Digital partial dentures, implant-retained overdentures, and same-day emergency repairs. CDCP accepted. No referral needed.',
  keywords: 'denture services Toronto, denture clinic North York, Digital full dentures Toronto, Digital partial dentures Toronto, implant dentures Toronto, emergency denture repair Toronto, CDCP dentures, denturist North York',
  openGraph: {
    title: 'Denture Services Toronto | Digital Dentures, Partials & Implants',
    description: 'Comprehensive denture services in Toronto and North York. Digital full dentures, Digital partial dentures, implant-retained overdentures, and same-day emergency repairs.',
    url: 'https://www.denturesdirect.ca/en/denture-services',
    siteName: 'Dentures Direct',
    type: 'website',
  },
};

export default function DentureServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
