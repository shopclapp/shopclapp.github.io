import { useState } from "react";
import ClappNavbar from "@/components/ClappNavbar";
import ClappFooter from "@/components/ClappFooter";

// Modal content definitions
const modalContent: Record<string, { title: string; description: string }> = {
  demo: {
    title: "Book demo",
    description: "Talk to our team. We'll show you how Clapp orchestrates AI.",
  },
  "northstar-waitlist": {
    title: "Join Northstar waitlist",
    description:
      "Join 320+ companies. Launch Q2 2026. Early access for design partners.",
  },
  custom: {
    title: "Custom orchestration",
    description: "Build custom AI agents. Deploy in 10 working days.",
  },
};

// Customer logos
const customerLogos = [
  "GRAMMARLY",
  "HUBSPOT",
  "MICROSOFT",
  "BAJAJ",
  "VOLKSWAGEN",
  "UPTIK",
  "TECHSCALE",
];

// Integration logos
const integrations = [
  "SALESFORCE",
  "HUBSPOT",
  "META",
  "GOOGLE ADS",
  "SLACK",
  "TEAMS",
  "SNOWFLAKE",
  "BIGQUERY",
  "POSTGRES",
  "STRIPE",
  "NOTION",
  "JIRA",
  "ZENDESK",
  "INTERCOM",
  "MAILCHIMP",
  "SENDGRID",
];

// Stats data
const stats = [
  { number: "200+", label: "Integrations" },
  { number: "2,750+", label: "Active Users" },
  { number: "<10ms", label: "Memory Retrieval" },
  { number: "99.9%", label: "Uptime SLA" },
];

// Framework steps
const frameworkSteps = [
  { number: "01", title: "Research", description: "Identify AI opportunities" },
  { number: "02", title: "Evaluate", description: "Test before deployment" },
  { number: "03", title: "Orchestrate", description: "Deploy and coordinate" },
  { number: "04", title: "Govern", description: "Monitor and control" },
];

// Deployment options
const deploymentOptions = [
  {
    title: "Cloud",
    description: "AWS, Azure, GCP",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 64 64" fill="none">
        <rect
          x="8"
          y="20"
          width="48"
          height="28"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="2"
        />
        <path
          d="M16 28h32M16 36h32"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="2"
        />
        <circle cx="20" cy="24" r="1.5" fill="rgba(255,255,255,0.4)" />
      </svg>
    ),
  },
  {
    title: "Private Cloud",
    description: "Your VPC",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 64 64" fill="none">
        <rect
          x="12"
          y="16"
          width="40"
          height="32"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="2"
        />
        <circle
          cx="32"
          cy="32"
          r="8"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="2"
        />
        <path
          d="M32 24v-4M32 44v-4M40 32h4M20 32h-4"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    title: "On-Premise",
    description: "Your data center",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 64 64" fill="none">
        <rect
          x="16"
          y="12"
          width="32"
          height="40"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="2"
        />
        <rect x="20" y="16" width="24" height="4" fill="rgba(255,255,255,0.4)" />
        <rect x="20" y="24" width="24" height="4" fill="rgba(255,255,255,0.4)" />
        <rect x="20" y="32" width="24" height="4" fill="rgba(255,255,255,0.4)" />
      </svg>
    ),
  },
  {
    title: "Hybrid",
    description: "Flexible setup",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 64 64" fill="none">
        <circle
          cx="24"
          cy="32"
          r="12"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="2"
        />
        <circle
          cx="40"
          cy="32"
          r="12"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="2"
        />
        <path
          d="M24 20v24M40 20v24"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="2"
        />
      </svg>
    ),
  },
];

// Testimonials
const testimonials = [
  {
    quote:
      "Atlas eliminated €180K in ad waste within the first month. The governance controls give our compliance team confidence.",
    name: "Sarah Chen",
    title: "Head of Performance",
    company: "TechScale (€15M ARR)",
  },
  {
    quote:
      "Moss solved our AI hallucination problem. Sub-10ms retrieval with complete data residency control. Conversion rate up 47%.",
    name: "David Park",
    title: "VP Engineering",
    company: "SaaS Unicorn (Series D)",
  },
  {
    quote:
      "We orchestrate 47 AI agents through Clapp. The governance dashboard is mandatory for our security team.",
    name: "Michael Foster",
    title: "CIO",
    company: "Enterprise Financial Services",
  },
  {
    quote:
      "Scaled from 12 to 50 clients without hiring. Atlas + Moss + custom orchestration handles everything.",
    name: "James Rodriguez",
    title: "CEO",
    company: "PerformanceFirst Agency",
  },
];

const ClappLanding = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("demo");
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    company: "",
  });

  const openModal = (type: string) => {
    setModalType(type);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setFormData({ email: "", name: "", company: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Lead:", { ...formData, type: modalType });
    alert("Thank you. Our team will reach out within 24 hours.");
    closeModal();
  };

  const currentModal = modalContent[modalType] || modalContent.demo;

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <ClappNavbar />

      {/* Hero Section */}
      <div className="pt-[140px] pb-[60px] md:pt-[200px] md:pb-[100px]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          {/* Rating Badge */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 text-sm text-white/80 bg-white/5 px-4 py-2 rounded border border-white/10">
              <span className="text-amber-400 text-base">⭐</span>
              <span className="font-semibold">4.8/5</span>
              <span className="text-white/60">ease of use by 2,750+ users</span>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-2 mb-6 text-[10px] uppercase tracking-[0.15em] text-white/50">
            <span className="px-2.5 py-1 border border-white/20 rounded-sm whitespace-nowrap">
              Y COMBINATOR BACKED
            </span>
            <span className="px-2.5 py-1 border border-white/20 rounded-sm whitespace-nowrap">
              200+ INTEGRATIONS
            </span>
            <span className="px-2.5 py-1 border border-white/20 rounded-sm whitespace-nowrap">
              META BUSINESS PARTNER
            </span>
          </div>

          {/* Hero Title */}
          <h1 className="text-[clamp(32px,8vw,72px)] font-medium leading-[1.1] tracking-[-0.03em] mb-6">
            Cut your ad waste by 38%. Eliminate AI hallucinations. Own your brand
            in AI search.
          </h1>

          {/* Hero Description */}
          <p className="text-[clamp(16px,4vw,20px)] text-white/50 mb-8 leading-relaxed">
            <span className="text-emerald-500 font-semibold">Atlas</span> has
            optimized €450M in ad spend for 2,500+ marketers.{" "}
            <span className="text-emerald-500 font-semibold">Moss</span> powers AI
            agents at Grammarly, HubSpot, Microsoft.{" "}
            <span className="text-emerald-500 font-semibold">Northstar</span>{" "}
            monitors ChatGPT, Claude, Perplexity, Gemini, Google. Deploy all three
            today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-3 mb-10">
            <a
              href="https://calendly.com/clappp/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-8 py-4 text-sm font-semibold tracking-[0.05em] no-underline text-center hover:opacity-90 transition-opacity"
            >
              BOOK DEMO
            </a>
            <a
              href="#products"
              className="bg-transparent text-white border border-white/30 px-8 py-4 text-sm font-semibold tracking-[0.05em] no-underline text-center hover:bg-white/5 transition-colors"
            >
              VIEW PRODUCTS
            </a>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 py-16 border-t border-white/10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-5 border border-white/10"
            >
              <span className="text-[clamp(28px,8vw,40px)] font-semibold block mb-2">
                {stat.number}
              </span>
              <span className="text-[11px] uppercase tracking-[0.1em] text-white/50">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Customer Logos Section */}
      <section className="py-16 border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <p className="text-center text-[11px] uppercase tracking-[0.15em] text-white/50 mb-10">
            TRUSTED BY LEADING COMPANIES
          </p>
        </div>

        <div className="overflow-hidden relative">
          <div className="flex gap-10 animate-[scrollLogos_30s_linear_infinite]">
            {[...customerLogos, ...customerLogos].map((logo, index) => (
              <div
                key={index}
                className="min-w-[200px] h-[100px] border border-white/20 flex items-center justify-center text-lg font-bold text-white/90 text-center p-6 bg-white/[0.03]"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <p className="text-center mt-8 text-sm text-white/60">
            2,750+ teams across 200+ companies trust Clapp
          </p>
        </div>
      </section>

      {/* Framework Section */}
      <section className="py-20 md:py-32 border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <div className="text-[11px] uppercase tracking-[0.15em] text-white/50 mb-5">
            PLATFORM
          </div>
          <h2 className="text-[clamp(24px,6vw,48px)] font-medium leading-[1.2] tracking-[-0.02em] mb-4">
            AI orchestration framework. Research, evaluate, orchestrate, govern.
          </h2>
          <p className="text-[clamp(15px,3vw,18px)] text-white/70 mb-12 leading-relaxed">
            Complete AI agent lifecycle management. From discovery to deployment
            to governance.
          </p>

          <div className="grid md:grid-cols-4 gap-6 mt-10">
            {frameworkSteps.map((step, index) => (
              <div
                key={index}
                className="p-6 border border-white/10 relative"
              >
                <div className="text-[11px] text-white/50 mb-3">
                  {step.number}
                </div>
                <div className="text-base font-semibold mb-2">{step.title}</div>
                <p className="text-sm text-white/60">{step.description}</p>
                {index < frameworkSteps.length - 1 && (
                  <span className="hidden md:block absolute -right-[21px] top-1/2 -translate-y-1/2 text-2xl text-white/30">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 md:py-32 border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <div className="text-[11px] uppercase tracking-[0.15em] text-white/50 mb-5">
            INTEGRATIONS
          </div>
          <h2 className="text-[clamp(24px,6vw,48px)] font-medium leading-[1.2] tracking-[-0.02em] mb-4">
            200+ integrations. Connect your entire stack.
          </h2>
          <p className="text-[clamp(15px,3vw,18px)] text-white/70 mb-12 leading-relaxed">
            Pre-built connectors for every tool you use. Deploy AI without
            rebuilding infrastructure.
          </p>
        </div>

        <div className="overflow-hidden">
          <div className="flex gap-4 animate-[scroll_40s_linear_infinite] hover:[animation-play-state:paused]">
            {[...integrations, ...integrations].map((integration, index) => (
              <div
                key={index}
                className="min-w-[120px] h-20 border border-white/10 flex items-center justify-center text-[10px] text-white/40 text-center p-4 bg-white/[0.02]"
              >
                {integration}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance Section */}
      <section className="py-20 md:py-32 border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <div className="text-[11px] uppercase tracking-[0.15em] text-white/50 mb-5">
            GOVERNANCE
          </div>
          <h2 className="text-[clamp(24px,6vw,48px)] font-medium leading-[1.2] tracking-[-0.02em] mb-4">
            Control AI. Don't let AI control you.
          </h2>
          <p className="text-[clamp(15px,3vw,18px)] text-white/70 mb-12 leading-relaxed">
            Enterprise-grade governance. Set policies, track usage, audit
            decisions. Your data stays in your environment.
          </p>

          <div className="grid md:grid-cols-2 gap-10 md:gap-20 mt-10">
            {/* Dashboard Visual */}
            <div className="aspect-[16/10] bg-white/[0.02] border border-white/10 p-6">
              <div className="h-full">
                <div className="flex justify-between items-center pb-3 border-b border-white/10 mb-4">
                  <span className="text-[9px] uppercase tracking-[0.1em] text-white/50">
                    GOVERNANCE
                  </span>
                  <span className="text-[8px] text-white bg-white/10 px-1.5 py-0.5 rounded-sm">
                    ● ACTIVE
                  </span>
                </div>
                <div className="mb-3">
                  <div className="text-[8px] uppercase tracking-[0.1em] text-white/40 mb-1">
                    ACTIVE AGENTS
                  </div>
                  <div className="text-[clamp(18px,5vw,24px)] font-semibold">
                    47
                  </div>
                </div>
                <ul className="space-y-0">
                  <li className="py-1.5 border-b border-white/5 flex justify-between text-[10px]">
                    <span className="text-white/60">Policy Compliance</span>
                    <span className="text-white font-semibold">100%</span>
                  </li>
                  <li className="py-1.5 border-b border-white/5 flex justify-between text-[10px]">
                    <span className="text-white/60">Audit Logs</span>
                    <span className="text-white font-semibold">12,450</span>
                  </li>
                  <li className="py-1.5 border-b border-white/5 flex justify-between text-[10px]">
                    <span className="text-white/60">Data Residency</span>
                    <span className="text-white font-semibold">EU-WEST-1</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Governance Features */}
            <div className="grid gap-6">
              <div className="p-5 border border-white/10">
                <h4 className="text-[15px] mb-2">Policy Enforcement</h4>
                <p className="text-[13px] text-white/60">
                  Define rules for AI behavior. Automatic compliance checks.
                </p>
              </div>
              <div className="p-5 border border-white/10">
                <h4 className="text-[15px] mb-2">Complete Audit Trail</h4>
                <p className="text-[13px] text-white/60">
                  Every AI decision logged. Full transparency for compliance
                  teams.
                </p>
              </div>
              <div className="p-5 border border-white/10">
                <h4 className="text-[15px] mb-2">Data Residency</h4>
                <p className="text-[13px] text-white/60">
                  Your data stays in your region. GDPR-compliant architecture.
                </p>
              </div>
              <div className="p-5 border border-white/10">
                <h4 className="text-[15px] mb-2">Role-Based Access</h4>
                <p className="text-[13px] text-white/60">
                  Control who manages agents. Enterprise SSO.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 md:py-32 border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          {/* Products Intro */}
          <div className="text-center mb-12">
            <span className="inline-block bg-white text-black px-3.5 py-1.5 text-[10px] font-bold tracking-wider mb-6">
              READY NOW — PLUG AND PLAY
            </span>
            <h2 className="text-[clamp(24px,6vw,48px)] font-medium leading-[1.2] tracking-[-0.02em] mb-4">
              Pre-built solutions. Start using today.
            </h2>
            <p className="text-[clamp(15px,3vw,18px)] text-white/70 max-w-3xl mx-auto">
              Production-ready tools built on our orchestration platform. Each
              leverages our governance framework, 200+ integrations, and
              compliance infrastructure. Sign up and start immediately.
            </p>
          </div>

          {/* Products Grid */}
          <div className="space-y-16">
            {/* Atlas */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-20 p-8 border-2 border-white/20 relative">
              <span className="absolute -top-4 left-6 bg-black px-3 text-sm font-bold tracking-[2px] text-white/60">
                01
              </span>
              <span className="absolute -top-4 right-6 bg-black px-3 text-[10px] font-semibold tracking-wider text-green-400">
                ● LIVE
              </span>

              {/* Dashboard */}
              <div className="aspect-[16/10] bg-white/[0.02] border border-white/10 p-6 overflow-hidden">
                <div className="h-full">
                  <div className="flex justify-between items-center pb-3 border-b border-white/10 mb-4">
                    <span className="text-[9px] uppercase tracking-[0.1em] text-white/50">
                      CAMPAIGN HEALTH
                    </span>
                    <span className="text-[8px] text-white bg-white/10 px-1.5 py-0.5 rounded-sm">
                      ● LIVE
                    </span>
                  </div>
                  <div className="mb-3">
                    <div className="text-[8px] uppercase tracking-[0.1em] text-white/40 mb-1">
                      ROAS PREDICTION
                    </div>
                    <div className="text-[clamp(18px,5vw,24px)] font-semibold">
                      3.42x
                    </div>
                  </div>
                  <ul className="mt-3 space-y-0">
                    <li className="py-1.5 border-b border-white/5 flex justify-between text-[10px]">
                      <span className="text-white/60">Campaign A</span>
                      <span className="text-white font-semibold">HEALTHY</span>
                    </li>
                    <li className="py-1.5 border-b border-white/5 flex justify-between text-[10px]">
                      <span className="text-white/60">Campaign B</span>
                      <span className="text-white font-semibold">WARNING</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Info */}
              <div>
                <h3 className="text-[clamp(18px,4vw,24px)] font-medium mb-2">
                  Clapp Atlas
                </h3>
                <span className="text-[11px] uppercase tracking-[0.1em] text-white/50 mb-4 block">
                  Meta Ads Intelligence
                </span>
                <p className="text-[clamp(15px,3vw,18px)] text-white/70 mb-6 leading-relaxed">
                  AI agent that diagnoses Meta campaigns, predicts ROAS with 96%
                  accuracy, eliminates 38% of wasted ad spend.
                </p>

                <div className="grid grid-cols-2 gap-4 my-6 py-6 border-y border-white/10">
                  <div>
                    <span className="text-[clamp(24px,6vw,32px)] font-semibold block">
                      €450M
                    </span>
                    <span className="text-[11px] text-white/50 mt-1 block">
                      Ad spend managed
                    </span>
                  </div>
                  <div>
                    <span className="text-[clamp(24px,6vw,32px)] font-semibold block">
                      38%
                    </span>
                    <span className="text-[11px] text-white/50 mt-1 block">
                      Waste eliminated
                    </span>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-3">
                  <a
                    href="https://performance.clapp.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black px-8 py-4 text-sm font-semibold tracking-[0.05em] no-underline text-center hover:opacity-90 transition-opacity"
                  >
                    VISIT ATLAS →
                  </a>
                </div>
              </div>
            </div>

            {/* Moss */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-20 p-8 border-2 border-white/20 relative">
              <span className="absolute -top-4 left-6 bg-black px-3 text-sm font-bold tracking-[2px] text-white/60">
                02
              </span>
              <span className="absolute -top-4 right-6 bg-black px-3 text-[10px] font-semibold tracking-wider text-green-400">
                ● LIVE
              </span>

              {/* Info first on mobile, second on desktop */}
              <div className="md:order-1">
                <h3 className="text-[clamp(18px,4vw,24px)] font-medium mb-2">
                  Moss
                </h3>
                <span className="text-[11px] uppercase tracking-[0.1em] text-white/50 mb-4 block">
                  Memory Layer for AI Agents
                </span>
                <p className="text-[clamp(15px,3vw,18px)] text-white/70 mb-6 leading-relaxed">
                  Sub-10ms semantic search runtime. The memory layer that gives AI
                  agents instant, accurate context retrieval. Eliminates
                  hallucinations. Trusted by Grammarly, HubSpot, Microsoft. Y
                  Combinator backed.
                </p>

                <div className="grid grid-cols-2 gap-4 my-6 py-6 border-y border-white/10">
                  <div>
                    <span className="text-[clamp(24px,6vw,32px)] font-semibold block">
                      &lt;10ms
                    </span>
                    <span className="text-[11px] text-white/50 mt-1 block">
                      Context retrieval
                    </span>
                  </div>
                  <div>
                    <span className="text-[clamp(24px,6vw,32px)] font-semibold block">
                      250+
                    </span>
                    <span className="text-[11px] text-white/50 mt-1 block">
                      Teams in production
                    </span>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-3">
                  <a
                    href="https://usemoss.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black px-8 py-4 text-sm font-semibold tracking-[0.05em] no-underline text-center hover:opacity-90 transition-opacity"
                  >
                    VISIT MOSS →
                  </a>
                </div>
              </div>

              {/* Dashboard */}
              <div className="aspect-[16/10] bg-white/[0.02] border border-white/10 p-6 overflow-hidden md:order-2">
                <div className="h-full">
                  <div className="flex justify-between items-center pb-3 border-b border-white/10 mb-4">
                    <span className="text-[9px] uppercase tracking-[0.1em] text-white/50">
                      MEMORY SEARCH
                    </span>
                    <span className="text-[8px] text-white bg-white/10 px-1.5 py-0.5 rounded-sm">
                      ● 8.3ms
                    </span>
                  </div>
                  <div className="mb-3">
                    <div className="text-[8px] uppercase tracking-[0.1em] text-white/40 mb-1">
                      QUERY
                    </div>
                    <div className="text-sm font-semibold">
                      OAuth integration?
                    </div>
                  </div>
                  <ul className="mt-3 space-y-0">
                    <li className="py-1.5 border-b border-white/5 flex justify-between text-[10px]">
                      <span className="text-white/60">docs/oauth.md</span>
                      <span className="text-white font-semibold">0.98</span>
                    </li>
                    <li className="py-1.5 border-b border-white/5 flex justify-between text-[10px]">
                      <span className="text-white/60">api/auth.md</span>
                      <span className="text-white font-semibold">0.94</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Northstar */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-20 p-8 border-2 border-white/20 relative">
              <span className="absolute -top-4 left-6 bg-black px-3 text-sm font-bold tracking-[2px] text-white/60">
                03
              </span>
              <span className="absolute -top-4 right-6 bg-black px-3 text-[10px] font-semibold tracking-wider text-amber-400">
                ● Q2 2026
              </span>

              {/* Dashboard */}
              <div className="aspect-[16/10] bg-white/[0.02] border border-white/10 p-6 overflow-hidden">
                <div className="h-full">
                  <div className="flex justify-between items-center pb-3 border-b border-white/10 mb-4">
                    <span className="text-[9px] uppercase tracking-[0.1em] text-white/50">
                      BRAND MONITORING
                    </span>
                    <span className="text-[8px] text-white bg-white/10 px-1.5 py-0.5 rounded-sm">
                      ● Q2 2026
                    </span>
                  </div>
                  <div className="mb-3">
                    <div className="text-[8px] uppercase tracking-[0.1em] text-white/40 mb-1">
                      MENTIONS
                    </div>
                    <div className="text-[clamp(18px,5vw,24px)] font-semibold">
                      1,247
                    </div>
                  </div>
                  <ul className="mt-3 space-y-0">
                    <li className="py-1.5 border-b border-white/5 flex justify-between text-[10px]">
                      <span className="text-white/60">ChatGPT</span>
                      <span className="text-white font-semibold">432</span>
                    </li>
                    <li className="py-1.5 border-b border-white/5 flex justify-between text-[10px]">
                      <span className="text-white/60">Perplexity</span>
                      <span className="text-white font-semibold">318</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Info */}
              <div>
                <h3 className="text-[clamp(18px,4vw,24px)] font-medium mb-2">
                  Clapp Northstar
                </h3>
                <span className="text-[11px] uppercase tracking-[0.1em] text-white/50 mb-4 block">
                  Answer Engine Optimization
                </span>
                <p className="text-[clamp(15px,3vw,18px)] text-white/70 mb-6 leading-relaxed">
                  AI agent that tracks your brand across ChatGPT, Perplexity,
                  Claude, Gemini. Optimize for AI recommendations. Launch Q2 2026.
                </p>

                <div className="grid grid-cols-2 gap-4 my-6 py-6 border-y border-white/10">
                  <div>
                    <span className="text-[clamp(24px,6vw,32px)] font-semibold block">
                      320+
                    </span>
                    <span className="text-[11px] text-white/50 mt-1 block">
                      Beta waitlist
                    </span>
                  </div>
                  <div>
                    <span className="text-[clamp(24px,6vw,32px)] font-semibold block">
                      5+
                    </span>
                    <span className="text-[11px] text-white/50 mt-1 block">
                      AI engines
                    </span>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-3">
                  <button
                    onClick={() => openModal("northstar-waitlist")}
                    className="bg-white text-black px-8 py-4 text-sm font-semibold tracking-[0.05em] border-none cursor-pointer hover:opacity-90 transition-opacity"
                  >
                    JOIN WAITLIST
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Custom CTA */}
          <div className="text-center mt-16 pt-16 border-t border-white/10">
            <h3 className="text-[clamp(18px,4vw,24px)] font-medium mb-4">
              Need custom AI orchestration?
            </h3>
            <p className="text-white/70 mb-6">
              Build custom AI agents tailored to your business. Enterprise
              deployment in 10 working days.
            </p>
            <button
              onClick={() => openModal("custom")}
              className="bg-white text-black px-8 py-4 text-sm font-semibold tracking-[0.05em] border-none cursor-pointer hover:opacity-90 transition-opacity"
            >
              BOOK CUSTOM DEMO
            </button>
          </div>
        </div>
      </section>

      {/* Deployment Section */}
      <section className="py-20 md:py-32 border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <div className="text-[11px] uppercase tracking-[0.15em] text-white/50 mb-5">
            DEPLOYMENT
          </div>
          <h2 className="text-[clamp(24px,6vw,48px)] font-medium leading-[1.2] tracking-[-0.02em] mb-4">
            Your data. Your environment. Your control.
          </h2>
          <p className="text-[clamp(15px,3vw,18px)] text-white/70 mb-12 leading-relaxed">
            Deploy in your cloud, our cloud, or on-premise. Data never leaves
            your infrastructure.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-10">
            {deploymentOptions.map((option, index) => (
              <div
                key={index}
                className="text-center p-6 border border-white/10"
              >
                <div className="mx-auto mb-4">{option.icon}</div>
                <h4 className="text-sm mb-2">{option.title}</h4>
                <p className="text-xs text-white/50">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32 border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <div className="text-[11px] uppercase tracking-[0.15em] text-white/50 mb-5">
            CUSTOMERS
          </div>
          <h2 className="text-[clamp(24px,6vw,48px)] font-medium leading-[1.2] tracking-[-0.02em] mb-12">
            Trusted by teams who demand certainty
          </h2>

          <div className="grid md:grid-cols-2 gap-6 md:gap-10">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 border border-white/10"
              >
                <p className="text-[15px] leading-relaxed mb-5 text-white/90">
                  "{testimonial.quote}"
                </p>
                <p className="text-xs text-white/50">
                  <span className="text-white font-semibold">
                    {testimonial.name}
                  </span>
                  , {testimonial.title}
                  <br />
                  {testimonial.company}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClappFooter onOpenModal={openModal} />

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black/95 z-[1000] flex items-center justify-center p-5"
          onClick={(e) => e.target === e.currentTarget && closeModal()}
        >
          <div className="bg-black border border-white/20 p-10 max-w-[400px] w-full relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-transparent border-none text-white/50 text-3xl p-0 w-8 h-8 cursor-pointer hover:text-white"
            >
              ×
            </button>
            <h3 className="text-xl mb-3">{currentModal.title}</h3>
            <p className="text-sm text-white/70 mb-6">
              {currentModal.description}
            </p>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="your@company.com"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full p-3.5 bg-transparent border border-white/20 text-white text-[15px] mb-3 placeholder:text-white/30"
              />
              <input
                type="text"
                placeholder="Full Name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full p-3.5 bg-transparent border border-white/20 text-white text-[15px] mb-3 placeholder:text-white/30"
              />
              <input
                type="text"
                placeholder="Company"
                required
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
                className="w-full p-3.5 bg-transparent border border-white/20 text-white text-[15px] mb-3 placeholder:text-white/30"
              />
              <button
                type="submit"
                className="w-full bg-white text-black px-8 py-4 text-sm font-semibold tracking-[0.05em] border-none cursor-pointer hover:opacity-90 transition-opacity"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      )}

      {/* CSS Animations */}
      <style>{`
        @keyframes scrollLogos {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default ClappLanding;
