"use client";

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.13 } }
};

function StarIcon() {
  return (
    <svg className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function HomePage() {
  const locale = useLocale();

  return (
    <div className="w-full overflow-hidden font-sans">

      {/* ════════════════════════════════════════════════════
          HERO — Implant Specialist Positioning
      ════════════════════════════════════════════════════ */}
      <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-gradient-hero pt-8 pb-28">
        {/* Ambient orbs */}
        <div className="orb w-[700px] h-[700px] bg-brand-blue/15 -top-48 -right-64 animate-orb" />
        <div className="orb orb-slow w-[500px] h-[500px] bg-brand-blue/08 bottom-0 -left-32 animate-orb-slow" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            {/* ── Left Content ── */}
            <div className="text-left space-y-8">
              <motion.div variants={fadeUp}>
                <span className="inline-flex items-center gap-2 pill-badge border-brand-blue/30 bg-brand-blue/12 text-brand-blue">
                  <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
                  Toronto&apos;s Implant Denture Specialist · 25 Years
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-5xl md:text-[3.6rem] xl:text-[4.25rem] font-bold leading-[1.06] tracking-tight text-white"
              >
                Your Denture Should
                <span className="block font-display italic gradient-text-light mt-1">
                  Stay Where It Belongs.
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-lg md:text-xl text-white/65 max-w-xl leading-relaxed font-light"
              >
                Snap-in implant overdentures that never move — and precision digital dentures, full or partial, milled in our own North York lab. Designed by Damien DD. No outsourcing. No referrals out. No compromises.
              </motion.p>

              {/* Benefit bullets */}
              <motion.ul variants={fadeUp} className="space-y-2.5 text-white/80 text-base">
                {[
                  'Implant overdentures — $5,250 flat per arch, no adhesive',
                  'Digital full & partial dentures — precision-milled in-house',
                  'Impression-free 3D intraoral scanning',
                  'CNC milled in our own on-site lab — zero outsourcing',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </motion.ul>

              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row flex-wrap gap-4 pt-2">
                <Link
                  href={`/${locale}/implant-overdentures`}
                  className="btn-shimmer inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-blue hover:bg-brand-blueDark text-white font-semibold rounded-full transition-all duration-300 shadow-cta hover:shadow-cta-hover hover:-translate-y-0.5"
                >
                  See Implant Options
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Link>

                <Link
                  href={`/${locale}/digital-dentures`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/8 border border-white/25 text-white font-semibold rounded-full hover:bg-white/15 hover:border-white/40 transition-all duration-300 hover:-translate-y-0.5 backdrop-blur-sm"
                >
                  Digital Dentures
                </Link>

                <a
                  href="tel:416-245-7474"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/8 border border-white/25 text-white font-semibold rounded-full hover:bg-white/15 hover:border-white/40 transition-all duration-300 hover:-translate-y-0.5 backdrop-blur-sm"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  (416) 245-7474
                </a>
              </motion.div>

              {/* Trust indicators */}
              <motion.div variants={fadeUp} className="flex items-center gap-6 pt-2">
                <div className="flex -space-x-2">
                  {['damien-new.jpg', 'luisa-new.jpg', 'dentures-direct-caroline.jpg'].map((img, i) => (
                    <div key={i} className="w-9 h-9 rounded-full border-2 border-brand-dark overflow-hidden ring-1 ring-white/20">
                      <Image src={`/${img}`} alt="Team member" width={36} height={36} className="object-cover" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5 mb-0.5">{[...Array(5)].map((_, i) => <StarIcon key={i} />)}</div>
                  <p className="text-white/50 text-xs font-medium">Trusted by 5,000+ Toronto patients</p>
                </div>
              </motion.div>
            </div>

            {/* ── Right Visual ── */}
            <motion.div variants={fadeUp} className="relative h-full min-h-[580px] hidden lg:block">
              <div className="absolute inset-0 bg-white/6 backdrop-blur-sm border border-white/15 rounded-3xl rotate-1 shadow-2xl overflow-hidden">
                <div className="relative w-full h-full">
                  <Image
                    src="/implant-landing-hero.png"
                    alt="Implant denture patient — confident smile at Dentures Direct Toronto"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                  <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-brand-dark/50 to-transparent" />
                </div>
              </div>

              {/* Stat card — top left */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-10 top-20 glass rounded-2xl p-5 z-20 min-w-[175px]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-blue/15 flex items-center justify-center">
                    <svg className="w-5 h-5 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-brand-dark leading-none">100%</div>
                    <div className="text-xs font-medium text-brand-gray mt-0.5">In-House Lab</div>
                  </div>
                </div>
              </motion.div>

              {/* Snap-in card — bottom right */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -right-8 bottom-16 glass rounded-2xl p-5 z-20 min-w-[200px]"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs font-semibold text-brand-gray uppercase tracking-wider">Snap-In Secure</span>
                </div>
                <div className="text-xl font-bold text-brand-blue">Zero Adhesive</div>
                <div className="text-xs text-brand-gray mt-1">Implant-retained · Upper & Lower</div>
              </motion.div>

              {/* Price flag — mid right */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                className="absolute -right-6 top-40 glass rounded-2xl px-4 py-3 z-20"
              >
                <div className="text-xs text-brand-gray font-medium mb-0.5">Implant Overdenture</div>
                <div className="text-xl font-bold text-brand-dark">$5,250 <span className="text-sm font-normal text-brand-gray">flat / arch</span></div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          TRUST STATS STRIP
      ════════════════════════════════════════════════════ */}
      <section className="bg-white border-y border-brand-border py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { stat: '$5,250', label: 'Implant Overdenture — Flat / Arch' },
              { stat: '25+', label: 'Years of Implant Denture Experience' },
              { stat: '100%', label: 'Impression-Free — No Goop Ever' },
              { stat: 'In-House', label: 'CNC Milling — Never Outsourced' },
            ].map((item, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${i + 1} flex flex-col items-center justify-center py-10 px-6 text-center ${i < 3 ? 'md:border-r border-brand-border' : ''} ${i >= 2 ? 'border-t md:border-t-0 border-brand-border' : ''} group hover:bg-brand-light/50 transition-colors duration-200`}
              >
                <div className="text-3xl font-bold text-brand-blue mb-1 group-hover:scale-105 transition-transform duration-200">
                  {item.stat}
                </div>
                <div className="text-xs font-bold tracking-widest uppercase text-brand-gray">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          PROBLEM → SOLUTION SECTION
      ════════════════════════════════════════════════════ */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* Left: Image */}
            <div className="reveal relative aspect-square rounded-[2rem] overflow-hidden shadow-card-hover order-last lg:order-first">
              <Image
                src="/dancing-senior-couple.png"
                alt="Senior couple dancing freely — life after implant overdentures at Dentures Direct Toronto"
                fill
                className="object-cover"
              />
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 glass rounded-2xl px-5 py-4">
                <div className="flex gap-0.5 mb-1">{[...Array(5)].map((_, i) => <StarIcon key={i} />)}</div>
                <p className="text-sm font-bold text-brand-dark">&ldquo;I forgot I was wearing dentures.&rdquo;</p>
                <p className="text-xs text-brand-gray mt-0.5">— Dentures Direct patient</p>
              </div>
            </div>

            {/* Right: Content */}
            <div className="space-y-8">
              <div className="reveal">
                <span className="pill-badge mb-4 inline-flex">Implant-Retained Overdentures</span>
                <h2 className="text-4xl md:text-5xl font-bold text-brand-dark leading-tight mt-3">
                  Done fighting
                  <span className="block font-display italic text-brand-blue mt-1">
                    your own denture?
                  </span>
                </h2>
              </div>

              <div className="reveal reveal-delay-1 space-y-4 text-brand-gray leading-relaxed">
                <p>
                  If you&apos;re using adhesive every day, avoiding certain foods, or just quietly dreading every meal — that&apos;s not life with dentures, that&apos;s life <em>despite</em> them.
                </p>
                <p>
                  Implant-retained overdentures snap securely onto 2–4 implants. They don&apos;t shift. They don&apos;t float. They don&apos;t click. Patients tell us the same thing within a week: <strong className="text-brand-dark">&ldquo;I forget I&apos;m wearing them.&rdquo;</strong>
                </p>
              </div>

              <div className="reveal reveal-delay-2 grid grid-cols-2 gap-4">
                {[
                  { title: 'No Adhesive. Ever.', body: 'Snaps directly onto your implants. The attachment holds — not glue, not hope.' },
                  { title: 'Eat Without Limits', body: 'Steak, corn, crusty bread — the foods you stopped ordering are back on the menu.' },
                  { title: 'In-House Lab', body: 'Designed by Damien DD. Milled by Luisa, RDT Candidate. No outsourcing. No delays. Direct quality control.' },
                  { title: '$5,250 Flat Per Arch', body: 'No taxes. No surprises. No "and up." Both arches together: $10,000 — save $500.' },
                ].map((card) => (
                  <div key={card.title} className="card-gradient-border p-5">
                    <div className="w-8 h-0.5 bg-brand-blue rounded mb-3" />
                    <h4 className="font-bold text-brand-dark mb-2 text-base">{card.title}</h4>
                    <p className="text-sm text-brand-gray leading-relaxed">{card.body}</p>
                  </div>
                ))}
              </div>

              <div className="reveal reveal-delay-3">
                <Link
                  href={`/${locale}/implant-overdentures`}
                  className="inline-flex items-center gap-2 text-brand-blue font-bold hover:gap-4 transition-all duration-300 group"
                >
                  See how implant overdentures work
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          CHRISTMAS MORNING STORY — THE PIVOT MOMENT
      ════════════════════════════════════════════════════ */}
      <section className="py-28 bg-brand-dark text-white relative overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="orb w-[600px] h-[600px] bg-brand-blue/8 -top-32 -right-48" />
          <div className="orb orb-slow w-[400px] h-[400px] bg-brand-blue/5 bottom-0 -left-24" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Photo */}
            <div className="order-last lg:order-first relative">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10 max-w-md mx-auto lg:mx-0">
                <Image
                  src="/damien-new.jpg"
                  alt="Damien John Hiorth DD — Founder, Dentures Direct Toronto"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/85 via-brand-dark/10 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="font-bold text-2xl text-white">Damien John Hiorth DD</p>
                  <p className="text-brand-blue font-medium mt-1">Founder &amp; Lead Denturist · 25 Years</p>
                </div>
              </div>

              {/* Floating quote card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -right-4 top-12 glass-dark rounded-2xl p-5 max-w-[210px] z-20"
              >
                <div className="text-3xl font-black text-brand-blue mb-1">Flat Rate</div>
                <div className="text-sm text-white/70 leading-snug">per arch — Christmas morning.</div>
                <div className="text-xs text-white/40 mt-2 italic">The moment everything changed.</div>
              </motion.div>
            </div>

            {/* Right: Story */}
            <div className="space-y-6">
              <div className="reveal">
                <span className="pill-badge border-white/20 bg-white/10 text-white mb-4 inline-flex">Why I Changed Everything</span>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-3">
                  The call I almost
                  <span className="block font-display italic text-brand-blue mt-1">didn&apos;t take.</span>
                </h2>
              </div>

              <div className="reveal reveal-delay-1 space-y-5 text-white/70 text-lg leading-relaxed font-light">
                <p>
                  It was December 23rd. I had told my receptionist: <strong className="text-white">no calls, no new patients until the New Year.</strong> I was burnt out. Seven-day work weeks. A practice that had nearly quadrupled in revenue — and somehow I&apos;d never made less.
                </p>
                <p>
                  Then the phone rang. A woman in a panic. Her 96-year-old mother had lost what she believed was an implant denture. She was terrified her mother would starve.
                </p>
                <p>
                  I took the case. Christmas Eve: scans, bite registration. Christmas Day: the mill running in my lab. Boxing Day: delivery. <strong className="text-white">Flat rate per arch. Nine hours. Three days.</strong>
                </p>
                <p>
                  Standing there, I realized something uncomfortable: this was exactly what I&apos;d always wanted to do — and I&apos;d spent years not doing it. High volume. Endless conventional cases. Never the implant work I&apos;d trained for.
                </p>
                <p>
                  That morning I made a promise to myself. <strong className="text-white">This clinic would become what it was always supposed to be:</strong> a specialist implant denture practice. Fewer patients. Higher standards. Work that actually matters.
                </p>
              </div>

              <div className="reveal reveal-delay-2 pt-2">
                <Link
                  href={`/${locale}/about-us`}
                  className="inline-flex items-center gap-2 text-white font-bold hover:text-brand-blue transition-colors duration-300 group"
                >
                  Read Damien&apos;s full story
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          WHAT WE DO — SERVICE TILES
      ════════════════════════════════════════════════════ */}
      <section className="py-28 bg-brand-ice">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <span className="pill-badge mb-4 inline-flex">Our Specialties</span>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark leading-tight mt-3">
              Precision work.
              <span className="block font-display italic text-brand-blue mt-1">Built to last.</span>
            </h2>
            <p className="text-brand-gray text-lg leading-relaxed mt-5">
              Every overdenture I build — I design it personally. Luisa, our RDT Candidate, fabricates it in our lab down the hall. Nobody ships anything out. Nobody waits weeks for a third party.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-7 h-7 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: 'Implant Overdentures',
                body: 'Snap-in upper and lower overdentures anchored to 2–4 implants. The permanent solution to a denture that won\'t stay put.',
                href: `/${locale}/implant-overdentures`,
                badge: 'Most Popular',
                badgeColor: 'bg-brand-blue text-white',
              },
              {
                icon: (
                  <svg className="w-7 h-7 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                title: 'Digital Dentures',
                body: 'No messy impressions. 3D intraoral scan, CAD design, CNC milled on-site. Mathematically precise every time.',
                href: `/${locale}/digital-dentures`,
                badge: 'Impression-Free',
                badgeColor: 'bg-emerald-500 text-white',
              },
              {
                icon: (
                  <svg className="w-7 h-7 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: 'Emergency Repairs',
                body: 'Broken clasp, cracked plate, or a relining that\'s long overdue — same-day repairs done in our on-site lab.',
                href: `/${locale}/denture-services/emergency-denture-repairs`,
                badge: 'Same Day',
                badgeColor: 'bg-amber-500 text-white',
              },
            ].map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link href={service.href} className="group block h-full">
                  <div className="card-premium h-full p-8 flex flex-col gap-5">
                    <div className="flex items-start justify-between">
                      <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 flex items-center justify-center group-hover:bg-brand-blue/20 transition-colors duration-300">
                        {service.icon}
                      </div>
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${service.badgeColor}`}>
                        {service.badge}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-brand-dark mb-2 group-hover:text-brand-blue transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-brand-gray leading-relaxed text-base">{service.body}</p>
                    </div>
                    <div className="mt-auto flex items-center gap-1 text-brand-blue font-semibold text-sm">
                      Learn more
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12 reveal">
            <Link
              href={`/${locale}/denture-services`}
              className="inline-flex items-center gap-2 text-brand-blue font-bold hover:gap-4 transition-all duration-300 group"
            >
              View all services
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          SOCIAL PROOF — REVIEWS
      ════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 reveal">
            <span className="pill-badge mb-4 inline-flex">Patient Stories</span>
            <h2 className="text-4xl font-bold text-brand-dark mt-3">
              Real patients.
              <span className="font-display italic text-brand-blue"> Real results.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "I had been struggling with my lower denture for 15 years. Within a week of getting my implant overdenture at Dentures Direct, I forgot I was wearing it. I cried at my first meal.",
                name: "Margaret T.",
                detail: "Lower implant overdenture, North York",
              },
              {
                quote: "Damien was completely upfront about pricing and process from day one. No surprises, no upselling. Just honest work. The digital fit is better than anything I've had in 20 years of dentures.",
                name: "Robert K.",
                detail: "Digital full dentures, Etobicoke",
              },
              {
                quote: "I already had implants from another clinic and was told it would be complicated to get overdentures made elsewhere. Damien assessed me in one appointment and had them done in 3 weeks. Phenomenal.",
                name: "Sandra M.",
                detail: "Implant overdenture conversion, GTA",
              },
            ].map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="card-premium p-8 flex flex-col gap-5"
              >
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => <StarIcon key={j} />)}
                </div>
                <blockquote className="text-brand-gray leading-relaxed text-base italic flex-grow">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <div>
                  <p className="font-bold text-brand-dark">{review.name}</p>
                  <p className="text-xs text-brand-gray">{review.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          BOTTOM CTA STRIP
      ════════════════════════════════════════════════════ */}
      <section className="py-24 bg-gradient-hero relative overflow-hidden">
        <div className="orb w-96 h-96 bg-brand-blue/25 -top-20 left-1/2 -translate-x-1/2 animate-orb" />
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <div className="reveal">
            <span className="pill-badge border-white/20 bg-white/10 text-white mb-6 inline-flex">Accepting New Patients</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to stop fighting
              <span className="block font-display italic gradient-text-light mt-1">your own denture?</span>
            </h2>
            <p className="text-white/60 mb-8 text-lg leading-relaxed">
              Free consultation. Honest assessment. Clear pricing. No hard sell — if you&apos;re not a candidate, we&apos;ll tell you that too.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/contact`}
                className="btn-shimmer inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-blue hover:bg-brand-blueDark text-white font-semibold rounded-full transition-all duration-300 shadow-cta hover:shadow-cta-hover hover:-translate-y-0.5"
              >
                Book Free Consultation
              </Link>
              <a
                href="tel:416-245-7474"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/8 border border-white/25 text-white font-semibold rounded-full hover:bg-white/15 transition-all duration-300 hover:-translate-y-0.5 backdrop-blur-sm"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                (416) 245-7474
              </a>
            </div>
            <p className="text-white/35 text-sm mt-6">
              2833 Weston Road, North York · Mon–Fri 9am–5pm · Sat by appointment
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
