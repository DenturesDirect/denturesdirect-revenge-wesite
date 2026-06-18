"use client";
import React from 'react';

export default function HowToApplyPage() {
  return (
    <div className="w-full bg-brand-light font-sans">
      <section className="relative pt-24 pb-20 bg-brand-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white text-center">
          <span className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4 block">Official CDCP Provider</span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">How to Apply for the <br/><span className="text-brand-blue">Canadian Dental Care Plan</span></h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-300 mb-8 leading-relaxed">
            The CDCP provides coverage for high-quality digital dentures to eligible Canadians. Dentures Direct is proud to be an official participating provider in Toronto. Here is everything you need to know to get started.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-dark mb-10 text-center">Your 3-Step Guide to CDCP Dentures</h2>
          
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center flex-shrink-0 text-2xl font-bold">1</div>
              <div>
                <h3 className="text-2xl font-bold text-brand-dark mb-3">Check Your Eligibility</h3>
                <p className="text-gray-700 leading-relaxed">The CDCP is rolling out in phases. Currently, applications are open for seniors aged 65 and older, adults with a valid Disability Tax Credit certificate, and children under 18. You must have an adjusted family net income under $90,000 and have filed your tax return for the previous year.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center flex-shrink-0 text-2xl font-bold">2</div>
              <div>
                <h3 className="text-2xl font-bold text-brand-dark mb-3">Apply via Service Canada</h3>
                <p className="text-gray-700 leading-relaxed">You can apply online through the official Service Canada website. Once approved, you will receive a welcome package from Sun Life (the program administrator) containing your member card, start date, and details on your exact coverage percentage.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-16 h-16 bg-brand-accent text-white rounded-full flex items-center justify-center flex-shrink-0 text-2xl font-bold">3</div>
              <div>
                <h3 className="text-2xl font-bold text-brand-dark mb-3">Book Your Consultation with Dentures Direct</h3>
                <p className="text-gray-700 leading-relaxed">Once your coverage begins, simply bring your Sun Life member card to our clinic. We will handle all the direct billing and pre-authorizations for you, so you can focus entirely on getting your new, custom-milled smile.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-blue text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Have Your Sun Life Card Ready?</h2>
          <p className="text-xl mb-10 text-brand-light">Call our front desk to schedule your impression-free digital scan today.</p>
          <a href="tel:416-245-7474" className="inline-block bg-white text-brand-dark font-bold py-4 px-10 rounded-md hover:bg-brand-light transition-colors text-xl shadow-lg">
            Call (416) 245-7474
          </a>
        </div>
      </section>
    </div>
  );
}
