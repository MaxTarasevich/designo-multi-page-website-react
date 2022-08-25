import React from 'react'

import Advantage from '../components/advantage/Advantage'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Nav from '../components/navigation/Nav'
import Projects from '../components/projects/Projects'
import Wrapper from '../components/wrapper/Wrapper'

const Home = () => {
  return (
    <>
      <Wrapper>
        <Nav dark={false}/>
      </Wrapper>

      <Header />
    
      <Projects />

      <Advantage />
      
      <Footer />
    </>
  )
}

export default Home