import axios from 'axios';
import React, { useState } from 'react';
import { Button } from '../../Button';
import defaultimg from '../../../images/portraits/defaultimg.jpg';
import './AccountSettings.css';
import { Link } from 'react-router-dom';

function AccountSettings() {
  const [_id, setID] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');

  let handleIDChange = (event) => {
    setID(event.target.value);
  };

  let handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  let handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  let handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  let handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const clearState = () => {
    setID('');
    setUsername('');
    setPassword('');
    setConfirmPassword('');
    setEmail('');
  };

  let checkMatch = () => {
    return password !== confirmPassword ? false : true;
  };

  let updateUser = () => {
    const user = {
      _id: username,
      username: username,
      password: password,
      email: email,
    };

    // for testing purposes
    console.log(user);

    axios
      .post(`http://localhost:5000/users/update/${username}`, user)
      .then((res) => {
        alert(`User updated.`);
        console.log(res.data);
        clearState();
      })
      .catch((err) => {
        alert(`User doesn't exist!`);
        console.log('Error: ' + err);
      });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    return checkMatch() === true
      ? updateUser()
      : alert(`Passwords do not match!`);
  };

  return (
    <React.Fragment>
      <div className="settings__content">
        {/* grid starts here */}
        <div className="settings__item">
          <div className="settings__item-header">Update Details</div>
          <form
            autoComplete="off"
            className="settings__form"
            onSubmit={handleSubmit}
          >
            <div className="settings__form-inputs">
              <div class="form__subtitle">
                <label htmlFor="username" className="form__label">
                  Username
                </label>
              </div>
              <input
                required
                minLength="3"
                id="username"
                type="text"
                name="username"
                className="settings__form-field"
                placeholder="Enter your username"
                value={username}
                onChange={(handleIDChange, handleUsernameChange)}
              />
            </div>
            <div className="settings__form-inputs">
              <div class="form__subtitle">
                <label htmlFor="password" className="form__label">
                  New Password
                </label>
              </div>
              <input
                required
                minLength="8"
                pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$"
                title="Please include at least 1 uppercase character, 1 lowercase character, and 1 number."
                id="password"
                type="password"
                name="password"
                className="settings__form-field"
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="settings__form-inputs">
              <div class="form__subtitle">
                <label htmlFor="password" className="form__label">
                  Confirm Password
                </label>
              </div>
              <input
                // disabled
                required
                title="Please check that the passwords match."
                id="cpassword"
                type="password"
                name="cpassword"
                className="settings__form-field"
                // placeholder="Confirm your password (field currently disabled)"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
            </div>
            <div className="settings__form-inputs">
              <div class="form__subtitle">
                <label htmlFor="email" className="form__label">
                  Email
                </label>
              </div>
              <input
                required
                title="The domain portion of the email address is invalid (the portion after the @)."
                pattern="^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$"
                id="email"
                type="email"
                name="email"
                className="settings__form-field"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="settings__form-btn">
              <Button
                buttonSize="btn--medium"
                buttonColor="primary"
                type="submit"
              >
                Update
              </Button>
            </div>
          </form>
        </div>
      </div>
      {/* grid ends here */}
    </React.Fragment>
  );
}

export default AccountSettings;
