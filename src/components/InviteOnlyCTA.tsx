import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Sparkles, Check, MessageCircle } from 'lucide-react';

export const InviteOnlyCTA: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/YOUR_NUMBER?text=Hi! I want to learn more about Clapp AI', '_blank');
  };

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-100 to-dark animate-gradient-shift bg-[length:200%_200%]"></div>
      <div className="absolute inset-0 bg-gradient-radial from-gradient-purple-start/20 via-transparent to-transparent"></div>

      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-purple-start/20 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-blue/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-4 relative">
        <Card className="max-w-4xl mx-auto p-12 md:p-16 bg-dark-200/80 backdrop-blur-xl border-dark-400 shadow-2xl">
          <div className="text-center space-y-8">
            {/* Badge */}
            <div className="animate-fade-in">
              <Badge className="bg-gradient-purple text-white border-0 px-6 py-2 text-sm font-bold inline-flex items-center gap-2 shadow-glow-md animate-pulse-glow">
                <Sparkles className="h-4 w-4" />
                Invite-Only Access
              </Badge>
            </div>

            {/* Heading */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '100ms' }}>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground leading-tight">
                Ready to Transform Your{' '}
                <span className="bg-gradient-to-r from-gradient-purple-start via-gradient-blue to-gradient-green bg-clip-text text-transparent">
                  Commerce with AI?
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Message us on WhatsApp to see how AI agents can automate your entire commerce operation.
              </p>
            </div>

            {/* WhatsApp CTA */}
            <div className="max-w-xl mx-auto space-y-4 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <Button
                size="lg"
                onClick={handleWhatsAppClick}
                className="h-16 px-12 bg-gradient-purple text-white font-bold hover:shadow-glow-lg transition-all duration-300 hover:-translate-y-1 border-0 text-lg w-full sm:w-auto"
              >
                <MessageCircle className="mr-3 h-6 w-6" />
                Message on WhatsApp
              </Button>
              <p className="text-xs text-muted-foreground">
                Chat with us instantly • Get a personalized demo • See real results
              </p>
            </div>

            {/* Trust Indicators */}
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 mt-12 border-t border-dark-400 animate-fade-in"
              style={{ animationDelay: '300ms' }}
            >
              {[
                { icon: '🔒', text: 'Enterprise-grade security' },
                { icon: '⚡', text: 'Setup in under 1 hour' },
                { icon: '🎯', text: 'Dedicated success manager' },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-center gap-3 text-sm">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-muted-foreground">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Qualification Criteria */}
            <div
              className="mt-12 p-8 bg-dark-300/50 rounded-2xl border border-dark-400 animate-fade-in"
              style={{ animationDelay: '400ms' }}
            >
              <h3 className="text-lg font-black text-foreground mb-6">Qualification Criteria</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                {[
                  '$1M+ annual revenue',
                  'E-commerce or D2C business',
                  'Active customer base',
                  'Ready to scale operations',
                ].map((criteria, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-purple flex items-center justify-center flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm text-muted-foreground">{criteria}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
