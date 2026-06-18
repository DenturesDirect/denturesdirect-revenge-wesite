"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } };
const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

export default function CastPartialDenturesPage() {
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
              The Gold Standard for Partials
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Digital Cast Partial<br />
              <span className="text-brand-blue">Dentures</span> in Toronto
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
              Missing several teeth but still have healthy ones? A cast partial uses a precision metal framework to fill the gaps — thinner, stronger, and more durable than acrylic. It&apos;s the partial that lasts.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:416-245-7474"
                className="inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 text-lg shadow-2xl shadow-brand-blue/30"
              >
                Call (416) 245-7474
              </a>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center border border-white/30 hover:border-white text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 text-lg"
              >
                Book a Free Consultation
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── What It Is ── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeUp} className="relative aspect-square rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                <Image src="/new-cast-partial.jpg" alt="Digital cast metal partial denture fabricated in North York Toronto" fill className="object-cover" />
              </motion.div>
              <motion.div variants={fadeUp} className="space-y-5">
                <h2 className="text-3xl font-bold text-brand-dark">Why cast metal?</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Most people who come in asking about a partial are thinking of the pink acrylic kind — the &ldquo;flipper.&rdquo; It works, but it&apos;s thick, it flexes, and it wears out.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  A cast partial is different. The framework is metal — cobalt-chromium, precision cast to your anatomy. It&apos;s <strong className="text-brand-dark">thinner</strong>, <strong className="text-brand-dark">stronger</strong>, and <strong className="text-brand-dark">distributes force evenly</strong> across your remaining teeth. That matters because it protects what you have left.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  It also conducts heat. Sounds minor — but when you drink coffee with a cast partial, you can actually feel the warmth on the roof of your mouth. With acrylic, you can&apos;t. Patients notice.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-14">
              <h2 className="text-4xl font-bold text-brand-dark">What you get with a digital cast partial</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Half the thickness of acrylic', desc: 'Metal is strong enough to be thin. Less bulk in your mouth means more comfort and a more natural feel when speaking.' },
                { title: 'Won\'t flex or warp', desc: 'Acrylic flexes under force. Metal doesn\'t. Your bite stays consistent, your clasps stay tight, and the denture holds its shape for years.' },
                { title: 'Protects your remaining teeth', desc: 'The rigid framework distributes chewing force across your whole arch — not just the teeth next to the gap. That\'s better for long-term tooth health.' },
                { title: 'You can feel temperature', desc: 'Metal conducts heat and cold naturally. You\'ll taste food better and feel the temperature of drinks — something acrylic completely blocks.' },
                { title: 'Teeth can be added later', desc: 'If you lose another tooth down the road, we can often add a replacement to your existing cast partial without starting over.' },
                { title: 'Built to last', desc: 'With proper care, a cast partial can last 7–10+ years. Acrylic partials typically need replacing much sooner.' },
              ].map(item => (
                <motion.div key={item.title} variants={fadeUp} className="bg-white rounded-2xl border border-gray-100 p-7 shadow-sm">
                  <h3 className="text-lg font-bold text-brand-dark mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Regulatory Note ── */}
      <section className="py-8 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3 bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 text-sm text-gray-500">
            <svg className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <p>
              <strong className="text-gray-600">A note on how cast partials are made:</strong> Damien designs and plans your cast partial in-house using digital technology. In accordance with Ontario regulatory standards, the physical casting of the metal framework is completed by a certified dental laboratory. All other fabrication — teeth selection, fitting, finishing — is done at our North York clinic.
            </p>
          </div>
        </div>
      </section>

      {/* ── Who It's For ── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-14">
              <h2 className="text-4xl font-bold text-brand-dark">Is a cast partial right for you?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">Damien will tell you honestly at your consultation. But generally, cast partials are the right choice when:</p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                'You still have several healthy natural teeth',
                'You want something that lasts — not a temporary fix',
                'You\'ve had an acrylic partial and found it too bulky or loose',
                'You\'re looking for the strongest, most stable partial available',
                'You want to feel the temperature of food and drinks naturally',
                'You may need teeth added in the future as your situation changes',
              ].map(item => (
                <motion.div key={item} variants={fadeUp} className="flex items-start gap-3 bg-[#f8fafc] rounded-2xl border border-gray-100 p-5">
                  <svg className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-brand-dark text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold mb-6">
              Stop settling for a partial that doesn&apos;t fit right.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              Bring your current partial. Damien will look at it, assess your remaining teeth, and tell you whether a cast partial makes sense — or if something else is a better fit. Free consultation. No pressure.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:416-245-7474"
                className="inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-full transition-all text-xl shadow-2xl shadow-brand-blue/30"
              >
                (416) 245-7474
              </a>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center px-10 py-4 bg-white/10 border border-white/25 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 text-xl"
              >
                Book Online
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
