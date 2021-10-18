import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User';
import style from './Users.module.css';

const Users = (props) => {
  return (
    <div className={style.usersAppContainer}>
      <Paginator
        totalUsersCount={props.totalUsersCount}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        onPageChanged={props.onPageChanged}
      />
      <h1>Users</h1>
      {props.users.map((u) => (
        <User
          user={u}
          key={u.id}
          toggleFollowedStatus={props.toggleFollowedStatus}
          followingInProgress={props.followingInProgress}
        />
      ))}
      <div className={style.showMoreBtnContainer}>
        <button className={style.showMoreBtn}>Show More</button>
      </div>
    </div>
  );
};

export default Users;
