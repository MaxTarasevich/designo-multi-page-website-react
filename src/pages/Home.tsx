import React from 'react'
import Footer from '../components/footer/Footer'
import Nav from '../components/navigation/Nav'
import Wrapper from '../components/wrapper/Wrapper'

const Home = () => {
  return (
    <>
      <Wrapper>
        <Nav dark={false}/>
      </Wrapper>
      <Footer />
    </>
  )
}

export default Home