import React from 'react';
import p from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
  
  let postsData = props.postData.map(p => <Post message={p.message} count={p.likes}/>)

  return (
    <div className={p.posts}>
      <h2 className={p.title__post}>Posts</h2>
      <div className={p.post__content}>
        {postsData}
      </div>
    </div>
  )
}

export default MyPosts;