import React from 'react'
import { Card } from './ui/card'
import Image from 'next/image'
import { Bookmark, IndianRupee, MapPin, Share2 } from 'lucide-react'
import { Copy } from "lucide-react"
import { Button } from './ui/button'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

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
                    <span className='text-gray-700 font-semibold'>500</span>Night
                </p>
                <div className='flex gap-2'>
                    <Button size='icon' variant='outline'>
                        <Bookmark className='h-5 w-5'/>
                    </Button>

                    {/* share button: */}
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button size='icon' variant='outline'>
                                <Share2 className='h-5 w-5'/>
                            </Button>
                        </DialogTrigger>

                        <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                            <DialogTitle>Share Hotel</DialogTitle>
                            <DialogDescription>
                                Anyone who has this link will be able to view this.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="flex items-center space-x-2">
                            <div className="grid flex-1 gap-2">
                                <Label htmlFor="link" className="sr-only">
                                    Link
                                </Label>
                                <Input
                                id="link"
                                defaultValue="https://stayease.com/hotel/hostel-new-and-sons23/"
                                readOnly
                                />
                            </div>
                            <Button type="submit" size="sm" className="px-3">
                                <span className="sr-only">Copy</span>
                                <Copy />
                            </Button>
                        </div>
                            <DialogFooter className="sm:justify-start">
                            <DialogClose asChild>
                                <Button type="button" variant="secondary">
                                Close
                                </Button>
                            </DialogClose>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
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