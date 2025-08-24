
import { Bot, CreditCard, Truck, HeadphonesIcon, Megaphone, TrendingUp, BarChart3, Users } from 'lucide-react';

const AIAgentsCircle = () => {
  const agents = [
    { name: 'Payment', icon: CreditCard, color: 'from-green-500 to-emerald-600' },
    { name: 'Logistics', icon: Truck, color: 'from-blue-500 to-cyan-600' },
    { name: 'Support', icon: HeadphonesIcon, color: 'from-purple-500 to-violet-600' },
    { name: 'Marketing', icon: Megaphone, color: 'from-pink-500 to-rose-600' },
    { name: 'Sales', icon: TrendingUp, color: 'from-orange-500 to-amber-600' },
    { name: 'Insights', icon: BarChart3, color: 'from-indigo-500 to-blue-600' },
    { name: 'Retention', icon: Users, color: 'from-teal-500 to-cyan-600' }
  ];

  return (
    <div className="relative w-80 h-80 mx-auto my-8">
      {/* Central AI Core */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="w-20 h-20 bg-gradient-to-br from-gray-900 to-gray-700 rounded-full flex items-center justify-center shadow-lg">
          <Bot className="w-10 h-10 text-white" />
        </div>
        <div className="text-center mt-2">
          <span className="text-sm font-semibold text-gray-900">AI Core</span>
        </div>
      </div>

      {/* Agent Circles */}
      {agents.map((agent, index) => {
        const angle = (index * 2 * Math.PI) / agents.length - Math.PI / 2;
        const radius = 120;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        return (
          <div
            key={agent.name}
            className="absolute transform -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
            }}
          >
            {/* Connection Line */}
            <div
              className="absolute w-px h-20 bg-gradient-to-b from-gray-300 to-transparent origin-bottom z-0"
              style={{
                transform: `rotate(${angle + Math.PI / 2}rad)`,
                left: '50%',
                top: '50%',
                transformOrigin: 'center bottom',
              }}
            />
            
            {/* Agent Circle */}
            <div className={`w-16 h-16 bg-gradient-to-br ${agent.color} rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300 relative z-10`}>
              <agent.icon className="w-8 h-8 text-white" />
            </div>
            
            {/* Agent Label */}
            <div className="text-center mt-2 w-20">
              <span className="text-xs font-medium text-gray-700 leading-tight">{agent.name} Agent</span>
            </div>
          </div>
        );
      })}

      {/* Animated Ring */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-dashed border-gray-300 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
    </div>
  );
};

export default AIAgentsCircle;
