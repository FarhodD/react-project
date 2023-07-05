import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import p from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  // debugger;
  if (!props.profile) {
    return <Preloader />
  }
  return (<>
    <div className={p.profileInfo}>
      <img className={p.profileInfo__img} width="600px" src="https://i01.fotocdn.net/s108/58d55a1b3a93fbe1/public_pin_l/2363495226.jpg" alt="" />
      <div>ava + description</div>
      {/* <img src={props.profile.photos.large} alt="Пользователь" /> */}
    </div>
  </>
  )
}

export default ProfileInfo;