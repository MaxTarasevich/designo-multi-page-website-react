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
  title:'App Design',
  text:'Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.',
}

const AppDesignData = [
  {
    img:`${images.appAirfilter}`,
    title:'AIRFILTER',
    text:'Solving the problem of poor indoor air quality by filtering the air',
  },
  {
    img:`${images.appEyecam}`,
    title:'EYECAM',
    text:'Product that lets you edit your favorite photos and videos at any time',
  },
  {
    img:`${images.appFaceit}`,
    title:'FACEIT',
    text:'Get to meet your favorite internet superstar with the faceit app',
  },
  {
    img:`${images.appTodo}`,
    title:'TODO',
    text:'A todo app that features cloud sync with light and dark mode',
  },
  {
    img:`${images.appLoop}`,
    title:'LOOPSTUDIOS',
    text:'A VR experience app made for Loopstudios',
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

const AppDesign = () => {
  return (
    <>
      <Wrapper>
        <Nav dark={false}/>
      </Wrapper>

      <DesignHeader title={header.title} 
                      text={header.text} />

      <Wrapper>
        <DesignCards data={AppDesignData}/>
        <Projects cardData={AppProjectsData}/>
        <Talk />
      </Wrapper>
                     
      <Footer />
    </>
  )
}

export default AppDesign