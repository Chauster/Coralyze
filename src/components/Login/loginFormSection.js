import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { Button } from '../Button';
import { IoPersonCircle } from 'react-icons/io5';
import { RiLockPasswordLine } from 'react-icons/ri';
import rightimage from '../../images/login.png';

// import './loginFormSection.css'; REPLACED BY SCSS
import './loginFormSection.scss';

const LoginFormSection = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();
  
  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      history.push("/dashboard");
    }
  }, [history]);

  let handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  let handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  let handleSubmit = async (event) => {
    event.preventDefault();


    const user = {
      username: username,
      password: password,
    };

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post('/users/login', { username, password }, config);
      console.log(data);
      localStorage.setItem('authToken', data.token);
      localStorage.setItem('username', username); // testing
      history.push("/dashboard");

    } catch (error) {
      setError(error?.response?.data.error);
      setTimeout(() => {
        setError('');
      }, 5000);
      return setError("Invalid credentials");
    }

    try {
      const { data } = await axios.post('/users/clientID', { username }, config);
      localStorage.setItem('clientID', data.clientID);
    } catch (error) {
      setError(error?.response?.data.error);
      setTimeout(() => {
        setError('');
      }, 5000);
      return setError("Could not retrieve client id");
    }


    // for testing purposes
    // console.log(user);

    // axios
    //   .get(`http://localhost:5000/users/authenticate/${username}`)
    //   .then((res) => {
    //     res.data.password === user.password
    //       ? (window.location = '/dashboard')
    //       : alert(`Incorrect Username or Password`);
    //     console.log(res.data); // object from cloud
    //     console.log(res.data.password); // current user input
    //     console.log(res.password); // undefined
    //     console.log(password); // current user input
    //   })
    //   .catch((err) => {
    //     alert(`User doesn't exist!`);
    //     // console.log("User doesn't exist");
    //     console.log('Error: ' + err);
    //   });

    // set fields to empty after submit
    // link to dashboard after success
  };

  return (
    <>
      <div className="loginsection">
        <form autoComplete="off" className="form" onSubmit={handleSubmit}>
          <div class="form__left">
            <h1 class="form__title">Login</h1>
            <div className="form__inputs">
              <div class="form__subtitle">
                <div class="form__icon__username">
                  <IoPersonCircle size={30} />
                </div>
                <label htmlFor="name" className="form__label">
                  Username
                </label>
              </div>
              <input
                required
                minLength="3"
                className="form__input"
                id="name"
                type="text"
                name="name"
                placeholder="Username"
                value={username}
                onChange={handleUsernameChange}
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
                // pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$"
                title="Please include at least 1 uppercase character, 1 lowercase character, and 1 number."
                className="form__input__pw"
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
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
            <img src={rightimage}></img>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginFormSection;
