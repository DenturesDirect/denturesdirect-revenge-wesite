"use client";

import React, { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

export default function Header() {
  const t = useTranslations('Navigation');
  const locale = useLocale();
  const phoneNumber = "416-245-7474";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: `/${locale}`,                              label: t('home') },
    { href: `/${locale}/about-us`,                     label: 'Team' },
    { href: `/${locale}/gallery`,                      label: 'Gallery' },
    { href: `/${locale}/happy-patients`,               label: 'Reviews' },
    { href: `/${locale}/denture-services`,             label: t('services') },
    { href: `/${locale}/first-time-patients`,          label: t('new_patients') },
    { href: `/${locale}/cdcp-toronto-denturist`,       label: t('cdcp') },
    { href: `/${locale}/locations`,                    label: 'Location' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-brand-dark/95 backdrop-blur-xl shadow-header h-[64px]'
            : 'bg-brand-dark h-[80px]'
        }`}
      >
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-blue/70 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full gap-4">

            {/* Logo */}
            <Link href={`/${locale}`} title="Dentures Direct – Top-Rated Digital Denture Clinic Toronto" className="flex-shrink-0 group">
              <img
                src="/dentures-direct-toronto-logo.png"
                alt="Dentures Direct Toronto"
                className={`w-auto brightness-0 invert transition-all duration-300 group-hover:opacity-80 ${scrolled ? 'h-[38px]' : 'h-[44px]'}`}
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="nav-link text-white/70 hover:text-white transition-colors duration-200 px-3 py-1.5 text-sm font-medium rounded-md hover:bg-white/5"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={`/${locale}/contact`}
                className="ml-1 px-4 py-1.5 rounded-full text-sm font-semibold text-white border border-brand-blue/50 hover:border-brand-blue hover:bg-brand-blue/15 transition-all duration-200"
              >
                Book Online
              </Link>
            </nav>

            {/* Phone CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <a
                href={`tel:${phoneNumber}`}
                className="btn-shimmer bg-brand-blue hover:bg-brand-blueDark text-white font-semibold py-2 px-5 rounded-full transition-all duration-200 shadow-cta hover:shadow-cta-hover flex items-center gap-2 text-sm whitespace-nowrap animate-pulseBlue"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {t('call_now', { phone: phoneNumber })}
              </a>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-md text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Toggle menu"
              >
                <div className="w-5 h-4 flex flex-col justify-between">
                  <span className={`block h-0.5 bg-current rounded transition-all duration-300 origin-center ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                  <span className={`block h-0.5 bg-current rounded transition-all duration-300 ${mobileOpen ? 'opacity-0 scale-x-0' : ''}`} />
                  <span className={`block h-0.5 bg-current rounded transition-all duration-300 origin-center ${mobileOpen ? '-rotate-45 -translate-y-[9px]' : ''}`} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${mobileOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        {/* Backdrop */}
        <div
          onClick={() => setMobileOpen(false)}
          className={`absolute inset-0 bg-brand-dark/60 backdrop-blur-sm transition-opacity duration-300 ${mobileOpen ? 'opacity-100' : 'opacity-0'}`}
        />
        {/* Drawer */}
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-brand-darker shadow-2xl transition-transform duration-300 ease-spring ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="p-6 pt-24 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-white/70 hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg text-base font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={`/${locale}/contact`}
              onClick={() => setMobileOpen(false)}
              className="mt-4 text-center px-4 py-3 rounded-full text-sm font-semibold text-white bg-brand-blue hover:bg-brand-blueDark transition-colors"
            >
              Book Online
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
