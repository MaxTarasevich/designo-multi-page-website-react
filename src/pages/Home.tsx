import React from 'react'

import Advantage from '../components/advantage/Advantage'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Nav from '../components/navigation/Nav'
import Projects from '../components/projects/Projects'

import images from '../constants/images'

const projectsData = [
  {
    title:'WEB DESIGN',
    link:'/web-design',
    img:`${images.webDesLarge}`,
    large:true,
  },
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

const Home = () => {
  return (
    <>
      <Nav dark={false}/>

      <Header />
    
      <Projects  cardData={projectsData} padding={{paddingBottom: '284px'}}/>

      <Advantage />
      
      <Footer />
    </>
  )
}

export default Home