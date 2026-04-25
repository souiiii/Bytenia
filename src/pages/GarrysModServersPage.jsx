import React from 'react';
import GarrysModHero from '../components/GarrysModHero/GarrysModHero';
import GarrysModDeployment from '../components/GarrysModDeployment/GarrysModDeployment';
import GarrysModInstanceTiers from '../components/GarrysModInstanceTiers/GarrysModInstanceTiers';
import GarrysModProtection from '../components/GarrysModProtection/GarrysModProtection';

const GarrysModServersPage = () => {
  return (
    <>
      <GarrysModHero />
      <GarrysModDeployment />
      <GarrysModInstanceTiers />
      <GarrysModProtection />
    </>
  );
};

export default GarrysModServersPage;
