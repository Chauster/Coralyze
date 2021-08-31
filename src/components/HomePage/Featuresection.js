import React from 'react';
import './Feature.scss';
import image from '../../images/featurev3.svg';
const Featuresection = () => {
  return (
    <div>
      <section class="feature">
        <div class="feature__content">
          <div class="container__feature__intro">
            <div class="feature__intro__image">
              <img src={image} alt="feature_intro"></img>
            </div>
            <div class="feature__intro">
              <h1>What coralyze offers.</h1>
            </div>
          </div>

          <div class="feature__grid">
            <div class="feature__item">
              <div class="feature__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="#818999"
                >
                  <path d="M0 12l11 3.1L18 7l-8.156 5.672-4.312-1.202 15.362-7.68-3.974 14.57-3.75-3.339L11 17.946v-.769l-2-.56V24l4.473-6.031L18 22l6-22z"></path>
                </svg>
              </div>
              <div class="feature__title">Lightweight</div>
              <div class="feature__description">
                The modular structure of object detection provides excellent
                processing compression. With the aid of Tinker Edge T,
                compressed detection algorithms give users the freedom of
                different application uses.
              </div>
            </div>

            <div class="feature__item">
              <div class="feature__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="#818999"
                >
                  <path d="M6 2a1.001 1.001 0 1 1-1 1c0-.551.448-1 1-1zm15 9a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM6 20a1.001 1.001 0 1 1-1 1c0-.551.448-1 1-1zM6 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm15 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM6 18a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm4.588-16.979L11 1c4.281 0 7.981 2.45 9.8 6.021-.717.029-1.39.21-1.998.511C17.247 4.829 14.336 3 11 3c0-.703-.149-1.372-.412-1.979zM20.8 16.979C18.981 20.55 15.281 23 11 23l-.412-.021A4.967 4.967 0 0 0 11 21c3.336 0 6.247-1.829 7.802-4.532a4.901 4.901 0 0 0 1.998.511zM1.89 18.165C.697 16.406 0 14.285 0 12s.697-4.406 1.89-6.165a5.027 5.027 0 0 0 1.487 1.403C2.51 8.621 2 10.25 2 12s.51 3.379 1.377 4.762a5.015 5.015 0 0 0-1.487 1.403z"></path>
                </svg>
              </div>
              <div class="feature__title">Easy Monitoring</div>
              <div class="feature__description">
                Everything on cloud, ready for detection. Written in python
                TensorFlow without hidden dependencies.
              </div>
            </div>

            <div class="feature__item">
              <div class="feature__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="#818999"
                >
                  <path d="M12 0L1 6v12.131L12 24l11-5.869V6.065L12 0zm7.91 6.646l-7.905 4.218L4.133 6.57l7.862-4.289 7.915 4.365zM3 8.23l8 4.363V21.2l-8-4.268V8.23zM13 21.2v-8.6l8-4.269v8.6L13 21.2zm6.678-5.315a.6.6 0 1 1-1.198.026.6.6 0 0 1 1.198-.026zm-2.71-1.677a.598.598 0 1 0 .023 1.199.6.6 0 0 0-.023-1.199zm-2.132-1.095a.6.6 0 1 0 .024 1.2.6.6 0 0 0-.024-1.2zm-9.902 2.183a.6.6 0 1 1-.025 1.2.6.6 0 0 1 .025-1.2zm1.487-.5a.6.6 0 1 0 1.2.024.6.6 0 0 0-1.2-.024zm2.132-1.094a.6.6 0 1 0 1.2.024.6.6 0 0 0-1.2-.024zM12 7.953a.6.6 0 1 0 .001 1.201A.6.6 0 0 0 12 7.953zm0-2.225a.6.6 0 1 0 .001 1.201A.6.6 0 0 0 12 5.728zm0-2.031a.6.6 0 1 0 .001 1.201A.6.6 0 0 0 12 3.697z"></path>
                </svg>
              </div>
              <div class="feature__title">Modular</div>
              <div class="feature__description">
                We give users to freedom to select which objects to detect.
              </div>
            </div>

            <div class="feature__item">
              <div class="feature__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="#818999"
                >
                  <path d="M12 0L1 6v12.131L12 24l11-5.869V6.065L12 0zm8.063 6.73l-2.267 1.165L12 4.797 6.295 7.815l-2.245-1.2 7.945-4.333 8.068 4.448zM7 10.46l4 2.139v3.807l-4-2.052V10.46zm5.01.411L8.422 8.953l3.573-1.891 3.64 1.945-3.625 1.864zm4.99-.317v3.8l-4 2.052V12.61l4-2.056zM3 8.321l2 1.07v6.185l6 3.077V21.2l-8-4.268V8.321zM13 21.2v-2.546l6-3.077V9.525l2-1.028v8.435L13 21.2z"></path>
                </svg>
              </div>
              <div class="feature__title">Open API</div>
              <div class="feature__description">
                With the use of Tensorflow Lite and Keras. Detecting human
                gender and age on the basis of human characteristics such as
                facial features has never been easier.
              </div>
            </div>

            <div class="feature__item">
              <div class="feature__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="#818999"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10 0 .685-.07 1.354-.201 2h-.973c-.975 0-1.129-.507-1.656-2.461-.381-1.414-1.014-3.551-2.408-3.551-1.42 0-1.969 2.215-2.48 4.006-.278.973-.446 1.561-.695 1.561-.24 0-.353-.588-.635-1.563-.528-1.822-1.132-4.003-2.541-4.003-1.463 0-2.088 2.387-2.507 3.908-.304 1.105-.399 1.659-.669 1.659-.229 0-.303-.449-.566-1.344-.602-2.04-.793-4.208-3.48-4.208h-.35C4.385 4.474 7.907 2 12 2zm0 20C6.486 22 2 17.514 2 12c0-.685.07-1.354.201-2h1.073c.94 0 1.032.471 1.552 2.435.351 1.328.996 3.551 2.408 3.551 1.43 0 2.033-2.26 2.579-4.132.296-1.015.36-1.436.597-1.436.254 0 .328.467.618 1.491.524 1.851 1.13 4.076 2.558 4.076 1.28 0 1.892-1.836 2.336-3.311.508-1.686.582-2.312.84-2.312.264 0 .312.546.768 2.074.735 2.463 1.204 3.564 3.173 3.564h.456c-1.547 3.527-5.067 6-9.159 6z"></path>
                </svg>
              </div>
              <div class="feature__title">Numerous Applications</div>
              <div class="feature__description">
                - Gender and Age Detection.<br></br>- CCTV Tracking.<br></br>-
                COVID-19 Hand wash tracking.<br></br>
                and many more.<br></br>
              </div>
            </div>

            <div class="feature__item">
              <div class="feature__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="#818999"
                >
                  <path d="M15.6 11.6L22 7v10l-6.4-4.5v-1zM4 5h9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2z"></path>
                </svg>
              </div>
              <div class="feature__title">Capable of 100+ FPS</div>
              <div class="feature__description">
                Our software and hardware combinations make the experience
                perfect for users who desire smooth interactivity with the
                device.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Featuresection;
