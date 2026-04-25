import React from 'react';
import MinecraftHero from '../components/MinecraftHero/MinecraftHero';
import MinecraftSystemSpecs from '../components/MinecraftSystemSpecs/MinecraftSystemSpecs';
import MinecraftWorkload from '../components/MinecraftWorkload/MinecraftWorkload';
import MinecraftInstanceTiers from '../components/MinecraftInstanceTiers/MinecraftInstanceTiers';
import MinecraftArchitecture from '../components/MinecraftArchitecture/MinecraftArchitecture';
import MinecraftFAQ from '../components/MinecraftFAQ/MinecraftFAQ';

const MinecraftServersPage = () => {
  return (
    <>
      <MinecraftHero />
      <MinecraftSystemSpecs />
      <MinecraftWorkload />
      <MinecraftInstanceTiers />
      <MinecraftArchitecture />
      <MinecraftFAQ />
    </>
  );
};

export default MinecraftServersPage;
