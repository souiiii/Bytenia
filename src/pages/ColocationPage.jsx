import React from 'react';
import ColocationHero from '../components/ColocationHero/ColocationHero';
import ColocationPricing from '../components/ColocationPricing/ColocationPricing';
import ColocationContactBanner from '../components/ColocationContactBanner/ColocationContactBanner';

const ColocationPage = () => {
  return (
    <>
      <main className="page-content" style={{ backgroundColor: '#F8F8FA' }}>
        <ColocationHero />
        <ColocationPricing />
        <ColocationContactBanner />
      </main>
          </>
  );
};

export default ColocationPage;
