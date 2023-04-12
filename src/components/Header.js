import React from 'react'
import Image from 'next/image';

function Header() {
  return (
    <div>
        <div className='flex justify-between max-w-6xl'>
            <div className='relative h-24 w-24'>
                <Image src='https://i.pinimg.com/originals/1e/f7/1a/1ef71a1999492060c800bb1f3ff9550a.png'
                    layout='fill'
                    // width={120}
                    // height={50}
                />
            </div>

            
            {/* Middle */}
            {/* Right */}
        </div>
        
    </div>


  )
}

export default Header