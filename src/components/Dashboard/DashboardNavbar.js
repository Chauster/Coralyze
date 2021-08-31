import React from 'react';
import './DashboardNavbar.scss';
import { Link } from 'react-router-dom';
import { RiDashboardLine } from 'react-icons/ri';
import { BiDevices, BiSupport, BiLogOut } from 'react-icons/bi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { IoSettingsOutline } from 'react-icons/io5';
import logo from '../../images/logo-2.png';

const DashboardNavbar = () => {
  return (
    <div>
      <nav class="dashnavbar">
        {/* <div class="dashnavbar__logo">
          <Link to="/dashboard">
            <img src={logo} alt="Coralyze Logo"></img>
          </Link>
        </div> */}
        <ul class="dashnavbar__links">
          <li>
            <Link to="/dashboard">
              <RiDashboardLine class="dashnavbar__links__icon" />
              <span class="dashnavbar__links__label">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/devices">
              <BiDevices class="dashnavbar__links__icon" />
              <span class="dashnavbar__links__label">Devices</span>
            </Link>
          </li>
          <li>
            <Link to="/notifications">
              <IoMdNotificationsOutline class="dashnavbar__links__icon" />
              <span class="dashnavbar__links__label">Notifications</span>
            </Link>
          </li>
          <li>
            <Link to="/settings">
              <IoSettingsOutline class="dashnavbar__links__icon" />
              <span class="dashnavbar__links__label">Settings</span>
            </Link>
          </li>
          <li>
            <Link to="/support">
              <BiSupport class="dashnavbar__links__icon" />
              <span class="dashnavbar__links__label">Support</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              {/* to be changed to logout page or response */}
              <BiLogOut class="dashnavbar__links__icon" />
              <span class="dashnavbar__links__label">Logout</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Below is placeholder for now, to be removed later, this is to primarily test the dashnavbar and content widths */}
      {/* <div class="dashboard">
        <div class="dashboard__title">
          <h3>Test</h3>
        </div>
        <div class="dashboard__graph">INPUT GRAPH DATA HERE</div>
      </div> */}
    </div>
  );
};

export default DashboardNavbar;
