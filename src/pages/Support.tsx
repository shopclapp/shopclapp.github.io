import { MessageCircle, ArrowLeft, Phone, Mail, Clock, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Support = () => {
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
            <span className="text-xl sm:text-2xl font-bold text-gray-900">Support</span>
          </div>
          <p className="text-base sm:text-lg text-gray-600">We're here to help.</p>
        </div>

        {/* Content */}
        <div className="prose prose-gray max-w-none">
          <div className="space-y-8">
            {/* Contact Information */}
            <section>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* WhatsApp Support */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <Phone className="w-6 h-6 text-emerald-600 mr-3" />
                    <h3 className="text-lg font-bold text-gray-900 mb-0">WhatsApp Support</h3>
                  </div>
                  <a
                    href="https://wa.me/14709359595"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-bold text-gray-900 hover:text-gray-700"
                  >
                    +1 (470) 935-9595
                  </a>
                </div>

                {/* Email Support */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <Mail className="w-6 h-6 text-emerald-600 mr-3" />
                    <h3 className="text-lg font-bold text-gray-900 mb-0">Email Support</h3>
                  </div>
                  <a
                    href="mailto:info@clapp.in"
                    className="text-xl font-bold text-gray-900 hover:text-gray-700"
                  >
                    info@clapp.in
                  </a>
                </div>
              </div>
            </section>

            {/* Business Hours */}
            <section className="bg-emerald-50 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 text-emerald-600 mr-3" />
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-0">Business Hours</h2>
              </div>
              <p className="text-lg text-gray-700 font-medium">24/7 global support for all customers.</p>
            </section>

            {/* Escalation Process */}
            <section>
              <div className="flex items-center mb-6">
                <AlertCircle className="w-6 h-6 text-gray-900 mr-3" />
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-0">Escalation Process</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0 font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Raise a ticket via WhatsApp or email.</h4>
                    <p className="text-gray-600 text-sm">Contact us through your preferred channel with details of your issue.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0 font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Receive acknowledgment within 2 hours.</h4>
                    <p className="text-gray-600 text-sm">We'll confirm receipt of your request and provide a ticket number.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0 font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Resolution within 24–48 hours.</h4>
                    <p className="text-gray-600 text-sm">Depending on complexity, we'll work to resolve your issue promptly.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Quick Actions */}
            <section className="bg-gray-50 rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Get Help Now</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/14709359595?text=I%20need%20support%20with%20my%20Clapp%20account"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium text-center transition-colors"
                >
                  Contact via WhatsApp
                </a>
                <a
                  href="mailto:info@clapp.in?subject=Support%20Request"
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

export default Support;