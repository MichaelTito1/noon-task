import React from 'react'
import {
  DotsHorizontalIcon, HeartIcon
} from '@heroicons/react/outline';
import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid';
import HeartButton from './HeartButton';

function Post({ id, username, userImg, img, title, price, caption }) {
  const coloredCaption = caption.replace(/#\w+/g, match => {
    return `<span class="text-blue-500">${match}</span>`
  })

  const props = {
    id: id,
    username: username,
    userImg: userImg,
    img: img,
    title: title,
    price: price,
    caption: caption
  };
  
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

      <div className='flex items-center justify-between px-5'>
        <div className='flex items-center w-full'>
          <HeartIconFilled className='h-7 fill-yellow-600' />
          <p className='p-3 font-bold text-yellow-600'>32 likes</p>
        </div>

        {/* TODO: btn not working in desktop!!! */}
        <HeartButton postProps={props}/>
      </div>

      {/* Price & title*/}
      <h1 className='px-5 py-2 text-2xl font-bold'>${price} {title}</h1>

      {/* caption */}
      <span className='px-5 font-bold mr-1 text-yellow-600'>{username} </span>
      <p className='px-5 truncate' dangerouslySetInnerHTML={{ __html: coloredCaption }}></p>

      {/* comments */}
      <span className='text-yellow-600 p-5'>View all 12 comments</span>
    </div>
  )
}

export default Post