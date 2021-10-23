import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Documentation/Sidebar';
import TechnicalSection from '../components/Documentation/TechnicalSection';
import Footer from '../components/Footer/Footer';
const documentation = () => {
  return (
    <>
      <div className="widthtest">
        <Navbar></Navbar>
        <Sidebar></Sidebar>
        <TechnicalSection></TechnicalSection>
        {/* <Footer></Footer> */}
      </div>
    </>
  );
};

export default documentation;
