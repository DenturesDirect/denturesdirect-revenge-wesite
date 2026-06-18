"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ImplantRetainedPage() {
  return (
    <div className="w-full bg-brand-light font-sans">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <Image src="/dancing-senior-couple.png" alt="Senior couple dancing" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
          <span className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4 block">Premium Restoration</span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Implant-Retained <br/><span className="text-brand-blue">Dentures</span></h1>
          <p className="text-xl max-w-2xl text-gray-300 mb-8 leading-relaxed">
            Sometimes, life brings unavoidable losses. That doesn’t mean we should quietly accept all the negatives that come with losing our natural teeth.
          </p>
          <a href="tel:416-245-7474" className="inline-block bg-brand-blue hover:bg-white hover:text-brand-dark text-white font-bold py-4 px-8 rounded-md transition-colors text-lg">
            Book Your Free Consultation
          </a>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-brand-dark mb-6">Regain Your Confident Smile in Toronto</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The psychological loss of confidence brought on by an altered appearance, the physical bone and gum tissue loss that can impair speaking, and the loss of our ability to properly nourish the body—these do not have to be permanent.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Implant-retained dentures in Toronto can mitigate those losses and put an end to needless discomfort. By replacing damaged or missing teeth with teeth that look and feel the closest to natural teeth, you can regain your confident, beautiful smile and get more enjoyment out of life.
            </p>
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
            <Image src="/dancing-senior-couple.png" alt="Happy senior couple enjoying life with implant dentures" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Stages Section */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-dark">The 5 Stages of Implant-Retained Dentures</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-brand-blue mb-3">1. Pre-Prosthetic Surgery</h3>
              <p className="text-gray-600">Before implants, teeth may be removed and bone grafting done. Healing takes months, with a temporary denture provided.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-brand-blue mb-3">2. Implant Placement</h3>
              <p className="text-gray-600">Next comes implant surgery, with healing and integration over three to six months while wearing a temporary denture.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-brand-blue mb-3">3. Positioning Implants</h3>
              <p className="text-gray-600">Implant-retained dentures need precise implant placement. At Dentures Direct, we tailor placement to your exact jaw needs.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-brand-blue mb-3">4. Digital Impressions</h3>
              <p className="text-gray-600">After healing, we take fresh impressions for our on-site lab to create your custom-fit, CNC-milled dentures.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-brand-blue mb-3">5. Denture Placement</h3>
              <p className="text-gray-600">The final step is placement, where your custom denture is attached to the implants. You’ll also be shown proper care and hygiene.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-dark">Fixed vs. Snap-On Dentures</h2>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">Understanding the two most common implant-supported solutions available in Toronto.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-[#f8fafc] p-10 rounded-[2rem] border border-gray-100 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-bl-full transition-transform group-hover:scale-110"></div>
              <h3 className="text-2xl font-bold text-brand-blue mb-6">Fixed Dentures (All-on-4)</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Fixed dentures are secured in place using dental implants and are <strong>not removable at home</strong>. They are designed to feel very similar to natural teeth and remain in your mouth at all times.
              </p>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2 mt-1">✓</span>
                  Maximum stability for eating and speaking
                </li>
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2 mt-1">✓</span>
                  No need to remove for daily cleaning
                </li>
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2 mt-1">✓</span>
                  Prevents jawbone deterioration
                </li>
              </ul>
              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-500 italic">Investment: Usually exceeds $25,000 per arch due to complexity and high-end materials.</p>
              </div>
            </div>

            <div className="bg-[#f8fafc] p-10 rounded-[2rem] border border-gray-100 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 rounded-bl-full transition-transform group-hover:scale-110"></div>
              <h3 className="text-2xl font-bold text-brand-blue mb-6">Snap-On Overdentures</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Snap-on dentures are supported by dental implants but remain <strong>removable</strong>, allowing you to take them out for cleaning and maintenance. They "snap" into place for a secure fit.
              </p>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2 mt-1">✓</span>
                  Significantly more stable than traditional dentures
                </li>
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2 mt-1">✓</span>
                  Easier to clean and maintain at home
                </li>
                <li className="flex items-start">
                  <span className="text-brand-accent mr-2 mt-1">✓</span>
                  More affordable than fixed options
                </li>
              </ul>
              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-500 italic">Investment: A practical and effective middle-ground for many patients in Toronto.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-brand-blue text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Ready for a Permanent Solution?</h2>
          <p className="text-xl mb-10 text-brand-light">Stop struggling with loose dentures. Call Dentures Direct today to find out if you are a candidate for implant-retained dentures.</p>
          <a href="tel:416-245-7474" className="inline-block bg-white text-brand-dark font-bold py-4 px-10 rounded-md hover:bg-brand-light transition-colors text-xl shadow-lg">
            Call (416) 245-7474
          </a>
        </div>
      </section>
    </div>
  );
}
