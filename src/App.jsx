import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import EnterprisePage from './pages/EnterprisePage';
import CostOptimizedPage from './pages/CostOptimizedPage';
import VdsPage from './pages/VdsPage';
import LocationsPage from './pages/LocationsPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/enterprise" element={<EnterprisePage />} />
          <Route path="/cost-optimized" element={<CostOptimizedPage />} />
          <Route path="/vds" element={<VdsPage />} />
          <Route path="/locations" element={<LocationsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
