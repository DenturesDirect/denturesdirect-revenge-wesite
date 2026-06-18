import { Metadata } from 'next';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const languages = ['en', 'fr', 'vi', 'es', 'it'].reduce((acc, lang) => {
    acc[lang] = `https://www.denturesdirect.ca/${lang}/digital-dentures`;
    return acc;
  }, {} as Record<string, string>);

  return {
    title: 'Premium Digital Dentures Toronto | No Goop, CNC Milled In-House | Dentures Direct',
    description: 'Premium digital dentures in Toronto. Intraoral scan — no messy goop. CNC milled in our North York lab. RDT Candidate on staff. Fits right the first time. Serving North York and the GTA.',
    keywords: 'digital dentures Toronto, premium digital dentures North York, impression-free dentures Toronto, CNC milled dentures Toronto, intraoral scanner dentures, no goop dentures Toronto, RDT denture technician Toronto, precision dentures GTA',
    alternates: {
      canonical: `https://www.denturesdirect.ca/${locale}/digital-dentures`,
      languages,
    },
    openGraph: {
      title: 'Premium Digital Dentures Toronto | No Goop · CNC Milled In-House',
      description: 'Intraoral scan, CNC milled in our North York lab by Luisa, our RDT Candidate. No outsourcing, no goop, fits right the first time. Dentures Direct Toronto.',
      url: `https://www.denturesdirect.ca/${locale}/digital-dentures`,
      siteName: 'Dentures Direct',
      type: 'website',
      images: [{
      url: '/digital-denture-hero.png',
      width: 1200,
      height: 630,
      alt: 'Premium Digital Dentures — CNC Milled In-House, Dentures Direct Toronto',
    }],
    },
  };
}

export default function DigitalDenturesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
