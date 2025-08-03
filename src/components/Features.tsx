
import { Bot, Zap, Shield, BarChart3, MessageSquare, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Bot,
      title: 'AI-Powered Automation',
      description: 'Smart chatbots that understand context and provide human-like responses',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: MessageSquare,
      title: 'Broadcast Campaigns',
      description: 'Send personalized messages to thousands of customers instantly',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Users,
      title: 'Contact Management',
      description: 'Organize and segment your contacts with powerful CRM features',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Track performance with detailed insights and reporting',
      color: 'bg-orange-100 text-orange-600'
    },
    {
      icon: Zap,
      title: 'Quick Setup',
      description: 'Get started in minutes with our easy integration process',
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security with end-to-end encryption',
      color: 'bg-red-100 text-red-600'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything you need to grow your business on WhatsApp
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From customer support to marketing campaigns, we've got all the tools to help you succeed
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="group p-6 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
