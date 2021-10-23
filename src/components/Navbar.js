import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo-white.svg';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from './Button';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <React.Fragment>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="navbar__container">
          <div className="navbar__wrapper wrapper">
            <a href="/">
              <img
                className="logo"
                src={logo}
                alt="Coralyze"
                width="140px"
                height="30px"
              />
            </a>
            <div className="menu__icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav__menu active' : 'nav__menu'}>
              <li className="nav__item">
                <Link to="/" className="nav__links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav__item">
                <Link
                  to="/about"
                  className="nav__links"
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
              </li>
              <li className="nav__item">
                <Link
                  to="/documentation"
                  className="nav__links"
                  onClick={closeMobileMenu}
                >
                  Documentation
                </Link>
              </li>
              <li className="nav__item">
                <Link
                  to="/contact"
                  className="nav__links"
                  onClick={closeMobileMenu}
                >
                  Contact Us
                </Link>
              </li>
              {/* <li className="nav__item">
                <Link
                  to="/pricing"
                  className="nav__links"
                  onClick={closeMobileMenu}
                >
                  Pricing
                </Link>
              </li> */}
              {/* <li className="nav__item">
                <Link
                  to="/dashboard"
                  className="nav__links"
                  onClick={closeMobileMenu}
                >
                  Dashboard
                </Link>
              </li> */}
              <li className="nav__btn">
                {button ? (
                  <Link to="/login" className="btn__link">
                    <Button buttonStyle="btn--outline">Login</Button>
                  </Link>
                ) : (
                  <Link
                    to="/login"
                    className="btn__link"
                    onClick={closeMobileMenu}
                  >
                    <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                      Login
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="navbar__container__blur"></div> */}
      </IconContext.Provider>
    </React.Fragment>
  );
}

export default Navbar;
