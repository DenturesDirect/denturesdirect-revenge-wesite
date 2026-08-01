import { Metadata } from 'next';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {

  return {
    title: 'Emergency Denture Repair Toronto | Same-Day, From $167 | Dentures Direct',
    description: 'Broken denture? Same-day emergency repairs in North York from $167 — most simple fixes done in about an hour in our on-site lab. Snapped dentures, broken teeth, relines. No referral needed. Call (416) 245-7474.',
    keywords: 'emergency denture repair Toronto, same day denture repair Toronto, broken denture Toronto, denture repair North York, cracked denture repair, denture reline Toronto, urgent denture repair GTA',
    alternates: {
      canonical: `https://www.denturesdirect.ca/en/denture-services/emergency-denture-repair-toronto`,
      },
    openGraph: {
      title: 'Emergency Denture Repair Toronto | Same-Day | Dentures Direct',
      description: 'Same-day emergency denture repairs in Toronto, usually within one hour. Cracked bases, broken teeth, relining — all in our on-site North York lab.',
      url: `https://www.denturesdirect.ca/${locale}/denture-services/emergency-denture-repair-toronto`,
      siteName: 'Dentures Direct',
      type: 'website',
      images: [{
      url: '/broken-denture-repair.png',
      width: 1200,
      height: 630,
      alt: 'Emergency Denture Repair – Same-Day Toronto',
    }],
    },
  };
}

export default function EmergencyRepairsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
