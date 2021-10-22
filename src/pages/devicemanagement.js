import React from 'react';
import Navbar from '../components/Navbar';
import DashboardNavbar from '../components/Dashboard/DashboardNavbar';
import DeviceManagement from '../components/Dashboard/Settings/DeviceManagement';

function devicemanagement() {
  return (
    <>
        <DashboardNavbar></DashboardNavbar>
        <DeviceManagement></DeviceManagement>
    </>
  );
}

export default devicemanagement;