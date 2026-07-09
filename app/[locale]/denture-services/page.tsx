"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';

const services = [
  {
    slug: 'implant-overdentures',
    route: 'denture-services/implant-retained-overdentures-toronto',
    title: 'Implant-Retained Dentures',
    desc: 'Snaps onto 3–4 implants. Doesn\'t move. No adhesive, no slipping, no anxiety. If you\'ve been fighting a loose lower denture for years — this is the answer.',
    image: '/implant-before-after.png',
    imageAlt: 'Digital implant retained overdenture snap-in system — Dentures Direct North York Toronto',
    tag: 'Our Specialty',
    contain: false,
  },
  {
    slug: 'digital-dentures',
    route: 'digital-dentures',
    title: 'Premium Digital Dentures',
    desc: 'Intraoral scanned. Digitally designed. CNC milled in our lab from solid PMMA. No putty impressions, no outsourcing, no guessing. The most precise denture we can build.',
    image: '/digital-denture-pink-cad.png',
    imageAlt: 'CAD/CAM digital denture design with pink gums — Dentures Direct Toronto',
    tag: 'Most Precise',
    contain: false,
  },
  {
    slug: 'immediate-dentures',
    route: 'denture-services/digital-immediate-dentures-toronto',
    title: 'Digital Immediate Dentures',
    desc: 'Teeth coming out? We fabricate the denture in advance and place it the same day as your extractions. You walk in with failing teeth — you walk out with a smile.',
    image: '/dancing-seniors-smiling.png',
    imageAlt: 'Happy senior couple dancing after digital immediate dentures — Dentures Direct Toronto',
    tag: 'Same Day',
    contain: false,
  },
  {
    slug: 'full-complete-dentures',
    route: 'denture-services/digital-full-dentures-toronto',
    title: 'Digital Complete Full Dentures',
    desc: 'Full upper, full lower, or both. Digitally designed for natural aesthetics and a precise fit. Every set is milled in-house — no external lab, no wait.',
    image: '/happy_seniors_full_dentures.png',
    imageAlt: 'Digital complete full dentures — Dentures Direct North York Toronto',
    tag: null,
    contain: false,
  },
  {
    slug: 'cast-partial-dentures',
    route: 'denture-services/digital-cast-partial-dentures-toronto',
    title: 'Digital Cast Partial Dentures',
    desc: 'Metal framework, precision fit, built to last. If you\'re missing several teeth and want something that won\'t flex or break — cast partials are the gold standard.',
    image: '/castpartial.jpg',
    imageAlt: 'Digital cast metal partial denture — Dentures Direct North York Toronto',
    tag: null,
    contain: true,
  },
  {
    slug: 'flexible-partial-dentures',
    route: 'denture-services/digital-flexible-partial-dentures-toronto',
    title: 'Digital Flexible Partial Dentures',
    desc: 'Metal-free, gum-coloured, virtually invisible. Valplast flexible partials blend in with your natural tissue. No metal clasps — nobody knows you\'re wearing them.',
    image: '/flexible.jpg',
    imageAlt: 'Digital flexible partial denture Valplast — Dentures Direct Toronto',
    tag: 'Most Aesthetic',
    contain: true,
  },
  {
    slug: 'acrylic-partial-dentures',
    route: 'denture-services/digital-acrylic-partial-dentures-toronto',
    title: 'Digital Acrylic Partial Dentures',
    desc: 'The practical, affordable option. Quick to fabricate, easy to modify if you lose more teeth down the road. A smart choice when you\'re not ready for a permanent solution.',
    image: '/acrylic.jpg',
    imageAlt: 'Digital acrylic partial denture — Dentures Direct Toronto',
    tag: 'Most Affordable',
    contain: true,
  },
  {
    slug: 'emergency-denture-repairs',
    route: 'denture-services/emergency-denture-repair-toronto',
    title: 'Emergency Denture Repairs',
    desc: 'Cracked base, broken tooth, lost a tooth off your partial — bring it in. In-house lab means most repairs are done while you wait. No sending out, no week-long waits.',
    image: '/broken.jpg',
    imageAlt: 'Broken denture needing emergency repair — Dentures Direct Toronto',
    tag: 'Same Day',
    contain: true,
  },
  {
    slug: 'fix-bad-denture',
    route: 'fix-bad-denture-toronto',
    title: 'Fix a Bad Denture',
    desc: 'Someone else made it. It doesn\'t fit. We rebuild it. Locator conversions, relines, full digital rebuilds — we fix other clinics\' work every week.',
    image: '/sad-elderly-denture.png',
    imageAlt: 'Fix bad denture Toronto — Dentures Direct',
    tag: 'Rescue',
    contain: false,
  },
];

const fadeUp = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22,1,0.36,1] } } };
const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.10 } } };

export default function ServicesPillar() {
  const locale = useLocale();

  return (
    <div className="w-full font-sans">
      {/* Hero */}
      <section className="relative pt-28 pb-28 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_#1a6cf6_0%,_transparent_60%)]" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-5">
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 bg-brand-blue/20 border border-brand-blue/40 rounded-full px-4 py-1.5 text-brand-blue text-sm font-semibold">
                No Referral Needed · In-House Lab · CDCP Accepted
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
              Every denture we make<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-blue-300">is digital.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Intraoral scanned. Digitally designed. CNC milled in our North York lab. No putty impressions, no outsourcing, no guesswork — from implant overdentures to same-day emergency repairs.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="tel:416-245-7474"
                className="inline-flex items-center gap-2 bg-brand-blue hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-full text-lg transition-all shadow-2xl shadow-brand-blue/30"
              >
                Call (416) 245-7474
              </a>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white font-semibold py-4 px-8 rounded-full text-lg transition-all"
              >
                Book a Free Consultation
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Cards */}
      <section className="py-24 bg-white relative -mt-8 rounded-t-[2.5rem]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Link
                key={s.slug}
                href={`/${locale}/${s.route}`}
                className={`reveal reveal-delay-${(i % 4) + 1} group block bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300`}
              >
                {/* Image header */}
                <div className={`relative h-56 overflow-hidden ${s.contain ? 'bg-white' : 'bg-brand-light'}`}>
                  <Image
                    src={s.image}
                    alt={s.imageAlt}
                    fill
                    className={s.contain
                      ? 'object-contain object-center p-4'
                      : 'object-cover object-center group-hover:scale-105 transition-transform duration-500'
                    }
                  />
                  {!s.contain && (
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent" />
                  )}

                  {/* Icon chip — bottom left */}
                  <div className="absolute bottom-4 left-4 w-11 h-11 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center text-brand-blue shadow-card">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>

                  {/* Tag — top right */}
                  {s.tag && (
                    <span className="absolute top-4 right-4 pill-badge text-[0.65rem]">{s.tag}</span>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-lg font-bold text-brand-dark mb-2 group-hover:text-brand-blue transition-colors duration-200">
                    {s.title}
                  </h2>
                  <p className="text-brand-gray text-sm leading-relaxed mb-4">{s.desc}</p>

                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue">
                    Learn More
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom strip */}
          <div className="reveal mt-16 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-brand-light border border-brand-border rounded-2xl px-8 py-5">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <p className="text-brand-dark font-medium">
                  CDCP-covered services available · Flat rate per arch on implant overdentures
                </p>
              </div>
              <Link
                href={`/${locale}/contact`}
                className="btn-shimmer bg-brand-blue hover:bg-brand-blueDark text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-all duration-300 shadow-cta"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Digital ── */}
      <section className="py-20 bg-brand-dark text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-14">
              <span className="inline-flex items-center gap-2 text-brand-blue font-bold uppercase tracking-widest text-sm mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                Why Digital Matters
              </span>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                The difference is in how it&apos;s made.
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Intraoral scan — no putty',
                  desc: 'A 3D digital impression captures your mouth to sub-millimeter accuracy. No gagging, no distortion, no guesswork at the very first step.',
                },
                {
                  title: 'CNC milled — not 3D printed',
                  desc: 'Carved from a solid medical-grade PMMA puck. Denser, stronger, and more stain-resistant than anything a 3D printer or hand-pour can produce.',
                },
                {
                  title: 'In-house lab — no outsourcing',
                  desc: 'Damien designs it. Luisa mills it. Same building, same day. If something needs adjusting, they fix it together — no waiting on an external lab.',
                },
              ].map(item => (
                <motion.div key={item.title} variants={fadeUp} className="bg-white/5 border border-white/10 rounded-[2rem] p-8">
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
