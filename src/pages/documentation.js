import React from 'react';
import Sidebar from '../components/Documentation/Sidebar';
import TechnicalSection from '../components/Documentation/TechnicalSection';
import Footer from '../components/Footer/Footer';
const documentation = () => {
  return (
    <>
    <div className="widthtest">
      <Sidebar></Sidebar>
      <TechnicalSection></TechnicalSection>
      {/* <Footer></Footer> */}
    </div>
    </>
  );
};

export default documentation;
