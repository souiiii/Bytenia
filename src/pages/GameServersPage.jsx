import React from 'react';
import GameServersHero from '../components/GameServersHero/GameServersHero';
import GameServersBenefits from '../components/GameServersBenefits/GameServersBenefits';
import GameServersSupported from '../components/GameServersSupported/GameServersSupported';
import GameServersList from '../components/GameServersList/GameServersList';
import VdsSupportBanner from '../components/VdsSupportBanner/VdsSupportBanner';

const GameServersPage = () => {
  return (
    <>
      <GameServersHero />
      <GameServersBenefits />
      <GameServersSupported />
      <GameServersList />
      <VdsSupportBanner />
    </>
  );
};

export default GameServersPage;
