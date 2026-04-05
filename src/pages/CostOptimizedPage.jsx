import React from 'react';
import CostOptimizedHero from '../components/CostOptimizedHero/CostOptimizedHero';
import CostOptimizedServers from '../components/CostOptimizedServers/CostOptimizedServers';
import IdealUseCases from '../components/IdealUseCases/IdealUseCases';
import WhyCostOptimized from '../components/WhyCostOptimized/WhyCostOptimized';
import ContactSalesBanner from '../components/ContactSalesBanner/ContactSalesBanner';

const CostOptimizedPage = () => {
  return (
    <>
      <CostOptimizedHero />
      <CostOptimizedServers />
      <IdealUseCases />
      <WhyCostOptimized />
      <ContactSalesBanner />
          </>
  );
};

export default CostOptimizedPage;
