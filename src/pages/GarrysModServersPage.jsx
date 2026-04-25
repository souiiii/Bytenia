import React from 'react';
import GarrysModHero from '../components/GarrysModHero/GarrysModHero';
import GarrysModDeployment from '../components/GarrysModDeployment/GarrysModDeployment';
import GarrysModInstanceTiers from '../components/GarrysModInstanceTiers/GarrysModInstanceTiers';

const GarrysModServersPage = () => {
  return (
    <>
      <GarrysModHero />
      <GarrysModDeployment />
      <GarrysModInstanceTiers />
    </>
  );
};

export default GarrysModServersPage;
