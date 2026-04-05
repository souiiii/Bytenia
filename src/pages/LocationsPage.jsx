import React from 'react';
import LocationsHero from '../components/LocationsHero/LocationsHero';
import WhyLocationMatters from '../components/WhyLocationMatters/WhyLocationMatters';
import GlobalHighlights from '../components/GlobalHighlights/GlobalHighlights';
import DistributedArchitectureBanner from '../components/DistributedArchitectureBanner/DistributedArchitectureBanner';

const LocationsPage = () => {
  return (
    <>
      <main className="page-content" style={{ backgroundColor: '#F8F8FA' }}>
        <LocationsHero />
        <WhyLocationMatters />
        <GlobalHighlights />
        <DistributedArchitectureBanner />
      </main>
          </>
  );
};

export default LocationsPage;
