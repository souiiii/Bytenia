import React from 'react';
import HytaleHero from '../components/HytaleHero/HytaleHero';
import HytaleReliability from '../components/HytaleReliability/HytaleReliability';
import HytaleInstanceTiers from '../components/HytaleInstanceTiers/HytaleInstanceTiers';
import HytaleControl from '../components/HytaleControl/HytaleControl';

const HytaleServersPage = () => {
  return (
    <>
      <HytaleHero />
      <HytaleReliability />
      <HytaleInstanceTiers />
      <HytaleControl />
    </>
  );
};

export default HytaleServersPage;
