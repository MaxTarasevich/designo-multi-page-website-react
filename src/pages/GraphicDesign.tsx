import React from 'react'
import DesignCards from '../components/designCards/DesignCards'
import DesignHeader from '../components/designHeader/DesignHeader'

import Footer from '../components/footer/Footer'
import Nav from '../components/navigation/Nav'
import Projects from '../components/projects/Projects'
import Talk from '../components/Talk/Talk'

import images from '../constants/images'
import imagesTablet from '../constants/imagesTablet'


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
    img:{
      desktop:`${images.webDesSmall}`,
      tablet:`${imagesTablet.webDes}`,
      mobile:`${images.webDesLarge}`
    },
    large:false,
  },
  {
    title:'APP DESIGN',
    link:'/app-design',
    img:{
      desktop:`${images.appDes}`,
      tablet:`${imagesTablet.appDes}`,
      mobile:`${images.webDesLarge}`
    },
    large:false,
  },
]

const GraphicDesign = () => {
  return (
    <>
      <Nav dark={false} header/>
      
      <DesignHeader title={header.title} 
                      text={header.text} />

        <DesignCards data={GraphicDesignData}/>
        <Projects cardData={AppProjectsData}/>
        <Talk />
                     
      <Footer />
    </>
  )
}

export default GraphicDesign