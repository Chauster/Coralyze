import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
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

  const success = () => {
    toast.success('Device added');
  };

  const failed = () => {
    toast.error('Device could not be added', {
      position: toast.POSITION.TOP_CENTER,
    });
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
      success();
      clearState();
    } catch (error) {
      failed();
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
      // console.log(data.deviceData);
    }
    fetchDevices();
  }, [devices]);

  let removeDevice = () => {
    // get localStorage device_id
    // remove id from devices array
    const _id = localStorage.getItem('clientID');
    const removableDevice = localStorage.getItem('dev_id');
    // create route to remove device
    alert(_id, removableDevice);
  };

  let handleUpdate = () => {
    // async function fetchDevices() {
    //   const _id = localStorage.getItem('clientID');
    //   const updateableDevice = localStorage.getItem('dev_id');
    //   const { data } = await axios.post(
    //     '/users/updateDevice/',
    //     { _id, updateableDevice, device_name, device_ip },
    //     config
    //   );
    // }
  };

  return (
    <React.Fragment>
      <div className="device-mgmt__container">
        <div className="device-mgmt__container-header">Device Management</div>
        <ul className="dev__list">
          {/* device component */}
          {Object.keys(devices)
            .filter(
              (dev) => devices[dev]._id === localStorage.getItem('dev_id')
            )
            .map((device) => {
              return (
                <li className="dev__box">
                  <span className="dev__icon">
                    <FiCpu />
                  </span>
                  <br />
                  <span key={devices[device]._id} className="dev__name">
                    {devices[device].name}
                  </span>
                  <br />
                  <span key={devices[device]._id} className="dev__ip">
                    {devices[device].ip_add}
                  </span>
                </li>
              );
            })}
        </ul>
        <div className="device-mgmt__form">
          <form autoComplete="off" className="form" onSubmit={handleUpdate}>
            <div className="device-mgmt__form-inputs">
              <label htmlFor="name" className="device-mgmt__label">
                Updated Device Name
              </label>
              <input
                required
                minLength="2"
                id="name"
                type="text"
                name="name"
                placeholder="Enter new device name"
                className="device-mgmt__form-input"
                value={device_name}
                onChange={handleDeviceNameChange}
              />
            </div>
            <div className="device-mgmt__form-inputs">
              <label htmlFor="name" className="device-mgmt__label">
                Updated Device IP
              </label>
              <input
                required
                minLength="2"
                id="ip_add"
                type="text"
                name="ip_add"
                placeholder="Enter new ip address"
                className="device-mgmt__form-input"
                value={device_ip}
                onChange={handleDeviceIPChange}
              />
            </div>
            <div className="device-mgmt__all-buttons">
              <div className="device-mgmt__button-container">
                {/* <Button buttonSize="btn--medium" buttonColor="primary" type="submit">
              Add Device
            </Button> */}
                <button type="button" class="button" type="submit">
                  <span class="button__text">Update Device</span>
                </button>
              </div>
              <div className="device-mgmt__button-container">
                {/* <Button buttonSize="btn--medium" buttonColor="primary" type="submit">
              Add Device
            </Button> */}
                <button type="button" class="button" onClick={removeDevice}>
                  <span class="button__text">Remove Device</span>
                </button>
              </div>
            </div>
            <span className="dev__note">
              To add a new device, click on the 'Device Management' link on the
              sidebar.
            </span>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default DeviceManagement;
