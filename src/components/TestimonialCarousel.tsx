import { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  logo: string;
  metric: string;
  metricValue: string;
  bgGradient: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "From 139 conversations to ₹784K monthly opportunity in just weeks. We finally have a way to engage customers after the sale. Repeat orders shot up dramatically.",
    author: "Founder",
    role: "CEO",
    company: "Sustainable Living Brand",
    logo: "🌿",
    metric: "Customer Growth",
    metricValue: "+52.5%",
    bgGradient: "from-green-500/10 to-emerald-500/10"
  },
  {
    quote: "Our community expects personal curation at scale. Chat with AI assistance lets us deliver that premium experience to every customer, 24/7.",
    author: "Founder",
    role: "CEO",
    company: "Gourmet Food Brand",
    logo: "🍽️",
    metric: "Customer LTV",
    metricValue: "₹25K+",
    bgGradient: "from-orange-500/10 to-amber-500/10"
  },
  {
    quote: "Setup took 2 hours. Revenue impact was visible in week 1. Moving from email to chat was the best decision we made for our D2C brand.",
    author: "Founder",
    role: "CEO",
    company: "Fashion & Lifestyle Brand",
    logo: "🛍️",
    metric: "Conversion Rate",
    metricValue: "+180%",
    bgGradient: "from-purple-500/10 to-pink-500/10"
  }
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-subtle relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.02em] mb-4">
            Voice of <span className="gradient-text-primary">Our Customers</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            See how Indian D2C brands are multiplying revenue through conversational AI
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="relative max-w-5xl mx-auto">
          <div className={`bg-gradient-to-br ${current.bgGradient} rounded-3xl p-1`}>
            <Card className="bg-white/95 backdrop-blur-sm p-8 md:p-12 rounded-3xl border-0">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                {/* Left: Quote */}
                <div className="md:col-span-2">
                  <Quote className="w-12 h-12 text-primary/20 mb-4" />
                  <p className="text-xl md:text-2xl font-medium text-foreground mb-6 leading-relaxed">
                    "{current.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="text-5xl">{current.logo}</div>
                    <div>
                      <div className="font-semibold tracking-[-0.01em] text-lg">{current.author}</div>
                      <div className="text-sm text-muted-foreground">
                        {current.role}, {current.company}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Metric */}
                <div className="md:col-span-1">
                  <div className="glass-card p-8 text-center">
                    <div className="text-5xl md:text-6xl font-semibold tracking-[-0.02em] gradient-text-hero mb-2">
                      {current.metricValue}
                    </div>
                    <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                      {current.metric}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'w-12 h-3 bg-primary'
                  : 'w-3 h-3 bg-primary/30 hover:bg-primary/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-semibold tracking-[-0.01em] text-primary mb-1">10M+</div>
            <div className="text-sm text-muted-foreground">Conversations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-semibold tracking-[-0.01em] text-primary mb-1">85%</div>
            <div className="text-sm text-muted-foreground">Automation Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-semibold tracking-[-0.01em] text-primary mb-1">10x</div>
            <div className="text-sm text-muted-foreground">ROI</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-semibold tracking-[-0.01em] text-primary mb-1">100+</div>
            <div className="text-sm text-muted-foreground">Happy Brands</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
