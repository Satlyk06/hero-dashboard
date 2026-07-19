import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../store/slices/ordersSlice';
import { Filter, Download, Search } from 'lucide-react';
import { useState } from 'react';

const statusStyles = {
  completed: 'bg-emerald-600/10 text-emerald-400 border-emerald-600/20',
  pending: 'bg-yellow-600/10 text-yellow-400 border-yellow-600/20',
  cancelled: 'bg-red-600/10 text-red-400 border-red-600/20',
};

const filters = ['all', 'completed', 'pending', 'cancelled'];

export default function Orders() {
  const dispatch = useDispatch();
  const { orders, filter } = useSelector((state) => state.orders);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredOrders = orders.filter((order) => {
    const matchesFilter = filter === 'all' || order.status === filter;
    const matchesSearch = order.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          order.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const totalAmount = filteredOrders.reduce((sum, order) => sum + order.amount, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Orders</h1>
          <p className="text-gray-400 mt-1">Manage and track all orders</p>
        </div>
        <button className="flex items-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg text-sm font-medium transition-colors">
          <Download className="w-4 h-4 mr-2" />
          Export
        </button>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center space-x-2">
          <Filter className="w-4 h-4 text-gray-500" />
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => dispatch(setFilter(f))}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium capitalize transition-colors ${
                filter === f
                  ? 'bg-primary-600 text-white'
                  : 'bg-dark-800 text-gray-400 hover:text-gray-200 hover:bg-gray-700'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search orders..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-2 bg-dark-800 border border-gray-700 rounded-lg text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-primary-500 w-64"
          />
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-dark-900 border border-gray-800 rounded-xl p-4">
          <p className="text-sm text-gray-400">Total Orders</p>
          <p className="text-2xl font-bold text-white mt-1">{filteredOrders.length}</p>
        </div>
        <div className="bg-dark-900 border border-gray-800 rounded-xl p-4">
          <p className="text-sm text-gray-400">Total Revenue</p>
          <p className="text-2xl font-bold text-white mt-1">${totalAmount.toFixed(2)}</p>
        </div>
        <div className="bg-dark-900 border border-gray-800 rounded-xl p-4">
          <p className="text-sm text-gray-400">Avg Order Value</p>
          <p className="text-2xl font-bold text-white mt-1">
            ${filteredOrders.length ? (totalAmount / filteredOrders.length).toFixed(2) : '0.00'}
          </p>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-dark-900 border border-gray-800 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800 bg-dark-800/50">
                <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-4">Order ID</th>
                <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-4">Customer</th>
                <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-4">Product</th>
                <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-4">Date</th>
                <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-4">Amount</th>
                <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {filteredOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-800/30 transition-colors">
                  <td className="px-6 py-4 text-sm text-primary-400 font-medium">{order.id}</td>
                  <td className="px-6 py-4 text-sm text-gray-300">{order.customer}</td>
                  <td className="px-6 py-4 text-sm text-gray-400">{order.product}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{order.date}</td>
                  <td className="px-6 py-4 text-sm text-white font-medium">${order.amount.toFixed(2)}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium border ${statusStyles[order.status]}`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filteredOrders.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No orders found matching your criteria.
          </div>
        )}
      </div>
    </div>
  );
}