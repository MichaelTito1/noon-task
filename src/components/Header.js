import React from 'react'
import Image from "next/legacy/image";
import {
    SearchIcon,
    HomeIcon,
    HeartIcon
} from '@heroicons/react/outline';

function Header() {
  return (
    
    <div className="fixed bottom-0 lg:top-0 w-screen">
        <div className='shadow-sm border-t lg:border-b sticky top-0 z-50  bg-black'>
            <div className='flex justify-between max-w-6xl mx-5 lg:mx-auto'>
                {/* Left - Noon Logo */}
                <div className='relative hidden lg:inline-grid w-12 cursor-pointer'>
                    <Image src='https://www.pngkit.com/png/full/429-4290017_noon-.png'
                        layout='fill'
                        objectFit='contain'
                    />
                </div>

                {/* <div className='relative inline-grid lg:hidden w-10 flex-shrink-0 cursor-pointer'>
                    <Image src='https://play-lh.googleusercontent.com/4-wa067yiYYMj5rRdHm82jPdDiSHSoIkwwvHA0teCEauFFU_cjx053jMBwBxfo2anJo'
                        layout='fill'
                        objectFit='contain'
                    />
                </div> */}
                
                {/* Middle - put home and likes tabs */}
                <div className='flex items-center justify-around w-screen lg:space-x-20'>
                    <HomeIcon className='navBtn'/>
                    <HeartIcon className='navBtn'/>
                </div>

                {/* Right - search */}
                <div className='hidden lg:inline-grid max-w-xs'>
                    <div className='relative mt-1 p-3 rounded-md'>
                        <div className='absolute inset-y-0 pl-3 flex items-center justify-end pointer-events-none'>
                            <SearchIcon className='h-5 w-5 text-gray-500' />
                        </div>
                        <input className='bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-yellow-400 focus:border-yellow-400 rounded-md'
                            type='text' 
                            placeholder='Search'
                        />
                    </div>
                </div>
            </div>
            
        </div>
    </div>

  )
}

export default Header