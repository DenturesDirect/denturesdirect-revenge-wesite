"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import ImplantLeadForm from '@/components/ImplantLeadForm';
import { getImplantCostContent } from '@/content/implant-cost';

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } };
const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

// Renders **bold** segments as <strong>
function renderBold(text: string, strongClass?: string) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i} className={strongClass}>{part}</strong> : <React.Fragment key={i}>{part}</React.Fragment>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left text-brand-dark font-semibold text-lg hover:text-brand-blue transition-colors"
      >
        <span>{q}</span>
        <span className={`ml-4 shrink-0 w-7 h-7 rounded-full border-2 border-current flex items-center justify-center transition-transform duration-300 ${open ? 'rotate-45' : ''}`}>
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-5' : 'max-h-0'}`}>
        <p className="text-gray-600 leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export default function ImplantDenturesCostPage() {
  const locale = useLocale();
  const c = getImplantCostContent(locale);

  return (
    <div className="w-full font-sans bg-white">

      {/* ── Hero ── */}
      <section className="relative pt-28 pb-20 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image src="/implant-retained-overdentures-after-toronto.jpg" alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-brand-dark/80" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 bg-brand-blue/20 border border-brand-blue/40 rounded-full px-4 py-1.5 text-brand-blue text-sm font-semibold mb-6">
              {c.hero.badge}
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              {c.hero.h1}
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              {c.hero.sub}
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:416-245-7474" className="inline-flex items-center gap-2 bg-brand-blue hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-full text-lg transition-all shadow-2xl shadow-brand-blue/30">
                {c.hero.ctaCall}
              </a>
              <a href="#our-fee" className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white font-semibold py-4 px-8 rounded-full text-lg transition-all">
                {c.hero.ctaBreakdown}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 1: OUR FEE */}
      <section id="our-fee" className="py-20 bg-[#f8fafc] border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <span className="inline-flex items-center gap-2 text-brand-blue font-bold uppercase tracking-widest text-sm mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                {c.fee.badge}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-brand-dark leading-tight">
                {c.fee.h2}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4 leading-relaxed">
                {c.fee.sub}
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white rounded-[2rem] border-2 border-brand-blue/20 shadow-lg p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div className="space-y-6">
                  <div>
                    <p className="text-sm text-brand-blue font-bold uppercase tracking-widest mb-2">{c.fee.perArch}</p>
                    <p className="text-6xl font-black text-brand-dark">{c.fee.price}</p>
                    <p className="text-gray-500 mt-2 text-lg">{c.fee.priceNote}</p>
                  </div>
                  <div className="space-y-3">
                    {c.fee.bullets.map(item => (
                      <div key={item} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-brand-blue/5 border border-brand-blue/15 rounded-3xl p-8 text-center space-y-6">
                  <div>
                    <p className="text-xs text-brand-blue font-bold uppercase tracking-widest mb-1">{c.fee.haveImplantsTitle}</p>
                    <p className="text-gray-700 leading-relaxed">{c.fee.haveImplantsBody}</p>
                  </div>
                  <div className="w-full h-px bg-brand-blue/15" />
                  <div>
                    <p className="text-xs text-brand-blue font-bold uppercase tracking-widest mb-1">{c.fee.bothArchesTitle}</p>
                    <p className="text-gray-700 leading-relaxed">{renderBold(c.fee.bothArchesBody, 'text-brand-dark')}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: SURGICAL FEE */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <span className="inline-flex items-center gap-2 text-gray-500 font-bold uppercase tracking-widest text-sm mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                {c.surgery.badge}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-brand-dark leading-tight">
                {c.surgery.h2}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4 leading-relaxed">
                {c.surgery.sub}
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
              {c.surgery.factors.map(item => (
                <div key={item.title} className="bg-[#f8fafc] rounded-2xl border border-gray-100 p-6">
                  <span className="text-2xl mb-3 block">{item.icon}</span>
                  <h3 className="font-bold text-brand-dark mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="bg-brand-dark rounded-[2rem] p-8 md:p-12 text-white">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div className="space-y-5">
                  <h3 className="text-3xl font-bold leading-tight">
                    {c.surgery.surgeonTitle}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">{renderBold(c.surgery.surgeonBody1, 'text-white')}</p>
                  <p className="text-gray-300 text-lg leading-relaxed">{c.surgery.surgeonBody2}</p>
                  <p className="text-gray-400 text-sm italic">{c.surgery.surgeonNote}</p>
                </div>
                <div className="space-y-4">
                  {c.surgery.cards.map(item => (
                    <div key={item.label} className="bg-white/5 border border-white/10 rounded-2xl p-5">
                      <p className="text-brand-blue font-bold text-sm mb-1">{item.label}</p>
                      <p className="text-gray-300 text-sm leading-relaxed">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: LAST YEAR'S AVERAGE */}
      <section className="py-20 bg-[#f8fafc] border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-10">
              <span className="inline-flex items-center gap-2 text-brand-blue font-bold uppercase tracking-widest text-sm mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                {c.average.badge}
              </span>
              <h2 className="text-4xl font-bold text-brand-dark">
                {c.average.h2}
              </h2>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white rounded-[2rem] border border-gray-200 shadow-sm overflow-hidden">
              <div className="p-8 md:p-10 space-y-8">
                <div className="text-center">
                  <p className="text-gray-500 text-sm font-semibold uppercase tracking-wider mb-2">{c.average.avgLabel}</p>
                  <p className="text-5xl font-black text-brand-dark">{c.average.avgValue}</p>
                  <p className="text-gray-500 mt-1">{c.average.avgUnit}</p>
                </div>
                <div className="w-full h-px bg-gray-100" />
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  {c.average.cases.map((cs, i) => (
                    <div key={i} className="bg-[#f8fafc] rounded-2xl p-6">
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-2">{cs.label}</p>
                      <p className={`text-2xl font-black ${i === 0 ? 'text-gray-500' : i === 1 ? 'text-brand-dark' : 'text-gray-700'}`}>{cs.value}</p>
                      <p className="text-sm text-gray-500 mt-1">{cs.detail}</p>
                    </div>
                  ))}
                </div>
                <p className="text-gray-500 text-sm text-center leading-relaxed max-w-2xl mx-auto">
                  {c.average.disclaimer}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: EMOTIONAL CLOSE */}
      <section className="py-28 bg-brand-dark overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12 } } }}
              className="text-white"
            >
              <motion.span variants={fadeUp} className="text-brand-blue font-bold uppercase tracking-widest text-sm mb-6 block">
                {c.close.badge}
              </motion.span>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold leading-tight mb-8">
                {c.close.h2a}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-blue-300 mt-2">
                  {c.close.h2b}
                </span>
              </motion.h2>
              <motion.div variants={fadeUp} className="space-y-5 text-gray-300 text-lg leading-relaxed">
                {c.close.paras.map((para, i) => (
                  <p key={i}>{renderBold(para, 'text-white')}</p>
                ))}
                <p className="text-white font-semibold text-xl mt-4">
                  {c.close.kicker}
                </p>
              </motion.div>
              <motion.div variants={fadeUp} className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link href={`/${locale}/contact`} className="btn-shimmer inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-blue hover:bg-brand-blueDark text-white font-semibold rounded-full transition-all duration-300 shadow-cta hover:shadow-cta-hover hover:-translate-y-0.5 text-lg">
                  {c.close.book}
                </Link>
                <a href="tel:416-245-7474" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/8 border border-white/25 text-white font-semibold rounded-full hover:bg-white/15 transition-all duration-300 hover:-translate-y-0.5 backdrop-blur-sm">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  (416) 245-7474
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="lg:sticky lg:top-28"
            >
              <ImplantLeadForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-brand-dark mb-4">{c.faq.h2}</h2>
          </motion.div>
          <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-8">
            {c.faq.items.map(f => <FAQItem key={f.q} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

    </div>
  );
}
