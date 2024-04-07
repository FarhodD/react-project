import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, requiered } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';
import p from './MyPosts.module.css';
import Post from './Post/Post';

const maxLength10 = maxLengthCreator(10);

const MyPosts = (props) => {
  let postsData = props.posts.map(p => <Post message={p.message} count={p.likes} />)

  let newPostElement = React.createRef();


  let onAddPost = (values) => {
    props.addPost(values.newsPostText);
  }

  return (
    <div className={p.posts}>
      <h2 className={p.title__post}>My Posts</h2>
      <AddNewPostForm onSubmit={onAddPost} />
      <div className={p.post__content}>
        {postsData}
      </div>
    </div>
  )
}

let AddNewPostForm = (props) => {
  return (
    <form className={p.add__post} onSubmit={props.handleSubmit}>
      <Field
        name='newsPostText'
        component={Textarea}
        placeholder='Post message'
        validate={[requiered, maxLength10]}
      />
      <button>Add post</button>
    </form>
  )
}

AddNewPostForm = reduxForm({ form: 'ProfileAddNewPostForm' })(AddNewPostForm)

export default MyPosts;