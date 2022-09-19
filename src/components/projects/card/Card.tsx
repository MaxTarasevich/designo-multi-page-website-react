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
    <Link to={link} className={`projects__item ${large ? 'projects__item-large' : ''}`}>
      <picture>
                  
                  <source media="(max-width:768px)" srcSet={img.mobile} />
                  <source media="(max-width:1200px)" srcSet={img.tablet} />
                  <img src={img.desktop} alt={title} />

                  <div className="projects__content">
                      <h2 className="projects__title">
                          {title}
                      </h2>

                      <div className='projects__link'>
                          VIEW PROJECTS
                          <IconRightArrow />
                      </div>
                  </div>

      </picture>
    </Link>
  )
}

export default Card