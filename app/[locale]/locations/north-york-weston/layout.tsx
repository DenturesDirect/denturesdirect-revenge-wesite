import { Metadata } from 'next';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const languages = ['en', 'fr', 'vi', 'es', 'it'].reduce((acc, lang) => {
    acc[lang] = `https://www.denturesdirect.ca/${lang}/locations/north-york-weston`;
    return acc;
  }, {} as Record<string, string>);

  return {
    title: 'Denturist in North York & Weston | Digital Dentures at 2833 Weston Rd | Dentures Direct',
    description: 'Dentures Direct is your local denturist in North York and Weston, located at 2833 Weston Road. CNC-milled digital dentures, CDCP accepted, wheelchair accessible, free parking. Call (416) 245-7474.',
    keywords: 'denturist North York, denture clinic North York, Weston Road denturist, 2833 Weston Road dentures, North York dentures, Humber Summit denturist, denture clinic Weston, CDCP North York',
    alternates: {
      canonical: `https://www.denturesdirect.ca/${locale}/locations/north-york-weston`,
      languages,
    },
    openGraph: {
      title: 'Denturist in North York & Weston | Dentures Direct at 2833 Weston Rd',
      description: 'Your local denturist in North York at 2833 Weston Road. Digital dentures, CDCP accepted, wheelchair accessible. Call (416) 245-7474.',
      url: `https://www.denturesdirect.ca/${locale}/locations/north-york-weston`,
      siteName: 'Dentures Direct',
      type: 'website',
    },
  };
}

export default function NorthYorkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
