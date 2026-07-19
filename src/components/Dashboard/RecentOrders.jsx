import { useSelector } from 'react-redux';
import { ArrowUpRight } from 'lucide-react';

const statusStyles = {
  completed: 'bg-emerald-600/10 text-emerald-400 border-emerald-600/20',
  pending: 'bg-yellow-600/10 text-yellow-400 border-yellow-600/20',
  cancelled: 'bg-red-600/10 text-red-400 border-red-600/20',
};

export default function RecentOrders() {
  const { orders } = useSelector((state) => state.orders);

  return (
    <div className="bg-dark-900 border border-gray-800 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-white">Recent Orders</h3>
          <p className="text-sm text-gray-400 mt-1">Latest transactions</p>
        </div>
        <button className="text-primary-400 text-sm font-medium hover:text-primary-300 flex items-center">
          View all <ArrowUpRight className="w-4 h-4 ml-1" />
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-800">
              <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider pb-3">Order ID</th>
              <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider pb-3">Customer</th>
              <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider pb-3">Product</th>
              <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider pb-3">Amount</th>
              <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider pb-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {orders.slice(0, 5).map((order) => (
              <tr key={order.id} className="hover:bg-gray-800/30 transition-colors">
                <td className="py-3 text-sm text-primary-400 font-medium">{order.id}</td>
                <td className="py-3 text-sm text-gray-300">{order.customer}</td>
                <td className="py-3 text-sm text-gray-400">{order.product}</td>
                <td className="py-3 text-sm text-white font-medium">${order.amount.toFixed(2)}</td>
                <td className="py-3">
                  <span className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium border ${statusStyles[order.status]}`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}