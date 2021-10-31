import Preloader from 'components/common/Preloader';
import { useTypedSelector } from 'hooks/useTypedSelector';
import queryString from 'query-string';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
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
import { UsersSearchForm } from './SearchFormUsers';
import User from './User';
import style from './Users.module.css';

type QueryParamsType = {
  term?: string;
  page?: string;
  friend?: string;
};

const Users: React.FC = () => {
  const users = useTypedSelector(getUsersSelector);
  const followingInProgress = useTypedSelector(getUsersFollowingInProgressSelector);
  const totalUsersCount = useTypedSelector(getUsersTotalUsersCountSelector);
  const pageSize = useTypedSelector(getUsersPageSizeSelector);
  const currentPage = useTypedSelector(getUsersCurrentPageSelector);
  const filter = useTypedSelector(getUserFilterSelector);
  const isFetching = useTypedSelector(getUsersIsFetchingSelector);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const parsed: QueryParamsType = queryString.parse(history.location.search);
    let actualPage = currentPage;
    let actualFilter = filter;
    if (!!parsed.page) actualPage = +parsed.page;
    if (!!parsed.term) actualFilter = { ...actualFilter, term: parsed.term as string };
    switch (parsed.friend) {
      case 'null':
        actualFilter = { ...actualFilter, friend: null };
        break;
      case 'true':
        actualFilter = { ...actualFilter, friend: true };
        break;
      case 'false':
        actualFilter = { ...actualFilter, friend: false };
        break;

      default:
        break;
    }
    dispatch(requestUsers(actualPage, pageSize, actualFilter));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(() => {
    const query: QueryParamsType = {};
    if (!!filter.term) query.term = filter.term;
    if (filter.friend !== null) query.friend = String(filter.friend);
    if (currentPage !== 1) query.page = String(currentPage);
    history.push({
      pathname: '/users',
      search: queryString.stringify(query),
    });
  }, [filter, history, currentPage]);

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

export default Users;
