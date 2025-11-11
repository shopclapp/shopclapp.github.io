import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Clock, AlertCircle, TrendingUp } from 'lucide-react';

export const SupportAgentScreenshot: React.FC = () => {
  const tickets = [
    {
      id: '#2847',
      customer: 'Priya M.',
      issue: 'Order tracking inquiry',
      status: 'resolved',
      time: '2m ago',
      language: '🇮🇳 Hindi',
    },
    {
      id: '#2846',
      customer: 'John D.',
      issue: 'Product return request',
      status: 'in_progress',
      time: '8m ago',
      language: '🇺🇸 English',
    },
    {
      id: '#2845',
      customer: 'Maria G.',
      issue: 'Size exchange',
      status: 'resolved',
      time: '15m ago',
      language: '🇪🇸 Spanish',
    },
  ];

  return (
    <Card className="p-6 bg-dark-200 border-dark-400 shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h4 className="text-sm font-black text-foreground mb-1">Support Dashboard</h4>
          <p className="text-xs text-muted-foreground">AI-powered customer service</p>
        </div>
        <Badge className="bg-gradient-green text-dark border-0">24/7 Active</Badge>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        {[
          {
            label: 'Resolved Today',
            value: '127',
            change: '+23%',
            icon: <CheckCircle2 className="h-4 w-4" />,
            color: '#00ff88',
          },
          {
            label: 'Avg Response',
            value: '<30s',
            change: '-45%',
            icon: <Clock className="h-4 w-4" />,
            color: '#0099ff',
          },
          {
            label: 'Resolution Rate',
            value: '92%',
            change: '+8%',
            icon: <TrendingUp className="h-4 w-4" />,
            color: '#667eea',
          },
          {
            label: 'CSAT Score',
            value: '4.8/5',
            change: '+0.3',
            icon: <AlertCircle className="h-4 w-4" />,
            color: '#ff6b35',
          },
        ].map((stat, index) => (
          <Card
            key={index}
            className="p-3 bg-dark-300 border-dark-400 hover:border-opacity-50 transition-all"
          >
            <div className="flex items-center gap-2 mb-2">
              <div style={{ color: stat.color }}>{stat.icon}</div>
              <span className="text-xs text-muted-foreground">{stat.label}</span>
            </div>
            <div className="flex items-baseline justify-between">
              <p className="text-lg font-black tracking-tighter text-foreground">{stat.value}</p>
              <Badge className="bg-gradient-green text-dark text-xs">{stat.change}</Badge>
            </div>
          </Card>
        ))}
      </div>

      {/* Recent Tickets */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h5 className="text-xs font-bold text-muted-foreground uppercase tracking-wide">
            Recent Tickets
          </h5>
          <Badge variant="outline" className="text-xs border-dark-400 text-muted-foreground">
            Live
          </Badge>
        </div>

        <div className="space-y-2">
          {tickets.map((ticket, index) => (
            <Card
              key={index}
              className="p-3 bg-dark-100 border-dark-400 hover:shadow-glow-sm transition-all"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-black text-gradient-purple-start">
                      {ticket.id}
                    </span>
                    <Badge
                      variant={ticket.status === 'resolved' ? 'default' : 'secondary'}
                      className={`text-xs ${
                        ticket.status === 'resolved'
                          ? 'bg-gradient-green text-dark'
                          : 'bg-gradient-blue text-white'
                      }`}
                    >
                      {ticket.status === 'resolved' ? (
                        <>
                          <CheckCircle2 className="h-3 w-3 mr-1" />
                          Resolved
                        </>
                      ) : (
                        <>
                          <Clock className="h-3 w-3 mr-1" />
                          In Progress
                        </>
                      )}
                    </Badge>
                  </div>
                  <p className="text-sm font-medium text-foreground mb-1">{ticket.customer}</p>
                  <p className="text-xs text-muted-foreground">{ticket.issue}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground mb-1">{ticket.time}</p>
                  <span className="text-xs">{ticket.language}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Language Support */}
      <div className="mt-6 pt-4 border-t border-dark-400">
        <h5 className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-3">
          Multi-Language Support
        </h5>
        <div className="flex flex-wrap gap-2">
          {[
            '🇬🇧 English',
            '🇮🇳 Hindi',
            '🇪🇸 Spanish',
            '🇫🇷 French',
            '🇩🇪 German',
            '🇯🇵 Japanese',
            '+94 more',
          ].map((lang, index) => (
            <Badge
              key={index}
              variant="outline"
              className="text-xs border-dark-400 text-muted-foreground hover:border-gradient-purple-start transition-all"
            >
              {lang}
            </Badge>
          ))}
        </div>
      </div>

      {/* Integration Status */}
      <div className="mt-4 grid grid-cols-3 gap-2">
        {[
          { name: 'Zendesk', status: 'active' },
          { name: 'Shopify', status: 'active' },
          { name: 'Slack', status: 'active' },
        ].map((integration, index) => (
          <div
            key={index}
            className="p-2 bg-dark-300 rounded-lg border border-dark-400 flex items-center justify-between"
          >
            <span className="text-xs font-medium text-foreground">{integration.name}</span>
            <div className="w-2 h-2 bg-gradient-green rounded-full animate-pulse"></div>
          </div>
        ))}
      </div>
    </Card>
  );
};
