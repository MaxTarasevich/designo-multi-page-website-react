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
  title:'Web Design',
  text:'We build websites that serve as powerful marketing tools and bring memorable brand experiences.',
}

const WebDesignData = [
  {
    img:`${images.webExpress}`,
    title:'EXPRESS',
    text:'A multi-carrier shipping website for ecommerce businesses',
  },
  {
    img:`${images.webTransfer}`,
    title:'TRANSFER',
    text:'Site for low-cost money transfers and sending money within seconds',
  },
  {
    img:`${images.webPhoton}`,
    title:'PHOTON',
    text:'A state-of-the-art music player with high-resolution audio and DSP effects',
  },
  {
    img:`${images.webBuilder}`,
    title:'BUILDER',
    text:'Connects users with local contractors based on their location',
  },
  {
    img:`${images.webBlogr}`,
    title:'BLOGR',
    text:'Blogr is a platform for creating an online blog or publication',
  },
  {
    img:`${images.webCamp}`,
    title:'CAMP ',
    text:'Get expert training in coding, data, design, and digital marketing',
  },
]


const projectsData = [

  {
    title:'APP DESIGN',
    link:'/app-design',
    img:`${images.appDes}`,
    large:false,
  },
  {
    title:'GRAPHIC DESIGN',
    link:'/graphic-design',
    img:`${images.graphicDes}`,
    large:false,
  },
]

const WebDesign = () => {
  return (
    <>
      <Wrapper>
        <Nav dark={false}/>
      </Wrapper>

      <DesignHeader title={header.title} 
                      text={header.text} />
                      
      <Wrapper>
        <DesignCards data={WebDesignData}/>
        <Projects cardData={projectsData}/>
        <Talk />
      </Wrapper>
     

      <Footer />
    </>
  )
}

export default WebDesign