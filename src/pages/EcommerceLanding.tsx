import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  ShoppingCart,
  Instagram,
  Facebook,
  Globe,
  Check,
  ChevronRight,
  BarChart3,
  Users,
  Bot,
  ShoppingBag,
  CreditCard,
  Store,
  Link2,
  Repeat,
  Clock,
  Shield,
  Headphones
} from 'lucide-react';

const EcommerceLanding = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const testimonials = [
    {
      brand: "Bamboostan",
      logo: "🌿",
      stat: "₹784K monthly opportunity",
      growth: "+52.5% customer growth",
      quote: "From 139 conversations to massive revenue. We finally have a way to engage customers after the sale. Repeat orders shot up.",
      metrics: [
        { label: "Repeat Purchase", value: "+60%" },
        { label: "Avg Order Value", value: "+₹850" },
        { label: "CAC Reduction", value: "-40%" }
      ]
    },
    {
      brand: "Desify",
      logo: "🍽️",
      stat: "70% repeat customer rate",
      growth: "₹25K+ customer LTV",
      quote: "Our community expects personal curation. Chat lets us deliver that at scale with AI assistance.",
      metrics: [
        { label: "Customer LTV", value: "₹25K+" },
        { label: "Support Time", value: "-65%" },
        { label: "NPS Score", value: "+42 pts" }
      ]
    },
    {
      brand: "D2C Brand",
      logo: "🛍️",
      stat: "₹50K additional revenue/month",
      growth: "10% operational savings",
      quote: "Setup took 2 hours. Revenue impact was visible in week 1. Email to chat was the best decision we made.",
      metrics: [
        { label: "Open Rate", value: "20% → 80%" },
        { label: "Response Time", value: "24h → 5min" },
        { label: "Conversion", value: "+180%" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Navigation */}
      <nav className="bg-card/80 backdrop-blur-lg border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow-blue">
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
              <a href="#features" className="text-muted-foreground hover:text-primary transition-colors font-medium">Features</a>
              <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors font-medium">How It Works</a>
              <a href="#results" className="text-muted-foreground hover:text-primary transition-colors font-medium">Results</a>
              <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors font-medium">Pricing</a>
              <Button className="btn-primary-glow">
                Start Free Trial
              </Button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden border-t border-border py-4">
              <div className="flex flex-col space-y-4">
                <a href="#features" className="text-muted-foreground hover:text-primary transition-colors px-4 py-2" onClick={() => setMobileMenuOpen(false)}>Features</a>
                <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors px-4 py-2" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
                <a href="#results" className="text-muted-foreground hover:text-primary transition-colors px-4 py-2" onClick={() => setMobileMenuOpen(false)}>Results</a>
                <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors px-4 py-2" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
                <Button className="btn-primary-glow mx-4" onClick={() => setMobileMenuOpen(false)}>
                  Start Free Trial
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">500M+ WhatsApp users in India • 80%+ open rates</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Sell Where Your{" "}
                <span className="gradient-text-hero">Customers Are</span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed">
                One platform. Every chat channel. Shopify synced. Revenue multiplied.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="btn-primary-glow text-lg px-8 py-6">
                  Start Selling on Chat
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2">
                  Book a Demo
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <div className="text-sm text-muted-foreground">
                  Trusted by 100+ Indian brands including Bamboostan, Desify
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="relative bg-gradient-hero rounded-2xl p-8 shadow-xl">
                <div className="space-y-4">
                  {/* Multi-channel preview */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                        <MessageCircle className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-white font-semibold">Multi-Channel Commerce</div>
                        <div className="text-white/80 text-sm">WhatsApp • Instagram • Messenger • Webchat</div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="glass-dark rounded-lg p-4">
                      <MessageCircle className="w-8 h-8 text-white mb-2" />
                      <div className="text-sm text-white font-medium">WhatsApp</div>
                      <div className="text-xs text-white/60">Live conversations</div>
                    </div>
                    <div className="glass-dark rounded-lg p-4">
                      <Instagram className="w-8 h-8 text-white mb-2" />
                      <div className="text-sm text-white font-medium">Instagram DM</div>
                      <div className="text-xs text-white/60">Direct selling</div>
                    </div>
                    <div className="glass-dark rounded-lg p-4">
                      <Facebook className="w-8 h-8 text-white mb-2" />
                      <div className="text-sm text-white font-medium">Messenger</div>
                      <div className="text-xs text-white/60">Automated chats</div>
                    </div>
                    <div className="glass-dark rounded-lg p-4">
                      <Globe className="w-8 h-8 text-white mb-2" />
                      <div className="text-sm text-white font-medium">Webchat</div>
                      <div className="text-xs text-white/60">On-site support</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating stats */}
              <div className="absolute -right-4 -bottom-4 glass rounded-lg p-4 shadow-glow-blue">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-8 h-8 text-primary" />
                  <div>
                    <div className="text-2xl font-bold text-foreground">80%</div>
                    <div className="text-sm text-muted-foreground">Open Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-hero opacity-5 blur-3xl -z-10"></div>
      </section>

      {/* The Shift Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary">The Opportunity</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why <span className="gradient-text-primary">Conversational Commerce</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your customers have moved to chat. Your business should too.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: The Problem */}
            <Card className="p-8 hover:shadow-glow-blue transition-all duration-300 border-2">
              <div className="w-16 h-16 bg-destructive/10 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-destructive rotate-180" />
              </div>
              <h3 className="text-2xl font-bold mb-4">The Problem</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2"></div>
                  <p className="text-muted-foreground">20% email open rate</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2"></div>
                  <p className="text-muted-foreground">Shopify alone isn't enough</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2"></div>
                  <p className="text-muted-foreground">Customers expect real-time service</p>
                </div>
              </div>
              <p className="mt-6 text-foreground font-medium">
                Your store brings traffic. Email brings silence. Chat is where customers live—but you're not there.
              </p>
            </Card>

            {/* Card 2: The Opportunity */}
            <Card className="p-8 hover:shadow-glow-purple transition-all duration-300 border-2 border-primary/20">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">The Opportunity</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5" />
                  <p className="text-muted-foreground">500M+ WhatsApp users in India</p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5" />
                  <p className="text-muted-foreground">80%+ message open rates</p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5" />
                  <p className="text-muted-foreground">Instagram, Messenger, Webchat ready</p>
                </div>
              </div>
              <p className="mt-6 text-foreground font-medium">
                Every chat platform is becoming a commerce channel. Customers expect real-time, personal service. Scale that with AI.
              </p>
            </Card>

            {/* Card 3: The Outcome */}
            <Card className="p-8 hover:shadow-glow-violet transition-all duration-300 border-2">
              <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">The Outcome</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent mt-0.5" />
                  <p className="text-muted-foreground">3x repeat purchase rate</p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent mt-0.5" />
                  <p className="text-muted-foreground">5x customer lifetime value</p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent mt-0.5" />
                  <p className="text-muted-foreground">Revenue scales with channels</p>
                </div>
              </div>
              <p className="mt-6 text-foreground font-medium">
                One-time buyers become loyal customers through conversation. Multiply that impact across channels as you grow.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary/10 text-secondary">Simple Process</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How <span className="gradient-text-accent">It Works</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From setup to scaling in 5 simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {/* Step 1 */}
            <Card className="p-6 hover:shadow-glow-blue transition-all duration-300 relative">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mb-4 text-white font-bold text-lg">
                1
              </div>
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Link2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Connect</h3>
              <p className="text-sm text-muted-foreground">
                Sync Shopify and connect your chat channels. WhatsApp, Instagram, Messenger, Webchat—all in one place.
              </p>
            </Card>

            {/* Step 2 */}
            <Card className="p-6 hover:shadow-glow-purple transition-all duration-300 relative">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mb-4 text-white font-bold text-lg">
                2
              </div>
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Unify</h3>
              <p className="text-sm text-muted-foreground">
                One dashboard for all conversations. See every customer message from every channel in a single view.
              </p>
            </Card>

            {/* Step 3 */}
            <Card className="p-6 hover:shadow-glow-violet transition-all duration-300 relative">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mb-4 text-white font-bold text-lg">
                3
              </div>
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <Bot className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-bold text-lg mb-2">Automate</h3>
              <p className="text-sm text-muted-foreground">
                AI learns your customers across all channels. Same intelligence, every conversation, everywhere.
              </p>
            </Card>

            {/* Step 4 */}
            <Card className="p-6 hover:shadow-glow-cyan transition-all duration-300 relative">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mb-4 text-white font-bold text-lg">
                4
              </div>
              <div className="w-12 h-12 bg-highlight/10 rounded-xl flex items-center justify-center mb-4">
                <ShoppingCart className="w-6 h-6 text-highlight" />
              </div>
              <h3 className="font-bold text-lg mb-2">Sell</h3>
              <p className="text-sm text-muted-foreground">
                Customers browse, buy, and checkout—all within the chat. No app downloads, no redirects.
              </p>
            </Card>

            {/* Step 5 */}
            <Card className="p-6 hover:shadow-glow-blue transition-all duration-300 relative">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mb-4 text-white font-bold text-lg">
                5
              </div>
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Repeat className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Retain & Grow</h3>
              <p className="text-sm text-muted-foreground">
                Follow-ups, loyalty rewards, community building—across all channels. One-time buyers become repeat customers.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500M+</div>
              <div className="text-white/80">WhatsApp Users in India</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">80%</div>
              <div className="text-white/80">Message Open Rate</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">3x</div>
              <div className="text-white/80">Repeat Purchase Rate</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">5-8x</div>
              <div className="text-white/80">ROI on Investment</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview - Tabbed */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent">Platform Features</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Everything You Need to <span className="gradient-text-hero">Sell on Chat</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Messaging */}
            <Card className="p-8 hover:shadow-glow-blue transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Unified Messaging</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Single inbox for all channels</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Smart routing & prioritization</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Rich media templates</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Human handoff from AI</span>
                </li>
              </ul>
            </Card>

            {/* Campaigns */}
            <Card className="p-8 hover:shadow-glow-purple transition-all duration-300">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Campaigns & Journeys</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Bulk messaging with templates</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Behavioral segmentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Automated journey builder</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>A/B testing built-in</span>
                </li>
              </ul>
            </Card>

            {/* Commerce */}
            <Card className="p-8 hover:shadow-glow-violet transition-all duration-300">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                <ShoppingBag className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Commerce & Sales</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>AI product recommendations</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Cart recovery automation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Upsell/cross-sell flows</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Inventory sync with Shopify</span>
                </li>
              </ul>
            </Card>

            {/* Analytics */}
            <Card className="p-8 hover:shadow-glow-cyan transition-all duration-300">
              <div className="w-16 h-16 bg-highlight/10 rounded-2xl flex items-center justify-center mb-6">
                <BarChart3 className="w-8 h-8 text-highlight" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Analytics & Insights</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-highlight mt-0.5 flex-shrink-0" />
                  <span>Channel-by-channel ROI</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-highlight mt-0.5 flex-shrink-0" />
                  <span>Revenue tracking per conversation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-highlight mt-0.5 flex-shrink-0" />
                  <span>Funnel visualization</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-highlight mt-0.5 flex-shrink-0" />
                  <span>Customer lifetime value tracking</span>
                </li>
              </ul>
            </Card>

            {/* Integrations */}
            <Card className="p-8 hover:shadow-glow-blue transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Link2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Integrations</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Shopify one-click sync</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Payment gateways (Razorpay, Stripe)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>CRM & email platforms</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Custom API access</span>
                </li>
              </ul>
            </Card>

            {/* Security */}
            <Card className="p-8 hover:shadow-glow-purple transition-all duration-300">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Security & Compliance</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>GDPR compliant</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Two-factor opt-in</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Data ownership & privacy</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>SOC 2 compliance ready</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Real Results / Case Studies */}
      <section id="results" className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary">Real Results</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Brands Growing with <span className="gradient-text-primary">Conversational Commerce</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how Indian D2C brands are multiplying revenue through chat
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="p-8 hover:shadow-glow-blue transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-4xl">{testimonial.logo}</div>
                  <div>
                    <h3 className="font-bold text-xl">{testimonial.brand}</h3>
                    <div className="text-sm text-primary font-semibold">{testimonial.stat}</div>
                  </div>
                </div>

                <div className="bg-highlight/10 rounded-lg px-4 py-2 mb-6 inline-block">
                  <span className="text-highlight font-bold">{testimonial.growth}</span>
                </div>

                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.quote}"
                </p>

                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                  {testimonial.metrics.map((metric, mIdx) => (
                    <div key={mIdx} className="text-center">
                      <div className="text-lg font-bold text-primary">{metric.value}</div>
                      <div className="text-xs text-muted-foreground">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Audience-Specific CTAs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Built for <span className="gradient-text-accent">Your Business</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* E-commerce Owners */}
            <Card className="p-8 hover:shadow-glow-blue transition-all duration-300 border-2">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Store className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">E-Commerce Owners</h3>
              <p className="text-muted-foreground mb-6">
                Scale your Shopify store with conversational channels. Build relationships, not just transactions.
              </p>
              <Button className="btn-primary-glow w-full">
                Explore for E-Commerce
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Card>

            {/* Agencies */}
            <Card className="p-8 hover:shadow-glow-purple transition-all duration-300 border-2 border-secondary/20">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Agencies / Resellers</h3>
              <p className="text-muted-foreground mb-6">
                White-label platform for your clients. Deploy to 10 clients in 1 week. Own ₹10K+ MRR per client.
              </p>
              <Button variant="outline" className="w-full border-2 border-secondary text-secondary hover:bg-secondary/10">
                Learn About Reseller Program
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Card>

            {/* Enterprises */}
            <Card className="p-8 hover:shadow-glow-violet transition-all duration-300 border-2">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                <Headphones className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Enterprises</h3>
              <p className="text-muted-foreground mb-6">
                Multi-team workflows, custom integrations, dedicated support. Built for scale.
              </p>
              <Button variant="outline" className="w-full border-2 border-accent text-accent hover:bg-accent/10">
                Request Enterprise Demo
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary">Simple Pricing</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Choose Your <span className="gradient-text-hero">Growth Plan</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Start free. Scale as you grow. No hidden fees.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter */}
            <Card className="p-8 hover:shadow-glow-blue transition-all duration-300">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Starter</h3>
                <p className="text-muted-foreground">Perfect for small businesses</p>
              </div>
              <div className="mb-6">
                <div className="text-4xl font-bold">₹2,999</div>
                <div className="text-muted-foreground">/month</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5" />
                  <span className="text-sm">1,000 conversations/month</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5" />
                  <span className="text-sm">WhatsApp + 1 channel</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5" />
                  <span className="text-sm">Basic AI automation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5" />
                  <span className="text-sm">Shopify integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5" />
                  <span className="text-sm">Email support</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">
                Start Free Trial
              </Button>
            </Card>

            {/* Growth - Highlighted */}
            <Card className="p-8 border-2 border-primary shadow-glow-purple relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gradient-primary text-white px-4 py-1">Most Popular</Badge>
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Growth</h3>
                <p className="text-muted-foreground">For scaling D2C brands</p>
              </div>
              <div className="mb-6">
                <div className="text-4xl font-bold">₹9,999</div>
                <div className="text-muted-foreground">/month</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5" />
                  <span className="text-sm">10,000 conversations/month</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5" />
                  <span className="text-sm">All channels included</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5" />
                  <span className="text-sm">Advanced AI + journey builder</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5" />
                  <span className="text-sm">All integrations</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5" />
                  <span className="text-sm">Priority support</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5" />
                  <span className="text-sm">Advanced analytics</span>
                </li>
              </ul>
              <Button className="btn-primary-glow w-full">
                Start Free Trial
              </Button>
            </Card>

            {/* Enterprise */}
            <Card className="p-8 hover:shadow-glow-violet transition-all duration-300">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                <p className="text-muted-foreground">Custom solutions</p>
              </div>
              <div className="mb-6">
                <div className="text-4xl font-bold">Custom</div>
                <div className="text-muted-foreground">Contact us</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent mt-0.5" />
                  <span className="text-sm">Unlimited conversations</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent mt-0.5" />
                  <span className="text-sm">All channels + custom channels</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent mt-0.5" />
                  <span className="text-sm">Custom AI training</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent mt-0.5" />
                  <span className="text-sm">Custom integrations</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent mt-0.5" />
                  <span className="text-sm">Dedicated account manager</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent mt-0.5" />
                  <span className="text-sm">SLA guarantee</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">
                Contact Sales
              </Button>
            </Card>
          </div>

          <p className="text-center text-muted-foreground mt-8">
            All plans include: Shopify integration • AI support • GDPR compliance • 14-day free trial • No credit card required
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary/10 text-secondary">FAQ</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked <span className="gradient-text-accent">Questions</span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                Why start with WhatsApp if it's a multi-channel platform?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                WhatsApp has 500M+ users in India with 80%+ open rates. It's the proven foundation. Our architecture is channel-agnostic—all features work across Instagram, Messenger, Webchat seamlessly.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                Do I need to reconfigure for each channel?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                No. Set up once, expand to new channels with zero reconfiguration. Your AI learns from all conversations across all channels.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                Is this GDPR/privacy compliant?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes. We use two-factor opt-in, comply with GDPR, and you own your data. All channels are fully compliant with privacy regulations.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                How long does setup take?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                30 minutes. Connect Shopify, set up your first channel (WhatsApp), and you're live. No coding required.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                What's your ROI?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Most brands see 3-5x ROI in 90 days. See our case studies from Bamboostan, Desify, and other Indian D2C brands.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                Do you integrate with my existing tools?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes. Shopify one-click sync, payment gateways (Razorpay, Stripe), CRM platforms, and custom integrations via API.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                Can I use custom integrations?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Absolutely. Full API access available. We also support n8n workflows for complex automation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                What if I'm not tech-savvy?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                No code required. Templates included. Our support team helps you set up and scale.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-hero text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Conversational Commerce Is Here.<br />Your Channels Are Next.
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Start on WhatsApp today. Add Instagram, Messenger, Webchat as you grow. Join 100+ Indian brands building repeat revenue through conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
              Start Your Free Trial Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6">
              Book a Demo
            </Button>
          </div>
          <p className="text-white/80 text-sm">
            No credit card required • See results in 48 hours • Cancel anytime
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center">
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <MessageCircle className="w-5 h-5" />
                <span className="font-semibold">WhatsApp</span>
              </div>
              <div className="text-sm text-white/70">Live & scaling</div>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Instagram className="w-5 h-5" />
                <span className="font-semibold">Instagram</span>
              </div>
              <div className="text-sm text-white/70">Ready to launch</div>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Facebook className="w-5 h-5" />
                <span className="font-semibold">Messenger</span>
              </div>
              <div className="text-sm text-white/70">Ready to launch</div>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Globe className="w-5 h-5" />
                <span className="font-semibold">Webchat</span>
              </div>
              <div className="text-sm text-white/70">Coming soon</div>
            </div>
          </div>
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
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow-blue">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <span className="ml-2 text-xl font-bold gradient-text-primary">Clapp</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Conversational commerce platform for the future of retail.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-primary transition-colors">How It Works</a></li>
                <li><a href="#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#results" className="hover:text-primary transition-colors">Case Studies</a></li>
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
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Clapp. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EcommerceLanding;
