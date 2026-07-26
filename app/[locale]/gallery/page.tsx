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
      title: "Cast Partial Denture",
      before: "/digital-dentures-before-treatment-toronto.jpg",
      after: "/digital-dentures-after-treatment-toronto.jpg",
    },
    {
      title: "Acrylic Partial Denture",
      before: "/implant-retained-overdentures-before-toronto.jpg",
      after: "/implant-retained-overdentures-after-toronto.jpg",
    },
    {
      title: "Flexible Partial Denture",
      before: "/gallery-1-before.jpg",
      after: "/gallery-1-after.jpg",
    },
    {
      title: "Cast Partial Denture",
      before: "/gallery-2-before.jpg",
      after: "/gallery-2-after.jpg",
    },
    {
      title: "Flexible Partial Denture",
      before: "/gallery-3-before.jpg",
      after: "/gallery-3-after.jpg",
    },
    {
      title: "Immediate Partial Denture",
      before: "/gallery-6-before.jpg",
      after: "/gallery-6-after.jpg",
    },
    {
      title: "Cast Partial Denture",
      before: "/gallery-7-before.jpg",
      after: "/gallery-7-after.jpg",
    },
    {
      title: "Smile Transformation",
      before: "/gallery-8-before.jpg",
      after: "/gallery-8-after.jpg",
    },
  ];

  const featuredVideos = [
    {
      title: 'Upper & Lower Snap-On Dentures',
      caption: 'Heavy decay and staining treated with snap-on (implant-retained) dentures for both arches.',
      src: '/videos/smile-transformation-3-before-after-toronto.mp4',
      poster: '/videos/smile-transformation-3-before-after-toronto.jpg',
    },
    {
      title: 'Upper Immediate Dentures',
      caption: 'Gapped, missing upper teeth restored with upper immediate dentures.',
      src: '/videos/smile-transformation-2-before-after-toronto.mp4',
      poster: '/videos/smile-transformation-2-before-after-toronto.jpg',
    },
    {
      title: 'Upper Digital Denture',
      caption: 'Worn, uneven teeth restored with an upper digital denture.',
      src: '/videos/smile-transformation-before-after-toronto.mp4',
      poster: '/videos/smile-transformation-before-after-toronto.jpg',
    },
  ];

  const videoSchemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'VideoObject',
      name: 'Upper & Lower Snap-On Dentures — Before & After | Dentures Direct Toronto',
      description:
        'A real Dentures Direct patient, before and after — heavy decay and staining treated with snap-on (implant-retained) dentures for both arches. Filmed at our North York, Toronto denture clinic.',
      thumbnailUrl: ['https://www.denturesdirect.ca/videos/smile-transformation-3-before-after-toronto.jpg'],
      uploadDate: '2026-07-18',
      duration: 'PT11S',
      contentUrl: 'https://www.denturesdirect.ca/videos/smile-transformation-3-before-after-toronto.mp4',
      contentLocation: {
        '@type': 'Place',
        name: 'Dentures Direct',
        address: { '@type': 'PostalAddress', streetAddress: '2833 Weston Road', addressLocality: 'North York', addressRegion: 'ON', postalCode: 'M9M 2S1', addressCountry: 'CA' },
      },
      publisher: {
        '@type': 'Organization',
        name: 'Dentures Direct',
        logo: { '@type': 'ImageObject', url: 'https://www.denturesdirect.ca/dentures-direct-toronto-logo.png' },
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'VideoObject',
      name: 'Upper Immediate Dentures — Before & After | Dentures Direct Toronto',
      description:
        'A real Dentures Direct patient, before and after — gapped, missing upper teeth restored with upper immediate dentures. Filmed at our North York, Toronto denture clinic.',
      thumbnailUrl: ['https://www.denturesdirect.ca/videos/smile-transformation-2-before-after-toronto.jpg'],
      uploadDate: '2026-07-18',
      duration: 'PT10S',
      contentUrl: 'https://www.denturesdirect.ca/videos/smile-transformation-2-before-after-toronto.mp4',
      contentLocation: {
        '@type': 'Place',
        name: 'Dentures Direct',
        address: { '@type': 'PostalAddress', streetAddress: '2833 Weston Road', addressLocality: 'North York', addressRegion: 'ON', postalCode: 'M9M 2S1', addressCountry: 'CA' },
      },
      publisher: {
        '@type': 'Organization',
        name: 'Dentures Direct',
        logo: { '@type': 'ImageObject', url: 'https://www.denturesdirect.ca/dentures-direct-toronto-logo.png' },
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'VideoObject',
      name: 'Upper Digital Denture — Before & After | Dentures Direct Toronto',
      description:
        'A real Dentures Direct patient, before and after treatment — worn, uneven teeth restored with an upper digital denture. Filmed at our North York, Toronto denture clinic.',
      thumbnailUrl: ['https://www.denturesdirect.ca/videos/smile-transformation-before-after-toronto.jpg'],
      uploadDate: '2026-07-17',
      duration: 'PT11S',
      contentUrl: 'https://www.denturesdirect.ca/videos/smile-transformation-before-after-toronto.mp4',
      contentLocation: {
        '@type': 'Place',
        name: 'Dentures Direct',
        address: { '@type': 'PostalAddress', streetAddress: '2833 Weston Road', addressLocality: 'North York', addressRegion: 'ON', postalCode: 'M9M 2S1', addressCountry: 'CA' },
      },
      publisher: {
        '@type': 'Organization',
        name: 'Dentures Direct',
        logo: { '@type': 'ImageObject', url: 'https://www.denturesdirect.ca/dentures-direct-toronto-logo.png' },
      },
    },
  ];

  const clinicLocation = {
    '@type': 'Place',
    name: 'Dentures Direct',
    address: { '@type': 'PostalAddress', streetAddress: '2833 Weston Road', addressLocality: 'North York', addressRegion: 'ON', postalCode: 'M9M 2S1', addressCountry: 'CA' },
  };

  const imageSchemas = galleryItems.flatMap((item) => ([
    {
      '@context': 'https://schema.org',
      '@type': 'ImageObject',
      name: `${item.title} — Before | Dentures Direct Toronto`,
      description: `Before photo — ${item.title}, a real Dentures Direct patient case at our North York, Toronto denture clinic.`,
      contentUrl: `https://www.denturesdirect.ca${item.before}`,
      contentLocation: clinicLocation,
      creator: { '@type': 'Organization', name: 'Dentures Direct' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ImageObject',
      name: `${item.title} — After | Dentures Direct Toronto`,
      description: `After photo — ${item.title}, a real Dentures Direct patient case at our North York, Toronto denture clinic.`,
      contentUrl: `https://www.denturesdirect.ca${item.after}`,
      contentLocation: clinicLocation,
      creator: { '@type': 'Organization', name: 'Dentures Direct' },
    },
  ]));

  return (
    <div className="w-full pt-20 pb-24 bg-[#f8fafc] font-sans min-h-screen">
      {videoSchemas.map((schema, i) => (
        <script key={`video-schema-${i}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      {imageSchemas.map((schema, i) => (
        <script key={`image-schema-${i}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="text-center mb-16">
          <span className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4 block">Our Work</span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-brand-dark mb-6">Before & After Gallery</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse through real cases from our Toronto clinic. We take pride in restoring both the function and the aesthetics of every patient&apos;s smile.
          </p>
        </motion.div>

        {/* Featured before/after videos — real patient smile transformations */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-20">
          <div className="text-center mb-8">
            <span className="text-brand-blue font-bold uppercase tracking-widest text-sm mb-3 block">Featured&nbsp;·&nbsp;Videos</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark">Watch real smile transformations</h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Real Dentures Direct patients, before and after — filmed at our Toronto clinic.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredVideos.map((v) => (
              <div key={v.src}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-brand-border bg-brand-dark">
                  <video
                    controls
                    playsInline
                    loop
                    preload="none"
                    poster={v.poster}
                    className="w-full aspect-video"
                    aria-label={`Before and after — ${v.title} at Dentures Direct Toronto`}
                  >
                    <source src={v.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="text-center mt-4">
                  <h3 className="font-bold text-brand-dark">{v.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{v.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="grid md:grid-cols-2 gap-8">
          {galleryItems.map((item, idx) => (
            <motion.div key={idx} variants={fadeUp} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group">
              <div className="relative w-full grid grid-cols-2 gap-0.5 bg-white">
                <div className="relative w-full aspect-square bg-gray-200">
                  <Image src={item.before} alt={`Before - ${item.title} - Toronto Denture Clinic`} fill className="object-cover" />
                  <div className="absolute top-2 left-2 bg-black/60 text-white px-3 py-1 text-xs font-bold uppercase rounded tracking-wider backdrop-blur-sm z-10">Before</div>
                </div>
                <div className="relative w-full aspect-square bg-gray-100">
                  <Image src={item.after} alt={`After - ${item.title} - Toronto Denture Clinic`} fill className="object-cover" />
                  <div className="absolute top-2 right-2 bg-brand-blue/90 text-white px-3 py-1 text-xs font-bold uppercase rounded tracking-wider backdrop-blur-sm z-10">After</div>
                </div>
                {/* Direction indicator */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white shadow-lg flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="#0EA5E9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="px-5 py-4">
                <h3 className="font-bold text-brand-dark">{item.title}</h3>
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
