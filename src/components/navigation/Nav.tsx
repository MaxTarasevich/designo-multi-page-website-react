import React, { useState } from 'react';

import './Nav.scss';

import images from '../../constants/images'
import { NavLink } from 'react-router-dom';
import Wrapper from '../wrapper/Wrapper';

interface Props{
  dark?:boolean
  header?:boolean
}

const Nav: React.FC<Props>= ({dark, header}) => {

  const [burger, setBurger] = useState(false)

  return (
    <nav className="nav">

       <Wrapper>

        <NavLink to={'/'}>
          <div className="nav__logo">
            <img src={dark ? images.logoLight : images.logoDark} alt="company logo" />
          </div>
        </NavLink>

        <ul className={`nav__links 
                        ${dark ? 'nav__links-dark' : ''}
                        ${header ? 'nav__links-header' : ''}
                        ${burger ? 'active' : ''}`}>
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
    {
      header ?
        <div className={`nav__burger ${burger ? 'active' : ''}`} 
            onClick={()=>setBurger(!burger)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      :''
            }
       
      </Wrapper>

      <div className={`nav__bg ${burger ? 'active' : ''}`}
            onClick={()=>setBurger(!burger)}>
      </div>

    </nav>
  )
}

export default Nav