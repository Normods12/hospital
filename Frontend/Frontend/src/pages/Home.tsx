import React from 'react';
import { Activity, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-center py-12">
      <div className="bg-blue-100 p-4 rounded-3xl mb-6">
        <Activity className="w-12 h-12 text-blue-600" />
      </div>
      <h1 className="text-4xl font-extrabold text-slate-900 mb-4">
        Emergency Triage & Admission
      </h1>
      <p className="text-lg text-slate-600 max-w-2xl mb-10">
        The complete clinical workflow system for rapid patient assessment, vitals tracking, and severity prioritization.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mb-12">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center">
          <div className="bg-orange-100 p-3 rounded-xl mb-4">
            <Zap className="w-6 h-6 text-orange-600" />
          </div>
          <h3 className="font-bold text-slate-800">Rapid Entry</h3>
          <p className="text-sm text-slate-500 mt-2">Minimize paper work and admit patients in seconds.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center">
          <div className="bg-green-100 p-3 rounded-xl mb-4">
            <ShieldCheck className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="font-bold text-slate-800">Real-time Triage</h3>
          <p className="text-sm text-slate-500 mt-2">Automatic severity scoring based on clinical vitals.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center">
          <div className="bg-blue-100 p-3 rounded-xl mb-4">
            <Activity className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="font-bold text-slate-800">Queue Management</h3>
          <p className="text-sm text-slate-500 mt-2">Dynamic sorting ensures critical patients are seen first.</p>
        </div>
      </div>

      <div className="flex gap-4">
        <Link 
          to="/dashboard" 
          className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
        >
          Go to Dashboard
        </Link>
        <Link 
          to="/login" 
          className="bg-white text-slate-700 border border-slate-200 px-8 py-3 rounded-xl font-bold hover:bg-slate-50 transition-all"
        >
          Staff Login
        </Link>
      </div>
    </div>
  );
};

export default Home;
