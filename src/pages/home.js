import React from 'react';
import Herosection from '../components/HomePage/Herosection';
import Carousel from '../components/HomePage/Carousel';
import Feature from '../components/HomePage/Featurev2';
import Featuretest from '../components/HomePage/Featuresection';
import CTA from '../components/HomePage/CTA';
import Footer from '../components/Footer/Footer';
import PricingPackages from '../components/HomePage/PricingPackages';
const home = () => {
  return (
    <>
      <Herosection></Herosection>
      <Feature></Feature>
      <Featuretest></Featuretest>
      <PricingPackages></PricingPackages>
      <Carousel></Carousel>
      <CTA></CTA>
      <Footer></Footer>
    </>
  );
};

export default home;
