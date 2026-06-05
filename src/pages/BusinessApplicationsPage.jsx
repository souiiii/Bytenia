import React from 'react';
import BusinessApplicationsHero from '../components/BusinessApplicationsHero/BusinessApplicationsHero';
import BusinessApplicationsFeatures from '../components/BusinessApplicationsFeatures/BusinessApplicationsFeatures';
import BusinessApplicationsWorkloads from '../components/BusinessApplicationsWorkloads/BusinessApplicationsWorkloads';
import BusinessApplicationsInfrastructure from '../components/BusinessApplicationsInfrastructure/BusinessApplicationsInfrastructure';
import BusinessApplicationsPerformance from '../components/BusinessApplicationsPerformance/BusinessApplicationsPerformance';
import BusinessApplicationsSecurity from '../components/BusinessApplicationsSecurity/BusinessApplicationsSecurity';

const BusinessApplicationsPage = () => {
  return (
    <>
      <BusinessApplicationsHero />
      <BusinessApplicationsFeatures />
      <BusinessApplicationsWorkloads />
      <BusinessApplicationsPerformance />
      <BusinessApplicationsSecurity />
      <BusinessApplicationsInfrastructure />
    </>
  );
};

export default BusinessApplicationsPage;
