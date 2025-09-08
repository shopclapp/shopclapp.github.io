import { MessageCircle, ArrowLeft, Users, Target, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Partners = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 md:py-6">
            <div className="flex items-center">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-gray-900 to-gray-700 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-4 h-4 md:w-6 md:h-6 text-white" />
              </div>
              <span className="ml-2 md:ml-3 text-xl md:text-2xl font-bold text-gray-900">Clapp</span>
            </div>
            
            <Link
              to="/"
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Title */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center mb-4">
            <div className="w-3 h-3 bg-emerald-500 rounded-full mr-2"></div>
            <span className="text-xl sm:text-2xl font-bold text-gray-900">Clapp as a WhatsApp BSP Partner</span>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-gray max-w-none">
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 mb-8">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-0">
              Clapp is building the next generation of Agentic AI infrastructure on WhatsApp.
            </p>
          </div>

          <div className="space-y-8">
            {/* BSP Application */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                We are applying to become an official WhatsApp Business Solution Provider (BSP) to:
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-emerald-50 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <MessageCircle className="w-6 h-6 text-emerald-600 mr-3" />
                    <h3 className="font-semibold text-gray-900">Direct API Access</h3>
                  </div>
                  <p className="text-sm text-gray-700">
                    Provide businesses with direct WhatsApp API access.
                  </p>
                </div>
                
                <div className="bg-blue-50 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <Users className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="font-semibold text-gray-900">AI-Powered Journeys</h3>
                  </div>
                  <p className="text-sm text-gray-700">
                    Build AI-powered customer journeys across commerce, service, and engagement.
                  </p>
                </div>
                
                <div className="bg-purple-50 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <Building2 className="w-6 h-6 text-purple-600 mr-3" />
                    <h3 className="font-semibold text-gray-900">Global Support</h3>
                  </div>
                  <p className="text-sm text-gray-700">
                    Support global enterprises and startups with secure, scalable infrastructure.
                  </p>
                </div>
              </div>
            </section>

            {/* Our Customers Today */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Our Customers Today</h2>
              <div className="space-y-6">
                <div className="border border-gray-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Desify</h3>
                  <p className="text-gray-700">
                    Global e-commerce for Indian sweets/snacks → WhatsApp commerce + customer support.
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">OAY (Organics and You)</h3>
                  <p className="text-gray-700">
                    Premium Organic brand → WhatsApp catalog + AI-powered end to end commerce.
                  </p>
                </div>
              </div>
            </section>

            {/* Our Mission */}
            <section className="bg-gray-50 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center mb-4">
                <Target className="w-6 h-6 text-emerald-600 mr-3" />
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-0">Our Mission</h2>
              </div>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                To make WhatsApp the operating system for businesses by enabling agentic AI-driven customer experiences.
              </p>
            </section>

            {/* Contact for Partnership */}
            <section className="bg-emerald-50 rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Interested in Partnership?</h3>
              <p className="text-gray-700 mb-4">
                Learn more about our WhatsApp BSP initiatives and partnership opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/14707342241?text=I'm%20interested%20in%20partnership%20opportunities"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium text-center transition-colors"
                >
                  Contact via WhatsApp
                </a>
                <a
                  href="mailto:info@clapp.in?subject=Partnership%20Inquiry"
                  className="flex-1 border border-gray-300 hover:border-gray-400 text-gray-900 px-6 py-3 rounded-lg font-medium text-center transition-colors"
                >
                  Send Email
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-sm text-gray-500">
            © 2024 Clapp. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Partners;