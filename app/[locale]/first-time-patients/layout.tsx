import { Metadata } from 'next';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {

  return {
    title: 'Your First Visit to Dentures Direct Toronto | What to Expect | Free Consultation',
    description: 'First time at Dentures Direct? Here\'s exactly what happens: an honest conversation with Damien (25+ years), a 3D scan (no goop), and a written quote before you leave. No pressure, no commitment. North York Toronto.',
    keywords: 'first denture consultation Toronto, what to expect denture appointment, first time denture patient North York, denture consultation free Toronto, implant denture consultation, denturist first visit GTA',
    alternates: {
      canonical: `https://www.denturesdirect.ca/en/first-time-patients`,
      },
    openGraph: {
      title: 'Your First Visit to Dentures Direct | What to Expect',
      description: 'No goop. No hard sell. Just Damien, 25+ years of experience, and a written quote before you leave. Free consultation in North York Toronto.',
      url: `https://www.denturesdirect.ca/${locale}/first-time-patients`,
      siteName: 'Dentures Direct',
      type: 'website',
      images: [{
      url: '/senior_couple_smiling.png',
      width: 1200,
      height: 630,
      alt: 'First Visit to Dentures Direct – Free Consultation Toronto',
    }],
    },
  };
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What happens at my first visit to Dentures Direct?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Damien sits with you for as long as it takes. He'll assess your situation, discuss your options honestly, and if appropriate, do a 3D intraoral scan (no goop, no gagging). You leave with a written treatment plan and cost breakdown — no follow-up needed to get a number."
      }
    },
    {
      "@type": "Question",
      "name": "How much do implant overdentures cost at Dentures Direct?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The overdenture itself is a flat rate per arch. The implant surgery is quoted separately by the oral surgeon we refer you to. You get a complete written breakdown at your first visit — no surprises, no ranges that span thousands of dollars."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need a referral to visit Dentures Direct?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No referral needed. You can book a free consultation directly. Many of our patients are referred by their dentists, but walk-ins and self-referrals are welcome."
      }
    },
    {
      "@type": "Question",
      "name": "Does Dentures Direct accept CDCP (Canadian Dental Care Plan)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We work with CDCP patients. We'll be upfront about what the CDCP fee schedule covers and what our premium services cost above that. Most patients see the difference and choose to upgrade."
      }
    }
  ]
};

export default function FirstTimePatientsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
