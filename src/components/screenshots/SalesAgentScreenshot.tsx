import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Phone, Video, MoreVertical, Search } from 'lucide-react';

export const SalesAgentScreenshot: React.FC = () => {
  const messages = [
    {
      type: 'received',
      text: 'Hi! I saw your ad for organic skincare products. Do you have anything for sensitive skin?',
      time: '10:23 AM',
    },
    {
      type: 'sent',
      text: 'Hello! Thanks for reaching out! 😊 Yes, our Gentle Hydration Collection is perfect for sensitive skin. It includes our best-selling Calming Face Serum and Moisture Barrier Cream.',
      time: '10:23 AM',
    },
    {
      type: 'sent',
      text: 'Would you like to see the products and their benefits?',
      time: '10:23 AM',
      showProduct: true,
    },
    {
      type: 'received',
      text: 'Yes please! What makes them good for sensitive skin?',
      time: '10:24 AM',
    },
    {
      type: 'sent',
      text: 'Both products are:\n✅ Fragrance-free\n✅ Dermatologist tested\n✅ Made with soothing chamomile & oat extract\n✅ No harsh chemicals\n\nCustomers with sensitive skin love them! 4.8★ rating from 2,400+ reviews.',
      time: '10:24 AM',
    },
  ];

  return (
    <Card className="p-0 bg-dark-200 border-dark-400 shadow-2xl overflow-hidden max-w-md mx-auto">
      {/* WhatsApp Header */}
      <div className="bg-[#075E54] p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-purple flex items-center justify-center text-white font-bold">
            AI
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">Organics & You</h4>
            <p className="text-xs text-white/80 flex items-center gap-1">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Online • AI Agent
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-white">
          <Video className="h-5 w-5" />
          <Phone className="h-5 w-5" />
          <MoreVertical className="h-5 w-5" />
        </div>
      </div>

      {/* Chat Background */}
      <div
        className="p-4 h-[400px] overflow-y-auto"
        style={{
          backgroundImage:
            'linear-gradient(rgba(10, 10, 10, 0.95), rgba(10, 10, 10, 0.95)), repeating-linear-gradient(45deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 6px)',
        }}
      >
        <div className="space-y-3">
          {/* Date Divider */}
          <div className="flex justify-center mb-4">
            <Badge className="bg-dark-300 text-muted-foreground border-dark-400 text-xs">
              Today
            </Badge>
          </div>

          {/* Messages */}
          {messages.map((message, index) => (
            <div key={index} className="flex flex-col gap-1">
              <div
                className={`flex ${message.type === 'sent' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.type === 'sent'
                      ? 'bg-[#005C4B] text-white'
                      : 'bg-dark-300 text-foreground'
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-line">{message.text}</p>
                  <p
                    className={`text-xs mt-1 ${
                      message.type === 'sent' ? 'text-white/60' : 'text-muted-foreground'
                    }`}
                  >
                    {message.time}
                  </p>
                </div>
              </div>

              {/* Product Card (if applicable) */}
              {message.showProduct && (
                <div className="flex justify-end">
                  <Card className="max-w-[80%] bg-dark-300 border-dark-400 p-3 space-y-2">
                    <div className="flex gap-3">
                      <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-gradient-green to-gradient-blue flex items-center justify-center text-2xl">
                        🧴
                      </div>
                      <div className="flex-1">
                        <h5 className="text-xs font-bold text-foreground mb-1">
                          Gentle Hydration Collection
                        </h5>
                        <p className="text-xs text-muted-foreground">2 products • $68</p>
                        <Badge className="mt-1 bg-gradient-green text-dark text-xs">
                          Best Seller
                        </Badge>
                      </div>
                    </div>
                    <button className="w-full py-2 bg-gradient-purple rounded-lg text-white text-xs font-bold hover:shadow-glow-md transition-all">
                      View Collection
                    </button>
                  </Card>
                </div>
              )}
            </div>
          ))}

          {/* Typing Indicator */}
          <div className="flex justify-start">
            <div className="bg-dark-300 rounded-lg p-3 flex items-center gap-1">
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></span>
                <span
                  className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                  style={{ animationDelay: '0.2s' }}
                ></span>
                <span
                  className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                  style={{ animationDelay: '0.4s' }}
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Input Footer */}
      <div className="bg-dark-300 p-3 flex items-center gap-3 border-t border-dark-400">
        <div className="flex-1 bg-dark-100 rounded-full px-4 py-2 flex items-center gap-2">
          <span className="text-2xl">😊</span>
          <input
            type="text"
            placeholder="Type a message"
            className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
            disabled
          />
        </div>
        <div className="w-10 h-10 rounded-full bg-gradient-purple flex items-center justify-center shadow-glow-md">
          <span className="text-white text-xl">🎤</span>
        </div>
      </div>
    </Card>
  );
};
