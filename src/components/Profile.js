import React from 'react';
import p from './Profile.module.css';
import MyPosts from './Profile/MyPosts/MyPosts';

const Profile = () => {
  return (
    <div className={p.content}>
      <MyPosts />
    </div>
  )
}

export default Profile;