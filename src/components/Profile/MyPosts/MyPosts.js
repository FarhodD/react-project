import React from 'react';
import p from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
  debugger;
  let postsData = props.postData.map(p => <Post message={p.message} count={p.likes} />)

  let newPostElement = React.createRef();
  let addPost = () => {
    props.dispatch({type: 'ADD-POST'});
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text});
  }

  return (
    <div className={p.posts}>
      <h2 className={p.title__post}>My Posts</h2>
      <div className={p.add__post}>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newsPostText} />
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={p.post__content}>
        {postsData}
      </div>
    </div>
  )
}

export default MyPosts;