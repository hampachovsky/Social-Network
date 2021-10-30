/* eslint-disable @typescript-eslint/no-unused-vars */
import Preloader from 'components/common/Preloader';
import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { AppStateType } from 'redux/reduxStore';
import { FilterType, getCurrentPage, requestUsers, toggleFollowedStatus } from 'redux/usersReducer';
import {
  getUserFilterSelector,
  getUsersCurrentPageSelector,
  getUsersFollowingInProgressSelector,
  getUsersIsFetchingSelector,
  getUsersPageSizeSelector,
  getUsersSelector,
  getUsersTotalUsersCountSelector,
} from '../redux/usersSelector';
/*
const UsersAPIComponent: React.FC<PropsFromRedux> = ({
  pageSize,
  currentPage,
  requestUsers,
  getCurrentPage,
  isFetching,
  filter,
  ...props
}) => {
  const onPageChanged = (page: number) => {
    getCurrentPage(page, pageSize);
    requestUsers(page, pageSize, filter);
  };

  const onFilterChanged = async (filter: FilterType) => {
    await requestUsers(currentPage, pageSize, filter);
  };
  return (
    <>
      {isFetching ? <Preloader /> : null}
      <Users
        totalUsersCount={props.totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        users={props.users}
        followingInProgress={props.followingInProgress}
        toggleFollowedStatus={props.toggleFollowedStatus}
        onFilterChanged={onFilterChanged}
        filter={filter}
      />
    </>
  );
};

const mapStateToProps = (state: AppStateType) => {
  return {
    users: getUsersSelector(state),
    pageSize: getUsersPageSizeSelector(state),
    totalUsersCount: getUsersTotalUsersCountSelector(state),
    currentPage: getUsersCurrentPageSelector(state),
    isFetching: getUsersIsFetchingSelector(state),
    followingInProgress: getUsersFollowingInProgressSelector(state),
    filter: getUserFilterSelector(state),
  };
};

const connector = connect(mapStateToProps, {
  requestUsers,
  getCurrentPage,
  toggleFollowedStatus,
});

type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(UsersAPIComponent);
*/
