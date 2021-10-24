import React, { useRef, useEffect } from 'react';
import './Divider.scss';
import ctaImage from '../../images/CTAv2.svg';
import { Button } from '../Button';
import { Link } from 'react-router-dom';

const Divider = () => {
  return (
    <section class='divider'>
      <div className='divider__container'>
        <div class='divider__intro'>
          <h3>
            Join our journey
            <br /> on making AI practical
          </h3>
        </div>
        <div class='divider__cta'>
          <Link to='/register'>
            <Button buttonSize='btn--wide' buttonColor='blue'>
              Register
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Divider;
