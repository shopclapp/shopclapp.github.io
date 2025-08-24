
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
            {/* Connection Line from agent to center */}
            <div
              className="absolute w-0.5 bg-gradient-to-b from-white-400 to-transparent z-0"
              style={{
                height: `${radius - 40}px`,
                left: '50%',
                top: '50%',
                transform: `rotate(${angle + Math.PI}rad)`,
                transformOrigin: 'top center',
              }}
            />
            
            {/* Agent Circle */}
            <div className={`relative z-10 w-16 h-16 bg-gradient-to-br ${agent.color} rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 cursor-pointer`}>
              <agent.icon className="w-8 h-8 text-white" />
            </div>
            
            {/* Agent Label */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-center">
              <span className="text-xs font-medium text-gray-700 whitespace-nowrap">{agent.name} Agent</span>
            </div>
          </div>
        );
      })}

      {/* Central AI Core - positioned on top */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="w-20 h-20 bg-gradient-to-br from-gray-900 to-gray-700 rounded-full flex items-center justify-center shadow-xl border-4 border-white">
          <Bot className="w-10 h-10 text-white" />
        </div>
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-center">
          <span className="text-sm font-semibold text-gray-900 whitespace-nowrap">Clapp AI</span>
        </div>
      </div>
    </div>
  );
};

export default AIAgentsCircle;
