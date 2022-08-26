import React from 'react'
import DesignHeader from '../components/designHeader/DesignHeader'

import Footer from '../components/footer/Footer'
import Nav from '../components/navigation/Nav'
import Wrapper from '../components/wrapper/Wrapper'

const header = {
  title:'App Design',
  text:'Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.',
}

const AppDesign = () => {
  return (
    <>
      <Wrapper>
        <Nav dark={false}/>
      </Wrapper>

      <DesignHeader title={header.title} 
                      text={header.text} />
                     
      <Footer />
    </>
  )
}

export default AppDesign