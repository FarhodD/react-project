import React from 'react';
import p from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

  let postsData = props.postData.map(p => <Post message={p.message} count={p.likes} />)

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
  }

  return (
    <div className={p.posts}>
      <h2 className={p.title__post}>My Posts</h2>
      <div className={p.add__post}>
        <textarea ref={newPostElement}></textarea>
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={p.post__content}>
        {postsData}
      </div>
    </div>
  )
}

export default MyPosts;