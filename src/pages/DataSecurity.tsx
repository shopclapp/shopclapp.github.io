import { MessageCircle, ArrowLeft, Shield, Lock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const DataSecurity = () => {
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
            <span className="text-xl sm:text-2xl font-bold text-gray-900">Data Security & Compliance</span>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-gray max-w-none">
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 mb-8">
            <div className="flex items-center mb-4">
              <Shield className="w-6 h-6 text-emerald-600 mr-3" />
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-0 font-medium">
                Clapp is committed to protecting customer data and ensuring compliance with global standards.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {/* Security Practices */}
            <section>
              <div className="flex items-center mb-4">
                <Lock className="w-6 h-6 text-gray-900 mr-3" />
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-0">Security Practices</h2>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>End-to-end encryption for all WhatsApp communication.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Hosting on AWS cloud (ISO 27001, SOC2, GDPR compliant).</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Regular vulnerability checks and monitoring.</span>
                </li>
              </ul>
            </section>

            {/* Compliance */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Compliance</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-gray-900">GDPR</div>
                  <div className="text-sm text-gray-600">(Europe)</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-gray-900">DPDP</div>
                  <div className="text-sm text-gray-600">(India)</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-gray-900">CCPA</div>
                  <div className="text-sm text-gray-600">(California, USA)</div>
                </div>
              </div>
            </section>

            {/* Customer Control */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Customer Control</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="font-semibold text-gray-900 mr-2">•</span>
                  <span>Customers own their data.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-gray-900 mr-2">•</span>
                  <span>Data deletion and export available upon request.</span>
                </li>
              </ul>
            </section>

            {/* Contact */}
            <section className="bg-gray-50 rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Need More Information?</h2>
              <p className="text-gray-700">
                For full details, contact{' '}
                <a href="mailto:info@clapp.in" className="text-gray-900 font-semibold hover:text-gray-700">
                  info@clapp.in
                </a>
              </p>
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

export default DataSecurity;