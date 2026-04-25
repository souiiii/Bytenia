import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import PageTransition from './components/PageTransition/PageTransition';
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
import ConnectPage from './pages/ConnectPage';
import ThankYouPage from './pages/ThankYouPage';
import MinecraftServersPage from './pages/MinecraftServersPage';
import FiveMServersPage from './pages/FiveMServersPage';
import GarrysModServersPage from './pages/GarrysModServersPage';
import DayZServersPage from './pages/DayZServersPage';
import PalworldServersPage from './pages/PalworldServersPage';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/enterprise" element={<EnterprisePage />} />
            <Route path="/cost-optimized" element={<CostOptimizedPage />} />
            <Route path="/vds" element={<VdsPage />} />
            <Route path="/locations" element={<LocationsPage />} />
            <Route path="/about-us" element={<CompanyPage />} />
            <Route path="/partnership-program" element={<PartnershipPage />} />
            <Route path="/colocation" element={<ColocationPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-of-service" element={<TermsOfServicePage />} />
            <Route path="/looking-glass" element={<LookingGlassPage />} />
            <Route path="/connect" element={<ConnectPage />} />
            <Route path="/thankyou" element={<ThankYouPage />} />
            <Route path="/minecraft-servers" element={<MinecraftServersPage />} />
            <Route path="/servers/fiveM" element={<FiveMServersPage />} />
            <Route path="/servers/garrys-mod" element={<GarrysModServersPage />} />
            <Route path="/servers/dayz" element={<DayZServersPage />} />
            <Route path="/servers/palworld" element={<PalworldServersPage />} />
          </Routes>
        </PageTransition>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
