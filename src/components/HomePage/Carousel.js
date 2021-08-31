import React from 'react';
import './Carousel.scss';
import tf from '../../images/carousel/tf.png';
import tflite from '../../images/carousel/tflite.png';
import keras from '../../images/carousel/keras.png';
import python from '../../images/carousel/python.png';
import coral from '../../images/carousel/coral.png';
import react from '../../images/carousel/reactjs.png';
import node from '../../images/carousel/node.png';
import php from '../../images/carousel/php.png';

const Carousel = () => {
  return (
    <div class="carousel">
      <div class="title">
        <h2>Rapid delivery. Effective detection.</h2>
        <h1>Powered by technology.</h1>
        <p>
          Our product is utilised by powerful technologies to ensure coralyze is
          the best it can be.
        </p>
      </div>
      <div class="slider">
        <div class="slide-track">
          <div class="slide">
            <img src={tf} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={keras} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={python} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={coral} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={tflite} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={react} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={node} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={php} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={tf} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={keras} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={python} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={coral} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={tflite} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={react} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={node} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={php} height="100" width="250" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
