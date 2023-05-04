import React from 'react';
import p from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
  let postData = [
    {id: 1, message: 'Hello Everyone!', likes: 20},
    {id: 2, message: 'Hi, it is my first project in React!', likes: 30}
  ]

  return (
    <div className={p.posts}>
      <h2 className={p.title__post}>Posts</h2>
      <div className={p.post__content}>
        <Post message={postData[0].message} count={postData[0].likes}/>
        <Post message={postData[1].message} count={postData[1].likes}/>
      </div>
    </div>
  )
}

export default MyPosts;