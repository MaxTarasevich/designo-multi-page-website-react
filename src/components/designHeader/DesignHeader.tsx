import React from 'react'
import Wrapper from '../wrapper/Wrapper';

import './DesignHeader.scss'

interface Props{
  title:string;
  text:string;
}

const DesignHeader: React.FC<Props> = ({title,text}) => {
  return (
    
      <header className="designHeader">
        <Wrapper>
          <h1 className="designHeader__title">
            {title}
          </h1>
          <p className="designHeader__text">
            {text}
          </p>
        </Wrapper>
      </header>
   
  )
}

export default DesignHeader