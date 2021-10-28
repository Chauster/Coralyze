import React from 'react';
import './Procedure.scss';
import step1 from '../../images/icons/step1.png';
import step2 from '../../images/icons/step2.png';
import step3 from '../../images/icons/step3.png';
import step4 from '../../images/icons/step4.png';
import step5 from '../../images/icons/step5.png';
import step6 from '../../images/icons/step6.png';
const Procedure = () => {
  return (
    <>
      <section class='procedure'>
        <div class='procedure__content'>
          <div class='container__procedure__intro'>
            <div class='procedure__intro__image'>
              {/* <img src={image} alt="procedure_intro"></img> */}
            </div>
            <div class='procedure__intro'>
              <h1>How does it work?</h1>
            </div>
          </div>

          <div class='procedure__grid'>
            <div class='procedure__item'>
              <div class='procedure__icon'>
                <img src={step1} alt=''></img>
              </div>
              <div class='procedure__title'>
                1) We collect pre-trained models
              </div>
              <div class='procedure__description'>
                Pre-trained models are collected from the Machine Learning
                industry leader TensorFlow. They have a multiple of models that
                fit our Coralyze purpose. The two models we utilise are{' '}
                <strong>RetinaNet</strong> for Facial Detection and{' '}
                <strong>YOLOv3</strong> for Age-Gender Classification.
              </div>
            </div>

            <div class='procedure__item'>
              <div class='procedure__icon'>
                <img src={step2} alt=''></img>
              </div>
              <div class='procedure__title'>
                2) Any camera that is compatible with the IoT device will run
                the model
              </div>
              <div class='procedure__description'>
                Camera sensors such as the Google Coral will be used by our
                facial detection models.
              </div>
            </div>

            <div class='procedure__item'>
              <div class='procedure__icon'>
                <img src={step3} alt=''></img>
              </div>
              <div class='procedure__title'>
                3) Facial detection models will identify and analyse human faces
              </div>
              <div class='procedure__description'>
                Objects such as human faces are detected through camera sensors
                and is outputted to a file for processing.
              </div>
            </div>

            <div class='procedure__item'>
              <div class='procedure__icon'>
                <img src={step4} alt=''></img>
              </div>
              <div class='procedure__title'>
                4) Results are stored into a local file and will go through a
                data transformation algorithm process
              </div>
              <div class='procedure__description'>
                The Coralyze development team has developed advanced scripts to
                handle complex data output and format them into special data
                structures, allows us to process them throughout our Coralyze
                application.
              </div>
            </div>

            <div class='procedure__item'>
              <div class='procedure__icon'>
                <img src={step5} alt=''></img>
              </div>
              <div class='procedure__title'>
                5) The results are formatted and uploaded onto a centralised
                cloud database via our Coralyze Scripts
              </div>
              <div class='procedure__description'>
                At Coralyze we take advantage of cloud platforms to save
                sensitive data while implementing best security practices.
              </div>
            </div>

            <div class='procedure__item'>
              <div class='procedure__icon'>
                <img src={step6} alt=''></img>
              </div>
              <div class='procedure__title'>
                6) Results are fetched and displayed onto the Front End
              </div>
              <div class='procedure__description'>
                Our dashboard fetching design makes the dashboard experience
                perfect for users who desire smooth interactivity with their
                IoT device.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Procedure;
