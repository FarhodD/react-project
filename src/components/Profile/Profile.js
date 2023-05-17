import React from 'react';
import p from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div className={p.content}>
      <ProfileInfo />
      <MyPosts
        postData={props.profilePage.postData}
        newsPostText={props.profilePage.newsPostText}
        updateNewPostText={props.updateNewPostText}
        addPost={props.addPost} />
    </div>
  )
}

export default Profile;