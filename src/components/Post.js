import React from 'react'
import {
    DotsHorizontalIcon, HeartIcon
} from '@heroicons/react/outline';

function Post({id, username, userImg, img, title, price, caption}) {
  return (
    <div className='my-7 border rounded-sm border-yellow-600'>
      {/* Header */}
      <div className='flex items-center p-5'>
          <img src={userImg} className='rounded-full h-12 w-12 object-contain border p-1 mr-3' />
          <p className='flex-1 font-bold'>{username}</p>
          <DotsHorizontalIcon className='h-5' />
      </div>

      {/* image */}
      <img src={img} className='object-cover w-full' alt='' />

      {/* buttons */}
      <div>
        <HeartIcon className='btn'/>
      </div>
      {/* caption */}
      {/* comments */}
      {/* input box */}
    </div>
  )
}

export default Post