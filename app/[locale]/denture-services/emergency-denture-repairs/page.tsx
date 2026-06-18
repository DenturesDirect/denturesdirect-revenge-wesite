import { redirect } from 'next/navigation';

export default function Redirect({ params }: { params: { locale: string } }) {
  redirect('/' + params.locale + '/denture-services/emergency-denture-repair-toronto');
}
