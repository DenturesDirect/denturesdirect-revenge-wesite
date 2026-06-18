import { Metadata } from 'next';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const languages = ['en', 'fr', 'vi', 'es', 'it'].reduce((acc, lang) => {
    acc[lang] = `https://www.denturesdirect.ca/${lang}/denture-services/digital-cast-partial-dentures-toronto`;
    return acc;
  }, {} as Record<string, string>);

  return {
    title: 'Digital Cast Partial Dentures Toronto | Metal Framework Partials North York | Dentures Direct',
    description: 'Digital cast partial dentures in Toronto — precision metal framework, thinner than acrylic, built to last 7-10+ years. In-house fabrication at Dentures Direct, North York. Free consultation.',
    keywords: 'cast partial dentures Toronto, digital cast partial North York, metal framework partial dentures, cobalt chrome partial denture Toronto, cast metal partial GTA, durable partial dentures Toronto',
    alternates: {
      canonical: `https://www.denturesdirect.ca/${locale}/denture-services/digital-cast-partial-dentures-toronto`,
      languages,
    },
    openGraph: {
      title: 'Digital Cast Partial Dentures Toronto | Dentures Direct',
      description: 'The gold standard for partial dentures — precision cast metal framework, thinner and stronger than acrylic. Fabricated in-house at Dentures Direct, North York Toronto.',
      url: `https://www.denturesdirect.ca/${locale}/denture-services/digital-cast-partial-dentures-toronto`,
      siteName: 'Dentures Direct',
      type: 'website',
      images: [{ url: '/new-cast-partial.jpg', width: 1200, height: 630, alt: 'Digital Cast Partial Dentures — Dentures Direct Toronto' }],
    },
  };
}

export default function CastPartialLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
