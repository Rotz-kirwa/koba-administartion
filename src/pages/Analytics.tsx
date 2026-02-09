import { BarChart3, TrendingUp, Users, DollarSign } from 'lucide-react';

export default function Analytics() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-serif text-gray-900">Analytics</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="admin-card p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-gray-500">Revenue (30d)</span>
            <DollarSign className="w-5 h-5 text-[#8B6F47]" />
          </div>
          <p className="text-3xl font-bold">$12,450</p>
          <p className="text-sm text-green-600 mt-2">+18.2% from last month</p>
        </div>
        
        <div className="admin-card p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-gray-500">Orders</span>
            <BarChart3 className="w-5 h-5 text-[#8B6F47]" />
          </div>
          <p className="text-3xl font-bold">342</p>
          <p className="text-sm text-green-600 mt-2">+12.5% from last month</p>
        </div>
        
        <div className="admin-card p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-gray-500">Customers</span>
            <Users className="w-5 h-5 text-[#8B6F47]" />
          </div>
          <p className="text-3xl font-bold">1,248</p>
          <p className="text-sm text-green-600 mt-2">+8.3% from last month</p>
        </div>
        
        <div className="admin-card p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-gray-500">Avg Order Value</span>
            <TrendingUp className="w-5 h-5 text-[#8B6F47]" />
          </div>
          <p className="text-3xl font-bold">$36.40</p>
          <p className="text-sm text-green-600 mt-2">+5.1% from last month</p>
        </div>
      </div>

      <div className="admin-card p-6">
        <h3 className="font-semibold text-lg mb-4">Revenue Trend</h3>
        <div className="h-64 flex items-center justify-center text-gray-400">
          Chart visualization would go here
        </div>
      </div>
    </div>
  );
}
