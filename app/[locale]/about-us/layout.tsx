import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Damien Hiorth DD — Implant Overdenture Specialist | Dentures Direct Toronto',
  description: 'Meet the team at Dentures Direct in North York Toronto. Damien Hiorth DD (Founder, 25+ years) specializes in implant-retained overdentures and digital dentures. Luisa Gomez, RDT Candidate, runs the in-house CNC milling lab. Free consultations — (416) 245-7474.',
  keywords: 'denturist Toronto, Damien Hiorth DD, Luisa Gomez RDT, best denturist Toronto, implant overdenture specialist North York, experienced denturist GTA, Dentures Direct team, in-house denture lab Toronto',
  openGraph: {
    title: 'Meet Our Team | Damien Hiorth DD & Luisa Gomez RDT Candidate | Dentures Direct',
    description: 'Damien Hiorth DD — 25+ years, implant overdenture specialist. Luisa Gomez — RDT Candidate, in-house lab. Dentures Direct, North York Toronto.',
    url: 'https://www.denturesdirect.ca/en/about-us',
    siteName: 'Dentures Direct',
    type: 'website',
    images: [{
      url: '/team-hero.jpg',
      width: 1200,
      height: 630,
      alt: 'Dentures Direct Team — Damien Hiorth DD, Luisa Gomez, Caroline Brunelle — North York Toronto',
    }],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
