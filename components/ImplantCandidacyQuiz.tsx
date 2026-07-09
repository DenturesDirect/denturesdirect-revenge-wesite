"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const stepVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 50 : -50,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.3, ease: 'easeInOut' }
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 50 : -50,
    opacity: 0,
    transition: { duration: 0.3, ease: 'easeInOut' }
  })
};

export default function ImplantCandidacyQuiz() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form state
  const [arch, setArch] = useState('');
  const [frustrations, setFrustrations] = useState<string[]>([]);
  const [hasImplants, setHasImplants] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const totalSteps = 4;

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    if (step < totalSteps) {
      setDirection(1);
      setStep(step + 1);
    }
  };

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    if (step > 1) {
      setDirection(-1);
      setStep(step - 1);
    }
  };

  const toggleFrustration = (item: string) => {
    if (frustrations.includes(item)) {
      setFrustrations(frustrations.filter(f => f !== item));
    } else {
      setFrustrations([...frustrations, item]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !lastName || !phone) {
      alert('Please fill out all required contact fields.');
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData();
    formData.append('access_key', '15d45c6f-794e-4981-a6e0-077f6a48d70d');
    formData.append('subject', '🔥 New Snap-On Implant Candidacy Quiz Lead — Dentures Direct');
    formData.append('from_name', 'Dentures Direct — Implant Quiz');

    formData.append('first_name', firstName);
    formData.append('last_name', lastName);
    formData.append('phone', phone);
    formData.append('email', email);
    formData.append('arch_concerned', arch || 'Not specified');
    formData.append('implants_status', hasImplants || 'Not specified');
    formData.append('frustrations', frustrations.join(', ') || 'None selected');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setIsSuccess(true);
      } else {
        alert('Something went wrong. Please call us at (416) 245-7474.');
      }
    } catch {
      alert('Something went wrong. Please call us at (416) 245-7474.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-white rounded-3xl p-10 text-center border-2 border-brand-blue/30 shadow-2xl">
        <div className="w-20 h-20 bg-green-50 border-2 border-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-3xl font-extrabold text-brand-dark mb-3">Quiz Submitted Successfully!</h3>
        <p className="text-gray-600 leading-relaxed max-w-md mx-auto text-lg">
          Thanks, {firstName}! Damien DD is reviewing your responses. We will contact you within one business day to discuss your results and setup a free consult.
        </p>
        <div className="mt-8 pt-6 border-t border-gray-100">
          <p className="text-sm text-gray-500">Need immediate answers?</p>
          <a href="tel:416-245-7474" className="text-xl font-bold text-brand-blue hover:underline block mt-1">
            (416) 245-7474
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border border-gray-200 shadow-2xl overflow-hidden max-w-xl mx-auto">
      {/* Progress Bar */}
      <div className="bg-brand-dark px-8 pt-8 pb-4 text-white">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-blue">
            Candidacy Quiz
          </span>
          <span className="text-sm font-semibold text-gray-400">
            Step {step} of {totalSteps}
          </span>
        </div>
        <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
          <div
            className="bg-brand-blue h-full transition-all duration-300"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      <div className="p-8 min-h-[360px] flex flex-col justify-between">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={step}
            custom={direction}
            variants={stepVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="space-y-6"
          >
            {/* Step 1: Arch Selection */}
            {step === 1 && (
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-brand-dark">
                  Which arch are you concerned about?
                </h3>
                <p className="text-sm text-gray-500">
                  Select the jaw structure where you currently have a loose denture or need overdenture help.
                </p>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    { id: 'Lower', label: 'Lower Arch (Most common for loose dentures)' },
                    { id: 'Upper', label: 'Upper Arch' },
                    { id: 'Both', label: 'Both Arches (Full restoration)' }
                  ].map(opt => (
                    <button
                      key={opt.id}
                      onClick={() => setArch(opt.id)}
                      className={`w-full text-left p-4 rounded-2xl border-2 transition-all font-semibold text-base flex justify-between items-center ${
                        arch === opt.id
                          ? 'border-brand-blue bg-blue-50/55 text-brand-blue'
                          : 'border-gray-200 hover:border-brand-blue/50 hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      <span>{opt.label}</span>
                      <span className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                        arch === opt.id ? 'border-brand-blue bg-brand-blue' : 'border-gray-300'
                      }`}>
                        {arch === opt.id && <span className="w-2.5 h-2.5 rounded-full bg-white" />}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Frustrations */}
            {step === 2 && (
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-brand-dark">
                  What are your main frustrations?
                </h3>
                <p className="text-sm text-gray-500">
                  Select all that apply to your current denture experience.
                </p>
                <div className="grid grid-cols-1 gap-2.5">
                  {[
                    'My denture floats or rocks when I bite down',
                    'My upper denture drops when I laugh or speak',
                    'I avoid steak, corn, or crusty breads',
                    'I have to use sticky adhesive every single day',
                    'I worry about my denture clicking in public'
                  ].map(item => {
                    const isSelected = frustrations.includes(item);
                    return (
                      <button
                        key={item}
                        onClick={() => toggleFrustration(item)}
                        className={`w-full text-left p-4 rounded-xl border transition-all text-sm font-medium flex gap-3 items-center ${
                          isSelected
                            ? 'border-brand-blue bg-blue-50/30 text-brand-dark font-semibold'
                            : 'border-gray-200 hover:border-brand-blue/30 text-gray-600'
                        }`}
                      >
                        <span className={`w-5 h-5 rounded border flex items-center justify-center shrink-0 ${
                          isSelected ? 'border-brand-blue bg-brand-blue text-white' : 'border-gray-300'
                        }`}>
                          {isSelected && (
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </span>
                        <span>{item}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Step 3: Implants Status */}
            {step === 3 && (
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-brand-dark">
                  Do you already have dental implants?
                </h3>
                <p className="text-sm text-gray-500">
                  We specialize in both new implant configurations and constructing overdentures for existing implants.
                </p>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    { id: 'yes', label: 'Yes, implants are already placed in my jaw' },
                    { id: 'no', label: 'Not yet, I need implants placed first' },
                    { id: 'unsure', label: 'Not sure / Exploring my options' }
                  ].map(opt => (
                    <button
                      key={opt.id}
                      onClick={() => setHasImplants(opt.id)}
                      className={`w-full text-left p-4 rounded-2xl border-2 transition-all font-semibold text-base flex justify-between items-center ${
                        hasImplants === opt.id
                          ? 'border-brand-blue bg-blue-50/55 text-brand-blue'
                          : 'border-gray-200 hover:border-brand-blue/50 hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      <span>{opt.label}</span>
                      <span className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                        hasImplants === opt.id ? 'border-brand-blue bg-brand-blue' : 'border-gray-300'
                      }`}>
                        {hasImplants === opt.id && <span className="w-2.5 h-2.5 rounded-full bg-white" />}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Contact Fields */}
            {step === 4 && (
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-brand-dark">
                  Where should we send your results?
                </h3>
                <p className="text-sm text-gray-500">
                  Fill in your details below. Damien John Hiorth DD will personally review your answers.
                </p>
                <div className="space-y-3.5">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">First Name</label>
                      <input
                        required
                        type="text"
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                        placeholder="First name"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 text-sm"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Last Name</label>
                      <input
                        required
                        type="text"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                        placeholder="Last name"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 text-sm"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Best Phone Number</label>
                    <input
                      required
                      type="tel"
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      placeholder="(416) 000-0000"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 text-sm"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Email Address <span className="text-gray-400 font-normal">(optional)</span></label>
                    <input
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="email@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 text-sm"
                    />
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Buttons */}
        <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-100">
          <button
            onClick={handleBack}
            disabled={step === 1}
            className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-colors ${
              step === 1
                ? 'text-gray-300 cursor-not-allowed'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            ← Back
          </button>

          {step < totalSteps ? (
            <button
              onClick={handleNext}
              disabled={
                (step === 1 && !arch) ||
                (step === 3 && !hasImplants)
              }
              className={`px-7 py-3 rounded-full font-bold text-sm text-white transition-all ${
                ((step === 1 && !arch) || (step === 3 && !hasImplants))
                  ? 'bg-gray-200 cursor-not-allowed'
                  : 'bg-brand-blue hover:bg-blue-600 shadow-md shadow-brand-blue/20 hover:-translate-y-0.5'
              }`}
            >
              Continue →
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={isSubmitting || !firstName || !lastName || !phone}
              className={`px-8 py-3.5 rounded-full font-bold text-sm text-white transition-all ${
                isSubmitting || !firstName || !lastName || !phone
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-brand-blue hover:bg-blue-600 shadow-lg shadow-brand-blue/30 hover:-translate-y-0.5'
              }`}
            >
              {isSubmitting ? 'Submitting...' : 'See Candidacy Results →'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
