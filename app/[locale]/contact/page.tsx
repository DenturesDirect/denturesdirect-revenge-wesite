"use client";

import React from 'react';
import BookingForm from '@/components/BookingForm';
import { motion } from 'framer-motion';

const fadeUp = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22,1,0.36,1] } } };
const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

export default function ContactPage() {
  return (
    <div className="w-full font-sans">

      {/* Hero */}
      <section className="relative pt-24 pb-32 bg-gradient-hero overflow-hidden">
        <div className="orb w-[500px] h-[500px] bg-brand-blue/25 -top-20 left-1/2 -translate-x-1/2 animate-orb" />
        <div className="orb orb-slow w-80 h-80 bg-brand-blue/15 bottom-0 left-0 animate-orb-slow" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="space-y-5">
            <span className="pill-badge border-white/20 bg-white/10 text-white">
              Accepting New Patients
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Book Your Free{' '}
              <span className="font-display italic gradient-text-light">Consultation</span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed font-light">
              No pressure, no commitment. Just an honest conversation about what&apos;s possible for your situation — and a written quote before you leave.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick differentiators */}
      <section className="bg-white border-b border-brand-border py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { stat: 'Free', label: 'Consultation', icon: '✓' },
              { stat: 'CDCP', label: 'Accepted', icon: '🇨🇦' },
              { stat: 'In-House', label: 'Design, Lab & Milling', icon: '🔬' },
              { stat: 'Flat Rate', label: 'Implant Dentures Per Arch', icon: '💰' },
            ].map((item, i) => (
              <div
                key={i}
                className={`flex flex-col items-center justify-center py-8 px-4 text-center ${i < 3 ? 'md:border-r border-brand-border' : ''} ${i >= 2 ? 'border-t md:border-t-0 border-brand-border' : ''}`}
              >
                <div className="text-2xl mb-1">{item.icon}</div>
                <div className="text-xl font-bold text-brand-blue mb-0.5">{item.stat}</div>
                <div className="text-xs font-bold tracking-widest uppercase text-brand-gray">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main content — form + info */}
      <section className="py-20 bg-brand-ice">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">

            {/* Left: Info + Map */}
            <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-6">
              {/* Info card */}
              <motion.div variants={fadeUp} className="card-premium p-8 space-y-7">
                <h2 className="text-2xl font-bold text-brand-dark">Clinic Information</h2>

                {[
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    ),
                    label: 'Address',
                    content: (
                      <p className="text-brand-gray leading-relaxed">
                        2833 Weston Road<br />Toronto, ON M9M 2S1<br />
                        <span className="text-sm text-brand-gray/70">(Border of North York &amp; Etobicoke — free parking on-site)</span>
                      </p>
                    ),
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    ),
                    label: 'Phone',
                    content: (
                      <div>
                        <a href="tel:416-245-7474" className="text-brand-blue font-bold text-lg hover:text-brand-blueDark transition-colors">(416) 245-7474</a>
                        <p className="text-sm text-green-600 font-medium mt-1 flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse inline-block" />
                          Same-day emergency repairs available
                        </p>
                      </div>
                    ),
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    ),
                    label: 'Hours of Operation',
                    content: (
                      <ul className="space-y-1.5 text-sm text-brand-gray">
                        <li className="flex justify-between max-w-xs"><span>Monday – Thursday</span><span className="font-semibold text-brand-dark">8:00 AM – 6:00 PM</span></li>
                        <li className="flex justify-between max-w-xs"><span>Friday – Sunday</span><span className="text-brand-gray/50">Closed</span></li>
                      </ul>
                    ),
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-light flex items-center justify-center text-brand-blue flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-dark text-sm uppercase tracking-wider mb-1.5">{item.label}</h4>
                      {item.content}
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* What to expect mini-section */}
              <motion.div variants={fadeUp} className="card-premium p-8">
                <h3 className="font-bold text-brand-dark text-lg mb-4">What happens when you book?</h3>
                <ol className="space-y-3">
                  {[
                    'Caroline calls you back within one business day to confirm your appointment.',
                    'Your first visit is with Damien — 25+ years clinical experience. He assesses your situation and walks through your options.',
                    'You leave with a written treatment plan and cost breakdown. No follow-up needed to get a number.',
                    'No pressure to decide. Take the quote home. Call other clinics. The right patients come back.',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="shrink-0 w-6 h-6 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center text-xs font-bold mt-0.5">{i + 1}</span>
                      <span className="text-brand-gray text-sm leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </motion.div>

              {/* Map */}
              <motion.div variants={fadeUp} className="rounded-3xl overflow-hidden shadow-card border border-brand-border h-72">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2882.2619438073867!2d-79.53920962386981!3d43.74668744636952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3040332fb17b%3A0xe5a3c9e3e3b3a3d5!2s2833%20Weston%20Rd%2C%20North%20York%2C%20ON%20M9M%202S1!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
                  width="100%" height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </motion.div>
            </motion.div>

            {/* Right: Booking form */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { ...fadeUp.visible.transition, delay: 0.15 } } }}
              className="lg:sticky lg:top-28"
            >
              <BookingForm />
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
