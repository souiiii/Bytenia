import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import VdsHero from '../components/VdsHero/VdsHero';
import VdsServers from '../components/VdsServers/VdsServers';
import VdsBenefits from '../components/VdsBenefits/VdsBenefits';
import VdsSupportBanner from '../components/VdsSupportBanner/VdsSupportBanner';
import Footer from '../components/Footer/Footer';

const VdsPage = () => {
  return (
    <>
      <Navbar />
      <VdsHero />
      <VdsServers />
      <VdsBenefits />
      <VdsSupportBanner />
      <Footer />
    </>
  );
};

export default VdsPage;
