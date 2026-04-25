import React from 'react';
import DayZHero from '../components/DayZHero/DayZHero';
import DayZFeatures from '../components/DayZFeatures/DayZFeatures';
import DayZInstanceTiers from '../components/DayZInstanceTiers/DayZInstanceTiers';
import DayZWorkloads from '../components/DayZWorkloads/DayZWorkloads';
import DayZControl from '../components/DayZControl/DayZControl';
import DayZFAQ from '../components/DayZFAQ/DayZFAQ';

const DayZServersPage = () => {
  return (
    <>
      <DayZHero />
      <DayZFeatures />
      <DayZInstanceTiers />
      <DayZWorkloads />
      <DayZControl />
      <DayZFAQ />
    </>
  );
};

export default DayZServersPage;
