"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import ImplantLeadForm from '@/components/ImplantLeadForm';
import ImplantCandidacyQuiz from '@/components/ImplantCandidacyQuiz';

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } };
const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

const symptoms = [
  'Your lower denture floats or rocks the moment you bite down',
  'Your upper denture drops or shifts when you laugh or sneeze',
  'You avoid certain foods — corn, steak, crusty bread',
  'You use adhesive every single day just to function',
  'Your denture clicks or shifts when you speak',
  'You\'re self-conscious eating in public or in social situations',
  'You\'ve had your denture relined multiple times — still doesn\'t stay',
  'You were told implants "might help" but nobody explained what that means',
];

const steps = [
  {
    num: '01',
    title: 'Free Consultation',
    desc: 'We review your existing denture, your jaw, and your implant situation (if any). No cost, no pressure.',
  },
  {
    num: '02',
    title: 'Implant Referral (if needed)',
    desc: 'We coordinate directly with a trusted oral surgeon in the GTA. Lower arch: 3 implants. Upper arch: 4 implants. We\'ll tell you exactly what applies to your situation at the free consultation.',
  },
  {
    num: '03',
    title: 'Digital Impressions',
    desc: 'No goop. Intraoral scanner captures your exact jaw geometry. Damien DD personally designs your overdenture.',
  },
  {
    num: '04',
    title: 'In-House Fabrication',
    desc: 'Milled in our own North York lab. No outsourcing. No delays. Direct quality control from design to delivery.',
  },
  {
    num: '05',
    title: 'Placement & Fitting',
    desc: 'Snaps onto your implants. We fine-tune until it feels like part of you. You leave with a denture that stays.',
  },
];

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: 'How many implants do I need?',
    a: 'For a lower overdenture, typically 3. Upper overdentures usually require 4. We\'ll assess your bone density and jaw during your free consultation to confirm.',
  },
  {
    q: 'What does it cost?',
    a: (
      <>
        Our overdenture fee is <strong>$5,250 per arch — flat, no tax, no variation</strong>. Both arches together are $10,000 (save $500). The implant surgery cost depends on your bone and how many implants you need — that\'s set by the oral surgeon. <Link href="/en/implant-dentures-cost-toronto" className="text-brand-blue underline underline-offset-2 font-semibold">See the full cost breakdown →</Link>
      </>
    ),
  },
  {
    q: 'Is it painful?',
    a: 'The implant surgery is done under local anesthetic by the oral surgeon. Recovery is typically 3–5 days of mild soreness. Most patients say it was far easier than expected.',
  },
  {
    q: 'My implants were placed elsewhere — can you still do the overdenture?',
    a: 'Yes. This is one of our most common cases. We assess your existing implants, the attachment hardware, and build or convert your existing denture to clip onto them. Come in — we\'ll give you a written quote.',
  },
  {
    q: 'How long does the whole process take?',
    a: 'If you already have implants: 2–4 weeks. If you need implants placed first: 3–6 months for healing, then 2–4 weeks for the overdenture fabrication.',
  },
];

function FAQItem({ q, a }: { q: string; a: React.ReactNode }) {
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
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-64 pb-5' : 'max-h-0'}`}>
        <p className="text-gray-600 leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export default function ImplantOverdenturesLandingPage() {
  const locale = useLocale();
  return (
    <div className="w-full font-sans bg-white" style={{ fontFamily: "'Outfit', sans-serif" }}>
      {/* ── Sticky Phone Bar ── */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/95 backdrop-blur-sm border-b border-white/10 py-3 px-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/dentures-direct-toronto-logo.png" alt="Dentures Direct" className="h-7 w-auto brightness-0 invert opacity-90" />
          <span className="text-white/50 text-sm hidden sm:block">North York, Toronto</span>
        </div>
        <a
          href="tel:416-245-7474"
          className="inline-flex items-center gap-2 bg-brand-blue hover:bg-blue-600 text-white font-bold px-5 py-2 rounded-full text-sm transition-all duration-200 shadow-lg"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          (416) 245-7474
        </a>
      </div>

      {/* ── Hero ── */}
      <section className="relative pt-24 pb-0 min-h-[92vh] flex items-center bg-brand-dark overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/implant-landing-hero.png"
            alt="Confident smile after implant overdentures at Dentures Direct Toronto"
            fill
            className="object-cover object-center opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-brand-dark/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-24 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Copy */}
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-brand-blue/20 border border-brand-blue/40 rounded-full px-4 py-1.5 text-brand-blue text-sm font-semibold mb-6">
                <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
                North York · Toronto · GTA
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] mb-6">
                Your Denture
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-blue-300 block mt-1">
                  Should Stay Put.
                </span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-xl text-gray-300 mb-8 leading-relaxed max-w-lg">
                Implant-retained overdentures for full upper and lower denture wearers. Snap securely onto implants — no adhesive, no movement, no compromise. Designed by Damien DD and milled in our North York lab.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mb-10">
                <a
                  href="tel:416-245-7474"
                  className="inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-200 shadow-2xl shadow-brand-blue/30"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call for a Free Consult
                </a>
                <a
                  href="#learn-more"
                  className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-200"
                >
                  See How It Works
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </motion.div>
              {/* Trust micro-strip */}
              <motion.div variants={fadeUp} className="flex flex-wrap gap-4 text-sm text-gray-400">
                {['✓ Upper & lower arches', '✓ No referral needed', '✓ In-house lab', '✓ 25+ years experience', '✓ $5,250 flat per arch'].map(t => (
                  <span key={t} className="whitespace-nowrap">{t}</span>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: Before/After */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:block"
            >
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl ring-2 ring-brand-blue/40">
                <Image
                  src="/implant-before-after.png"
                  alt="Before and after implant overdenture results at Dentures Direct Toronto"
                  width={600}
                  height={750}
                  className="w-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 flex">
                  <div className="flex-1 bg-black/70 text-white text-center py-2 text-xs font-bold uppercase tracking-widest">Before</div>
                  <div className="flex-1 bg-brand-blue text-white text-center py-2 text-xs font-bold uppercase tracking-widest">After</div>
                </div>
              </div>
              <p className="text-center text-xs text-gray-500 mt-3">Actual patient results. Individual results may vary.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Symptom Checker ── */}
      <section id="learn-more" className="py-20 bg-[#f8fafc]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-brand-dark mb-4">Does This Sound Like You?</h2>
            <p className="text-lg text-gray-600">If you check even 2 of these boxes, you&apos;re a candidate for implant overdentures.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {symptoms.map((s, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeUp}
                className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm"
              >
                <span className="mt-0.5 shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-500 flex items-center justify-center text-sm font-bold">✗</span>
                <p className="text-gray-700 font-medium">{s}</p>
              </motion.div>
            ))}
          </div>
          {/* After symptom checker: form + phone split */}
          <div className="mt-12 grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h3 className="text-2xl font-bold text-brand-dark mb-3">Not ready to call?</h3>
              <p className="text-gray-600 leading-relaxed mb-5">
                Fill out the form and Damien will call <em>you</em>. Takes 60 seconds. No obligation — if you&apos;re not a candidate, he&apos;ll tell you straight.
              </p>
              <a
                href="tel:416-245-7474"
                className="inline-flex items-center gap-2 text-brand-dark font-bold hover:text-brand-blue transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                Prefer to call? (416) 245-7474
              </a>
            </div>
            <ImplantLeadForm />
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-dark mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">From first call to a denture that never moves again — here&apos;s the full process.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
            <div className="space-y-6">
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                  variants={fadeUp}
                  className="flex gap-6 items-start bg-[#f8fafc] p-8 rounded-[1.5rem] border border-gray-100"
                >
                  <span className="shrink-0 text-5xl font-black text-brand-blue/15 leading-none">{step.num}</span>
                  <div>
                    <h3 className="text-xl font-bold text-brand-dark mb-2">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="lg:sticky lg:top-24">
              <div className="relative rounded-[2rem] overflow-hidden shadow-xl border border-gray-100">
                <Image
                  src="/implant-snap-diagram.png"
                  alt="How implant overdenture snap attachment works — diagram"
                  width={600}
                  height={600}
                  className="w-full object-cover bg-white"
                />
              </div>
              <p className="text-center text-xs text-gray-400 mt-3">3 implants lower · 4 implants upper — Damien&apos;s standard configuration</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Candidacy Quiz ── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ImplantCandidacyQuiz />
        </div>
      </section>

      {/* ── Meet Damien ── */}
      <section className="py-20 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl max-w-md mx-auto lg:mx-0">
                <Image src="/damien-new.jpg" alt="Damien John Hiorth DD — Founder, Dentures Direct" fill className="object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-bold text-xl">Damien John Hiorth DD</p>
                  <p className="text-brand-blue font-medium">Founder & Lead Denturist</p>
                </div>
              </div>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.span variants={fadeUp} className="text-brand-blue font-bold uppercase tracking-widest text-sm mb-4 block">
                Why Dentures Direct
              </motion.span>
              <motion.h2 variants={fadeUp} className="text-4xl font-bold text-white mb-6">
                25 Years. Built Right Here.
              </motion.h2>
              <motion.div variants={fadeUp} className="space-y-5 text-gray-300 leading-relaxed text-lg">
                <p>
                  I started Dentures Direct because I was tired of patients coming in who&apos;d been let down by clinics that outsource their lab work, rush their fittings, and move on to the next patient.
                </p>
                <p>
                  Every overdenture I build — I design it personally. Luisa fabricates it in our lab down the hall. Nobody ships anything out. Nobody waits weeks for a third party.
                </p>
                <p>
                  If you&apos;ve been struggling with a loose lower denture, I want to show you what it feels like when it actually stays put.
                </p>
              </motion.div>
              <motion.div variants={fadeUp} className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { stat: '25+', label: 'Years Experience' },
                  { stat: 'RDT', label: 'On Staff — Top 5%' },
                  { stat: '100%', label: 'In-House Lab' },
                ].map(item => (
                  <div key={item.stat} className="text-center bg-white/5 border border-white/10 rounded-2xl p-4">
                    <p className="text-3xl font-black text-brand-blue">{item.stat}</p>
                    <p className="text-xs text-gray-400 mt-1 leading-tight">{item.label}</p>
                  </div>
                ))}
              </motion.div>
              <motion.div variants={fadeUp} className="mt-8">
                <a
                  href="tel:416-245-7474"
                  className="inline-flex items-center gap-2 bg-brand-blue hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-200 shadow-xl shadow-brand-blue/30"
                >
                  Call Damien&apos;s Clinic
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-brand-dark mb-4">Common Questions</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA: Copy + Form ── */}
      <section id="get-started" className="py-24 bg-brand-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: persuasion copy */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12 } } }}
              className="text-white"
            >
              <motion.span
                variants={fadeUp}
                className="text-brand-blue font-bold uppercase tracking-widest text-sm mb-4 block"
              >
                Free Consultation · No Obligation
              </motion.span>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                Ready to stop worrying<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-blue-300">
                  about your denture?
                </span>
              </motion.h2>
              <motion.div variants={fadeUp} className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  Come in. We&apos;ll review your jaw, your existing denture, and your implant situation. We&apos;ll tell you exactly what applies to you and give you a written quote — at no charge.
                </p>
                <p>
                  If you&apos;re not a candidate, we&apos;ll tell you that too. No hard sell. Ever.
                </p>
              </motion.div>
              <motion.div variants={fadeUp} className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { stat: '$5,250', label: 'Flat per arch' },
                  { stat: '25+', label: 'Years experience' },
                  { stat: '100%', label: 'In-house lab' },
                ].map(item => (
                  <div key={item.stat} className="text-center bg-white/5 border border-white/10 rounded-2xl p-4">
                    <p className="text-2xl font-black text-brand-blue">{item.stat}</p>
                    <p className="text-xs text-gray-400 mt-1 leading-tight">{item.label}</p>
                  </div>
                ))}
              </motion.div>
              <motion.div variants={fadeUp} className="mt-8">
                <a
                  href="tel:416-245-7474"
                  className="inline-flex items-center gap-2 text-white/70 hover:text-white font-semibold transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  Rather call? (416) 245-7474
                </a>
              </motion.div>
            </motion.div>

            {/* Right: form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <ImplantLeadForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Minimal Footer ── */}
      <footer className="bg-brand-darker py-6 text-center text-xs text-white/30 border-t border-white/10 space-y-2">
        <p>© {new Date().getFullYear()} Dentures Direct. 2833 Weston Road, North York, Toronto, ON M9M 2S1. Regulated by the College of Denturists of Ontario.</p>
        <p className="space-x-3">
          <Link href={`/${locale}/denture-services/implant-retained-overdentures-toronto`} className="hover:text-white/60 transition-colors underline underline-offset-2">Learn more about implant-retained dentures</Link>
          <span className="text-white/10">|</span>
          <Link href={`/${locale}/implant-dentures-cost-toronto`} className="hover:text-white/60 transition-colors underline underline-offset-2">Full cost breakdown</Link>
          <span className="text-white/10">|</span>
          <Link href={`/${locale}`} className="hover:text-white/60 transition-colors underline underline-offset-2">Main website</Link>
        </p>
      </footer>

      {/* Google Fonts */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');`}</style>
    </div>
  );
}
