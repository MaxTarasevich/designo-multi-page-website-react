import React from 'react'
import Button from '../button/Button'

import './ContactForm.scss'

const ContactForm = () => {
  return (
    <form action="#" 
            className="form"
            onSubmit={(e)=>{
                e.preventDefault()
            }}>
        <input type="text" placeholder='Name' />
        <input type="email" placeholder='Email Address' />
        <input type="tel"  placeholder='Phone'/>
        <textarea className="form__textarea" placeholder='Your Message'></textarea>
        <Button dark={false} text={'Submit'} />
    </form>
  )
}

export default ContactForm