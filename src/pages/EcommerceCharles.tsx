import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SolutionsExplorer from "@/components/SolutionsExplorer";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  MessageCircle,
  Menu,
  X,
  ArrowRight,
  Sparkles,
  Zap,
  TrendingUp,
  Instagram,
  Facebook,
  Globe,
  Check,
  Store,
  Users,
  Headphones,
  Shield,
  Bot,
  BarChart3,
  Link2,
  MessageSquare,
  ShoppingBag
} from 'lucide-react';

const EcommerceCharles = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const customerLogos = [
    { name: "Bamboostan", emoji: "🌿" },
    { name: "Desify", emoji: "🍽️" },
    { name: "Fashion Brand", emoji: "👗" },
    { name: "Food & Bev", emoji: "🍷" },
    { name: "Beauty", emoji: "💄" },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Navigation - Glass Effect */}
      <nav className="glass-nav sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow-blue">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <span className="ml-3 text-2xl font-bold gradient-text-primary">Clapp</span>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-muted-foreground hover:text-foreground p-2"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#solutions" className="text-muted-foreground hover:text-primary transition-colors font-medium">Solutions</a>
              <a href="#customers" className="text-muted-foreground hover:text-primary transition-colors font-medium">Customers</a>
              <Button className="btn-primary-glow rounded-2xl" asChild>
                <a href="https://wa.me/14707342241?text=Hi%2C%20I%20want%20to%20discuss%20Conversational%20AI%20%26%20CRM%20for%20my%20D2C%20brand" target="_blank" rel="noopener noreferrer">
                  Talk to us
                </a>
              </Button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden border-t border-border py-4">
              <div className="flex flex-col space-y-4">
                <a href="#solutions" className="text-muted-foreground hover:text-primary transition-colors px-4 py-2" onClick={() => setMobileMenuOpen(false)}>Solutions</a>
                <a href="#customers" className="text-muted-foreground hover:text-primary transition-colors px-4 py-2" onClick={() => setMobileMenuOpen(false)}>Customers</a>
                <Button className="btn-primary-glow mx-4 rounded-2xl" asChild onClick={() => setMobileMenuOpen(false)}>
                  <a href="https://wa.me/14707342241?text=Hi%2C%20I%20want%20to%20discuss%20Conversational%20AI%20%26%20CRM%20for%20my%20D2C%20brand" target="_blank" rel="noopener noreferrer">
                    Talk to us
                  </a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Engage and convert via{" "}
                <span className="gradient-text-hero">Conversational AI agents and CRM</span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed">
                Transform every customer moment with AI-powered conversations across WhatsApp, Instagram, Messenger, and Webchat. Powered by AI agents that work 24/7.
              </p>

              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span>500M+ WhatsApp users • 80%+ open rates • Multi-channel ready</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="btn-primary-glow text-lg px-8 py-6 rounded-2xl" asChild>
                  <a href="https://wa.me/14707342241?text=Hi%2C%20I%20want%20to%20discuss%20Conversational%20AI%20%26%20CRM%20for%20my%20D2C%20brand" target="_blank" rel="noopener noreferrer">
                    Talk to us
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Right Visual - Glass Card */}
            <div className="relative">
              <div className="glass-card p-8 shadow-xl">
                <div className="space-y-4">
                  {/* Multi-channel preview */}
                  <div className="bg-gradient-hero rounded-2xl p-6 text-white">
                    <div className="flex items-center gap-3 mb-4">
                      <Bot className="w-10 h-10" />
                      <div>
                        <div className="font-bold text-lg">AI Agents at Work</div>
                        <div className="text-sm text-white/80">Personalized at scale</div>
                      </div>
                    </div>
                    <div className="text-sm text-white/90">
                      "Your AI learns from every conversation across all channels. Same intelligence, everywhere."
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white rounded-2xl p-4 border-2 border-border">
                      <MessageCircle className="w-8 h-8 text-primary mb-2" />
                      <div className="text-sm font-medium">WhatsApp</div>
                      <div className="text-xs text-muted-foreground">500M+ users</div>
                    </div>
                    <div className="bg-white rounded-2xl p-4 border-2 border-border">
                      <Instagram className="w-8 h-8 text-primary mb-2" />
                      <div className="text-sm font-medium">Instagram</div>
                      <div className="text-xs text-muted-foreground">DM commerce</div>
                    </div>
                    <div className="bg-white rounded-2xl p-4 border-2 border-border">
                      <Facebook className="w-8 h-8 text-primary mb-2" />
                      <div className="text-sm font-medium">Messenger</div>
                      <div className="text-xs text-muted-foreground">Automated</div>
                    </div>
                    <div className="bg-white rounded-2xl p-4 border-2 border-border">
                      <Globe className="w-8 h-8 text-primary mb-2" />
                      <div className="text-sm font-medium">Webchat</div>
                      <div className="text-xs text-muted-foreground">On-site</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-2 shadow-lg">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-xs font-semibold text-muted-foreground">Powered by</div>
                    <div className="text-sm font-bold">AI Agents</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Logos Trust Bar */}
      <section className="py-12 border-y border-border bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-muted-foreground mb-6">
            Scaling D2C brand from 10 to 100X | Invite Only
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {customerLogos.map((logo, idx) => (
              <div key={idx} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <span className="text-3xl">{logo.emoji}</span>
                <span className="font-medium">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Explorer - Journey-based */}
      <div id="solutions">
        <SolutionsExplorer />
      </div>

      {/* Stats Banner - Charles Style */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-2">
              Unmatched efficiency
            </h3>
            <p className="text-white/80 text-lg">
              See the impact of AI-powered conversational commerce
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">249%</div>
              <div className="text-white/80">ROI (Forrester Study)</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">85%</div>
              <div className="text-white/80">Automation Rate</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-white/80">AI Availability</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10 days</div>
              <div className="text-white/80">Setup Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Voice of Customers */}
      <div id="customers">
        <TestimonialCarousel />
      </div>

      {/* Why Now, Why Us - 8 Differentiators */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why <span className="gradient-text-primary">Clapp</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built for D2C brands who want to scale conversations and revenue
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Differentiator 1 */}
            <div className="glass-card p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Personalized at scale</h3>
              <p className="text-sm text-muted-foreground">
                AI agents deliver 1-on-1 experiences to thousands simultaneously
              </p>
            </div>

            {/* Differentiator 2 */}
            <div className="glass-card p-6">
              <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Customer-first approach</h3>
              <p className="text-sm text-muted-foreground">
                Meet customers where they are: WhatsApp, Instagram, Messenger
              </p>
            </div>

            {/* Differentiator 3 */}
            <div className="glass-card p-6">
              <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center mb-4">
                <Bot className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-bold text-lg mb-2">24/7 availability</h3>
              <p className="text-sm text-muted-foreground">
                AI agents never sleep. Serve customers across timezones, always
              </p>
            </div>

            {/* Differentiator 4 */}
            <div className="glass-card p-6">
              <div className="w-12 h-12 bg-highlight/10 rounded-2xl flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-highlight" />
              </div>
              <h3 className="font-bold text-lg mb-2">No coding needed</h3>
              <p className="text-sm text-muted-foreground">
                Templates, flows, and AI training—all through simple interface
              </p>
            </div>

            {/* Differentiator 5 */}
            <div className="glass-card p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Unmatched efficiency</h3>
              <p className="text-sm text-muted-foreground">
                249% ROI, 85% automation—proven results from day one
              </p>
            </div>

            {/* Differentiator 6 */}
            <div className="glass-card p-6">
              <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center mb-4">
                <Headphones className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Expert support</h3>
              <p className="text-sm text-muted-foreground">
                Dedicated team helps you setup, optimize, and scale
              </p>
            </div>

            {/* Differentiator 7 */}
            <div className="glass-card p-6">
              <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-bold text-lg mb-2">Privacy & trust</h3>
              <p className="text-sm text-muted-foreground">
                GDPR-compliant, two-factor opt-in, your data stays yours
              </p>
            </div>

            {/* Differentiator 8 */}
            <div className="glass-card p-6">
              <div className="w-12 h-12 bg-highlight/10 rounded-2xl flex items-center justify-center mb-4">
                <ShoppingBag className="w-6 h-6 text-highlight" />
              </div>
              <h3 className="font-bold text-lg mb-2">Your voice, your way</h3>
              <p className="text-sm text-muted-foreground">
                Customize AI personality to match your brand perfectly
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Talk to Us CTA Section */}
      <section id="pricing" className="py-20 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-primary/10 text-primary">Get Started</Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to transform your <span className="gradient-text-hero">customer conversations</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
            Let's discuss how AI-powered conversational commerce can multiply your revenue. Our team will create a custom plan tailored to your business needs.
          </p>

          <div className="glass-card p-12 mb-8">
            <div className="grid md:grid-cols-3 gap-8 mb-10">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Personalized Demo</h3>
                <p className="text-sm text-muted-foreground">See exactly how Clapp works for your business</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-bold text-lg mb-2">ROI Analysis</h3>
                <p className="text-sm text-muted-foreground">We'll calculate your potential returns</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Headphones className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-bold text-lg mb-2">Implementation Plan</h3>
                <p className="text-sm text-muted-foreground">Custom setup roadmap for your team</p>
              </div>
            </div>

            <Button size="lg" className="btn-primary-glow text-xl px-12 py-8 rounded-2xl" asChild>
              <a href="https://wa.me/14707342241?text=Hi%2C%20I%20want%20to%20discuss%20Conversational%20AI%20%26%20CRM%20for%20my%20D2C%20brand" target="_blank" rel="noopener noreferrer">
                Talk to us
                <ArrowRight className="ml-3 w-6 h-6" />
              </a>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            Join 100+ D2C brands using AI agents • Setup in 10 days • No long-term contracts
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked <span className="gradient-text-accent">Questions</span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="glass-card px-6">
              <AccordionTrigger className="text-left font-semibold">
                What makes your AI agents different from chatbots?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Our AI agents learn from every conversation across all channels, understand context, and deliver personalized experiences at scale. Unlike simple chatbots with rigid scripts, they adapt to each customer's journey.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="glass-card px-6">
              <AccordionTrigger className="text-left font-semibold">
                How long does setup take?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Typically 10 days. We help you connect Shopify, setup your channels (WhatsApp, Instagram, Messenger), train your AI agents, and ensure everything is optimized for your business. No coding required.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="glass-card px-6">
              <AccordionTrigger className="text-left font-semibold">
                Do I need to reconfigure for each channel?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                No. Set up once, expand to new channels with zero reconfiguration. Your AI learns from all conversations across all channels.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="glass-card px-6">
              <AccordionTrigger className="text-left font-semibold">
                Is this GDPR/privacy compliant?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes. We use two-factor opt-in, comply with GDPR, and you own your data. All channels are fully compliant with privacy regulations.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="glass-card px-6">
              <AccordionTrigger className="text-left font-semibold">
                What's the typical ROI?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Our customers see 249% ROI on average (Forrester study), with most brands achieving 3-5x returns in 90 days. Contact us to see case studies and calculate your potential returns.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="glass-card px-6">
              <AccordionTrigger className="text-left font-semibold">
                Do you integrate with my existing tools?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes. Shopify one-click sync, payment gateways (Razorpay, Stripe), CRM platforms, and custom integrations via API.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-hero text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to transform customer conversations?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join 100+ D2C brands using AI agents to multiply revenue. Start with WhatsApp, scale across all channels.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 rounded-2xl" asChild>
              <a href="https://wa.me/14707342241?text=Hi%2C%20I%20want%20to%20discuss%20Conversational%20AI%20%26%20CRM%20for%20my%20D2C%20brand" target="_blank" rel="noopener noreferrer">
                Talk to us
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>
          <p className="mt-6 text-white/80 text-sm">
            No commitment required • Setup in 10 days • Expert support included
          </p>
        </div>

        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow-blue">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <span className="ml-2 text-xl font-bold gradient-text-primary">Clapp</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Conversational AI platform for D2C brands.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#solutions" className="hover:text-primary transition-colors">Solutions</a></li>
                <li><a href="#customers" className="hover:text-primary transition-colors">Customers</a></li>
                <li><a href="#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Channels</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>WhatsApp</li>
                <li>Instagram DM</li>
                <li>Facebook Messenger</li>
                <li>Webchat</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground">&copy; 2025 Clapp. Conversational AI & CRM for commerce.</p>
              <div className="flex items-center gap-6">
                <Badge variant="outline" className="text-xs py-1">
                  Meta Business Partner
                </Badge>
                <Badge variant="outline" className="text-xs py-1">
                  WhatsApp Business API Provider
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EcommerceCharles;
