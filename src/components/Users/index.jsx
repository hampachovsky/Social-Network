import React from 'react';
import style from './Users.module.css';
import userPhoto from '../../assets/images/user_img.png';
import { NavLink } from 'react-router-dom';
import { followAPI } from 'api/api';

const Users = (props) => {
  let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
  const pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }
  const toggleFollow = (followed, id) => {
    followed
      ? followAPI.unfollow(id).then((data) => {
          if (data.resultCode === 0) {
            props.toggleFollow(id);
          }
        })
      : followAPI.follow(id).then((data) => {
          if (data.resultCode === 0) {
            props.toggleFollow(id);
          }
        });
  };

  return (
    <div className={style.usersAppContainer}>
      <div className={style.pageList}>
        {pages.map((p, index) => {
          return (
            <span
              key={index}
              className={props.currentPage === p && style.selectedPage}
              onClick={() => props.onPageChanged(p)}
            >
              {p}
            </span>
          );
        })}
      </div>
      <h1>Users</h1>
      {props.users.map((u, id) => (
        <div key={u.id} className={style.usersContainer}>
          <div className={style.leftSideContainer}>
            <div className={style.avaImgContainer}>
              <NavLink to={`/profile/${u.id}`}>
                <img
                  className={style.avaImg}
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  alt=""
                />
              </NavLink>
            </div>
            <div className={style.followBtnContainer}>
              <button onClick={() => toggleFollow(u.followed, u.id)} className={style.followBtn}>
                {u.followed ? 'Unfollow' : 'Follow'}
              </button>
            </div>
          </div>
          <div className={style.rightSideContainer}>
            <div className={style.leftSide}>
              <div className={style.usernameContainer}>
                <h3 className={style.leading}>{u.name}</h3>
              </div>
              <div className={style.profileStatusContainer}>
                <p className={style.profileStatus}>
                  {u.status != null ? u.status : 'temporary status'}
                </p>
              </div>
            </div>
            <div className={style.rightSide}>
              <div>
                <p className={style.leading2}>CITY{/* u.location.city */}</p>
              </div>
              <div>
                <p className={style.leading2}>COUNTRY{/* u.location.country */}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className={style.showMoreBtnContainer}>
        <button className={style.showMoreBtn}>Show More</button>
      </div>
    </div>
  );
};

export default Users;
