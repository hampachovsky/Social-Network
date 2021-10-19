import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { getUserProfile, getUserStatus, updateUserStatus } from 'redux/profileReducer';
import Profile from '.';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedId;
    }
    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
  }

  render() {
    return (
      <>
        <Profile
          updateUserStatus={this.props.updateUserStatus}
          profile={this.props.profile}
          status={this.props.status}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedId: state.auth.id,
    isAuth: state.auth.isAuth,
  };
};

export default compose(
  connect(mapStateToProps, { getUserProfile, updateUserStatus, getUserStatus }),
  withRouter
)(ProfileContainer);
