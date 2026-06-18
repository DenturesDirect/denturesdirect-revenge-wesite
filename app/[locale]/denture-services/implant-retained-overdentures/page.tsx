import { redirect } from 'next/navigation';

export default function Redirect({ params }: { params: { locale: string } }) {
  redirect('/' + params.locale + '/denture-services/implant-retained-overdentures-toronto');
}
