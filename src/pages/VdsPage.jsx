import React from 'react';
import VdsHero from '../components/VdsHero/VdsHero';
import VdsServers from '../components/VdsServers/VdsServers';
import VdsBenefits from '../components/VdsBenefits/VdsBenefits';
import VdsSupportBanner from '../components/VdsSupportBanner/VdsSupportBanner';

const VdsPage = () => {
  return (
    <>
      <VdsHero />
      <VdsServers />
      <VdsBenefits />
      <VdsSupportBanner />
          </>
  );
};

export default VdsPage;
