import { Metadata } from 'next';
import NeighbourhoodPage from '../_neighbourhood-template';

export const metadata: Metadata = {
  title: 'Denturist Near Emery Toronto | Digital Dentures | Dentures Direct',
  description: 'Denturist serving Emery, Toronto. Digital implant overdentures, partials, full dentures, emergency repairs. CDCP accepted. 2833 Weston Road, North York — free consultation.',
  keywords: 'denturist Emery, dentures Emery Toronto, denture clinic near Emery, implant dentures Emery, CDCP denturist near me',
};

export default function EmeryPage() {
  return (
    <NeighbourhoodPage
      neighbourhood="Emery"
      distance="8 minutes east across the Humber River."
      cdcpNote="CDCP accepted. Ask us when you book."
      driveNote="Cross the Humber on Lawrence or Eglinton, head west on Weston."
    />
  );
}
