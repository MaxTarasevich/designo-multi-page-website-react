import React from 'react'
import DesignHeader from '../components/designHeader/DesignHeader'

import Footer from '../components/footer/Footer'
import Nav from '../components/navigation/Nav'
import Wrapper from '../components/wrapper/Wrapper'


const header = {
  title:'Graphic Design',
  text:'We deliver eye-catching branding materials that are tailored to meet your business objectives.',
}

const GraphicDesign = () => {
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

export default GraphicDesign