import React, { useEffect } from 'react'
import { useState } from 'react';
import { HeartIcon } from '@heroicons/react/outline';
import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid';

function HeartButton({postProps}) {
    const [isFavorite, setIsFavorite] = useState(false);

    const checkPostIsFavorite = () => {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        for(let i = 0; i < favorites.length; i++){
            let fav = favorites[i];
            if(fav.id == postProps.id)
                return true;
        }
        return false;
    }

    const handleClick = () => {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        if(checkPostIsFavorite()){
            favorites = favorites.filter(post => post.id !== postProps.id);
        }
        else{
            favorites.push(postProps);
        }
        localStorage.setItem('favorites', JSON.stringify([...favorites]));
        setIsFavorite(!isFavorite);
    }

    useEffect(() => {
        setIsFavorite(checkPostIsFavorite());
    }, [isFavorite]);
    
    return isFavorite ? 
        ( <button onClick={handleClick}><HeartIconFilled className='btn' /> </button> ) 
        : 
        ( <button onClick={handleClick}><HeartIcon className='btn' /> </button> );
}

export default HeartButton