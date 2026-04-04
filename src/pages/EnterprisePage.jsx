import React from 'react';
import EnterpriseHero from '../components/EnterpriseHero/EnterpriseHero';
import EnterpriseServersList from '../components/EnterpriseServers/EnterpriseServersList';
import IntensiveWorkloads from '../components/IntensiveWorkloads/IntensiveWorkloads';
import EnterpriseFeatures from '../components/EnterpriseFeatures/EnterpriseFeatures';
import SupportBanner from '../components/SupportBanner/SupportBanner';
import Footer from '../components/Footer/Footer';

const EnterprisePage = () => {
  return (
    <>
      <EnterpriseHero />
      <EnterpriseServersList />
      <IntensiveWorkloads />
      <EnterpriseFeatures />
      <SupportBanner />
      <Footer />
    </>
  );
};

export default EnterprisePage;
