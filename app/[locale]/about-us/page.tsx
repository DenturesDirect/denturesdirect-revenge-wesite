"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function AboutUsPage() {
  const locale = useLocale();

  return (
    <div className="w-full overflow-hidden font-sans">

      {/* ════════════════════════════════════════════════════
          HERO — dark gradient with team photo
      ════════════════════════════════════════════════════ */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden bg-gradient-hero pt-20 pb-24">
        {/* Ambient orbs */}
        <div className="orb w-[600px] h-[600px] bg-brand-blue/20 -top-32 -right-48 animate-orb" />
        <div className="orb orb-slow w-[400px] h-[400px] bg-brand-blue/10 bottom-0 left-0 animate-orb-slow" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl mx-auto"
          >
            {/* ── Text ── */}
            <div className="text-center space-y-8 flex flex-col items-center">
              <motion.div variants={fadeUp}>
                <span className="pill-badge border-white/20 bg-white/10 text-white inline-flex">
                  <svg className="w-3 h-3 mr-1.5 text-brand-blue" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  North York · Toronto
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-5xl md:text-[3.75rem] xl:text-7xl font-bold leading-[1.08] tracking-tight text-white"
              >
                The Team Behind{' '}
                <span className="block font-display italic gradient-text-light mt-1">
                  Your New Smile
                </span>
              </motion.h1>

              <motion.p variants={fadeUp} className="text-lg md:text-xl text-white/65 max-w-xl leading-relaxed font-light">
                25+ years of clinical expertise. An in-house lab. A credentialled team that obsesses over fit, function, and finish. This is Dentures Direct.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row flex-wrap gap-4 pt-2 justify-center">
                <Link
                  href={`/${locale}/contact`}
                  className="btn-shimmer inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-blue hover:bg-brand-blueDark text-white font-semibold rounded-full transition-all duration-300 shadow-cta hover:shadow-cta-hover hover:-translate-y-0.5"
                >
                  Book a Free Consultation
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Link>
                <a
                  href="tel:416-245-7474"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/8 border border-white/25 text-white font-semibold rounded-full hover:bg-white/15 hover:border-white/40 transition-all duration-300 hover:-translate-y-0.5 backdrop-blur-sm"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  (416) 245-7474
                </a>
              </motion.div>
            </div>

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
              { stat: '25+', label: 'Years in Practice', icon: '🏆' },
              { stat: 'In-House', label: 'CNC Milling Lab', icon: '🔬' },
              { stat: 'RDT', label: 'Candidate on Staff', icon: '📋' },
              { stat: '5,000+', label: 'Smiles Restored', icon: '😊' },
            ].map((item, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${i + 1} flex flex-col items-center justify-center py-10 px-6 text-center ${i < 3 ? 'md:border-r border-brand-border' : ''} ${i >= 2 ? 'border-t md:border-t-0 border-brand-border' : ''} group hover:bg-brand-light/50 transition-colors duration-200`}
              >
                <div className="text-3xl mb-1">{item.icon}</div>
                <div className="text-2xl font-bold text-brand-blue mb-1 group-hover:scale-105 transition-transform duration-200">
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
          DAMIEN — FOUNDER
      ════════════════════════════════════════════════════ */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* Image */}
            <div className="reveal relative order-last lg:order-first">
              <div className="relative aspect-[4/5] rounded-5xl overflow-hidden shadow-card-hover">
                <Image
                  src="/damien-new.jpg"
                  alt="Damien John Hiorth DD — Founder and lead denturist at Dentures Direct, North York Toronto"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              {/* Floating credential card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -right-6 top-16 glass rounded-2xl p-5 z-20 min-w-[190px] hidden lg:block"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs font-semibold text-brand-gray uppercase tracking-wider">Accepting Patients</span>
                </div>
                <div className="text-xl font-bold text-brand-blue">Implant</div>
                <div className="text-xs text-brand-gray mt-0.5">Overdenture Specialist</div>
              </motion.div>

              {/* Years badge */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                className="absolute -left-6 bottom-24 glass rounded-2xl p-5 z-20 min-w-[150px] hidden lg:block"
              >
                <div className="text-3xl font-bold text-brand-dark leading-none">25+</div>
                <div className="text-xs font-medium text-brand-gray mt-1">Years Clinical<br />Experience</div>
              </motion.div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div className="reveal">
                <span className="pill-badge mb-4 inline-flex">Lead Denturist</span>
                <h2 className="text-4xl md:text-5xl font-bold text-brand-dark leading-tight mt-3">
                  Damien John{' '}
                  <span className="block font-display italic text-brand-blue mt-1">Hiorth DD</span>
                </h2>
              </div>

              <div className="reveal reveal-delay-1 space-y-5 text-brand-gray leading-relaxed text-lg">
                <p>
                  Damien is the founder and lead denturist at Dentures Direct. He has spent over two decades mastering his craft — but made a deliberate pivot to focus exclusively on <strong className="text-brand-dark">implant-retained overdentures and premium digital dentures</strong>. Because he believes that's where the real difference is made.
                </p>
                <p>
                  He was a Clinical Professor at Oxford College and Georgian College, has served on committees at the College of Denturists of Ontario, and built his own AI-powered practice management software — <a href="https://www.dentureflowpro.com" target="_blank" rel="noopener noreferrer" className="text-brand-blue font-semibold hover:text-brand-blueDark transition-colors">DentureFlowPro.com</a> — from scratch.
                </p>
                <p>
                  His philosophy is direct: <em className="text-brand-dark font-medium">"The lower denture problem is physics."</em> Implants solve the physics. Everything else is just compromise.
                </p>
              </div>

              <div className="reveal reveal-delay-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Implant-Retained Overdentures',
                  'Premium Digital Dentures',
                  'Intraoral Scanning & CNC Milling',
                  'Rescue & Rebuild Cases',
                  'Former Clinical Professor',
                  'College of Denturists Committee',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckIcon />
                    <span className="text-brand-gray text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="reveal reveal-delay-3">
                <Link
                  href={`/${locale}/implant-overdentures`}
                  className="inline-flex items-center gap-2 text-brand-blue font-bold hover:gap-4 transition-all duration-300 group"
                >
                  Explore implant overdentures
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
          THE PIVOT STORY — Christmas Morning (Video)
      ════════════════════════════════════════════════════ */}
      <section className="py-28 bg-brand-dark text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-12">
              <span className="inline-flex items-center gap-2 text-brand-blue font-bold uppercase tracking-widest text-sm mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                December 24th — The Pivot
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                The call that changed{' '}
                <span className="font-display italic text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-blue-300">
                  everything.
                </span>
              </h2>
              <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
                Damien tells the story of the Christmas Eve call he almost didn&apos;t take — and why it made him rebuild this clinic from the ground up.{' '}
                <Link href={`/${locale}`} className="text-brand-blueLight font-semibold hover:text-white transition-colors">Read the full story →</Link>
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex justify-center">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 max-w-xl w-full">
                <div className="w-10 h-1 bg-brand-blue rounded mb-6" />
                <p className="text-2xl font-bold text-white leading-snug mb-4">
                  &ldquo;You have no idea what you&apos;ve done for our family.&rdquo;
                </p>
                <p className="text-gray-400 text-sm">— A daughter, Boxing Day</p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          LUISA — HEAD TECHNICIAN
      ════════════════════════════════════════════════════ */}
      <section className="py-28 bg-brand-ice">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* Content */}
            <div className="space-y-8">
              <div className="reveal">
                <span className="pill-badge mb-4 inline-flex">Head Denture Technician</span>
                <h2 className="text-4xl md:text-5xl font-bold text-brand-dark leading-tight mt-3">
                  Luisa{' '}
                  <span className="block font-display italic text-brand-blue mt-1">Gomez</span>
                </h2>
              </div>

              {/* RDT Candidate badge — prominent, animated */}
              <div className="reveal reveal-delay-1">
                <div className="inline-flex items-center gap-4 bg-white border-2 border-amber-400 rounded-2xl px-6 py-4 shadow-card">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📋</span>
                  </div>
                  <div>
                    <p className="text-amber-900 font-bold text-sm leading-snug">RDT Candidate — Writing Fall 2026</p>
                    <p className="text-amber-700 text-xs mt-0.5 leading-snug">
                      Less than 5% of Canadian clinics have a Registered Denture Technician on staff.
                    </p>
                  </div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulseBlue flex-shrink-0" />
                </div>
              </div>

              <div className="reveal reveal-delay-2 space-y-5 text-brand-gray leading-relaxed text-lg">
                <p>
                  Luisa is a graduate of <strong className="text-brand-dark">George Brown College's Dental Technology program</strong> and runs our in-house laboratory with the kind of precision that clinical work demands. She oversees fabrication of every denture that leaves this clinic.
                </p>
                <p>
                  Her hands-on expertise spans the full spectrum — acrylic and flexible partials, digital complete dentures, and implant-retained prosthetics. When your denture fits right, Luisa built it.
                </p>
                <p>
                  She is currently preparing to write her <strong className="text-brand-dark">Registered Denture Technician (RDT)</strong> licensing exam — a credential held by technicians at fewer than 5% of Canadian dental clinics. When she achieves it, Dentures Direct will be one of a handful of clinics in Toronto with a credentialled RDT on the bench.
                </p>
              </div>

              <div className="reveal reveal-delay-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'George Brown College Graduate',
                  'RDT Licensing Candidate',
                  'Full-Spectrum Lab Fabrication',
                  'Implant Prosthetic Expertise',
                  'Acrylic & Flexible Partials',
                  'CNC Milling & Digital Workflow',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckIcon />
                    <span className="text-brand-gray text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="reveal relative order-first lg:order-last">
              <div className="relative aspect-[4/5] rounded-5xl overflow-hidden shadow-card-hover">
                <Image
                  src="/luisa-new.jpg"
                  alt="Luisa Gomez — Head Denture Technician and RDT Candidate at Dentures Direct, North York Toronto"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              {/* Lab badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -left-6 top-20 glass rounded-2xl p-4 z-20 min-w-[170px] hidden lg:block"
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  <span className="text-xs font-semibold text-brand-gray uppercase tracking-wider">In-House Lab</span>
                </div>
                <div className="text-lg font-bold text-brand-dark">Every Piece.</div>
                <div className="text-xs text-brand-gray mt-0.5">Fabricated on-site</div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          CAROLINE — PATIENT EXPERIENCE
      ════════════════════════════════════════════════════ */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* Image */}
            <div className="reveal relative order-last lg:order-first">
              <div className="relative aspect-[4/5] rounded-5xl overflow-hidden shadow-card-hover">
                <Image
                  src="/dentures-direct-caroline.jpg"
                  alt="Caroline Brunelle — Patient Experience Coordinator at Dentures Direct Toronto"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                className="absolute -right-6 bottom-20 glass rounded-2xl p-4 z-20 min-w-[170px] hidden lg:block"
              >
                <div className="text-lg font-bold text-brand-dark">Welcoming.</div>
                <div className="text-xs text-brand-gray mt-1 leading-snug">No question goes unanswered</div>
              </motion.div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div className="reveal">
                <span className="pill-badge mb-4 inline-flex">Patient Experience</span>
                <h2 className="text-4xl md:text-5xl font-bold text-brand-dark leading-tight mt-3">
                  Caroline{' '}
                  <span className="block font-display italic text-brand-blue mt-1">Brunelle</span>
                </h2>
              </div>

              <div className="reveal reveal-delay-1 space-y-5 text-brand-gray leading-relaxed text-lg">
                <p>
                  Caroline is the welcoming face of Dentures Direct. From the moment you walk through our door — whether you're exploring options for the first time or returning for a follow-up — she ensures you feel genuinely heard and at ease.
                </p>
                <p>
                  She has a gift for putting nervous patients at ease and making sure no question goes unanswered. Her background in Chemistry gives her a natural curiosity and attention to detail that translates beautifully into patient care.
                </p>
              </div>

              <div className="reveal reveal-delay-2">
                <div className="card-gradient-border p-6">
                  <div className="w-8 h-0.5 bg-brand-blue rounded mb-4" />
                  <p className="text-brand-gray italic leading-relaxed">
                    "Every patient who comes to us deserves to feel like a priority — not a number. That starts from the very first phone call."
                  </p>
                  <p className="text-brand-blue font-semibold text-sm mt-3">— Caroline Brunelle</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          WHY CHOOSE US — 3 cards
      ════════════════════════════════════════════════════ */}
      <section className="py-28 bg-brand-ice">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal text-center mb-16">
            <span className="pill-badge mb-4 inline-flex">Why Patients Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark leading-tight mt-3">
              Built different.{' '}
              <span className="font-display italic text-brand-blue">By design.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                ),
                title: 'Digital & Implant Specialists',
                body: 'We focus exclusively on digital dentures and implant-retained prosthetics. Intraoral scanning, in-house CNC milling, precision implant prosthetics — built around the technology that delivers results traditional methods simply can\'t match.',
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                ),
                title: 'Referred by Dentists & Patients',
                body: 'Most of our patients come through referrals — from their own dentists and from friends and family who have experienced our work firsthand. That kind of trust isn\'t advertised. It\'s earned one smile at a time.',
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                ),
                title: 'CDCP Accepted — With Honesty',
                body: 'We work with patients covered under the Canadian Dental Care Plan. But we\'ll be upfront — the precision and craftsmanship we deliver goes well beyond what the CDCP fee schedule covers. Most patients see the difference and choose to upgrade. We\'re happy to walk you through exactly what that means.',
              },
            ].map((card, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${i + 1} bg-white p-10 rounded-4xl border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="w-14 h-14 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue mb-6">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-4">{card.title}</h3>
                <p className="text-brand-gray leading-relaxed text-base">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          DIGITAL SCAN ATMOSPHERE STRIP
      ════════════════════════════════════════════════════ */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src="/digital-scan.png"
          alt="Digital intraoral scanning at Dentures Direct — impression-free denture technology in North York Toronto"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-brand-dark/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4 max-w-2xl">
            <p className="text-white text-2xl md:text-3xl font-bold leading-tight">
              No trays. No goop. No guesswork.{' '}
              <span className="font-display italic text-brand-blueLight">Just a 3D scan.</span>
            </p>
            <p className="text-white/60 mt-3 text-base">Impression-free digital workflows from day one.</p>
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
              Ready to solve the{' '}
              <span className="font-display italic gradient-text-light">lower denture problem?</span>
            </h2>
            <p className="text-white/60 mb-8 text-lg leading-relaxed">
              Book a free consultation. We accept the Canadian Dental Care Plan (CDCP), offer flexible financing, and serve patients across North York, Etobicoke, Weston, Humber Summit, and the GTA.
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
          </div>
        </div>
      </section>

    </div>
  );
}
