import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Dentures Direct Toronto',
  description: 'Privacy Policy for Dentures Direct — how we collect, use, and protect your personal information in compliance with PIPEDA and Ontario privacy regulations.',
  robots: { index: false, follow: false },
};

export default function PrivacyPolicyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
