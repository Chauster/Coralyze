import React from 'react';
import Navbar from '../components/Navbar';
import About from '../components/About/AboutBanner';
import Statement from '../components/About/MissionStatement';
import MeetTheTeam from '../components/About/MeetTheTeam';
import Footer from '../components/Footer/Footer';
const about = () => {
  return (
    <div>
      <Navbar></Navbar>
      <About></About>
      <Statement></Statement>
      <MeetTheTeam></MeetTheTeam>
      <Footer></Footer>
    </div>
  );
};

export default about;
