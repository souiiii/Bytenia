import React from 'react';
import HytaleHero from '../components/HytaleHero/HytaleHero';
import HytaleReliability from '../components/HytaleReliability/HytaleReliability';
import HytaleInstanceTiers from '../components/HytaleInstanceTiers/HytaleInstanceTiers';
import HytaleControl from '../components/HytaleControl/HytaleControl';
import HytaleAdvantage from '../components/HytaleAdvantage/HytaleAdvantage';

const HytaleServersPage = () => {
  return (
    <>
      <HytaleHero />
      <HytaleReliability />
      <HytaleInstanceTiers />
      <HytaleControl />
      <HytaleAdvantage />
    </>
  );
};

export default HytaleServersPage;
