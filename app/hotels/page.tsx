import AllHotels from '@/components/hotels/AllHotels'
import SearchInput from '@/components/SearchInput'
import React from 'react'

const page = () => {
  return (
    <main className='w-full min-h-screen container mx-auto padding-x'>

        <div className='mt-12 text-center'>
            <h1 className='text-2xl text-center font-semibold'>
                Search <span className='text-rose-500'>Hotels</span> from wide variety of range
            </h1>

            <div className='mt-4 mx-auto max-w-2xl justify-center'>
                <SearchInput/>
            </div>
        </div>

        <div className='mt-12 mb-12'>
            <AllHotels/>
        </div>
        
    </main>
  )
}

export default page