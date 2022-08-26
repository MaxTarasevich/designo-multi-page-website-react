import React from 'react'

import Wrapper from '../wrapper/Wrapper'

import images from '../../constants/images'

import './AboutHeader.scss'


const AboutHeader = () => {
  return (
    <header className="aboutHeader">
        <Wrapper>
            <div className="aboutHeader__content">
                <h1 className="aboutHeader__title">
                    About Us
                </h1>
                <p className="aboutHeader__text">
                    Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.
                </p>
            </div>

            <div className="aboutHeader__image">
                <img src={images.aboutHero} alt="About Us" />
            </div>
        </Wrapper>
    </header>
  )
}

export default AboutHeader