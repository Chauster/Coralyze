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
  // const [current_id, setCurrent_id] = useState('');

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

  // store id, pass to next page
  let storeID = (event) => {
    // alert('Selected Device: ' + event.target.id);
    // store in localStorage
    // key is _id, value is name and ip_add
    localStorage.setItem('dev_id', event.target.id);
    // get from localStorage in next page (edit or remove that object -> update in mongoDB Atlas)
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
      console.log(data.deviceData);
    }
    fetchDevices();
  }, [devices]);

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
        <ul className="dev__list">
          {/* device component */}
          {Object.keys(devices).map((device) => (
            <li className="dev__box">
              <Link to="/devicemodify">
                <span
                  className="dev__icon"
                  id={devices[device]._id}
                  onClick={storeID}
                >
                  <FiCpu />
                </span>
                <br />
                <span
                  key={devices[device]._id}
                  className="dev__name"
                  id={devices[device]._id}
                  onClick={storeID}
                >
                  {devices[device].name}
                </span>
                <br />
                <span
                  key={devices[device]._id}
                  className="dev__ip"
                  id={devices[device]._id}
                  onClick={storeID}
                >
                  {devices[device].ip_add}
                </span>
              </Link>
            </li>
          ))}
        </ul>
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
            <div className="device-mgmt__all-buttons">
              <div className="device-mgmt__button-container">
                {/* <Button buttonSize="btn--medium" buttonColor="primary" type="submit">
              Add Device
            </Button> */}
                <button type="button" class="button" type="submit">
                  <span class="button__text">Add Device</span>
                  {/* <span class="button__icon">
                    <ion-icon name="cloud-download-outline"></ion-icon>
                    <img
                      src={downloadIcon}
                      alt=""
                      width="25px"
                      height="25px"
                    ></img>
                  </span> */}
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
            </div>
            <span className="dev__note">
              To edit or remove a device, click on the devices above.
            </span>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default DeviceManagement;
