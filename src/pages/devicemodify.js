import React from 'react';
// import Navbar from '../components/Navbar';
import DashboardNavbar from '../components/Dashboard/DashboardNavbar';
import DeviceModify from '../components/Dashboard/Settings/DeviceModify';

function devicemodify() {
  return (
    <>
      <DashboardNavbar></DashboardNavbar>
      <DeviceModify></DeviceModify>
    </>
  );
}

export default devicemodify;
