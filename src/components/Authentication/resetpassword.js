import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoPersonCircle } from 'react-icons/io5';
import { RiLockPasswordLine } from 'react-icons/ri';
import { Button } from '../Button';
import rightimage from '../../images/loginrightimage.svg';
import axios from 'axios';

import './resetpassword.scss';

const Resetpassword = ({ history, match }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        'Content-Type': 'application/json',
      },
    };

    if (password !== confirmPassword) {
      setPassword('');
      setConfirmPassword('');
      setTimeout(() => {
        setError('');
      }, 5000);
      return setError("Passwords don't match");
    }

    if (password < 8) {
      setPassword('');
      setConfirmPassword('');
      setTimeout(() => {
        setError('');
      }, 5000);
      return setError('Passwords have to be atleast 8 characters.');
    }
    //   d {
    //     const { data } = await axios.put(
    //       `/users/resetpassword/${match.params.resetToken}`,
    //       {
    //         password,
    //       },
    //       config
    //     );
    //     console.log(data);
    //     setSuccess(data.data);
    //   } catch (error) {
    //     console.log(error.response);
    //       setError(error.response.data.error);
    //       setTimeout(() => {
    //         setError("");
    //       }, 5000);
    //   }
    // };
    try {
      const { data } = await axios
        .put(
          `/users/resetpassword/${match.params.resetToken}`,
          { password },
          config
        )
        .catch(function (error) {
          if (error.response) {
            // testing
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log('Error', error.message);
          }

          if (error.response.status === 400) {
            setError(
              'Password reset process has expired, you may have already resetted your password or unsuccessfully completed this process in under 10 minutes. Please request another password reset.'
            );
          }
        });
      setSuccess(data.data);
    } catch (error) {
      // testing
    }
  };

  return (
    <>
      <div className='resetsection'>
        <form autoComplete='off' className='form' onSubmit={handleSubmit}>
          <div class='form__left'>
            <h1 class='form__title'>Reset password</h1>
            {error && <span className='error-message'>{error} </span>}
            {success && (
              <span className='success-message'>
                {success} <Link to='/login'>Login</Link>
              </span>
            )}
            <div className='form__inputs'>
              <div class='form__subtitle'>
                <div class='form__icon__password'>
                  <RiLockPasswordLine size={30} />
                </div>
                <label htmlFor='password' className='form__label'>
                  New password
                </label>
              </div>
              <input
                required
                minLength='8'
                pattern='^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$'
                title='Please include at least 1 uppercase character, 1 lowercase character, and 1 number.'
                className='form__input'
                id='password'
                type='password'
                name='password'
                placeholder='Enter password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* <i id="togglePassword" className="fa fa-eye"></i> */}
            </div>
            <div className='form__inputs'>
              <div class='form__subtitle'>
                <div class='form__icon__password'>
                  <RiLockPasswordLine size={30} />
                </div>
                <label htmlFor='password' className='form__label'>
                  Confirm your new password
                </label>
              </div>
              <input
                required
                minLength='8'
                pattern='^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$'
                title='Please include at least 1 uppercase character, 1 lowercase character, and 1 number.'
                className='form__input'
                id='confirmpassword'
                type='password'
                name='password'
                placeholder='Enter password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {/* <i id="togglePassword" className="fa fa-eye"></i> */}
            </div>
            <div className='form__login'>
              <Button buttonSize='btn--wide' buttonColor='blue' type='submit'>
                Reset
              </Button>
            </div>
          </div>{' '}
          {/*  end of left section */}
          <div class='form__right'>
            <img src={rightimage}></img>
          </div>
        </form>
      </div>
    </>
  );
};

export default Resetpassword;
