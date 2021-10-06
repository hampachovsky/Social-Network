import React from 'react';
import { connect } from 'react-redux';
import {
  toggleFollowingProgress,
  getUsers,
  getCurrentPage,
  toggleFollowedStatus,
} from 'redux/users_reducer';
import Users from '.';
import Preloader from 'components/common/Preloader';

class UsersAPIComponent extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
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
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

const UsersContainer = connect(mapStateToProps, {
  toggleFollowingProgress,
  getUsers,
  getCurrentPage,
  toggleFollowedStatus,
})(UsersAPIComponent);

export default UsersContainer;
