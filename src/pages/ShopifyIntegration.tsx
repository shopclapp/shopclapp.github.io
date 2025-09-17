import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, ShoppingCart, Bot, Zap, Users, BarChart3, ArrowRight, CheckCircle } from 'lucide-react';

const ShopifyIntegration = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 md:py-6">
            <div className="flex items-center">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-gray-900 to-gray-700 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-4 h-4 md:w-6 md:h-6 text-white" />
              </div>
              <span className="ml-2 md:ml-3 text-xl md:text-2xl font-bold text-gray-900">Clapp</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <a
                href="https://wa.me/14707342241?text=Connect%20my%20Shopify%20store."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded-lg shadow-sm"
                style={{ textDecoration: 'none' }}
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-12 pb-16 lg:pt-20 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center mb-6 lg:mb-8">
              <div className="w-6 h-6 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full mr-3"></div>
              <span className="text-sm font-medium text-gray-600">Shopify + WhatsApp Integration</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 lg:mb-8 leading-tight">
              Transform Your Shopify Store<br />
              into a <span className="text-emerald-600">WhatsApp Commerce</span> Powerhouse
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 lg:mb-12 max-w-4xl mx-auto">
              Seamlessly connect your Shopify store with WhatsApp to create personalized shopping experiences, 
              automate customer support, and boost sales with AI-powered conversations.
            </p>
            
            <a
              href="https://wa.me/14707342241?text=Connect%20my%20Shopify%20store."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg shadow-sm text-lg"
              style={{ textDecoration: 'none' }}
            >
              Connect Your Store Now
            </a>
          </div>
        </div>
      </section>

      {/* Integration Benefits */}
      <section className="py-12 lg:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Connect Shopify with WhatsApp?
            </h2>
            <p className="text-lg text-gray-600">
              Unlock the power of conversational commerce where your customers already are
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-6 lg:p-8">
                <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center mb-4">
                  <ShoppingCart className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Seamless Shopping</h3>
                <p className="text-gray-600">
                  Browse products, check availability, and complete purchases directly within WhatsApp conversations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-6 lg:p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
                  <Bot className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">AI-Powered Support</h3>
                <p className="text-gray-600">
                  Automated customer service that handles inquiries, order tracking, and product recommendations 24/7.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-6 lg:p-8">
                <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Instant Sync</h3>
                <p className="text-gray-600">
                  Real-time synchronization of inventory, orders, and customer data between Shopify and WhatsApp.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-6 lg:p-8">
                <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Personalized Experience</h3>
                <p className="text-gray-600">
                  Deliver tailored product recommendations and personalized shopping journeys based on customer behavior.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-6 lg:p-8">
                <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Advanced Analytics</h3>
                <p className="text-gray-600">
                  Comprehensive insights into customer interactions, conversion rates, and sales performance.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-6 lg:p-8">
                <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Multi-Channel Support</h3>
                <p className="text-gray-600">
                  Unified customer communication across WhatsApp, SMS, and email for consistent brand experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600">
              Get up and running in minutes with our simple integration process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Connect Your Store</h3>
              <p className="text-gray-600">
                Install our Shopify app and authorize the connection to sync your products, orders, and customers.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Configure WhatsApp</h3>
              <p className="text-gray-600">
                Set up your WhatsApp Business account and customize your AI assistant with your brand voice and preferences.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Start Selling</h3>
              <p className="text-gray-600">
                Launch your WhatsApp commerce experience and watch as customers discover, engage, and purchase through conversations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-12 lg:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Complete E-commerce Integration
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Everything you need to run your Shopify store through WhatsApp, powered by intelligent automation.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Product Catalog Sync</h4>
                    <p className="text-gray-600 text-sm">Automatic synchronization of your entire Shopify product catalog</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Inventory Management</h4>
                    <p className="text-gray-600 text-sm">Real-time inventory updates and stock level notifications</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Order Processing</h4>
                    <p className="text-gray-600 text-sm">Seamless order creation and fulfillment workflow</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Customer Profiles</h4>
                    <p className="text-gray-600 text-sm">Unified customer data across both platforms</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Payment Integration</h4>
                    <p className="text-gray-600 text-sm">Support for multiple payment methods and currencies</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Order Tracking</h4>
                    <p className="text-gray-600 text-sm">Automated shipping updates and delivery notifications</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-full max-w-md bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <ArrowRight className="w-10 h-10 text-gray-600" />
                  </div>
                  <p className="text-gray-600 font-medium">Shopify ↔ WhatsApp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Shopify Store?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join hundreds of merchants who have already revolutionized their customer experience with WhatsApp commerce.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/14707342241?text=Connect%20my%20Shopify%20store."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg shadow-sm text-lg"
              style={{ textDecoration: 'none' }}
            >
              Get Started Now
            </a>
            <a
              href="https://wa.me/14707342241?text=Schedule%20demo%20for%20Shopify%20integration."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-gray-300 hover:border-gray-400 text-gray-700 font-medium rounded-lg text-lg"
              style={{ textDecoration: 'none' }}
            >
              Schedule Demo
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-gray-900 to-gray-700 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <span className="ml-3 text-xl font-bold text-gray-900">Clapp</span>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a href="/" className="text-gray-600 hover:text-gray-900">Home</a>
              <a href="mailto:info@clapp.in" className="text-gray-600 hover:text-gray-900">Support</a>
              <a
                href="https://wa.me/14707342241"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ShopifyIntegration;