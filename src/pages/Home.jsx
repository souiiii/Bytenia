import React from 'react';
import Hero from '../components/Hero/Hero';
import ServerSelection from '../components/ServerSelection/ServerSelection';
import Features from '../components/Features/Features';
import WhyChoose from '../components/WhyChoose/WhyChoose';
import CallToAction from '../components/CallToAction/CallToAction';
import FAQ from '../components/FAQ/FAQ';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <>
      <Hero />
      <ServerSelection />
      <Features />
      <WhyChoose />
      <CallToAction />
      <FAQ />
      <Footer />
    </>
  );
};

export default Home;
