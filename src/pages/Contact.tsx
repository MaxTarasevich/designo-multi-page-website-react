import React from 'react'
import AboutCards from '../components/aboutCards/AboutCards'
import AboutHeader from '../components/aboutHeader/AboutHeader'

import Footer from '../components/footer/Footer'
import Nav from '../components/navigation/Nav'


const ContactHeaderData = {
  title:'Contact Us',
  text:'Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.',
}

const Contact = () => {
  return (
    <>
      <Nav dark={false} header/>

      <AboutHeader title={ContactHeaderData.title}
                    text={ContactHeaderData.text}
                    contact={true} />

      <AboutCards contact={true}/>

      <Footer />
    </>
  )
}

export default Contact