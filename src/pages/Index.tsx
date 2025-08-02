
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Bot, Zap, Smartphone, Mail, TrendingUp, DollarSign, Clock, CheckCircle, Calendar, Users, ArrowRight, Play, Star } from 'lucide-react';

const Index = () => {
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Waitlist submission:', { name, whatsapp });
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Navigation */}
      <nav className="relative z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-green-600 rounded-xl flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <span className="ml-3 text-2xl font-bold text-gray-900">Clapp</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
              <Button variant="outline" size="sm">Login</Button>
              <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/80 via-green-50/40 to-white"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-100/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full text-emerald-800 text-sm font-medium mb-8">
              <Star className="w-4 h-4 mr-2 text-emerald-600" />
              Trusted by 500+ businesses across India
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 mb-8 leading-tight">
              Redefining Commerce.<br />
              <span className="bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 bg-clip-text text-transparent">
                AI‑Powered.
              </span>{" "}
              <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 bg-clip-text text-transparent">
                WhatsApp Native.
              </span><br />
              <span className="text-gray-700">Empowering Small Businesses</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Run your entire business from WhatsApp — sales, orders, CRM, and ops — all handled by your 24/7 AI Business Assistant.
            </p>
            
            {/* CTA Section */}
            <div className="mb-16">
              <form onSubmit={handleWaitlistSubmit} className="max-w-md mx-auto mb-8">
                <div className="flex gap-3">
                  <Input
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-14 text-lg border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                    required
                  />
                  <Input
                    placeholder="WhatsApp Number"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    className="h-14 text-lg border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                    required
                  />
                  <Button type="submit" size="lg" className="h-14 px-8 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold">
                    Join Waitlist
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </form>
              
              <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mr-2" />
                  Free setup
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mr-2" />
                  No credit card required
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mr-2" />
                  Launch in 5 days
                </div>
              </div>
            </div>

            {/* Visual Workflow */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100 max-w-5xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">How It Works</h3>
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Customer says "Hi"</h4>
                  <p className="text-gray-600 text-sm">Instant engagement on WhatsApp</p>
                </div>
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-105 transition-transform">
                    <Bot className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">AI shows catalog</h4>
                  <p className="text-gray-600 text-sm">Smart product recommendations</p>
                </div>
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-105 transition-transform">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Customer selects</h4>
                  <p className="text-gray-600 text-sm">Seamless product selection</p>
                </div>
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-105 transition-transform">
                    <DollarSign className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Payment & tracking</h4>
                  <p className="text-gray-600 text-sm">Automated order processing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Clapp?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The only platform you need to run your WhatsApp business
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">WhatsApp First</h3>
                <p className="text-gray-600 leading-relaxed">Where your customers already are. No need to drive traffic elsewhere.</p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Bot className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">AI Handles Everything</h3>
                <p className="text-gray-600 leading-relaxed">Sales, operations, and CRM — no team required to get started.</p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Faster Setup</h3>
                <p className="text-gray-600 leading-relaxed">Go live in 3–5 working days with full support and guidance.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Start, Run, & Grow — All Inside WhatsApp
            </h2>
            
            {/* Stats Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-gradient-to-br from-emerald-50 to-green-50">
                <CardContent className="p-0 text-center">
                  <TrendingUp className="w-12 h-12 text-emerald-600 mb-4 mx-auto" />
                  <div className="text-4xl font-bold text-emerald-600 mb-2">3x</div>
                  <div className="text-gray-700 font-medium">More Sales</div>
                  <div className="text-sm text-gray-500 mt-1">Convert instantly on WhatsApp</div>
                </CardContent>
              </Card>
              
              <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-gradient-to-br from-blue-50 to-indigo-50">
                <CardContent className="p-0 text-center">
                  <Mail className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
                  <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
                  <div className="text-gray-700 font-medium">Message Open Rate</div>
                  <div className="text-sm text-gray-500 mt-1">vs 10% for websites</div>
                </CardContent>
              </Card>
              
              <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-gradient-to-br from-purple-50 to-pink-50">
                <CardContent className="p-0 text-center">
                  <Clock className="w-12 h-12 text-purple-600 mb-4 mx-auto" />
                  <div className="text-4xl font-bold text-purple-600 mb-2">5 Days</div>
                  <div className="text-gray-700 font-medium">to Go Live</div>
                  <div className="text-sm text-gray-500 mt-1">Start selling immediately</div>
                </CardContent>
              </Card>
              
              <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-gradient-to-br from-orange-50 to-red-50">
                <CardContent className="p-0 text-center">
                  <DollarSign className="w-12 h-12 text-orange-600 mb-4 mx-auto" />
                  <div className="text-4xl font-bold text-orange-600 mb-2">₹50K+</div>
                  <div className="text-gray-700 font-medium">Monthly Savings</div>
                  <div className="text-sm text-gray-500 mt-1">Replace multiple tools</div>
                </CardContent>
              </Card>
            </div>

            {/* Key Benefits */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <Smartphone className="w-12 h-12 text-emerald-600 mb-4 mx-auto" />
                <h4 className="font-semibold text-gray-900 mb-2">2.7B users already on WhatsApp</h4>
                <p className="text-gray-600 text-sm">Your customers are already here</p>
              </div>
              <div className="text-center">
                <Mail className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
                <h4 className="font-semibold text-gray-900 mb-2">98% open rate vs 10% for websites</h4>
                <p className="text-gray-600 text-sm">Guaranteed message delivery</p>
              </div>
              <div className="text-center">
                <Bot className="w-12 h-12 text-purple-600 mb-4 mx-auto" />
                <h4 className="font-semibold text-gray-900 mb-2">End-to-end commerce automation</h4>
                <p className="text-gray-600 text-sm">No manual work required</p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 text-orange-600 mb-4 mx-auto" />
                <h4 className="font-semibold text-gray-900 mb-2">Always-on customer engagement</h4>
                <p className="text-gray-600 text-sm">24/7 AI assistant</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Trusted by SMBs across industries
          </h2>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <Badge variant="outline" className="px-6 py-3 text-lg border-gray-200 bg-white hover:bg-gray-50">Food & Beverage</Badge>
            <Badge variant="outline" className="px-6 py-3 text-lg border-gray-200 bg-white hover:bg-gray-50">Local Retail</Badge>
            <Badge variant="outline" className="px-6 py-3 text-lg border-gray-200 bg-white hover:bg-gray-50">E-commerce</Badge>
            <Badge variant="outline" className="px-6 py-3 text-lg border-gray-200 bg-white hover:bg-gray-50">Services</Badge>
            <Badge variant="outline" className="px-6 py-3 text-lg border-gray-200 bg-white hover:bg-gray-50">Healthcare</Badge>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">
              One plan. Everything included. No hidden fees.
            </p>
          </div>
          
          <div className="max-w-lg mx-auto">
            <Card className="border-0 shadow-2xl overflow-hidden bg-gradient-to-br from-emerald-50 to-green-50">
              <CardContent className="p-12 text-center">
                <div className="mb-8">
                  <div className="text-6xl font-bold text-emerald-600 mb-2">$29.99</div>
                  <div className="text-gray-600 text-xl">/month</div>
                  <div className="text-sm text-gray-500 mt-2">+ Pay-as-you-scale WhatsApp messaging cost</div>
                </div>
                
                <div className="space-y-4 text-left mb-8">
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-emerald-600 mr-4" />
                    <span className="text-gray-700 font-medium">AI Business Assistant</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-emerald-600 mr-4" />
                    <span className="text-gray-700 font-medium">Catalog Builder</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-emerald-600 mr-4" />
                    <span className="text-gray-700 font-medium">Payment Flow</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-emerald-600 mr-4" />
                    <span className="text-gray-700 font-medium">Ops Integration</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-emerald-600 mr-4" />
                    <span className="text-gray-700 font-medium">Customer CRM</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-emerald-600 mr-4" />
                    <span className="text-gray-700 font-medium">Business Insights</span>
                  </div>
                </div>
                
                <Button className="w-full h-14 bg-emerald-600 hover:bg-emerald-700 text-white text-lg font-semibold" size="lg">
                  Join Waitlist Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-emerald-600 via-green-600 to-emerald-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8">
            The Fastest Way to Launch & Grow a WhatsApp Business
          </h2>
          <p className="text-xl text-emerald-100 mb-12 max-w-3xl mx-auto">
            Join hundreds of businesses already scaling with Clapp
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" variant="secondary" className="h-14 px-8 bg-white text-emerald-600 hover:bg-gray-100 font-semibold">
              <Calendar className="w-5 h-5 mr-2" />
              Book a Free Demo
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 border-white text-white hover:bg-white hover:text-emerald-600 font-semibold">
              Join the Waitlist Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
          
          <p className="text-emerald-100">
            Launch in days, grow in months — powered by Clapp
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-green-600 rounded-xl flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <span className="ml-3 text-2xl font-bold text-white">Clapp</span>
            </div>
            <p className="text-gray-400">
              Built in 🇮🇳 for the World | © 2025 Clapp.in
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
