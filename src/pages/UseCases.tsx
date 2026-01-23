import { Link } from "react-router-dom";
import ClappNavbar from "@/components/ClappNavbar";
import ClappFooter from "@/components/ClappFooter";

const useCases = [
  {
    number: "01",
    title: "DTC Brands",
    subtitle:
      "For direct-to-consumer brands spending €3K-€10K monthly on Meta ads",
    situation:
      "You're a founder or small marketing team managing Meta ads yourself. You've learned the basics through YouTube and trial-and-error. You're spending significant money but don't have the budget for a full-time performance marketer or expensive agency retainers.",
    painPoints: [
      {
        title: "You Don't Know What You Don't Know",
        description:
          "Your campaigns seem 'fine' but you suspect money is leaking somewhere. Every dashboard shows green numbers but your bank account isn't growing proportionally.",
      },
      {
        title: "Time Is Your Biggest Constraint",
        description:
          "You're wearing 7 hats already. You don't have 15 hours/week to become a Meta ads expert.",
      },
      {
        title: "Every Decision Feels Like a Gamble",
        description:
          '"Should I increase budget?" "Is this creative fatigued?" You\'re making decisions based on gut feeling.',
      },
      {
        title: "Tech Stack Gaps You Can't See",
        description:
          "Your pixel might be broken. CAPI might not be configured right. You have no idea.",
      },
    ],
    solutions: [
      "Instant Waste Detection: Free audit shows where money is leaking",
      "Prioritized Fix List: The ONE thing that saves the most money this week",
      "24/7 Expert Guidance: Performance Copilot as your personal consultant",
      "Technical Safety Net: Monitor pixel health, CAPI integration, EMQ 24/7",
    ],
    results: {
      monthlySpend: "€5,000",
      wasteIdentified: "28%",
      recoverable: "€1,400",
      cost: "€175/month",
      netSavings: "€1,225",
      roi: "7x in first month",
    },
    idealFor: [
      "DTC brands spending €3K-€10K/month on Meta ads",
      "Founders who manage ads themselves or with 1-2 person teams",
      "Brands that can't justify €2K-€5K/month agency fees yet",
      "Companies with decent ROAS (2.0-3.5x) but suspect waste",
    ],
  },
  {
    number: "02",
    title: "E-commerce Companies",
    subtitle:
      "For established operations spending €10K-€50K monthly, managing large catalogs",
    situation:
      "You're past the startup phase. You have an in-house marketer or small team managing Meta ads. You're spending serious money—€10K to €50K monthly—but at this scale, even a 10% efficiency improvement means thousands in recovered spend.",
    painPoints: [
      {
        title: "Complexity at Scale",
        description:
          "You're managing 200+ SKUs, multiple campaigns, dozens of ad sets. Your team is drowning in data.",
      },
      {
        title: "Attribution Blind Spots",
        description:
          "At €30K/month spend, even 5% tracking accuracy issues mean €1,500 in misattributed revenue.",
      },
      {
        title: "Creative Fatigue Management",
        description:
          "With hundreds of products, manually tracking creative fatigue is impossible.",
      },
      {
        title: "Competitive Pressure",
        description:
          "Your competitors are getting more aggressive. CPMs are rising. You need every possible edge.",
      },
    ],
    solutions: [
      "Automated Waste Detection: 6-layer framework scans daily",
      "Institutional Memory: AI learns what works for YOUR catalog",
      "Technical Infrastructure Monitoring: Critical at this spend level",
      "Competitive Intelligence: Know what competitors are testing",
    ],
    results: {
      monthlySpend: "€25,000",
      wasteIdentified: "22%",
      recoverable: "€5,500",
      additionalRecovery: "€2,000 from attribution fix",
      totalBenefit: "€7,500",
      cost: "€175/month",
      netGain: "€7,325",
      roi: "42x",
      annualSavings: "€87,900",
    },
    idealFor: [
      "E-commerce companies spending €10K-€50K/month",
      "Businesses with large product catalogs (50+ SKUs)",
      "Companies with in-house teams (1-3 people managing ads)",
      "Operations where 5-10% efficiency gains mean €5K+ monthly",
    ],
  },
  {
    number: "03",
    title: "Marketing Agencies",
    subtitle:
      "For agencies managing 10-30+ client accounts, needing consistent performance",
    situation:
      "You're an agency managing multiple client accounts. Each client expects white-glove service and consistent results. Your account managers are maxed out. You can't scale revenue without hiring more people—which kills your margins.",
    painPoints: [
      {
        title: "Context Switching Is Killing Productivity",
        description:
          "Your team jumps between 5+ client accounts daily. They forget client-specific strategies and past learnings.",
      },
      {
        title: "Inconsistent Performance",
        description:
          "Some accounts crush it. Others underperform. You can't pinpoint why. Client retention suffers.",
      },
      {
        title: "Reporting Overhead",
        description:
          "Your team spends 20% of their time creating client reports instead of optimizing.",
      },
      {
        title: "Technical Blind Spots",
        description:
          'When a client\'s tracking breaks, you don\'t notice until they ask "why did results drop?"',
      },
    ],
    solutions: [
      "Multi-Account Dashboard: Monitor all clients from one interface",
      "Client-Specific Institutional Memory: Junior team delivers senior-level optimization",
      "White-Label Reporting: Generate reports in 5 minutes instead of 2 hours",
      "Predictive Alerts: Fix issues before clients notice problems",
    ],
    results: {
      clientsManaging: "15 accounts",
      avgClientSpend: "€8,000/month",
      wasteRecoveredPerClient: "€1,200/month",
      totalWasteRecovered: "€18,000/month",
      reportingTimeSaved: "70% (12 hours/week)",
      scaleCapacity: "25 clients without new hires",
      cost: "€175/month",
      roi: "Pays for itself 100x over",
    },
    idealFor: [
      "Agencies managing 10-30+ client accounts on Meta ads",
      "Agencies with 2-8 person media buying teams",
      "Agencies that need to scale without proportionally scaling headcount",
      "Agencies struggling with inconsistent performance",
      "Agencies spending 20%+ of team time on manual reporting",
    ],
  },
];

const UseCases = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <ClappNavbar />

      <main className="max-w-[1000px] mx-auto px-5 pt-[140px] pb-20">
        <div className="mb-16">
          <span className="text-[11px] uppercase tracking-[0.15em] text-emerald-500 mb-4 block">
            CLAPP ATLAS USE CASES
          </span>
          <h1 className="text-[clamp(32px,6vw,56px)] font-medium mb-4">
            Built For Businesses That Can't Afford Waste
          </h1>
          <p className="text-xl text-white/60">
            Whether you're a DTC brand, an e-commerce operation, or an agency
            managing dozens of accounts—Atlas helps you stop bleeding ad budget
            and start scaling profitably.
          </p>
        </div>

        <div className="space-y-24">
          {useCases.map((useCase) => (
            <div
              key={useCase.number}
              className="border border-white/10 rounded-lg overflow-hidden"
            >
              {/* Header */}
              <div className="bg-emerald-500/10 border-b border-white/10 p-8">
                <span className="text-emerald-500 text-sm font-semibold tracking-wider">
                  USE CASE {useCase.number}
                </span>
                <h2 className="text-[clamp(28px,5vw,40px)] font-medium mt-2 mb-2">
                  {useCase.title}
                </h2>
                <p className="text-lg text-white/70">{useCase.subtitle}</p>
              </div>

              <div className="p-8 space-y-10">
                {/* Situation */}
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-white/50 mb-4">
                    The Situation
                  </h3>
                  <p className="text-white/80 text-lg leading-relaxed">
                    {useCase.situation}
                  </p>
                </div>

                {/* Pain Points */}
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-white/50 mb-6">
                    The Pain You're Feeling
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {useCase.painPoints.map((pain, i) => (
                      <div
                        key={i}
                        className="bg-red-500/5 border border-red-500/20 p-5 rounded"
                      >
                        <h4 className="text-red-400 font-medium mb-2">
                          {i + 1}. {pain.title}
                        </h4>
                        <p className="text-white/60 text-sm">{pain.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Solutions */}
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-white/50 mb-4">
                    How Clapp Atlas Solves This
                  </h3>
                  <ul className="space-y-3">
                    {useCase.solutions.map((solution, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-white/80"
                      >
                        <span className="text-emerald-500 mt-1">✓</span>
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Results */}
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-white/50 mb-4">
                    Real Results
                  </h3>
                  <div className="bg-emerald-500/5 border border-emerald-500/20 p-6 rounded font-mono text-sm">
                    {"monthlySpend" in useCase.results && (
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-white/60">Monthly ad spend:</span>
                          <span className="text-white">
                            {useCase.results.monthlySpend}
                          </span>
                        </div>
                        {"wasteIdentified" in useCase.results && (
                          <div className="flex justify-between">
                            <span className="text-white/60">
                              Waste identified:
                            </span>
                            <span className="text-white">
                              {useCase.results.wasteIdentified}
                            </span>
                          </div>
                        )}
                        {"recoverable" in useCase.results && (
                          <div className="flex justify-between">
                            <span className="text-white/60">
                              Recoverable monthly:
                            </span>
                            <span className="text-emerald-400">
                              {useCase.results.recoverable}
                            </span>
                          </div>
                        )}
                        {"additionalRecovery" in useCase.results && (
                          <div className="flex justify-between">
                            <span className="text-white/60">
                              Additional recovery:
                            </span>
                            <span className="text-emerald-400">
                              {useCase.results.additionalRecovery}
                            </span>
                          </div>
                        )}
                        {"totalBenefit" in useCase.results && (
                          <div className="flex justify-between">
                            <span className="text-white/60">Total benefit:</span>
                            <span className="text-emerald-400">
                              {useCase.results.totalBenefit}
                            </span>
                          </div>
                        )}
                        <div className="flex justify-between pt-2 border-t border-white/10">
                          <span className="text-white/60">Atlas cost:</span>
                          <span className="text-white">{useCase.results.cost}</span>
                        </div>
                        {"netSavings" in useCase.results && (
                          <div className="flex justify-between">
                            <span className="text-white/60">Net savings:</span>
                            <span className="text-emerald-400 font-bold">
                              {useCase.results.netSavings}
                            </span>
                          </div>
                        )}
                        {"netGain" in useCase.results && (
                          <div className="flex justify-between">
                            <span className="text-white/60">Net gain:</span>
                            <span className="text-emerald-400 font-bold">
                              {useCase.results.netGain}
                            </span>
                          </div>
                        )}
                        <div className="flex justify-between pt-2 border-t border-white/10">
                          <span className="text-white/60">ROI:</span>
                          <span className="text-emerald-400 font-bold text-lg">
                            {useCase.results.roi}
                          </span>
                        </div>
                        {"annualSavings" in useCase.results && (
                          <div className="flex justify-between">
                            <span className="text-white/60">Annual savings:</span>
                            <span className="text-emerald-400">
                              {useCase.results.annualSavings}
                            </span>
                          </div>
                        )}
                      </div>
                    )}
                    {"clientsManaging" in useCase.results && (
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-white/60">Managing:</span>
                          <span className="text-white">
                            {useCase.results.clientsManaging}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/60">Avg client spend:</span>
                          <span className="text-white">
                            {useCase.results.avgClientSpend}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/60">
                            Waste recovered/client:
                          </span>
                          <span className="text-emerald-400">
                            {useCase.results.wasteRecoveredPerClient}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/60">Total recovered:</span>
                          <span className="text-emerald-400 font-bold">
                            {useCase.results.totalWasteRecovered}
                          </span>
                        </div>
                        <div className="flex justify-between pt-2 border-t border-white/10">
                          <span className="text-white/60">
                            Reporting time saved:
                          </span>
                          <span className="text-white">
                            {useCase.results.reportingTimeSaved}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/60">Scale capacity:</span>
                          <span className="text-white">
                            {useCase.results.scaleCapacity}
                          </span>
                        </div>
                        <div className="flex justify-between pt-2 border-t border-white/10">
                          <span className="text-white/60">Atlas cost:</span>
                          <span className="text-white">{useCase.results.cost}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/60">ROI:</span>
                          <span className="text-emerald-400 font-bold text-lg">
                            {useCase.results.roi}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Ideal For */}
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-white/50 mb-4">
                    This Works For
                  </h3>
                  <ul className="space-y-2">
                    {useCase.idealFor.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-white/80">
                        <span className="text-emerald-500">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center p-12 border border-emerald-500/30 rounded-lg bg-emerald-500/5">
          <h2 className="text-3xl font-medium mb-4">
            See Which Use Case You Fit
          </h2>
          <p className="text-white/60 mb-8">
            Start your free 3-day trial and get a complete waste audit of your
            account—regardless of your size or structure.
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

export default UseCases;
