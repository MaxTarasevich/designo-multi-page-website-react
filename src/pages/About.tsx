import React from 'react'
import AboutHeader from '../components/aboutHeader/AboutHeader'
import Footer from '../components/footer/Footer'
import Nav from '../components/navigation/Nav'
import Wrapper from '../components/wrapper/Wrapper'

const About = () => {
  return (
    <>
    <Wrapper>
      <Nav dark={false}/>
    </Wrapper>

    <AboutHeader />
    
    <Footer />
  </>
  )
}

export default About