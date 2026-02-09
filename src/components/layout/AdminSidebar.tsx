import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard, BarChart3, Package, Warehouse, ShoppingCart,
  Users, Tag, Star, CreditCard, Truck, Shield, FileText,
  Headphones, UsersRound, Settings
} from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/admin' },
  { icon: BarChart3, label: 'Analytics', path: '/admin/analytics' },
  { icon: Package, label: 'Products', path: '/admin/products' },
  { icon: Warehouse, label: 'Inventory', path: '/admin/inventory' },
  { icon: ShoppingCart, label: 'Orders', path: '/admin/orders' },
  { icon: Users, label: 'Customers', path: '/admin/customers' },
  { icon: Tag, label: 'Promotions', path: '/admin/promotions' },
  { icon: Star, label: 'Reviews', path: '/admin/reviews' },
  { icon: CreditCard, label: 'Payments', path: '/admin/payments' },
  { icon: Truck, label: 'Shipping', path: '/admin/shipping' },
  { icon: Shield, label: 'Compliance', path: '/admin/compliance' },
  { icon: FileText, label: 'Content', path: '/admin/content' },
  { icon: Headphones, label: 'Support', path: '/admin/support' },
  { icon: UsersRound, label: 'Team', path: '/admin/team' },
  { icon: Settings, label: 'Settings', path: '/admin/settings' },
];

export default function AdminSidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col h-screen overflow-y-auto">
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-2xl font-serif text-[#8B6F47]">Queen Koba</h1>
        <p className="text-xs text-gray-500 mt-1">Admin Dashboard</p>
      </div>
      
      <nav className="flex-1 p-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-[#8B6F47] text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
