import React from 'react';
import FiveMHero from '../components/FiveMHero/FiveMHero';
import FiveMFeatures from '../components/FiveMFeatures/FiveMFeatures';
import FiveMNodeConfigurations from '../components/FiveMNodeConfigurations/FiveMNodeConfigurations';
import FiveMWorkloads from '../components/FiveMWorkloads/FiveMWorkloads';
import FiveMNetworkStatus from '../components/FiveMNetworkStatus/FiveMNetworkStatus';
import FiveMFAQ from '../components/FiveMFAQ/FiveMFAQ';

const FiveMServersPage = () => {
  return (
    <>
      <FiveMHero />
      <FiveMFeatures />
      <FiveMNodeConfigurations />
      <FiveMWorkloads />
      <FiveMNetworkStatus />
      <FiveMFAQ />
    </>
  );
};

export default FiveMServersPage;
