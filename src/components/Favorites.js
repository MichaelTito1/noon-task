import React from 'react'
import Post from '../components/Post';

function Favorites() {
    const favoritePosts = JSON.parse(localStorage.getItem('favorites') || "[]");
    
    return (
        <main className='grid grid-cols-1 lg:grid-cols-4 mb-12 lg:mt-12'>
            <section></section>
            <section className='col-span-2 '>
                <div>
                    {favoritePosts.map((post) => (
                        <Post key={post.id}
                            id={post.id}
                            username={post.username}
                            userImg={post.userimg}
                            img={post.img}
                            title={post.title}
                            price={post.price}
                            caption={post.caption}
                        />
                    ))}
                </div>
            </section>
        </main>
    )
}

export default Favorites