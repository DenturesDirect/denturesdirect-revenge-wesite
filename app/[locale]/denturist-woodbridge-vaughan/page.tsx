import { Metadata } from 'next';
import NeighbourhoodPage from '../_neighbourhood-template';

export const metadata: Metadata = {
  title: 'Denturist Near Woodbridge & Vaughan Toronto | Digital Dentures | Dentures Direct',
  description: 'Denturist serving Woodbridge & Vaughan, Toronto. Digital implant overdentures, partials, full dentures, emergency repairs. CDCP accepted. 2833 Weston Road, North York — free consultation.',
  keywords: 'denturist Woodbridge & Vaughan, dentures Woodbridge & Vaughan Toronto, denture clinic near Woodbridge & Vaughan, implant dentures Woodbridge & Vaughan, CDCP denturist near me',
};

export default function WoodbridgeVaughanPage() {
  return (
    <NeighbourhoodPage
      neighbourhood="Woodbridge & Vaughan"
      distance="About 20 minutes south on Hwy 400 or Weston Road."
      cdcpNote="CDCP accepted. Many Vaughan residents qualify."
      driveNote="South on Hwy 400 to Lawrence, or Weston Road all the way."
    />
  );
}
