"use client";
import React from 'react';
import Image from 'next/image';

export default function EmergencyRepairsPage() {
  return (
    <div className="w-full bg-brand-light font-sans">
      {/* High Alert Hero Section */}
      <section className="relative pt-24 pb-20 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/gallery-3-after.jpg')] bg-cover bg-center opacity-10 blur-sm"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white text-center">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-red-500/20 text-red-400 rounded-full mb-6 border border-red-500/50 font-bold tracking-widest uppercase text-sm">
            <span className="w-2 h-2 rounded-full bg-red-500 mr-2 animate-pulse"></span>
            Urgent Same-Day Care
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Emergency Denture <span className="text-brand-accent">Repairs</span></h1>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            A broken denture, much like broken eyeglasses, is an emergency that needs immediate attention. Good news: Dentures Direct offers same-day emergency denture repairs in Toronto, usually within about an hour.
          </p>
          <a href="tel:416-245-7474" className="inline-block bg-white text-brand-dark font-black py-5 px-12 rounded-lg transition-transform hover:scale-105 text-2xl shadow-[0_0_30px_rgba(255,255,255,0.3)]">
            CALL NOW: (416) 245-7474
          </a>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-dark">Same-Day Denture Repair Solutions</h2>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">Since all work is done right in our on-site lab, we don’t need to outsource labor or parts, which helps keep costs down for you.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 border border-gray-100 rounded-xl bg-gray-50 flex">
              <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center text-brand-blue font-bold flex-shrink-0 mr-4">1</div>
              <div>
                <h4 className="text-xl font-bold text-brand-dark mb-2">Cracked Denture</h4>
                <p className="text-gray-600"><strong>Solution:</strong> The cracks are treated so new acrylic can be added; the repaired base is cured, finished, and polished.</p>
              </div>
            </div>
            <div className="p-8 border border-gray-100 rounded-xl bg-gray-50 flex">
              <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center text-brand-blue font-bold flex-shrink-0 mr-4">2</div>
              <div>
                <h4 className="text-xl font-bold text-brand-dark mb-2">Broken or Old Denture Base</h4>
                <p className="text-gray-600"><strong>Solution:</strong> Rebase. The existing teeth remain in the same place, but the entire acrylic base material is replaced.</p>
              </div>
            </div>
            <div className="p-8 border border-gray-100 rounded-xl bg-gray-50 flex">
              <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center text-brand-blue font-bold flex-shrink-0 mr-4">3</div>
              <div>
                <h4 className="text-xl font-bold text-brand-dark mb-2">Tooth has fallen off</h4>
                <p className="text-gray-600"><strong>Solution:</strong> A new tooth is matched and ground, the replacement area is prepared, and the tooth is mechanically attached. Acrylic is added to replace the gum.</p>
              </div>
            </div>
            <div className="p-8 border border-gray-100 rounded-xl bg-gray-50 flex">
              <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center text-brand-blue font-bold flex-shrink-0 mr-4">4</div>
              <div>
                <h4 className="text-xl font-bold text-brand-dark mb-2">Bone and/or Tooth Loss</h4>
                <p className="text-gray-600"><strong>Solution:</strong> Relining of the denture. An impression of your mouth is made with the denture in place, and new acrylic material is added to correct the fit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-brand-dark">Don&apos;t Panic, We Can Fix This</h3>
              <p className="text-lg text-gray-600">
                Whether your denture has snapped in half, suffered a chipped tooth, or simply doesn&apos;t fit properly anymore, our master denturists can restore it to perfect working condition directly in our on-site lab.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
              <Image src="/broken-denture-repair.png" alt="Broken acrylic denture being repaired in Toronto lab" title="Emergency Denture Repair Toronto" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-brand-dark mb-6">How can I fix my dentures at home if they break?</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            If your dentures break in half, you may try attaching them together with a bonding material found in a denture repair kit. <strong>Note that you should never use other adhesives or superglue products</strong>, as they are not designed for dental appliances and contain toxic substances.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Even if you manage to attach the broken pieces together, keep in mind that the fixed denture won’t last: you should still visit Dentures Direct to get your denture permanently repaired as soon as possible.
          </p>
          <div className="p-6 bg-white border-l-4 border-brand-accent rounded shadow-sm inline-block text-left">
            <p className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">On-Site Lab Address</p>
            <p className="text-lg text-brand-dark font-medium">2833 Weston Road, North York, ON M9M 2S1</p>
          </div>
        </div>
      </section>
    </div>
  );
}
