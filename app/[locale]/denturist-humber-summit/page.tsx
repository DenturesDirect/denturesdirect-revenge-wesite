import { Metadata } from 'next';
import NeighbourhoodPage from '../_neighbourhood-template';

export const metadata: Metadata = {
  title: 'Denturist Near Humber Summit Toronto | Digital Dentures | Dentures Direct',
  description: 'Denturist serving Humber Summit, Toronto. Digital implant overdentures, partials, full dentures, emergency repairs. CDCP accepted. 2833 Weston Road, North York — free consultation.',
  keywords: 'denturist Humber Summit, dentures Humber Summit Toronto, denture clinic near Humber Summit, implant dentures Humber Summit, CDCP denturist near me',
};

export default function HumberSummitPage() {
  return (
    <NeighbourhoodPage
      neighbourhood="Humber Summit"
      distance="5 minutes south on Weston Road."
      cdcpNote="Large number of CDCP-eligible patients in Humber Summit."
      driveNote="Straight shot down Weston Road — under 5 minutes."
    />
  );
}
