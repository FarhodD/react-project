import React from 'react';

const Profile = () => {
  return (
    <div className="content">
      <img src="https://wp-s.ru/wallpapers/10/11/442250205290099/foto-cheloveka-na-obryve-zakatnoe-foto-na-prirode.jpg" alt="" />
      <div className="ava__descr">
        <p className="my__post">My Post</p>
        <div className="new__post">
          <h2 className="new__post-title">New Post</h2>
          <ul className="new__post-list">
            <li className="new__post-items">post 1</li>
            <li className="new__post-items">post 2</li>
            <li className="new__post-items">post 3</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Profile;