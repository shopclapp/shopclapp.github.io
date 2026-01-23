import { Link } from "react-router-dom";
import ClappNavbar from "@/components/ClappNavbar";
import ClappFooter from "@/components/ClappFooter";

const Terms = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <ClappNavbar />

      <main className="max-w-[900px] mx-auto px-5 pt-[140px] pb-20">
        <h1 className="text-[clamp(32px,6vw,56px)] font-medium mb-4">
          Terms of Service
        </h1>
        <p className="text-xl text-white/60 mb-16">
          Legal agreement for using Clapp's AI platform
        </p>

        <p className="text-white/70 mb-8">
          <strong className="text-white">Last Updated:</strong> January 2026
        </p>

        <section className="mb-16">
          <h2 className="text-[28px] mt-16 mb-5 text-emerald-500">
            Agreement to Terms
          </h2>
          <p className="text-white/70 text-base leading-relaxed">
            By accessing or using Clapp's platform (Atlas, Moss, Northstar), you
            agree to be bound by these Terms of Service. If you disagree with any
            part of the terms, you may not access the service.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-[28px] mt-16 mb-5 text-emerald-500">
            Service Description
          </h2>
          <p className="text-white/70 mb-4">
            Clapp provides an AI orchestration platform consisting of:
          </p>
          <ul className="mb-6 pl-6 space-y-3">
            <li className="text-white/70">
              <strong className="text-white">Atlas:</strong> Meta advertising
              optimization and campaign intelligence
            </li>
            <li className="text-white/70">
              <strong className="text-white">Moss:</strong> Memory layer for AI
              agents with sub-10ms semantic search
            </li>
            <li className="text-white/70">
              <strong className="text-white">Northstar:</strong> Brand monitoring
              across AI engines (ChatGPT, Claude, etc.)
            </li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-[28px] mt-16 mb-5 text-emerald-500">
            Account Registration
          </h2>
          <ul className="mb-6 pl-6 space-y-3">
            <li className="text-white/70">
              You must provide accurate, complete information
            </li>
            <li className="text-white/70">
              You are responsible for maintaining account security
            </li>
            <li className="text-white/70">
              One account per organization (no sharing credentials)
            </li>
            <li className="text-white/70">
              Notify us immediately of any unauthorized access
            </li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-[28px] mt-16 mb-5 text-emerald-500">
            Acceptable Use
          </h2>
          <p className="text-white/70 mb-4">You agree NOT to:</p>
          <ul className="mb-6 pl-6 space-y-3">
            <li className="text-white/70">Violate any laws or regulations</li>
            <li className="text-white/70">
              Infringe on intellectual property rights
            </li>
            <li className="text-white/70">
              Attempt to reverse engineer our services
            </li>
            <li className="text-white/70">
              Use the service to spam, harass, or harm others
            </li>
            <li className="text-white/70">
              Exceed API rate limits or attempt to bypass restrictions
            </li>
            <li className="text-white/70">
              Resell or redistribute our services without permission
            </li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-[28px] mt-16 mb-5 text-emerald-500">
            Billing and Payments
          </h2>
          <ul className="mb-6 pl-6 space-y-3">
            <li className="text-white/70">
              Subscription fees are billed monthly or annually
            </li>
            <li className="text-white/70">
              Prices may change with 30 days notice
            </li>
            <li className="text-white/70">
              Refunds available within 14 days of initial purchase
            </li>
            <li className="text-white/70">
              Late payments may result in service suspension
            </li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-[28px] mt-16 mb-5 text-emerald-500">
            Intellectual Property
          </h2>
          <p className="text-white/70 mb-2">
            <strong className="text-white">Clapp owns:</strong> All platform code,
            algorithms, UI/UX, documentation
          </p>
          <p className="text-white/70 mb-2">
            <strong className="text-white">You own:</strong> All data you upload (ad
            campaigns, AI embeddings, brand data)
          </p>
          <p className="text-white/70">
            <strong className="text-white">License granted:</strong> We grant you a
            limited, non-exclusive, non-transferable license to use our services
            during your subscription.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-[28px] mt-16 mb-5 text-emerald-500">Data Privacy</h2>
          <ul className="mb-6 pl-6 space-y-3">
            <li className="text-white/70">
              We do NOT train our models on your proprietary data
            </li>
            <li className="text-white/70">Your data is encrypted and isolated</li>
            <li className="text-white/70">
              See our{" "}
              <Link to="/privacy" className="text-emerald-500 no-underline">
                Privacy Policy
              </Link>{" "}
              for details
            </li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-[28px] mt-16 mb-5 text-emerald-500">
            Service Level Agreement (SLA)
          </h2>
          <ul className="mb-6 pl-6 space-y-3">
            <li className="text-white/70">
              <strong className="text-white">Uptime:</strong> 99.9% monthly uptime
              guarantee
            </li>
            <li className="text-white/70">
              <strong className="text-white">Support:</strong> Email support within
              24 hours (business days)
            </li>
            <li className="text-white/70">
              <strong className="text-white">Credits:</strong> Service credits for
              downtime exceeding SLA
            </li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-[28px] mt-16 mb-5 text-emerald-500">Termination</h2>
          <p className="text-white/70 mb-4">Either party may terminate:</p>
          <ul className="mb-6 pl-6 space-y-3">
            <li className="text-white/70">
              <strong className="text-white">You:</strong> Cancel anytime from
              account settings
            </li>
            <li className="text-white/70">
              <strong className="text-white">Us:</strong> For ToS violations,
              non-payment, or service discontinuation
            </li>
            <li className="text-white/70">
              <strong className="text-white">Data retention:</strong> 30-day grace
              period post-cancellation
            </li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-[28px] mt-16 mb-5 text-emerald-500">
            Limitation of Liability
          </h2>
          <p className="text-white/70 mb-4">
            To the maximum extent permitted by law:
          </p>
          <ul className="mb-6 pl-6 space-y-3">
            <li className="text-white/70">
              Clapp is not liable for indirect, incidental, or consequential damages
            </li>
            <li className="text-white/70">
              Our total liability is limited to fees paid in the last 12 months
            </li>
            <li className="text-white/70">
              We provide the service "AS IS" without warranties
            </li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-[28px] mt-16 mb-5 text-emerald-500">
            Indemnification
          </h2>
          <p className="text-white/70">
            You agree to indemnify Clapp from claims arising from your use of the
            service, violation of these terms, or infringement of third-party
            rights.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-[28px] mt-16 mb-5 text-emerald-500">
            Changes to Terms
          </h2>
          <p className="text-white/70">
            We may modify these terms with 30 days notice. Continued use after
            changes constitutes acceptance.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-[28px] mt-16 mb-5 text-emerald-500">Governing Law</h2>
          <p className="text-white/70">
            These terms are governed by the laws of Delaware, USA. Disputes will be
            resolved in San Francisco County courts.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-[28px] mt-16 mb-5 text-emerald-500">Contact</h2>
          <p className="text-white/70 mb-4">Questions about these Terms?</p>
          <p className="text-white/70">
            <strong className="text-white">Email:</strong>{" "}
            <a href="mailto:info@clapp.in" className="text-emerald-500 no-underline">
              info@clapp.in
            </a>
            <br />
            <strong className="text-white">Legal:</strong>{" "}
            <a href="mailto:legal@clapp.in" className="text-emerald-500 no-underline">
              legal@clapp.in
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

export default Terms;
