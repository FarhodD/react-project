import React from "react";
import s from './Users.module.css';
import userPhoto from "../../assets/images/user.png";


let Users = (props) => {
  
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return <div>
    <div className={s.pages}>
      {pages.map(p => {
        return <span className={props.currentPage === p && s.active__page} onClick={(e) => { props.onPageChanged(p); }}>{p}</span>
      })}
    </div>
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