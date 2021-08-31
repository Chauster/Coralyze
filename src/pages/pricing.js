import React from 'react';
import CTA from '../components/HomePage/CTA';
import Footer from '../components/Footer/Footer';
import PricingBanner from '../components/Pricing/PricingBanner';
import PricingPackages from '../components/Pricing/PricingPackages';

const Pricing = () => {
  return (
    <>
      <PricingBanner></PricingBanner>
      <PricingPackages></PricingPackages>
      <CTA></CTA>
      <Footer></Footer>
    </>
  );
};

export default Pricing;
