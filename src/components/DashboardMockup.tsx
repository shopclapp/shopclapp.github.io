import React, { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, Zap, Target, MessageSquare } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  delay?: number;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, change, trend, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <Card className="p-4 bg-dark-200 border-dark-400 hover:border-gradient-purple-start hover:shadow-glow-md transition-all duration-300">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs text-muted-foreground mb-1">{title}</p>
            <p className="text-2xl font-black tracking-tighter bg-gradient-purple bg-clip-text text-transparent">
              {value}
            </p>
          </div>
          <Badge
            variant={trend === 'up' ? 'default' : 'destructive'}
            className="flex items-center gap-1"
          >
            {trend === 'up' ? (
              <TrendingUp className="h-3 w-3" />
            ) : (
              <TrendingDown className="h-3 w-3" />
            )}
            {change}
          </Badge>
        </div>
      </Card>
    </div>
  );
};

interface FloatingNotification {
  icon: React.ReactNode;
  text: string;
  delay: number;
}

const FloatingNotificationCard: React.FC<FloatingNotification> = ({ icon, text, delay }) => {
  return (
    <div
      className="absolute animate-float bg-dark-200 border border-dark-400 rounded-lg p-3 shadow-glow-md flex items-center gap-2"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-gradient-purple-start">{icon}</div>
      <p className="text-xs font-medium text-foreground">{text}</p>
    </div>
  );
};

export const DashboardMockup: React.FC = () => {
  const metrics: MetricCardProps[] = [
    { title: 'Conversion Rate', value: '5.8x', change: '+427%', trend: 'up', delay: 100 },
    { title: 'CAC Reduction', value: '-73%', change: '$125 → $34', trend: 'up', delay: 200 },
    { title: 'Automated Tasks', value: '92%', change: '+45%', trend: 'up', delay: 300 },
  ];

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Main Dashboard Card */}
      <Card className="p-6 bg-dark-100 border-dark-300 shadow-2xl">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-black tracking-tighter text-foreground mb-1">
                AI Agent Performance
              </h3>
              <p className="text-xs text-muted-foreground">Real-time metrics dashboard</p>
            </div>
            <Badge className="animate-pulse-glow bg-gradient-purple text-white border-0">
              Live
            </Badge>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {metrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>

        {/* Activity Feed */}
        <div className="mt-6 space-y-2">
          <p className="text-xs text-muted-foreground font-medium mb-3">Recent Activity</p>
          <div className="space-y-2">
            {[
              { icon: <Zap className="h-4 w-4" />, text: 'Marketing campaign created', time: '2m ago' },
              { icon: <MessageSquare className="h-4 w-4" />, text: 'Sales conversation completed', time: '5m ago' },
              { icon: <Target className="h-4 w-4" />, text: 'Support ticket resolved', time: '8m ago' },
            ].map((activity, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-2 rounded-lg bg-dark-200 border border-dark-400 hover:border-gradient-purple-start transition-all duration-300"
              >
                <div className="text-gradient-blue">{activity.icon}</div>
                <p className="text-xs flex-1 text-foreground">{activity.text}</p>
                <span className="text-xs text-muted-foreground">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Floating Notification Cards */}
      <FloatingNotificationCard
        icon={<Zap className="h-4 w-4" />}
        text="New ad campaign launched"
        delay={0}
      />
      <FloatingNotificationCard
        icon={<MessageSquare className="h-4 w-4" />}
        text="3 sales conversations active"
        delay={1000}
      />
    </div>
  );
};
