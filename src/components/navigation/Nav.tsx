import React from 'react';

import './Nav.scss';

import images from '../../constants/images'
import { NavLink } from 'react-router-dom';
import Wrapper from '../wrapper/Wrapper';

interface Props{
  dark?:boolean
}

const Nav: React.FC<Props>= ({dark}) => {
  return (
    <nav className="nav">
       <Wrapper>
        <NavLink to={'/'}>
          <div className="nav__logo">
            <img src={dark ? images.logoLight : images.logoDark} alt="company logo" />
          </div>
        </NavLink>

        <ul className={`nav__links ${dark ? 'nav__links-dark' : ''}`}>
          <li className={`nav__link ${dark ? 'nav__link-dark' : ''}`}>
            <NavLink to={'/about'}>OUR COMPANY</NavLink>
          </li>

          <li className={`nav__link ${dark ? 'nav__link-dark' : ''}`}>
            <NavLink to={'/location'}>LOCATIONS</NavLink>
          </li>

          <li className={`nav__link ${dark ? 'nav__link-dark' : ''}`}>
            <NavLink to={'/contact'}> CONTACT</NavLink>
          </li>
        </ul>
      </Wrapper>
    </nav>
  )
}

export default Nav