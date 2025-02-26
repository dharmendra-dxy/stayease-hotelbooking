'use client'

import React, { useState } from 'react'
import StayEaseLogo from '../StayEaseLogo'
import SearchInput from '../SearchInput'
import { Button } from '../ui/button'
import { Menu, X } from 'lucide-react'
import { ModeToggle } from '../ModeToggle'

const Navbar = () => {

  const [isMobileNav, setIsMobileNav] = useState(false);

  return (
    <nav className='sticky top-0 z-50 w-full border-b border_color bg-white dark:bg-black'>
      <div className='container padding-x py-4 mx-auto'>
        <div className='flex items-center justify-between gap-8'>

          <StayEaseLogo/>

          {/* desktop view: */}
          <div className='w-full hidden lg:block'>
          <SearchInput/>
          
          </div>

          {/* desktop view: */}
          <div className='hidden lg:flex items-center justify-center gap-6'>
            <ModeToggle/>
            <div className='flex items-center justify-center gap-2'> 
              <Button variant='outline'>Login</Button>
              <Button>Signup</Button>
            </div>
            
          </div>


          {/* mobile view: */}
          <div className='lg:hidden'>
            <Button 
            variant='ghost' 
            size='icon'
            onClick={()=> setIsMobileNav((prev) => !prev)}
            >
            {
              isMobileNav ?  <X/> : <Menu/> 
            }
            </Button>
          </div>
        </div>
      </div>

      {/* mobile menu when isMobileNav: */}
      {
        isMobileNav && (
          <div className='lg:hidden flex flex-col px-4 mb-4 gap-2'>
              <div>
                <SearchInput />
              </div>

              <div>
                <ModeToggle/>
              </div>

              <div className='flex flex-col gap-2 '>
                <Button variant='outline'>Login</Button>
                <Button>Signup</Button>
              </div>
          </div>
        )
      }
    </nav>
  )
}

export default Navbar