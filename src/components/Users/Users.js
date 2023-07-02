import axios from "axios";
import React from "react";
import s from './Users.module.css'
import userPhoto from "../../assets/images/user.png";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
      })
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
        // this.props.setTotalUsersCount(response.data.totalCount);
      })
  }

  render() {

    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return <div>
      <div className={s.pages}>
        {pages.map(p => {
          return <span className={this.props.currentPage === p && s.active__page} onClick={(e) => { this.onPageChanged(p); }}>{p}</span>
        })}
      </div>
      {
        this.props.users.map(user => <div className={s.wrapper} key={user.id}>
          <div className={s.avatar}>
            <img className={s.avatar__img} src={user.photos.small != null ? user.photos.small : userPhoto} alt="" width='100px' />
            {user.followed
              ? <button onClick={() => { this.props.unfollow(user.id) }} className={s.avatar__btn}>Unfollow</button>
              : <button onClick={() => { this.props.follow(user.id) }} className={s.avatar__btn}>Follow</button>
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
}

export default Users;