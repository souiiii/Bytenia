import React from "react";
import WebAndEmailHero from "../components/WebAndEmailHero/WebAndEmailHero";
import WebAndEmailWhyChoose from "../components/WebAndEmailWhyChoose/WebAndEmailWhyChoose";
import WebAndEmailCorporate from "../components/WebAndEmailCorporate/WebAndEmailCorporate";
import WebAndEmailHosting from "../components/WebAndEmailHosting/WebAndEmailHosting";
import WebAndEmailSecurity from "../components/WebAndEmailSecurity/WebAndEmailSecurity";
import WebAndEmailCTA from "../components/WebAndEmailCTA/WebAndEmailCTA";

const WebAndEmailPage = () => {
  return (
    <>
      <WebAndEmailHero />
      <WebAndEmailWhyChoose />
      <WebAndEmailCorporate />
      <WebAndEmailHosting />
      <WebAndEmailSecurity />
      <WebAndEmailCTA />
    </>
  );
};

export default WebAndEmailPage;
