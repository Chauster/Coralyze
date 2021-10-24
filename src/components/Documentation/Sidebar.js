import React from 'react';
import './Sidebar.scss';

const Sidebar = () => {
  return (
    <div>
      <nav class="sidebar">
        <h3>Using Coralyze</h3>
        <ul>
          <li>
            <a class="sidebar__link" href="#Introduction">
              Introduction
            </a>
          </li>
          <li>
            <a class="sidebar__link" href="#QSG">
              Quick Start Guide
            </a>
          </li>
          <li>
            <a class="sidebar__link" href="#DevicePrep">
              Device Preparation
            </a>
          </li>
          <li>
            <a class="sidebar__link" href="#CoralyzePackages">
              Coralyze packages
            </a>
          </li>
          <li>
            <a class="sidebar__link" href="#CD">
              Compatiable devices list
            </a>
          </li>
          <li>
            <a class="sidebar__link" href="#Register">
              Registering an account
            </a>
          </li>
          <li>
            <a class="sidebar__link" href="#Login">
              Logging In
            </a>
          </li>
          <li>
            <a class="sidebar__link" href="#ChangePassword">
              Changing your password
            </a>
          </li>
          <li>
            <a class="sidebar__link" href="#ResetPassword">
              Resetting your password
            </a>
          </li>
          <li>
            <a class="sidebar__link" href="#DashboardGuide">
              Dashboard Guide
            </a>
          </li>
          <li>
            <a class="sidebar__link" href="#AddDevice">
              Adding IoT device
            </a>
          </li>
          <li>
            <a class="sidebar__link" href="#ResetChartData">
              Resetting IoT device data
            </a>
          </li>
          <li>
            <a class="sidebar__link" href="#CustomiseUI">
              Customising UI
            </a>
          </li>
          <li>
            <a class="sidebar__link" href="#Report">
              Report a bug
            </a>
          </li>
          <li>
            <a class="sidebar__link" href="#ContactUs">
              Where to contact us
            </a>
          </li>
          <li>
            <a class="sidebar__link" href="#Troubleshooting">
              Troubleshooting
            </a>
          </li>
          <li>
            <a class="sidebar__link" href="#">
              
            </a>
          </li>
          <li>
            <a class="sidebar__link" href="#Device">
              Tinker Edge T Example
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
