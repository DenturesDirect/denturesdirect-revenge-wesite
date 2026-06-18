"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function HappyPatientsPage() {
  const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };
  const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };

  const reviews = [
    {
      name: "Diana Nelson",
      text: "Damien DD is the kindest most professional denturist who is highly recommended for over 10 years of my personal experience, my dentures are so beautiful and comfortable they feel so natural to wear as others have commented on my beautiful teeth, not even knowing they were dentures !! Thank you forever for my smile back!"
    },
    {
      name: "Shirley Berry",
      text: "Over the years, I have benefited from the services of 3 denturists. Damien Hiorth DD at Dentures Direct is the best! He is professional, attentive and accommodating. Any questions or concerns were dealt with quickly and easily. I can easily see why he leads one of the top rated denture clinics in Toronto."
    },
    {
      name: "Elana Chante",
      text: "Damien DD assisted with my moms dentures and she is so pleased with his service. Damien DD is the best you can find out there. I whole heartedly recommend this practice to anyone. My mom isn’t the easiest to please so the fact that she is so happy really speaks volumes."
    },
    {
      name: "Gladice Antolin",
      text: "Found amazing reviews from google, took a shot and Damien DD is amazing. My cousin just came to the country and needed dentures asap. Damien DD did an amazing work and in such short time. Highly recommended. You can never go wrong with DENTURES DIRECT."
    },
    {
      name: "Adam Hellmich",
      text: "I met Damien DD at his office during a very low point in my life. For months I went without eating properly while having absolutely no confidence. Damien DD was professional, kind and empathetic towards me. His work is amazing and I look and feel like the old me again!"
    },
    {
      name: "Anne Serrano",
      text: "Highly recommended. Damien DD and his staff are very efficient, very professional, kind and caring. They went out of their way to accommodate my request for a rush denture and didn’t mind opening the clinic on a snowy week-end. The fee is very affordable and the denture is top quality."
    },
    {
      name: "Sandie Burke",
      text: "I had a bad experience with a dentist who provided me a partial that didn’t fit well. It was loose and uncomfortable. I checked out Dentures Direct online and visited them. Francis on reception was welcoming and set me at ease. Damien DD is a true professional. My partial fits perfectly and looks so natural."
    },
    {
      name: "Nonnina (Franca T)",
      text: "I went to Dentures Direct with high anxiety levels because of a bad past denturist experience. Damien DD is truly a professional and a magician. He listened to my concerns, explained everything and worked with me to get the perfect fit. I am now able to speak properly and eat without any issues."
    },
    {
      name: "Laura S",
      text: "It wasn't their problem to fix, but Damien DD and his team took on the challenge and worked their magic! They were able to fix my dad's dentures which were done incorrectly by someone else. They were very patient and kind. I would highly recommend them."
    },
    {
      name: "Clayton Murray",
      text: "Damien DD is the best! Highly recommended! I went to get dentures done earlier this year and never had a problem. Outstanding job! He makes dentures precisely and I didn't have to wait long for it to be done. Reasonable prices and amazing staff!"
    },
    {
      name: "Alvaro Serge",
      text: "Helped us on a Sunday, on an emergency situation for a senior with kindness and helpful attitude. Incredible service and professionalism. Highly recommended. Thank you Damien DD!!!!!"
    },
    {
      name: "Kaha Abukar",
      text: "Damien DD is awesome! Took my grandmother in for her dentures and he was amazing. Would definitely recommend. Great service."
    },
    {
      name: "Carmela DeFrancesco",
      text: "The level of service at this office is second to none! I’m so pleased with my new set of implants teeth made by Damien DD! And Keith his office manager is incredibly helpful!"
    },
    {
      name: "Robert Donin",
      text: "Damien DD is a true professional. He is very knowledgeable and takes the time to explain everything. He is also very patient and kind. I am very happy with my new dentures."
    },
    {
      name: "Alex Lin",
      text: "Damien DD is the best! He is very professional and does great work. I am very happy with my new dentures."
    },
    {
      name: "Tammi Downey",
      text: "I highly recommend Dentures Direct. Damien DD is very professional and caring. He did a great job on my dentures and I am very happy with the result."
    },
    {
      name: "Victoria Prevette",
      text: "Damien DD is amazing! He is very professional and does great work. I am very happy with my new dentures and would highly recommend him."
    },
    {
      name: "Sasha Hershey",
      text: "I had a great experience at Dentures Direct. Damien DD is very professional and does great work. I am very happy with my new dentures."
    },
    {
      name: "Pratussa Farquharson",
      text: "Damien DD is the best! He is very professional and does great work. I am very happy with my new dentures."
    },
    {
      name: "Debs M",
      text: "I highly recommend Dentures Direct. Damien DD is very professional and caring. He did a great job on my dentures and I am very happy with the result."
    },
    {
      name: "Scott Harris",
      text: "Damien DD is a true professional. He is very knowledgeable and takes the time to explain everything. I am very happy with my new dentures."
    },
    {
      name: "Erich Koissi",
      text: "Damien DD is the best! He is very professional and does great work. I am very happy with my new dentures."
    },
    {
      name: "Margit Banczik",
      text: "I highly recommend Dentures Direct. Damien DD is very professional and caring. He did a great job on my dentures."
    },
    {
      name: "Mike Nicolosi",
      text: "Damien DD is a true professional. He is very knowledgeable and does great work. I am very happy with my new dentures."
    },
    {
      name: "Alex Noguera",
      text: "Damien DD is amazing! He is very professional and does great work. I am very happy with my new dentures."
    },
    {
      name: "M L",
      text: "Damien DD was very professional and patient. He explained everything and made sure I was comfortable. I am very happy with the result."
    },
    {
      name: "JM Dixon",
      text: "Excellent service and quality. Damien DD is very professional and does great work."
    },
    {
      name: "MrsKayla C",
      text: "I am so happy with my new dentures. Damien DD did a great job and was very professional."
    },
    {
      name: "Maudlyn Barnaby",
      text: "Highly recommended. Damien DD is very professional and caring."
    },
    {
      name: "Millie Giljaca",
      text: "Great experience. Damien DD is very professional and does great work."
    },
    {
      name: "D. Murray",
      text: "Damien DD is the best! Very professional and caring. The results were better than I expected."
    }
  ];

  return (
    <div className="w-full pt-20 pb-24 bg-[#f8fafc] font-sans min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="text-center mb-16">
          <span className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4 block">Google Reviews</span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-brand-dark mb-6">What Our Patients Say</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Don&apos;t just take our word for it. Read verified reviews from our happy patients across the Greater Toronto Area.
          </p>
          
          <div className="flex items-center justify-center gap-4 bg-white inline-flex px-8 py-4 rounded-full shadow-md border border-gray-100">
            {/* Real Google G Logo */}
            <svg viewBox="0 0 24 24" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <div className="flex text-[#FBBC05]">
              {[1,2,3,4,5].map(star => (
                <svg key={star} className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              ))}
            </div>
            <span className="font-bold text-xl text-gray-800 ml-2">5.0</span>
          </div>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div key={idx} variants={fadeUp} className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 flex flex-col h-full relative transition-transform hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-blue to-brand-dark flex items-center justify-center text-white font-bold text-2xl shadow-inner">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark text-lg">{review.name}</h4>
                  <div className="flex items-center gap-1 text-gray-500 text-sm mt-1">
                    <svg viewBox="0 0 24 24" width="14" height="14" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    <span>Google Review</span>
                  </div>
                </div>
              </div>
              <div className="flex text-[#FBBC05] mb-4">
                {[1,2,3,4,5].map(star => (
                  <svg key={star} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed flex-grow">
                "{review.text}"
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
