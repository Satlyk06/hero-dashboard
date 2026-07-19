import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

export default function StatsCard({ title, value, change, changeType, icon: Icon, color }) {
  const colorClasses = {
    blue: 'bg-primary-600/10 text-primary-400 border-primary-600/20',
    green: 'bg-emerald-600/10 text-emerald-400 border-emerald-600/20',
    purple: 'bg-purple-600/10 text-purple-400 border-purple-600/20',
    orange: 'bg-orange-600/10 text-orange-400 border-orange-600/20',
  };

  return (
    <div className="bg-dark-900 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${colorClasses[color]}`}>
          <Icon className="w-6 h-6" />
        </div>
        <div className={`flex items-center text-sm font-medium ${changeType === 'up' ? 'text-emerald-400' : 'text-red-400'}`}>
          {changeType === 'up' ? <ArrowUpRight className="w-4 h-4 mr-1" /> : <ArrowDownRight className="w-4 h-4 mr-1" />}
          {change}
        </div>
      </div>
      <h3 className="text-gray-400 text-sm font-medium">{title}</h3>
      <p className="text-2xl font-bold text-white mt-1">{value}</p>
    </div>
  );
}