import React from 'react'
import { Card } from './ui/card'
import Image from 'next/image'
import { Bookmark, IndianRupee, MapPin, Share2 } from 'lucide-react'
import { Button } from './ui/button'
import ShareButton from './ShareButton'


const HotelCard = () => {
  return (
    <Card className='hover:scale-[1.02] transition-all border border-gray-400 dark:border-gray-700'>
        <div className='p-4'>
            <Image
            src='https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='hotel-image'
            width={500}
            height={500}
            className='object-cover dark:border dark:border-gray-500 rounded-lg'
            />
        </div>

        <div className='px-4 mb-4'>
            
            <div className='flex items-center justify-between'>
                <p className='text-xl font-bold '>
                    Hotels Morris and son's
                </p>
            </div>
            

            <p className='mt-4 flex gap-2 items-center text-gray-500 hover:text-gray-600 cursor-pointer'>
                <MapPin className='h-5 w-5'/>
                Ghazaiabad, India
            </p>

            <div className='flex items-center justify-between'>
                <p className='mt-2 flex gap-2 items-center text-gray-500'>
                    <IndianRupee className='h-4 w-4'/>
                    <span className='text-gray-700 dark:text-gray-300 font-semibold'>500</span>Night
                </p>
                <div className='flex gap-2'>
                    <Button size='icon' variant='outline'>
                        <Bookmark className='h-5 w-5'/>
                    </Button>

                    <ShareButton id='localhost:3000/hotel34'/>
                    
                </div>
            </div>

            <div className='mt-4'>
                <Button className='bg-rose-500 hover:bg-rose-600'>Checkout</Button>
            </div>
            
        </div>
        
    </Card>
  )
}

export default HotelCard