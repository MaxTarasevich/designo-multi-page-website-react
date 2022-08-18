import React from 'react'

import Button from '../button/Button'


import images from '../../constants/images'
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
                    With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.
                </p>

                <Button text='Learn More' dark={false} />
            </div>

            <div className="header__img">
                <img src={images.heroPhone} alt="Phone" />
            </div>
        </Wrapper>
       
    </header>
  )
}

export default Header