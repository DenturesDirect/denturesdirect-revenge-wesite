import { Metadata } from 'next';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const languages = ['en', 'fr', 'vi', 'es', 'it'].reduce((acc, lang) => {
    acc[lang] = `https://www.denturesdirect.ca/${lang}/locations/etobicoke-humber-summit`;
    return acc;
  }, { 'x-default': 'https://www.denturesdirect.ca/en/locations/etobicoke-humber-summit' } as Record<string, string>);

  return {
    title: 'Denturist in Etobicoke & Humber Summit | Dentures Direct',
    description: 'Local denturist serving Etobicoke and Humber Summit at 2833 Weston Road, on the North York border. CNC-milled digital dentures, implant overdentures, same-day repairs. CDCP accepted, free parking. Call (416) 245-7474.',
    keywords: 'denturist Etobicoke, denture clinic Etobicoke, Humber Summit denturist, denturist Rexdale, Weston Road denturist, digital dentures Etobicoke, CDCP Etobicoke, implant dentures Etobicoke',
    alternates: {
      canonical: `https://www.denturesdirect.ca/${locale}/locations/etobicoke-humber-summit`,
      languages,
    },
    openGraph: {
      title: 'Denturist in Etobicoke & Humber Summit | Dentures Direct',
      description: 'Your local denturist for Etobicoke and Humber Summit at 2833 Weston Road. Digital dentures, CDCP accepted, free parking. Call (416) 245-7474.',
      url: `https://www.denturesdirect.ca/${locale}/locations/etobicoke-humber-summit`,
      siteName: 'Dentures Direct',
      type: 'website',
    },
  };
}

export default function EtobicokeHumberSummitLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
