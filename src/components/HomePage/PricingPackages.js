import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button';
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import './PricingPackages.css';

const PricingPackages = () => {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div>
        <div id="pricing_packages" className="pricing__section">
          <div className="pricing__wrapper">
            <h1 className="pricing__heading">Packages.</h1>
            <div className="pricing__container">
              <Link to="/login" className="pricing__container-card">
                <div className="pricing__container-cardInfo">
                  <div className="icon">
                    <FaFire />
                  </div>
                  <h3>Basic</h3>
                  <h4>$9.99</h4>
                  <p>per month</p>
                  <ul className="pricing__container-features">
                    <li>500 MB Storage</li>
                    <li>2% Cash Back</li>
                    <li>1 Account</li>
                  </ul>
                  <Button buttonSize="btn--wide" buttonColor="primary">
                    Choose Plan
                  </Button>
                </div>
              </Link>
              <Link to="/login" className="pricing__container-card">
                <div className="pricing__container-cardInfo">
                  <div className="icon">
                    <BsXDiamondFill />
                  </div>
                  <h3>Standard</h3>
                  <h4>$24.99</h4>
                  <p>per month</p>
                  <ul className="pricing__container-features">
                    <li>2 GB Storage</li>
                    <li>3.5% Cash Back</li>
                    <li>5 Accounts</li>
                  </ul>
                  <Button buttonSize="btn--wide" buttonColor="blue">
                    Choose Plan
                  </Button>
                </div>
              </Link>
              <Link to="/login" className="pricing__container-card">
                <div className="pricing__container-cardInfo">
                  <div className="icon">
                    <GiCrystalize />
                  </div>
                  <h3>Commercial</h3>
                  <h4>$59.99</h4>
                  <p>per month</p>
                  <ul className="pricing__container-features">
                    <li>50 GB Storage</li>
                    <li>5% Cash Back</li>
                    <li>Unlimited Accounts</li>
                  </ul>
                  <Button buttonSize="btn--wide" buttonColor="primary">
                    Choose Plan
                  </Button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default PricingPackages;
