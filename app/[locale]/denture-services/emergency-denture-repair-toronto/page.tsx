import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const faqs = [
  {
    q: 'How much does an emergency denture repair cost in Toronto?',
    a: 'Repairs start at $167. We confirm the exact price the moment we see the damage — most simple repairs sit right at the lower end. Because everything is done in our own on-site lab, there are no third-party lab fees inflating the cost.',
  },
  {
    q: 'How long will I be without my denture?',
    a: 'Most simple repairs — a denture snapped in half, or a tooth broken off — are done the same day, often in about an hour in our on-site lab. When you call, we screen the damage over the phone and give you a realistic time based on that day\'s schedule.',
  },
  {
    q: 'Do I need a referral or an appointment?',
    a: 'No referral needed. Just call first so we can screen the repair and fit you in — we prioritize urgent cases. Same-day whenever the schedule allows.',
  },
  {
    q: 'Should I try to glue it back together myself?',
    a: 'Please don\'t. Household glue and super glue are toxic in the mouth and warp the fit — they often turn a simple, affordable repair into a full replacement. Even hardware-store "denture repair kits" are a temporary patch at best. Save every piece, stop wearing the broken part, and bring it all in.',
  },
  {
    q: 'Can a badly broken denture actually be repaired?',
    a: 'Almost always. In 25+ years we\'ve restored dentures most people assumed were done for. Occasionally a break is a sign the denture is worn out or no longer fits — if so, we\'ll tell you honestly and show you the options.',
  },
  {
    q: 'My denture keeps breaking — why?',
    a: 'Repeated breaks usually mean a fit problem or an old, worn denture. We\'ll assess whether a reline, a new precision digital denture, or an implant-retained overdenture is the smarter long-term fix — so you\'re not back here in three months.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const repairs = [
  { n: '1', title: 'Denture snapped in half', body: 'The break is cleaned and keyed, fresh acrylic is bonded and cured, then finished and polished back to strength. A classic same-day, ~1-hour fix.' },
  { n: '2', title: 'Tooth broken or fallen off', body: 'We match and shape a replacement tooth, prepare the site, mechanically bond it, and rebuild the gum acrylic around it. Bring the tooth if you have it.' },
  { n: '3', title: 'Cracked or worn base', body: 'A rebase replaces the entire acrylic base while keeping your existing teeth in the exact same position — for a denture that\'s cracking under normal use.' },
  { n: '4', title: 'Loose, rocking, or sore', body: 'A reline re-fits the inner surface to your gums as they are today. Often the real fix when a denture "keeps breaking" is that it stopped fitting.' },
];

export default function EmergencyRepairsPage({ params: { locale } }: { params: { locale: string } }) {
  return (
    <div className="w-full bg-brand-light font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── Hero ── */}
      <section className="relative pt-24 pb-20 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/broken-denture-repair.png" alt="" fill className="object-cover blur-sm" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white text-center">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-brand-blue/20 text-brand-blueLight rounded-full mb-6 border border-brand-blue/40 font-bold tracking-widest uppercase text-sm">
            <span className="w-2 h-2 rounded-full bg-brand-blue mr-2 animate-pulse" />
            Same-Day Emergency Repair · North York
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-[1.05]">Broke Your Denture? <span className="block font-display italic text-brand-blueLight mt-1">We Can Fix It Today.</span></h1>
          <p className="text-xl text-white/70 mb-3 leading-relaxed max-w-3xl mx-auto">
            A broken denture is stressful — you can&apos;t eat, you can&apos;t smile, and you need it back <em>now</em>. Because we have our own on-site lab, most simple repairs are done the same day, often in about an hour.
          </p>
          <p className="text-lg text-white/80 mb-9 font-semibold">Repairs from $167 · No referral needed · We screen every repair by phone</p>
          <a href="tel:416-245-7474" className="btn-shimmer inline-flex items-center gap-3 bg-brand-blue hover:bg-brand-blueDark text-white font-bold py-5 px-12 rounded-full transition-all text-2xl shadow-cta hover:shadow-cta-hover">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            Call Now: (416) 245-7474
          </a>
        </div>
      </section>

      {/* ── Trust strip ── */}
      <section className="bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4">
          {[
            { s: 'From $167', l: 'Transparent Repair Pricing' },
            { s: '~1 Hour', l: 'For Simple Repairs' },
            { s: 'On-Site Lab', l: 'Nothing Shipped Out' },
            { s: 'No Referral', l: 'Just Call First' },
          ].map((it, i) => (
            <div key={i} className={`flex flex-col items-center justify-center py-8 px-4 text-center ${i < 3 ? 'md:border-r border-brand-border' : ''}`}>
              <div className="text-2xl md:text-3xl font-bold text-brand-blue mb-1">{it.s}</div>
              <div className="text-xs font-bold tracking-widest uppercase text-brand-gray">{it.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── What we fix ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-brand-dark">What We Repair — Same Day</h2>
            <p className="text-lg text-brand-gray mt-4 max-w-3xl mx-auto">All work is done in our own North York lab by our denture technicians. No outsourcing, no waiting weeks, no inflated third-party fees.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {repairs.map((r) => (
              <div key={r.n} className="flex gap-5 p-8 rounded-2xl border border-brand-border bg-brand-ice/40">
                <div className="w-12 h-12 rounded-xl bg-brand-blue/10 text-brand-blue font-bold flex items-center justify-center flex-shrink-0">{r.n}</div>
                <div>
                  <h3 className="text-xl font-bold text-brand-dark mb-2">{r.title}</h3>
                  <p className="text-brand-gray leading-relaxed">{r.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What to do right now ── */}
      <section className="py-20 bg-brand-ice">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">Broke It? Do This — and <span className="text-brand-blue">Don&apos;t Do That.</span></h2>
            <div className="space-y-5">
              <div>
                <p className="font-bold text-brand-dark mb-2">✅ Do:</p>
                <ul className="space-y-2 text-brand-gray">
                  <li className="flex items-start gap-2"><span className="text-brand-blue font-bold mt-0.5">•</span> Stop wearing the broken piece — a sharp edge can cut your gums.</li>
                  <li className="flex items-start gap-2"><span className="text-brand-blue font-bold mt-0.5">•</span> Save <strong>every</strong> fragment, even tiny chips and any loose teeth, in a bag.</li>
                  <li className="flex items-start gap-2"><span className="text-brand-blue font-bold mt-0.5">•</span> Call us — we&apos;ll screen the damage and tell you if it&apos;s a same-day fix.</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-brand-dark mb-2">🚫 Don&apos;t:</p>
                <ul className="space-y-2 text-brand-gray">
                  <li className="flex items-start gap-2"><span className="text-red-500 font-bold mt-0.5">•</span> <strong>Never use super glue or household glue.</strong> It&apos;s toxic, warps the fit, and can wreck an easily-repairable denture.</li>
                  <li className="flex items-start gap-2"><span className="text-red-500 font-bold mt-0.5">•</span> Don&apos;t file down sharp edges yourself — you&apos;ll change the bite.</li>
                  <li className="flex items-start gap-2"><span className="text-red-500 font-bold mt-0.5">•</span> Don&apos;t keep wearing a cracked denture "just for today." Hairline cracks become full breaks fast.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-card-hover ring-1 ring-brand-border">
            <Image src="/broken-denture-repair.png" alt="Broken acrylic denture being repaired in our North York on-site lab" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* ── The bigger picture (funnel) ── */}
      <section className="py-20 bg-brand-dark text-white relative overflow-hidden">
        <div className="orb w-[500px] h-[500px] bg-brand-blue/10 -top-32 -right-40" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="pill-badge border-brand-blue/30 bg-brand-blue/12 text-brand-blue mb-5 inline-flex">While You&apos;re Here</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">A repair is also the perfect time for an honest checkup</h2>
          <p className="text-lg text-white/70 leading-relaxed mb-6">
            A denture that breaks is often a denture that&apos;s worn out, ill-fitting, or years past its best. We&apos;ll fix what you came in for — and, if you want, take two minutes to tell you honestly whether a new{' '}
            <Link href={`/${locale}/digital-dentures`} className="text-brand-blueLight underline underline-offset-2">precision digital denture</Link> or a snap-in{' '}
            <Link href={`/${locale}/denture-services/implant-retained-overdentures-toronto`} className="text-brand-blueLight underline underline-offset-2">implant-retained overdenture</Link> would serve you better. No pressure — just information, from a specialist who&apos;s seen it all.
          </p>
          <a href="tel:416-245-7474" className="inline-flex items-center gap-2 text-white font-bold hover:text-brand-blueLight transition-colors">
            Call to book your repair → (416) 245-7474
          </a>
        </div>
      </section>

      {/* ── Denturist vs dentist ── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-brand-dark mb-5">Why a denturist — not a dentist — for a denture repair</h2>
          <p className="text-lg text-brand-gray leading-relaxed">
            A denturist is <strong>the specialist</strong> for dentures. Designing, building, and repairing them is our entire focus — every day, all day, in our own lab. A general dentist sends the appliance out to a lab and you wait. We do it in-house, which is exactly why we&apos;re faster, more precise, and more affordable on denture-specific work.
          </p>
        </div>
      </section>

      {/* ── Safety / scope ── */}
      <section className="py-12 bg-amber-50 border-y border-amber-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex items-start gap-4">
          <span className="text-2xl">⚠️</span>
          <p className="text-amber-900 leading-relaxed">
            <strong>A note on true medical emergencies:</strong> we repair the appliance, not the mouth. If you have significant facial trauma, uncontrolled bleeding, a serious infection, or severe swelling, please go to a hospital emergency room or an emergency dentist first — then come see us for the denture.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-brand-ice">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-brand-dark text-center mb-12">Emergency Repair Questions</h2>
          <div className="space-y-5">
            {faqs.map((f) => (
              <div key={f.q} className="bg-white rounded-2xl border border-brand-border p-6">
                <h3 className="font-bold text-brand-dark mb-2">{f.q}</h3>
                <p className="text-brand-gray leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Areas + CTA ── */}
      <section className="py-16 bg-white border-t border-brand-border text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Fast denture repair for North York &amp; the west GTA</h2>
          <p className="text-brand-gray max-w-2xl mx-auto mb-6">We&apos;re at <Link href={`/${locale}/locations`} className="text-brand-blue font-semibold hover:underline">2833 Weston Road, North York</Link> — quick to reach from:</p>
          <div className="flex flex-wrap justify-center gap-2.5 mb-10">
            {['North York', 'Etobicoke', 'Weston', 'York', 'Jane & Finch', 'Rexdale', 'Humber Summit', 'Emery', 'Downsview', 'Woodbridge', 'Vaughan'].map((a) => (
              <span key={a} className="px-4 py-1.5 rounded-full bg-brand-ice border border-brand-border text-sm font-medium text-brand-dark">{a}</span>
            ))}
          </div>
          <a href="tel:416-245-7474" className="btn-shimmer inline-flex items-center gap-3 bg-brand-blue hover:bg-brand-blueDark text-white font-bold py-4 px-10 rounded-full transition-all text-xl shadow-cta hover:shadow-cta-hover">
            Call (416) 245-7474 for Same-Day Repair
          </a>
        </div>
      </section>
    </div>
  );
}
