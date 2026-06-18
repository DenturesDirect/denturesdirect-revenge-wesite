import { Metadata } from 'next';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const languages = ['en', 'fr', 'vi', 'es', 'it'].reduce((acc, lang) => {
    acc[lang] = `https://www.denturesdirect.ca/${lang}/denture-services/digital-flexible-partial-dentures-toronto`;
    return acc;
  }, {} as Record<string, string>);

  return {
    title: 'Digital Flexible Partial Dentures Toronto | Metal-Free Valplast Partials North York | Dentures Direct',
    description: 'Digital flexible partial dentures in Toronto — metal-free, gum-coloured Valplast material. Virtually invisible, hypoallergenic, unbreakable. In-house fabrication at Dentures Direct, North York. Free consultation.',
    keywords: 'flexible partial dentures Toronto, Valplast partial dentures North York, metal free partial dentures Toronto, invisible partial denture GTA, flexible denture Toronto, digital flexible partial, hypoallergenic partial dentures',
    alternates: {
      canonical: `https://www.denturesdirect.ca/${locale}/denture-services/digital-flexible-partial-dentures-toronto`,
      languages,
    },
    openGraph: {
      title: 'Digital Flexible Partial Dentures Toronto | Metal-Free | Dentures Direct',
      description: 'The most aesthetic partial we make — metal-free, gum-coloured, virtually invisible. Valplast flexible partials at Dentures Direct, North York Toronto.',
      url: `https://www.denturesdirect.ca/${locale}/denture-services/digital-flexible-partial-dentures-toronto`,
      siteName: 'Dentures Direct',
      type: 'website',
      images: [{ url: '/valplast_flexible_partial_v2.png', width: 1200, height: 630, alt: 'Digital Flexible Partial Dentures — Dentures Direct Toronto' }],
    },
  };
}

export default function FlexiblePartialLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
