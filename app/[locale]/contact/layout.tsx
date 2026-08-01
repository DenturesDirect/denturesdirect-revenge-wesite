import { Metadata } from 'next';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {

  return {
    title: 'Contact Dentures Direct Toronto | Book a Free Consultation | (416) 245-7474',
    description: 'Contact Dentures Direct at 2833 Weston Road, Toronto (North York). Call (416) 245-7474 or book online. Accepting new patients. CDCP direct billing available. Serving North York, Etobicoke, and the GTA.',
    keywords: 'contact Dentures Direct, book denture appointment Toronto, denture clinic phone number, denturist appointment North York, book dentures GTA, 416-245-7474',
    alternates: {
      canonical: `https://www.denturesdirect.ca/en/contact`,
      },
    openGraph: {
      title: 'Contact Dentures Direct Toronto | Book a Free Consultation',
      description: 'Book a free consultation at Dentures Direct, 2833 Weston Road Toronto. Call (416) 245-7474. Accepting new patients. CDCP direct billing available.',
      url: `https://www.denturesdirect.ca/${locale}/contact`,
      siteName: 'Dentures Direct',
      type: 'website',
      images: [{
      url: '/team-hero.jpg',
      width: 1200,
      height: 630,
      alt: 'Contact Dentures Direct – Toronto Denture Clinic',
    }],
    },
  };
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
