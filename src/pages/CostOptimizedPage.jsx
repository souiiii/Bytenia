import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import CostOptimizedHero from '../components/CostOptimizedHero/CostOptimizedHero';
import CostOptimizedServers from '../components/CostOptimizedServers/CostOptimizedServers';
import IdealUseCases from '../components/IdealUseCases/IdealUseCases';
import WhyCostOptimized from '../components/WhyCostOptimized/WhyCostOptimized';
import ContactSalesBanner from '../components/ContactSalesBanner/ContactSalesBanner';
import Footer from '../components/Footer/Footer';

const CostOptimizedPage = () => {
  return (
    <>
      <Navbar />
      <CostOptimizedHero />
      <CostOptimizedServers />
      <IdealUseCases />
      <WhyCostOptimized />
      <ContactSalesBanner />
      <Footer />
    </>
  );
};

export default CostOptimizedPage;
