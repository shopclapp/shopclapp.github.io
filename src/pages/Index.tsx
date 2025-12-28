import { useState } from "react";
import { Star, Plus, Check, TrendingUp, Monitor, Bell, ChevronDown, Linkedin, Twitter, Instagram } from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("diagnosis");
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const tabs = [
    { id: "diagnosis", label: "Diagnosis", icon: Plus },
    { id: "forecast", label: "Track", icon: TrendingUp },
    { id: "monitor", label: "Monitor", icon: Monitor },
    { id: "alerts", label: "Alerts", icon: Bell },
  ];

  const faqs = [
    {
      id: "1",
      question: "What is Clapp Atlas?",
      answer: "Clapp Atlas is an AI-powered decision intelligence platform for Meta advertising. It diagnoses campaign health across 5 layers, tracks ROAS and CPA with 96% accuracy, and provides explicit decision cards before you commit budget. Unlike analytics tools that show what happened, Atlas predicts what will happen and tells you exactly what to do next."
    },
    {
      id: "2",
      question: "How is Atlas different from Madgicx or other Meta ads tools?",
      answer: "Atlas is the only platform that combines outcome tracking, institutional memory, and predicted vs actual verification. While tools like Madgicx react after damage is done, Atlas predicts problems 48 hours in advance. Unlike human analysts who can only monitor limited campaigns and lose knowledge when they leave, Atlas retains all intelligence permanently and monitors unlimited campaigns 24/7."
    },
    {
      id: "3",
      question: "Is Atlas safe to use with Meta advertising policies?",
      answer: "Yes, Atlas is a verified Meta Tech Provider with a Meta-Safe Architecture. Atlas does NOT execute changes autonomously - it only provides recommendations. Humans approve every action, and Atlas operates with read-only access to Meta by default. All suggestions include policy-first guardrails."
    },
    {
      id: "4",
      question: "What results can I expect with Atlas?",
      answer: "Atlas users typically see 40% waste reduction, 2x ROAS improvement within 8 weeks, and 96% tracking accuracy. Our performance-based pricing model means we only win when you save money - we track verified waste prevented and share risk with you."
    },
    {
      id: "5",
      question: "How much does Atlas cost?",
      answer: "Atlas offers two pricing models: Fixed Enterprise at €499 per ad account/month with unlimited usage, or Performance-Based at €249 per ad account/month + 10% of verified waste recovered. The Founders Program (limited to first 50 customers) offers early pricing with no hidden charges and guaranteed 3-10x ROI within 90 days."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background border-b border-foreground/[0.08] px-5 py-4">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          <div className="text-base font-semibold tracking-wide">CLAPP ATLAS</div>
          <a href="#why-atlas" className="btn-primary text-[0.8125rem] px-5 py-2.5">Why Atlas?</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-[100px] pb-[60px] md:pt-[140px] md:pb-[80px] text-center">
        <div className="container">
          <div className="hero-badge">
            <Star className="w-3 h-3" />
            4.8/5 by 500+ Performance Marketers
          </div>
          <h1 className="mb-6">Your Best Growth Operator on Meta</h1>
          <p className="text-[1.0625rem] text-foreground/65 mb-10 leading-relaxed max-w-2xl mx-auto">
            Atlas is your copilot that diagnoses health, tracks outcomes, and tells you exactly what to do next.
          </p>
          <div className="flex flex-col md:flex-row gap-3 justify-center mb-12">
            <a href="#" className="btn-primary w-full md:w-auto">Book Demo + Get Free Audit</a>
          </div>

          {/* Stats Grid */}
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">40%</span>
              <span className="stat-label">Waste Reduction</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">
                <TrendingUp className="w-12 h-12 inline-block" />
              </span>
              <span className="stat-label">Trends To Improve ROAS</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Monitoring</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Institutional Knowledge</span>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider">
        <svg className="divider-svg" viewBox="0 0 800 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 10 Q200 0, 400 10 T800 10" stroke="white" strokeWidth="2" fill="none"/>
        </svg>
      </div>

      {/* Solution Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">THE ATLAS SOLUTION</span>
            <h2>One System. Three Steps.</h2>
          </div>

          <div className="solution-diagram">
            <div className="solution-step">
              <div className="step-number">1</div>
              <div className="step-text">
                <strong className="text-[1.0625rem]">Diagnose</strong><br />
                <span className="text-sm text-foreground/65">15,847 signals analyzed across 5 layers — fatigue, saturation, compliance, velocity, efficiency</span>
              </div>
            </div>

            <div className="solution-step">
              <div className="step-number">2</div>
              <div className="step-text">
                <strong className="text-[1.0625rem]">Monitor</strong><br />
                <span className="text-sm text-foreground/65">Predicts CPA, ROAS, and risk before you commit budget — with 96% accuracy</span>
              </div>
            </div>

            <div className="solution-step">
              <div className="step-number">3</div>
              <div className="step-text">
                <strong className="text-[1.0625rem]">Act</strong><br />
                <span className="text-sm text-foreground/65">Explicit decision cards: "Scale to ₹65K" or "Refresh 3 creatives in 24h" — humans approve every step</span>
              </div>
            </div>
          </div>

          <p className="text-center text-foreground/65 mt-8 text-base">
            Everything else is just proof it works.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider">
        <svg className="divider-svg" viewBox="0 0 800 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 10 Q200 0, 400 10 T800 10" stroke="white" strokeWidth="2" fill="none"/>
        </svg>
      </div>

      {/* How Atlas Works - Dashboard Section */}
      <section className="section" id="how">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">HOW ATLAS WORKS</span>
            <h2>Diagnose. Monitor. Act.</h2>
            <p className="section-subtitle">
              See how Atlas monitors signals, predicts outcomes, and gives you decision cards before you commit budget.
            </p>
          </div>

          <div className="dashboard">
            <div className="dashboard-tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`dashboard-tab ${activeTab === tab.id ? "active" : ""}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <tab.icon className="w-3.5 h-3.5" />
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="p-6">
              {activeTab === "diagnosis" && (
                <div className="animate-fade-in">
                  <div className="mb-8 pb-5 border-b border-foreground/[0.08]">
                    <div className="text-lg font-semibold mb-3">Summer Sale 2025</div>
                    <div className="inline-flex items-center gap-1.5 px-3.5 py-2 border border-foreground/15 rounded-md text-xs font-medium">
                      <Check className="w-2.5 h-2.5" />
                      Healthy
                    </div>
                  </div>

                  <div className="metrics-grid">
                    <div className="metric-card">
                      <div className="metric-label">Signal Strength</div>
                      <div className="metric-value">94/100</div>
                      <div className="metric-change">Strong performance</div>
                    </div>
                    <div className="metric-card">
                      <div className="metric-label">Fatigue Risk</div>
                      <div className="metric-value">Medium</div>
                      <div className="metric-change">3 creatives in 48h</div>
                    </div>
                    <div className="metric-card">
                      <div className="metric-label">Saturation</div>
                      <div className="metric-value">Low</div>
                      <div className="metric-change">Safe to scale</div>
                    </div>
                    <div className="metric-card">
                      <div className="metric-label">Compliance</div>
                      <div className="metric-value">100%</div>
                      <div className="metric-change">All policies met</div>
                    </div>
                  </div>

                  <div className="chart-mock">
                    <div className="chart-header">Performance Velocity</div>
                    <div className="chart-bars">
                      {[45, 62, 58, 75, 82, 88, 100].map((height, i) => (
                        <div key={i} className="chart-bar" style={{ height: `${height}%` }}>
                          <div className="chart-label">{["M", "T", "W", "T", "F", "S", "S"][i]}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="verdict mt-6">
                    <h3 className="mb-4">Atlas Diagnosis</h3>
                    <p className="text-foreground/75 leading-relaxed mb-4 text-[0.9375rem]">
                      Analyzed 15,847 signals across performance velocity, creative fatigue, audience health, and compliance. Campaign performing well but 3 creatives showing early fatigue signals.
                    </p>
                    <p className="text-foreground/75"><strong>Risk Window:</strong> 48 hours</p>
                  </div>
                </div>
              )}

              {activeTab === "forecast" && (
                <div className="animate-fade-in">
                  <div className="mb-8 pb-5 border-b border-foreground/[0.08]">
                    <div className="text-lg font-semibold mb-3">Outcome Tracker</div>
                    <div className="inline-flex items-center gap-1.5 px-3.5 py-2 border border-foreground/15 rounded-md text-xs font-medium">
                      Action Needed
                    </div>
                  </div>
                  <div className="verdict">
                    <h3 className="mb-4">Predicted vs Actual</h3>
                    <p className="text-foreground/75 leading-relaxed mb-4 text-[0.9375rem]">
                      Atlas predicted ROAS of 4.2x for this campaign. Actual ROAS after 7 days: 4.1x (97.6% accuracy).
                    </p>
                    <p className="text-foreground/75"><strong>Recommendation:</strong> Increase budget by 25% to ₹65K</p>
                  </div>
                </div>
              )}

              {activeTab === "monitor" && (
                <div className="animate-fade-in">
                  <div className="mb-8 pb-5 border-b border-foreground/[0.08]">
                    <div className="text-lg font-semibold mb-3">24/7 Monitoring</div>
                    <div className="inline-flex items-center gap-1.5 px-3.5 py-2 border border-foreground/15 rounded-md text-xs font-medium">
                      <Check className="w-2.5 h-2.5" />
                      All Systems Normal
                    </div>
                  </div>
                  <div className="metrics-grid">
                    <div className="metric-card">
                      <div className="metric-label">Active Campaigns</div>
                      <div className="metric-value">12</div>
                      <div className="metric-change">Across 3 accounts</div>
                    </div>
                    <div className="metric-card">
                      <div className="metric-label">Signals Analyzed</div>
                      <div className="metric-value">47K+</div>
                      <div className="metric-change">Last 24 hours</div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "alerts" && (
                <div className="animate-fade-in">
                  <div className="mb-8 pb-5 border-b border-foreground/[0.08]">
                    <div className="text-lg font-semibold mb-3">Recent Alerts</div>
                    <div className="inline-flex items-center gap-1.5 px-3.5 py-2 border border-foreground/15 rounded-md text-xs font-medium">
                      2 Actions Pending
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="atlas-card">
                      <p className="font-medium mb-2">Creative Fatigue Detected</p>
                      <p className="text-sm text-foreground/65">Ad set "Retargeting Q4" showing 23% decline in CTR. Refresh recommended within 24h.</p>
                    </div>
                    <div className="atlas-card">
                      <p className="font-medium mb-2">Budget Optimization Available</p>
                      <p className="text-sm text-foreground/65">Campaign "Brand Awareness" can be scaled by 40% based on current performance velocity.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider">
        <svg className="divider-svg" viewBox="0 0 800 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 10 Q200 0, 400 10 T800 10" stroke="white" strokeWidth="2" fill="none"/>
        </svg>
      </div>

      {/* Real Results Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">REAL RESULTS</span>
            <h2>Before vs After Atlas</h2>
          </div>

          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>Before Atlas</th>
                  <th style={{ color: "#10B981" }}>With Atlas</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>ROAS</strong></td>
                  <td style={{ color: "#EF4444" }}>2.1x</td>
                  <td style={{ color: "#10B981" }}>4.9x</td>
                </tr>
                <tr>
                  <td><strong>CAC</strong></td>
                  <td style={{ color: "#EF4444" }}>₹1,420</td>
                  <td style={{ color: "#10B981" }}>₹680</td>
                </tr>
                <tr>
                  <td><strong>Wasted Spend</strong></td>
                  <td style={{ color: "#EF4444" }}>₹4.2L/month</td>
                  <td style={{ color: "#10B981" }}>₹0</td>
                </tr>
                <tr>
                  <td><strong>Tracking Accuracy</strong></td>
                  <td style={{ color: "#EF4444" }}>0% (no tracking)</td>
                  <td style={{ color: "#10B981" }}>96%</td>
                </tr>
                <tr>
                  <td><strong>Institutional Memory</strong></td>
                  <td style={{ color: "#EF4444" }}>Lost when team leaves</td>
                  <td style={{ color: "#10B981" }}>Survives team churn</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider">
        <svg className="divider-svg" viewBox="0 0 800 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 10 Q200 0, 400 10 T800 10" stroke="white" strokeWidth="2" fill="none"/>
        </svg>
      </div>

      {/* Why Not Others Section */}
      <section className="section" id="why-atlas">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">WHY NOT OTHERS</span>
            <h2>Direct Comparison</h2>
          </div>

          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>Capability</th>
                  <th>Human Analysts</th>
                  <th style={{ color: "#10B981" }}>Atlas</th>
                  <th>Madgicx</th>
                  <th>Other Platforms</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Outcome Tracking</strong></td>
                  <td>❌</td>
                  <td style={{ color: "#10B981" }}>✓</td>
                  <td>❌</td>
                  <td>❌</td>
                </tr>
                <tr>
                  <td><strong>Institutional Memory</strong></td>
                  <td>❌</td>
                  <td style={{ color: "#10B981" }}>✓</td>
                  <td>❌</td>
                  <td>❌</td>
                </tr>
                <tr>
                  <td><strong>Predicted vs Actual Tracking</strong></td>
                  <td>❌</td>
                  <td style={{ color: "#10B981" }}>✓ (96%)</td>
                  <td>❌</td>
                  <td>❌</td>
                </tr>
                <tr>
                  <td><strong>Predictive Risk Windows</strong></td>
                  <td>❌</td>
                  <td style={{ color: "#10B981" }}>✓ (48h)</td>
                  <td>❌</td>
                  <td>❌</td>
                </tr>
                <tr>
                  <td><strong>24/7 Monitoring</strong></td>
                  <td>❌</td>
                  <td style={{ color: "#10B981" }}>✓</td>
                  <td>Partial</td>
                  <td>Partial</td>
                </tr>
                <tr>
                  <td><strong>Decision Certainty</strong></td>
                  <td>Manual</td>
                  <td style={{ color: "#10B981" }}>Predictive</td>
                  <td>Reactive</td>
                  <td>Conversational</td>
                </tr>
                <tr>
                  <td><strong>Survives Team Churn</strong></td>
                  <td>❌</td>
                  <td style={{ color: "#10B981" }}>✓</td>
                  <td>❌</td>
                  <td>❌</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-center mt-8 text-base text-foreground/80">
            <strong>If other platforms tell you what happened,<br />
            Atlas tells you what to do next — with numbers.</strong>
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider">
        <svg className="divider-svg" viewBox="0 0 800 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 10 Q200 0, 400 10 T800 10" stroke="white" strokeWidth="2" fill="none"/>
        </svg>
      </div>

      {/* Who It's For Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">WHO IT'S FOR</span>
            <h2>Built for CROs & CMOs</h2>
          </div>

          <div className="atlas-card">
            <h3 className="mb-4">Senior Leaders Who Need:</h3>
            <ul className="list-none">
              <li className="py-2.5 pl-6 relative text-foreground/80 text-[0.9375rem] before:content-['—'] before:absolute before:left-0 before:text-foreground/50">
                Predictive actions, not historical reports
              </li>
              <li className="py-2.5 pl-6 relative text-foreground/80 text-[0.9375rem] before:content-['—'] before:absolute before:left-0 before:text-foreground/50">
                Decision certainty with explicit risk scoring
              </li>
              <li className="py-2.5 pl-6 relative text-foreground/80 text-[0.9375rem] before:content-['—'] before:absolute before:left-0 before:text-foreground/50">
                Institutional knowledge that survives team churn
              </li>
              <li className="py-2.5 pl-6 relative text-foreground/80 text-[0.9375rem] before:content-['—'] before:absolute before:left-0 before:text-foreground/50">
                Accountability (predicted vs actual tracking)
              </li>
              <li className="py-2.5 pl-6 relative text-foreground/80 text-[0.9375rem] before:content-['—'] before:absolute before:left-0 before:text-foreground/50">
                Meta-safe recommendations they can trust
              </li>
            </ul>
            <div className="pt-6 mt-6 border-t border-foreground/[0.08] text-xl font-semibold leading-snug">
              You're not buying analytics.<br />
              You're buying certainty.
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider">
        <svg className="divider-svg" viewBox="0 0 800 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 10 Q200 0, 400 10 T800 10" stroke="white" strokeWidth="2" fill="none"/>
        </svg>
      </div>

      {/* Roadmap + Meta Safe Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">ROADMAP</span>
            <h2>Future of Performance Marketing</h2>
            <p className="section-subtitle">
              <strong>2026:</strong> First decision layer Meta trusts. Beyond automation—the nerve center of decision intelligence.
            </p>
          </div>

          <div className="roadmap-item">
            <div className="w-10 h-10 mb-4">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="white" strokeWidth="1.5">
                <circle cx="20" cy="20" r="16"/>
                <path d="M20 8v24M8 20h24"/>
              </svg>
            </div>
            <h3 className="mb-3">Q1 2026</h3>
            <p className="text-foreground/65 leading-relaxed text-[0.9375rem]">
              Aligning to Meta's strategic changes while onboarding customers at scale.
            </p>
          </div>

          <div className="roadmap-item">
            <div className="w-10 h-10 mb-4">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="white" strokeWidth="1.5">
                <path d="M6 20l7 7 14-14 7 7"/>
                <circle cx="20" cy="20" r="16"/>
              </svg>
            </div>
            <h3 className="mb-3">Q2 2026</h3>
            <p className="text-foreground/65 leading-relaxed text-[0.9375rem]">
              Multi-platform: Google Ads, TikTok, LinkedIn. Unified decision layer with cross-platform memory.
            </p>
          </div>

          <div className="roadmap-item">
            <div className="w-10 h-10 mb-4">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="white" strokeWidth="1.5">
                <rect x="8" y="12" width="24" height="20" rx="2"/>
                <path d="M8 17h24M15 12v5M25 12v5"/>
              </svg>
            </div>
            <h3 className="mb-3">Q4 2026</h3>
            <p className="text-foreground/65 leading-relaxed text-[0.9375rem]">
              Institutional memory. Team changes don't reset intelligence. Atlas learns and retains forever.
            </p>
          </div>

          {/* Meta Safe Badge */}
          <div className="meta-safe">
            <h3 className="flex items-center gap-3 mb-2">
              <Star className="w-5 h-5" />
              Meta-Safe Architecture
            </h3>
            <div className="text-xs text-foreground/60 mb-6 font-medium">Verified Meta Tech Provider</div>
            <ul className="list-none">
              <li className="py-2.5 pl-7 relative text-foreground/90 text-[0.9375rem] before:content-['✓'] before:absolute before:left-0 before:font-bold">
                Atlas does NOT execute changes autonomously
              </li>
              <li className="py-2.5 pl-7 relative text-foreground/90 text-[0.9375rem] before:content-['✓'] before:absolute before:left-0 before:font-bold">
                Atlas provides recommendations only
              </li>
              <li className="py-2.5 pl-7 relative text-foreground/90 text-[0.9375rem] before:content-['✓'] before:absolute before:left-0 before:font-bold">
                Humans approve every action
              </li>
              <li className="py-2.5 pl-7 relative text-foreground/90 text-[0.9375rem] before:content-['✓'] before:absolute before:left-0 before:font-bold">
                Read-only access to Meta by default
              </li>
              <li className="py-2.5 pl-7 relative text-foreground/90 text-[0.9375rem] before:content-['✓'] before:absolute before:left-0 before:font-bold">
                Policy-first guardrails on all suggestions
              </li>
              <li className="py-2.5 pl-7 relative text-foreground/90 text-[0.9375rem] before:content-['✓'] before:absolute before:left-0 before:font-bold">
                No autonomous budget changes ever
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider">
        <svg className="divider-svg" viewBox="0 0 800 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 10 Q200 0, 400 10 T800 10" stroke="white" strokeWidth="2" fill="none"/>
        </svg>
      </div>

      {/* Pricing Section */}
      <section className="section" id="pricing">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">PRICING</span>
            <h2>Founders Program</h2>
            <p className="section-subtitle">Limited availability — lock in early pricing</p>
          </div>

          <div className="pricing-card">
            <h3 className="mb-6 text-lg">Fixed Enterprise</h3>
            <div className="price">€499</div>
            <div className="period">per ad account / month</div>

            <ul className="pricing-features">
              <li>24/7 Signal Monitoring</li>
              <li>Outcome Tracking (96% accuracy)</li>
              <li>Institutional Memory</li>
              <li>Meta-Safe Architecture</li>
              <li>Human-in-Loop Enforced</li>
              <li>Priority Support</li>
            </ul>

            <a href="#" className="btn-primary w-full">Book Demo</a>

            <div className="mt-6 text-[0.8125rem] text-foreground/50 leading-relaxed">
              <strong>Predictable costs per account.</strong> Perfect for enterprise teams managing multiple accounts.
            </div>
          </div>

          <div className="pricing-card featured">
            <div className="featured-badge">Founders Program</div>
            <h3 className="mb-6 text-lg mt-4">Performance-Based</h3>
            <div className="price">€249</div>
            <div className="period">per ad account / month + 10% of waste recovered</div>

            <ul className="pricing-features">
              <li>24/7 Signal Monitoring</li>
              <li>Outcome Tracking (96% accuracy)</li>
              <li>Institutional Memory</li>
              <li>Meta-Safe Architecture</li>
              <li>Human-in-Loop Enforced</li>
              <li>Priority Support</li>
              <li><strong>Verified waste tracking & reporting</strong></li>
            </ul>

            <a href="#" className="btn-primary w-full">Book Demo</a>

            <div className="mt-6 text-[0.8125rem] text-foreground/50 leading-relaxed">
              <strong>Limited to first 50 customers.</strong> Pricing per ad account. We only win when you save money. Transparent verified savings.
            </div>
          </div>

          <div className="text-center mt-8 text-foreground/60 text-sm">
            <p className="mb-3"><strong>No hidden charges. No limits.</strong></p>
            <p>We'll show 3-10x ROI in 90 days.</p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider">
        <svg className="divider-svg" viewBox="0 0 800 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 10 Q200 0, 400 10 T800 10" stroke="white" strokeWidth="2" fill="none"/>
        </svg>
      </div>

      {/* Social Proof Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">TRUSTED BY</span>
            <h2>What Leaders Say</h2>
          </div>

          <div className="brands-grid">
            <div className="brand-item">BAMBOOSTAN</div>
            <div className="brand-item">DESIFY</div>
            <div className="brand-item">CUMIN CLUB</div>
            <div className="brand-item">KAMAL WATCH</div>
          </div>

          <div className="atlas-card">
            <p className="text-foreground/75 leading-relaxed text-[0.9375rem]">
              "Atlas is the first tool that actually predicted outcomes before we saw them in Ads Manager. It's like having a 24/7 VP of Growth that never quits."
            </p>
            <p className="mt-4 text-[0.8125rem] text-foreground/50">
              — Head of Marketing, Bamboostan
            </p>
          </div>

          <div className="atlas-card">
            <p className="text-foreground/75 leading-relaxed text-[0.9375rem]">
              "We reduced CPA by 43% in 30 days after Atlas flagged early signal decay we would've missed. The predicted vs actual tracking proves it works."
            </p>
            <p className="mt-4 text-[0.8125rem] text-foreground/50">
              — Performance Lead, Desify
            </p>
          </div>

          <div className="atlas-card">
            <p className="text-foreground/75 leading-relaxed text-[0.9375rem]">
              "Our best media buyer left. Atlas didn't. The institutional memory alone is worth 10x the subscription."
            </p>
            <p className="mt-4 text-[0.8125rem] text-foreground/50">
              — Growth Director, Kamal Watch
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider">
        <svg className="divider-svg" viewBox="0 0 800 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 10 Q200 0, 400 10 T800 10" stroke="white" strokeWidth="2" fill="none"/>
        </svg>
      </div>

      {/* FAQ Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">FAQ</span>
            <h2>Frequently Asked Questions</h2>
          </div>

          {faqs.map((faq) => (
            <div key={faq.id} className="faq-item">
              <button
                className="faq-question"
                onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                aria-expanded={openFaq === faq.id}
              >
                <span>{faq.question}</span>
                <ChevronDown className={`w-6 h-6 flex-shrink-0 ml-4 transition-transform duration-300 ${openFaq === faq.id ? "rotate-180" : ""}`} />
              </button>
              <div className={`faq-answer ${openFaq === faq.id ? "active" : ""}`}>
                <div className="faq-answer-content">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider">
        <svg className="divider-svg" viewBox="0 0 800 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 10 Q200 0, 400 10 T800 10" stroke="white" strokeWidth="2" fill="none"/>
        </svg>
      </div>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2 className="mb-4">Ready to Stop Guessing?</h2>
          <p className="text-base text-foreground/65 mb-8 leading-relaxed">
            We'll audit your account live and predict your 90-day impact during the demo.
          </p>
          <a href="#" className="btn-primary w-full max-w-[400px] py-4 text-base">Book Demo + Free Audit</a>
          <p className="mt-8 text-[0.8125rem] text-foreground/50">
            Join 500+ marketers. No credit card required.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-section">
            <h3 className="text-base mb-4">CLAPP ATLAS</h3>
            <p className="text-foreground/50 text-sm leading-relaxed">
              Your 24/7 AI copilot that predicts outcomes and eliminates guesswork. Built for CROs and CMOs who demand certainty.
            </p>
            <p className="text-foreground/50 text-sm mt-4">Built in India, trusted globally</p>
          </div>

          <div className="footer-section">
            <h4 className="text-xs uppercase tracking-wide mb-4 text-foreground/40 font-semibold">Product</h4>
            <ul className="footer-links">
              <li><a href="#how">How It Works</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#">Book Demo</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="text-xs uppercase tracking-wide mb-4 text-foreground/40 font-semibold">Company</h4>
            <ul className="footer-links">
              <li><a href="#">About</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className="pt-8 border-t border-foreground/[0.08] text-center">
            <div className="social-links">
              <a href="https://linkedin.com/company/clapp-atlas" aria-label="Follow us on LinkedIn" target="_blank" rel="noopener noreferrer">
                <Linkedin />
              </a>
              <a href="https://twitter.com/clappatlas" aria-label="Follow us on X (Twitter)" target="_blank" rel="noopener noreferrer">
                <Twitter />
              </a>
              <a href="https://instagram.com/clappatlas" aria-label="Follow us on Instagram" target="_blank" rel="noopener noreferrer">
                <Instagram />
              </a>
            </div>
            <p className="text-foreground/40 text-xs">© 2025 Clapp Atlas. Built for marketers who demand certainty.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
