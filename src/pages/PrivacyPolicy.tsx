import { MessageCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
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
            <span className="text-xl sm:text-2xl font-bold text-gray-900">Privacy Policy</span>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-gray max-w-none">
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 mb-8">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-0">
              At Clapp, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect information when you use our services.
            </p>
          </div>

          <div className="space-y-8">
            {/* Information We Collect */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="font-semibold text-gray-900 mr-2">•</span>
                  <span><strong>Account information:</strong> name, email, phone number, business details.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-gray-900 mr-2">•</span>
                  <span><strong>Usage information:</strong> how you interact with our WhatsApp-based services.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-gray-900 mr-2">•</span>
                  <span><strong>Transaction data:</strong> orders, payments, and communication logs (where applicable).</span>
                </li>
              </ul>
            </section>

            {/* How We Use Information */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">How We Use Information</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="font-semibold text-gray-900 mr-2">•</span>
                  <span>To provide and improve our services.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-gray-900 mr-2">•</span>
                  <span>To personalize customer journeys and experiences.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-gray-900 mr-2">•</span>
                  <span>To ensure compliance with applicable laws.</span>
                </li>
              </ul>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="font-semibold text-gray-900 mr-2">•</span>
                  <span>Data is stored on secure servers (AWS, SOC2 compliant).</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-gray-900 mr-2">•</span>
                  <span>Information is encrypted at rest and in transit.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-gray-900 mr-2">•</span>
                  <span>We never sell or share your personal information with third parties for advertising.</span>
                </li>
              </ul>
            </section>

            {/* Compliance */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Compliance</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="font-semibold text-gray-900 mr-2">•</span>
                  <span>We follow GDPR (Europe) and India DPDP regulations.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-gray-900 mr-2">•</span>
                  <span>Users can request data deletion anytime by writing to <a href="mailto:info@clapp.in" className="text-gray-900 font-semibold hover:text-gray-700">info@clapp.in</a>.</span>
                </li>
              </ul>
            </section>

            {/* Contact Us */}
            <section className="bg-gray-50 rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700">
                For questions regarding this policy, email{' '}
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

export default PrivacyPolicy;