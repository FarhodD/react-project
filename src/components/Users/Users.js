import React from "react";
import s from './Users.module.css'

const Users = (props) => {

  if (props.length === 0) {
    props.setUsers(
      [
        {
          id: 1, photoUrl: 'https://avatars.githubusercontent.com/u/12345678?v=4',
          followed: true, firstName: 'Farhod', status: 'Front-End Developer', location: { city: 'Dushanbe', country: 'Tajikistan' }
        },
        {
          id: 2, photoUrl: 'https://avatars.githubusercontent.com/u/12345678?v=4',
          followed: false, firstName: 'Somon', status: 'Full-Stack Developer', location: { city: 'Dushanbe', country: 'Tajikistan' }
        },
        {
          id: 3, photoUrl: 'https://avatars.githubusercontent.com/u/12345678?v=4',
          followed: false, firstName: 'Umar', status: 'Front-End Developer', location: { city: 'Dushanbe', country: 'Tajikistan' }
        },
        {
          id: 4, photoUrl: 'https://avatars.githubusercontent.com/u/12345678?v=4',
          followed: true, firstName: 'Alisher', status: 'Front-End Developer', location: { city: 'Dushanbe', country: 'Tajikistan' }
        },
      ]
    )
  }

  return <div>
    {
      props.users.map(user => <div className={s.wrapper} key={user.id}>
        <div className={s.avatar}>
          <img className={s.avatar__img} src={user.photoUrl} alt="" width='80px' />
          {user.followed
            ? <button onClick={() => { props.unfollow(user.id) }} className={s.avatar__btn}>Unfollow</button>
            : <button onClick={() => { props.follow(user.id) }} className={s.avatar__btn}>Follow</button>
          }
        </div>

        <div className={s.users__info}>
          <div className={s.users__about}>
            <h3 className={s.name}>{user.firstName}</h3>
            <p className={s.status}>{user.status}</p>
          </div>

          <div className={s.users__location}>
            <p className={s.city}>{user.location.city}</p>
            <p className={s.country}>{user.location.country}</p>
          </div>
        </div>

      </div>

      )}
  </div>
}

export default Users;