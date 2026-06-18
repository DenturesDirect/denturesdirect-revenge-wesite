import { Metadata } from 'next';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const languages = ['en', 'fr', 'vi', 'es', 'it'].reduce((acc, lang) => {
    acc[lang] = `https://www.denturesdirect.ca/${lang}/happy-patients`;
    return acc;
  }, {} as Record<string, string>);

  return {
    title: 'Patient Reviews | 5-Star Denture Clinic Toronto | Dentures Direct',
    description: 'Read verified 5-star Google reviews from real patients at Dentures Direct in Toronto and North York. Over 150 happy patients share their experiences with Damien Hiorth DD and our team.',
    keywords: 'Dentures Direct reviews, best denturist Toronto reviews, denture clinic reviews North York, Damien Hiorth reviews, Google reviews denturist Toronto, 5 star denture clinic GTA',
    alternates: {
      canonical: `https://www.denturesdirect.ca/${locale}/happy-patients`,
      languages,
    },
    openGraph: {
      title: 'Patient Reviews | 5-Star Denture Clinic Toronto | Dentures Direct',
      description: 'Read verified 5-star Google reviews from real patients at Dentures Direct Toronto. Over 150 happy patients across the Greater Toronto Area.',
      url: `https://www.denturesdirect.ca/${locale}/happy-patients`,
      siteName: 'Dentures Direct',
      type: 'website',
      images: [{
      url: '/og-en.png',
      width: 1200,
      height: 630,
      alt: 'Dentures Direct – 5-Star Patient Reviews Toronto',
    }],
    },
  };
}

export default function HappyPatientsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
