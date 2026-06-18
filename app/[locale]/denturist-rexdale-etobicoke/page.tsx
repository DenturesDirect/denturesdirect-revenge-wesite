import { Metadata } from 'next';
import NeighbourhoodPage from '../_neighbourhood-template';

export const metadata: Metadata = {
  title: 'Denturist Near Rexdale Toronto | Digital Dentures | Dentures Direct',
  description: 'Denturist serving Rexdale, Toronto. Digital implant overdentures, partials, full dentures, emergency repairs. CDCP accepted. 2833 Weston Road, North York — free consultation.',
  keywords: 'denturist Rexdale, dentures Rexdale Toronto, denture clinic near Rexdale, implant dentures Rexdale, CDCP denturist near me',
};

export default function RexdalePage() {
  return (
    <NeighbourhoodPage
      neighbourhood="Rexdale"
      distance="About 10–12 minutes via Kipling or Hwy 27."
      cdcpNote="CDCP accepted — many Rexdale patients qualify."
      driveNote="East on Finch or Albion, then south on Weston Road."
    />
  );
}
