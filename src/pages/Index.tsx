
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Bot, Zap, Square, Circle, Triangle, ArrowRight, CheckCircle } from 'lucide-react';

const Index = () => {
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Demo booking:', { name, whatsapp });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-gray-900 to-gray-700 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <span className="ml-3 text-2xl font-bold text-gray-900">Clapp</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
              <a
  href="https://wa.me/14707342241?text=Book%20demo."
  target="_blank"
  rel="noopener noreferrer"
  className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded-lg shadow-sm"
  style={{ textDecoration: 'none' }}
>
  Book Free Demo
</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center mb-8">
            <div className="w-6 h-6 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full mr-3"></div>
            <span className="text-sm font-medium text-gray-600">Redefining Commerce</span>
          </div>
          
          <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            AI-Powered.<br />
            WhatsApp-Native.
          </h1>
          
          <p className="text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Run your entire business on WhatsApp!
          </p>
          
{/*           <form onSubmit={handleWaitlistSubmit} className="max-w-md mx-auto mb-16">
            <div className="flex gap-3 mb-4">
              <Input
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-12 border-gray-200 focus:border-gray-400"
                required
              />
              <Input
                placeholder="WhatsApp Number"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                className="h-12 border-gray-200 focus:border-gray-400"
                required
              />
            </div>
            <Button type="submit" className="w-full h-12 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg shadow-sm">
              Book Free Demo
            </Button>
          </form> */}
          <a
  href="https://wa.me/14707342241?text=Book%20demo."
  target="_blank"
  rel="noopener noreferrer"
  className="block w-full h-12 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg shadow-sm flex items-center justify-center text-center mb-16"
  style={{ textDecoration: 'none' }}
>
  Book Free Demo
</a>

        </div>
      </section>

      {/* Feature Showcase Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Square className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">WhatsApp First</h3>
              <p className="text-gray-600">Where your customers already are. No need to drive traffic elsewhere.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Circle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI Handles All</h3>
              <p className="text-gray-600">Sales, operations, and CRM — no team required to get started.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Triangle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Setup</h3>
              <p className="text-gray-600">Go live in 3–5 working days with full support and guidance.</p>
            </div>
          </div>

          {/* Stats */}
          <div className="flex justify-center items-center space-x-12">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <div className="w-3 h-3 bg-emerald-500 rounded-full mr-2"></div>
                <span className="text-2xl font-bold text-gray-900">3X Revenue</span>
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                <span className="text-2xl font-bold text-gray-900">5X Repeat Purchase</span>
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                <span className="text-2xl font-bold text-gray-900">75% Cost Reduction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Features Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {/* Feature 1 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Start, Run, Grow in WhatsApp
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Transform your WhatsApp into a complete business platform. From customer inquiry to order fulfillment, everything happens seamlessly within the app your customers already use daily.
              </p>
              <div className="space-y-4">
                <div className="font-semibold text-gray-900">• We Set You Up</div>
                <div className="font-semibold text-gray-900">• AI takes over</div>
                <div className="font-semibold text-gray-900">• You Scale!</div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-48 h-48 bg-gray-100 rounded-3xl flex items-center justify-center">
                <Square className="w-24 h-24 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="flex justify-center order-2 lg:order-1">
              <div className="w-48 h-48 bg-gray-100 rounded-3xl flex items-center justify-center">
                <Circle className="w-24 h-24 text-gray-400" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Complete Commerce Automation
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Your AI assistant handles product catalogs, processes orders, manages payments, and tracks deliveries. No manual work required from your end.
              </p>
              <div className="space-y-4">
                <div className="font-semibold text-gray-900">• Catalog Management</div>
                <div className="font-semibold text-gray-900">• Order Processing</div>
                <div className="font-semibold text-gray-900">• Payment Integration</div>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Built for Scale
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Whether you're handling 10 customers or 10,000, our platform scales with your business. Advanced analytics help you understand customer behavior and optimize operations.
              </p>
              <div className="space-y-4">
                <div className="font-semibold text-gray-900">• Customer Analytics</div>
                <div className="font-semibold text-gray-900">• Business Insights</div>
                <div className="font-semibold text-gray-900">• Performance Tracking</div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-48 h-48 bg-gray-100 rounded-3xl flex items-center justify-center">
                <Triangle className="w-24 h-24 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Transparent & Affordable
          </h2>
          <p className="text-xl text-gray-600 mb-16">
            No hidden fees.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Monthly</h3>
                <div className="text-4xl font-bold text-gray-900 mb-6">$29.99</div>
                <div className="space-y-3 text-left mb-8">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-gray-900 mr-3" />
                    <span className="text-gray-600">AI Business Assistant</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-gray-900 mr-3" />
                    <span className="text-gray-600">Catalog Builder</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-gray-900 mr-3" />
                    <span className="text-gray-600">Payment Integration</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-gray-900 mr-3" />
                    <span className="text-gray-600">CRM & Analytics</span>
                  </div>
                </div>
                <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-lg">
                  Start Now
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Scale</h3>
                <div className="text-2xl font-bold text-gray-900 mb-6">Pay as you grow</div>
                <p className="text-gray-600 mb-8">
                  Perfect for growing businesses. Only pay for additional WhatsApp messaging costs as your customer base expands.
                </p>
                <Button variant="outline" className="w-full border-gray-300 text-gray-900 hover:bg-gray-50 rounded-lg">
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <blockquote className="text-2xl lg:text-3xl font-medium text-gray-900 mb-8">
            "Clapp transformed our WhatsApp into a complete business platform. Sales increased by 300% in just 2 months."
          </blockquote>
          <div className="text-lg text-gray-600">
            <div className="font-semibold">Rajesh Kumar</div>
            <div>Founder, Delhi Spice Co.</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-gray-900 to-gray-700 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <span className="ml-3 text-xl font-bold text-gray-900">Clapp</span>
            </div>
            <div className="flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Book Demo</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">FAQ</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">WhatsApp</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
