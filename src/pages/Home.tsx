import React from 'react'

import Advantage from '../components/advantage/Advantage'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Nav from '../components/navigation/Nav'
import Projects from '../components/projects/Projects'

import images from '../constants/images'
import imagesTablet from '../constants/imagesTablet'
import imagesMobile from '../constants/imagesMobile'

const projectsData = [
  {
    title:'WEB DESIGN',
    link:'/designo-multi-page-website-react/web-design',
    img:{
      desktop:images.webDesLarge,
      tablet:imagesTablet.webDes,
      mobile:imagesMobile.webDes
    },
    large:true,
  },
  {
    title:'APP DESIGN',
    link:'/designo-multi-page-website-react/app-design',
    img:{
      desktop:images.appDes,
      tablet:imagesTablet.appDes,
      mobile:imagesMobile.appDes
    },
    large:false,
  },
  {
    title:'GRAPHIC DESIGN',
    link:'/designo-multi-page-website-react/graphic-design',
    img:{
      desktop:images.graphicDes,
      tablet:imagesTablet.graphicDes,
      mobile:imagesMobile.graphicDes
    },
    large:false,
  },
]

const Home = () => {
  return (
    <>
      <Nav dark={false} header/>

      <Header />
    
      <Projects  cardData={projectsData} padding={{paddingBottom: '284px'}}/>

      <Advantage />
      
      <Footer />
    </>
  )
}

export default Home