import React from 'react';
import { useState } from 'react';
import './DeviceSection.css';
import { FiCpu } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Button } from '../Button';
import { IoPersonCircle } from 'react-icons/io5';
import { RiLockPasswordLine } from 'react-icons/ri';
import axios from 'axios';

function DeviceSection() {

  const [device_name, setDeviceName] = useState('');
  const [device_ip, setDeviceIP] = useState('');
  const [error, setError] = useState('');

  let handleDeviceNameChange = (event) => {
    setDeviceName(event.target.value);
  };

  let handleDeviceIPChange = (event) => {
    setDeviceIP(event.target.value);
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      device_name: device_name,
      device_ip: device_ip,
    };

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const _id = localStorage.getItem('clientID');
      const { data } = await axios.post('/users/addDevice', { _id, device_name, device_ip }, config)
      console.log(data);
    } catch (error) {
      setError(error?.response?.data.error);
      setTimeout(() => {
        setError('');
      }, 5000);
      return setError("Failed");
    }
  }






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

        <div class="container">
          <div class="wrapper">
            <div class="main">
              <div class="main__header">
                <h1>
                  Link your IoT Device
                </h1>
              </div>
              <div class="main__content">
                <div class="main__subcontent">
                  <p>Connecting a device (like a development kit or your computer) to Coralyze requires the completion of the following steps. In this process you will:</p>
                </div>
                <div class="main__steps">
                  <div class="main__steps__img">
                    <img src="">

                    </img>
                  </div>
                  <div class="main__steps__info">
                    <h3>Register a device</h3>
                    <p>A thing is the representation and record of your physical device in the cloud. Any physical device needs a thing record in order to work with AWS IoT.</p>
                  </div>
                </div>
                <div class="main__steps">
                  <div class="main__steps__img">
                    <img src="">

                    </img>
                  </div>
                  <div class="main__steps__info">
                    <h3>Download a connection kit</h3>
                    <p>The connection kit includes some important components: security credentials, the SDK of your choice, and a sample project.</p>
                  </div>
                </div>
                <div class="main__steps">
                  <div class="main__steps__img">
                    <img src="">

                    </img>
                  </div>
                  <div class="main__steps__info">
                    <h3>Configure and test your device</h3>
                    <p>Using the connection kit, you will configure your device by transferring files and running a script, and test that it is connected to AWS IoT correctly.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <form autoComplete="off" className="form" onSubmit={handleSubmit}>
          <div class="form__left">
            <h1 class="form__title">Add device data</h1>
            <div className="form__inputs">
              <div class="form__subtitle">
                <div class="form__icon__username">
                  <IoPersonCircle size={30} />
                </div>
                <label htmlFor="name" className="form__label">
                  Device name
                </label>
              </div>
              <input
                required
                minLength="3"
                className="form__input"
                id="name"
                type="text"
                name="name"
                placeholder="Enter username"
                value={device_name}
                onChange={handleDeviceNameChange}
              />
            </div>
            { error && <span className="error-message">{error}</span> }
            <div className="form__inputs">
              <div class="form__subtitle">
                <div class="form__icon__password">
                  <RiLockPasswordLine size={30} />
                </div>
                <label htmlFor="password" className="form__label">
                  Password
                </label>
              </div>
              <input
                required
                minLength="1"
                title="Please include at least 1 uppercase character, 1 lowercase character, and 1 number."
                className="form__input__pw"
                id="password"
                type="text"
                name="password"
                placeholder="Enter password"
                value={device_ip}
                onChange={handleDeviceIPChange}
              />
              {/* <i id="togglePassword" className="fa fa-eye"></i> */}
            </div>
            <div class="form__forgotpassword">
            <div class="form__forgotpassword__link">
              <p>
                <a href="/forgotpassword">Forgotten your Password?</a>
              </p>
            </div>
          </div>
            <div className="form__login">
              <Button buttonSize="btn--wide" buttonColor="blue" type="submit">
                Login
              </Button>
            </div>
            <div class="form__register">
              <p>Don't have an account? Don't worry.</p>
              <Link to="/register">
                <Button buttonSize="btn--small" buttonColor="blue">
                  Create an account here.
                </Button>
              </Link>
            </div>
          </div>{' '}
          {/*  end of left section */}
          <div class="form__right">
            
          </div>
        </form>
      </div>
    </>
  );
}

export default DeviceSection;
