import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { MessageCircle, Square, Circle, Triangle, CheckCircle, Menu, X } from 'lucide-react';
import WhatsAppDemo from "@/components/WhatsAppDemo"; // Import the new component

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const testimonials = [
    {
      quote: "Clapp transformed our WhatsApp into a complete business platform. Sales increased by 300% in just 2 months.",
      name: "Rajesh Kumar",
      title: "Founder, Delhi Spice Co."
    },
    {
      quote: "The AI automation has revolutionized how we handle customer inquiries. Our response time improved dramatically.",
      name: "Sheetal",
      title: "Founder, Desify"
    },
    {
      quote: "WhatsApp commerce was a game-changer for our organic products business. Customer engagement is at an all-time high.",
      name: "Sanil",
      title: "Founder, Organics and You"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ... (Navigation remains the same) ... */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 md:py-6">
            <div className="flex items-center">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-gray-900 to-gray-700 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-4 h-4 md:w-6 md:h-6 text-white" />
              </div>
              <span className="ml-2 md:ml-3 text-xl md:text-2xl font-bold text-gray-900">Clapp</span>
            </div>
            
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-600 hover:text-gray-900 p-2"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
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

          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-100 py-4">
              <div className="flex flex-col space-y-4">
                <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors px-4 py-2" onClick={() => setMobileMenuOpen(false)}>Features</a>
                <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors px-4 py-2" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
                <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors px-4 py-2" onClick={() => setMobileMenuOpen(false)}>Contact</a>
                <a
                  href="https://wa.me/14707342241?text=Book%20demo."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-3 rounded-lg shadow-sm mx-4 text-center"
                  style={{ textDecoration: 'none' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book Free Demo
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-12 md:pt-20 pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center mb-6 md:mb-8">
            <div className="w-5 h-5 md:w-6 md:h-6 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full mr-2 md:mr-3"></div>
            <span className="text-xs md:text-sm font-medium text-gray-600">Redefining Commerce</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 md:mb-8 leading-tight">
            AI-Powered.<br />
            WhatsApp-Native.
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 md:mb-12 max-w-3xl mx-auto px-4">
            Run your entire business on WhatsApp!
          </p>
          
          <a
            href="https://wa.me/14707342241?text=Book%20demo."
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full max-w-md mx-auto h-12 md:h-12 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg shadow-sm flex items-center justify-center text-center mb-12 md:mb-16 text-sm md:text-base"
            style={{ textDecoration: 'none' }}
          >
            Book Free Demo
          </a>
        </div>
      </section>

      {/* NEW: Demo Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              See It In Action
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Watch our AI handle a complete purchase in real-time.
            </p>
          </div>
          <WhatsAppDemo />
        </div>
      </section>

      {/* ... (Rest of the sections remain the same) ... */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-12 md:mb-16">
            <div className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6">
                <Square className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">WhatsApp First</h3>
              <p className="text-gray-600 text-sm md:text-base px-4">Where your customers already are. No need to drive traffic elsewhere.</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6">
                <Circle className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">AI Handles All</h3>
              <p className="text-gray-600 text-sm md:text-base px-4">Sales, operations, and CRM — no team required to get started.</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6">
                <Triangle className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">Fast Setup</h3>
              <p className="text-gray-600 text-sm md:text-base px-4">Go live in 3–5 working days with full support and guidance.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8 md:space-x-12">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <div className="w-3 h-3 bg-emerald-500 rounded-full mr-2"></div>
                <span className="text-xl md:text-2xl font-bold text-gray-900">3X Revenue</span>
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                <span className="text-xl md:text-2xl font-bold text-gray-900">5X Repeat Purchase</span>
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                <span className="text-xl md:text-2xl font-bold text-gray-900">75% Cost Reduction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Features Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Feature 1 */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center mb-16 md:mb-24">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                Start, Run, Grow in WhatsApp
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">
                Transform your WhatsApp into a complete business platform. From customer inquiry to order fulfillment, everything happens seamlessly within the app your customers already use daily.
              </p>
              <div className="space-y-3 md:space-y-4">
                <div className="font-semibold text-gray-900">• We Set You Up</div>
                <div className="font-semibold text-gray-900">• AI takes over</div>
                <div className="font-semibold text-gray-900">• You Scale!</div>
              </div>
            </div>
            <div className="flex justify-center order-1 lg:order-2">
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-gray-100 rounded-3xl flex items-center justify-center">
                <Square className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center mb-16 md:mb-24">
            <div className="flex justify-center order-2 lg:order-1">
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-gray-100 rounded-3xl flex items-center justify-center">
                <Circle className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-gray-400" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                Complete Commerce Automation
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">
                Your AI assistant handles product catalogs, processes orders, manages payments, and tracks deliveries. No manual work required from your end.
              </p>
              <div className="space-y-3 md:space-y-4">
                <div className="font-semibold text-gray-900">• Catalog Management</div>
                <div className="font-semibold text-gray-900">• Order Processing</div>
                <div className="font-semibold text-gray-900">• Payment Integration</div>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                Built for Scale
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">
                Whether you're handling 10 customers or 10,000, our platform scales with your business. Advanced analytics help you understand customer behavior and optimize operations.
              </p>
              <div className="space-y-3 md:space-y-4">
                <div className="font-semibold text-gray-900">• Customer Analytics</div>
                <div className="font-semibold text-gray-900">• Business Insights</div>
                <div className="font-semibold text-gray-900">• Performance Tracking</div>
              </div>
            </div>
            <div className="flex justify-center order-1 lg:order-2">
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-gray-100 rounded-3xl flex items-center justify-center">
                <Triangle className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Transparent & Affordable
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-12 md:mb-16">
            No hidden fees.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Monthly</h3>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">$29.99</div>
                <div className="space-y-3 text-left mb-6 md:mb-8">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-gray-900 mr-2 md:mr-3 flex-shrink-0" />
                    <span className="text-gray-600 text-sm md:text-base">AI Business Assistant</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-gray-900 mr-2 md:mr-3 flex-shrink-0" />
                    <span className="text-gray-600 text-sm md:text-base">Catalog Builder</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-gray-900 mr-2 md:mr-3 flex-shrink-0" />
                    <span className="text-gray-600 text-sm md:text-base">Payment Integration</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-gray-900 mr-2 md:mr-3 flex-shrink-0" />
                    <span className="text-gray-600 text-sm md:text-base">CRM & Analytics</span>
                  </div>
                </div>
                <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-lg h-10 md:h-12">
                  Start Now
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Scale</h3>
                <div className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Pay as you grow</div>
                <p className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base">
                  Perfect for growing businesses. Only pay for additional WhatsApp messaging costs as your customer base expands.
                </p>
                <Button variant="outline" className="w-full border-gray-300 text-gray-900 hover:bg-gray-50 rounded-lg h-10 md:h-12">
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="text-center">
                    <blockquote className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray-900 mb-6 md:mb-8 leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="text-base md:text-lg text-gray-600">
                      <div className="font-semibold">{testimonial.name}</div>
                      <div>{testimonial.title}</div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 md:-left-12" />
            <CarouselNext className="right-4 md:-right-12" />
          </Carousel>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 md:py-12 border-t border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center">
              <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-gray-900 to-gray-700 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-3 h-3 md:w-5 md:h-5 text-white" />
              </div>
              <span className="ml-2 md:ml-3 text-lg md:text-xl font-bold text-gray-900">Clapp</span>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-sm md:text-base">
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
