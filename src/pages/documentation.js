import React from 'react';
import Sidebar from '../components/Documentation/Sidebar';
import TechnicalSection from '../components/Documentation/TechnicalSection';
import Footer from '../components/Footer/Footer';

const documentation = () => {
  return (
    <>
      <Sidebar></Sidebar>
      <TechnicalSection></TechnicalSection>
      <Footer></Footer>
    </>
  );
};

export default documentation;
