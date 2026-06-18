import { Metadata } from 'next';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const languages = ['en', 'fr', 'vi', 'es', 'it'].reduce((acc, lang) => {
    acc[lang] = `https://www.denturesdirect.ca/${lang}/denture-services/emergency-denture-repairs`;
    return acc;
  }, {} as Record<string, string>);

  return {
    title: 'Emergency Denture Repair Toronto | Same-Day Repairs | Dentures Direct',
    description: 'Broken denture? Dentures Direct offers same-day emergency denture repairs in Toronto, usually within one hour. Cracked bases, broken teeth, relining — all done in our on-site North York lab. Call (416) 245-7474.',
    keywords: 'emergency denture repair Toronto, same day denture repair Toronto, broken denture Toronto, denture repair North York, cracked denture repair, denture reline Toronto, urgent denture repair GTA',
    alternates: {
      canonical: `https://www.denturesdirect.ca/${locale}/denture-services/emergency-denture-repairs`,
      languages,
    },
    openGraph: {
      title: 'Emergency Denture Repair Toronto | Same-Day | Dentures Direct',
      description: 'Same-day emergency denture repairs in Toronto, usually within one hour. Cracked bases, broken teeth, relining — all in our on-site North York lab.',
      url: `https://www.denturesdirect.ca/${locale}/denture-services/emergency-denture-repairs`,
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
