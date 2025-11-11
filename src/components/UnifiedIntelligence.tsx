import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Zap, MessageSquare, HeadphonesIcon } from 'lucide-react';

interface Agent {
  id: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  angle: number;
}

const agents: Agent[] = [
  {
    id: 'marketing',
    label: 'Marketing Agent',
    description: 'Campaign creation & optimization',
    icon: <Zap className="h-6 w-6" />,
    color: '#667eea',
    angle: 0, // Top
  },
  {
    id: 'sales',
    label: 'Sales Agent',
    description: 'Conversation management',
    icon: <MessageSquare className="h-6 w-6" />,
    color: '#0099ff',
    angle: 120, // Bottom left
  },
  {
    id: 'support',
    label: 'Support Agent',
    description: 'Ticket resolution',
    icon: <HeadphonesIcon className="h-6 w-6" />,
    color: '#00ff88',
    angle: 240, // Bottom right
  },
];

export const UnifiedIntelligence: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-b from-dark to-dark-100">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-gradient-purple-start/10 via-transparent to-transparent"></div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <Badge className="mb-6 bg-gradient-purple text-white border-0 text-sm px-4 py-2">
            Unified Intelligence
          </Badge>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 text-foreground">
            One Brain.{' '}
            <span className="bg-gradient-to-r from-gradient-purple-start to-gradient-blue bg-clip-text text-transparent">
              Complete Context.
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            All your AI agents share a unified intelligence layer, ensuring every interaction is
            contextually aware across your entire commerce operation.
          </p>
        </div>

        {/* Intelligence Visualization */}
        <div className="relative max-w-4xl mx-auto h-[600px] flex items-center justify-center">
          {/* SVG Network Diagram */}
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="connectionGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#667eea" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#0099ff" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="connectionGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0099ff" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#00ff88" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="connectionGradient3" x1="100%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#00ff88" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#667eea" stopOpacity="0.8" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Connection Lines - Triangular Layout */}
            {/* Marketing (Top) to Sales (Bottom Left) */}
            <line
              x1="50%"
              y1="10%"
              x2="25%"
              y2="75%"
              stroke="url(#connectionGradient1)"
              strokeWidth="3"
              strokeDasharray="8,8"
              filter="url(#glow)"
              className="animate-[pulse_3s_ease-in-out_infinite]"
            />
            {/* Sales (Bottom Left) to Support (Bottom Right) */}
            <line
              x1="25%"
              y1="75%"
              x2="75%"
              y2="75%"
              stroke="url(#connectionGradient2)"
              strokeWidth="3"
              strokeDasharray="8,8"
              filter="url(#glow)"
              className="animate-[pulse_3s_ease-in-out_infinite]"
              style={{ animationDelay: '1s' }}
            />
            {/* Support (Bottom Right) to Marketing (Top) */}
            <line
              x1="75%"
              y1="75%"
              x2="50%"
              y2="10%"
              stroke="url(#connectionGradient3)"
              strokeWidth="3"
              strokeDasharray="8,8"
              filter="url(#glow)"
              className="animate-[pulse_3s_ease-in-out_infinite]"
              style={{ animationDelay: '2s' }}
            />

            {/* Center connections */}
            <line
              x1="50%"
              y1="10%"
              x2="50%"
              y2="50%"
              stroke="#667eea"
              strokeWidth="2"
              strokeOpacity="0.4"
              filter="url(#glow)"
            />
            <line
              x1="25%"
              y1="75%"
              x2="50%"
              y2="50%"
              stroke="#0099ff"
              strokeWidth="2"
              strokeOpacity="0.4"
              filter="url(#glow)"
            />
            <line
              x1="75%"
              y1="75%"
              x2="50%"
              y2="50%"
              stroke="#00ff88"
              strokeWidth="2"
              strokeOpacity="0.4"
              filter="url(#glow)"
            />
          </svg>

          {/* Central Hub */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="relative">
              <div className="w-40 h-40 rounded-full bg-gradient-to-br from-gradient-purple-start via-gradient-blue to-gradient-green flex items-center justify-center shadow-glow-lg animate-pulse-glow">
                <div className="w-32 h-32 rounded-full bg-dark flex flex-col items-center justify-center border-2 border-white/20">
                  <div className="text-4xl mb-2">⚡</div>
                  <p className="text-xs font-black text-foreground">Unified</p>
                  <p className="text-xs font-black bg-gradient-purple bg-clip-text text-transparent">
                    Intelligence
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Agent Nodes - Percentage-Based Positioning */}
          {[
            { agent: agents[0], top: '10%', left: '50%' }, // Marketing - Top
            { agent: agents[1], top: '75%', left: '25%' }, // Sales - Bottom Left
            { agent: agents[2], top: '75%', left: '75%' }, // Support - Bottom Right
          ].map(({ agent, top, left }, index) => (
            <div
              key={agent.id}
              className="absolute z-20 animate-fade-in"
              style={{
                top,
                left,
                transform: 'translate(-50%, -50%)',
                animationDelay: `${index * 300}ms`,
              }}
            >
              <Card className="p-6 bg-dark-200 border-dark-400 hover:border-gradient-purple-start transition-all duration-300 hover:shadow-glow-md hover:-translate-y-2 cursor-pointer w-56">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-4 shadow-glow-md"
                  style={{
                    background: `linear-gradient(135deg, ${agent.color} 0%, ${agent.color}80 100%)`,
                  }}
                >
                  <div className="text-white">{agent.icon}</div>
                </div>
                <h4 className="text-lg font-black tracking-tighter text-foreground mb-2">
                  {agent.label}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {agent.description}
                </p>
                <div
                  className="mt-3 w-3 h-3 rounded-full animate-pulse mx-auto"
                  style={{ backgroundColor: agent.color, boxShadow: `0 0 10px ${agent.color}` }}
                ></div>
              </Card>
            </div>
          ))}
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-32 max-w-6xl mx-auto">
          {[
            {
              title: 'Shared Memory',
              description: 'All agents access the same customer history and interaction data',
              icon: '💭',
            },
            {
              title: 'Real-Time Sync',
              description: 'Instant synchronization across all touchpoints and channels',
              icon: '⚡',
            },
            {
              title: 'Contextual Awareness',
              description: 'Every agent understands the complete customer journey',
              icon: '🎯',
            },
          ].map((feature, index) => (
            <Card
              key={index}
              className="p-8 bg-dark-200 border-dark-400 hover:border-gradient-purple-start transition-all duration-300 hover:shadow-glow-md hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h4 className="text-xl font-black tracking-tighter text-foreground mb-3">
                {feature.title}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
