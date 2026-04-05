import React from 'react';
import EnterpriseHero from '../components/EnterpriseHero/EnterpriseHero';
import EnterpriseServersList from '../components/EnterpriseServers/EnterpriseServersList';
import IntensiveWorkloads from '../components/IntensiveWorkloads/IntensiveWorkloads';
import EnterpriseFeatures from '../components/EnterpriseFeatures/EnterpriseFeatures';
import SupportBanner from '../components/SupportBanner/SupportBanner';

const EnterprisePage = () => {
  return (
    <>
      <EnterpriseHero />
      <EnterpriseServersList />
      <IntensiveWorkloads />
      <EnterpriseFeatures />
      <SupportBanner />
          </>
  );
};

export default EnterprisePage;
