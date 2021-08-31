import React from 'react';
import Herosection from '../components/HomePage/Herosection';
import Carousel from '../components/HomePage/Carousel';
import Feature from '../components/HomePage/Featuresection';
import CTA from '../components/HomePage/CTA';
import Footer from '../components/Footer/Footer';
const home = () => {
  return (
    <>
      <Herosection></Herosection>
      <Carousel></Carousel>
      <Feature></Feature>
      <CTA></CTA>
      <Footer></Footer>
    </>
  );
};

export default home;
