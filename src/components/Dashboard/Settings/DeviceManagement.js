import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from '../../Button';
import downloadIcon from '../../../images/icons/download.png';
// import defaultimg from '../../../images/portraits/defaultimg.jpg';
import './DeviceManagement.scss';
import { FiCpu } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function DeviceManagement() {
  const [device_name, setDeviceName] = useState('');
  const [device_ip, setDeviceIP] = useState('');
  const [devices, setDevices] = useState([]);
  const [error, setError] = useState('');

  const config = {
    header: {
      'Content-Type': 'application/json',
    },
  };

  let handleDeviceNameChange = (event) => {
    setDeviceName(event.target.value);
  };

  let handleDeviceIPChange = (event) => {
    setDeviceIP(event.target.value);
  };

  const clearState = () => {
    setDeviceName('');
    setDeviceIP('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      device_name: device_name,
      device_ip: device_ip,
    };

    const config = {
      header: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const _id = localStorage.getItem('clientID');
      const { data } = await axios.post(
        '/users/addDevice',
        { _id, device_name, device_ip },
        config
      );
      console.log(data);
      clearState();
    } catch (error) {
      setError(error?.response?.data.error);
      setTimeout(() => {
        setError('');
      }, 5000);
      return setError('Failed');
    }
  };

  useEffect(() => {
    async function fetchDevices() {
      const _id = localStorage.getItem('clientID');
      const { data } = await axios.post(
        '/users/getdevicedata/',
        { _id },
        config
      );
      setDevices(data.deviceData);
      console.log(data.deviceData);
    }
    fetchDevices();
  }, [devices]);

  const Device = (props) => {
    return (
      <li className="dev__box">
        <Link to="/devicemanagement">
          <span className="dev__icon">
            <FiCpu />
          </span>
          <br />
          <span className="dev__name">{props.name}</span>
          <br />
          <span className="dev__ip">{props.ip_add}</span>
          <span className="ip-port__separator">:</span>
          <span className="dev__port">{props.port}</span>
        </Link>
      </li>
    );
  };

  function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute(
      'href',
      'data:text/plain;charset=utf-8,' + encodeURIComponent(text)
    );
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }

  const clientID = localStorage.getItem('clientID');
  // console.log(clientID);
  const downloadPackage = (e) => {
    e.preventDefault();

    download('clientID.txt', clientID);

    // https://drive.google.com/uc?export=download&id=
    var url =
      'https://drive.google.com/uc?export=download&id=18Fijin_woUoulXxzYfyd2ptnMP4Z9Axs'; // data_ex.py / zipped

    window.open(url, '_blank');
  };

  return (
    <React.Fragment>
      <div className="device-mgmt__container">
        <div className="device-mgmt__container-header">Device Management</div>
        {/* <ul className="dev__list">
          <Device name="Tinker Edge T" ip_add="192.168.1.1" port="22"></Device>
          <Device name="NVIDIA Xavier" ip_add="192.168.1.2" port="22"></Device>
          <Device name="Tinker Edge R" ip_add="192.168.1.3" port="22"></Device>
          <Device name="Acer AiSage" ip_add="192.168.1.4" port="22"></Device>
        </ul> */}
        <div className="device-mgmt__form">
          <form autoComplete="off" className="form" onSubmit={handleSubmit}>
            <div className="device-mgmt__form-inputs">
              <label htmlFor="name" className="device-mgmt__label">
                Device Name
              </label>
              <input
                required
                minLength="2"
                id="name"
                type="text"
                name="name"
                placeholder="Enter device name"
                className="device-mgmt__form-input"
                value={device_name}
                onChange={handleDeviceNameChange}
              />
            </div>
            <div className="device-mgmt__form-inputs">
              <label htmlFor="name" className="device-mgmt__label">
                Device IP
              </label>
              <input
                required
                minLength="2"
                id="ip_add"
                type="text"
                name="ip_add"
                placeholder="Enter ip address"
                className="device-mgmt__form-input"
                value={device_ip}
                onChange={handleDeviceIPChange}
              />
            </div>
            <div className="device-mgmt__button-container">
              {/* <Button buttonSize="btn--medium" buttonColor="primary" type="submit">
              Add Device
            </Button> */}
              <button type="button" class="button" type="submit">
                <span class="button__text">Add Device</span>
                <span class="button__icon">
                  <ion-icon name="cloud-download-outline"></ion-icon>
                  <img
                    src={downloadIcon}
                    alt=""
                    width="25px"
                    height="25px"
                  ></img>
                </span>
              </button>
            </div>
            <div className="device-mgmt__button-container">
              <button type="button" class="button" onClick={downloadPackage}>
                <span class="button__text">
                  Download
                  <br />
                  Coralyze Dependencies
                </span>
                <span class="button__icon">
                  <ion-icon name="cloud-download-outline"></ion-icon>
                  <img
                    src={downloadIcon}
                    alt=""
                    width="25px"
                    height="25px"
                  ></img>
                </span>
              </button>
            </div>
          </form>
        </div>
        <div className="row__devices">
          {devices.map((device) => (
            <>
              <p>{device.name}</p>
              <p>{device.ip_add}</p>
              <ul className="dev__list">
                <li className="dev__box">
                  <Link to="/devicemanagement">
                    <span className="dev__icon">
                      <FiCpu />
                    </span>
                    <br />
                    <span className="dev__name">{device.name}</span>
                    <br />
                    <span className="dev__ip">{device.ip_add}</span>
                  </Link>
                </li>
              </ul>
            </>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default DeviceManagement;
