import React from 'react'

import GoogleMapReact from 'google-map-react';

interface Props{
  location:{
    lat:number,
    lng:number
}
}

const Map:React.FC<Props> = ({location}) => {
  const Api = process.env.REACT_APP_MY_ENVIRONMENT_VARIABLE



 if(Api === undefined){
  return (
    <div>
      Error
    </div>
  )
 }

  return (
      <GoogleMapReact 
        bootstrapURLKeys={{ key: Api}}
        defaultCenter={{
          lat: 0,
          lng: 0
        }}
        center={location}
        defaultZoom={10}
        margin={[50,50,50,50]}
        >
          
            <div {...location}
            className={'pin1'} >

            </div>
          
          
      </GoogleMapReact>
  )
}

export default Map