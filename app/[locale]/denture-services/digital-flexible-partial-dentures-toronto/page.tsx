"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } };
const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

export default function FlexiblePartialDenturesPage() {
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
              Metal-Free · Virtually Invisible
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Digital Flexible Partial<br />
              <span className="text-brand-blue">Dentures</span> in Toronto
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
              No metal clasps. No visible hardware. Flexible partials use gum-coloured Valplast material that blends in completely — nobody knows you&apos;re wearing one. The most aesthetic partial we make.
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
                <Image src="/valplast_flexible_partial_v2.png" alt="Valplast digital flexible partial denture made in Toronto" fill className="object-cover" />
              </motion.div>
              <motion.div variants={fadeUp} className="space-y-5">
                <h2 className="text-3xl font-bold text-brand-dark">Why patients love flexible partials</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  The biggest complaint people have about traditional partials? <strong className="text-brand-dark">&ldquo;Everyone can see the metal clasps.&rdquo;</strong>
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Flexible partials solve that completely. The clasps, the base — everything is made from a translucent, gum-coloured thermoplastic. It wraps around your teeth with a natural pink that blends right in. Even up close, people can&apos;t tell.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  They&apos;re also <strong className="text-brand-dark">lighter</strong> and <strong className="text-brand-dark">more comfortable</strong> than acrylic or cast metal. The material flexes with your mouth instead of fighting it — so there&apos;s less pressure on your gums and fewer sore spots.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  And if you&apos;re allergic to acrylic monomer or metal? Flexible partials are completely hypoallergenic.
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
              <h2 className="text-4xl font-bold text-brand-dark">What makes flexible partials different</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Completely invisible', desc: 'Gum-coloured clasps and translucent base. No metal showing anywhere. Smile, talk, laugh — nobody knows.' },
                { title: 'Won\'t break if you drop it', desc: 'Flexible thermoplastic absorbs impact instead of cracking. Drop an acrylic partial on tile and it shatters. Drop a Valplast? It bounces.' },
                { title: 'Featherlight', desc: 'Noticeably lighter than both acrylic and cast metal. You feel less bulk in your mouth — some patients forget they\'re wearing it.' },
                { title: 'No sore spots', desc: 'The material moves with your gums instead of pressing against them. That means fewer adjustments and a more comfortable break-in period.' },
                { title: 'Hypoallergenic', desc: 'Zero metal. Zero acrylic monomer. If you\'ve had reactions to traditional denture materials, flexible partials are the safest option.' },
                { title: 'Stain resistant', desc: 'The non-porous surface resists coffee, tea, and food stains better than acrylic. Stays cleaner, longer.' },
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

      {/* ── Honest Trade-offs ── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="bg-brand-blue/5 border border-brand-blue/15 rounded-[2rem] p-8 md:p-10">
              <h2 className="text-2xl font-bold text-brand-dark mb-5">The honest trade-off</h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  Flexible partials are the <strong>most aesthetic</strong> partial we make — but they&apos;re not the strongest. If you&apos;re replacing a lot of teeth or need maximum structural rigidity, a cast partial is the better choice.
                </p>
                <p>
                  Damien will assess your situation at the consultation and tell you honestly which type makes more sense. Sometimes it&apos;s flexible. Sometimes it&apos;s cast. Sometimes it&apos;s something else entirely. We&apos;ll tell you the truth — that&apos;s the point of coming in.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-brand-dark text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold mb-6">
              Tired of hiding your smile?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              Come in. Let Damien take a look. He&apos;ll tell you whether a flexible partial is the right fit — and if it is, we&apos;ll build it right here in our North York lab. No outsourcing, no waiting.
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
