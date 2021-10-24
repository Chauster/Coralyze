import React, { useRef, useEffect } from 'react';
import { TweenMax, TimelineLite, Power3 } from 'gsap';
import './Herosection.css';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import stream from '../../videos/0001-0500.webm';
import Typed from 'typed.js';
const Herosection = () => {
  // let heroimages = useRef(null);
  // let herocontent = useRef(null);

  // let tl = new TimelineLite();
  // useEffect(() => {
  //   // Image Variables
  //   const heroImage = heroimages.firstElementChild; // returns hero__image
  //   const heroMouse = heroimages.lastElementChild; // returns mouse__container

  //   // Content Variables
  //   const heroTitle = herocontent.children[0];
  //   const heroParagraph = herocontent.children[1];
  //   const heroMessage = herocontent.children[2];
  //   const heroCTA = herocontent.children[3];

  //   // Images Animation
  //   TweenMax.to(heroimages, 0, { css: { visibility: 'visible' } });
  //   tl.from(heroImage, 1.2, { y: 1280, ease: Power3.easeOut }, 'Start')
  //     .from(
  //       heroImage.firstElementChild,
  //       2,
  //       { scale: 1.6, ease: Power3.easeOut },
  //       0.2
  //     )
  //     .from(heroMouse, 1.2, { y: 1280, ease: Power3.easeOut }, 0.2)
  //     .from(
  //       heroMouse.firstElementChild,
  //       2,
  //       { scale: 1.6, ease: Power3.easeOut, y: 280, ease: Power3.easeOut },
  //       0.2
  //     );

  //   // Content Animation
  //   tl.from(heroTitle, 1, { x: -2000, ease: Power3.easeOut }, 0.2, 'Start')
  //     .from(heroParagraph, 1, { x: -2000, ease: Power3.easeOut }, 0.4)
  //     .from(heroMessage, 1, { x: -2000, ease: Power3.easeOut }, 0.6)
  //     .from(heroCTA, 1, { css: { opacity: 0, ease: Power3.easeOut } }, 1.5);
  // });
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);
  const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
      strings: [
        'purpose.',
        'exploration.',
        'practicality.',
        'continuity.',
        'efficiency.',
      ],
      typeSpeed: 130,
      backSpeed: 130,
      backDelay: 1400,
      startDelay: 400,
      loop: true,
    };

    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy(); // Destroys instance
    };
  }, []);

  return (
    <section class='hero'>
      <div id='react-root'></div>
      <div class='hero__image'>
        <video className='hero__video' hidecontrols autoPlay loop muted>
          <source src={stream} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
        {/* <div class="hero__grid__one"></div>
        <div class="hero__grid__two"></div>
        <div class="hero__grid__three"></div> */}
      </div>
      <div class='hero__text'>
        <h1>
          Path to serving AI with&nbsp;
          <span class='hero__text__typewriter' ref={el} />
        </h1>
        <p>
          Take your monitoring to the new generation. Your personal Coralyze
          device will be a one-stop-surveillance for detection, tracking, and
          identification.
        </p>
        <p>Ready? Click below and OPT in queue for pre-alpha release.</p>
        <div class='hero__button'>
          <Link to='/register'>
            <Button buttonSize='btn--wide' buttonColor='blue'>
              Register now!
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
