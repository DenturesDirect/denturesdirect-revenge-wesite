"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function FirstTimePatientsPage() {
  const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

  return (
    <div className="w-full bg-white font-sans">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-brand-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4 block">Welcome to Dentures Direct</span>
            <h1 className="text-5xl md:text-7xl font-bold mb-8">Your First Visit: <span className="text-brand-blue">What to Expect</span></h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-300 leading-relaxed mb-10">
              We do things differently here. No messy impressions. No guesswork. Just precision digital technology and a team that&apos;s genuinely invested in getting your smile right.
            </p>
            <a href="tel:416-245-7474" className="inline-block bg-white text-brand-dark font-black py-5 px-12 rounded-full transition-transform hover:scale-105 text-xl shadow-xl">
              Book Your Free Consultation
            </a>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-4xl font-bold text-brand-dark mb-6">Forget Everything You&apos;ve Heard About Dentures</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                If your image of getting dentures involves trays of cold putty, multiple awkward fittings, and a result that never quite feels right — that&apos;s the old way. <strong>We don&apos;t do that here.</strong>
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                At Dentures Direct, every denture starts with a <strong>precision 3D intraoral scan</strong> — no goop, no gagging, no guesswork. Your denture is then CNC-milled in our on-site laboratory from a digital model that&apos;s accurate down to fractions of a millimetre.
              </p>
              <div className="bg-brand-blue/5 p-8 rounded-3xl border border-brand-blue/10">
                <p className="text-gray-700 italic">
                  &quot;The result is a fit that traditional methods simply can&apos;t match. Patients feel the difference from the very first moment.&quot;
                </p>
                <p className="text-sm text-brand-blue font-semibold mt-3">— Damien John Hiorth DD, Founder</p>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl font-bold text-brand-dark mb-6">Why Patients Choose Implant Dentures</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Traditional dentures sit on top of your gums. They can slip when you eat, click when you talk, and limit what foods you enjoy. <strong>Implant-retained dentures are anchored directly to dental implants</strong> — they snap firmly into place and stay there.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <h4 className="font-bold text-brand-blue mb-3">Eat What You Want</h4>
                  <p className="text-gray-600">Steak, apples, corn on the cob — nothing is off the menu. Implant dentures give you the bite force and stability to eat with real confidence again.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <h4 className="font-bold text-brand-blue mb-3">No Adhesives. Ever.</h4>
                  <p className="text-gray-600">Because implant dentures click securely onto implants, there&apos;s no need for messy pastes or adhesive strips. They stay put, period.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <h4 className="font-bold text-brand-blue mb-3">Speak Naturally</h4>
                  <p className="text-gray-600">No more worrying about dentures slipping mid-conversation. Implant-retained prosthetics give you the freedom to laugh, talk, and live without a second thought.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <h4 className="font-bold text-brand-blue mb-3">Preserve Your Jawbone</h4>
                  <p className="text-gray-600">Dental implants stimulate the jawbone, helping prevent the bone loss and facial collapse that often comes with traditional dentures over time.</p>
                </div>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="pt-8 border-t border-gray-100">
              <h2 className="text-3xl font-bold text-brand-dark mb-6">Your First Visit: Step-by-Step</h2>
              <ol className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-accent text-white flex items-center justify-center font-bold shrink-0">1</div>
                  <div>
                    <h5 className="font-bold text-lg mb-1">Free Consultation</h5>
                    <p className="text-gray-600">We sit down with you, discuss your goals, and assess your oral health. No pressure, no sales pitch — just an honest conversation about what&apos;s possible.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-accent text-white flex items-center justify-center font-bold shrink-0">2</div>
                  <div>
                    <h5 className="font-bold text-lg mb-1">3D Digital Scan</h5>
                    <p className="text-gray-600">We scan your mouth with our intraoral scanner in minutes. No trays, no putty, no discomfort. You&apos;ll see a 3D model of your mouth on screen in real time.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-accent text-white flex items-center justify-center font-bold shrink-0">3</div>
                  <div>
                    <h5 className="font-bold text-lg mb-1">Your Custom Treatment Plan</h5>
                    <p className="text-gray-600">We walk you through your options — from precision digital dentures to implant-retained solutions — with transparent pricing and no surprises.</p>
                  </div>
                </li>
              </ol>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-accent text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to See the Difference?</h2>
          <p className="text-xl mb-10 opacity-90 text-white">Book a free consultation and experience what modern denture care actually looks like.</p>
          <a href="tel:416-245-7474" className="inline-block bg-brand-dark text-white font-bold py-4 px-10 rounded-full hover:bg-black transition-colors text-xl shadow-lg">
            Call (416) 245-7474
          </a>
        </div>
      </section>
    </div>
  );
}
