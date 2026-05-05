import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import AdmitPatient from './pages/AdmitPatient';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Landing Page (No Layout) */}
        <Route path="/" element={<Home />} />
        
        {/* Placeholder for Login (Phase 3) */}
        <Route path="/login" element={<div className="flex items-center justify-center min-h-screen">Login UI Coming in Phase 3</div>} />

        {/* Protected/App Routes (With Layout) */}
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="/admit-patient" element={<Layout><AdmitPatient /></Layout>} />
        
        {/* Catch all redirect */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
