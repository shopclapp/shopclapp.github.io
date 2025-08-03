
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Play } from 'lucide-react';

const Hero = () => {
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Demo booking:', { name, whatsapp });
  };

  return (
    <section className="relative pt-20 pb-32 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-8">
              <MessageCircle className="w-4 h-4 mr-2" />
              #1 WhatsApp Business Platform
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Turn WhatsApp into your
              <span className="text-blue-600"> Complete Business </span>
              Platform
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-xl">
              Automate sales, support, and marketing on WhatsApp with AI. No coding required. Get started in minutes.
            </p>
            
            {/* CTA Form */}
            <form onSubmit={handleWaitlistSubmit} className="max-w-md mx-auto lg:mx-0 mb-8">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  placeholder="Enter your WhatsApp number"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  className="h-12 border-gray-200 focus:border-blue-500"
                  required
                />
                <Button type="submit" className="h-12 bg-blue-600 hover:bg-blue-700 text-white px-8 font-medium whitespace-nowrap">
                  Start Free Trial
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-3">Free 14-day trial • No credit card required</p>
            </form>

            {/* Social Proof */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-blue-600 mr-2">50K+</span>
                <span>Businesses</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl font-bold text-green-600 mr-2">99.9%</span>
                <span>Uptime</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl font-bold text-purple-600 mr-2">24/7</span>
                <span>Support</span>
              </div>
            </div>
          </div>

          {/* Right Content - Demo */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">WhatsApp Business</h3>
                  <p className="text-sm text-gray-500">Online now</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-100 rounded-2xl rounded-bl-md p-4 max-w-xs">
                  <p className="text-sm text-gray-800">Hi! I'm interested in your products. Can you help me?</p>
                </div>
                
                <div className="bg-blue-600 text-white rounded-2xl rounded-br-md p-4 max-w-xs ml-auto">
                  <p className="text-sm">Absolutely! I'd be happy to help. What are you looking for today?</p>
                </div>
                
                <div className="bg-gray-100 rounded-2xl rounded-bl-md p-4 max-w-xs">
                  <p className="text-sm text-gray-800">I need a quote for bulk orders</p>
                </div>
                
                <div className="bg-blue-600 text-white rounded-2xl rounded-br-md p-4 max-w-xs ml-auto">
                  <p className="text-sm">Great! I've prepared a custom quote for you. Check your email in 2 minutes ✨</p>
                </div>
              </div>
              
              <div className="mt-6 p-3 bg-green-50 rounded-lg">
                <p className="text-xs text-green-800 font-medium">🤖 AI handled this entire conversation automatically</p>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
              <Play className="w-8 h-8 text-blue-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
