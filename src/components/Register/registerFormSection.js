import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Button } from '../Button';
import { CgNametag } from 'react-icons/cg';
import { GiFamilyTree } from 'react-icons/gi';
import { IoPersonCircle } from 'react-icons/io5';
import { RiLockPasswordLine } from 'react-icons/ri';
import { HiOutlineMail } from 'react-icons/hi';
import { BiPhoneCall } from 'react-icons/bi';
// import './registerFormSection.css'; REPLACED BY SCSS
import './registerFormSection.scss';

const RegisterFormSection = () => {
  const [_id, setID] = useState('');
  // const [firstName, setFirstName] = useState('');
  // const [familyName, setFamilyName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();
  // const [phone, setPhone] = useState('');

  // componentDidMount

  let handleIDChange = (event) => {
    setID(event.target.value);
  };

  // let handleFirstNameChange = (event) => {
  //   setFirstName(event.target.value);
  // };

  // let handleFamilyNameChange = (event) => {
  //   setFamilyName(event.target.value);
  // };

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

  // let handlePhoneChange = (event) => {
  //   setPhone(event.target.value);
  // };

  const clearState = () => {
    setID('');
    // setFirstName('');
    // setFamilyName('');
    setUsername('');
    setPassword('');
    setConfirmPassword('');
    setEmail('');
    // setPhone('');
  };

  // useEffect(() => {
  //   if(localStorage.getItem("authToken")) {
  //     history.push("/dashboard");
  //   }
  // }, [history]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const user = {
    //   _id: username,
    //   // firstName: firstName,
    //   // familyName: familyName,
    //   username: username,
    //   password: password,
    //   confirmPassword: setConfirmPassword,
    //   email: email,
    //   // phone: phone,
    // };

    // // for testing purposes
    // console.log(user);

    // davo testing
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    if(password !== confirmPassword) {
      setPassword('');
      setConfirmPassword('');
      setTimeout(() => {
        setError('');
      }, 5000); // time of 5000ms
      return setError("Passwords do not match");
    }

    // try {
      // const { data } = await axios.post('/users/register', { username, email, password }, config).then((res) => {
      //   console.log(res.data);
      // });
      const { data } = await axios
      .post('/users/register', { username, email, password }, config)
      .catch(function (error) {
        if(error.response) {
          // testing
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
      });
      
      localStorage.setItem("authToken", data.token);

      const { test } = await axios
      .post('/users/insertDefaultChartData', {username}, config)
      .catch(function (error) {
        if(error.response) {
          // testing
          console.log(error.response.test);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
      });






      history.push("/");
    // } catch (error) {
    //   console.log(error.response.status);
    //   console.log(error.response.headers);
    //   setError(error?.response.data.error);
    //   setTimeout(() => {
    //     setError("");
    //   }, 5000);
    // }




    // axios.post('http://localhost:5000/users/add', user).then((res) => {
    //   console.log(res.data);
    //   clearState();
    // });

    // set state of form fields to empty after submit
  };

  return (
    <>
<div className="registersection">
        <form autoComplete="off" className="form" onSubmit={handleSubmit}>
            <div class="form__left">
              <h1 class="form__title">Register</h1>
            <div class="form__subheading">
              <p>Create an account with us</p>
            </div>
          {/* <div className="form__inputs">
            <div className="form__inputs__container">
            <div class="form__icons">
                <CgNametag size={30} />
              </div>
              <input
              required
              minLength="2"
              id="fname"
              type="text"
              name="fname"
              className="form__input"
              placeholder="Enter your first name"
              value={firstName}
              onChange={handleFirstNameChange}
            />
            </div>
          </div> */}

          {/* <div className="form__inputs">
          <div className="form__inputs__container">
          <div class="form__icons">
                <GiFamilyTree size={30} />
              </div>
            <input
              required
              minLength="2"
              id="faname"
              type="text"
              name="faname"
              className="form__input"
              placeholder="Enter your family name"
              value={familyName}
              onChange={handleFamilyNameChange}
            />
            </div>
          </div> */}

          <div className="form__inputs">
          <div className="form__inputs__container">
          <div class="form__icons">
                <IoPersonCircle size={30} />
              </div>
            <input
              required
              minLength="3"
              id="username"
              type="text"
              name="username"
              className="form__input"
              placeholder="Enter a username"
              value={username}
              onChange={(handleIDChange, handleUsernameChange)}
            />
            </div>
          </div>
          {error && <span className="error-message">{error}</span>}
          <div className="form__inputs">
          <div className="form__inputs__container">
          <div class="form__icons">
                <RiLockPasswordLine size={30} />
              </div>
            <input
              required
              minLength="8"
              pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$"
              title="Please include at least 1 uppercase character, 1 lowercase character, and 1 number."
              id="password"
              type="password"
              name="password"
              className="form__input"
              placeholder="Enter a password"
              value={password}
              onChange={handlePasswordChange}
            />
            </div>
          </div>
          {error && <span className="error-message">{error}</span>}
          <div className="form__inputs">
            <div className="form__inputs__container">
            <div class="form__icons">
                <RiLockPasswordLine size={30} />
              </div>
            <input
              required
              id="cpassword"
              type="password"
              name="cpassword"
              className="form__input"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
          </div>
          </div>
          <div className="form__inputs">
            <div className="form__inputs__container">
            <div class="form__icons">
                <HiOutlineMail size={30} />
              </div>
            <input
              required
              title="The domain portion of the email address is invalid (the portion after the @)."
              pattern="^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$"
              id="email"
              type="email"
              name="email"
              className="form__input"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
            />
            </div>
          </div>

          {/* <div className="form__inputs">
          <div className="form__inputs__container">
            <div class="form__icons">
              <BiPhoneCall size={30} />
            </div>
            <input
              required
              minLength="10"
              maxLength="10"
              // pattern="[-+]?[0-9]"
              id="phnumber"
              type="numeric"
              name="phnumber"
              className="form__input"
              placeholder="Enter your phone number"
              value={phone}
              onChange={handlePhoneChange}
            />
            </div>
          </div> */}

          <div class="form__confirm">
            <div class="form__confirm__tos">
              <p>
                By signing up, I accept the Inject DevOps <a href="/tos">Terms of Service</a> and acknowledge the <a href="/privacypolicy">Privacy Policy</a>.
              </p>
            </div>
          </div>
          <div class="form__confirm">
            <div class="form__confirm__tos">
              <p>
                Already have an account? Log in <a href="/login">here</a>.
              </p>
            </div>
          </div>
          <div className="form__btn">
            <Button buttonSize="btn--wide" buttonColor="blue" type="submit">
              Register
            </Button>
          </div>
          </div>
          <div class="form__right">
            <div class="form__right__container">
                <div class="form__right__container__header">
                    <h2>Features when you sign up</h2>
                </div>
                    <div class="form__right__container__feature">
                        <img src="https://www.freeiconspng.com/thumbs/checkmark-png/checkmark-png-transparent-33.png" alt="tick__image"/>
                            <h4>Personal Dashboard</h4>
                    </div>
                    <div class="form__right__container__feature">
                        <img src="https://www.freeiconspng.com/thumbs/checkmark-png/checkmark-png-transparent-33.png" alt="tick__image"/>
                            <h4>Free 10GB Storage Space</h4>
                    </div>
                    <div class="form__right__container__feature">
                        <img src="https://www.freeiconspng.com/thumbs/checkmark-png/checkmark-png-transparent-33.png" alt="tick__image"/>
                            <h4>Invite your friends and get more Space</h4>
                    </div>
                    <div class="form__right__container__feature">
                        <img src="https://www.freeiconspng.com/thumbs/checkmark-png/checkmark-png-transparent-33.png" alt="tick__image"/>
                            <h4>Customise your experience</h4>
                    </div>
                    <div class="form__right__container__feature">
                        <img src="https://www.freeiconspng.com/thumbs/checkmark-png/checkmark-png-transparent-33.png" alt="tick__image"/>
                            <h4>Subscribed to our newsletter and be kept up-to-date with the latest features!</h4>
                    </div>
                    <div class="form__right__container__feature">
                        <img src="https://www.freeiconspng.com/thumbs/checkmark-png/checkmark-png-transparent-33.png" alt="tick__image"/>
                            <h4>Access our 24/7 Live customer support</h4>
                    </div>
                    <div class="form__right__container__feature">
                        <img src="https://www.freeiconspng.com/thumbs/checkmark-png/checkmark-png-transparent-33.png" alt="tick__image"/>
                            <h4>Chance to receive special perks and offers</h4>
                    </div>
            </div>
        </div>
        </form>
        
      </div>
    </>
  );
}

export default RegisterFormSection;
