import React from 'react';
import PalworldHero from '../components/PalworldHero/PalworldHero';
import PalworldInfrastructure from '../components/PalworldInfrastructure/PalworldInfrastructure';
import PalworldDeployment from '../components/PalworldDeployment/PalworldDeployment';

const PalworldServersPage = () => {
  return (
    <>
      <PalworldHero />
      <PalworldInfrastructure />
      <PalworldDeployment />
    </>
  );
};

export default PalworldServersPage;
