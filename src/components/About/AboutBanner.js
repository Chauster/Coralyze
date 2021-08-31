import { useState, useEffect } from "react";
import "./AboutBanner.scss";
import logo from '../../images/company-banner.png';
const AboutBanner = () => {
    return (
        <div class="About">
                <div class="About__stripe">
                    <div className="About__stripe__container">
                        <div className="About__stripe__container__stripe__one"></div>
                        <div className="About__stripe__container__stripe__two"></div>
                        <div className="About__stripe__container__stripe__three"></div>
                    </div>
                </div>
                <div class="About__introduction">
                <div class="About__introduction__title"><h2>About Us</h2></div>
                <div class="About__introduction__subtitle"><h2>Pioneering the Future.</h2></div>
                    <div class="About__introduction__description">
                        <p>
                        Coralyze, a seamless AI detection application that just works.
                        </p>
                    </div>
                </div>
                <div class="About__story__container">
                    <div class="About__story__left">
                        <div class="About__story__left__title">
                            <h3>Our Company</h3>
                        </div>
                        <div class="About__story__left__description">
                            <p>
                            We at INJECT DevOps, are honoured to develop a cutting edge application 
                            that utilises the renowned NVIDIA Jetson device. The team comprises of seven 
                            high achieving final year computer science and information technology undergraduate 
                            students. We are passionate to deliver this project at the atmost excellence, hoping 
                            to deliver users a sense of innovation. Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            Aperiam numquam eligendi rem alias quos? Harum, in. Reiciendis perspiciatis, ut adipisci nam 
                            ipsam in, optio eos sapiente quia exercitationem repudiandae odio omnis saepe. Eveniet expedita 
                            autem illum enim. Quasi ut, sit fuga unde quis sint voluptates voluptatibus praesentium, cupiditate 
                            ipsa pariatur.Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            Aperiam numquam eligendi rem alias quos? Harum, in. Reiciendis perspiciatis, ut adipisci nam 
                            ipsam in, optio eos sapiente quia exercitationem repudiandae odio omnis saepe. Eveniet expedita 
                            autem illum enim. Quasi ut, sit fuga unde quis sint voluptates voluptatibus praesentium, cupiditate 
                            ipsa pariatur.Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            Aperiam numquam eligendi rem alias quos? 
                            </p>
                        </div>
                        <div class="About__story__left__cta">
                            <a href="/"><h3>Learn more</h3></a>
                        </div>
                    </div>
                    <div class="About__story__right">
                        <img src={logo} alt="test"/>
                    </div>
                </div>
        </div>
    )
}

export default AboutBanner