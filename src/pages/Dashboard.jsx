import { useSelector } from 'react-redux';
import { DollarSign, ShoppingCart, Users, TrendingUp } from 'lucide-react';
import StatsCard from '../components/Dashboard/StatsCard';
import RevenueChart from '../components/Dashboard/RevenueChart';
import RecentOrders from '../components/Dashboard/RecentOrders';
import TopProducts from '../components/Dashboard/TopProducts';

export default function Dashboard() {
  const { stats } = useSelector((state) => state.dashboard);

  return (
    <div className="space-y-6">
      {/* Page Title */}
      <div>
        <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        <p className="text-gray-400 mt-1">Welcome back! Here's what's happening with your business.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Revenue"
          value={`$${stats.totalRevenue.toLocaleString()}`}
          change="+20.1%"
          changeType="up"
          icon={DollarSign}
          color="blue"
        />
        <StatsCard
          title="Total Orders"
          value={stats.orders.toLocaleString()}
          change="+15.2%"
          changeType="up"
          icon={ShoppingCart}
          color="green"
        />
        <StatsCard
          title="Total Customers"
          value={stats.customers.toLocaleString()}
          change="+8.4%"
          changeType="up"
          icon={Users}
          color="purple"
        />
        <StatsCard
          title="Conversion Rate"
          value={`${stats.conversionRate}%`}
          change="+2.1%"
          changeType="up"
          icon={TrendingUp}
          color="orange"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RevenueChart />
        </div>
        <div>
          <TopProducts />
        </div>
      </div>

      {/* Recent Orders */}
      <RecentOrders />
    </div>
  );
}