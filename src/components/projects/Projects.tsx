import React from 'react'
import Wrapper from '../wrapper/Wrapper'

import './Projects.scss'


import images from '../../constants/images'
import Card from './card/Card'

const Projects = () => {
  return (
    <section className="projects">
        <Wrapper>

            <Card title='Web Design' 
                    img={images.webDesLarge} 
                    large 
                    link='/web-design' 
            />

            <Card title='APP DESIGN' 
                    img={images.appDes} 
                    link='/app-design' 
            />

            <Card title='GRAPHIC DESIGN' 
                    img={images.graphicDes} 
                    link='/graphic-design' 
            />

        </Wrapper>
    </section>
  )
}

export default Projects