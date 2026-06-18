"use client";
import React from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } };
const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.09 } } };

const neighbourhoods = [
  { name: 'Humber Summit', desc: 'Right on Weston Road — 5 minutes from us.' },
  { name: 'Etobicoke', desc: 'We sit right on the North York / Etobicoke border.' },
  { name: 'Rexdale', desc: 'Quick drive east from Rexdale. CDCP accepted.' },
  { name: 'Woodbridge', desc: 'Many Woodbridge patients drive south to see us.' },
  { name: 'Malton', desc: '15 minutes via Hwy 27 or Kipling.' },
  { name: 'Thistletown', desc: 'Easy access via Albion Road.' },
  { name: 'Emery', desc: 'Just across the Humber — short drive.' },
  { name: 'Weston', desc: 'We\'re on Weston Road. Can\'t get closer.' },
];

export default function EtobicokeHumberSummitPage() {
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
              Serving Etobicoke & Humber Summit · 2833 Weston Road
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Denturist Serving<br />
              <span className="text-brand-blue">Etobicoke & Humber Summit</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
              Right on the Etobicoke / North York border at 2833 Weston Road. Digital implant overdentures, partials, full dentures, and same-day emergency repairs — all made in-house. CDCP accepted. No referral needed.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <a href="tel:416-245-7474" className="inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-full transition-all text-lg shadow-2xl shadow-brand-blue/30">
                Call (416) 245-7474
              </a>
              <Link href={`/${locale}/contact`} className="inline-flex items-center justify-center border border-white/30 hover:border-white text-white font-semibold py-4 px-8 rounded-full transition-all text-lg">
                Book Online
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Map + Info ── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-6">
              <motion.h2 variants={fadeUp} className="text-3xl font-bold text-brand-dark">Right on the Etobicoke border</motion.h2>
              <motion.p variants={fadeUp} className="text-gray-600 text-lg leading-relaxed">
                Etobicoke patients don&apos;t need to drive downtown or across the city. We&apos;re at <strong className="text-brand-dark">2833 Weston Road</strong> — the same road that runs through Humber Summit, right on the boundary with North York.
              </motion.p>
              <motion.p variants={fadeUp} className="text-gray-600 text-lg leading-relaxed">
                If your denture breaks in Etobicoke or Rexdale, you shouldn&apos;t be waiting a week for a dental office to send it to an external lab. We make it in-house. Most emergency repairs are done the same day.
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
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white h-80 md:h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2882.2619438073867!2d-79.53920962386981!3d43.74668744636952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3040332fb17b%3A0xe5a3c9e3e3b3a3d5!2s2833%20Weston%20Rd%2C%20North%20York%2C%20ON%20M9M%202S1!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                title="Dentures Direct — Etobicoke and Humber Summit denture clinic on Weston Road"
                className="w-full h-full min-h-[300px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Neighbourhoods ── */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <h2 className="text-4xl font-bold text-brand-dark">Communities we serve west of the Humber</h2>
              <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">You don&apos;t need a downtown clinic. We&apos;re already in your corner of the city.</p>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {neighbourhoods.map(n => (
                <motion.div key={n.name} variants={fadeUp} className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
                  <h3 className="font-bold text-brand-dark mb-1">{n.name}</h3>
                  <p className="text-sm text-gray-600">{n.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Why choose us ── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-4xl font-bold text-brand-dark mb-10 text-center">
              Why Etobicoke patients come to Dentures Direct
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                { title: 'In-house lab — no outsourcing', desc: 'Everything is made in our North York lab. No sending to an external lab. Faster turnaround, better quality control.' },
                { title: 'Digital technology — not putty', desc: 'Intraoral scanner captures your mouth in 3D. No gagging on impression material. The most accurate first step.' },
                { title: 'Same-day emergency repairs', desc: 'Broke your denture? Drive in. We fix most repairs the same day — no waiting a week.' },
                { title: 'CDCP accepted', desc: 'Many Etobicoke and Rexdale patients qualify for the Canadian Dental Care Plan. We accept it. Ask when you call.' },
                { title: 'Implant overdentures specialty', desc: 'Loose lower denture driving you crazy? Implant overdentures snap in and don\'t move. This is what we\'re known for.' },
                { title: 'Free consultation', desc: 'Come in with your current denture or situation. Damien will tell you exactly what you need — no pressure, no upsell.' },
              ].map(item => (
                <motion.div key={item.title} variants={fadeUp} className="flex gap-4 bg-[#f8fafc] rounded-2xl border border-gray-100 p-6">
                  <svg className="w-5 h-5 text-brand-blue shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
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
            <motion.h2 variants={fadeUp} className="text-4xl font-bold mb-4">Etobicoke&apos;s closest digital denture clinic</motion.h2>
            <motion.p variants={fadeUp} className="text-gray-300 text-lg mb-8">
              2833 Weston Road. Free parking. CDCP accepted. Damien will see you within the week.
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
