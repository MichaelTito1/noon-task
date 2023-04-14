import React from 'react'
import Post  from '../components/Post';

function Posts() {

    const posts = [
        {
            id: 1,
            username: "asdasasd",
            title: `Item No. 1`,
            price: 9.99,
            userimg: 'https://picsum.photos/200',
            img: 'https://picsum.photos/400',
            caption: 'this is a post #instapost',
        },
        {
            id: 2,
            username: "asdasasd",
            title: `Item No. 2`,
            price: 5.99,
            userimg: 'https://picsum.photos/200',
            img: 'https://picsum.photos/400',
            caption: 'this is a post',
        },{
            id: 3,
            username: "asdasasd",
            title: `Item No. 3`,
            price: 10.99,
            userimg: 'https://picsum.photos/200',
            img: 'https://picsum.photos/400',
            caption: 'this is a post',
        },
    ]
  return (
    <main className='grid grid-cols-1 lg:grid-cols-4 mb-12 lg:mt-12'>
        <section></section>
        <section className='col-span-2 '>
            <div>
                {posts.map((post) => (
                    <Post key={post.id}
                        id={post.id}
                        username = {post.username}
                        userImg = {post.userimg}
                        img = {post.img}
                        title={post.title}
                        price={post.price}
                        caption = {post.caption}
                    />
                ))}
            </div>
        </section>
    </main>
    
  )
}

export default Posts