"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

const fadeUp = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } };
const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12 } } };

const differences = [
  {
    traditional: 'Messy impression goop that triggers your gag reflex',
    digital: 'Intraoral scanner — 30 seconds, zero discomfort',
    icon: '🦷',
  },
  {
    traditional: 'Outsourced to a third-party lab — weeks of waiting',
    digital: 'Fabricated in our North York lab by Luisa RDT',
    icon: '🏭',
  },
  {
    traditional: 'Hand-packed acrylic — shrinks as it cures, never perfectly even',
    digital: 'CNC-milled from a solid puck — micron-level precision',
    icon: '⚙️',
  },
  {
    traditional: 'Adjust, adjust, adjust — multiple trips back',
    digital: 'Designed digitally, fits right the first time',
    icon: '✓',
  },
];

const whyCards = [
  {
    title: 'No Goop. Ever.',
    desc: 'Our intraoral scanner takes thousands of images per second to map your mouth precisely. No trays, no gagging, no mess. Just a wand that runs along your teeth for 30 seconds.',
    img: '/digital-vs-traditional.png',
    imgAlt: 'Traditional goop vs digital intraoral scanner',
  },
  {
    title: 'Milled Right Here.',
    desc: 'Your digital design goes directly to the CNC mill in our North York lab. Luisa RDT oversees fabrication personally. We do not ship your mouth to a stranger.',
    img: '/cnc-milling-lab.png',
    imgAlt: 'CNC milling machine fabricating a denture in-house',
  },
];

const specs = [
  { label: 'Fit accuracy', value: '±0.02mm', sub: 'vs ~0.5mm hand-packed' },
  { label: 'Turnaround', value: '2–3 wks', sub: 'From scan to delivery' },
  { label: 'Material', value: 'PMMA Puck', sub: 'High-density milled acrylic' },
  { label: 'Method', value: 'CNC Only', sub: 'No 3D printing — ever' },
];

export default function DigitalDenturesPage() {
  const locale = useLocale();

  return (
    <div className="w-full font-sans">

      {/* ── Hero ── */}
      <section className="relative pt-24 pb-0 min-h-[85vh] flex items-center bg-brand-dark overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/digital-denture-hero.png"
            alt="Premium CNC-milled digital denture — Dentures Direct Toronto"
            fill
            className="object-cover object-center opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/85 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.span variants={fadeUp} className="inline-flex items-center gap-2 bg-brand-blue/20 border border-brand-blue/40 rounded-full px-4 py-1.5 text-brand-blue text-sm font-semibold mb-6">
                Premium Service
              </motion.span>
              <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] mb-6">
                The{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-blue-300">
                  No-Goop
                </span>
                <br />Denture.
              </motion.h1>
              <motion.p variants={fadeUp} className="text-xl text-gray-300 mb-8 leading-relaxed max-w-lg">
                Intraoral scan. CNC-milled in our North York lab by a Registered Denture Technician. Fits right the first time. No goop, no outsourcing, no waiting weeks for someone else&apos;s lab.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:416-245-7474"
                  className="inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-200 shadow-2xl shadow-brand-blue/30"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Book a Free Scan — (416) 245-7474
                </a>
                <a
                  href="#difference"
                  className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-200"
                >
                  See the Difference
                </a>
              </motion.div>
            </motion.div>

            {/* Right: Specs card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:block"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[2rem] p-8">
                <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-6">Technical Specifications</p>
                <div className="grid grid-cols-2 gap-4">
                  {specs.map(s => (
                    <div key={s.label} className="bg-white/5 border border-white/10 rounded-2xl p-5">
                      <p className="text-3xl font-black text-brand-blue mb-1">{s.value}</p>
                      <p className="text-white font-semibold text-sm">{s.label}</p>
                      <p className="text-white/40 text-xs mt-1">{s.sub}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4">
                  <span className="text-2xl">🏅</span>
                  <p className="text-emerald-300 text-sm font-semibold">Luisa Gomez RDT oversees every fabrication — fewer than 5% of clinics have an RDT on staff.</p>
                </div>
                <div className="mt-4 flex items-center gap-3 bg-amber-500/10 border border-amber-500/20 rounded-xl p-4">
                  <span className="text-2xl">⚠️</span>
                  <p className="text-amber-200 text-sm font-semibold">We don&apos;t 3D print. In our experience, 3D-printed dentures are brittle, stain faster, and don&apos;t last. CNC milling is the better answer.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Before/After Table ── */}
      <section id="difference" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-dark mb-4">Traditional vs. Digital</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Most clinics still do it the old way. Here&apos;s what that costs you.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-4">
            {/* Header */}
            <div className="grid grid-cols-[auto_1fr_1fr] gap-4 px-4">
              <div className="w-10" />
              <div className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest">Traditional</div>
              <div className="text-center text-sm font-bold text-brand-blue uppercase tracking-widest">Digital (Us)</div>
            </div>
            {differences.map((row, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="grid grid-cols-[auto_1fr_1fr] gap-4 items-center bg-[#f8fafc] rounded-2xl p-4 border border-gray-100"
              >
                <span className="text-2xl w-10 text-center">{row.icon}</span>
                <div className="flex items-center gap-3 bg-red-50 rounded-xl px-4 py-3">
                  <span className="text-red-400 font-bold shrink-0">✗</span>
                  <p className="text-gray-600 text-sm leading-snug">{row.traditional}</p>
                </div>
                <div className="flex items-center gap-3 bg-emerald-50 rounded-xl px-4 py-3">
                  <span className="text-emerald-500 font-bold shrink-0">✓</span>
                  <p className="text-emerald-800 text-sm font-medium leading-snug">{row.digital}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── How We Do It ── */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-dark mb-4">How We Do It</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Two technologies that changed everything about how dentures are made.</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10">
            {whyCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={fadeUp}
                className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <Image src={card.img} alt={card.imgAlt} fill className="object-cover" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-brand-dark mb-3">{card.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Results Gallery ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-dark mb-4">The Results</h2>
            <p className="text-lg text-gray-600">Before &amp; after — actual patients from our North York clinic.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { before: '/digital-dentures-before-treatment-toronto.jpg', after: '/digital-dentures-after-treatment-toronto.jpg' },
              { before: '/gallery-1-before.jpg', after: '/gallery-1-after.jpg' },
            ].map((pair, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="grid grid-cols-2 gap-3"
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md">
                  <Image src={pair.before} alt="Before digital dentures" fill className="object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-center py-2 text-xs font-bold uppercase tracking-widest">Before</div>
                </div>
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md ring-2 ring-brand-blue/50">
                  <Image src={pair.after} alt="After digital dentures" fill className="object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-brand-blue text-white text-center py-2 text-xs font-bold uppercase tracking-widest">After</div>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-6">Actual patients from Dentures Direct, North York Toronto. Individual results may vary.</p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-gradient-to-br from-brand-blue to-blue-700 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-5xl font-extrabold mb-6 leading-tight">
              Ready to Try<br />the Better Way?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-xl mb-10 text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Book a free consultation. We&apos;ll show you the intraoral scanner, walk you through the process, and give you a full quote — no pressure, no cost.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:416-245-7474"
                className="inline-flex items-center justify-center gap-2 bg-white text-brand-dark font-bold py-5 px-12 rounded-full text-xl hover:bg-blue-50 transition-all duration-200 shadow-2xl"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call (416) 245-7474
              </a>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center border border-white/40 hover:border-white text-white font-semibold py-5 px-12 rounded-full text-xl transition-all duration-200"
              >
                Book Online
              </Link>
            </motion.div>
            <motion.p variants={fadeUp} className="text-sm text-blue-200 mt-6">
              2833 Weston Road, North York, Toronto · (416) 245-7474
            </motion.p>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
