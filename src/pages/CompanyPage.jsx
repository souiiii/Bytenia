import React from 'react';
import CompanyHero from '../components/CompanyHero/CompanyHero';
import WhoWeAre from '../components/WhoWeAre/WhoWeAre';
import LeadershipTeam from '../components/LeadershipTeam/LeadershipTeam';
import ServerChoiceBanner from '../components/ServerChoiceBanner/ServerChoiceBanner';

const CompanyPage = () => {
  return (
    <>
      <main className="page-content" style={{ backgroundColor: '#F8F8FA' }}>
        <CompanyHero />
        <WhoWeAre />
        
        <LeadershipTeam visible={false} />
        <ServerChoiceBanner />
      </main>
          </>
  );
};

export default CompanyPage;
