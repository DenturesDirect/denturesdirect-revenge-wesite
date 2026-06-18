"use client";
import React from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } };
const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.09 } } };

interface Props {
  neighbourhood: string;
  distance: string;
  cdcpNote: string;
  driveNote: string;
}

export default function NeighbourhoodPage({ neighbourhood, distance, cdcpNote, driveNote }: Props) {
  const locale = useLocale();

  return (
    <div className="w-full font-sans">

      {/* ── Hero ── */}
      <section className="relative pt-28 pb-24 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_#1a6cf6_0%,_transparent_60%)]" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 text-brand-blue font-bold uppercase tracking-widest text-sm mb-6 block">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
              Serving {neighbourhood} · 2833 Weston Road, North York
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Denturist Near<br />
              <span className="text-brand-blue">{neighbourhood}, Toronto</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
              {distance} Dentures Direct at 2833 Weston Road is your closest digital denture clinic — implant overdentures, partials, full dentures, and same-day emergency repairs. All made in-house. CDCP accepted. No referral needed.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <a href="tel:416-245-7474" className="inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-full transition-all text-lg shadow-2xl shadow-brand-blue/30">
                Call (416) 245-7474
              </a>
              <Link href={`/${locale}/contact`} className="inline-flex items-center justify-center border border-white/30 hover:border-white text-white font-semibold py-4 px-8 rounded-full transition-all text-lg">
                Book a Free Consultation
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── How to get here ── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-6">
              <motion.h2 variants={fadeUp} className="text-3xl font-bold text-brand-dark">Getting here from {neighbourhood}</motion.h2>
              <motion.p variants={fadeUp} className="text-gray-600 text-lg leading-relaxed">
                {driveNote} We&apos;re at <strong className="text-brand-dark">2833 Weston Road, North York</strong> — free parking out front, wheelchair accessible.
              </motion.p>
              <motion.p variants={fadeUp} className="text-gray-600 text-lg leading-relaxed">
                {cdcpNote}
              </motion.p>
              <motion.div variants={fadeUp} className="space-y-3">
                {[
                  { icon: '📍', text: '2833 Weston Road, North York, ON M9M 2S1' },
                  { icon: '📞', text: '(416) 245-7474' },
                  { icon: '🕐', text: 'Mon–Fri: 9am–5pm · Sat: By appointment' },
                  { icon: '🅿️', text: 'Free parking · Wheelchair accessible' },
                  { icon: '💳', text: 'CDCP accepted · Direct billing available' },
                ].map(item => (
                  <div key={item.text} className="flex items-start gap-3 text-gray-700">
                    <span>{item.icon}</span>
                    <span>{item.text}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white h-80 md:h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2882.2619438073867!2d-79.53920962386981!3d43.74668744636952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3040332fb17b%3A0xe5a3c9e3e3b3a3d5!2s2833%20Weston%20Rd%2C%20North%20York%2C%20ON%20M9M%202S1!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                title={`Dentures Direct — denture clinic near ${neighbourhood} Toronto`}
                className="w-full h-full min-h-[300px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── What We Offer ── */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-4xl font-bold text-brand-dark mb-10 text-center">
              What {neighbourhood} patients come to us for
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                { title: 'Digital Implant Overdentures', desc: 'Loose lower denture? Snap-in implant overdentures eliminate movement permanently. Our most requested service.' },
                { title: 'Digital Complete Dentures', desc: 'Intraoral scanned, CNC milled in our own lab. No outsourcing — precision fit without the wait.' },
                { title: 'Digital Partial Dentures', desc: 'Cast metal, flexible Valplast, or acrylic. Damien tells you which one makes sense for your mouth.' },
                { title: 'Same-Day Emergency Repairs', desc: 'Cracked or broken denture? Come in. We repair most dentures the same day while you wait.' },
                { title: 'Fix a Bad Denture', desc: 'Not happy with a denture made elsewhere? Bring it in. We assess it honestly and rebuild if needed.' },
                { title: 'CDCP — Canadian Dental Care Plan', desc: `${cdcpNote} No out-of-pocket cost for many procedures.` },
              ].map(item => (
                <motion.div key={item.title} variants={fadeUp} className="flex gap-4 bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                  <svg className="w-5 h-5 text-brand-blue shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-brand-dark mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-brand-dark text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-4xl font-bold mb-4">
              Your denture clinic near {neighbourhood}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-300 text-lg mb-8">
              2833 Weston Road, North York. Free parking, CDCP accepted, in-house lab. Damien will see you within the week — free consultation.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:416-245-7474" className="inline-flex items-center justify-center bg-brand-blue hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-full transition-all text-xl shadow-2xl shadow-brand-blue/30">
                (416) 245-7474
              </a>
              <Link href={`/${locale}/contact`} className="inline-flex items-center justify-center px-10 py-4 bg-white/10 border border-white/25 text-white font-semibold rounded-full hover:bg-white/20 transition-all text-xl">
                Book Online
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
