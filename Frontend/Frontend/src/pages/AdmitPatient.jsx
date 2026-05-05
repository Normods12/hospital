import React from 'react';

const AdmitPatient = () => {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Patient Admission</h1>
        <p className="text-slate-500">Record initial assessment and vitals for emergency triage.</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
        <div className="animate-pulse flex flex-col gap-4">
          <div className="h-8 bg-slate-100 rounded w-1/4"></div>
          <div className="h-32 bg-slate-50 rounded"></div>
          <div className="h-8 bg-slate-100 rounded w-1/4"></div>
          <div className="h-48 bg-slate-50 rounded"></div>
        </div>
        <p className="text-center text-slate-400 mt-6 italic">Admission form building in Phase 4...</p>
      </div>
    </div>
  );
};

export default AdmitPatient;
