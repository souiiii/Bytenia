import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import CompanyHero from '../components/CompanyHero/CompanyHero';
import WhoWeAre from '../components/WhoWeAre/WhoWeAre';
import LeadershipTeam from '../components/LeadershipTeam/LeadershipTeam';
import ServerChoiceBanner from '../components/ServerChoiceBanner/ServerChoiceBanner';

const CompanyPage = () => {
  return (
    <>
      <Navbar />
      <main className="page-content" style={{ backgroundColor: '#F8F8FA' }}>
        <CompanyHero />
        <WhoWeAre />
        {/* Leadership Team is built but hidden for MVP per requirements */}
        <LeadershipTeam visible={false} />
        <ServerChoiceBanner />
      </main>
      <Footer />
    </>
  );
};

export default CompanyPage;
