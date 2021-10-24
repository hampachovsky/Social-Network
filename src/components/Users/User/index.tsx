import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserType } from 'types/types';
import userPhoto from '../../../assets/images/user_img.png';
import style from './User.module.css';

type PropsType = {
  user: UserType;
  toggleFollowedStatus: (followed: boolean, id: number) => void;
  followingInProgress: Array<number>;
};

const User: React.FC<PropsType> = ({ user, toggleFollowedStatus, followingInProgress }) => {
  return (
    <>
      <div className={style.usersContainer}>
        <div className={style.leftSideContainer}>
          <div className={style.avaImgContainer}>
            <NavLink to={`/profile/${user.id}`}>
              <img
                className={style.avaImg}
                src={user.photos.small != null ? user.photos.small : userPhoto}
                alt=""
              />
            </NavLink>
          </div>
          <div className={style.followBtnContainer}>
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => toggleFollowedStatus(user.followed, user.id)}
              className={style.followBtn}
            >
              {user.followed ? 'Unfollow' : 'Follow'}
            </button>
          </div>
        </div>
        <div className={style.rightSideContainer}>
          <div className={style.leftSide}>
            <div className={style.usernameContainer}>
              <h3 className={style.leading}>{user.name}</h3>
            </div>
            <div className={style.profileStatusContainer}>
              <p className={style.profileStatus}>
                {user.status != null ? user.status : 'temporary status'}
              </p>
            </div>
          </div>
          <div className={style.rightSide}>
            <div>
              <p className={style.leading2}>CITY{/* user.location.city */}</p>
            </div>
            <div>
              <p className={style.leading2}>COUNTRY{/* user.location.country */}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
