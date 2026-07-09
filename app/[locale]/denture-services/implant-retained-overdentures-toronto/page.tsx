"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import ComparisonSlider from '@/components/ComparisonSlider';

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: 'What are implant-retained dentures?',
    a: 'Implant-retained dentures — also called implant overdentures or snap-on dentures — clip onto dental implants anchored in your jawbone. Unlike traditional dentures that rest on your gums, they don’t shift, float, or need adhesive. They come in two forms: removable (snap-on) and fixed (All-on-4 style).',
  },
  {
    q: 'How much do implant-retained dentures cost in Toronto?',
    a: (
      <>
        Our implant overdenture is <strong>$5,250 flat per arch — no tax, no variation</strong>. Both arches together are $10,000. The implant surgery is a separate fee set by the oral surgeon — last year&apos;s average was ~$2,370 per implant.{' '}
        <Link href="/en/implant-dentures-cost-toronto" className="text-brand-blue underline underline-offset-2 font-semibold">See the full cost breakdown →</Link>
      </>
    ),
  },
  {
    q: 'How many implants do I need?',
    a: 'Typically 3 implants for a lower overdenture and 4 for an upper. The exact number depends on your bone density and jaw anatomy — confirmed with a CBCT scan before any surgery.',
  },
  {
    q: 'What’s the difference between snap-on and fixed?',
    a: 'Snap-on overdentures clip onto your implants and come out at home for cleaning — dramatically more stable than traditional dentures at a fraction of the fixed price. Fixed dentures (All-on-4) are screwed on and only removed by a professional; maximum stability, but usually over $25,000 per arch.',
  },
  {
    q: 'I already have implants — can you make a denture that fits them?',
    a: 'Yes — this is one of our most common cases. If your implants are healthy and well positioned, we design and mill a new digital overdenture to clip onto them, or convert your existing denture. Your only cost is the overdenture fee.',
  },
  {
    q: 'How long does the process take?',
    a: 'If you already have implants: typically 2–4 weeks. If implants need to be placed first: 3–6 months of healing after surgery, then 2–4 weeks for design and milling in our on-site lab.',
  },
  {
    q: 'Do implant-retained dentures stop bone loss?',
    a: 'Implants stimulate the jawbone the way natural tooth roots do, which helps slow the bone resorption that traditional dentures accelerate. It’s one of the biggest long-term health benefits of going with implants.',
  },
  {
    q: 'Where in the GTA do your patients come from?',
    a: 'Our clinic and lab are at 2833 Weston Road in North York. Patients visit from across the GTA — Etobicoke, Scarborough, York, Vaughan, Woodbridge, Mississauga, Brampton, Markham, and Richmond Hill.',
  },
];

function FAQItem({ q, a }: { q: string; a: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-brand-border rounded-2xl bg-white overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 font-semibold text-brand-dark hover:bg-brand-ice/60 transition-colors"
        aria-expanded={open}
      >
        <span>{q}</span>
        <svg
          className={`w-5 h-5 text-brand-blue shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="px-6 pb-6 text-brand-gray leading-relaxed">{a}</div>
      )}
    </div>
  );
}

export default function ImplantRetainedPage() {
  const locale = useLocale();

  return (
    <div className="w-full bg-brand-light font-sans">

      {/* ─── Hero ─── */}
      <section className="relative pt-24 pb-20 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/dancing-senior-couple.png"
            alt="Senior couple dancing confidently with implant-retained dentures"
            fill className="object-cover" priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/85 to-brand-dark/40" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/50">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href={`/${locale}`} className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden>›</li>
              <li><Link href={`/${locale}/denture-services`} className="hover:text-white transition-colors">Denture Services</Link></li>
              <li aria-hidden>›</li>
              <li className="text-white/80">Implant-Retained Dentures</li>
            </ol>
          </nav>
          <span className="inline-flex items-center gap-2 pill-badge border-brand-blue/30 bg-brand-blue/12 text-brand-blue mb-5">
            <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
            Toronto&apos;s Implant Denture Specialists · 25 Years
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-[1.05]">
            Implant-Retained Dentures
            <span className="block font-display italic text-brand-blueLight mt-1">in Toronto</span>
          </h1>
          <p className="text-xl max-w-2xl text-white/70 mb-4 leading-relaxed">
            Snap-on and fixed implant overdentures that never shift, float, or need adhesive — designed by Damien Hiorth DD and CNC-milled in our own North York lab.
          </p>
          <p className="text-lg max-w-2xl text-white/60 mb-8">
            <strong className="text-white">$5,250 flat per arch.</strong> No tax. No &ldquo;and up.&rdquo; Free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:416-245-7474" className="btn-shimmer inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-blue hover:bg-brand-blueDark text-white font-semibold rounded-full transition-all duration-300 shadow-cta hover:shadow-cta-hover">
              Book Your Free Consultation — (416) 245-7474
            </a>
            <Link href={`/${locale}/implant-dentures-cost-toronto`} className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/8 border border-white/25 text-white font-semibold rounded-full hover:bg-white/15 transition-all duration-300 backdrop-blur-sm">
              See Exact Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Trust strip ─── */}
      <section className="bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4">
          {[
            { stat: '$5,250', label: 'Flat Per Arch — No Tax' },
            { stat: '25+', label: 'Years Implant Denture Experience' },
            { stat: '3–4', label: 'Implants Per Arch' },
            { stat: '100%', label: 'Designed & Milled In-House' },
          ].map((item, i) => (
            <div key={i} className={`flex flex-col items-center justify-center py-8 px-4 text-center ${i < 3 ? 'md:border-r border-brand-border' : ''}`}>
              <div className="text-3xl font-bold text-brand-blue mb-1">{item.stat}</div>
              <div className="text-xs font-bold tracking-widest uppercase text-brand-gray">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── What they are / Before-After ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="pill-badge mb-4 inline-flex">The Permanent Fix for Loose Dentures</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6 mt-3">What Are Implant-Retained Dentures?</h2>
            <p className="text-lg text-brand-gray leading-relaxed mb-5">
              An implant-retained denture — you&apos;ll also hear <em>implant overdenture</em>, <em>snap-on denture</em>, or <em>snap-in denture</em> — clips onto dental implants anchored in your jawbone instead of resting on your gums. The result: a denture that stays put when you eat, laugh, and speak.
            </p>
            <p className="text-lg text-brand-gray leading-relaxed mb-6">
              If you use adhesive every day, avoid steak, corn, or crusty bread, or feel your lower denture float the moment you bite down — you are exactly who this treatment was invented for.
            </p>
            <ul className="space-y-3 text-brand-gray">
              {[
                'No adhesive — the attachments hold, not glue',
                'Eat the foods you stopped ordering',
                'No clicking, rocking, or floating',
                'Slows the jawbone loss traditional dentures accelerate',
                'Removable at home for easy cleaning (snap-on)',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3"><CheckIcon /><span>{item}</span></li>
              ))}
            </ul>
            <div className="mt-8">
              <Link href={`/${locale}/loose-denture-guide`} className="inline-flex items-center gap-2 text-brand-blue font-bold hover:gap-4 transition-all duration-300">
                Struggling with a loose denture? Read our free guide
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
            </div>
          </div>
          <div>
            <ComparisonSlider
              beforeImage="/implant-retained-overdentures-before-toronto.jpg"
              afterImage="/implant-retained-overdentures-after-toronto.jpg"
              beforeLabel="Before"
              afterLabel="After"
            />
            <p className="text-sm text-brand-gray text-center mt-4 italic">
              Actual Dentures Direct patient — implant-retained overdenture, designed and milled in our North York lab.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Snap-on vs Fixed ─── */}
      <section className="py-20 bg-brand-ice">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-brand-dark">Snap-On vs. Fixed Implant Dentures</h2>
            <p className="text-lg text-brand-gray mt-4 max-w-3xl mx-auto">
              Both attach to implants. The difference is how — and what they cost. Most of our Toronto patients choose snap-on for one simple reason: near-fixed stability at a fifth of the price.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white p-10 rounded-4xl border-2 border-brand-blue shadow-card-hover relative overflow-hidden">
              <span className="absolute top-6 right-6 text-xs font-bold px-3 py-1 rounded-full bg-brand-blue text-white">Our Specialty</span>
              <h3 className="text-2xl font-bold text-brand-blue mb-5">Snap-On Overdentures</h3>
              <p className="text-brand-gray leading-relaxed mb-6">
                Clips onto <strong>3 implants (lower)</strong> or <strong>4 implants (upper)</strong> with locator-style attachments. You remove it at home for cleaning; it snaps back rock-solid.
              </p>
              <ul className="space-y-3.5 text-brand-gray mb-8">
                <li className="flex items-start gap-3"><CheckIcon />Dramatically more stable than traditional dentures</li>
                <li className="flex items-start gap-3"><CheckIcon />Easy to clean and maintain at home</li>
                <li className="flex items-start gap-3"><CheckIcon />Attachments replaceable as they wear — low upkeep cost</li>
                <li className="flex items-start gap-3"><CheckIcon />CNC-milled in-house for a precise, repeatable fit</li>
              </ul>
              <div className="pt-6 border-t border-brand-border">
                <p className="text-3xl font-bold text-brand-dark">$5,250 <span className="text-base font-normal text-brand-gray">flat per arch · no tax</span></p>
                <p className="text-sm text-brand-gray mt-1">Both arches: $10,000 (save $500). Implant surgery quoted separately by the oral surgeon.</p>
              </div>
            </div>
            <div className="bg-white p-10 rounded-4xl border border-brand-border shadow-card relative overflow-hidden">
              <h3 className="text-2xl font-bold text-brand-dark mb-5">Fixed Dentures (All-on-4)</h3>
              <p className="text-brand-gray leading-relaxed mb-6">
                Screwed permanently onto 4+ implants and only removed by a professional. Feels closest to natural teeth — at a significantly higher investment.
              </p>
              <ul className="space-y-3.5 text-brand-gray mb-8">
                <li className="flex items-start gap-3"><CheckIcon />Maximum stability for eating and speaking</li>
                <li className="flex items-start gap-3"><CheckIcon />Never removed at home</li>
                <li className="flex items-start gap-3"><CheckIcon />Helps prevent jawbone deterioration</li>
              </ul>
              <div className="pt-6 border-t border-brand-border">
                <p className="text-3xl font-bold text-brand-dark">$25,000+ <span className="text-base font-normal text-brand-gray">per arch, typically</span></p>
                <p className="text-sm text-brand-gray mt-1">Complexity, components, and surgical requirements drive the cost. We&apos;ll tell you honestly if it&apos;s worth it for your case.</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link href={`/${locale}/implant-dentures-cost-toronto`} className="inline-flex items-center gap-2 text-brand-blue font-bold hover:gap-4 transition-all duration-300">
              Full transparent cost breakdown — including surgery fees
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Process ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-brand-dark">The 5 Stages of Implant-Retained Dentures</h2>
            <p className="text-lg text-brand-gray mt-4 max-w-3xl mx-auto">
              From first consultation to your final fitting — here&apos;s exactly what happens, and who does what.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { n: '1', title: 'Free Consultation', body: 'We assess your jaw, your current denture, and any existing implants. Honest advice — if you’re not a candidate, we’ll say so.' },
              { n: '2', title: 'Implant Placement', body: 'An oral surgeon places the implants — 3 lower, 4 upper. Use your own surgeon or one from our trusted GTA network. A CBCT scan is always required first.' },
              { n: '3', title: 'Healing & Integration', body: 'Implants integrate with your bone over 3–6 months. You wear a temporary denture the whole time — you’re never without teeth.' },
              { n: '4', title: 'Digital Impressions', body: 'No goop. Our intraoral scanner captures your jaw and implant positions to the micron, and Damien DD designs your overdenture personally.' },
              { n: '5', title: 'Milling & Fitting', body: 'CNC-milled in our on-site North York lab — no outsourcing. We fit it, fine-tune the attachments, and show you exactly how to care for it.' },
            ].map((step) => (
              <div key={step.n} className="card-premium p-8">
                <div className="w-10 h-10 rounded-xl bg-brand-blue/10 text-brand-blue font-bold flex items-center justify-center mb-4">{step.n}</div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">{step.title}</h3>
                <p className="text-brand-gray leading-relaxed">{step.body}</p>
              </div>
            ))}
            <div className="rounded-3xl p-8 bg-gradient-blue text-white shadow-card flex flex-col justify-center">
              <h3 className="text-xl font-bold mb-3">Already have implants?</h3>
              <p className="leading-relaxed text-white/85 mb-4">Skip to stage 4. We build overdentures on implants placed anywhere — typically ready in 2–4 weeks.</p>
              <a href="tel:416-245-7474" className="inline-flex items-center gap-2 font-bold underline underline-offset-4">Call for a written quote →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Why us ─── */}
      <section className="py-20 bg-brand-dark text-white relative overflow-hidden">
        <div className="orb w-[500px] h-[500px] bg-brand-blue/10 -top-32 -right-40" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10 max-w-md mx-auto lg:mx-0">
              <Image src="/damien-hiorth-toronto-denturist.jpg" alt="Damien Hiorth DD — implant denture specialist, Dentures Direct Toronto" fill className="object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/85 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-bold text-xl">Damien John Hiorth DD</p>
                <p className="text-brand-blueLight text-sm mt-0.5">Founder &amp; Lead Denturist · 25 Years</p>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold leading-tight">
                Why Toronto Patients Choose Us
                <span className="block font-display italic text-brand-blueLight mt-1">for implant dentures</span>
              </h2>
              <div className="space-y-5 text-white/70 text-lg leading-relaxed">
                <p>
                  Most clinics send implant denture work to a third-party lab and wait weeks. We don&apos;t. Every overdenture is <strong className="text-white">designed by Damien personally and milled in our own lab down the hall</strong> — which means faster turnaround, direct quality control, and a fit that&apos;s mathematically precise.
                </p>
                <p>
                  We&apos;re a <Link href={`/${locale}/digital-dentures`} className="text-brand-blueLight underline underline-offset-2">fully digital clinic</Link>: intraoral scanning instead of goop impressions, CAD design, and CNC milling to 3-micron tolerance. And our pricing is flat and public — $5,250 per arch, because you shouldn&apos;t need three consultations to learn what something costs.
                </p>
              </div>
              <ul className="grid sm:grid-cols-2 gap-3 text-white/85 pt-2">
                {[
                  '25 years of implant denture experience',
                  'In-house digital lab — zero outsourcing',
                  'Flat, published pricing',
                  'Regulated by the College of Denturists of Ontario',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5"><CheckIcon /><span>{item}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-20 bg-brand-ice">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-brand-dark">Implant Denture Questions, Answered</h2>
            <p className="text-lg text-brand-gray mt-4">Straight answers from 25 years of building implant-retained dentures in Toronto.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((f) => <FAQItem key={f.q} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      {/* ─── Areas served ─── */}
      <section className="py-16 bg-white border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Serving Toronto &amp; the GTA</h2>
          <p className="text-brand-gray max-w-3xl mx-auto mb-6">
            Our clinic and lab are at <Link href={`/${locale}/locations`} className="text-brand-blue font-semibold hover:underline">2833 Weston Road, North York</Link> — minutes from Highways 400 and 401, with free parking. Implant denture patients visit us from:
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {['North York', 'Etobicoke', 'Weston', 'York', 'Scarborough', 'Downtown Toronto', 'Vaughan', 'Woodbridge', 'Mississauga', 'Brampton', 'Markham', 'Richmond Hill'].map((area) => (
              <span key={area} className="px-4 py-1.5 rounded-full bg-brand-ice border border-brand-border text-sm font-medium text-brand-dark">{area}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 bg-gradient-hero text-white text-center relative overflow-hidden">
        <div className="orb w-96 h-96 bg-brand-blue/25 -top-20 left-1/2 -translate-x-1/2" />
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to stop fighting
            <span className="block font-display italic gradient-text-light mt-1">your own denture?</span>
          </h2>
          <p className="text-xl mb-10 text-white/65">
            Free consultation. Honest assessment. Flat pricing. If you&apos;re not a candidate for implant-retained dentures, we&apos;ll tell you that too.
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
