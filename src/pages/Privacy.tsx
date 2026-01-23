import { Link } from "react-router-dom";
import ClappNavbar from "@/components/ClappNavbar";
import ClappFooter from "@/components/ClappFooter";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <ClappNavbar />

      <main className="max-w-[900px] mx-auto px-5 pt-[140px] pb-20">
        <h1 className="text-[clamp(32px,6vw,56px)] font-medium mb-4">
          Privacy Policy
        </h1>
        <p className="text-xl text-white/60 mb-16">
          How we collect, use, and protect your data
        </p>

        <p className="text-white/70 mb-8">
          <strong className="text-white">Last Updated:</strong> January 2026
        </p>

        <section className="mb-16">
          <h2 className="text-[28px] mt-16 mb-5 text-emerald-500">Introduction</h2>
          <p className="text-white/70 mb-4 text-base leading-relaxed">
            At Clapp, we take your privacy seriously. This Privacy Policy explains
            how we collect, use, disclose, and safeguard your information when you
            use our AI orchestration platform.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-[28px] mt-16 mb-5 text-emerald-500">
            Information We Collect
          </h2>

          <h3 className="text-xl mt-8 mb-3">Account Information</h3>
          <ul className="mb-6 pl-6 space-y-3">
            <li className="text-white/70">Name, email address, company name</li>
            <li className="text-white/70">
              Billing information (processed via Stripe, not stored by us)
            </li>
            <li className="text-white/70">Authentication credentials (encrypted)</li>
          </ul>

          <h3 className="text-xl mt-8 mb-3">Usage Data</h3>
          <ul className="mb-6 pl-6 space-y-3">
            <li className="text-white/70">
              Product usage analytics (features used, frequency)
            </li>
            <li className="text-white/70">
              Performance metrics (API response times, error rates)
            </li>
            <li className="text-white/70">Device and browser information</li>
          </ul>

          <h3 className="text-xl mt-8 mb-3">Product-Specific Data</h3>
          <p className="text-white/70 mb-2">
            <strong className="text-white">Atlas:</strong> Meta ad account IDs,
            campaign performance data, OAuth tokens
          </p>
          <p className="text-white/70 mb-2">
            <strong className="text-white">Moss:</strong> AI agent embeddings,
            semantic search queries, memory store contents
          </p>
          <p className="text-white/70">
            <strong className="text-white">Northstar:</strong> Brand mentions, AI
            engine data (aggregated, anonymized)
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-[28px] mt-16 mb-5 text-emerald-500">
            How We Use Your Information
          </h2>
          <ul className="mb-6 pl-6 space-y-3">
            <li className="text-white/70">
              <strong className="text-white">Service Delivery:</strong> To provide
              and improve our products
            </li>
            <li className="text-white/70">
              <strong className="text-white">Analytics:</strong> To understand usage
              patterns and optimize performance
            </li>
            <li className="text-white/70">
              <strong className="text-white">Communication:</strong> To send service
              updates, security alerts, billing notices
            </li>
            <li className="text-white/70">
              <strong className="text-white">Support:</strong> To respond to
              inquiries and troubleshoot issues
            </li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-[28px] mt-16 mb-5 text-emerald-500">Data Sharing</h2>
          <p className="text-white/70 mb-4">
            We do <strong className="text-white">NOT</strong> sell your data. We
            only share data with:
          </p>
          <ul className="mb-6 pl-6 space-y-3">
            <li className="text-white/70">
              <strong className="text-white">Service Providers:</strong> AWS
              (hosting), Stripe (payments), SendGrid (emails)
            </li>
            <li className="text-white/70">
              <strong className="text-white">Legal Requirements:</strong> When
              required by law or to protect rights
            </li>
            <li className="text-white/70">
              <strong className="text-white">Business Transfers:</strong> In case of
              merger or acquisition (with notice)
            </li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-[28px] mt-16 mb-5 text-emerald-500">
            Data Retention
          </h2>
          <ul className="mb-6 pl-6 space-y-3">
            <li className="text-white/70">
              Active accounts: Data retained for duration of service
            </li>
            <li className="text-white/70">
              Canceled accounts: 30-day grace period, then deleted
            </li>
            <li className="text-white/70">
              Backups: Retained for 90 days for disaster recovery
            </li>
            <li className="text-white/70">
              Custom retention: Available for enterprise customers
            </li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-[28px] mt-16 mb-5 text-emerald-500">Your Rights</h2>
          <p className="text-white/70 mb-4">You have the right to:</p>
          <ul className="mb-6 pl-6 space-y-3">
            <li className="text-white/70">
              <strong className="text-white">Access:</strong> Request a copy of your
              data
            </li>
            <li className="text-white/70">
              <strong className="text-white">Correction:</strong> Update inaccurate
              information
            </li>
            <li className="text-white/70">
              <strong className="text-white">Deletion:</strong> Request account and
              data deletion
            </li>
            <li className="text-white/70">
              <strong className="text-white">Portability:</strong> Export data in
              standard formats
            </li>
            <li className="text-white/70">
              <strong className="text-white">Opt-out:</strong> Unsubscribe from
              marketing emails
            </li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-[28px] mt-16 mb-5 text-emerald-500">Security</h2>
          <p className="text-white/70 mb-4">
            We implement industry-standard security measures:
          </p>
          <ul className="mb-6 pl-6 space-y-3">
            <li className="text-white/70">
              Encryption in transit (TLS 1.3) and at rest (AES-256)
            </li>
            <li className="text-white/70">
              Regular security audits and penetration testing
            </li>
            <li className="text-white/70">SOC 2 Type II compliance (in progress)</li>
            <li className="text-white/70">
              See our{" "}
              <Link to="/security" className="text-emerald-500 no-underline">
                Security page
              </Link>{" "}
              for details
            </li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-[28px] mt-16 mb-5 text-emerald-500">Cookies</h2>
          <p className="text-white/70 mb-4">We use cookies for:</p>
          <ul className="mb-6 pl-6 space-y-3">
            <li className="text-white/70">Session management (required)</li>
            <li className="text-white/70">Analytics (opt-out available)</li>
            <li className="text-white/70">No advertising/tracking cookies</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-[28px] mt-16 mb-5 text-emerald-500">
            International Data Transfers
          </h2>
          <p className="text-white/70">
            We offer data residency options (US, EU). For international transfers,
            we use Standard Contractual Clauses (SCCs) approved by the European
            Commission.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-[28px] mt-16 mb-5 text-emerald-500">
            Children's Privacy
          </h2>
          <p className="text-white/70">
            Our services are not directed to individuals under 16. We do not
            knowingly collect data from children.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-[28px] mt-16 mb-5 text-emerald-500">
            Changes to This Policy
          </h2>
          <p className="text-white/70">
            We may update this policy periodically. Material changes will be
            communicated via email with 30 days notice.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-[28px] mt-16 mb-5 text-emerald-500">Contact Us</h2>
          <p className="text-white/70 mb-4">
            Questions about this Privacy Policy? Contact us:
          </p>
          <p className="text-white/70">
            <strong className="text-white">Email:</strong>{" "}
            <a href="mailto:info@clapp.in" className="text-emerald-500 no-underline">
              info@clapp.in
            </a>
            <br />
            <strong className="text-white">Data Protection Officer:</strong>{" "}
            <a href="mailto:dpo@clapp.in" className="text-emerald-500 no-underline">
              dpo@clapp.in
            </a>
            <br />
            <strong className="text-white">Company:</strong> Clapp B.V.
            <br />
            <strong className="text-white">Registered in:</strong> The Netherlands
          </p>
        </section>
      </main>

      <ClappFooter />
    </div>
  );
};

export default Privacy;
