import React from 'react'

import Map from '../../map/Map'

import './LocationCard.scss'

interface Props{
    title:string
    revers?:boolean
    office:string[]
    contacts:string[]
    location:{
        lat:number,
        lng:number
    }
}

const LocationCard:React.FC<Props> = ({title,revers,office,contacts, location}) => {
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
                            <li key={el}>{el}</li>
                        ))
                    }
                </ul>

                <ul className="locationCard__contacts">
                    {
                        contacts.map((el)=>(
                            <li key={el}>{el}</li>
                        ))
                    }
                </ul>

            </div>
          
        </div>

        <div className="locationCard__map">
                    <Map location={location}/>
        </div>

    </div>
  )
}

export default LocationCard