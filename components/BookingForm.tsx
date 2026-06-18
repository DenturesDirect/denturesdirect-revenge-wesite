"use client";

import React, { useState } from 'react';

export default function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "15d45c6f-794e-4981-a6e0-077f6a48d70d");
    formData.append("subject", "New Consultation Request from Website");
    formData.append("from_name", "Dentures Direct Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      const data = await response.json();
      if (data.success) {
        setIsSuccess(true);
      } else {
        console.error("Error", data);
        alert("Something went wrong. Please try calling us directly.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try calling us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="glass rounded-3xl p-10 text-center border border-brand-border shadow-glass">
        <div className="w-16 h-16 bg-green-50 border-2 border-green-300 rounded-full flex items-center justify-center mx-auto mb-5">
          <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-brand-dark mb-2">Request Received!</h3>
        <p className="text-brand-gray leading-relaxed">
          Thank you for reaching out. A member of the Dentures Direct team will call you shortly to confirm your appointment time.
        </p>
      </div>
    );
  }

  return (
    <div className="glass rounded-3xl p-8 border border-brand-border shadow-glass">
      <div className="mb-7">
        <span className="pill-badge mb-3 inline-flex">Free Consultation</span>
        <h3 className="text-2xl font-bold text-brand-dark">Request an Appointment</h3>
        <p className="text-brand-gray text-sm mt-1">We&apos;ll call you back to confirm your time.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label htmlFor="firstName" className="block text-sm font-semibold text-brand-dark">First Name</label>
            <input required type="text" id="firstName" name="first_name" className="input-premium" placeholder="John" />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="lastName" className="block text-sm font-semibold text-brand-dark">Last Name</label>
            <input required type="text" id="lastName" name="last_name" className="input-premium" placeholder="Doe" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label htmlFor="phone" className="block text-sm font-semibold text-brand-dark">Phone Number</label>
            <input required type="tel" id="phone" name="phone" className="input-premium" placeholder="(416) 000-0000" />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="email" className="block text-sm font-semibold text-brand-dark">Email <span className="text-brand-gray font-normal">(optional)</span></label>
            <input type="email" id="email" name="email" className="input-premium" placeholder="john@example.com" />
          </div>
        </div>

        <div className="space-y-1.5">
          <label htmlFor="service" className="block text-sm font-semibold text-brand-dark">Reason for Visit</label>
          <select id="service" name="service" className="input-premium">
            <option>Emergency Denture Repair</option>
            <option>CDCP Coverage Inquiry</option>
            <option>New Implant Retained Dentures</option>
            <option>New Partial or Digital Full Dentures</option>
            <option>Denture Relining / Adjustment</option>
            <option>General Consultation</option>
          </select>
        </div>

        <div className="space-y-1.5">
          <label htmlFor="message" className="block text-sm font-semibold text-brand-dark">Additional Details <span className="text-brand-gray font-normal">(optional)</span></label>
          <textarea
            id="message"
            name="message"
            rows={3}
            className="input-premium resize-none"
            placeholder="Tell us a little bit about what you need..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          id="submit-booking-form"
          className={`btn-shimmer w-full py-4 px-6 rounded-full font-bold text-base text-white transition-all duration-300 hover:-translate-y-0.5 ${
            isSubmitting
              ? 'bg-brand-gray cursor-not-allowed shadow-none'
              : 'bg-brand-blue hover:bg-brand-blueDark shadow-cta hover:shadow-cta-hover'
          }`}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Sending...
            </span>
          ) : 'Book Appointment →'}
        </button>

        <p className="text-xs text-brand-gray text-center leading-relaxed">
          By submitting, you agree to be contacted by Dentures Direct regarding your inquiry.
        </p>
      </form>
    </div>
  );
}
