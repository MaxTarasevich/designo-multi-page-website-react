import React from 'react';

import './Nav.scss';

import images from '../../constants/images'

const Nav = () => {
  return (
    <nav className="nav">

      <div className="nav__logo">
        <img src={images.logoDark} alt="" />
      </div>

      <ul className="nav__links">
        <li className="nav__link">
          OUR COMPANY
        </li>

        <li className="nav__link">
          LOCATIONS
        </li>

        <li className="nav__link">
          CONTACT
        </li>
      </ul>
      
    </nav>
  )
}

export default Nav