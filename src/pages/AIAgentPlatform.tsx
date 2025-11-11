import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { DashboardMockup } from '@/components/DashboardMockup';
import { AgentPillar } from '@/components/AgentPillar';
import { UnifiedIntelligence } from '@/components/UnifiedIntelligence';
import { TestimonialGrid } from '@/components/TestimonialGrid';
import { InviteOnlyCTA } from '@/components/InviteOnlyCTA';
import { MarketingAgentScreenshot } from '@/components/screenshots/MarketingAgentScreenshot';
import { SalesAgentScreenshot } from '@/components/screenshots/SalesAgentScreenshot';
import { SupportAgentScreenshot } from '@/components/screenshots/SupportAgentScreenshot';
import {
  Sparkles,
  MessageCircle,
} from 'lucide-react';

const AIAgentPlatform: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-dark text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-dark/80 border-b border-dark-400">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <span
              className="text-[26px] font-black tracking-tight"
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '-0.02em'
              }}
            >
              Clapp AI
            </span>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#platform"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Platform
            </a>
            <a
              href="#intelligence"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Intelligence
            </a>
            <a
              href="#customers"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Customers
            </a>
            <Button
              className="bg-gradient-purple text-white border-0 hover:shadow-glow-md transition-all"
              onClick={() => window.open('https://wa.me/YOUR_NUMBER', '_blank')}
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Message on WhatsApp
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center py-32 overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-100 to-dark animate-gradient-shift bg-[length:200%_200%]"></div>
        <div className="absolute inset-0 bg-gradient-radial from-gradient-purple-start/10 via-transparent to-transparent"></div>

        {/* Glow Effects */}
        <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-gradient-purple-start/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-blue/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8 animate-fade-in">
              <Badge className="bg-gradient-purple text-white border-0 px-4 py-2 text-sm font-bold inline-flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                Reimagining Commerce with AI Orchestration
              </Badge>

              <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.95] text-foreground">
                Run Your Entire Commerce Business with{' '}
                <span className="bg-gradient-to-r from-gradient-purple-start via-gradient-blue to-gradient-green bg-clip-text text-transparent">
                  AI Agents
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-xl">
                From ad creation to sales conversations to after-sales support — all automated,
                all intelligent, all working together.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 py-8">
                {[
                  { value: '5.8x', label: 'Conversion' },
                  { value: '-73%', label: 'CAC' },
                  { value: '92%', label: 'Automated' },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="scroll-animate opacity-0 translate-y-10 transition-all duration-700"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <p className="text-3xl md:text-4xl font-black tracking-tighter bg-gradient-purple bg-clip-text text-transparent">
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="h-14 px-8 bg-gradient-purple text-white font-bold border-0 hover:shadow-glow-lg transition-all duration-300 hover:-translate-y-1"
                  onClick={() => window.open('https://wa.me/YOUR_NUMBER', '_blank')}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Message on WhatsApp
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 px-8 border-dark-400 text-foreground hover:border-gradient-purple-start hover:bg-dark-200"
                  onClick={() => window.open('https://wa.me/YOUR_NUMBER', '_blank')}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat with Us
                </Button>
              </div>
            </div>

            {/* Right Column - Dashboard Mockup */}
            <div className="animate-fade-in" style={{ animationDelay: '400ms' }}>
              <DashboardMockup />
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section id="platform" className="bg-dark-100">
        <AgentPillar
          number="1"
          title="Marketing Agent"
          description="Autonomous AI that creates, tests, and optimizes your entire marketing funnel across all channels."
          features={[
            { text: 'Automated ad creative generation with brand consistency' },
            { text: 'Multi-channel campaign orchestration (Meta, Google, TikTok)' },
            { text: 'Real-time budget optimization based on performance' },
            { text: 'A/B testing and creative iteration at scale' },
            { text: 'Predictive audience targeting with ML models' },
          ]}
          metrics={[
            { label: 'ROAS Improvement', value: '+312%' },
            { label: 'Time Saved', value: '40hrs/wk' },
          ]}
          imagePosition="right"
          gradientColor="purple"
          screenshotComponent={<MarketingAgentScreenshot />}
        />

        <AgentPillar
          number="2"
          title="Sales Agent"
          description="Intelligent conversation AI that handles the entire sales process from first contact to conversion on WhatsApp."
          features={[
            { text: 'Natural language conversations on WhatsApp' },
            { text: 'Product recommendations based on customer intent' },
            { text: 'Automated objection handling and upselling' },
            { text: 'Seamless handoff to humans when needed' },
            { text: 'Complete order management and payment processing' },
          ]}
          metrics={[
            { label: 'Conversion Rate', value: '5.8x' },
            { label: 'Response Time', value: '<30s' },
          ]}
          imagePosition="left"
          gradientColor="blue"
          screenshotComponent={<SalesAgentScreenshot />}
        />

        <AgentPillar
          number="3"
          title="Support Agent"
          description="24/7 AI support on WhatsApp that resolves customer issues faster while reducing operational costs."
          features={[
            { text: 'Instant resolution for 85% of common issues' },
            { text: 'Multi-language support across 100+ languages' },
            { text: 'Order tracking, returns, and refund automation' },
            { text: 'Proactive issue detection and resolution' },
            { text: 'Integration with help desk and CRM systems' },
          ]}
          metrics={[
            { label: 'Resolution Rate', value: '92%' },
            { label: 'CSAT Score', value: '4.8/5' },
          ]}
          imagePosition="right"
          gradientColor="green"
          screenshotComponent={<SupportAgentScreenshot />}
        />
      </section>

      {/* Unified Intelligence */}
      <div id="intelligence">
        <UnifiedIntelligence />
      </div>

      {/* Testimonials */}
      <div id="customers">
        <TestimonialGrid />
      </div>

      {/* CTA Section */}
      <InviteOnlyCTA />

      {/* Footer */}
      <footer className="bg-dark-100 border-t border-dark-400 py-16">
        <div className="container mx-auto px-4">
          {/* Trusted By Line */}
          <div className="text-center mb-12 pb-8 border-b border-dark-400">
            <p className="text-sm text-muted-foreground">
              Trusted by leading platforms including Meta, Google, Shopify, Amazon, Walmart, and more
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="space-y-4">
              <span
                className="text-[26px] font-black tracking-tight inline-block"
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  letterSpacing: '-0.02em'
                }}
              >
                Clapp AI
              </span>
              <p className="text-sm text-muted-foreground">
                The AI-powered commerce platform for modern brands.
              </p>
            </div>

            {/* Platform */}
            <div>
              <h4 className="font-bold text-foreground mb-4">Platform</h4>
              <ul className="space-y-3">
                {['Marketing Agent', 'Sales Agent', 'Support Agent', 'Unified Intelligence'].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-bold text-foreground mb-4">Company</h4>
              <ul className="space-y-3">
                {['About', 'Customers', 'Careers', 'Blog'].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-bold text-foreground mb-4">Legal</h4>
              <ul className="space-y-3">
                {['Privacy Policy', 'Terms of Service', 'Security', 'Compliance'].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-dark-400 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Clapp.ai. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Twitter
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AIAgentPlatform;
