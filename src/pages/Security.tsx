import ClappNavbar from "@/components/ClappNavbar";
import ClappFooter from "@/components/ClappFooter";

const securityCards = [
  {
    icon: "🔐",
    title: "Data Encryption",
    description:
      "All data is encrypted in transit (TLS 1.3) and at rest (AES-256). Your API keys and campaign data are never accessible in plaintext.",
  },
  {
    icon: "🏢",
    title: "Infrastructure",
    description:
      "Hosted on AWS with SOC 2 compliant infrastructure. Isolated tenancy, private VPCs, and regular penetration testing.",
  },
  {
    icon: "🔑",
    title: "Access Control",
    description:
      "RBAC, SSO via SAML 2.0, multi-factor authentication, and audit logs for every action.",
  },
  {
    icon: "🛡️",
    title: "Compliance",
    description:
      "GDPR-compliant architecture. SOC 2 Type II certification in progress (Q2 2026).",
  },
];

const certifications = [
  { name: "SOC 2 TYPE II", status: "IN PROGRESS" },
  { name: "GDPR", status: "COMPLIANT" },
  { name: "ISO 27001", status: "PLANNED" },
];

const privacyPrinciples = [
  {
    title: "Data minimization",
    description: "We only collect data necessary for service delivery",
  },
  {
    title: "No training on your data",
    description: "Your proprietary information never trains our models",
  },
  {
    title: "Configurable retention",
    description: "From 30 days to 7 years",
  },
  {
    title: "Right to deletion",
    description: "Delete all your data at any time",
  },
];

const Security = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <ClappNavbar />

      <main className="max-w-[900px] mx-auto px-5 pt-[140px] pb-20">
        <h1 className="text-[clamp(32px,6vw,56px)] font-medium mb-4">Security</h1>
        <p className="text-xl text-white/60 mb-16">
          Enterprise-grade security and compliance for your AI infrastructure
        </p>

        <section className="mb-16">
          <h2 className="text-[28px] mt-16 mb-5 text-emerald-500">
            Our Commitment to Security
          </h2>
          <p className="text-white/70 text-base leading-relaxed">
            At Clapp, security isn't an afterthought—it's foundational to
            everything we build. We understand that you're entrusting us with your
            most sensitive data: ad campaigns worth millions, proprietary AI agent
            logic, and brand intelligence.
          </p>
        </section>

        {/* Security Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 my-10">
          {securityCards.map((card, index) => (
            <div
              key={index}
              className="bg-white/[0.03] border border-white/10 p-8 rounded-lg"
            >
              <h3 className="text-xl mb-3">
                {card.icon} {card.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        <section className="mb-16">
          <h2 className="text-[28px] mt-16 mb-5 text-emerald-500">
            Certifications & Compliance
          </h2>
          <div className="flex flex-wrap gap-2 my-8">
            {certifications.map((cert, index) => (
              <span
                key={index}
                className="inline-block bg-emerald-500/10 text-emerald-500 px-3 py-1 rounded text-xs font-semibold"
              >
                {cert.name} ({cert.status})
              </span>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-[28px] mt-16 mb-5 text-emerald-500">Data Privacy</h2>
          <ul className="space-y-4">
            {privacyPrinciples.map((principle, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-white/70"
              >
                <span className="text-emerald-500 mt-1">✓</span>
                <div>
                  <strong className="text-white">{principle.title}:</strong>{" "}
                  {principle.description}
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-[28px] mt-16 mb-5 text-emerald-500">Questions?</h2>
          <p className="text-white/70 mb-4">
            For security questions or to request our security documentation,
            contact us:
          </p>
          <p className="text-white/70">
            <strong className="text-white">Security Team:</strong>{" "}
            <a
              href="mailto:security@clapp.in"
              className="text-emerald-500 no-underline"
            >
              security@clapp.in
            </a>
            <br />
            <strong className="text-white">General Inquiries:</strong>{" "}
            <a href="mailto:info@clapp.in" className="text-emerald-500 no-underline">
              info@clapp.in
            </a>
            <br />
            <strong className="text-white">Company:</strong> Clapp B.V., registered
            in the Netherlands
          </p>
        </section>
      </main>

      <ClappFooter />
    </div>
  );
};

export default Security;
