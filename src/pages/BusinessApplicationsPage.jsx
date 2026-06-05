import React from "react";
import BusinessApplicationsHero from "../components/BusinessApplicationsHero/BusinessApplicationsHero";
import BusinessApplicationsFeatures from "../components/BusinessApplicationsFeatures/BusinessApplicationsFeatures";
import BusinessApplicationsWorkloads from "../components/BusinessApplicationsWorkloads/BusinessApplicationsWorkloads";
import BusinessApplicationsUseCases from "../components/BusinessApplicationsUseCases/BusinessApplicationsUseCases";
import BusinessApplicationsCTA from "../components/BusinessApplicationsCTA/BusinessApplicationsCTA";
import BusinessApplicationsInfrastructure from "../components/BusinessApplicationsInfrastructure/BusinessApplicationsInfrastructure";
import BusinessApplicationsPerformance from "../components/BusinessApplicationsPerformance/BusinessApplicationsPerformance";
import BusinessApplicationsSecurity from "../components/BusinessApplicationsSecurity/BusinessApplicationsSecurity";

const BusinessApplicationsPage = () => {
  return (
    <>
      <BusinessApplicationsHero />
      <BusinessApplicationsFeatures />
      <BusinessApplicationsWorkloads />
      <BusinessApplicationsPerformance />
      <BusinessApplicationsSecurity />
      <BusinessApplicationsUseCases />
      <BusinessApplicationsInfrastructure />
      <BusinessApplicationsCTA />
    </>
  );
};

export default BusinessApplicationsPage;
