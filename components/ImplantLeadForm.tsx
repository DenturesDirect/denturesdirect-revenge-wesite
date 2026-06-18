"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

export default function ImplantLeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    formData.append('access_key', '15d45c6f-794e-4981-a6e0-077f6a48d70d');
    formData.append('subject', 'New Implant Overdenture Lead — Dentures Direct Website');
    formData.append('from_name', 'Dentures Direct — Implant Page');
    try {
      const response = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData });
      const data = await response.json();
      if (data.success) { setIsSuccess(true); } else { alert('Something went wrong. Please call us at (416) 245-7474.'); }
    } catch { alert('Something went wrong. Please call us at (416) 245-7474.'); } finally { setIsSubmitting(false); }
  };

  if (isSuccess) {
    return (
      <div className="bg-white rounded-3xl p-10 text-center border border-gray-200 shadow-xl">
        <div className="w-20 h-20 bg-green-50 border-2 border-green-200 rounded-full flex items-center justify-center mx-auto mb-5">
          <svg className="w-9 h-9 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">You are on Damien list.</h3>
        <p className="text-gray-500 leading-relaxed max-w-sm mx-auto">We will call you within one business day to answer your questions and book your free consultation.</p>
        <p className="text-gray-400 text-sm mt-4">Prefer to talk now? <a href="tel:416-245-7474" className="text-blue-600 font-semibold hover:underline">(416) 245-7474</a></p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden">
      <div className="bg-gray-900 px-8 pt-8 pb-6">
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-400 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />Free Consultation — No Obligation
        </span>
        <h3 className="text-2xl font-bold text-white leading-snug">Tell us about your situation.</h3>
        <p className="text-white/50 text-sm mt-1.5">We will call you back within one business day.</p>
      </div>
      <form onSubmit={handleSubmit} className="px-8 py-7 space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label htmlFor="implant-first-name" className="block text-sm font-semibold text-gray-800">First Name</label>
            <input required type="text" id="implant-first-name" name="first_name" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm" placeholder="First" />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="implant-last-name" className="block text-sm font-semibold text-gray-800">Last Name</label>
            <input required type="text" id="implant-last-name" name="last_name" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm" placeholder="Last" />
          </div>
        </div>
        <div className="space-y-1.5">
          <label htmlFor="implant-phone" className="block text-sm font-semibold text-gray-800">Best Phone Number</label>
          <input required type="tel" id="implant-phone" name="phone" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm" placeholder="(416) 000-0000" />
        </div>
        <div className="border-t border-gray-100 pt-1">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">A few quick questions so Damien is prepared:</p>
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-800">Which arch are you concerned about?</label>
          <div className="grid grid-cols-3 gap-2">
            {['Lower', 'Upper', 'Both'].map((opt) => (
              <label key={opt} className="flex items-center justify-center p-3 rounded-xl border border-gray-200 cursor-pointer text-sm font-semibold text-gray-700 hover:border-blue-400 hover:bg-blue-50 transition-all duration-200 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50 has-[:checked]:text-blue-700">
                <input type="radio" name="arch" value={opt} className="sr-only" required />{opt}
              </label>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-800">Do you already have dental implants?</label>
          <div className="grid grid-cols-3 gap-2">
            {[{val:'yes',label:'Yes'},{val:'no',label:'Not yet'},{val:'unsure',label:'Not sure'}].map((opt) => (
              <label key={opt.val} className="flex items-center justify-center p-3 rounded-xl border border-gray-200 cursor-pointer text-sm font-semibold text-gray-700 hover:border-blue-400 hover:bg-blue-50 transition-all duration-200 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50 has-[:checked]:text-blue-700">
                <input type="radio" name="has_implants" value={opt.val} className="sr-only" required />{opt.label}
              </label>
            ))}
          </div>
        </div>
        <div className="space-y-1.5">
          <label htmlFor="implant-situation" className="block text-sm font-semibold text-gray-800">How would you describe your current situation?</label>
          <select id="implant-situation" name="situation" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm" required>
            <option value="">Select the closest one</option>
            <option value="loose-denture-adhesive">My denture is loose — I use adhesive every day</option>
            <option value="loose-denture-no-adhesive">My denture is loose — I have given up on adhesive</option>
            <option value="has-implants-no-overdenture">I have implants but no overdenture yet</option>
            <option value="implants-elsewhere-need-overdenture">I had implants placed elsewhere, need the overdenture</option>
            <option value="exploring-options">Just starting to explore my options</option>
            <option value="other">Other — I will explain when you call</option>
          </select>
        </div>
        <div className="space-y-1.5">
          <label htmlFor="implant-note" className="block text-sm font-semibold text-gray-800">Anything else Damien should know? <span className="font-normal text-gray-400">(optional)</span></label>
          <textarea id="implant-note" name="notes" rows={2} className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm resize-none" placeholder="e.g. I have 2 lower implants already placed, I just need the overdenture built..." />
        </div>
        <div className="space-y-2 pt-1">
          <label className="block text-sm font-semibold text-gray-800">Last question — do you know you deserve this?</label>
          <div className="grid grid-cols-1 gap-2">
            {[{val:'yes-ready',label:"Yes — and I am finally ready to do something about it"},{val:'starting-to',label:"I am starting to believe I do"},{val:'not-sure-yet',label:"Not sure yet — that is why I am here"}].map((opt) => (
              <label key={opt.val} className="flex items-center gap-3 p-3.5 rounded-xl border border-gray-200 cursor-pointer text-sm font-medium text-gray-700 hover:border-blue-400 hover:bg-blue-50 transition-all duration-200 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50 has-[:checked]:text-blue-700">
                <input type="radio" name="deserve_this" value={opt.val} className="sr-only" required />
                <span className="w-4 h-4 rounded-full border-2 border-current shrink-0" />{opt.label}
              </label>
            ))}
          </div>
        </div>
        <button type="submit" disabled={isSubmitting} id="submit-implant-lead-form" className={`w-full py-4 px-6 rounded-full font-bold text-base text-white transition-all duration-300 hover:-translate-y-0.5 ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/30'}`}>
          {isSubmitting ? 'Sending...' : 'Request My Free Consultation →'}
        </button>
        <p className="text-xs text-gray-400 text-center leading-relaxed">No hard sell. If you are not a candidate, we will tell you that too.</p>
      </form>
    </div>
  );
}
