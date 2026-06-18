import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Digital Full Dentures Toronto | Precision Milled Digital Complete Dentures',
  description: 'Dentures Direct specializes in precision digital full dentures in Toronto. Milled to 3-micron tolerance using impression-free techniques for a flawless fit in North York.',
  openGraph: {
    title: 'Digital Full Dentures Toronto – Dentures Direct',
    description: 'Precision digital full dentures milled to 3-micron tolerance. 100% impression-free at our North York clinic.',
    url: 'https://www.denturesdirect.ca/en/denture-services/full-complete-dentures',
    siteName: 'Dentures Direct',
    type: 'website',
    images: [{
      url: '/precision_digital_full_dentures.png',
      width: 1200,
      height: 630,
      alt: 'Digital Full Dentures – Dentures Direct Toronto',
    }],
  },
};

export default function FullDenturesPage() {
  return (
    <div className="w-full bg-brand-light font-sans">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 bg-brand-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white text-center">
          <span className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4 block">3-Micron Precision</span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Digital Full <span className="text-brand-blue">Dentures</span> in Toronto</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-300 mb-8 leading-relaxed">
            Experience the future of complete restoration. Our digital dentures are exclusively impression-free and milled to a 3-micron tolerance for an unparalleled fit and aesthetic result for our patients in North York and across the GTA.
          </p>
          <a href="tel:416-245-7474" className="inline-block bg-brand-blue hover:bg-white hover:text-brand-dark text-white font-bold py-4 px-8 rounded-md transition-colors text-lg">
            Schedule Your Digital Scan
          </a>
        </div>
      </section>

      {/* Image Showcase Section */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white bg-gray-100">
              <Image src="/precision_digital_full_dentures.png" alt="Precision milled digital full dentures handcrafted in Toronto" title="Digital Full Dentures Toronto" fill className="object-cover" />
            </div>
            <div className="relative aspect-square rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
              <Image src="/happy_seniors_full_dentures.png" alt="Happy senior couple in Toronto showing off their precision digital dentures" title="Satisfied Digital Denture Patients" fill className="object-cover object-top" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-dark">The Digital Difference</h2>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">We have eliminated messy impressions and inconsistent fits. Our exclusively digital workflow ensures every Digital Complete Denture is a masterpiece of medical engineering.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-gray-100 rounded-2xl bg-[#f8fafc]">
              <h3 className="text-xl font-bold text-brand-blue mb-3">3-Micron Tolerance</h3>
              <p className="text-gray-600">Our on-site CNC milling machines produce dentures with microscopic accuracy, ensuring a suction-fit that traditional methods simply cannot match.</p>
            </div>
            <div className="p-8 border border-gray-100 rounded-2xl bg-[#f8fafc]">
              <h3 className="text-xl font-bold text-brand-blue mb-3">Impression-Free</h3>
              <p className="text-gray-600">Using advanced intraoral scanners, we capture a perfect 3D map of your mouth. No more gagging on goop, just a fast and comfortable digital scan.</p>
            </div>
            <div className="p-8 border border-gray-100 rounded-2xl bg-[#f8fafc]">
              <h3 className="text-xl font-bold text-brand-blue mb-3">Superior Materials</h3>
              <p className="text-gray-600">Our digital dentures are milled from high-density, pre-polymerized discs, making them 8x stronger and more bio-hygienic than traditional cured acrylic.</p>
            </div>
            <div className="p-8 border border-gray-100 rounded-2xl bg-[#f8fafc]">
              <h3 className="text-xl font-bold text-brand-blue mb-3">Perfect Reproducibility</h3>
              <p className="text-gray-600">Because your denture is a digital file, if you ever lose or break it, we can mill an exact duplicate in 24 hours without a new appointment.</p>
            </div>
            <div className="p-8 border border-gray-100 rounded-2xl bg-[#f8fafc]">
              <h3 className="text-xl font-bold text-brand-blue mb-3">Natural Aesthetics</h3>
              <p className="text-gray-600">Our digital design software allows us to customize every tooth's position, shading, and texture for a smile that looks 100% natural.</p>
            </div>
            <div className="p-8 border border-gray-100 rounded-2xl bg-[#f8fafc]">
              <h3 className="text-xl font-bold text-brand-blue mb-3">Faster Turnaround</h3>
              <p className="text-gray-600">By moving the laboratory work into the digital realm, we reduce the number of appointments needed to achieve a final, flawless result.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-brand-dark text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-6">Experience the Precision of Digital Care</h2>
          <a href="tel:416-245-7474" className="inline-block bg-brand-accent text-white font-bold py-4 px-10 rounded-md hover:bg-emerald-500 transition-colors text-xl shadow-lg mt-4">
            Book Your Digital Scan (416) 245-7474
          </a>
        </div>
      </section>
    </div>
  );
}
