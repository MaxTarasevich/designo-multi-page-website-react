import React from 'react'
import { Link } from 'react-router-dom';
import { IconRightArrow } from '../../../constants/Icons';

import './Card.scss'

interface Props {
    title:string;
    img:string;
    link:string;
    large?:Boolean;
}

const Card: React.FC<Props> = ({title,img,link,large}) => {
  return (
    <div className={`projects__item ${large ? 'projects__item-large' : ''}`}>
                <img src={img} alt={title} />

                <div className="projects__content">
                    <h2 className="projects__title">
                        {title}
                    </h2>

                    <Link to={link} className='projects__link'>
                        VIEW PROJECTS
                        <IconRightArrow />
                    </Link>
                </div>

    </div>
  )
}

export default Card