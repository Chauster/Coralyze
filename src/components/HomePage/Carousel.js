import React from 'react';
import './Carousel.scss';
import tf from '../../images/carousel/tf.png';
import tflite from '../../images/carousel/tflite.png';
import mongo from '../../images/carousel/mongo.svg';
import express from '../../images/carousel/express.png';
import python from '../../images/carousel/python.png';
import coral from '../../images/carousel/coral.png';
import react from '../../images/carousel/reactjs.png';
import node from '../../images/carousel/node.svg';
import nginx from '../../images/carousel/nginx.png';
import aws from '../../images/carousel/aws.svg';

const Carousel = () => {
  return (
    <section class="carousel">
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
          {/* first */}
          <div class="slide">
            <img src={tf} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={coral} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={mongo} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={express} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={react} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={node} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={nginx} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={aws} height="100" width="250" alt="" />
          </div>

          {/* second */}
          <div class="slide">
            <img src={tf} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={coral} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={mongo} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={express} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={react} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={node} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={nginx} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={aws} height="100" width="250" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
