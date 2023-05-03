import React from 'react';
import p from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
  return (
    <div className={p.posts}>
      <h2 className={p.title__post}>Posts</h2>
      <div className={p.post__content}>
        <Post message='Hello Everyone!' count='20'/>
        <Post message='Hi, it is my first project in React!' count='30'/>
      </div>
    </div>
  )
}

export default MyPosts;