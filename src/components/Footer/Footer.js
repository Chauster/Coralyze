import React, { useRef, useEffect } from 'react';
import './Footer.scss';
import logo from '../../images/logo-black.svg';
import github from '../../images/icon-github.svg';
import facebook from '../../images/icon-facebook.svg';
import instagram from '../../images/icon-instagram.svg';
const Footer = () => {
  return (
    // <footer class="footer">
    //   <a href="/" class="footer__logo">
    //     <img src={logo} alt="Coralyze" width="140px" height="30px"></img>
    //   </a>

    //   <div className="footer__links col1">
    //     <a href="/faqs">FAQs</a>
    //     <a href="/about">About Us</a>
    //     <a href="/contact">Contact Us</a>
    //   </div>
    //   <div className="footer__links col2">
    //     <a href="/documentation">Documentation</a>
    //     <a href="/">Blog</a>
    //     <a href="/">Privacy Policy</a>
    //   </div>
    //   <div className="footer__copyright">
    //     Inject DevOps. All rights reserved.
    //   </div>
    // </footer>
    <footer class="footer2">
      <ul class="page__links">
        <li><a href="/faqs">FAQs</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/contact">Contact Us</a></li>
        <li><a href="/documentation">Documentation</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/privacypolicy">Privacy Policy</a></li>
      </ul>
      <div className="social__links">
        <img src={facebook} alt="Coralyze" width="30px" height="30px"></img><a href="/">Facebook</a>
        <img src={github} alt="Coralyze" width="30px" height="30px"></img><a href="https://github.com/Chauster/Coralyze-Staging">GitHub</a>
        <img src={instagram} alt="Coralyze" width="30px" height="30px"></img><a href="/">Instagram</a>
      </div>

      <div className="trademark"><p>Inject DevOps. All rights reserved.®</p></div>
    </footer>
  );
};

export default Footer;
