import React from 'react'

import Footer from '../components/footer/Footer'
import LocationCards from '../components/locationCards/LocationCards'
import Nav from '../components/navigation/Nav'
import Talk from '../components/Talk/Talk'

const Locations = () => {
  return (
    <>
      <Nav dark={false}/>

      <LocationCards />

      <Talk />

      <Footer />
    </>
  )
}

export default Locations