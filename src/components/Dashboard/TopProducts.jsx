    import { TrendingUp } from 'lucide-react';

const products = [
  { name: 'Premium Plan', sales: 1234, revenue: 368966, growth: '+12.5%' },
  { name: 'Enterprise', sales: 856, revenue: 855144, growth: '+8.2%' },
  { name: 'Basic Plan', sales: 2341, revenue: 231759, growth: '+15.3%' },
  { name: 'Pro Add-on', sales: 567, revenue: 56700, growth: '+5.1%' },
];

export default function TopProducts() {
  return (
    <div className="bg-dark-900 border border-gray-800 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-white">Top Products</h3>
          <p className="text-sm text-gray-400 mt-1">Best performing products</p>
        </div>
      </div>
      <div className="space-y-4">
        {products.map((product, index) => (
          <div key={product.name} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-800/50 transition-colors">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-lg bg-primary-600/10 text-primary-400 flex items-center justify-center text-sm font-bold mr-3">
                {index + 1}
              </div>
              <div>
                <p className="text-sm font-medium text-white">{product.name}</p>
                <p className="text-xs text-gray-500">{product.sales} sales</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-white">${product.revenue.toLocaleString()}</p>
              <p className="text-xs text-emerald-400 flex items-center justify-end">
                <TrendingUp className="w-3 h-3 mr-1" /> {product.growth}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}