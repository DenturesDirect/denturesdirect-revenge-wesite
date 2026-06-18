import { Metadata } from 'next';
import NeighbourhoodPage from '../_neighbourhood-template';

export const metadata: Metadata = {
  title: 'Denturist Near Weston Toronto | Digital Dentures | Dentures Direct',
  description: 'Denturist serving Weston, Toronto. Digital implant overdentures, partials, full dentures, emergency repairs. CDCP accepted. 2833 Weston Road, North York — free consultation.',
  keywords: 'denturist Weston, dentures Weston Toronto, denture clinic near Weston, implant dentures Weston, CDCP denturist near me',
};

export default function WestonPage() {
  return (
    <NeighbourhoodPage
      neighbourhood="Weston"
      distance="We're on Weston Road. This is your neighbourhood."
      cdcpNote="Many Weston residents qualify for CDCP — we accept it."
      driveNote="You can walk from parts of Weston."
    />
  );
}
