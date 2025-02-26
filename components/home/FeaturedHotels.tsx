import React from 'react'
import HotelCard from '../HotelCard'
import { Button } from '../ui/button'

const FeaturedHotels = () => {
  return (
    <section className='padding-x mt-24 container mx-auto'>
      <h2 className='text-center text-2xl lg:text-4xl font-bold'>
        Featured Hotels
      </h2>
      <p className='text-center text-base text-gray-500 mt-3'>Check hotels form wide variety</p>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-12'>
        <HotelCard/>
      </div>

      <div className='flex items-center justify-center mt-10'>

        <Button variant='ghost'>View All Hotels</Button>

      </div>
    </section>
  )
}

export default FeaturedHotels