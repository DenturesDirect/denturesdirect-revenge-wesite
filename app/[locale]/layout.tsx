import React from 'react';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, getTranslations} from 'next-intl/server';
import Header from '@/components/Header';
import AdvancedSchema from '@/components/Schema';
import ScrollReveal from '@/components/ScrollReveal';
import '@/app/globals.css';

type Props = {
  children: React.ReactNode;
  params: {locale: string};
};

export async function generateMetadata({params: {locale}}: Omit<Props, 'children'>) {
  const t = await getTranslations({locale, namespace: 'Index'});
 
  const languages = ['en', 'fr', 'vi', 'es', 'it'].reduce((acc, lang) => {
    acc[lang] = `https://www.denturesdirect.ca/${lang}`;
    return acc;
  }, {} as Record<string, string>);

  return {
    metadataBase: new URL('https://www.denturesdirect.ca'),
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `https://www.denturesdirect.ca/${locale}`,
      languages: { ...languages, 'x-default': 'https://www.denturesdirect.ca/en' },
    },
    keywords: 'digital dentures, intraoral scanning, CNC milled dentures, CDCP denturist Toronto, CDCP denturist North York, denturist North York, denture clinic North York, dentures Toronto, Digital Partial Dentures Toronto, Digital Full Dentures Toronto, implant dentures Toronto, implant overdentures Toronto, emergency denture repair Toronto, same day denture repair, denture repairs North York, affordable dentures Toronto, senior dentures Toronto, in house lab, denturist near me, denture clinic near me, Weston Road denturist, Humber Summit denturist',
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `https://www.denturesdirect.ca/${locale}`,
      siteName: 'Dentures Direct',
      locale: locale,
      type: 'website',
      images: [{ url: '/og-en.png', width: 1200, height: 630, alt: 'Dentures Direct – Toronto Clinic' }],
    },
  };
}

export default async function LocaleLayout({children, params: {locale}}: Props) {
  const messages = await getMessages();
  const tf = await getTranslations({locale, namespace: 'Footer'});
 
  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        <AdvancedSchema locale={locale} />
        <meta name="robots" content="index, follow" />
        {/* Google Tag Manager */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-JRL1J7ZN0T"></script>
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-JRL1J7ZN0T');` }} />
        {/* Premium Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,700;0,800;1,500;1,700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-brand-ice text-brand-dark min-h-screen flex flex-col font-sans text-lg antialiased">
        <NextIntlClientProvider messages={messages}>
          <ScrollReveal />
          <Header />
          <main className="flex-grow">
            {children}
          </main>

          {/* ─── Premium Footer ─── */}
          <footer className="bg-brand-darker text-white pt-16 pb-8 mt-20 relative overflow-hidden">
            {/* Top gradient border */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/60 to-transparent" />
            {/* Subtle orb */}
            <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-brand-blue/5 blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">

                {/* Col 1: Brand */}
                <div className="space-y-4">
                  <img
                    src="/dentures-direct-toronto-logo.png"
                    alt="Dentures Direct Toronto"
                    className="h-10 w-auto brightness-0 invert opacity-90"
                  />
                  <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                    {tf('blurb')}
                  </p>
                  <a
                    href="tel:416-245-7474"
                    className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:text-brand-blueLight transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    (416) 245-7474
                  </a>
                  <div className="pt-2">
                    <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-2">{tf('follow_us')}</p>
                    <div className="flex items-center gap-3">
                      <a
                        href="https://www.facebook.com/profile.php?id=61582079577837"
                        target="_blank" rel="noopener noreferrer"
                        aria-label="Dentures Direct on Facebook"
                        className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:bg-brand-blue hover:border-brand-blue transition-all duration-200"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </a>
                      <a
                        href="https://www.instagram.com/denturesdirecttoronto"
                        target="_blank" rel="noopener noreferrer"
                        aria-label="Dentures Direct on Instagram"
                        className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:bg-pink-600 hover:border-pink-500 transition-all duration-200"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                        </svg>
                      </a>
                      <a
                        href="https://www.youtube.com/@denturesdirect-toronto"
                        target="_blank" rel="noopener noreferrer"
                        aria-label="Dentures Direct on YouTube"
                        className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:bg-red-600 hover:border-red-500 transition-all duration-200"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Col 2: Popular Services */}
                <div>
                  <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">{tf('popular_services')}</h4>
                  <ul className="space-y-2.5 text-sm text-white/60">
                    <li><a href={`/${locale}/denture-services/implant-retained-overdentures-toronto`} className="hover:text-white transition-colors">{tf('link_implant')}</a></li>
                    <li><a href={`/${locale}/implant-dentures-cost-toronto`} className="hover:text-white transition-colors">{tf('link_implant_cost')}</a></li>
                    <li><a href={`/${locale}/digital-dentures`} className="hover:text-white transition-colors">{tf('link_digital')}</a></li>
                    <li><a href={`/${locale}/denture-services/digital-full-dentures-toronto`} className="hover:text-white transition-colors">{tf('link_full')}</a></li>
                    <li><a href={`/${locale}/denture-services/emergency-denture-repair-toronto`} className="hover:text-white transition-colors">{tf('link_repair')}</a></li>
                    <li><a href={`/${locale}/cdcp-toronto-denturist`} className="hover:text-white transition-colors">{tf('link_cdcp')}</a></li>
                    <li><a href={`/${locale}/gallery`} className="hover:text-white transition-colors">{tf('link_gallery')}</a></li>
                  </ul>
                </div>

                {/* Col 3: Hours */}
                <div>
                  <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">{tf('hours')}</h4>
                  <ul className="space-y-2 text-sm text-white/60">
                    <li className="flex justify-between"><span>{tf('mon_fri')}</span><span className="text-white/80 font-medium">9:00 AM – 5:00 PM</span></li>
                    <li className="flex justify-between"><span>{tf('saturday')}</span><span className="text-white/80 font-medium">{tf('by_appointment')}</span></li>
                    <li className="flex justify-between"><span>{tf('sunday')}</span><span className="text-white/40">{tf('closed')}</span></li>
                  </ul>
                  <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-green-400">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    {tf('same_day')}
                  </div>
                </div>

                {/* Col 3: Address */}
                <div>
                  <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">{tf('find_us')}</h4>
                  <address
                    itemScope itemType="https://schema.org/PostalAddress"
                    className="not-italic text-sm text-white/60 leading-relaxed space-y-1"
                  >
                    <p itemProp="streetAddress" className="text-white/80 font-medium">2833 Weston Road</p>
                    <p><span itemProp="addressLocality">Toronto</span>, <span itemProp="addressRegion">ON</span> <span itemProp="postalCode">M9M 2S1</span></p>
                    <p className="text-white/40 text-xs mt-2">{tf('serving')}</p>
                  </address>
                  <a
                    href="https://maps.google.com/?q=2833+Weston+Rd,+Toronto+ON"
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-3 text-xs text-brand-blue hover:text-brand-blueLight transition-colors font-medium"
                  >
                    {tf('directions')}
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </a>
                </div>

              </div>

              {/* Bottom bar */}
              <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/30">
                <p>&copy; {new Date().getFullYear()} Dentures Direct. {tf('rights')}</p>
                <div className="flex items-center gap-4">
                  <a href={`/${locale}/privacy-policy`} className="hover:text-white/60 transition-colors">{tf('privacy')}</a>
                  <span className="text-white/10">|</span>
                  <p>{tf('regulated')}</p>
                </div>
              </div>
            </div>
          </footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
