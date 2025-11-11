import React from 'react';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';

interface Testimonial {
  metric: string;
  metricLabel: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  gradientColor: 'purple' | 'blue' | 'green';
}

const gradientStyles = {
  purple: 'from-gradient-purple-start to-gradient-purple-end',
  blue: 'from-gradient-blue to-gradient-purple-start',
  green: 'from-gradient-green to-gradient-blue',
};

const testimonials: Testimonial[] = [
  {
    metric: '+427%',
    metricLabel: 'Conversion Increase',
    quote:
      'Clapp AI transformed how we connect with our customers. The AI agents handle everything from product discovery to checkout seamlessly on WhatsApp.',
    author: 'Priya Sharma',
    role: 'Founder',
    company: 'Organics and You',
    avatar: '/api/placeholder/40/40',
    gradientColor: 'purple',
  },
  {
    metric: '-73%',
    metricLabel: 'CAC Reduction',
    quote:
      "We've seen a massive reduction in customer acquisition costs while scaling our WhatsApp commerce channel. The AI understands our customers better than we expected.",
    author: 'Rahul Verma',
    role: 'CEO',
    company: 'Desify',
    avatar: '/api/placeholder/40/40',
    gradientColor: 'blue',
  },
  {
    metric: '92%',
    metricLabel: 'Tasks Automated',
    quote:
      'Our entire customer journey from discovery to support runs on WhatsApp with Clapp AI. The automation is incredible and customers love the experience.',
    author: 'Ananya Patel',
    role: 'Co-Founder',
    company: 'Bamboostan',
    avatar: '/api/placeholder/40/40',
    gradientColor: 'green',
  },
];

export const TestimonialGrid: React.FC = () => {
  return (
    <section className="py-32 bg-dark-100 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-gradient-purple-start/5 via-transparent to-transparent"></div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 text-foreground">
            Trusted by{' '}
            <span className="bg-gradient-to-r from-gradient-purple-start to-gradient-blue bg-clip-text text-transparent">
              Leading Brands
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            See how top commerce brands are leveraging AI agents to transform their operations
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 bg-dark-200 border-dark-400 hover:border-gradient-purple-start transition-all duration-300 hover:shadow-glow-lg hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${gradientStyles[testimonial.gradientColor]} flex items-center justify-center shadow-glow-md`}
                >
                  <Quote className="h-6 w-6 text-white" />
                </div>
              </div>

              {/* Metric */}
              <div className="mb-6">
                <p
                  className={`text-5xl font-black tracking-tighter bg-gradient-to-r ${gradientStyles[testimonial.gradientColor]} bg-clip-text text-transparent mb-2`}
                >
                  {testimonial.metric}
                </p>
                <p className="text-sm text-muted-foreground font-medium">
                  {testimonial.metricLabel}
                </p>
              </div>

              {/* Quote */}
              <p className="text-foreground leading-relaxed mb-8 text-sm md:text-base">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-dark-400">
                <Avatar className="h-12 w-12 ring-2 ring-dark-400">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                  <AvatarFallback
                    className={`bg-gradient-to-br ${gradientStyles[testimonial.gradientColor]} text-white font-black`}
                  >
                    {testimonial.author
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-bold text-foreground text-sm">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[
            { value: '1,000+', label: 'Brands Using Clapp AI' },
            { value: '$2.4B+', label: 'Revenue Generated' },
            { value: '50M+', label: 'AI Conversations' },
            { value: '99.8%', label: 'Uptime SLA' },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${(index + 3) * 150}ms` }}
            >
              <p className="text-4xl font-black tracking-tighter bg-gradient-purple bg-clip-text text-transparent mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
