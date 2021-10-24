import { useState } from 'react';
import axios from 'axios';
import './forgotpassword.scss';
import { Button } from '../Button';
import rightimage from '../../images/forgotpassword.svg';

const Forgotpassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const { data } = await axios.post(
        '/users/forgotpassword/',
        { email },
        config
      );

      setSuccess(data.data);
    } catch (error) {
      setError(error.response.data.error);
      setEmail('');
      setTimeout(() => {
        setError('');
      }, 5000);
    }
  };

  return (
    <>
      <div className='forgotpasswordsection'>
        <form onSubmit={handleSubmit} className='form'>
          <div className='form__left'>
            <h1 className='form__title'>Forgot Password</h1>
            {error && <span className='error-message'>{error}</span>}
            {success && <span className='success-message'>{success}</span>}
            <div className='form__inputs'>
              <div class='form__subtitle'>
                Please enter the email address you used to register the account
                with. We will send you a reset password confirmation to the
                email.
              </div>
              <label htmlFor='name' className='form__label'>
                Email
              </label>
              <input
                type='email'
                required
                className='form__input'
                id='email'
                placeholder='Enter your email address'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='form__btn'>
              <Button buttonSize='btn--wide' buttonColor='blue' type='submit'>
                Send
              </Button>
            </div>
          </div>
          <div className='form__right'>
            <img src={rightimage}></img>
          </div>
        </form>
      </div>
    </>
  );
};

export default Forgotpassword;
