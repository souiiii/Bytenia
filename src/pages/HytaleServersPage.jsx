import React from 'react';
import HytaleHero from '../components/HytaleHero/HytaleHero';
import HytaleReliability from '../components/HytaleReliability/HytaleReliability';
import HytaleInstanceTiers from '../components/HytaleInstanceTiers/HytaleInstanceTiers';

const HytaleServersPage = () => {
  return (
    <>
      <HytaleHero />
      <HytaleReliability />
      <HytaleInstanceTiers />
    </>
  );
};

export default HytaleServersPage;
