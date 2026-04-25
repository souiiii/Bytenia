import React from 'react';
import MinecraftHero from '../components/MinecraftHero/MinecraftHero';
import MinecraftSystemSpecs from '../components/MinecraftSystemSpecs/MinecraftSystemSpecs';
import MinecraftWorkload from '../components/MinecraftWorkload/MinecraftWorkload';

const MinecraftServersPage = () => {
  return (
    <>
      <MinecraftHero />
      <MinecraftSystemSpecs />
      <MinecraftWorkload />
    </>
  );
};

export default MinecraftServersPage;
