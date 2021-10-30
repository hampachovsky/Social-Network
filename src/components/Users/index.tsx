import { Formik, Form, Field } from 'formik';
import React from 'react';
import { FilterType } from 'redux/usersReducer';
import { UserType } from 'types/types';
import Paginator from '../common/Paginator/Paginator';
import User from './User';
import style from './Users.module.css';

type PropsType = {
  totalUsersCount: number;
  followingInProgress: Array<number>;
  pageSize: number;
  currentPage: number;
  users: Array<UserType>;
  toggleFollowedStatus: (followed: boolean, id: number) => void;
  onPageChanged: (page: number) => void;
  onFilterChanged: (filter: FilterType) => void;
  filter: FilterType;
};

const Users: React.FC<PropsType> = ({
  users,
  toggleFollowedStatus,
  followingInProgress,
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChanged,
  onFilterChanged,
  filter,
}) => {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Users</h1>
      <UsersSearchForm onFilterChanged={onFilterChanged} filter={filter} />
      <div className={style.usersAppContainer}>
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
    </>
  );
};

type FormPropsType = {
  onFilterChanged: (filter: FilterType) => void;
  filter: FilterType;
};

type FriendFormType = 'null' | 'true' | 'false';
type InitialValuesFormType = {
  term: string;
  friend: FriendFormType;
};

const UsersSearchForm: React.FC<FormPropsType> = ({ onFilterChanged, filter }) => {
  const initialValues: InitialValuesFormType = {
    term: filter.term,
    friend: String(filter.friend) as FriendFormType,
    //  friend: boolean | null,
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values, actions) => {
        const filter: FilterType = {
          term: values.term,
          friend: values.friend === 'null' ? null : values.friend === 'true' ? true : false,
        };
        actions.setSubmitting(true);
        await onFilterChanged(filter);
        actions.setSubmitting(false);
      }}
    >
      {({ isSubmitting, handleChange, handleSubmit }) => (
        <Form className={style.searchContainer} onSubmit={handleSubmit}>
          <Field type="text" name="term" onChange={handleChange} className={style.queryInput} />
          <button disabled={isSubmitting} className={style.searchBtn} type="submit">
            Search
          </button>
          <div className={style.selectFieldContainer}>
            <Field name="friend" as="select" className={style.selectField}>
              <option value="null">All</option>
              <option value="true">Only followed</option>
              <option value="false">Only unfollowed</option>
            </Field>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Users;
