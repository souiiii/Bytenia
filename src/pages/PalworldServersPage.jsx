import React from 'react';
import PalworldHero from '../components/PalworldHero/PalworldHero';
import PalworldInfrastructure from '../components/PalworldInfrastructure/PalworldInfrastructure';
import PalworldDeployment from '../components/PalworldDeployment/PalworldDeployment';
import PalworldInstanceTiers from '../components/PalworldInstanceTiers/PalworldInstanceTiers';

const PalworldServersPage = () => {
  return (
    <>
      <PalworldHero />
      <PalworldInfrastructure />
      <PalworldDeployment />
      <PalworldInstanceTiers />
    </>
  );
};

export default PalworldServersPage;
