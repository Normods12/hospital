import React from 'react';
import { Activity } from 'lucide-react'; // I'll install lucide-react in a moment

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white border-b border-slate-200 h-16 flex items-center px-6 sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <div className="bg-blue-600 p-1.5 rounded-lg">
          <Activity className="w-6 h-6 text-white" />
        </div>
        <span className="text-xl font-bold text-slate-800 tracking-tight">
          MedTriage <span className="text-blue-600">Pro</span>
        </span>
      </div>
      <div className="ml-auto flex items-center gap-4">
        <div className="flex flex-col items-end mr-2">
          <span className="text-sm font-semibold text-slate-700">Staff Portal</span>
          <span className="text-xs text-slate-500 text-right">Emergency Dept.</span>
        </div>
        <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 font-bold">
          JD
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
