"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';

export default function GalleryPage() {
  const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };
  const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };
  const locale = useLocale();

  const galleryItems = [
    {
      title: "Digital Denture Restoration",
      before: "/digital-dentures-before-treatment-toronto.jpg",
      after: "/digital-dentures-after-treatment-toronto.jpg",
    },
    {
      title: "Implant Retained Overdentures",
      before: "/implant-retained-overdentures-before-toronto.jpg",
      after: "/implant-retained-overdentures-after-toronto.jpg",
    },
    {
      title: "Complete Maxillary Restoration",
      before: "/gallery-1-before.jpg",
      after: "/gallery-1-after.jpg",
    },
    {
      title: "Partial Denture Integration",
      before: "/gallery-2-before.jpg",
      after: "/gallery-2-after.jpg",
    },
    {
      title: "Emergency Repair & Reline",
      before: "/gallery-3-before.jpg",
      after: "/gallery-3-after.jpg",
    },
    {
      title: "Premium Digital Full Dentures",
      before: "/gallery-6-before.jpg",
      after: "/gallery-6-after.jpg",
    }
  ];

  return (
    <div className="w-full pt-20 pb-24 bg-[#f8fafc] font-sans min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="text-center mb-16">
          <span className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4 block">Our Work</span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-brand-dark mb-6">Before & After Gallery</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse through real cases from our Toronto clinic. We take pride in restoring both the function and the aesthetics of every patient&apos;s smile.
          </p>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="grid md:grid-cols-2 gap-8">
          {galleryItems.map((item, idx) => (
            <motion.div key={idx} variants={fadeUp} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group">
              <div className="relative w-full aspect-[3/4] flex flex-col">
                <div className="relative w-full h-1/2 bg-gray-200">
                  <Image src={item.before} alt={`Before - ${item.title}`} fill className="object-cover" />
                  <div className="absolute top-2 left-2 bg-black/60 text-white px-3 py-1 text-xs font-bold uppercase rounded tracking-wider backdrop-blur-sm z-10">Before</div>
                </div>
                <div className="relative w-full h-1/2 bg-gray-100 border-t-2 border-white">
                  <Image src={item.after} alt={`After - ${item.title}`} fill className="object-cover" />
                  <div className="absolute top-2 left-2 bg-brand-blue/90 text-white px-3 py-1 text-xs font-bold uppercase rounded tracking-wider backdrop-blur-sm z-10">After</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mt-16 text-center">
          <div className="bg-brand-blue/5 border border-brand-blue/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-brand-dark mb-4">Ready for your own transformation?</h3>
            <p className="text-gray-700 mb-6">Schedule a free consultation to see what our digital workflow can do for your smile.</p>
            <a href={`/${locale}/contact`} className="inline-block bg-brand-blue hover:bg-brand-dark text-white font-bold py-4 px-8 rounded-full transition-all transform hover:-translate-y-1 shadow-lg">
              Book Your Free Consultation
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
