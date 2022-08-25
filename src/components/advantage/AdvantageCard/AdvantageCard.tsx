import React from 'react'

import './AdvantageCard.scss'

interface Props{
    img:string;
    title:string;
    text:string;
}

const AdvantageCard: React.FC<Props> = ({img,title,text}) => {
  return (
    <div className="advantageCard">

        <div className="advantageCard__img">
            <img src={img} alt={title} />
        </div>

        <h3 className="advantageCard__title">
            {title}
        </h3>

        <p className="advantageCard__text">
            {text}
        </p>
    </div>
  )
}

export default AdvantageCard