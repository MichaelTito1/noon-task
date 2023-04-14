import React from 'react'
import { useState } from 'react';
import { HeartIcon } from '@heroicons/react/outline';
import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid';

function HeartButton({postId}) {
    const [isFavorite, setIsFavorite] = useState(false);

    const handleClick = () => {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        // const idx = favorites.indexOf(postId);
        console.log(`idx = ${favorites.includes(postId)}`);
        console.log(`before = ${favorites}`);
        if(favorites.includes(postId)){
            // favorites.splice(idx, 1);
            favorites = favorites.filter(id => id !== postId);
        }
        else{
            favorites.push(postId);
        }
        localStorage.setItem('favorites', JSON.stringify([...favorites]));
        setIsFavorite(!isFavorite);
        console.log(`after = ${favorites}`);
    }
    
    return isFavorite ? 
        ( <button onClick={handleClick}><HeartIconFilled className='btn' /> </button> ) 
        : 
        ( <button onClick={handleClick}><HeartIcon className='btn' /> </button> );
}

export default HeartButton