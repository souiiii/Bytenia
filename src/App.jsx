import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import EnterprisePage from './pages/EnterprisePage';
import CostOptimizedPage from './pages/CostOptimizedPage';
import VdsPage from './pages/VdsPage';
import LocationsPage from './pages/LocationsPage';
import CompanyPage from './pages/CompanyPage';
import PartnershipPage from './pages/PartnershipPage';
import ColocationPage from './pages/ColocationPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import LookingGlassPage from './pages/LookingGlassPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/enterprise" element={<EnterprisePage />} />
          <Route path="/cost-optimized" element={<CostOptimizedPage />} />
          <Route path="/vds" element={<VdsPage />} />
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/partnership-program" element={<PartnershipPage />} />
          <Route path="/colocation" element={<ColocationPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="/looking-glass" element={<LookingGlassPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
