import React from 'react'
import { useState } from 'react';
import { HeartIcon } from '@heroicons/react/outline';
import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid';

function HeartButton({postProps}) {
    // TODO: initialize isFavorite according to whether the post is in favs
    const [isFavorite, setIsFavorite] = useState(false);

    const handleClick = () => {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        
        if(favorites.includes(postProps)){
            favorites = favorites.filter(post => post.id !== postProps.id);
        }
        else{
            favorites.push(postProps);
        }
        localStorage.setItem('favorites', JSON.stringify([...favorites]));
        setIsFavorite(!isFavorite);
    }
    
    return isFavorite ? 
        ( <button onClick={handleClick}><HeartIconFilled className='btn' /> </button> ) 
        : 
        ( <button onClick={handleClick}><HeartIcon className='btn' /> </button> );
}

export default HeartButton