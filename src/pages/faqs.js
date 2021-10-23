import React from 'react';
import Navbar from '../components/Navbar';
import FaqSection from '../components/FAQS/FaqSection';
import Footer from '../components/Footer/Footer';

function faqs() {
  return (
    <>
      <Navbar></Navbar>
      <FaqSection></FaqSection>
      <Footer></Footer>
    </>
  );
}

export default faqs;
