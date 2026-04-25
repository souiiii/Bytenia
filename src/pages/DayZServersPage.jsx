import React from 'react';
import DayZHero from '../components/DayZHero/DayZHero';
import DayZFeatures from '../components/DayZFeatures/DayZFeatures';
import DayZInstanceTiers from '../components/DayZInstanceTiers/DayZInstanceTiers';
import DayZWorkloads from '../components/DayZWorkloads/DayZWorkloads';

const DayZServersPage = () => {
  return (
    <>
      <DayZHero />
      <DayZFeatures />
      <DayZInstanceTiers />
      <DayZWorkloads />
    </>
  );
};

export default DayZServersPage;
