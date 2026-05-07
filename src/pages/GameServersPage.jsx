import React from 'react';
import GameServersHero from '../components/GameServersHero/GameServersHero';
import GameServersBenefits from '../components/GameServersBenefits/GameServersBenefits';
import GameServersSupported from '../components/GameServersSupported/GameServersSupported';
import GameServersList from '../components/GameServersList/GameServersList';

const GameServersPage = () => {
  return (
    <>
      <GameServersHero />
      <GameServersBenefits />
      <GameServersSupported />
      <GameServersList />
    </>
  );
};

export default GameServersPage;
