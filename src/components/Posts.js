import React from 'react'
import Post  from '../components/Post';

function Posts() {

    const posts = [
        {
            id: 1,
            username: "asdasasd",
            title: `Item No. 1`,
            price: 9.99,
            userimg: 'https://img.freepik.com/free-icon/user_318-725053.jpg',
            img: 'https://imagevars.gulfnews.com/2022/04/15/Stock-noon_1802c9ddfe0_medium.jpg',
            caption: 'this is a post #instapost',
        },
        {
            id: 2,
            username: "asdasasd",
            title: `Item No. 2`,
            price: 5.99,
            userimg: 'https://image.shutterstock.com/image-vector/user-icon-human-vector-person-260nw-202510510.jpg',
            img: 'https://www.shutterstock.com/image-photo/wall-office-clock-showing-noon-260nw-102896654.jpg',
            caption: 'this is a post',
        },{
            id: 3,
            username: "asdasasd",
            title: `Item No. 3`,
            price: 10.99,
            userimg: 'https://img.freepik.com/free-icon/user_318-725053.jpg',
            img: 'https://thumbs.dreamstime.com/b/noon-twelve-o-clock-vintage-clock-30003702.jpg',
            caption: 'this is a post',
        },
        {
            id: 4,
            username: "asdasasd",
            title: `Item No. 1`,
            price: 9.99,
            userimg: 'https://img.freepik.com/free-icon/user_318-725053.jpg',
            img: 'https://imagevars.gulfnews.com/2022/04/15/Stock-noon_1802c9ddfe0_medium.jpg',
            caption: 'this is a post #instapost',
        },
        {
            id: 5,
            username: "asdasasd",
            title: `Item No. 2`,
            price: 5.99,
            userimg: 'https://image.shutterstock.com/image-vector/user-icon-human-vector-person-260nw-202510510.jpg',
            img: 'https://www.shutterstock.com/image-photo/wall-office-clock-showing-noon-260nw-102896654.jpg',
            caption: 'this is a post',
        },{
            id: 6,
            username: "asdasasd",
            title: `Item No. 3`,
            price: 10.99,
            userimg: 'https://img.freepik.com/free-icon/user_318-725053.jpg',
            img: 'https://thumbs.dreamstime.com/b/noon-twelve-o-clock-vintage-clock-30003702.jpg',
            caption: 'this is a post',
        },
        {
            id: 7,
            username: "asdasasd",
            title: `Item No. 1`,
            price: 9.99,
            userimg: 'https://img.freepik.com/free-icon/user_318-725053.jpg',
            img: 'https://imagevars.gulfnews.com/2022/04/15/Stock-noon_1802c9ddfe0_medium.jpg',
            caption: 'this is a post #instapost',
        },
        {
            id: 8,
            username: "asdasasd",
            title: `Item No. 2`,
            price: 5.99,
            userimg: 'https://image.shutterstock.com/image-vector/user-icon-human-vector-person-260nw-202510510.jpg',
            img: 'https://www.shutterstock.com/image-photo/wall-office-clock-showing-noon-260nw-102896654.jpg',
            caption: 'this is a post',
        },{
            id: 9,
            username: "asdasasd",
            title: `Item No. 3`,
            price: 10.99,
            userimg: 'https://img.freepik.com/free-icon/user_318-725053.jpg',
            img: 'https://thumbs.dreamstime.com/b/noon-twelve-o-clock-vintage-clock-30003702.jpg',
            caption: 'this is a post',
        },
        {
            id: 10,
            username: "asdasasd",
            title: `Item No. 1`,
            price: 9.99,
            userimg: 'https://img.freepik.com/free-icon/user_318-725053.jpg',
            img: 'https://imagevars.gulfnews.com/2022/04/15/Stock-noon_1802c9ddfe0_medium.jpg',
            caption: 'this is a post #instapost',
        },
        {
            id: 11,
            username: "asdasasd",
            title: `Item No. 2`,
            price: 5.99,
            userimg: 'https://image.shutterstock.com/image-vector/user-icon-human-vector-person-260nw-202510510.jpg',
            img: 'https://www.shutterstock.com/image-photo/wall-office-clock-showing-noon-260nw-102896654.jpg',
            caption: 'this is a post',
        },{
            id: 12,
            username: "asdasasd",
            title: `Item No. 3`,
            price: 10.99,
            userimg: 'https://img.freepik.com/free-icon/user_318-725053.jpg',
            img: 'https://thumbs.dreamstime.com/b/noon-twelve-o-clock-vintage-clock-30003702.jpg',
            caption: 'this is a post',
        },
        {
            id: 13,
            username: "asdasasd",
            title: `Item No. 1`,
            price: 9.99,
            userimg: 'https://img.freepik.com/free-icon/user_318-725053.jpg',
            img: 'https://imagevars.gulfnews.com/2022/04/15/Stock-noon_1802c9ddfe0_medium.jpg',
            caption: 'this is a post #instapost',
        },
        {
            id: 14,
            username: "asdasasd",
            title: `Item No. 2`,
            price: 5.99,
            userimg: 'https://image.shutterstock.com/image-vector/user-icon-human-vector-person-260nw-202510510.jpg',
            img: 'https://www.shutterstock.com/image-photo/wall-office-clock-showing-noon-260nw-102896654.jpg',
            caption: 'this is a post',
        },{
            id: 15,
            username: "asdasasd",
            title: `Item No. 3`,
            price: 10.99,
            userimg: 'https://img.freepik.com/free-icon/user_318-725053.jpg',
            img: 'https://thumbs.dreamstime.com/b/noon-twelve-o-clock-vintage-clock-30003702.jpg',
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