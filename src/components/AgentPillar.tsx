import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';

interface Feature {
  text: string;
  icon?: React.ReactNode;
}

interface AgentPillarProps {
  number: string;
  title: string;
  description: string;
  features: Feature[];
  metrics: { label: string; value: string }[];
  imagePosition: 'left' | 'right';
  gradientColor: 'purple' | 'blue' | 'green';
  screenshotComponent?: React.ReactNode;
}

const gradientStyles = {
  purple: 'from-gradient-purple-start to-gradient-purple-end',
  blue: 'from-gradient-blue to-gradient-purple-start',
  green: 'from-gradient-green to-gradient-blue',
};

const glowStyles = {
  purple: 'shadow-glow-md',
  blue: 'shadow-[0_0_20px_rgba(0,153,255,0.4)]',
  green: 'shadow-glow-green',
};

export const AgentPillar: React.FC<AgentPillarProps> = ({
  number,
  title,
  description,
  features,
  metrics,
  imagePosition,
  gradientColor,
  screenshotComponent,
}) => {
  const contentSection = (
    <div className="space-y-6">
      {/* Number Badge */}
      <div className="flex items-center gap-4">
        <div
          className={`w-12 h-12 rounded-full bg-gradient-to-br ${gradientStyles[gradientColor]} flex items-center justify-center ${glowStyles[gradientColor]} animate-pulse-glow`}
        >
          <span className="text-2xl font-black text-white">{number}</span>
        </div>
        <div className="flex-1">
          <h3 className="text-3xl md:text-4xl font-black tracking-tighter text-foreground">
            {title}
          </h3>
        </div>
      </div>

      {/* Description */}
      <p className="text-lg text-muted-foreground leading-relaxed">{description}</p>

      {/* Features List */}
      <div className="space-y-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-start gap-3 group animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div
              className={`mt-1 p-1 rounded-full bg-gradient-to-br ${gradientStyles[gradientColor]}`}
            >
              <Check className="h-4 w-4 text-white" />
            </div>
            <p className="text-foreground text-sm md:text-base group-hover:text-gradient-purple-start transition-colors">
              {feature.text}
            </p>
          </div>
        ))}
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 gap-4 pt-4">
        {metrics.map((metric, index) => (
          <Card
            key={index}
            className="p-4 bg-dark-200 border-dark-400 hover:border-gradient-purple-start transition-all duration-300 hover:-translate-y-1"
          >
            <p className="text-xs text-muted-foreground mb-1">{metric.label}</p>
            <p
              className={`text-2xl font-black tracking-tighter bg-gradient-to-r ${gradientStyles[gradientColor]} bg-clip-text text-transparent`}
            >
              {metric.value}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );

  const imageSection = (
    <div className="relative">
      {screenshotComponent || (
        <Card className="p-6 bg-dark-200 border-dark-400 overflow-hidden shadow-2xl">
          {/* Product Screenshot Placeholder */}
          <div className="aspect-[4/3] bg-gradient-to-br from-dark-100 to-dark-300 rounded-lg flex items-center justify-center">
            <div className="text-center space-y-4">
              <div
                className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${gradientStyles[gradientColor]} flex items-center justify-center ${glowStyles[gradientColor]}`}
              >
                <span className="text-4xl font-black text-white">{number}</span>
              </div>
              <p className="text-sm text-muted-foreground">Product Screenshot</p>
            </div>
          </div>
        </Card>
      )}
    </div>
  );

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradientStyles[gradientColor]} opacity-5`}
      ></div>

      <div className="container mx-auto px-4 relative">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
            imagePosition === 'left' ? 'lg:flex-row-reverse' : ''
          }`}
        >
          {imagePosition === 'left' ? (
            <>
              <div className="animate-slide-in-left">{imageSection}</div>
              <div className="animate-slide-in-right">{contentSection}</div>
            </>
          ) : (
            <>
              <div className="animate-slide-in-left">{contentSection}</div>
              <div className="animate-slide-in-right">{imageSection}</div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
