import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PATH = '/denture-services/digital-immediate-dentures-toronto';
const BASE = 'https://www.denturesdirect.ca';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {

  return {
    title: 'Immediate Dentures Toronto | Same-Day Teeth After Extraction | Dentures Direct',
    description:
      'Never go a day without teeth. Immediate dentures in Toronto, placed the same day as your extractions and digitally designed in our on-site North York lab. Also used as temporary dentures during implant healing. Call (416) 245-7474.',
    keywords:
      'immediate dentures Toronto, same day dentures Toronto, dentures after extraction Toronto, temporary dentures Toronto, immediate denture North York, healing dentures Toronto, teeth in a day dentures GTA',
    alternates: {
      canonical: `${BASE}/en${PATH}`,
      },
    openGraph: {
      title: 'Immediate Dentures Toronto | Same-Day Teeth After Extraction',
      description:
        'Never go a day without teeth. Immediate dentures placed the same day as extraction, digitally designed in our on-site North York lab.',
      url: `${BASE}/${locale}${PATH}`,
      siteName: 'Dentures Direct',
      type: 'website',
      images: [{ url: '/hero-main.png', width: 1200, height: 630, alt: 'Immediate Dentures — Dentures Direct Toronto' }],
    },
  };
}

export default function ImmediateDenturesPage({ params: { locale } }: { params: { locale: string } }) {
  return (
    <div className="w-full bg-brand-light font-sans">

      {/* Hero */}
      <section className="relative pt-24 pb-20 bg-gradient-hero overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/50">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href={`/${locale}`} className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden>›</li>
              <li><Link href={`/${locale}/denture-services`} className="hover:text-white transition-colors">Denture Services</Link></li>
              <li aria-hidden>›</li>
              <li className="text-white/80">Immediate Dentures</li>
            </ol>
          </nav>
          <span className="pill-badge border-brand-blue/30 bg-brand-blue/12 text-brand-blue mb-5 inline-flex">Never a Day Without Teeth</span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-[1.05]">
            Immediate Dentures
            <span className="block font-display italic text-brand-blueLight mt-1">in Toronto</span>
          </h1>
          <p className="text-xl max-w-2xl text-white/70 mb-8 leading-relaxed">
            Placed the same day your teeth are extracted — so you walk out with a full smile, never a gap. Digitally designed and fabricated in our own North York lab.
          </p>
          <a href="tel:416-245-7474" className="btn-shimmer inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-blue hover:bg-brand-blueDark text-white font-semibold rounded-full transition-all duration-300 shadow-cta hover:shadow-cta-hover">
            Book Your Free Consultation — (416) 245-7474
          </a>
        </div>
      </section>

      {/* What & How */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">What Is an Immediate Denture?</h2>
            <p className="text-lg text-brand-gray leading-relaxed mb-5">
              An immediate denture is made <em>before</em> your extractions and inserted the moment your teeth are removed. You&apos;re never without teeth — no waiting weeks for gums to heal while facing the world with a gap.
            </p>
            <p className="text-lg text-brand-gray leading-relaxed mb-5">
              Because we design digitally and mill in-house, your immediate denture is ready when your surgery is — and we can adjust or reline it quickly as your gums heal and change shape over the following months.
            </p>
            <p className="text-lg text-brand-gray leading-relaxed">
              Immediate dentures are also the standard <strong>temporary denture during dental implant healing</strong>. If your long-term plan is an{' '}
              <Link href={`/${locale}/denture-services/implant-retained-overdentures-toronto`} className="text-brand-blue font-semibold hover:underline">implant-retained denture</Link>, your immediate denture keeps you smiling and eating through the 3–6 month integration period.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { title: 'Same-Day Placement', body: 'Inserted immediately after extraction — you leave the surgery with a full smile.' },
              { title: 'Digitally Designed', body: 'Intraoral scans before extraction let us design a denture that anticipates your healed gum line.' },
              { title: 'In-House Lab', body: 'Milled on-site in North York. Fast adjustments and relines during the healing period, without shipping delays.' },
              { title: 'A Bridge to Implants', body: 'Doubles as your temporary denture if you’re on the path to a snap-on implant overdenture.' },
            ].map((card) => (
              <div key={card.title} className="card-premium p-6">
                <h3 className="font-bold text-brand-dark text-lg mb-1.5">{card.title}</h3>
                <p className="text-brand-gray leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expectations */}
      <section className="py-20 bg-brand-ice">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark text-center mb-12">What to Expect: The Honest Version</h2>
          <div className="space-y-6 text-lg text-brand-gray leading-relaxed">
            <p>
              Your gums change shape significantly in the first months after extraction — that&apos;s normal biology, not a badly made denture. Expect <strong className="text-brand-dark">temporary relines</strong> as the tissue settles, and a <strong className="text-brand-dark">permanent reline or a new precision denture around the 6–12 month mark</strong> once your gums stabilize.
            </p>
            <p>
              We build that reality into your treatment plan and pricing up front, so there are no surprises. And if a loose lower denture is what brought you here in the first place, ask us about{' '}
              <Link href={`/${locale}/denture-services/implant-retained-overdentures-toronto`} className="text-brand-blue font-semibold hover:underline">implant-retained overdentures</Link> at your consultation — extraction day is often the smartest time to plan for implants.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero text-white text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-6">Facing Extractions? Plan Your Smile First.</h2>
          <p className="text-xl mb-10 text-white/65">
            Come in before your surgery date. We&apos;ll scan, design, and have your immediate denture ready for the day of your extractions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:416-245-7474" className="btn-shimmer inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-blue hover:bg-brand-blueDark text-white font-bold rounded-full transition-all duration-300 shadow-cta hover:shadow-cta-hover text-lg">
              Call (416) 245-7474
            </a>
            <Link href={`/${locale}/contact`} className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/8 border border-white/25 text-white font-semibold rounded-full hover:bg-white/15 transition-all duration-300 backdrop-blur-sm text-lg">
              Book Online
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
