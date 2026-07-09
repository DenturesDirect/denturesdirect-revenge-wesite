"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } };
const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

// Web3Forms access key
const ACCESS_KEY = '15d45c6f-794e-4981-a6e0-077f6a48d70d';

const bullets = [
  'The 3 options — explained honestly, without upselling',
  'What a reline actually fixes (and what it doesn\'t)',
  'How much implant overdentures actually cost in Toronto',
  'Why digital CNC-milled dentures fit better than hand-made ones',
  'The one question to ask any clinic before you book',
];

export default function LooseDentureGuidePage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append('access_key', ACCESS_KEY);
    formData.append('name', firstName);
    formData.append('email', email);
    formData.append('subject', 'Loose Denture Guide Download — denturesdirect.ca');
    formData.append('from_name', 'Dentures Direct — Guide Lead');
    try {
      await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData });
    } catch { /* fail silently */ }
    setLoading(false);
    setSubmitted(true);
    setTimeout(() => {
      document.getElementById('your-guide')?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  }

  return (
    <div className="w-full min-h-screen bg-[#f8fafc] font-sans" style={{ fontFamily: "'Outfit', sans-serif" }}>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: Copy */}
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 bg-brand-blue/10 text-brand-blue font-bold text-sm uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              Free Guide · Dentures Direct Toronto
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold text-brand-dark leading-tight mb-6">
              Your 3 Real Options for a Loose Lower Denture
              <span className="text-brand-blue"> — and What They Actually Cost.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-gray-600 mb-8 leading-relaxed">
              Written by Damien Hiorth DD, 25-year denturist in North York Toronto. No fluff, no upsell — just an honest breakdown of what works, what doesn&apos;t, and what to expect.
            </motion.p>

            {/* Bullets */}
            <motion.ul variants={stagger} className="space-y-3 mb-10">
              {bullets.map((b, i) => (
                <motion.li key={i} variants={fadeUp} className="flex items-start gap-3">
                  <span className="shrink-0 w-5 h-5 rounded-full bg-brand-blue flex items-center justify-center text-white text-xs font-bold mt-0.5">✓</span>
                  <span className="text-gray-700 font-medium">{b}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* Social proof */}
            <motion.div variants={fadeUp} className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0">
                <Image src="/damien-new.jpg" alt="Damien Hiorth DD" fill className="object-cover object-top" />
              </div>
              <div>
                <p className="font-bold text-brand-dark text-sm">Damien John Hiorth DD</p>
                <p className="text-gray-500 text-xs">Founder, Dentures Direct · 25+ years · North York Toronto</p>
                <p className="text-gray-600 text-sm mt-1 italic">&ldquo;Most patients I see have tried three things before they call us. This guide helps you skip that.&rdquo;</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Form or Guide Preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {!submitted ? (
              <div className="bg-white rounded-[2rem] shadow-xl border border-gray-100 overflow-hidden">
                {/* Guide cover */}
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/loose-denture-guide-cover.png"
                    alt="Loose Denture Guide Cover"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-5 right-5">
                    <span className="inline-flex items-center gap-2 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                      <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                      Free — Instant Access
                    </span>
                  </div>
                </div>

                {/* Form */}
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-brand-dark mb-2">Get the Free Guide</h2>
                  <p className="text-gray-500 text-sm mb-6">Enter your name and email. We&apos;ll never share your information or spam you.</p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-1.5">First Name</label>
                      <input
                        id="firstName"
                        type="text"
                        required
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                        placeholder="e.g. Margaret"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue text-brand-dark placeholder-gray-400 transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue text-brand-dark placeholder-gray-400 transition-all"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-brand-blue hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-200 shadow-lg shadow-brand-blue/25 disabled:opacity-60 disabled:cursor-wait"
                    >
                      {loading ? 'Sending...' : 'Send Me the Free Guide →'}
                    </button>
                  </form>
                  <p className="text-xs text-gray-400 text-center mt-4">
                    No spam. Unsubscribe anytime. We&apos;re regulated by the College of Denturists of Ontario.
                  </p>
                </div>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-[2rem] shadow-xl border border-gray-100 p-10 text-center"
              >
                <div className="text-6xl mb-4">🎉</div>
                <h2 className="text-3xl font-bold text-brand-dark mb-3">You&apos;re in, {firstName}!</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Your guide is right below. Scroll down to read it now — or save this page and come back anytime.
                </p>
                <a
                  href="tel:416-245-7474"
                  className="inline-flex items-center gap-2 bg-brand-blue text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-blue-600 transition-all"
                >
                  Questions? Call Damien — (416) 245-7474
                </a>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      {/* ── THE GUIDE — always visible ── */}
      <div
        id="your-guide"
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 mt-16"
      >

          <div className="bg-white rounded-[2rem] shadow-xl border border-gray-100 p-10 md:p-16">
            {/* Guide header */}
            <div className="border-b border-gray-200 pb-8 mb-10 text-center">
              <img src="/dentures-direct-toronto-logo.png" alt="Dentures Direct" className="h-8 w-auto mx-auto mb-6 opacity-70" />
              <h2 className="text-4xl font-extrabold text-brand-dark mb-3">Your 3 Real Options for a Loose Lower Denture</h2>
              <p className="text-gray-500">By Damien Hiorth DD · Dentures Direct, North York Toronto · (416) 245-7474</p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-10">

              {/* Intro */}
              <div>
                <p className="text-xl leading-relaxed">
                  If you&apos;re reading this, your lower denture is probably moving when you eat, clicking when you talk, or just generally making your life miserable. You&apos;ve likely already tried adhesive. Maybe you&apos;ve had it relined. And you&apos;re starting to wonder if there&apos;s a real solution.
                </p>
                <p className="leading-relaxed">
                  There is. But there isn&apos;t just one. There are three — and which one is right for you depends on your jaw, your budget, and how long you want the fix to last.
                </p>
              </div>

              {/* Option 1 */}
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <div className="flex items-start gap-4 mb-5">
                  <span className="shrink-0 w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-black text-lg">1</span>
                  <div>
                    <h3 className="text-2xl font-bold text-brand-dark">The Reline</h3>
                    <p className="text-gray-500 text-sm font-medium">Short-term fix · $300–$600 · Lasts 1–3 years</p>
                  </div>
                </div>
                <p className="leading-relaxed mb-4">
                  A reline adds new material to the inside of your existing denture to fill the gap created by bone loss. It&apos;s the least expensive option and the fastest — sometimes done same-day.
                </p>
                <p className="leading-relaxed mb-4">
                  <strong>When it makes sense:</strong> Your denture is otherwise in good shape, your gums are relatively stable, and the looseness is a fit issue — not a denture-design issue.
                </p>
                <p className="leading-relaxed">
                  <strong>When it doesn&apos;t:</strong> If your denture is more than 5–7 years old, the teeth are worn, or the base is warped — a reline is putting a fresh coat of paint on a cracked wall. It buys time. It doesn&apos;t solve the problem.
                </p>
              </div>

              {/* Option 2 */}
              <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
                <div className="flex items-start gap-4 mb-5">
                  <span className="shrink-0 w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center text-white font-black text-lg">2</span>
                  <div>
                    <h3 className="text-2xl font-bold text-brand-dark">A New Digital Denture</h3>
                    <p className="text-blue-600 text-sm font-semibold">Better fit, better longevity · $2,000–$4,500 · Lasts 7–10 years</p>
                  </div>
                </div>
                <p className="leading-relaxed mb-4">
                  If your current denture was made by a clinic that outsources to a third-party lab — or made with traditional goop impressions — there&apos;s a good chance it never fit as well as it could have.
                </p>
                <p className="leading-relaxed mb-4">
                  A new CNC-milled digital denture starts with an intraoral scan (no goop, no gagging). We design it digitally and mill it in-house from a solid puck of high-density acrylic. The result is denser, more accurate, and more stain-resistant than hand-packed acrylic.
                </p>
                <p className="leading-relaxed mb-4">
                  <strong>Important:</strong> We do not 3D print. Based on our own clinical experience, 3D-printed dentures are more brittle, stain faster, and don&apos;t hold up as well over time. CNC milling is the right call for a denture you&apos;re going to wear every day.
                </p>
                <p className="leading-relaxed">
                  <strong>When this is the right choice:</strong> You don&apos;t want surgery, your bone is relatively stable, and you want a significantly better-fitting denture without committing to implants.
                </p>
              </div>

              {/* Option 3 */}
              <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100">
                <div className="flex items-start gap-4 mb-5">
                  <span className="shrink-0 w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white font-black text-lg">3</span>
                  <div>
                    <h3 className="text-2xl font-bold text-brand-dark">Implant-Retained Overdenture</h3>
                    <p className="text-emerald-700 text-sm font-semibold">Permanent solution · 3 implants lower / 4 implants upper · Lasts 15–20+ years</p>
                  </div>
                </div>
                <p className="leading-relaxed mb-4">
                  This is the permanent answer to a lower denture that won&apos;t stay put. Three implants are placed in your lower jaw (four for an upper). Your overdenture clicks onto them. It doesn&apos;t move.
                </p>
                <p className="leading-relaxed mb-4">
                  You still remove it at night for cleaning — it&apos;s not a fixed bridge. But during the day, when you&apos;re eating, talking, or laughing, it stays exactly where it should.
                </p>
                <p className="leading-relaxed mb-4">
                  <strong>What it costs:</strong> The implants are placed by an oral surgeon — typically $1,500–$2,500 per implant. The overdenture itself depends on whether you need a new one fabricated or can convert your existing one. We give written quotes after your free consultation.
                </p>
                <p className="leading-relaxed">
                  <strong>When this is the right choice:</strong> You&apos;ve been dealing with a loose lower denture for years, you&apos;ve tried everything else, and you want a fix that you can stop thinking about.
                </p>
              </div>

              {/* The question */}
              <div>
                <h3 className="text-2xl font-bold text-brand-dark mb-4">The One Question to Ask Any Clinic</h3>
                <p className="leading-relaxed mb-4">
                  Before you book anywhere: <strong>&ldquo;Do you fabricate in-house, or do you outsource to a lab?&rdquo;</strong>
                </p>
                <p className="leading-relaxed">
                  If they outsource, the denturist who designs your denture never touches the actual fabrication. Any issues — a tooth that&apos;s slightly off, an acrylic shade that doesn&apos;t match, a fit that&apos;s close but not right — gets shipped back, creates delays, and costs you more appointments. At Dentures Direct, Damien designs it and Luisa, our RDT Candidate, builds it. Down the hall. Every time.
                </p>
              </div>

              {/* CTA */}
              <div className="bg-brand-dark rounded-2xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-3">Not Sure Which Option Is Right for You?</h3>
                <p className="text-gray-300 mb-6">
                  Book a free, no-pressure consultation. Bring your existing denture. We&apos;ll assess your jaw, explain your options, and give you a written quote — at no cost.
                </p>
                <a
                  href="tel:416-245-7474"
                  className="inline-flex items-center gap-2 bg-brand-blue hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-full text-lg transition-all"
                >
                  Call Dentures Direct — (416) 245-7474
                </a>
                <p className="text-xs text-gray-500 mt-4">2833 Weston Road, North York, Toronto · Mon–Thu 8am–6pm</p>
              </div>

            </div>
          </div>
      </div>


      {/* Footer */}
      <footer className="bg-brand-darker py-5 text-center text-xs text-white/30 border-t border-white/10">
        <p>© {new Date().getFullYear()} Dentures Direct. 2833 Weston Road, North York, Toronto, ON M9M 2S1. Regulated by the College of Denturists of Ontario.</p>
      </footer>

      <style>{`@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&display=swap');`}</style>
    </div>
  );
}
