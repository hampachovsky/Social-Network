import Preloader from 'components/common/Preloader';
import React from 'react';
import { connect } from 'react-redux';
import { getCurrentPage, requestUsers, toggleFollowedStatus } from 'redux/usersReducer';
import Users from '.';
import {
  getUsersCurrentPageSelector,
  getUsersFollowingInProgressSelector,
  getUsersIsFetchingSelector,
  getUsersPageSizeSelector,
  getUsersSelector,
  getUsersTotalUsersCountSelector,
} from './../../redux/usersSelector';

class UsersAPIComponent extends React.Component {
  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (page) => {
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

const mapStateToProps = (state) => {
  return {
    users: getUsersSelector(state),
    pageSize: getUsersPageSizeSelector(state),
    totalUsersCount: getUsersTotalUsersCountSelector(state),
    currentPage: getUsersCurrentPageSelector(state),
    isFetching: getUsersIsFetchingSelector(state),
    followingInProgress: getUsersFollowingInProgressSelector(state),
  };
};

export default connect(mapStateToProps, {
  requestUsers,
  getCurrentPage,
  toggleFollowedStatus,
})(UsersAPIComponent);
