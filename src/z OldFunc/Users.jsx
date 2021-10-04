/*import React from 'react';
import style from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user_img.png';

const Users = (props) => {
  const getUsers = () => {
    if (props.users.length === 0) {
      axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
        props.setUsers(response.data.items);
      });
    }
  };
  return (
    <div className={style.usersAppContainer}>
      <button onClick={getUsers}>Get User</button>
      <h1>Users</h1>
      {props.users.map((u, id) => (
        <div key={id} className={style.usersContainer}>
          <div className={style.leftSideContainer}>
            <div className={style.avaImgContainer}>
              <img
                className={style.avaImg}
                src={u.photos.small != null ? u.photos.small : userPhoto}
                alt=""
              />
            </div>
            <div className={style.followBtnContainer}>
              <button onClick={() => props.toggleFollow(u.id)} className={style.followBtn}>
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
                <p className={style.leading2}>CITY{u.location.city }</p>
             </div>
              <div>
                <p className={style.leading2}>COUNTRY{u.location.country }</p>
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
*/
