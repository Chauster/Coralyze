import React from 'react';
import { useHistory } from 'react-router-dom';
import './DashboardNavbar.scss';
import { Link } from 'react-router-dom';
import { RiDashboardLine } from 'react-icons/ri';
import { BiDevices, BiLogOut } from 'react-icons/bi';
import { IoSettingsOutline } from 'react-icons/io5';
// import { MdOutlineManageAccounts } from 'react-icons/md';
import logo from '../../images/logo-white.svg';

const DashboardNavbar = () => {
  const history = useHistory();
  const username = localStorage.getItem('username');
  const Logout = (event) => {
    event.preventDefault();

    const removeUserSession = () => {
      localStorage.removeItem('authToken');
      localStorage.removeItem('clientID');
      localStorage.removeItem('username');
      history.push('/');
    };
    removeUserSession();
  };
  return (
    <div>
      <nav class='dashnavbar'>
        <div class='dashnavbar__logo'>
          <Link to='/dashboard'>
            <img
              src={logo}
              alt='Coralyze Logo'
              width='150px'
              height='50px'
            ></img>
          </Link>
        </div>
        <div class='dashnavbar__profile'>
          <h4>Welcome</h4>
          <h5 className=''>{username}</h5>
        </div>
        <ul className='dashnavbar__parent'>
          <li className='dashnavbar__child'>
            <span className='dashnavbar__child__heading'>Status</span>
            <ul class='dashnavbar__links'>
              <li>
                <Link to='/dashboard'>
                  <RiDashboardLine class='dashnavbar__links__icon' />
                  <span class='dashnavbar__links__label'>Dashboard</span>
                </Link>
              </li>
            </ul>
          </li>
          <li className='dashnavbar__child'>
            <span className='dashnavbar__child__heading'>Settings</span>
            <ul class='dashnavbar__links'>
              <li>
                <Link to='/accountsettings'>
                  <IoSettingsOutline class='dashnavbar__links__icon' />
                  <span class='dashnavbar__links__label'>Account</span>
                </Link>
              </li>
              <li>
                <Link to='/devicemanagement'>
                  <BiDevices class='dashnavbar__links__icon' />
                  <span class='dashnavbar__links__label'>
                    <span className='dashnavbar__child__heading'>
                      Device Management
                    </span>
                  </span>
                </Link>
              </li>
            </ul>
          </li>
          <li className='dashnavbar__child'>
            <span className='dashnavbar__child__heading'>Exit</span>
            <ul class='dashnavbar__links'>
              <li>
                <Link to='/'>
                  <BiLogOut class='dashnavbar__links__icon' />
                  <span class='dashnavbar__links__label' onClick={Logout}>
                    Logout
                  </span>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default DashboardNavbar;
