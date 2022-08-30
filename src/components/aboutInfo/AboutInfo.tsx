import React from 'react'
import Wrapper from '../wrapper/Wrapper';

import './AboutInfo.scss'

interface Props {
    img:string;
    title:string;
    text1:string;
    text2:string;
    revers?:boolean;
}

const AboutInfo:React.FC<Props> = ({img,title,text1,text2,revers}) => {
  return (
    <section className={`aboutInfo ${revers ? 'aboutInfo-revers' : ''}`}>
        <Wrapper>
            <div className="aboutInfo__img">
                <img src={img} alt={title} />
            </div>

            <div className="aboutInfo__content">
                <h2 className="aboutInfo__title">
                    {title}
                </h2>

                <p className="aboutInfo__text">
                    {text1}
                </p>

                <p className="aboutInfo__text">
                    {text2}
                </p>

            </div>
        </Wrapper>
    </section>
  )
}

export default AboutInfo