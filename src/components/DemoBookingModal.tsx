import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Card } from '@/components/ui/card';
import { Calendar, MessageCircle } from 'lucide-react';

interface DemoBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoBookingModal: React.FC<DemoBookingModalProps> = ({ isOpen, onClose }) => {
  const handleCalendlyClick = () => {
    // In a real implementation, this would open Calendly
    // For now, we'll open WhatsApp with a scheduling message
    window.open(
      'https://wa.me/YOUR_NUMBER?text=Hi! I\'d like to schedule a demo of Clapp AI.',
      '_blank'
    );
    onClose();
  };

  const handleWhatsAppClick = () => {
    window.open(
      'https://wa.me/YOUR_NUMBER?text=Hi! I have some questions about Clapp AI.',
      '_blank'
    );
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-dark-200 border-dark-400">
        <DialogHeader>
          <DialogTitle className="text-2xl font-black text-foreground text-center">
            How would you like to connect?
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-6">
          {/* Option 1: Schedule Demo */}
          <Card
            className="p-6 cursor-pointer bg-dark-300 border-dark-400 hover:border-gradient-purple-start hover:shadow-glow-md transition-all duration-300 hover:-translate-y-1"
            onClick={handleCalendlyClick}
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-purple flex items-center justify-center mb-4 shadow-glow-md">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-black text-foreground mb-2 text-lg">Schedule a Demo Meeting</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Pick a time that works for you
              </p>
              <ul className="space-y-2 text-xs text-muted-foreground text-left w-full">
                <li className="flex items-center gap-2">
                  <span className="text-gradient-green">✓</span> 30-minute demo
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gradient-green">✓</span> See real examples
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gradient-green">✓</span> Get ROI analysis
                </li>
              </ul>
            </div>
          </Card>

          {/* Option 2: WhatsApp */}
          <Card
            className="p-6 cursor-pointer bg-dark-300 border-dark-400 hover:border-green-500 hover:shadow-glow-green transition-all duration-300 hover:-translate-y-1"
            onClick={handleWhatsAppClick}
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gradient-green to-green-600 flex items-center justify-center mb-4 shadow-glow-green">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-black text-foreground mb-2 text-lg">Chat on WhatsApp Now</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Get instant answers to your questions
              </p>
              <ul className="space-y-2 text-xs text-muted-foreground text-left w-full">
                <li className="flex items-center gap-2">
                  <span className="text-gradient-green">✓</span> Instant response
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gradient-green">✓</span> Flexible scheduling
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gradient-green">✓</span> Quick questions
                </li>
              </ul>
            </div>
          </Card>
        </div>

        <div className="text-center text-xs text-muted-foreground border-t border-dark-400 pt-4">
          Both options available 24/7 • No credit card required
        </div>
      </DialogContent>
    </Dialog>
  );
};
