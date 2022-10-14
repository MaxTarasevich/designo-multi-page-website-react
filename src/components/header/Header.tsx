import React from 'react'

import Button from '../button/Button'

import images from '../../constants/images'
import imagesTablet from '../../constants/imagesTablet'

import './Header.scss'
import Wrapper from '../wrapper/Wrapper'

const Header = () => {
  return (
    <header className="header">
      <Wrapper>
        <div className="header__content">
          <h1 className="header__title">
            Award-winning custom designs and digital branding solutions
          </h1>

          <p className="header__text">
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>

          <Button
            text="Learn More"
            dark={false}
            link="/designo-multi-page-website-react/about"
          />
        </div>

        <picture className="header__img">
          <source media="(max-width:1200px )" srcSet={imagesTablet.hero} />
          <img src={images.heroPhone} alt="Phone" />
        </picture>
      </Wrapper>
    </header>
  )
}

export default Header
