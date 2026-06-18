import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Denture Clinic Toronto | Dentures Direct North York & Etobicoke',
  description: 'Visit Dentures Direct, the top-rated denture clinic in Toronto. Located at 2833 Weston Rd, we serve North York, Etobicoke, and the GTA with precision digital dentures.',
};

export default function LocationsPage() {
  return (
    <div className="w-full pt-24 pb-20 bg-brand-light font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-brand-dark mb-4 tracking-tight">Top Rated Denture Clinic in Toronto</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We operate out of <strong>one</strong> state-of-the-art clinic and CNC laboratory, conveniently located on the border of North York and Etobicoke at 2833 Weston Rd.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-2xl max-w-6xl mx-auto overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-bold text-brand-blue mb-6">Dentures Direct</h2>
              <div className="space-y-6 text-gray-700 text-lg">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-brand-accent mt-1 mr-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <p className="font-semibold leading-snug">2833 Weston Road<br/>Toronto, ON M9M 2S1</p>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-brand-accent mr-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  <p>Phone: <a href="tel:416-245-7474" className="text-brand-accent font-bold hover:underline transition-all">(416) 245-7474</a></p>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-brand-accent mr-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  <p>Email: <a href="mailto:info@denturesdirect.ca" className="text-brand-accent font-bold hover:underline transition-all">info@denturesdirect.ca</a></p>
                </div>
              </div>
              
              <div className="mt-10 pt-10 border-t border-gray-100">
                <h3 className="font-bold text-brand-dark text-xl mb-4">Areas We Serve:</h3>
                <div className="flex flex-wrap gap-3 text-sm">
                  <span className="px-4 py-2 bg-brand-light border border-gray-200 rounded-full font-medium text-gray-600">North York</span>
                  <span className="px-4 py-2 bg-brand-light border border-gray-200 rounded-full font-medium text-gray-600">Etobicoke</span>
                  <span className="px-4 py-2 bg-brand-light border border-gray-200 rounded-full font-medium text-gray-600">Weston</span>
                  <span className="px-4 py-2 bg-brand-light border border-gray-200 rounded-full font-medium text-gray-600">Humber Summit</span>
                  <span className="px-4 py-2 bg-brand-light border border-gray-200 rounded-full font-medium text-gray-600">Toronto & GTA</span>
                </div>
              </div>
            </div>
            
            <div className="min-h-[450px] rounded-2xl overflow-hidden shadow-inner border border-gray-200 relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m1!1d2883.5071542360433!2d-79.5369888!3d43.7207903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b30f2a5d2dd17%3A0x803e88739aefa8cf!2s2833%20Weston%20Rd%2C%20North%20York%2C%20ON%20M9M%202S1!5e0!3m2!1sen!2sca!4v1778845191649!5m2!1sen!2sca"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Dentures Direct Google Maps Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
