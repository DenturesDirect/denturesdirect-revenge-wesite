import { Metadata } from 'next';
import WoodbridgeClient from './WoodbridgeClient';

const PATH = '/implant-dentures-woodbridge-vaughan';
const BASE = 'https://www.denturesdirect.ca';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {

  return {
    title: 'Premium Implant Overdentures Woodbridge & Vaughan | Dentures Direct',
    description: 'Tired of slipping dentures? Get custom, secure snap-on implant-retained overdentures near Woodbridge & Vaughan. Designed by Damien DD in-house. Flat fee: $5,250/arch.',
    keywords: 'implant overdentures woodbridge, snap-on dentures vaughan, denturist woodbridge, implant dentures vaughan, premium dentures woodbridge, dentures direct woodbridge',
    alternates: {
      canonical: `${BASE}/en${PATH}`,
      },
  };
}

export default function WoodbridgeVaughanPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why drive to North York instead of a local Woodbridge clinic?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We are one of the very few clinics in the GTA with a complete in-house digital laboratory. Because Damien DD and Luisa design and fabricate your denture down the hall, we don’t outsource to commercial labs. This means fewer appointments, direct quality control, and faster adjustments."
        }
      },
      {
        "@type": "Question",
        "name": "How many implants do I need for snap-on dentures?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For the lower arch, 3 implants are standard to provide absolute stability and prevent rocking. For the upper arch, 4 implants are used because the upper bone is softer and requires more support. We will assess your jaw bone structure during your consult."
        }
      },
      {
        "@type": "Question",
        "name": "What is the total cost breakdown?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The overdenture itself is $5,250 per arch (flat rate, no tax). The surgical cost to place the implants is separate and paid directly to the oral surgeon. We coordinate directly with top-tier GTA oral surgeons to align your surgical plan with our prosthetic design."
        }
      },
      {
        "@type": "Question",
        "name": "I already have implants placed — can you build the overdenture?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We frequently build new overdentures or convert existing dentures for patients who had their implants placed elsewhere. Come in for a free consultation so we can verify the hardware and implants."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <WoodbridgeClient />
    </>
  );
}
