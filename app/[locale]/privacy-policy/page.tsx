export default function PrivacyPolicyPage() {
  return (
    <div className="w-full font-sans bg-white">
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl font-extrabold text-brand-dark mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-400 mb-10">Effective date: May 31, 2026 · Last updated: May 31, 2026</p>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">

          <section>
            <h2 className="text-2xl font-bold text-brand-dark">Who we are</h2>
            <p>
              Dentures Direct (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is a denture clinic operating at 2833 Weston Road, North York, Ontario, M9M 2S1. We are regulated by the College of Denturists of Ontario. This Privacy Policy describes how we collect, use, disclose, and protect the personal information of patients and website visitors in accordance with the <em>Personal Information Protection and Electronic Documents Act (PIPEDA)</em> and applicable Ontario privacy standards.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-dark">Information we collect</h2>
            <p>We may collect the following types of personal information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Contact information:</strong> Name, phone number, email address, and mailing address when you contact us or book an appointment.</li>
              <li><strong>Health information:</strong> Dental and medical history relevant to your denture care, collected during consultations and treatment.</li>
              <li><strong>Payment information:</strong> Billing details collected at the time of service. We do not store full credit card numbers.</li>
              <li><strong>Website usage data:</strong> Anonymous analytics data via Google Analytics (page views, session duration, referral source). No personally identifiable information is collected through analytics without your consent.</li>
              <li><strong>Form submissions:</strong> Information you submit through our online contact or booking forms, including name, email, phone number, and any message you provide.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-dark">How we use your information</h2>
            <p>We use your personal information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide denture care, treatment planning, and follow-up services</li>
              <li>Communicate appointment reminders and treatment updates</li>
              <li>Process payments and submit insurance or government benefit claims (including CDCP)</li>
              <li>Comply with our regulatory obligations as a College of Denturists of Ontario registrant</li>
              <li>Improve our website and patient experience through anonymized analytics</li>
              <li>Respond to your inquiries submitted through our website or by phone</li>
            </ul>
            <p>We do not sell, rent, or trade your personal information to third parties for marketing purposes.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-dark">Disclosure of information</h2>
            <p>We may share your information only in the following circumstances:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Referral providers:</strong> If we refer you to an oral surgeon or specialist, relevant clinical information may be shared with your consent.</li>
              <li><strong>Government programs:</strong> If you use the Canadian Dental Care Plan (CDCP), we share required claim information with the applicable government authority.</li>
              <li><strong>Laboratory services:</strong> For certain prosthetic components (such as cast metal frameworks), clinical specifications may be shared with a certified dental laboratory. No personal identifiers beyond a case reference are shared.</li>
              <li><strong>Legal compliance:</strong> If required by law, court order, or regulatory body.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-dark">Cookies and tracking</h2>
            <p>
              Our website uses cookies to support analytics (Google Analytics) and basic functionality. Google Analytics collects anonymous usage data only. You may disable cookies in your browser settings at any time. We do not use tracking cookies for advertising or remarketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-dark">Data retention</h2>
            <p>
              Patient health records are retained in accordance with the College of Denturists of Ontario guidelines — a minimum of 10 years from the date of last service, or until age 18 for minors. Website inquiry data is retained for up to 24 months unless you request earlier deletion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-dark">Your rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Request access to the personal information we hold about you</li>
              <li>Request correction of inaccurate or incomplete information</li>
              <li>Withdraw consent to non-essential communications at any time</li>
              <li>Request deletion of non-clinical data where legally permissible</li>
            </ul>
            <p>To exercise any of these rights, contact us at the details below.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-dark">Security</h2>
            <p>
              We use appropriate physical, administrative, and technical safeguards to protect your personal information from unauthorized access, use, or disclosure. Our website is served over HTTPS. Paper records are stored securely on-site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-dark">Contact us</h2>
            <p>For privacy-related questions or requests, contact us at:</p>
            <address className="not-italic mt-3 space-y-1 text-gray-700">
              <p><strong>Dentures Direct</strong></p>
              <p>2833 Weston Road, North York, ON M9M 2S1</p>
              <p>Phone: <a href="tel:416-245-7474" className="text-brand-blue hover:underline">(416) 245-7474</a></p>
            </address>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-dark">Changes to this policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The effective date at the top of this page will reflect the date of the most recent revision. Continued use of our services after any changes constitutes your acceptance of the updated policy.
            </p>
          </section>

        </div>
      </section>
    </div>
  );
}
