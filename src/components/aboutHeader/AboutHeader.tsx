import React from 'react'
import ContactForm from '../contactForm/ContactForm'

import Wrapper from '../wrapper/Wrapper'

import './AboutHeader.scss'

interface Props{
    title:string
    text:string
    image?:{
        desktop:string,
        tablet:string,
        mobile:string
    }
    contact?:boolean
}



const AboutHeader:React.FC<Props> = ({title,text,image,contact}) => {
  return (
    <header className={`aboutHeader ${contact ? 'aboutHeader-contact' : ''}`}>
        <Wrapper>
            <div className="aboutHeader__content">
                <h1 className="aboutHeader__title">
                    {title}
                </h1>
                <p className="aboutHeader__text">
                    {text}
                </p>
            </div>

            {
                contact ? 
                    <ContactForm />
                :
                    <picture className="aboutHeader__image">
                        <source media="(max-width:768px)" srcSet={image?.mobile} />
                        <source media="(max-width:900px )" srcSet={image?.tablet} />
                        <img src={image?.desktop} alt="About Us" />
                    </picture>
            }
           
        </Wrapper>
    </header>
  )
}

export default AboutHeader