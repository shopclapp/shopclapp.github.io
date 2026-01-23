import { Link } from "react-router-dom";
import ClappNavbar from "@/components/ClappNavbar";
import ClappFooter from "@/components/ClappFooter";

const features = [
  {
    number: "01",
    title: "Waste Recovery Engine",
    subtitle: "Find every euro you're losing—and get it back",
    description:
      "30-40% of your Meta ad spend is wasted. Not underperforming. Not suboptimal. Wasted. We run a 6-layer diagnostic on your entire ad account covering Account, Campaign, Audience, Creative, Technical, and Meta AI Alignment layers.",
    highlights: [
      "6-layer diagnostic on your entire ad account",
      "Issues ranked by money impact with exact fix recommendations",
      "Real output: Critical, High, and Medium priority findings",
    ],
    example: {
      critical: "Ad Set 'Lookalike 1%' has 78% audience overlap → Save €870/month",
      high: "Pixel tracking failure on checkout page → Recover €340",
      medium: "Enable CBO on 3 campaigns → 15-20% efficiency gain",
    },
  },
  {
    number: "02",
    title: "Institutional Knowledge AI",
    subtitle: "The AI that learns from your mistakes (so you stop making them)",
    description:
      "Meta's algorithm is a black box. Actions have second-order effects you can't predict. Our AI builds permanent memory of every action, what actually happened, and patterns across thousands of similar accounts.",
    highlights: [
      "Learns YOUR specific account dynamics",
      "Predicts outcomes with confidence scores",
      "Gets smarter every day you use it",
    ],
    example: {
      scenario: "Pausing Ad A (€12/conv) to fund Ad B (€8/conv)",
      intervention:
        "AI predicts Ad B will rise to €14/conv. Better move: Pause Ad C instead.",
      savings: "€180/week vs €40/week with original plan (91% confidence)",
    },
  },
  {
    number: "03",
    title: "24/7 Performance Copilot",
    subtitle: "The AI that knows your account as well as you do",
    description:
      "Campaigns break at 2am. CPM spikes on Sunday. Creative fatigues while you're in meetings. Performance Copilot has real-time access to YOUR account data, always-updated Meta knowledge, and cross-account intelligence.",
    highlights: [
      "Real-time access to your account data and history",
      "Always-updated knowledge of Meta's latest changes",
      "Cross-account intelligence from similar advertisers",
    ],
    questions: [
      "Why did CPM spike?",
      "Should I use Advantage+ for this product?",
      "Which audience is wasting the most money?",
      "Is my CAPI setup correct?",
    ],
  },
  {
    number: "04",
    title: "Content Intelligence",
    subtitle: "Stop guessing what creative will work",
    description:
      "Most brands test creative blindly. You make 10 variations, spend €2,000 testing, and 8 fail. Content Intelligence shows you what already works by combining your performance history with industry benchmarks.",
    highlights: [
      "Analysis of 143+ brands and €12M+ total spend",
      "Your historical winners identified",
      "Prioritized action plan for next creative",
    ],
    patterns: [
      { name: "Before/After Transformation", multiplier: "3.2x" },
      { name: "User-Generated Content", multiplier: "2.7x" },
      { name: "Style Challenge", multiplier: "2.1x" },
    ],
  },
  {
    number: "05",
    title: "Competitive Intelligence",
    subtitle: "See what your competitors are running right now",
    description:
      "Most brands check competitors manually once a month. By then, opportunities are gone. Competitive Intelligence monitors 24/7 and alerts you to changes within hours.",
    highlights: [
      "Real-time monitoring of competitor activity",
      "Track active ads, duration, and creative patterns",
      "Identify strategic gaps they're NOT covering",
    ],
    alerts: [
      "Competitor launches new campaign",
      "Competitor changes creative strategy",
      "Competitor's ad runs 30+ days (= probably working)",
      "Strategic gap appears in market",
    ],
  },
  {
    number: "06",
    title: "Technical Diagnostics",
    subtitle: "The layer where competitors go blind",
    description:
      "Your Meta Pixel stops tracking checkout events. You don't notice for 6 days. You've lost €2,400 in attributed revenue. Meta's algorithm thinks your ads stopped working. Your CPM increases 40%.",
    highlights: [
      "Pixel Health, CAPI Integration, Event Match Quality",
      "Attribution Accuracy, Data Freshness",
      "Step-by-step fixes with exact code changes",
    ],
    monitoring: [
      "24/7 monitoring of technical infrastructure",
      "Instant alerts when issues detected",
      "Historical impact analysis",
      "Proactive recommendations before things break",
    ],
  },
];

const Features = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <ClappNavbar />

      <main className="max-w-[1000px] mx-auto px-5 pt-[140px] pb-20">
        <div className="mb-16">
          <span className="text-[11px] uppercase tracking-[0.15em] text-emerald-500 mb-4 block">
            CLAPP ATLAS FEATURES
          </span>
          <h1 className="text-[clamp(32px,6vw,56px)] font-medium mb-4">
            Features That Find & Recover Wasted Ad Spend
          </h1>
          <p className="text-xl text-white/60">
            Six AI-powered capabilities that identify where 20-40% of your Meta
            advertising budget is being wasted—and show you exactly how to get it
            back.
          </p>
        </div>

        <div className="space-y-20">
          {features.map((feature) => (
            <div
              key={feature.number}
              className="border border-white/10 p-8 md:p-12 rounded-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-emerald-500 text-sm font-semibold tracking-wider">
                  FEATURE {feature.number}
                </span>
              </div>
              <h2 className="text-[clamp(24px,5vw,36px)] font-medium mb-2">
                {feature.title}
              </h2>
              <h3 className="text-xl text-emerald-500 mb-6">{feature.subtitle}</h3>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                {feature.description}
              </p>

              {/* Highlights */}
              <div className="mb-8">
                <h4 className="text-sm uppercase tracking-wider text-white/50 mb-4">
                  Key Capabilities
                </h4>
                <ul className="space-y-3">
                  {feature.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/80">
                      <span className="text-emerald-500 mt-1">✓</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Feature-specific content */}
              {feature.example && (
                <div className="bg-white/[0.03] border border-white/10 p-6 rounded font-mono text-sm">
                  <div className="text-white/50 mb-3">Example Output:</div>
                  {"critical" in feature.example && (
                    <>
                      <div className="text-red-400 mb-2">
                        🔴 CRITICAL: {feature.example.critical}
                      </div>
                      <div className="text-amber-400 mb-2">
                        🟡 HIGH: {feature.example.high}
                      </div>
                      <div className="text-green-400">
                        🟢 MEDIUM: {feature.example.medium}
                      </div>
                    </>
                  )}
                  {"scenario" in feature.example && (
                    <>
                      <div className="text-white/60 mb-2">
                        Scenario: {feature.example.scenario}
                      </div>
                      <div className="text-emerald-400 mb-2">
                        AI: {feature.example.intervention}
                      </div>
                      <div className="text-white">
                        Savings: {feature.example.savings}
                      </div>
                    </>
                  )}
                </div>
              )}

              {feature.questions && (
                <div className="bg-white/[0.03] border border-white/10 p-6 rounded">
                  <div className="text-white/50 mb-3 text-sm">
                    Example Questions You Can Ask:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {feature.questions.map((q, i) => (
                      <span
                        key={i}
                        className="bg-white/10 px-3 py-1.5 rounded text-sm text-white/80"
                      >
                        "{q}"
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {feature.patterns && (
                <div className="grid md:grid-cols-3 gap-4">
                  {feature.patterns.map((pattern, i) => (
                    <div
                      key={i}
                      className="bg-white/[0.03] border border-white/10 p-4 rounded text-center"
                    >
                      <div className="text-2xl font-semibold text-emerald-500 mb-1">
                        {pattern.multiplier}
                      </div>
                      <div className="text-sm text-white/60">{pattern.name}</div>
                    </div>
                  ))}
                </div>
              )}

              {feature.alerts && (
                <div className="bg-white/[0.03] border border-white/10 p-6 rounded">
                  <div className="text-white/50 mb-3 text-sm">
                    You Get Alerts When:
                  </div>
                  <ul className="space-y-2">
                    {feature.alerts.map((alert, i) => (
                      <li key={i} className="flex items-center gap-2 text-white/80">
                        <span className="text-amber-400">🔔</span>
                        {alert}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {feature.monitoring && (
                <div className="bg-white/[0.03] border border-white/10 p-6 rounded">
                  <div className="text-white/50 mb-3 text-sm">What You Get:</div>
                  <ul className="space-y-2">
                    {feature.monitoring.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-white/80">
                        <span className="text-emerald-500">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center p-12 border border-emerald-500/30 rounded-lg bg-emerald-500/5">
          <h2 className="text-3xl font-medium mb-4">
            Start Recovering Wasted Ad Spend Today
          </h2>
          <p className="text-white/60 mb-8">
            Free 3-day trial. See exactly where your money is leaking. No credit
            card required.
          </p>
          <Link
            to="https://calendly.com/clappp/30min"
            target="_blank"
            className="inline-block bg-white text-black px-8 py-4 text-sm font-semibold tracking-[0.05em] no-underline hover:opacity-90 transition-opacity"
          >
            START FREE TRIAL →
          </Link>
        </div>
      </main>

      <ClappFooter />
    </div>
  );
};

export default Features;
