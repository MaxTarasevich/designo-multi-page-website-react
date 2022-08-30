import React from 'react'

import images from '../../../constants/images'

import './LocationCard.scss'

interface Props{
    title:string
    revers?:boolean
    office:string[]
    contacts:string[]
}

const LocationCard:React.FC<Props> = ({title,revers,office,contacts}) => {
  return (
    <div className={`locationCard ${revers ? 'locationCard-revers' : ''}`}>

        <div className="locationCard__info">

            <h2 className="locationCard__title">
                {title}
            </h2>

            <div className="locationCard__content">

                <ul className="locationCard__office">
                    {
                        office.map((el)=>(
                            <li>{el}</li>
                        ))
                    }
                </ul>

                <ul className="locationCard__contacts">
                    {
                        contacts.map((el)=>(
                            <li>{el}</li>
                        ))
                    }
                </ul>

            </div>
          
        </div>

        <div className="locationCard__map">
            <img src={images.locationMap} alt={title} />
        </div>

    </div>
  )
}

export default LocationCard