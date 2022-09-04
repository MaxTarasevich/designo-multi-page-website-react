import React from 'react'
import Wrapper from '../wrapper/Wrapper'

import './Projects.scss'

import Card from './card/Card'

interface Props{
 cardData:{
        title:string;
        link:string;
        img:{
                desktop:string,
                tablet:string,
                mobile:string
              };
        large:boolean;
        }[]
padding?:object
}

const Projects: React.FC<Props> = ({cardData,padding}) => {
  return (
    <section className="projects" style={padding}>
        <Wrapper>

                {
                        cardData.map((el)=>(
                                <Card   key={el.title}
                                        title={el.title} 
                                        img={el.img} 
                                        large={el.large}
                                        link={el.link}
                        /> 
                        ))
                }
          
        </Wrapper>
    </section>
  )
}

export default Projects