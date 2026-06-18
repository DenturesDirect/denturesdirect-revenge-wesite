import { Metadata } from 'next';
import NeighbourhoodPage from '../_neighbourhood-template';

export const metadata: Metadata = {
  title: 'Denturist Near Mount Dennis Toronto | Digital Dentures | Dentures Direct',
  description: 'Denturist serving Mount Dennis, Toronto. Digital implant overdentures, partials, full dentures, emergency repairs. CDCP accepted. 2833 Weston Road, North York — free consultation.',
  keywords: 'denturist Mount Dennis, dentures Mount Dennis Toronto, denture clinic near Mount Dennis, implant dentures Mount Dennis, CDCP denturist near me',
};

export default function MountDennisPage() {
  return (
    <NeighbourhoodPage
      neighbourhood="Mount Dennis"
      distance="About 10 minutes via Weston Road or Jane Street."
      cdcpNote="CDCP accepted for eligible patients."
      driveNote="North on Weston Road from Mount Dennis."
    />
  );
}
