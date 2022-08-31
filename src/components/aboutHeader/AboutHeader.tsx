import React from 'react'
import Button from '../button/Button'
import ContactForm from '../contactForm/ContactForm'

import Wrapper from '../wrapper/Wrapper'

import './AboutHeader.scss'

interface Props{
    title:string
    text:string
    image?:string
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
                    <div className="aboutHeader__image">
                        <img src={image} alt="About Us" />
                    </div>
            }
           
        </Wrapper>
    </header>
  )
}

export default AboutHeader