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
                Saamir has worked in numerous management and development positions in previous projects, adding 3 years
                of management and development experience to the team. He has excellent organisational and schedule
                management skills. Saamir provides highly innovative ideas and calculated solutions,
                supporting the team with great management strategies.
              </div>
            </div>

            <div class="card__item">
              <div class="card__image">
                <div class="card__image">
                  <img src={member2}></img>
                </div>
              </div>
              <div class="card__title">Long Le</div>
              <div class="card__roletitle">Lead Machine <br/> Learning Developer</div>
              <div class="card__description">
                Long has more than 4 years experience working as a lead developer in projects.
                His expertise is machine learning and he is backbone of our AI systems design.
                Long has exceptional skills in creating and modifying machine learning algorithms
                for great effeciency and capabilities.
              </div>
            </div>

            <div class="card__item">
              <div class="card__image">
                <div class="card__image">
                  <img src={member3}></img>
                </div>
              </div>
              <div class="card__title">Kishen Kumar</div>
              <div class="card__roletitle">
                Scrum Master
              <br />
                Security Analyst
              </div>
              <div class="card__description">
                Kishen has 3 years experience working as a scrum master and 2 years experience as a security analyst.
                He provides a great diversity of skills ranging from team management to system and cyber security analysis.
                Kishen maintains the secuirty aspects of development and the product, ensuring the privacy and secuirty of
                customers and the project.
              </div>
            </div>

            <div class="card__item">
              <div class="card__image">
                <div class="card__image">
                  <img src={member4}></img>
                </div>
              </div>
              <div class="card__title">David Chau</div>
              <div class="card__roletitle">
                Lead Front End Developer
                <br />
                UI/UX Designer
                </div>
              <div class="card__description">
                David has devoted himself as lead front end developer for more than 3 years.
                Over his career he has designed many astonishing websites and his knowledge in front end development
                is critical in marketing of major products. David's incomparable creativeness in design and passion for front end
                development, offers high-level support to our front end developers.
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
                Bao Lam is a highly capable developer with an extensive background
                in machine learning algorithms. Working for more than 3 years as
                a machine learning developer, he has honed his skills and expertises
                in algorithm resource usage. Bao's skills provides the team with
                a competive edge in the market, allowing us to build systems that
                have reduced resource usage.
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
                Cynan is an ambitious machine learning developer working for more than 3 years in our team.
                His developement background is extensive and he provides expert knowledge
                in conductive nueral networks. His skills assist in creating well planned
                nueral networks which are the spine of our artifical intelligence models.
              </div>
            </div>

            <div class="card__item">
              <div class="card__image">
                <div class="card__image">
                  <img src={member7}></img>
                </div>
              </div>
              <div class="card__title">Armaghan Zahid</div>
              <div class="card__roletitle">Quality Assurance</div>
              <div class="card__description">
                Armaghan has more than 3 years experience of extensively testing code to ensure optimal performance and quality.
                His skills provide the team with great organisational capacities, supporting the
                collaboration between our teammates. He provides great foresight and professional advice
                on documentation the team must provide. 
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default test;
