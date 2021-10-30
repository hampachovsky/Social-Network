import Preloader from 'components/common/Preloader';
import { Field, Form, Formik } from 'formik';
import { useTypedSelector } from 'hooks/useTypedSelector';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FilterType, getCurrentPage, requestUsers, toggleFollowedStatus } from 'redux/usersReducer';
import {
  getUserFilterSelector,
  getUsersCurrentPageSelector,
  getUsersFollowingInProgressSelector,
  getUsersIsFetchingSelector,
  getUsersPageSizeSelector,
  getUsersSelector,
  getUsersTotalUsersCountSelector,
} from 'redux/usersSelector';
import Paginator from '../common/Paginator/Paginator';
import User from './User';
import style from './Users.module.css';

const Users: React.FC = () => {
  const users = useTypedSelector(getUsersSelector);
  const followingInProgress = useTypedSelector(getUsersFollowingInProgressSelector);
  const totalUsersCount = useTypedSelector(getUsersTotalUsersCountSelector);
  const pageSize = useTypedSelector(getUsersPageSizeSelector);
  const currentPage = useTypedSelector(getUsersCurrentPageSelector);
  const filter = useTypedSelector(getUserFilterSelector);
  const isFetching = useTypedSelector(getUsersIsFetchingSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestUsers(currentPage, pageSize, filter));
  }, []);

  const onFilterChanged = async (filter: FilterType) => {
    await dispatch(requestUsers(currentPage, pageSize, filter));
  };

  const onPageChanged = (page: number) => {
    dispatch(getCurrentPage(page, pageSize));
    dispatch(requestUsers(page, pageSize, filter));
  };

  const onToggleFollowedStatus = (followed: boolean, id: number) => {
    dispatch(toggleFollowedStatus(followed, id));
  };
  if (isFetching) return <Preloader />;
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Users</h1>
      <UsersSearchForm onFilterChanged={onFilterChanged} filter={filter} />
      <div className={style.usersAppContainer}>
        {users.map((u) => (
          <User
            user={u}
            key={u.id}
            toggleFollowedStatus={onToggleFollowedStatus}
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
