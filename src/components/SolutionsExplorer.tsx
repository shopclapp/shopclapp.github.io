import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Megaphone,
  Target,
  TrendingUp,
  ShoppingCart,
  Sparkles,
  Repeat,
  Bell,
  Gift,
  Instagram,
  MessageSquare,
  Mail,
  Users
} from 'lucide-react';

type SolutionStage = 'acquisition' | 'conversion' | 'retention';

interface Solution {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge?: string;
}

const solutions: Record<SolutionStage, Solution[]> = {
  acquisition: [
    {
      icon: <Instagram className="w-6 h-6" />,
      title: "Click-to-Message Ads",
      description: "Turn social ads into WhatsApp conversations. Higher engagement, better ROI than landing pages.",
      badge: "Popular"
    },
    {
      icon: <Megaphone className="w-6 h-6" />,
      title: "Social Commerce",
      description: "Sell directly on Instagram & Facebook. Product catalogs sync from Shopify automatically.",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "WhatsApp Campaigns",
      description: "Broadcast to segments with rich templates. 80%+ open rates vs 20% email.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Lead Generation",
      description: "Capture leads through chat forms. AI qualifies and routes automatically.",
    }
  ],
  conversion: [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "AI Product Finder",
      description: "Customers describe what they want. AI recommends perfect products from your catalog.",
      badge: "AI-Powered"
    },
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: "Cart Recovery",
      description: "Automated abandoned cart messages. Recover 30-40% of lost revenue on autopilot.",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Smart Upsells",
      description: "AI suggests complementary products mid-conversation. Increase AOV by 25%+.",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Checkout Assistance",
      description: "Guide customers through checkout in chat. No app downloads, no redirects.",
    }
  ],
  retention: [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Post-Purchase Follow-ups",
      description: "Automated thank you messages, feedback requests, and review prompts.",
      badge: "Automated"
    },
    {
      icon: <Gift className="w-6 h-6" />,
      title: "Loyalty Rewards",
      description: "Points, discounts, VIP tiers—all managed through chat conversations.",
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Back-in-Stock Alerts",
      description: "Notify customers instantly when sold-out items return. Convert waitlists to sales.",
    },
    {
      icon: <Repeat className="w-6 h-6" />,
      title: "Win-back Campaigns",
      description: "Re-engage dormant customers with personalized offers. Bring them back to life.",
    }
  ]
};

const stageInfo = {
  acquisition: {
    title: "Acquisition",
    subtitle: "Turn browsers into conversations",
    description: "Capture attention across WhatsApp, Instagram, and Messenger with AI agents"
  },
  conversion: {
    title: "Conversion",
    subtitle: "Convert conversations into revenue",
    description: "Guide customers from interest to purchase with personalized AI assistance"
  },
  retention: {
    title: "Retention",
    subtitle: "Build lasting customer relationships",
    description: "Turn one-time buyers into loyal customers through automated engagement"
  }
};

const SolutionsExplorer = () => {
  const [activeStage, setActiveStage] = useState<SolutionStage>('conversion');

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary">Solutions</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powered by <span className="gradient-text-hero">AI Agents</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Chat solutions at work along every stage of the customer journey
          </p>
        </div>

        {/* Stage Tabs */}
        <div className="flex flex-col md:flex-row gap-4 mb-12 justify-center">
          {(Object.keys(stageInfo) as SolutionStage[]).map((stage) => (
            <button
              key={stage}
              onClick={() => setActiveStage(stage)}
              className={`
                px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300
                ${activeStage === stage
                  ? 'bg-gradient-primary text-white shadow-glow-blue'
                  : 'bg-white border-2 border-border hover:border-primary text-muted-foreground hover:text-primary'
                }
              `}
            >
              {stageInfo[stage].title}
            </button>
          ))}
        </div>

        {/* Stage Info */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-2">{stageInfo[activeStage].subtitle}</h3>
          <p className="text-lg text-muted-foreground">{stageInfo[activeStage].description}</p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions[activeStage].map((solution, idx) => (
            <div
              key={idx}
              className="glass-card p-6 hover:shadow-glow-blue group cursor-pointer"
            >
              {solution.badge && (
                <Badge className="mb-3 bg-highlight/10 text-highlight border-0">
                  {solution.badge}
                </Badge>
              )}
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {solution.icon}
              </div>
              <h4 className="font-bold text-lg mb-2">{solution.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            All solutions work seamlessly across WhatsApp • Instagram • Messenger • Webchat
          </p>
          <button className="text-primary font-semibold hover:underline inline-flex items-center gap-2 group">
            See all 15+ solutions
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SolutionsExplorer;
