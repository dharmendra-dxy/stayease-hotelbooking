import React from 'react'
import SearchInput from '../SearchInput'
import { Button } from '../ui/button'

const HeroSection = () => {
  return (
    <section className='padding-x padding-y container w-full mx-auto'>
      <div className='flex flex-col items-center justify-center mt-12 text-center'>

          <h1 className='heading_secondary'>
            Find Your Perfect 
            <span className='text-black dark:text-white'> Stay </span>
            with 
            <span className='text-black dark:text-white'> Ease !</span>!
          </h1>

          <p className='text-base text-gray-500 mt-4'>
            Discover top-rated hotels at the best prices. Book your stay effortlessly and enjoy a seamless experience.
          </p>

          <div className='flex gap-8 mt-10'>
            <Button>Login as Customer</Button>
            <Button>Login as Vender</Button>

          </div>

          <div className='mt-10 w-72'>
            <SearchInput/>
          </div>
      </div>
    </section>
  )
}

export default HeroSection