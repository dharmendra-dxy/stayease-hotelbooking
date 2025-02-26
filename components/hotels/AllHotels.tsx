import React from 'react'
import HotelCard from '../HotelCard'

const AllHotels = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>

        <HotelCard/>
        <HotelCard/>
        <HotelCard/>
        <HotelCard/>

    </section>
  )
}

export default AllHotels