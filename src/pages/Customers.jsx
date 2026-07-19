import { Users, Search, Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

const customers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', phone: '+1 234 567 890', location: 'New York, USA', orders: 12, spent: 3588, status: 'active' },
  { id: 2, name: 'Sarah Smith', email: 'sarah@example.com', phone: '+1 234 567 891', location: 'London, UK', orders: 8, spent: 2392, status: 'active' },
  { id: 3, name: 'Mike Johnson', email: 'mike@example.com', phone: '+1 234 567 892', location: 'Toronto, CA', orders: 15, spent: 14985, status: 'active' },
  { id: 4, name: 'Emily Brown', email: 'emily@example.com', phone: '+1 234 567 893', location: 'Sydney, AU', orders: 5, spent: 1495, status: 'inactive' },
  { id: 5, name: 'David Wilson', email: 'david@example.com', phone: '+1 234 567 894', location: 'Berlin, DE', orders: 20, spent: 5980, status: 'active' },
  { id: 6, name: 'Lisa Anderson', email: 'lisa@example.com', phone: '+1 234 567 895', location: 'Paris, FR', orders: 3, spent: 2997, status: 'active' },
];

export default function Customers() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCustomers = customers.filter((c) =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Customers</h1>
          <p className="text-gray-400 mt-1">Manage your customer base</p>
        </div>
      </div>

      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
        <input
          type="text"
          placeholder="Search customers..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2 bg-dark-800 border border-gray-700 rounded-lg text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-primary-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCustomers.map((customer) => (
          <div key={customer.id} className="bg-dark-900 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-lg">
                {customer.name.charAt(0)}
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-semibold text-white">{customer.name}</h3>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  customer.status === 'active' ? 'bg-emerald-600/10 text-emerald-400' : 'bg-gray-600/10 text-gray-400'
                }`}>
                  {customer.status}
                </span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-400">
                <Mail className="w-4 h-4 mr-2 text-gray-500" />
                {customer.email}
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <Phone className="w-4 h-4 mr-2 text-gray-500" />
                {customer.phone}
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                {customer.location}
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-800 flex justify-between">
              <div className="text-center">
                <p className="text-lg font-bold text-white">{customer.orders}</p>
                <p className="text-xs text-gray-500">Orders</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-white">${customer.spent.toLocaleString()}</p>
                <p className="text-xs text-gray-500">Spent</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}