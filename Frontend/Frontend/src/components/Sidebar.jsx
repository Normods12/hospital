import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, UserPlus, Settings, History } from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { name: 'Triage Dashboard', path: '/dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
    { name: 'Admit Patient', path: '/admit-patient', icon: <UserPlus className="w-5 h-5" /> },
    { name: 'Patient History', path: '/history', icon: <History className="w-5 h-5" /> },
    { name: 'Settings', path: '/settings', icon: <Settings className="w-5 h-5" /> },
  ];

  return (
    <aside className="w-64 bg-white border-r border-slate-200 hidden md:flex flex-col py-6 sticky top-16 h-[calc(100vh-64px)]">
      <div className="px-4 mb-6">
        <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-2">Main Menu</h3>
      </div>
      <nav className="flex-1 px-2 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                isActive
                  ? 'bg-blue-50 text-blue-700 font-medium'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`
            }
          >
            {item.icon}
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
      <div className="mt-auto px-4">
        <div className="bg-slate-900 rounded-2xl p-4 text-white">
          <p className="text-xs text-slate-400">System Status</p>
          <p className="text-sm font-medium flex items-center gap-2 mt-1">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            All Services Live
          </p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
