import React from 'react';
import DashboardNavbar from '../components/Dashboard/DashboardNavbar';
import SettingsSection from '../components/Dashboard/Settings/SettingsSection';

function settings() {
  return (
    <>
      <DashboardNavbar></DashboardNavbar>
      <SettingsSection></SettingsSection>
    </>
  );
}

export default settings;
