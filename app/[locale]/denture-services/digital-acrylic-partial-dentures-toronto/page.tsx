import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Digital acrylic partial dentures Toronto | Affordable Partials North York',
  description: 'Affordable Digital acrylic partial dentures in Toronto. Fast, custom fabrication at Dentures Direct in North York. Perfect for transitional or budget-friendly care.',
  openGraph: {
    title: 'Digital acrylic partial dentures Toronto – Dentures Direct',
    description: 'Affordable Digital acrylic partial dentures, custom-made in our North York on-site lab. Budget-friendly denture care in Toronto.',
    url: 'https://www.denturesdirect.ca/en/denture-services/acrylic-partial-dentures',
    siteName: 'Dentures Direct',
    type: 'website',
    images: [{
      url: '/acrylic-partial-denture-user.jpg',
      width: 1200,
      height: 630,
      alt: 'Digital acrylic partial dentures – Dentures Direct Toronto',
    }],
  },
};

export default function AcrylicPartialDenturesPage() {
  return (
    <div className="w-full bg-brand-light font-sans">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 bg-brand-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white text-center">
          <span className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4 block">Affordable & Versatile</span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Acrylic Partial <span className="text-brand-blue">Dentures</span> in Toronto</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-300 mb-8 leading-relaxed">
            A cost-effective and highly adaptable solution for replacing missing teeth. Handcrafted in our North York on-site lab, Digital acrylic partials are an excellent choice for transitional care or as a budget-friendly long-term option in the GTA.
          </p>
          <a href="tel:416-245-7474" className="inline-block bg-brand-blue hover:bg-white hover:text-brand-dark text-white font-bold py-4 px-8 rounded-md transition-colors text-lg">
            Schedule a Consultation
          </a>
        </div>
      </section>

      {/* Image Showcase Section */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
              <Image src="/acrylic-partial-denture-user.jpg" alt="Affordable Digital acrylic partial denture with metal wire clasps, custom-made in North York Toronto" title="Digital acrylic partial denture Toronto" fill className="object-cover" />
            </div>
            <div className="relative aspect-square rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
              <Image src="/happy_senior_acrylic.png" alt="Happy senior couple in the GTA with their new Digital acrylic partial dentures" title="Affordable Dentures Patients" fill className="object-cover object-top" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-dark">Benefits of Digital acrylic partials</h2>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">Often referred to as "flippers," Digital acrylic partials are crafted from a pink plastic base with replacement teeth and optional metal wire clasps for retention.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-gray-100 rounded-2xl bg-[#f8fafc]">
              <h3 className="text-xl font-bold text-brand-blue mb-3">Highly Affordable</h3>
              <p className="text-gray-600">Digital acrylic partials are typically the most budget-friendly option available for replacing one or more missing teeth.</p>
            </div>
            <div className="p-8 border border-gray-100 rounded-2xl bg-[#f8fafc]">
              <h3 className="text-xl font-bold text-brand-blue mb-3">Quick Fabrication</h3>
              <p className="text-gray-600">Because they do not require a cast metal framework, Digital acrylic partials can be manufactured very quickly in our on-site lab.</p>
            </div>
            <div className="p-8 border border-gray-100 rounded-2xl bg-[#f8fafc]">
              <h3 className="text-xl font-bold text-brand-blue mb-3">Easy to Modify</h3>
              <p className="text-gray-600">If you anticipate needing further tooth extractions, teeth can easily be added to an existing Digital acrylic partial denture.</p>
            </div>
            <div className="p-8 border border-gray-100 rounded-2xl bg-[#f8fafc]">
              <h3 className="text-xl font-bold text-brand-blue mb-3">Ideal Transitional Care</h3>
              <p className="text-gray-600">They are perfect as temporary replacements while you wait for gums to heal before getting implants or a permanent bridge.</p>
            </div>
            <div className="p-8 border border-gray-100 rounded-2xl bg-[#f8fafc]">
              <h3 className="text-xl font-bold text-brand-blue mb-3">Natural Appearance</h3>
              <p className="text-gray-600">The acrylic base is color-matched to your natural gum tissue, providing a discreet and pleasant aesthetic result.</p>
            </div>
            <div className="p-8 border border-gray-100 rounded-2xl bg-[#f8fafc]">
              <h3 className="text-xl font-bold text-brand-blue mb-3">Simple Adjustments</h3>
              <p className="text-gray-600">If sore spots occur, the acrylic material can be easily adjusted or relined for an improved fit during your visits.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-brand-dark text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-6">Start Your Journey to a New Smile</h2>
          <a href="tel:416-245-7474" className="inline-block bg-brand-accent text-white font-bold py-4 px-10 rounded-md hover:bg-emerald-500 transition-colors text-xl shadow-lg mt-4">
            Call (416) 245-7474 Today
          </a>
        </div>
      </section>
    </div>
  );
}
