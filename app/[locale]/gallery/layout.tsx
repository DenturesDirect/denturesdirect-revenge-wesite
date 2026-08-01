import { Metadata } from 'next';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {

  return {
    title: 'Denture Before & After Gallery Toronto | Real Patient Results | Dentures Direct',
    description: 'Browse real before and after cases from Dentures Direct in Toronto. See digital denture restorations, implant overdentures, Digital Partial Dentures, and emergency repairs — all performed at our North York clinic.',
    keywords: 'denture before after Toronto, denture gallery Toronto, denture results North York, digital denture transformation, implant denture before after, denture case studies Toronto, Dentures Direct gallery',
    alternates: {
      canonical: `https://www.denturesdirect.ca/en/gallery`,
      },
    openGraph: {
      title: 'Denture Before & After Gallery | Real Patient Results | Dentures Direct Toronto',
      description: 'Browse real before and after denture cases from our Toronto clinic. Digital restorations, implant overdentures, partials, and emergency repairs.',
      url: `https://www.denturesdirect.ca/${locale}/gallery`,
      siteName: 'Dentures Direct',
      type: 'website',
      images: [{
      url: '/digital-dentures-after-treatment-toronto.jpg',
      width: 1200,
      height: 630,
      alt: 'Before & After Denture Gallery – Dentures Direct Toronto',
    }],
    },
  };
}

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
