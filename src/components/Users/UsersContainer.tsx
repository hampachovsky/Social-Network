import Preloader from 'components/common/Preloader';
import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { AppStateType } from 'redux/reduxStore';
import { getCurrentPage, requestUsers, toggleFollowedStatus } from 'redux/usersReducer';
import Users from '.';
import {
  getUsersCurrentPageSelector,
  getUsersFollowingInProgressSelector,
  getUsersIsFetchingSelector,
  getUsersPageSizeSelector,
  getUsersSelector,
  getUsersTotalUsersCountSelector,
} from '../../redux/usersSelector';

const UsersAPIComponent: React.FC<PropsFromRedux> = ({
  pageSize,
  currentPage,
  requestUsers,
  getCurrentPage,
  isFetching,
  ...props
}) => {
  useEffect(() => {
    requestUsers(currentPage, pageSize);
  }, []);
  const onPageChanged = (page: number) => {
    getCurrentPage(page, pageSize);
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
      />
    </>
  );
};
/*
class UsersAPIComponent extends React.Component<PropsFromRedux> {
  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (page: number) => {
    this.props.getCurrentPage(page, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          followingInProgress={this.props.followingInProgress}
          toggleFollowedStatus={this.props.toggleFollowedStatus}
        />
      </>
    );
  }
}
*/
const mapStateToProps = (state: AppStateType) => {
  return {
    users: getUsersSelector(state),
    pageSize: getUsersPageSizeSelector(state),
    totalUsersCount: getUsersTotalUsersCountSelector(state),
    currentPage: getUsersCurrentPageSelector(state),
    isFetching: getUsersIsFetchingSelector(state),
    followingInProgress: getUsersFollowingInProgressSelector(state),
  };
};

const connector = connect(mapStateToProps, {
  requestUsers,
  getCurrentPage,
  toggleFollowedStatus,
});

type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(UsersAPIComponent);
