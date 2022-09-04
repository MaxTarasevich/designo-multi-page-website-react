import React from 'react'
import { Link } from 'react-router-dom';
import { IconRightArrow } from '../../../constants/Icons';

import './Card.scss'

interface Props {
    title:string;
    img:{
      desktop:string,
      tablet:string,
      mobile:string
    };
    link:string;
    large?:Boolean;
}

const Card: React.FC<Props> = ({title,img,link,large}) => {
  return (
    <picture className={`projects__item ${large ? 'projects__item-large' : ''}`}>
                
                <source media="(max-width:768px)" srcSet="" />
                <source media="(max-width:1200px)" srcSet={img.tablet} />
                <img src={img.desktop} alt={title} />

                <div className="projects__content">
                    <h2 className="projects__title">
                        {title}
                    </h2>

                    <Link to={link} className='projects__link'>
                        VIEW PROJECTS
                        <IconRightArrow />
                    </Link>
                </div>

    </picture>
  )
}

export default Card