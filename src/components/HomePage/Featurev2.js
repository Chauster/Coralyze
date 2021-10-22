import React from 'react'
import './Featurev2.scss'
import icon from '../../images/icons/image 2.png';
import icon2 from '../../images/icons/image 3.png';
import icon3 from '../../images/icons/image 5.png';
const Featurev2 = () => {
    return (
        <section className="newfeature">
            <div className="newfeature__container">
                <div className="newfeature__cards__wrapper">
                    <div className="newfeature__card__one">
                        <div className="card__one__image">
                            <img src={icon} alt="test"></img>
                        </div>
                        <div className="card__one__title">
                            <h4>Lightweight</h4>
                        </div>
                        <div className="card__one__desc">
                            <p>Our engineers designed Coralyze to have a small memory footprint making sure your IoT device is efficient at all times.</p>
                        </div>
                    </div>
                    <div className="newfeature__card__two">
                        <div className="card__two__image">
                            <img src={icon2} alt="test" width="150px"></img>
                        </div>
                        <div className="card__two__title">
                            <h4>Advanced AI</h4>
                        </div>
                        <div className="card__two__desc">
                            <p>Coralyze's cutting-edge technology personifies our hopes for AI's future. Coralyze is a platform for advanced AI and analytics that is a unique blend of science and engineering.</p>
                        </div>
                    </div>
                    <div className="newfeature__card__three">
                        <div className="card__three__image">
                            <img src={icon3} alt="test" width="150px"></img>
                        </div>
                        <div className="card__three__title">
                            <h4>Modular</h4>
                        </div>
                        <div className="card__three__desc">
                            <p>Modular packages are built from optimised components & materials making them simple, quick and effective solutions for Coralyze applications.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );


};

export default Featurev2;