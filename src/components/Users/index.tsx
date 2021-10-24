import React from 'react';
import { UserType } from 'types/types';
import Paginator from '../common/Paginator/Paginator';
import User from './User';
import style from './Users.module.css';

type PropsType = {
  totalUsersCount: number;
  toggleFollowedStatus: (followed: boolean, id: number) => void;
  followingInProgress: Array<number>;
  pageSize: number;
  currentPage: number;
  onPageChanged: (page: number) => void;
  users: Array<UserType>;
};

const Users: React.FC<PropsType> = ({
  users,
  toggleFollowedStatus,
  followingInProgress,
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChanged,
}) => {
  return (
    <div className={style.usersAppContainer}>
      <h1>Users</h1>
      {users.map((u) => (
        <User
          user={u}
          key={u.id}
          toggleFollowedStatus={toggleFollowedStatus}
          followingInProgress={followingInProgress}
        />
      ))}
      <div className={style.paginatorConainer}>
        <Paginator
          totalItemsCount={totalUsersCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChanged={onPageChanged}
        />
      </div>
    </div>
  );
};

export default Users;
