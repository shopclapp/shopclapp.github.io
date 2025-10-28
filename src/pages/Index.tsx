import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { MessageCircle, Square, Circle, Triangle, CheckCircle, Menu, X, Instagram } from 'lucide-react';
import WhatsAppDemo from "@/components/WhatsAppDemo";
import AIAgentsCircle from "@/components/AIAgentsCircle";
import metaLogo from "@/assets/meta-logo.png";

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

  const brands = [
    "Organics and You",
    "Delhi Spice Co.",
    "Desify"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 md:py-6">
            <div className="flex items-center">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-primary rounded-lg flex items-center justify-center shadow-sm">
                <MessageCircle className="w-4 h-4 md:w-6 md:h-6 text-primary-foreground" />
              </div>
              <span className="ml-2 md:ml-3 text-xl md:text-2xl font-bold text-foreground">Clapp</span>
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
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors font-medium">Features</a>
              <a href="#roadmap" className="text-muted-foreground hover:text-foreground transition-colors font-medium">Roadmap</a>
              <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors font-medium">Pricing</a>
              <Link to="/shopify-integration" className="text-muted-foreground hover:text-foreground transition-colors font-medium">Shopify</Link>
              <a
                href="https://wa.me/14707342241?text=Book%20demo."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2.5 rounded-lg shadow-sm font-semibold transition-all hover:shadow-md"
                style={{ textDecoration: 'none' }}
              >
                Book Free Demo
              </a>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden border-t border-border py-4">
              <div className="flex flex-col space-y-4">
                <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors px-4 py-2 font-medium" onClick={() => setMobileMenuOpen(false)}>Features</a>
                <a href="#roadmap" className="text-muted-foreground hover:text-foreground transition-colors px-4 py-2 font-medium" onClick={() => setMobileMenuOpen(false)}>Roadmap</a>
                <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors px-4 py-2 font-medium" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
                <Link to="/shopify-integration" className="text-muted-foreground hover:text-foreground transition-colors px-4 py-2 font-medium" onClick={() => setMobileMenuOpen(false)}>Shopify</Link>
                <a
                  href="https://wa.me/14707342241?text=Book%20demo."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-3 rounded-lg shadow-sm mx-4 text-center font-semibold"
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
      <section className="relative pt-12 sm:pt-16 lg:pt-24 pb-16 sm:pb-20 lg:pb-28 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-muted/30 to-white"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-left">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-foreground">Conversational Commerce Made Simple</span>
              </div>
              
              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 leading-[1.1]">
                Sell Where Your<br />
                Customers Are
              </h1>
              
              {/* Subheading */}
              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
                One platform. Every chat channel. Shopify synced. Revenue multiplied.
              </p>
              
              {/* Key Stats */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>500M+ WhatsApp users in India</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>80%+ open rates</span>
                </div>
              </div>
              
              {/* Multi-Channel Badge */}
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-accent/10 border border-accent/30 rounded-lg mb-8">
                <span className="text-sm font-medium text-foreground">📱 WhatsApp Live</span>
                <span className="text-sm text-muted-foreground">•</span>
                <span className="text-sm text-muted-foreground">Instagram, Messenger, Webchat: Q1-Q2 2025</span>
              </div>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="https://wa.me/14707342241?text=Book%20demo."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  style={{ textDecoration: 'none' }}
                >
                  Start Selling on Chat
                </a>
                <a
                  href="#roadmap"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-border hover:border-primary bg-background hover:bg-primary/5 text-foreground font-semibold rounded-xl transition-all duration-300"
                  style={{ textDecoration: 'none' }}
                >
                  See the Roadmap
                </a>
              </div>
              
              {/* Social Proof */}
              <div className="mt-12 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">Trusted by 100+ Indian brands</p>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
                  {brands.slice(0, 3).map((brand, index) => (
                    <span key={index} className="text-sm font-semibold text-foreground opacity-60 hover:opacity-100 transition-opacity">
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* WhatsApp Demo / Multi-Channel Visual */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                {/* Main WhatsApp Demo */}
                <div className="relative z-10">
                  <WhatsAppDemo />
                </div>
                
                {/* Coming Soon Channels - Floating Cards */}
                <div className="absolute -right-4 top-1/4 z-0 opacity-40 hover:opacity-70 transition-opacity">
                  <div className="bg-white/80 backdrop-blur-sm border border-border rounded-lg px-3 py-2 shadow-lg">
                    <div className="flex items-center gap-2">
                      <Instagram className="w-4 h-4 text-pink-600" />
                      <span className="text-xs font-medium text-foreground">Coming Q1 2025</span>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -left-4 bottom-1/4 z-0 opacity-40 hover:opacity-70 transition-opacity">
                  <div className="bg-white/80 backdrop-blur-sm border border-border rounded-lg px-3 py-2 shadow-lg">
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-blue-600" />
                      <span className="text-xs font-medium text-foreground">Messenger Q1 2025</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Scrolling Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 font-medium">
              Trusted by growing businesses
            </p>
          </div>
          
          <div className="relative overflow-hidden bg-white rounded-2xl border border-emerald-100 shadow-sm p-6 sm:p-8">
            <div className="flex animate-scroll">
              {/* First set of brands */}
              {brands.map((brand, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 mx-6 sm:mx-8 lg:mx-12 text-center"
                >
                  <span className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 hover:text-emerald-600 transition-colors">
                    {brand}
                  </span>
                </div>
              ))}
              {/* Duplicate set for seamless scrolling */}
              {brands.map((brand, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 mx-6 sm:mx-8 lg:mx-12 text-center"
                >
                  <span className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 hover:text-emerald-600 transition-colors">
                    {brand}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Subtle emerald accent line */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Feature Showcase Section */}
      <section id="features" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12 lg:mb-16">
            <div className="text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 lg:mb-6">
                <Square className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">WhatsApp First</h3>
              <p className="text-sm sm:text-base text-gray-600 px-2 sm:px-4">Where your customers already are. No need to drive traffic elsewhere.</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 lg:mb-6">
                <Circle className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">AI Handles All</h3>
              <p className="text-sm sm:text-base text-gray-600 px-2 sm:px-4">Sales, operations, and CRM — no team required to get started.</p>
            </div>
            
            <div className="text-center sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 lg:mb-6">
                <Triangle className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Fast Setup</h3>
              <p className="text-sm sm:text-base text-gray-600 px-2 sm:px-4">Go live in 3–5 working days with full support and guidance.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-8 lg:space-x-12">
            <div className="text-center">
              <div className="flex items-center justify-center mb-1 sm:mb-2">
                <div className="w-3 h-3 bg-emerald-500 rounded-full mr-2"></div>
                <span className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">3X Revenue</span>
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-1 sm:mb-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                <span className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">5X Repeat Purchase</span>
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-1 sm:mb-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                <span className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">75% Cost Reduction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Features Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Feature 1 */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-24">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6">
                Start, Run, Grow in WhatsApp
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-4 sm:mb-6 lg:mb-8">
                Transform your WhatsApp into a complete business platform. From customer inquiry to order fulfillment, everything happens seamlessly within the app your customers already use daily.
              </p>
              <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                <div className="font-semibold text-gray-900 text-sm sm:text-base">• We Set You Up</div>
                <div className="font-semibold text-gray-900 text-sm sm:text-base">• AI takes over</div>
                <div className="font-semibold text-gray-900 text-sm sm:text-base">• You Scale!</div>
              </div>
            </div>
            <div className="flex justify-center order-1 lg:order-2">
              <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-gray-100 rounded-3xl flex items-center justify-center">
                <Square className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-24">
            <div className="flex justify-center order-1 lg:order-1">
              <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-gray-100 rounded-3xl flex items-center justify-center">
                <Circle className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 text-gray-400" />
              </div>
            </div>
            <div className="order-2 lg:order-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6">
                Complete Commerce Automation
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-4 sm:mb-6 lg:mb-8">
                Your AI assistant handles product catalogs, processes orders, manages payments, and tracks deliveries. No manual work required from your end.
              </p>
              <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-gray-900 rounded-full mr-2 sm:mr-3 mt-1.5 flex-shrink-0"></div>
                  <span className="font-semibold text-gray-900 text-sm sm:text-base">Catalog Management</span>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-gray-900 rounded-full mr-2 sm:mr-3 mt-1.5 flex-shrink-0"></div>
                  <span className="font-semibold text-gray-900 text-sm sm:text-base">Order Processing</span>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-gray-900 rounded-full mr-2 sm:mr-3 mt-1.5 flex-shrink-0"></div>
                  <span className="font-semibold text-gray-900 text-sm sm:text-base">Payment Integration</span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6">
                Built for Scale
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-4 sm:mb-6 lg:mb-8">
                Whether you're handling 10 customers or 10,000, our platform scales with your business. Advanced analytics help you understand customer behavior and optimize operations.
              </p>
              <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                <div className="font-semibold text-gray-900 text-sm sm:text-base">• Customer Analytics</div>
                <div className="font-semibold text-gray-900 text-sm sm:text-base">• Business Insights</div>
                <div className="font-semibold text-gray-900 text-sm sm:text-base">• Performance Tracking</div>
              </div>
            </div>
            <div className="flex justify-center order-1 lg:order-2">
              <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-gray-100 rounded-3xl flex items-center justify-center">
                <Triangle className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Transparent & Affordable
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-12 lg:mb-16">
            No hidden fees.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Trial</h3>
                <div className="mb-4 sm:mb-6 flex items-baseline justify-center">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">₹2,500</span>
                  <span className="text-sm text-gray-500 ml-1">/one-time</span>
                </div>
                <p className="text-gray-600 mb-2 text-xs sm:text-sm lg:text-base">
                  To cover setup cost and infrastructure.
                </p>
                <p className="text-gray-600 mb-4 sm:mb-6 lg:mb-8 text-xs sm:text-sm lg:text-base">
                  Try our platform risk-free and see the results for yourself.
                </p>
                <a
                  href="https://buy.stripe.com/aFa9ATfNY2cfaW17QTcbC0b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-lg h-10 sm:h-12 text-sm sm:text-base flex items-center justify-center transition-colors"
                  style={{ textDecoration: 'none' }}
                >
                  Start Trial
                </a>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Pro</h3>
                <div className="mb-4 sm:mb-6 flex items-baseline justify-center">
                  <span className="text-lg sm:text-xl text-gray-400 line-through mr-2">₹10,000</span>
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">₹7,500</span>
                  <span className="text-sm text-gray-500 ml-1">/m</span>
                </div>
                
                {/* AI Agents Circle */}
                <AIAgentsCircle />
                
                <a
                  href="https://buy.stripe.com/14A00jbxIeZ16FL2wzcbC09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-lg h-10 sm:h-12 text-sm sm:text-base flex items-center justify-center"
                  style={{ textDecoration: 'none' }}
                >
                  Enable Now
                </a>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">+</h3>
                <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Pay as you scale</div>
                <p className="text-gray-600 mb-4 sm:mb-6 lg:mb-8 text-xs sm:text-sm lg:text-base">
                  Perfect for growing businesses. Only pay for additional WhatsApp messaging costs as your customers grow.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
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
                  <div className="text-center px-2 sm:px-4">
                    <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium text-gray-900 mb-4 sm:mb-6 lg:mb-8 leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="text-sm sm:text-base lg:text-lg text-gray-600">
                      <div className="font-semibold">{testimonial.name}</div>
                      <div>{testimonial.title}</div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 sm:left-4 lg:-left-12" />
            <CarouselNext className="right-2 sm:right-4 lg:-right-12" />
          </Carousel>
        </div>
      </section>

      {/* Meta Tech Provider Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              <span className="text-sm font-medium text-gray-600">Official Technology Provider</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meta Tech Provider
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              As an official Meta Tech Provider and WhatsApp Business Solution Provider, we deliver enterprise-grade solutions powered by Meta's global infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-12">
            <Card className="border-0 shadow-sm bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Meta Tech Provider</h3>
                <p className="text-sm text-gray-600">
                  Official Meta Technology Provider with WhatsApp Business Solution Provider status
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Enterprise Infrastructure</h3>
                <p className="text-sm text-gray-600">
                  Built on Meta's trusted platform used by billions worldwide
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Direct API Access</h3>
                <p className="text-sm text-gray-600">
                  Premium access to WhatsApp Business API and Meta technologies
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Partnership Logo Display */}
          <div className="flex flex-col items-center justify-center space-y-6 py-8 border-t border-gray-100">
            <p className="text-sm text-gray-500 font-medium">Technology powered by</p>
            
            {/* Meta Logo */}
            <div className="flex items-center justify-center space-x-8">
              <div className="flex flex-col items-center space-y-3">
                <div className="relative">
                  <img 
                    src={metaLogo} 
                    alt="Meta" 
                    className="h-8 w-auto"
                  />
                </div>
                <span className="text-xs text-gray-500">Meta Tech Provider</span>
              </div>

              <div className="h-12 w-px bg-gray-300"></div>
              
              <div className="flex flex-col items-center space-y-3">
                <MessageCircle className="w-10 h-10 text-emerald-600" />
                <span className="text-xs text-gray-500">WhatsApp Business</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 lg:py-12 border-t border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-gray-900 to-gray-700 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-3 h-3 sm:w-5 sm:h-5 text-white" />
              </div>
              <span className="ml-2 sm:ml-3 text-base sm:text-lg lg:text-xl font-bold text-gray-900">Clapp</span>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 lg:gap-8 text-xs sm:text-sm lg:text-base">
              <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
              <Link to="/privacy-policy" className="text-gray-600 hover:text-gray-900">Privacy Policy</Link>
              <Link to="/data-security" className="text-gray-600 hover:text-gray-900">Data Security</Link>
              <Link to="/support" className="text-gray-600 hover:text-gray-900">Support</Link>
              <Link to="/partners" className="text-gray-600 hover:text-gray-900">Partners</Link>
              <Link to="/shopify-integration" className="text-gray-600 hover:text-gray-900">Shopify Integration</Link>
              <a href="#" className="text-gray-600 hover:text-gray-900">Book Demo</a>
              <a
                href="https://www.instagram.com/just_clapp/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 flex items-center"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5 mr-1" />
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
