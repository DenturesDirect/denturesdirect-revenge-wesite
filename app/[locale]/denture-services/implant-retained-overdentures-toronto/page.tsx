"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import ComparisonSlider from '@/components/ComparisonSlider';
import { getImplantPillarContent } from '@/content/implant-pillar';

// Renders **bold** segments as <strong>
function renderBold(text: string, strongClass?: string) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i} className={strongClass}>{part}</strong> : <React.Fragment key={i}>{part}</React.Fragment>
  );
}

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

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
  const c = getImplantPillarContent(locale);

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
              <li><Link href={`/${locale}`} className="hover:text-white transition-colors">{c.crumbs.home}</Link></li>
              <li aria-hidden>›</li>
              <li><Link href={`/${locale}/denture-services`} className="hover:text-white transition-colors">{c.crumbs.services}</Link></li>
              <li aria-hidden>›</li>
              <li className="text-white/80">{c.crumbs.current}</li>
            </ol>
          </nav>
          <span className="inline-flex items-center gap-2 pill-badge border-brand-blue/30 bg-brand-blue/12 text-brand-blue mb-5">
            <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
            {c.hero.badge}
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-[1.05]">
            {c.hero.h1a}
            <span className="block font-display italic text-brand-blueLight mt-1">{c.hero.h1b}</span>
          </h1>
          <p className="text-xl max-w-2xl text-white/70 mb-4 leading-relaxed">
            {c.hero.sub}
          </p>
          <p className="text-lg max-w-2xl text-white/60 mb-8">
            {renderBold(c.hero.priceLine, 'text-white')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:416-245-7474" className="btn-shimmer inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-blue hover:bg-brand-blueDark text-white font-semibold rounded-full transition-all duration-300 shadow-cta hover:shadow-cta-hover">
              {c.hero.ctaCall}
            </a>
            <Link href={`/${locale}/implant-dentures-cost-toronto`} className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/8 border border-white/25 text-white font-semibold rounded-full hover:bg-white/15 transition-all duration-300 backdrop-blur-sm">
              {c.hero.ctaPricing}
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Trust strip ─── */}
      <section className="bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4">
          {c.stats.map((item, i) => (
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
            <span className="pill-badge mb-4 inline-flex">{c.what.badge}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6 mt-3">{c.what.h2}</h2>
            <p className="text-lg text-brand-gray leading-relaxed mb-5">{c.what.p1}</p>
            <p className="text-lg text-brand-gray leading-relaxed mb-6">{c.what.p2}</p>
            <ul className="space-y-3 text-brand-gray">
              {c.what.bullets.map((item) => (
                <li key={item} className="flex items-start gap-3"><CheckIcon /><span>{item}</span></li>
              ))}
            </ul>
            <div className="mt-8">
              <Link href={`/${locale}/loose-denture-guide`} className="inline-flex items-center gap-2 text-brand-blue font-bold hover:gap-4 transition-all duration-300">
                {c.what.guideLink}
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
            <p className="text-sm text-brand-gray text-center mt-4 italic">{c.what.caption}</p>
          </div>
        </div>
      </section>

      {/* ─── Snap-on vs Fixed ─── */}
      <section className="py-20 bg-brand-ice">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-brand-dark">{c.compare.h2}</h2>
            <p className="text-lg text-brand-gray mt-4 max-w-3xl mx-auto">{c.compare.intro}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white p-10 rounded-4xl border-2 border-brand-blue shadow-card-hover relative overflow-hidden">
              <span className="absolute top-6 right-6 text-xs font-bold px-3 py-1 rounded-full bg-brand-blue text-white">{c.compare.snap.tag}</span>
              <h3 className="text-2xl font-bold text-brand-blue mb-5">{c.compare.snap.title}</h3>
              <p className="text-brand-gray leading-relaxed mb-6">{renderBold(c.compare.snap.body, 'text-brand-dark')}</p>
              <ul className="space-y-3.5 text-brand-gray mb-8">
                {c.compare.snap.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3"><CheckIcon />{b}</li>
                ))}
              </ul>
              <div className="pt-6 border-t border-brand-border">
                <p className="text-3xl font-bold text-brand-dark">{c.compare.snap.price} <span className="text-base font-normal text-brand-gray">{c.compare.snap.priceSuffix}</span></p>
                <p className="text-sm text-brand-gray mt-1">{c.compare.snap.priceNote}</p>
              </div>
            </div>
            <div className="bg-white p-10 rounded-4xl border border-brand-border shadow-card relative overflow-hidden">
              <h3 className="text-2xl font-bold text-brand-dark mb-5">{c.compare.fixed.title}</h3>
              <p className="text-brand-gray leading-relaxed mb-6">{c.compare.fixed.body}</p>
              <ul className="space-y-3.5 text-brand-gray mb-8">
                {c.compare.fixed.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3"><CheckIcon />{b}</li>
                ))}
              </ul>
              <div className="pt-6 border-t border-brand-border">
                <p className="text-3xl font-bold text-brand-dark">{c.compare.fixed.price} <span className="text-base font-normal text-brand-gray">{c.compare.fixed.priceSuffix}</span></p>
                <p className="text-sm text-brand-gray mt-1">{c.compare.fixed.priceNote}</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link href={`/${locale}/implant-dentures-cost-toronto`} className="inline-flex items-center gap-2 text-brand-blue font-bold hover:gap-4 transition-all duration-300">
              {c.compare.costLink}
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Process ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-brand-dark">{c.process.h2}</h2>
            <p className="text-lg text-brand-gray mt-4 max-w-3xl mx-auto">{c.process.intro}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {c.process.steps.map((step, i) => (
              <div key={i} className="card-premium p-8">
                <div className="w-10 h-10 rounded-xl bg-brand-blue/10 text-brand-blue font-bold flex items-center justify-center mb-4">{i + 1}</div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">{step.title}</h3>
                <p className="text-brand-gray leading-relaxed">{step.body}</p>
              </div>
            ))}
            <div className="rounded-3xl p-8 bg-gradient-blue text-white shadow-card flex flex-col justify-center">
              <h3 className="text-xl font-bold mb-3">{c.process.already.title}</h3>
              <p className="leading-relaxed text-white/85 mb-4">{c.process.already.body}</p>
              <a href="tel:416-245-7474" className="inline-flex items-center gap-2 font-bold underline underline-offset-4">{c.process.already.cta}</a>
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
                <p className="text-brand-blueLight text-sm mt-0.5">{c.why.photoTitle}</p>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold leading-tight">
                {c.why.h2a}
                <span className="block font-display italic text-brand-blueLight mt-1">{c.why.h2b}</span>
              </h2>
              <div className="space-y-5 text-white/70 text-lg leading-relaxed">
                <p>{renderBold(c.why.p1, 'text-white')}</p>
                <p>
                  {c.why.p2pre}
                  <Link href={`/${locale}/digital-dentures`} className="text-brand-blueLight underline underline-offset-2">{c.why.p2link}</Link>
                  {c.why.p2post}
                </p>
              </div>
              <ul className="grid sm:grid-cols-2 gap-3 text-white/85 pt-2">
                {c.why.bullets.map((item) => (
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
            <h2 className="text-4xl font-bold text-brand-dark">{c.faq.h2}</h2>
            <p className="text-lg text-brand-gray mt-4">{c.faq.sub}</p>
          </div>
          <div className="space-y-4">
            {c.faq.items.map((f, i) => (
              <FAQItem
                key={f.q}
                q={f.q}
                a={
                  <>
                    {renderBold(f.a, 'text-brand-dark')}
                    {i === 1 && (
                      <>
                        {' '}
                        <Link href={`/${locale}/implant-dentures-cost-toronto`} className="text-brand-blue underline underline-offset-2 font-semibold">{c.faq.costLinkLabel}</Link>
                      </>
                    )}
                  </>
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Areas served ─── */}
      <section className="py-16 bg-white border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">{c.areas.h2}</h2>
          <p className="text-brand-gray max-w-3xl mx-auto mb-6">
            {c.areas.introPre}
            <Link href={`/${locale}/locations`} className="text-brand-blue font-semibold hover:underline">{c.areas.introLink}</Link>
            {c.areas.introPost}
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {c.areas.list.map((area) => (
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
            {c.cta.h2a}
            <span className="block font-display italic gradient-text-light mt-1">{c.cta.h2b}</span>
          </h2>
          <p className="text-xl mb-10 text-white/65">{c.cta.p}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:416-245-7474" className="btn-shimmer inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-blue hover:bg-brand-blueDark text-white font-bold rounded-full transition-all duration-300 shadow-cta hover:shadow-cta-hover text-lg">
              (416) 245-7474
            </a>
            <Link href={`/${locale}/contact`} className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/8 border border-white/25 text-white font-semibold rounded-full hover:bg-white/15 transition-all duration-300 backdrop-blur-sm text-lg">
              {c.cta.book}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
