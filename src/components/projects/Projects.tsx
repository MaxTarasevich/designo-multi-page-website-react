import React from 'react'
import Wrapper from '../wrapper/Wrapper'

import './Projects.scss'

import images from '../../constants/images'
import {IconRightArrow} from '../../constants/Icons'
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <section className="projects">
        <Wrapper>

            <div className="projects__item projects__item-large">
                <img src={images.webDesLarge} alt="Web Design" />

                <div className="projects__content">
                    <h2 className="projects__title">
                        WEB DESIGN
                    </h2>

                    <Link to={'/web-design'} className='projects__link'>
                        VIEW PROJECTS
                        <IconRightArrow />
                    </Link>
                </div>

            </div>

            <div className="projects__item">
                <img src={images.appDes} alt="App Design" />

                <div className="projects__content">
                    <h2 className="projects__title">
                        APP DESIGN
                    </h2>

                    <Link to={'/app-design'} className='projects__link'>
                        VIEW PROJECTS
                        <IconRightArrow />
                    </Link>
                </div>

            </div>

            <div className="projects__item">
                <img src={images.graphicDes} alt="Graphic Design" />

                <div className="projects__content">
                    <h2 className="projects__title">
                        GRAPHIC DESIGN
                    </h2>

                    <Link to={'/graphic-design'} className='projects__link'>
                        VIEW PROJECTS
                        <IconRightArrow />
                    </Link>
                </div>

            </div>

        </Wrapper>
    </section>
  )
}

export default Projects