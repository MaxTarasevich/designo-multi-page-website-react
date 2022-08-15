import React from 'react';

import './Nav.scss';

import images from '../../constants/images'

interface Props{
  dark?:boolean
}

const Nav: React.FC<Props>= ({dark}) => {
  return (
    <nav className="nav">

      <div className="nav__logo">
        <img src={dark ? images.logoLight : images.logoDark} alt="company logo" />
      </div>

      <ul className={`nav__links ${dark ? 'nav__links-dark' : ''}`}>
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