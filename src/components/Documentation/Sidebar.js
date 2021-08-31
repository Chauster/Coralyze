import React from 'react';
import './Sidebar.scss';

const Sidebar = () => {
  return (
    <div>
      <nav class="navbar">
        <h3>Get started.</h3>
        <ul>
          <li>
            <a class="navbar__link" href="#Introduction">
              Introduction
            </a>
          </li>
          <li>
            <a class="navbar__link" href="#Future_Plan">
              Future Plan
            </a>
          </li>
          <li>
            <div class="navbar__list__item">
              <input type="checkbox" id="navbar__list__item__one"></input>
              <label for="navbar__list__item__one" class="navbar__device">
                Device
              </label>
              <ul class="navbar__list__item__ul">
                <li class="navbar__list__item__ul__li">
                  <a href="#Origin">Origin</a>
                </li>
                <li class="navbar__list__item__ul__li">
                  <a href="#Specifications">Specifications</a>
                </li>
                <li class="navbar__list__item__ul__li">
                  <a href="#Features">Features</a>
                </li>
                <li class="navbar__list__item__ul__li">
                  <a href="#Appliance">Appliance</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a class="navbar__link" href="#">
              MORE TO BE ADDED SOON
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
