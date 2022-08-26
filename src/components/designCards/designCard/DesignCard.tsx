import React from 'react'

import './DesignCard.scss'

interface Props{
    img:string;
    title:string;
    text:string;
}

const DesignCard: React.FC<Props> = ({img,title,text}) => {
  return (
    <div className="designCard">

        <div className="designCard__image">
            <img src={img} alt={title} />
        </div>

        <div className="designCard__content">

            <h3 className="designCard__title">
                {title}
            </h3>

            <p className="designCard__text">
                {text}
            </p>

        </div>
    </div>
  )
}

export default DesignCard