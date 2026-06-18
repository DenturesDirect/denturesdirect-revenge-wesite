import { Metadata } from 'next';
import NeighbourhoodPage from '../_neighbourhood-template';

export const metadata: Metadata = {
  title: 'Denturist Near York Toronto | Digital Dentures | Dentures Direct',
  description: 'Denturist serving York, Toronto. Digital implant overdentures, partials, full dentures, emergency repairs. CDCP accepted. 2833 Weston Road, North York — free consultation.',
  keywords: 'denturist York, dentures York Toronto, denture clinic near York, implant dentures York, CDCP denturist near me',
};

export default function YorkPage() {
  return (
    <NeighbourhoodPage
      neighbourhood="York"
      distance="About 15 minutes north on Weston Road."
      cdcpNote="CDCP accepted for all eligible patients."
      driveNote="Take Weston Road north — direct route to our clinic."
    />
  );
}
