import React from 'react'
import Wrapper from '../wrapper/Wrapper'
import LocationCard from './locationCard/LocationCard'

import './LocationCards.scss'

const CardsData = [
    {
        title:'Canada',
        office:[
            'Designo Central Office',
            '3886 Wellington Street',
            'Toronto, Ontario M9C 3J5'
        ],
        contacts:[
            'Contact',
            'P : +1 253-863-8967',
            'M : contact@designo.co',
        ]
    },
    {
        title:'Australia',
        office:[
            'Designo AU Office',
            '19 Balonne Street',
            'New South Wales 2443'
        ],
        contacts:[
            'Contact',
            'P : (02) 6720 9092',
            'M : contact@designo.au',
        ]
    },
    {
        title:'United Kingdom',
        office:[
            'Designo UK Office',
            '13 Colorado Way',
            'Rhyd-y-fro SA8 9GA'
        ],
        contacts:[
            'Contact',
            'P : 078 3115 1400',
            'M : contact@designo.uk',
        ]
    },

]

const LocationCards = () => {

  return (
    <section className="locations">
        <Wrapper>
                
           {
            CardsData.map((el,index)=>(
               index%2 ?
                <LocationCard key={el.title} 
                    title={el.title}
                    office={el.office}
                    contacts={el.contacts} />
                :
                <LocationCard key={el.title} 
                    title={el.title}
                    office={el.office}
                    contacts={el.contacts}
                    revers={true} />
               
            ))
           }
              
        </Wrapper>
    </section>
  )
}

export default LocationCards