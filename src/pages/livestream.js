import React from 'react';
import DashboardNavbar from '../components/Dashboard/DashboardNavbar';
import Stream from '../components/Dashboard/StreamSection';

function livestream() {
  return (
    <>
      <DashboardNavbar></DashboardNavbar>
      <Stream></Stream>
    </>
  );
}

export default livestream;
