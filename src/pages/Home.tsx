import React from 'react'

import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Nav from '../components/navigation/Nav'
import Projects from '../components/projects/Projects'
import Wrapper from '../components/wrapper/Wrapper'

import images from '../constants/images'

const Home = () => {
  return (
    <>
      <Wrapper>
        <Nav dark={false}/>
      </Wrapper>

      <Header />
    
      <Projects />
      
      <Footer />
    </>
  )
}

export default Home