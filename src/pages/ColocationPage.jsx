import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ColocationHero from '../components/ColocationHero/ColocationHero';
import ColocationPricing from '../components/ColocationPricing/ColocationPricing';
import ColocationContactBanner from '../components/ColocationContactBanner/ColocationContactBanner';

const ColocationPage = () => {
  return (
    <>
      <Navbar />
      <main className="page-content" style={{ backgroundColor: '#fcfcfc' }}>
        <ColocationHero />
        <ColocationPricing />
        <ColocationContactBanner />
      </main>
      <Footer />
    </>
  );
};

export default ColocationPage;
