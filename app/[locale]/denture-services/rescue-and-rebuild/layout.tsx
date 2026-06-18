import { Metadata } from 'next';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const languages = ['en', 'fr', 'vi', 'es', 'it'].reduce((acc, lang) => {
    acc[lang] = `https://www.denturesdirect.ca/${lang}/denture-services/rescue-and-rebuild`;
    return acc;
  }, {} as Record<string, string>);

  return {
    title: 'Rescue & Rebuild | Fix a Failing Overdenture Toronto | Dentures Direct',
    description: 'Had implants placed elsewhere but the overdenture keeps failing? We specialize in fixing other clinics\' work — locator conversions, relines, full rebuilds, and denture disasters. Toronto & North York.',
    keywords: 'fix failing overdenture Toronto, locator conversion North York, implant overdenture repair Toronto, rescue denture Toronto, denture rebuild GTA, fix bad dentures Toronto',
    alternates: {
      canonical: `https://www.denturesdirect.ca/${locale}/denture-services/rescue-and-rebuild`,
      languages,
    },
    openGraph: {
      title: 'Rescue & Rebuild | Fix a Failing Overdenture | Dentures Direct Toronto',
      description: 'Denture not fitting right? Overdenture failing after implants? We fix other clinics\' work. Locator conversions, relines, and full rebuilds in North York Toronto.',
      url: `https://www.denturesdirect.ca/${locale}/denture-services/rescue-and-rebuild`,
      siteName: 'Dentures Direct',
      type: 'website',
    },
  };
}

export default function RescueAndRebuildLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
