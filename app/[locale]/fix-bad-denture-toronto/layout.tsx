import { Metadata } from 'next';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const languages = ['en', 'fr', 'vi', 'es', 'it'].reduce((acc, lang) => {
    acc[lang] = `https://www.denturesdirect.ca/${lang}/fix-bad-denture-toronto`;
    return acc;
  }, {} as Record<string, string>);

  return {
    title: 'Fix a Bad Denture Toronto | Denture Not Fitting? We Rebuild It | Dentures Direct',
    description: 'Denture not fitting? Overdenture keeps popping off? We fix other clinics\' work — locator conversions, relines, full digital rebuilds. In-house lab, no outsourcing. Free assessment at Dentures Direct, North York Toronto.',
    keywords: 'fix bad denture Toronto, denture not fitting Toronto, denture keeps falling out, fix loose denture North York, overdenture repair Toronto, locator conversion Toronto, denture rebuild GTA, bad denture fix near me, denture doesn\'t fit, fix failing overdenture Toronto',
    alternates: {
      canonical: `https://www.denturesdirect.ca/${locale}/fix-bad-denture-toronto`,
      languages,
    },
    openGraph: {
      title: 'Denture Not Fitting? We Fix Other Clinics\' Work | Dentures Direct Toronto',
      description: 'Bad denture? Overdenture failing? We rebuild it in our in-house lab — digital scan, CNC milled, done right. Free assessment in North York Toronto.',
      url: `https://www.denturesdirect.ca/${locale}/fix-bad-denture-toronto`,
      siteName: 'Dentures Direct',
      type: 'website',
      images: [{ url: '/broken-denture-repair.png', width: 1200, height: 630, alt: 'Fix Bad Denture Toronto — Dentures Direct' }],
    },
  };
}

export default function FixBadDentureLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
