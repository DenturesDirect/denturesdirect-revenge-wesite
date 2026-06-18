import { Metadata } from 'next';
import NeighbourhoodPage from '../_neighbourhood-template';

export const metadata: Metadata = {
  title: 'Denturist Near Jane & Finch Toronto | Digital Dentures | Dentures Direct',
  description: 'Denturist serving Jane & Finch, Toronto. Digital implant overdentures, partials, full dentures, emergency repairs. CDCP accepted. 2833 Weston Road, North York — free consultation.',
  keywords: 'denturist Jane & Finch, dentures Jane & Finch Toronto, denture clinic near Jane & Finch, implant dentures Jane & Finch, CDCP denturist near me',
};

export default function JaneFinchPage() {
  return (
    <NeighbourhoodPage
      neighbourhood="Jane & Finch"
      distance="About 10–15 minutes via Jane Street to Lawrence, then west."
      cdcpNote="Jane & Finch has high CDCP eligibility — we accept it directly."
      driveNote="South on Jane to Lawrence, west to Weston Road."
    />
  );
}
