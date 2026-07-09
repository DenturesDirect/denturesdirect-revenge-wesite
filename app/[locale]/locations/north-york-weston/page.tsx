"use client";
import React from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } };
const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.09 } } };

const neighbourhoods = [
  { name: 'Weston', desc: 'We\'re on Weston Road. You can\'t get closer.' },
  { name: 'Humber Summit', desc: '5 minutes north. Free parking on arrival.' },
  { name: 'Emery', desc: 'Easy drive down Weston Road from Emery.' },
  { name: 'Mount Dennis', desc: 'Near the Eglinton LRT — straightforward trip.' },
  { name: 'Rockcliffe-Smythe', desc: 'Quick drive east across the Humber.' },
  { name: 'Jane & Finch', desc: 'We accept CDCP — no cost out of pocket for eligible patients.' },
  { name: 'Rexdale', desc: 'CDCP accepted. Just off Hwy 400, easy access.' },
  { name: 'North York', desc: '2833 Weston Road is your North York denture clinic.' },
];

export default function NorthYorkWestonPage() {
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
              2833 Weston Road, North York · M9M 2S1
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Your Denturist in<br />
              <span className="text-brand-blue">Weston & North York</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
              Dentures Direct is right on Weston Road — serving Weston, Humber Summit, Emery, Mount Dennis, Rexdale, Jane & Finch, and all of North York. Digital dentures, implant overdentures, and same-day emergency repairs. CDCP accepted.
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
              <motion.h2 variants={fadeUp} className="text-3xl font-bold text-brand-dark">Find us on Weston Road</motion.h2>
              <motion.p variants={fadeUp} className="text-gray-600 text-lg leading-relaxed">
                We&apos;re at <strong className="text-brand-dark">2833 Weston Road</strong> — just north of Lawrence Avenue West, right in the heart of the Weston community. Free parking out front. Wheelchair accessible.
              </motion.p>
              <motion.p variants={fadeUp} className="text-gray-600 text-lg leading-relaxed">
                If you&apos;re coming from Humber Summit, you&apos;re 5 minutes away. From Emery, a straight shot south on Weston Road. From Rexdale or Etobicoke, under 15 minutes. From Jane & Finch, we&apos;re your closest digital denture clinic.
              </motion.p>
              <motion.div variants={fadeUp} className="space-y-3">
                {[
                  { icon: '📍', text: '2833 Weston Road, North York, ON M9M 2S1' },
                  { icon: '📞', text: '(416) 245-7474' },
                  { icon: '🕐', text: 'Mon–Thu: 8am–6pm' },
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
                title="Dentures Direct location at 2833 Weston Road North York"
                className="w-full h-full min-h-[300px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Neighbourhoods We Serve ── */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <h2 className="text-4xl font-bold text-brand-dark">Serving every neighbourhood on this side of Toronto</h2>
              <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">You don&apos;t need to go downtown. We&apos;re already in your neighbourhood.</p>
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

      {/* ── Why Digital / What We Do ── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-4xl font-bold text-brand-dark mb-10 text-center">
              What we do at 2833 Weston Road
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                { title: 'Digital Implant Overdentures', desc: 'Snap-in implant dentures for the lower jaw. Eliminates movement permanently. Our most requested procedure.' },
                { title: 'Digital Complete Dentures', desc: 'Full upper and lower arches. Intraoral scanned, CNC milled in our on-site lab. No outsourcing.' },
                { title: 'Digital Partial Dentures', desc: 'Cast metal, flexible Valplast, or acrylic — whichever fits your situation. Damien will tell you which is right.' },
                { title: 'Emergency Denture Repairs', desc: 'Cracked, broken, loose — bring it in. Most repairs done same day while you wait.' },
                { title: 'Fix a Bad Denture', desc: 'Denture made somewhere else not fitting? We assess it and rebuild it properly.' },
                { title: 'CDCP — Canadian Dental Care Plan', desc: 'We accept CDCP. Many North York and Weston patients qualify. Ask us when you call.' },
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
            <motion.h2 variants={fadeUp} className="text-4xl font-bold mb-4">Ready to book?</motion.h2>
            <motion.p variants={fadeUp} className="text-gray-300 text-lg mb-8">
              Call us or book online. We&apos;re at 2833 Weston Road, North York. Free parking, wheelchair accessible, CDCP accepted.
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
