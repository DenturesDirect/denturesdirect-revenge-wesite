"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import ImplantCandidacyQuiz from '@/components/ImplantCandidacyQuiz';

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } };
const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

const benefits = [
  {
    title: 'Designed & Milled In-House',
    desc: 'Every snap-on overdenture is designed personally by Damien DD and milled in our own lab. No overseas outsourcing. Perfect fit control.',
    icon: '🔬'
  },
  {
    title: 'Gold-Standard Attachments',
    desc: 'We utilize the Locator R-TX attachment system, offering maximum durability, easy entry, and 50% more pivot resistance than older systems.',
    icon: '⚙️'
  },
  {
    title: 'Transparent Flat Pricing',
    desc: '$5,250 per arch flat. No hidden fees, no tax, no surprises. Both arches are $10,000 (save $500). Written quotes provided.',
    icon: '💎'
  },
  {
    title: '15-Min Drive from Woodbridge',
    desc: 'Located at 2833 Weston Road. Quick drive south via Hwy 400 or Weston Rd. Free front-row parking and step-free access.',
    icon: '🚗'
  }
];

const faqs = [
  {
    q: 'Why drive to North York instead of a local Woodbridge clinic?',
    a: 'We are one of the very few clinics in the GTA with a complete in-house digital laboratory. Because Damien DD and Luisa design and fabricate your denture down the hall, we don’t outsource to commercial labs. This means fewer appointments, direct quality control, and faster adjustments.'
  },
  {
    q: 'How many implants do I need for snap-on dentures?',
    a: 'For the lower arch, 3 implants are standard to provide absolute stability and prevent rocking. For the upper arch, 4 implants are used because the upper bone is softer and requires more support. We will assess your jaw bone structure during your consult.'
  },
  {
    q: 'What is the total cost breakdown?',
    a: 'The overdenture itself is $5,250 per arch (flat rate, no tax). The surgical cost to place the implants is separate and paid directly to the oral surgeon. We coordinate directly with top-tier GTA oral surgeons to align your surgical plan with our prosthetic design.'
  },
  {
    q: 'I already have implants placed — can you build the overdenture?',
    a: 'Yes! We frequently build new overdentures or convert existing dentures for patients who had their implants placed elsewhere. Come in for a free consultation so we can verify the hardware and implants.'
  }
];

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
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-72 pb-5' : 'max-h-0'}`}>
        <p className="text-gray-600 leading-relaxed text-sm">{a}</p>
      </div>
    </div>
  );
}

export default function WoodbridgeClient() {
  const locale = useLocale();

  return (
    <div className="w-full font-sans bg-white" style={{ fontFamily: "'Poppins', sans-serif" }}>

      {/* ── Hero ── */}
      <section className="relative pt-28 pb-20 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="/implant-landing-hero.png"
            alt="Premium implant overdentures near Woodbridge Vaughan"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-brand-dark/80" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 bg-brand-blue/20 border border-brand-blue/40 rounded-full px-4 py-1.5 text-brand-blue text-sm font-semibold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
              Serving Woodbridge, Vaughan & Area
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Premium Snap-On Overdentures<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-blue-300">
                Near Woodbridge & Vaughan
              </span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Tired of loose, slipping dentures? Get secure, implant-retained overdentures engineered with digital precision by Damien DD. A quick drive down Hwy 400.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:416-245-7474"
                className="inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-full text-base transition-all shadow-2xl shadow-brand-blue/30"
              >
                Call Clinic: (416) 245-7474
              </a>
              <a
                href="#quiz-section"
                className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white text-white font-semibold py-4 px-8 rounded-full text-base transition-all"
              >
                Check Your Candidacy ↓
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Benefits grid ── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">
              Why Woodbridge Residents Choose Dentures Direct
            </h2>
            <p className="text-gray-600 mt-3 text-lg">
              We specialize in custom, in-house prosthetic engineering for maximum stability and aesthetics.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map(item => (
              <div key={item.title} className="flex gap-5 bg-[#f8fafc] border border-gray-150 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-4xl shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-bold text-brand-dark text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quiz Section ── */}
      <section id="quiz-section" className="py-20 bg-[#f8fafc] border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-brand-blue font-bold uppercase tracking-widest text-xs mb-3 block">
              Online Candidate Check
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">
              Are you a candidate for snap-on dentures?
            </h2>
            <p className="text-gray-600 mt-2">
              Answer 4 simple questions to find out if you qualify for implant-retained overdentures.
            </p>
          </div>
          <ImplantCandidacyQuiz />
        </div>
      </section>

      {/* ── Map & Directions ── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-brand-dark">
                An Easy 15-Minute Drive Down Hwy 400
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Woodbridge residents drive to our clinic because we provide specialized in-house digital milling that saves time and guarantees a better fit. 
              </p>
              <div className="space-y-3 bg-[#f8fafc] border border-gray-100 p-6 rounded-2xl">
                <p className="text-sm text-gray-700">
                  🚗 <strong>Driving Route:</strong> Simply head south on Highway 400, take the highway exit toward Weston Road, or take Weston Road all the way south to 2833 Weston Road.
                </p>
                <p className="text-sm text-gray-700">
                  🅿️ <strong>Parking:</strong> Free, level, step-free parking directly in front of our main entrance. Easily wheelchair accessible.
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2882.2619438073867!2d-79.53920962386981!3d43.74668744636952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3040332fb17b%3A0xe5a3c9e3e3b3a3d5!2s2833%20Weston%20Rd%2C%20North%20York%2C%20ON%20M9M%202S1!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                title="Dentures Direct Clinic Location Map"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-dark">Frequently Asked Questions</h2>
          </div>
          <div className="bg-white rounded-2xl border border-gray-150 p-6 md:p-8 shadow-sm">
            {faqs.map(faq => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-20 bg-brand-dark text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for a Denture That Stays Put?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Book a free consultation with Damien DD. We will evaluate your jaw, present your options, and give you a complete written quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:416-245-7474" className="inline-flex items-center justify-center bg-brand-blue hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-full transition-all text-lg shadow-2xl shadow-brand-blue/30">
              Call (416) 245-7474
            </a>
            <Link href={`/${locale}/contact`} className="inline-flex items-center justify-center px-10 py-4 bg-white/10 border border-white/25 text-white font-semibold rounded-full hover:bg-white/20 transition-all text-lg">
              Book Appointment Online
            </Link>
          </div>
        </div>
      </section>

      {/* Google Fonts */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');`}</style>
    </div>
  );
}
