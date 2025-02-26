import Cities from '@/components/home/Cities'
import FeaturedHotels from '@/components/home/FeaturedHotels'
import Footer from '@/components/home/Footer'
import HeroSection from '@/components/home/HeroSection'
import Navbar from '@/components/home/Navbar'
import React from 'react'

const page = () => {
  return (
    <main>
        {/* <Navbar/> */}
        <HeroSection/>
        <Cities/>
        <FeaturedHotels/>
        <Footer/>
    </main>
  )
}

export default page