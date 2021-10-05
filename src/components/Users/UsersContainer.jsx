import React from 'react';
import { connect } from 'react-redux';
import {
  setUsers,
  toggleFollow,
  setCurrentPage,
  setTotalUsersCount,
  toggleFetching,
} from 'redux/users_reducer';
import Users from '.';
import Preloader from 'components/common/Preloader';
import { usersAPI } from 'api/api';

class UsersAPIComponent extends React.Component {
  componentDidMount() {
    if (this.props.users.length === 0) {
      this.props.toggleFetching();
      usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
        this.props.toggleFetching();
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
      });
    }
  }

  onPageChanged = (page) => {
    this.props.setCurrentPage(page);
    this.props.toggleFetching();
    usersAPI.getUsers(page, this.props.pageSize).then((data) => {
      this.props.toggleFetching();
      this.props.setUsers(data.items);
    });
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
          toggleFollow={this.props.toggleFollow}
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
  };
};

const UsersContainer = connect(mapStateToProps, {
  toggleFollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleFetching,
})(UsersAPIComponent);

export default UsersContainer;
