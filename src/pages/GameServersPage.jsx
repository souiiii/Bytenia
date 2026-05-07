import React from 'react';
import GameServersHero from '../components/GameServersHero/GameServersHero';
import GameServersBenefits from '../components/GameServersBenefits/GameServersBenefits';
import GameServersSupported from '../components/GameServersSupported/GameServersSupported';

const GameServersPage = () => {
  return (
    <>
      <GameServersHero />
      <GameServersBenefits />
      <GameServersSupported />
    </>
  );
};

export default GameServersPage;
