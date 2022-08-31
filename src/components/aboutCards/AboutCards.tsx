import React from 'react'

import './AboutCards.scss'

import images from '../../constants/images'
import AboutCard from './aboutCard/AboutCard'
import Wrapper from '../wrapper/Wrapper'

const CardsData = [
    {
        img:`${images.aboutCanada}`,
        title:'CANADA',
        btnText:'SEE LOCATION',
    },
    {
        img:`${images.aboutAustrl}`,
        title:'AUSTRALIA',
        btnText:'SEE LOCATION',
    },
    {
        img:`${images.aboutUK}`,
        title:'UNITED KINGDOM',
        btnText:'SEE LOCATION',
    },
]

interface Props{
    contact?:boolean
}

const AboutCards:React.FC<Props> = ({contact}) => {
  return (
    <div className={`aboutCards ${contact ? 'aboutCards-contact' : ''}`}>
        <Wrapper>
            
            {CardsData.map((el)=>(
                <AboutCard  key={el.title}
                            img={el.img} 
                            title={el.title} 
                            btnText={el.btnText} />
            ))}

        </Wrapper>
    </div>
  )
}

export default AboutCards