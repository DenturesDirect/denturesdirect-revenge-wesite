import { redirect } from 'next/navigation';

export default function RescueRedirect({ params }: { params: { locale: string } }) {
  redirect(`/${params.locale}/fix-bad-denture-toronto`);
}
