import React from 'react';

interface PartnerLogo {
  name: string;
  icon: string; // Using emoji for simplicity, can be replaced with actual logos
}

const partners: PartnerLogo[] = [
  { name: 'Meta', icon: '🟦' },
  { name: 'Google', icon: '🔵' },
  { name: 'Shopify', icon: '🛍️' },
  { name: 'Amazon', icon: '📦' },
  { name: 'Walmart', icon: '🌟' },
  { name: 'Stripe', icon: '💳' },
];

export const PartnerLogoBar: React.FC = () => {
  return (
    <div className="border-b border-border/50 bg-dark-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent"></div>
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            Trusted by Leading Platforms
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent"></div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="flex items-center gap-2 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="text-2xl">{partner.icon}</span>
              <span className="text-sm font-semibold text-foreground">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
