import React from 'react'
import Wrapper from '../wrapper/Wrapper'
import DesignCard from './designCard/DesignCard'

import './DesignCards.scss'

interface Props{
    data:{
        img:string,
        title:string,
        text:string
    }[]
}

const DesignCards: React.FC<Props> = ({data}) => {
  return (
    <section className='designCards'>
        <Wrapper>
            {
                data.map((el)=>(
                    <DesignCard key={el.title}
                                img={el.img}
                                title={el.title}
                                text={el.text}/>
                ))
            }
        </Wrapper>
    </section>
  )
}

export default DesignCards