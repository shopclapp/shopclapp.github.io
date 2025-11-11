import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Eye, MousePointerClick, DollarSign } from 'lucide-react';

export const MarketingAgentScreenshot: React.FC = () => {
  return (
    <Card className="p-6 bg-dark-200 border-dark-400 shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h4 className="text-sm font-black text-foreground mb-1">Campaign Dashboard</h4>
          <p className="text-xs text-muted-foreground">Multi-channel AI orchestration</p>
        </div>
        <Badge className="bg-gradient-purple text-white border-0 animate-pulse">Live</Badge>
      </div>

      {/* Multi-Channel Overview */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {[
          { platform: 'Meta', color: '#0099ff', budget: '$2.4k', roas: '4.2x' },
          { platform: 'Google', color: '#00ff88', budget: '$1.8k', roas: '3.8x' },
          { platform: 'TikTok', color: '#ff6b35', budget: '$1.2k', roas: '5.1x' },
        ].map((channel, index) => (
          <Card
            key={index}
            className="p-3 bg-dark-300 border-dark-400 hover:border-opacity-50 transition-all"
            style={{ borderColor: channel.color + '40' }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: channel.color }}
              ></div>
              <span className="text-xs font-bold text-foreground">{channel.platform}</span>
            </div>
            <p className="text-lg font-black tracking-tighter text-foreground mb-1">
              {channel.budget}
            </p>
            <p className="text-xs text-muted-foreground">
              ROAS: <span className="text-gradient-green font-bold">{channel.roas}</span>
            </p>
          </Card>
        ))}
      </div>

      {/* Creative Variations - Compact Horizontal Layout */}
      <div className="space-y-3">
        <h5 className="text-xs font-bold text-muted-foreground uppercase tracking-wide">
          Active Creatives (A/B Testing)
        </h5>
        <div className="grid grid-cols-4 gap-2">
          {[
            {
              variant: 'A',
              impressions: '24.2k',
              ctr: '3.8%',
              color: '#667eea',
              performance: 'Winner',
              preview: 'Product close-up + "Save 30%" CTA',
            },
            {
              variant: 'B',
              impressions: '18.5k',
              ctr: '2.4%',
              color: '#0099ff',
              performance: 'Testing',
              preview: 'Lifestyle shot + testimonial',
            },
            {
              variant: 'C',
              impressions: '21.1k',
              ctr: '3.2%',
              color: '#00ff88',
              performance: 'Strong',
              preview: 'Video demo + free shipping',
            },
            {
              variant: 'D',
              impressions: '15.8k',
              ctr: '1.9%',
              color: '#ff6b35',
              performance: 'Paused',
              preview: 'Product grid + brand logo',
            },
          ].map((creative, index) => (
            <Card
              key={index}
              className="p-2 bg-dark-100 border-dark-400 hover:shadow-glow-sm transition-all hover:-translate-y-1 cursor-pointer group"
            >
              {/* Compact Creative Preview with Realistic Mockup */}
              <div
                className="aspect-[3/4] rounded-md mb-2 flex flex-col items-center justify-between p-2 text-white text-xs relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${creative.color}40 0%, ${creative.color}20 100%)`,
                }}
              >
                {/* Mockup of ad creative */}
                <div className="w-full h-full rounded border border-white/10 bg-dark-300/50 flex flex-col items-center justify-center p-1 text-center">
                  <div
                    className="w-8 h-8 rounded-full mb-1"
                    style={{ backgroundColor: creative.color }}
                  ></div>
                  <div className="text-[8px] font-bold leading-tight opacity-70">
                    {creative.preview.split('+')[0]}
                  </div>
                  <div className="text-[6px] mt-1 px-1 py-0.5 bg-white/20 rounded">
                    {creative.preview.split('+')[1]}
                  </div>
                </div>
                {/* Variant badge */}
                <div
                  className="absolute top-1 right-1 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black"
                  style={{ backgroundColor: creative.color }}
                >
                  {creative.variant}
                </div>
              </div>

              {/* Compact Stats */}
              <div className="space-y-0.5">
                <div className="flex items-center justify-between text-[10px]">
                  <span className="text-muted-foreground">CTR</span>
                  <span className="font-bold text-gradient-green">{creative.ctr}</span>
                </div>
                <div className="text-[10px] text-muted-foreground">{creative.impressions}</div>
                <Badge
                  variant={creative.performance === 'Winner' ? 'default' : 'secondary'}
                  className={`text-[9px] w-full justify-center py-0 ${
                    creative.performance === 'Winner'
                      ? 'bg-gradient-green text-dark font-bold'
                      : creative.performance === 'Strong'
                      ? 'bg-gradient-blue/20 text-gradient-blue'
                      : 'bg-dark-400 text-muted-foreground'
                  }`}
                >
                  {creative.performance}
                </Badge>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Performance Metrics Bar */}
      <div className="mt-6 pt-4 border-t border-dark-400 grid grid-cols-4 gap-3">
        {[
          { icon: <Eye className="h-3 w-3" />, label: 'Reach', value: '248k' },
          { icon: <MousePointerClick className="h-3 w-3" />, label: 'Clicks', value: '7.2k' },
          { icon: <DollarSign className="h-3 w-3" />, label: 'Spend', value: '$5.4k' },
          { icon: <TrendingUp className="h-3 w-3" />, label: 'Revenue', value: '$23.1k' },
        ].map((metric, index) => (
          <div key={index} className="text-center">
            <div className="flex items-center justify-center mb-1 text-gradient-purple-start">
              {metric.icon}
            </div>
            <p className="text-xs font-black text-foreground">{metric.value}</p>
            <p className="text-xs text-muted-foreground">{metric.label}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};
