"use client";
import React from 'react';

export default function CoveredServicesPage() {
  return (
    <div className="w-full bg-brand-light font-sans">
      <section className="relative pt-24 pb-20 bg-brand-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white text-center">
          <span className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4 block">CDCP Benefits Guide</span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">CDCP Covered <br/><span className="text-brand-blue">Denture Services</span></h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-300 mb-8 leading-relaxed">
            As an authorized provider in Toronto, Dentures Direct accepts the Canadian Dental Care Plan for a wide variety of essential prosthodontic services. Discover what is covered under your new plan.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-50 rounded-2xl p-10 border border-gray-200">
              <h3 className="text-2xl font-bold text-brand-dark mb-6 border-b pb-4">Covered Denture Services</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-brand-accent mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-700"><strong>Complete Standard Dentures:</strong> Full upper and lower plates for patients missing all teeth in an arch.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-brand-accent mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-700"><strong>Removable Digital partial dentures:</strong> Standard cast metal or acrylic partials to replace specific missing teeth.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-brand-accent mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-700"><strong>Emergency Repairs:</strong> Fixing cracked bases or reattaching lost artificial teeth.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-brand-accent mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-700"><strong>Relining & Rebasing:</strong> Adjusting the fit of your current dentures to accommodate natural bone loss.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-brand-accent mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-700"><strong>Exams & Checkups:</strong> Regular clinical examinations and periodic checkups are covered to maintain your oral health.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-brand-accent mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-700"><strong>Tooth Additions & Adjustments:</strong> We can add teeth to existing appliances or provide necessary adjustments for comfort.</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-brand-dark mb-6">Important Pre-Authorizations</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                While the CDCP covers many standard denture services, it's important to know that major prosthodontic work (like new complete or Digital partial dentures) often requires <strong>pre-authorization</strong> starting in late 2024.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Don't worry—our administration team handles all the paperwork. We will examine your mouth, submit the exact treatment plan to Sun Life, and confirm your coverage amounts before any work begins, so you never have unexpected out-of-pocket costs.
              </p>
              <div className="p-6 bg-brand-light rounded-xl border border-brand-blue/20">
                <p className="text-brand-dark font-bold mb-2">Note on Co-Payments</p>
                <p className="text-gray-600 text-sm mb-4">Depending on your family income bracket, the CDCP may cover 100%, 60%, or 40% of the standard fee guide. You are responsible for any remaining co-payment portion.</p>
                <p className="text-brand-dark/70 text-[10px] italic leading-tight border-t border-brand-blue/10 pt-3">
                  Disclaimer: Please note that 100% coverage under the CDCP fee guide does not fall in line with usual denturist fees. We will be happy to provide 100% transparency on pricing during your initial consultation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
