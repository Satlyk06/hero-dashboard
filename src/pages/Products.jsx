import { Package, Plus, Search, Filter } from 'lucide-react';
import { useState } from 'react';

const products = [
  { id: 1, name: 'Premium Plan', price: 299, stock: 999, sales: 1234, category: 'Subscription', status: 'active' },
  { id: 2, name: 'Basic Plan', price: 99, stock: 999, sales: 2341, category: 'Subscription', status: 'active' },
  { id: 3, name: 'Enterprise', price: 999, stock: 50, sales: 856, category: 'Subscription', status: 'active' },
  { id: 4, name: 'Pro Add-on', price: 49, stock: 500, sales: 567, category: 'Add-on', status: 'active' },
  { id: 5, name: 'API Credits', price: 19, stock: 10000, sales: 3421, category: 'Credits', status: 'active' },
  { id: 6, name: 'Custom Integration', price: 499, stock: 20, sales: 123, category: 'Service', status: 'low-stock' },
];

export default function Products() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Products</h1>
          <p className="text-gray-400 mt-1">Manage your products and inventory</p>
        </div>
        <button className="flex items-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg text-sm font-medium transition-colors">
          <Plus className="w-4 h-4 mr-2" />
          Add Product
        </button>
      </div>

      <div className="flex items-center justify-between">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-2 bg-dark-800 border border-gray-700 rounded-lg text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-primary-500 w-64"
          />
        </div>
        <button className="flex items-center px-3 py-2 bg-dark-800 border border-gray-700 rounded-lg text-sm text-gray-400 hover:text-gray-200 transition-colors">
          <Filter className="w-4 h-4 mr-2" />
          Filter
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-dark-900 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all group">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-primary-600/10 rounded-xl flex items-center justify-center">
                <Package className="w-6 h-6 text-primary-400" />
              </div>
              <span className={`text-xs font-medium px-2 py-1 rounded-full border ${
                product.status === 'active' 
                  ? 'bg-emerald-600/10 text-emerald-400 border-emerald-600/20' 
                  : 'bg-yellow-600/10 text-yellow-400 border-yellow-600/20'
              }`}>
                {product.status === 'active' ? 'Active' : 'Low Stock'}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-white">{product.name}</h3>
            <p className="text-sm text-gray-500 mt-1">{product.category}</p>
            <div className="mt-4 pt-4 border-t border-gray-800 grid grid-cols-3 gap-4">
              <div>
                <p className="text-xs text-gray-500">Price</p>
                <p className="text-sm font-medium text-white">${product.price}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Stock</p>
                <p className="text-sm font-medium text-white">{product.stock}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Sales</p>
                <p className="text-sm font-medium text-white">{product.sales}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}