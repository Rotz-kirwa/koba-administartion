import { useQuery } from '@tanstack/react-query';
import { Search, Mail, MapPin, ShoppingBag } from 'lucide-react';
import { api } from '../lib/api';
import { useState } from 'react';

export default function Customers() {
  const [search, setSearch] = useState('');
  
  const { data, isLoading } = useQuery({
    queryKey: ['customers'],
    queryFn: api.getCustomers,
  });

  const customers = data?.customers || [];
  const filteredCustomers = customers.filter((c: any) =>
    c.email?.toLowerCase().includes(search.toLowerCase()) ||
    c.username?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-serif text-gray-900">Customers</h1>
          <p className="text-gray-500 mt-1">Manage your customer base</p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-[#8B6F47]">{customers.length}</div>
          <div className="text-sm text-gray-500">Total Customers</div>
        </div>
      </div>

      <div className="admin-card p-6">
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search customers by name or email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B6F47]"
            />
          </div>
        </div>

        {isLoading ? (
          <div className="text-center py-12">Loading customers...</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-sm">Customer</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm">Email</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm">Country</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm">Orders</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm">Total Spent</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm">Joined</th>
                </tr>
              </thead>
              <tbody>
                {filteredCustomers.map((customer: any) => (
                  <tr key={customer._id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#8B6F47] rounded-full flex items-center justify-center text-white font-semibold">
                          {customer.username?.[0]?.toUpperCase() || 'U'}
                        </div>
                        <div>
                          <div className="font-medium">{customer.username}</div>
                          <div className="text-xs text-gray-500">{customer.role}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="w-4 h-4 text-gray-400" />
                        {customer.email}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        {customer.country}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <ShoppingBag className="w-4 h-4 text-gray-400" />
                        {customer.orders?.length || 0}
                      </div>
                    </td>
                    <td className="py-4 px-4 font-semibold">
                      ${customer.total_spent?.toFixed(2) || '0.00'}
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-500">
                      {new Date(customer.created_at).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
