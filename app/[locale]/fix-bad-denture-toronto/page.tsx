"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';

const fadeUp = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } };
const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12 } } };

export default function RescueAndRebuildPage() {
  const locale = useLocale();

  return (
    <div className="w-full font-sans">

      {/* ── Hero ── */}
      <section className="relative pt-28 pb-24 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/broken-denture-repair.png" alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-brand-dark/90" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 text-red-400 font-bold uppercase tracking-widest text-sm mb-6 block">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
              Rescue &amp; Rebuild
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Someone else made it.<br />
              <span className="text-brand-blue">It doesn&apos;t fit.</span><br />
              We fix it.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
              You paid good money. You trusted someone. And now you&apos;re living with a denture that rocks, pops off, cuts your gums, or sits in a drawer because you gave up. We see this every single week. Bring it in.
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
                Book a Free Assessment
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          WHAT WE HEAR — The Stories People Walk In With
      ═══════════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">
                &ldquo;Does this sound like you?&rdquo;
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                These aren&apos;t hypotheticals. These are the actual conversations Damien has every week with patients walking through the door.
              </p>
            </motion.div>

            <div className="space-y-5">
              {[
                {
                  quote: "I had implants placed two years ago. The denture keeps popping off — especially when I eat.",
                  answer: 'Locator attachments wear out, get misaligned, or were never calibrated right in the first place. We assess the attachment system, replace worn housings, and if needed, build a new overdenture that actually fits your implants — not just any implants.',
                },
                {
                  quote: "My denture has never fit right. I've been back six times and they keep adjusting it.",
                  answer: 'If it didn\'t fit after the second adjustment, the impression was probably wrong. No amount of adjusting fixes a denture built from a bad foundation. We start over — proper intraoral scan, proper bite registration, CNC milled in our lab. It fits right the first time because the data is right.',
                },
                {
                  quote: "I broke my denture and the other place said it would take two weeks to fix.",
                  answer: 'Two weeks? We have an in-house lab. A crack, a broken tooth, a fractured base — most emergency repairs are done while you wait. If it\'s beyond repair, we\'ll tell you honestly and talk about a rebuild.',
                },
                {
                  quote: "I got a denture from a clinic that outsources everything. It came back three times and still wasn't right.",
                  answer: 'This is what happens when the denturist never sees the lab work until it arrives in a box. At Dentures Direct, Damien designs it and Luisa mills it — in the same building, the same day. No middleman. No mysteries.',
                },
                {
                  quote: "I have old ball attachments on my implants. My new dentist says they're outdated.",
                  answer: 'They are. Ball attachments wear faster, retain less, and need replacing more often. We convert to modern LOCATOR R-TX attachments — better snap, longer lifespan, and compatible with the angled implant positions that ball attachments struggle with.',
                },
                {
                  quote: "My denture sits in a drawer. I gave up.",
                  answer: 'Bring it in anyway. Let Damien look at it. Sometimes a reline is all it needs. Sometimes it needs to be rebuilt. Sometimes you need implants to make any denture work. But you won\'t know until someone who actually fabricates dentures in-house takes a look.',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-30px' }}
                  variants={fadeUp}
                  className="bg-[#f8fafc] rounded-[2rem] border border-gray-100 p-8 md:p-10"
                >
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-1">
                      <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <p className="text-xl font-bold text-brand-dark italic leading-snug">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </div>
                  <div className="pl-14">
                    <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          WHY THIS HAPPENS — The Uncomfortable Truth
      ═══════════════════════════════════════════════════ */}
      <section className="py-24 bg-brand-dark text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-14">
              <span className="inline-flex items-center gap-2 text-brand-blue font-bold uppercase tracking-widest text-sm mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                Why This Keeps Happening
              </span>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Maybe it&apos;s not your fault.
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto mt-4">
                We can&apos;t say for certain what went wrong until Damien examines your denture. But these are the patterns we see over and over again.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'They outsource the lab work',
                  desc: 'Many clinics send your impressions to an outside lab. The denturist may never see the wax-up or check the fit until it arrives. If it\'s wrong, they send it back. If it\'s close enough, they hand it to you. That\'s not always the case — but it\'s common.',
                  icon: '📦',
                },
                {
                  title: 'They skip the digital workflow',
                  desc: 'Putty impressions are older technology. They can distort, cause gagging, and introduce error at the very first step. A denture built from a compromised impression may never fit properly — no matter how many adjustments are made.',
                  icon: '🟤',
                },
                {
                  title: 'They don\'t specialize',
                  desc: 'Implant overdentures are not the same as a regular denture. The attachment system, framework design, and occlusion require specific experience. A clinic that does mostly conventional dentures may not have the volume of implant cases to catch every nuance.',
                  icon: '📉',
                },
              ].map(item => (
                <motion.div key={item.title} variants={fadeUp} className="bg-white/5 border border-white/10 rounded-[2rem] p-8">
                  <span className="text-3xl mb-4 block">{item.icon}</span>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          WHAT WE DO DIFFERENTLY
      ═══════════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-14">
              <span className="inline-flex items-center gap-2 text-brand-blue font-bold uppercase tracking-widest text-sm mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                What We Do Differently
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-brand-dark leading-tight">
                Everything stays in this building.
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Damien designs it',
                  desc: 'Not a technician he\'s never met. Not an algorithm. Damien — 25 years, thousands of cases — designs the overdenture for your specific anatomy, bite, and implant positions.',
                  icon: '🖥️',
                },
                {
                  title: 'Luisa mills it',
                  desc: 'RDT Candidate, George Brown trained. She operates the CNC mill in our lab — same floor, same day. If something needs tweaking, Damien walks 10 feet and they fix it together.',
                  icon: '⚙️',
                },
                {
                  title: 'Intraoral scan — no goop',
                  desc: 'We start with a 3D digital impression. No putty, no distortion, no guessing. The data is perfect before fabrication ever begins. That\'s why our dentures fit right the first time.',
                  icon: '📷',
                },
                {
                  title: 'CNC milled — not 3D printed',
                  desc: 'Milled from solid medical-grade PMMA puck. It\'s denser, stronger, and more stain-resistant than anything a 3D printer can produce. This is the standard used by the best labs in North America.',
                  icon: '🏭',
                },
              ].map(item => (
                <motion.div key={item.title} variants={fadeUp} className="flex gap-5 items-start bg-[#f8fafc] rounded-2xl border border-gray-100 p-7">
                  <span className="text-3xl shrink-0">{item.icon}</span>
                  <div>
                    <h3 className="text-lg font-bold text-brand-dark mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          WHAT IT COSTS
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 bg-[#f8fafc] border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="bg-white rounded-[2rem] border border-gray-200 shadow-sm p-8 md:p-10">
              <h2 className="text-3xl font-bold text-brand-dark mb-6">What does a rescue cost?</h2>
              <div className="space-y-5 text-gray-700 text-lg leading-relaxed">
                <p>
                  <strong className="text-brand-dark">It depends on what&apos;s wrong.</strong> A reline is different from a full rebuild. A locator replacement is different from a new overdenture. We won&apos;t know until Damien looks at it.
                </p>
                <p>
                  What we <em>can</em> tell you: if you need a new digital implant overdenture, our fee is <strong className="text-brand-blue text-xl">$5,250 per arch</strong> — flat, no tax, no variation. Same fee whether it&apos;s a rescue case or a new build. That&apos;s our number for everyone.
                </p>
                <p>
                  If a repair or reline can save your current denture, we&apos;ll do that instead — and it&apos;ll cost significantly less. We don&apos;t upsell you into a new denture if the old one can be fixed.
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href={`/${locale}/implant-dentures-cost-toronto`}
                  className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:underline"
                >
                  See full cost breakdown →
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CTA — You've Been Through Enough
      ═══════════════════════════════════════════════════ */}
      <section className="py-28 bg-brand-dark text-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 text-brand-blue font-bold uppercase tracking-widest text-sm mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                Free Assessment · No Obligation
              </span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              You&apos;ve been through enough.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-4">
              Bring your denture. Bring your frustration. Bring the denture that&apos;s sitting in a drawer because you gave up on it. Damien will look at it, tell you exactly what went wrong, and tell you what it takes to fix it.
            </motion.p>
            <motion.p variants={fadeUp} className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
              No charge for the assessment. No pressure. Just an honest answer from someone who builds every denture himself — in this building, on this bench.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:416-245-7474"
                className="inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-full transition-all text-xl shadow-2xl shadow-brand-blue/30"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                (416) 245-7474
              </a>
              <Link
                href={`/${locale}/contact`}
                className="btn-shimmer inline-flex items-center justify-center gap-2 px-10 py-4 bg-white/10 border border-white/25 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 hover:-translate-y-0.5 backdrop-blur-sm text-xl"
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
