import { useState, useEffect } from 'react';
import './AboutBanner.scss';
import logo from '../../images/company-banner.png';
const AboutBanner = () => {
  return (
    <div class='About'>
      <div class='About__stripe'>
        <div className='About__stripe__container'>
          <div className='About__stripe__container__stripe__one'></div>
          <div className='About__stripe__container__stripe__two'></div>
          <div className='About__stripe__container__stripe__three'></div>
        </div>
      </div>
      <div class='About__introduction'>
        <div class='About__introduction__title'>
          <h2>About Us</h2>
        </div>
        <div class='About__introduction__subtitle'>
          <h2>Pioneering the Future.</h2>
        </div>
        <div class='About__introduction__description'>
          <p>Coralyze, a seamless AI detection application that just works.</p>
        </div>
      </div>
      <div class='About__story__container'>
        <div class='About__story__left'>
          <div class='About__story__left__title'>
            <h3>Our Company</h3>
          </div>
          <div class='About__story__left__description'>
            <p>
              We at INJECT DevOps, are honoured to develop a cutting edge
              application that utilises the renowned NVIDIA Jetson device. The
              team comprises of seven high achieving final year computer science
              and information technology undergraduate students. We are
              passionate to deliver this project at the atmost excellence,
              hoping to deliver users a sense of innovation. Our approach is to
              be open, transparent and push the bleeding edge. We envision to
              democratize AI for everyone. Not just a select few. We enable this
              with our leading AI application, Coralyze, which makes it
              impactful and faster for organisations to accelerate AI and
              deliver practical solutions.
              <br />
              <br />
              <br />
              We believe in empowering and sharing our expertise and experiences
              to benefit others. <br />
              <br />
              We are proud to support a variety of technologies and causes that
              will use AI for good.
              <br />
              <br />
              We are honored and humbled to be able to receive recognition for
              our work. <br />
              <br />
              For us, we simply believe in excellence in all that we do. <br />
              <br />
              We strive to design a beautiful product and experience. Allowing
              AI to reveal the potential about data. <br />
              <br />
            </p>
          </div>
          <div class='About__story__left__cta'>
            <a href='/'>
              <h3>Learn more</h3>
            </a>
          </div>
        </div>
        <div class='About__story__right'>
          <img src={logo} alt='test' />
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
