import React from 'react';
import FiveMHero from '../components/FiveMHero/FiveMHero';
import FiveMFeatures from '../components/FiveMFeatures/FiveMFeatures';
import FiveMNodeConfigurations from '../components/FiveMNodeConfigurations/FiveMNodeConfigurations';
import FiveMWorkloads from '../components/FiveMWorkloads/FiveMWorkloads';
import FiveMNetworkStatus from '../components/FiveMNetworkStatus/FiveMNetworkStatus';

const FiveMServersPage = () => {
  return (
    <>
      <FiveMHero />
      <FiveMFeatures />
      <FiveMNodeConfigurations />
      <FiveMWorkloads />
      <FiveMNetworkStatus />
    </>
  );
};

export default FiveMServersPage;
