import React from 'react'
import DesignCards from '../components/designCards/DesignCards'
import DesignHeader from '../components/designHeader/DesignHeader'

import Footer from '../components/footer/Footer'
import Nav from '../components/navigation/Nav'
import Projects from '../components/projects/Projects'
import Talk from '../components/Talk/Talk'
import Wrapper from '../components/wrapper/Wrapper'

import images from '../constants/images'


const header = {
  title:'Graphic Design',
  text:'We deliver eye-catching branding materials that are tailored to meet your business objectives.',
}


const GraphicDesignData = [
  {
    img:`${images.graphChange}`,
    title:'TIM BROWN',
    text:'A book cover designed for Tim Brown’s new release, ‘Change’',
  },
  {
    img:`${images.graphWater}`,
    title:'BOXED WATER',
    text:'A simple packaging concept made for Boxed Water',
  },
  {
    img:`${images.graphScience}`,
    title:'SCIENCE!',
    text:'A poster made in collaboration with the Federal Art Project',
  },
]

const AppProjectsData = [
  
  {
    title:'WEB DESIGN',
    link:'/web-design',
    img:`${images.webDesSmall}`,
    large:false,
  },
  {
    title:'GRAPHIC DESIGN',
    link:'/graphic-design',
    img:`${images.graphicDes}`,
    large:false,
  },
]

const GraphicDesign = () => {
  return (
    <>
      <Wrapper>
        <Nav dark={false}/>
      </Wrapper>
      
      <DesignHeader title={header.title} 
                      text={header.text} />

      <Wrapper>
        <DesignCards data={GraphicDesignData}/>
        <Projects cardData={AppProjectsData}/>
        <Talk />
      </Wrapper>
                     
      <Footer />
    </>
  )
}

export default GraphicDesign