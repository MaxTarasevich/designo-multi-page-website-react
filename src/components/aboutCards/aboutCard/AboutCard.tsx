import React from 'react'
import Button from '../../button/Button'

import './AboutCard.scss'

interface Props{
    img:string
    title:string
    btnText:string
}

const AboutCard:React.FC<Props> = ({img,title,btnText}) => {
  return (
    <div className="aboutCard">

        <div className="aboutCard__img">
            <img src={img} alt={title} />
        </div>

        <h3 className="aboutCard__title">
            {title}
        </h3>

        <Button text={btnText} dark={true} link={'/designo-multi-page-website-react/location'} />

    </div>
  )
}

export default AboutCard