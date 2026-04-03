import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import PartnerHero from '../components/PartnerHero/PartnerHero';
import WhyPartner from '../components/WhyPartner/WhyPartner';
import PartnershipTiers from '../components/PartnershipTiers/PartnershipTiers';
import PartnerMargins from '../components/PartnerMargins/PartnerMargins';
import PartnerSupportBanner from '../components/PartnerSupportBanner/PartnerSupportBanner';

const PartnershipPage = () => {
  return (
    <>
      <Navbar />
      <main className="page-content" style={{ backgroundColor: '#fcfcfc' }}>
        <PartnerHero />
        <WhyPartner />
        <PartnershipTiers />
        <PartnerMargins />
        <PartnerSupportBanner />
      </main>
      <Footer />
    </>
  );
};

export default PartnershipPage;
