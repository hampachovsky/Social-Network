import React from 'react';
import style from './Users.module.css';

const Users = (props) => {
  return (
    <div className={style.usersAppContainer}>
      <h1>Users</h1>
      {props.users.map((u) => (
        <div key={u.userId} className={style.usersContainer}>
          <div className={style.leftSideContainer}>
            <div className={style.avaImgContainer}>
              <img className={style.avaImg} src={u.photoUrl} alt="" />
            </div>
            <div className={style.followBtnContainer}>
              <button onClick={() => props.toggleFollow(u.userId)} className={style.followBtn}>
                {u.followed ? 'Unfollow' : 'Follow'}
              </button>
            </div>
          </div>
          <div className={style.rightSideContainer}>
            <div className={style.leftSide}>
              <div className={style.usernameContainer}>
                <h3 className={style.leading}>{u.username}</h3>
              </div>
              <div className={style.profileStatusContainer}>
                <p className={style.profileStatus}>{u.profileStatus}</p>
              </div>
            </div>
            <div className={style.rightSide}>
              <div>
                <p className={style.leading2}>{u.location.city}</p>
              </div>
              <div>
                <p className={style.leading2}>{u.location.country}</p>
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
