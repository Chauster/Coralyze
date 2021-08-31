import React from 'react';
import './DeviceSection.css';
import { FiCpu } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function DeviceSection() {
  return (
    <>
      <div className="main__container">
        <h3>Device management.</h3>
        <ul className="element__list">
          <li className="element__item">
            <Link to="/livestream">
              <div className="device__icons">
                <FiCpu />
              </div>
              Device #1
              <span className="device__info">
                IP: 10.0.0.1
                <br />
                Signal: 10 dBm
              </span>
            </Link>
          </li>
          <li className="element__item">
            <Link to="/livestream">
              <div className="device__icons">
                <FiCpu />
              </div>
              Device #2
              <span className="device__info">
                IP: 10.0.0.2
                <br />
                Signal: -5 dBm
              </span>
            </Link>
          </li>
          <li className="element__item">
            <Link to="/livestream">
              <div className="device__icons">
                <FiCpu />
              </div>
              Device #3
              <span className="device__info">
                IP: 10.0.0.3
                <br />
                Signal: 25 dBm
              </span>
            </Link>
          </li>
          <li className="element__item">
            <Link to="/livestream">
              <div className="device__icons">
                <FiCpu />
              </div>
              Device #4
              <span className="device__info">
                IP: 10.0.0.4
                <br />
                Signal: 15 dBm
              </span>
            </Link>
          </li>
          <li className="element__item">
            <Link to="/livestream">
              <div className="device__icons">
                <FiCpu />
              </div>
              Device #5
              <span className="device__info">
                IP: 10.0.0.5
                <br />
                Signal: 5 dBm
              </span>
            </Link>
          </li>
          <li className="element__item">
            <Link to="/livestream">
              <div className="device__icons">
                <FiCpu />
              </div>
              Device #6
              <span className="device__info">
                IP: 10.0.0.6
                <br />
                Signal: -15 dBm
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default DeviceSection;
