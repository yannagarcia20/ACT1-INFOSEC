import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Boxes, 
  ShoppingCart, 
  ShoppingBag, 
  BarChart3, 
  Headphones, 
  Settings, 
  LogOut, 
  Search, 
  Bell, 
  Calendar, 
  ChevronLeft, 
  ChevronRight,
  Trash2,
  Edit,
  Package,
  TrendingUp,
  AlertTriangle,
  Users,
  Store,
  FileText,
  Plus,
  Shield,
  UserCheck,
  Sparkles,
  ArrowUpRight,
  Activity
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [activeFilter, setActiveFilter] = useState('All Orders');
  const [searchTerm, setSearchTerm] = useState('');

  const [inventoryItems] = useState([
    { id: 'SKU-501', name: 'Neural Quantum Headset', category: 'Electronics', stock: 120, price: '$245.00', status: 'In Stock' },
    { id: 'SKU-502', name: 'Cyber Ergonomic Chair', category: 'Furniture', stock: 15, price: '$450.00', status: 'Low Stock' },
    { id: 'SKU-503', name: 'Mechanical RGB Deck', category: 'Electronics', stock: 0, price: '$189.00', status: 'Out of Stock' },
    { id: 'SKU-504', name: 'Type-C Thunderbolt Hub', category: 'Accessories', stock: 450, price: '$82.50', status: 'In Stock' },
  ]);

  const [orders] = useState([
    { id: 'ORD-9821', name: 'Quantum Earphones', stockValue: '$343K', quantity: 23, status: 'Delivered', date: '2026-03-13' },
    { id: 'ORD-9822', name: 'Marketing Suite AI', stockValue: '$934K', quantity: 20, status: 'Cancelled', date: '2026-03-13' },
    { id: 'ORD-9823', name: 'Holographic Display', stockValue: '$73K', quantity: 14, status: 'Delivered', date: '2026-03-12' },
    { id: 'ORD-9824', name: 'Cloud Server Node', stockValue: '$28K', quantity: 11, status: 'Delivered', date: '2026-03-11' },
    { id: 'ORD-9825', name: 'Design Asset Kit', stockValue: '$23K', quantity: 7, status: 'Cancelled', date: '2026-03-10' },
  ]);

  const topStores = [
    { name: 'Gateway Matrix Branch', value: '$874k', width: '85%', color: 'from-cyan-500 to-indigo-600' },
    { name: 'The Rustic Fox Node', value: '$721k', width: '70%', color: 'from-indigo-500 to-purple-600' },
    { name: 'Velvet Vine Outlet', value: '$598k', width: '60%', color: 'from-purple-500 to-pink-600' },
    { name: 'Blue Harbor Center', value: '$500k', width: '50%', color: 'from-blue-500 to-cyan-600' },
    { name: 'Nebula Novelties Shop', value: '$395k', width: '40%', color: 'from-emerald-500 to-teal-600' },
  ];

  const filteredOrders = orders.filter(order => {
    const matchesFilter = activeFilter === 'All Orders' || order.status === activeFilter;
    const matchesSearch = order.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          order.id.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="flex h-screen bg-[#060913] font-sans antialiased text-slate-100 overflow-hidden selection:bg-indigo-500 selection:text-white">
      
      {/* Sidebar with Glassmorphism & Neon Glow */}
      <aside className="w-72 bg-[#090e1a]/90 backdrop-blur-xl text-slate-300 flex flex-col justify-between p-5 border-r border-slate-800/80 shadow-2xl z-20">
        <div>
          {/* App Branding Header */}
          <div className="flex items-center space-x-3 px-2 mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-400 flex items-center justify-center shadow-lg shadow-indigo-500/30">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="font-extrabold text-white tracking-wider text-sm">INVEN<span className="text-cyan-400">TORY</span></h1>
              <p className="text-[10px] text-slate-400 font-medium">Enterprise Management v3.2</p>
            </div>
          </div>

          {/* User Profile Card */}
          <div className="flex items-center space-x-3 p-3.5 mb-6 bg-gradient-to-r from-slate-900 to-[#111827] rounded-2xl border border-slate-800 shadow-inner">
            <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center overflow-hidden border border-indigo-500/50 shadow-md">
              <span className="text-indigo-400 font-bold text-sm">AGV</span>
            </div>
            <div className="overflow-hidden">
              <h4 className="text-xs font-bold text-white truncate">Alyanna Violena</h4>
              <p className="text-[11px] text-indigo-400 font-medium truncate">Admin</p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1.5">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
              { id: 'inventory', label: 'Inventory', icon: Boxes },
              { id: 'orders', label: 'Orders', icon: ShoppingCart },
              { id: 'purchase', label: 'Purchase', icon: ShoppingBag },
              { id: 'stores', label: 'Stores', icon: Store },
              { id: 'reporting', label: 'Reporting', icon: BarChart3 },
              { id: 'support', label: 'Support', icon: Headphones },
              { id: 'settings', label: 'Settings', icon: Settings },
            ].map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center space-x-3.5 px-4 py-3 rounded-xl text-xs font-semibold transition-all duration-300 group ${
                    isActive
                      ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-lg shadow-indigo-600/30 scale-[1.02]'
                      : 'hover:bg-slate-800/60 text-slate-400 hover:text-white'
                  }`}
                >
                  <Icon className={`w-4 h-4 transition-transform duration-300 group-hover:scale-110 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                  {isActive && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-white shadow-sm shadow-white animate-pulse" />}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Logout Button */}
        <button className="flex items-center space-x-3 px-4 py-3 text-slate-400 hover:text-rose-400 transition-colors text-xs font-semibold rounded-xl hover:bg-rose-950/20">
          <LogOut className="w-4 h-4" />
          <span>Terminate Session</span>
        </button>
      </aside>

      {/* Main Container */}
      <main className="flex-1 flex flex-col overflow-hidden bg-gradient-to-br from-[#060913] via-[#0b1120] to-[#0f172a]">
        
        {/* Top Header Bar */}
        <header className="h-18 bg-[#090e1a]/80 backdrop-blur-md border-b border-slate-800/80 flex items-center justify-between px-8 z-10 shadow-sm">
          <div className="flex items-center space-x-2">
            <Activity className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span className="text-xs font-bold tracking-wide uppercase text-slate-300">
              {activeTab === 'dashboard' ? 'System Command Center' : `${activeTab} Module Control`}
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative w-72">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 transform -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Global search database..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-xs bg-[#04060b] border border-slate-800 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 text-slate-200 placeholder-slate-500 transition-all shadow-inner"
              />
            </div>
            
            <button className="p-2.5 text-slate-400 hover:text-white bg-[#04060b] rounded-xl border border-slate-800 relative hover:border-slate-700 transition-all shadow-sm">
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-indigo-500 rounded-full animate-ping"></span>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-indigo-500 rounded-full"></span>
            </button>
          </div>
        </header>

        {/* Dynamic Views Content Area */}
        <div className="flex-1 overflow-auto p-8 space-y-6">
          
          {/* ================= DASHBOARD VIEW ================= */}
          {activeTab === 'dashboard' && (
            <div className="max-w-7xl mx-auto space-y-6">
              
              {/* Greeting Banner */}
              <div className="relative bg-gradient-to-r from-indigo-900/40 via-purple-900/20 to-cyan-900/40 border border-indigo-500/30 p-6 rounded-2xl shadow-xl overflow-hidden flex items-center justify-between">
                <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
                <div>
                  <h2 className="text-xl font-extrabold text-white tracking-tight flex items-center gap-2">
                    Welcome back, Alyanna! <span className="text-xl">🚀</span>
                  </h2>
                  <p className="text-xs text-slate-300 mt-1">All database nodes are operational. System efficiency is running at <span className="text-emerald-400 font-semibold">99.8%</span>.</p>
                </div>
                <div className="hidden md:flex items-center space-x-3">
                  <div className="bg-indigo-950/60 border border-indigo-500/30 px-4 py-2 rounded-xl text-center">
                    <div className="text-[10px] uppercase tracking-wider text-indigo-300 font-semibold">Active Node</div>
                    <div className="text-xs font-bold text-white">US-EAST-1A</div>
                  </div>
                </div>
              </div>

              {/* Over View Metric Cards */}
              <div>
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Live Performance Metrics</h3>
                <div className="grid grid-cols-4 gap-5">
                  
                  <div className="bg-gradient-to-br from-[#111827] to-[#090e1a] p-5 rounded-2xl border border-slate-800 shadow-lg relative overflow-hidden group hover:border-indigo-500/50 transition-all duration-300">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform"></div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-black text-white">5,483</div>
                        <div className="text-xs text-slate-400 font-medium mt-1">Total Products</div>
                      </div>
                      <div className="p-3.5 bg-cyan-950/60 rounded-xl text-cyan-400 border border-cyan-800/40 shadow-inner">
                        <Package className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="mt-4 flex items-center text-[10px] text-emerald-400 font-semibold">
                      <ArrowUpRight className="w-3 h-3 mr-1" /> +12.4% from last week
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#111827] to-[#090e1a] p-5 rounded-2xl border border-slate-800 shadow-lg relative overflow-hidden group hover:border-emerald-500/50 transition-all duration-300">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform"></div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-black text-white">2,859</div>
                        <div className="text-xs text-slate-400 font-medium mt-1">Processed Orders</div>
                      </div>
                      <div className="p-3.5 bg-emerald-950/60 rounded-xl text-emerald-400 border border-emerald-800/40 shadow-inner">
                        <ShoppingCart className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="mt-4 flex items-center text-[10px] text-emerald-400 font-semibold">
                      <ArrowUpRight className="w-3 h-3 mr-1" /> +8.1% fulfillment rate
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#111827] to-[#090e1a] p-5 rounded-2xl border border-slate-800 shadow-lg relative overflow-hidden group hover:border-indigo-500/50 transition-all duration-300">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform"></div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-black text-white">$1.24M</div>
                        <div className="text-xs text-slate-400 font-medium mt-1">Total Stock Value</div>
                      </div>
                      <div className="p-3.5 bg-indigo-950/60 rounded-xl text-indigo-400 border border-indigo-800/40 shadow-inner">
                        <TrendingUp className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="mt-4 flex items-center text-[10px] text-emerald-400 font-semibold">
                      <ArrowUpRight className="w-3 h-3 mr-1" /> +15.3% asset valuation
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#111827] to-[#090e1a] p-5 rounded-2xl border border-slate-800 shadow-lg relative overflow-hidden group hover:border-rose-500/50 transition-all duration-300">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-rose-500/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform"></div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-black text-rose-400">38</div>
                        <div className="text-xs text-slate-400 font-medium mt-1">Out of Stock Alerts</div>
                      </div>
                      <div className="p-3.5 bg-rose-950/60 rounded-xl text-rose-400 border border-rose-800/40 shadow-inner">
                        <AlertTriangle className="w-5 h-5 animate-bounce" />
                      </div>
                    </div>
                    <div className="mt-4 flex items-center text-[10px] text-rose-400 font-semibold">
                      Action required immediately
                    </div>
                  </div>

                </div>
              </div>

              {/* Grid Widgets Section */}
              <div className="grid grid-cols-3 gap-6">
                
                {/* Users Widget */}
                <div className="bg-gradient-to-br from-[#111827] to-[#090e1a] p-6 rounded-2xl border border-slate-800 shadow-xl flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">Active Customers</span>
                    <span className="text-slate-500 font-bold hover:text-white cursor-pointer">⋮</span>
                  </div>
                  <div className="py-6 text-center">
                    <div className="inline-block p-5 bg-gradient-to-tr from-indigo-950 to-slate-800 rounded-full mb-3 text-indigo-400 border border-indigo-500/30 shadow-lg">
                      <Users className="w-8 h-8" />
                    </div>
                    <div className="text-4xl font-black text-white tracking-tight">583 K</div>
                    <div className="text-xs text-slate-400 mt-1 font-medium">Verified Active Accounts</div>
                  </div>
                  <div className="bg-[#060913] p-3 rounded-xl border border-slate-800 text-center text-[11px] text-slate-400">
                    Growth rate: <span className="text-emerald-400 font-bold">+4,230</span> this month
                  </div>
                </div>

                {/* Donut Chart Widget */}
                <div className="bg-gradient-to-br from-[#111827] to-[#090e1a] p-6 rounded-2xl border border-slate-800 shadow-xl flex flex-col justify-between">
                  <div className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Inventory Ratio</div>
                  <div className="flex items-center justify-center py-4">
                    <div className="relative w-36 h-36 rounded-full border-[10px] border-indigo-600 flex items-center justify-center shadow-2xl shadow-indigo-500/20 bg-[#060913]">
                      <div className="absolute text-center">
                        <span className="text-2xl font-black text-white">68%</span>
                        <div className="text-[9px] text-slate-400 font-bold uppercase">Fulfilled</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-around text-xs text-slate-300 pt-3 border-t border-slate-800/80 font-medium">
                    <div className="flex items-center space-x-2">
                      <span className="w-3 h-3 rounded-full bg-slate-700 shadow-sm"></span>
                      <span>Sold Units</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-3 h-3 rounded-full bg-indigo-600 shadow-sm shadow-indigo-500"></span>
                      <span>Total Stock</span>
                    </div>
                  </div>
                </div>

                {/* Top 10 Stores Widget */}
                <div className="bg-gradient-to-br from-[#111827] to-[#090e1a] p-6 rounded-2xl border border-slate-800 shadow-xl row-span-2 flex flex-col">
                  <div className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-4">Top Stores by Revenue</div>
                  <div className="space-y-3.5 overflow-y-auto pr-1 flex-1 max-h-[380px]">
                    {topStores.map((store, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-slate-300 font-semibold truncate">{store.name}</span>
                          <span className="font-black text-emerald-400">{store.value}</span>
                        </div>
                        <div className="w-full bg-[#060913] h-2 rounded-full overflow-hidden border border-slate-800">
                          <div className={`bg-gradient-to-r ${store.color} h-full rounded-full shadow-sm`} style={{ width: store.width }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Expense vs Profit Graph Widget */}
                <div className="col-span-2 bg-gradient-to-br from-[#111827] to-[#090e1a] p-6 rounded-2xl border border-slate-800 shadow-xl">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">Expense vs Profit Trend</span>
                    <span className="text-xs font-semibold bg-indigo-950 text-indigo-400 px-3 py-1 rounded-lg border border-indigo-800/50">Last 6 Months</span>
                  </div>
                  <div className="h-44 flex items-end justify-between px-4 pt-4 border-b border-slate-800/80 relative">
                    <div className="absolute inset-x-4 bottom-6 h-28 bg-gradient-to-t from-indigo-950/50 via-indigo-900/10 to-transparent rounded-t-2xl pointer-events-none"></div>
                    {['Dec', 'Jan', 'Feb', 'Mar', 'April', 'May', 'Jun'].map((m, i) => (
                      <div key={i} className="flex flex-col items-center z-10 space-y-2">
                        <div className="w-3 h-3 bg-gradient-to-tr from-indigo-500 to-cyan-400 rounded-full shadow-md shadow-indigo-500/50 ring-4 ring-indigo-950"></div>
                        <span className="text-xs font-bold text-slate-400">{m}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* ================= INVENTORY VIEW ================= */}
          {activeTab === 'inventory' && (
            <div className="max-w-7xl mx-auto bg-gradient-to-br from-[#111827] to-[#090e1a] rounded-2xl shadow-2xl border border-slate-800 p-6 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <h2 className="text-xl font-extrabold text-white tracking-tight">Product Inventory Database</h2>
                  <p className="text-xs text-slate-400 mt-1">Real-time stock catalog and SKU management system.</p>
                </div>
                <button className="flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white px-4 py-2.5 rounded-xl text-xs font-bold shadow-lg shadow-indigo-600/30 transition-all">
                  <Plus className="w-4 h-4" />
                  <span>Register New SKU</span>
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="bg-[#060913] text-slate-400 text-xs font-bold border-b border-slate-800 uppercase tracking-wider">
                      <th className="py-3.5 px-4 rounded-l-xl">SKU Code</th>
                      <th className="py-3.5 px-4">Item Designation</th>
                      <th className="py-3.5 px-4">Category</th>
                      <th className="py-3.5 px-4">Stock Qty</th>
                      <th className="py-3.5 px-4">Unit Price</th>
                      <th className="py-3.5 px-4 rounded-r-xl">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 text-slate-300">
                    {inventoryItems.map((item, idx) => (
                      <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                        <td className="py-4 px-4 font-mono text-xs text-indigo-400 font-bold">{item.id}</td>
                        <td className="py-4 px-4 font-bold text-white">{item.name}</td>
                        <td className="py-4 px-4 text-slate-300">{item.category}</td>
                        <td className="py-4 px-4 font-semibold">{item.stock}</td>
                        <td className="py-4 px-4 font-black text-emerald-400">{item.price}</td>
                        <td className="py-4 px-4">
                          <span className={`px-3 py-1 rounded-full text-[11px] font-bold ${
                            item.status === 'In Stock' ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-800/50 shadow-sm' :
                            item.status === 'Low Stock' ? 'bg-amber-950/80 text-amber-400 border border-amber-800/50 shadow-sm' :
                            'bg-rose-950/80 text-rose-400 border border-rose-800/50 shadow-sm'
                          }`}>
                            {item.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ================= ORDERS VIEW ================= */}
          {activeTab === 'orders' && (
            <div className="max-w-7xl mx-auto bg-gradient-to-br from-[#111827] to-[#090e1a] rounded-2xl shadow-2xl border border-slate-800 p-6">
              
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
                <div>
                  <h2 className="text-xl font-extrabold text-white tracking-tight">Order Execution History</h2>
                  <p className="text-sm text-slate-400 mt-1">Monitor delivery status, transaction values, and audit logs.</p>
                </div>

                <div className="flex items-center space-x-2 bg-[#060913] p-1.5 rounded-xl text-xs font-semibold border border-slate-800 shadow-inner">
                  {['All Orders', 'Delivered', 'Cancelled'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveFilter(tab)}
                      className={`px-4 py-2 rounded-lg transition-all ${
                        activeFilter === tab
                          ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md font-bold'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Date Filters */}
              <div className="flex items-center justify-end space-x-2 mb-4 text-xs text-slate-400">
                <div className="flex items-center space-x-2 bg-[#060913] border border-slate-800 px-3.5 py-2 rounded-xl shadow-inner">
                  <Calendar className="w-4 h-4 text-indigo-400" />
                  <span className="font-semibold text-slate-200">13-03-2026</span>
                </div>
                <span>To</span>
                <div className="flex items-center space-x-2 bg-[#060913] border border-slate-800 px-3.5 py-2 rounded-xl shadow-inner">
                  <Calendar className="w-4 h-4 text-indigo-400" />
                  <span className="font-semibold text-slate-200">13-03-2026</span>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="bg-[#060913] text-slate-400 text-xs font-bold border-b border-slate-800 uppercase tracking-wider">
                      <th className="py-3.5 px-4 rounded-l-xl">S No</th>
                      <th className="py-3.5 px-4">Order ID</th>
                      <th className="py-3.5 px-4">Order Name</th>
                      <th className="py-3.5 px-4">Stock Value</th>
                      <th className="py-3.5 px-4">Quantity</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3.5 px-4 text-right rounded-r-xl">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 text-slate-300">
                    {filteredOrders.length > 0 ? (
                      filteredOrders.map((item, index) => (
                        <tr key={index} className="hover:bg-slate-800/40 transition-colors">
                          <td className="py-4 px-4 font-bold text-slate-500">{index + 1}</td>
                          <td className="py-4 px-4 font-mono font-bold text-white">{item.id}</td>
                          <td className="py-4 px-4 font-semibold text-slate-200">{item.name}</td>
                          <td className="py-4 px-4 font-black text-emerald-400">{item.stockValue}</td>
                          <td className="py-4 px-4 font-semibold">{item.quantity}K</td>
                          <td className="py-4 px-4">
                            <span
                              className={`px-3 py-1 rounded-full text-[11px] font-bold ${
                                item.status === 'Delivered'
                                  ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-800/50 shadow-sm'
                                  : 'bg-rose-950/80 text-rose-400 border border-rose-800/50 shadow-sm'
                              }`}
                            >
                              {item.status}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-right space-x-2">
                            <button className="p-2 bg-slate-800 text-slate-300 hover:text-white hover:bg-indigo-600 rounded-xl transition-all shadow-sm">
                              <Edit className="w-4 h-4" />
                            </button>
                            <button className="p-2 bg-slate-800 text-slate-300 hover:text-white hover:bg-rose-600 rounded-xl transition-all shadow-sm">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="7" className="text-center py-12 text-slate-500 font-semibold">
                          No matching orders found in secure database.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-center space-x-2 mt-6 pt-4 border-t border-slate-800 text-xs font-bold text-slate-400">
                <button className="p-2 bg-[#060913] border border-slate-800 rounded-xl hover:text-white"><ChevronLeft className="w-4 h-4" /></button>
                <button className="w-8 h-8 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md">1</button>
                <button className="w-8 h-8 rounded-xl bg-[#060913] border border-slate-800 hover:bg-slate-800">2</button>
                <button className="w-8 h-8 rounded-xl bg-[#060913] border border-slate-800 hover:bg-slate-800">3</button>
                <span className="px-2">...</span>
                <button className="w-8 h-8 rounded-xl bg-[#060913] border border-slate-800 hover:bg-slate-800">12</button>
                <button className="p-2 bg-[#060913] border border-slate-800 rounded-xl hover:text-white"><ChevronRight className="w-4 h-4" /></button>
              </div>

            </div>
          )}

          {/* ================= PURCHASE VIEW ================= */}
          {activeTab === 'purchase' && (
            <div className="max-w-7xl mx-auto bg-gradient-to-br from-[#111827] to-[#090e1a] rounded-2xl shadow-2xl border border-slate-800 p-6 space-y-6">
              <div className="pb-4 border-b border-slate-800">
                <h2 className="text-xl font-extrabold text-white tracking-tight">Vendor Purchase Orders</h2>
                <p className="text-xs text-slate-400 mt-1">Manage supply chain procurement and freight shipments.</p>
              </div>

              <div className="grid grid-cols-3 gap-5">
                <div className="bg-[#060913] p-5 rounded-2xl border border-slate-800 shadow-lg">
                  <div className="text-xs text-slate-400 font-semibold uppercase">Total Purchase Value</div>
                  <div className="text-2xl font-black text-white mt-2">$128,450.00</div>
                  <div className="text-[10px] text-emerald-400 font-bold mt-2">Fully audited by finance node</div>
                </div>
                <div className="bg-[#060913] p-5 rounded-2xl border border-slate-800 shadow-lg">
                  <div className="text-xs text-slate-400 font-semibold uppercase">Pending Vendor Deliveries</div>
                  <div className="text-2xl font-black text-amber-400 mt-2">12 Shipments</div>
                  <div className="text-[10px] text-amber-400 font-bold mt-2">Expected arrival in 48 hours</div>
                </div>
                <div className="bg-[#060913] p-5 rounded-2xl border border-slate-800 shadow-lg">
                  <div className="text-xs text-slate-400 font-semibold uppercase">Completed Requisitions</div>
                  <div className="text-2xl font-black text-emerald-400 mt-2">148 Batches</div>
                  <div className="text-[10px] text-emerald-400 font-bold mt-2">Archived in secure ledger</div>
                </div>
              </div>
            </div>
          )}

          {/* ================= STORES VIEW ================= */}
          {activeTab === 'stores' && (
            <div className="max-w-7xl mx-auto bg-gradient-to-br from-[#111827] to-[#090e1a] rounded-2xl shadow-2xl border border-slate-800 p-6 space-y-6">
              <div className="pb-4 border-b border-slate-800 flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-extrabold text-white tracking-tight">Enterprise Store Network</h2>
                  <p className="text-xs text-slate-400 mt-1">Global distribution centers and regional retail node locations.</p>
                </div>
                <button className="bg-gradient-to-r from-indigo-600 to-cyan-600 text-white px-4 py-2.5 rounded-xl text-xs font-bold shadow-lg shadow-indigo-600/30 flex items-center space-x-2">
                  <Store className="w-4 h-4" />
                  <span>Register Store Node</span>
                </button>
              </div>

              <div className="grid grid-cols-2 gap-5">
                {topStores.map((store, i) => (
                  <div key={i} className="bg-[#060913] p-5 rounded-2xl border border-slate-800 shadow-lg flex items-center justify-between group hover:border-indigo-500/50 transition-all">
                    <div>
                      <h4 className="font-bold text-white text-sm group-hover:text-cyan-400 transition-colors">{store.name}</h4>
                      <p className="text-xs text-slate-400 mt-1 font-medium">Primary Hub Node</p>
                      <p className="text-[11px] text-indigo-400 font-bold mt-1">Status: Fully Operational</p>
                    </div>
                    <div className="text-right">
                      <div className="text-base font-black text-emerald-400">{store.value}</div>
                      <div className="text-[10px] text-slate-500 uppercase font-semibold">Gross Sales</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ================= REPORTING VIEW ================= */}
          {activeTab === 'reporting' && (
            <div className="max-w-7xl mx-auto bg-gradient-to-br from-[#111827] to-[#090e1a] rounded-2xl shadow-2xl border border-slate-800 p-6 space-y-6">
              <div className="pb-4 border-b border-slate-800">
                <h2 className="text-xl font-extrabold text-white tracking-tight">Business Intelligence Reporting</h2>
                <p className="text-xs text-slate-400 mt-1">Automated performance analytics, logs, and financial projections.</p>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div className="bg-[#060913] p-6 rounded-2xl border border-slate-800 shadow-lg flex items-center space-x-4">
                  <div className="p-4 bg-indigo-950/80 rounded-2xl text-indigo-400 border border-indigo-800/50">
                    <FileText className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Monthly Stock Audit Ledger</h4>
                    <p className="text-xs text-slate-400 mt-1">Encrypted PDF export ready for executive review.</p>
                  </div>
                </div>
                <div className="bg-[#060913] p-6 rounded-2xl border border-slate-800 shadow-lg flex items-center space-x-4">
                  <div className="p-4 bg-emerald-950/80 rounded-2xl text-emerald-400 border border-emerald-800/50">
                    <BarChart3 className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Revenue vs Expense Stream</h4>
                    <p className="text-xs text-slate-400 mt-1">Live MongoDB aggregation query diagnostics.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ================= SUPPORT VIEW ================= */}
          {activeTab === 'support' && (
            <div className="max-w-7xl mx-auto bg-gradient-to-br from-[#111827] to-[#090e1a] rounded-2xl shadow-2xl border border-slate-800 p-6 space-y-6">
              <div className="pb-4 border-b border-slate-800">
                <h2 className="text-xl font-extrabold text-white tracking-tight">System Documentation & Support</h2>
                <p className="text-xs text-slate-400 mt-1">Access technical manuals and administrative IT dispatch.</p>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div className="bg-[#060913] p-6 rounded-2xl border border-slate-800 shadow-lg">
                  <div className="p-3 bg-indigo-950/80 rounded-xl text-indigo-400 inline-block mb-3 border border-indigo-800/50">
                    <Headphones className="w-6 h-6" />
                  </div>
                  <h4 className="text-sm font-bold text-white">API Documentation Hub</h4>
                  <p className="text-xs text-slate-400 mt-1">Reference guides for Express backend routing and MERN schema integration.</p>
                </div>
                <div className="bg-[#060913] p-6 rounded-2xl border border-slate-800 shadow-lg">
                  <div className="p-3 bg-emerald-950/80 rounded-xl text-emerald-400 inline-block mb-3 border border-emerald-800/50">
                    <UserCheck className="w-6 h-6" />
                  </div>
                  <h4 className="text-sm font-bold text-white">Emergency IT Ticket</h4>
                  <p className="text-xs text-slate-400 mt-1">Direct escalation channel for security bypass and database locks.</p>
                </div>
              </div>
            </div>
          )}

          {/* ================= SETTINGS VIEW ================= */}
          {activeTab === 'settings' && (
            <div className="max-w-7xl mx-auto bg-gradient-to-br from-[#111827] to-[#090e1a] rounded-2xl shadow-2xl border border-slate-800 p-6 space-y-6">
              <div className="pb-4 border-b border-slate-800">
                <h2 className="text-xl font-extrabold text-white tracking-tight">Security & System Configuration</h2>
                <p className="text-xs text-slate-400 mt-1">Manage role-based access control, JWT tokens, and cryptographic keys.</p>
              </div>
              <div className="space-y-4">
                <div className="bg-[#060913] p-5 rounded-2xl border border-slate-800 shadow-lg flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-indigo-950/80 text-indigo-400 rounded-xl border border-indigo-800/50">
                      <Shield className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Role-Based Access Control (RBAC)</h4>
                      <p className="text-xs text-slate-400">Strictly restrict database mutations to verified Master Admin credentials.</p>
                    </div>
                  </div>
                  <span className="text-xs font-extrabold text-emerald-400 bg-emerald-950/80 px-3.5 py-1.5 rounded-full border border-emerald-800/50 shadow-sm">ACTIVE PROTOCOL</span>
                </div>
                <div className="bg-[#060913] p-5 rounded-2xl border border-slate-800 shadow-lg flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-cyan-950/80 text-cyan-400 rounded-xl border border-cyan-800/50">
                      <UserCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">JWT Session Token Encryption</h4>
                      <p className="text-xs text-slate-400">Automated bearer token verification enabled for all Express API endpoints.</p>
                    </div>
                  </div>
                  <span className="text-xs font-extrabold text-emerald-400 bg-emerald-950/80 px-3.5 py-1.5 rounded-full border border-emerald-800/50 shadow-sm">SECURELY ENCRYPTED</span>
                </div>
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}