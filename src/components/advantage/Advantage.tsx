import React from 'react'

import Wrapper from '../wrapper/Wrapper'

import './Advantage.scss';

import images from '../../constants/images';
import AdvantageCard from './AdvantageCard/AdvantageCard';
import Talk from '../Talk/Talk';

const cardData = [
    {
        title:'PASSIONATE',
        img:`${images.passionate}`,
        text:'Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.'
    },
    {
        title:'RESOURCEFUL',
        img:`${images.resouceful}`,
        text:'Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.'
    },
    {
        title:'FRIENDLY',
        img:`${images.friendly}`,
        text:' We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.'
    }]

const Advantage = () => {
  return (
    <section className="advantage">
       

            <div className="advantage__cards">
                
                {
                    cardData.map((el)=>(
                        <AdvantageCard key={el.title} title={el.title}
                                        text={el.text}
                                        img={el.img} />
                    ))
                }

            </div>
            
            <div className="advantage__talk">
                <Talk />
            </div>
            
       
    </section>
  )
}

export default Advantage