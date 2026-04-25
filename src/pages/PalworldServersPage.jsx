import React from 'react';
import PalworldHero from '../components/PalworldHero/PalworldHero';
import PalworldInfrastructure from '../components/PalworldInfrastructure/PalworldInfrastructure';
import PalworldDeployment from '../components/PalworldDeployment/PalworldDeployment';
import PalworldInstanceTiers from '../components/PalworldInstanceTiers/PalworldInstanceTiers';
import PalworldFAQ from '../components/PalworldFAQ/PalworldFAQ';
import PalworldCTA from '../components/PalworldCTA/PalworldCTA';

const PalworldServersPage = () => {
  return (
    <>
      <PalworldHero />
      <PalworldInfrastructure />
      <PalworldDeployment />
      <PalworldInstanceTiers />
      <PalworldFAQ />
      <PalworldCTA />
    </>
  );
};

export default PalworldServersPage;
