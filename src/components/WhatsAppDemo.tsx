
import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Send, Phone, Video, MoreVertical } from 'lucide-react';

// Define the structure for messages, products, and cart items
interface Message {
  id: number;
  type: 'user' | 'bot';
  content: React.ReactNode;
  timestamp: string;
}

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
}

interface CartItem {
  product: Product;
  quantity: number;
}

// Product data for the demo
const products: Product[] = [
  { id: 1, name: "Premium Coffee Beans", price: "$24.99", image: "☕", description: "Organic Ethiopian beans" },
  { id: 2, name: "Artisan Tea Set", price: "$34.99", image: "🍵", description: "Handcrafted ceramic tea set" },
  { id: 3, name: "Gourmet Chocolate", price: "$19.99", image: "🍫", description: "Belgian dark chocolate" }
];

// Helper to calculate cart total
const calculateTotal = (items: CartItem[]) => {
  return items.reduce((total, item) => total + parseFloat(item.product.price.replace('$', '')) * item.quantity, 0).toFixed(2);
};

// Demo steps with JSX content for rich display
const demoSteps = [
  { type: 'user' as const, content: 'Hello', delay: 1000 },
  { type: 'bot' as const, content: 'Hello! Welcome to our store 👋 I\'m your AI shopping assistant. How can I help?', delay: 2000 },
  { 
    type: 'bot' as const, 
    content: (
      <div>
        <p className="mb-2">Here's our current product catalog:</p>
        <div className="space-y-2">
          {products.map(p => (
            <div key={p.id} className="bg-white p-2 rounded-lg border flex items-center gap-3">
              <span className="text-2xl">{p.image}</span>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900">{p.name}</h4>
                <p className="text-sm text-gray-600">{p.description}</p>
                <p className="font-bold text-green-600">{p.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ), 
    delay: 2500 
  },
  { type: 'user' as const, content: 'I\'d like 2 Premium Coffee Beans and 1 Gourmet Chocolate', delay: 2000 },
  { 
    type: 'bot' as const, 
    content: (
      <div>
        <p className="mb-2">Great choice! Here is your cart:</p>
        <div className="bg-white p-3 rounded-lg border">
          <h4 className="font-semibold text-gray-900 mb-2">🛒 Your Cart</h4>
          {[ { product: products[0], quantity: 2 }, { product: products[2], quantity: 1 } ].map((item, index) => (
            <div key={index} className="flex justify-between items-center py-1">
              <span className="text-sm">{item.quantity}x {item.product.name}</span>
              <span className="text-sm font-semibold">${(parseFloat(item.product.price.replace('$', '')) * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="border-t mt-2 pt-2 flex justify-between items-center font-bold">
            <span>Total:</span>
            <span>${calculateTotal([ { product: products[0], quantity: 2 }, { product: products[2], quantity: 1 } ])}</span>
          </div>
        </div>
      </div>
    ), 
    delay: 2500 
  },
  { 
    type: 'bot' as const, 
    content: (
      <div>
        <p className="mb-2">Ready to checkout?</p>
        <div className="bg-blue-50 p-3 rounded-lg border border-blue-200 flex items-center justify-between">
          <span className="text-sm font-medium text-blue-800">💳 Secure Payment</span>
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white h-8">Pay Now</Button>
        </div>
      </div>
    ), 
    delay: 1500 
  },
  { type: 'user' as const, content: 'Payment successful', delay: 1500 },
  { 
    type: 'bot' as const, 
    content: (
      <div className="flex flex-col items-center text-center">
        <div className="text-3xl mb-2">🎉</div>
        <p className="font-semibold">Payment Successful!</p>
        <p className="text-sm">Your order #12345 has been confirmed. You'll receive tracking details shortly. Thanks for shopping with us!</p>
      </div>
    ), 
    delay: 2500 
  },
];

const WhatsAppDemo = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Smooth scroll within container only - prevent page movement
  useEffect(() => {
    if (chatContainerRef.current && chatEndRef.current) {
      const container = chatContainerRef.current;
      
      // Use scrollTop instead of scrollIntoView to prevent page movement
      const scrollToBottom = () => {
        container.scrollTop = container.scrollHeight;
      };
      
      // Use requestAnimationFrame for smooth scrolling
      requestAnimationFrame(scrollToBottom);
    }
  }, [messages, isTyping]);

  useEffect(() => {
    // Loop the demo
    if (currentStep >= demoSteps.length) {
      const loopTimer = setTimeout(() => {
        setMessages([]);
        setCurrentStep(0);
      }, 4000); // 4-second pause before looping
      return () => clearTimeout(loopTimer);
    }

    const step = demoSteps[currentStep];
    const timer = setTimeout(() => {
      setIsTyping(true);
      
      const typingTimer = setTimeout(() => {
        setIsTyping(false);
        const newMessage: Message = {
          id: Date.now(),
          type: step.type,
          content: step.content,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        
        setMessages(prev => [...prev, newMessage]);
        setCurrentStep(prev => prev + 1);
      }, step.type === 'bot' ? 1500 : 700);

      return () => clearTimeout(typingTimer);
    }, step.delay);

    return () => clearTimeout(timer);
  }, [currentStep]);

  return (
    <Card className="w-full max-w-sm mx-auto shadow-2xl rounded-2xl overflow-hidden">
      <div className="bg-gray-200 p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <span className="text-2xl">🤖</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Clapp AI Agent</h3>
              <p className="text-xs text-gray-600 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-1.5"></span>
                online
              </p>
            </div>
          </div>
          <MoreVertical className="w-5 h-5 text-gray-600" />
        </div>
      </div>
      
      <CardContent className="p-0">
        <div 
          ref={chatContainerRef}
          className="h-[28rem] overflow-y-auto p-4 bg-gray-50"
        >
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.type === 'bot' ? 'justify-start' : 'justify-end'} mb-3`}>
              <div className={`max-w-xs px-3 py-2 rounded-xl ${
                message.type === 'bot' ? 'bg-white text-gray-900 shadow-sm' : 'bg-green-600 text-white'
              }`}>
                <div>{message.content}</div>
                <div className={`text-xs mt-1 ${message.type === 'bot' ? 'text-gray-500' : 'text-green-200'} text-right`}>{message.timestamp}</div>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start mb-3">
              <div className="bg-white px-4 py-3 rounded-xl shadow-sm">
                <div className="flex space-x-1">
                  <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={chatEndRef}></div>
        </div>
        
        <div className="border-t bg-gray-100 p-2">
          <div className="flex items-center space-x-2">
            <div className="flex-1 bg-white rounded-full px-4 py-2 text-sm text-gray-500 border">
              Type a message...
            </div>
            <Button size="icon" className="bg-green-600 hover:bg-green-700 text-white rounded-full w-10 h-10">
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WhatsAppDemo;
