import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Implant Retained Dentures Toronto | Snap-On & Fixed Overdentures | Dentures Direct',
  description: 'Stop struggling with loose dentures. Implant-retained overdentures in Toronto from Dentures Direct. Snap-on and fixed All-on-4 solutions, CNC-milled on-site. Serving North York and the GTA.',
  keywords: 'implant retained dentures Toronto, snap-on dentures North York, implant overdentures Toronto, All-on-4 Toronto, implant dentures GTA, overdentures North York, implant supported dentures Toronto',
  openGraph: {
    title: 'Implant Retained Dentures Toronto | Snap-On & Fixed Overdentures',
    description: 'Implant-retained overdentures in Toronto. Snap-on and fixed All-on-4 solutions, CNC-milled in our North York lab. Stop struggling with loose dentures.',
    url: 'https://www.denturesdirect.ca/en/denture-services/implant-retained-overdentures',
    siteName: 'Dentures Direct',
    type: 'website',
    images: [{
      url: '/dancing-senior-couple.png',
      width: 1200,
      height: 630,
      alt: 'Implant Retained Dentures – Dentures Direct Toronto',
    }],
  },
};

export default function ImplantOverdenturesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
