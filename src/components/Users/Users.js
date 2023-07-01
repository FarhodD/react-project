import axios from "axios";
import React from "react";
import s from './Users.module.css'
import userPhoto from "../../assets/images/user.png";

const Users = (props) => {
  let getUsers = () => {
    if (props.users.length === 0) {
      axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
        props.setUsers(response.data.items)
      })
    }
  }

  return <div>
    <button onClick={getUsers}>Get Users</button>
    {
      props.users.map(user => <div className={s.wrapper} key={user.id}>
        <div className={s.avatar}>
          <img className={s.avatar__img} src={user.photos.small != null ? user.photos.small : userPhoto} alt="" width='100px' />
          {user.followed
            ? <button onClick={() => { props.unfollow(user.id) }} className={s.avatar__btn}>Unfollow</button>
            : <button onClick={() => { props.follow(user.id) }} className={s.avatar__btn}>Follow</button>
          }
        </div>

        <div className={s.users__info}>
          <div className={s.users__about}>
            <h3 className={s.name}>{user.name}</h3>
            <p className={s.status}>{user.status}</p>
          </div>

          <div className={s.users__location}>
            <p className={s.city}>{"user.location.city"}</p>
            <p className={s.country}>{"user.location.country"}</p>
          </div>
        </div>

      </div>

      )}
  </div>
}

export default Users;