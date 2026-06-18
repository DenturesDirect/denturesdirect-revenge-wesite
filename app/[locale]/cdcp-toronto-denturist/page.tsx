"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';

export default function CdcpPillar() {
  const locale = useLocale();
  const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };

  return (
    <div className="w-full pt-24 pb-20 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="bg-brand-dark text-white rounded-3xl p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
          </div>
          
          <div className="relative z-10">
            <span className="inline-block px-4 py-1 bg-brand-blue text-white font-bold rounded-full text-sm mb-6 uppercase tracking-wider">Official Provider</span>
            <h1 className="text-5xl font-extrabold text-brand-light mb-6">Canadian Dental Care Plan (CDCP)</h1>
            <p className="text-2xl text-gray-300 max-w-3xl mb-10 leading-relaxed font-medium">
              We proudly accept the CDCP. Get your premium digital dentures fully covered if you are an eligible Canadian senior.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href={`/${locale}/cdcp-toronto-denturist/how-to-apply`} className="btn-shimmer bg-brand-blue hover:bg-brand-blueDark text-white text-center font-bold py-4 px-8 rounded-full text-xl transition-all shadow-cta hover:shadow-cta-hover">
                Check Eligibility & Apply
              </a>
              <a href={`/${locale}/cdcp-toronto-denturist/covered-services-list`} className="bg-transparent border-2 border-white/40 hover:bg-white/10 text-white text-center font-bold py-4 px-8 rounded-full text-xl transition-all">
                View Covered Services
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
