import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Triage Dashboard</h1>
          <p className="text-slate-500">Live view of current emergency department queue.</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
          Refresh Queue
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 flex flex-col items-center justify-center min-h-[400px] text-center">
        <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
          <span className="text-2xl">⏳</span>
        </div>
        <h3 className="text-xl font-bold text-slate-800">No Patients in Queue</h3>
        <p className="text-slate-500 max-w-sm mt-2">
          The triage queue is currently empty. New admissions will appear here sorted by severity.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
