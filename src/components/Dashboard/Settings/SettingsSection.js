import axios from 'axios';
import React, { useState } from 'react';
import { Button } from '../../Button';
import defaultimg from '../../../images/portraits/defaultimg.jpg';
import './SettingsSection.css';

function SettingsSection() {
  const [_id, setID] = useState('');
  const [firstName, setFirstName] = useState('');
  const [familyName, setFamilyName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  let handleIDChange = (event) => {
    setID(event.target.value);
  };

  let handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  let handleFamilyNameChange = (event) => {
    setFamilyName(event.target.value);
  };

  let handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  let handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  let handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  let handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  let handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      _id: username,
      firstName: firstName,
      familyName: familyName,
      username: username,
      password: password,
      email: email,
      phone: phone,
    };

    // for testing purposes
    console.log(user);

    axios
      .post('http://localhost:5000/users/update', user)
      .then((res) => console.log(res.data));
  };

  return (
    <>
      <section className="settings">
        <div className="settings__header">
          <h2>Settings.</h2>
        </div>
        <div className="settings__content">
          {/* grid starts here */}
          <div className="settings__grid">
            <div className="settings__item">
              <div className="settings__item-header">Settings</div>
              <ul className="settings__navbar-list">
                <li className="settings__navbar-item">Personal Information</li>
                <li className="settings__navbar-item">Account Information</li>
                <li className="settings__navbar-item">Site Preferences</li>
              </ul>
            </div>
            <div className="settings__item">
              <div className="settings__item-header">Update Details</div>
              <form autoComplete="off" className="settings__form">
                <div className="settings__form-inputs">
                  <div class="form__subtitle">
                    <label htmlFor="fname" className="form__label">
                      First Name
                    </label>
                  </div>
                  <input
                    required
                    minLength="2"
                    id="fname"
                    type="text"
                    name="fname"
                    className="settings__form-field"
                    placeholder="Enter your first name"
                    // value={firstName}
                    // onChange={handleFirstNameChange}
                  />
                </div>
                <div className="settings__form-inputs">
                  <div class="form__subtitle">
                    <label htmlFor="faname" className="form__label">
                      Family Name
                    </label>
                  </div>
                  <input
                    required
                    minLength="2"
                    id="faname"
                    type="text"
                    name="faname"
                    className="settings__form-field"
                    placeholder="Enter your family name"
                    // value={familyName}
                    // onChange={handleFamilyNameChange}
                  />
                </div>
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
                    // value={username}
                    // onChange={(handleIDChange, handleUsernameChange)}
                  />
                </div>
                <div className="settings__form-inputs">
                  <div class="form__subtitle">
                    <label htmlFor="password" className="form__label">
                      Password
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
                    // value={password}
                    // onChange={handlePasswordChange}
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
                    // value={email}
                    // onChange={handleEmailChange}
                  />
                </div>
                <div className="settings__form-inputs">
                  <div class="form__subtitle">
                    <label htmlFor="phnumber" className="form__label">
                      Phone Number
                    </label>
                  </div>
                  <input
                    required
                    minLength="10"
                    maxLength="10"
                    // pattern="[-+]?[0-9]"
                    id="phnumber"
                    type="numeric"
                    name="phnumber"
                    className="settings__form-field"
                    placeholder="Enter your phone number"
                    // value={phone}
                    // onChange={handlePhoneChange}
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
            <div className="settings__item">
              <div className="settings__item-header">Profile</div>
              <div className="profile__image">
                <img src={defaultimg} />
              </div>
              <div className="profile__edit-btn">
                <button className="edit__btn">Edit Profile</button>
              </div>
              <div className="profile__name">Default User</div>
              <div className="profile__description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic,
                aliquam!
              </div>
            </div>
          </div>
          {/* grid ends here */}
        </div>
      </section>
    </>
  );
}

export default SettingsSection;
