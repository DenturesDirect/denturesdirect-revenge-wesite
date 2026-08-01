import { Metadata } from 'next';
import { getCdcpContent } from '@/content/cdcp';

const PATH = '/cdcp-toronto-denturist';
const BASE = 'https://www.denturesdirect.ca';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const c = getCdcpContent(locale).meta;

  return {
    title: c.title,
    description: c.description,
    keywords: 'CDCP denturist Toronto, Canadian Dental Care Plan dentures, CDCP dentures North York, CDCP covered dentures GTA, CDCP provider Toronto, government dental plan dentures Toronto',
    alternates: { canonical: `${BASE}/en${PATH}` },
    openGraph: {
      title: c.ogTitle,
      description: c.ogDescription,
      url: `${BASE}/${locale}${PATH}`,
      siteName: 'Dentures Direct',
      locale,
      type: 'website',
      images: [{ url: '/og-en.png', width: 1200, height: 630, alt: 'CDCP Covered Dentures – Dentures Direct Toronto' }],
    },
  };
}

export default function CdcpLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
