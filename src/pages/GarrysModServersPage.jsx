import React from 'react';
import GarrysModHero from '../components/GarrysModHero/GarrysModHero';
import GarrysModDeployment from '../components/GarrysModDeployment/GarrysModDeployment';
import GarrysModInstanceTiers from '../components/GarrysModInstanceTiers/GarrysModInstanceTiers';
import GarrysModProtection from '../components/GarrysModProtection/GarrysModProtection';
import GarrysModFAQ from '../components/GarrysModFAQ/GarrysModFAQ';

const GarrysModServersPage = () => {
  return (
    <>
      <GarrysModHero />
      <GarrysModDeployment />
      <GarrysModInstanceTiers />
      <GarrysModProtection />
      <GarrysModFAQ />
    </>
  );
};

export default GarrysModServersPage;
