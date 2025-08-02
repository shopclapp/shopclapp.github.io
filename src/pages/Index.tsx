
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Bot, Zap, Smartphone, Mail, TrendingUp, DollarSign, Clock, CheckCircle, Calendar, Users } from 'lucide-react';

const Index = () => {
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Waitlist submission:', { name, whatsapp });
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Redefining Commerce.<br />
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                AI‑Powered. WhatsApp Native.
              </span><br />
              Empowering Small Businesses to Scale.
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Run your entire business from WhatsApp — sales, orders, CRM, and ops — all handled by your 24/7 AI Business Assistant.
            </p>
            
            {/* Waitlist Form */}
            <form onSubmit={handleWaitlistSubmit} className="max-w-lg mx-auto mb-12">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="flex-1"
                  required
                />
                <Input
                  placeholder="WhatsApp Number"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  className="flex-1"
                  required
                />
                <Button type="submit" size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8">
                  📋 Join Waitlist
                </Button>
              </div>
            </form>

            {/* Visual Workflow */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-green-100">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <MessageCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <p className="font-semibold">Customer says "Hi"</p>
                </div>
                <div className="w-8 h-1 bg-green-300 hidden lg:block"></div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Bot className="w-8 h-8 text-green-600" />
                  </div>
                  <p className="font-semibold">AI shows catalog</p>
                </div>
                <div className="w-8 h-1 bg-green-300 hidden lg:block"></div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <p className="font-semibold">Customer selects</p>
                </div>
                <div className="w-8 h-1 bg-green-300 hidden lg:block"></div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <DollarSign className="w-8 h-8 text-green-600" />
                  </div>
                  <p className="font-semibold">Payment & tracking</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Value Proposition */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">WhatsApp First</h3>
              <p className="text-gray-600">Where your customers already are</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Bot className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">AI Handles Everything</h3>
              <p className="text-gray-600">Sales | Ops | CRM — No team required</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Faster Setup</h3>
              <p className="text-gray-600">Go live in 3–5 working days</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Clapp */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Start, Run, & Grow — All Inside WhatsApp.</h2>
            
            {/* Stats Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="p-6 border-green-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <TrendingUp className="w-8 h-8 text-green-600 mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">3x</div>
                  <div className="text-sm text-gray-600">More Sales</div>
                </CardContent>
              </Card>
              <Card className="p-6 border-green-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <Mail className="w-8 h-8 text-green-600 mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
                  <div className="text-sm text-gray-600">Message Open Rate</div>
                </CardContent>
              </Card>
              <Card className="p-6 border-green-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <Clock className="w-8 h-8 text-green-600 mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">5 Days</div>
                  <div className="text-sm text-gray-600">to Go Live</div>
                </CardContent>
              </Card>
              <Card className="p-6 border-green-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <DollarSign className="w-8 h-8 text-green-600 mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">₹50K+</div>
                  <div className="text-sm text-gray-600">Monthly Savings</div>
                </CardContent>
              </Card>
            </div>

            {/* Key Points */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
              <div>
                <Smartphone className="w-8 h-8 text-green-600 mb-4" />
                <p className="font-semibold text-gray-900">2.7B users already on WhatsApp</p>
              </div>
              <div>
                <Mail className="w-8 h-8 text-green-600 mb-4" />
                <p className="font-semibold text-gray-900">98% open rate vs 10% for websites & email</p>
              </div>
              <div>
                <Bot className="w-8 h-8 text-green-600 mb-4" />
                <p className="font-semibold text-gray-900">End-to-end commerce automation</p>
              </div>
              <div>
                <Users className="w-8 h-8 text-green-600 mb-4" />
                <p className="font-semibold text-gray-900">Always-on customer engagement</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Proof */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Trusted by SMBs across industries.</h2>
          <div className="flex justify-center items-center gap-12 opacity-60">
            <Badge variant="outline" className="px-4 py-2">Food & Beverage</Badge>
            <Badge variant="outline" className="px-4 py-2">Local Retail</Badge>
            <Badge variant="outline" className="px-4 py-2">E-commerce</Badge>
            <Badge variant="outline" className="px-4 py-2">Services</Badge>
            <Badge variant="outline" className="px-4 py-2">Desify</Badge>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Transparent. Predictable. Most Economical.</h2>
          </div>
          
          <div className="max-w-lg mx-auto">
            <Card className="border-green-200 shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">$29.99</div>
                <div className="text-gray-600 mb-6">/month</div>
                <div className="text-sm text-gray-600 mb-8">+ Pay-as-you-scale WhatsApp messaging cost</div>
                
                <div className="space-y-4 text-left mb-8">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span>AI Business Assistant</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span>Catalog Builder</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span>Payment Flow</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span>Ops Integration</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span>CRM</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span>Business Insights (coming soon)</span>
                  </div>
                </div>
                
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white" size="lg">
                  Join Waitlist Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-16 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">The Fastest Way to Launch & Grow a WhatsApp Business.</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
              <Calendar className="w-5 h-5 mr-2" />
              Book a Free Appointment
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
              📋 Join the Waitlist Now
            </Button>
          </div>
          <p className="text-green-100">Launch in days, grow in months — powered by Clapp.</p>
        </div>
      </div>

      {/* Footer */}
      <div className="py-8 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">Built in 🇮🇳 for the World | © 2025 Clapp.in</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
