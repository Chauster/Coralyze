import React from 'react';
import Navbar from '../components/Navbar';
import Herosection from '../components/HomePage/Herosection';
import Carousel from '../components/HomePage/Carousel';
import Feature from '../components/HomePage/Featurev2';
import Divider from '../components/HomePage/Divider';
import Featuretest from '../components/HomePage/Featuresection';
import CTA from '../components/HomePage/CTA';
import Footer from '../components/Footer/Footer';
import PricingPackages from '../components/HomePage/PricingPackages';
const home = () => {
  return (
    <>
      <Navbar></Navbar>
      <Herosection></Herosection>
      <Feature></Feature>
      <Divider></Divider>
      <Featuretest></Featuretest>
      <PricingPackages></PricingPackages>
      <Carousel></Carousel>
      <CTA></CTA>
      <Footer></Footer>
    </>
  );
};

export default home;
