import React from 'react';
import './MeetTheTeam.scss';
import member1 from '../../images/portraits/sam.jpg';
import member2 from '../../images/portraits/longle.png';
import member3 from '../../images/portraits/big_kush.jpg';
import member4 from '../../images/portraits/david.jpg';
import member5 from '../../images/portraits/baolam.jpg';
import member6 from '../../images/portraits/cynan.jpg';
import member7 from '../../images/portraits/army.jpg';
const test = () => {
  return (
    <div>
      <section class="card">
        <div class="card__content">
          <div class="container__card__intro">
            <div class="card__intro">
              <h1>Meet the team.</h1>
            </div>
          </div>

          <div class="card__grid">
            <div class="card__item">
              <div class="card__image">
                <img src={member1}></img>
              </div>
              <div class="card__title">Saamir Hye</div>
              <div class="card__roletitle">
                Project Manager
                <br />
                Developer
              </div>
              <div class="card__description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo,
                cumque est necessitatibus debitis neque eveniet sequi quas
                consequuntur amet? Deleniti molestias assumenda ab aspernatur!
                Dolorum.
              </div>
            </div>

            <div class="card__item">
              <div class="card__image">
                <div class="card__image">
                  <img src={member2}></img>
                </div>
              </div>
              <div class="card__title">Long Le</div>
              <div class="card__roletitle">Lead Machine Learning Developer</div>
              <div class="card__description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo,
                cumque est necessitatibus debitis neque eveniet sequi quas
                consequuntur amet? Deleniti molestias assumenda ab aspernatur!
                Dolorum.
              </div>
            </div>

            <div class="card__item">
              <div class="card__image">
                <div class="card__image">
                  <img src={member3}></img>
                </div>
              </div>
              <div class="card__title">Kishen Kumar</div>
              <div class="card__roletitle">Scrum Master</div>
              <div class="card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi rerum doloribus vel, error illum, in earum eveniet
                facere possimus voluptatibus, ducimus molestiae assumenda
                temporibus reiciendis?
              </div>
            </div>

            <div class="card__item">
              <div class="card__image">
                <div class="card__image">
                  <img src={member4}></img>
                </div>
              </div>
              <div class="card__title">David Chau</div>
              <div class="card__roletitle">Lead Front End Developer</div>
              <div class="card__description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo,
                cumque est necessitatibus debitis neque eveniet sequi quas
                consequuntur amet? Deleniti molestias assumenda ab aspernatur!
                Dolorum.
              </div>
            </div>

            <div class="card__item">
              <div class="card__image">
                <div class="card__image">
                  <img src={member5}></img>
                </div>
              </div>
              <div class="card__title">Bao Lam Nguyen</div>
              <div class="card__roletitle">Machine Learning Developer</div>
              <div class="card__description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo,
                cumque est necessitatibus debitis neque eveniet sequi quas
                consequuntur amet? Deleniti molestias assumenda ab aspernatur!
                Dolorum.
              </div>
            </div>

            <div class="card__item">
              <div class="card__image">
                <div class="card__image">
                  <img src={member6}></img>
                </div>
              </div>
              <div class="card__title">Cynan Du</div>
              <div class="card__roletitle">Machine Learning Developer</div>
              <div class="card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis, dignissimos! Distinctio, quidem numquam? Sunt
                perferendis tempora sed dignissimos dolore aspernatur.
              </div>
            </div>

            <div class="card__item">
              <div class="card__image">
                <div class="card__image">
                  <img src={member7}></img>
                </div>
              </div>
              <div class="card__title">Armaghan Zahid</div>
              <div class="card__roletitle"></div>
              <div class="card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate, esse animi excepturi laborum magni, ea aspernatur hic
                amet impedit natus nobis nihil a dolore perspiciatis.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default test;
